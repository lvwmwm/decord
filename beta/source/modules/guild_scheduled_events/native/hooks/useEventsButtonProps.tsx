// Module ID: 12558
// Function ID: 12559
// Name: useEventsButtonProps
// Dependencies: [19, 4805, 4971, 4972, 504, 9778, 5302, 5820, 9792, 4757, 12559, 1984, 1119, 12563, 2]
// Exports: default

// Module 12558 (useEventsButtonProps)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4757 */;
import useGuildScheduledEventsDefault from "useGuildScheduledEvents" /* 9778 */;
import noop from "module_19" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 4805 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4971 */;

const require = globalThis.__r;

require = fn;
const ReadStateTypes = fn(4972).ReadStateTypes;
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
      let result = tmp(5820).openMemberVerificationModal(tmp3.id);
      const tmpResult = tmp(5820);
    } else {
      result = tmp(9792).openGuildEventListActionSheet(tmp3);
      const tmpResult2 = tmp(9792);
    }
    return result;
  }, items3);
  const handleLongPress = noop.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.openLazy(asyncRequireImpl(12559, dependencyMap.paths), "UpcomingEventsLongPress-" + user.id, { guildId: user.id });
  }, items4);
  if (arr4.length > 0) {
    const intl2 = tmp(1119).intl;
    const obj3 = { number: arr4.length };
    let name = intl2.formatToPlainString(tmp(1119).t.IBdqSu, obj3);
  } else {
    const intl = tmp(1119).intl;
    name = intl.string(tmp(1119).t.tlopTM);
  }
  let mode = tmp(12563).ChannelModes.DEFAULT;
  let tmp8 = hasUnread;
  if (hasUnread) {
    tmp8 = !eventsMuted;
  }
  if (tmp8) {
    mode = tmp(12563).ChannelModes.UNREAD_IMPORTANT;
  }
  return { hasUnread, mentionCount, mode, name, eventsMuted, handlePress, handleLongPress };
};
