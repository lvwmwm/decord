// Module ID: 5545
// Function ID: 5546
// Dependencies: [5496]
// Exports: createLastUpdateEventMap

// Module 5545
import reanimatedWrapper from "reanimatedWrapper" /* 5496 */;

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
        const Worklets2 = tmp(5496).Worklets;
        const createShareable = Worklets2.createShareable;
        const _Map = Map;
        const self = this;
        const self2 = this;
        const UIRuntimeId = tmp(5496).Worklets.UIRuntimeId;
        map = new Map();
        return createShareable(UIRuntimeId, map);
      }
    }
  }
}
