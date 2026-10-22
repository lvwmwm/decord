// Module ID: 16321
// Function ID: 16322
// Name: OrbsArcadeSheetActions
// Dependencies: [19, 21, 1128, 5196, 16318, 558, 576, 16314, 5230, 6682, 2]

// Module 16321 (OrbsArcadeSheetActions)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5196 */;
import OrbsArcadePlayButtonDefault from "OrbsArcadePlayButton" /* 16314 */;
import openOrbsArcadeSheets from "openOrbsArcadeSheets" /* 16318 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
const OrbsArcadeSheetSecondaryAction = { CLOSE: "CLOSE", HOW_TO_PLAY: "HOW_TO_PLAY" };
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadeSheetActions(arg0) {
  let direction;
  let game;
  let intl;
  let intl2;
  let items;
  let secondaryAction;
  let sheetKey;
  let style;
  let tmp7;
  const obj = game(576);
  const cResult = obj.c(13);
  ({ game, sheetKey, secondaryAction, direction, style } = arg0);
  if (cResult[0] === game) {
    if (cResult[1] === secondaryAction) {
      let tmp4;
      let tmp8;
      let tmp12;
      if (cResult[2] === sheetKey) {
        tmp4 = cResult[3];
      }
      if (cResult[4] !== game) {
        const obj2 = { game, size: "lg" };
        const tmp11 = closure_3(sheetKey(16314), obj2);
        cResult[4] = game;
        cResult[5] = tmp11;
        tmp8 = tmp11;
      } else {
        tmp8 = cResult[5];
      }
      if (cResult[6] !== tmp4) {
        let tmp13 = null;
        if (null != tmp4) {
          const obj3 = { grow: true, size: "lg", variant: "secondary", text: null, onPress: null };
          ({ text: obj5.text, onPress: obj5.onPress } = tmp4);
          tmp13 = closure_3(tmp(5230).Button, obj3);
        }
        cResult[6] = tmp4;
        cResult[7] = tmp13;
        tmp12 = tmp13;
      } else {
        tmp12 = cResult[7];
      }
      if (cResult[8] === direction) {
        if (cResult[9] === style) {
          if (cResult[10] === tmp8) {
            let tmp15;
            if (cResult[11] === tmp12) {
              tmp15 = cResult[12];
            }
            return tmp15;
          }
        }
      }
      const obj4 = { direction, size: "lg", style, children: items };
      items = [tmp8, tmp12];
      const tmp17 = closure_4(game(6682).ButtonGroup, obj4);
      cResult[8] = direction;
      cResult[9] = style;
      cResult[10] = tmp8;
      cResult[11] = tmp12;
      cResult[12] = tmp17;
      tmp15 = tmp17;
    }
  }
  if (obj.CLOSE === secondaryAction) {
    const obj6 = {
      text: intl2.string(game(1128).t.cpT0Cq),
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          return obj.hideActionSheet(importDefault);
        }
    };
    intl2 = tmp(1128).intl;
    tmp7 = obj6;
  } else if (tmp5.HOW_TO_PLAY === secondaryAction) {
    let tmp6 = null;
    if (null != game.instructions) {
      tmp6 = null;
      if ("" !== game.instructions) {
        const obj11 = {
          text: intl.string(game(1128).t["uz4M/z"]),
          onPress() {
                  const obj = openOrbsArcadeSheets;
                  return obj.openOrbsArcadeHowToPlaySheet(game.id);
                }
        };
        intl = tmp(1128).intl;
        tmp6 = obj11;
      }
    }
    tmp7 = tmp6;
  }
  cResult[0] = game;
  cResult[1] = secondaryAction;
  cResult[2] = sheetKey;
  cResult[3] = tmp7;
  tmp4 = tmp7;
}) : (function OrbsArcadeSheetActions(arg0) {
  let direction;
  let game;
  let intl;
  let intl2;
  let items;
  let obj;
  let secondaryAction;
  let style;
  let tmp5;
  ({ game, secondaryAction } = arg0);
  ({ sheetKey: importDefault, direction, style } = arg0);
  if (obj.CLOSE === secondaryAction) {
    const obj2 = {
      text: intl2.string(game(1128).t.cpT0Cq),
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          return obj.hideActionSheet(importDefault);
        }
    };
    intl2 = game(1128).intl;
    tmp5 = obj2;
  } else if (tmp.HOW_TO_PLAY === secondaryAction) {
    let tmp2 = null;
    if (null != game.instructions) {
      tmp2 = null;
      if ("" !== game.instructions) {
        obj = {
          text: intl.string(game(1128).t["uz4M/z"]),
          onPress() {
                  const obj = openOrbsArcadeSheets;
                  return obj.openOrbsArcadeHowToPlaySheet(game.id);
                }
        };
        intl = game(1128).intl;
        tmp2 = obj;
      }
    }
    tmp5 = tmp2;
  }
  const obj3 = { direction, size: "lg", style, children: items };
  const ButtonGroup = game(6682).ButtonGroup;
  items = [closure_3(OrbsArcadePlayButtonDefault, { game, size: "lg" }), ];
  let tmp11Result = null;
  const tmp11 = closure_3;
  const tmp8 = closure_4;
  const tmp9 = game;
  if (null != tmp5) {
    const obj7 = { grow: true, size: "lg", variant: "secondary", text: null, onPress: null };
    ({ text: obj4.text, onPress: obj4.onPress } = tmp5);
    tmp11Result = tmp11(tmp9(5230).Button, obj7);
  }
  items[1] = tmp11Result;
  return tmp8(ButtonGroup, obj3);
});
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeSheetActions.tsx");

export default tmp4;
export { OrbsArcadeSheetSecondaryAction };
