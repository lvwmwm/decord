// Module ID: 4341
// Function ID: 38340
// Name: shouldAgeVerifyForAgeGate
// Dependencies: []
// Exports: guildNeedsAgeGate, isChannelAgeVerificationGated, maybeOpenAgeGateForVoiceChannel, maybeShowAgeGate, shouldAgeVerifyForSettingsToggles, useAgeGateVerifyContent, useAgeGateVerifyContentForGuild, useShouldAgeVerifyForSettingsToggles, useShouldHideChannelContent, userCannotSeeNSFWContent, userNeedsAgeGate

// Module 4341 (shouldAgeVerifyForAgeGate)
let GuildNSFWContentLevel;
function shouldAgeVerifyForAgeGate() {
  const result = require(dependencyMap[9]).shouldShowTiggerPawtect();
  const obj = require(dependencyMap[9]);
  const obj2 = require(dependencyMap[10]);
  return require(dependencyMap[10]).isFeatureAgeGated(require(dependencyMap[11]).AgeGatedFeature.AGE_GATED_SPACES) && result;
}
function useShouldAgeVerifyForAgeGate() {
  let isFeatureAgeGated = require(dependencyMap[10]).useIsFeatureAgeGated(require(dependencyMap[11]).AgeGatedFeature.AGE_GATED_SPACES);
  const obj = require(dependencyMap[10]);
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
    const obj = require(dependencyMap[10]);
    const isFeatureAgeGatedResult = require(dependencyMap[10]).isFeatureAgeGated(require(dependencyMap[11]).AgeGatedFeature.AGE_GATED_SPACES);
    let result = require(dependencyMap[9]).shouldShowTiggerPawtect();
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
  const require = channel;
  const shouldShowTiggerPawtect = require(dependencyMap[9]).useShouldShowTiggerPawtect();
  const obj = require(dependencyMap[9]);
  const items = [closure_5];
  let stateFromStores = require(dependencyMap[12]).useStateFromStores(items, () => {
    let guild_id;
    if (null != arg0) {
      guild_id = arg0.guild_id;
    }
    return closure_5.didAgree(guild_id);
  });
  const obj2 = require(dependencyMap[12]);
  const items1 = [closure_7];
  const stateFromStores1 = require(dependencyMap[12]).useStateFromStores(items1, () => {
    const currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (null != currentUser) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return false === nsfwAllowed;
  });
  const obj3 = require(dependencyMap[12]);
  let isFeatureAgeGated = require(dependencyMap[10]).useIsFeatureAgeGated(require(dependencyMap[11]).AgeGatedFeature.AGE_GATED_SPACES);
  const obj4 = require(dependencyMap[10]);
  const items2 = [closure_6];
  const stateFromStores2 = require(dependencyMap[12]).useStateFromStores(items2, () => {
    let guild_id;
    if (null != arg0) {
      guild_id = arg0.guild_id;
    }
    return guild.getGuild(guild_id);
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
const isGuildNSFW = require(dependencyMap[0]).isGuildNSFW;
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const AgeGateSource = require(dependencyMap[5]).AgeGateSource;
const _module = require(dependencyMap[6]);
({ GuildNSFWContentLevel, HelpdeskArticles: closure_9 } = _module);
const date = new Date("06/16/2020");
const items = [, ];
({ AGE_RESTRICTED: arr[0], EXPLICIT: arr[1] } = GuildNSFWContentLevel);
const items1 = [, , ];
({ NSFW_SERVER: arr2[0], NSFW_SERVER_INVITE: arr2[1], NSFW_SERVER_INVITE_EMBED: arr2[2] } = AgeGateSource);
const set = new Set(items1);
const _module1 = require(dependencyMap[17]);
const result = _module1.fileFinishedImporting("modules/age_gate/AgeGateUtils.tsx");

export const SERVER_AGE_GATE_SOURCES = set;
export const userNeedsAgeGate = function userNeedsAgeGate() {
  const currentUser = authStore.getCurrentUser();
  let tmp2 = null != currentUser;
  if (tmp2) {
    const obj = importDefault(dependencyMap[8]);
    tmp2 = importDefault(dependencyMap[8]).extractTimestamp(currentUser.id) > date.getTime();
    const extractTimestampResult = importDefault(dependencyMap[8]).extractTimestamp(currentUser.id);
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
  let obj = require(dependencyMap[9]);
  const isAgeVerified = obj.useIsAgeVerified();
  const tmp2 = isGuildNSFW(stateFromStores);
  const items = [closure_7];
  stateFromStores = require(dependencyMap[12]).useStateFromStores(items, () => {
    const currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (null != currentUser) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return false === nsfwAllowed;
  });
  let num = 7;
  const obj2 = require(dependencyMap[12]);
  const intl = require(dependencyMap[7]).intl;
  const t = require(dependencyMap[7]).t;
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
        stringResult1 = string(t4.5rygLk);
      }
      obj.description = stringResult1;
      const intl7 = require(dependencyMap[num]).intl;
      obj.agreement = intl7.string(require(dependencyMap[num]).t.FDSSia);
      obj.modalType = require(dependencyMap[13]).NsfwSpaceWarningModalType.NSFW_CHANNEL_AGE_VERIFY;
    }
    const format = intl6.format;
    let string2 = tmp28(tmp29[num]).t;
    if (tmp2) {
      let formatResult = format(string2.8tk6bB, {});
    } else {
      formatResult = format(string2.XQZvwn, {});
    }
    obj.description = formatResult;
    const intl8 = require(dependencyMap[num]).intl;
    string2 = intl8.string;
    obj.agreement = string2(require(dependencyMap[num]).t.Zt4Mf4);
    num = require(dependencyMap[13]).NsfwSpaceWarningModalType.NSFW_CHANNEL_AGE_VERIFY;
    obj.modalType = num;
  } else if (stateFromStores) {
    const intl4 = require(dependencyMap[num]).intl;
    const t3 = require(dependencyMap[num]).t;
    obj.title = intl4.string(tmp2 ? t3.H0SG/g : t3.NEabBa);
    const intl5 = require(dependencyMap[num]).intl;
    let NSFW_CHANNEL_UNDERAGE = require(dependencyMap[num]).t;
    obj = { helpURL: importDefault(dependencyMap[14]).getArticleURL(constants.NSFW_AGE_GATING) };
    obj.description = intl5.format(tmp2 ? NSFW_CHANNEL_UNDERAGE.6++3cX : NSFW_CHANNEL_UNDERAGE.2kHZes, obj);
    obj.agreement = null;
    NSFW_CHANNEL_UNDERAGE = require(dependencyMap[13]).NsfwSpaceWarningModalType.NSFW_CHANNEL_UNDERAGE;
    obj.modalType = NSFW_CHANNEL_UNDERAGE;
    const obj5 = importDefault(dependencyMap[14]);
    const tmp21 = tmp2 ? NSFW_CHANNEL_UNDERAGE.6++3cX : NSFW_CHANNEL_UNDERAGE.2kHZes;
  } else {
    obj.title = stringResult;
    const intl2 = require(dependencyMap[num]).intl;
    const t2 = require(dependencyMap[num]).t;
    obj.description = intl2.string(tmp2 ? t2.ZtuRts : t2.E4Cd5I);
    const intl3 = require(dependencyMap[num]).intl;
    obj.agreement = intl3.string(require(dependencyMap[num]).t.wVq7uo);
    obj.modalType = require(dependencyMap[13]).NsfwSpaceWarningModalType.NSFW_CHANNEL_VERIFIED;
    return obj;
  }
};
export const useAgeGateVerifyContent = function useAgeGateVerifyContent(source) {
  let obj = require(dependencyMap[9]);
  const isAgeVerified = obj.useIsAgeVerified();
  let tmp3 = source === AgeGateSource.NSFW_SERVER;
  if (!tmp3) {
    tmp3 = source === AgeGateSource.NSFW_SERVER_INVITE;
  }
  if (!tmp3) {
    tmp3 = source === AgeGateSource.NSFW_SERVER_INVITE_EMBED;
  }
  require(dependencyMap[12]);
  [][0] = closure_7;
  if (source !== AgeGateSource.JOIN_LARGE_GUILD_UNDERAGE) {
    if (source !== AgeGateSource.ACCESS_LARGE_GUILD_UNDERAGE) {
      if (isAgeVerified) {
        obj = {};
        const intl9 = require(dependencyMap[7]).intl;
        obj.verifyAgreementButtonText = intl9.string(require(dependencyMap[7]).t.Zt4Mf4);
        const intl10 = require(dependencyMap[7]).intl;
        const format = intl10.format;
        const t2 = require(dependencyMap[7]).t;
        if (tmp3) {
          let formatResult = format(t2.8tk6bB, {});
        } else {
          formatResult = format(t2.XQZvwn, {});
        }
        obj.verifyGateDescription = formatResult;
        const intl11 = require(dependencyMap[7]).intl;
        const string3 = intl11.string;
        let xi46lg2 = require(dependencyMap[7]).t;
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
          const intl6 = require(dependencyMap[7]).intl;
          obj.verifyTitle = intl6.string(require(dependencyMap[7]).t.7ymzsL);
          const intl7 = require(dependencyMap[7]).intl;
          obj.verifyGateDescription = intl7.string(require(dependencyMap[7]).t.SxY4IW);
          const intl8 = require(dependencyMap[7]).intl;
          obj.verifyAgreementButtonText = intl8.string(require(dependencyMap[7]).t.FDSSia);
          let obj1 = obj;
        } else {
          if (tmp7) {
            if (tmp3) {
              if (!tmp2) {
                obj1 = {};
                const intl = require(dependencyMap[7]).intl;
                obj1.verifyTitle = intl.string(require(dependencyMap[7]).t.H0SG/g);
                const intl2 = require(dependencyMap[7]).intl;
                const obj2 = {};
                let obj3 = importDefault(dependencyMap[14]);
                obj2.helpURL = obj3.getArticleURL(constants.AGE_GATE);
                obj1.verifyGateDescription = intl2.format(require(dependencyMap[7]).t.6++3cX, obj2);
                obj1.verifyAgreementButtonText = null;
              }
            }
          }
          obj3 = {};
          const intl3 = require(dependencyMap[7]).intl;
          obj3.verifyAgreementButtonText = intl3.string(require(dependencyMap[7]).t.FDSSia);
          const intl4 = require(dependencyMap[7]).intl;
          const string = intl4.string;
          const t = require(dependencyMap[7]).t;
          if (tmp3) {
            let stringResult = string(t.V6Gmu9);
          } else {
            stringResult = string(t.5rygLk);
          }
          obj3.verifyGateDescription = stringResult;
          const intl5 = require(dependencyMap[7]).intl;
          const string2 = intl5.string;
          let xi46lg = require(dependencyMap[7]).t;
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
    let MjQbfi = require(dependencyMap[7]).t.u/xsK9;
  } else {
    MjQbfi = require(dependencyMap[7]).t.MjQbfi;
  }
  const obj4 = {};
  const intl12 = require(dependencyMap[7]).intl;
  const string4 = intl12.string;
  const t3 = require(dependencyMap[7]).t;
  if (isAgeVerified) {
    let string4Result = string4(t3.SAoMVJ);
  } else {
    string4Result = string4(t3.SxY4IW);
  }
  obj4.description = string4Result;
  const intl13 = require(dependencyMap[7]).intl;
  const string5 = intl13.string;
  const t4 = require(dependencyMap[7]).t;
  if (isAgeVerified) {
    let string5Result = string5(t4.Zt4Mf4);
  } else {
    string5Result = string5(t4.FDSSia);
  }
  obj4.agreement = string5Result;
  const obj5 = {};
  const intl14 = require(dependencyMap[7]).intl;
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
    require(dependencyMap[15]).openAgeGateModal(AgeGateSource.NSFW_VOICE_CHANNEL);
    flag = true;
    const obj = require(dependencyMap[15]);
  }
  return flag;
};
export const maybeShowAgeGate = function maybeShowAgeGate(guildId, channelId, NSFW_VOICE_CHANNEL) {
  let NSFW_SERVER = NSFW_VOICE_CHANNEL;
  if (shouldShowAgeGateForGuildContentLevel(guildId)) {
    if (null == NSFW_SERVER) {
      NSFW_SERVER = AgeGateSource.NSFW_SERVER;
    }
    require(dependencyMap[15]).openAgeGateModal(NSFW_SERVER);
    const obj2 = require(dependencyMap[15]);
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
      require(dependencyMap[15]).openAgeGateModal(NSFW_CHANNEL);
      const obj = require(dependencyMap[15]);
    }
  }
};
export { isChannelOrGuildNSFW };
export const isChannelAgeVerificationGated = function isChannelAgeVerificationGated(channel) {
  if (null == channel) {
    return false;
  } else {
    const result = require(dependencyMap[9]).shouldShowTiggerPawtect();
    const obj = require(dependencyMap[9]);
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
  let isFeatureAgeGatedResult = require(dependencyMap[10]).isFeatureAgeGated(require(dependencyMap[11]).AgeGatedFeature.COMMANDS_TOGGLE);
  const obj = require(dependencyMap[10]);
  if (isFeatureAgeGatedResult) {
    isFeatureAgeGatedResult = obj2.shouldShowTiggerPawtect();
  }
  return isFeatureAgeGatedResult;
};
export const useShouldAgeVerifyForSettingsToggles = function useShouldAgeVerifyForSettingsToggles() {
  let isFeatureAgeGated = require(dependencyMap[10]).useIsFeatureAgeGated(require(dependencyMap[11]).AgeGatedFeature.COMMANDS_TOGGLE);
  const obj = require(dependencyMap[10]);
  if (isFeatureAgeGated) {
    isFeatureAgeGated = obj2.useShouldShowTiggerPawtect();
  }
  return isFeatureAgeGated;
};
