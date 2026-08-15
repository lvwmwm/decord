// Module ID: 9047
// Function ID: 9048
// Name: CRUNCHYROLL_LINK_DEST_ORIGIN
// Dependencies: [4375, 2]

// Module 9047 (CRUNCHYROLL_LINK_DEST_ORIGIN)
const items = [require("set").OAuth2Scopes.ACTIVITIES_WRITE, require("set").OAuth2Scopes.EMAIL, require("set").OAuth2Scopes.IDENTIFY];
const result = require("set").fileFinishedImporting("modules/connections/CrunchyrollConnectionConstants.tsx");

export const CRUNCHYROLL_LINK_DEST_ORIGIN = "https://crunchyroll.com";
export const CRUNCHYROLL_CLIENT_ID = "981509069309354054";
export const CRUNCHYROLL_CLIENT_SCOPES = items;
