// Module ID: 15732
// Function ID: 120340
// Name: useControlsTranslation
// Dependencies: []
// Exports: default

// Module 15732 (useControlsTranslation)
let closure_3 = importAll(dependencyMap[0]);
const MODE_CHANGE_PHYSICS = arg1(dependencyMap[1]).MODE_CHANGE_PHYSICS;
const CALL_TILE_GUTTER = arg1(dependencyMap[2]).CALL_TILE_GUTTER;
let closure_6 = { code: "function useControlsTranslationTsx1(){const{withSpring,wrapperSpecs,MODE_CHANGE_PHYSICS,useReducedMotion,CALL_TILE_GUTTER,viewHeight}=this.__closure;return{transform:[{translateX:withSpring(wrapperSpecs.get().x,MODE_CHANGE_PHYSICS)},{translateY:withSpring(!useReducedMotion.get()&&wrapperSpecs.get().hidden?wrapperSpecs.get().height+CALL_TILE_GUTTER+viewHeight.get():wrapperSpecs.get().y,MODE_CHANGE_PHYSICS)}]};}" };
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/voice_panel/native/hooks/useControlsTranslation.tsx");

export default function useControlsTranslation(arg0, wrapperSpecs, viewHeight) {
  const importDefault = viewHeight;
  const useReducedMotion = React.useContext(importDefault(dependencyMap[3])).useReducedMotion;
  const dependencyMap = useReducedMotion;
  let obj = wrapperSpecs(dependencyMap[4]);
  class S {
    constructor() {
      obj = {};
      obj = {};
      obj3 = wrapperSpecs(useReducedMotion[5]);
      obj.translateX = obj3.withSpring(wrapperSpecs.get().x, closure_4);
      items = [, ];
      items[0] = obj;
      obj1 = {};
      obj5 = wrapperSpecs(useReducedMotion[5]);
      if (!useReducedMotion.get()) {
        tmp = wrapperSpecs;
        if (wrapperSpecs.get().hidden) {
          tmp2 = wrapperSpecs;
          tmp3 = closure_5;
          tmp5 = viewHeight;
          sum = wrapperSpecs.get().height + closure_5;
          y = sum + viewHeight.get();
        }
        tmp6 = closure_4;
        obj1.translateY = obj5.withSpring(y, closure_4);
        items[1] = obj1;
        obj.transform = items;
        return obj;
      }
      y = wrapperSpecs.get().y;
      return;
    }
  }
  obj = { withSpring: wrapperSpecs(dependencyMap[5]).withSpring, wrapperSpecs, MODE_CHANGE_PHYSICS, useReducedMotion, CALL_TILE_GUTTER, viewHeight };
  S.__closure = obj;
  S.__workletHash = 11281989557090;
  S.__initData = closure_6;
  return obj.useAnimatedStyle(S);
};
