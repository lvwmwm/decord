// Module ID: 12064
// Function ID: 12065
// Name: StageAudienceActionSheet
// Dependencies: [32, 19, 17, 5019, 5082, 21, 5170, 575, 12065, 7452, 1113, 7410, 504, 6206, 8036, 7063, 1187, 8842, 6185, 10021, 7187, 10058, 8119, 12061, 7145, 5781, 4154, 6790, 6845, 12066, 12068, 7449, 7405, 7380, 7151, 7435, 2]
// Exports: default

// Module 12064 (StageAudienceActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1113 */;
import _modDef4154 from "module_4154" /* 4154 */;
import Text_Text from "Text/Text" /* 5781 */;
import TableRowGroup2 from "TableRowGroup" /* 7151 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7410 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7435 */;
import TableSwitchRow2 from "TableSwitchRow" /* 7452 */;
import StageChannelActionCreators from "StageChannelActionCreators" /* 8036 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8842 */;
import useRequestToSpeakPermission from "useRequestToSpeakPermission" /* 12065 */;
import useStageSummaryDefault from "useStageSummary" /* 12068 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 5019 */;
import GuildMemberStore from "GuildMemberStore" /* 5082 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault;

let c10;
let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
class RequestToSpeakSwitchRow {
  constructor(channel) {
    let intl;
    let stringResult;
    let tmp2;
    let tmp3;
    channel = channel.channel;
    const obj = useRequestToSpeakPermission;
    [tmp2, tmp3] = obj.useRequestToSpeakPermission(channel.id);
    const obj2 = { label: intl.string(intl5.t.TYZgzW), subLabel: stringResult, value: tmp2, onValueChange: tmp3 };
    _slicedToArray(obj.useRequestToSpeakPermission(channel.id), 2);
    const TableSwitchRow = TableSwitchRow2.TableSwitchRow;
    intl = intl5.intl;
    const intl2 = intl5.intl;
    const string = intl2.string;
    const t = intl5.t;
    const tmp4 = metroImportAll;
    if (tmp2) {
      stringResult = string(t["JcFI/U"]);
    } else {
      stringResult = string(t.laPwJQ);
    }
    return tmp4(TableSwitchRow, obj2);
  }
}
function StageAudienceEmptyState() {
  let intl;
  let intl2;
  let items;
  const tmp = closure_11();
  const obj = { style: tmp.emptyState, children: items };
  const obj2 = { style: tmp.centered, variant: "heading-sm/semibold", color: "text-strong", children: intl.string(intl5.t.FsP3VU) };
  const Text = Text_Text.Text;
  intl = intl5.intl;
  items = [metroImportAll(Text, obj2), ];
  const obj3 = { style: tmp.centered, variant: "body-sm/normal", color: "text-default", children: intl2.string(_modDef4154.eo2IxJ) };
  const Text2 = Text_Text.Text;
  intl2 = intl5.intl;
  items[1] = metroImportAll(Text2, obj3);
  return authStore(View, obj);
}
function getItemType(type) {
  return type.type;
}
function StageAudienceActionSheetContent(channel) {
  let BottomSheetTitleHeader;
  let closure_2;
  let intl;
  let intl2;
  let obj6;
  let obj7;
  let sectionHeader;
  channel = channel.channel;
  let tmp = closure_11();
  importDefault = tmp;
  let obj = channel(6790);
  dependencyMap = obj.useCanModerateRequestToSpeak(channel.id);
  const tmp2 = useStageSummaryDefault(channel.id);
  let obj2 = channel(6790);
  const canToggleRequestToSpeak = obj2.useCanToggleRequestToSpeak(channel);
  let obj3 = channel(6845);
  const sortedRequestToSpeakParticipants = obj3.useSortedRequestToSpeakParticipants(channel.id);
  let obj4 = channel(12066);
  const throttledStageAudience = obj4.useThrottledStageAudience(channel.id);
  let items = [canToggleRequestToSpeak, sortedRequestToSpeakParticipants, throttledStageAudience];
  const memo = react.useMemo(() => {
    let intl;
    let intl2;
    let obj3;
    let obj4;
    const items = [];
    const tmp = items;
    if (tmp) {
      items.push({ type: "toggle" });
    }
    if (sortedRequestToSpeakParticipants.length > 0) {
      const push2 = items.push;
      const obj2 = { type: "header", label: intl2.formatToPlainString(canToggleRequestToSpeak(throttledStageAudience[10]).t["5z7q5a"], obj3) };
      intl2 = canToggleRequestToSpeak(throttledStageAudience[10]).intl;
      obj3 = { numHands: sortedRequestToSpeakParticipants.length };
      push2(obj2);
      const item = arr2.forEach((participant, index) => {
        const obj = { type: "request", participant, start: 0 === index, end: index === sortedRequestToSpeakParticipants.length - 1 };
        return items.push(obj);
      });
    }
    let obj = { type: "header", label: intl.formatToPlainString(canToggleRequestToSpeak(throttledStageAudience[10]).t.vUrsZ9, obj4) };
    const push = items.push;
    intl = canToggleRequestToSpeak(throttledStageAudience[10]).intl;
    obj4 = { audienceSize: throttledStageAudience.length };
    push(obj);
    const arr3 = throttledStageAudience;
    if (0 === throttledStageAudience.length) {
      items.push({ type: "empty" });
    }
    const item1 = arr3.forEach((participant, index) => {
      const obj = { type: "audience", participant, start: 0 === index, end: index === throttledStageAudience.length - 1 };
      return items.push(obj);
    });
    return items;
  }, items);
  const obj5 = { scrollable: true, startExpanded: true, dismissAccessibilityLabel: intl.string(_modDef4154["ZSmz+r"]), header: closure_8(BottomSheetTitleHeader, obj6), children: closure_8(channel(7380).BottomSheetFlashList, obj7) };
  const ActionSheet = channel(7449).ActionSheet;
  intl = channel(1113).intl;
  obj6 = { title: intl2.string(channel(1113).t.suRApw), subtitle: tmp2 };
  BottomSheetTitleHeader = channel(7405).BottomSheetTitleHeader;
  intl2 = channel(1113).intl;
  obj7 = {
    contentContainerStyle: tmp.list,
    data: memo,
    renderItem(item) {
      let obj3;
      let tmp6;
      item = item.item;
      const type = item.type;
      if ("toggle" === type) {
        const obj2 = { hasIcons: false, children: metroImportAll(RequestToSpeakSwitchRow, obj3) };
        obj3 = { channel };
        const TableRowGroup = TableRowGroup2.TableRowGroup;
        return metroImportAll(TableRowGroup, obj2);
      } else if ("header" === type) {
        const obj4 = { style: sectionHeader.sectionHeader, title: item.label };
        return metroImportAll(TableRowGroup2.TableRowGroupTitle, obj4);
      } else {
        if ("request" !== type) {
          if ("audience" !== type) {
            if ("empty" === type) {
              return metroImportAll(StageAudienceEmptyState, {});
            }
          }
        }
        const obj = { participant: item.participant, channel, start: null, end: null, showRequestToSpeakActions: tmp6 };
        ({ start: obj.start, end: obj.end } = item);
        tmp6 = "request" === item.type;
        const tmp3 = metroImportAll;
        const tmp4 = closure_13;
        if (tmp6) {
          tmp6 = closure_2;
        }
        return tmp3(tmp4, obj);
      }
    },
    getItemType
  };
  return closure_8(ActionSheet, obj5);
}
const View = react_native.View;
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { list: obj2, sectionHeader: obj3, emptyState: obj4, centered: { textAlign: "center" } };
obj2 = { paddingBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingTop: nativeDefault.space.PX_24 };
obj4 = { alignItems: "center", paddingVertical: nativeDefault.space.PX_24 };
let closure_11 = createStyles(obj);
let closure_13 = react.memo(function StageAudienceRow(showRequestToSpeakActions) {
  let Avatar;
  let Stack;
  let blocked;
  let channel;
  let end;
  let ignored;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items4;
  let items5;
  let obj5;
  let participant;
  let rtsState;
  let start;
  let userNick;
  ({ participant, channel } = showRequestToSpeakActions);
  showRequestToSpeakActions = showRequestToSpeakActions.showRequestToSpeakActions;
  let analyticsLocations;
  const user = participant.user;
  let tmp2 = user;
  ({ start, end } = showRequestToSpeakActions);
  ({ userNick, blocked, ignored, rtsState } = participant);
  analyticsLocations = user(analyticsLocations[11])().analyticsLocations;
  let obj = channel(analyticsLocations[12]);
  const items = [GuildMemberStore];
  const items1 = [channel.guild_id, user.id];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let tmp2 = null != channel.guild_id;
    if (tmp2) {
      const member = GuildMemberStore.getMember(tmp.guild_id, user.id);
      let premiumSince;
      if (member != null) {
        premiumSince = member.premiumSince;
      }
      tmp2 = null != premiumSince;
    }
    return tmp2;
  }, items1);
  const tmp6 = rtsState === channel(analyticsLocations[13]).RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
  let tmp7;
  if (showRequestToSpeakActions) {
    let items2;
    if (tmp6) {
      items2 = [];
    } else {
      let obj2 = { name: "invite", label: intl.string(tmp4(tmp3[10]).t.f0T7hI) };
      intl = tmp4(tmp3[10]).intl;
      items2 = [obj2];
    }
    const items3 = [];
    const obj3 = { name: "dismiss", label: intl2.string(channel(analyticsLocations[10]).t.moABMy) };
    const arraySpreadResult = HermesBuiltin.arraySpread(items3, items2, 0);
    intl2 = tmp4(tmp3[10]).intl;
    items3[arraySpreadResult] = obj3;
    tmp7 = items3;
  }
  const obj4 = {
    start,
    end,
    icon: closure_8(Avatar, obj5),
    label: userNick,
    onPress: function handlePress() {
      const obj = { userId: user.id, channelId: channel.id, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations };
      showUserProfileActionSheetDefault(obj);
    },
    accessibilityActions: tmp7,
    onAccessibilityAction(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      if ("invite" === nativeEvent.actionName) {
        const obj = StageChannelActionCreators;
        obj.setUserSuppress(channel, user.id, false);
      }
      if ("dismiss" === nativeEvent.actionName) {
        const obj2 = StageChannelActionCreators;
        obj2.setUserSuppress(channel, user.id, true);
      }
    },
    trailing: closure_10(Stack, { direction: "horizontal", spacing: 8, align: "center", children: items4 })
  };
  const TableRow = tmp4(tmp3[15]).TableRow;
  obj5 = { user, guildId: channel.guild_id, size: channel(analyticsLocations[16]).AvatarSizes.SMALL };
  Avatar = tmp4(tmp3[16]).Avatar;
  let tmp11Result = null;
  Stack = tmp4(tmp3[18]).Stack;
  if (blocked) {
    const obj6 = { size: "sm", color: tmp2(analyticsLocations[7]).colors.TEXT_FEEDBACK_CRITICAL };
    const DenyIcon = tmp4(tmp3[19]).DenyIcon;
    tmp11Result = tmp11(DenyIcon, obj6);
  }
  items4 = [tmp11Result, , , ];
  let tmp11Result3 = null;
  if (ignored) {
    const obj7 = { size: "sm", color: tmp2(analyticsLocations[7]).colors.ICON_MUTED };
    const EyeSlashIcon = tmp4(tmp3[20]).EyeSlashIcon;
    tmp11Result3 = tmp11(EyeSlashIcon, obj7);
  }
  items4[1] = tmp11Result3;
  let tmp11Result4 = null;
  if (stateFromStores) {
    const obj8 = { size: "sm", color: tmp2(analyticsLocations[7]).unsafe_rawColors.GUILD_BOOSTING_PINK };
    const BoostGemIcon = tmp4(tmp3[21]).BoostGemIcon;
    tmp11Result4 = tmp11(BoostGemIcon, obj8);
  }
  items4[2] = tmp11Result4;
  let tmp12Result = null;
  if (showRequestToSpeakActions) {
    function handleInviteToSpeak() {
      const obj = StageChannelActionCreators;
      obj.setUserSuppress(channel, user.id, false);
    }
    function handleDismissRequest() {
      const obj = StageChannelActionCreators;
      obj.setUserSuppress(channel, user.id, true);
    }
    const obj9 = { children: items5 };
    const obj10 = { size: "sm", variant: "secondary", icon: closure_8(channel(analyticsLocations[23]).MicrophoneArrowRightIcon, {}), accessibilityLabel: intl3.string(channel(analyticsLocations[10]).t.f0T7hI), accessibilityRole: "none", disabled: tmp6, onPress: handleInviteToSpeak };
    const IconButton = tmp4(tmp3[22]).IconButton;
    intl3 = tmp4(tmp3[10]).intl;
    items5 = [closure_8(IconButton, obj10), ];
    const obj11 = { size: "sm", variant: "secondary", icon: closure_8(channel(analyticsLocations[24]).XSmallIcon, {}), accessibilityLabel: intl4.string(channel(analyticsLocations[10]).t.moABMy), accessibilityRole: "none", onPress: handleDismissRequest };
    const IconButton2 = tmp4(tmp3[22]).IconButton;
    intl4 = tmp4(tmp3[10]).intl;
    items5[1] = closure_8(IconButton2, obj11);
    tmp12Result = tmp12(closure_9, obj9);
  }
  items4[3] = tmp12Result;
  return closure_8(TableRow, obj4);
});
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageAudienceActionSheet.tsx");

export default function StageAudienceActionSheet(channelId) {
  let obj3;
  channelId = channelId.channelId;
  const tmp2 = useAnalyticsLocationsDefault;
  const analyticsLocations = tmp2(AnalyticsLocationDefault.AUDIENCE_SHEET).analyticsLocations;
  const items = [ChannelStore];
  const items1 = [channelId];
  const obj = channelId(504);
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  let tmp5 = null;
  const tmp3 = channelId;
  if (null != stateFromStores) {
    const obj2 = { value: analyticsLocations, children: closure_8(StageAudienceActionSheetContent, obj3) };
    obj3 = { channel: stateFromStores };
    const AnalyticsLocationProvider = tmp3(7410).AnalyticsLocationProvider;
    tmp5 = closure_8(AnalyticsLocationProvider, obj2);
  }
  return tmp5;
};
export { RequestToSpeakSwitchRow };
