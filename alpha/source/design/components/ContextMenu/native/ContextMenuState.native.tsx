// Module ID: 10054
// Function ID: 10055
// Name: ContextMenuState
// Dependencies: [19, 560, 1259, 1705, 5384, 1652, 2]
// Exports: hideContextMenu, resetContextMenuState, showContextMenu, updateContextMenuState, useActiveContextMenu, useContextMenuState

// Module 10054 (ContextMenuState)
import react_native from "react-native" /* 1259 */;
import _mod1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import HapticUtils from "HapticUtils" /* 5384 */;
import react from "react" /* 19 */;
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let tmp10;
let tmp11;
let tmp3;
let tmp4;
let tmp5;
let tmp6;
let tmp7;
let tmp8;
let tmp9;
const ContextMenuStore = module_560.create(() => ({ menu: null }));
let items = [{ code: "(function updateContextMenuState_ContextMenuStateNativeTsx1(absoluteX,absoluteY,state){let[INDEX_BOUNDS_WIDTH_OFFSET,INDEX_BOUNDS_HEIGHT_OFFSET,INDEX_BOUNDS_PAGE_Y_OFFSET,INDEX_BOUNDS_PAGE_X_OFFSET,INDEX_BOUNDS_OFFSET,scheduleOnRN,triggerHapticFeedback,HapticFeedbackTypes]=this.__closure;const{pan:pan,itemMeasurements:itemMeasurements,activeIndex:activeIndex}=state;pan.set(absoluteY);const bounds=itemMeasurements.get();let offset=0;while(offset<bounds.length){const width=bounds[offset+INDEX_BOUNDS_WIDTH_OFFSET];const height=bounds[offset+INDEX_BOUNDS_HEIGHT_OFFSET];const pageY=bounds[offset+INDEX_BOUNDS_PAGE_Y_OFFSET];const pageX=bounds[offset+INDEX_BOUNDS_PAGE_X_OFFSET];const lowerY=pageY;const upperY=pageY+height;const lowerX=pageX;const upperX=pageX+width;if(absoluteY>=lowerY&&absoluteY<=upperY&&absoluteX>=lowerX&&absoluteX<=upperX){const index=offset/INDEX_BOUNDS_OFFSET;if(activeIndex.get()!==index){activeIndex.set(index);scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.IMPACT_LIGHT);}return;}offset+=INDEX_BOUNDS_OFFSET;}activeIndex.set(-1);})" }, 2, 3, 1, 0, 4, _mod1705.scheduleOnRN, HapticUtils.triggerHapticFeedback, HapticUtils.HapticFeedbackTypes];
let c0;
let c1;
let c2;
let c3;
let c4;
let c5;
let c6;
let c7;
[tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11] = items;
function updateContextMenuState(arg0, arg1, callback) {
  let activeIndex;
  let itemMeasurements;
  let pan;
  ({ pan, itemMeasurements, activeIndex } = callback);
  const result = pan.set(arg1);
  const value = itemMeasurements.get();
  let num = 0;
  if (0 < value.length) {
    while (true) {
      let tmp6 = value[num + c2];
      let tmp8 = value[num + c3];
      if (arg1 >= tmp6) {
        if (arg1 <= tmp6 + value[num + c1]) {
          if (arg0 >= tmp8) {
            if (arg0 <= tmp8 + tmp3) {
              break;
            }
          }
        }
      }
      num = num + c4;
    }
    const result1 = num / c4;
    if (activeIndex.get() !== result1) {
      const result2 = activeIndex.set(result1);
      _undefined(c6, _undefined2.IMPACT_LIGHT);
    }
  }
  const result3 = activeIndex.set(-1);
}
const items1 = [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11];
updateContextMenuState.__closure = items1;
updateContextMenuState.__workletHash = 7765355212136;
updateContextMenuState.__initData = tmp3;
let result = size.fileFinishedImporting("design/components/ContextMenu/native/ContextMenuState.native.tsx");

export const INDEX_BOUNDS_OFFSET = 4;
export const INDEX_BOUNDS_PAGE_X_OFFSET = 0;
export const INDEX_BOUNDS_PAGE_Y_OFFSET = 1;
export const INDEX_BOUNDS_WIDTH_OFFSET = 2;
export const INDEX_BOUNDS_HEIGHT_OFFSET = 3;
export { ContextMenuStore };
export function showContextMenu(size) {
  let menu;
  _require = size;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    const obj = { menu };
    return obj.setState(obj);
  });
}
export function hideContextMenu() {
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
}
export function useActiveContextMenu() {
  return obj((menu) => menu.menu);
}
export { updateContextMenuState };
export function useContextMenuState() {
  const obj = _mod1652;
  const sharedValue = obj.useSharedValue(-1);
  const obj2 = _mod1652;
  const sharedValue1 = obj2.useSharedValue([]);
  const obj3 = _mod1652;
  const sharedValue2 = obj3.useSharedValue(-1);
  const items = [sharedValue, sharedValue1, sharedValue2];
  return react.useMemo(() => ({ pan: sharedValue, itemMeasurements: sharedValue1, activeIndex: sharedValue2 }), items);
}
export function resetContextMenuState(contextMenuState) {
  let activeIndex;
  let itemMeasurements;
  let pan;
  ({ activeIndex, pan, itemMeasurements } = contextMenuState);
  const result = activeIndex.set(-1);
  const result1 = pan.set(-1);
  if (itemMeasurements.get().length > 0) {
    const result2 = itemMeasurements.set([]);
  }
}
