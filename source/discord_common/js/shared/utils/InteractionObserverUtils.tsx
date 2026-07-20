// Module ID: 6929
// Function ID: 55262
// Name: __handleIntersections
// Dependencies: []
// Exports: getIntersectionObserver, unwatch, watch

// Module 6929 (__handleIntersections)
function __handleIntersections(arr) {
  const weakMap = arg1;
  const item = arr.forEach((target) => {
    let value = closure_1.get(arg1);
    value = undefined;
    if (null != value) {
      value = value.get(target.target);
    }
    if (null != value) {
      value.call(null, target);
    }
  });
}
const weakMap = new WeakMap();
const weakMap1 = new WeakMap();
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("../discord_common/js/shared/utils/InteractionObserverUtils.tsx");

export const getIntersectionObserver = function getIntersectionObserver(current) {
  let value = weakMap.get(current);
  if (null == value) {
    const prototype = globalThis.IntersectionObserver.prototype;
    const intersectionObserver = new globalThis.IntersectionObserver(__handleIntersections, current);
    const result = weakMap.set(current, intersectionObserver);
    const _WeakMap = WeakMap;
    const weakMap = new WeakMap();
    const result1 = weakMap1.set(intersectionObserver, weakMap);
    value = intersectionObserver;
  }
  return value;
};
export const watch = function watch(current2, current, arg2) {
  let weakMap = weakMap1.get(current2);
  if (null == weakMap) {
    const _WeakMap = WeakMap;
    weakMap = new WeakMap();
  }
  if (!weakMap.has(current)) {
    current2.observe(current);
  }
  const result = weakMap.set(current, arg2);
  const result1 = weakMap1.set(current2, weakMap);
};
export const unwatch = function unwatch(current2, current) {
  let weakMap = weakMap1.get(current2);
  if (null == weakMap) {
    const _WeakMap = WeakMap;
    weakMap = new WeakMap();
  }
  if (weakMap.has(current)) {
    weakMap.delete(current);
    current2.unobserve(current);
    const result = weakMap1.set(current2, weakMap);
  }
};
