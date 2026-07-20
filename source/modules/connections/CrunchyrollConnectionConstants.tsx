// Module ID: 8297
// Function ID: 65712
// Name: CRUNCHYROLL_LINK_DEST_ORIGIN
// Dependencies: []

// Module 8297 (CRUNCHYROLL_LINK_DEST_ORIGIN)
const items = [require(dependencyMap[0]).OAuth2Scopes.ACTIVITIES_WRITE, require(dependencyMap[0]).OAuth2Scopes.EMAIL, require(dependencyMap[0]).OAuth2Scopes.IDENTIFY];
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/connections/CrunchyrollConnectionConstants.tsx");

export const CRUNCHYROLL_LINK_DEST_ORIGIN = "https://crunchyroll.com";
export const CRUNCHYROLL_CLIENT_ID = "981509069309354054";
export const CRUNCHYROLL_CLIENT_SCOPES = items;
