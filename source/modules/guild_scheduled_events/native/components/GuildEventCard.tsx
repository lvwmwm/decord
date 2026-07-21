// Module ID: 8456
// Function ID: 67467
// Name: GuildEventCardControls
// Dependencies: []

// Module 8456 (GuildEventCardControls)
function GuildEventCardControls(onCloseAction) {
  let event;
  let isConnected;
  ({ event, isConnected } = onCloseAction);
  let obj = arg1(dependencyMap[8]);
  const primaryActionButtonType = obj.usePrimaryActionButtonType(event, isConnected);
  obj = { direction: "horizontal", style: styles().actionContainer };
  const items = [callback2(arg1(dependencyMap[8]).GuildEventCardPrimaryAction, { event, onCloseAction: onCloseAction.onCloseAction, isConnected }), , ];
  let tmp4 = primaryActionButtonType === arg1(dependencyMap[8]).PrimaryActionType.START;
  if (tmp4) {
    obj = { event };
    tmp4 = callback2(arg1(dependencyMap[8]).GuildEventCardRSVPAction, obj);
  }
  items[1] = tmp4;
  items[2] = callback2(arg1(dependencyMap[8]).GuildEventShareAction, { event });
  obj.children = items;
  return closure_8(arg1(dependencyMap[9]).ButtonGroup, obj);
}
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = arg1(dependencyMap[3]).isGuildScheduledEventActive;
let closure_6 = arg1(dependencyMap[4]).AGE_VERIFICATION_STAGE_CHANNEL_TYPES;
const importAllResult = importAll(dependencyMap[0]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[5]));
const tmp2 = arg1(dependencyMap[5]);
let obj = {};
obj = { paddingTop: importDefault(dependencyMap[7]).space.PX_16, paddingBottom: 0 };
obj.actionContainer = obj;
const styles = arg1(dependencyMap[6]).createStyles(obj);
const obj2 = arg1(dependencyMap[6]);
const memoResult = importAllResult.memo((event) => {
  let hideControls;
  let onCloseAction;
  event = event.event;
  const arg1 = event;
  ({ onPress: closure_1, onCloseAction, hideControls } = event);
  if (hideControls === undefined) {
    hideControls = false;
  }
  let flag = event.hideAgeVerificationNotice;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = event.isNew;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let dependencyMap;
  function handlePress() {
    if (null != callback) {
      callback(event);
    }
  }
  const channel_id = event.channel_id;
  dependencyMap = channel_id;
  let obj = arg1(dependencyMap[10]);
  const items = [closure_4];
  const items1 = [channel_id];
  let stateFromStores = obj.useStateFromStores(items, () => {
    let isConnectedResult = closure_4.isConnected();
    if (isConnectedResult) {
      isConnectedResult = closure_4.getChannelId() === channel_id;
    }
    return isConnectedResult;
  }, items1);
  if (stateFromStores) {
    stateFromStores = callback(event);
  }
  let obj1 = arg1(dependencyMap[11]);
  const result = obj1.recurrenceRuleFromServer(event.recurrence_rule);
  obj = { accessible: false, onPress: handlePress };
  obj = {};
  obj1 = { event, isNew: flag2 };
  const items2 = [callback2(arg1(dependencyMap[8]).GuildEventCardHeader, obj1), callback2(arg1(dependencyMap[8]).GuildEventCardMetaInfo, { event, onTitlePress: handlePress }), , , , ];
  let hasItem = !flag;
  if (hasItem) {
    hasItem = set.has(event.entity_type);
  }
  if (hasItem) {
    const obj2 = { noBackground: true, onConfirmPress: onCloseAction, channelId: channel_id };
    hasItem = callback2(importDefault(dependencyMap[13]), obj2);
  }
  items2[2] = hasItem;
  items2[3] = callback2(arg1(dependencyMap[8]).GuildEventSimpleLocation, { event });
  let tmp12 = null;
  if (!hideControls) {
    const obj3 = { event, onCloseAction, isConnected: stateFromStores };
    tmp12 = callback2(GuildEventCardControls, obj3);
  }
  items2[4] = tmp12;
  let tmp15 = null != result;
  if (tmp15) {
    const obj4 = {
      guildId: event.guild_id,
      recurrenceRule: result,
      guildEventId: event.id,
      onRecurrencePress(arg0) {
          let tmp;
          if (null != callback) {
            tmp = callback(event, arg0);
          }
          return tmp;
        }
    };
    tmp15 = callback2(importDefault(dependencyMap[14]), obj4);
  }
  items2[5] = tmp15;
  obj.children = items2;
  obj.children = closure_8(View, obj);
  return callback2(arg1(dependencyMap[12]).Card, obj);
});
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventCard.tsx");

export default memoResult;
export const useGuildEventCardStyles = styles;
