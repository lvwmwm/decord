// Module ID: 17045
// Function ID: 17046
// Name: OrbsArcadeRewardUnlockedSheet
// Dependencies: [19, 17, 17010, 21, 5014, 575, 504, 17017, 17011, 10837, 17046, 1113, 6027, 17040, 17031, 2]
// Exports: default

// Module 17045 (OrbsArcadeRewardUnlockedSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import react from "react" /* 19 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 17010 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { chain: obj2 };
obj2 = { marginHorizontal: nativeDefault.space.PX_8 };
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeRewardUnlockedSheet.tsx");

export default function OrbsArcadeRewardUnlockedSheet(gameId) {
  let CLAIM;
  let Stack;
  let formatToPlainString;
  let items6;
  let obj5;
  let obj6;
  let obj8;
  let ownedRewardSkuIds;
  let string;
  let t;
  let tmp12;
  let v2ld2SU;
  gameId = gameId.gameId;
  let stateFromStores1;
  const unlockedRewardIds = gameId.unlockedRewardIds;
  const tmp = closure_8();
  let obj = gameId(stateFromStores1[6]);
  const items = [OrbsArcadeStore];
  const items1 = [gameId];
  const stateFromStores = obj.useStateFromStores(items, () => OrbsArcadeStore.getGame(gameId), items1);
  const items2 = [OrbsArcadeStore];
  const items3 = [gameId];
  const obj2 = gameId(stateFromStores1[6]);
  stateFromStores1 = obj2.useStateFromStores(items2, () => OrbsArcadeStore.getGameStateForGame(gameId), items3);
  const items4 = [OrbsArcadeStore];
  const obj3 = gameId(stateFromStores1[6]);
  const stateFromStores2 = obj3.useStateFromStores(items4, () => ownedRewardSkuIds.ownedRewardSkuIds);
  let rewards;
  const useMemo = stateFromStores2.useMemo;
  if (stateFromStores != null) {
    rewards = stateFromStores.rewards;
  }
  const items5 = [rewards, stateFromStores1, stateFromStores2];
  const memo = useMemo(() => {
    let flag;
    if (stateFromStores != null) {
      const rewards = stateFromStores.rewards;
      flag = rewards.every((item) => {
        const obj = gameId(stateFromStores1[7]);
        const orbsArcadeRewardStatus = obj.getOrbsArcadeRewardStatus(item, closure_1_2, stateFromStores2);
        return orbsArcadeRewardStatus !== gameId(stateFromStores1[8]).OrbsArcadeRewardStatus.LOCKED;
      });
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }, items5);
  if (null == stateFromStores) {
    return null;
  } else {
    const tmp2Result = gameId(stateFromStores1[7]);
    const length = tmp2Result.getOrbsArcadeClaimableRewards(stateFromStores.rewards, stateFromStores1).length;
    let str = stateFromStores.name;
    if (str == null) {
      str = "";
    }
    const obj4 = { gradientColor: "blue", illustration: closure_6(gameId(stateFromStores1[10]).GameTrophySpotIllustration, { scale: 0.55 }), title: string(v2ld2SU), description: formatToPlainString(memo ? t["x+5mCs"] : t.xUeO0j, obj5), actions: tmp12(Stack, obj6) };
    const PromoSheet = tmp2(tmp3[9]).PromoSheet;
    const intl = tmp2(tmp3[11]).intl;
    string = intl.string;
    if (memo) {
      v2ld2SU = tmp2(tmp3[11]).t["2ld2SU"];
    } else if (length > 1) {
      v2ld2SU = tmp2(tmp3[11]).t.NmSe9v;
    } else {
      v2ld2SU = tmp2(tmp3[11]).t["/xryus"];
    }
    const intl2 = tmp2(tmp3[11]).intl;
    formatToPlainString = intl2.formatToPlainString;
    t = tmp2(tmp3[11]).t;
    obj5 = { gameName: str };
    obj6 = { spacing: stateFromStores(stateFromStores1[5]).space.PX_24, children: items6 };
    Stack = tmp2(tmp3[12]).Stack;
    const obj7 = { style: tmp.chain, children: closure_6(stateFromStores(stateFromStores1[13]), obj8) };
    obj8 = { game: stateFromStores, gameState: stateFromStores1, grantAnimatedOnOpenRewardIds: unlockedRewardIds };
    items6 = [closure_6(View, obj7), ];
    const obj9 = { game: stateFromStores, sheetKey: "OrbsArcadeRewardUnlockedSheet", primaryAction: CLAIM, secondaryAction: gameId(stateFromStores1[14]).OrbsArcadeSheetSecondaryAction.CLOSE };
    CLAIM = null;
    tmp12 = closure_7;
    const tmp15 = stateFromStores(stateFromStores1[14]);
    if (length > 0) {
      CLAIM = tmp2(tmp3[14]).OrbsArcadeSheetPrimaryAction.CLAIM;
    }
    items6[1] = closure_6(tmp15, obj9);
    return closure_6(PromoSheet, obj4);
  }
};
