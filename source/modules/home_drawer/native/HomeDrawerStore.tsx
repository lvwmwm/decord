// Module ID: 14803
// Function ID: 112922
// Name: computeMaxX
// Dependencies: [653, 677, 3991, 3743, 2]

// Module 14803 (computeMaxX)
import { DM_WIDTH } from "ME";
import useStoreWithEqualityFn from "useStoreWithEqualityFn";

function computeMaxX(width, left) {
  return width.width - left.left - left.right - DM_WIDTH - 8 + 8;
}
const withEqualityFn = useStoreWithEqualityFn.createWithEqualityFn((arg0, arg1) => {
  const _require = arg0;
  const dependencyMap = arg1;
  let obj = { panelX: _require(3991).makeMutable(0) };
  const obj2 = _require(3991);
  obj.gestureState = _require(3991).makeMutable({ active: false, initialX: 0, initialY: 0, panelX: 0 });
  obj.maxX = 0;
  obj.lastInteractionAt = { current: 0 };
  const obj3 = _require(3991);
  obj.isPanelTouchActive = _require(3991).makeMutable(false);
  obj.setPanelX = function setPanelX(arg0) {
    let gestureState;
    let panelX;
    ({ panelX, gestureState } = callback2());
    if ("open" === arg0) {
      const result = panelX.set(tmp2);
    } else {
      const result1 = panelX.set(0);
    }
    const obj = {};
    const merged = Object.assign(gestureState.get());
    obj["active"] = false;
    const result2 = gestureState.set(obj);
  };
  obj.updateMaxX = function updateMaxX(arg0, arg1) {
    callback({ maxX: outer1_3(arg0, arg1) });
  };
  obj.noteInteraction = function noteInteraction(arg0, arg1) {
    callback2().lastInteractionAt.current = Date.now();
  };
  return obj;
}, require("isIterable").shallow);
let result = require("module_3991").fileFinishedImporting("modules/home_drawer/native/HomeDrawerStore.tsx");

export default withEqualityFn;
export { computeMaxX };
