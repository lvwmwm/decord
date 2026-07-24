// Module ID: 16128
// Function ID: 124943
// Dependencies: [31, 33, 7885, 5501, 9132, 2]

// Module 16128
import importAllResult from "result";
import { jsx } from "jsxProd";

const require = arg1;
const memoResult = importAllResult.memo((type) => {
  type = type.type;
  const options = type.options;
  const maxValues = type.maxValues;
  let items = [options];
  const memo = maxValues.useMemo(() => {
    const found = options.filter((arg0) => arg0.default);
    return found.map((value) => value.value);
  }, items);
  let obj = type(options[2]);
  let tmp;
  if (memo.length > 0) {
    obj = { type, values: memo };
    tmp = obj;
  }
  const componentState = obj.useComponentState(type, tmp);
  const state = componentState.state;
  const executeStateUpdate = componentState.executeStateUpdate;
  const items1 = [state, type];
  let closure_5 = maxValues.useMemo(() => {
    let type;
    if (null != state) {
      type = state.type;
    }
    if (type === type) {
      let items = state.values;
    } else {
      items = [];
    }
    return items;
  }, items1);
  obj = {
    hasIcons: false,
    children: options.map((label) => {
      const hasItem = closure_5.includes(label.value);
      let obj = {
        label: label.label,
        subLabel: label.description,
        checked: hasItem,
        onPress: (arg0) => {
          if (arg0) {
            const items = [];
            const arraySpreadResult = HermesBuiltin.arraySpread(arr, 0);
            items[arraySpreadResult] = closure_0;
            const sum = arraySpreadResult + 1;
            let found = items;
          } else {
            found = arr.filter((arg0) => arg0 !== outer1_0);
          }
          const obj = { type: value, values: found };
          outer1_4(obj);
        }
      };
      const type = label.value;
      let tmp3 = closure_5.length >= maxValues;
      if (tmp3) {
        tmp3 = !hasItem;
      }
      obj.disabled = tmp3;
      return state(type(options[4]).TableCheckboxRow, obj, label.value);
    })
  };
  return state(type(options[3]).TableRowGroup, obj);
});
const result = require("isInteractionComponent").fileFinishedImporting("modules/interaction_components/native/actions/CheckboxGroupActionComponent.tsx");

export default memoResult;
