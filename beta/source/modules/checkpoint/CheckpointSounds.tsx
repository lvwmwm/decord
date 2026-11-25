// Module ID: 12532
// Function ID: 12533
// Name: CheckpointSounds
// Dependencies: [12533, 12534, 12535, 12536, 12537, 12538, 6338, 2]
// Exports: getCheckpointRouteSounds, scheduleCheckpointRouteSounds

// Module 12532 (CheckpointSounds)
import CheckpointNavigation from "CheckpointNavigation" /* 6338 */;
import _modDef12533 from "module_12533" /* 12533 */;
import _modDef12534 from "module_12534" /* 12534 */;
import _modDef12535 from "module_12535" /* 12535 */;
import _modDef12536 from "module_12536" /* 12536 */;
import _modDef12537 from "module_12537" /* 12537 */;
import _modDef12538 from "module_12538" /* 12538 */;
import size from "module_2" /* 2 */;

let source;

let items = [_modDef12533, _modDef12534, _modDef12535, _modDef12536, _modDef12537, _modDef12538];
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointSounds.tsx");

export const CHECKPOINT_ROUTE_SOUNDS = items;
export function getCheckpointRouteSounds(arg0) {
  let previousRoute;
  let route;
  ({ previousRoute, route } = arg0);
  if (previousRoute === CheckpointNavigation.CheckpointRoute.SIDEKICK_LEAVE) {
    if (route === CheckpointNavigation.CheckpointRoute.SIDEKICK) {
      return null;
    }
  }
  if (previousRoute === CheckpointNavigation.CheckpointRoute.FINALIZE_CHARACTER) {
    if (route === CheckpointNavigation.CheckpointRoute.SUMMARY) {
      const items = [{ source: _modDef12535, delayMs: 0 }];
      const obj = { source: _modDef12535, delayMs: 0 };
      return items;
    }
  }
  const items1 = [];
  if (route === CheckpointNavigation.CheckpointRoute.INTRODUCTION) {
    const push3 = items1.push;
    const obj2 = { source: _modDef12533, delayMs: 0 };
    push3(obj2);
    const push4 = items1.push;
    const obj3 = { source: _modDef12534, delayMs: 2800 };
    push4(obj3);
  } else {
    let tmp4 = previousRoute !== tmp(6338).CheckpointRoute.HOME;
    if (tmp4) {
      const tmpResult = CheckpointNavigation;
      tmp4 = null == tmpResult.getCheckpointRoutePresentation(previousRoute).statsScreen;
    }
    if (tmp4) {
      const tmpResult4 = CheckpointNavigation;
      if (null != tmpResult4.getCheckpointRoutePresentation(route).statsScreen) {
        const push2 = items1.push;
        const obj4 = { source: _modDef12536, delayMs: 0 };
        push2(obj4);
      }
    }
    const tmpResult5 = CheckpointNavigation;
    let tmp7 = null != tmpResult5.getCheckpointRoutePresentation(previousRoute).statsScreen;
    if (tmp7) {
      let tmp8 = route !== tmp(6338).CheckpointRoute.HOME;
      if (tmp8) {
        const tmpResult6 = CheckpointNavigation;
        tmp8 = null == tmpResult6.getCheckpointRoutePresentation(route).statsScreen;
      }
      tmp7 = tmp8;
    }
    if (tmp7) {
      const push = items1.push;
      const obj5 = { source: _modDef12537, delayMs: 0 };
      push(obj5);
    }
  }
  return items1;
}
export function scheduleCheckpointRouteSounds(arr, arg1) {
  let closure_0 = arg1;
  let closure_1 = [];
  const item = arr.forEach((source) => {
    source = source.source;
    const delayMs = source.delayMs;
    if (delayMs > 0) {
      const _setTimeout = setTimeout;
      closure_1.push(setTimeout(() => source(source), delayMs));
    } else {
      source(source);
    }
  });
  return () => closure_1.forEach((item) => clearTimeout(item));
}
