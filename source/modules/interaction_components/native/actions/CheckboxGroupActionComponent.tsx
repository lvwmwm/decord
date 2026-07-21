// Module ID: 15952
// Function ID: 122360
// Dependencies: []

// Module 15952
const importAllResult = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const memoResult = importAllResult.memo((type) => {
  type = type.type;
  const arg1 = type;
  const options = type.options;
  const dependencyMap = options;
  const items = [options];
  const memo = importAllResult.useMemo(() => {
    const found = options.filter((arg0) => arg0.default);
    return found.map((value) => value.value);
  }, items);
  let obj = arg1(dependencyMap[2]);
  let tmp;
  if (memo.length > 0) {
    obj = { type, values: memo };
    tmp = obj;
  }
  const componentState = obj.useComponentState(type, tmp);
  const state = componentState.state;
  const jsx = state;
  const executeStateUpdate = componentState.executeStateUpdate;
  const items1 = [state, type];
  let closure_5 = importAllResult.useMemo(() => {
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
      const obj = {
        label: label.label,
        subLabel: label.description,
        checked: hasItem,
        onPress: (arg0) => {
          if (arg0) {
            const items = [];
            const arraySpreadResult = HermesBuiltin.arraySpread(arr, 0);
            items[arraySpreadResult] = value;
            const sum = arraySpreadResult + 1;
            let found = items;
          } else {
            found = arr.filter((arg0) => arg0 !== closure_0);
          }
          const obj = { type: value, values: found };
          callback(obj);
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
  return jsx(arg1(dependencyMap[3]).TableRowGroup, obj);
});
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/interaction_components/native/actions/CheckboxGroupActionComponent.tsx");

export default memoResult;
