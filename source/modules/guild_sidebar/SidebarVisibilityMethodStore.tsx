// Module ID: 9438
// Function ID: 73572
// Name: SidebarVisibilityMethodStore
// Dependencies: []
// Exports: getVisibleChannelIdsMethod, getVisibleGuildIdsMethod, setGetVisibleChannelIds, setGetVisibleGuildIds

// Module 9438 (SidebarVisibilityMethodStore)
const _module = require(dependencyMap[0]);
const obj = _module.create(() => ({}));
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/guild_sidebar/SidebarVisibilityMethodStore.tsx");

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
