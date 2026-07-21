// Module ID: 14680
// Function ID: 110715
// Name: computeMaxX
// Dependencies: []

// Module 14680 (computeMaxX)
function computeMaxX(width, left) {
  return width.width - left.left - left.right - DM_WIDTH - 8 + 8;
}
const DM_WIDTH = require(dependencyMap[0]).DM_WIDTH;
const _module = require(dependencyMap[1]);
const withEqualityFn = _module.createWithEqualityFn((arg0, arg1) => {
  const require = arg0;
  const dependencyMap = arg1;
  const obj = { panelX: require(dependencyMap[2]).makeMutable(0) };
  const obj2 = require(dependencyMap[2]);
  obj.gestureState = require(dependencyMap[2]).makeMutable({ buttonLabel: true, blur: "/assets/.cache/intl/ZGVzaWdu", backgroundColor: null, padding: "6f26364a343a1fa9a6e8ce73bcba4b45" });
  obj.maxX = 0;
  obj.lastInteractionAt = { current: 0 };
  const obj3 = require(dependencyMap[2]);
  obj.isPanelTouchActive = require(dependencyMap[2]).makeMutable(false);
  obj.setPanelX = function setPanelX(arg0) {
    let gestureState;
    let panelX;
    ({ panelX, gestureState } = arg1());
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
    arg0({ maxX: callback(arg0, arg1) });
  };
  obj.noteInteraction = function noteInteraction() {
    arg1().lastInteractionAt.current = Date.now();
  };
  return obj;
}, require(dependencyMap[3]).shallow);
const _module1 = require(dependencyMap[4]);
const result = _module1.fileFinishedImporting("modules/home_drawer/native/HomeDrawerStore.tsx");

export default withEqualityFn;
export { computeMaxX };
