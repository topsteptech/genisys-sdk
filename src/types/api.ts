import { Subscription } from "./Subscription"

export interface LoginFullReqBody {
    token: string
}
export interface LoginFullResBody {
    signed: string
    subscription: Subscription
}

export interface LoginStartReqBody {
    username: string
    subscriptionId: string
    ticket?: string
}

export type LoginStartResBody = string

export interface AuthErrorRes {
    Error: string
    AUTH_ERROR: string
}
