// Module ID: 8641
// Function ID: 8642
// Name: CrunchyrollConnectionConstants
// Dependencies: [8642, 2]

// Module 8641 (CrunchyrollConnectionConstants)
import OAuth2Scopes from "OAuth2Scopes" /* 8642 */;
import size from "module_2" /* 2 */;

const items = [OAuth2Scopes.OAuth2Scopes.ACTIVITIES_WRITE, OAuth2Scopes.OAuth2Scopes.EMAIL, OAuth2Scopes.OAuth2Scopes.IDENTIFY];
const result = size.fileFinishedImporting("modules/connections/CrunchyrollConnectionConstants.tsx");

export const CRUNCHYROLL_LINK_DEST_ORIGIN = "https://crunchyroll.com";
export const CRUNCHYROLL_CLIENT_ID = "981509069309354054";
export const CRUNCHYROLL_CLIENT_SCOPES = items;
