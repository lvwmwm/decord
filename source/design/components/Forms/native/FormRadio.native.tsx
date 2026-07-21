// Module ID: 7514
// Function ID: 60171
// Name: FormRadio
// Dependencies: []
// Exports: FormRadio

// Module 7514 (FormRadio)
let closure_3 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let closure_5 = arg1(dependencyMap[2]).createStyles(() => {
  const CONTROL_RADIO_ICON_SIZE_DEFAULT = importDefault(dependencyMap[3]).modules.mobile.CONTROL_RADIO_ICON_SIZE_DEFAULT;
  const CONTROL_RADIO_ICON_DOT_SIZE_DEFAULT = importDefault(dependencyMap[3]).modules.mobile.CONTROL_RADIO_ICON_DOT_SIZE_DEFAULT;
  let obj = {};
  obj = { width: CONTROL_RADIO_ICON_SIZE_DEFAULT, height: CONTROL_RADIO_ICON_SIZE_DEFAULT, borderRadius: importDefault(dependencyMap[3]).radii.round, borderWidth: importDefault(dependencyMap[3]).modules.mobile.CONTROL_RADIO_ICON_BORDER_WIDTH, borderColor: importDefault(dependencyMap[3]).colors.RADIO_BORDER_DEFAULT };
  obj.radio = obj;
  obj = { backgroundColor: "transparent", borderColor: importDefault(dependencyMap[3]).colors.RADIO_BORDER_DEFAULT };
  obj.unselected = obj;
  obj.selected = { borderColor: importDefault(dependencyMap[3]).colors.REDESIGN_INPUT_CONTROL_SELECTED, backgroundColor: importDefault(dependencyMap[3]).colors.REDESIGN_INPUT_CONTROL_SELECTED };
  const obj1 = { borderColor: importDefault(dependencyMap[3]).colors.REDESIGN_INPUT_CONTROL_SELECTED, backgroundColor: importDefault(dependencyMap[3]).colors.REDESIGN_INPUT_CONTROL_SELECTED };
  obj.dot = { width: CONTROL_RADIO_ICON_DOT_SIZE_DEFAULT, height: CONTROL_RADIO_ICON_DOT_SIZE_DEFAULT, backgroundColor: importDefault(dependencyMap[3]).colors.WHITE, borderRadius: importDefault(dependencyMap[3]).radii.round };
  return obj;
});
let closure_6 = { code: "function FormRadioNativeTsx1(){const{withSpring,selectedShared,selectedStyles,unselectedStyles,SUBTLE_SPRING}=this.__closure;return withSpring(selectedShared.get()?selectedStyles.borderColor:unselectedStyles.borderColor,SUBTLE_SPRING,'animate-always');}" };
let closure_7 = { code: "function FormRadioNativeTsx2(){const{withSpring,selectedShared,selectedStyles,unselectedStyles,SUBTLE_SPRING}=this.__closure;return withSpring(selectedShared.get()?selectedStyles.backgroundColor:unselectedStyles.backgroundColor,SUBTLE_SPRING,'animate-always');}" };
let closure_8 = { code: "function FormRadioNativeTsx3(){const{borderColor,backgroundColor}=this.__closure;return{borderColor:borderColor.get(),backgroundColor:backgroundColor.get()};}" };
let closure_9 = { code: "function FormRadioNativeTsx4(){const{useReducedMotion,withSpring,selected,SUBTLE_SPRING}=this.__closure;const unselectedScale=useReducedMotion?1:0.5;return{opacity:withSpring(selected?1:0,SUBTLE_SPRING,'animate-always'),transform:[{scale:withSpring(selected?1:unselectedScale,SUBTLE_SPRING)}]};}" };
const obj = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("design/components/Forms/native/FormRadio.native.tsx");

export const FormRadio = function FormRadio(selected) {
  selected = selected.selected;
  const tmp = callback();
  const tmp2 = function useRadioStyles(selected) {
    const tmp = derivedValue1();
    selected = tmp.selected;
    const unselected = tmp.unselected;
    let obj = selected(unselected[5]);
    const sharedValue = obj.useSharedValue(selected);
    const items = [selected, sharedValue];
    const effect = sharedValue.useEffect(() => {
      const result = sharedValue.set(arg0);
    }, items);
    class T {
      constructor() {
        obj = selected(unselected[6]);
        if (closure_3.get()) {
          tmp2 = selected;
          borderColor = selected.borderColor;
        } else {
          tmp = unselected;
          borderColor = unselected.borderColor;
        }
        return obj.withSpring(borderColor, selected(unselected[7]).SUBTLE_SPRING, "animate-always");
      }
    }
    obj = { withSpring: selected(unselected[6]).withSpring, selectedShared: sharedValue, selectedStyles: selected, unselectedStyles: unselected, SUBTLE_SPRING: selected(unselected[7]).SUBTLE_SPRING };
    T.__closure = obj;
    T.__workletHash = 12275577765341;
    T.__initData = closure_6;
    const derivedValue = selected(unselected[5]).useDerivedValue(T);
    const obj2 = selected(unselected[5]);
    class C {
      constructor() {
        obj = selected(unselected[6]);
        if (closure_3.get()) {
          tmp2 = selected;
          backgroundColor = selected.backgroundColor;
        } else {
          tmp = unselected;
          backgroundColor = unselected.backgroundColor;
        }
        return obj.withSpring(backgroundColor, selected(unselected[7]).SUBTLE_SPRING, "animate-always");
      }
    }
    obj = { withSpring: selected(unselected[6]).withSpring, selectedShared: sharedValue, selectedStyles: selected, unselectedStyles: unselected, SUBTLE_SPRING: selected(unselected[7]).SUBTLE_SPRING };
    C.__closure = obj;
    C.__workletHash = 7732795836606;
    C.__initData = closure_7;
    const derivedValue1 = selected(unselected[5]).useDerivedValue(C);
    const obj4 = selected(unselected[5]);
    const fn = function b() {
      return { borderColor: derivedValue.get(), backgroundColor: derivedValue1.get() };
    };
    fn.__closure = { borderColor: derivedValue, backgroundColor: derivedValue1 };
    fn.__workletHash = 5670342272321;
    fn.__initData = closure_8;
    return selected(unselected[5]).useAnimatedStyle(fn);
  }(selected);
  const obj = { style: items };
  const items = [tmp.radio, tmp2];
  const items1 = [
    tmp.dot,
    function useRadioDotStyles(enabled, selected) {
      let obj = enabled(closure_2[5]);
      const fn = function s() {
        let num = 0.5;
        if (arg0) {
          num = 1;
        }
        let obj = {};
        let num2 = 0;
        if (arg1) {
          num2 = 1;
        }
        obj.opacity = arg0(closure_2[6]).withSpring(num2, arg0(closure_2[7]).SUBTLE_SPRING, "animate-always");
        obj = {};
        const obj2 = arg0(closure_2[6]);
        let num3 = 1;
        if (!arg1) {
          num3 = num;
        }
        obj.scale = arg0(closure_2[6]).withSpring(num3, arg0(closure_2[7]).SUBTLE_SPRING);
        const items = [obj];
        obj.transform = items;
        return obj;
      };
      obj = { useReducedMotion: enabled, withSpring: enabled(closure_2[6]).withSpring, selected, SUBTLE_SPRING: enabled(closure_2[7]).SUBTLE_SPRING };
      fn.__closure = obj;
      fn.__workletHash = 15209729079449;
      fn.__initData = closure_9;
      return obj.useAnimatedStyle(fn);
    }(React.useContext(arg1(dependencyMap[4]).AccessibilityPreferencesContext).reducedMotion.enabled, selected)
  ];
  obj.children = jsx(importDefault(dependencyMap[5]).View, { style: items1 });
  return jsx(importDefault(dependencyMap[5]).View, obj);
};
