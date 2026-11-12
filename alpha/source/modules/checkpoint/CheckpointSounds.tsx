// Module ID: 14185
// Function ID: 14186
// Name: CheckpointSounds
// Dependencies: [14186, 14187, 14188, 14189, 14190, 6682, 2]
// Exports: getCheckpointRouteSounds, scheduleCheckpointRouteSounds

// Module 14185 (CheckpointSounds)
import CheckpointNavigation from "CheckpointNavigation" /* 6682 */;
import _modDef14186 from "module_14186" /* 14186 */;
import _modDef14187 from "module_14187" /* 14187 */;
import _modDef14188 from "module_14188" /* 14188 */;
import _modDef14189 from "module_14189" /* 14189 */;
import _modDef14190 from "module_14190" /* 14190 */;
import size from "module_2" /* 2 */;

let source;

let items = [_modDef14186, _modDef14187, _modDef14188, _modDef14189, _modDef14190];
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
    const obj = { source: _modDef14186, delayMs: 0 };
    push3(obj);
    const push4 = items.push;
    const obj2 = { source: _modDef14187, delayMs: 2800 };
    push4(obj2);
  } else {
    let tmp4 = previousRoute !== tmp(6682).CheckpointRoute.HOME;
    if (tmp4) {
      const tmpResult = CheckpointNavigation;
      tmp4 = null == tmpResult.getCheckpointRoutePresentation(previousRoute).statsScreen;
    }
    if (tmp4) {
      const tmpResult4 = CheckpointNavigation;
      if (null != tmpResult4.getCheckpointRoutePresentation(route).statsScreen) {
        const push2 = items.push;
        const obj3 = { source: _modDef14188, delayMs: 0 };
        push2(obj3);
      }
    }
    const tmpResult5 = CheckpointNavigation;
    let tmp7 = null != tmpResult5.getCheckpointRoutePresentation(previousRoute).statsScreen;
    if (tmp7) {
      let tmp8 = route !== tmp(6682).CheckpointRoute.HOME;
      if (tmp8) {
        const tmpResult6 = CheckpointNavigation;
        tmp8 = null == tmpResult6.getCheckpointRoutePresentation(route).statsScreen;
      }
      tmp7 = tmp8;
    }
    if (tmp7) {
      const push = items.push;
      const obj4 = { source: _modDef14189, delayMs: 0 };
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
