// Module ID: 8371
// Function ID: 66697
// Name: CollapsableButton
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 4294967295, 0]
// Exports: CollapsibleFloatingActionButton

// Module 8371 (CollapsableButton)
import closure_3 from "result";
import { jsx } from "result";
import result from "result";
import result from "result";
import result from "result";

function CollapsableButton(arg0) {
  let state;
  let style;
  ({ state, style } = arg0);
  let obj = Object.create(null);
  obj.state = 0;
  obj.style = 0;
  const collapseText = state.collapseText;
  const arg1 = collapseText;
  const merged = Object.assign(arg0, obj);
  obj = arg1(dependencyMap[4]);
  class B {
    constructor() {
      obj = { minWidth: collapseText(closure_2[2]).FAB_BUTTON_SIZE, minHeight: collapseText(closure_2[2]).FAB_BUTTON_SIZE };
      obj2 = collapseText(closure_2[5]);
      obj3 = collapseText(closure_2[4]);
      items = [null];
      items[1] = closure_5;
      interpolateResult = obj3.interpolate(collapseText.get(), ["replace", "then"], items);
      obj.paddingHorizontal = obj2.withSpring(interpolateResult, collapseText(closure_2[6]).SUBTLE_SPRING, "animate-always");
      obj.paddingVertical = closure_5;
      return obj;
    }
  }
  obj = { FAB_BUTTON_SIZE: arg1(dependencyMap[2]).FAB_BUTTON_SIZE, withSpring: arg1(dependencyMap[5]).withSpring, interpolate: arg1(dependencyMap[4]).interpolate, collapseText, FAB_PADDING_HORIZONTAL: 20, FAB_PADDING_VERTICAL: buttonPadding, SUBTLE_SPRING: arg1(dependencyMap[6]).SUBTLE_SPRING };
  B.__closure = obj;
  B.__workletHash = 5958377845220;
  B.__initData = closure_7;
  const animatedStyle = obj.useAnimatedStyle(B);
  const obj1 = {};
  const merged1 = Object.assign(merged);
  obj1["size"] = "lg";
  obj1["variant"] = "primary";
  obj1["textVariant"] = "text-md/semibold";
  obj1["collapseText"] = collapseText;
  obj1["style"] = style;
  obj1["pillStyle"] = animatedStyle;
  return jsx(arg1(dependencyMap[7]).BaseTextButton, obj1);
}
const buttonPadding = result.getButtonPadding(require("result").FAB_BUTTON_SIZE, require("result").FAB_BUTTON_ICON_SIZE);
let closure_6 = result.createStyles({ textButtonPill: { paddingHorizontal: 20, paddingVertical: buttonPadding } });
let closure_7 = { code: "function CollapsibleFloatingActionButtonNativeTsx1(){const{FAB_BUTTON_SIZE,withSpring,interpolate,collapseText,FAB_PADDING_HORIZONTAL,FAB_PADDING_VERTICAL,SUBTLE_SPRING}=this.__closure;return{minWidth:FAB_BUTTON_SIZE,minHeight:FAB_BUTTON_SIZE,paddingHorizontal:withSpring(interpolate(collapseText.get(),[0,1],[FAB_PADDING_HORIZONTAL,FAB_PADDING_VERTICAL]),SUBTLE_SPRING,'animate-always'),paddingVertical:FAB_PADDING_VERTICAL};}" };
result = result.fileFinishedImporting("design/components/experimental/Button/native/CollapsibleFloatingActionButton.native.tsx");

export const CollapsibleFloatingActionButton = function CollapsibleFloatingActionButton(arg0) {
  let icon;
  let positionBottom;
  let positionRight;
  let state;
  let text;
  ({ icon, positionBottom, positionRight, text, state } = arg0);
  let obj = { required: null, checked: null, preChecked: null, id: null, type: null };
  Object.setPrototypeOf(null);
  const merged = Object.assign(arg0, obj);
  let obj1 = arg1(dependencyMap[8]);
  const styles = obj1.useStyles();
  let cloneElementResult = icon;
  if (closure_3.isValidElement(icon)) {
    obj = { color: importDefault(dependencyMap[9]).colors.WHITE };
    cloneElementResult = closure_3.cloneElement(icon, obj);
  }
  obj = { position: "absolute" };
  if (null == positionRight) {
    positionRight = arg1(dependencyMap[8]).DEFAULT_POSITION_OFFSET;
  }
  obj.right = positionRight;
  if (null == positionBottom) {
    positionBottom = arg1(dependencyMap[8]).DEFAULT_POSITION_OFFSET;
  }
  obj.bottom = positionBottom;
  const items = [styles.button, obj];
  if (null != state) {
    obj1 = {};
    const merged1 = Object.assign(merged);
    obj1["state"] = state;
    obj1["text"] = text;
    obj1["style"] = items;
    obj1["icon"] = cloneElementResult;
    let tmp18 = <CollapsableButton {...obj1} />;
  } else {
    const obj2 = {};
    const merged2 = Object.assign(merged);
    obj2["text"] = text;
    obj2["size"] = "lg";
    obj2["variant"] = "primary";
    obj2["textVariant"] = "text-md/semibold";
    obj2["icon"] = cloneElementResult;
    obj2["style"] = items;
    obj2["pillStyle"] = tmp3.textButtonPill;
    tmp18 = jsx(arg1(dependencyMap[7]).BaseTextButton, obj2);
  }
  return tmp18;
};
