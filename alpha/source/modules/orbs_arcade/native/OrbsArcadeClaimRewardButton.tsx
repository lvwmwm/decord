// Module ID: 17032
// Function ID: 17033
// Name: OrbsArcadeClaimRewardButton
// Dependencies: [5, 19, 17010, 21, 5712, 1113, 504, 17017, 17016, 17033, 5634, 2]
// Exports: default

// Module 17032 (OrbsArcadeClaimRewardButton)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5712 */;
import OrbsArcadeRewardUtils from "OrbsArcadeRewardUtils" /* 17017 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 17010 */;
import size_mod from "module_2" /* 2 */;

let c2, c3, c4;

function showOrbsArcadeClaimRewardsError() {
  let intl;
  const obj = { text: intl.string(intl2.t.CKsXk3), variant: "critical" };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl2.intl;
  open("ORBS_ARCADE_CLAIM_REWARD_ERROR", obj);
}
const jsx = Fragment.jsx;
let size = size_mod;
let result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeClaimRewardButton.tsx");

export default function OrbsArcadeClaimRewardButton(game) {
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
            const obj6 = filter(c2[7]);
            tmp = obj6.getOrbsArcadeClaimableRewards(game.rewards, gameStateForGame.getGameStateForGame(game.id));
            c2 = 1;
            c3 = 2;
            c4 = 1;
            const obj4 = { value: obj7.claimOrbsArcadeRewards(game.id), done: false };
            obj7 = filter(c2[8]);
            return obj4;
          }
        } else if (1 === tmp4) {
          c2 = 0;
          showOrbsArcadeClaimRewardsError();
          c4 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
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
              const obj = filter(c2[9]);
              const result = obj.openOrbsArcadeRewardsCollectedModal(closure_3, filter.entitlements);
            }
          }
          c4 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
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
  const Button = game(5634).Button;
  const intl = game(1113).intl;
  string = intl.string;
  const tmp6 = jsx;
  if (stateFromStores1 > 1) {
    WK589K = tmp(1113).t.DCCcdz;
  } else {
    WK589K = tmp(1113).t.WK589K;
  }
  return tmp6(Button, obj3);
};
