// Module ID: 16457
// Function ID: 16458
// Name: OrbsArcadePlayButton
// Dependencies: [19, 16434, 21, 558, 576, 7255, 16458, 504, 16459, 16440, 16454, 9428, 587, 5245, 2]

// Module 16457 (OrbsArcadePlayButton)
import Fragment from "Fragment" /* 21 */;
import launchOrbsArcadeGameDefault from "launchOrbsArcadeGame" /* 16459 */;
import react from "react" /* 19 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 16434 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadePlayButton(game) {
  let analyticsLocations;
  let first;
  let isPaidPlay;
  let text;
  let tmp11;
  let tmp13;
  let tmp14;
  let tmp8;
  let tmp9;
  const obj = game(576);
  const cResult = obj.c(23);
  game = game.game;
  size = game.size;
  analyticsLocations = analyticsLocations(7255)().analyticsLocations;
  ({ text, isPaidPlay } = analyticsLocations(16458)(game));
  analyticsLocations(16458)(game);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [OrbsArcadeStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== game.id) {
    const fn = function l() {
      return OrbsArcadeStore.getGameStateForGame(game.id);
    };
    const items1 = [game.id];
    cResult[1] = game.id;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp9 = items1;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = game(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp8, tmp9);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [OrbsArcadeStore];
    cResult[4] = items2;
    tmp11 = items2;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] !== game.id) {
    class T {
      constructor() {
        return OrbsArcadeStore.isLaunchingGame(game.id);
      }
    }
    const items3 = [game.id];
    cResult[5] = game.id;
    cResult[6] = T;
    cResult[7] = items3;
    tmp14 = items3;
    tmp13 = T;
  } else {
    class T {
      constructor() {
        return OrbsArcadeStore.isLaunchingGame(game.id);
      }
    }
    tmp14 = cResult[7];
  }
  const tmpResult2 = game(504);
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp11, tmp13, tmp14);
  if (cResult[8] === analyticsLocations) {
    class T {
      constructor() {
        return OrbsArcadeStore.isLaunchingGame(game.id);
      }
    }
    if (null != stateFromStores) {
      class T {
        constructor() {
          return OrbsArcadeStore.isLaunchingGame(game.id);
        }
      }
      if (obj4.mustClaimOrbsArcadeRewardsToPlay(stateFromStores)) {
        class T {
          constructor() {
            return OrbsArcadeStore.isLaunchingGame(game.id);
          }
        }
        cResult[11] = game;
        cResult[12] = size;
        cResult[13] = jsx(analyticsLocations(16454), { game, size });
        const tmp26 = jsx(analyticsLocations(16454), { game, size });
      }
    }
    if (cResult[14] !== isPaidPlay) {
      let tmp19;
      class T {
        constructor() {
          return OrbsArcadeStore.isLaunchingGame(game.id);
        }
      }
      if (isPaidPlay) {
        class T {
          constructor() {
            return OrbsArcadeStore.isLaunchingGame(game.id);
          }
        }
        const OrbsIcon = tmp(9428).OrbsIcon;
        tmp19 = <OrbsIcon size="sm" color={analyticsLocations(587).colors.CONTROL_PRIMARY_TEXT_DEFAULT} />;
      }
      cResult[14] = isPaidPlay;
      cResult[15] = tmp19;
    } else {
      class T {
        constructor() {
          return OrbsArcadeStore.isLaunchingGame(game.id);
        }
      }
    }
    if (cResult[16] === tmp16) {
      class T {
        constructor() {
          return OrbsArcadeStore.isLaunchingGame(game.id);
        }
      }
    }
    cResult[16] = tmp16;
    cResult[17] = stateFromStores1;
    cResult[18] = size;
    cResult[19] = tmp18;
    cResult[20] = null == game.applicationId;
    cResult[21] = text;
    cResult[22] = jsx(game(5245).Button, { grow: true, size, variant: "primary", text, icon: tmp18, disabled: null == game.applicationId, loading: stateFromStores1, onPress: tmp16 });
    const tmp23 = jsx(game(5245).Button, { grow: true, size, variant: "primary", text, icon: tmp18, disabled: null == game.applicationId, loading: stateFromStores1, onPress: tmp16 });
  }
  class A {
    constructor() {
      return launchOrbsArcadeGameDefault(game, analyticsLocations);
    }
  }
  cResult[8] = analyticsLocations;
  cResult[9] = game;
  cResult[10] = A;
}) : (function OrbsArcadePlayButton(game) {
  let isPaidPlay;
  let text;
  let tmp8Result;
  game = game.game;
  size = game.size;
  let analyticsLocations;
  analyticsLocations = analyticsLocations(7255)().analyticsLocations;
  ({ text, isPaidPlay } = analyticsLocations(16458)(game));
  analyticsLocations(16458)(game);
  const items = [OrbsArcadeStore];
  const items1 = [game.id];
  const obj = game(504);
  const stateFromStores = obj.useStateFromStores(items, () => OrbsArcadeStore.getGameStateForGame(game.id), items1);
  const items2 = [OrbsArcadeStore];
  const items3 = [game.id];
  const items4 = [game, analyticsLocations];
  const obj2 = game(504);
  const stateFromStores1 = obj2.useStateFromStores(items2, () => OrbsArcadeStore.isLaunchingGame(game.id), items3);
  const callback = react.useCallback(() => launchOrbsArcadeGameDefault(game, analyticsLocations), items4);
  if (null != stateFromStores) {
    let tmp8Result2;
    const tmp4Result = game(16440);
    if (tmp4Result.mustClaimOrbsArcadeRewardsToPlay(stateFromStores)) {
      tmp8Result2 = jsx(tmp(16454), { game, size });
    }
    return tmp8Result2;
  }
  const obj4 = { grow: true, size, variant: "primary", text, icon: tmp8Result, disabled: null == game.applicationId, loading: stateFromStores1, onPress: callback };
  tmp8Result = undefined;
  const Button = tmp4(5245).Button;
  if (isPaidPlay) {
    const obj5 = { size: "sm", color: analyticsLocations(587).colors.CONTROL_PRIMARY_TEXT_DEFAULT };
    const OrbsIcon = tmp4(9428).OrbsIcon;
    tmp8Result = tmp8(OrbsIcon, obj5);
  }
  tmp8Result2 = tmp8(Button, obj4);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadePlayButton.tsx");

export default tmp2;
