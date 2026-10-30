// Module ID: 16978
// Function ID: 16979
// Name: OrbsArcadePlayButton
// Dependencies: [19, 16954, 21, 7320, 16979, 504, 16980, 16961, 16975, 5629, 9510, 575, 2]
// Exports: default

// Module 16978 (OrbsArcadePlayButton)
import Fragment from "Fragment" /* 21 */;
import launchOrbsArcadeGameDefault from "launchOrbsArcadeGame" /* 16980 */;
import react from "react" /* 19 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 16954 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let size = size_mod;
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadePlayButton.tsx");

export default function OrbsArcadePlayButton(game) {
  let isPaidPlay;
  let text;
  let tmp8Result;
  game = game.game;
  size = game.size;
  let analyticsLocations;
  analyticsLocations = analyticsLocations(7320)().analyticsLocations;
  ({ text, isPaidPlay } = analyticsLocations(16979)(game));
  analyticsLocations(16979)(game);
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
    const tmp4Result = game(16961);
    if (tmp4Result.mustClaimOrbsArcadeRewardsToPlay(stateFromStores)) {
      tmp8Result2 = jsx(tmp(16975), { game, size });
    }
    return tmp8Result2;
  }
  const obj4 = { grow: true, size, variant: "primary", text, icon: tmp8Result, disabled: null == game.applicationId, loading: stateFromStores1, onPress: callback };
  tmp8Result = undefined;
  const Button = tmp4(5629).Button;
  if (isPaidPlay) {
    const obj5 = { size: "sm", color: analyticsLocations(575).colors.CONTROL_PRIMARY_TEXT_DEFAULT };
    const OrbsIcon = tmp4(9510).OrbsIcon;
    tmp8Result = tmp8(OrbsIcon, obj5);
  }
  tmp8Result2 = tmp8(Button, obj4);
};
