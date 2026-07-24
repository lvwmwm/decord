// Module ID: 7561
// Function ID: 60296
// Name: StartStageChannelEventActionSheet
// Dependencies: [5, 57, 31, 27, 1353, 4947, 653, 1354, 33, 4130, 689, 566, 4955, 4559, 675, 1820, 7562, 4098, 4029, 7571, 4126, 1212, 5187, 5121, 7574, 7580, 4543, 2]
// Exports: default

// Module 7561 (StartStageChannelEventActionSheet)
import closure_4 from "MAX_STAGE_TOPIC_LENGTH";
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "set";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import MAX_STAGE_TOPIC_LENGTH from "MAX_STAGE_TOPIC_LENGTH";
import ME from "ME";
import { GuildScheduledEventPrivacyLevel as closure_12 } from "GUILD_EVENT_MAX_NAME_LENGTH";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_13;
let closure_14;
let closure_9;
const require = arg1;
({ MAX_STAGE_TOPIC_LENGTH: closure_9, START_STAGE_CHANNEL_EVENT_SHEET_KEY: closure_10 } = MAX_STAGE_TOPIC_LENGTH);
const AnalyticEvents = ME.AnalyticEvents;
({ jsx: closure_13, jsxs: closure_14 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { padding: 16 }, header: { alignItems: "center", paddingBottom: 24 }, headerTitle: { marginTop: 16, marginBottom: 8 }, headerSubtitle: { textAlign: "center" }, startButton: { marginTop: 16 }, buttonSubtitle: { paddingTop: 8, textAlign: "center" } };
_createForOfIteratorHelperLoose = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.ageVerificationNotice = _createForOfIteratorHelperLoose;
let obj1 = { paddingTop: 8, fontSize: 12, fontFamily: ME.Fonts.PRIMARY_MEDIUM, color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.RED_400 };
_createForOfIteratorHelperLoose.error = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("result").fileFinishedImporting("modules/stage_channels/native/sheets/StartStageChannelActionSheet.tsx");

export default function StartStageChannelEventActionSheet(channel) {
  let c3;
  let c4;
  let obj2;
  let tmp8;
  channel = channel.channel;
  let stateFromStores;
  let first;
  let dependencyMap;
  c4 = undefined;
  function handleSave() {
    return _handleSave(...arguments);
  }
  async function _handleSave(result, arg1) {
    if ("" !== outer2_2.trim()) {
      outer2_3(true);
      outer2_4(null);
      const result = first(1820).dismissGlobalKeyboard();
      if (null != outer2_1) {
        yield first(7562).editStage(outer2_0, outer2_2, outer3_12.GUILD_ONLY);
        const obj2 = first(7562);
        stateFromStores(4098).hideActionSheet(outer3_10);
        const obj3 = stateFromStores(4098);
      } else {
        const obj = first(7562);
        return yield obj.startStage(outer2_0, outer2_2, outer3_12.GUILD_ONLY, false);
      }
      const obj4 = first(1820);
    }
  }
  const tmp = _createForOfIteratorHelperLoose();
  let obj = channel(566);
  const items = [_isNativeReflectConstruct];
  stateFromStores = obj.useStateFromStores(items, () => outer1_8.getStageInstanceByChannel(channel.id));
  let topic;
  if (null != stateFromStores) {
    topic = stateFromStores.topic;
  }
  let str = "";
  if (null != topic) {
    str = topic;
  }
  const tmp5 = _handleSave(React.useState(str), 2);
  first = tmp5[0];
  [tmp8, c3] = _handleSave(React.useState(false), 2);
  const tmp7 = _handleSave(React.useState(false), 2);
  [obj2, c4] = _handleSave(React.useState(null), 2);
  obj2 = channel(4955);
  const shouldAgeVerifyToSpeakForCurrentUser = obj2.useShouldAgeVerifyToSpeakForCurrentUser(channel.id);
  stateFromStores(4559)(() => {
    let obj = stateFromStores(_undefined[14]);
    obj = {};
    let id;
    if (null != stateFromStores) {
      id = stateFromStores.id;
    }
    obj.stage_instance_id = id;
    obj.can_start_public_stage = false;
    obj.guild_id = channel.guild_id;
    obj.track(outer1_11.START_STAGE_OPENED, obj);
  });
  obj = { style: tmp.header };
  const items1 = [callback(stateFromStores(7571), {}), , ];
  obj = { style: tmp.headerTitle, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary" };
  if (null == stateFromStores) {
    const intl2 = channel(1212).intl;
    let stringResult = intl2.string(channel(1212).t.DDF0cJ);
  } else {
    const intl = channel(1212).intl;
    stringResult = intl.string(channel(1212).t["5BKP4y"]);
  }
  obj.children = stringResult;
  items1[1] = callback(channel(4126).Text, obj);
  const obj1 = { style: tmp.headerSubtitle, variant: "text-sm/medium", color: "text-default" };
  if (null == stateFromStores) {
    const intl4 = channel(1212).intl;
    let stringResult1 = intl4.string(channel(1212).t.bqQIwa);
  } else {
    const intl3 = channel(1212).intl;
    stringResult1 = intl3.string(channel(1212).t["I+9bLx"]);
  }
  obj1.children = stringResult1;
  items1[2] = callback(channel(4126).Text, obj1);
  obj.children = items1;
  let stringResult2;
  const tmp12 = closure_14;
  const tmp13 = View;
  const tmp14 = callback;
  const tmp20 = callback;
  const tmp9 = _handleSave(React.useState(null), 2);
  if (null == stateFromStores) {
    const intl5 = channel(1212).intl;
    stringResult2 = intl5.string(channel(1212).t.gR66jX);
  }
  obj2 = { keyboardShouldPersistTaps: "always" };
  let obj3 = { bottom: true, style: tmp.container };
  const items2 = [closure_14(View, obj), , , , , ];
  let obj4 = {};
  const intl6 = channel(1212).intl;
  obj4.label = intl6.string(channel(1212).t["5FPBOB"]);
  obj4.maxLength = closure_9;
  obj4.value = first;
  const intl7 = channel(1212).intl;
  obj4.placeholder = intl7.string(channel(1212).t.ZwWruY);
  obj4.onChange = tmp5[1];
  obj4.autoFocus = true;
  obj4.returnKeyType = "done";
  obj4.isClearable = true;
  const intl8 = channel(1212).intl;
  obj4.accessibilityLabel = intl8.string(channel(1212).t["5FPBOB"]);
  obj4.onSubmitEditing = handleSave;
  items2[1] = callback(channel(7574).TextInput, obj4);
  items2[2] = callback(stateFromStores(7580), {
    onConfirmPress() {
      return stateFromStores(_undefined[17]).hideActionSheet(outer1_10);
    },
    style: tmp.ageVerificationNotice,
    channelId: channel.id
  });
  let tmp32 = null;
  if (null != obj1) {
    const obj6 = { style: tmp.error, variant: "text-xs/medium", color: "text-feedback-critical", children: obj1.getAnyErrorMessage() };
    tmp32 = callback(channel(4126).Text, obj6);
  }
  items2[3] = tmp32;
  const obj7 = { style: tmp.startButton };
  const obj8 = {};
  if (null == stateFromStores) {
    const intl10 = channel(1212).intl;
    let stringResult3 = intl10.string(channel(1212).t.s8mM8A);
  } else {
    const intl9 = channel(1212).intl;
    stringResult3 = intl9.string(channel(1212).t.K344S7);
  }
  obj8.text = stringResult3;
  obj8.onPress = handleSave;
  obj8.disabled = "" === first;
  obj8.loading = tmp8;
  obj8.accessibilityHint = stringResult2;
  obj7.children = callback(channel(4543).Button, obj8);
  items2[4] = callback(View, obj7);
  let tmp43 = null != stringResult2 && !shouldAgeVerifyToSpeakForCurrentUser;
  if (tmp43) {
    const obj9 = { accessible: false, style: tmp.buttonSubtitle, variant: "text-xs/medium", color: "text-default" };
    const intl11 = channel(1212).intl;
    obj9.children = intl11.string(channel(1212).t.gR66jX);
    tmp43 = callback(channel(4126).Text, obj9);
  }
  items2[5] = tmp43;
  obj3.children = items2;
  obj2.children = closure_14(channel(5121).SafeAreaPaddingView, obj3);
  return callback(channel(5187).BottomSheet, obj2);
};
