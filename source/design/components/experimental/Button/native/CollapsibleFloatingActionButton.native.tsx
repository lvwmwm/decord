// Module ID: 8422
// Function ID: 66974
// Name: CollapsableButton
// Dependencies: [31, 33, 4547, 4130, 3991, 4542, 4546, 4544, 8423, 689, 2]
// Exports: CollapsibleFloatingActionButton

// Module 8422 (CollapsableButton)
import result from "result";
import { jsx } from "jsxProd";
import getButtonPadding from "getButtonPadding";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function CollapsableButton(arg0) {
  let state;
  let style;
  ({ state, style } = arg0);
  let obj = Object.create(null);
  obj.state = 0;
  obj.style = 0;
  const collapseText = state.collapseText;
  const merged = Object.assign(arg0, obj);
  obj = collapseText(3991);
  class B {
    constructor() {
      obj = { minWidth: collapseText(outer1_2[2]).FAB_BUTTON_SIZE, minHeight: collapseText(outer1_2[2]).FAB_BUTTON_SIZE };
      obj2 = collapseText(outer1_2[5]);
      obj3 = collapseText(outer1_2[4]);
      items = [20];
      items[1] = outer1_5;
      interpolateResult = obj3.interpolate(collapseText.get(), [0, 1], items);
      obj.paddingHorizontal = obj2.withSpring(interpolateResult, collapseText(outer1_2[6]).SUBTLE_SPRING, "animate-always");
      obj.paddingVertical = outer1_5;
      return obj;
    }
  }
  obj = { FAB_BUTTON_SIZE: collapseText(4547).FAB_BUTTON_SIZE, withSpring: collapseText(4542).withSpring, interpolate: collapseText(3991).interpolate, collapseText, FAB_PADDING_HORIZONTAL: 20, FAB_PADDING_VERTICAL: buttonPadding, SUBTLE_SPRING: collapseText(4546).SUBTLE_SPRING };
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
  return jsx(collapseText(4544).BaseTextButton, {});
}
const buttonPadding = getButtonPadding.getButtonPadding(require("getButtonPadding").FAB_BUTTON_SIZE, require("getButtonPadding").FAB_BUTTON_ICON_SIZE);
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ textButtonPill: { paddingHorizontal: 20, paddingVertical: buttonPadding } });
let closure_7 = { code: "function CollapsibleFloatingActionButtonNativeTsx1(){const{FAB_BUTTON_SIZE,withSpring,interpolate,collapseText,FAB_PADDING_HORIZONTAL,FAB_PADDING_VERTICAL,SUBTLE_SPRING}=this.__closure;return{minWidth:FAB_BUTTON_SIZE,minHeight:FAB_BUTTON_SIZE,paddingHorizontal:withSpring(interpolate(collapseText.get(),[0,1],[FAB_PADDING_HORIZONTAL,FAB_PADDING_VERTICAL]),SUBTLE_SPRING,'animate-always'),paddingVertical:FAB_PADDING_VERTICAL};}" };
const result = require("getButtonPadding").fileFinishedImporting("design/components/experimental/Button/native/CollapsibleFloatingActionButton.native.tsx");

export const CollapsibleFloatingActionButton = function CollapsibleFloatingActionButton(arg0) {
  let icon;
  let positionBottom;
  let positionRight;
  let state;
  let text;
  ({ icon, positionBottom, positionRight, text, state } = arg0);
  let obj = { icon: 0, positionBottom: 0, positionRight: 0, text: 0, state: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(arg0, obj);
  let obj1 = require(8423) /* styles */;
  const styles = obj1.useStyles();
  let cloneElementResult = icon;
  if (result.isValidElement(icon)) {
    obj = { color: importDefault(689).colors.WHITE };
    cloneElementResult = result.cloneElement(icon, obj);
  }
  obj = { position: "absolute" };
  if (null == positionRight) {
    positionRight = require(8423) /* styles */.DEFAULT_POSITION_OFFSET;
  }
  obj.right = positionRight;
  if (null == positionBottom) {
    positionBottom = require(8423) /* styles */.DEFAULT_POSITION_OFFSET;
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
    let tmp18 = <CollapsableButton />;
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
    tmp18 = jsx(require(4544) /* CollapsingText */.BaseTextButton, {});
  }
  return tmp18;
};
