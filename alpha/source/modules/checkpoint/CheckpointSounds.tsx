// Module ID: 12663
// Function ID: 12664
// Name: CheckpointSounds
// Dependencies: [12664, 12665, 12666, 12667, 12668, 12669, 6767, 2]
// Exports: getCheckpointRouteSounds, scheduleCheckpointRouteSounds

// Module 12663 (CheckpointSounds)
import CheckpointNavigation from "CheckpointNavigation" /* 6767 */;
import _modDef12664 from "module_12664" /* 12664 */;
import _modDef12665 from "module_12665" /* 12665 */;
import _modDef12666 from "module_12666" /* 12666 */;
import _modDef12667 from "module_12667" /* 12667 */;
import _modDef12668 from "module_12668" /* 12668 */;
import _modDef12669 from "module_12669" /* 12669 */;
import size from "module_2" /* 2 */;

let source;

let items = [_modDef12664, _modDef12665, _modDef12666, _modDef12667, _modDef12668, _modDef12669];
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
      const items = [{ source: _modDef12666, delayMs: 0 }];
      const obj = { source: _modDef12666, delayMs: 0 };
      return items;
    }
  }
  const items1 = [];
  if (route === CheckpointNavigation.CheckpointRoute.INTRODUCTION) {
    const push3 = items1.push;
    const obj2 = { source: _modDef12664, delayMs: 0 };
    push3(obj2);
    const push4 = items1.push;
    const obj3 = { source: _modDef12665, delayMs: 2800 };
    push4(obj3);
  } else {
    let tmp4 = previousRoute !== tmp(6767).CheckpointRoute.HOME;
    if (tmp4) {
      const tmpResult = CheckpointNavigation;
      tmp4 = null == tmpResult.getCheckpointRoutePresentation(previousRoute).statsScreen;
    }
    if (tmp4) {
      const tmpResult4 = CheckpointNavigation;
      if (null != tmpResult4.getCheckpointRoutePresentation(route).statsScreen) {
        const push2 = items1.push;
        const obj4 = { source: _modDef12667, delayMs: 0 };
        push2(obj4);
      }
    }
    const tmpResult5 = CheckpointNavigation;
    let tmp7 = null != tmpResult5.getCheckpointRoutePresentation(previousRoute).statsScreen;
    if (tmp7) {
      let tmp8 = route !== tmp(6767).CheckpointRoute.HOME;
      if (tmp8) {
        const tmpResult6 = CheckpointNavigation;
        tmp8 = null == tmpResult6.getCheckpointRoutePresentation(route).statsScreen;
      }
      tmp7 = tmp8;
    }
    if (tmp7) {
      const push = items1.push;
      const obj5 = { source: _modDef12668, delayMs: 0 };
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
