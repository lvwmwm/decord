// Module ID: 2027
// Function ID: 2028
// Name: UserApplicationIdentityConstants
// Dependencies: [2]
// Exports: getMigratedApplicationIdentityConnectionsScreenApplications

// Module 2027 (UserApplicationIdentityConstants)
import size from "module_2" /* 2 */;

let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
const obj = { RIOT_GAMES: "1443033465766281327", LEAGUE_OF_LEGENDS: "1443349464290168976", VALORANT: "1443350165678198935", BATTLENET: "1356665549089800303", WORLD_OF_WARCRAFT: "1384671873593512078" };
const obj2 = { [obj.RIOT_GAMES]: obj3, [obj.LEAGUE_OF_LEGENDS]: obj4, [obj.VALORANT]: obj5, [obj.BATTLENET]: obj6, [obj.WORLD_OF_WARCRAFT]: obj7 };
const items = [, ];
obj3 = { applicationId: obj.RIOT_GAMES, connectionEntrypointUrlOverride: "https://aes.sgp.pvp.net/providers/discord/link/v1?origin=Discord" };
obj4 = { applicationId: obj.LEAGUE_OF_LEGENDS, connectionEntrypointUrlOverride: "https://aes.sgp.pvp.net/providers/discord/link/v1?origin=Discord" };
obj5 = { applicationId: obj.VALORANT, connectionEntrypointUrlOverride: "https://aes.sgp.pvp.net/providers/discord/link/v1?origin=Discord" };
obj6 = { applicationId: obj.BATTLENET };
obj7 = { applicationId: obj.WORLD_OF_WARCRAFT, connectionEntrypointUrlOverride: "https://account.battle.net/connections/discord" };
items[0] = obj2[obj.RIOT_GAMES];
items[1] = obj2[obj.BATTLENET];
const items1 = [obj2[obj.RIOT_GAMES], obj2[obj.BATTLENET]];
const obj8 = { [obj.WORLD_OF_WARCRAFT]: obj2[obj.WORLD_OF_WARCRAFT], [obj.RIOT_GAMES]: obj2[obj.RIOT_GAMES], [obj.LEAGUE_OF_LEGENDS]: obj2[obj.LEAGUE_OF_LEGENDS], [obj.VALORANT]: obj2[obj.VALORANT] };
const result = size.fileFinishedImporting("modules/user_application_identity/UserApplicationIdentityConstants.tsx");

export const ApplicationIdentityAppIds = obj;
export const APPLICATION_IDENTITY_CONNECTIONS_ALLOWED_APPLICATIONS = items;
export const APPLICATION_IDENTITY_CONNECTIONS_INCENTIVIZED_APPLICATIONS = items1;
export const APPLICATION_IDENTITY_CONNECTIONS_WITH_OVERRIDE_ENTRYPOINT_URLS = obj8;
export function getMigratedApplicationIdentityConnectionsScreenApplications() {
  return items.map((applicationId) => applicationId.applicationId);
}
