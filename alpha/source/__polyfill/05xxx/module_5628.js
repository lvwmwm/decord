// Module ID: 5628
// Function ID: 5629
// Dependencies: [5579]
// Exports: createLastUpdateEventMap

// Module 5628
import reanimatedWrapper from "reanimatedWrapper" /* 5579 */;

let map;


export function createLastUpdateEventMap() {
  const Worklets = reanimatedWrapper.Worklets;
  let createShareable1;
  if (Worklets != null) {
    createShareable1 = Worklets.createShareable;
  }
  if (undefined !== createShareable1) {
    if (undefined !== reanimatedWrapper.Worklets.UIRuntimeId) {
      if (undefined !== reanimatedWrapper.Reanimated) {
        const Worklets2 = tmp(5579).Worklets;
        const createShareable = Worklets2.createShareable;
        const _Map = Map;
        const self = this;
        const self2 = this;
        const UIRuntimeId = tmp(5579).Worklets.UIRuntimeId;
        map = new Map();
        return createShareable(UIRuntimeId, map);
      }
    }
  }
}
