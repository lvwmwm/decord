// Module ID: 16322
// Function ID: 16323
// Name: OrbsArcadeRewardUtils
// Dependencies: [16317, 1128, 2]
// Exports: getOrbsArcadeClaimableRewards, getOrbsArcadeFocusedReward, getOrbsArcadeRewardScoreLabel, getOrbsArcadeRewardStatus, hasOrbsArcadeUnclaimedRewards, hasOrbsArcadeUnlockedRewards, isOrbsArcadeEnrollmentOver

// Module 16322 (OrbsArcadeRewardUtils)
import intl2 from "intl" /* 1128 */;
import OrbsArcadeTypes from "OrbsArcadeTypes" /* 16317 */;
import size from "module_2" /* 2 */;

const f126128 = (pendingAt) => null != pendingAt.pendingAt && null == pendingAt.claimedAt;
const result = size.fileFinishedImporting("modules/orbs_arcade/utils/OrbsArcadeRewardUtils.tsx");

export const getOrbsArcadeRewardStatus = function getOrbsArcadeRewardStatus(id, gameState) {
  let LOCKED;
  let tmp;
  if (gameState != null) {
    tmp = gameState.rewardGrants[id];
  }
  let claimedAt;
  if (tmp != null) {
    claimedAt = tmp.claimedAt;
  }
  if (null != claimedAt) {
    LOCKED = OrbsArcadeTypes.OrbsArcadeRewardStatus.CLAIMED;
  } else {
    let pendingAt;
    if (tmp != null) {
      pendingAt = tmp.pendingAt;
    }
    if (null != pendingAt) {
      LOCKED = OrbsArcadeTypes.OrbsArcadeRewardStatus.CLAIMABLE;
    } else {
      LOCKED = OrbsArcadeTypes.OrbsArcadeRewardStatus.LOCKED;
    }
  }
  return LOCKED;
};
export const getOrbsArcadeFocusedReward = function getOrbsArcadeFocusedReward(rewards, stateFromStores) {
  let closure_0 = stateFromStores;
  const items = [...rewards];
  const sorted = items.sort((scoreTarget, scoreTarget2) => scoreTarget.scoreTarget - scoreTarget2.scoreTarget);
  return sorted.find((item) => {
    let claimedAt;
    if (stateFromStores != null) {
      if (tmp.rewardGrants[item.id] != null) {
        claimedAt = tmp4.claimedAt;
      }
    }
    return null == claimedAt;
  });
};
export const getOrbsArcadeClaimableRewards = function getOrbsArcadeClaimableRewards(arr, arg1) {
  let closure_0 = arg1;
  const found = arr.filter((item) => {
    let tmp2;
    if (closure_0 != null) {
      tmp2 = tmp.rewardGrants[item.id];
    }
    let pendingAt;
    if (tmp2 != null) {
      pendingAt = tmp2.pendingAt;
    }
    return null != pendingAt && null == tmp2.claimedAt;
  });
  return found.sort((scoreTarget, scoreTarget2) => scoreTarget.scoreTarget - scoreTarget2.scoreTarget);
};
export const hasOrbsArcadeUnlockedRewards = function hasOrbsArcadeUnlockedRewards(stateFromStores1) {
  let rewardGrants;
  const _Object = Object;
  if (stateFromStores1 != null) {
    rewardGrants = stateFromStores1.rewardGrants;
  }
  if (rewardGrants == null) {
    rewardGrants = {};
  }
  const values2 = values(rewardGrants);
  return values2.some((pendingAt) => null != pendingAt.pendingAt);
};
export const hasOrbsArcadeUnclaimedRewards = function hasOrbsArcadeUnclaimedRewards(gameState) {
  const values = Object.values(gameState.rewardGrants);
  return values.some(f126128);
};
export const isOrbsArcadeEnrollmentOver = function isOrbsArcadeEnrollmentOver(gameStateForGame) {
  let tmp = null != gameStateForGame.expiresAt;
  if (tmp) {
    const _Date = Date;
    const _Date2 = Date;
    const parsed = Date.parse(gameStateForGame.expiresAt);
    tmp = parsed <= Date.now();
  }
  if (tmp) {
    const _Object = Object;
    const values = Object.values(gameStateForGame.rewardGrants);
    tmp = !values.some(f126128);
  }
  return tmp;
};
export const getOrbsArcadeRewardScoreLabel = function getOrbsArcadeRewardScoreLabel(reward, orbsArcadeRewardStatus) {
  let Q8Vv0m;
  const intl = intl2.intl;
  const formatToPlainString = intl.formatToPlainString;
  if (orbsArcadeRewardStatus === OrbsArcadeTypes.OrbsArcadeRewardStatus.LOCKED) {
    Q8Vv0m = tmp(1128).t.XKyikw;
  } else {
    Q8Vv0m = tmp(1128).t.Q8Vv0m;
  }
  const obj = { score: reward.scoreTarget };
  return formatToPlainString(Q8Vv0m, obj);
};
