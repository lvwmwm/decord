// Module ID: 12525
// Function ID: 12526
// Name: CheckpointSounds
// Dependencies: [12526, 12527, 12528, 12529, 12530, 12531, 6338, 2]
// Exports: getCheckpointRouteSounds, scheduleCheckpointRouteSounds

// Module 12525 (CheckpointSounds)
import CheckpointNavigation from "CheckpointNavigation" /* 6338 */;
import _modDef12526 from "module_12526" /* 12526 */;
import _modDef12527 from "module_12527" /* 12527 */;
import _modDef12528 from "module_12528" /* 12528 */;
import _modDef12529 from "module_12529" /* 12529 */;
import _modDef12530 from "module_12530" /* 12530 */;
import _modDef12531 from "module_12531" /* 12531 */;
import size from "module_2" /* 2 */;

let source;

let items = [_modDef12526, _modDef12527, _modDef12528, _modDef12529, _modDef12530, _modDef12531];
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
      const items = [{ source: _modDef12528, delayMs: 0 }];
      const obj = { source: _modDef12528, delayMs: 0 };
      return items;
    }
  }
  const items1 = [];
  if (route === CheckpointNavigation.CheckpointRoute.INTRODUCTION) {
    const push3 = items1.push;
    const obj2 = { source: _modDef12526, delayMs: 0 };
    push3(obj2);
    const push4 = items1.push;
    const obj3 = { source: _modDef12527, delayMs: 2800 };
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
        const obj4 = { source: _modDef12529, delayMs: 0 };
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
      const obj5 = { source: _modDef12530, delayMs: 0 };
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
