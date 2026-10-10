// Module ID: 11378
// Function ID: 11379
// Name: useSearchableSelectComponent
// Dependencies: [32, 19, 558, 576, 8257, 5056, 2]

// Module 11378 (useSearchableSelectComponent)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, map;

let react = react_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSearchableSelectComponent(selectActionComponent) {
  let closure_2;
  let closure_4;
  let containerId;
  let first1;
  let guildId;
  let onSubmit;
  let queryOptions;
  let tmp3 = dependencyMap;
  let obj = selectActionComponent(576);
  const cResult = obj.c(29);
  const tmp2 = selectActionComponent;
  selectActionComponent = selectActionComponent.selectActionComponent;
  ({ containerId, guildId, queryOptions, onSubmit } = selectActionComponent);
  let obj2 = react;
  const first = first1(react.useState(""), 2)[0];
  const tmp5 = first1;
  const tmp6 = first1(react.useState(""), 2);
  if (cResult[0] === containerId) {
    if (cResult[1] === guildId) {
      let tmp9;
      let tmp11;
      if (cResult[2] === selectActionComponent) {
        tmp9 = cResult[3];
      }
      dependencyMap = tmp9;
      if (cResult[4] !== tmp9) {
        const fn = function y() {
          map = new Map(closure_2.map((value) => {
            const items = [value.value, value];
            return items;
          }));
          return map;
        };
        cResult[4] = tmp9;
        cResult[5] = fn;
        tmp11 = fn;
      } else {
        tmp11 = cResult[5];
      }
      const tmp5Result = tmp5(obj2.useState(tmp11), 2);
      first1 = tmp5Result[0];
      react = tmp5Result[1];
      if (cResult[6] === first) {
        let tmp13;
        if (cResult[7] === queryOptions) {
          tmp13 = cResult[8];
        }
        let closure_5 = tmp15;
        if (cResult[9] === onSubmit) {
          let tmp16;
          if (cResult[10] === selectActionComponent.type) {
            tmp16 = cResult[11];
          }
          let closure_6 = tmp16;
          if (cResult[12] === selectActionComponent.maxValues > 1) {
            if (cResult[13] === selectActionComponent.maxValues) {
              if (cResult[14] === first1) {
                let tmp17;
                let tmp19;
                let tmp18;
                if (cResult[15] === tmp16) {
                  tmp17 = cResult[16];
                }
                if (cResult[17] !== first1) {
                  let items = [];
                  HermesBuiltin.arraySpread(items, first1.values(), 0);
                  class Q {
                    constructor(value) {
                      return first1.has(value.value);
                    }
                  }
                  cResult[17] = first1;
                  cResult[18] = items;
                  cResult[19] = Q;
                  tmp19 = Q;
                  tmp18 = items;
                } else {
                  tmp18 = cResult[18];
                  tmp19 = cResult[19];
                }
                if (cResult[20] === first1) {
                  let tmp22;
                  if (cResult[21] === tmp16) {
                    tmp22 = cResult[22];
                  }
                  if (cResult[23] === tmp17) {
                    if (cResult[24] === tmp13) {
                      if (cResult[25] === tmp18) {
                        if (cResult[26] === tmp19) {
                          let tmp23;
                          if (cResult[27] === tmp22) {
                            tmp23 = cResult[28];
                          }
                          return tmp23;
                        }
                      }
                    }
                  }
                  const obj3 = { options: tmp13, selectedOptions: null, isSelected: tmp19, onPressOptionItem: tmp17, submitSelection: tmp22, setQuery: tmp8 };
                  class Q {
                    constructor(value) {
                      return first1.has(value.value);
                    }
                  }
                  cResult[23] = tmp17;
                  cResult[24] = tmp13;
                  cResult[25] = tmp18;
                  cResult[26] = tmp19;
                  cResult[27] = tmp22;
                  cResult[28] = obj3;
                  tmp23 = obj3;
                }
                const fn2 = function j() {
                  return closure_6(first1);
                };
                cResult[20] = first1;
                cResult[21] = tmp16;
                cResult[22] = fn2;
                tmp22 = fn2;
              }
            }
          }
          function onPressOptionItem(arg0, value) {
            let closure_0 = value;
            let tmp = first1;
            const hasItem = first1.has(value.value);
            const tmp3 = closure_5;
            if (tmp3) {
              const tmp9 = !hasItem && tmp.size >= selectActionComponent.maxValues;
              if (!tmp9) {
                closure_4((arg0) => {
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
              const tmp4 = closure_6;
              if (hasItem) {
                const self3 = this;
                const self4 = this;
                _Map1 = new _Map();
              } else {
                const items = [value.value, value];
                const items1 = [items];
                const self = this;
                const self2 = this;
                _Map1 = new _Map(items1);
              }
              tmp4(_Map1);
            }
          }
          cResult[12] = selectActionComponent.maxValues > 1;
          cResult[13] = selectActionComponent.maxValues;
          cResult[14] = first1;
          cResult[15] = tmp16;
          cResult[16] = onPressOptionItem;
          tmp17 = onPressOptionItem;
        }
        function submitSelection(arr) {
          let items;
          const obj = { type: selectActionComponent.type, selectedOptions: items };
          items = [...arr.values()];
          onSubmit(obj);
          const obj2 = ActionSheetActionCreatorsDefault;
          obj2.hideActionSheet();
        }
        cResult[9] = onSubmit;
        cResult[10] = selectActionComponent.type;
        cResult[11] = submitSelection;
        tmp16 = submitSelection;
      }
      const queryOptionsResult = queryOptions(first);
      cResult[6] = first;
      cResult[7] = queryOptions;
      cResult[8] = queryOptionsResult;
      tmp13 = queryOptionsResult;
    }
  }
  const tmp2Result = tmp2(8257);
  const initialSnowflakeSelectOptions = tmp2Result.getInitialSnowflakeSelectOptions(selectActionComponent, containerId, guildId);
  cResult[0] = containerId;
  cResult[1] = guildId;
  cResult[2] = selectActionComponent;
  cResult[3] = initialSnowflakeSelectOptions;
  tmp9 = initialSnowflakeSelectOptions;
}) : (function useSearchableSelectComponent(selectActionComponent) {
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
  let obj = selectActionComponent(onSubmit[4]);
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
});
let result = size.fileFinishedImporting("modules/interaction_components/native/components/useSearchableSelectComponent.tsx");

export default tmp2;
