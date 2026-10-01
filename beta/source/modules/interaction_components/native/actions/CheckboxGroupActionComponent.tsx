// Module ID: 17166
// Function ID: 17167
// Name: CheckboxGroupActionComponent
// Dependencies: [19, 21, 7569, 5999, 5916, 2]

// Module 17166 (CheckboxGroupActionComponent)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let type;

const jsx = Fragment.jsx;
const memoResult = react.memo((type) => {
  type = type.type;
  const options = type.options;
  const maxValues = type.maxValues;
  let obj = maxValues;
  let items = [options];
  const memo = maxValues.useMemo(() => {
    const found = options.filter((item) => item.default);
    return found.map((value) => value.value);
  }, items);
  const tmp = type;
  let tmp2 = options;
  let tmp3 = type(options[2]);
  let tmp4;
  const useComponentState = tmp3.useComponentState;
  if (memo.length > 0) {
    tmp4 = { type, values: memo };
    const obj2 = { type, values: memo };
  }
  const componentState = useComponentState(type, tmp4);
  const state = componentState.state;
  const executeStateUpdate = componentState.executeStateUpdate;
  const items1 = [state, type];
  let closure_5 = obj.useMemo(() => {
    type = undefined;
    if (state != null) {
      type = tmp.type;
    }
    return type === type ? state.values : [];
  }, items1);
  const obj3 = {
    hasIcons: false,
    children: options.map((label) => {
      let tmp3;
      let value;
      const hasItem = closure_5.includes(label.value);
      let tmp2 = state;
      let obj = {
        label: label.label,
        subLabel: label.description,
        checked: hasItem,
        onPress: (arg0) => {
          let found;
          const tmp2 = arg0;
          if (tmp2) {
            const items = [];
            items[HermesBuiltin.arraySpread(items, closure_5, 0)] = type;
            found = items;
          } else {
            found = arr.filter((item) => item !== closure_1_0);
          }
          const obj = { type, values: found };
          executeStateUpdate(obj);
        },
        disabled: tmp3
      };
      type = label.value;
      tmp3 = closure_5.length >= maxValues;
      const TableCheckboxRow = type(options[4]).TableCheckboxRow;
      if (tmp3) {
        tmp3 = !hasItem;
      }
      return tmp2(TableCheckboxRow, obj, label.value);
    })
  };
  const TableRowGroup = tmp(tmp2[3]).TableRowGroup;
  return state(TableRowGroup, obj3);
});
const result = size.fileFinishedImporting("modules/interaction_components/native/actions/CheckboxGroupActionComponent.tsx");

export default memoResult;
