// Module ID: 12975
// Function ID: 12976
// Name: useFriendsAnimationState
// Dependencies: [32, 19, 558, 576, 6361, 2]

// Module 12975 (useFriendsAnimationState)
import react2 from "react" /* 576 */;
import CheckpointNavigation from "CheckpointNavigation" /* 6361 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const FriendsAnimationState = { START: 0, [0]: "START", INTRO: 1, [1]: "INTRO", TRANSITION: 2, [2]: "TRANSITION", BEST: 3, [3]: "BEST", LEAVE: 4, [4]: "LEAVE", END: 5, [5]: "END" };
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFriendsAnimationState(route, arg1) {
  let first;
  let tmp10;
  let tmp11;
  let tmp12;
  const tmp = require;
  const tmp2 = dependencyMap;
  let obj = react2;
  const cResult = obj.c(6);
  const tmp4 = route === CheckpointNavigation.CheckpointRoute.SQUAD;
  if (cResult[0] === route) {
    let tmp5;
    let tmp15;
    let tmp14;
    if (cResult[1] === tmp4) {
      tmp5 = cResult[2];
    }
    const obj3 = react;
    [first, tmp10] = react.useState(tmp5);
    let closure_1 = tmp10;
    if (first.route !== route) {
      let obj2 = { route, hasShownSquad: tmp11, isTransitioning: tmp12 };
      tmp11 = first.hasShownSquad || route === CheckpointNavigation.CheckpointRoute.SQUAD;
      tmp12 = !arg1 && first.route === CheckpointNavigation.CheckpointRoute.SQUAD && route === CheckpointNavigation.CheckpointRoute.SIDEKICK;
      tmp10(obj2);
    }
    if (cResult[3] !== first.isTransitioning) {
      const fn = function h() {
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
      };
      const items = [first.isTransitioning];
      cResult[3] = first.isTransitioning;
      cResult[4] = fn;
      cResult[5] = items;
      tmp15 = items;
      tmp14 = fn;
    } else {
      tmp14 = cResult[4];
      tmp15 = cResult[5];
    }
    const effect = obj3.useEffect(tmp14, tmp15);
    if (CheckpointNavigation.CheckpointRoute.SQUAD_TRANSITION === route) {
      return first.hasShownSquad ? obj.END : obj.START;
    } else if (CheckpointNavigation.CheckpointRoute.SQUAD === route) {
      return obj.INTRO;
    } else if (CheckpointNavigation.CheckpointRoute.SIDEKICK === route) {
      return first.isTransitioning ? obj.TRANSITION : obj.BEST;
    } else if (CheckpointNavigation.CheckpointRoute.SIDEKICK_LEAVE === route) {
      return arg1 ? obj.BEST : obj.LEAVE;
    } else {
      return obj.START;
    }
  }
  const obj4 = { route, hasShownSquad: tmp4, isTransitioning: false };
  cResult[0] = route;
  cResult[1] = tmp4;
  cResult[2] = obj4;
  tmp5 = obj4;
}) : (function useFriendsAnimationState(route, arg1) {
  let tmp7;
  let obj = react;
  const obj2 = { route, hasShownSquad: route === CheckpointNavigation.CheckpointRoute.SQUAD, isTransitioning: false };
  const tmp3 = _slicedToArray(react.useState(obj2), 2);
  let first = tmp3[0];
  let closure_1 = tmp5;
  if (first.route !== route) {
    const obj3 = { route, hasShownSquad: first.hasShownSquad || route === CheckpointNavigation.CheckpointRoute.SQUAD, isTransitioning: tmp7 };
    tmp7 = !arg1;
    first.hasShownSquad || route === CheckpointNavigation.CheckpointRoute.SQUAD;
    if (tmp7) {
      tmp7 = first.route === tmp(6361).CheckpointRoute.SQUAD;
    }
    if (tmp7) {
      tmp7 = route === tmp(6361).CheckpointRoute.SIDEKICK;
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
    return arg1 ? obj.BEST : obj.LEAVE;
  } else {
    return obj.START;
  }
});
let result = size.fileFinishedImporting("modules/checkpoint/hooks/useFriendsAnimationState.tsx");

export { FriendsAnimationState };
export const useFriendsAnimationState = tmp2;
