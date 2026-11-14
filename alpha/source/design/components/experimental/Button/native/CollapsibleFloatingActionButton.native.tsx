// Module ID: 8003
// Function ID: 8004
// Name: CollapsibleFloatingActionButton
// Dependencies: [19, 21, 5942, 5306, 1655, 5939, 5940, 5937, 8004, 575, 2]
// Exports: CollapsibleFloatingActionButton

// Module 8003 (CollapsibleFloatingActionButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import _mod1655 from "module_1655" /* 1655 */;
import spring_spring from "spring/spring" /* 5939 */;
import springPresets from "springPresets" /* 5940 */;
import FloatingActionButton from "FloatingActionButton" /* 8004 */;
import react from "react" /* 19 */;
import ButtonConstants from "ButtonConstants" /* 5942 */;
import createStyles from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let tmp2;
const BaseTextButton2 = tmp2(5937);
function CollapsableButton(arg0) {
  let state;
  let style;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  ({ state, style } = arg0);
  const merged = Object.assign(arg0, Object.assign({ state: 0, style: 0 }));
  const collapseText = state.collapseText;
  let items = [closure_7, , , , , , , ];
  const useAnimatedStyle = _mod1655.useAnimatedStyle;
  _mod1655;
  items[1] = ButtonConstants.FAB_BUTTON_SIZE;
  items[2] = spring_spring.withSpring;
  items[3] = _mod1655.interpolate;
  items[4] = collapseText;
  items[5] = 20;
  items[6] = buttonPadding;
  items[7] = springPresets.SUBTLE_SPRING;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
  class CollapsibleFloatingActionButtonNativeTsx1 {
    constructor() {
      obj = { minWidth: closure_0, minHeight: closure_0, paddingHorizontal: null, paddingVertical: closure_5 };
      items = [, ];
      items[0] = closure_4;
      items[1] = closure_5;
      obj.paddingHorizontal = closure_1(closure_2(closure_3.get(), [0, 1], items), closure_6, "animate-always");
      return obj;
    }
  }
  const items1 = [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
  CollapsibleFloatingActionButtonNativeTsx1.__closure = items1;
  CollapsibleFloatingActionButtonNativeTsx1.__workletHash = 9222180405053;
  CollapsibleFloatingActionButtonNativeTsx1.__initData = tmp5;
  const animatedStyle = useAnimatedStyle(CollapsibleFloatingActionButtonNativeTsx1);
  const BaseTextButton = BaseTextButton2.BaseTextButton;
  const merged1 = Object.assign(merged);
  return <BaseTextButton size="lg" variant="primary" textVariant="body-md/semibold" collapseText={collapseText} style={style} pillStyle={animatedStyle} />;
}
const jsx = Fragment.jsx;
const getButtonPadding = ButtonConstants.getButtonPadding;
const buttonPadding = getButtonPadding(ButtonConstants.FAB_BUTTON_SIZE, ButtonConstants.FAB_BUTTON_ICON_SIZE);
let obj = { textButtonPill: { paddingHorizontal: 20, paddingVertical: buttonPadding } };
let closure_6 = createStyles.createStyles(obj);
let closure_7 = { code: "(function CollapsibleFloatingActionButtonNativeTsx1(){let[FAB_BUTTON_SIZE,withSpring,interpolate,collapseText,FAB_PADDING_HORIZONTAL,FAB_PADDING_VERTICAL,SUBTLE_SPRING]=this.__closure;return{minWidth:FAB_BUTTON_SIZE,minHeight:FAB_BUTTON_SIZE,paddingHorizontal:withSpring(interpolate(collapseText.get(),[0,1],[FAB_PADDING_HORIZONTAL,FAB_PADDING_VERTICAL]),SUBTLE_SPRING,'animate-always'),paddingVertical:FAB_PADDING_VERTICAL};})" };
const result = size.fileFinishedImporting("design/components/experimental/Button/native/CollapsibleFloatingActionButton.native.tsx");

export function CollapsibleFloatingActionButton(arg0) {
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
    positionRight = tmp3(8004).DEFAULT_POSITION_OFFSET;
  }
  const rect = { position: "absolute", right: positionRight, bottom: positionBottom };
  if (positionBottom == null) {
    positionBottom = tmp3(8004).DEFAULT_POSITION_OFFSET;
  }
  items[1] = rect;
  if (null != state) {
    const merged1 = Object.assign(merged);
    tmp13 = <CollapsableButton state={state} text={text} style={items} icon={cloneElementResult} />;
  } else {
    const BaseTextButton = tmp3(5937).BaseTextButton;
    const merged2 = Object.assign(merged);
    tmp13 = <BaseTextButton text={text} size="lg" variant="primary" textVariant="body-md/semibold" icon={cloneElementResult} style={items} pillStyle={tmp2.textButtonPill} />;
  }
  return tmp13;
}
