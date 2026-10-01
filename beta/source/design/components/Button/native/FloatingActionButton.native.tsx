// Module ID: 8377
// Function ID: 8378
// Name: FloatingActionButton
// Dependencies: [19, 21, 4836, 576, 5286, 4566, 5280, 7364, 2]
// Exports: FloatingActionButton

// Module 8377 (FloatingActionButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import spring from "spring" /* 5280 */;
import ButtonConstants from "ButtonConstants" /* 5286 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let num, num2, rect, tmp, tmp3, tmp4, tmpResult, withSpring2;

const jsx = Fragment.jsx;
const styles = createStyles.createStyles(() => {
  let obj2;
  const obj = { button: obj2, iconButtonPill: { minWidth: ButtonConstants.FAB_BUTTON_SIZE, minHeight: ButtonConstants.FAB_BUTTON_SIZE, padding: 0, borderRadius: nativeDefault.radii.lg } };
  obj2 = {};
  const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
  ({ minWidth: ButtonConstants.FAB_BUTTON_SIZE, minHeight: ButtonConstants.FAB_BUTTON_SIZE, padding: 0, borderRadius: nativeDefault.radii.lg });
  return obj;
});
const SPRING_CONFIG = { mass: 0.5, damping: 80, stiffness: 320 };
const __initData = { code: "function FloatingActionButtonNativeTsx1(){const{withSpring,positionBottom,DEFAULT_POSITION_OFFSET,SPRING_CONFIG,positionRight}=this.__closure;var _positionBottom,_positionRight;return{position:'absolute',bottom:withSpring((_positionBottom=positionBottom)!==null&&_positionBottom!==void 0?_positionBottom:DEFAULT_POSITION_OFFSET,SPRING_CONFIG),right:withSpring((_positionRight=positionRight)!==null&&_positionRight!==void 0?_positionRight:DEFAULT_POSITION_OFFSET,SPRING_CONFIG)};}" };
const result = size.fileFinishedImporting("design/components/Button/native/FloatingActionButton.native.tsx");

export const DEFAULT_POSITION_OFFSET = 16;
export const useStyles = styles;
export const FloatingActionButton = function FloatingActionButton(positionRight) {
  let icon;
  let positionBottom;
  ({ icon, positionBottom } = positionRight);
  positionRight = positionRight.positionRight;
  const accessibilityLabel = positionRight.accessibilityLabel;
  const merged = Object.assign(positionRight, Object.assign({ icon: 0, positionBottom: 0, positionRight: 0, accessibilityLabel: 0 }));
  const tmp2 = styles();
  const obj = positionBottom(4566);
  class F {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_2;
      tmp3 = closure_0(closure_2[6]);
      num = positionBottom;
      withSpring = tmp3.withSpring;
      if (positionBottom == null) {
        num = 16;
      }
      rect = { position: "absolute", bottom: withSpring(num, closure_6), right: null };
      tmp4 = closure_6;
      tmpResult = tmp(tmp2[6]);
      num2 = positionRight;
      withSpring2 = tmpResult.withSpring;
      if (positionRight == null) {
        num2 = 16;
      }
      rect.right = withSpring2(num2, tmp4);
      return rect;
    }
  }
  F.__closure = { withSpring: positionBottom(5280).withSpring, positionBottom, DEFAULT_POSITION_OFFSET: 16, SPRING_CONFIG, positionRight };
  F.__workletHash = 10762818944671;
  F.__initData = __initData;
  ({ withSpring: positionBottom(5280).withSpring, positionBottom, DEFAULT_POSITION_OFFSET: 16, SPRING_CONFIG, positionRight });
  const animatedStyle = obj.useAnimatedStyle(F);
  const View = positionRight(4566).View;
  const BaseIconButton = positionBottom(7364).BaseIconButton;
  const merged1 = Object.assign(merged);
  let cloneElementResult = icon;
  const tmp6 = positionRight;
  const tmp8 = react;
  if (react.isValidElement(icon)) {
    const cloneElement = tmp8.cloneElement;
    const obj9 = { color: tmp6(576).colors.WHITE };
    cloneElementResult = cloneElement(icon, obj9);
  }
  ({ button: obj4.style, iconButtonPill: obj4.pillStyle } = tmp2);
  return <View style={animatedStyle}>{null}</View>;
};
