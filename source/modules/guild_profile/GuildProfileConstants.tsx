// Module ID: 8571
// Function ID: 68107
// Name: BannerPalettePresets
// Dependencies: []

// Module 8571 (BannerPalettePresets)
let obj = { BOULDER: "Boulder", CASCADE: "Cascade", THUNDER: "Thunder", SOUL: "Soul", MARSH: "Marsh", VOLCANO: "Volcano", EARTH: "Earth", ZEPHYR: "Zephyr", RISING: "Rising" };
obj = { name: obj.SOUL, color: "#ff1c90" };
const items = [obj, , , , , , , , ];
obj = { name: obj.VOLCANO, color: "#e81d1e" };
items[1] = obj;
items[2] = { name: obj.MARSH, color: "#e86e1d" };
items[3] = { name: obj.THUNDER, color: "#e8c02f" };
items[4] = { name: obj.RISING, color: "#71368a" };
items[5] = { name: obj.ZEPHYR, color: "#029FFC" };
items[6] = { name: obj.CASCADE, color: "#4fe2ca" };
items[7] = { name: obj.EARTH, color: "#406601" };
items[8] = { name: obj.BOULDER, color: "#272727" };
const items1 = [];
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/guild_profile/GuildProfileConstants.tsx");

export const BannerPalettePresets = obj;
export const BANNER_PALETTE_PRESETS = items;
export const INVALID_ACCESS_ERROR_CODE = 50001;
export const HOISTED_SEARCH_APPLICATION_IDS = items1;
export const HOISTED_SEARCH_APPLICATION_IDS_BY_PRIORITY = new Map(items1.map((arg0, arg1, arg2) => {
  const items = [arg0, arg2.length - arg1];
  return items;
}));
