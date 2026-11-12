// Module ID: 13643
// Function ID: 13644
// Name: ConjureSecretRequestCard
// Dependencies: [19, 17, 5244, 21, 5243, 575, 5489, 13644, 7718, 13472, 504, 1652, 5876, 5877, 13107, 5866, 1113, 4079, 13168, 7864, 13539, 13108, 13116, 5873, 2]
// Exports: default

// Module 13643 (ConjureSecretRequestCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5489 */;
import spring_spring from "spring/spring" /* 5876 */;
import springPresets from "springPresets" /* 5877 */;
import ConjureSecretsSheet from "ConjureSecretsSheet" /* 13644 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5244 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
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
let closure_9 = { code: "(function ConjureSecretRequestCardTsx1(){let[enter,tokens]=this.__closure;return{opacity:enter.get(),transform:[{translateY:(enter.get()-1)*tokens.space.PX_4}]};})" };
let closure_10 = { code: "(function ConjureSecretRequestCardTsx2(){let[enter]=this.__closure;return{opacity:enter.get(),transform:[{scale:0.5+enter.get()*0.5}]};})" };
let result = size.fileFinishedImporting("modules/conjure/secrets/native/ConjureSecretRequestCard.tsx");

export default function ConjureSecretRequestCard(projectId) {
  let CircleCheckIcon;
  let HCQvpO;
  let TagGroup2;
  let Text5;
  let awaiting;
  let cardId;
  let fields;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items10;
  let items8;
  let items9;
  let obj12;
  let obj14;
  let obj17;
  let obj5;
  let obj6;
  let obj8;
  let request;
  let status;
  let string;
  let tmp11Result;
  let tmp11Result5;
  let tmp11Result7;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp17;
  let tmp18;
  let tmp36Result;
  let tmp4Result2;
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
      const obj = { id: id.name, label: id.label, icon: projectId(secretRequestStatusChanged[8]).KeyIcon };
      return obj;
    });
  }, items1);
  let obj = projectId(secretRequestStatusChanged[9]);
  secretRequestStatusChanged = obj.useSecretRequestStatusChanged(cardId, status);
  let obj2 = projectId(secretRequestStatusChanged[10]);
  const items2 = [AccessibilityStore];
  stateFromStores = obj2.useStateFromStores(items2, () => useReducedMotion.useReducedMotion);
  const obj3 = projectId(secretRequestStatusChanged[11]);
  const sharedValue = obj3.useSharedValue(1);
  const items3 = [sharedValue, secretRequestStatusChanged, status, stateFromStores, cardId];
  const layoutEffect = stateFromStores.useLayoutEffect(() => {
    const tmp = secretRequestStatusChanged;
    if (tmp) {
      const tmp2 = stateFromStores;
      if (!tmp2) {
        const result = sharedValue.set(0);
        set = sharedValue.set;
        const obj = spring_spring;
        const result1 = set(obj.withSpring(1, springPresets.SUBTLE_SPRING));
      }
    }
    const result2 = sharedValue.set(1);
  }, items3);
  const items4 = [closure_9, sharedValue, ];
  const useAnimatedStyle = projectId(secretRequestStatusChanged[11]).useAnimatedStyle;
  projectId(secretRequestStatusChanged[11]);
  items4[2] = request(secretRequestStatusChanged[5]);
  let c0;
  let c1;
  [tmp12, tmp13, tmp14] = items4;
  class ConjureSecretRequestCardTsx1 {
    constructor() {
      let items;
      const obj = { opacity: _undefined.get(), transform: items };
      items = [{ translateY: (_undefined.get() - 1) * _undefined2.space.PX_4 }];
      ({ translateY: (_undefined.get() - 1) * _undefined2.space.PX_4 });
      return obj;
    }
  }
  const items5 = [tmp13, tmp14];
  ConjureSecretRequestCardTsx1.__closure = items5;
  ConjureSecretRequestCardTsx1.__workletHash = 101085677007;
  ConjureSecretRequestCardTsx1.__initData = tmp12;
  const animatedStyle = useAnimatedStyle(ConjureSecretRequestCardTsx1);
  projectId(secretRequestStatusChanged[11]);
  const items6 = [closure_10, sharedValue];
  c0 = undefined;
  [tmp17, tmp18] = items6;
  class ConjureSecretRequestCardTsx2 {
    constructor() {
      let items;
      const obj = { opacity: _undefined.get(), transform: items };
      items = [{ scale: 0.5 + 0.5 * _undefined.get() }];
      ({ scale: 0.5 + 0.5 * _undefined.get() });
      return obj;
    }
  }
  const items7 = [tmp18];
  ConjureSecretRequestCardTsx2.__closure = items7;
  ConjureSecretRequestCardTsx2.__workletHash = 10584084520150;
  ConjureSecretRequestCardTsx2.__initData = tmp17;
  if ("superseded" === status) {
    const obj4 = { style: animatedStyle, children: closure_6(tmp11Result, obj5) };
    const View4 = tmp11(tmp5[11]).View;
    obj5 = { style: tmp.card, children: closure_6(Text5, obj6) };
    obj6 = { variant: "body-xs/semibold", color: "text-muted", children: intl9.string(request(secretRequestStatusChanged[17]).CTxtdV) };
    tmp11Result = request(secretRequestStatusChanged[14]);
    Text5 = tmp4(tmp5[15]).Text;
    intl9 = tmp4(tmp5[16]).intl;
    tmp36Result = closure_6(View4, obj4);
  } else if ("inactive" === status) {
    const obj7 = { style: animatedStyle, children: closure_7(tmp11Result5, obj8) };
    const View3 = tmp11(tmp5[11]).View;
    obj8 = { style: tmp.card, children: items8 };
    const obj9 = { variant: "body-xs/semibold", color: "text-muted", children: intl7.string(request(secretRequestStatusChanged[17]).HCQvpO) };
    tmp11Result5 = request(secretRequestStatusChanged[14]);
    const Text4 = tmp4(tmp5[15]).Text;
    intl7 = tmp4(tmp5[16]).intl;
    items8 = [closure_6(Text4, obj9), ];
    const obj10 = { label: intl8.string(request(secretRequestStatusChanged[17]).HCQvpO), size: "xs", items: memo };
    const TagGroup3 = tmp4(tmp5[18]).TagGroup;
    intl8 = tmp4(tmp5[16]).intl;
    items8[1] = closure_6(TagGroup3, obj10);
    tmp36Result = closure_6(View3, obj7);
  } else if ("pending" === status) {
    const obj11 = { style: tmp.card, children: closure_6(TagGroup2, obj12) };
    obj12 = { label: intl6.string(request(secretRequestStatusChanged[17]).HCQvpO), size: "xs", items: memo };
    const tmp11Result6 = request(secretRequestStatusChanged[14]);
    TagGroup2 = tmp4(tmp5[18]).TagGroup;
    intl6 = tmp4(tmp5[16]).intl;
    tmp36Result = closure_6(tmp11Result6, obj11);
  } else if ("received" === status) {
    const obj13 = { style: animatedStyle, children: closure_7(tmp11Result7, obj14) };
    View = tmp11(tmp5[11]).View;
    obj14 = { style: tmp.card, children: items10 };
    const obj15 = { style: tmp.status, children: items9 };
    const obj16 = { style: tmp19, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: closure_6(CircleCheckIcon, obj17) };
    tmp11Result7 = request(secretRequestStatusChanged[14]);
    const View2 = tmp11(tmp5[11]).View;
    obj17 = { size: "xs", color: request(secretRequestStatusChanged[5]).colors.ICON_FEEDBACK_POSITIVE };
    CircleCheckIcon = tmp4(tmp5[19]).CircleCheckIcon;
    items9 = [closure_6(View2, obj16), ];
    const obj18 = { variant: "body-xs/semibold", color: "text-feedback-positive", children: intl5.string(request(secretRequestStatusChanged[17]).sfp7Up) };
    const Text2 = tmp4(tmp5[15]).Text;
    intl5 = tmp4(tmp5[16]).intl;
    items9[1] = closure_6(Text2, obj18);
    items10 = [closure_7(sharedValue, obj15), ];
    const obj19 = { variant: "body-sm/normal", color: "text-default", children: tmp4Result2.conjureConnectedKeysSummary(fields.map((label) => label.label)) };
    const Text3 = tmp4(tmp5[15]).Text;
    fields = request.fields;
    tmp4Result2 = projectId(secretRequestStatusChanged[20]);
    items10[1] = closure_6(Text3, obj19);
    tmp36Result = closure_6(View, obj13);
  } else {
    const items11 = [tmp.card, ];
    let cardAwaiting = null != awaiting;
    const tmp11Result8 = request(secretRequestStatusChanged[14]);
    const tmp36 = closure_7;
    if (cardAwaiting) {
      cardAwaiting = tmp.cardAwaiting;
    }
    const obj20 = { style: items11, children: null };
    items11[1] = cardAwaiting;
    let tmp20 = null;
    if (null != awaiting) {
      tmp20 = closure_6(tmp4(tmp5[21]).ConjureAwaitingPulseRing, {});
    }
    const items12 = [tmp20, , , , ];
    let str = "text-muted";
    const Text = tmp4(tmp5[15]).Text;
    if (null != awaiting) {
      str = "text-brand";
    }
    const obj21 = { variant: "body-xs/semibold", color: str, children: string(HCQvpO) };
    const intl = tmp4(tmp5[16]).intl;
    string = intl.string;
    if (null != awaiting) {
      HCQvpO = tmp11(tmp5[17]).O0QIqj;
    } else {
      HCQvpO = tmp11(tmp5[17]).HCQvpO;
    }
    items12[1] = closure_6(Text, obj21);
    if (null != request.note) {
      let note;
      if ("" !== request.note) {
        note = request.note;
      }
      const obj22 = { text: note, variant: "body-sm/normal", color: "text-default" };
      items12[2] = closure_6(tmp23, obj22);
      const obj23 = { label: intl3.string(request(secretRequestStatusChanged[17]).HCQvpO), size: "xs", items: memo };
      const TagGroup = tmp4(tmp5[18]).TagGroup;
      intl3 = tmp4(tmp5[16]).intl;
      items12[3] = closure_6(TagGroup, obj23);
      const obj24 = { variant: "primary", size: "sm", onPress: callback, text: intl4.string(request(secretRequestStatusChanged[17]).EK8tKY) };
      const Button = tmp4(tmp5[23]).Button;
      intl4 = tmp4(tmp5[16]).intl;
      items12[4] = closure_6(Button, obj24);
      obj20.children = items12;
      tmp36Result = tmp36(tmp11Result8, obj20);
    }
    const intl2 = tmp4(tmp5[16]).intl;
    note = intl2.string(tmp11(tmp5[17]).MPGSHL);
  }
  return tmp36Result;
};
