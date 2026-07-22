// Module ID: 10647
// Function ID: 83131
// Name: RequestToSpeakRow
// Dependencies: []
// Exports: default

// Module 10647 (RequestToSpeakRow)
function RequestToSpeakRow(channel) {
  let obj = callback(dependencyMap[9]);
  const tmp = callback2(obj.useRequestToSpeakPermission(channel.channel.id), 2);
  const first = tmp[0];
  const callback = tmp[1];
  obj = {};
  const intl = callback(dependencyMap[11]).intl;
  obj.label = intl.string(callback(dependencyMap[11]).t.TYZgzW);
  const intl2 = callback(dependencyMap[11]).intl;
  const string = intl2.string;
  const t = callback(dependencyMap[11]).t;
  if (first) {
    let stringResult = string(t.JcFI/U);
  } else {
    stringResult = string(t.laPwJQ);
  }
  obj.subLabel = stringResult;
  obj.value = first;
  obj.onValueChange = function onValueChange(arg0) {
    return callback(arg0);
  };
  return closure_9(callback(dependencyMap[10]).TableSwitchRow, obj);
}
function ManageSelfSpeakerRow(channel) {
  channel = channel.channel;
  const arg1 = channel;
  let importDefault;
  let obj = arg1(dependencyMap[12]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => id.getId());
  let id;
  if (null != channel) {
    id = channel.id;
  }
  const tmp2 = importDefault(dependencyMap[13]);
  const tmp5 = importDefault(dependencyMap[13])(stateFromStores, id) === arg1(dependencyMap[13]).RequestToSpeakStates.ON_STAGE;
  importDefault = tmp5;
  const intl = arg1(dependencyMap[11]).intl;
  const string = intl.string;
  const t = arg1(dependencyMap[11]).t;
  if (tmp5) {
    let stringResult = string(t.ezLpY6);
  } else {
    stringResult = string(t.8Joh+p);
  }
  if (tmp5) {
    let MicrophoneArrowRightIcon = tmp7(tmp8[14]).GroupArrowDownIcon;
  } else {
    MicrophoneArrowRightIcon = tmp7(tmp8[15]).MicrophoneArrowRightIcon;
  }
  obj = {
    onPress() {
      if (!tmp5) {
        let obj = channel(closure_2[17]);
        if (obj.shouldAgeVerifyToSpeakForCurrentUser(channel.id)) {
          obj = { entryPoint: channel(closure_2[19]).AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND };
          const result = closure_2(closure_2[18]).showAgeVerificationGetStartedModal(obj);
          const obj2 = closure_2(closure_2[18]);
          closure_2(closure_2[20]).hideActionSheet(closure_8);
        }
      }
      const result1 = channel(closure_2[21]).audienceAckRequestToSpeak(channel, tmp5);
      const obj5 = channel(closure_2[21]);
      tmp5(closure_2[20]).hideActionSheet(closure_8);
    },
    icon: callback3(MicrophoneArrowRightIcon, {}),
    label: stringResult
  };
  obj = { source: importDefault(dependencyMap[23]) };
  obj.trailing = callback3(arg1(dependencyMap[22]).Icon, obj);
  return callback3(arg1(dependencyMap[16]).TableRow, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = arg1(dependencyMap[5]).REQUEST_TO_SPEAK_SHEET_KEY;
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_SURFACE_HIGH };
obj.container = obj;
let closure_11 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[35]).fileFinishedImporting("modules/stage_channels/native/components/RequestToSpeakActionSheet.tsx");

export default function RequestToSpeakActionSheet(channelId) {
  channelId = channelId.channelId;
  const arg1 = channelId;
  let obj = arg1(closure_2[24]);
  const token = obj.useToken(importDefault(closure_2[8]).modules.mobile.TABLE_ROW_PADDING);
  const items = [];
  const tmp2 = callback5();
  const tmp3 = importDefault(closure_2[25]);
  items[HermesBuiltin.arraySpread(channelId.analyticsLocations, 0)] = importDefault(closure_2[26]).REQUEST_TO_SPEAK;
  let obj1 = arg1(closure_2[12]);
  const items1 = [closure_7];
  const stateFromStores = obj1.useStateFromStores(items1, () => channel.getChannel(channelId));
  let obj2 = arg1(closure_2[27]);
  const stageParticipantsCount = obj2.useStageParticipantsCount(channelId, arg1(closure_2[28]).StageChannelParticipantNamedIndex.ALL_REQUESTED_TO_SPEAK);
  const tmp7 = callback2(React.useState(0), 2);
  const first = tmp7[0];
  const importDefault = first;
  closure_2 = tmp7[1];
  const tmp9 = callback2(React.useState(0), 2);
  const first1 = tmp9[0];
  const callback2 = first1;
  const React = tmp9[1];
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
    const items2 = [callback3(RequestToSpeakRow, obj5), ];
    const obj6 = { channel: stateFromStores };
    items2[1] = callback3(ManageSelfSpeakerRow, obj6);
    obj4.children = items2;
    const items3 = [callback4(arg1(closure_2[32]).TableRowGroup, obj4), ];
    const obj7 = {};
    const obj8 = { paddingHorizontal: token };
    obj7.style = obj8;
    const obj9 = { "Bool(false)": "Text", "Bool(false)": "position", "Bool(false)": "duration" };
    const intl = arg1(closure_2[11]).intl;
    const obj10 = {};
    const _HermesInternal = HermesInternal;
    obj10.numHands = "" + stageParticipantsCount;
    obj9.children = intl.format(arg1(closure_2[11]).t.5z7q5a, obj10);
    obj7.children = callback3(arg1(closure_2[33]).Text, obj9);
    items3[1] = callback3(View, obj7);
    obj3.children = items3;
    const items4 = [callback4(arg1(closure_2[31]).Stack, obj3), ];
    const obj11 = { channel: stateFromStores };
    const _Math = Math;
    obj11.height = Math.max(first1 - first - 8, 0);
    items4[1] = callback3(importDefault(closure_2[34]), obj11);
    obj2.children = items4;
    obj1.children = callback4(arg1(closure_2[31]).Stack, obj2);
    obj.children = callback3(arg1(closure_2[30]).BottomSheetScrollView, obj1);
    obj.children = callback3(arg1(closure_2[29]).BottomSheet, obj);
    tmp11 = callback3(arg1(closure_2[25]).AnalyticsLocationProvider, obj);
    const tmp28 = importDefault(closure_2[34]);
  }
  return tmp11;
};
