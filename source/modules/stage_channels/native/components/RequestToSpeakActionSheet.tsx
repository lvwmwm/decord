// Module ID: 10651
// Function ID: 83065
// Name: RequestToSpeakRow
// Dependencies: [57, 31, 27, 1194, 1348, 4948, 33, 4131, 689, 10652, 5502, 1212, 566, 4315, 10653, 10655, 5164, 4956, 6690, 6692, 4099, 6658, 1273, 10657, 3835, 5462, 5482, 4964, 4958, 5187, 5189, 4542, 5501, 4127, 10658, 2]
// Exports: default

// Module 10651 (RequestToSpeakRow)
import _slicedToArray from "_slicedToArray";
import Stack from "Stack";
import { View } from "useStageParticipants";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { REQUEST_TO_SPEAK_SHEET_KEY as closure_8 } from "MAX_STAGE_TOPIC_LENGTH";
import jsxProd from "Text";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_9;
const require = arg1;
function RequestToSpeakRow(channel) {
  let obj = _require(10652);
  const tmp = callback(obj.useRequestToSpeakPermission(channel.channel.id), 2);
  const first = tmp[0];
  _require = tmp[1];
  obj = {};
  const intl = _require(1212).intl;
  obj.label = intl.string(_require(1212).t.TYZgzW);
  const intl2 = _require(1212).intl;
  const string = intl2.string;
  const t = _require(1212).t;
  if (first) {
    let stringResult = string(t["JcFI/U"]);
  } else {
    stringResult = string(t.laPwJQ);
  }
  obj.subLabel = stringResult;
  obj.value = first;
  obj.onValueChange = function onValueChange(arg0) {
    return callback(arg0);
  };
  return closure_9(_require(5502).TableSwitchRow, obj);
}
function ManageSelfSpeakerRow(channel) {
  channel = channel.channel;
  let importDefault;
  let obj = channel(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getId());
  let id;
  if (null != channel) {
    id = channel.id;
  }
  const tmp2 = importDefault(4315);
  const tmp5 = importDefault(4315)(stateFromStores, id) === channel(4315).RequestToSpeakStates.ON_STAGE;
  importDefault = tmp5;
  const intl = channel(1212).intl;
  const string = intl.string;
  const t = channel(1212).t;
  if (tmp5) {
    let stringResult = string(t.ezLpY6);
  } else {
    stringResult = string(t["8Joh+p"]);
  }
  if (tmp5) {
    let MicrophoneArrowRightIcon = tmp7(10653).GroupArrowDownIcon;
  } else {
    MicrophoneArrowRightIcon = tmp7(10655).MicrophoneArrowRightIcon;
  }
  obj = {
    onPress() {
      if (!_undefined) {
        let obj = channel(outer1_2[17]);
        if (obj.shouldAgeVerifyToSpeakForCurrentUser(channel.id)) {
          obj = { entryPoint: channel(outer1_2[19]).AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND };
          const result = _undefined(outer1_2[18]).showAgeVerificationGetStartedModal(obj);
          const obj2 = _undefined(outer1_2[18]);
          _undefined(outer1_2[20]).hideActionSheet(outer1_8);
        }
      }
      const result1 = channel(outer1_2[21]).audienceAckRequestToSpeak(channel, _undefined);
      const obj5 = channel(outer1_2[21]);
      _undefined(outer1_2[20]).hideActionSheet(outer1_8);
    },
    icon: callback2(MicrophoneArrowRightIcon, {}),
    label: stringResult
  };
  obj = { source: importDefault(10657) };
  obj.trailing = callback2(channel(1273).Icon, obj);
  return callback2(channel(5164).TableRow, obj);
}
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("get ActivityIndicator").fileFinishedImporting("modules/stage_channels/native/components/RequestToSpeakActionSheet.tsx");

export default function RequestToSpeakActionSheet(channelId) {
  channelId = channelId.channelId;
  let obj = channelId(3835);
  const token = obj.useToken(first(689).modules.mobile.TABLE_ROW_PADDING);
  const items = [];
  const tmp2 = _createForOfIteratorHelperLoose();
  const tmp3 = first(5462);
  items[HermesBuiltin.arraySpread(channelId.analyticsLocations, 0)] = first(5482).REQUEST_TO_SPEAK;
  let obj1 = channelId(566);
  const items1 = [closure_7];
  const stateFromStores = obj1.useStateFromStores(items1, () => outer1_7.getChannel(channelId));
  let obj2 = channelId(4964);
  const stageParticipantsCount = obj2.useStageParticipantsCount(channelId, channelId(4958).StageChannelParticipantNamedIndex.ALL_REQUESTED_TO_SPEAK);
  const tmp7 = first1(React.useState(0), 2);
  first = tmp7[0];
  const dependencyMap = tmp7[1];
  const tmp9 = first1(React.useState(0), 2);
  first1 = tmp9[0];
  React = tmp9[1];
  let tmp11 = null;
  if (null != stateFromStores) {
    obj = { value: tmp3(items).analyticsLocations };
    obj = { scrollable: true, startExpanded: stageParticipantsCount >= 5 };
    obj1 = {
      style: tmp2.container,
      onLayout(nativeEvent) {
          const height = nativeEvent.nativeEvent.layout.height;
          let tmp = null != height;
          if (tmp) {
            tmp = first1 !== height;
          }
          if (tmp) {
            callback2(height);
          }
        }
    };
    obj2 = { spacing: 8 };
    const obj3 = {
      spacing: 8,
      onLayout(nativeEvent) {
          const height = nativeEvent.nativeEvent.layout.height;
          let tmp = null != height;
          if (tmp) {
            tmp = first !== height;
          }
          if (tmp) {
            callback(height);
          }
        }
    };
    const obj4 = { hasIcons: true };
    const obj5 = { channel: stateFromStores };
    const items2 = [callback2(RequestToSpeakRow, obj5), ];
    const obj6 = { channel: stateFromStores };
    items2[1] = callback2(ManageSelfSpeakerRow, obj6);
    obj4.children = items2;
    const items3 = [callback3(channelId(5501).TableRowGroup, obj4), ];
    const obj7 = {};
    const obj8 = { paddingHorizontal: token };
    obj7.style = obj8;
    const obj9 = { accessibilityRole: "header", variant: "eyebrow", color: "text-default" };
    const intl = channelId(1212).intl;
    const obj10 = {};
    const _HermesInternal = HermesInternal;
    obj10.numHands = "" + stageParticipantsCount;
    obj9.children = intl.format(channelId(1212).t["5z7q5a"], obj10);
    obj7.children = callback2(channelId(4127).Text, obj9);
    items3[1] = callback2(View, obj7);
    obj3.children = items3;
    const items4 = [callback3(channelId(4542).Stack, obj3), ];
    const obj11 = { channel: stateFromStores };
    const _Math = Math;
    obj11.height = Math.max(first1 - first - 8, 0);
    items4[1] = callback2(first(10658), obj11);
    obj2.children = items4;
    obj1.children = callback3(channelId(4542).Stack, obj2);
    obj.children = callback2(channelId(5189).BottomSheetScrollView, obj1);
    obj.children = callback2(channelId(5187).BottomSheet, obj);
    tmp11 = callback2(channelId(5462).AnalyticsLocationProvider, obj);
    const tmp28 = first(10658);
  }
  return tmp11;
};
