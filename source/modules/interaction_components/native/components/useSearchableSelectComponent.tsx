// Module ID: 10958
// Function ID: 85227
// Name: useSearchableSelectComponent
// Dependencies: [4211081230, 4127195137, 33554471, 4026531840, 14609]
// Exports: default

// Module 10958 (useSearchableSelectComponent)
import ChooseAccount from "ChooseAccount";

let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const result = ChooseAccount.fileFinishedImporting("modules/interaction_components/native/components/useSearchableSelectComponent.tsx");

export default function useSearchableSelectComponent(selectActionComponent) {
  let containerId;
  let guildId;
  selectActionComponent = selectActionComponent.selectActionComponent;
  const arg1 = selectActionComponent;
  const queryOptions = selectActionComponent.queryOptions;
  const importDefault = queryOptions;
  const dependencyMap = selectActionComponent.onSubmit;
  function submitSelection(arr) {
    const obj = { type: selectActionComponent.type };
    const items = [...arr.values()];
    obj.selectedOptions = items;
    onSubmit(obj);
    queryOptions(onSubmit[3]).hideActionSheet();
  }
  ({ containerId, guildId } = selectActionComponent);
  const tmp = callback(React.useState(""), 2);
  const first = tmp[0];
  const callback = first;
  let obj = arg1(dependencyMap[2]);
  const React = obj.getInitialSnowflakeSelectOptions(selectActionComponent, containerId, guildId);
  const tmp3 = callback(React.useState(() => new Map(closure_4.map((value) => {
    const items = [value.value, value];
    return items;
  }))), 2);
  const first1 = tmp3[0];
  let closure_6 = tmp3[1];
  const items = [first, queryOptions];
  let closure_7 = selectActionComponent.maxValues > 1;
  obj = { options: React.useMemo(() => queryOptions(first), items) };
  const items1 = [...first1.values()];
  obj.selectedOptions = items1;
  obj.isSelected = function isSelected(value) {
    return first1.has(value.value);
  };
  obj.onPressOptionItem = function onPressOptionItem(arg0, value) {
    const selectActionComponent = value;
    const hasItem = first1.has(value.value);
    const queryOptions = hasItem;
    if (closure_7) {
      let tmp11 = !hasItem;
      if (tmp11) {
        tmp11 = first1.size >= selectActionComponent.maxValues;
      }
      if (!tmp11) {
        callback((arg0) => {
          const map = new Map(arg0);
          if (hasItem) {
            map.delete(arg1.value);
          } else {
            const result = map.set(arg1.value, arg1);
          }
          return map;
        });
      }
    } else {
      let _Map = Map;
      if (hasItem) {
        const prototype2 = _Map.prototype;
        _Map = new _Map();
      } else {
        const items = [value.value, value];
        const items1 = [items];
        const prototype = _Map.prototype;
        _Map = new _Map(items1);
      }
      submitSelection(_Map);
      const tmp2 = submitSelection;
    }
  };
  obj.submitSelection = function submitSelection() {
    submitSelection(first1);
  };
  obj.setQuery = tmp[1];
  return obj;
};
