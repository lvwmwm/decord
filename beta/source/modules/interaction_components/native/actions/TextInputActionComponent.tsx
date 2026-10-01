// Module ID: 17161
// Function ID: 17162
// Name: TextInputActionComponent
// Dependencies: [32, 19, 21, 7569, 17158, 1979, 6031, 6507, 6025, 2]

// Module 17161 (TextInputActionComponent)
import Fragment from "Fragment" /* 21 */;
import Server from "Server" /* 1979 */;
import ComponentStateContext from "ComponentStateContext" /* 7569 */;
import InteractionModalUtils from "InteractionModalUtils" /* 17158 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let type;

const jsx = Fragment.jsx;
const memoResult = react.memo((type) => {
  let closure_129_2;
  let executeStateUpdate;
  let items;
  let label;
  let maxLength;
  let obj3;
  let placeholder;
  let required;
  let state;
  let str;
  let style;
  let tmp8;
  let value;
  type = type.type;
  ({ style, label, value } = type);
  ({ placeholder, required, maxLength } = type);
  let tmp4;
  const useComponentState = ComponentStateContext.useComponentState;
  ComponentStateContext;
  if (null != value) {
    let obj = { type, value };
    tmp4 = obj;
  }
  const componentState = useComponentState(type, tmp4);
  ({ state: closure_129_2, executeStateUpdate } = componentState);
  const error = componentState.error;
  const tmpResult = InteractionModalUtils;
  const isFirstTextInputInModal = tmpResult.useIsFirstTextInputInModal(type.id);
  const obj2 = {
    placeholder,
    maxLength,
    status: str,
    defaultValue: _slicedToArray(state, 1)[0],
    onChange: obj3.useCallback((value) => {
      const obj = { type, value };
      return executeStateUpdate(obj);
    }, items),
    autoFocus: isFirstTextInputInModal,
    clearable: true
  };
  str = "default";
  state = react.useState(() => {
    type = undefined;
    if (value != null) {
      type = iter.type;
    }
    return type === type ? value.value : value;
  });
  obj3 = react;
  if (null != error) {
    str = "error";
  }
  items = [type, executeStateUpdate];
  if (Server.TextInputComponentStyle.SMALL === style) {
    const TextField = tmp(6031).TextField;
    const merged = Object.assign(obj2);
    tmp8 = <TextField />;
  } else if (Server.TextInputComponentStyle.PARAGRAPH === style) {
    const TextAreaField = tmp(6507).TextAreaField;
    const merged1 = Object.assign(obj2);
    tmp8 = <TextAreaField />;
  }
  let tmp17 = tmp8;
  if (null != label) {
    tmp17 = jsx(tmp(6025).Input, { label, required, errorMessage: error, children: tmp8 });
  }
  return tmp17;
});
const result = size.fileFinishedImporting("modules/interaction_components/native/actions/TextInputActionComponent.tsx");

export default memoResult;
