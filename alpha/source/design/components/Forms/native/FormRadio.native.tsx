// Module ID: 7206
// Function ID: 7207
// Name: FormRadio
// Dependencies: [19, 21, 5143, 575, 5157, 1652, 5773, 5774, 2]
// Exports: FormRadio

// Module 7206 (FormRadio)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import react2 from "react" /* 5157 */;
import spring_spring from "spring/spring" /* 5773 */;
import springPresets from "springPresets" /* 5774 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5143 */;
import size_mod from "module_2" /* 2 */;

const _modDef1652 = _mod1652;

const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles(() => {
  let size1;
  const CONTROL_RADIO_ICON_SIZE_DEFAULT = nativeDefault.modules.mobile.CONTROL_RADIO_ICON_SIZE_DEFAULT;
  const CONTROL_RADIO_ICON_DOT_SIZE_DEFAULT = nativeDefault.modules.mobile.CONTROL_RADIO_ICON_DOT_SIZE_DEFAULT;
  const obj = { radio: size, unselected: { backgroundColor: "transparent", borderColor: nativeDefault.colors.RADIO_BORDER_DEFAULT }, selected: { borderColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED, backgroundColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED }, dot: size1 };
  size = { width: CONTROL_RADIO_ICON_SIZE_DEFAULT, height: CONTROL_RADIO_ICON_SIZE_DEFAULT, flexGrow: 0, flexShrink: 0, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round, borderWidth: nativeDefault.modules.mobile.CONTROL_RADIO_ICON_BORDER_WIDTH, borderColor: nativeDefault.colors.RADIO_BORDER_DEFAULT };
  ({ backgroundColor: "transparent", borderColor: nativeDefault.colors.RADIO_BORDER_DEFAULT });
  ({ borderColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED, backgroundColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED });
  size1 = { width: CONTROL_RADIO_ICON_DOT_SIZE_DEFAULT, height: CONTROL_RADIO_ICON_DOT_SIZE_DEFAULT, backgroundColor: nativeDefault.colors.WHITE, borderRadius: nativeDefault.radii.round };
  return obj;
});
let closure_6 = { code: "(function FormRadioNativeTsx1(){let[withSpring,selectedShared,selectedStyles,unselectedStyles,SUBTLE_SPRING]=this.__closure;return withSpring(selectedShared.get()?selectedStyles.borderColor:unselectedStyles.borderColor,SUBTLE_SPRING,'animate-always');})" };
let closure_7 = { code: "(function FormRadioNativeTsx2(){let[withSpring,selectedShared,selectedStyles,unselectedStyles,SUBTLE_SPRING]=this.__closure;return withSpring(selectedShared.get()?selectedStyles.backgroundColor:unselectedStyles.backgroundColor,SUBTLE_SPRING,'animate-always');})" };
let closure_8 = { code: "(function FormRadioNativeTsx3(){let[borderColor,backgroundColor]=this.__closure;return{borderColor:borderColor.get(),backgroundColor:backgroundColor.get()};})" };
let closure_9 = { code: "(function FormRadioNativeTsx4(){let[useReducedMotion,withSpring,selected,SUBTLE_SPRING]=this.__closure;const unselectedScale=useReducedMotion?1:0.5;return{opacity:withSpring(selected?1:0,SUBTLE_SPRING,'animate-always'),transform:[{scale:withSpring(selected?1:unselectedScale,SUBTLE_SPRING)}]};})" };
let size = size_mod;
let result = size.fileFinishedImporting("design/components/Forms/native/FormRadio.native.tsx");

export function FormRadio(selected) {
  let selected2;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp31;
  let tmp32;
  let tmp8;
  let tmp9;
  let unselected;
  selected = selected.selected;
  let tmp = closure_5();
  const tmp3 = dependencyMap;
  const enabled = react.useContext(react2.AccessibilityPreferencesContext).reducedMotion.enabled;
  ({ selected: selected2, unselected } = closure_5());
  closure_5();
  let obj = _mod1652;
  const sharedValue = obj.useSharedValue(selected);
  let items = [selected, sharedValue];
  const effect = react.useEffect(() => {
    const result = sharedValue.set(selected);
  }, items);
  const items1 = [closure_6, , , , , ];
  const useDerivedValue = _mod1652.useDerivedValue;
  _mod1652;
  items1[1] = spring_spring.withSpring;
  items1[2] = sharedValue;
  items1[3] = selected2;
  items1[4] = unselected;
  items1[5] = springPresets.SUBTLE_SPRING;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13] = items1;
  class FormRadioNativeTsx1 {
    constructor() {
      let borderColor;
      const tmp = c0;
      if (_undefined.get()) {
        borderColor = _undefined2.borderColor;
      } else {
        borderColor = _undefined3.borderColor;
      }
      return tmp(borderColor, c4, "animate-always");
    }
  }
  const items2 = [tmp9, tmp10, tmp11, tmp12, tmp13];
  FormRadioNativeTsx1.__closure = items2;
  FormRadioNativeTsx1.__workletHash = 8234742107812;
  FormRadioNativeTsx1.__initData = tmp8;
  const derivedValue = useDerivedValue(FormRadioNativeTsx1);
  const items3 = [closure_7, , , , , ];
  const useDerivedValue2 = tmp2(1652).useDerivedValue;
  _mod1652;
  items3[1] = spring_spring.withSpring;
  items3[2] = sharedValue;
  items3[3] = selected2;
  items3[4] = unselected;
  items3[5] = springPresets.SUBTLE_SPRING;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp16, tmp17, tmp18, tmp19, tmp20, tmp21] = items3;
  class FormRadioNativeTsx2 {
    constructor() {
      let backgroundColor;
      const tmp = c0;
      if (_undefined.get()) {
        backgroundColor = _undefined2.backgroundColor;
      } else {
        backgroundColor = _undefined3.backgroundColor;
      }
      return tmp(backgroundColor, c4, "animate-always");
    }
  }
  const items4 = [tmp17, tmp18, tmp19, tmp20, tmp21];
  FormRadioNativeTsx2.__closure = items4;
  FormRadioNativeTsx2.__workletHash = 13712264253863;
  FormRadioNativeTsx2.__initData = tmp16;
  const derivedValue2 = useDerivedValue2(FormRadioNativeTsx2);
  const items5 = [closure_8, derivedValue, derivedValue2];
  c0 = undefined;
  c1 = undefined;
  [tmp23, tmp24, tmp25] = items5;
  const tmp2Result3 = _mod1652;
  class FormRadioNativeTsx3 {
    constructor() {
      const obj = { borderColor: _undefined.get(), backgroundColor: _undefined2.get() };
      return obj;
    }
  }
  const items6 = [tmp24, tmp25];
  FormRadioNativeTsx3.__closure = items6;
  FormRadioNativeTsx3.__workletHash = 12595254902040;
  FormRadioNativeTsx3.__initData = tmp23;
  const animatedStyle = tmp2Result3.useAnimatedStyle(FormRadioNativeTsx3);
  const items7 = [closure_9, enabled, , , ];
  const useAnimatedStyle = tmp2(1652).useAnimatedStyle;
  _mod1652;
  items7[2] = spring_spring.withSpring;
  items7[3] = selected;
  items7[4] = springPresets.SUBTLE_SPRING;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp28, tmp29, tmp30, tmp31, tmp32] = items7;
  class FormRadioNativeTsx4 {
    constructor() {
      let items;
      let num = 0.5;
      if (c0) {
        num = 1;
      }
      let num2 = 0;
      if (c2) {
        num2 = 1;
      }
      let num3 = 1;
      const obj = { opacity: _undefined(num2, c3, "animate-always"), transform: items };
      if (!c2) {
        num3 = num;
      }
      items = [{ scale: _undefined(num3, tmp3) }];
      ({ scale: _undefined(num3, c3) });
      return obj;
    }
  }
  const items8 = [tmp29, tmp30, tmp31, tmp32];
  FormRadioNativeTsx4.__closure = items8;
  FormRadioNativeTsx4.__workletHash = 9714979112288;
  FormRadioNativeTsx4.__initData = tmp28;
  const animatedStyle1 = useAnimatedStyle(FormRadioNativeTsx4);
  const items9 = [tmp.radio, animatedStyle];
  const View = _modDef1652.View;
  const items10 = [tmp.dot, animatedStyle1];
  return <View style={items9}>{null}</View>;
}
