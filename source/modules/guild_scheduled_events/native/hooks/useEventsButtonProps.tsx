// Module ID: 11419
// Function ID: 88798
// Name: useEventsButtonProps
// Dependencies: [31, 4142, 4325, 4326, 566, 8455, 4619, 9145, 8365, 4098, 11420, 1934, 1212, 11424, 2]
// Exports: default

// Module 11419 (useEventsButtonProps)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { ReadStateTypes } from "ReadStateTypes";

const require = arg1;
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_scheduled_events/native/hooks/useEventsButtonProps.tsx");

export default function useEventsButtonProps(id) {
  let hasUnread;
  let mentionCount;
  const _require = id;
  let obj = _require(566);
  const items = [_isNativeReflectConstruct];
  const items1 = [id.id];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ hasUnread: outer1_4.hasUnread(id.id, outer1_6.GUILD_EVENT), mentionCount: outer1_4.getMentionCount(id.id, outer1_6.GUILD_EVENT) }), items1);
  ({ hasUnread, mentionCount } = stateFromStoresObject);
  const items2 = [closure_5];
  const stateFromStores = _require(566).useStateFromStores(items2, () => outer1_5.isMuteScheduledEventsEnabled(id.id));
  const arr4 = importDefault(8455)(id.id);
  const items3 = [id];
  const items4 = [id.id];
  const callback = React.useCallback(() => {
    if (obj.shouldShowMembershipVerificationGate(id.id)) {
      let tmpResult = tmp(tmp2[7]);
      let result = tmpResult.openMemberVerificationModal(id.id);
    } else {
      tmpResult = tmp(tmp2[8]);
      result = tmpResult.openGuildEventListActionSheet(id);
    }
    return result;
  }, items3);
  const callback1 = React.useCallback(() => {
    let obj = outer1_1(outer1_2[9]);
    obj = { guildId: id.id };
    obj.openLazy(id(outer1_2[11])(outer1_2[10], outer1_2.paths), "UpcomingEventsLongPress-" + id.id, obj);
  }, items4);
  if (arr4.length > 0) {
    const intl2 = _require(1212).intl;
    obj = { number: arr4.length };
    let formatToPlainStringResult = intl2.formatToPlainString(_require(1212).t.IBdqSu, obj);
  } else {
    const intl = _require(1212).intl;
    formatToPlainStringResult = intl.string(_require(1212).t.tlopTM);
  }
  let UNREAD_IMPORTANT = _require(11424).ChannelModes.DEFAULT;
  let tmp10 = hasUnread;
  if (hasUnread) {
    tmp10 = !stateFromStores;
  }
  if (tmp10) {
    UNREAD_IMPORTANT = _require(11424).ChannelModes.UNREAD_IMPORTANT;
  }
  obj = { hasUnread, mentionCount, mode: UNREAD_IMPORTANT, name: formatToPlainStringResult, eventsMuted: stateFromStores, handlePress: callback, handleLongPress: callback1 };
  return obj;
};
