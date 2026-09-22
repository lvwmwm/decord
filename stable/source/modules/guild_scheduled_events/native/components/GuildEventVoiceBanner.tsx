// Module ID: 13869
// Function ID: 13870
// Name: GuildEventVoiceBanner
// Dependencies: [19, 17, 2011, 7629, 21, 4636, 576, 9792, 504, 9801, 9795, 4603, 9828, 4843, 9919, 5204, 9902, 5056, 1114, 2]

// Module 13869 (GuildEventVoiceBanner)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import GuildScheduledEventModalActionCreators from "GuildScheduledEventModalActionCreators" /* 9828 */;
import guild_scheduled_events_GuildScheduledEventModalActionCreators from "guild_scheduled_events/GuildScheduledEventModalActionCreators" /* 9919 */;
import noop from "module_19" /* 19 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;

require = fn;
const View = fn(17).View;
let closure_6 = fn(7629).isGuildScheduledEventActive;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4636);
let obj = { header: { margin: 12, padding: 12, borderRadius: nativeDefault.radii.sm, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH }, descriptionContainerStyle: { paddingTop: 4 }, buttonContainer: { marginTop: 12 } };
let closure_9 = createStyles.createStyles(obj);
let obj3 = { margin: 12, padding: 12, borderRadius: nativeDefault.radii.sm, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventVoiceBanner.tsx");

export default noop.memo((channel) => {
  channel = channel.channel;
  let first;
  let nextRecurrenceIdInEvent;
  let tmp = closure_9();
  const activeEvent = channel(first[7]).useActiveEvent(channel.id);
  let obj = channel(first[7]);
  const imminentUpcomingGuildEvents = channel(first[7]).useImminentUpcomingGuildEvents(channel.id);
  let obj2 = channel(first[7]);
  const items = [SelectedChannelStore];
  let tmp7 = activeEvent;
  const stateFromStores = channel(first[8]).useStateFromStores(items, () => voiceChannelId.getVoiceChannelId());
  if (activeEvent == null) {
    first = undefined;
    if (imminentUpcomingGuildEvents != null) {
      first = imminentUpcomingGuildEvents[0];
    }
    tmp7 = first;
  }
  first = tmp7;
  let obj3 = channel(first[8]);
  const tmp2Result = channel(first[9]);
  const canManageGuildEventResult = channel(first[9]).useManageResourcePermissions(channel).canManageGuildEvent(tmp7);
  nextRecurrenceIdInEvent = channel(first[10]).getNextRecurrenceIdInEvent(tmp7);
  const items1 = [tmp7, channel, activeEvent, nextRecurrenceIdInEvent];
  [][0] = tmp7;
  const callback = nextRecurrenceIdInEvent.useCallback(() => {
    let tmp = null == activeEvent;
    if (tmp) {
      tmp = null != first;
    }
    if (tmp) {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      let result = GuildScheduledEventModalActionCreators.openStartGuildEventModal(first, nextRecurrenceIdInEvent, () => {
        const result = channel(first[13]).openVoiceChannelActionSheet(closure_1_0);
      });
    }
  }, items1);
  if (null == tmp7) {
    return null;
  } else {
    let tmp18Result = stateFromStores === channel.id;
    const obj4 = { accessibilityRole: "button", onPress: tmp12, style: tmp.header, children: null };
    const obj5 = { event: tmp7, showUserCount: false };
    const items2 = [closure_7(tmp2(tmp3[16]).GuildEventCardHeader, obj5), , ];
    const obj6 = { event: tmp7, descriptionContainerStyle: tmp.descriptionContainerStyle, condensed: tmp18Result };
    items2[1] = closure_7(tmp2(tmp3[16]).GuildEventCardMetaInfo, obj6);
    if (tmp18Result) {
      tmp18Result = canManageGuildEventResult;
    }
    if (tmp18Result) {
      tmp18Result = !tmp16;
    }
    if (tmp18Result) {
      const obj7 = { style: tmp.buttonContainer, children: null };
      const obj8 = { text: null, onPress: null, variant: "active", size: "sm", grow: true };
      const intl = tmp2(tmp3[18]).intl;
      obj8.text = intl.string(tmp2(tmp3[18]).t.cK1GGY);
      obj8.onPress = callback;
      obj7.children = tmp18(tmp2(tmp3[17]).Button, obj8);
      tmp18Result = tmp18(View, obj7);
    }
    items2[2] = tmp18Result;
    obj4.children = items2;
    return closure_8(tmp2(tmp3[15]).PressableOpacity, obj4);
  }
  const tmp2Result2 = channel(first[10]);
});
