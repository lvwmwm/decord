// Module ID: 13707
// Function ID: 13708
// Name: CheckpointSounds
// Dependencies: [13708, 13709, 13710, 13711, 13712, 6569, 2]
// Exports: getCheckpointRouteSounds, scheduleCheckpointRouteSounds

// Module 13707 (CheckpointSounds)
import CheckpointNavigation from "CheckpointNavigation" /* 6569 */;
import _modDef13708 from "module_13708" /* 13708 */;
import _modDef13709 from "module_13709" /* 13709 */;
import _modDef13710 from "module_13710" /* 13710 */;
import _modDef13711 from "module_13711" /* 13711 */;
import _modDef13712 from "module_13712" /* 13712 */;
import size from "module_2" /* 2 */;

let source;

let items = [_modDef13708, _modDef13709, _modDef13710, _modDef13711, _modDef13712];
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
    const obj = { source: _modDef13708, delayMs: 0 };
    push3(obj);
    const push4 = items.push;
    const obj2 = { source: _modDef13709, delayMs: 2800 };
    push4(obj2);
  } else {
    let tmp4 = previousRoute !== tmp(6569).CheckpointRoute.HOME;
    if (tmp4) {
      const tmpResult = CheckpointNavigation;
      tmp4 = null == tmpResult.getCheckpointRoutePresentation(previousRoute).statsScreen;
    }
    if (tmp4) {
      const tmpResult4 = CheckpointNavigation;
      if (null != tmpResult4.getCheckpointRoutePresentation(route).statsScreen) {
        const push2 = items.push;
        const obj3 = { source: _modDef13710, delayMs: 0 };
        push2(obj3);
      }
    }
    const tmpResult5 = CheckpointNavigation;
    let tmp7 = null != tmpResult5.getCheckpointRoutePresentation(previousRoute).statsScreen;
    if (tmp7) {
      let tmp8 = route !== tmp(6569).CheckpointRoute.HOME;
      if (tmp8) {
        const tmpResult6 = CheckpointNavigation;
        tmp8 = null == tmpResult6.getCheckpointRoutePresentation(route).statsScreen;
      }
      tmp7 = tmp8;
    }
    if (tmp7) {
      const push = items.push;
      const obj4 = { source: _modDef13711, delayMs: 0 };
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
