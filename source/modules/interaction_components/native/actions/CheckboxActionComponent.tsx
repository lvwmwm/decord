// Module ID: 16082
// Function ID: 124628
// Dependencies: [31, 33, 7794, 44, 1881, 9021, 2]

// Module 16082
import importAllResult from "result";
import { jsx } from "jsxProd";

const require = arg1;
const memoResult = importAllResult.memo((type) => {
  type = type.type;
  let obj = type(executeStateUpdate[2]);
  const componentStateContext = obj.useComponentStateContext();
  state(executeStateUpdate[3])(null != componentStateContext, "CheckboxActionComponent must be rendered inside a ComponentStateContext");
  let tmp2;
  if (null != type.default) {
    obj = { type, value: _default };
    tmp2 = obj;
  }
  const componentState = componentStateContext.useComponentState(type, tmp2);
  state = componentState.state;
  executeStateUpdate = componentState.executeStateUpdate;
  const items = [state, type];
  const memo = importAllResult.useMemo(() => {
    let type;
    if (null != state) {
      type = state.type;
    }
    let value = type === type;
    if (value) {
      value = state.value;
    }
    return value;
  }, items);
  const parents = componentStateContext.getParents(type);
  let first;
  if (null != parents) {
    first = parents[0];
  }
  type = undefined;
  if (null != first) {
    type = first.type;
  }
  let tmp8;
  if (type === type(executeStateUpdate[4]).ComponentType.LABEL) {
    tmp8 = first;
  }
  state(executeStateUpdate[3])(null != tmp8, "CheckboxActionComponent must be a child of a Label component");
  obj = {};
  ({ label: obj4.label, description: obj4.description } = tmp8);
  obj.checked = memo;
  obj.onToggle = function onToggle(value) {
    executeStateUpdate({ type, value });
  };
  return jsx(type(executeStateUpdate[5]).Checkbox, {});
});
const result = require("isInteractionComponent").fileFinishedImporting("modules/interaction_components/native/actions/CheckboxActionComponent.tsx");

export default memoResult;
