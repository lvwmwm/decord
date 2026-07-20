// Module ID: 251
// Function ID: 3313
// Name: AppContainer
// Dependencies: []
// Exports: default

// Module 251 (AppContainer)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let closure_4 = importDefault(dependencyMap[4]).create({ root: { flex: 1 } });

export default function AppContainer(rootTag) {
  let WrapperComponent;
  let children;
  let rootViewStyle;
  ({ children, WrapperComponent, rootViewStyle } = rootTag);
  let tmp3 = children;
  if (null != WrapperComponent) {
    let obj = { initialProps: tmp2, fabric: true === tmp, children };
    tmp3 = <WrapperComponent {...obj} />;
  }
  obj = { value: arg1(dependencyMap[2]).createRootTag(rootTag.rootTag) };
  obj = {};
  const obj3 = arg1(dependencyMap[2]);
  if (!rootViewStyle) {
    rootViewStyle = root.root;
  }
  obj.style = rootViewStyle;
  obj.pointerEvents = "box-none";
  obj.children = tmp3;
  obj.children = jsx(importDefault(dependencyMap[3]), obj);
  return jsx(arg1(dependencyMap[2]).RootTagContext.Provider, obj);
};
