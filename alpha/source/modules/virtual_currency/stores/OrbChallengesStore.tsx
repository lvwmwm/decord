// Module ID: 17648
// Function ID: 17649
// Name: OrbChallengesStore
// Dependencies: [1384, 17649, 504, 572, 17650, 2]

// Module 17648 (OrbChallengesStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import OrbChallengeTypes from "OrbChallengeTypes" /* 17649 */;
import OrbChallengeActionCreators from "OrbChallengeActionCreators" /* 17650 */;
import UserStore from "UserStore" /* 1384 */;
import size from "module_2" /* 2 */;

let obj;

let tmp;
let tmp2;
function constructOrbChallengeItemFromUserAchievement(achievementIdentifier) {
  obj = { achievementIdentifier: achievementIdentifier.achievement_identifier, achievementDefinitionId: String(achievementIdentifier.achievement_definition_id), title: achievementIdentifier.title, orbRewardAmount: achievementIdentifier.reward_amount, achievementStatus: achievementIdentifier.status };
  return obj;
}
const items = [null, OrbChallengeTypes.UserAchievementStatus.NONE, OrbChallengeTypes.UserAchievementStatus.IN_PROGRESS, OrbChallengeTypes.UserAchievementStatus.ELIGIBLE, OrbChallengeTypes.UserAchievementStatus.COMPLETED];
const set = new Set(items);
const ClientUnreadNotificationType = { NEW_ACHIEVEMENT: "new_achievement", UNCLAIMED_ACHIEVEMENT: "unclaimed_achievement" };
let obj2 = { CLAIM_CHALLENGE: "claim_challenge", FETCH_CHALLENGES: "fetch_challenges" };
const Store = get_initializedDefault.Store;
class OrbChallengesStore extends Store {
  constructor() {
    obj = {
      ORB_CHALLENGES_LIST_FETCH(arg0) {
        return closure_0.handleOrbChallengesFetchStart(arg0);
      },
      ORB_CHALLENGES_LIST_FETCH_SUCCESS(response) {
        return closure_0.handleOrbChallengesFetchSuccess(response);
      },
      ORB_CHALLENGES_LIST_FETCH_FAIL(error) {
        return closure_0.handleOrbChallengesFetchFail(error);
      },
      ORB_CHALLENGES_UNREAD_UPDATE(achievementUnreadState) {
        return closure_0.handleUnreadUpdate(achievementUnreadState);
      },
      ORB_CHALLENGES_UNREAD_ACK() {
        return closure_0.handleUnreadAck();
      },
      ORB_CHALLENGE_CLAIM(achievementIdentifier) {
        return closure_0.handleOrbChallengeClaim(achievementIdentifier);
      },
      ORB_CHALLENGE_CLAIM_SUCCESS(achievementIdentifier) {
        return closure_0.handleOrbChallengeClaimSuccess(achievementIdentifier);
      },
      ORB_CHALLENGE_CLAIM_FAIL(achievementIdentifier) {
        return closure_0.handleOrbChallengeClaimFail(achievementIdentifier);
      },
      USER_DISCORD_ACHIEVEMENT_STATE_UPDATE(payload) {
        return closure_0.handleUserAchievementStateUpdate(payload);
      },
      CURRENT_USER_UPDATE() {
        return closure_0.handleCurrentUserPremiumTypeChange();
      },
      UPDATE_CLIENT_PREMIUM_TYPE() {
        return closure_0.handleCurrentUserPremiumTypeChange();
      },
      LOGIN_SUCCESS() {
        return closure_0.handleReset();
      }
    };
    const tmp22 = new tmp2(DispatcherDefault, obj, new.target, tmp2, tmp, this);
    let closure_0 = tmp22;
    tmp22.state = { challenges: [], isFetchingChallenges: false, hasFetchedChallenges: false, fetchChallengesError: null, isClaimingChallengeMap: {}, claimChallengeErrorMap: {}, orbRewardMultiplier: null, nitroGatedOrbMultiplier: null, achievementUnreadState: null, lastFetchedPremiumType: "flexDirection", userOpenedWalletViaProfileDCF: 28143 };
    return tmp22;
  }
  initialize() {
    this.waitFor(UserStore);
  }
  handleCurrentUserPremiumTypeChange() {
    const currentUser = UserStore.getCurrentUser();
    if (null == currentUser) {
      return false;
    } else {
      const self = this;
      const premiumType = currentUser.premiumType;
      const hasFetchedChallenges = this.state.hasFetchedChallenges;
      let tmp2 = !hasFetchedChallenges;
      if (hasFetchedChallenges) {
        tmp2 = premiumType === self.state.lastFetchedPremiumType;
      }
      let flag = !tmp2;
      if (flag) {
        self.state.lastFetchedPremiumType = premiumType;
        flag = false;
        if (!self.state.isFetchingChallenges) {
          obj = OrbChallengeActionCreators;
          const orbChallenges = obj.fetchOrbChallenges();
          flag = false;
        }
      }
      return flag;
    }
  }
  handleReset() {
    this.state = { challenges: [], isFetchingChallenges: false, hasFetchedChallenges: false, fetchChallengesError: null, isClaimingChallengeMap: {}, claimChallengeErrorMap: {}, orbRewardMultiplier: null, nitroGatedOrbMultiplier: null, achievementUnreadState: null, lastFetchedPremiumType: "flexDirection", userOpenedWalletViaProfileDCF: 28143 };
  }
  handleOrbChallengesFetchStart(arg0) {
    if (arg0 == null) {
      throw new TypeError("Cannot destructure 'undefined' or 'null'.");
    } else {
      const self = this;
      this.state.isFetchingChallenges = true;
      this.state.fetchChallengesError = null;
    }
  }
  setAchievementUnreadState(arg0) {
    let prop = this.state.achievementUnreadState;
    if (prop == null) {
      prop = { has_unread_new_achievement: false, has_unclaimed_achievements: false };
    }
    const achievementUnreadState = {};
    const state = this.state;
    const merged = Object.assign(prop);
    const merged1 = Object.assign(arg0);
    state.achievementUnreadState = achievementUnreadState;
  }
  handleOrbChallengesFetchSuccess(response) {
    response = response.response;
    const achievements = response.achievements;
    this.state.challenges = achievements.map(constructOrbChallengeItemFromUserAchievement);
    ({ orb_multiplier: this.state.orbRewardMultiplier, nitro_gated_orb_multiplier: this.state.nitroGatedOrbMultiplier } = response);
    obj = { has_unclaimed_achievements: response.has_unclaimed_achievements };
    const result = this.setAchievementUnreadState(obj);
    this.state.hasFetchedChallenges = true;
    this.state.isFetchingChallenges = false;
    const currentUser = UserStore.getCurrentUser();
    let premiumType = null;
    const state = this.state;
    if (null != currentUser) {
      premiumType = currentUser.premiumType;
    }
    state.lastFetchedPremiumType = premiumType;
  }
  handleUnreadUpdate(achievementUnreadState) {
    this.state.achievementUnreadState = achievementUnreadState.achievementUnreadState;
  }
  handleUnreadAck() {
    const result = this.setAchievementUnreadState({ has_unread_new_achievement: false });
  }
  handleOrbChallengesFetchFail(error) {
    this.state.fetchChallengesError = error.error;
    this.state.isFetchingChallenges = false;
  }
  handleOrbChallengeClaim(achievementIdentifier) {
    achievementIdentifier = achievementIdentifier.achievementIdentifier;
    this.state.isClaimingChallengeMap[achievementIdentifier] = true;
    this.state.claimChallengeErrorMap[achievementIdentifier] = null;
  }
  handleOrbChallengeClaimSuccess(achievementIdentifier) {
    achievementIdentifier = achievementIdentifier.achievementIdentifier;
    const response = achievementIdentifier.response;
    this.state.isClaimingChallengeMap[achievementIdentifier] = false;
    this.state.claimChallengeErrorMap[achievementIdentifier] = null;
    const challenges = this.state.challenges;
    this.state.challenges = challenges.map((achievementIdentifier) => {
      let tmp = achievementIdentifier;
      if (achievementIdentifier.achievementIdentifier === achievementIdentifier) {
        obj = { achievementIdentifier: response.achievement_identifier, achievementDefinitionId: String(response.achievement_definition_id), title: null, orbRewardAmount: null, achievementStatus: null };
        const _String = String;
        ({ title: obj.title, reward_amount: obj.orbRewardAmount, status: obj.achievementStatus } = response);
        tmp = obj;
      }
      return tmp;
    });
  }
  handleOrbChallengeClaimFail(achievementIdentifier) {
    achievementIdentifier = achievementIdentifier.achievementIdentifier;
    this.state.isClaimingChallengeMap[achievementIdentifier] = false;
    this.state.claimChallengeErrorMap[achievementIdentifier] = achievementIdentifier.error;
  }
  handleUserAchievementStateUpdate(payload) {
    payload = payload.payload;
    obj = OrbChallengeActionCreators;
    const orbChallenges = obj.fetchOrbChallenges();
    if ("achievement_completed" !== payload.type) {
      const type = payload.type;
      return false;
    } else {
      const self = this;
      const result = this.setAchievementUnreadState({ has_unclaimed_achievements: true });
    }
  }
  setUserOpenedWalletViaProfileDCF(userOpenedWalletViaProfileDCF) {
    this.state.userOpenedWalletViaProfileDCF = userOpenedWalletViaProfileDCF;
  }
}
const prototype = OrbChallengesStore.prototype;
Object.defineProperty(prototype, "orbChallengesDisplayError", {
  get: function orbChallengesDisplayError() {
    let tmp2;
    const state = this.state;
    const fetchChallengesError = state.fetchChallengesError;
    const values = Object.values(state.claimChallengeErrorMap);
    const found = values.find((item) => null != item);
    if (null != found) {
      obj2 = { error: found, errorType: obj2.CLAIM_CHALLENGE };
      tmp2 = obj2;
    } else {
      tmp2 = null;
      if (null != fetchChallengesError) {
        tmp2 = { error: fetchChallengesError, errorType: obj2.FETCH_CHALLENGES };
        obj = { error: fetchChallengesError, errorType: obj2.FETCH_CHALLENGES };
      }
    }
    return tmp2;
  },
  set: undefined
});
Object.defineProperty(prototype, "userOpenedWalletViaProfileDCF", {
  get: function userOpenedWalletViaProfileDCF() {
    return this.state.userOpenedWalletViaProfileDCF;
  },
  set: undefined
});
Object.defineProperty(prototype, "orbRewardMultiplier", {
  get: function orbRewardMultiplier() {
    return this.state.orbRewardMultiplier;
  },
  set: undefined
});
Object.defineProperty(prototype, "nitroGatedOrbMultiplier", {
  get: function nitroGatedOrbMultiplier() {
    return this.state.nitroGatedOrbMultiplier;
  },
  set: undefined
});
Object.defineProperty(prototype, "hasUnclaimedAchievements", {
  get: function hasUnclaimedAchievements() {
    let someResult;
    const state = this.state;
    if (this.state.hasFetchedChallenges) {
      const challenges = state.challenges;
      someResult = challenges.some((achievementStatus) => achievementStatus.achievementStatus === OrbChallengeTypes.UserAchievementStatus.COMPLETED);
    } else {
      someResult = null != state.achievementUnreadState && tmp.state.achievementUnreadState.has_unclaimed_achievements;
    }
    return someResult;
  },
  set: undefined
});
Object.defineProperty(prototype, "clientUnreadNotificationType", {
  get: function clientUnreadNotificationType() {
    const self = this;
    let tmp = null;
    if (null !== this.state.achievementUnreadState) {
      let NEW_ACHIEVEMENT;
      if (self.state.achievementUnreadState.has_unread_new_achievement) {
        NEW_ACHIEVEMENT = obj.NEW_ACHIEVEMENT;
      } else {
        NEW_ACHIEVEMENT = null;
        if (self.hasUnclaimedAchievements) {
          NEW_ACHIEVEMENT = obj.UNCLAIMED_ACHIEVEMENT;
        }
      }
      tmp = NEW_ACHIEVEMENT;
    }
    return tmp;
  },
  set: undefined
});
Object.defineProperty(prototype, "hasUnreadUpdate", {
  get: function hasUnreadUpdate() {
    return null != this.clientUnreadNotificationType;
  },
  set: undefined
});
Object.defineProperty(prototype, "challenges", {
  get: function challenges() {
    return this.state.challenges;
  },
  set: undefined
});
Object.defineProperty(prototype, "challengesForOrbWallet", {
  get: function challengesForOrbWallet() {
    const challenges = this.state.challenges;
    return challenges.filter((achievementStatus) => set.has(achievementStatus.achievementStatus));
  },
  set: undefined
});
Object.defineProperty(prototype, "hasFetchedChallenges", {
  get: function hasFetchedChallenges() {
    return this.state.hasFetchedChallenges;
  },
  set: undefined
});
Object.defineProperty(prototype, "isFetchingChallenges", {
  get: function isFetchingChallenges() {
    return this.state.isFetchingChallenges;
  },
  set: undefined
});
const get = function fetchChallengesError() {
  return this.state.fetchChallengesError;
};
Object.defineProperty(prototype, "fetchChallengesError", { get, set: undefined });
OrbChallengesStore.displayName = "OrbChallengesStore";
const obj3 = {
  ORB_CHALLENGES_LIST_FETCH(arg0) {
    return closure_0.handleOrbChallengesFetchStart(arg0);
  },
  ORB_CHALLENGES_LIST_FETCH_SUCCESS(response) {
    return closure_0.handleOrbChallengesFetchSuccess(response);
  },
  ORB_CHALLENGES_LIST_FETCH_FAIL(error) {
    return closure_0.handleOrbChallengesFetchFail(error);
  },
  ORB_CHALLENGES_UNREAD_UPDATE(achievementUnreadState) {
    return closure_0.handleUnreadUpdate(achievementUnreadState);
  },
  ORB_CHALLENGES_UNREAD_ACK() {
    return closure_0.handleUnreadAck();
  },
  ORB_CHALLENGE_CLAIM(achievementIdentifier) {
    return closure_0.handleOrbChallengeClaim(achievementIdentifier);
  },
  ORB_CHALLENGE_CLAIM_SUCCESS(achievementIdentifier) {
    return closure_0.handleOrbChallengeClaimSuccess(achievementIdentifier);
  },
  ORB_CHALLENGE_CLAIM_FAIL(achievementIdentifier) {
    return closure_0.handleOrbChallengeClaimFail(achievementIdentifier);
  },
  USER_DISCORD_ACHIEVEMENT_STATE_UPDATE(payload) {
    return closure_0.handleUserAchievementStateUpdate(payload);
  },
  CURRENT_USER_UPDATE() {
    return closure_0.handleCurrentUserPremiumTypeChange();
  },
  UPDATE_CLIENT_PREMIUM_TYPE() {
    return closure_0.handleCurrentUserPremiumTypeChange();
  },
  LOGIN_SUCCESS() {
    return closure_0.handleReset();
  }
};
const tmp3 = new tmp(DispatcherDefault, obj3, tmp2, OrbChallengesStore, tmp, prototype, this, undefined, get, require, dependencyMap);
const React = tmp3;
tmp3.state = { challenges: [], isFetchingChallenges: false, hasFetchedChallenges: false, fetchChallengesError: null, isClaimingChallengeMap: {}, claimChallengeErrorMap: {}, orbRewardMultiplier: null, nitroGatedOrbMultiplier: null, achievementUnreadState: null, lastFetchedPremiumType: "flexDirection", userOpenedWalletViaProfileDCF: 28143 };
let result = size.fileFinishedImporting("modules/virtual_currency/stores/OrbChallengesStore.tsx");

export default tmp3;
export { ClientUnreadNotificationType };
export const OrbChallengesDisplayErrorType = obj2;
