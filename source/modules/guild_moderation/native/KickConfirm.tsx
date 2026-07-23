// Module ID: 10994
// Function ID: 85563
// Dependencies: [57, 31, 27, 1838, 1849, 33, 4130, 689, 5160, 9830, 566, 5048, 10995, 4126, 1212, 3969, 7504, 4543, 2]

// Module 10994
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
let obj = {};
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
obj.container = obj;
_createForOfIteratorHelperLoose = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_8, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_16, alignItems: "center" };
obj.iconLabelBlock = _createForOfIteratorHelperLoose;
obj.iconStyles = { height: 1.25 * require("_createForOfIteratorHelperLoose").space.PX_96 };
let obj2 = { height: 1.25 * require("_createForOfIteratorHelperLoose").space.PX_96 };
obj.redText = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_12, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_4, color: require("_createForOfIteratorHelperLoose").colors.TEXT_FEEDBACK_CRITICAL };
let obj3 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_12, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_4, color: require("_createForOfIteratorHelperLoose").colors.TEXT_FEEDBACK_CRITICAL };
obj.blurb = { marginVertical: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj4 = { marginVertical: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.errorText = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
let closure_13 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj5 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
const memoResult = importAllResult.memo(function KickConfirm(arg0) {
  let importDefault;
  let onKick;
  let require;
  ({ guildId: require, userId: importDefault, onKick } = arg0);
  let tmp = callback3();
  const ref = stateFromStores1.useRef(null);
  const ref1 = stateFromStores1.useRef(null);
  const insets = importDefault(onKick[8])({ includeKeyboardHeight: true }).insets;
  const items = [{ ref: ref1, offset: { type: "toBottom" } }];
  importDefault(onKick[9])({ insets, inputs: items, scrollViewRef: ref });
  let obj = require(onKick[10]);
  const items1 = [closure_8];
  const stateFromStores = obj.useStateFromStores(items1, () => outer1_8.getGuild(closure_0));
  let obj1 = require(onKick[10]);
  const items2 = [_isNativeReflectConstruct];
  stateFromStores1 = obj1.useStateFromStores(items2, () => outer1_9.getUser(closure_1));
  let closure_5 = stateFromStores1.useRef("");
  const tmp7 = stateFromStores(stateFromStores1.useState(() => ({ kicking: false, kickError: false })), 2);
  const first = tmp7[0];
  let closure_6 = tmp7[1];
  const items3 = [stateFromStores, onKick, stateFromStores1];
  let tmp11Result = null;
  if (null != stateFromStores1) {
    tmp11Result = null;
    if (null != stateFromStores) {
      obj = { style: tmp.container, ref };
      obj = { paddingHorizontal: importDefault(onKick[7]).space.PX_24, paddingBottom: insets.bottom };
      obj.contentContainerStyle = obj;
      obj1 = {};
      const obj2 = { style: tmp.iconLabelBlock };
      const obj3 = { style: tmp.iconStyles, source: importDefault(onKick[12]), resizeMode: "contain" };
      const items4 = [callback(closure_5, obj3), , ];
      const obj4 = { style: tmp.redText, variant: "text-md/semibold" };
      const intl = require(onKick[14]).intl;
      const obj5 = {};
      let obj9 = importDefault(onKick[15]);
      obj5.user = obj9.getName(stateFromStores1);
      obj4.children = intl.formatToPlainString(require(onKick[14]).t["1Ie87p"], obj5);
      items4[1] = callback(require(onKick[13]).Text, obj4);
      const obj6 = { variant: "text-lg/bold", color: "text-feedback-warning", children: stateFromStores.name };
      items4[2] = callback(require(onKick[13]).Text, obj6);
      obj2.children = items4;
      const items5 = [callback2(closure_6, obj2), , , , ];
      const obj7 = { style: tmp.blurb, variant: "heading-md/normal", color: "text-feedback-warning" };
      const intl2 = require(onKick[14]).intl;
      const obj8 = {};
      let obj13 = importDefault(onKick[15]);
      obj8.user = obj13.getName(stateFromStores1);
      obj7.children = intl2.format(require(onKick[14]).t["/yH0UT"], obj8);
      items5[1] = callback(require(onKick[13]).Text, obj7);
      obj9 = { ref: ref1 };
      const obj10 = { marginBottom: importDefault(onKick[7]).space.PX_16 };
      obj9.containerStyle = obj10;
      const intl3 = require(onKick[14]).intl;
      obj9.label = intl3.string(require(onKick[14]).t["+2QEPt"]);
      obj9.maxLength = 512;
      obj9.onChange = function onChange(current) {
        closure_5.current = current;
      };
      items5[2] = callback(require(onKick[16]).TextArea, obj9);
      const obj11 = {};
      const obj12 = { marginBottom: importDefault(onKick[7]).space.PX_16 };
      obj11.style = obj12;
      obj13 = { variant: "destructive" };
      const intl4 = require(onKick[14]).intl;
      obj13.text = intl4.string(require(onKick[14]).t["3glT6Z"]);
      obj13.onPress = tmp9;
      obj13.disabled = first.kicking;
      obj11.children = callback(require(onKick[17]).Button, obj13);
      items5[3] = callback(closure_6, obj11);
      let tmp20 = null;
      if (first.kickError) {
        const obj14 = { style: tmp.errorText, variant: "text-md/semibold", color: "input-text-error-default" };
        const intl5 = require(onKick[14]).intl;
        const obj15 = { user: importDefault(onKick[15]).getName(stateFromStores1) };
        obj14.children = intl5.format(require(onKick[14]).t.UktD5J, obj15);
        tmp20 = callback(require(onKick[13]).Text, obj14);
        const obj22 = importDefault(onKick[15]);
      }
      items5[4] = tmp20;
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
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_moderation/native/KickConfirm.tsx");

export default memoResult;
