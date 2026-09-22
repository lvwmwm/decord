// Module ID: 11983
// Function ID: 11984
// Name: KickConfirm
// Dependencies: [32, 19, 17, 1979, 1371, 21, 4636, 576, 7084, 11284, 504, 5601, 11984, 4632, 1114, 4481, 7188, 5056, 2]

// Module 11983 (KickConfirm)
import nativeDefault from "native" /* 576 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5601 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1979 */;
import UserStore from "UserStore" /* 1371 */;

const require = globalThis.__r;

const require = fn;
get_ActivityIndicator = fn(17);
({ Image: hasOwnProperty, View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const createStyles = fn(4636);
let obj = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, iconLabelBlock: null, iconStyles: null, redText: null, blurb: null, errorText: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.iconLabelBlock = { marginTop: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_16, alignItems: "center" };
let obj4 = { marginTop: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_16, alignItems: "center" };
obj.iconStyles = { height: 1.25 * nativeDefault.space.PX_96 };
let obj5 = { height: 1.25 * nativeDefault.space.PX_96 };
obj.redText = { marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_4, color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
let obj6 = { marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_4, color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
obj.blurb = { marginVertical: nativeDefault.space.PX_16 };
let obj7 = { marginVertical: nativeDefault.space.PX_16 };
obj.errorText = { marginBottom: nativeDefault.space.PX_16 };
let closure_13 = createStyles.createStyles(obj);
let obj8 = { marginBottom: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_moderation/native/KickConfirm.tsx");

export default noop.memo(function KickConfirm(arg0) {
  ({ guildId: require, userId: importDefault, onKick } = arg0);
  let stateFromStores1;
  c6 = undefined;
  const tmp = closure_13();
  let ref = stateFromStores1.useRef(null);
  const ref1 = stateFromStores1.useRef(null);
  const insets = require("useSafeAreaInsetsKeyboardAware")({ includeKeyboardHeight: true }).insets;
  let obj = { insets, inputs: null, scrollViewRef: ref };
  const items = [{ ref: ref1, offset: { type: "toBottom" } }];
  obj.inputs = items;
  require("useSafeAreaAvoidingInputs")(obj);
  const items1 = [GuildStore];
  const stateFromStores = require("initialize").useStateFromStores(items1, () => GuildStore.getGuild(require));
  const obj2 = require("initialize");
  const items2 = [UserStore];
  stateFromStores1 = require("initialize").useStateFromStores(items2, () => UserStore.getUser(importDefault));
  ref = stateFromStores1.useRef("");
  const obj3 = require("initialize");
  [tmp11, c6] = stateFromStores(stateFromStores1.useState(() => ({ kicking: false, kickError: false })), 2);
  const items3 = [stateFromStores, onKick, stateFromStores1];
  let tmp14Result2 = null;
  if (null != stateFromStores1) {
    tmp14Result2 = null;
    if (null != stateFromStores) {
      const obj4 = { style: tmp.container, ref, contentContainerStyle: null, children: null };
      const obj5 = { paddingHorizontal: tmp4(tmp5[7]).space.PX_24, paddingBottom: insets.bottom };
      obj4.contentContainerStyle = obj5;
      const obj6 = { style: tmp.iconLabelBlock, children: null };
      const obj7 = { style: tmp.iconStyles, source: tmp4(tmp5[12]), resizeMode: "contain" };
      const items4 = [closure_10(ref, obj7), , ];
      const obj8 = { style: tmp.redText, variant: "text-md/semibold", children: null };
      const intl = tmp7(tmp5[14]).intl;
      const obj9 = { user: tmp4(tmp5[15]).getName(stateFromStores1) };
      obj8.children = intl.formatToPlainString(tmp7(tmp5[14]).t["1Ie87p"], obj9);
      items4[1] = closure_10(tmp7(tmp5[13]).Text, obj8);
      const obj10 = { variant: "text-lg/bold", color: "text-feedback-warning", children: stateFromStores.name };
      items4[2] = closure_10(tmp7(tmp5[13]).Text, obj10);
      obj6.children = items4;
      const items5 = [closure_11(c6, obj6), , , , ];
      const obj11 = { style: tmp.blurb, variant: "heading-md/normal", color: "text-feedback-warning", children: null };
      const intl2 = tmp7(tmp5[14]).intl;
      const obj12 = { user: null };
      const tmp15 = closure_7;
      const tmp16 = closure_11;
      const tmp17 = closure_12;
      const tmp4Result = tmp4(tmp5[15]);
      obj12.user = tmp4(tmp5[15]).getName(stateFromStores1);
      obj11.children = intl2.format(tmp7(tmp5[14]).t["/yH0UT"], obj12);
      items5[1] = closure_10(tmp7(tmp5[13]).Text, obj11);
      const obj13 = { ref: ref1, containerStyle: null, label: null, maxLength: 512, onChange: null };
      const obj14 = { marginBottom: tmp4(tmp5[7]).space.PX_16 };
      obj13.containerStyle = obj14;
      const intl3 = tmp7(tmp5[14]).intl;
      obj13.label = intl3.string(tmp7(tmp5[14]).t["+2QEPt"]);
      obj13.onChange = function onChange(current) {
        closure_5.current = current;
      };
      items5[2] = closure_10(tmp7(tmp5[16]).TextArea, obj13);
      const obj15 = { style: null, children: null };
      const obj16 = { marginBottom: tmp4(tmp5[7]).space.PX_16 };
      obj15.style = obj16;
      const obj17 = { variant: "destructive", text: null, onPress: null, disabled: null };
      const intl4 = tmp7(tmp5[14]).intl;
      obj17.text = intl4.string(tmp7(tmp5[14]).t["3glT6Z"]);
      obj17.onPress = tmp12;
      obj17.disabled = tmp11.kicking;
      obj15.children = closure_10(tmp7(tmp5[17]).Button, obj17);
      items5[3] = closure_10(c6, obj15);
      let tmp14Result = null;
      if (tmp11.kickError) {
        const obj18 = { style: tmp.errorText, variant: "text-md/semibold", color: "input-text-error-default", children: null };
        const intl5 = tmp7(tmp5[14]).intl;
        const obj19 = { user: tmp4(tmp5[15]).getName(stateFromStores1) };
        obj18.children = intl5.format(tmp7(tmp5[14]).t.UktD5J, obj19);
        tmp14Result = tmp14(tmp7(tmp5[13]).Text, obj18);
        const tmp4Result4 = tmp4(tmp5[15]);
      }
      const obj20 = { children: null };
      items5[4] = tmp14Result;
      obj20.children = items5;
      obj4.children = tmp16(tmp17, obj20);
      tmp14Result2 = tmp14(tmp15, obj4);
      const tmp4Result3 = tmp4(tmp5[15]);
    }
  }
  return tmp14Result2;
});
