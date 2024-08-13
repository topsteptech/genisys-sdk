import { AuthErrorRes } from "../types"

export const JSONFetch = (url: string, opts?: any) =>
    fetch(url, {
        ...(opts ?? {}),
        headers: {
            ...(opts?.headers ?? {}),
            contentType: "application/json",
        },
        ...(opts?.body ? { body: JSON.stringify(opts.body) } : {}),
    })

type FetchOverride = Omit<RequestInit, "body"> & { debug?: boolean; body: any }

export const genisysFetch = async <T>(url: string, opts?: FetchOverride) => {
    const res = await JSONFetch(url, opts)
    let body
    try {
        body = await res.json()
    } catch (err) {
        throw err
    }
    if (!res.ok) {
        if (opts?.debug) {
            console.error(res.status, (body as AuthErrorRes).AUTH_ERROR)
        }
        throw new Error(body.Error)
    }
    return body as T
}
