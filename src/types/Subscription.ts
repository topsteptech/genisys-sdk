export interface SubscriptionTemplate {
    /**
     * in case tenant wants more for one qb table
     * this is the key
     */
    id: string
    /**
     * record id
     */
    qbId: string
    /**
     * plugin id
     */
    plugin: string
    /**
     * qb realm of tenant
     */
    tenant: string
    /**
     * qb table
     */
    instance: string
    /**
     * false if this instance is not available
     */
    isEnabled: boolean
    /**
     * for Admins to manage
     */
    notes?: string

    /**
     * a human friendly name for the tenant who is using this, usually the company
     */
    tenantName: string
    /**
     * set to `qb` if the app should validate a user's access against a Quickbase record (checks if user can read that record)
     */
    externalAuth?: "qb"
    /**
     * when the subscription was created (ISO)
     */
    createdAt: string
    /**
     * edits made (ISO)
     */
    updatedAt: string
    /**
     * where it is hosted
     */
    redirectUrl?: string
}

export interface Subscription<T = {}> extends SubscriptionTemplate {
    config: T
}
