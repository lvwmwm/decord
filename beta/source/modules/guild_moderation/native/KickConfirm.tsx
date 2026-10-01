// Module ID: 11328
// Function ID: 11329
// Name: KickConfirm
// Dependencies: [32, 19, 17, 2067, 1372, 21, 4836, 576, 6402, 10608, 504, 5832, 11329, 4832, 1115, 4678, 6506, 5281, 2]

// Module 11328 (KickConfirm)
import nativeDefault from "native" /* 576 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5832 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildStore from "GuildStore" /* 2067 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let c10;
let closure_12;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let unpackModuleId;
({ Image: hasOwnProperty, View: metroRequire, ScrollView: metroImportDefault } = react_native);
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, iconLabelBlock: obj3, iconStyles: obj4, redText: obj5, blurb: obj6, errorText: obj7 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_16, alignItems: "center" };
obj4 = { height: 1.25 * nativeDefault.space.PX_96 };
obj5 = { marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_4, color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
obj6 = { marginVertical: nativeDefault.space.PX_16 };
obj7 = { marginBottom: nativeDefault.space.PX_16 };
let closure_13 = createStyles(obj);
const memoResult = react.memo(function KickConfirm(arg0) {
  let Button;
  let UktD5J;
  let _undefined;
  let c6;
  let format;
  let format2;
  let formatToPlainString;
  let intl3;
  let intl4;
  let items;
  let items4;
  let obj12;
  let obj14;
  let obj16;
  let obj17;
  let obj19;
  let obj20;
  let obj5;
  let obj9;
  let onKick;
  let prop;
  let tmp11;
  let tmp16;
  let tmp17;
  let tmp4Result;
  let tmp4Result3;
  let tmp4Result4;
  let v1Ie87p;
  const f93422 = () => ({ kicking: false, kickError: false });
  ({ guildId: require, userId: importDefault, onKick } = arg0);
  let stateFromStores1;
  c6 = undefined;
  const tmp = closure_13();
  let ref = stateFromStores1.useRef(null);
  const ref1 = stateFromStores1.useRef(null);
  const insets = require("useSafeAreaInsetsKeyboardAware")({ includeKeyboardHeight: true }).insets;
  const obj = { insets, inputs: items, scrollViewRef: ref };
  items = [{ ref: ref1, offset: { type: "toBottom" } }];
  require("useSafeAreaAvoidingInputs")(obj);
  const items1 = [GuildStore];
  const obj2 = require("get initialized");
  const stateFromStores = obj2.useStateFromStores(items1, () => GuildStore.getGuild(require));
  const items2 = [UserStore];
  const obj3 = require("get initialized");
  stateFromStores1 = obj3.useStateFromStores(items2, () => UserStore.getUser(importDefault));
  ref = stateFromStores1.useRef("");
  [tmp11, c6] = stateFromStores(stateFromStores1.useState(f93422), 2);
  const items3 = [stateFromStores, onKick, stateFromStores1];
  let tmp14Result2 = null;
  stateFromStores(stateFromStores1.useState(f93422), 2);
  if (null != stateFromStores1) {
    tmp14Result2 = null;
    if (null != stateFromStores) {
      const obj4 = { style: tmp.container, ref, contentContainerStyle: obj5, children: tmp16(tmp17, obj20) };
      obj5 = { paddingHorizontal: require("native").space.PX_24, paddingBottom: insets.bottom };
      const obj6 = { style: tmp.iconLabelBlock, children: items4 };
      const obj7 = { style: tmp.iconStyles, source: require("AssetRegistry"), resizeMode: "contain" };
      items4 = [closure_10(ref, obj7), , ];
      const obj8 = { style: tmp.redText, variant: "text-md/semibold", children: formatToPlainString(v1Ie87p, obj9) };
      const Text = tmp7(tmp5[13]).Text;
      const intl = tmp7(tmp5[14]).intl;
      formatToPlainString = intl.formatToPlainString;
      obj9 = { user: tmp4Result.getName(stateFromStores1) };
      v1Ie87p = tmp7(tmp5[14]).t["1Ie87p"];
      tmp4Result = require("UserUtils");
      items4[1] = closure_10(Text, obj8);
      const obj10 = { variant: "text-lg/bold", color: "text-feedback-warning", children: stateFromStores.name };
      items4[2] = closure_10(require("Text/Text").Text, obj10);
      const items5 = [closure_11(c6, obj6), , , , ];
      const obj11 = { style: tmp.blurb, variant: "heading-md/normal", color: "text-feedback-warning", children: format(prop, obj12) };
      const Text2 = tmp7(tmp5[13]).Text;
      const intl2 = tmp7(tmp5[14]).intl;
      format = intl2.format;
      obj12 = { user: tmp4Result3.getName(stateFromStores1) };
      prop = tmp7(tmp5[14]).t["/yH0UT"];
      tmp4Result3 = require("UserUtils");
      items5[1] = closure_10(Text2, obj11);
      const obj13 = {
        ref: ref1,
        containerStyle: obj14,
        label: intl3.string(require("intl").t["+2QEPt"]),
        maxLength: 512,
        onChange(current) {
              ref.current = current;
            }
      };
      obj14 = { marginBottom: require("native").space.PX_16 };
      const TextArea = tmp7(tmp5[16]).TextArea;
      intl3 = tmp7(tmp5[14]).intl;
      items5[2] = closure_10(TextArea, obj13);
      const obj15 = { style: obj16, children: closure_10(Button, obj17) };
      obj16 = { marginBottom: require("native").space.PX_16 };
      obj17 = { variant: "destructive", text: intl4.string(require("intl").t["3glT6Z"]), onPress: tmp12, disabled: tmp11.kicking };
      Button = tmp7(tmp5[17]).Button;
      intl4 = tmp7(tmp5[14]).intl;
      items5[3] = closure_10(c6, obj15);
      let tmp14Result = null;
      const tmp15 = closure_7;
      tmp16 = closure_11;
      tmp17 = closure_12;
      if (tmp11.kickError) {
        const obj18 = { style: tmp.errorText, variant: "text-md/semibold", color: "input-text-error-default", children: format2(UktD5J, obj19) };
        const Text3 = tmp7(tmp5[13]).Text;
        const intl5 = tmp7(tmp5[14]).intl;
        format2 = intl5.format;
        obj19 = { user: tmp4Result4.getName(stateFromStores1) };
        UktD5J = tmp7(tmp5[14]).t.UktD5J;
        tmp4Result4 = require("UserUtils");
        tmp14Result = tmp14(Text3, obj18);
      }
      obj20 = { children: items5 };
      items5[4] = tmp14Result;
      tmp14Result2 = tmp14(tmp15, obj4);
    }
  }
  return tmp14Result2;
});
const result = size.fileFinishedImporting("modules/guild_moderation/native/KickConfirm.tsx");

export default memoResult;
