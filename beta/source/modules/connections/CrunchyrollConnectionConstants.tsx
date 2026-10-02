// Module ID: 7790
// Function ID: 7791
// Name: CrunchyrollConnectionConstants
// Dependencies: [7791, 2]

// Module 7790 (CrunchyrollConnectionConstants)
import OAuth2Scopes from "OAuth2Scopes" /* 7791 */;
import size from "module_2" /* 2 */;

const items = [OAuth2Scopes.OAuth2Scopes.ACTIVITIES_WRITE, OAuth2Scopes.OAuth2Scopes.EMAIL, OAuth2Scopes.OAuth2Scopes.IDENTIFY];
const result = size.fileFinishedImporting("modules/connections/CrunchyrollConnectionConstants.tsx");

export const CRUNCHYROLL_LINK_DEST_ORIGIN = "https://crunchyroll.com";
export const CRUNCHYROLL_CLIENT_ID = "981509069309354054";
export const CRUNCHYROLL_CLIENT_SCOPES = items;
