// Module ID: 4294
// Function ID: 37581
// Name: ROBLOX_PROTOCOL_URL
// Dependencies: []
// Exports: ROBLOX_DEFERRED_WEB_URL

// Module 4294 (ROBLOX_PROTOCOL_URL)
class ROBLOX_PROTOCOL_URL {
  constructor(arg0) {
    return "roblox://placeId=" + global;
  }
}
class ROBLOX_WEB_URL {
  constructor(arg0) {
    return "https://www.roblox.com/games/start?placeId=" + global;
  }
}
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/roblox_subgame_detection/RobloxSubgameTypes.tsx");

export const ROBLOX_APPLICATION_ID = "363445589247131668";
export const ROBLOX_GAME_ID = "363445589247131668";
export const RobloxMetadataKeys = { "Bool(false)": true, "Bool(false)": true };
export const NativeRobloxSubgameKeys = { "Bool(true)": null, "Bool(true)": true };
export const ROBLOX_URL_SCHEME = "roblox";
export { ROBLOX_PROTOCOL_URL };
export { ROBLOX_WEB_URL };
export const ROBLOX_DEFERRED_WEB_URL = (closure_0) => "https://ro.blox.com/Ebh5?af_dp=" + encodeURIComponent(ROBLOX_PROTOCOL_URL(closure_0)) + "&af_web_dp=" + encodeURIComponent(ROBLOX_WEB_URL(closure_0));
