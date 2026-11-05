// Module ID: 5523
// Function ID: 5524
// Dependencies: [5474]
// Exports: createLastUpdateEventMap

// Module 5523
import reanimatedWrapper from "reanimatedWrapper" /* 5474 */;

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
        const Worklets2 = tmp(5474).Worklets;
        const createShareable = Worklets2.createShareable;
        const _Map = Map;
        const self = this;
        const self2 = this;
        const UIRuntimeId = tmp(5474).Worklets.UIRuntimeId;
        map = new Map();
        return createShareable(UIRuntimeId, map);
      }
    }
  }
}
