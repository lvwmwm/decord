// Module ID: 16386
// Function ID: 16387
// Name: OrbsArcadePlayButton
// Dependencies: [19, 16366, 21, 558, 576, 7251, 16387, 504, 16388, 9428, 587, 5242, 2]

// Module 16386 (OrbsArcadePlayButton)
import Fragment from "Fragment" /* 21 */;
import launchOrbsArcadeGameDefault from "launchOrbsArcadeGame" /* 16388 */;
import react from "react" /* 19 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 16366 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadePlayButton(game) {
  let analyticsLocations;
  let first;
  let isPaidPlay;
  let text;
  let tmp8;
  let tmp9;
  const obj = game(576);
  const cResult = obj.c(16);
  game = game.game;
  size = game.size;
  const tmp4 = analyticsLocations;
  analyticsLocations = analyticsLocations(7251)().analyticsLocations;
  ({ text, isPaidPlay } = analyticsLocations(16387)(game));
  analyticsLocations(16387)(game);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [OrbsArcadeStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== game.id) {
    const fn = function l() {
      return OrbsArcadeStore.isLaunchingGame(game.id);
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
  if (cResult[4] === analyticsLocations) {
    let tmp11;
    let tmp12;
    if (cResult[5] === game) {
      tmp11 = cResult[6];
    }
    if (cResult[7] !== isPaidPlay) {
      let tmp13;
      if (isPaidPlay) {
        const OrbsIcon = tmp(9428).OrbsIcon;
        tmp13 = <OrbsIcon size="sm" color={tmp4(587).colors.CONTROL_PRIMARY_TEXT_DEFAULT} />;
      }
      cResult[7] = isPaidPlay;
      cResult[8] = tmp13;
      tmp12 = tmp13;
    } else {
      tmp12 = cResult[8];
    }
    if (cResult[9] === tmp11) {
      if (cResult[10] === stateFromStores) {
        if (cResult[11] === size) {
          if (cResult[12] === tmp12) {
            if (cResult[13] === null == game.applicationId) {
              let tmp17;
              if (cResult[14] === text) {
                tmp17 = cResult[15];
              }
              return tmp17;
            }
          }
        }
      }
    }
    const tmp19 = jsx(game(5242).Button, { grow: true, size, variant: "primary", text, icon: tmp12, disabled: null == game.applicationId, loading: stateFromStores, onPress: tmp11 });
    cResult[9] = tmp11;
    cResult[10] = stateFromStores;
    cResult[11] = size;
    cResult[12] = tmp12;
    cResult[13] = null == game.applicationId;
    cResult[14] = text;
    cResult[15] = tmp19;
    tmp17 = tmp19;
  }
  const fn2 = function p() {
    return launchOrbsArcadeGameDefault(game, analyticsLocations);
  };
  cResult[4] = analyticsLocations;
  cResult[5] = game;
  cResult[6] = fn2;
  tmp11 = fn2;
}) : (function OrbsArcadePlayButton(game) {
  let isPaidPlay;
  let text;
  game = game.game;
  let analyticsLocations;
  size = game.size;
  const tmp = analyticsLocations;
  analyticsLocations = analyticsLocations(7251)().analyticsLocations;
  ({ text, isPaidPlay } = analyticsLocations(16387)(game));
  analyticsLocations(16387)(game);
  const items = [OrbsArcadeStore];
  const items1 = [game.id];
  const items2 = [game, analyticsLocations];
  const obj = game(504);
  const stateFromStores = obj.useStateFromStores(items, () => OrbsArcadeStore.isLaunchingGame(game.id), items1);
  const callback = react.useCallback(() => launchOrbsArcadeGameDefault(game, analyticsLocations), items2);
  let tmp7Result;
  const Button = game(5242).Button;
  const tmp4 = game;
  if (isPaidPlay) {
    const obj3 = { size: "sm", color: tmp(587).colors.CONTROL_PRIMARY_TEXT_DEFAULT };
    const OrbsIcon = tmp4(9428).OrbsIcon;
    tmp7Result = tmp7(OrbsIcon, obj3);
  }
  return <Button grow size={size} variant="primary" text={text} icon={tmp7Result} disabled={null == game.applicationId} loading={stateFromStores} onPress={callback} />;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadePlayButton.tsx");

export default tmp2;
