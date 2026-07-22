// Module ID: 14568
// Function ID: 109774
// Name: StringSelectActionComponent
// Dependencies: []
// Exports: default

// Module 14568 (StringSelectActionComponent)
let closure_3 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/interaction_components/native/actions/StringSelectActionComponent.tsx");

export default function StringSelectActionComponent(type) {
  const arg1 = type;
  type = type.type;
  const importDefault = type;
  const options = type.options;
  const dependencyMap = options;
  let obj = arg1(dependencyMap[2]);
  const items = [options];
  const selectPlaceholder = obj.getSelectPlaceholder(type);
  const memo = React.useMemo(() => {
    const found = options.filter((arg0) => arg0.default);
    return found.map((value) => value.value);
  }, items);
  let obj1 = arg1(dependencyMap[3]);
  const componentStateContext = obj1.useComponentStateContext();
  const React = componentStateContext;
  let modal;
  if (null != componentStateContext) {
    modal = componentStateContext.modal;
  }
  importDefault(dependencyMap[4])(null != modal, "StringSelectActionComponent must be rendered inside a modal ComponentStateContext");
  let tmp5;
  if (memo.length > 0) {
    obj = { type, values: memo };
    tmp5 = obj;
  }
  const componentState = componentStateContext.useComponentState(type, tmp5);
  const state = componentState.state;
  const jsx = state;
  const executeStateUpdate = componentState.executeStateUpdate;
  const items1 = [options, type, state];
  const customId = componentStateContext.modal.customId;
  const memo1 = React.useMemo(() => {
    let type;
    if (null != state) {
      type = state.type;
    }
    if (type === type) {
      let items = state.values;
    } else {
      items = [];
    }
    const mapped = items.map((arg0) => closure_2.findIndex((value) => value.value === value));
    return mapped.filter((arg0) => -1 !== arg0);
  }, items1);
  const parents = componentStateContext.getParents(type);
  let first;
  if (null != parents) {
    first = parents[0];
  }
  type = undefined;
  if (null != first) {
    type = first.type;
  }
  let tmp11;
  if (type === arg1(dependencyMap[5]).ComponentType.LABEL) {
    tmp11 = first;
  }
  obj = {};
  obj1 = {};
  const tmp2 = importDefault(dependencyMap[4]);
  const merged = Object.assign(type);
  obj1["placeholder"] = selectPlaceholder;
  obj1["state"] = componentState.visualState;
  obj1["selectedOptions"] = memo1;
  obj.model = obj1;
  obj.onTap = function onTap() {
    let obj = type(options[7]);
    obj = { selectionActionComponent: arg0, labelComponent: tmp11, channelId: componentStateContext.channelId, containerId: customId, onSubmit: executeStateUpdate };
    const combined = "StringSelectComponentActionSheet:" + customId;
    const tmp = arg0(options[9])(options[8], options.paths);
    obj.allowEmpty = arg0(options[2]).canSelectBeEmpty(arg0, "modal");
    obj.openLazy(tmp, combined, obj);
  };
  return jsx(importDefault(dependencyMap[6]), obj);
};
