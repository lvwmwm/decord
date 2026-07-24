// Module ID: 8507
// Function ID: 67744
// Name: GuildEventCardControls
// Dependencies: [31, 27, 4202, 6758, 1354, 33, 4130, 689, 8405, 4965, 566, 8389, 5167, 7580, 8508, 2]

// Module 8507 (GuildEventCardControls)
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { isGuildScheduledEventActive as closure_5 } from "_isNativeReflectConstruct";
import { AGE_VERIFICATION_STAGE_CHANNEL_TYPES as closure_6 } from "GUILD_EVENT_MAX_NAME_LENGTH";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let closure_7;
let closure_8;
const require = arg1;
function GuildEventCardControls(onCloseAction) {
  let event;
  let isConnected;
  ({ event, isConnected } = onCloseAction);
  let obj = require(8405) /* useEventRsvpState */;
  const primaryActionButtonType = obj.usePrimaryActionButtonType(event, isConnected);
  obj = { direction: "horizontal", style: styles().actionContainer };
  const items = [callback2(require(8405) /* useEventRsvpState */.GuildEventCardPrimaryAction, { event, onCloseAction: onCloseAction.onCloseAction, isConnected }), , ];
  let tmp4 = primaryActionButtonType === require(8405) /* useEventRsvpState */.PrimaryActionType.START;
  if (tmp4) {
    obj = { event };
    tmp4 = callback2(require(8405) /* useEventRsvpState */.GuildEventCardRSVPAction, obj);
  }
  items[1] = tmp4;
  items[2] = callback2(require(8405) /* useEventRsvpState */.GuildEventShareAction, { event });
  obj.children = items;
  return closure_8(require(4965) /* ButtonGroup */.ButtonGroup, obj);
}
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let obj = {};
obj = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: 0 };
obj.actionContainer = obj;
const styles = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = require("result").memo((event) => {
  let hideControls;
  let importDefault;
  let onCloseAction;
  event = event.event;
  ({ onPress: importDefault, onCloseAction, hideControls } = event);
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
  let channel_id;
  function handlePress() {
    if (null != callback) {
      callback(event);
    }
  }
  channel_id = event.channel_id;
  let obj = event(channel_id[10]);
  const items = [_isNativeReflectConstruct];
  const items1 = [channel_id];
  let stateFromStores = obj.useStateFromStores(items, () => {
    let isConnectedResult = outer1_4.isConnected();
    if (isConnectedResult) {
      isConnectedResult = outer1_4.getChannelId() === channel_id;
    }
    return isConnectedResult;
  }, items1);
  if (stateFromStores) {
    stateFromStores = callback(event);
  }
  let obj1 = event(channel_id[11]);
  const result = obj1.recurrenceRuleFromServer(event.recurrence_rule);
  obj = { accessible: false, onPress: handlePress };
  obj = {};
  obj1 = { event, isNew: flag2 };
  const items2 = [callback2(event(channel_id[8]).GuildEventCardHeader, obj1), callback2(event(channel_id[8]).GuildEventCardMetaInfo, { event, onTitlePress: handlePress }), , , , ];
  let hasItem = !flag;
  if (hasItem) {
    hasItem = set.has(event.entity_type);
  }
  if (hasItem) {
    const obj2 = { noBackground: true, onConfirmPress: onCloseAction, channelId: channel_id };
    hasItem = callback2(importDefault(channel_id[13]), obj2);
  }
  items2[2] = hasItem;
  items2[3] = callback2(event(channel_id[8]).GuildEventSimpleLocation, { event });
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
    tmp15 = callback2(importDefault(channel_id[14]), obj4);
  }
  items2[5] = tmp15;
  obj.children = items2;
  obj.children = closure_8(View, obj);
  return callback2(event(channel_id[12]).Card, obj);
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventCard.tsx");

export default memoResult;
export const useGuildEventCardStyles = styles;
