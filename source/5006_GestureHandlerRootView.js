// Module ID: 5006
// Function ID: 42773
// Name: GestureHandlerRootView
// Dependencies: []
// Exports: default

// Module 5006 (GestureHandlerRootView)
let closure_3 = [null];
let closure_4 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
const StyleSheet = arg1(dependencyMap[2]).StyleSheet;
const jsx = arg1(dependencyMap[3]).jsx;
const styles = StyleSheet.create({ container: { flex: 1 } });

export default function GestureHandlerRootView(style) {
  let container = style.style;
  let obj = arg1(dependencyMap[4]);
  const result = obj.maybeInitializeFabric();
  obj = {};
  const tmp = callback(style, closure_3);
  if (null == container) {
    container = container.container;
  }
  obj.style = container;
  obj.children = jsx(importDefault(dependencyMap[6]), Object.assign(obj, tmp));
  return jsx(importDefault(dependencyMap[5]).Provider, obj);
};
