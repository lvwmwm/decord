// Module ID: 8376
// Function ID: 8377
// Name: CollapsibleFloatingActionButton
// Dependencies: [19, 21, 5286, 4836, 4566, 5280, 5284, 5282, 8377, 576, 2]
// Exports: CollapsibleFloatingActionButton

// Module 8376 (CollapsibleFloatingActionButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import spring from "spring" /* 5280 */;
import springPresets from "springPresets" /* 5284 */;
import FloatingActionButton from "FloatingActionButton" /* 8377 */;
import react from "react" /* 19 */;
import ButtonConstants from "ButtonConstants" /* 5286 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let interpolateResult, tmp;

function CollapsableButton(arg0) {
  let state;
  let style;
  ({ state, style } = arg0);
  const collapseText = state.collapseText;
  const merged = Object.assign(arg0, Object.assign({ state: 0, style: 0 }));
  let obj = collapseText(4566);
  class B {
    constructor() {
      obj = { minWidth: closure_0(closure_2[2]).FAB_BUTTON_SIZE, minHeight: closure_0(closure_2[2]).FAB_BUTTON_SIZE, paddingHorizontal: null, paddingVertical: null };
      tmp = closure_0(closure_2[5]);
      withSpring = tmp.withSpring;
      obj2 = closure_0(closure_2[4]);
      items = [20];
      items[1] = closure_5;
      interpolateResult = obj2.interpolate(collapseText.get(), [0, 1], items);
      obj.paddingHorizontal = withSpring(interpolateResult, closure_0(closure_2[6]).SUBTLE_SPRING, "animate-always");
      obj.paddingVertical = closure_5;
      return obj;
    }
  }
  let obj2 = { FAB_BUTTON_SIZE: collapseText(5286).FAB_BUTTON_SIZE, withSpring: collapseText(5280).withSpring, interpolate: collapseText(4566).interpolate, collapseText, FAB_PADDING_HORIZONTAL: 20, FAB_PADDING_VERTICAL: buttonPadding, SUBTLE_SPRING: collapseText(5284).SUBTLE_SPRING };
  B.__closure = obj2;
  B.__workletHash = 5958377845220;
  B.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(B);
  const BaseTextButton = collapseText(5282).BaseTextButton;
  const merged1 = Object.assign(merged);
  return <BaseTextButton size="lg" variant="primary" textVariant="text-md/semibold" collapseText={collapseText} style={style} pillStyle={animatedStyle} />;
}
const jsx = Fragment.jsx;
const getButtonPadding = ButtonConstants.getButtonPadding;
const buttonPadding = getButtonPadding(ButtonConstants.FAB_BUTTON_SIZE, ButtonConstants.FAB_BUTTON_ICON_SIZE);
let obj = { textButtonPill: { paddingHorizontal: 20, paddingVertical: buttonPadding } };
let closure_6 = createStyles.createStyles(obj);
const __initData = { code: "function CollapsibleFloatingActionButtonNativeTsx1(){const{FAB_BUTTON_SIZE,withSpring,interpolate,collapseText,FAB_PADDING_HORIZONTAL,FAB_PADDING_VERTICAL,SUBTLE_SPRING}=this.__closure;return{minWidth:FAB_BUTTON_SIZE,minHeight:FAB_BUTTON_SIZE,paddingHorizontal:withSpring(interpolate(collapseText.get(),[0,1],[FAB_PADDING_HORIZONTAL,FAB_PADDING_VERTICAL]),SUBTLE_SPRING,'animate-always'),paddingVertical:FAB_PADDING_VERTICAL};}" };
const result = size.fileFinishedImporting("design/components/experimental/Button/native/CollapsibleFloatingActionButton.native.tsx");

export const CollapsibleFloatingActionButton = function CollapsibleFloatingActionButton(arg0) {
  let icon;
  let positionBottom;
  let positionRight;
  let state;
  let text;
  let tmp13;
  ({ icon, positionBottom, positionRight, text, state } = arg0);
  const merged = Object.assign(arg0, Object.assign({ icon: 0, positionBottom: 0, positionRight: 0, text: 0, state: 0 }));
  const tmp2 = closure_6();
  const obj = FloatingActionButton;
  const styles = obj.useStyles();
  let cloneElementResult = icon;
  const tmp6 = react;
  if (react.isValidElement(icon)) {
    const cloneElement = tmp6.cloneElement;
    const obj2 = { color: nativeDefault.colors.WHITE };
    cloneElementResult = cloneElement(icon, obj2);
  }
  const items = [styles.button, ];
  if (positionRight == null) {
    positionRight = tmp3(8377).DEFAULT_POSITION_OFFSET;
  }
  const rect = { position: "absolute", right: positionRight, bottom: positionBottom };
  if (positionBottom == null) {
    positionBottom = tmp3(8377).DEFAULT_POSITION_OFFSET;
  }
  items[1] = rect;
  if (null != state) {
    const merged1 = Object.assign(merged);
    tmp13 = <CollapsableButton state={state} text={text} style={items} icon={cloneElementResult} />;
  } else {
    const BaseTextButton = tmp3(5282).BaseTextButton;
    const merged2 = Object.assign(merged);
    tmp13 = <BaseTextButton text={text} size="lg" variant="primary" textVariant="text-md/semibold" icon={cloneElementResult} style={items} pillStyle={tmp2.textButtonPill} />;
  }
  return tmp13;
};
