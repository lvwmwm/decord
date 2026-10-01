// Module ID: 11302
// Function ID: 11303
// Name: useSearchableSelectComponent
// Dependencies: [32, 19, 7577, 4800, 2]
// Exports: default

// Module 11302 (useSearchableSelectComponent)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

let map;

let react = react_mod;
let result = size.fileFinishedImporting("modules/interaction_components/native/components/useSearchableSelectComponent.tsx");

export default function useSearchableSelectComponent(selectActionComponent) {
  let closure_4;
  let containerId;
  let guildId;
  let items1;
  selectActionComponent = selectActionComponent.selectActionComponent;
  const queryOptions = selectActionComponent.queryOptions;
  const onSubmit = selectActionComponent.onSubmit;
  let first;
  react = undefined;
  ({ containerId, guildId } = selectActionComponent);
  let tmp = first(react.useState(""), 2);
  first = tmp[0];
  let tmp3 = tmp[1];
  let obj = selectActionComponent(onSubmit[2]);
  react = obj.getInitialSnowflakeSelectOptions(selectActionComponent, containerId, guildId);
  const tmp4 = first(react.useState(() => {
    map = new Map(closure_4.map((value) => {
      const items = [value.value, value];
      return items;
    }));
    return map;
  }), 2);
  const first1 = tmp4[0];
  let closure_6 = tmp4[1];
  let items = [first, queryOptions];
  let closure_7 = selectActionComponent.maxValues > 1;
  let obj2 = {
    options: react.useMemo(() => queryOptions(first), items),
    selectedOptions: items1,
    isSelected(value) {
      return first1.has(value.value);
    },
    onPressOptionItem(arg0, value) {
      let items2;
      let closure_0 = value;
      let tmp = first1;
      const hasItem = first1.has(value.value);
      const tmp3 = closure_7;
      if (tmp3) {
        const tmp14 = !hasItem && tmp.size >= selectActionComponent.maxValues;
        if (!tmp14) {
          closure_6((arg0) => {
            map = new Map(arg0);
            const tmp = hasItem;
            if (tmp) {
              map.delete(closure_0.value);
            } else {
              const result = map.set(closure_0.value, closure_0);
            }
            return map;
          });
        }
      } else {
        let _Map1;
        const _Map = Map;
        if (hasItem) {
          const self3 = this;
          let self2 = this;
          _Map1 = new _Map();
        } else {
          const items = [value.value, value];
          const items1 = [items];
          const self = this;
          self2 = this;
          _Map1 = new _Map(items1);
        }
        const obj = { type: selectActionComponent.type, selectedOptions: items2 };
        items2 = [];
        HermesBuiltin.arraySpread(items2, _Map1.values(), 0);
        onSubmit(obj);
        const obj3 = ActionSheetActionCreatorsDefault;
        obj3.hideActionSheet();
      }
    },
    submitSelection() {
      let items;
      const obj = { type: selectActionComponent.type, selectedOptions: items };
      items = [...first1.values()];
      onSubmit(obj);
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.hideActionSheet();
    },
    setQuery: tmp3
  };
  items1 = [...first1.values()];
  return obj2;
};
