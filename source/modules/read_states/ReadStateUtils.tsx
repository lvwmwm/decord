// Module ID: 7105
// Function ID: 57143
// Name: getHasImportantUnread
// Dependencies: [4142, 4325, 4326, 566, 2]
// Exports: getHasImportantUnread, useHasImportantUnread

// Module 7105 (getHasImportantUnread)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import { UnreadSetting } from "ReadStateTypes";

const require = arg1;
const result = require("ReadStateTypes").fileFinishedImporting("modules/read_states/ReadStateUtils.tsx");

export const getHasImportantUnread = function getHasImportantUnread(channel) {
  let hasUnreadResult = _isNativeReflectConstruct.hasUnread(channel.id);
  if (hasUnreadResult) {
    hasUnreadResult = closure_3.resolveUnreadSetting(channel) === UnreadSetting.ALL_MESSAGES;
  }
  return hasUnreadResult;
};
export const useHasImportantUnread = function useHasImportantUnread(arg0) {
  const _require = arg0;
  const items = [_isNativeReflectConstruct, closure_3];
  return _require(566).useStateFromStores(items, () => {
    let hasUnreadResult = outer1_2.hasUnread(id.id);
    if (hasUnreadResult) {
      hasUnreadResult = outer1_3.resolveUnreadSetting(id) === outer1_4.ALL_MESSAGES;
    }
    return hasUnreadResult;
  });
};
