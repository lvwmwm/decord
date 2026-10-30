// Module ID: 16974
// Function ID: 16975
// Name: OrbsArcadeSheetActions
// Dependencies: [19, 21, 1114, 5253, 16971, 6761, 16975, 16978, 5629, 2]
// Exports: default

// Module 16974 (OrbsArcadeSheetActions)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import openOrbsArcadeSheets from "openOrbsArcadeSheets" /* 16971 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
const OrbsArcadeSheetPrimaryAction = { PLAY: "PLAY", CLAIM: "CLAIM" };
let obj2 = { CLOSE: "CLOSE", HOW_TO_PLAY: "HOW_TO_PLAY" };
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeSheetActions.tsx");

export default function OrbsArcadeSheetActions(sheetKey) {
  let direction;
  let game;
  let intl;
  let intl2;
  let items;
  let obj;
  let primaryAction;
  let style;
  let tmp13;
  let tmp6;
  ({ game, primaryAction } = sheetKey);
  sheetKey = sheetKey.sheetKey;
  if (primaryAction === undefined) {
    primaryAction = obj.PLAY;
  }
  const secondaryAction = sheetKey.secondaryAction;
  ({ direction, style } = sheetKey);
  if (obj2.CLOSE === secondaryAction) {
    obj2 = {
      text: intl2.string(game(1114).t.cpT0Cq),
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          return obj.hideActionSheet(sheetKey);
        }
    };
    intl2 = game(1114).intl;
    tmp6 = obj2;
  } else if (tmp2.HOW_TO_PLAY === secondaryAction) {
    let tmp3 = null;
    if (null != game.instructions) {
      tmp3 = null;
      if ("" !== game.instructions) {
        obj = {
          text: intl.string(game(1114).t["uz4M/z"]),
          onPress() {
                  const obj = openOrbsArcadeSheets;
                  return obj.openOrbsArcadeHowToPlaySheet(game.id);
                }
        };
        intl = game(1114).intl;
        tmp3 = obj;
      }
    }
    tmp6 = tmp3;
  }
  const obj3 = { direction, size: "lg", style, children: items };
  const ButtonGroup = game(6761).ButtonGroup;
  const tmp10 = game;
  const tmp9 = closure_4;
  if (primaryAction === obj.CLAIM) {
    const obj4 = { game, size: "lg" };
    tmp13 = closure_3(sheetKey(16975), obj4);
  } else {
    tmp13 = null;
    if (primaryAction === tmp12.PLAY) {
      const obj5 = { game, size: "lg" };
      tmp13 = closure_3(sheetKey(16978), obj5);
    }
  }
  items = [tmp13, ];
  let tmp18 = null;
  if (null != tmp6) {
    const obj11 = { grow: true, size: "lg", variant: "secondary", text: null, onPress: null };
    ({ text: obj6.text, onPress: obj6.onPress } = tmp6);
    tmp18 = closure_3(tmp10(5629).Button, obj11);
  }
  items[1] = tmp18;
  return tmp9(ButtonGroup, obj3);
};
export { OrbsArcadeSheetPrimaryAction };
export const OrbsArcadeSheetSecondaryAction = obj2;
