// Module ID: 6221
// Function ID: 6222
// Name: traverseAndConfigureRelations
// Dependencies: [6214, 6206, 6152]
// Exports: configureRelations, ensureNativeDetectorComponent

// Module 6221 (traverseAndConfigureRelations)
import tagMessage from "tagMessage" /* 6152 */;
import _mod6214 from "module_6214" /* 6214 */;

const require = globalThis.__r;
let _require, dependencyMap;

let tmp;
const ComposedGestureName = tmp(6206);
function traverseAndConfigureRelations(gestures, map, set, items) {
  _require = gestures;
  dependencyMap = map;
  if (items === undefined) {
    items = [];
  }
  let obj = require("module_6214");
  const tmp2 = _require;
  if (obj.isComposedGesture(gestures)) {
    gestures = gestures.gestures;
    let item = gestures.forEach((type) => {
      const obj = _mod6214;
      if (obj.isComposedGesture(type)) {
        const tmp13 = gestures.type !== tmp(6206).ComposedGestureName.Simultaneous && type.type === tmp(6206).ComposedGestureName.Simultaneous;
        if (tmp13) {
          const handlerTags = type.handlerTags;
          const item = handlerTags.forEach((item) => set.add(item));
        }
        const tmp15 = tmp12.type === tmp(6206).ComposedGestureName.Simultaneous && type.type !== tmp(6206).ComposedGestureName.Simultaneous;
        if (tmp15) {
          const handlerTags1 = type.handlerTags;
          const item1 = handlerTags1.forEach((item) => set.delete(item));
        }
        const length = items.length;
        traverseAndConfigureRelations(type, map, set, items);
        let tmp24 = type.type === tmp(6206).ComposedGestureName.Simultaneous;
        const tmp17 = items;
        if (tmp24) {
          tmp24 = tmp12.type !== tmp(6206).ComposedGestureName.Simultaneous;
        }
        if (tmp24) {
          const handlerTags2 = tmp12.handlerTags;
          const item2 = handlerTags2.forEach((item) => set.delete(item));
        }
        const tmp26 = type.type !== tmp(6206).ComposedGestureName.Simultaneous && tmp12.type === tmp(6206).ComposedGestureName.Simultaneous;
        if (tmp26) {
          const handlerTags3 = tmp12.handlerTags;
          const item3 = handlerTags3.forEach((item) => set.add(item));
        }
        if (gestures.type === ComposedGestureName.ComposedGestureName.Exclusive) {
          const handlerTags4 = type.handlerTags;
          const item4 = handlerTags4.forEach((item) => items.push(item));
        }
        const tmp29 = type.type === tmp(6206).ComposedGestureName.Exclusive && tmp12.type !== tmp(6206).ComposedGestureName.Exclusive;
        if (tmp29) {
          tmp17.length = length;
        }
      } else {
        const deleteResult = set.delete(type.handlerTag);
        traverseAndConfigureRelations(type, map, set, items);
        const arr = items;
        const obj2 = set;
        if (deleteResult) {
          obj2.add(type.handlerTag);
        }
        if (gestures.type === ComposedGestureName.ComposedGestureName.Exclusive) {
          arr.push(type.handlerTag);
        }
      }
    });
  } else {
    const tmp2Result = tmp2(6214);
    gestures.gestureRelations = tmp2Result.prepareRelations(gestures.config, gestures.handlerTag);
    const push = simultaneousHandlers.push;
    const items1 = [];
    HermesBuiltin.arraySpread(items1, set, 0);
    HermesBuiltin.apply(push, items1, gestures.gestureRelations.simultaneousHandlers);
    const waitFor = gestures.gestureRelations.waitFor;
    const push2 = waitFor.push;
    const items2 = [];
    const tmp12 = items;
    HermesBuiltin.arraySpread(items2, items, 0);
    let tmp15 = items2;
    HermesBuiltin.apply(push2, items2, waitFor);
    let obj2 = { waitFor: gestures.gestureRelations.waitFor, simultaneousHandlers: gestures.gestureRelations.simultaneousHandlers, blocksHandlers: gestures.gestureRelations.blocksHandlers };
    const result = map.set(gestures.handlerTag, obj2);
  }
}
let set = new Set();

export { traverseAndConfigureRelations };
export const configureRelations = function configureRelations(externalSimultaneousHandlers) {
  map = new Map();
  const obj2 = _mod6214;
  if (obj2.isComposedGesture(externalSimultaneousHandlers)) {
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set(externalSimultaneousHandlers.externalSimultaneousHandlers);
    if (externalSimultaneousHandlers.type === ComposedGestureName.ComposedGestureName.Simultaneous) {
      const handlerTags = externalSimultaneousHandlers.handlerTags;
      const item = handlerTags.forEach((item) => set.add(item));
    }
    traverseAndConfigureRelations(externalSimultaneousHandlers, map, set);
  } else {
    const result = map.set(externalSimultaneousHandlers.handlerTag, externalSimultaneousHandlers.gestureRelations);
  }
  return map;
};
export const ensureNativeDetectorComponent = function ensureNativeDetectorComponent(ReanimatedNativeDetector) {
  const tmp = ReanimatedNativeDetector;
  if (!tmp) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const obj = tagMessage;
    const error = new Error(obj.tagMessage("Gesture expects to run on the UI thread, but failed to create the Reanimated NativeDetector."));
    throw error;
  }
};
export const EMPTY_SET = set;
