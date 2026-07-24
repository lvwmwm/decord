// Module ID: 13055
// Function ID: 100894
// Name: GradientBorder
// Dependencies: [31, 27, 653, 33, 4329, 689, 4554, 2]

// Module 13055 (GradientBorder)
import result from "result";
import { View } from "get ActivityIndicator";
import ME from "ME";
import { jsx } from "jsxProd";

let closure_5;
let closure_6;
const require = arg1;
class GradientBorder {
  constructor(arg0) {
    ({ children, borderWidth } = global);
    ({ direction, style } = global);
    if (borderWidth === undefined) {
      borderWidth = 1;
    }
    borderRadius = global.borderRadius;
    if (borderRadius === undefined) {
      tmp = closure_1;
      tmp2 = closure_2;
      num = 5;
      num2 = 1;
      borderRadius = require("_createForOfIteratorHelperLoose").radii.sm + 1;
    }
    obj = { children: 0, direction: 0, style: 0, borderWidth: 0, borderRadius: 0 };
    setPrototypeOfResult = Object.setPrototypeOf(null);
    merged = Object.assign(global, obj);
    tmp5 = (function getStartEnd(direction) {
      const match = outer1_0(outer1_2[4]).match(direction);
      const str = outer1_0(outer1_2[4]);
      const withResult = match.with(outer1_8.HORIZONTAL, () => outer2_5);
      const withResult1 = match.with(outer1_8.HORIZONTAL, () => outer2_5).with(outer1_8.VERTICAL, () => outer2_6);
      const withResult2 = match.with(outer1_8.HORIZONTAL, () => outer2_5).with(outer1_8.VERTICAL, () => outer2_6).with(outer1_8.DIAGONAL, () => ({ START: { x: 0, y: 0 }, END: { x: 1, y: 1 } }));
      return match.with(outer1_8.HORIZONTAL, () => outer2_5).with(outer1_8.VERTICAL, () => outer2_6).with(outer1_8.DIAGONAL, () => ({ START: { x: 0, y: 0 }, END: { x: 1, y: 1 } })).with(outer1_8.ANTI_DIAGONAL, () => ({ START: { x: 0, y: 1 }, END: { x: 1, y: 0 } })).exhaustive();
    })(direction);
    tmp8 = null;
    if (null != children) {
      tmp9 = result;
      tmp8 = null;
      if (result.isValidElement(children)) {
        tmp11 = closure_1;
        tmp12 = closure_2;
        num3 = 6;
        tmp10 = jsx;
        obj = {};
        obj.start = tmp6;
        obj.end = tmp7;
        items = [, ];
        items[0] = style;
        obj1 = {};
        obj1.borderRadius = borderRadius;
        obj1.padding = borderWidth;
        items[1] = obj1;
        obj.style = items;
        tmp14 = obj;
        tmp15 = merged;
        tmp13 = require("LinearGradient");
        merged1 = Object.assign(merged);
        cloneElementResult = null;
        if (null != children) {
          tmp18 = result;
          cloneElementResult = null;
          if (result.isValidElement(children)) {
            tmp19 = View;
            if (children.type === View) {
              tmp20 = result;
              Children = result.Children;
              onlyResult = Children.only(children);
              tmp22 = result;
              obj2 = {};
              tmp23 = obj2;
              merged2 = Object.assign(onlyResult.props);
              obj3 = {};
              tmp25 = obj3;
              merged3 = Object.assign(onlyResult.props.style);
              str = "borderRadius";
              obj3["borderRadius"] = borderRadius - borderWidth;
              str2 = "hidden";
              str3 = "overflow";
              obj3["overflow"] = "hidden";
              str4 = "style";
              obj2["style"] = obj3;
              cloneElementResult = result.cloneElement(onlyResult, obj2);
            }
          }
          tmp27 = jsx;
          tmp28 = View;
          obj4 = {};
          obj5 = {};
          borderRadius = borderRadius - borderWidth;
          obj5.borderRadius = borderRadius;
          obj4.style = obj5;
          obj4.children = children;
          cloneElementResult = jsx(View, obj4);
        }
        str5 = "children";
        obj["children"] = cloneElementResult;
        tmp10Result = tmp10(tmp13, obj);
      }
    }
    return tmp8;
  }
}
({ HorizontalGradient: closure_5, VerticalGradient: closure_6 } = ME);
let obj = { HORIZONTAL: "horizontal", VERTICAL: "vertical", DIAGONAL: "diagonal", ANTI_DIAGONAL: "anti-diagonal" };
GradientBorder.Direction = obj;
const result = require("ME").fileFinishedImporting("design/void/GradientBorder/native/GradientBorder.tsx");

export default GradientBorder;
