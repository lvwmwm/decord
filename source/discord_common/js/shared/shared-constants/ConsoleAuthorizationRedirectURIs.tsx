// Module ID: 10499
// Function ID: 10500
// Name: set
// Dependencies: [2]

// Module 10499 (set)
import set from "set";

const obj = { ALL: null };
let set = new Set(["https://discord.com/connections/playstation-stg/link", "https://discord.com/connections/playstation/link"]);
obj[0] = set;
const result = set.fileFinishedImporting("../discord_common/js/shared/shared-constants/ConsoleAuthorizationRedirectURIs.tsx");

export const ConsoleAuthorizationRedirectURIs = { PLAYSTATION: "https://discord.com/connections/playstation/link", PLAYSTATION_STAGING: "https://discord.com/connections/playstation-stg/link" };
export const ConsoleAuthorizationRedirectURIsSets = obj;
