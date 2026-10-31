// Module ID: 13262
// Function ID: 13263
// Name: KickConfirm
// Dependencies: [32, 19, 17, 4885, 1383, 21, 5014, 575, 5607, 11404, 504, 13263, 6902, 5717, 13264, 5624, 1113, 5068, 12558, 3868, 7253, 5634, 13265, 2]

// Module 13262 (KickConfirm)
import nativeDefault from "native" /* 575 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6902 */;
import removeConjureServerAppDefault from "removeConjureServerApp" /* 13265 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildStore from "GuildStore" /* 4885 */;
import UserStore from "UserStore" /* 1383 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let obj10;
let obj11;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let unpackModuleId;
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
const obj = { container: obj2, iconLabelBlock: obj3, iconStyles: obj4, redText: obj5, conjureTitle: obj6, conjureServerName: obj7, blurb: obj8, removeEverything: obj9, errorText: obj10, actions: obj11 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_16, alignItems: "center" };
obj4 = { height: 1.25 * nativeDefault.space.PX_96 };
obj5 = { marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_4, color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
obj6 = { marginTop: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, textAlign: "center" };
obj7 = { marginTop: nativeDefault.space.PX_4, marginBottom: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_16, textAlign: "center" };
obj8 = { marginVertical: nativeDefault.space.PX_16 };
obj9 = { marginBottom: nativeDefault.space.PX_16 };
obj10 = { marginBottom: nativeDefault.space.PX_16 };
obj11 = { marginBottom: nativeDefault.space.PX_16 };
let closure_12 = createStyles(obj);
const memoResult = react.memo(function KickConfirm(guildId) {
  let Button;
  let UktD5J;
  let _undefined;
  let c10;
  let format2;
  let formatResult;
  let formatToPlainString;
  let intl4;
  let intl5;
  let intl6;
  let items;
  let items5;
  let items6;
  let items7;
  let obj11;
  let obj19;
  let obj21;
  let obj23;
  let obj26;
  let obj27;
  let obj6;
  let tmp21;
  let tmp4Result4;
  let tmp4Result5;
  let tmp4Result6;
  let tmp7Result4;
  let v1Ie87p;
  const f104168 = () => ({ kicking: false, kickError: false });
  guildId = guildId.guildId;
  const userId = guildId.userId;
  const onKick = guildId.onKick;
  let stateFromStores1;
  let conjureServerApp;
  let items3;
  let checked;
  let closure_8;
  c10 = undefined;
  let closure_11;
  let tmp = closure_12();
  let ref = stateFromStores1.useRef(null);
  const ref1 = stateFromStores1.useRef(null);
  const tmp4 = userId;
  const tmp5 = onKick;
  const insets = userId(onKick[8])({ includeKeyboardHeight: true }).insets;
  const obj2 = { insets, inputs: items, scrollViewRef: ref };
  items = [{ ref: ref1, offset: { type: "toBottom" } }];
  const tmp6 = userId(onKick[9])(obj2);
  const tmp7 = guildId;
  const items1 = [checked];
  const obj3 = guildId(onKick[10]);
  const stateFromStores = obj3.useStateFromStores(items1, () => GuildStore.getGuild(guildId));
  const items2 = [closure_8];
  const obj4 = guildId(onKick[10]);
  stateFromStores1 = obj4.useStateFromStores(items2, () => UserStore.getUser(userId));
  let bot;
  const useConjureServerApp = guildId(onKick[11]).useConjureServerApp;
  const tmp10 = guildId(onKick[11]);
  if (stateFromStores1 != null) {
    bot = stateFromStores1.bot;
  }
  let result = null;
  if (true === bot) {
    const tmp7Result = tmp7(tmp5[11]);
    result = tmp7Result.conjureApplicationIdForBot(userId);
  }
  conjureServerApp = useConjureServerApp(guildId, result);
  let rest;
  if (conjureServerApp != null) {
    rest = conjureServerApp.rest;
  }
  if (null == rest) {
    items3 = [];
  } else {
    const tmp7Result3 = tmp7(tmp5[11]);
    items3 = tmp7Result3.conjureKickAppItems(conjureServerApp.rest);
  }
  const tmp15 = stateFromStores(stateFromStores1.useState(true), 2);
  checked = tmp15[0];
  const tmp17 = tmp15[1];
  const tmp18 = stateFromStores(stateFromStores1.useState(false), 2);
  closure_8 = tmp18[1];
  const first1 = tmp18[0];
  ref = obj.useRef("");
  [tmp21, c10] = stateFromStores(stateFromStores1.useState(f104168), 2);
  const items4 = [stateFromStores, onKick, stateFromStores1];
  stateFromStores(stateFromStores1.useState(f104168), 2);
  closure_11 = obj.useCallback(() => {
    const tmp2 = null != stateFromStores && null != stateFromStores1;
    if (tmp2) {
      _undefined({ kicking: true, kickError: false });
      let id;
      const kickUser = GuildActionCreatorsDefault.kickUser;
      GuildActionCreatorsDefault;
      if (stateFromStores != null) {
        id = tmp.id;
      }
      let id1;
      if (stateFromStores1 != null) {
        id1 = stateFromStores1.id;
      }
      const kickUserResult = kickUser(id, id1, ref.current);
      const nextPromise = kickUserResult.then(onKick);
      nextPromise.catch(() => {
        _undefined({ kicking: false, kickError: true });
      });
    }
  }, items4);
  let tmp23Result6 = null;
  if (null != stateFromStores1) {
    tmp23Result6 = null;
    if (null != stateFromStores) {
      let obj13;
      const obj5 = { style: tmp.container, ref, contentContainerStyle: obj6, children: closure_11(c10, obj27) };
      obj6 = { paddingHorizontal: tmp4(tmp5[7]).space.PX_24, paddingBottom: insets.bottom };
      const obj7 = { style: tmp.iconLabelBlock, children: items5 };
      const obj8 = { style: tmp.iconStyles, source: tmp4(tmp5[14]), resizeMode: "contain" };
      const tmp4Result = tmp4(tmp5[13]);
      items5 = [ref(tmp4Result, obj8), ];
      const tmp24 = items3;
      if (null == conjureServerApp) {
        const obj9 = { children: items6 };
        const obj10 = { style: tmp.redText, variant: "text-md/semibold", children: formatToPlainString(v1Ie87p, obj11) };
        const Text = tmp7(tmp5[15]).Text;
        const intl = tmp7(tmp5[16]).intl;
        formatToPlainString = intl.formatToPlainString;
        obj11 = { user: tmp4Result4.getName(stateFromStores1) };
        v1Ie87p = tmp7(tmp5[16]).t["1Ie87p"];
        tmp4Result4 = tmp4(tmp5[17]);
        items6 = [ref(Text, obj10), ];
        const obj12 = { variant: "text-lg/bold", color: "text-feedback-warning", children: stateFromStores.name };
        items6[1] = ref(tmp7(tmp5[15]).Text, obj12);
        obj13 = obj9;
      } else {
        obj13 = { children: items7 };
        const obj14 = { style: tmp.conjureTitle, variant: "text-lg/bold", color: "mobile-text-heading-primary", children: tmp7Result4.formatWithAppTag(tmp4(tmp5[19]).wVNCN7, conjureServerApp.targetAppName) };
        const Text5 = tmp7(tmp5[15]).Text;
        tmp7Result4 = tmp7(tmp5[18]);
        items7 = [ref(Text5, obj14), ];
        const obj15 = { style: tmp.conjureServerName, variant: "text-md/semibold", color: "text-muted", children: stateFromStores.name };
        items7[1] = ref(tmp7(tmp5[15]).Text, obj15);
      }
      items5[1] = closure_11(c10, obj13);
      const items8 = [closure_11(conjureServerApp, obj7), , , , , , ];
      const obj16 = { style: tmp.blurb, variant: "heading-md/normal", color: "text-feedback-warning", children: formatResult };
      const Text2 = tmp7(tmp5[15]).Text;
      if (null == conjureServerApp) {
        const intl3 = tmp7(tmp5[16]).intl;
        const format = intl3.format;
        const obj17 = { user: tmp4Result5.getName(stateFromStores1) };
        const prop = tmp7(tmp5[16]).t["/yH0UT"];
        tmp4Result5 = tmp4(tmp5[17]);
        formatResult = format(prop, obj17);
      } else {
        const intl2 = tmp7(tmp5[16]).intl;
        formatResult = intl2.string(tmp4(tmp5[19])["tw+iyx"]);
      }
      items8[1] = ref(Text2, obj16);
      let tmp23Result = null;
      if (items3.length > 0) {
        const obj18 = { style: tmp.removeEverything, children: ref(tmp7(tmp5[18]).ConjureRemoveEverythingField, obj19) };
        obj19 = { checked, onChange: tmp17, items: items3 };
        tmp23Result = tmp23(tmp27, obj18);
      }
      items8[2] = tmp23Result;
      const obj20 = {
        ref: ref1,
        containerStyle: obj21,
        label: intl4.string(tmp7(tmp5[16]).t["+2QEPt"]),
        maxLength: 512,
        onChange(current) {
              ref.current = current;
            }
      };
      obj21 = { marginBottom: tmp4(tmp5[7]).space.PX_16 };
      const TextArea = tmp7(tmp5[20]).TextArea;
      intl4 = tmp7(tmp5[16]).intl;
      items8[3] = ref(TextArea, obj20);
      const obj22 = { style: tmp.actions, children: ref(Button, obj23) };
      obj23 = {
        variant: "destructive",
        text: intl5.string(tmp7(tmp5[16]).t["3glT6Z"]),
        onPress: function handleConfirm() {
              let tmp;
              if (null != conjureServerApp) {
                if (0 !== items3.length) {
                  const tmp3 = first;
                  if (tmp3) {
                    _undefined({ kicking: true, kickError: false });
                    closure_8(false);
                    const promise = removeConjureServerAppDefault(tmp);
                    promise.then((result) => {
                      const tmp = result;
                      if (tmp) {
                        onKick();
                      } else {
                        _undefined({ kicking: false, kickError: false });
                        closure_1_8(true);
                      }
                    }, () => {

                    });
                  }
                }
              }
              closure_11();
            },
        disabled: tmp21.kicking
      };
      Button = tmp7(tmp5[21]).Button;
      intl5 = tmp7(tmp5[16]).intl;
      items8[4] = ref(conjureServerApp, obj22);
      let tmp23Result4 = null;
      if (first1) {
        const obj24 = { style: tmp.errorText, variant: "text-md/semibold", color: "input-text-error-default", children: intl6.string(tmp4(tmp5[19]).PJ2Fkn) };
        const Text3 = tmp7(tmp5[15]).Text;
        intl6 = tmp7(tmp5[16]).intl;
        tmp23Result4 = tmp23(Text3, obj24);
      }
      items8[5] = tmp23Result4;
      let tmp23Result5 = null;
      if (tmp21.kickError) {
        const obj25 = { style: tmp.errorText, variant: "text-md/semibold", color: "input-text-error-default", children: format2(UktD5J, obj26) };
        const Text4 = tmp7(tmp5[15]).Text;
        const intl7 = tmp7(tmp5[16]).intl;
        format2 = intl7.format;
        obj26 = { user: tmp4Result6.getName(stateFromStores1) };
        UktD5J = tmp7(tmp5[16]).t.UktD5J;
        tmp4Result6 = tmp4(tmp5[17]);
        tmp23Result5 = tmp23(Text4, obj25);
      }
      obj27 = { children: items8 };
      items8[6] = tmp23Result5;
      tmp23Result6 = tmp23(tmp24, obj5);
    }
  }
  return tmp23Result6;
});
let result = size.fileFinishedImporting("modules/guild_moderation/native/KickConfirm.tsx");

export default memoResult;
