// Module ID: 15953
// Function ID: 122369
// Dependencies: []

// Module 15953
const importAllResult = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const memoResult = importAllResult.memo((type) => {
  type = type.type;
  const arg1 = type;
  let obj = arg1(dependencyMap[2]);
  const componentStateContext = obj.useComponentStateContext();
  importDefault(dependencyMap[3])(null != componentStateContext, "CheckboxActionComponent must be rendered inside a ComponentStateContext");
  let tmp2;
  if (null != type.default) {
    obj = { type, value: _default };
    tmp2 = obj;
  }
  const componentState = componentStateContext.useComponentState(type, tmp2);
  const state = componentState.state;
  const importDefault = state;
  const dependencyMap = componentState.executeStateUpdate;
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
  if (type === arg1(dependencyMap[4]).ComponentType.LABEL) {
    tmp8 = first;
  }
  importDefault(dependencyMap[3])(null != tmp8, "CheckboxActionComponent must be a child of a Label component");
  obj = {};
  ({ label: obj4.label, description: obj4.description } = tmp8);
  obj.checked = memo;
  obj.onToggle = function onToggle(value) {
    executeStateUpdate({ type, value });
  };
  return jsx(arg1(dependencyMap[5]).Checkbox, obj);
});
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/interaction_components/native/actions/CheckboxActionComponent.tsx");

export default memoResult;
