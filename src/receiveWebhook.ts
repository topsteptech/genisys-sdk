import jwt from "jsonwebtoken"
import { Subscription } from "./types"

const PUB_KEY = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqmD8hsPSjUEZzKpY5MgX
id5zGUiwqQqvHvx3E5xXwtvvw6QGFQptleA7ywHvF9KobnpzN9mKav0PLqPcQpts
+8R146dyj1Vmg6coSf+0g4qteqb+DUtNcHrh18C2k0MQJ3gm6VMUz5fZt4tgT4+4
x14neNd8EmjGYlfSSGHXNOPeIFBYtuYG1VNSLzDggmiLx1at/mzHAg0FCrMOFGcd
xlr9IBooJ78GXM6GT7EQOFQROyYb8em7pJNstkBJ0CBEuRpN5EE/pIuACB/50S6o
QHopX3plFl6aoBv1sJtfgQ41FBWqK4ytJy533MqZQOEuT7pQurBn6334+h4ryPJn
bwIDAQAB
-----END PUBLIC KEY-----`

export interface GenisysWebhookRequest<payload, config> {
    subscription: Subscription<config>
    payload: payload
}

/**
 *
 * @param body the body sent from genisys. This should be a stringified JSON object with a `signed` key
 * @param override a public key to use instead of the default
 */
export const receiveWebhook = <payload = {}, config = {}>(
    body: string,
    override?: string
): GenisysWebhookRequest<payload, config> => {
    const { signed } = JSON.parse(body)
    if (override) {
        override = override.replace(/\\n/g, "\n")
    }
    const keyFromPemFile = override ?? PUB_KEY
    return jwt.verify(signed, keyFromPemFile) as GenisysWebhookRequest<payload, config>
}
