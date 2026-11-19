// Module ID: 12439
// Function ID: 12440
// Name: CheckpointSounds
// Dependencies: [12440, 12441, 12442, 12443, 12444, 12445, 6217, 2]
// Exports: getCheckpointRouteSounds, scheduleCheckpointRouteSounds

// Module 12439 (CheckpointSounds)
import CheckpointNavigation from "CheckpointNavigation" /* 6217 */;
import _modDef12440 from "module_12440" /* 12440 */;
import _modDef12441 from "module_12441" /* 12441 */;
import _modDef12442 from "module_12442" /* 12442 */;
import _modDef12443 from "module_12443" /* 12443 */;
import _modDef12444 from "module_12444" /* 12444 */;
import _modDef12445 from "module_12445" /* 12445 */;
import size from "module_2" /* 2 */;

let source;

let items = [_modDef12440, _modDef12441, _modDef12442, _modDef12443, _modDef12444, _modDef12445];
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
      const items = [{ source: _modDef12442, delayMs: 0 }];
      const obj = { source: _modDef12442, delayMs: 0 };
      return items;
    }
  }
  const items1 = [];
  if (route === CheckpointNavigation.CheckpointRoute.INTRODUCTION) {
    const push3 = items1.push;
    const obj2 = { source: _modDef12440, delayMs: 0 };
    push3(obj2);
    const push4 = items1.push;
    const obj3 = { source: _modDef12441, delayMs: 2800 };
    push4(obj3);
  } else {
    let tmp4 = previousRoute !== tmp(6217).CheckpointRoute.HOME;
    if (tmp4) {
      const tmpResult = CheckpointNavigation;
      tmp4 = null == tmpResult.getCheckpointRoutePresentation(previousRoute).statsScreen;
    }
    if (tmp4) {
      const tmpResult4 = CheckpointNavigation;
      if (null != tmpResult4.getCheckpointRoutePresentation(route).statsScreen) {
        const push2 = items1.push;
        const obj4 = { source: _modDef12443, delayMs: 0 };
        push2(obj4);
      }
    }
    const tmpResult5 = CheckpointNavigation;
    let tmp7 = null != tmpResult5.getCheckpointRoutePresentation(previousRoute).statsScreen;
    if (tmp7) {
      let tmp8 = route !== tmp(6217).CheckpointRoute.HOME;
      if (tmp8) {
        const tmpResult6 = CheckpointNavigation;
        tmp8 = null == tmpResult6.getCheckpointRoutePresentation(route).statsScreen;
      }
      tmp7 = tmp8;
    }
    if (tmp7) {
      const push = items1.push;
      const obj5 = { source: _modDef12444, delayMs: 0 };
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
