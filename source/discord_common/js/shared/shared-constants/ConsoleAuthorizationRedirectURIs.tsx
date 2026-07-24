// Module ID: 9019
// Function ID: 71008
// Name: set
// Dependencies: [2]

// Module 9019 (set)
import set from "set";

const obj = {};
let set = new Set(["https://discord.com/connections/playstation-stg/link", "https://discord.com/connections/playstation/link"]);
obj.ALL = set;
const result = set.fileFinishedImporting("../discord_common/js/shared/shared-constants/ConsoleAuthorizationRedirectURIs.tsx");

export const ConsoleAuthorizationRedirectURIs = { PLAYSTATION: "https://discord.com/connections/playstation/link", PLAYSTATION_STAGING: "https://discord.com/connections/playstation-stg/link" };
export const ConsoleAuthorizationRedirectURIsSets = obj;
