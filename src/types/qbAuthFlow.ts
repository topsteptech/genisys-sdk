export enum QBAuthFlowError {
    oneTimeTicketFailure,
    ticketConversionFailure,
    badSetup,
    wrongPlugin,
    pluginDisabled,
    badReferer,
}

export const ErrorToMessage = {
    [QBAuthFlowError.oneTimeTicketFailure]: "Could not get a temporary ticket from Quickbase to access this plugin",
    [QBAuthFlowError.ticketConversionFailure]: "Could not get ticket from Quickbase to use this plugin",
    [QBAuthFlowError.badSetup]: "The Quickbase Page for this plugin is incorrectly set up",
    [QBAuthFlowError.wrongPlugin]: "This plugin is unavailable, are you sure this is correct?",
    [QBAuthFlowError.pluginDisabled]: "This plugin is currently disabled",
    [QBAuthFlowError.badReferer]: "The plugin must be accessed from the Quickbase app it is set up for",
}
