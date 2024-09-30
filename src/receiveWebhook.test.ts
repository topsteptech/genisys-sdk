import { describe, it, expect, vi } from "vitest"
import { receiveWebhook } from "./receiveWebhook"
import jwt from "jsonwebtoken"

describe("receiveWebhook", () => {
    it("should process the body", () => {
        const signed = { genisys: "complete" }
        // @ts-expect-error we are mocking the function
        vi.spyOn(jwt, "verify").mockReturnValueOnce({ signed })

        const body = JSON.stringify({
            signed,
        })
        const result = receiveWebhook(body)
        expect(result).toStrictEqual({ signed })
    })
})
