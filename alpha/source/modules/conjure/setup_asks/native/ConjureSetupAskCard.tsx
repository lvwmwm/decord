// Module ID: 18721
// Function ID: 18722
// Name: ConjureSetupAskCard
// Dependencies: [5, 19, 17, 5044, 21, 5043, 575, 18722, 504, 1654, 5644, 5645, 15464, 7322, 18524, 5634, 7525, 5641, 1112, 18723, 18525, 18533, 18526, 4245, 2]
// Exports: default

// Module 18721 (ConjureSetupAskCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import spring_spring from "spring/spring" /* 5644 */;
import springPresets from "springPresets" /* 5645 */;
import openConjureSetupAskFormDefault from "openConjureSetupAskForm" /* 18723 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5044 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, canSave, set;

let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
function InlineSettingsForm(projectId) {
  let closure_0;
  let intl;
  let items;
  let onInputFocusChange;
  let onSaved;
  let obj = function _handleSave() {
    obj = _asyncToGenerator(async (arg0, value) => {
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c0 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              canSave = canSave.canSave && !obj2.saving;
              if (canSave) {
                c1 = 1;
                c0 = 1;
                const obj5 = { value: canSave.submit(), done: false };
                return obj5;
              }
            }
          } else if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            obj = { value, done: true };
            return obj;
          }
          c0 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp4) {
          c0 = 3;
          throw tmp4;
        }
      }
    });
    return obj(...arguments);
  };
  ({ onSaved, onInputFocusChange } = projectId);
  obj = { projectId: projectId.projectId, scopeKeys: projectId.form.request.keys, notifyAgent: true, onSaved, isPreview: true, onInputFocusChange };
  const tmp = obj(18526)(obj);
  _require = tmp;
  const obj2 = { children: items };
  items = [tmp.fields, ];
  let obj3 = {
    variant: "primary",
    size: "sm",
    text: intl.string(obj(4245).A7dQd9),
    loading: tmp.saving,
    disabled: !tmp.canSave,
    onPress: function handleSave() {
      return obj(...arguments);
    }
  };
  const Button = require("components/Button/Button").Button;
  intl = require("intl").intl;
  items[1] = closure_7(Button, obj3);
  return closure_8(closure_9, obj2);
}
let View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { card: obj2, cardAwaiting: obj3, status: obj4 };
obj2 = { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { borderColor: nativeDefault.colors.BACKGROUND_BRAND };
obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_10 = createStyles(obj);
let closure_11 = { code: "(function ConjureSetupAskCardTsx1(){let[enter,tokens]=this.__closure;return{opacity:enter.get(),transform:[{translateY:(enter.get()-1)*tokens.space.PX_4}]};})" };
let closure_12 = { code: "(function ConjureSetupAskCardTsx2(){let[enter]=this.__closure;return{opacity:enter.get(),transform:[{scale:0.5+enter.get()*0.5}]};})" };
let result = size.fileFinishedImporting("modules/conjure/setup_asks/native/ConjureSetupAskCard.tsx");

export default function ConjureSetupAskCard(projectId) {
  let CircleCheckIcon;
  let copy;
  let entering;
  let form;
  let intl;
  let items10;
  let items6;
  let items7;
  let items8;
  let obj13;
  let obj16;
  let obj6;
  let obj7;
  let obj9;
  let status;
  let tags;
  let tmp10Result;
  let tmp10Result4;
  let tmp10Result5;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp15;
  let tmp16;
  let tmp29Result2;
  let tmp30;
  let useReducedMotion;
  projectId = projectId.projectId;
  const onInputFocusChange = projectId.onInputFocusChange;
  form = undefined;
  entering = undefined;
  let merged = Object.assign(projectId, Object.assign({ projectId: 0, onInputFocusChange: 0 }));
  let tmp2 = closure_10();
  let obj = projectId(form[7]);
  const conjureSetupAskCard = obj.useConjureSetupAskCard(projectId, merged);
  const state = conjureSetupAskCard.state;
  ({ status, form } = state);
  ({ copy, entering } = conjureSetupAskCard);
  const presentation = state.presentation;
  const transitionId = conjureSetupAskCard.transitionId;
  const obj2 = projectId(form[8]);
  let items = [AccessibilityStore];
  const stateFromStores = obj2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj3 = projectId(form[9]);
  const sharedValue = obj3.useSharedValue(1);
  const items1 = [sharedValue, entering, status, stateFromStores, transitionId];
  const layoutEffect = stateFromStores.useLayoutEffect(() => {
    const tmp = entering;
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
  }, items1);
  const items2 = [closure_11, sharedValue, ];
  const useAnimatedStyle = projectId(form[9]).useAnimatedStyle;
  projectId(form[9]);
  items2[2] = conjureSetupAskCard(form[6]);
  let c0;
  let c1;
  [tmp11, tmp12, tmp13] = items2;
  class ConjureSetupAskCardTsx1 {
    constructor() {
      let items;
      const obj = { opacity: _undefined.get(), transform: items };
      items = [{ translateY: (_undefined.get() - 1) * _undefined2.space.PX_4 }];
      ({ translateY: (_undefined.get() - 1) * _undefined2.space.PX_4 });
      return obj;
    }
  }
  const items3 = [tmp12, tmp13];
  ConjureSetupAskCardTsx1.__closure = items3;
  ConjureSetupAskCardTsx1.__workletHash = 11158670898070;
  ConjureSetupAskCardTsx1.__initData = tmp11;
  const animatedStyle = useAnimatedStyle(ConjureSetupAskCardTsx1);
  const items4 = [closure_12, sharedValue];
  c0 = undefined;
  [tmp15, tmp16] = items4;
  const tmp3Result = projectId(form[9]);
  class ConjureSetupAskCardTsx2 {
    constructor() {
      let items;
      const obj = { opacity: _undefined.get(), transform: items };
      items = [{ scale: 0.5 + 0.5 * _undefined.get() }];
      ({ scale: 0.5 + 0.5 * _undefined.get() });
      return obj;
    }
  }
  const items5 = [tmp16];
  ConjureSetupAskCardTsx2.__closure = items5;
  ConjureSetupAskCardTsx2.__workletHash = 4768574487471;
  ConjureSetupAskCardTsx2.__initData = tmp15;
  let tmp18 = null;
  const animatedStyle1 = tmp3Result.useAnimatedStyle(ConjureSetupAskCardTsx2);
  if (conjureSetupAskCard.tags.length > 0) {
    const obj4 = {
      label: copy.title,
      size: "xs",
      items: tags.map((item) => {
          const obj = { icon: projectId(form[13]).KeyIcon };
          const merged = Object.assign(item);
          return obj;
        })
    };
    tags = conjureSetupAskCard.tags;
    const TagGroup = tmp3(tmp4[12]).TagGroup;
    tmp18 = closure_7(TagGroup, obj4);
  }
  if ("superseded" === status) {
    const obj5 = { style: animatedStyle, children: closure_7(tmp10Result, obj6) };
    const View4 = tmp10(tmp4[9]).View;
    obj6 = { style: tmp2.card, children: closure_7(projectId(form[15]).Text, obj7) };
    obj7 = { variant: "body-xs/semibold", color: "text-muted", children: copy.superseded };
    tmp10Result = conjureSetupAskCard(form[14]);
    tmp29Result2 = closure_7(View4, obj5);
  } else if ("inactive" === status) {
    const obj8 = { style: animatedStyle, children: closure_8(tmp10Result4, obj9) };
    const View3 = tmp10(tmp4[9]).View;
    obj9 = { style: tmp2.card, children: items6 };
    items6 = [, ];
    const obj10 = { variant: "body-xs/semibold", color: "text-muted", children: copy.title };
    tmp10Result4 = conjureSetupAskCard(form[14]);
    items6[0] = closure_7(projectId(form[15]).Text, obj10);
    items6[1] = tmp18;
    tmp29Result2 = closure_7(View3, obj8);
  } else if ("pending" === status) {
    const obj11 = { style: tmp2.card, children: tmp18 };
    tmp29Result2 = closure_7(tmp10(tmp4[14]), obj11);
  } else if ("saved" === status) {
    const obj12 = { style: animatedStyle, children: tmp30(tmp10Result5, obj13) };
    View = tmp10(tmp4[9]).View;
    obj13 = { style: tmp2.card, children: items8 };
    const obj14 = { style: tmp2.status, children: items7 };
    const obj15 = { style: animatedStyle1, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: closure_7(CircleCheckIcon, obj16) };
    tmp10Result5 = conjureSetupAskCard(form[14]);
    const View2 = tmp10(tmp4[9]).View;
    obj16 = { size: "xs", color: conjureSetupAskCard(form[6]).colors.ICON_FEEDBACK_POSITIVE };
    CircleCheckIcon = tmp3(tmp4[16]).CircleCheckIcon;
    items7 = [closure_7(View2, obj15), ];
    const obj17 = { variant: "body-xs/semibold", color: "text-feedback-positive", children: copy.saved };
    items7[1] = closure_7(projectId(form[15]).Text, obj17);
    items8 = [closure_8(sharedValue, obj14), , ];
    let tmp29Result = null;
    tmp30 = closure_8;
    if ("" !== conjureSetupAskCard.summary) {
      const obj18 = { variant: "body-sm/normal", color: "text-default", children: conjureSetupAskCard.summary };
      tmp29Result = tmp29(tmp3(tmp4[15]).Text, obj18);
    }
    items8[1] = tmp29Result;
    const obj19 = {
      variant: "secondary",
      size: "sm",
      text: intl.string(projectId(form[18]).t.bt75uw),
      onPress() {
          return openConjureSetupAskFormDefault(projectId, conjureSetupAskCard.editForm);
        }
    };
    const Button = tmp3(tmp4[17]).Button;
    intl = tmp3(tmp4[18]).intl;
    items8[2] = closure_7(Button, obj19);
    tmp29Result2 = tmp29(View, obj12);
  } else {
    let tmp23Result2;
    const items9 = [tmp2.card, ];
    let cardAwaiting = conjureSetupAskCard.awaiting;
    const tmp10Result6 = conjureSetupAskCard(form[14]);
    const tmp40 = closure_8;
    if (cardAwaiting) {
      cardAwaiting = tmp2.cardAwaiting;
    }
    const obj20 = { style: items9, holdsKeyboard: "inline" === presentation, children: items10 };
    items9[1] = cardAwaiting;
    let tmp21 = null;
    if (conjureSetupAskCard.awaiting) {
      tmp21 = closure_7(tmp3(tmp4[20]).ConjureAwaitingPulseRing, {});
    }
    items10 = [tmp21, , , , ];
    let str2 = "text-muted";
    const Text = tmp3(tmp4[15]).Text;
    if (conjureSetupAskCard.awaiting) {
      str2 = "text-brand";
    }
    const obj21 = { variant: "body-xs/semibold", color: str2, children: copy.title };
    items10[1] = closure_7(Text, obj21);
    let tmp23Result = null;
    if (null != conjureSetupAskCard.note) {
      const obj22 = { text: conjureSetupAskCard.note, variant: "body-sm/normal", color: "text-default" };
      tmp23Result = tmp23(tmp10(tmp4[21]), obj22);
    }
    items10[2] = tmp23Result;
    items10[3] = tmp18;
    if ("inline" === presentation) {
      let askId = form.askId;
      const obj23 = { projectId, form, onSaved: conjureSetupAskCard.markSaved, onInputFocusChange };
      const tmp26 = InlineSettingsForm;
      if (askId == null) {
        const keys = form.request.keys;
        let joined;
        if (keys != null) {
          joined = keys.join(",");
        }
        askId = joined;
      }
      tmp23Result2 = tmp23(tmp26, obj23, askId);
    } else {
      const obj24 = {
        variant: "primary",
        size: "sm",
        onPress() {
              return openConjureSetupAskFormDefault(projectId, form);
            },
        text: copy.open
      };
      tmp23Result2 = tmp23(tmp3(tmp4[17]).Button, obj24);
    }
    items10[4] = tmp23Result2;
    tmp29Result2 = tmp40(tmp10Result6, obj20);
  }
  return tmp29Result2;
};
