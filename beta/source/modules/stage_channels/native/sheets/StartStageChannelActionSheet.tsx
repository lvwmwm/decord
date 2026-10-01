// Module ID: 7845
// Function ID: 7846
// Name: StartStageChannelActionSheet
// Dependencies: [5, 32, 19, 17, 2050, 5726, 1074, 2051, 21, 4836, 576, 504, 5734, 5298, 1241, 1876, 7846, 4800, 4735, 7855, 4832, 1115, 6571, 6544, 6024, 7858, 5281, 2]
// Exports: default

// Module 7845 (StartStageChannelActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 2051 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import StageInstanceStore from "StageInstanceStore" /* 2050 */;
import StageChannelsConstants from "StageChannelsConstants" /* 5726 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let BottomSheet, c5, dependencyMap;

let Fonts;
let c10;
let c9;
let closure_14;
let map1;
let obj2;
let obj3;
let unpackModuleId;
const View = react_native.View;
({ MAX_STAGE_TOPIC_LENGTH: c9, START_STAGE_CHANNEL_EVENT_SHEET_KEY: c10 } = StageChannelsConstants);
({ AnalyticEvents: unpackModuleId, Fonts } = Constants);
let closure_12 = GuildScheduledEventsConstants.GuildScheduledEventPrivacyLevel;
({ jsx: map1, jsxs: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { padding: 16 }, header: { alignItems: "center", paddingBottom: 24 }, headerTitle: { marginTop: 16, marginBottom: 8 }, headerSubtitle: { textAlign: "center" }, startButton: { marginTop: 16 }, buttonSubtitle: { paddingTop: 8, textAlign: "center" }, ageVerificationNotice: obj2, error: obj3 };
obj2 = { marginBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingTop: 8, fontSize: 12, fontFamily: Fonts.PRIMARY_MEDIUM, color: nativeDefault.unsafe_rawColors.RED_400 };
let closure_15 = createStyles(obj);
let result = size.fileFinishedImporting("modules/stage_channels/native/sheets/StartStageChannelActionSheet.tsx");

export default function StartStageChannelEventActionSheet(channel) {
  let Button;
  let _undefined;
  let c3;
  let c4;
  let intl10;
  let intl6;
  let intl7;
  let items1;
  let items2;
  let obj12;
  let obj3;
  let stringResult;
  let stringResult1;
  let stringResult3;
  let tmp9;
  channel = channel.channel;
  let value;
  dependencyMap = undefined;
  c4 = undefined;
  let obj = function _handleSave() {
    obj = _asyncToGenerator(async function(arg0, value) {
      let closure_1;
      let closure_2;
      let tmp28Result;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let closure_0;
          let aPIError;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              closure_0 = tmp4;
              aPIError = undefined;
              if ("" !== value.trim()) {
                _undefined(true);
                _undefined(null);
                const obj4 = tmp40(c3[15]);
                const result = obj4.dismissGlobalKeyboard();
                c3 = 1;
                if (null != stateFromStores) {
                  c4 = 3;
                  c5 = 1;
                  const obj6 = { value: tmp28Result.editStage(channel, value, constants.GUILD_ONLY), done: false };
                  tmp28Result = tmp40(c3[16]);
                  return obj6;
                } else {
                  const tmp28Result2 = tmp40(c3[16]);
                  c4 = 2;
                  c5 = 1;
                  const obj7 = { value: tmp28Result2.startStage(channel, value, constants.GUILD_ONLY, false), done: false };
                  return obj7;
                }
              }
            }
          } else {
            let tmp;
            if (1 === c4) {
              c3 = 0;
              tmp = tmp40;
              const self = this;
              const self2 = this;
              aPIError = new closure_0(c3[18]).APIError(tmp);
              closure_129_4(aPIError);
              closure_129_3(false);
            } else {
              if (2 === c4) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 0;
                  c5 = 3;
                  const obj8 = { value, done: true };
                  return obj8;
                }
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                obj = { value, done: true };
                return obj;
              }
              const obj2 = tmp(c3[17]);
              obj2.hideActionSheet(closure_1_10);
              c3 = 0;
            }
          }
          c5 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp40) {
          if (0 === c3) {
            c5 = 3;
            throw tmp40;
          } else {
            c4 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  let tmp = closure_15();
  const tmp3 = dependencyMap;
  obj = channel(504);
  const items = [StageInstanceStore];
  const stateFromStores = obj.useStateFromStores(items, () => StageInstanceStore.getStageInstanceByChannel(channel.id));
  let obj2 = react;
  let str;
  const useState = react.useState;
  if (stateFromStores != null) {
    str = stateFromStores.topic;
  }
  if (str == null) {
    str = "";
  }
  const tmp5 = obj(useState(str), 2);
  value = tmp5[0];
  const tmp7 = tmp5[1];
  [tmp9, c3] = obj(obj2.useState(false), 2);
  const tmp8 = obj(obj2.useState(false), 2);
  [obj3, c4] = obj(obj2.useState(null), 2);
  const tmp10 = obj(obj2.useState(null), 2);
  const tmp2Result = channel(5734);
  const shouldAgeVerifyToSpeakForCurrentUser = tmp2Result.useShouldAgeVerifyToSpeakForCurrentUser(channel.id);
  stateFromStores(5298)(() => {
    let id;
    const track = AnalyticsUtilsDefault.track;
    const START_STAGE_OPENED = unpackModuleId.START_STAGE_OPENED;
    AnalyticsUtilsDefault;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    obj = { stage_instance_id: id, can_start_public_stage: false, guild_id: channel.guild_id };
    track(START_STAGE_OPENED, obj);
  });
  let obj4 = { style: tmp.header, children: items1 };
  items1 = [closure_13(stateFromStores(7855), {}), , ];
  let obj5 = { style: tmp.headerTitle, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: stringResult };
  const Text = tmp2(4832).Text;
  const tmp12 = stateFromStores;
  if (null == stateFromStores) {
    const intl2 = tmp2(1115).intl;
    stringResult = intl2.string(tmp2(1115).t.DDF0cJ);
  } else {
    const intl = tmp2(1115).intl;
    stringResult = intl.string(tmp2(1115).t["5BKP4y"]);
  }
  items1[1] = closure_13(Text, obj5);
  let obj6 = { style: tmp.headerSubtitle, variant: "text-sm/medium", color: "text-default", children: stringResult1 };
  const Text2 = tmp2(4832).Text;
  if (null == stateFromStores) {
    const intl4 = tmp2(1115).intl;
    stringResult1 = intl4.string(tmp2(1115).t.bqQIwa);
  } else {
    const intl3 = tmp2(1115).intl;
    stringResult1 = intl3.string(tmp2(1115).t["I+9bLx"]);
  }
  items1[2] = closure_13(Text2, obj6);
  let stringResult2;
  const tmp14Result = closure_14(View, obj4);
  if (null == stateFromStores) {
    const intl5 = tmp2(1115).intl;
    stringResult2 = intl5.string(tmp2(1115).t.gR66jX);
  }
  function handleSave() {
    return obj(...arguments);
  }
  BottomSheet = tmp2(6571).BottomSheet;
  let obj7 = { bottom: true, style: tmp.container, children: items2 };
  items2 = [tmp14Result, , , , , ];
  const SafeAreaPaddingView = tmp2(6544).SafeAreaPaddingView;
  let obj8 = { label: intl6.string(tmp2(1115).t["5FPBOB"]), maxLength, value, placeholder: intl7.string(tmp2(1115).t.ZwWruY), onChange: tmp7, autoFocus: true, returnKeyType: "done", clearable: true, onSubmitEditing: handleSave };
  const TextInput = tmp2(6024).TextInput;
  intl6 = tmp2(1115).intl;
  intl7 = tmp2(1115).intl;
  items2[1] = closure_13(TextInput, obj8);
  const obj9 = {
    onConfirmPress() {
      obj = stateFromStores(c3[17]);
      return obj.hideActionSheet(closure_1_10);
    },
    style: tmp.ageVerificationNotice,
    channelId: channel.id
  };
  items2[2] = closure_13(tmp12(7858), obj9);
  let tmp16Result = null;
  if (null != obj3) {
    const obj10 = { style: tmp.error, variant: "text-xs/medium", color: "text-feedback-critical", children: obj3.getAnyErrorMessage() };
    const Text3 = tmp2(4832).Text;
    tmp16Result = tmp16(Text3, obj10);
  }
  items2[3] = tmp16Result;
  const obj11 = { style: tmp.startButton, children: closure_13(Button, obj12) };
  Button = tmp2(5281).Button;
  if (null == stateFromStores) {
    const intl9 = tmp2(1115).intl;
    stringResult3 = intl9.string(tmp2(1115).t.s8mM8A);
  } else {
    const intl8 = tmp2(1115).intl;
    stringResult3 = intl8.string(tmp2(1115).t.K344S7);
  }
  obj12 = { text: stringResult3, onPress: handleSave, disabled: "" === value, loading: tmp9, accessibilityHint: stringResult2 };
  items2[4] = closure_13(View, obj11);
  let tmp16Result2 = null != stringResult2 && !shouldAgeVerifyToSpeakForCurrentUser;
  if (tmp16Result2) {
    const obj13 = { accessible: false, style: tmp.buttonSubtitle, variant: "text-xs/medium", color: "text-default", children: intl10.string(channel(1115).t.gR66jX) };
    const Text4 = tmp2(4832).Text;
    intl10 = tmp2(1115).intl;
    tmp16Result2 = tmp16(Text4, obj13);
  }
  items2[5] = tmp16Result2;
  const obj14 = { keyboardShouldPersistTaps: "always", children: closure_14(SafeAreaPaddingView, obj7) };
  return closure_13(BottomSheet, obj14);
};
