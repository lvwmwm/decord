// Module ID: 9696
// Function ID: 75395
// Name: context
// Dependencies: []
// Exports: GlobalStateProvider, useGlobalState

// Module 9696 (context)
let closure_2 = importDefault(dependencyMap[0]);
const importDefaultResult = importDefault(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
const context = importDefaultResult.createContext({});
let closure_6 = { code: "function pnpm_indexTsx1(index,dimensions){const{itemDimensions}=this.__closure;itemDimensions.value={...itemDimensions.value,[index]:dimensions};}" };
let closure_7 = { code: "function pnpm_indexTsx2(dimensions){const{containerSize}=this.__closure;containerSize.value=dimensions;}" };

export const GlobalStateContext = context;
export const GlobalStateProvider = function GlobalStateProvider(arg0) {
  let children;
  let value;
  ({ children, value } = arg0);
  let obj = arg1(dependencyMap[3]);
  const sharedValue = obj.useSharedValue({ bhk: -536870861, bic: -299892737 });
  const arg1 = sharedValue;
  const sharedValue1 = arg1(dependencyMap[3]).useSharedValue({});
  const dependencyMap = sharedValue1;
  /* worklet (recovered source) */ function pnpm_indexTsx1(){const{index,textWidth,spacing,anim}=this.__closure;return{position:'absolute',left:index*(textWidth.value+spacing),transform:[{translateX:-(anim.value%(textWidth.value+spacing))}]};}
  pnpm_indexTsx1.__closure = { itemDimensions: sharedValue1 };
  pnpm_indexTsx1.__workletHash = 9846581158902;
  pnpm_indexTsx1.__initData = closure_6;
  /* worklet (recovered source) */ function pnpm_indexTsx2(){const{anim,speed}=this.__closure;anim.value+=speed;}
  pnpm_indexTsx2.__closure = { containerSize: sharedValue };
  pnpm_indexTsx2.__workletHash = 5978604737778;
  pnpm_indexTsx2.__initData = closure_7;
  obj = { value: Object.assign({}, value, { layout: { containerSize: sharedValue, itemDimensions: sharedValue1, updateItemDimensions: pnpm_indexTsx1, updateContainerSize: pnpm_indexTsx2 } }), children };
  return <context.Provider {...obj} />;
};
export const useGlobalState = function useGlobalState() {
  const context = importDefaultResult.useContext(context);
  if (context) {
    return context;
  } else {
    const _Error = Error;
    const error = new Error("useGlobalState must be used within a GlobalStateProvider");
    throw error;
  }
};
