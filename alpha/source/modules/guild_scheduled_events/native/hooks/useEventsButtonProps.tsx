// Module ID: 14150
// Function ID: 14151
// Name: useEventsButtonProps
// Dependencies: [19, 6977, 6910, 6911, 504, 9235, 8773, 7079, 9130, 5382, 14151, 2123, 1113, 14155, 2]
// Exports: default

// Module 14150 (useEventsButtonProps)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import ReadStateConstants from "ReadStateConstants" /* 6911 */;
import MemberVerificationModalActionCreators from "MemberVerificationModalActionCreators" /* 7079 */;
import useShowMemberVerificationGate from "useShowMemberVerificationGate" /* 8773 */;
import guild_scheduled_events_GuildScheduledEventModalActionCreators from "guild_scheduled_events/GuildScheduledEventModalActionCreators" /* 9130 */;
import useGuildScheduledEventsDefault from "useGuildScheduledEvents" /* 9235 */;
import react from "react" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 6977 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6910 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const ReadStateTypes = ReadStateConstants.ReadStateTypes;
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/hooks/useEventsButtonProps.tsx");

export default function useEventsButtonProps(id) {
  let hasUnread;
  let mentionCount;
  let name;
  let user;
  _require = id;
  const tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("get initialized");
  const items = [ReadStateStore];
  const items1 = [id.id];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { hasUnread: ReadStateStore.hasUnread(user.id, ReadStateTypes.GUILD_EVENT), mentionCount: ReadStateStore.getMentionCount(user.id, ReadStateTypes.GUILD_EVENT) };
    return obj;
  }, items1);
  ({ hasUnread, mentionCount } = stateFromStoresObject);
  const items2 = [UserGuildSettingsStore];
  const obj2 = require("get initialized");
  const eventsMuted = obj2.useStateFromStores(items2, () => UserGuildSettingsStore.isMuteScheduledEventsEnabled(user.id));
  const arr4 = useGuildScheduledEventsDefault(id.id);
  const items3 = [id];
  const items4 = [id.id];
  const handlePress = react.useCallback(() => {
    let result;
    const obj = useShowMemberVerificationGate;
    if (obj.shouldShowMembershipVerificationGate(user.id)) {
      const tmpResult = MemberVerificationModalActionCreators;
      result = tmpResult.openMemberVerificationModal(tmp3.id);
    } else {
      const tmpResult2 = guild_scheduled_events_GuildScheduledEventModalActionCreators;
      result = tmpResult2.openGuildEventListActionSheet(tmp3);
    }
    return result;
  }, items3);
  const handleLongPress = react.useCallback(() => {
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    ActionSheetActionCreatorsDefault;
    const obj = { guildId: user.id };
    const tmp2 = asyncRequire(14151, dependencyMap.paths);
    openLazy(tmp2, "UpcomingEventsLongPress-" + user.id, obj);
  }, items4);
  if (arr4.length > 0) {
    const intl2 = tmp(1113).intl;
    const obj3 = { number: arr4.length };
    name = intl2.formatToPlainString(tmp(1113).t.IBdqSu, obj3);
  } else {
    const intl = tmp(1113).intl;
    name = intl.string(tmp(1113).t.tlopTM);
  }
  let mode = tmp(14155).ChannelModes.DEFAULT;
  const tmp8 = hasUnread && !eventsMuted;
  if (tmp8) {
    mode = tmp(14155).ChannelModes.UNREAD_IMPORTANT;
  }
  return { hasUnread, mentionCount, mode, name, eventsMuted, handlePress, handleLongPress };
};
