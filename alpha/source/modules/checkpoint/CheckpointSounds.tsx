// Module ID: 13157
// Function ID: 13158
// Name: CheckpointSounds
// Dependencies: [13158, 13159, 13160, 13161, 13162, 6743, 2]
// Exports: getCheckpointRouteSounds, scheduleCheckpointRouteSounds

// Module 13157 (CheckpointSounds)
import CheckpointNavigation from "CheckpointNavigation" /* 6743 */;
import _modDef13158 from "module_13158" /* 13158 */;
import _modDef13159 from "module_13159" /* 13159 */;
import _modDef13160 from "module_13160" /* 13160 */;
import _modDef13161 from "module_13161" /* 13161 */;
import _modDef13162 from "module_13162" /* 13162 */;
import size from "module_2" /* 2 */;

let source;

let items = [_modDef13158, _modDef13159, _modDef13160, _modDef13161, _modDef13162];
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
    const obj = { source: _modDef13158, delayMs: 0 };
    push3(obj);
    const push4 = items.push;
    const obj2 = { source: _modDef13159, delayMs: 2800 };
    push4(obj2);
  } else {
    let tmp4 = previousRoute !== tmp(6743).CheckpointRoute.HOME;
    if (tmp4) {
      const tmpResult = CheckpointNavigation;
      tmp4 = null == tmpResult.getCheckpointRoutePresentation(previousRoute).statsScreen;
    }
    if (tmp4) {
      const tmpResult4 = CheckpointNavigation;
      if (null != tmpResult4.getCheckpointRoutePresentation(route).statsScreen) {
        const push2 = items.push;
        const obj3 = { source: _modDef13160, delayMs: 0 };
        push2(obj3);
      }
    }
    const tmpResult5 = CheckpointNavigation;
    let tmp7 = null != tmpResult5.getCheckpointRoutePresentation(previousRoute).statsScreen;
    if (tmp7) {
      let tmp8 = route !== tmp(6743).CheckpointRoute.HOME;
      if (tmp8) {
        const tmpResult6 = CheckpointNavigation;
        tmp8 = null == tmpResult6.getCheckpointRoutePresentation(route).statsScreen;
      }
      tmp7 = tmp8;
    }
    if (tmp7) {
      const push = items.push;
      const obj4 = { source: _modDef13161, delayMs: 0 };
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
