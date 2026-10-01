// Module ID: 9263
// Function ID: 9264
// Name: GuildEventCard
// Dependencies: [19, 17, 4859, 6946, 2051, 21, 4836, 576, 9062, 5745, 504, 8982, 5919, 7858, 9087, 2]

// Module 9263 (GuildEventCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 2051 */;
import ButtonGroup2 from "ButtonGroup" /* 5745 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 6946 */;
import GuildEventCardComponents from "GuildEventCardComponents" /* 9062 */;
import react from "react" /* 19 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4859 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let metroImportAll;
let metroImportDefault;
let obj2;
function GuildEventCardControls(onCloseAction) {
  let event;
  let isConnected;
  let items;
  ({ event, isConnected } = onCloseAction);
  onCloseAction = onCloseAction.onCloseAction;
  const tmp = styles();
  const obj = GuildEventCardComponents;
  const primaryActionButtonType = obj.usePrimaryActionButtonType(event, isConnected);
  const obj2 = { direction: "horizontal", style: tmp.actionContainer, children: items };
  const ButtonGroup = ButtonGroup2.ButtonGroup;
  items = [metroImportDefault(GuildEventCardComponents.GuildEventCardPrimaryAction, { event, onCloseAction, isConnected }), , ];
  let tmp6Result = primaryActionButtonType === GuildEventCardComponents.PrimaryActionType.START;
  const tmp5 = metroImportAll;
  if (tmp6Result) {
    const obj3 = { event };
    tmp6Result = tmp6(tmp2(9062).GuildEventCardRSVPAction, obj3);
  }
  items[1] = tmp6Result;
  items[2] = metroImportDefault(GuildEventCardComponents.GuildEventShareAction, { event });
  return tmp5(ButtonGroup, obj2);
}
const View = react_native.View;
let closure_5 = GuildScheduledEventStore.isGuildScheduledEventActive;
const set = GuildScheduledEventsConstants.AGE_VERIFICATION_STAGE_CHANNEL_TYPES;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { actionContainer: obj2 };
obj2 = { paddingTop: nativeDefault.space.PX_16, paddingBottom: 0 };
const styles = createStyles.createStyles(obj);
const memoResult = react.memo((event) => {
  let hideControls;
  let items2;
  let onCloseAction;
  let tmp7;
  let tmp8;
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
  const channel_id = event.channel_id;
  const tmp = event;
  let obj = event(channel_id[10]);
  const items = [RTCConnectionStore];
  const items1 = [channel_id];
  let stateFromStores = obj.useStateFromStores(items, () => {
    let isConnectedResult = RTCConnectionStore.isConnected();
    const obj = RTCConnectionStore;
    if (isConnectedResult) {
      isConnectedResult = obj.getChannelId() === channel_id;
    }
    return isConnectedResult;
  }, items1);
  if (stateFromStores) {
    stateFromStores = closure_5(event);
  }
  function handlePress() {
    if (importDefault != null) {
      tmp(event);
    }
  }
  let tmpResult = tmp(tmp2[11]);
  const result = tmpResult.recurrenceRuleFromServer(event.recurrence_rule);
  const obj2 = { accessible: false, onPress: handlePress, children: tmp7(tmp8, { children: items2 }) };
  const Card = tmp(tmp2[12]).Card;
  items2 = [closure_7(tmp(tmp2[8]).GuildEventCardHeader, { event, isNew: flag2 }), closure_7(tmp(tmp2[8]).GuildEventCardMetaInfo, { event, onTitlePress: handlePress }), , , , ];
  let hasItem = !flag;
  tmp7 = closure_8;
  tmp8 = View;
  if (hasItem) {
    hasItem = set.has(event.entity_type);
  }
  if (hasItem) {
    const obj3 = { noBackground: true, onConfirmPress: onCloseAction, channelId: channel_id };
    hasItem = tmp6(require("StageChannelAgeVerificationNotice"), obj3);
  }
  items2[2] = hasItem;
  items2[3] = closure_7(tmp(channel_id[8]).GuildEventSimpleLocation, { event });
  let tmp6Result = null;
  if (!hideControls) {
    const obj4 = { event, onCloseAction, isConnected: stateFromStores };
    tmp6Result = tmp6(GuildEventCardControls, obj4);
  }
  items2[4] = tmp6Result;
  let tmp6Result2 = null != result;
  if (tmp6Result2) {
    const obj5 = {
      guildId: event.guild_id,
      recurrenceRule: result,
      guildEventId: event.id,
      onRecurrencePress(arg0) {
          let tmpResult;
          if (importDefault != null) {
            tmpResult = tmp(event, arg0);
          }
          return tmpResult;
        }
    };
    tmp6Result2 = tmp6(require("GuildEventRecurrences"), obj5);
  }
  items2[5] = tmp6Result2;
  return closure_7(Card, obj2);
});
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventCard.tsx");

export default memoResult;
export const useGuildEventCardStyles = styles;
