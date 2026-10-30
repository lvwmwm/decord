// Module ID: 11848
// Function ID: 11849
// Name: RequestToSpeakActionSheet
// Dependencies: [32, 19, 17, 502, 4858, 6703, 21, 5009, 575, 11849, 7363, 1114, 504, 6043, 11850, 11852, 6969, 6752, 7947, 6723, 5253, 7937, 1188, 11854, 5591, 7320, 7345, 6759, 6753, 5267, 5270, 6022, 7054, 5619, 11855, 2]
// Exports: default

// Module 11848 (RequestToSpeakActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1114 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import useAudienceRequestToSpeakStateDefault from "useAudienceRequestToSpeakState" /* 6043 */;
import StageChannelsConstants from "StageChannelsConstants" /* 6703 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6723 */;
import useStageSpeakingForCurrentUser from "useStageSpeakingForCurrentUser" /* 6752 */;
import TableSwitchRow2 from "TableSwitchRow" /* 7363 */;
import StageChannelActionCreators from "StageChannelActionCreators" /* 7937 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7947 */;
import useRequestToSpeakPermission from "useRequestToSpeakPermission" /* 11849 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let BottomSheet, dependencyMap, importDefault;

let c10;
let c9;
let obj2;
let tmp4;
const AssetRegistryDefault = tmp4(11854);
function RequestToSpeakRow(channel) {
  let c0;
  let intl;
  let stringResult;
  let tmp2;
  c0 = undefined;
  channel = channel.channel;
  const obj = useRequestToSpeakPermission;
  [tmp2, c0] = obj.useRequestToSpeakPermission(channel.id);
  const obj2 = {
    label: intl.string(intl3.t.TYZgzW),
    subLabel: stringResult,
    value: tmp2,
    onValueChange(arg0) {
      return _undefined(arg0);
    }
  };
  _slicedToArray(obj.useRequestToSpeakPermission(channel.id), 2);
  const TableSwitchRow = TableSwitchRow2.TableSwitchRow;
  intl = intl3.intl;
  const intl2 = intl3.intl;
  const string = intl2.string;
  const t = intl3.t;
  const tmp3 = React4;
  if (tmp2) {
    stringResult = string(t["JcFI/U"]);
  } else {
    stringResult = string(t.laPwJQ);
  }
  return tmp3(TableSwitchRow, obj2);
}
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
  const tmp8 = tmp5Result === tmp(6043).RequestToSpeakStates.ON_STAGE;
  importDefault = tmp8;
  const intl = tmp(1114).intl;
  const string = intl.string;
  const t = tmp(1114).t;
  if (tmp8) {
    stringResult = string(t.ezLpY6);
  } else {
    stringResult = string(t["8Joh+p"]);
  }
  if (tmp8) {
    MicrophoneArrowRightIcon = tmp(11850).GroupArrowDownIcon;
  } else {
    MicrophoneArrowRightIcon = tmp(11852).MicrophoneArrowRightIcon;
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
  const TableRow = tmp(6969).TableRow;
  obj3 = { source: AssetRegistryDefault };
  Icon = tmp(1188).Icon;
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
  const obj = channelId(5591);
  const token = obj.useToken(first(575).modules.mobile.TABLE_ROW_PADDING);
  const items = [];
  const tmp6 = closure_11();
  const tmp7 = first(7320);
  const arraySpreadResult = HermesBuiltin.arraySpread(items, analyticsLocations, 0);
  items[arraySpreadResult] = first(7345).REQUEST_TO_SPEAK;
  const analyticsLocations2 = tmp7(items).analyticsLocations;
  const items1 = [ChannelStore];
  const obj2 = channelId(504);
  const stateFromStores = obj2.useStateFromStores(items1, () => ChannelStore.getChannel(channelId));
  const obj3 = channelId(6759);
  const stageParticipantsCount = obj3.useStageParticipantsCount(channelId, channelId(6753).StageChannelParticipantNamedIndex.ALL_REQUESTED_TO_SPEAK);
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
    const AnalyticsLocationProvider = tmp2(7320).AnalyticsLocationProvider;
    obj5 = { scrollable: true, startExpanded: stageParticipantsCount >= 5, children: closure_9(BottomSheetScrollView, obj6) };
    BottomSheet = tmp2(5267).BottomSheet;
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
    BottomSheetScrollView = tmp2(5270).BottomSheetScrollView;
    obj7 = { spacing: 8, children: items4 };
    Stack = tmp2(6022).Stack;
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
    const Stack2 = tmp2(6022).Stack;
    const obj10 = { channel: stateFromStores };
    const obj9 = { hasIcons: true, children: items2 };
    const TableRowGroup = tmp2(7054).TableRowGroup;
    items2 = [closure_9(RequestToSpeakRow, obj10), ];
    const obj11 = { channel: stateFromStores };
    items2[1] = closure_9(ManageSelfSpeakerRow, obj11);
    items3 = [closure_10(TableRowGroup, obj9), ];
    const obj12 = { style: obj13, children: closure_9(Text, obj14) };
    obj13 = { paddingHorizontal: token };
    obj14 = { accessibilityRole: "header", variant: "eyebrow", color: "text-default", children: format(v5z7q5a, obj15) };
    Text = tmp2(5619).Text;
    const intl = tmp2(1114).intl;
    format = intl.format;
    const _HermesInternal = HermesInternal;
    obj15 = { numHands: "" + stageParticipantsCount };
    v5z7q5a = tmp2(1114).t["5z7q5a"];
    items3[1] = closure_9(View, obj12);
    items4 = [closure_10(Stack2, obj8), ];
    const _Math = Math;
    const obj16 = { channel: stateFromStores, height: Math.max(first1 - first - 8, 0) };
    const tmp4Result = tmp4(11855);
    items4[1] = closure_9(tmp4Result, obj16);
    tmp15 = closure_9(AnalyticsLocationProvider, obj4);
  }
  return tmp15;
};
