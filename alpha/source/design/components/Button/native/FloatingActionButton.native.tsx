// Module ID: 9127
// Function ID: 9128
// Name: FloatingActionButton
// Dependencies: [19, 21, 5141, 575, 5760, 1652, 5757, 8153, 2]
// Exports: FloatingActionButton

// Module 9127 (FloatingActionButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import spring_spring from "spring/spring" /* 5757 */;
import ButtonConstants from "ButtonConstants" /* 5760 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

const _modDef1652 = _mod1652;
let rect, tmp;

let tmp3;
const BaseIconButton2 = tmp3(8153);
const jsx = Fragment.jsx;
const styles = createStyles.createStyles(() => {
  let obj2;
  const obj = { button: obj2, iconButtonPill: { minWidth: ButtonConstants.FAB_BUTTON_SIZE, minHeight: ButtonConstants.FAB_BUTTON_SIZE, padding: 0, borderRadius: nativeDefault.radii.lg } };
  obj2 = {};
  const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
  ({ minWidth: ButtonConstants.FAB_BUTTON_SIZE, minHeight: ButtonConstants.FAB_BUTTON_SIZE, padding: 0, borderRadius: nativeDefault.radii.lg });
  return obj;
});
let closure_6 = { mass: 0.5, damping: 80, stiffness: 320 };
let closure_7 = { code: "(function FloatingActionButtonNativeTsx1(){let[withSpring,positionBottom,DEFAULT_POSITION_OFFSET,SPRING_CONFIG,positionRight]=this.__closure;var _positionBottom,_positionRight;return{position:'absolute',bottom:withSpring((_positionBottom=positionBottom)!==null&&_positionBottom!==void 0?_positionBottom:DEFAULT_POSITION_OFFSET,SPRING_CONFIG),right:withSpring((_positionRight=positionRight)!==null&&_positionRight!==void 0?_positionRight:DEFAULT_POSITION_OFFSET,SPRING_CONFIG)};})" };
const result = size.fileFinishedImporting("design/components/Button/native/FloatingActionButton.native.tsx");

export const DEFAULT_POSITION_OFFSET = 16;
export const useStyles = styles;
export function FloatingActionButton(icon) {
  let accessibilityLabel;
  let positionBottom;
  let positionRight;
  let tmp10;
  let tmp11;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  icon = icon.icon;
  ({ positionBottom, positionRight, accessibilityLabel } = icon);
  const merged = Object.assign(icon, Object.assign({ icon: 0, positionBottom: 0, positionRight: 0, accessibilityLabel: 0 }));
  let tmp2 = styles();
  let tmp4 = dependencyMap;
  let tmp3 = require;
  const items = [closure_7, , , , , ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  _mod1652;
  items[1] = spring_spring.withSpring;
  items[2] = positionBottom;
  items[3] = 16;
  items[4] = closure_6;
  items[5] = positionRight;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11] = items;
  class FloatingActionButtonNativeTsx1 {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_1;
      if (closure_1 == null) {
        tmp2 = closure_2;
      }
      rect = { position: "absolute", bottom: tmp(tmp2, closure_3), right: null };
      tmp3 = closure_3;
      tmp4 = closure_4;
      if (closure_4 == null) {
        tmp4 = closure_2;
      }
      rect.right = tmp(tmp4, tmp3);
      return rect;
    }
  }
  const items1 = [tmp7, tmp8, tmp9, tmp10, tmp11];
  FloatingActionButtonNativeTsx1.__closure = items1;
  FloatingActionButtonNativeTsx1.__workletHash = 14949608342118;
  FloatingActionButtonNativeTsx1.__initData = tmp6;
  const animatedStyle = useAnimatedStyle(FloatingActionButtonNativeTsx1);
  const View = _modDef1652.View;
  const BaseIconButton = BaseIconButton2.BaseIconButton;
  const merged1 = Object.assign(merged);
  let cloneElementResult = icon;
  const tmp16 = react;
  if (react.isValidElement(icon)) {
    const cloneElement = tmp16.cloneElement;
    const obj5 = { color: nativeDefault.colors.WHITE };
    cloneElementResult = cloneElement(icon, obj5);
  }
  ({ button: obj2.style, iconButtonPill: obj2.pillStyle } = tmp2);
  return <View style={animatedStyle}>{null}</View>;
}
