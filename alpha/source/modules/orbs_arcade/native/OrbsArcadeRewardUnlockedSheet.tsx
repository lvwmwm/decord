// Module ID: 16987
// Function ID: 16988
// Name: OrbsArcadeRewardUnlockedSheet
// Dependencies: [19, 16954, 21, 504, 16961, 16955, 10817, 16988, 1114, 6022, 575, 16982, 16974, 2]
// Exports: default

// Module 16987 (OrbsArcadeRewardUnlockedSheet)
import react from "react" /* 19 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 16954 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeRewardUnlockedSheet.tsx");

export default function OrbsArcadeRewardUnlockedSheet(gameId) {
  let CLAIM;
  let Stack;
  let formatToPlainString;
  let items5;
  let obj4;
  let obj5;
  let string;
  let t;
  let tmp10;
  let v2ld2SU;
  gameId = gameId.gameId;
  let stateFromStores1;
  const unlockedRewardIds = gameId.unlockedRewardIds;
  let obj = gameId(stateFromStores1[3]);
  const items = [OrbsArcadeStore];
  const items1 = [gameId];
  const stateFromStores = obj.useStateFromStores(items, () => OrbsArcadeStore.getGame(gameId), items1);
  const items2 = [OrbsArcadeStore];
  const items3 = [gameId];
  const obj2 = gameId(stateFromStores1[3]);
  stateFromStores1 = obj2.useStateFromStores(items2, () => OrbsArcadeStore.getGameStateForGame(gameId), items3);
  let rewards;
  const useMemo = react.useMemo;
  if (stateFromStores != null) {
    rewards = stateFromStores.rewards;
  }
  const items4 = [rewards, stateFromStores1];
  const memo = useMemo(() => {
    let flag;
    if (stateFromStores != null) {
      const rewards = stateFromStores.rewards;
      flag = rewards.every((id) => {
        const obj = gameId(stateFromStores1[4]);
        const orbsArcadeRewardStatus = obj.getOrbsArcadeRewardStatus(id.id, closure_1_2);
        return orbsArcadeRewardStatus !== gameId(stateFromStores1[5]).OrbsArcadeRewardStatus.LOCKED;
      });
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }, items4);
  if (null == stateFromStores) {
    return null;
  } else {
    const tmpResult = gameId(stateFromStores1[4]);
    const length = tmpResult.getOrbsArcadeClaimableRewards(stateFromStores.rewards, stateFromStores1).length;
    let str = stateFromStores.name;
    if (str == null) {
      str = "";
    }
    const obj3 = { gradientColor: "blue", illustration: closure_5(gameId(stateFromStores1[7]).GameTrophySpotIllustration, { scale: 0.5 }), title: string(v2ld2SU), description: formatToPlainString(memo ? t["x+5mCs"] : t.xUeO0j, obj4), actions: tmp10(Stack, obj5) };
    const PromoSheet = tmp(tmp2[6]).PromoSheet;
    const intl = tmp(tmp2[8]).intl;
    string = intl.string;
    if (memo) {
      v2ld2SU = tmp(tmp2[8]).t["2ld2SU"];
    } else if (length > 1) {
      v2ld2SU = tmp(tmp2[8]).t.NmSe9v;
    } else {
      v2ld2SU = tmp(tmp2[8]).t["/xryus"];
    }
    const intl2 = tmp(tmp2[8]).intl;
    formatToPlainString = intl2.formatToPlainString;
    t = tmp(tmp2[8]).t;
    obj4 = { gameName: str };
    obj5 = { spacing: stateFromStores(stateFromStores1[10]).space.PX_24, children: items5 };
    Stack = tmp(tmp2[9]).Stack;
    const obj6 = { game: stateFromStores, gameState: stateFromStores1, grantAnimatedOnOpenRewardIds: unlockedRewardIds };
    items5 = [closure_5(stateFromStores(stateFromStores1[11]), obj6), ];
    const obj7 = { game: stateFromStores, sheetKey: "OrbsArcadeRewardUnlockedSheet", primaryAction: CLAIM, secondaryAction: gameId(stateFromStores1[12]).OrbsArcadeSheetSecondaryAction.CLOSE };
    CLAIM = null;
    tmp10 = closure_6;
    const tmp12 = stateFromStores(stateFromStores1[12]);
    if (length > 0) {
      CLAIM = tmp(tmp2[12]).OrbsArcadeSheetPrimaryAction.CLAIM;
    }
    items5[1] = closure_5(tmp12, obj7);
    return closure_5(PromoSheet, obj3);
  }
};
