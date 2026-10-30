// Module ID: 16961
// Function ID: 16962
// Name: OrbsArcadeRewardUtils
// Dependencies: [16955, 1114, 2]
// Exports: getOrbsArcadeClaimableRewards, getOrbsArcadeFocusedReward, getOrbsArcadeRewardScoreLabel, getOrbsArcadeRewardStatus, hasOrbsArcadeUnclaimedRewards, hasOrbsArcadeUnlockedRewards, isOrbsArcadeEnrollmentOver, mustClaimOrbsArcadeRewardsToPlay

// Module 16961 (OrbsArcadeRewardUtils)
import intl2 from "intl" /* 1114 */;
import OrbsArcadeTypes from "OrbsArcadeTypes" /* 16955 */;
import size from "module_2" /* 2 */;

const f110864 = (pendingAt) => null != pendingAt.pendingAt && null == pendingAt.claimedAt;
const result = size.fileFinishedImporting("modules/orbs_arcade/utils/OrbsArcadeRewardUtils.tsx");

export function getOrbsArcadeRewardStatus(id, gameState) {
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
}
export function getOrbsArcadeFocusedReward(rewards, stateFromStores) {
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
}
export function getOrbsArcadeClaimableRewards(rewards, gameStateForGame) {
  let closure_0 = gameStateForGame;
  const found = rewards.filter((item) => {
    let tmp2;
    if (gameStateForGame != null) {
      tmp2 = tmp.rewardGrants[item.id];
    }
    let pendingAt;
    if (tmp2 != null) {
      pendingAt = tmp2.pendingAt;
    }
    return null != pendingAt && null == tmp2.claimedAt;
  });
  return found.sort((scoreTarget, scoreTarget2) => scoreTarget.scoreTarget - scoreTarget2.scoreTarget);
}
export function hasOrbsArcadeUnlockedRewards(stateFromStores1) {
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
}
export function hasOrbsArcadeUnclaimedRewards(gameState) {
  let rewardGrants;
  const _Object = Object;
  if (gameState != null) {
    rewardGrants = gameState.rewardGrants;
  }
  if (rewardGrants == null) {
    rewardGrants = {};
  }
  const values2 = values(rewardGrants);
  return values2.some(f110864);
}
export function isOrbsArcadeEnrollmentOver(gameStateForGame) {
  let tmp = null != gameStateForGame.expiresAt;
  if (tmp) {
    const _Date = Date;
    const _Date2 = Date;
    const parsed = Date.parse(gameStateForGame.expiresAt);
    tmp = parsed <= Date.now();
  }
  if (tmp) {
    let rewardGrants;
    const _Object = Object;
    if (gameStateForGame != null) {
      rewardGrants = gameStateForGame.rewardGrants;
    }
    if (rewardGrants == null) {
      rewardGrants = {};
    }
    const values2 = values(rewardGrants);
    tmp = !values2.some(f110864);
  }
  return tmp;
}
export function mustClaimOrbsArcadeRewardsToPlay(stateFromStores) {
  let someResult = null != stateFromStores.expiresAt;
  if (someResult) {
    const _Date = Date;
    const _Date2 = Date;
    const parsed = Date.parse(stateFromStores.expiresAt);
    someResult = parsed <= Date.now();
  }
  if (someResult) {
    let rewardGrants;
    const _Object = Object;
    if (stateFromStores != null) {
      rewardGrants = stateFromStores.rewardGrants;
    }
    if (rewardGrants == null) {
      rewardGrants = {};
    }
    const values2 = values(rewardGrants);
    someResult = values2.some(f110864);
  }
  return someResult;
}
export function getOrbsArcadeRewardScoreLabel(reward, orbsArcadeRewardStatus) {
  let Q8Vv0m;
  const intl = intl2.intl;
  const formatToPlainString = intl.formatToPlainString;
  if (orbsArcadeRewardStatus === OrbsArcadeTypes.OrbsArcadeRewardStatus.LOCKED) {
    Q8Vv0m = tmp(1114).t.XKyikw;
  } else {
    Q8Vv0m = tmp(1114).t.Q8Vv0m;
  }
  const obj = { score: reward.scoreTarget };
  return formatToPlainString(Q8Vv0m, obj);
}
