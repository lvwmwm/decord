// Module ID: 8424
// Function ID: 67213
// Name: SidebarVisibilityMethodStore
// Dependencies: [621, 2]
// Exports: getVisibleChannelIdsMethod, getVisibleGuildIdsMethod, setGetVisibleChannelIds, setGetVisibleGuildIds

// Module 8424 (SidebarVisibilityMethodStore)
import keys from "keys";

let obj = keys.create(() => ({}));
const result = require("set").fileFinishedImporting("modules/guild_sidebar/SidebarVisibilityMethodStore.tsx");

export const SidebarVisibilityMethodStore = obj;
export const setGetVisibleGuildIds = function setGetVisibleGuildIds(getVisibleGuildIds) {
  const obj = { getVisibleGuildIds };
  obj.setState(obj);
};
export const getVisibleGuildIdsMethod = function getVisibleGuildIdsMethod() {
  return obj.getState().getVisibleGuildIds;
};
export const setGetVisibleChannelIds = function setGetVisibleChannelIds(getVisibleChannelIds) {
  const obj = { getVisibleChannelIds };
  obj.setState(obj);
};
export const getVisibleChannelIdsMethod = function getVisibleChannelIdsMethod() {
  return obj.getState().getVisibleChannelIds;
};
