// Module ID: 11409
// Function ID: 88748
// Name: useEventsButtonProps
// Dependencies: []
// Exports: default

// Module 11409 (useEventsButtonProps)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const ReadStateTypes = arg1(dependencyMap[3]).ReadStateTypes;
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/guild_scheduled_events/native/hooks/useEventsButtonProps.tsx");

export default function useEventsButtonProps(id) {
  let hasUnread;
  let mentionCount;
  const arg1 = id;
  let obj = arg1(dependencyMap[4]);
  const items = [closure_4];
  const items1 = [id.id];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ hasUnread: closure_4.hasUnread(arg0.id, constants.GUILD_EVENT), mentionCount: closure_4.getMentionCount(arg0.id, constants.GUILD_EVENT) }), items1);
  ({ hasUnread, mentionCount } = stateFromStoresObject);
  const items2 = [closure_5];
  const stateFromStores = arg1(dependencyMap[4]).useStateFromStores(items2, () => muteScheduledEventsEnabled.isMuteScheduledEventsEnabled(arg0.id));
  const arr4 = importDefault(dependencyMap[5])(id.id);
  const items3 = [id];
  const items4 = [id.id];
  const callback = React.useCallback(() => {
    if (obj.shouldShowMembershipVerificationGate(arg0.id)) {
      let tmpResult = tmp(tmp2[7]);
      let result = tmpResult.openMemberVerificationModal(arg0.id);
    } else {
      tmpResult = tmp(tmp2[8]);
      result = tmpResult.openGuildEventListActionSheet(arg0);
    }
    return result;
  }, items3);
  const callback1 = React.useCallback(() => {
    let obj = callback(paths[9]);
    obj = { guildId: arg0.id };
    obj.openLazy(arg0(paths[11])(paths[10], paths.paths), "UpcomingEventsLongPress-" + arg0.id, obj);
  }, items4);
  if (arr4.length > 0) {
    const intl2 = arg1(dependencyMap[12]).intl;
    obj = { number: arr4.length };
    let formatToPlainStringResult = intl2.formatToPlainString(arg1(dependencyMap[12]).t.IBdqSu, obj);
  } else {
    const intl = arg1(dependencyMap[12]).intl;
    formatToPlainStringResult = intl.string(arg1(dependencyMap[12]).t.tlopTM);
  }
  let UNREAD_IMPORTANT = arg1(dependencyMap[13]).ChannelModes.DEFAULT;
  let tmp10 = hasUnread;
  if (hasUnread) {
    tmp10 = !stateFromStores;
  }
  if (tmp10) {
    UNREAD_IMPORTANT = arg1(dependencyMap[13]).ChannelModes.UNREAD_IMPORTANT;
  }
  obj = { hasUnread, mentionCount, mode: UNREAD_IMPORTANT, name: formatToPlainStringResult, eventsMuted: stateFromStores, handlePress: callback, handleLongPress: callback1 };
  return obj;
};
