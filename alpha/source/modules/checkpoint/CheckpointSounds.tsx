// Module ID: 12409
// Function ID: 12410
// Name: CheckpointSounds
// Dependencies: [12410, 12411, 12412, 12413, 12414, 12415, 6219, 2]
// Exports: getCheckpointRouteSounds, scheduleCheckpointRouteSounds

// Module 12409 (CheckpointSounds)
import CheckpointNavigation from "CheckpointNavigation" /* 6219 */;
import _modDef12410 from "module_12410" /* 12410 */;
import _modDef12411 from "module_12411" /* 12411 */;
import _modDef12412 from "module_12412" /* 12412 */;
import _modDef12413 from "module_12413" /* 12413 */;
import _modDef12414 from "module_12414" /* 12414 */;
import _modDef12415 from "module_12415" /* 12415 */;
import size from "module_2" /* 2 */;

let source;

let items = [_modDef12410, _modDef12411, _modDef12412, _modDef12413, _modDef12414, _modDef12415];
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
      const items = [{ source: _modDef12412, delayMs: 0 }];
      const obj = { source: _modDef12412, delayMs: 0 };
      return items;
    }
  }
  const items1 = [];
  if (route === CheckpointNavigation.CheckpointRoute.INTRODUCTION) {
    const push3 = items1.push;
    const obj2 = { source: _modDef12410, delayMs: 0 };
    push3(obj2);
    const push4 = items1.push;
    const obj3 = { source: _modDef12411, delayMs: 2800 };
    push4(obj3);
  } else {
    let tmp4 = previousRoute !== tmp(6219).CheckpointRoute.HOME;
    if (tmp4) {
      const tmpResult = CheckpointNavigation;
      tmp4 = null == tmpResult.getCheckpointRoutePresentation(previousRoute).statsScreen;
    }
    if (tmp4) {
      const tmpResult4 = CheckpointNavigation;
      if (null != tmpResult4.getCheckpointRoutePresentation(route).statsScreen) {
        const push2 = items1.push;
        const obj4 = { source: _modDef12413, delayMs: 0 };
        push2(obj4);
      }
    }
    const tmpResult5 = CheckpointNavigation;
    let tmp7 = null != tmpResult5.getCheckpointRoutePresentation(previousRoute).statsScreen;
    if (tmp7) {
      let tmp8 = route !== tmp(6219).CheckpointRoute.HOME;
      if (tmp8) {
        const tmpResult6 = CheckpointNavigation;
        tmp8 = null == tmpResult6.getCheckpointRoutePresentation(route).statsScreen;
      }
      tmp7 = tmp8;
    }
    if (tmp7) {
      const push = items1.push;
      const obj5 = { source: _modDef12414, delayMs: 0 };
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
