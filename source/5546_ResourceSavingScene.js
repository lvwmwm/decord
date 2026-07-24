// Module ID: 5546
// Function ID: 47128
// Name: ResourceSavingScene
// Dependencies: [29, 31, 27, 33]
// Exports: default

// Module 5546 (ResourceSavingScene)
import _objectWithoutProperties from "_objectWithoutProperties";
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";

let Platform;
let StyleSheet;
let closure_2;
let closure_0 = ["visible", "children", "style"];
({ Platform, StyleSheet, View: closure_2 } = get_ActivityIndicator);
const styles = StyleSheet.create({ container: { flex: 1, overflow: "hidden" }, attached: { flex: 1 }, detached: { flex: 1, top: 30000 } });

export default function ResourceSavingScene(visible) {
  let children;
  let style;
  visible = visible.visible;
  ({ children, style } = visible);
  callback(visible, closure_0);
  let obj = { style: items };
  items = [container.container, style];
  let str = "none";
  let str2 = "none";
  if (visible) {
    str2 = "auto";
  }
  obj.pointerEvents = str2;
  obj = { collapsable: false, removeClippedSubviews: true };
  if (visible) {
    str = "auto";
  }
  obj.pointerEvents = str;
  obj.style = visible ? container.attached : container.detached;
  obj.children = children;
  obj.children = <closure_2 collapsable={false} removeClippedSubviews />;
  return <closure_2 collapsable={false} removeClippedSubviews />;
};
