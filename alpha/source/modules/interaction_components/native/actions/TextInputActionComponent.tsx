// Module ID: 17157
// Function ID: 17158
// Name: TextInputActionComponent
// Dependencies: [32, 19, 21, 7569, 17154, 1979, 6031, 6507, 6025, 2]

// Module 17157 (TextInputActionComponent)
import Server from "Server" /* 1979 */;
import ComponentStateContext from "ComponentStateContext" /* 7569 */;
import InteractionModalUtils from "InteractionModalUtils" /* 17154 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/interaction_components/native/actions/TextInputActionComponent.tsx");

export default noop.memo((type) => {
  type = type.type;
  ({ style, label, value } = type);
  dependencyMap = value;
  ({ placeholder, required, maxLength } = type);
  let tmp3;
  if (null != value) {
    const obj2 = { type, value };
    tmp3 = obj2;
  }
  const componentState = ComponentStateContext.useComponentState(type, tmp3);
  ({ state: _slicedToArray, executeStateUpdate } = componentState);
  const error = componentState.error;
  const isFirstTextInputInModal = InteractionModalUtils.useIsFirstTextInputInModal(type.id);
  const obj3 = { placeholder, maxLength, status: null, defaultValue: null, onChange: null, autoFocus: null, clearable: true };
  let str = "default";
  const state = noop.useState(() => {
    type = undefined;
    if (_slicedToArray != null) {
      type = iter.type;
    }
    return type === type ? _slicedToArray.value : value;
  });
  if (null != error) {
    str = "error";
  }
  obj3.status = str;
  obj3.defaultValue = _slicedToArray(state, 1)[0];
  const items = [type, executeStateUpdate];
  obj3.onChange = noop.useCallback((value) => executeStateUpdate({ type, value }), items);
  obj3.autoFocus = isFirstTextInputInModal;
  if (Server.TextInputComponentStyle.SMALL === style) {
    const obj5 = {};
    const merged = Object.assign(obj3);
    let tmp7 = jsx(tmp(6031).TextField, {});
  } else if (tmp(1979).TextInputComponentStyle.PARAGRAPH === style) {
    const obj6 = {};
    const merged1 = Object.assign(obj3);
    tmp7 = jsx(tmp(6507).TextAreaField, {});
  }
  let tmp16 = tmp7;
  if (null != label) {
    const obj7 = { label, required, errorMessage: error, children: tmp7 };
    tmp16 = jsx(tmp(6025).Input, { label, required, errorMessage: error, children: tmp7 });
  }
  return tmp16;
});
