// Module ID: 13437
// Function ID: 103212
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 27, 9232, 3997, 1555, 1454, 477, 4531, 2]

// Module 13437 (_isNativeReflectConstruct)
import updateContextMenuState from "updateContextMenuState";
import getKeyboardContextForType from "getKeyboardContextForType";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import tmp2 from "LifecycleManager";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleBackPress() {
  let obj = require(9232) /* updateContextMenuState */;
  obj.hideContextMenu();
  const keyboardType = require(3997) /* getKeyboardContextForType */.getKeyboardType();
  let flag = keyboardType !== require(1555) /* KeyboardTypes */.KeyboardTypes.SYSTEM;
  if (flag) {
    obj = { type: require(1555) /* KeyboardTypes */.KeyboardTypes.SYSTEM };
    require(1454) /* _createForOfIteratorHelperLoose */.setKeyboardType(obj);
    flag = true;
    const obj3 = require(1454) /* _createForOfIteratorHelperLoose */;
  }
  return flag;
}
require("get ActivityIndicator").BackHandler;
tmp2 = new tmp2();
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/routing/native/BackPressManager.tsx");

export default tmp2;
