// Module ID: 1817
// Function ID: 19979
// Name: OverKeyboardView
// Dependencies: [31, 27, 33, 1776, 1572]
// Exports: default

// Module 1817 (OverKeyboardView)
import "result";
import { useMemo } from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";

let Platform;
let StyleSheet;
let closure_3;
const require = arg1;
({ Platform, StyleSheet, View: closure_3 } = get_ActivityIndicator);
const styles = StyleSheet.create({ absolute: { position: "absolute" }, stretch: { top: 0, bottom: 0, left: 0, right: 0 } });

export default function OverKeyboardView(visible) {
  let children = visible.visible;
  let obj = height(width[3]);
  const size = obj.useWindowDimensions();
  height = size.height;
  width = size.width;
  let items = [height, width];
  const items1 = [useMemo(() => ({ height, width }), items)];
  obj = { visible: children };
  obj = {
    collapsable: false,
    style: useMemo(() => {
      const items = [outer1_5.absolute, undefined, outer1_5.stretch];
      return items;
    }, items1)
  };
  if (children) {
    children = visible.children;
  }
  obj.children = children;
  obj.children = <closure_3 collapsable={false} style={useMemo(() => {
    const items = [outer1_5.absolute, undefined, outer1_5.stretch];
    return items;
  }, items1)} />;
  return jsx(height(width[4]).RCTOverKeyboardView, {
    collapsable: false,
    style: useMemo(() => {
      const items = [outer1_5.absolute, undefined, outer1_5.stretch];
      return items;
    }, items1)
  });
};
