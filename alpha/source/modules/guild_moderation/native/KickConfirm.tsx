// Module ID: 14048
// Function ID: 14049
// Name: KickConfirm
// Dependencies: [32, 19, 17, 5114, 1385, 21, 5243, 575, 5850, 11791, 504, 14049, 6854, 5957, 14050, 5866, 1113, 5309, 13212, 4079, 14051, 13211, 7793, 5873, 2]

// Module 14048 (KickConfirm)
import nativeDefault from "native" /* 575 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6854 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildStore from "GuildStore" /* 5114 */;
import UserStore from "UserStore" /* 1385 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
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
const obj = { container: obj2, iconLabelBlock: obj3, iconStyles: obj4, redText: obj5, conjureTitle: obj6, conjureServerName: obj7, blurb: obj8, conjureRemove: obj9, errorText: obj10, actions: obj11 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_16, alignItems: "center" };
obj4 = { height: 1.25 * nativeDefault.space.PX_96 };
obj5 = { marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_4, color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
obj6 = { marginTop: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, textAlign: "center" };
obj7 = { marginTop: nativeDefault.space.PX_4, marginBottom: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_16, textAlign: "center" };
obj8 = { marginVertical: nativeDefault.space.PX_16 };
obj9 = { marginVertical: nativeDefault.space.PX_16 };
obj10 = { marginBottom: nativeDefault.space.PX_16 };
obj11 = { marginBottom: nativeDefault.space.PX_16 };
let closure_12 = createStyles(obj);
const memoResult = react.memo(function KickConfirm(guildId) {
  let Button;
  let UktD5J;
  let _undefined;
  let c6;
  let format2;
  let formatResult;
  let formatToPlainString;
  let intl4;
  let items;
  let items4;
  let items5;
  let items6;
  let obj11;
  let obj17;
  let obj22;
  let obj25;
  let obj27;
  let obj28;
  let obj6;
  let tmp16;
  let tmp4Result5;
  let tmp4Result6;
  let tmp4Result7;
  let tmp4Result8;
  let tmp7Result3;
  let tmp7Result4;
  let v1Ie87p;
  const f107853 = () => ({ kicking: false, kickError: false });
  guildId = guildId.guildId;
  const userId = guildId.userId;
  const onKick = guildId.onKick;
  let stateFromStores1;
  c6 = undefined;
  const tmp = closure_12();
  let ref = stateFromStores1.useRef(null);
  const ref1 = stateFromStores1.useRef(null);
  const insets = userId(onKick[8])({ includeKeyboardHeight: true }).insets;
  const obj2 = { insets, inputs: items, scrollViewRef: ref };
  items = [{ ref: ref1, offset: { type: "toBottom" } }];
  userId(onKick[9])(obj2);
  const items1 = [GuildStore];
  const obj3 = guildId(onKick[10]);
  const stateFromStores = obj3.useStateFromStores(items1, () => GuildStore.getGuild(guildId));
  const items2 = [UserStore];
  const obj4 = guildId(onKick[10]);
  stateFromStores1 = obj4.useStateFromStores(items2, () => UserStore.getUser(userId));
  let bot;
  const useConjureServerApp = guildId(onKick[11]).useConjureServerApp;
  guildId(onKick[11]);
  if (stateFromStores1 != null) {
    bot = stateFromStores1.bot;
  }
  let result = null;
  if (true === bot) {
    const tmp7Result = guildId(onKick[11]);
    result = tmp7Result.conjureApplicationIdForBot(userId);
  }
  const conjureServerApp = useConjureServerApp(guildId, result);
  const tmp14 = null != conjureServerApp && !conjureServerApp.targetIsPreview;
  ref = obj.useRef("");
  [tmp16, c6] = stateFromStores(stateFromStores1.useState(f107853), 2);
  const items3 = [stateFromStores, onKick, stateFromStores1];
  let tmp19Result6 = null;
  stateFromStores(stateFromStores1.useState(f107853), 2);
  if (null != stateFromStores1) {
    tmp19Result6 = null;
    if (null != stateFromStores) {
      let obj13;
      let tmp21Result;
      const obj5 = { style: tmp.container, ref, contentContainerStyle: obj6, children: closure_11(closure_10, obj28) };
      obj6 = { paddingHorizontal: userId(onKick[7]).space.PX_24, paddingBottom: insets.bottom };
      const obj7 = { style: tmp.iconLabelBlock, children: items4 };
      const obj8 = { style: tmp.iconStyles, source: userId(onKick[14]), resizeMode: "contain" };
      const tmp4Result = userId(onKick[13]);
      items4 = [closure_9(tmp4Result, obj8), ];
      const tmp20 = c6;
      if (null == conjureServerApp) {
        const obj9 = { children: items5 };
        const obj10 = { style: tmp.redText, variant: "body-md/semibold", children: formatToPlainString(v1Ie87p, obj11) };
        const Text = tmp7(tmp5[15]).Text;
        const intl = tmp7(tmp5[16]).intl;
        formatToPlainString = intl.formatToPlainString;
        obj11 = { user: tmp4Result5.getName(stateFromStores1) };
        v1Ie87p = tmp7(tmp5[16]).t["1Ie87p"];
        tmp4Result5 = userId(onKick[17]);
        items5 = [closure_9(Text, obj10), ];
        const obj12 = { variant: "body-lg/semibold", color: "text-feedback-warning", children: stateFromStores.name };
        items5[1] = closure_9(guildId(onKick[15]).Text, obj12);
        obj13 = obj9;
      } else {
        obj13 = { children: items6 };
        const obj14 = { style: tmp.conjureTitle, variant: "body-lg/semibold", color: "mobile-text-heading-primary", children: tmp7Result3.formatWithAppTag(userId(onKick[19]).x6FvsZ, conjureServerApp.targetAppName) };
        const Text4 = tmp7(tmp5[15]).Text;
        tmp7Result3 = guildId(onKick[18]);
        items6 = [closure_9(Text4, obj14), ];
        const obj15 = { style: tmp.conjureServerName, variant: "body-md/semibold", color: "text-muted", children: stateFromStores.name };
        items6[1] = closure_9(guildId(onKick[15]).Text, obj15);
      }
      items4[1] = closure_11(closure_10, obj13);
      const items7 = [closure_11(ref, obj7), , ];
      if (tmp14) {
        const obj16 = { style: tmp.conjureRemove, children: closure_9(tmp4Result6, obj17) };
        obj17 = { target: tmp7Result4.conjureRemoveTargetFromServerApp(conjureServerApp), onRemoved: onKick };
        tmp4Result6 = userId(onKick[20]);
        tmp7Result4 = guildId(onKick[21]);
        tmp21Result = tmp19(tmp23, obj16);
      } else {
        let BGF8VT;
        const obj18 = { style: tmp.blurb, variant: "heading-sm/medium", color: "text-feedback-warning", children: formatResult };
        const Text2 = tmp7(tmp5[15]).Text;
        if (null == conjureServerApp) {
          const intl3 = tmp7(tmp5[16]).intl;
          const format = intl3.format;
          const obj19 = { user: tmp4Result7.getName(stateFromStores1) };
          const prop = tmp7(tmp5[16]).t["/yH0UT"];
          tmp4Result7 = userId(onKick[17]);
          formatResult = format(prop, obj19);
        } else {
          const intl2 = tmp7(tmp5[16]).intl;
          const obj20 = { server: stateFromStores.name };
          formatResult = intl2.formatToPlainString(tmp4(tmp5[19]).f22PGK, obj20);
        }
        const items8 = [closure_9(Text2, obj18), , ];
        let tmp19Result4 = null;
        if (null == conjureServerApp) {
          const obj21 = {
            ref: ref1,
            containerStyle: obj22,
            label: intl4.string(guildId(onKick[16]).t["+2QEPt"]),
            maxLength: 512,
            onChange(current) {
                      ref.current = current;
                    }
          };
          obj22 = { marginBottom: userId(onKick[7]).space.PX_16 };
          const TextArea = tmp7(tmp5[22]).TextArea;
          intl4 = tmp7(tmp5[16]).intl;
          tmp19Result4 = tmp19(TextArea, obj21);
        }
        items8[1] = tmp19Result4;
        const obj23 = { style: tmp.actions, children: closure_9(Button, obj25) };
        Button = tmp7(tmp5[23]).Button;
        const intl5 = tmp7(tmp5[16]).intl;
        const string = intl5.string;
        if (null == conjureServerApp) {
          BGF8VT = tmp7(tmp5[16]).t["3glT6Z"];
        } else {
          BGF8VT = tmp4(tmp5[19]).BGF8VT;
        }
        const obj24 = { children: items8 };
        obj25 = { variant: "destructive", text: string(BGF8VT), onPress: tmp17, disabled: tmp16.kicking };
        items8[2] = closure_9(ref, obj23);
        tmp21Result = tmp21(tmp22, obj24);
      }
      items7[1] = tmp21Result;
      let tmp19Result5 = null;
      if (tmp16.kickError) {
        const obj26 = { style: tmp.errorText, variant: "body-md/semibold", color: "input-text-error-default", children: format2(UktD5J, obj27) };
        const Text3 = tmp7(tmp5[15]).Text;
        const intl6 = tmp7(tmp5[16]).intl;
        format2 = intl6.format;
        obj27 = { user: tmp4Result8.getName(stateFromStores1) };
        UktD5J = tmp7(tmp5[16]).t.UktD5J;
        tmp4Result8 = userId(onKick[17]);
        tmp19Result5 = tmp19(Text3, obj26);
      }
      obj28 = { children: items7 };
      items7[2] = tmp19Result5;
      tmp19Result6 = tmp19(tmp20, obj5);
    }
  }
  return tmp19Result6;
});
let result = size.fileFinishedImporting("modules/guild_moderation/native/KickConfirm.tsx");

export default memoResult;
