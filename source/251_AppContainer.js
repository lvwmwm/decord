// Module ID: 251
// Function ID: 3313
// Name: AppContainer
// Dependencies: [31, 33, 252, 112, 253]
// Exports: default

// Module 251 (AppContainer)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
let closure_4 = require("setStyleAttributePreprocessor").create({ root: { flex: 1 } });

export default function AppContainer(rootTag) {
  let WrapperComponent;
  let children;
  let rootViewStyle;
  ({ children, WrapperComponent, rootViewStyle } = rootTag);
  let tmp3 = children;
  if (null != WrapperComponent) {
    let obj = { initialProps: tmp2, fabric: true === tmp, children };
    tmp3 = <WrapperComponent initialProps={tmp2} fabric={true === tmp}>{children}</WrapperComponent>;
  }
  obj = { value: require(252) /* RootTagContext */.createRootTag(rootTag.rootTag) };
  obj = {};
  const obj3 = require(252) /* RootTagContext */;
  if (!rootViewStyle) {
    rootViewStyle = root.root;
  }
  obj.style = rootViewStyle;
  obj.pointerEvents = "box-none";
  obj.children = tmp3;
  obj.children = jsx(importDefault(112), {});
  return jsx(require(252) /* RootTagContext */.RootTagContext.Provider, {});
};
