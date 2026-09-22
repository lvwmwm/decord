// Module ID: 12507
// Function ID: 12508
// Name: useEventsButtonProps
// Dependencies: [19, 4651, 4817, 4818, 504, 9792, 5138, 5650, 9828, 4603, 12508, 1896, 1114, 12512, 2]
// Exports: default

// Module 12507 (useEventsButtonProps)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import useGuildScheduledEventsDefault from "useGuildScheduledEvents" /* 9792 */;
import noop from "module_19" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 4651 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4817 */;

const require = globalThis.__r;

require = fn;
const ReadStateTypes = fn(4818).ReadStateTypes;
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
      let result = tmp(5650).openMemberVerificationModal(tmp3.id);
      const tmpResult = tmp(5650);
    } else {
      result = tmp(9828).openGuildEventListActionSheet(tmp3);
      const tmpResult2 = tmp(9828);
    }
    return result;
  }, items3);
  const handleLongPress = noop.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.openLazy(asyncRequireImpl(12508, dependencyMap.paths), "UpcomingEventsLongPress-" + user.id, { guildId: user.id });
  }, items4);
  if (arr4.length > 0) {
    const intl2 = tmp(1114).intl;
    const obj3 = { number: arr4.length };
    let name = intl2.formatToPlainString(tmp(1114).t.IBdqSu, obj3);
  } else {
    const intl = tmp(1114).intl;
    name = intl.string(tmp(1114).t.tlopTM);
  }
  let mode = tmp(12512).ChannelModes.DEFAULT;
  let tmp8 = hasUnread;
  if (hasUnread) {
    tmp8 = !eventsMuted;
  }
  if (tmp8) {
    mode = tmp(12512).ChannelModes.UNREAD_IMPORTANT;
  }
  return { hasUnread, mentionCount, mode, name, eventsMuted, handlePress, handleLongPress };
};
