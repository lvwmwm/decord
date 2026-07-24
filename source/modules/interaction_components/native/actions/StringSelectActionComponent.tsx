// Module ID: 14730
// Function ID: 112259
// Name: StringSelectActionComponent
// Dependencies: [31, 33, 4353, 7885, 44, 1881, 14731, 4098, 10993, 1934, 2]
// Exports: default

// Module 14730 (StringSelectActionComponent)
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/interaction_components/native/actions/StringSelectActionComponent.tsx");

export default function StringSelectActionComponent(type) {
  const _require = type;
  type = type.type;
  const options = type.options;
  let obj = _require(options[2]);
  let items = [options];
  const selectPlaceholder = obj.getSelectPlaceholder(type);
  const memo = componentStateContext.useMemo(() => {
    const found = options.filter((arg0) => arg0.default);
    return found.map((value) => value.value);
  }, items);
  let obj1 = _require(options[3]);
  componentStateContext = obj1.useComponentStateContext();
  let modal;
  if (null != componentStateContext) {
    modal = componentStateContext.modal;
  }
  type(options[4])(null != modal, "StringSelectActionComponent must be rendered inside a modal ComponentStateContext");
  let tmp5;
  if (memo.length > 0) {
    obj = { type, values: memo };
    tmp5 = obj;
  }
  const componentState = componentStateContext.useComponentState(type, tmp5);
  const state = componentState.state;
  const executeStateUpdate = componentState.executeStateUpdate;
  const items1 = [options, type, state];
  const customId = componentStateContext.modal.customId;
  const memo1 = componentStateContext.useMemo(() => {
    let type;
    if (null != state) {
      type = state.type;
    }
    if (type === type) {
      let items = state.values;
    } else {
      items = [];
    }
    const mapped = items.map((arg0) => {
      let closure_0 = arg0;
      return outer1_2.findIndex((value) => value.value === closure_0);
    });
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
  if (type === _require(options[5]).ComponentType.LABEL) {
    tmp11 = first;
  }
  let closure_7 = tmp11;
  obj = {};
  obj1 = {};
  const tmp2 = type(options[4]);
  const merged = Object.assign(type);
  obj1["placeholder"] = selectPlaceholder;
  obj1["state"] = componentState.visualState;
  obj1["selectedOptions"] = memo1;
  obj.model = obj1;
  obj.onTap = function onTap() {
    let obj = type(options[7]);
    obj = { selectionActionComponent: type, labelComponent: closure_7, channelId: componentStateContext.channelId, containerId: customId, onSubmit: executeStateUpdate };
    const combined = "StringSelectComponentActionSheet:" + customId;
    const tmp = type(options[9])(options[8], options.paths);
    obj.allowEmpty = type(options[2]).canSelectBeEmpty(type, "modal");
    obj.openLazy(tmp, combined, obj);
  };
  return state(type(options[6]), obj);
};
