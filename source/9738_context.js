// Module ID: 9738
// Function ID: 75672
// Name: context
// Dependencies: [77, 31, 33, 1582]
// Exports: GlobalStateProvider, useGlobalState

// Module 9738 (context)
import _defineProperty from "_defineProperty";
import importDefaultResult from "result";
import { jsx } from "jsxProd";

const require = arg1;
let context = importDefaultResult.createContext({});
let closure_6 = { code: "function pnpm_indexTsx1(index,dimensions){const{itemDimensions}=this.__closure;itemDimensions.value={...itemDimensions.value,[index]:dimensions};}" };
let closure_7 = { code: "function pnpm_indexTsx2(dimensions){const{containerSize}=this.__closure;containerSize.value=dimensions;}" };

export const GlobalStateContext = context;
export const GlobalStateProvider = function GlobalStateProvider(arg0) {
  let children;
  let value;
  ({ children, value } = arg0);
  let obj = sharedValue(sharedValue1[3]);
  sharedValue = obj.useSharedValue({ width: 0, height: 0 });
  sharedValue1 = sharedValue(sharedValue1[3]).useSharedValue({});
  /* worklet (recovered source) */ function pnpm_indexTsx1(){const{index,textWidth,spacing,anim}=this.__closure;return{position:'absolute',left:index*(textWidth.value+spacing),transform:[{translateX:-(anim.value%(textWidth.value+spacing))}]};}
  pnpm_indexTsx1.__closure = { itemDimensions: sharedValue1 };
  pnpm_indexTsx1.__workletHash = 9846581158902;
  pnpm_indexTsx1.__initData = closure_6;
  /* worklet (recovered source) */ function pnpm_indexTsx2(){const{anim,speed}=this.__closure;anim.value+=speed;}
  pnpm_indexTsx2.__closure = { containerSize: sharedValue };
  pnpm_indexTsx2.__workletHash = 5978604737778;
  pnpm_indexTsx2.__initData = closure_7;
  obj = { value: Object.assign({}, value, { layout: { containerSize: sharedValue, itemDimensions: sharedValue1, updateItemDimensions: pnpm_indexTsx1, updateContainerSize: pnpm_indexTsx2 } }), children };
  return <context.Provider value={Object.assign({}, value, { layout: { containerSize: sharedValue, itemDimensions: sharedValue1, updateItemDimensions: pnpm_indexTsx1, updateContainerSize: pnpm_indexTsx2 } })}>{children}</context.Provider>;
};
export const useGlobalState = function useGlobalState() {
  context = importDefaultResult.useContext(context);
  if (context) {
    return context;
  } else {
    const _Error = Error;
    const error = new Error("useGlobalState must be used within a GlobalStateProvider");
    throw error;
  }
};
