// Module ID: 12632
// Function ID: 12633
// Name: useEventsButtonProps
// Dependencies: [19, 4772, 4938, 4939, 504, 9756, 5270, 5788, 9789, 4724, 12633, 1980, 1115, 12637, 2]
// Exports: default

// Module 12632 (useEventsButtonProps)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4724 */;
import useGuildScheduledEventsDefault from "useGuildScheduledEvents" /* 9756 */;
import noop from "module_19" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 4772 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4938 */;

const require = globalThis.__r;

require = fn;
const ReadStateTypes = fn(4939).ReadStateTypes;
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
      let result = tmp(5788).openMemberVerificationModal(tmp3.id);
      const tmpResult = tmp(5788);
    } else {
      result = tmp(9789).openGuildEventListActionSheet(tmp3);
      const tmpResult2 = tmp(9789);
    }
    return result;
  }, items3);
  const handleLongPress = noop.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.openLazy(asyncRequireImpl(12633, dependencyMap.paths), "UpcomingEventsLongPress-" + user.id, { guildId: user.id });
  }, items4);
  if (arr4.length > 0) {
    const intl2 = tmp(1115).intl;
    const obj3 = { number: arr4.length };
    let name = intl2.formatToPlainString(tmp(1115).t.IBdqSu, obj3);
  } else {
    const intl = tmp(1115).intl;
    name = intl.string(tmp(1115).t.tlopTM);
  }
  let mode = tmp(12637).ChannelModes.DEFAULT;
  let tmp8 = hasUnread;
  if (hasUnread) {
    tmp8 = !eventsMuted;
  }
  if (tmp8) {
    mode = tmp(12637).ChannelModes.UNREAD_IMPORTANT;
  }
  return { hasUnread, mentionCount, mode, name, eventsMuted, handlePress, handleLongPress };
};
