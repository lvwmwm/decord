// Module ID: 9303
// Function ID: 72661
// Name: updateContextMenuState
// Dependencies: [31, 621, 682, 3991, 4099, 2]
// Exports: hideContextMenu, resetContextMenuState, showContextMenu, useActiveContextMenu, useContextMenuState

// Module 9303 (updateContextMenuState)
import result from "result";
import keys from "keys";

const require = arg1;
keys = keys.create(() => ({ menu: null }));
let closure_4 = { code: "function updateContextMenuState_ContextMenuStateNativeTsx1(absoluteX,absoluteY,state){const{INDEX_BOUNDS_WIDTH_OFFSET,INDEX_BOUNDS_HEIGHT_OFFSET,INDEX_BOUNDS_PAGE_Y_OFFSET,INDEX_BOUNDS_PAGE_X_OFFSET,INDEX_BOUNDS_OFFSET,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;const{pan:pan,itemMeasurements:itemMeasurements,activeIndex:activeIndex}=state;pan.set(absoluteY);const bounds=itemMeasurements.get();let offset=0;while(offset<bounds.length){const width=bounds[offset+INDEX_BOUNDS_WIDTH_OFFSET];const height=bounds[offset+INDEX_BOUNDS_HEIGHT_OFFSET];const pageY=bounds[offset+INDEX_BOUNDS_PAGE_Y_OFFSET];const pageX=bounds[offset+INDEX_BOUNDS_PAGE_X_OFFSET];const lowerY=pageY;const upperY=pageY+height;const lowerX=pageX;const upperX=pageX+width;if(absoluteY>=lowerY&&absoluteY<=upperY&&absoluteX>=lowerX&&absoluteX<=upperX){const index=offset/INDEX_BOUNDS_OFFSET;if(activeIndex.get()!==index){activeIndex.set(index);runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_LIGHT);}return;}offset+=INDEX_BOUNDS_OFFSET;}activeIndex.set(-1);}" };
let tmp3 = (() => {
  export function updateContextMenuState(absoluteX, absoluteY, outer1_17) {
    let activeIndex;
    let itemMeasurements;
    let pan;
    ({ pan, itemMeasurements, activeIndex } = outer1_17);
    const result = pan.set(absoluteY);
    const value = itemMeasurements.get();
    let num = 0;
    if (0 < value.length) {
      while (true) {
        let tmp3 = value[num + 1];
        let tmp4 = value[num];
        let tmp5 = num;
        if (absoluteY >= tmp3) {
          if (absoluteY <= tmp3 + value[num + 3]) {
            if (absoluteX >= tmp4) {
              if (absoluteX <= tmp4 + tmp2) {
                break;
              }
            }
          }
        }
        num = num + 4;
      }
      const result1 = num / 4;
      if (activeIndex.get() !== result1) {
        const result2 = activeIndex.set(result1);
        const obj = outer1_0(outer1_1[3]);
        outer1_0(outer1_1[3]).runOnJS(outer1_0(outer1_1[4]).triggerHapticFeedback)(outer1_0(outer1_1[4]).HapticFeedbackTypes.IMPACT_LIGHT);
        const runOnJSResult = outer1_0(outer1_1[3]).runOnJS(outer1_0(outer1_1[4]).triggerHapticFeedback);
      }
    }
    const result3 = activeIndex.set(-1);
  }
  let obj = { INDEX_BOUNDS_WIDTH_OFFSET: 2, INDEX_BOUNDS_HEIGHT_OFFSET: 3, INDEX_BOUNDS_PAGE_Y_OFFSET: 1, INDEX_BOUNDS_PAGE_X_OFFSET: 0, INDEX_BOUNDS_OFFSET: 4, runOnJS: require(3991).runOnJS, triggerHapticFeedback: require(4099) /* getAndroidLightImpactEffect */.triggerHapticFeedback, HapticFeedbackTypes: require(4099) /* getAndroidLightImpactEffect */.HapticFeedbackTypes };
  updateContextMenuState.__closure = obj;
  updateContextMenuState.__workletHash = 10158111154044;
  updateContextMenuState.__initData = closure_4;
  return updateContextMenuState;
})();
let result = require("batchUpdates").fileFinishedImporting("design/components/ContextMenu/native/ContextMenuState.native.tsx");

export const INDEX_BOUNDS_OFFSET = 4;
export const INDEX_BOUNDS_PAGE_X_OFFSET = 0;
export const INDEX_BOUNDS_PAGE_Y_OFFSET = 1;
export const INDEX_BOUNDS_WIDTH_OFFSET = 2;
export const INDEX_BOUNDS_HEIGHT_OFFSET = 3;
export const ContextMenuStore = keys;
export const showContextMenu = function showContextMenu(arg0) {
  const _require = arg0;
  _require(682).batchUpdates(() => outer1_3.setState({ menu: closure_0 }));
};
export const hideContextMenu = function hideContextMenu() {
  require(682) /* batchUpdates */.batchUpdates(() => {
    outer1_3.setState((menu) => {
      let tmp = menu;
      if (null != menu.menu) {
        const obj = { menu: null };
        tmp = obj;
      }
      return tmp;
    });
  });
};
export const useActiveContextMenu = function useActiveContextMenu() {
  return keys((menu) => menu.menu);
};
export const useContextMenuState = function useContextMenuState() {
  sharedValue = sharedValue(sharedValue1[3]).useSharedValue(-1);
  const obj = sharedValue(sharedValue1[3]);
  sharedValue1 = sharedValue(sharedValue1[3]).useSharedValue([]);
  const obj2 = sharedValue(sharedValue1[3]);
  const sharedValue2 = sharedValue(sharedValue1[3]).useSharedValue(-1);
  const items = [sharedValue, sharedValue1, sharedValue2];
  return sharedValue2.useMemo(() => ({ pan: sharedValue, itemMeasurements: sharedValue1, activeIndex: sharedValue2 }), items);
};
export const resetContextMenuState = function resetContextMenuState(contextMenuState) {
  let activeIndex;
  let itemMeasurements;
  let pan;
  ({ activeIndex, pan, itemMeasurements } = contextMenuState);
  const result = activeIndex.set(-1);
  const result1 = pan.set(-1);
  if (itemMeasurements.get().length > 0) {
    const result2 = itemMeasurements.set([]);
  }
};
