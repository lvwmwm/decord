// Module ID: 14227
// Function ID: 14228
// Name: GradientBorder
// Dependencies: [19, 17, 1085, 21, 5741, 587, 5387, 2]

// Module 14227 (GradientBorder)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import LinearGradientDefault from "LinearGradient" /* 5387 */;
import merged5 from "merged5" /* 5741 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
class GradientBorder {
  constructor(borderRadius) {
    let borderWidth;
    let children;
    let cloneElementResult;
    let direction;
    let items;
    let obj;
    let obj4;
    let obj7;
    let style;
    ({ children, borderWidth } = borderRadius);
    ({ direction, style } = borderRadius);
    if (borderWidth === undefined) {
      borderWidth = 1;
    }
    borderRadius = borderRadius.borderRadius;
    if (borderRadius === undefined) {
      borderRadius = nativeDefault.radii.sm + 1;
    }
    const merged = Object.assign(borderRadius, Object.assign({ children: 0, direction: 0, style: 0, borderWidth: 0, borderRadius: 0 }));
    const str = merged5;
    const match = str.match(direction);
    const withResult = match.with(obj.HORIZONTAL, () => closure_1_5);
    const withResult1 = withResult.with(obj.VERTICAL, () => closure_1_6);
    const withResult2 = withResult1.with(obj.DIAGONAL, () => ({ START: { x: 0, y: 0 }, END: { x: 1, y: 1 } }));
    const withResult3 = withResult2.with(obj.ANTI_DIAGONAL, () => ({ START: { x: 0, y: 1 }, END: { x: 1, y: 0 } }));
    withResult3.exhaustive();
    let tmp9Result2 = null;
    if (null != children) {
      tmp9Result2 = null;
      if (react.isValidElement(children)) {
        obj = { start: tmp6, end: tmp7, style: items, children: cloneElementResult };
        items = [style, ];
        const obj2 = { borderRadius, padding: borderWidth };
        items[1] = obj2;
        const tmp11 = LinearGradientDefault;
        const merged1 = Object.assign(merged);
        cloneElementResult = null;
        if (null != children) {
          cloneElementResult = null;
          if (react.isValidElement(children)) {
            if (children.type !== View) {
              const obj3 = { style: obj4, children };
              obj4 = { borderRadius: borderRadius - borderWidth };
              cloneElementResult = tmp9(tmp16, obj3);
            } else {
              const Children = obj6.Children;
              const onlyResult = Children.only(children);
              const cloneElement = obj6.cloneElement;
              const obj5 = { style: obj7 };
              const merged2 = Object.assign(onlyResult.props);
              obj7 = { borderRadius: borderRadius - borderWidth, overflow: "hidden" };
              const merged3 = Object.assign(onlyResult.props.style);
              cloneElementResult = cloneElement(onlyResult, obj5);
            }
          }
        }
        tmp9Result2 = tmp9(tmp11, obj);
      }
    }
    return tmp9Result2;
  }
}
const View = react_native.View;
({ HorizontalGradient: hasOwnProperty, VerticalGradient: metroRequire } = Constants);
const jsx = Fragment.jsx;
const Direction = { HORIZONTAL: "horizontal", VERTICAL: "vertical", DIAGONAL: "diagonal", ANTI_DIAGONAL: "anti-diagonal" };
GradientBorder.Direction = Direction;
const result = size.fileFinishedImporting("design/void/GradientBorder/native/GradientBorder.tsx");

export default GradientBorder;
