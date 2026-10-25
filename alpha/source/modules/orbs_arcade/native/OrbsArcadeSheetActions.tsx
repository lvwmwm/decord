// Module ID: 16414
// Function ID: 16415
// Name: OrbsArcadeSheetActions
// Dependencies: [19, 21, 1128, 5210, 16411, 558, 576, 16415, 16418, 5244, 6696, 2]

// Module 16414 (OrbsArcadeSheetActions)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import openOrbsArcadeSheets from "openOrbsArcadeSheets" /* 16411 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
const OrbsArcadeSheetPrimaryAction = { PLAY: "PLAY", CLAIM: "CLAIM" };
let obj2 = { CLOSE: "CLOSE", HOW_TO_PLAY: "HOW_TO_PLAY" };
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadeSheetActions(arg0) {
  let direction;
  let game;
  let intl;
  let intl2;
  let items;
  let primaryAction;
  let secondaryAction;
  let sheetKey;
  let style;
  let tmp8;
  const obj = game(576);
  const cResult = obj.c(14);
  ({ game, sheetKey, primaryAction, secondaryAction, direction, style } = arg0);
  if (undefined === primaryAction) {
    primaryAction = obj.PLAY;
  }
  if (cResult[0] === game) {
    if (cResult[1] === secondaryAction) {
      let tmp5;
      let tmp11;
      if (cResult[2] === sheetKey) {
        tmp5 = cResult[3];
      }
      if (cResult[4] === game) {
        let tmp9;
        let tmp16;
        if (cResult[5] === primaryAction) {
          tmp9 = cResult[6];
        }
        if (cResult[7] !== tmp5) {
          let tmp17 = null;
          if (null != tmp5) {
            obj2 = { grow: true, size: "lg", variant: "secondary", text: null, onPress: null };
            ({ text: obj6.text, onPress: obj6.onPress } = tmp5);
            tmp17 = closure_3(tmp(5244).Button, obj2);
          }
          cResult[7] = tmp5;
          cResult[8] = tmp17;
          tmp16 = tmp17;
        } else {
          tmp16 = cResult[8];
        }
        if (cResult[9] === direction) {
          if (cResult[10] === style) {
            if (cResult[11] === tmp9) {
              let tmp19;
              if (cResult[12] === tmp16) {
                tmp19 = cResult[13];
              }
              return tmp19;
            }
          }
        }
        const obj3 = { direction, size: "lg", style, children: items };
        items = [tmp9, tmp16];
        const tmp21 = closure_4(game(6696).ButtonGroup, obj3);
        cResult[9] = direction;
        cResult[10] = style;
        cResult[11] = tmp9;
        cResult[12] = tmp16;
        cResult[13] = tmp21;
        tmp19 = tmp21;
      }
      if (primaryAction === obj.CLAIM) {
        const obj4 = { game, size: "lg" };
        tmp11 = closure_3(sheetKey(16415), obj4);
      } else {
        tmp11 = null;
        if (primaryAction === tmp10.PLAY) {
          const obj5 = { game, size: "lg" };
          tmp11 = closure_3(sheetKey(16418), obj5);
        }
      }
      cResult[4] = game;
      cResult[5] = primaryAction;
      cResult[6] = tmp11;
      tmp9 = tmp11;
    }
  }
  if (obj2.CLOSE === secondaryAction) {
    const obj7 = {
      text: intl2.string(game(1128).t.cpT0Cq),
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          return obj.hideActionSheet(sheetKey);
        }
    };
    intl2 = tmp(1128).intl;
    tmp8 = obj7;
  } else if (tmp6.HOW_TO_PLAY === secondaryAction) {
    let tmp7 = null;
    if (null != game.instructions) {
      tmp7 = null;
      if ("" !== game.instructions) {
        const obj13 = {
          text: intl.string(game(1128).t["uz4M/z"]),
          onPress() {
                  const obj = openOrbsArcadeSheets;
                  return obj.openOrbsArcadeHowToPlaySheet(game.id);
                }
        };
        intl = tmp(1128).intl;
        tmp7 = obj13;
      }
    }
    tmp8 = tmp7;
  }
  cResult[0] = game;
  cResult[1] = secondaryAction;
  cResult[2] = sheetKey;
  cResult[3] = tmp8;
  tmp5 = tmp8;
}) : (function OrbsArcadeSheetActions(sheetKey) {
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
      text: intl2.string(game(1128).t.cpT0Cq),
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          return obj.hideActionSheet(sheetKey);
        }
    };
    intl2 = game(1128).intl;
    tmp6 = obj2;
  } else if (tmp2.HOW_TO_PLAY === secondaryAction) {
    let tmp3 = null;
    if (null != game.instructions) {
      tmp3 = null;
      if ("" !== game.instructions) {
        obj = {
          text: intl.string(game(1128).t["uz4M/z"]),
          onPress() {
                  const obj = openOrbsArcadeSheets;
                  return obj.openOrbsArcadeHowToPlaySheet(game.id);
                }
        };
        intl = game(1128).intl;
        tmp3 = obj;
      }
    }
    tmp6 = tmp3;
  }
  const obj3 = { direction, size: "lg", style, children: items };
  const ButtonGroup = game(6696).ButtonGroup;
  const tmp10 = game;
  const tmp9 = closure_4;
  if (primaryAction === obj.CLAIM) {
    const obj4 = { game, size: "lg" };
    tmp13 = closure_3(sheetKey(16415), obj4);
  } else {
    tmp13 = null;
    if (primaryAction === tmp12.PLAY) {
      const obj5 = { game, size: "lg" };
      tmp13 = closure_3(sheetKey(16418), obj5);
    }
  }
  items = [tmp13, ];
  let tmp18 = null;
  if (null != tmp6) {
    const obj11 = { grow: true, size: "lg", variant: "secondary", text: null, onPress: null };
    ({ text: obj6.text, onPress: obj6.onPress } = tmp6);
    tmp18 = closure_3(tmp10(5244).Button, obj11);
  }
  items[1] = tmp18;
  return tmp9(ButtonGroup, obj3);
});
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeSheetActions.tsx");

export default tmp4;
export { OrbsArcadeSheetPrimaryAction };
export const OrbsArcadeSheetSecondaryAction = obj2;
