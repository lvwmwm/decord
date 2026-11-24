// Module ID: 16433
// Function ID: 16434
// Name: OrbsArcadeRewardsSheet
// Dependencies: [19, 16421, 21, 4913, 575, 504, 7553, 7515, 1112, 5929, 16434, 16441, 16431, 16422, 2]
// Exports: default

// Module 16433 (OrbsArcadeRewardsSheet)
import nativeDefault from "native" /* 575 */;
import OrbsArcadeRewardChainDefault from "OrbsArcadeRewardChain" /* 16434 */;
import OrbsArcadeSheetActionsDefault from "OrbsArcadeSheetActions" /* 16441 */;
import react from "react" /* 19 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 16421 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4913 */;
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
  let obj10;
  let obj5;
  let result;
  let result1;
  gameId = gameId.gameId;
  const surface = gameId.surface;
  const items = [OrbsArcadeStore];
  const items1 = [gameId];
  const tmp = closure_6();
  const obj = gameId(504);
  const stateFromStores = obj.useStateFromStores(items, () => OrbsArcadeStore.getGame(gameId), items1);
  const items2 = [OrbsArcadeStore];
  const items3 = [gameId];
  const obj2 = gameId(504);
  const stateFromStores1 = obj2.useStateFromStores(items2, () => OrbsArcadeStore.getGameStateForGame(gameId), items3);
  const items4 = [OrbsArcadeStore];
  const items5 = [gameId];
  const obj3 = gameId(504);
  const stateFromStores2 = obj3.useStateFromStores(items4, () => OrbsArcadeStore.getAllTimeHighScore(gameId), items5);
  let tmp8Result = null;
  if (null != stateFromStores) {
    const ActionSheet = tmp2(7553).ActionSheet;
    const BottomSheetTitleHeader = tmp2(7515).BottomSheetTitleHeader;
    const intl = tmp2(1112).intl;
    const formatToPlainString = intl.formatToPlainString;
    let str = stateFromStores.name;
    const v3CJfUa = tmp2(1112).t["3CJfUa"];
    if (str == null) {
      str = "";
    }
    const obj4 = { title: formatToPlainString(v3CJfUa, obj5), subtitle: formatToPlainStringResult };
    formatToPlainStringResult = undefined;
    obj5 = { gameName: str };
    if (0 !== stateFromStores2) {
      const intl2 = tmp2(1112).intl;
      const obj6 = { score: stateFromStores2 };
      formatToPlainStringResult = intl2.formatToPlainString(tmp2(1112).t.bzMn46, obj6);
    }
    const obj7 = { header: closure_4(BottomSheetTitleHeader, obj4), children: closure_5(Stack, obj10) };
    Stack = tmp2(5929).Stack;
    const obj8 = { game: stateFromStores, gameState: stateFromStores1 };
    const items6 = [closure_4(OrbsArcadeRewardChainDefault, obj8), ];
    const obj9 = { game: stateFromStores, sheetKey: "OrbsArcadeRewardsSheet", location: gameId(16431).OrbsArcadeCtaLocation.REWARDS_SHEET, surface, primaryAction: result ? OrbsArcadeSheetPrimaryAction.CLAIM : OrbsArcadeSheetPrimaryAction.PLAY, secondaryAction: result1 ? OrbsArcadeSheetSecondaryAction.CLOSE : OrbsArcadeSheetSecondaryAction.HOW_TO_PLAY, style: tmp.actionsContainer };
    const tmp13 = OrbsArcadeSheetActionsDefault;
    const tmp2Result = gameId(16422);
    result = tmp2Result.hasOrbsArcadeUnclaimedRewards(stateFromStores1);
    OrbsArcadeSheetPrimaryAction = tmp2(16441).OrbsArcadeSheetPrimaryAction;
    const tmp2Result2 = gameId(16422);
    result1 = tmp2Result2.hasOrbsArcadeUnlockedRewards(stateFromStores1);
    OrbsArcadeSheetSecondaryAction = tmp2(16441).OrbsArcadeSheetSecondaryAction;
    obj10 = { spacing: 0, children: items6 };
    items6[1] = closure_4(tmp13, obj9);
    tmp8Result = tmp8(ActionSheet, obj7);
  }
  return tmp8Result;
};
