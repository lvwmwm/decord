// Module ID: 16455
// Function ID: 16456
// Name: OrbsArcadeRewardsSheet
// Dependencies: [19, 16429, 21, 5003, 587, 558, 576, 504, 1128, 7280, 16456, 16435, 16448, 6009, 7330, 2]

// Module 16455 (OrbsArcadeRewardsSheet)
import nativeDefault from "native" /* 587 */;
import OrbsArcadeSheetActionsDefault from "OrbsArcadeSheetActions" /* 16448 */;
import OrbsArcadeRewardChainDefault from "OrbsArcadeRewardChain" /* 16456 */;
import react from "react" /* 19 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 16429 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5003 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const OrbsArcadeRewardsSheet_str = "OrbsArcadeRewardsSheet";
let obj = { actionsContainer: obj2 };
obj2 = { paddingVertical: 0, paddingTop: nativeDefault.space.PX_24 };
let closure_7 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadeRewardsSheet(gameId) {
  let first;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp7;
  let tmp8;
  const obj = gameId(576);
  const cResult = obj.c(29);
  gameId = gameId.gameId;
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [OrbsArcadeStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== gameId) {
    class A {
      constructor() {
        return closure_3.getGame(gameId);
      }
    }
    const items1 = [gameId];
    cResult[1] = gameId;
    cResult[2] = A;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = A;
  } else {
    class A {
      constructor() {
        return closure_3.getGame(gameId);
      }
    }
    tmp8 = cResult[3];
  }
  const tmpResult = gameId(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class A {
      constructor() {
        return closure_3.getGame(gameId);
      }
    }
    const items2 = [OrbsArcadeStore];
    cResult[4] = items2;
    tmp10 = items2;
  } else {
    class A {
      constructor() {
        return closure_3.getGame(gameId);
      }
    }
  }
  if (cResult[5] !== gameId) {
    class A {
      constructor() {
        return closure_3.getGame(gameId);
      }
    }
    const items3 = [gameId];
    cResult[5] = gameId;
    cResult[6] = tmp13;
    cResult[7] = items3;
    tmp12 = items3;
    tmp11 = tmp13;
  } else {
    class A {
      constructor() {
        return closure_3.getGame(gameId);
      }
    }
    tmp12 = cResult[7];
  }
  const tmpResult4 = gameId(504);
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp10, tmp11, tmp12);
  if (null == stateFromStores) {
    class A {
      constructor() {
        return closure_3.getGame(gameId);
      }
    }
  } else {
    class A {
      constructor() {
        return closure_3.getGame(gameId);
      }
    }
    if (cResult[10] !== stateFromStores1) {
      class A {
        constructor() {
          return closure_3.getGame(gameId);
        }
      }
      if (stateFromStores1 != null) {
        class A {
          constructor() {
            return closure_3.getGame(gameId);
          }
        }
      }
      let formatToPlainStringResult;
      if (null != tmp17) {
        class A {
          constructor() {
            return closure_3.getGame(gameId);
          }
        }
        const obj2 = { score: stateFromStores1.enrollmentHighScore };
        formatToPlainStringResult = obj4.formatToPlainString(tmp(1128).t.bzMn46, obj2);
      }
      cResult[10] = stateFromStores1;
      cResult[11] = formatToPlainStringResult;
    } else {
      class A {
        constructor() {
          return closure_3.getGame(gameId);
        }
      }
    }
    if (cResult[12] === tmp15) {
      class A {
        constructor() {
          return closure_3.getGame(gameId);
        }
      }
      if (cResult[15] === stateFromStores) {
        class A {
          constructor() {
            return closure_3.getGame(gameId);
          }
        }
        const tmpResult5 = gameId(16435);
        const result = tmpResult5.hasOrbsArcadeUnclaimedRewards(stateFromStores1);
        const OrbsArcadeSheetPrimaryAction = tmp(16448).OrbsArcadeSheetPrimaryAction;
        const tmp27 = result ? OrbsArcadeSheetPrimaryAction.CLAIM : OrbsArcadeSheetPrimaryAction.PLAY;
        const tmpResult6 = gameId(16435);
        const result1 = tmpResult6.hasOrbsArcadeUnlockedRewards(stateFromStores1);
        const OrbsArcadeSheetSecondaryAction = tmp(16448).OrbsArcadeSheetSecondaryAction;
        const tmp29 = result1 ? OrbsArcadeSheetSecondaryAction.CLOSE : OrbsArcadeSheetSecondaryAction.HOW_TO_PLAY;
        if (cResult[18] === stateFromStores) {
          class A {
            constructor() {
              return closure_3.getGame(gameId);
            }
          }
        }
        const obj3 = { game: stateFromStores, sheetKey: OrbsArcadeRewardsSheet_str, primaryAction: tmp27, secondaryAction: tmp29, style: tmp4.actionsContainer };
        cResult[18] = stateFromStores;
        cResult[19] = tmp4.actionsContainer;
        cResult[20] = tmp27;
        cResult[21] = tmp29;
        cResult[22] = closure_4(OrbsArcadeSheetActionsDefault, obj3);
        const tmp34 = closure_4(OrbsArcadeSheetActionsDefault, obj3);
      }
      const obj5 = { game: stateFromStores, gameState: stateFromStores1 };
      cResult[15] = stateFromStores;
      cResult[16] = stateFromStores1;
      cResult[17] = closure_4(OrbsArcadeRewardChainDefault, obj5);
      const tmp25 = closure_4(OrbsArcadeRewardChainDefault, obj5);
    }
    const obj6 = { title: tmp15, subtitle: tmp16 };
    cResult[12] = tmp15;
    cResult[13] = tmp16;
    cResult[14] = closure_4(gameId(7280).BottomSheetTitleHeader, obj6);
    const tmp21 = closure_4(gameId(7280).BottomSheetTitleHeader, obj6);
  }
}) : (function OrbsArcadeRewardsSheet(gameId) {
  let OrbsArcadeSheetPrimaryAction;
  let OrbsArcadeSheetSecondaryAction;
  let Stack;
  let formatToPlainStringResult;
  let obj4;
  let obj9;
  let result;
  let result1;
  gameId = gameId.gameId;
  const items = [OrbsArcadeStore];
  const items1 = [gameId];
  const tmp = closure_7();
  const obj = gameId(504);
  const stateFromStores = obj.useStateFromStores(items, () => OrbsArcadeStore.getGame(gameId), items1);
  const items2 = [OrbsArcadeStore];
  const items3 = [gameId];
  const obj2 = gameId(504);
  const stateFromStores1 = obj2.useStateFromStores(items2, () => OrbsArcadeStore.getGameStateForGame(gameId), items3);
  let tmp7Result = null;
  if (null != stateFromStores) {
    const ActionSheet = tmp2(7330).ActionSheet;
    const BottomSheetTitleHeader = tmp2(7280).BottomSheetTitleHeader;
    const intl = tmp2(1128).intl;
    const formatToPlainString = intl.formatToPlainString;
    let str = stateFromStores.name;
    const v3CJfUa = tmp2(1128).t["3CJfUa"];
    if (str == null) {
      str = "";
    }
    const obj3 = { title: formatToPlainString(v3CJfUa, obj4), subtitle: formatToPlainStringResult };
    let currentRun;
    obj4 = { gameName: str };
    if (stateFromStores1 != null) {
      currentRun = stateFromStores1.currentRun;
    }
    formatToPlainStringResult = undefined;
    if (null != currentRun) {
      const intl2 = tmp2(1128).intl;
      const obj5 = { score: stateFromStores1.enrollmentHighScore };
      formatToPlainStringResult = intl2.formatToPlainString(tmp2(1128).t.bzMn46, obj5);
    }
    const obj6 = { header: closure_4(BottomSheetTitleHeader, obj3), children: closure_5(Stack, obj9) };
    Stack = tmp2(6009).Stack;
    const obj7 = { game: stateFromStores, gameState: stateFromStores1 };
    const items4 = [closure_4(OrbsArcadeRewardChainDefault, obj7), ];
    const obj8 = { game: stateFromStores, sheetKey: OrbsArcadeRewardsSheet_str, primaryAction: result ? OrbsArcadeSheetPrimaryAction.CLAIM : OrbsArcadeSheetPrimaryAction.PLAY, secondaryAction: result1 ? OrbsArcadeSheetSecondaryAction.CLOSE : OrbsArcadeSheetSecondaryAction.HOW_TO_PLAY, style: tmp.actionsContainer };
    const tmp13 = OrbsArcadeSheetActionsDefault;
    const tmp2Result = gameId(16435);
    result = tmp2Result.hasOrbsArcadeUnclaimedRewards(stateFromStores1);
    OrbsArcadeSheetPrimaryAction = tmp2(16448).OrbsArcadeSheetPrimaryAction;
    const tmp2Result2 = gameId(16435);
    result1 = tmp2Result2.hasOrbsArcadeUnlockedRewards(stateFromStores1);
    OrbsArcadeSheetSecondaryAction = tmp2(16448).OrbsArcadeSheetSecondaryAction;
    obj9 = { spacing: 0, children: items4 };
    items4[1] = closure_4(tmp13, obj8);
    tmp7Result = tmp7(ActionSheet, obj6);
  }
  return tmp7Result;
});
let result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeRewardsSheet.tsx");

export default tmp4;
