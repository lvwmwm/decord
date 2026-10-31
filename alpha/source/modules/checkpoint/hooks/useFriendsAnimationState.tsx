// Module ID: 13668
// Function ID: 13669
// Name: useFriendsAnimationState
// Dependencies: [32, 19, 6435, 2]
// Exports: useFriendsAnimationState

// Module 13668 (useFriendsAnimationState)
import CheckpointNavigation from "CheckpointNavigation" /* 6435 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const FriendsAnimationState = { START: 0, [0]: "START", INTRO: 1, [1]: "INTRO", TRANSITION: 2, [2]: "TRANSITION", BEST: 3, [3]: "BEST", LEAVE: 4, [4]: "LEAVE", END: 5, [5]: "END" };
const result = size.fileFinishedImporting("modules/checkpoint/hooks/useFriendsAnimationState.tsx");

export { FriendsAnimationState };
export function useFriendsAnimationState(route, stateFromStores3) {
  let tmp7;
  let obj = react;
  const obj2 = { route, hasShownSquad: route === CheckpointNavigation.CheckpointRoute.SQUAD, isTransitioning: false };
  const tmp3 = _slicedToArray(react.useState(obj2), 2);
  let first = tmp3[0];
  let closure_1 = tmp5;
  if (first.route !== route) {
    const obj3 = { route, hasShownSquad: first.hasShownSquad || route === CheckpointNavigation.CheckpointRoute.SQUAD, isTransitioning: tmp7 };
    tmp7 = !stateFromStores3;
    first.hasShownSquad || route === CheckpointNavigation.CheckpointRoute.SQUAD;
    if (tmp7) {
      tmp7 = first.route === tmp(6435).CheckpointRoute.SQUAD;
    }
    if (tmp7) {
      tmp7 = route === tmp(6435).CheckpointRoute.SIDEKICK;
    }
    tmp3[1](obj3);
  }
  const items = [first.isTransitioning];
  const effect = obj.useEffect(() => {
    let closure_0;
    if (first.isTransitioning) {
      const _setTimeout = setTimeout;
      first = setTimeout(() => closure_1_1((arg0) => {
        const obj = { isTransitioning: false };
        const merged = Object.assign(arg0);
        return obj;
      }), 1500);
      return () => clearTimeout(closure_0);
    }
  }, items);
  if (CheckpointNavigation.CheckpointRoute.SQUAD_TRANSITION === route) {
    return first.hasShownSquad ? obj.END : obj.START;
  } else if (CheckpointNavigation.CheckpointRoute.SQUAD === route) {
    return obj.INTRO;
  } else if (CheckpointNavigation.CheckpointRoute.SIDEKICK === route) {
    return first.isTransitioning ? obj.TRANSITION : obj.BEST;
  } else if (CheckpointNavigation.CheckpointRoute.SIDEKICK_LEAVE === route) {
    return stateFromStores3 ? obj.BEST : obj.LEAVE;
  } else {
    return obj.START;
  }
}
