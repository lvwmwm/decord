// Module ID: 16466
// Function ID: 16467
// Name: OrbsArcadeRewardUnlockedSheet
// Dependencies: [19, 16434, 21, 558, 576, 504, 16440, 16435, 16467, 1125, 16461, 16453, 5978, 587, 10859, 2]

// Module 16466 (OrbsArcadeRewardUnlockedSheet)
import OrbsArcadeTypes from "OrbsArcadeTypes" /* 16435 */;
import OrbsArcadeRewardUtils from "OrbsArcadeRewardUtils" /* 16440 */;
import react from "react" /* 19 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 16434 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
const OrbsArcadeRewardUnlockedSheet_str = "OrbsArcadeRewardUnlockedSheet";
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadeRewardUnlockedSheet(gameId) {
  let first;
  let tmp10;
  let tmp11;
  let tmp6;
  let tmp7;
  let tmp9;
  let obj = gameId(576);
  const cResult = obj.c(35);
  gameId = gameId.gameId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [OrbsArcadeStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== gameId) {
    class S {
      constructor() {
        return OrbsArcadeStore.getGame(gameId);
      }
    }
    const items1 = [gameId];
    cResult[1] = gameId;
    cResult[2] = S;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = S;
  } else {
    class S {
      constructor() {
        return OrbsArcadeStore.getGame(gameId);
      }
    }
    tmp7 = cResult[3];
  }
  const tmpResult = gameId(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return OrbsArcadeStore.getGame(gameId);
      }
    }
    const items2 = [OrbsArcadeStore];
    cResult[4] = items2;
    tmp9 = items2;
  } else {
    class S {
      constructor() {
        return OrbsArcadeStore.getGame(gameId);
      }
    }
  }
  if (cResult[5] !== gameId) {
    class S {
      constructor() {
        return OrbsArcadeStore.getGame(gameId);
      }
    }
    const items3 = [gameId];
    cResult[5] = gameId;
    cResult[6] = tmp12;
    cResult[7] = items3;
    tmp11 = items3;
    tmp10 = tmp12;
  } else {
    class S {
      constructor() {
        return OrbsArcadeStore.getGame(gameId);
      }
    }
    tmp11 = cResult[7];
  }
  const tmpResult3 = gameId(504);
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp9, tmp10, tmp11);
  const tmp14 = cResult[8];
  if (stateFromStores != null) {
    class S {
      constructor() {
        return OrbsArcadeStore.getGame(gameId);
      }
    }
  }
  if (tmp14 === undefined) {
    class S {
      constructor() {
        return OrbsArcadeStore.getGame(gameId);
      }
    }
    if (null == stateFromStores) {
      class S {
        constructor() {
          return OrbsArcadeStore.getGame(gameId);
        }
      }
    } else {
      class S {
        constructor() {
          return OrbsArcadeStore.getGame(gameId);
        }
      }
      const tmpResult4 = gameId(16440);
      const orbsArcadeClaimableRewards = tmpResult4.getOrbsArcadeClaimableRewards(stateFromStores.rewards, stateFromStores1);
      cResult[11] = stateFromStores.rewards;
      cResult[12] = stateFromStores1;
      cResult[13] = orbsArcadeClaimableRewards;
    }
  }
  let everyResult;
  if (stateFromStores != null) {
    class S {
      constructor() {
        return OrbsArcadeStore.getGame(gameId);
      }
    }
    everyResult = obj4.every((id) => {
      const obj = OrbsArcadeRewardUtils;
      const orbsArcadeRewardStatus = obj.getOrbsArcadeRewardStatus(id.id, stateFromStores1);
      return orbsArcadeRewardStatus !== OrbsArcadeTypes.OrbsArcadeRewardStatus.LOCKED;
    });
  }
  if (everyResult == null) {
    class S {
      constructor() {
        return OrbsArcadeStore.getGame(gameId);
      }
    }
  }
  if (stateFromStores != null) {
    class S {
      constructor() {
        return OrbsArcadeStore.getGame(gameId);
      }
    }
  }
  cResult[8] = undefined;
  cResult[9] = stateFromStores1;
  cResult[10] = everyResult;
}) : (function OrbsArcadeRewardUnlockedSheet(gameId) {
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
  let obj = gameId(stateFromStores1[5]);
  const items = [OrbsArcadeStore];
  const items1 = [gameId];
  const stateFromStores = obj.useStateFromStores(items, () => OrbsArcadeStore.getGame(gameId), items1);
  const items2 = [OrbsArcadeStore];
  const items3 = [gameId];
  const obj2 = gameId(stateFromStores1[5]);
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
        const obj = gameId(stateFromStores1[6]);
        const orbsArcadeRewardStatus = obj.getOrbsArcadeRewardStatus(id.id, closure_1_2);
        return orbsArcadeRewardStatus !== gameId(stateFromStores1[7]).OrbsArcadeRewardStatus.LOCKED;
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
    const tmpResult = gameId(stateFromStores1[6]);
    const length = tmpResult.getOrbsArcadeClaimableRewards(stateFromStores.rewards, stateFromStores1).length;
    let str = stateFromStores.name;
    if (str == null) {
      str = "";
    }
    const obj3 = { gradientColor: "blue", illustration: closure_5(gameId(stateFromStores1[8]).GameTrophySpotIllustration, { scale: 0.5 }), title: string(v2ld2SU), description: formatToPlainString(memo ? t["x+5mCs"] : t.xUeO0j, obj4), actions: tmp10(Stack, obj5) };
    const PromoSheet = tmp(tmp2[14]).PromoSheet;
    const intl = tmp(tmp2[9]).intl;
    string = intl.string;
    if (memo) {
      v2ld2SU = tmp(tmp2[9]).t["2ld2SU"];
    } else if (length > 1) {
      v2ld2SU = tmp(tmp2[9]).t.NmSe9v;
    } else {
      v2ld2SU = tmp(tmp2[9]).t["/xryus"];
    }
    const intl2 = tmp(tmp2[9]).intl;
    formatToPlainString = intl2.formatToPlainString;
    t = tmp(tmp2[9]).t;
    obj4 = { gameName: str };
    obj5 = { spacing: stateFromStores(stateFromStores1[13]).space.PX_24, children: items5 };
    Stack = tmp(tmp2[12]).Stack;
    const obj6 = { game: stateFromStores, gameState: stateFromStores1, grantAnimatedOnOpenRewardIds: unlockedRewardIds };
    items5 = [closure_5(stateFromStores(stateFromStores1[10]), obj6), ];
    const obj7 = { game: stateFromStores, sheetKey: OrbsArcadeRewardUnlockedSheet_str, primaryAction: CLAIM, secondaryAction: gameId(stateFromStores1[11]).OrbsArcadeSheetSecondaryAction.CLOSE };
    CLAIM = null;
    tmp10 = closure_6;
    const tmp12 = stateFromStores(stateFromStores1[11]);
    if (length > 0) {
      CLAIM = tmp(tmp2[11]).OrbsArcadeSheetPrimaryAction.CLAIM;
    }
    items5[1] = closure_5(tmp12, obj7);
    return closure_5(PromoSheet, obj3);
  }
});
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeRewardUnlockedSheet.tsx");

export default tmp3;
