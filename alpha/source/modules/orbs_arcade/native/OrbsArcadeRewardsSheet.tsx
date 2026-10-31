// Module ID: 17039
// Function ID: 17040
// Name: OrbsArcadeRewardsSheet
// Dependencies: [19, 17010, 21, 5014, 575, 504, 7366, 7321, 1113, 6027, 17040, 17031, 17017, 2]
// Exports: default

// Module 17039 (OrbsArcadeRewardsSheet)
import nativeDefault from "native" /* 575 */;
import OrbsArcadeSheetActionsDefault from "OrbsArcadeSheetActions" /* 17031 */;
import OrbsArcadeRewardChainDefault from "OrbsArcadeRewardChain" /* 17040 */;
import react from "react" /* 19 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 17010 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { actionsContainer: obj2 };
obj2 = { paddingTop: nativeDefault.space.PX_24 };
let closure_6 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeRewardsSheet.tsx");

export default function OrbsArcadeRewardsSheet(gameId) {
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
  const tmp = closure_6();
  const obj = gameId(504);
  const stateFromStores = obj.useStateFromStores(items, () => OrbsArcadeStore.getGame(gameId), items1);
  const items2 = [OrbsArcadeStore];
  const items3 = [gameId];
  const obj2 = gameId(504);
  const stateFromStores1 = obj2.useStateFromStores(items2, () => OrbsArcadeStore.getGameStateForGame(gameId), items3);
  let tmp7Result = null;
  if (null != stateFromStores) {
    const ActionSheet = tmp2(7366).ActionSheet;
    const BottomSheetTitleHeader = tmp2(7321).BottomSheetTitleHeader;
    const intl = tmp2(1113).intl;
    const formatToPlainString = intl.formatToPlainString;
    let str = stateFromStores.name;
    const v3CJfUa = tmp2(1113).t["3CJfUa"];
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
      const intl2 = tmp2(1113).intl;
      const obj5 = { score: stateFromStores1.enrollmentHighScore };
      formatToPlainStringResult = intl2.formatToPlainString(tmp2(1113).t.bzMn46, obj5);
    }
    const obj6 = { header: closure_4(BottomSheetTitleHeader, obj3), children: closure_5(Stack, obj9) };
    Stack = tmp2(6027).Stack;
    const obj7 = { game: stateFromStores, gameState: stateFromStores1 };
    const items4 = [closure_4(OrbsArcadeRewardChainDefault, obj7), ];
    const obj8 = { game: stateFromStores, sheetKey: "OrbsArcadeRewardsSheet", primaryAction: result ? OrbsArcadeSheetPrimaryAction.CLAIM : OrbsArcadeSheetPrimaryAction.PLAY, secondaryAction: result1 ? OrbsArcadeSheetSecondaryAction.CLOSE : OrbsArcadeSheetSecondaryAction.HOW_TO_PLAY, style: tmp.actionsContainer };
    const tmp13 = OrbsArcadeSheetActionsDefault;
    const tmp2Result = gameId(17017);
    result = tmp2Result.hasOrbsArcadeUnclaimedRewards(stateFromStores1);
    OrbsArcadeSheetPrimaryAction = tmp2(17031).OrbsArcadeSheetPrimaryAction;
    const tmp2Result2 = gameId(17017);
    result1 = tmp2Result2.hasOrbsArcadeUnlockedRewards(stateFromStores1);
    OrbsArcadeSheetSecondaryAction = tmp2(17031).OrbsArcadeSheetSecondaryAction;
    obj9 = { spacing: 0, children: items4 };
    items4[1] = closure_4(tmp13, obj8);
    tmp7Result = tmp7(ActionSheet, obj6);
  }
  return tmp7Result;
};
