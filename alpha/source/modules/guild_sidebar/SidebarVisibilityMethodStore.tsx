// Module ID: 10067
// Function ID: 10068
// Name: SidebarVisibilityMethodStore
// Dependencies: [560, 2]
// Exports: getVisibleChannelIdsMethod, getVisibleGuildIdsMethod, setGetVisibleChannelIds, setGetVisibleGuildIds

// Module 10067 (SidebarVisibilityMethodStore)
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

const SidebarVisibilityMethodStore = module_560.create(() => ({}));
const result = size.fileFinishedImporting("modules/guild_sidebar/SidebarVisibilityMethodStore.tsx");

export { SidebarVisibilityMethodStore };
export function setGetVisibleGuildIds(getVisibleGuildIds) {
  const obj = { getVisibleGuildIds };
  obj.setState(obj);
}
export function getVisibleGuildIdsMethod() {
  return obj.getState().getVisibleGuildIds;
}
export function setGetVisibleChannelIds(getVisibleChannelIds) {
  const obj = { getVisibleChannelIds };
  obj.setState(obj);
}
export function getVisibleChannelIdsMethod() {
  return obj.getState().getVisibleChannelIds;
}
