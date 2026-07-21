// Module ID: 14687
// Function ID: 110784
// Name: GUILD_ITEM_SIZE
// Dependencies: []
// Exports: useGuildWrapperSize

// Module 14687 (GUILD_ITEM_SIZE)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/guilds_bar/native/GuildsBarConstants.tsx");

export const GUILD_ITEM_SIZE = 48;
export const GUILD_LIST_WIDTH = 72;
export const GUILD_ITEM_EMPTY_SRC = { uri: "invalid" };
export const GUILD_ITEM_HIT_SLOP = { "Null": "BellZIcon", "Null": "png", "Null": 8, "Null": 40 };
export const GUILD_ITEM_BADGE_SIZE = 16;
export const useGuildWrapperSize = function useGuildWrapperSize() {
  const token = require(dependencyMap[0]).useToken(importDefault(dependencyMap[1]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  const obj = require(dependencyMap[0]);
  return token + 2 * require(dependencyMap[0]).useToken(importDefault(dependencyMap[1]).modules.mobile.GUILD_BAR_ITEM_MARGIN);
};
export const FastListRenderSections = { MESSAGES: 0, [0]: "MESSAGES", FAVORITES: 1, [1]: "FAVORITES", PENDING_JOIN_REQUESTS: 2, [2]: "PENDING_JOIN_REQUESTS", LURKING_GUILDS: 3, [3]: "LURKING_GUILDS", GUEST_GUILDS: 4, [4]: "GUEST_GUILDS", UNREAD_PRIVATE_CHANNELS: 5, [5]: "UNREAD_PRIVATE_CHANNELS", SEPARATOR: 6, [6]: "SEPARATOR", GUILDS: 7, [7]: "GUILDS" };
export const FOLDER_SPRING_PHYSICS = {};
export const TRANSITION_PHYSICS = { <string:1634937736>: false, <string:1733120470>: false, <string:1453996748>: false };
