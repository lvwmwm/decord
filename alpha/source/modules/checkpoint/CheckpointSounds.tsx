// Module ID: 14292
// Function ID: 14293
// Name: CheckpointSounds
// Dependencies: [14293, 14294, 14295, 14296, 14297, 6745, 2]
// Exports: getCheckpointRouteSounds, scheduleCheckpointRouteSounds

// Module 14292 (CheckpointSounds)
import CheckpointNavigation from "CheckpointNavigation" /* 6745 */;
import _modDef14293 from "module_14293" /* 14293 */;
import _modDef14294 from "module_14294" /* 14294 */;
import _modDef14295 from "module_14295" /* 14295 */;
import _modDef14296 from "module_14296" /* 14296 */;
import _modDef14297 from "module_14297" /* 14297 */;
import size from "module_2" /* 2 */;

let source;

let items = [_modDef14293, _modDef14294, _modDef14295, _modDef14296, _modDef14297];
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
      return [];
    }
  }
  const items = [];
  if (route === CheckpointNavigation.CheckpointRoute.INTRODUCTION) {
    const push3 = items.push;
    const obj = { source: _modDef14293, delayMs: 0 };
    push3(obj);
    const push4 = items.push;
    const obj2 = { source: _modDef14294, delayMs: 2800 };
    push4(obj2);
  } else {
    let tmp4 = previousRoute !== tmp(6745).CheckpointRoute.HOME;
    if (tmp4) {
      const tmpResult = CheckpointNavigation;
      tmp4 = null == tmpResult.getCheckpointRoutePresentation(previousRoute).statsScreen;
    }
    if (tmp4) {
      const tmpResult4 = CheckpointNavigation;
      if (null != tmpResult4.getCheckpointRoutePresentation(route).statsScreen) {
        const push2 = items.push;
        const obj3 = { source: _modDef14295, delayMs: 0 };
        push2(obj3);
      }
    }
    const tmpResult5 = CheckpointNavigation;
    let tmp7 = null != tmpResult5.getCheckpointRoutePresentation(previousRoute).statsScreen;
    if (tmp7) {
      let tmp8 = route !== tmp(6745).CheckpointRoute.HOME;
      if (tmp8) {
        const tmpResult6 = CheckpointNavigation;
        tmp8 = null == tmpResult6.getCheckpointRoutePresentation(route).statsScreen;
      }
      tmp7 = tmp8;
    }
    if (tmp7) {
      const push = items.push;
      const obj4 = { source: _modDef14296, delayMs: 0 };
      push(obj4);
    }
  }
  return items;
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
