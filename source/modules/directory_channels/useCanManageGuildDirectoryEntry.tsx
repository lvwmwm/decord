// Module ID: 10069
// Function ID: 77723
// Name: useCanManageGuildDirectoryEntry
// Dependencies: [1348, 1838, 3758, 653, 566, 2]
// Exports: default, useCanCreateOrAddGuildInDirectory

// Module 10069 (useCanManageGuildDirectoryEntry)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_4 from "_isNativeReflectConstruct";
import { Permissions } from "ME";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/directory_channels/useCanManageGuildDirectoryEntry.tsx");

export default function useCanManageGuildDirectoryEntry(arg0) {
  const _require = arg0;
  let obj = _require(566);
  const items = [_createForOfIteratorHelperLoose];
  const dependencyMap = obj.useStateFromStores(items, () => outer1_3.getGuild(closure_0.guildId));
  const items1 = [_isNativeReflectConstruct];
  _isNativeReflectConstruct = _require(566).useStateFromStores(items1, () => channel.getChannel(closure_0.channelId));
  const obj2 = _require(566);
  const items2 = [closure_4];
  let stateFromStores = _require(566).useStateFromStores(items2, () => outer1_4.can(outer1_5.ADMINISTRATOR, closure_1));
  const obj3 = _require(566);
  const items3 = [closure_4];
  const stateFromStores1 = _require(566).useStateFromStores(items3, () => outer1_4.can(outer1_5.MANAGE_MESSAGES, _isNativeReflectConstruct));
  obj = { isEntryAdmin: stateFromStores };
  let tmp3 = stateFromStores;
  if (!stateFromStores) {
    tmp3 = stateFromStores1;
  }
  obj.canEdit = tmp3;
  if (!stateFromStores) {
    stateFromStores = stateFromStores1;
  }
  obj.canRemove = stateFromStores;
  return obj;
};
export const useCanCreateOrAddGuildInDirectory = function useCanCreateOrAddGuildInDirectory(channel) {
  const _require = channel;
  const items = [closure_4];
  return _require(566).useStateFromStores(items, () => outer1_4.can(outer1_5.SEND_MESSAGES, closure_0));
};
