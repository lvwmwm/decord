// Module ID: 8794
// Function ID: 8795
// Name: CrunchyrollConnectionConstants
// Dependencies: [8795, 2]

// Module 8794 (CrunchyrollConnectionConstants)
import OAuth2Scopes from "OAuth2Scopes" /* 8795 */;
import size from "module_2" /* 2 */;

const items = [OAuth2Scopes.OAuth2Scopes.ACTIVITIES_WRITE, OAuth2Scopes.OAuth2Scopes.EMAIL, OAuth2Scopes.OAuth2Scopes.IDENTIFY];
const result = size.fileFinishedImporting("modules/connections/CrunchyrollConnectionConstants.tsx");

export const CRUNCHYROLL_LINK_DEST_ORIGIN = "https://crunchyroll.com";
export const CRUNCHYROLL_CLIENT_ID = "981509069309354054";
export const CRUNCHYROLL_CLIENT_SCOPES = items;
