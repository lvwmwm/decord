// Module ID: 5544
// Function ID: 47050
// Name: ResourceSavingScene
// Dependencies: []
// Exports: default

// Module 5544 (ResourceSavingScene)
let Platform;
let StyleSheet;
let closure_0 = [];
let closure_1 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
({ Platform, StyleSheet, View: closure_2 } = arg1(dependencyMap[2]));
const jsx = arg1(dependencyMap[3]).jsx;
const styles = StyleSheet.create({ container: { "Bool(false)": 10, "Bool(false)": 10 }, attached: { flex: 1 }, detached: {} });

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
  obj = { "Bool(true)": true, "Bool(true)": true };
  if (visible) {
    str = "auto";
  }
  obj.pointerEvents = str;
  obj.style = visible ? container.attached : container.detached;
  obj.children = children;
  obj.children = <closure_2 {...obj} />;
  return <closure_2 {...obj} />;
};
