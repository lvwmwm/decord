// Module ID: 5145
// Function ID: 5146
// Dependencies: [5096]
// Exports: createLastUpdateEventMap

// Module 5145
import reanimatedWrapper from "reanimatedWrapper" /* 5096 */;

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
        const Worklets2 = tmp(5096).Worklets;
        const createShareable = Worklets2.createShareable;
        const _Map = Map;
        const self = this;
        const self2 = this;
        const UIRuntimeId = tmp(5096).Worklets.UIRuntimeId;
        map = new Map();
        return createShareable(UIRuntimeId, map);
      }
    }
  }
}
