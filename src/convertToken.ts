import { genisysFetch } from "./util/JSONFetch"
import { LoginFullReqBody, LoginFullResBody } from "./types"

const getUrl = (override?: string) => {
    if (override) {
        return override as string
    }
    return "https://api.genisysplugins.com/gateway"
}
interface Opts {
    /**
     * set to true to use dev, or specify a string to use
     */
    override?: string
    debug?: boolean
}
export const convertToken = (token: string, { override, debug }: Opts = {}) =>
    genisysFetch<LoginFullResBody>(`${getUrl(override)}/login`, {
        method: "POST",
        body: {
            token,
        } as LoginFullReqBody,
        debug,
    })
