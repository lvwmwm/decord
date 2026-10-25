// Module ID: 16415
// Function ID: 16416
// Name: OrbsArcadeClaimRewardButton
// Dependencies: [5, 19, 16395, 21, 5663, 1128, 558, 576, 504, 16401, 16400, 16416, 5244, 2]

// Module 16415 (OrbsArcadeClaimRewardButton)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1128 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5663 */;
import OrbsArcadeRewardUtils from "OrbsArcadeRewardUtils" /* 16401 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 16395 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let _require, c3, c4;

function showOrbsArcadeClaimRewardsError() {
  let intl;
  const obj = { text: intl.string(intl2.t.CKsXk3), variant: "critical" };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl2.intl;
  open("ORBS_ARCADE_CLAIM_REWARD_ERROR", obj);
}
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadeClaimRewardButton(game) {
  let first;
  let tmp6;
  let tmp7;
  let tmp9;
  let tmp = game;
  let obj = game(576);
  const cResult = obj.c(19);
  game = game.game;
  size = game.size;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [OrbsArcadeStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== game.id) {
    const fn = function c() {
      return OrbsArcadeStore.isClaimingRewards(game.id);
    };
    const items1 = [game.id];
    cResult[1] = game.id;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [OrbsArcadeStore];
    cResult[4] = items2;
    tmp9 = items2;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] === game.id) {
    let tmp11;
    let tmp12;
    if (cResult[6] === game.rewards) {
      tmp11 = cResult[7];
      tmp12 = cResult[8];
    }
    const tmpResult2 = tmp(504);
    const stateFromStores1 = tmpResult2.useStateFromStores(tmp9, tmp11, tmp12);
    if (cResult[9] === game.id) {
      let tmp14;
      let tmp16;
      if (cResult[10] === game.rewards) {
        tmp14 = cResult[11];
      }
      if (cResult[12] !== stateFromStores1) {
        let WK589K;
        const intl = tmp(1128).intl;
        const string = intl.string;
        if (stateFromStores1 > 1) {
          WK589K = tmp(1128).t.DCCcdz;
        } else {
          WK589K = tmp(1128).t.WK589K;
        }
        const stringResult = string(WK589K);
        cResult[12] = stateFromStores1;
        cResult[13] = stringResult;
        tmp16 = stringResult;
      } else {
        tmp16 = cResult[13];
      }
      if (cResult[14] === tmp14) {
        if (cResult[15] === stateFromStores) {
          if (cResult[16] === size) {
            let tmp18;
            if (cResult[17] === tmp16) {
              tmp18 = cResult[18];
            }
            return tmp18;
          }
        }
      }
      const tmp20 = jsx(tmp(5244).Button, { grow: true, size, variant: "primary", text: tmp16, loading: stateFromStores, onPress: tmp14 });
      cResult[14] = tmp14;
      cResult[15] = stateFromStores;
      cResult[16] = size;
      cResult[17] = tmp16;
      cResult[18] = tmp20;
      tmp18 = tmp20;
    }
    _require = _asyncToGenerator(async (arg0, value) => {
      let closure_1;
      let obj7;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c2;
        try {
          let filter;
          let closure_3;
          let tmp;
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              filter = undefined;
              let gameState;
              closure_3 = undefined;
              const obj6 = filter(dependencyMap[9]);
              tmp = obj6.getOrbsArcadeClaimableRewards(filter.rewards, gameStateForGame.getGameStateForGame(filter.id));
              c2 = 1;
              c3 = 2;
              c4 = 1;
              const obj4 = { value: obj7.claimOrbsArcadeRewards(filter.id), done: false };
              obj7 = filter(dependencyMap[10]);
              return obj4;
            }
          } else if (1 === tmp4) {
            c2 = 0;
            showOrbsArcadeClaimRewardsError();
            c4 = 3;
            return { value: "IconComponent", done: null };
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 0;
            c4 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            filter = value;
            c2 = 0;
            if (null != filter) {
              gameState = filter.gameState;
              filter = tmp.filter;
              closure_3 = filter((arg0) => {
                let claimedAt;
                if (rewardGrants.rewardGrants[arg0.id] != null) {
                  claimedAt = tmp.claimedAt;
                }
                return null != claimedAt;
              });
              if (closure_3.length < tmp.length) {
                showOrbsArcadeClaimRewardsError();
              }
              if (closure_3.length > 0) {
                const obj = filter(dependencyMap[11]);
                const result = obj.openOrbsArcadeRewardsCollectedModal(closure_3, filter.entitlements);
              }
            }
            c4 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp20) {
          if (0 === c2) {
            c4 = 3;
            throw tmp20;
          } else {
            c3 = 1;
          }
        }
      }
    });
    function t7() {
      return closure_0(...arguments);
    }
    cResult[9] = game.id;
    cResult[10] = game.rewards;
    cResult[11] = t7;
    tmp14 = t7;
  }
  class A {
    constructor() {
      const obj = OrbsArcadeRewardUtils;
      return obj.getOrbsArcadeClaimableRewards(game.rewards, OrbsArcadeStore.getGameStateForGame(game.id)).length;
    }
  }
  const items3 = [, ];
  ({ id: arr4[0], rewards: arr4[1] } = game);
  cResult[5] = game.id;
  cResult[6] = game.rewards;
  cResult[7] = A;
  cResult[8] = items3;
  tmp12 = items3;
  tmp11 = A;
}) : (function OrbsArcadeClaimRewardButton(game) {
  let WK589K;
  let string;
  game = game.game;
  let tmp = game;
  size = game.size;
  let obj = game(504);
  const items = [OrbsArcadeStore];
  const items1 = [game.id];
  const stateFromStores = obj.useStateFromStores(items, () => OrbsArcadeStore.isClaimingRewards(game.id), items1);
  let obj2 = game(504);
  const items2 = [OrbsArcadeStore];
  const items3 = [, ];
  ({ id: arr4[0], rewards: arr4[1] } = game);
  const stateFromStores1 = obj2.useStateFromStores(items2, () => {
    const obj = OrbsArcadeRewardUtils;
    return obj.getOrbsArcadeClaimableRewards(game.rewards, OrbsArcadeStore.getGameStateForGame(game.id)).length;
  }, items3);
  const items4 = [, ];
  ({ id: arr5[0], rewards: arr5[1] } = game);
  const callback = react.useCallback(_asyncToGenerator(async (arg0, value) => {
    let closure_1;
    let obj7;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let filter;
        let closure_3;
        let tmp;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            filter = undefined;
            let gameState;
            closure_3 = undefined;
            const obj6 = filter(c2[9]);
            tmp = obj6.getOrbsArcadeClaimableRewards(game.rewards, gameStateForGame.getGameStateForGame(game.id));
            c2 = 1;
            c3 = 2;
            c4 = 1;
            const obj4 = { value: obj7.claimOrbsArcadeRewards(game.id), done: false };
            obj7 = filter(c2[10]);
            return obj4;
          }
        } else if (1 === tmp4) {
          c2 = 0;
          showOrbsArcadeClaimRewardsError();
          c4 = 3;
          return { value: "IconComponent", done: null };
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 0;
          c4 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          filter = value;
          c2 = 0;
          if (null != filter) {
            gameState = filter.gameState;
            filter = tmp.filter;
            closure_3 = filter((arg0) => {
              let claimedAt;
              if (rewardGrants.rewardGrants[arg0.id] != null) {
                claimedAt = tmp.claimedAt;
              }
              return null != claimedAt;
            });
            if (closure_3.length < tmp.length) {
              showOrbsArcadeClaimRewardsError();
            }
            if (closure_3.length > 0) {
              const obj = filter(c2[11]);
              const result = obj.openOrbsArcadeRewardsCollectedModal(closure_3, filter.entitlements);
            }
          }
          c4 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp20) {
        if (0 === c2) {
          c4 = 3;
          throw tmp20;
        } else {
          c3 = 1;
        }
      }
    }
  }), items4);
  let obj3 = { grow: true, size, variant: "primary", text: string(WK589K), loading: stateFromStores, onPress: callback };
  const Button = game(5244).Button;
  const intl = game(1128).intl;
  string = intl.string;
  const tmp6 = jsx;
  if (stateFromStores1 > 1) {
    WK589K = tmp(1128).t.DCCcdz;
  } else {
    WK589K = tmp(1128).t.WK589K;
  }
  return tmp6(Button, obj3);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeClaimRewardButton.tsx");

export default tmp2;
