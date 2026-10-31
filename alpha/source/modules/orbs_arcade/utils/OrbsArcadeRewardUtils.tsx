// Module ID: 17017
// Function ID: 17018
// Name: OrbsArcadeRewardUtils
// Dependencies: [17011, 1113, 2]
// Exports: getOrbsArcadeClaimableRewards, getOrbsArcadeFocusedReward, getOrbsArcadeRewardScoreLabel, hasOrbsArcadeUnclaimedRewards, hasOrbsArcadeUnlockedRewards, isOrbsArcadeEnrollmentOver, mustClaimOrbsArcadeRewardsToPlay

// Module 17017 (OrbsArcadeRewardUtils)
import intl3 from "intl" /* 1113 */;
import OrbsArcadeTypes from "OrbsArcadeTypes" /* 17011 */;
import size from "module_2" /* 2 */;

const f111191 = (pendingAt) => null != pendingAt.pendingAt && null == pendingAt.claimedAt;
function getOrbsArcadeRewardStatus(reward, gameState, ownedRewardSkuIds) {
  let tmp;
  if (gameState != null) {
    tmp = gameState.rewardGrants[reward.id];
  }
  let claimedAt;
  if (tmp != null) {
    claimedAt = tmp.claimedAt;
  }
  if (null == claimedAt) {
    let CLAIMED;
    let pendingAt;
    if (gameState != null) {
      if (gameState.rewardGrants[reward.id] != null) {
        pendingAt = tmp3.pendingAt;
      }
    }
    const hasItem = null == pendingAt && ownedRewardSkuIds.has(reward.skuId);
    if (!hasItem) {
      let pendingAt1;
      if (tmp != null) {
        pendingAt1 = tmp.pendingAt;
      }
      if (null != pendingAt1) {
        CLAIMED = OrbsArcadeTypes.OrbsArcadeRewardStatus.CLAIMABLE;
      } else {
        CLAIMED = OrbsArcadeTypes.OrbsArcadeRewardStatus.LOCKED;
      }
    }
    return CLAIMED;
  }
  CLAIMED = OrbsArcadeTypes.OrbsArcadeRewardStatus.CLAIMED;
}
const result = size.fileFinishedImporting("modules/orbs_arcade/utils/OrbsArcadeRewardUtils.tsx");

export { getOrbsArcadeRewardStatus };
export function getOrbsArcadeFocusedReward(rewards, stateFromStores, stateFromStores1) {
  let closure_0 = stateFromStores;
  let closure_1 = stateFromStores1;
  const items = [...rewards];
  const sorted = items.sort((scoreTarget, scoreTarget2) => scoreTarget.scoreTarget - scoreTarget2.scoreTarget);
  return sorted.find((item) => {
    const tmp = getOrbsArcadeRewardStatus(item, stateFromStores, stateFromStores1);
    return tmp !== OrbsArcadeTypes.OrbsArcadeRewardStatus.CLAIMED;
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
  return values2.some(f111191);
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
    tmp = !values2.some(f111191);
  }
  return tmp;
}
export function mustClaimOrbsArcadeRewardsToPlay(gameStateForGame) {
  let someResult = null != gameStateForGame.expiresAt;
  if (someResult) {
    const _Date = Date;
    const _Date2 = Date;
    const parsed = Date.parse(gameStateForGame.expiresAt);
    someResult = parsed <= Date.now();
  }
  if (someResult) {
    let rewardGrants;
    const _Object = Object;
    if (gameStateForGame != null) {
      rewardGrants = gameStateForGame.rewardGrants;
    }
    if (rewardGrants == null) {
      rewardGrants = {};
    }
    const values2 = values(rewardGrants);
    someResult = values2.some(f111191);
  }
  return someResult;
}
export function getOrbsArcadeRewardScoreLabel(reward, orbsArcadeRewardStatus, gameState, ownedRewardSkuIds) {
  let pendingAt;
  if (gameState != null) {
    if (gameState.rewardGrants[tmp] != null) {
      pendingAt = tmp3.pendingAt;
    }
  }
  let enrolledAt;
  if (gameState != null) {
    enrolledAt = gameState.enrolledAt;
  }
  let tmp5 = null != pendingAt && null != enrolledAt;
  if (tmp5) {
    const _Date = Date;
    const _Date2 = Date;
    const parsed = Date.parse(pendingAt);
    tmp5 = parsed < Date.parse(enrolledAt);
  }
  if (!tmp5) {
    let formatToPlainStringResult;
    let pendingAt1;
    if (gameState != null) {
      if (gameState.rewardGrants[reward.id] != null) {
        pendingAt1 = tmp9.pendingAt;
      }
    }
    const hasItem = null == pendingAt1 && ownedRewardSkuIds.has(reward.skuId);
    if (!hasItem) {
      let Q8Vv0m;
      const intl = intl3.intl;
      const formatToPlainString = intl.formatToPlainString;
      if (orbsArcadeRewardStatus === OrbsArcadeTypes.OrbsArcadeRewardStatus.LOCKED) {
        Q8Vv0m = tmp13(1113).t.XKyikw;
      } else {
        Q8Vv0m = tmp13(1113).t.Q8Vv0m;
      }
      const obj = { score: reward.scoreTarget };
      formatToPlainStringResult = formatToPlainString(Q8Vv0m, obj);
    }
    return formatToPlainStringResult;
  }
  const intl2 = intl3.intl;
  formatToPlainStringResult = intl2.string(intl3.t.xdWlbE);
}
