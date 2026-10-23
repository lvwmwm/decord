// Module ID: 16389
// Function ID: 16390
// Name: OrbsArcadeRewardsSheet
// Dependencies: [19, 16366, 21, 4969, 587, 558, 576, 504, 1128, 7246, 16390, 16372, 16385, 5975, 7296, 2]

// Module 16389 (OrbsArcadeRewardsSheet)
import nativeDefault from "native" /* 587 */;
import OrbsArcadeSheetActionsDefault from "OrbsArcadeSheetActions" /* 16385 */;
import OrbsArcadeRewardChainDefault from "OrbsArcadeRewardChain" /* 16390 */;
import react from "react" /* 19 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 16366 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4969 */;
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
  let items4;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp7;
  let tmp8;
  const obj = gameId(576);
  const cResult = obj.c(28);
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
    const fn = function h() {
      return OrbsArcadeStore.getGame(gameId);
    };
    const items1 = [gameId];
    cResult[1] = gameId;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = gameId(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [OrbsArcadeStore];
    cResult[4] = items2;
    tmp10 = items2;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] !== gameId) {
    const fn2 = function y() {
      return OrbsArcadeStore.getGameStateForGame(gameId);
    };
    const items3 = [gameId];
    cResult[5] = gameId;
    cResult[6] = fn2;
    cResult[7] = items3;
    tmp13 = items3;
    tmp12 = fn2;
  } else {
    tmp12 = cResult[6];
    tmp13 = cResult[7];
  }
  const tmpResult3 = gameId(504);
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp10, tmp12, tmp13);
  if (null == stateFromStores) {
    return null;
  } else {
    let tmp15;
    let tmp18;
    if (cResult[8] !== stateFromStores.name) {
      const intl = tmp(1128).intl;
      const formatToPlainString = intl.formatToPlainString;
      let str = stateFromStores.name;
      const v3CJfUa = tmp(1128).t["3CJfUa"];
      if (str == null) {
        str = "";
      }
      const obj2 = { gameName: str };
      const formatToPlainStringResult = formatToPlainString(v3CJfUa, obj2);
      cResult[8] = stateFromStores.name;
      cResult[9] = formatToPlainStringResult;
      tmp15 = formatToPlainStringResult;
    } else {
      tmp15 = cResult[9];
    }
    if (cResult[10] !== stateFromStores1) {
      let enrolledAt;
      if (stateFromStores1 != null) {
        enrolledAt = stateFromStores1.enrolledAt;
      }
      let formatToPlainStringResult1;
      if (null != enrolledAt) {
        const intl2 = tmp(1128).intl;
        const obj3 = { score: stateFromStores1.enrollmentHighScore };
        formatToPlainStringResult1 = intl2.formatToPlainString(tmp(1128).t.bzMn46, obj3);
      }
      cResult[10] = stateFromStores1;
      cResult[11] = formatToPlainStringResult1;
      tmp18 = formatToPlainStringResult1;
    } else {
      tmp18 = cResult[11];
    }
    if (cResult[12] === tmp15) {
      let tmp21;
      if (cResult[13] === tmp18) {
        tmp21 = cResult[14];
      }
      if (cResult[15] === stateFromStores) {
        let tmp24;
        if (cResult[16] === stateFromStores1) {
          tmp24 = cResult[17];
        }
        const tmpResult4 = gameId(16372);
        const result = tmpResult4.hasOrbsArcadeUnlockedRewards(stateFromStores1);
        const OrbsArcadeSheetSecondaryAction = tmp(16385).OrbsArcadeSheetSecondaryAction;
        const tmp29 = result ? OrbsArcadeSheetSecondaryAction.CLOSE : OrbsArcadeSheetSecondaryAction.HOW_TO_PLAY;
        if (cResult[18] === stateFromStores) {
          if (cResult[19] === tmp4.actionsContainer) {
            let tmp30;
            if (cResult[20] === tmp29) {
              tmp30 = cResult[21];
            }
            if (cResult[22] === tmp24) {
              let tmp35;
              if (cResult[23] === tmp30) {
                tmp35 = cResult[24];
              }
              if (cResult[25] === tmp35) {
                let tmp38;
                if (cResult[26] === tmp21) {
                  tmp38 = cResult[27];
                }
                return tmp38;
              }
              const obj4 = { header: tmp21, children: tmp35 };
              const tmp40 = closure_4(gameId(7296).ActionSheet, obj4);
              cResult[25] = tmp35;
              cResult[26] = tmp21;
              cResult[27] = tmp40;
              tmp38 = tmp40;
            }
            const obj5 = { spacing: 0, children: items4 };
            items4 = [tmp24, tmp30];
            const tmp37 = closure_5(gameId(5975).Stack, obj5);
            cResult[22] = tmp24;
            cResult[23] = tmp30;
            cResult[24] = tmp37;
            tmp35 = tmp37;
          }
        }
        const obj6 = { game: stateFromStores, sheetKey: OrbsArcadeRewardsSheet_str, secondaryAction: tmp29, style: tmp4.actionsContainer };
        const tmp34 = closure_4(OrbsArcadeSheetActionsDefault, obj6);
        cResult[18] = stateFromStores;
        cResult[19] = tmp4.actionsContainer;
        cResult[20] = tmp29;
        cResult[21] = tmp34;
        tmp30 = tmp34;
      }
      const obj7 = { game: stateFromStores, gameState: stateFromStores1 };
      const tmp27 = closure_4(OrbsArcadeRewardChainDefault, obj7);
      cResult[15] = stateFromStores;
      cResult[16] = stateFromStores1;
      cResult[17] = tmp27;
      tmp24 = tmp27;
    }
    const obj8 = { title: tmp15, subtitle: tmp18 };
    const tmp23 = closure_4(gameId(7246).BottomSheetTitleHeader, obj8);
    cResult[12] = tmp15;
    cResult[13] = tmp18;
    cResult[14] = tmp23;
    tmp21 = tmp23;
  }
}) : (function OrbsArcadeRewardsSheet(gameId) {
  let OrbsArcadeSheetSecondaryAction;
  let Stack;
  let formatToPlainStringResult;
  let obj4;
  let obj9;
  let result;
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
    const ActionSheet = tmp2(7296).ActionSheet;
    const BottomSheetTitleHeader = tmp2(7246).BottomSheetTitleHeader;
    const intl = tmp2(1128).intl;
    const formatToPlainString = intl.formatToPlainString;
    let str = stateFromStores.name;
    const v3CJfUa = tmp2(1128).t["3CJfUa"];
    if (str == null) {
      str = "";
    }
    const obj3 = { title: formatToPlainString(v3CJfUa, obj4), subtitle: formatToPlainStringResult };
    let enrolledAt;
    obj4 = { gameName: str };
    if (stateFromStores1 != null) {
      enrolledAt = stateFromStores1.enrolledAt;
    }
    formatToPlainStringResult = undefined;
    if (null != enrolledAt) {
      const intl2 = tmp2(1128).intl;
      const obj5 = { score: stateFromStores1.enrollmentHighScore };
      formatToPlainStringResult = intl2.formatToPlainString(tmp2(1128).t.bzMn46, obj5);
    }
    const obj6 = { header: closure_4(BottomSheetTitleHeader, obj3), children: closure_5(Stack, obj9) };
    Stack = tmp2(5975).Stack;
    const obj7 = { game: stateFromStores, gameState: stateFromStores1 };
    const items4 = [closure_4(OrbsArcadeRewardChainDefault, obj7), ];
    const obj8 = { game: stateFromStores, sheetKey: OrbsArcadeRewardsSheet_str, secondaryAction: result ? OrbsArcadeSheetSecondaryAction.CLOSE : OrbsArcadeSheetSecondaryAction.HOW_TO_PLAY, style: tmp.actionsContainer };
    const tmp13 = OrbsArcadeSheetActionsDefault;
    const tmp2Result = gameId(16372);
    result = tmp2Result.hasOrbsArcadeUnlockedRewards(stateFromStores1);
    OrbsArcadeSheetSecondaryAction = tmp2(16385).OrbsArcadeSheetSecondaryAction;
    obj9 = { spacing: 0, children: items4 };
    items4[1] = closure_4(tmp13, obj8);
    tmp7Result = tmp7(ActionSheet, obj6);
  }
  return tmp7Result;
});
let result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeRewardsSheet.tsx");

export default tmp4;
