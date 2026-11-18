// Module ID: 12699
// Function ID: 12700
// Name: useFriendsAnimationState
// Dependencies: [32, 19, 6246, 2]
// Exports: useFriendsAnimationState

// Module 12699 (useFriendsAnimationState)
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const FriendsAnimationState = { HIDDEN: 0, [0]: "HIDDEN", SQUAD: 1, [1]: "SQUAD", SQUAD_TO_SIDEKICK: 2, [2]: "SQUAD_TO_SIDEKICK", SIDEKICK: 3, [3]: "SIDEKICK", SIDEKICK_EXIT: 4, [4]: "SIDEKICK_EXIT", SQUAD_EXIT: 5, [5]: "SQUAD_EXIT" };
let obj2 = { TO_SIDEKICK: 0, [0]: "TO_SIDEKICK", TO_SQUAD: 1, [1]: "TO_SQUAD" };
let closure_6 = { [obj2.TO_SIDEKICK]: 1100, [obj2.TO_SQUAD]: 1000 };
const result = size.fileFinishedImporting("modules/checkpoint/hooks/useFriendsAnimationState.tsx");

export { FriendsAnimationState };
export function useFriendsAnimationState(route, stateFromStores2) {
  let HIDDEN;
  let closure_0;
  let tmp22;
  let tmp4;
  let tmp5;
  let tmp7;
  let transition;
  let obj = react;
  obj2 = { route, hasShownSquad: route === require("CheckpointNavigation").CheckpointRoute.SQUAD, transition: null };
  const tmp = require;
  [tmp4, tmp5] = _slicedToArray(react.useState(obj2), 2);
  require = tmp5;
  const tmp3 = _slicedToArray(react.useState(obj2), 2);
  if (tmp4.route !== route) {
    route = tmp4.route;
    const obj3 = { route, hasShownSquad: tmp4.hasShownSquad || route === tmp(transition[2]).CheckpointRoute.SQUAD, transition: tmp7 };
    tmp7 = null;
    tmp4.hasShownSquad || route === tmp(transition[2]).CheckpointRoute.SQUAD;
    if (!stateFromStores2) {
      let TO_SIDEKICK;
      if (route === tmp(transition[2]).CheckpointRoute.SQUAD) {
        if (route === tmp(transition[2]).CheckpointRoute.SIDEKICK) {
          TO_SIDEKICK = obj2.TO_SIDEKICK;
        }
        tmp7 = TO_SIDEKICK;
      }
      TO_SIDEKICK = null;
      if (route === tmp(transition[2]).CheckpointRoute.SIDEKICK) {
        TO_SIDEKICK = null;
        if (route === tmp(transition[2]).CheckpointRoute.SQUAD) {
          TO_SIDEKICK = obj2.TO_SQUAD;
        }
      }
    }
    tmp5(obj3);
  }
  transition = tmp4.transition;
  const items = [transition];
  const effect = obj.useEffect(() => {
    if (null != transition) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => closure_0((arg0) => {
        const obj = { transition: null };
        const merged = Object.assign(arg0);
        return obj;
      }), closure_1_6[tmp]);
      return () => clearTimeout(closure_0);
    }
  }, items);
  const hasShownSquad = tmp4.hasShownSquad;
  const tmp13 = route === tmp(transition[2]).CheckpointRoute.SIDEKICK || route === tmp(transition[2]).CheckpointRoute.SIDEKICK_LEAVE;
  if (tmp(transition[2]).CheckpointRoute.SQUAD_TRANSITION === route) {
    HIDDEN = hasShownSquad ? tmp20.SQUAD_EXIT : tmp20.HIDDEN;
  } else if (tmp(transition[2]).CheckpointRoute.SQUAD === route) {
    HIDDEN = obj.SQUAD;
  } else if (tmp(transition[2]).CheckpointRoute.SIDEKICK === route) {
    let SIDEKICK;
    if (transition === obj2.TO_SIDEKICK) {
      SIDEKICK = obj.SQUAD_TO_SIDEKICK;
    } else {
      SIDEKICK = obj.SIDEKICK;
    }
    HIDDEN = SIDEKICK;
  } else if (tmp(transition[2]).CheckpointRoute.SIDEKICK_LEAVE === route) {
    HIDDEN = stateFromStores2 ? tmp15.SIDEKICK : tmp15.SIDEKICK_EXIT;
  } else {
    HIDDEN = obj.HIDDEN;
  }
  const obj4 = { animationState: HIDDEN, isTransitioning: null != transition, showsSidekickPair: tmp22 };
  if (tmp13) {
    tmp22 = transition !== tmp21.TO_SIDEKICK;
  } else {
    tmp22 = transition === tmp21.TO_SQUAD;
  }
  return obj4;
}
