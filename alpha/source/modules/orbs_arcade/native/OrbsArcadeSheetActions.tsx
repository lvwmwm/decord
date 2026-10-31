// Module ID: 17031
// Function ID: 17032
// Name: OrbsArcadeSheetActions
// Dependencies: [19, 17010, 21, 5014, 1113, 5258, 17028, 504, 17017, 6767, 17032, 17035, 5634, 2]
// Exports: default

// Module 17031 (OrbsArcadeSheetActions)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import OrbsArcadeRewardUtils from "OrbsArcadeRewardUtils" /* 17017 */;
import OrbsArcadeClaimRewardButtonDefault from "OrbsArcadeClaimRewardButton" /* 17032 */;
import OrbsArcadePlayButtonDefault from "OrbsArcadePlayButton" /* 17035 */;
import react from "react" /* 19 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 17010 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ buttonGroup: { paddingVertical: 0 } });
const OrbsArcadeSheetPrimaryAction = { PLAY: "PLAY", CLAIM: "CLAIM" };
let obj2 = { CLOSE: "CLOSE", HOW_TO_PLAY: "HOW_TO_PLAY" };
let result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeSheetActions.tsx");

export default function OrbsArcadeSheetActions(game) {
  let direction;
  let intl;
  let intl2;
  let items2;
  let obj;
  let style;
  let tmp16;
  let tmp7;
  game = game.game;
  let PLAY = game.primaryAction;
  const sheetKey = game.sheetKey;
  if (PLAY === undefined) {
    PLAY = obj.PLAY;
  }
  const secondaryAction = game.secondaryAction;
  ({ direction, style } = game);
  const tmp2 = closure_6();
  if (obj2.CLOSE === secondaryAction) {
    obj2 = {
      text: intl2.string(game(1113).t.cpT0Cq),
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          return obj.hideActionSheet(sheetKey);
        }
    };
    intl2 = game(1113).intl;
    tmp7 = obj2;
  } else if (tmp3.HOW_TO_PLAY === secondaryAction) {
    let tmp4 = null;
    if (null != game.instructions) {
      tmp4 = null;
      if ("" !== game.instructions) {
        obj = {
          text: intl.string(game(1113).t["uz4M/z"]),
          onPress() {
                  const obj = game(dependencyMap[6]);
                  return obj.openOrbsArcadeHowToPlaySheet(game.id);
                }
        };
        intl = game(1113).intl;
        tmp4 = obj;
      }
    }
    tmp7 = tmp4;
  }
  const items = [OrbsArcadeStore];
  const items1 = [game.id];
  const obj3 = game(504);
  const stateFromStores = obj3.useStateFromStores(items, () => {
    const gameStateForGame = OrbsArcadeStore.getGameStateForGame(game.id);
    let result = null != gameStateForGame;
    if (result) {
      const obj = OrbsArcadeRewardUtils;
      result = obj.mustClaimOrbsArcadeRewardsToPlay(gameStateForGame);
    }
    return result;
  }, items1);
  const obj4 = { direction, size: "lg", style: items2, children: null };
  items2 = [tmp2.buttonGroup, style];
  const tmp10 = game;
  const tmp13 = closure_5;
  if (PLAY !== obj.CLAIM) {
    if (PLAY === obj.PLAY) {
      const items3 = [tmp16, ];
      let tmp19 = null;
      if (null != tmp7) {
        const obj5 = { grow: true, size: "lg", variant: "secondary", text: null, onPress: null };
        ({ text: obj6.text, onPress: obj6.onPress } = tmp7);
        tmp19 = closure_4(tmp10(5634).Button, obj5);
      }
      items3[1] = tmp19;
      obj4.children = items3;
      return tmp13(tmp14, obj4);
    }
    tmp16 = null;
    if (PLAY === obj.PLAY) {
      const obj10 = { game, size: "lg" };
      tmp16 = closure_4(OrbsArcadePlayButtonDefault, obj10);
    }
  }
  tmp16 = closure_4(OrbsArcadeClaimRewardButtonDefault, { game, size: "lg" });
};
export { OrbsArcadeSheetPrimaryAction };
export const OrbsArcadeSheetSecondaryAction = obj2;
