// Module ID: 9084
// Function ID: 9085
// Name: CRUNCHYROLL_LINK_DEST_ORIGIN
// Dependencies: [4379, 2]

// Module 9084 (CRUNCHYROLL_LINK_DEST_ORIGIN)
import set from "set" /* 2 */;
import set2 from "set" /* 4379 */;

const items = [set2.OAuth2Scopes.ACTIVITIES_WRITE, set2.OAuth2Scopes.EMAIL, set2.OAuth2Scopes.IDENTIFY];
const result = set.fileFinishedImporting("modules/connections/CrunchyrollConnectionConstants.tsx");

export const CRUNCHYROLL_LINK_DEST_ORIGIN = "https://crunchyroll.com";
export const CRUNCHYROLL_CLIENT_ID = "981509069309354054";
export const CRUNCHYROLL_CLIENT_SCOPES = items;
