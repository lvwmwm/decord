// Module ID: 15149
// Function ID: 15150
// Name: GuildEventVoiceBanner
// Dependencies: [19, 17, 4912, 6849, 21, 5009, 575, 9071, 504, 9011, 8960, 5253, 8976, 7931, 8953, 6974, 8972, 5629, 1114, 2]

// Module 15149 (GuildEventVoiceBanner)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 6849 */;
import GuildScheduledEventModalActionCreators from "GuildScheduledEventModalActionCreators" /* 8953 */;
import guild_scheduled_events_GuildScheduledEventModalActionCreators from "guild_scheduled_events/GuildScheduledEventModalActionCreators" /* 8976 */;
import react from "react" /* 19 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4912 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let obj2;
const View = react_native.View;
let closure_6 = GuildScheduledEventStore.isGuildScheduledEventActive;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { header: obj2, descriptionContainerStyle: { paddingTop: 4 }, buttonContainer: { marginTop: 12 } };
obj2 = { margin: 12, padding: 12, borderRadius: nativeDefault.radii.sm, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_9 = createStyles.createStyles(obj);
const memoResult = react.memo(function GuildEventVoiceBanner(channel) {
  let Button;
  let intl;
  let items2;
  let obj8;
  let voiceChannelId;
  channel = channel.channel;
  let event;
  let nextRecurrenceIdInEvent;
  let tmp = closure_9();
  let obj = channel(event[7]);
  const activeEvent = obj.useActiveEvent(channel.id);
  let obj2 = channel(event[7]);
  const imminentUpcomingGuildEvents = obj2.useImminentUpcomingGuildEvents(channel.id);
  let obj3 = channel(event[8]);
  const items = [SelectedChannelStore];
  let tmp7 = activeEvent;
  const stateFromStores = obj3.useStateFromStores(items, () => voiceChannelId.getVoiceChannelId());
  const id = channel.id;
  if (activeEvent == null) {
    event = undefined;
    if (imminentUpcomingGuildEvents != null) {
      event = imminentUpcomingGuildEvents[0];
    }
    tmp7 = event;
  }
  event = tmp7;
  const tmp2Result = channel(event[9]);
  const canManageGuildEventResult = tmp2Result.useManageResourcePermissions(channel).canManageGuildEvent(tmp7);
  const tmp2Result2 = channel(event[10]);
  nextRecurrenceIdInEvent = tmp2Result2.getNextRecurrenceIdInEvent(tmp7);
  const items1 = [tmp7, channel, activeEvent, nextRecurrenceIdInEvent];
  [][0] = tmp7;
  const callback = nextRecurrenceIdInEvent.useCallback(() => {
    const tmp = null == activeEvent && null != first;
    if (tmp) {
      let obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      const obj2 = guild_scheduled_events_GuildScheduledEventModalActionCreators;
      let result = obj2.openStartGuildEventModal(first, nextRecurrenceIdInEvent, () => {
        const obj = channel(first[13]);
        const result = obj.openVoiceChannelActionSheet(closure_1_0);
      });
    }
  }, items1);
  if (null == tmp7) {
    return null;
  } else {
    let tmp18Result = stateFromStores === id;
    const obj4 = { accessibilityRole: "button", onPress: tmp12, style: tmp.header, children: items2 };
    const tmp16 = closure_6(tmp7);
    const PressableOpacity = tmp2(tmp3[15]).PressableOpacity;
    const obj5 = { event: tmp7, showUserCount: false };
    items2 = [closure_7(tmp2(tmp3[16]).GuildEventCardHeader, obj5), , ];
    const obj6 = { event: tmp7, descriptionContainerStyle: tmp.descriptionContainerStyle, condensed: tmp18Result };
    items2[1] = closure_7(channel(event[16]).GuildEventCardMetaInfo, obj6);
    const tmp17 = closure_8;
    if (tmp18Result) {
      tmp18Result = canManageGuildEventResult;
    }
    if (tmp18Result) {
      tmp18Result = !tmp16;
    }
    if (tmp18Result) {
      const obj7 = { style: tmp.buttonContainer, children: closure_7(Button, obj8) };
      obj8 = { text: intl.string(channel(event[18]).t.cK1GGY), onPress: callback, variant: "active", size: "sm", grow: true };
      Button = tmp2(tmp3[17]).Button;
      intl = tmp2(tmp3[18]).intl;
      tmp18Result = tmp18(View, obj7);
    }
    items2[2] = tmp18Result;
    return tmp17(PressableOpacity, obj4);
  }
});
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventVoiceBanner.tsx");

export default memoResult;
