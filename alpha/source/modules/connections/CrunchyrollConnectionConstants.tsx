// Module ID: 8785
// Function ID: 8786
// Name: CrunchyrollConnectionConstants
// Dependencies: [8786, 2]

// Module 8785 (CrunchyrollConnectionConstants)
import OAuth2Scopes from "OAuth2Scopes" /* 8786 */;
import size from "module_2" /* 2 */;

const items = [OAuth2Scopes.OAuth2Scopes.ACTIVITIES_WRITE, OAuth2Scopes.OAuth2Scopes.EMAIL, OAuth2Scopes.OAuth2Scopes.IDENTIFY];
const result = size.fileFinishedImporting("modules/connections/CrunchyrollConnectionConstants.tsx");

export const CRUNCHYROLL_LINK_DEST_ORIGIN = "https://crunchyroll.com";
export const CRUNCHYROLL_CLIENT_ID = "981509069309354054";
export const CRUNCHYROLL_CLIENT_SCOPES = items;
