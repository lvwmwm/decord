// Module ID: 4345
// Function ID: 38380
// Name: shouldAgeVerifyForAgeGate
// Dependencies: [1391, 1348, 4346, 1838, 1849, 1197, 653, 1212, 21, 4347, 3809, 4956, 566, 7538, 1920, 5589, 5723, 2]
// Exports: guildNeedsAgeGate, isChannelAgeVerificationGated, maybeOpenAgeGateForVoiceChannel, maybeShowAgeGate, shouldAgeVerifyForSettingsToggles, useAgeGateVerifyContent, useAgeGateVerifyContentForGuild, useShouldAgeVerifyForSettingsToggles, useShouldHideChannelContent, userCannotSeeNSFWContent, userNeedsAgeGate

// Module 4345 (shouldAgeVerifyForAgeGate)
import { isGuildNSFW } from "isGuildOwner";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_7 from "_isNativeReflectConstruct";
import { AgeGateSource } from "result";
import ME from "ME";
import set from "_isNativeReflectConstruct";

let GuildNSFWContentLevel;
let closure_9;
function shouldAgeVerifyForAgeGate() {
  const result = require(4347) /* isReactiveCheckEnabled */.shouldShowTiggerPawtect();
  const obj = require(4347) /* isReactiveCheckEnabled */;
  const obj2 = require(3809) /* isFeatureAgeGated */;
  return require(3809) /* isFeatureAgeGated */.isFeatureAgeGated(require(4956) /* AgeGatedFeature */.AgeGatedFeature.AGE_GATED_SPACES) && result;
}
function useShouldAgeVerifyForAgeGate() {
  let isFeatureAgeGated = require(3809) /* isFeatureAgeGated */.useIsFeatureAgeGated(require(4956) /* AgeGatedFeature */.AgeGatedFeature.AGE_GATED_SPACES);
  const obj = require(3809) /* isFeatureAgeGated */;
  if (isFeatureAgeGated) {
    isFeatureAgeGated = obj2.useShouldShowTiggerPawtect();
  }
  return isFeatureAgeGated;
}
function shouldShowAgeGateForCurrentUser() {
  const currentUser = authStore.getCurrentUser();
  if (null == currentUser) {
    return false;
  } else {
    return true !== currentUser.nsfwAllowed || shouldAgeVerifyForAgeGate();
  }
}
function shouldShowAgeGateForGuildContentLevel(guildId) {
  if (shouldShowAgeGateForCurrentUser()) {
    if (null != guildId) {
      const guild = store.getGuild(guildId);
      let tmp4 = null != guild;
      if (tmp4) {
        tmp4 = isGuildNSFW(guild);
      }
      return tmp4;
    }
  }
  return false;
}
function shouldShowAgeGateForChannelId(id) {
  let tmp = !shouldShowAgeGateForCurrentUser();
  if (!tmp) {
    tmp = null == id;
  }
  let tmp3 = !tmp;
  if (!tmp) {
    tmp3 = isChannelContentGated(channel.getChannel(id));
  }
  return tmp3;
}
function shouldShowAgeGateForVoiceChannel(channelId) {
  let tmp = shouldAgeVerifyForAgeGate();
  if (tmp) {
    tmp = shouldShowAgeGateForChannelId(channelId);
  }
  return tmp;
}
function isChannelOrGuildNSFW(channel) {
  let tmp = null != channel;
  if (tmp) {
    let isNSFWResult = channel.isNSFW();
    if (!isNSFWResult) {
      isNSFWResult = isGuildNSFW(store.getGuild(channel.guild_id));
    }
    tmp = isNSFWResult;
  }
  return tmp;
}
function isChannelContentGated(channel, arg1) {
  if (null == channel) {
    return false;
  } else {
    let didAgreeResult = closure_5.didAgree(channel.guild_id);
    const currentUser = authStore.getCurrentUser();
    if (null != currentUser) {
      const nsfwAllowed = currentUser.nsfwAllowed;
    }
    const obj = require(3809) /* isFeatureAgeGated */;
    const isFeatureAgeGatedResult = require(3809) /* isFeatureAgeGated */.isFeatureAgeGated(require(4956) /* AgeGatedFeature */.AgeGatedFeature.AGE_GATED_SPACES);
    let result = require(4347) /* isReactiveCheckEnabled */.shouldShowTiggerPawtect();
    if (didAgreeResult) {
      didAgreeResult = false !== nsfwAllowed;
    }
    let tmp6 = !didAgreeResult;
    if (!tmp6) {
      if (result) {
        result = isFeatureAgeGatedResult;
      }
      tmp6 = result;
    }
    if (channel.isNSFW()) {
      if (tmp6) {
        return true;
      }
    }
    const guild = store.getGuild(channel.guild_id);
    let tmp9 = null != guild;
    if (tmp9) {
      tmp9 = isGuildNSFW(guild) && tmp6;
      const tmp11 = isGuildNSFW(guild) && tmp6;
    }
    return tmp9;
  }
}
function useIsChannelContentGated(channel) {
  const _require = channel;
  const shouldShowTiggerPawtect = _require(4347).useShouldShowTiggerPawtect();
  const obj = _require(4347);
  const items = [closure_5];
  let stateFromStores = _require(566).useStateFromStores(items, () => {
    let guild_id;
    if (null != channel) {
      guild_id = channel.guild_id;
    }
    return outer1_5.didAgree(guild_id);
  });
  const obj2 = _require(566);
  const items1 = [closure_7];
  const stateFromStores1 = _require(566).useStateFromStores(items1, () => {
    const currentUser = outer1_7.getCurrentUser();
    let nsfwAllowed;
    if (null != currentUser) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return false === nsfwAllowed;
  });
  const obj3 = _require(566);
  let isFeatureAgeGated = _require(3809).useIsFeatureAgeGated(_require(4956).AgeGatedFeature.AGE_GATED_SPACES);
  const obj4 = _require(3809);
  const items2 = [_createForOfIteratorHelperLoose];
  const stateFromStores2 = _require(566).useStateFromStores(items2, () => {
    let guild_id;
    if (null != channel) {
      guild_id = channel.guild_id;
    }
    return outer1_6.getGuild(guild_id);
  });
  if (stateFromStores) {
    stateFromStores = !stateFromStores1;
  }
  let tmp6 = !stateFromStores;
  if (!tmp6) {
    if (isFeatureAgeGated) {
      isFeatureAgeGated = shouldShowTiggerPawtect;
    }
    tmp6 = isFeatureAgeGated;
  }
  let tmp7 = null != channel;
  if (tmp7) {
    const tmp8 = !channel.isNSFW() || !tmp6;
    let tmp9 = !tmp8;
    if (tmp8) {
      let tmp10 = null != stateFromStores2;
      if (tmp10) {
        tmp10 = !(!isGuildNSFW(stateFromStores2) || !tmp6);
        const tmp12 = !isGuildNSFW(stateFromStores2) || !tmp6;
      }
      tmp9 = tmp10;
    }
    tmp7 = tmp9;
  }
  return tmp7;
}
function isCurrentUserMissingDateOfBirth() {
  const currentUser = authStore.getCurrentUser();
  return null != currentUser && null == currentUser.nsfwAllowed;
}
({ GuildNSFWContentLevel, HelpdeskArticles: closure_9 } = ME);
const date = new Date("06/16/2020");
let items = [, ];
({ AGE_RESTRICTED: arr[0], EXPLICIT: arr[1] } = GuildNSFWContentLevel);
let items1 = [, , ];
({ NSFW_SERVER: arr2[0], NSFW_SERVER_INVITE: arr2[1], NSFW_SERVER_INVITE_EMBED: arr2[2] } = AgeGateSource);
let set = new Set(items1);
let result = set.fileFinishedImporting("modules/age_gate/AgeGateUtils.tsx");

export const SERVER_AGE_GATE_SOURCES = set;
export const userNeedsAgeGate = function userNeedsAgeGate() {
  const currentUser = authStore.getCurrentUser();
  let tmp2 = null != currentUser;
  if (tmp2) {
    const obj = importDefault(21);
    tmp2 = importDefault(21).extractTimestamp(currentUser.id) > date.getTime();
    const extractTimestampResult = importDefault(21).extractTimestamp(currentUser.id);
  }
  if (tmp2) {
    tmp2 = null == currentUser.nsfwAllowed;
  }
  return tmp2;
};
export const guildNeedsAgeGate = function guildNeedsAgeGate(nsfwLevel) {
  return items.includes(nsfwLevel.nsfwLevel);
};
export { shouldAgeVerifyForAgeGate };
export { useShouldAgeVerifyForAgeGate };
export const useAgeGateVerifyContentForGuild = function useAgeGateVerifyContentForGuild(stateFromStores) {
  let obj = require(4347) /* isReactiveCheckEnabled */;
  const isAgeVerified = obj.useIsAgeVerified();
  const tmp2 = isGuildNSFW(stateFromStores);
  const items = [closure_7];
  stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => {
    const currentUser = outer1_7.getCurrentUser();
    let nsfwAllowed;
    if (null != currentUser) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return false === nsfwAllowed;
  });
  let num = 7;
  const obj2 = require(566) /* initialize */;
  const intl = require(1212) /* getSystemLocale */.intl;
  const t = require(1212) /* getSystemLocale */.t;
  const stringResult = intl.string(tmp2 ? t.xi46lg : t.ZmwvDc);
  obj = {};
  if (tmp4) {
    obj.title = stringResult;
    const intl6 = require(dependencyMap[num]).intl;
    if (!isAgeVerified) {
      const string = intl6.string;
      const t4 = tmp28(tmp29[num]).t;
      if (tmp2) {
        let stringResult1 = string(t4.V6Gmu9);
      } else {
        stringResult1 = string(t4["5rygLk"]);
      }
      obj.description = stringResult1;
      const intl7 = require(dependencyMap[num]).intl;
      obj.agreement = intl7.string(require(dependencyMap[num]).t.FDSSia);
      obj.modalType = require(7538) /* AgeVerificationModalEntryPoint */.NsfwSpaceWarningModalType.NSFW_CHANNEL_AGE_VERIFY;
    }
    const format = intl6.format;
    let string2 = tmp28(tmp29[num]).t;
    if (tmp2) {
      let formatResult = format(string2["8tk6bB"], {});
    } else {
      formatResult = format(string2.XQZvwn, {});
    }
    obj.description = formatResult;
    const intl8 = require(dependencyMap[num]).intl;
    string2 = intl8.string;
    obj.agreement = string2(require(dependencyMap[num]).t.Zt4Mf4);
    num = require(7538) /* AgeVerificationModalEntryPoint */.NsfwSpaceWarningModalType.NSFW_CHANNEL_AGE_VERIFY;
    obj.modalType = num;
  } else if (stateFromStores) {
    const intl4 = require(dependencyMap[num]).intl;
    const t3 = require(dependencyMap[num]).t;
    obj.title = intl4.string(tmp2 ? t3["H0SG/g"] : t3.NEabBa);
    const intl5 = require(dependencyMap[num]).intl;
    let NSFW_CHANNEL_UNDERAGE = require(dependencyMap[num]).t;
    obj = { helpURL: importDefault(1920).getArticleURL(constants.NSFW_AGE_GATING) };
    obj.description = intl5.format(tmp2 ? NSFW_CHANNEL_UNDERAGE["6++3cX"] : NSFW_CHANNEL_UNDERAGE["2kHZes"], obj);
    obj.agreement = null;
    NSFW_CHANNEL_UNDERAGE = require(7538) /* AgeVerificationModalEntryPoint */.NsfwSpaceWarningModalType.NSFW_CHANNEL_UNDERAGE;
    obj.modalType = NSFW_CHANNEL_UNDERAGE;
    const obj5 = importDefault(1920);
    const tmp21 = tmp2 ? NSFW_CHANNEL_UNDERAGE["6++3cX"] : NSFW_CHANNEL_UNDERAGE["2kHZes"];
  } else {
    obj.title = stringResult;
    const intl2 = require(dependencyMap[num]).intl;
    const t2 = require(dependencyMap[num]).t;
    obj.description = intl2.string(tmp2 ? t2.ZtuRts : t2.E4Cd5I);
    const intl3 = require(dependencyMap[num]).intl;
    obj.agreement = intl3.string(require(dependencyMap[num]).t.wVq7uo);
    obj.modalType = require(7538) /* AgeVerificationModalEntryPoint */.NsfwSpaceWarningModalType.NSFW_CHANNEL_VERIFIED;
    return obj;
  }
};
export const useAgeGateVerifyContent = function useAgeGateVerifyContent(source) {
  let obj = require(4347) /* isReactiveCheckEnabled */;
  const isAgeVerified = obj.useIsAgeVerified();
  let tmp3 = source === AgeGateSource.NSFW_SERVER;
  if (!tmp3) {
    tmp3 = source === AgeGateSource.NSFW_SERVER_INVITE;
  }
  if (!tmp3) {
    tmp3 = source === AgeGateSource.NSFW_SERVER_INVITE_EMBED;
  }
  require(566) /* initialize */;
  [][0] = closure_7;
  if (source !== AgeGateSource.JOIN_LARGE_GUILD_UNDERAGE) {
    if (source !== AgeGateSource.ACCESS_LARGE_GUILD_UNDERAGE) {
      if (isAgeVerified) {
        obj = {};
        const intl9 = require(1212) /* getSystemLocale */.intl;
        obj.verifyAgreementButtonText = intl9.string(require(1212) /* getSystemLocale */.t.Zt4Mf4);
        const intl10 = require(1212) /* getSystemLocale */.intl;
        const format = intl10.format;
        const t2 = require(1212) /* getSystemLocale */.t;
        if (tmp3) {
          let formatResult = format(t2["8tk6bB"], {});
        } else {
          formatResult = format(t2.XQZvwn, {});
        }
        obj.verifyGateDescription = formatResult;
        const intl11 = require(1212) /* getSystemLocale */.intl;
        const string3 = intl11.string;
        let xi46lg2 = require(1212) /* getSystemLocale */.t;
        if (tmp3) {
          xi46lg2 = xi46lg2.xi46lg;
          let string3Result = string3(xi46lg2);
        } else {
          string3Result = string3(xi46lg2.ZmwvDc);
        }
        obj.verifyTitle = string3Result;
      } else {
        if (source === AgeGateSource.LARGE_GUILD) {
          obj = {};
          const intl6 = require(1212) /* getSystemLocale */.intl;
          obj.verifyTitle = intl6.string(require(1212) /* getSystemLocale */.t["7ymzsL"]);
          const intl7 = require(1212) /* getSystemLocale */.intl;
          obj.verifyGateDescription = intl7.string(require(1212) /* getSystemLocale */.t.SxY4IW);
          const intl8 = require(1212) /* getSystemLocale */.intl;
          obj.verifyAgreementButtonText = intl8.string(require(1212) /* getSystemLocale */.t.FDSSia);
          let obj1 = obj;
        } else {
          if (tmp7) {
            if (tmp3) {
              if (!tmp2) {
                obj1 = {};
                const intl = require(1212) /* getSystemLocale */.intl;
                obj1.verifyTitle = intl.string(require(1212) /* getSystemLocale */.t["H0SG/g"]);
                const intl2 = require(1212) /* getSystemLocale */.intl;
                const obj2 = {};
                let obj3 = importDefault(1920);
                obj2.helpURL = obj3.getArticleURL(constants.AGE_GATE);
                obj1.verifyGateDescription = intl2.format(require(1212) /* getSystemLocale */.t["6++3cX"], obj2);
                obj1.verifyAgreementButtonText = null;
              }
            }
          }
          obj3 = {};
          const intl3 = require(1212) /* getSystemLocale */.intl;
          obj3.verifyAgreementButtonText = intl3.string(require(1212) /* getSystemLocale */.t.FDSSia);
          const intl4 = require(1212) /* getSystemLocale */.intl;
          const string = intl4.string;
          const t = require(1212) /* getSystemLocale */.t;
          if (tmp3) {
            let stringResult = string(t.V6Gmu9);
          } else {
            stringResult = string(t["5rygLk"]);
          }
          obj3.verifyGateDescription = stringResult;
          const intl5 = require(1212) /* getSystemLocale */.intl;
          const string2 = intl5.string;
          let xi46lg = require(1212) /* getSystemLocale */.t;
          if (tmp3) {
            xi46lg = xi46lg.xi46lg;
            let string2Result = string2(xi46lg);
          } else {
            string2Result = string2(xi46lg.ZmwvDc);
          }
          obj3.verifyTitle = string2Result;
        }
        return obj1;
      }
    }
  }
  if (source === AgeGateSource.JOIN_LARGE_GUILD_UNDERAGE) {
    let MjQbfi = require(1212) /* getSystemLocale */.t["u/xsK9"];
  } else {
    MjQbfi = require(1212) /* getSystemLocale */.t.MjQbfi;
  }
  const obj4 = {};
  const intl12 = require(1212) /* getSystemLocale */.intl;
  const string4 = intl12.string;
  const t3 = require(1212) /* getSystemLocale */.t;
  if (isAgeVerified) {
    let string4Result = string4(t3.SAoMVJ);
  } else {
    string4Result = string4(t3.SxY4IW);
  }
  obj4.description = string4Result;
  const intl13 = require(1212) /* getSystemLocale */.intl;
  const string5 = intl13.string;
  const t4 = require(1212) /* getSystemLocale */.t;
  if (isAgeVerified) {
    let string5Result = string5(t4.Zt4Mf4);
  } else {
    string5Result = string5(t4.FDSSia);
  }
  obj4.agreement = string5Result;
  const obj5 = {};
  const intl14 = require(1212) /* getSystemLocale */.intl;
  obj5.verifyTitle = intl14.string(MjQbfi);
  ({ description: obj9.verifyGateDescription, agreement: obj9.verifyAgreementButtonText } = obj4);
  return obj5;
};
export { shouldShowAgeGateForCurrentUser };
export { shouldShowAgeGateForGuildContentLevel };
export { shouldShowAgeGateForChannelId };
export { shouldShowAgeGateForVoiceChannel };
export const maybeOpenAgeGateForVoiceChannel = function maybeOpenAgeGateForVoiceChannel(id) {
  const tmp = !shouldShowAgeGateForVoiceChannel(id);
  let flag = !tmp;
  if (!tmp) {
    require(5589) /* openAgeGateModal */.openAgeGateModal(AgeGateSource.NSFW_VOICE_CHANNEL);
    flag = true;
    const obj = require(5589) /* openAgeGateModal */;
  }
  return flag;
};
export const maybeShowAgeGate = function maybeShowAgeGate(guildId, channelId, NSFW_VOICE_CHANNEL) {
  let NSFW_SERVER = NSFW_VOICE_CHANNEL;
  if (shouldShowAgeGateForGuildContentLevel(guildId)) {
    if (null == NSFW_SERVER) {
      NSFW_SERVER = AgeGateSource.NSFW_SERVER;
    }
    require(5589) /* openAgeGateModal */.openAgeGateModal(NSFW_SERVER);
    const obj2 = require(5589) /* openAgeGateModal */;
  } else {
    let tmp2 = isCurrentUserMissingDateOfBirth();
    if (tmp2) {
      tmp2 = shouldShowAgeGateForChannelId(channelId);
    }
    if (tmp2) {
      let NSFW_CHANNEL = NSFW_SERVER;
      if (null == NSFW_SERVER) {
        NSFW_CHANNEL = AgeGateSource.NSFW_CHANNEL;
      }
      require(5589) /* openAgeGateModal */.openAgeGateModal(NSFW_CHANNEL);
      const obj = require(5589) /* openAgeGateModal */;
    }
  }
};
export { isChannelOrGuildNSFW };
export const isChannelAgeVerificationGated = function isChannelAgeVerificationGated(channel) {
  if (null == channel) {
    return false;
  } else {
    const result = require(4347) /* isReactiveCheckEnabled */.shouldShowTiggerPawtect();
    const obj = require(4347) /* isReactiveCheckEnabled */;
    return isChannelOrGuildNSFW(channel) && result;
  }
};
export const userCannotSeeNSFWContent = function userCannotSeeNSFWContent(channel) {
  if (null == channel) {
    return false;
  } else {
    const currentUser = authStore.getCurrentUser();
    if (null != currentUser) {
      const nsfwAllowed = currentUser.nsfwAllowed;
    }
    let tmp4 = isChannelOrGuildNSFW(channel);
    if (tmp4) {
      tmp4 = true !== nsfwAllowed;
    }
    return tmp4;
  }
};
export { isChannelContentGated };
export { useIsChannelContentGated };
export const useShouldHideChannelContent = function useShouldHideChannelContent(stateFromStores) {
  let isChannelSpoilerGated = useIsChannelContentGated(stateFromStores);
  if (!isChannelSpoilerGated) {
    isChannelSpoilerGated = obj.useIsChannelSpoilerGated(stateFromStores);
  }
  return isChannelSpoilerGated;
};
export { isCurrentUserMissingDateOfBirth };
export const shouldAgeVerifyForSettingsToggles = function shouldAgeVerifyForSettingsToggles() {
  let isFeatureAgeGatedResult = require(3809) /* isFeatureAgeGated */.isFeatureAgeGated(require(4956) /* AgeGatedFeature */.AgeGatedFeature.COMMANDS_TOGGLE);
  const obj = require(3809) /* isFeatureAgeGated */;
  if (isFeatureAgeGatedResult) {
    isFeatureAgeGatedResult = obj2.shouldShowTiggerPawtect();
  }
  return isFeatureAgeGatedResult;
};
export const useShouldAgeVerifyForSettingsToggles = function useShouldAgeVerifyForSettingsToggles() {
  let isFeatureAgeGated = require(3809) /* isFeatureAgeGated */.useIsFeatureAgeGated(require(4956) /* AgeGatedFeature */.AgeGatedFeature.COMMANDS_TOGGLE);
  const obj = require(3809) /* isFeatureAgeGated */;
  if (isFeatureAgeGated) {
    isFeatureAgeGated = obj2.useShouldShowTiggerPawtect();
  }
  return isFeatureAgeGated;
};
