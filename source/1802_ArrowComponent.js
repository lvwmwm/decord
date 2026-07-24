// Module ID: 1802
// Function ID: 19918
// Name: ArrowComponent
// Dependencies: [31, 27, 33, 1776]
// Exports: default

// Module 1802 (ArrowComponent)
import "result";
import { useMemo } from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";

let StyleSheet;
let closure_3;
let closure_4;
let closure_5;
let closure_6;
const require = arg1;
({ Animated: closure_3, StyleSheet, View: closure_4 } = get_ActivityIndicator);
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let obj = { width: 13, height: 2, borderRadius: 1 };
obj = { marginHorizontal: 5, width: 30, height: 30, justifyContent: "center", alignItems: "center" };
obj = { arrowUpContainer: obj, arrowDownContainer: Object.assign({}, obj, { transform: items }), arrow: { width: 20, height: 20, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, arrowLeftLine: Object.assign({}, obj, { transform: items1, left: -0.5 }), arrowRightLine: Object.assign({}, obj, { transform: items2, left: -5.5 }) };
items = [{ rotate: "180deg" }];
items1 = [{ rotate: "-45deg" }];
items2 = [{ rotate: "45deg" }];
const styles = StyleSheet.create(obj);

export default function ArrowComponent(disabled) {
  disabled = disabled.disabled;
  const theme = disabled.theme;
  let obj = disabled(theme[3]);
  const keyboardState = obj.useKeyboardState((appearance) => appearance.appearance);
  let items = [disabled, theme, keyboardState];
  const tmp2 = keyboardState(() => ({ backgroundColor: disabled ? theme[keyboardState].disabled : theme[keyboardState].primary }), items);
  const RN = tmp2;
  const items1 = [tmp2];
  const items2 = [tmp2];
  obj = {};
  const tmp3 = keyboardState(() => {
    const items = [outer1_7.arrowLeftLine, closure_3];
    return items;
  }, items1);
  if ("next" === disabled.type) {
    let arrowUpContainer = closure_7.arrowDownContainer;
  } else {
    arrowUpContainer = closure_7.arrowUpContainer;
  }
  obj.style = arrowUpContainer;
  obj = { style: closure_7.arrow };
  const items3 = [
    callback(RN.View, { style: tmp3 }),
    callback(RN.View, {
      style: keyboardState(() => {
        const items = [outer1_7.arrowRightLine, closure_3];
        return items;
      }, items2)
    })
  ];
  obj.children = items3;
  obj.children = callback2(closure_4, obj);
  return callback(closure_4, obj);
};
