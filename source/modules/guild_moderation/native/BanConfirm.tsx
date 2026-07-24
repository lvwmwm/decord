// Module ID: 11023
// Function ID: 85761
// Name: items
// Dependencies: [57, 31, 27, 1838, 1849, 33, 1212, 664, 4130, 689, 5160, 9862, 566, 5048, 11024, 4126, 3969, 7654, 7653, 7645, 4543, 2]

// Module 11023 (items)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import closure_8 from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ Image: closure_5, View: closure_6, ScrollView: closure_7 } = get_ActivityIndicator);
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
let obj = {
  value: 0,
  getLabel() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["4obaMS"]);
  }
};
let items = [obj, , , , , , ];
obj = {
  value: require("set").Seconds.HOUR,
  getLabel() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.RKpitY);
  }
};
items[1] = obj;
items[2] = {
  value: 6 * require("set").Seconds.HOUR,
  getLabel() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["8WfJZ8"]);
  }
};
let obj1 = {
  value: 6 * require("set").Seconds.HOUR,
  getLabel() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["8WfJZ8"]);
  }
};
items[3] = {
  value: 12 * require("set").Seconds.HOUR,
  getLabel() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.p1up7u);
  }
};
let obj2 = {
  value: 12 * require("set").Seconds.HOUR,
  getLabel() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.p1up7u);
  }
};
items[4] = {
  value: require("set").Seconds.DAY,
  getLabel() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.XuVkkD);
  }
};
let obj3 = {
  value: require("set").Seconds.DAY,
  getLabel() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.XuVkkD);
  }
};
items[5] = {
  value: 3 * require("set").Seconds.DAY,
  getLabel() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["gMcDS+"]);
  }
};
let obj4 = {
  value: 3 * require("set").Seconds.DAY,
  getLabel() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["gMcDS+"]);
  }
};
items[6] = {
  value: 7 * require("set").Seconds.DAY,
  getLabel() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.FA7IUk);
  }
};
let obj6 = {};
let obj5 = {
  value: 7 * require("set").Seconds.DAY,
  getLabel() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.FA7IUk);
  }
};
obj6.container = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_8, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_16, alignItems: "center" };
obj6.iconLabelBlock = _createForOfIteratorHelperLoose;
let obj7 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
obj6.iconStyles = { height: 1.25 * require("_createForOfIteratorHelperLoose").space.PX_96 };
let obj9 = { height: 1.25 * require("_createForOfIteratorHelperLoose").space.PX_96 };
obj6.blurb = { marginVertical: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj10 = { marginVertical: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj6.redText = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_12, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_4, color: require("_createForOfIteratorHelperLoose").colors.TEXT_FEEDBACK_CRITICAL };
let obj11 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_12, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_4, color: require("_createForOfIteratorHelperLoose").colors.TEXT_FEEDBACK_CRITICAL };
obj6.errorText = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
let closure_14 = _createForOfIteratorHelperLoose.createStyles(obj6);
let obj12 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
const memoResult = importAllResult.memo(function BanConfirm(arg0) {
  let importDefault;
  let onBan;
  let require;
  ({ guildId: require, userId: importDefault, onBan } = arg0);
  let tmp = callback3();
  const ref = stateFromStores1.useRef(null);
  const ref1 = stateFromStores1.useRef(null);
  const insets = importDefault(onBan[10])({ includeKeyboardHeight: true }).insets;
  const items = [{ ref: ref1, offset: { type: "toBottom" } }];
  importDefault(onBan[11])({ insets, inputs: items, scrollViewRef: ref });
  let obj = require(onBan[12]);
  const items1 = [closure_8];
  const stateFromStores = obj.useStateFromStores(items1, () => outer1_8.getGuild(closure_0));
  let obj1 = require(onBan[12]);
  const items2 = [_isNativeReflectConstruct];
  stateFromStores1 = obj1.useStateFromStores(items2, () => outer1_9.getUser(closure_1));
  let closure_5 = stateFromStores1.useRef(0);
  let closure_6 = stateFromStores1.useRef("");
  const tmp7 = stateFromStores(stateFromStores1.useState(() => ({ banning: false, banError: false })), 2);
  const first = tmp7[0];
  let closure_7 = tmp7[1];
  const items3 = [stateFromStores, stateFromStores1, onBan];
  let tmp11Result = null;
  if (null != stateFromStores1) {
    tmp11Result = null;
    if (null != stateFromStores) {
      obj = { style: tmp.container, ref };
      obj = { paddingHorizontal: importDefault(onBan[9]).space.PX_24, paddingBottom: insets.bottom };
      obj.contentContainerStyle = obj;
      obj1 = {};
      const obj2 = { style: tmp.iconLabelBlock };
      const obj3 = { style: tmp.iconStyles, source: importDefault(onBan[14]), resizeMode: "contain" };
      const items4 = [callback(closure_5, obj3), , ];
      const obj4 = { style: tmp.redText, variant: "text-md/semibold" };
      const intl = require(onBan[6]).intl;
      const obj5 = {};
      let obj9 = importDefault(onBan[16]);
      obj5.username = obj9.getName(stateFromStores1);
      obj4.children = intl.format(require(onBan[6]).t.Qd6w7T, obj5);
      items4[1] = callback(require(onBan[15]).Text, obj4);
      const obj6 = { variant: "text-lg/bold", color: "text-feedback-warning", children: stateFromStores.name };
      items4[2] = callback(require(onBan[15]).Text, obj6);
      obj2.children = items4;
      const items5 = [callback2(closure_6, obj2), , , , , ];
      const obj7 = { style: tmp.blurb, variant: "heading-md/normal", color: "text-feedback-warning" };
      const intl2 = require(onBan[6]).intl;
      const obj8 = {};
      let obj13 = importDefault(onBan[16]);
      obj8.user = obj13.getName(stateFromStores1);
      obj7.children = intl2.format(require(onBan[6]).t["8jV9fx"], obj8);
      items5[1] = callback(require(onBan[15]).Text, obj7);
      obj9 = {};
      const intl3 = require(onBan[6]).intl;
      obj9.title = intl3.string(require(onBan[6]).t["8l3W0y"]);
      obj9.defaultValue = items[0].value;
      obj9.onChange = function onChange(current) {
        closure_5.current = current;
      };
      obj9.hasIcons = false;
      obj9.children = items.map((getLabel, value) => {
        const obj = { value, label: getLabel.getLabel() };
        return outer1_10(outer1_0(onBan[18]).TableRadioRow, obj, value);
      });
      items5[2] = callback(require(onBan[17]).TableRadioGroup, obj9);
      const obj10 = { ref: ref1 };
      const obj11 = { marginVertical: importDefault(onBan[9]).space.PX_16 };
      obj10.containerStyle = obj11;
      const intl4 = require(onBan[6]).intl;
      obj10.label = intl4.string(require(onBan[6]).t.w4Ivys);
      obj10.maxLength = 512;
      obj10.onChange = function onChange(current) {
        closure_6.current = current;
      };
      items5[3] = callback(require(onBan[19]).TextArea, obj10);
      const obj12 = {};
      obj13 = { marginBottom: importDefault(onBan[9]).space.PX_16 };
      obj12.style = obj13;
      const obj14 = { variant: "destructive" };
      const intl5 = require(onBan[6]).intl;
      obj14.text = intl5.string(require(onBan[6]).t["5MBJ5M"]);
      obj14.onPress = tmp9;
      obj14.disabled = first.banning;
      obj12.children = callback(require(onBan[20]).Button, obj14);
      items5[4] = callback(closure_6, obj12);
      let tmp21 = null;
      if (first.banError) {
        const obj15 = { style: tmp.errorText, variant: "text-md/semibold", color: "input-text-error-default" };
        const intl6 = require(onBan[6]).intl;
        const obj16 = { user: importDefault(onBan[16]).getName(stateFromStores1) };
        obj15.children = intl6.format(require(onBan[6]).t["/K6eer"], obj16);
        tmp21 = callback(require(onBan[15]).Text, obj15);
        const obj23 = importDefault(onBan[16]);
      }
      items5[5] = tmp21;
      obj1.children = items5;
      obj.children = callback2(closure_12, obj1);
      tmp11Result = callback(closure_7, obj);
      const tmp11 = callback;
      const tmp12 = closure_7;
      const tmp15 = callback2;
      const tmp16 = closure_12;
    }
  }
  return tmp11Result;
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_moderation/native/BanConfirm.tsx");

export default memoResult;
