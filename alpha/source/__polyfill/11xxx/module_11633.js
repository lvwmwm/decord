// Module ID: 11633
// Function ID: 11634
// Dependencies: [19, 21, 1652]
// Exports: GlobalStateProvider, useGlobalState

// Module 11633
import Fragment from "Fragment" /* 21 */;
import _mod1652 from "module_1652" /* 1652 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;
let context = react.createContext({});
let closure_5 = { code: "(function pnpm_indexTsx1(index,dimensions){let[itemDimensions]=this.__closure;itemDimensions.value={...itemDimensions.value,[index]:dimensions};})" };
let closure_6 = { code: "(function pnpm_indexTsx2(dimensions){let[containerSize]=this.__closure;containerSize.value=dimensions;})" };

export const GlobalStateContext = context;
export const GlobalStateProvider = (value) => {
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp6;
  value = value.value;
  const children = value.children;
  let obj = _mod1652;
  const sharedValue = obj.useSharedValue({ width: 0, height: 0 });
  const obj2 = _mod1652;
  const sharedValue1 = obj2.useSharedValue({});
  const items = [closure_5, sharedValue1];
  [tmp3, tmp4] = items;
  function pnpm_indexTsx1(arg0, arg1) {
    const obj = {};
    const merged = Object.assign(_undefined.value);
    obj[arg0] = arg1;
    _undefined.value = obj;
  }
  const items1 = [tmp4];
  pnpm_indexTsx1.__closure = items1;
  pnpm_indexTsx1.__workletHash = 6407231763087;
  pnpm_indexTsx1.__initData = tmp3;
  const items2 = [closure_6, sharedValue];
  let c0;
  [tmp5, tmp6] = items2;
  function pnpm_indexTsx2(value) {
    c0.value = value;
  }
  const items3 = [tmp6];
  pnpm_indexTsx2.__closure = items3;
  pnpm_indexTsx2.__workletHash = 15528502204235;
  pnpm_indexTsx2.__initData = tmp5;
  const Provider = context.Provider;
  const obj4 = { layout: { containerSize: sharedValue, itemDimensions: sharedValue1, updateItemDimensions: pnpm_indexTsx1, updateContainerSize: pnpm_indexTsx2 } };
  let merged = Object.assign(value);
  return <Provider value={obj4}>{children}</Provider>;
};
export const useGlobalState = function() {
  context = react.useContext(context);
  if (context) {
    return context;
  } else {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("useGlobalState must be used within a GlobalStateProvider");
    throw error;
  }
};
