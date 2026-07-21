// Module ID: 9295
// Function ID: 72596
// Name: updateContextMenuState
// Dependencies: []
// Exports: hideContextMenu, resetContextMenuState, showContextMenu, useActiveContextMenu, useContextMenuState

// Module 9295 (updateContextMenuState)
let closure_2 = importAll(dependencyMap[0]);
let obj = arg1(dependencyMap[1]);
obj = obj.create(() => ({ menu: null }));
let closure_4 = { code: "function updateContextMenuState_ContextMenuStateNativeTsx1(absoluteX,absoluteY,state){const{INDEX_BOUNDS_WIDTH_OFFSET,INDEX_BOUNDS_HEIGHT_OFFSET,INDEX_BOUNDS_PAGE_Y_OFFSET,INDEX_BOUNDS_PAGE_X_OFFSET,INDEX_BOUNDS_OFFSET,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;const{pan:pan,itemMeasurements:itemMeasurements,activeIndex:activeIndex}=state;pan.set(absoluteY);const bounds=itemMeasurements.get();let offset=0;while(offset<bounds.length){const width=bounds[offset+INDEX_BOUNDS_WIDTH_OFFSET];const height=bounds[offset+INDEX_BOUNDS_HEIGHT_OFFSET];const pageY=bounds[offset+INDEX_BOUNDS_PAGE_Y_OFFSET];const pageX=bounds[offset+INDEX_BOUNDS_PAGE_X_OFFSET];const lowerY=pageY;const upperY=pageY+height;const lowerX=pageX;const upperX=pageX+width;if(absoluteY>=lowerY&&absoluteY<=upperY&&absoluteX>=lowerX&&absoluteX<=upperX){const index=offset/INDEX_BOUNDS_OFFSET;if(activeIndex.get()!==index){activeIndex.set(index);runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_LIGHT);}return;}offset+=INDEX_BOUNDS_OFFSET;}activeIndex.set(-1);}" };
const tmp3 = () => {
  function updateContextMenuState(absoluteX, absoluteY, closure_17) {
    let activeIndex;
    let itemMeasurements;
    let pan;
    ({ pan, itemMeasurements, activeIndex } = closure_17);
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
        const obj = callback(closure_1[3]);
        callback(closure_1[3]).runOnJS(callback(closure_1[4]).triggerHapticFeedback)(callback(closure_1[4]).HapticFeedbackTypes.IMPACT_LIGHT);
        const runOnJSResult = callback(closure_1[3]).runOnJS(callback(closure_1[4]).triggerHapticFeedback);
      }
    }
    const result3 = activeIndex.set(-1);
  }
  updateContextMenuState.__closure = { runOnJS: arg1(dependencyMap[3]).runOnJS, triggerHapticFeedback: arg1(dependencyMap[4]).triggerHapticFeedback, HapticFeedbackTypes: arg1(dependencyMap[4]).HapticFeedbackTypes };
  updateContextMenuState.__workletHash = 10158111154044;
  updateContextMenuState.__initData = closure_4;
  return updateContextMenuState;
}();
const result = arg1(dependencyMap[5]).fileFinishedImporting("design/components/ContextMenu/native/ContextMenuState.native.tsx");

export const INDEX_BOUNDS_OFFSET = 4;
export const INDEX_BOUNDS_PAGE_X_OFFSET = 0;
export const INDEX_BOUNDS_PAGE_Y_OFFSET = 1;
export const INDEX_BOUNDS_WIDTH_OFFSET = 2;
export const INDEX_BOUNDS_HEIGHT_OFFSET = 3;
export const ContextMenuStore = obj;
export const showContextMenu = function showContextMenu(arg0) {
  const arg1 = arg0;
  arg1(dependencyMap[2]).batchUpdates(() => state.setState({ menu: arg0 }));
};
export const hideContextMenu = function hideContextMenu() {
  arg1(dependencyMap[2]).batchUpdates(() => {
    state.setState((menu) => {
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
  return obj((menu) => menu.menu);
};
export const updateContextMenuState = tmp3;
export const useContextMenuState = function useContextMenuState() {
  const sharedValue = arg1(dependencyMap[3]).useSharedValue(-1);
  const arg1 = sharedValue;
  const obj = arg1(dependencyMap[3]);
  const sharedValue1 = arg1(dependencyMap[3]).useSharedValue([]);
  const dependencyMap = sharedValue1;
  const obj2 = arg1(dependencyMap[3]);
  const sharedValue2 = arg1(dependencyMap[3]).useSharedValue(-1);
  const React = sharedValue2;
  const items = [sharedValue, sharedValue1, sharedValue2];
  return React.useMemo(() => ({ pan: sharedValue, itemMeasurements: sharedValue1, activeIndex: sharedValue2 }), items);
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
