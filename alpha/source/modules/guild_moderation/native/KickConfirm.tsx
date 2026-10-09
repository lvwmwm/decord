// Module ID: 11365
// Function ID: 11366
// Name: KickConfirm
// Dependencies: [32, 19, 17, 2086, 1390, 21, 5091, 587, 558, 576, 6663, 10490, 504, 11366, 6104, 11368, 6163, 11386, 5087, 1126, 4923, 11387, 3827, 6770, 5376, 2]

// Module 11365 (KickConfirm)
import nativeDefault from "native" /* 587 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6104 */;
import removeConjureServerAppDefault from "removeConjureServerApp" /* 11368 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildStore_mod from "GuildStore" /* 2086 */;
import UserStore from "UserStore" /* 1390 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let catchPromise, ref, tmp11;

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
let GuildStore = GuildStore_mod;
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, iconLabelBlock: obj3, iconStyles: obj4, redText: obj5, conjureTitle: obj6, conjureServerName: obj7, blurb: obj8, removeEverything: obj9, errorText: obj10, actions: obj11 };
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
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function KickConfirm(guildId) {
  let closure_10;
  let closure_7;
  let first;
  let onKick;
  let result;
  let stateFromStores1;
  let tmp10;
  let tmp12;
  let tmp14;
  let tmp16;
  let tmp17;
  let tmp9;
  let tmp = guildId;
  let tmp2 = onKick;
  const obj = guildId(onKick[9]);
  const cResult = obj.c(37);
  guildId = guildId.guildId;
  const userId = guildId.userId;
  onKick = guildId.onKick;
  const tmp4 = closure_12();
  ref = stateFromStores1.useRef(null);
  const ref1 = stateFromStores1.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { includeKeyboardHeight: true };
    cResult[0] = obj3;
    first = obj3;
  } else {
    first = cResult[0];
  }
  const tmp8 = userId;
  const insets = userId(tmp2[10])(first).insets;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [{ ref: ref1, offset: { type: "toBottom" } }];
    const obj4 = { ref: ref1, offset: { type: "toBottom" } };
    cResult[1] = items;
    tmp9 = items;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] !== insets) {
    const obj5 = { insets, inputs: tmp9, scrollViewRef: ref };
    cResult[2] = insets;
    cResult[3] = obj5;
    tmp10 = obj5;
  } else {
    tmp10 = cResult[3];
  }
  tmp8(tmp2[11])(tmp10);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildStore];
    cResult[4] = items1;
    tmp12 = items1;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] !== guildId) {
    class A {
      constructor() {
        return closure_7.getGuild(guildId);
      }
    }
    cResult[5] = guildId;
    cResult[6] = A;
    tmp14 = A;
  } else {
    class A {
      constructor() {
        return closure_7.getGuild(guildId);
      }
    }
  }
  const tmpResult = tmp(tmp2[12]);
  const stateFromStores = tmpResult.useStateFromStores(tmp12, tmp14);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class A {
      constructor() {
        return closure_7.getGuild(guildId);
      }
    }
    const items2 = [UserStore];
    cResult[7] = items2;
    tmp16 = items2;
  } else {
    class A {
      constructor() {
        return closure_7.getGuild(guildId);
      }
    }
  }
  if (cResult[8] !== userId) {
    class N {
      constructor() {
        return closure_8.getUser(userId);
      }
    }
    cResult[8] = userId;
    cResult[9] = N;
    tmp17 = N;
  } else {
    class N {
      constructor() {
        return closure_8.getUser(userId);
      }
    }
  }
  const tmpResult3 = tmp(tmp2[12]);
  stateFromStores1 = tmpResult3.useStateFromStores(tmp16, tmp17);
  const tmp19 = cResult[10];
  if (stateFromStores1 != null) {
    class N {
      constructor() {
        return closure_8.getUser(userId);
      }
    }
  }
  if (tmp19 === undefined) {
    let tmp23;
    class N {
      constructor() {
        return closure_8.getUser(userId);
      }
    }
    const tmpResult4 = tmp(tmp2[13]);
    const conjureServerApp = tmpResult4.useConjureServerApp(guildId, result);
    if (cResult[13] !== conjureServerApp) {
      let conjureKickAppItemsResult;
      class N {
        constructor() {
          return closure_8.getUser(userId);
        }
      }
      if (conjureServerApp != null) {
        class N {
          constructor() {
            return closure_8.getUser(userId);
          }
        }
      }
      if (null == tmp24) {
        class N {
          constructor() {
            return closure_8.getUser(userId);
          }
        }
      } else {
        class N {
          constructor() {
            return closure_8.getUser(userId);
          }
        }
        conjureKickAppItemsResult = obj10.conjureKickAppItems(conjureServerApp.rest);
      }
      cResult[13] = conjureServerApp;
      cResult[14] = conjureKickAppItemsResult;
      tmp23 = conjureKickAppItemsResult;
    } else {
      class N {
        constructor() {
          return closure_8.getUser(userId);
        }
      }
    }
    conjureKickAppItemsResult = tmp23;
    const flag = true;
    GuildStore = stateFromStores(stateFromStores1.useState(true), 2)[0];
    const tmp27 = stateFromStores(stateFromStores1.useState(true), 2);
    [r10129, UserStore] = stateFromStores(stateFromStores1.useState(false), 2);
    stateFromStores(stateFromStores1.useState(false), 2);
    ref = obj2.useRef("");
    const _Symbol = Symbol;
    if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
      class U {
        constructor() {
          return { kicking: false, kickError: false };
        }
      }
      cResult[15] = U;
    } else {
      class U {
        constructor() {
          return { kicking: false, kickError: false };
        }
      }
    }
    [r10144, closure_10] = stateFromStores(stateFromStores1.useState(tmp30), 2);
    stateFromStores(stateFromStores1.useState(tmp30), 2);
    if (cResult[16] === stateFromStores) {
      class U {
        constructor() {
          return { kicking: false, kickError: false };
        }
      }
    }
    class Q {
      constructor() {
        tmp = closure_3;
        tmp2 = null != closure_3;
        if (tmp2) {
          tmp3 = closure_4;
          tmp2 = null != closure_4;
        }
        if (tmp2) {
          tmp4 = closure_10;
          tmp5 = closure_10({ kicking: true, kickError: false });
          tmp6 = closure_1;
          tmp7 = closure_2;
          tmp8 = closure_1(closure_2[14]);
          id = undefined;
          kickUser = tmp8.kickUser;
          if (tmp != null) {
            id = tmp.id;
          }
          id1 = undefined;
          if (closure_4 != null) {
            id1 = closure_4.id;
          }
          tmp11 = closure_9;
          kickUserResult = kickUser(id, id1, closure_9.current);
          tmp12 = onKick;
          nextPromise = kickUserResult.then(onKick);
          catchPromise = nextPromise.catch(() => { /* body not rendered: F143054 */ });
        }
        return;
      }
    }
    cResult[16] = stateFromStores;
    cResult[17] = onKick;
    cResult[18] = stateFromStores1;
    cResult[19] = Q;
  }
  if (stateFromStores1 != null) {
    class U {
      constructor() {
        return { kicking: false, kickError: false };
      }
    }
  }
  result = null;
  if (true === undefined) {
    class U {
      constructor() {
        return { kicking: false, kickError: false };
      }
    }
    result = obj8.conjureApplicationIdForBot(userId);
  }
  if (stateFromStores1 != null) {
    class U {
      constructor() {
        return { kicking: false, kickError: false };
      }
    }
  }
  cResult[10] = undefined;
  cResult[11] = userId;
  cResult[12] = result;
}) : (function KickConfirm(guildId) {
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
  const f107949 = () => ({ kicking: false, kickError: false });
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
  ref = stateFromStores1.useRef(null);
  const ref1 = stateFromStores1.useRef(null);
  const tmp4 = userId;
  const tmp5 = onKick;
  const insets = userId(onKick[10])({ includeKeyboardHeight: true }).insets;
  const obj2 = { insets, inputs: items, scrollViewRef: ref };
  items = [{ ref: ref1, offset: { type: "toBottom" } }];
  const tmp6 = userId(onKick[11])(obj2);
  const tmp7 = guildId;
  const items1 = [checked];
  const obj3 = guildId(onKick[12]);
  const stateFromStores = obj3.useStateFromStores(items1, () => GuildStore.getGuild(guildId));
  const items2 = [closure_8];
  const obj4 = guildId(onKick[12]);
  stateFromStores1 = obj4.useStateFromStores(items2, () => UserStore.getUser(userId));
  let bot;
  const useConjureServerApp = guildId(onKick[13]).useConjureServerApp;
  const tmp10 = guildId(onKick[13]);
  if (stateFromStores1 != null) {
    bot = stateFromStores1.bot;
  }
  let result = null;
  if (true === bot) {
    const tmp7Result = tmp7(tmp5[13]);
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
    const tmp7Result3 = tmp7(tmp5[13]);
    items3 = tmp7Result3.conjureKickAppItems(conjureServerApp.rest);
  }
  const tmp15 = stateFromStores(stateFromStores1.useState(true), 2);
  checked = tmp15[0];
  const tmp17 = tmp15[1];
  const tmp18 = stateFromStores(stateFromStores1.useState(false), 2);
  closure_8 = tmp18[1];
  const first1 = tmp18[0];
  ref = obj.useRef("");
  [tmp21, c10] = stateFromStores(stateFromStores1.useState(f107949), 2);
  const items4 = [stateFromStores, onKick, stateFromStores1];
  stateFromStores(stateFromStores1.useState(f107949), 2);
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
      const obj8 = { style: tmp.iconStyles, source: tmp4(tmp5[17]), resizeMode: "contain" };
      const tmp4Result = tmp4(tmp5[16]);
      items5 = [ref(tmp4Result, obj8), ];
      const tmp24 = items3;
      if (null == conjureServerApp) {
        const obj9 = { children: items6 };
        const obj10 = { style: tmp.redText, variant: "text-md/semibold", children: formatToPlainString(v1Ie87p, obj11) };
        const Text = tmp7(tmp5[18]).Text;
        const intl = tmp7(tmp5[19]).intl;
        formatToPlainString = intl.formatToPlainString;
        obj11 = { user: tmp4Result4.getName(stateFromStores1) };
        v1Ie87p = tmp7(tmp5[19]).t["1Ie87p"];
        tmp4Result4 = tmp4(tmp5[20]);
        items6 = [ref(Text, obj10), ];
        const obj12 = { variant: "text-lg/bold", color: "text-feedback-warning", children: stateFromStores.name };
        items6[1] = ref(tmp7(tmp5[18]).Text, obj12);
        obj13 = obj9;
      } else {
        obj13 = { children: items7 };
        const obj14 = { style: tmp.conjureTitle, variant: "text-lg/bold", color: "mobile-text-heading-primary", children: tmp7Result4.formatWithAppTag(tmp4(tmp5[22]).wVNCN7, conjureServerApp.targetAppName) };
        const Text5 = tmp7(tmp5[18]).Text;
        tmp7Result4 = tmp7(tmp5[21]);
        items7 = [ref(Text5, obj14), ];
        const obj15 = { style: tmp.conjureServerName, variant: "text-md/semibold", color: "text-muted", children: stateFromStores.name };
        items7[1] = ref(tmp7(tmp5[18]).Text, obj15);
      }
      items5[1] = closure_11(c10, obj13);
      const items8 = [closure_11(conjureServerApp, obj7), , , , , , ];
      const obj16 = { style: tmp.blurb, variant: "heading-md/normal", color: "text-feedback-warning", children: formatResult };
      const Text2 = tmp7(tmp5[18]).Text;
      if (null == conjureServerApp) {
        const intl3 = tmp7(tmp5[19]).intl;
        const format = intl3.format;
        const obj17 = { user: tmp4Result5.getName(stateFromStores1) };
        const prop = tmp7(tmp5[19]).t["/yH0UT"];
        tmp4Result5 = tmp4(tmp5[20]);
        formatResult = format(prop, obj17);
      } else {
        const intl2 = tmp7(tmp5[19]).intl;
        formatResult = intl2.string(tmp4(tmp5[22])["tw+iyx"]);
      }
      items8[1] = ref(Text2, obj16);
      let tmp23Result = null;
      if (items3.length > 0) {
        const obj18 = { style: tmp.removeEverything, children: ref(tmp7(tmp5[21]).ConjureRemoveEverythingField, obj19) };
        obj19 = { checked, onChange: tmp17, items: items3 };
        tmp23Result = tmp23(tmp27, obj18);
      }
      items8[2] = tmp23Result;
      const obj20 = {
        ref: ref1,
        containerStyle: obj21,
        label: intl4.string(tmp7(tmp5[19]).t["+2QEPt"]),
        maxLength: 512,
        onChange(current) {
              ref.current = current;
            }
      };
      obj21 = { marginBottom: tmp4(tmp5[7]).space.PX_16 };
      const TextArea = tmp7(tmp5[23]).TextArea;
      intl4 = tmp7(tmp5[19]).intl;
      items8[3] = ref(TextArea, obj20);
      const obj22 = { style: tmp.actions, children: ref(Button, obj23) };
      obj23 = {
        variant: "destructive",
        text: intl5.string(tmp7(tmp5[19]).t["3glT6Z"]),
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
      Button = tmp7(tmp5[24]).Button;
      intl5 = tmp7(tmp5[19]).intl;
      items8[4] = ref(conjureServerApp, obj22);
      let tmp23Result4 = null;
      if (first1) {
        const obj24 = { style: tmp.errorText, variant: "text-md/semibold", color: "input-text-error-default", children: intl6.string(tmp4(tmp5[22]).PJ2Fkn) };
        const Text3 = tmp7(tmp5[18]).Text;
        intl6 = tmp7(tmp5[19]).intl;
        tmp23Result4 = tmp23(Text3, obj24);
      }
      items8[5] = tmp23Result4;
      let tmp23Result5 = null;
      if (tmp21.kickError) {
        const obj25 = { style: tmp.errorText, variant: "text-md/semibold", color: "input-text-error-default", children: format2(UktD5J, obj26) };
        const Text4 = tmp7(tmp5[18]).Text;
        const intl7 = tmp7(tmp5[19]).intl;
        format2 = intl7.format;
        obj26 = { user: tmp4Result6.getName(stateFromStores1) };
        UktD5J = tmp7(tmp5[19]).t.UktD5J;
        tmp4Result6 = tmp4(tmp5[20]);
        tmp23Result5 = tmp23(Text4, obj25);
      }
      obj27 = { children: items8 };
      items8[6] = tmp23Result5;
      tmp23Result6 = tmp23(tmp24, obj5);
    }
  }
  return tmp23Result6;
}));
let result = size.fileFinishedImporting("modules/guild_moderation/native/KickConfirm.tsx");

export default memoResult;
