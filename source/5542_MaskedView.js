// Module ID: 5542
// Function ID: 47117
// Name: MaskedView
// Dependencies: [29, 31, 27, 33, 5109]
// Exports: default

// Module 5542 (MaskedView)
import _objectWithoutProperties from "_objectWithoutProperties";
import "result";
import { UIManager } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import { default as _isNativeReflectConstruct } from "_isNativeReflectConstruct";

let closure_0 = ["children"];
let closure_4 = null != UIManager.getViewManagerConfig("RNCMaskedView");

export default function MaskedView(children) {
  children = children.children;
  let tmp2 = children;
  if (closure_4) {
    tmp2 = children;
    if (_isNativeReflectConstruct) {
      const _Object = Object;
      const obj = { children };
      tmp2 = <_isNativeReflectConstruct {...Object.assign({}, tmp, obj)} />;
    }
  }
  return tmp2;
};
