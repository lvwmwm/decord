// Module ID: 9411
// Function ID: 9412
// Name: ConsoleAuthorizationRedirectURIs
// Dependencies: [2]

// Module 9411 (ConsoleAuthorizationRedirectURIs)
import size from "module_2" /* 2 */;

const obj = { ALL: new Set(["https://discord.com/connections/playstation-stg/link", "https://discord.com/connections/playstation/link"]) };
const result = size.fileFinishedImporting("../discord_common/js/shared/shared-constants/ConsoleAuthorizationRedirectURIs.tsx");

export const ConsoleAuthorizationRedirectURIs = { PLAYSTATION: "https://discord.com/connections/playstation/link", PLAYSTATION_STAGING: "https://discord.com/connections/playstation-stg/link" };
export const ConsoleAuthorizationRedirectURIsSets = obj;
