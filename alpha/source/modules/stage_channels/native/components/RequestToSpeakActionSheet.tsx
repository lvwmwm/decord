// Module ID: 11576
// Function ID: 11577
// Name: RequestToSpeakActionSheet
// Dependencies: [32, 19, 17, 502, 5159, 6904, 21, 5310, 575, 504, 6356, 1113, 11577, 11579, 7453, 6906, 8201, 6818, 5546, 6907, 1187, 11581, 5896, 7928, 7947, 6947, 6941, 5560, 5564, 6335, 7756, 11582, 5923, 11587, 2]
// Exports: default

// Module 11576 (RequestToSpeakActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
import useAudienceRequestToSpeakStateDefault from "useAudienceRequestToSpeakState" /* 6356 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6818 */;
import StageChannelsConstants from "StageChannelsConstants" /* 6904 */;
import useStageSpeakingForCurrentUser from "useStageSpeakingForCurrentUser" /* 6906 */;
import StageChannelActionCreators from "StageChannelActionCreators" /* 6907 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8201 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 5159 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5310 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault;

let c10;
let c9;
let obj2;
let tmp4;
const AssetRegistryDefault = tmp4(11581);
function ManageSelfSpeakerRow(channel) {
  let Icon;
  let MicrophoneArrowRightIcon;
  let closure_1;
  let obj3;
  let stringResult;
  channel = channel.channel;
  importDefault = undefined;
  const tmp = channel;
  let obj = channel(504);
  const items = [AuthenticationStore];
  const stateFromStores = obj.useStateFromStores(items, () => id.getId());
  let id;
  const tmp5 = useAudienceRequestToSpeakStateDefault;
  if (channel != null) {
    id = channel.id;
  }
  const tmp5Result = tmp5(stateFromStores, id);
  const tmp8 = tmp5Result === tmp(6356).RequestToSpeakStates.ON_STAGE;
  importDefault = tmp8;
  const intl = tmp(1113).intl;
  const string = intl.string;
  const t = tmp(1113).t;
  if (tmp8) {
    stringResult = string(t.ezLpY6);
  } else {
    stringResult = string(t["8Joh+p"]);
  }
  if (tmp8) {
    MicrophoneArrowRightIcon = tmp(11577).GroupArrowDownIcon;
  } else {
    MicrophoneArrowRightIcon = tmp(11579).MicrophoneArrowRightIcon;
  }
  let obj2 = {
    onPress: function handleSetSelfSpeaker() {
      if (!closure_1) {
        const obj = useStageSpeakingForCurrentUser;
        if (obj.shouldAgeVerifyToSpeakForCurrentUser(channel.id)) {
          const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND };
          const showAgeVerificationGetStartedModal = AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal;
          AgeVerificationActionCreatorsDefault;
          const result = showAgeVerificationGetStartedModal(obj2);
          const obj3 = ActionSheetActionCreatorsDefault;
          obj3.hideActionSheet(closure_8);
        }
      }
      const obj4 = StageChannelActionCreators;
      const result1 = obj4.audienceAckRequestToSpeak(channel, tmp);
      const obj5 = ActionSheetActionCreatorsDefault;
      obj5.hideActionSheet(closure_8);
    },
    icon: closure_9(MicrophoneArrowRightIcon, {}),
    label: stringResult,
    trailing: closure_9(Icon, obj3)
  };
  const TableRow = tmp(7453).TableRow;
  obj3 = { source: AssetRegistryDefault };
  Icon = tmp(1187).Icon;
  return closure_9(TableRow, obj2);
}
let react = react_mod;
const View = react_native.View;
let closure_8 = StageChannelsConstants.REQUEST_TO_SPEAK_SHEET_KEY;
({ jsx: c9, jsxs: c10 } = Fragment);
let obj = { container: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_11 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/stage_channels/native/components/RequestToSpeakActionSheet.tsx");

export default function RequestToSpeakActionSheet(channelId) {
  let BottomSheet;
  let BottomSheetScrollView;
  let Stack;
  let Text;
  let closure_2;
  let closure_4;
  let format;
  let items2;
  let items3;
  let items4;
  let obj13;
  let obj14;
  let obj15;
  let obj5;
  let obj6;
  let obj7;
  let v5z7q5a;
  channelId = channelId.channelId;
  let first;
  let first1;
  react = undefined;
  const analyticsLocations = channelId.analyticsLocations;
  const obj = channelId(5896);
  const token = obj.useToken(first(575).modules.mobile.TABLE_ROW_PADDING);
  const items = [];
  const tmp6 = closure_11();
  const tmp7 = first(7928);
  const arraySpreadResult = HermesBuiltin.arraySpread(items, analyticsLocations, 0);
  items[arraySpreadResult] = first(7947).REQUEST_TO_SPEAK;
  const analyticsLocations2 = tmp7(items).analyticsLocations;
  const items1 = [ChannelStore];
  const obj2 = channelId(504);
  const stateFromStores = obj2.useStateFromStores(items1, () => ChannelStore.getChannel(channelId));
  const obj3 = channelId(6947);
  const stageParticipantsCount = obj3.useStageParticipantsCount(channelId, channelId(6941).StageChannelParticipantNamedIndex.ALL_REQUESTED_TO_SPEAK);
  const tmp11 = first1(react.useState(0), 2);
  const tmp4 = first;
  first = tmp11[0];
  dependencyMap = tmp11[1];
  const tmp13 = first1(react.useState(0), 2);
  first1 = tmp13[0];
  react = tmp13[1];
  let tmp15 = null;
  if (null != stateFromStores) {
    const obj4 = { value: analyticsLocations2, children: closure_9(BottomSheet, obj5) };
    const AnalyticsLocationProvider = tmp2(7928).AnalyticsLocationProvider;
    obj5 = { scrollable: true, startExpanded: stageParticipantsCount >= 5, children: closure_9(BottomSheetScrollView, obj6) };
    BottomSheet = tmp2(5560).BottomSheet;
    obj6 = {
      style: tmp6.container,
      onLayout: function handleScrollLayout(nativeEvent) {
          const height = nativeEvent.nativeEvent.layout.height;
          const tmp = null != height && first1 !== height;
          if (tmp) {
            closure_4(height);
          }
        },
      children: closure_10(Stack, obj7)
    };
    BottomSheetScrollView = tmp2(5564).BottomSheetScrollView;
    obj7 = { spacing: 8, children: items4 };
    Stack = tmp2(6335).Stack;
    const obj8 = {
      spacing: 8,
      onLayout: function handleHeaderLayout(nativeEvent) {
          const height = nativeEvent.nativeEvent.layout.height;
          const tmp = null != height && first !== height;
          if (tmp) {
            closure_2(height);
          }
        },
      children: items3
    };
    const Stack2 = tmp2(6335).Stack;
    const obj9 = { hasIcons: true, children: items2 };
    const TableRowGroup = tmp2(7756).TableRowGroup;
    const obj10 = { channel: stateFromStores };
    items2 = [closure_9(tmp2(11582).RequestToSpeakSwitchRow, obj10), ];
    const obj11 = { channel: stateFromStores };
    items2[1] = closure_9(ManageSelfSpeakerRow, obj11);
    items3 = [closure_10(TableRowGroup, obj9), ];
    const obj12 = { style: obj13, children: closure_9(Text, obj14) };
    obj13 = { paddingHorizontal: token };
    obj14 = { accessibilityRole: "header", variant: "body-sm/medium", color: "text-default", children: format(v5z7q5a, obj15) };
    Text = tmp2(5923).Text;
    const intl = tmp2(1113).intl;
    format = intl.format;
    const _HermesInternal = HermesInternal;
    obj15 = { numHands: "" + stageParticipantsCount };
    v5z7q5a = tmp2(1113).t["5z7q5a"];
    items3[1] = closure_9(View, obj12);
    items4 = [closure_10(Stack2, obj8), ];
    const _Math = Math;
    const obj16 = { channel: stateFromStores, height: Math.max(first1 - first - 8, 0) };
    const tmp4Result = tmp4(11587);
    items4[1] = closure_9(tmp4Result, obj16);
    tmp15 = closure_9(AnalyticsLocationProvider, obj4);
  }
  return tmp15;
};
