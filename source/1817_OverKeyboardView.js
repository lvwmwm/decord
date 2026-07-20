// Module ID: 1817
// Function ID: 19973
// Name: OverKeyboardView
// Dependencies: []
// Exports: default

// Module 1817 (OverKeyboardView)
let Platform;
let StyleSheet;
importDefault(dependencyMap[0]);
const useMemo = arg1(dependencyMap[0]).useMemo;
({ Platform, StyleSheet, View: closure_3 } = arg1(dependencyMap[1]));
const jsx = arg1(dependencyMap[2]).jsx;
const styles = StyleSheet.create({ absolute: { position: "absolute" }, stretch: { "Bool(true)": "r", "Bool(true)": "onRequireModeratorMFAClick", "Bool(true)": "Array", "Bool(true)": "isSpamMessageRequest" } });

export default function OverKeyboardView(visible) {
  let children = visible.visible;
  let obj = arg1(dependencyMap[3]);
  const size = obj.useWindowDimensions();
  const height = size.height;
  const arg1 = height;
  const width = size.width;
  const dependencyMap = width;
  const items = [height, width];
  const items1 = [useMemo(() => ({ height, width }), items)];
  obj = { visible: children };
  obj = {
    collapsable: false,
    style: useMemo(() => {
      const items = [closure_5.absolute, undefined, closure_5.stretch];
      return items;
    }, items1)
  };
  if (children) {
    children = visible.children;
  }
  obj.children = children;
  obj.children = <closure_3 {...obj} />;
  return jsx(arg1(dependencyMap[4]).RCTOverKeyboardView, obj);
};
