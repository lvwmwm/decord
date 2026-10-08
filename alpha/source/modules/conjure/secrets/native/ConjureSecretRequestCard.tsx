// Module ID: 17022
// Function ID: 17023
// Name: ConjureSecretRequestCard
// Dependencies: [19, 17, 5079, 21, 5090, 587, 558, 576, 5054, 17023, 6631, 17024, 504, 4810, 5374, 5378, 5086, 1126, 3827, 16948, 14094, 4992, 17025, 5375, 2]

// Module 17022 (ConjureSecretRequestCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5054 */;
import spring from "spring" /* 5374 */;
import springPresets from "springPresets" /* 5378 */;
import ConjureSecretsSheet from "ConjureSecretsSheet" /* 17023 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5079 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ConjureSecretsSheetDefault = ConjureSecretsSheet;
let set;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { card: obj2, cardAwaiting: obj3, status: obj4 };
obj2 = { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { borderColor: nativeDefault.colors.BACKGROUND_BRAND };
obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_8 = createStyles(obj);
let closure_9 = { code: "function ConjureSecretRequestCardTsx1(){const{enter,tokens}=this.__closure;return{opacity:enter.get(),transform:[{translateY:(enter.get()-1)*tokens.space.PX_4}]};}" };
let closure_10 = { code: "function ConjureSecretRequestCardTsx2(){const{enter}=this.__closure;return{opacity:enter.get(),transform:[{scale:0.5+enter.get()*0.5}]};}" };
const __initData = { code: "function ConjureSecretRequestCardTsx3(){const{enter,tokens}=this.__closure;return{opacity:enter.get(),transform:[{translateY:(enter.get()-1)*tokens.space.PX_4}]};}" };
const __initData2 = { code: "function ConjureSecretRequestCardTsx4(){const{enter}=this.__closure;return{opacity:enter.get(),transform:[{scale:0.5+enter.get()*0.5}]};}" };
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureSecretRequestCard(projectId) {
  let awaiting;
  let cardId;
  let request;
  let secretRequestStatusChanged;
  let status;
  let useReducedMotion;
  let tmp = projectId;
  let tmp2 = secretRequestStatusChanged;
  let obj = projectId(secretRequestStatusChanged[7]);
  const cResult = obj.c(84);
  projectId = projectId.projectId;
  ({ cardId, request } = projectId);
  ({ status, awaiting } = projectId);
  closure_8();
  if (cResult[0] === projectId) {
    let tmp13;
    let tmp12;
    if (cResult[3] !== request.fields) {
      let tmp8;
      const _Symbol = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        class E {
          constructor(id) {
            const obj = { id: id.name, label: id.label, icon: projectId(secretRequestStatusChanged[10]).KeyIcon };
            return obj;
          }
        }
        cResult[5] = E;
        tmp8 = E;
      } else {
        class E {
          constructor(id) {
            const obj = { id: id.name, label: id.label, icon: projectId(secretRequestStatusChanged[10]).KeyIcon };
            return obj;
          }
        }
      }
      const fields = request.fields;
      const mapped = fields.map(tmp8);
      cResult[3] = request.fields;
      cResult[4] = mapped;
    } else {
      class E {
        constructor(id) {
          const obj = { id: id.name, label: id.label, icon: projectId(secretRequestStatusChanged[10]).KeyIcon };
          return obj;
        }
      }
    }
    const tmpResult = tmp(tmp2[11]);
    secretRequestStatusChanged = tmpResult.useSecretRequestStatusChanged(cardId, status);
    const _Symbol2 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class E {
        constructor(id) {
          const obj = { id: id.name, label: id.label, icon: projectId(secretRequestStatusChanged[10]).KeyIcon };
          return obj;
        }
      }
      let items = [AccessibilityStore];
      class R {
        constructor() {
          return useReducedMotion.useReducedMotion;
        }
      }
      cResult[6] = items;
      cResult[7] = R;
      tmp13 = R;
      tmp12 = items;
    } else {
      class E {
        constructor(id) {
          const obj = { id: id.name, label: id.label, icon: projectId(secretRequestStatusChanged[10]).KeyIcon };
          return obj;
        }
      }
      tmp13 = cResult[7];
    }
    const tmpResult3 = tmp(tmp2[12]);
    const stateFromStores = tmpResult3.useStateFromStores(tmp12, tmp13);
    const tmpResult4 = tmp(tmp2[13]);
    const sharedValue = tmpResult4.useSharedValue(1);
    if (cResult[8] === secretRequestStatusChanged) {
      class E {
        constructor(id) {
          const obj = { id: id.name, label: id.label, icon: projectId(secretRequestStatusChanged[10]).KeyIcon };
          return obj;
        }
      }
    }
    const fn2 = function j() {
      const tmp = secretRequestStatusChanged;
      if (tmp) {
        const tmp2 = stateFromStores;
        if (!tmp2) {
          const result = sharedValue.set(0);
          set = sharedValue.set;
          const obj = spring;
          const result1 = set(obj.withSpring(1, springPresets.SUBTLE_SPRING));
        }
      }
      const result2 = sharedValue.set(1);
    };
    cResult[8] = secretRequestStatusChanged;
    cResult[9] = sharedValue;
    cResult[10] = stateFromStores;
    cResult[11] = fn2;
  }
  const fn = function x() {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { content: metroRequire(ConjureSecretsSheetDefault, obj2), key: ConjureSecretsSheet.CONJURE_SECRETS_SHEET_KEY };
    obj2 = { projectId, request };
    showActionSheet(obj);
  };
  cResult[0] = projectId;
  cResult[1] = request;
  cResult[2] = fn;
}) : (function ConjureSecretRequestCard(projectId) {
  let CircleCheckIcon;
  let HCQvpO;
  let TagGroup3;
  let Text4;
  let awaiting;
  let cardId;
  let intl10;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items4;
  let items5;
  let items6;
  let obj10;
  let obj14;
  let obj16;
  let obj19;
  let obj7;
  let obj8;
  let request;
  let status;
  let string;
  let tmp10Result;
  let tmp10Result5;
  let tmp10Result7;
  let tmp30Result;
  let useReducedMotion;
  projectId = projectId.projectId;
  ({ cardId, request } = projectId);
  ({ status, awaiting } = projectId);
  let secretRequestStatusChanged;
  let stateFromStores;
  let tmp = closure_8();
  let items = [projectId, request];
  const items1 = [request.fields];
  const callback = stateFromStores.useCallback(() => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { content: metroRequire(ConjureSecretsSheetDefault, obj2), key: ConjureSecretsSheet.CONJURE_SECRETS_SHEET_KEY };
    obj2 = { projectId, request };
    showActionSheet(obj);
  }, items);
  const memo = stateFromStores.useMemo(() => {
    const fields = request.fields;
    return fields.map((id) => {
      const obj = { id: id.name, label: id.label, icon: projectId(secretRequestStatusChanged[10]).KeyIcon };
      return obj;
    });
  }, items1);
  let obj = projectId(secretRequestStatusChanged[11]);
  secretRequestStatusChanged = obj.useSecretRequestStatusChanged(cardId, status);
  let obj2 = projectId(secretRequestStatusChanged[12]);
  const items2 = [AccessibilityStore];
  stateFromStores = obj2.useStateFromStores(items2, () => useReducedMotion.useReducedMotion);
  const obj3 = projectId(secretRequestStatusChanged[13]);
  const sharedValue = obj3.useSharedValue(1);
  const items3 = [sharedValue, secretRequestStatusChanged, status, stateFromStores, cardId];
  const layoutEffect = stateFromStores.useLayoutEffect(() => {
    const tmp = secretRequestStatusChanged;
    if (tmp) {
      const tmp2 = stateFromStores;
      if (!tmp2) {
        const result = sharedValue.set(0);
        set = sharedValue.set;
        const obj = spring;
        const result1 = set(obj.withSpring(1, springPresets.SUBTLE_SPRING));
      }
    }
    const result2 = sharedValue.set(1);
  }, items3);
  const fn = function w() {
    let diff;
    let items;
    const obj = { opacity: sharedValue.get(), transform: items };
    const obj2 = { translateY: diff * nativeDefault.space.PX_4 };
    diff = sharedValue.get() - 1;
    items = [obj2];
    return obj;
  };
  const obj4 = projectId(secretRequestStatusChanged[13]);
  fn.__closure = { enter: sharedValue, tokens: request(secretRequestStatusChanged[5]) };
  fn.__workletHash = 6679182484244;
  fn.__initData = __initData;
  ({ enter: sharedValue, tokens: request(secretRequestStatusChanged[5]) });
  const animatedStyle = obj4.useAnimatedStyle(fn);
  projectId(secretRequestStatusChanged[13]);
  class I {
    constructor() {
      let items;
      const obj = { opacity: sharedValue.get(), transform: items };
      items = [{ scale: 0.5 + 0.5 * sharedValue.get() }];
      ({ scale: 0.5 + 0.5 * sharedValue.get() });
      return obj;
    }
  }
  I.__closure = { enter: sharedValue };
  I.__workletHash = 12712289937001;
  I.__initData = __initData2;
  if ("superseded" === status) {
    const obj6 = { style: animatedStyle, children: closure_6(tmp10Result, obj7) };
    const View4 = tmp10(tmp5[13]).View;
    obj7 = { style: tmp.card, children: closure_6(Text4, obj8) };
    obj8 = { variant: "text-xs/semibold", color: "text-muted", children: intl10.string(request(secretRequestStatusChanged[18]).CTxtdV) };
    tmp10Result = request(secretRequestStatusChanged[19]);
    Text4 = tmp4(tmp5[16]).Text;
    intl10 = tmp4(tmp5[17]).intl;
    tmp30Result = closure_6(View4, obj6);
  } else if ("inactive" === status) {
    const obj9 = { style: animatedStyle, children: closure_7(tmp10Result5, obj10) };
    const View3 = tmp10(tmp5[13]).View;
    obj10 = { style: tmp.card, children: items4 };
    const obj11 = { variant: "text-xs/semibold", color: "text-muted", children: intl8.string(request(secretRequestStatusChanged[18]).HCQvpO) };
    tmp10Result5 = request(secretRequestStatusChanged[19]);
    const Text3 = tmp4(tmp5[16]).Text;
    intl8 = tmp4(tmp5[17]).intl;
    items4 = [closure_6(Text3, obj11), ];
    const obj12 = { label: intl9.string(request(secretRequestStatusChanged[18]).HCQvpO), size: "xs", items: memo };
    const TagGroup4 = tmp4(tmp5[20]).TagGroup;
    intl9 = tmp4(tmp5[17]).intl;
    items4[1] = closure_6(TagGroup4, obj12);
    tmp30Result = closure_6(View3, obj9);
  } else if ("pending" === status) {
    const obj13 = { style: tmp.card, children: closure_6(TagGroup3, obj14) };
    obj14 = { label: intl7.string(request(secretRequestStatusChanged[18]).HCQvpO), size: "xs", items: memo };
    const tmp10Result6 = request(secretRequestStatusChanged[19]);
    TagGroup3 = tmp4(tmp5[20]).TagGroup;
    intl7 = tmp4(tmp5[17]).intl;
    tmp30Result = closure_6(tmp10Result6, obj13);
  } else if ("received" === status) {
    const obj15 = { style: animatedStyle, children: closure_7(tmp10Result7, obj16) };
    View = tmp10(tmp5[13]).View;
    obj16 = { style: tmp.card, children: items6 };
    const obj17 = { style: tmp.status, children: items5 };
    const obj18 = { style: tmp13, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: closure_6(CircleCheckIcon, obj19) };
    tmp10Result7 = request(secretRequestStatusChanged[19]);
    const View2 = tmp10(tmp5[13]).View;
    obj19 = { size: "xs", color: request(secretRequestStatusChanged[5]).colors.ICON_FEEDBACK_POSITIVE };
    CircleCheckIcon = tmp4(tmp5[21]).CircleCheckIcon;
    items5 = [closure_6(View2, obj18), ];
    const obj20 = { variant: "text-xs/semibold", color: "text-feedback-positive", children: intl5.string(request(secretRequestStatusChanged[18]).sfp7Up) };
    const Text2 = tmp4(tmp5[16]).Text;
    intl5 = tmp4(tmp5[17]).intl;
    items5[1] = closure_6(Text2, obj20);
    items6 = [closure_7(sharedValue, obj17), ];
    const obj21 = { label: intl6.string(request(secretRequestStatusChanged[18]).sfp7Up), size: "xs", items: memo };
    const TagGroup2 = tmp4(tmp5[20]).TagGroup;
    intl6 = tmp4(tmp5[17]).intl;
    items6[1] = closure_6(TagGroup2, obj21);
    tmp30Result = closure_6(View, obj15);
  } else {
    const items7 = [tmp.card, ];
    let cardAwaiting = null != awaiting;
    const tmp10Result8 = request(secretRequestStatusChanged[19]);
    const tmp30 = closure_7;
    if (cardAwaiting) {
      cardAwaiting = tmp.cardAwaiting;
    }
    const obj22 = { style: items7, children: null };
    items7[1] = cardAwaiting;
    let tmp14 = null;
    if (null != awaiting) {
      tmp14 = closure_6(tmp4(tmp5[22]).ConjureAwaitingPulseRing, {});
    }
    const items8 = [tmp14, , , , ];
    let str = "text-muted";
    const Text = tmp4(tmp5[16]).Text;
    if (null != awaiting) {
      str = "text-brand";
    }
    const obj23 = { variant: "text-xs/semibold", color: str, children: string(HCQvpO) };
    const intl = tmp4(tmp5[17]).intl;
    string = intl.string;
    if (null != awaiting) {
      HCQvpO = tmp10(tmp5[18]).O0QIqj;
    } else {
      HCQvpO = tmp10(tmp5[18]).HCQvpO;
    }
    items8[1] = closure_6(Text, obj23);
    if (null != request.note) {
      let note;
      if ("" !== request.note) {
        note = request.note;
      }
      const obj24 = { variant: "text-sm/normal", color: "text-default", children: note };
      items8[2] = closure_6(tmp17, obj24);
      const obj25 = { label: intl3.string(request(secretRequestStatusChanged[18]).HCQvpO), size: "xs", items: memo };
      const TagGroup = tmp4(tmp5[20]).TagGroup;
      intl3 = tmp4(tmp5[17]).intl;
      items8[3] = closure_6(TagGroup, obj25);
      const obj26 = { variant: "primary", size: "sm", onPress: callback, text: intl4.string(request(secretRequestStatusChanged[18]).EK8tKY) };
      const Button = tmp4(tmp5[23]).Button;
      intl4 = tmp4(tmp5[17]).intl;
      items8[4] = closure_6(Button, obj26);
      obj22.children = items8;
      tmp30Result = tmp30(tmp10Result8, obj22);
    }
    const intl2 = tmp4(tmp5[17]).intl;
    note = intl2.string(tmp10(tmp5[18]).MPGSHL);
  }
  return tmp30Result;
});
let result = size.fileFinishedImporting("modules/conjure/secrets/native/ConjureSecretRequestCard.tsx");

export default tmp4;
