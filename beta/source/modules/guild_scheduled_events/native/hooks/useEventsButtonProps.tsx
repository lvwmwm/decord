// Module ID: 12657
// Function ID: 12658
// Name: useEventsButtonProps
// Dependencies: [19, 4803, 4969, 4970, 504, 9782, 5300, 5818, 9815, 4755, 12658, 1980, 1115, 12662, 2]
// Exports: default

// Module 12657 (useEventsButtonProps)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4755 */;
import useGuildScheduledEventsDefault from "useGuildScheduledEvents" /* 9782 */;
import noop from "module_19" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 4803 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4969 */;

const require = globalThis.__r;

require = fn;
const ReadStateTypes = fn(4970).ReadStateTypes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/hooks/useEventsButtonProps.tsx");

export default function useEventsButtonProps(id) {
  _require = id;
  const items = [ReadStateStore];
  const items1 = [id.id];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => ({ hasUnread: ReadStateStore.hasUnread(user.id, ReadStateTypes.GUILD_EVENT), mentionCount: ReadStateStore.getMentionCount(user.id, ReadStateTypes.GUILD_EVENT) }), items1);
  ({ hasUnread, mentionCount } = stateFromStoresObject);
  let obj = require("initialize");
  const items2 = [UserGuildSettingsStore];
  const eventsMuted = require("initialize").useStateFromStores(items2, () => UserGuildSettingsStore.isMuteScheduledEventsEnabled(user.id));
  const arr4 = useGuildScheduledEventsDefault(id.id);
  const items3 = [id];
  const items4 = [id.id];
  const handlePress = noop.useCallback(() => {
    if (obj.shouldShowMembershipVerificationGate(user.id)) {
      let result = tmp(5818).openMemberVerificationModal(tmp3.id);
      const tmpResult = tmp(5818);
    } else {
      result = tmp(9815).openGuildEventListActionSheet(tmp3);
      const tmpResult2 = tmp(9815);
    }
    return result;
  }, items3);
  const handleLongPress = noop.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.openLazy(asyncRequireImpl(12658, dependencyMap.paths), "UpcomingEventsLongPress-" + user.id, { guildId: user.id });
  }, items4);
  if (arr4.length > 0) {
    const intl2 = tmp(1115).intl;
    const obj3 = { number: arr4.length };
    let name = intl2.formatToPlainString(tmp(1115).t.IBdqSu, obj3);
  } else {
    const intl = tmp(1115).intl;
    name = intl.string(tmp(1115).t.tlopTM);
  }
  let mode = tmp(12662).ChannelModes.DEFAULT;
  let tmp8 = hasUnread;
  if (hasUnread) {
    tmp8 = !eventsMuted;
  }
  if (tmp8) {
    mode = tmp(12662).ChannelModes.UNREAD_IMPORTANT;
  }
  return { hasUnread, mentionCount, mode, name, eventsMuted, handlePress, handleLongPress };
};
