// Module ID: 5546
// Function ID: 47092
// Name: ResourceSavingScene
// Dependencies: []
// Exports: default

// Module 5546 (ResourceSavingScene)
let Platform;
let StyleSheet;
let closure_0 = [false, false, false];
let closure_1 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
({ Platform, StyleSheet, View: closure_2 } = arg1(dependencyMap[2]));
const jsx = arg1(dependencyMap[3]).jsx;
const styles = StyleSheet.create({ container: { 9223372036854775807: 10, 9223372036854775807: 10 }, attached: { flex: 1 }, detached: { "Null": "front", "Null": 20 } });

export default function ResourceSavingScene(visible) {
  let children;
  let style;
  visible = visible.visible;
  ({ children, style } = visible);
  callback(visible, closure_0);
  let obj = { style: items };
  const items = [container.container, style];
  let str = "none";
  let str2 = "none";
  if (visible) {
    str2 = "auto";
  }
  obj.pointerEvents = str2;
  obj = { -9223372036854775808: null, 9223372036854775807: null };
  if (visible) {
    str = "auto";
  }
  obj.pointerEvents = str;
  obj.style = visible ? container.attached : container.detached;
  obj.children = children;
  obj.children = <closure_2 {...obj} />;
  return <closure_2 {...obj} />;
};
