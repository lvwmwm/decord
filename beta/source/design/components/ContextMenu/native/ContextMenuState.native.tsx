// Module ID: 7359
// Function ID: 7360
// Name: ContextMenuState
// Dependencies: [19, 560, 1248, 4566, 4801, 2]
// Exports: hideContextMenu, resetContextMenuState, showContextMenu, updateContextMenuState, useActiveContextMenu, useContextMenuState

// Module 7359 (ContextMenuState)
import react_native from "react-native" /* 1248 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import HapticUtils from "HapticUtils" /* 4801 */;
import react from "react" /* 19 */;
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const ContextMenuStore = module_560.create(() => ({ menu: null }));
function updateContextMenuState(absoluteX, absoluteY, callback1) {
  let activeIndex;
  let itemMeasurements;
  let pan;
  ({ pan, itemMeasurements, activeIndex } = callback1);
  const result = pan.set(absoluteY);
  const value = itemMeasurements.get();
  let num = 0;
  if (0 < value.length) {
    while (true) {
      let tmp3 = value[num + 1];
      let tmp4 = value[num];
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
      const obj = ReanimatedRexport;
      const runOnJSResult = obj.runOnJS(HapticUtils.triggerHapticFeedback);
      runOnJSResult(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
    }
  }
  const result3 = activeIndex.set(-1);
}
let obj2 = { INDEX_BOUNDS_WIDTH_OFFSET: 2, INDEX_BOUNDS_HEIGHT_OFFSET: 3, INDEX_BOUNDS_PAGE_Y_OFFSET: 1, INDEX_BOUNDS_PAGE_X_OFFSET: 0, INDEX_BOUNDS_OFFSET: 4, runOnJS: ReanimatedRexport.runOnJS, triggerHapticFeedback: HapticUtils.triggerHapticFeedback, HapticFeedbackTypes: HapticUtils.HapticFeedbackTypes };
updateContextMenuState.__closure = obj2;
updateContextMenuState.__workletHash = 10158111154044;
updateContextMenuState.__initData = { code: "function updateContextMenuState_ContextMenuStateNativeTsx1(absoluteX,absoluteY,state){const{INDEX_BOUNDS_WIDTH_OFFSET,INDEX_BOUNDS_HEIGHT_OFFSET,INDEX_BOUNDS_PAGE_Y_OFFSET,INDEX_BOUNDS_PAGE_X_OFFSET,INDEX_BOUNDS_OFFSET,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;const{pan:pan,itemMeasurements:itemMeasurements,activeIndex:activeIndex}=state;pan.set(absoluteY);const bounds=itemMeasurements.get();let offset=0;while(offset<bounds.length){const width=bounds[offset+INDEX_BOUNDS_WIDTH_OFFSET];const height=bounds[offset+INDEX_BOUNDS_HEIGHT_OFFSET];const pageY=bounds[offset+INDEX_BOUNDS_PAGE_Y_OFFSET];const pageX=bounds[offset+INDEX_BOUNDS_PAGE_X_OFFSET];const lowerY=pageY;const upperY=pageY+height;const lowerX=pageX;const upperX=pageX+width;if(absoluteY>=lowerY&&absoluteY<=upperY&&absoluteX>=lowerX&&absoluteX<=upperX){const index=offset/INDEX_BOUNDS_OFFSET;if(activeIndex.get()!==index){activeIndex.set(index);runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_LIGHT);}return;}offset+=INDEX_BOUNDS_OFFSET;}activeIndex.set(-1);}" };
let result = size.fileFinishedImporting("design/components/ContextMenu/native/ContextMenuState.native.tsx");

export const INDEX_BOUNDS_OFFSET = 4;
export const INDEX_BOUNDS_PAGE_X_OFFSET = 0;
export const INDEX_BOUNDS_PAGE_Y_OFFSET = 1;
export const INDEX_BOUNDS_WIDTH_OFFSET = 2;
export const INDEX_BOUNDS_HEIGHT_OFFSET = 3;
export { ContextMenuStore };
export const showContextMenu = function showContextMenu(size) {
  let menu;
  _require = size;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    const obj = { menu };
    return obj.setState(obj);
  });
};
export const hideContextMenu = function hideContextMenu() {
  let state;
  let obj = react_native;
  obj.batchUpdates(() => {
    state.setState((menu) => {
      let obj = menu;
      if (null != menu.menu) {
        obj = { menu: null };
      }
      return obj;
    });
  });
};
export const useActiveContextMenu = function useActiveContextMenu() {
  return obj((menu) => menu.menu);
};
export { updateContextMenuState };
export const useContextMenuState = function useContextMenuState() {
  const obj = ReanimatedRexport;
  const sharedValue = obj.useSharedValue(-1);
  const obj2 = ReanimatedRexport;
  const sharedValue1 = obj2.useSharedValue([]);
  const obj3 = ReanimatedRexport;
  const sharedValue2 = obj3.useSharedValue(-1);
  const items = [sharedValue, sharedValue1, sharedValue2];
  return react.useMemo(() => ({ pan: sharedValue, itemMeasurements: sharedValue1, activeIndex: sharedValue2 }), items);
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
