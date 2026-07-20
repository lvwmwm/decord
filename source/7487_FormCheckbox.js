// Module ID: 7487
// Function ID: 60064
// Name: FormCheckbox
// Dependencies: []
// Exports: FormCheckbox

// Module 7487 (FormCheckbox)
let closure_3 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let obj = arg1(dependencyMap[2]);
obj = {};
obj = { width: importDefault(dependencyMap[3]).modules.mobile.CONTROL_CHECKBOX_SIZE_DEFAULT, height: importDefault(dependencyMap[3]).modules.mobile.CONTROL_CHECKBOX_SIZE_DEFAULT, borderRadius: importDefault(dependencyMap[3]).modules.mobile.CONTROL_CHECKBOX_BORDER_RADIUS, borderWidth: importDefault(dependencyMap[3]).modules.mobile.CONTROL_CHECKBOX_BORDER_WIDTH, borderColor: importDefault(dependencyMap[3]).colors.CHECKBOX_BORDER_DEFAULT };
obj.checkbox = obj;
obj.unselected = { backgroundColor: importDefault(dependencyMap[3]).colors.CHECKBOX_BACKGROUND_DEFAULT, borderColor: importDefault(dependencyMap[3]).colors.CHECKBOX_BORDER_DEFAULT };
const obj1 = { backgroundColor: importDefault(dependencyMap[3]).colors.CHECKBOX_BACKGROUND_DEFAULT, borderColor: importDefault(dependencyMap[3]).colors.CHECKBOX_BORDER_DEFAULT };
obj.selected = { borderColor: importDefault(dependencyMap[3]).colors.CHECKBOX_BORDER_SELECTED_DEFAULT, backgroundColor: importDefault(dependencyMap[3]).colors.CHECKBOX_BACKGROUND_SELECTED_DEFAULT };
const obj2 = { borderColor: importDefault(dependencyMap[3]).colors.CHECKBOX_BORDER_SELECTED_DEFAULT, backgroundColor: importDefault(dependencyMap[3]).colors.CHECKBOX_BACKGROUND_SELECTED_DEFAULT };
obj.checkmark = { tintColor: importDefault(dependencyMap[3]).colors.CHECKBOX_ICON_ACTIVE };
let closure_5 = obj.createStyles(obj);
const obj3 = { tintColor: importDefault(dependencyMap[3]).colors.CHECKBOX_ICON_ACTIVE };
let closure_6 = importDefault(dependencyMap[4]).createAnimatedComponent(importDefault(dependencyMap[5]));
let closure_7 = { code: "function FormCheckboxNativeTsx1(){const{withSpring,checked,selected,unselected,SUBTLE_SPRING}=this.__closure;const defaultAnimation={borderColor:withSpring(checked?selected.borderColor:unselected.borderColor,SUBTLE_SPRING,'animate-always'),backgroundColor:withSpring(checked?selected.backgroundColor:unselected.backgroundColor,SUBTLE_SPRING,'animate-always')};return defaultAnimation;}" };
let closure_8 = { code: "function FormCheckboxNativeTsx2(){const{useReducedMotion,withSpring,checked,SUBTLE_SPRING}=this.__closure;const uncheckedScale=useReducedMotion?1:0.5;return{opacity:withSpring(checked?1:0,SUBTLE_SPRING,'animate-always'),transform:[{scale:withSpring(checked?1:uncheckedScale,SUBTLE_SPRING)}]};}" };
const importDefaultResult = importDefault(dependencyMap[4]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("design/components/Forms/native/FormCheckbox.native.tsx");

export const FormCheckbox = function FormCheckbox(checked) {
  checked = checked.checked;
  const tmp2 = callback();
  const tmp = importDefault(dependencyMap[6])("FormCheckbox");
  const tmp3 = function useCheckboxStyles(checked) {
    const tmp = callback();
    const selected = tmp.selected;
    const unselected = tmp.unselected;
    let obj = checked(unselected[4]);
    const fn = function _() {
      const obj = {};
      if (arg0) {
        let borderColor = selected.borderColor;
      } else {
        borderColor = unselected.borderColor;
      }
      obj.borderColor = arg0(unselected[9]).withSpring(borderColor, arg0(unselected[10]).SUBTLE_SPRING, "animate-always");
      const obj2 = arg0(unselected[9]);
      if (arg0) {
        let backgroundColor = selected.backgroundColor;
      } else {
        backgroundColor = unselected.backgroundColor;
      }
      obj.backgroundColor = arg0(unselected[9]).withSpring(backgroundColor, arg0(unselected[10]).SUBTLE_SPRING, "animate-always");
      return obj;
    };
    obj = { withSpring: checked(unselected[9]).withSpring, checked, selected, unselected, SUBTLE_SPRING: checked(unselected[10]).SUBTLE_SPRING };
    fn.__closure = obj;
    fn.__workletHash = 11278373524374;
    fn.__initData = closure_7;
    return obj.useAnimatedStyle(fn);
  }(checked);
  let obj = { style: items };
  const items = [tmp2.checkbox, tmp3];
  obj = { source: importDefault(dependencyMap[8]) };
  const Sizes = importDefault(dependencyMap[5]).Sizes;
  obj.size = tmp ? Sizes.SMALL_20 : Sizes.SMALL;
  const items1 = [
    tmp2.checkmark,
    function useCheckmarkStyles(enabled, checked) {
      let obj = enabled(closure_2[4]);
      const fn = function c() {
        let num = 0.5;
        if (arg0) {
          num = 1;
        }
        let obj = {};
        let num2 = 0;
        if (arg1) {
          num2 = 1;
        }
        obj.opacity = arg0(closure_2[9]).withSpring(num2, arg0(closure_2[10]).SUBTLE_SPRING, "animate-always");
        obj = {};
        const obj2 = arg0(closure_2[9]);
        let num3 = 1;
        if (!arg1) {
          num3 = num;
        }
        obj.scale = arg0(closure_2[9]).withSpring(num3, arg0(closure_2[10]).SUBTLE_SPRING);
        const items = [obj];
        obj.transform = items;
        return obj;
      };
      obj = { useReducedMotion: enabled, withSpring: enabled(closure_2[9]).withSpring, checked, SUBTLE_SPRING: enabled(closure_2[10]).SUBTLE_SPRING };
      fn.__closure = obj;
      fn.__workletHash = 13939484082835;
      fn.__initData = closure_8;
      return obj.useAnimatedStyle(fn);
    }(React.useContext(arg1(dependencyMap[7]).AccessibilityPreferencesContext).reducedMotion.enabled, checked)
  ];
  obj.style = items1;
  obj.children = <closure_6 {...obj} />;
  return jsx(importDefault(dependencyMap[4]).View, obj);
};
