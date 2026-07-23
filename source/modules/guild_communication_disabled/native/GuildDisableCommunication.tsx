// Module ID: 10986
// Function ID: 85504
// Name: items
// Dependencies: [5, 57, 31, 27, 1919, 653, 33, 1212, 4130, 689, 5160, 9830, 4559, 675, 10987, 3831, 4319, 10332, 5459, 7519, 7518, 7504, 4543, 2]

// Module 10986 (items)
import ME from "ME";
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import getFriendlyDurationString from "getFriendlyDurationString";
import { AnalyticEvents } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let DisableCommunicationDuration;
let closure_11;
let closure_12;
let closure_13;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ View: closure_6, ScrollView: closure_7 } = get_ActivityIndicator);
({ DisableCommunicationDuration, GUILD_COMMUNICATION_DISABLED_RESOURCE_LINK: closure_8, SET_COMMUNICATION_DISABLED_MODAL_NAME: closure_9 } = getFriendlyDurationString);
({ jsx: closure_11, Fragment: closure_12, jsxs: closure_13 } = jsxProd);
let obj = {
  value: DisableCommunicationDuration.DURATION_60_SEC,
  getLabel() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.iruf5E, { minutes: 1 });
  }
};
let items = [
  obj,
  {
    value: DisableCommunicationDuration.DURATION_5_MIN,
    getLabel() {
      const intl = require(1212) /* getSystemLocale */.intl;
      return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.iruf5E, { minutes: 5 });
    }
  },
  {
    value: DisableCommunicationDuration.DURATION_10_MIN,
    getLabel() {
      const intl = require(1212) /* getSystemLocale */.intl;
      return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.iruf5E, { minutes: 10 });
    }
  },
  {
    value: DisableCommunicationDuration.DURATION_1_HOUR,
    getLabel() {
      const intl = require(1212) /* getSystemLocale */.intl;
      return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.LnvrA3, { hours: 1 });
    }
  },
  {
    value: DisableCommunicationDuration.DURATION_1_DAY,
    getLabel() {
      const intl = require(1212) /* getSystemLocale */.intl;
      return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.jzH70Z, { days: 1 });
    }
  },
  {
    value: DisableCommunicationDuration.DURATION_1_WEEK,
    getLabel() {
      const intl = require(1212) /* getSystemLocale */.intl;
      return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.iVZYyl, { weeks: 1 });
    }
  }
];
obj = { container: { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW } };
_createForOfIteratorHelperLoose = { marginVertical: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.reasonTextArea = _createForOfIteratorHelperLoose;
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
obj.buttonContainer = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
let closure_15 = _createForOfIteratorHelperLoose.createStyles(obj);
const obj3 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
const memoResult = importAllResult.memo(function GuildDisableCommunication(arg0) {
  let dependencyMap;
  let importDefault;
  let require;
  ({ user: require, guildId: importDefault, onClose: dependencyMap } = arg0);
  let ME;
  let importAllResult;
  function _handleSubmitButtonPressed() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = callback(tmp);
    return obj(...arguments);
  }
  const tmp = callback4();
  const tmp2 = callback(importAllResult.useState(0), 2);
  ME = tmp2[0];
  callback = tmp2[1];
  importAllResult = importAllResult.useRef("");
  const ref = importAllResult.useRef(null);
  const ref1 = importAllResult.useRef(null);
  const insets = importDefault(5160)({ includeKeyboardHeight: true }).insets;
  const items = [{ ref: ref1, offset: { type: "toBottom" } }];
  importDefault(9830)({ insets, inputs: items, scrollViewRef: ref });
  importDefault(4559)(() => {
    let obj = outer1_1(outer1_2[13]);
    obj = { type: outer1_9, guild_id: closure_1, other_user_id: id.id };
    obj.track(outer1_10.OPEN_MODAL, obj);
  });
  let obj = { style: tmp.container, ref };
  obj = { paddingHorizontal: importDefault(689).space.PX_12, paddingBottom: insets.bottom };
  obj.contentContainerStyle = obj;
  obj = {};
  const obj1 = {};
  const obj2 = { marginVertical: importDefault(689).space.PX_16 };
  obj1.style = obj2;
  obj1.variant = "heading-md/semibold";
  const intl = require(1212) /* getSystemLocale */.intl;
  obj1.children = intl.format(require(1212) /* getSystemLocale */.t.Ns83GT, { helpdeskArticle: closure_8 });
  const items1 = [callback2(require(5459) /* findLinks */.TextWithIOSLinkWorkaround, obj1), , , ];
  const obj4 = {};
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj4.title = intl2.string(require(1212) /* getSystemLocale */.t["9XsExm"]);
  obj4.defaultValue = 0;
  obj4.onChange = function onChange(arg0) {
    callback2(arg0);
  };
  obj4.hasIcons = false;
  obj4.children = items.map((getLabel, value) => {
    const obj = { value, label: getLabel.getLabel() };
    return outer1_11(outer1_0(outer1_2[20]).TableRadioRow, obj, value);
  });
  items1[1] = callback2(require(7519) /* context */.TableRadioGroup, obj4);
  const obj5 = { ref: ref1, containerStyle: tmp.reasonTextArea };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj5.placeholder = intl3.string(require(1212) /* getSystemLocale */.t.GakiH1);
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj5.label = intl4.string(require(1212) /* getSystemLocale */.t.ewHW15);
  obj5.maxLength = 512;
  obj5.onChange = function onChange(current) {
    closure_5.current = current;
  };
  items1[2] = callback2(require(7504) /* TextArea */.TextArea, obj5);
  const obj6 = { style: tmp.buttonContainer };
  const obj7 = { variant: "primary" };
  const intl5 = require(1212) /* getSystemLocale */.intl;
  obj7.text = intl5.string(require(1212) /* getSystemLocale */.t.MlPTIi);
  obj7.onPress = function handleSubmitButtonPressed() {
    return _handleSubmitButtonPressed(...arguments);
  };
  obj6.children = callback2(require(4543) /* Button */.Button, obj7);
  items1[3] = callback2(_handleSubmitButtonPressed, obj6);
  obj.children = items1;
  obj.children = callback3(closure_12, obj);
  return callback2(closure_7, obj);
});
const result = require("result").fileFinishedImporting("modules/guild_communication_disabled/native/GuildDisableCommunication.tsx");

export default memoResult;
