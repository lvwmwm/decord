// Module ID: 10969
// Function ID: 85300
// Name: useSearchableSelectComponent
// Dependencies: [57, 31, 7802, 4098, 2]
// Exports: default

// Module 10969 (useSearchableSelectComponent)
import _slicedToArray from "_slicedToArray";
import result from "result";

const require = arg1;
let result = require("getSnowflakeSelectDefaultValues").fileFinishedImporting("modules/interaction_components/native/components/useSearchableSelectComponent.tsx");

export default function useSearchableSelectComponent(selectActionComponent) {
  let containerId;
  let guildId;
  selectActionComponent = selectActionComponent.selectActionComponent;
  const queryOptions = selectActionComponent.queryOptions;
  const onSubmit = selectActionComponent.onSubmit;
  function submitSelection(arr) {
    const obj = { type: selectActionComponent.type };
    const items = [...arr.values()];
    obj.selectedOptions = items;
    onSubmit(obj);
    queryOptions(onSubmit[3]).hideActionSheet();
  }
  ({ containerId, guildId } = selectActionComponent);
  const tmp = first(React.useState(""), 2);
  first = tmp[0];
  let obj = selectActionComponent(onSubmit[2]);
  React = obj.getInitialSnowflakeSelectOptions(selectActionComponent, containerId, guildId);
  const tmp3 = first(React.useState(() => new Map(result.map((value) => {
    const items = [value.value, value];
    return items;
  }))), 2);
  const first1 = tmp3[0];
  let closure_6 = tmp3[1];
  let items = [first, queryOptions];
  let closure_7 = selectActionComponent.maxValues > 1;
  obj = { options: React.useMemo(() => queryOptions(first), items) };
  let items1 = [...first1.values()];
  obj.selectedOptions = items1;
  obj.isSelected = function isSelected(value) {
    return first1.has(value.value);
  };
  obj.onPressOptionItem = function onPressOptionItem(arg0, value) {
    const selectActionComponent = value;
    const hasItem = first1.has(value.value);
    if (closure_7) {
      let tmp11 = !hasItem;
      if (tmp11) {
        tmp11 = first1.size >= selectActionComponent.maxValues;
      }
      if (!tmp11) {
        callback((arg0) => {
          const map = new Map(arg0);
          if (hasItem) {
            map.delete(value.value);
          } else {
            const result = map.set(value.value, value);
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
