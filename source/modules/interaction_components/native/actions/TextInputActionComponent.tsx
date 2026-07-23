// Module ID: 16076
// Function ID: 124565
// Dependencies: [57, 31, 33, 7794, 16073, 1881, 5773, 7510, 7505, 2]

// Module 16076
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import { jsx } from "jsxProd";

const require = arg1;
const memoResult = importAllResult.memo((type) => {
  let _slicedToArray;
  let executeStateUpdate;
  let label;
  let maxLength;
  let placeholder;
  let required;
  let style;
  let value;
  type = type.type;
  ({ style, label, value } = type);
  const dependencyMap = value;
  ({ placeholder, required, maxLength } = type);
  let obj = type(7794);
  let tmp;
  if (null != value) {
    obj = { type, value };
    tmp = obj;
  }
  const componentState = obj.useComponentState(type, tmp);
  ({ state: _slicedToArray, executeStateUpdate } = componentState);
  const error = componentState.error;
  let obj2 = type(16073);
  const isFirstTextInputInModal = obj2.useIsFirstTextInputInModal(type.id);
  obj = { placeholder, maxLength };
  let str = "default";
  const state = executeStateUpdate.useState(() => {
    let type;
    if (null != _slicedToArray) {
      type = _slicedToArray.type;
    }
    if (type === type) {
      let value = _slicedToArray.value;
    } else {
      value = closure_1;
    }
    return value;
  });
  if (null != error) {
    str = "error";
  }
  obj.status = str;
  obj.defaultValue = callback(state, 1)[0];
  const items = [type, executeStateUpdate];
  obj.onChange = executeStateUpdate.useCallback((value) => executeStateUpdate({ type, value }), items);
  obj.autoFocus = isFirstTextInputInModal;
  obj.isClearable = true;
  if (type(1881).TextInputComponentStyle.SMALL === style) {
    const obj1 = {};
    const merged = Object.assign(obj);
    let tmp7 = jsx(type(5773).TextField, {});
  } else if (type(1881).TextInputComponentStyle.PARAGRAPH === style) {
    obj2 = {};
    const merged1 = Object.assign(obj);
    tmp7 = jsx(type(7510).TextAreaField, {});
  }
  let tmp20 = tmp7;
  if (null != label) {
    const obj3 = { label, required, errorMessage: error, children: tmp7 };
    tmp20 = jsx(type(7505).Input, { label, required, errorMessage: error, children: tmp7 });
  }
  return tmp20;
});
const result = require("jsxProd").fileFinishedImporting("modules/interaction_components/native/actions/TextInputActionComponent.tsx");

export default memoResult;
