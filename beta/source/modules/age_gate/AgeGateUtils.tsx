// Module ID: 5046
// Function ID: 5047
// Name: AgeGateUtils
// Dependencies: [2063, 2045, 5047, 2067, 1372, 1099, 1074, 1115, 11, 5048, 5735, 5736, 13308, 504, 7861, 2111, 6632, 6747, 2]
// Exports: guildNeedsAgeGate, isChannelAgeVerificationGated, isChannelOrGuildNSFW, isCurrentUserMissingDateOfBirth, maybeOpenAgeGateForVoiceChannel, maybeShowAgeGate, shouldAgeVerifyForAgeGate, shouldAgeVerifyForSettingsToggles, shouldShowAgeGateForChannelId, shouldShowAgeGateForCurrentUser, shouldShowAgeGateForGuildContentLevel, useAgeGateVerifyContent, useAgeGateVerifyContentForGuild, useShouldAgeVerifyForAgeGate, useShouldAgeVerifyForSettingsToggles, useShouldHideChannelContent, userCannotSeeNSFWContent, userNeedsAgeGate

// Module 5046 (AgeGateUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import get_initialized from "get initialized" /* 504 */;
import AgeGateConstants from "AgeGateConstants" /* 1099 */;
import intl17 from "intl" /* 1115 */;
import GuildRecord from "GuildRecord" /* 2063 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2111 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 5048 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5735 */;
import AgeGatedFeature from "AgeGatedFeature" /* 5736 */;
import AgeGateModalActionCreators from "AgeGateModalActionCreators" /* 6632 */;
import SpoilerChannelUtils from "SpoilerChannelUtils" /* 6747 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 7861 */;
import getTinyBroncoWarningDescriptions from "getTinyBroncoWarningDescriptions" /* 13308 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildNSFWAgreeStore from "GuildNSFWAgreeStore" /* 5047 */;
import GuildStore from "GuildStore" /* 2067 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let GuildNSFWContentLevel;
let c9;
function shouldShowAgeGateForVoiceChannel(channelId) {
  const obj = AgeVerificationUtils;
  const result = obj.shouldShowTiggerPawtect();
  const obj2 = RegionalFeatureConfigUtils;
  let tmp4 = obj2.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result;
  if (tmp4) {
    const currentUser = UserStore.getCurrentUser();
    let flag = false;
    if (null != currentUser) {
      const tmpResult = AgeVerificationUtils;
      const result1 = tmpResult.shouldShowTiggerPawtect();
      const tmpResult2 = RegionalFeatureConfigUtils;
      flag = true !== currentUser.nsfwAllowed || tmpResult2.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result1;
      true !== currentUser.nsfwAllowed || tmpResult2.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result1;
    }
    let tmp12 = !flag;
    if (flag) {
      tmp12 = null == channelId;
    }
    tmp4 = !tmp12 && isChannelContentGated(ChannelStore.getChannel(channelId));
    const tmp13 = !tmp12 && isChannelContentGated(ChannelStore.getChannel(channelId));
  }
  return tmp4;
}
function isChannelContentGated(channel) {
  if (null == channel) {
    return false;
  } else {
    let nsfwAllowed;
    let didAgreeResult = GuildNSFWAgreeStore.didAgree(channel.guild_id);
    const currentUser = UserStore.getCurrentUser();
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    const obj = RegionalFeatureConfigUtils;
    const isFeatureAgeGatedResult = obj.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES);
    const obj2 = AgeVerificationUtils;
    let result = obj2.shouldShowTiggerPawtect();
    if (didAgreeResult) {
      didAgreeResult = false !== nsfwAllowed;
    }
    let tmp6 = !didAgreeResult;
    if (didAgreeResult) {
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
    const guild = GuildStore.getGuild(channel.guild_id);
    let tmp9 = null != guild;
    if (tmp9) {
      tmp9 = isGuildNSFW(guild) && tmp6;
      isGuildNSFW(guild) && tmp6;
    }
    return tmp9;
  }
}
function useIsChannelContentGated(channel) {
  _require = channel;
  const obj = require("AgeVerificationUtils");
  const shouldShowTiggerPawtect = obj.useShouldShowTiggerPawtect();
  items = [GuildNSFWAgreeStore];
  const obj2 = require("get initialized");
  let stateFromStores = obj2.useStateFromStores(items, () => {
    let guild_id;
    const didAgree = GuildNSFWAgreeStore.didAgree;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    return didAgree(guild_id);
  });
  const items1 = [UserStore];
  const obj3 = require("get initialized");
  const stateFromStores1 = obj3.useStateFromStores(items1, () => {
    currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return false === nsfwAllowed;
  });
  const obj4 = require("RegionalFeatureConfigUtils");
  let isFeatureAgeGated = obj4.useIsFeatureAgeGated(require("AgeGatedFeature").AgeGatedFeature.AGE_GATED_SPACES);
  const items2 = [GuildStore];
  const obj5 = require("get initialized");
  const stateFromStores2 = obj5.useStateFromStores(items2, () => {
    let guild_id;
    const getGuild = GuildStore.getGuild;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    return getGuild(guild_id);
  });
  if (stateFromStores) {
    stateFromStores = !stateFromStores1;
  }
  let tmp6 = !stateFromStores;
  if (stateFromStores) {
    if (isFeatureAgeGated) {
      isFeatureAgeGated = shouldShowTiggerPawtect;
    }
    tmp6 = isFeatureAgeGated;
  }
  let tmp7 = null != channel;
  if (tmp7) {
    const isNSFWResult = channel.isNSFW();
    let tmp9 = !isNSFWResult;
    if (isNSFWResult) {
      tmp9 = !tmp6;
    }
    let tmp10 = !tmp9;
    if (tmp9) {
      let tmp11 = null != stateFromStores2;
      if (tmp11) {
        const tmp13 = isGuildNSFW(stateFromStores2);
        let tmp14 = !tmp13;
        if (tmp13) {
          tmp14 = !tmp6;
        }
        tmp11 = !tmp14;
      }
      tmp10 = tmp11;
    }
    tmp7 = tmp10;
  }
  return tmp7;
}
const isGuildNSFW = GuildRecord.isGuildNSFW;
const AgeGateSource = AgeGateConstants.AgeGateSource;
({ GuildNSFWContentLevel, HelpdeskArticles: c9 } = Constants);
const date = new Date("06/16/2020");
let items = [, ];
({ AGE_RESTRICTED: arr[0], EXPLICIT: arr[1] } = GuildNSFWContentLevel);
let items1 = [, , ];
({ NSFW_SERVER: arr2[0], NSFW_SERVER_INVITE: arr2[1], NSFW_SERVER_INVITE_EMBED: arr2[2] } = AgeGateSource);
const set = new Set(items1);
let result = size.fileFinishedImporting("modules/age_gate/AgeGateUtils.tsx");

export const SERVER_AGE_GATE_SOURCES = set;
export const userNeedsAgeGate = function userNeedsAgeGate() {
  const currentUser = UserStore.getCurrentUser();
  let tmp2 = null != currentUser;
  if (tmp2) {
    const obj = SnowflakeUtilsDefault;
    const extractTimestampResult = obj.extractTimestamp(currentUser.id);
    tmp2 = extractTimestampResult > date.getTime();
  }
  if (tmp2) {
    tmp2 = null == currentUser.nsfwAllowed;
  }
  return tmp2;
};
export const guildNeedsAgeGate = function guildNeedsAgeGate(nsfwLevel) {
  return items.includes(nsfwLevel.nsfwLevel);
};
export const shouldAgeVerifyForAgeGate = function shouldAgeVerifyForAgeGate() {
  const obj = AgeVerificationUtils;
  const result = obj.shouldShowTiggerPawtect();
  const obj2 = RegionalFeatureConfigUtils;
  const tmp2 = obj2.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result;
  return tmp2;
};
export const useShouldAgeVerifyForAgeGate = function useShouldAgeVerifyForAgeGate() {
  const obj = RegionalFeatureConfigUtils;
  let isFeatureAgeGated = obj.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES);
  const obj2 = AgeVerificationUtils;
  if (isFeatureAgeGated) {
    isFeatureAgeGated = obj2.useShouldShowTiggerPawtect();
  }
  return isFeatureAgeGated;
};
export const useAgeGateVerifyContentForGuild = function useAgeGateVerifyContentForGuild(stateFromStores) {
  let Zt4Mf4;
  let formatResult;
  let intl8;
  let obj9;
  let string2Result;
  let string5;
  let teen;
  let tmp16;
  let unverified;
  const obj = AgeVerificationUtils;
  const isAgeVerified = obj.useIsAgeVerified();
  const tmp5 = isGuildNSFW(stateFromStores);
  items = [UserStore];
  const obj2 = get_initialized;
  stateFromStores = obj2.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return false === nsfwAllowed;
  });
  const obj3 = RegionalFeatureConfigUtils;
  let isFeatureAgeGated = obj3.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES);
  const obj4 = AgeVerificationUtils;
  const tmp4 = isGuildNSFW;
  if (isFeatureAgeGated) {
    isFeatureAgeGated = obj4.useShouldShowTiggerPawtect();
  }
  let tmp8 = null;
  const tmpResult = RegionalFeatureConfigUtils;
  if (tmpResult.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES)) {
    let tinyBroncoWarningDescriptions;
    const tmp4Result = tmp4(stateFromStores);
    let str;
    if (stateFromStores != null) {
      str = stateFromStores.name;
    }
    if (str == null) {
      str = "";
    }
    if (tmp4Result) {
      const tmpResult2 = getTinyBroncoWarningDescriptions;
      tinyBroncoWarningDescriptions = tmpResult2.getTinyBroncoWarningDescriptions(tmp4Result, str);
    } else {
      tinyBroncoWarningDescriptions = null;
    }
    tmp8 = tinyBroncoWarningDescriptions;
  }
  const intl = tmp(1115).intl;
  const string = intl.string;
  const t = tmp(1115).t;
  const stringResult = string(tmp5 ? t.ZtuRts : t.E4Cd5I);
  const intl2 = tmp(1115).intl;
  const format = intl2.format;
  const t2 = tmp(1115).t;
  if (tmp5) {
    formatResult = format(t2["8tk6bB"], {});
  } else {
    formatResult = format(t2.XQZvwn, {});
  }
  const intl3 = tmp(1115).intl;
  const string2 = intl3.string;
  const t3 = tmp(1115).t;
  if (tmp5) {
    string2Result = string2(t3.V6Gmu9);
  } else {
    string2Result = string2(t3["5rygLk"]);
  }
  const intl4 = tmp(1115).intl;
  const string3 = intl4.string;
  const t4 = tmp(1115).t;
  const string3Result = string3(tmp5 ? t4.xi46lg : t4.ZmwvDc);
  if (isFeatureAgeGated) {
    let obj6;
    if (isAgeVerified) {
      const obj5 = { title: string3Result, description: teen, agreement: string5(Zt4Mf4), modalType: AgeVerificationAnalyticsUtils.NsfwSpaceWarningModalType.NSFW_CHANNEL_AGE_VERIFY, emphasiseDisagree: null != tmp8 };
      teen = undefined;
      if (tmp8 != null) {
        teen = tmp8.teen;
      }
      if (teen == null) {
        teen = formatResult;
      }
      const intl9 = tmp(1115).intl;
      string5 = intl9.string;
      if (null != tmp8) {
        Zt4Mf4 = tmp(1115).t.FDSSia;
      } else {
        Zt4Mf4 = tmp(1115).t.Zt4Mf4;
      }
      obj6 = obj5;
    } else {
      obj6 = { title: string3Result, description: unverified, agreement: intl8.string(intl17.t.FDSSia), modalType: AgeVerificationAnalyticsUtils.NsfwSpaceWarningModalType.NSFW_CHANNEL_AGE_VERIFY };
      unverified = undefined;
      if (tmp8 != null) {
        unverified = tmp8.unverified;
      }
      if (unverified == null) {
        unverified = string2Result;
      }
      intl8 = tmp(1115).intl;
    }
    tmp16 = obj6;
  } else {
    const obj7 = { title: null, description: null, agreement: null, modalType: null };
    if (stateFromStores) {
      const intl6 = tmp(1115).intl;
      const string4 = intl6.string;
      const t5 = tmp(1115).t;
      obj7.title = string4(tmp5 ? t5["H0SG/g"] : t5.NEabBa);
      const intl7 = tmp(1115).intl;
      const format2 = intl7.format;
      const t6 = tmp(1115).t;
      const obj8 = { helpURL: obj9.getArticleURL(constants.NSFW_AGE_GATING) };
      const tmp17 = tmp5 ? t6["6++3cX"] : t6["2kHZes"];
      obj9 = HelpdeskUtilsDefault;
      obj7.description = format2(tmp17, obj8);
      obj7.modalType = AgeVerificationAnalyticsUtils.NsfwSpaceWarningModalType.NSFW_CHANNEL_UNDERAGE;
      tmp16 = obj7;
    } else {
      obj7.title = string3Result;
      let adult;
      if (tmp8 != null) {
        adult = tmp8.adult;
      }
      if (adult == null) {
        adult = stringResult;
      }
      obj7.description = adult;
      const intl5 = tmp(1115).intl;
      obj7.agreement = intl5.string(intl17.t.wVq7uo);
      obj7.modalType = AgeVerificationAnalyticsUtils.NsfwSpaceWarningModalType.NSFW_CHANNEL_VERIFIED;
      tmp16 = obj7;
    }
  }
  return tmp16;
};
export const useAgeGateVerifyContent = function useAgeGateVerifyContent(source) {
  let MjQbfi;
  let f3Pet9;
  let f3Pet92;
  let format;
  let intl;
  let intl16;
  let intl3;
  let intl7;
  let intl8;
  let intl9;
  let obj7;
  let obj9;
  let prop;
  let string2Result;
  let string3;
  let string5Result;
  let string6;
  let string7Result;
  let string8Result;
  let teen;
  let unverified;
  const obj = AgeVerificationUtils;
  const isAgeVerified = obj.useIsAgeVerified();
  const obj2 = RegionalFeatureConfigUtils;
  const isFeatureAgeGated = obj2.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES);
  const obj3 = AgeVerificationUtils;
  items = [UserStore];
  const tmp5 = isFeatureAgeGated && obj3.useShouldShowTiggerPawtect();
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return false === nsfwAllowed;
  });
  let tinyBroncoWarningDescriptions = null;
  const tmpResult3 = RegionalFeatureConfigUtils;
  if (tmpResult3.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES)) {
    tinyBroncoWarningDescriptions = null;
    if (source === AgeGateSource.NSFW_SERVER || source === AgeGateSource.NSFW_SERVER_INVITE || source === AgeGateSource.NSFW_SERVER_INVITE_EMBED) {
      const tmpResult4 = getTinyBroncoWarningDescriptions;
      tinyBroncoWarningDescriptions = tmpResult4.getTinyBroncoWarningDescriptions(true, "");
    }
  }
  if (source !== AgeGateSource.JOIN_LARGE_GUILD_UNDERAGE) {
    if (source !== AgeGateSource.ACCESS_LARGE_GUILD_UNDERAGE) {
      let obj6;
      if (isAgeVerified) {
        let Zt4Mf4;
        const intl10 = tmp(1115).intl;
        const string4 = intl10.string;
        if (null != tinyBroncoWarningDescriptions) {
          Zt4Mf4 = tmp(1115).t.FDSSia;
        } else {
          Zt4Mf4 = tmp(1115).t.Zt4Mf4;
        }
        const obj4 = { verifyAgreementButtonText: string4(Zt4Mf4), verifyGateDescription: teen, verifyTitle: string5Result, verifyDisagreementButtonText: string6(f3Pet92), verifyEmphasiseDisagree: null != tinyBroncoWarningDescriptions };
        teen = undefined;
        if (tinyBroncoWarningDescriptions != null) {
          teen = tinyBroncoWarningDescriptions.teen;
        }
        if (teen == null) {
          let format2Result;
          const intl11 = tmp(1115).intl;
          const format2 = intl11.format;
          const t3 = tmp(1115).t;
          if (source === AgeGateSource.NSFW_SERVER || source === AgeGateSource.NSFW_SERVER_INVITE || source === AgeGateSource.NSFW_SERVER_INVITE_EMBED) {
            format2Result = format2(t3["8tk6bB"], {});
          } else {
            format2Result = format2(t3.XQZvwn, {});
          }
          teen = format2Result;
        }
        const intl12 = tmp(1115).intl;
        const string5 = intl12.string;
        const t4 = tmp(1115).t;
        if (source === AgeGateSource.NSFW_SERVER || source === AgeGateSource.NSFW_SERVER_INVITE || source === AgeGateSource.NSFW_SERVER_INVITE_EMBED) {
          string5Result = string5(t4.xi46lg);
        } else {
          string5Result = string5(t4.ZmwvDc);
        }
        const intl13 = tmp(1115).intl;
        string6 = intl13.string;
        if (null != tinyBroncoWarningDescriptions) {
          f3Pet92 = tmp(1115).t["/g10LC"];
        } else {
          f3Pet92 = tmp(1115).t.f3Pet9;
        }
        obj6 = obj4;
      } else if (source === AgeGateSource.LARGE_GUILD) {
        const obj5 = { verifyTitle: intl7.string(intl17.t["7ymzsL"]), verifyGateDescription: intl8.string(intl17.t.SxY4IW), verifyAgreementButtonText: intl9.string(intl17.t.FDSSia) };
        intl7 = tmp(1115).intl;
        intl8 = tmp(1115).intl;
        intl9 = tmp(1115).intl;
        obj6 = obj5;
      } else {
        if (stateFromStores) {
          if (source === AgeGateSource.NSFW_SERVER || source === AgeGateSource.NSFW_SERVER_INVITE || source === AgeGateSource.NSFW_SERVER_INVITE_EMBED) {
            if (!tmp5) {
              obj6 = { verifyTitle: intl.string(intl17.t["H0SG/g"]), verifyGateDescription: format(prop, obj7), verifyAgreementButtonText: null };
              intl = tmp(1115).intl;
              const intl2 = tmp(1115).intl;
              format = intl2.format;
              obj7 = { helpURL: obj9.getArticleURL(constants.AGE_GATE) };
              prop = tmp(1115).t["6++3cX"];
              obj9 = HelpdeskUtilsDefault;
            }
          }
        }
        const obj8 = { verifyAgreementButtonText: intl3.string(intl17.t.FDSSia), verifyGateDescription: unverified, verifyTitle: string2Result, verifyDisagreementButtonText: string3(f3Pet9) };
        intl3 = tmp(1115).intl;
        unverified = undefined;
        if (tinyBroncoWarningDescriptions != null) {
          unverified = tinyBroncoWarningDescriptions.unverified;
        }
        if (unverified == null) {
          let stringResult;
          const intl4 = tmp(1115).intl;
          const string = intl4.string;
          const t = tmp(1115).t;
          if (source === AgeGateSource.NSFW_SERVER || source === AgeGateSource.NSFW_SERVER_INVITE || source === AgeGateSource.NSFW_SERVER_INVITE_EMBED) {
            stringResult = string(t.V6Gmu9);
          } else {
            stringResult = string(t["5rygLk"]);
          }
          unverified = stringResult;
        }
        const intl5 = tmp(1115).intl;
        const string2 = intl5.string;
        const t2 = tmp(1115).t;
        if (source === AgeGateSource.NSFW_SERVER || source === AgeGateSource.NSFW_SERVER_INVITE || source === AgeGateSource.NSFW_SERVER_INVITE_EMBED) {
          string2Result = string2(t2.xi46lg);
        } else {
          string2Result = string2(t2.ZmwvDc);
        }
        const intl6 = tmp(1115).intl;
        string3 = intl6.string;
        if (null != tinyBroncoWarningDescriptions) {
          f3Pet9 = tmp(1115).t["/g10LC"];
        } else {
          f3Pet9 = tmp(1115).t.f3Pet9;
        }
        obj6 = obj8;
      }
      return obj6;
    }
  }
  if (source === AgeGateSource.JOIN_LARGE_GUILD_UNDERAGE) {
    MjQbfi = tmp(1115).t["u/xsK9"];
  } else {
    MjQbfi = tmp(1115).t.MjQbfi;
  }
  const intl14 = tmp(1115).intl;
  const string7 = intl14.string;
  const t5 = tmp(1115).t;
  if (isAgeVerified) {
    string7Result = string7(t5.SAoMVJ);
  } else {
    string7Result = string7(t5.SxY4IW);
  }
  const intl15 = tmp(1115).intl;
  const string8 = intl15.string;
  const t6 = tmp(1115).t;
  if (isAgeVerified) {
    string8Result = string8(t6.Zt4Mf4);
  } else {
    string8Result = string8(t6.FDSSia);
  }
  const obj10 = { verifyTitle: intl16.string(MjQbfi), verifyGateDescription: string7Result, verifyAgreementButtonText: string8Result };
  intl16 = tmp(1115).intl;
  return obj10;
};
export const shouldShowAgeGateForCurrentUser = function shouldShowAgeGateForCurrentUser() {
  const currentUser = UserStore.getCurrentUser();
  if (null == currentUser) {
    return false;
  } else {
    const obj = AgeVerificationUtils;
    const result = obj.shouldShowTiggerPawtect();
    const obj2 = RegionalFeatureConfigUtils;
    const tmp6 = true !== currentUser.nsfwAllowed || obj2.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result;
    return tmp6;
  }
};
export const shouldShowAgeGateForGuildContentLevel = function shouldShowAgeGateForGuildContentLevel(arg0) {
  const currentUser = UserStore.getCurrentUser();
  let flag = false;
  if (null != currentUser) {
    const obj = AgeVerificationUtils;
    const result = obj.shouldShowTiggerPawtect();
    const obj2 = RegionalFeatureConfigUtils;
    flag = true !== currentUser.nsfwAllowed || obj2.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result;
    true !== currentUser.nsfwAllowed || obj2.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result;
  }
  if (flag) {
    if (null != arg0) {
      const guild = GuildStore.getGuild(arg0);
      const tmp10 = null != guild && isGuildNSFW(guild);
      return tmp10;
    }
  }
  return false;
};
export const shouldShowAgeGateForChannelId = function shouldShowAgeGateForChannelId(id) {
  const currentUser = UserStore.getCurrentUser();
  let flag = false;
  if (null != currentUser) {
    const obj = AgeVerificationUtils;
    const result = obj.shouldShowTiggerPawtect();
    const obj2 = RegionalFeatureConfigUtils;
    flag = true !== currentUser.nsfwAllowed || obj2.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result;
    true !== currentUser.nsfwAllowed || obj2.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result;
  }
  let tmp7 = !flag;
  if (flag) {
    tmp7 = null == id;
  }
  const tmp8 = !tmp7 && isChannelContentGated(ChannelStore.getChannel(id));
  return tmp8;
};
export { shouldShowAgeGateForVoiceChannel };
export const maybeOpenAgeGateForVoiceChannel = function maybeOpenAgeGateForVoiceChannel(id) {
  let flag = shouldShowAgeGateForVoiceChannel(id);
  if (flag) {
    const obj = AgeGateModalActionCreators;
    obj.openAgeGateModal(AgeGateSource.NSFW_VOICE_CHANNEL);
    flag = true;
  }
  return flag;
};
export const maybeShowAgeGate = function maybeShowAgeGate(guildId, channelId, JOIN_LARGE_GUILD_UNDERAGE) {
  const currentUser = UserStore.getCurrentUser();
  let flag = false;
  if (null != currentUser) {
    const obj2 = AgeVerificationUtils;
    const result = obj2.shouldShowTiggerPawtect();
    const obj3 = RegionalFeatureConfigUtils;
    flag = true !== currentUser.nsfwAllowed || obj3.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result;
    true !== currentUser.nsfwAllowed || obj3.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result;
  }
  let flag3 = false;
  if (flag) {
    flag3 = false;
    if (null != guildId) {
      const guild = GuildStore.getGuild(guildId);
      flag3 = null != guild && isGuildNSFW(guild);
      const tmp10 = null != guild && isGuildNSFW(guild);
    }
  }
  let NSFW_SERVER = JOIN_LARGE_GUILD_UNDERAGE;
  if (flag3) {
    if (null == NSFW_SERVER) {
      NSFW_SERVER = AgeGateSource.NSFW_SERVER;
    }
    const obj6 = AgeGateModalActionCreators;
    obj6.openAgeGateModal(NSFW_SERVER);
  } else {
    const currentUser1 = obj.getCurrentUser();
    let tmp13 = null != currentUser1 && null == currentUser1.nsfwAllowed;
    if (tmp13) {
      const currentUser2 = obj.getCurrentUser();
      let flag4 = false;
      if (null != currentUser2) {
        const obj4 = AgeVerificationUtils;
        const result1 = obj4.shouldShowTiggerPawtect();
        const obj5 = RegionalFeatureConfigUtils;
        flag4 = true !== currentUser2.nsfwAllowed || obj5.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result1;
        true !== currentUser2.nsfwAllowed || obj5.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result1;
      }
      let tmp21 = !flag4;
      if (flag4) {
        tmp21 = null == channelId;
      }
      tmp13 = !tmp21 && isChannelContentGated(ChannelStore.getChannel(channelId));
      const tmp22 = !tmp21 && isChannelContentGated(ChannelStore.getChannel(channelId));
    }
    if (tmp13) {
      let NSFW_CHANNEL = NSFW_SERVER;
      const openAgeGateModal = AgeGateModalActionCreators.openAgeGateModal;
      AgeGateModalActionCreators;
      if (NSFW_SERVER == null) {
        NSFW_CHANNEL = AgeGateSource.NSFW_CHANNEL;
      }
      openAgeGateModal(NSFW_CHANNEL);
    }
  }
};
export const isChannelOrGuildNSFW = function isChannelOrGuildNSFW(channel) {
  let tmp = null != channel;
  if (tmp) {
    tmp = channel.isNSFW() || isGuildNSFW(GuildStore.getGuild(channel.guild_id));
    const isNSFWResult = channel.isNSFW() || isGuildNSFW(GuildStore.getGuild(channel.guild_id));
  }
  return tmp;
};
export const isChannelAgeVerificationGated = function isChannelAgeVerificationGated(isNSFW) {
  if (null == isNSFW) {
    return false;
  } else {
    let tmp4 = null != isNSFW;
    const obj = AgeVerificationUtils;
    const result = obj.shouldShowTiggerPawtect();
    if (tmp4) {
      tmp4 = isNSFW.isNSFW() || isGuildNSFW(GuildStore.getGuild(isNSFW.guild_id));
      const isNSFWResult = isNSFW.isNSFW() || isGuildNSFW(GuildStore.getGuild(isNSFW.guild_id));
    }
    if (tmp4) {
      tmp4 = result;
    }
    return tmp4;
  }
};
export const userCannotSeeNSFWContent = function userCannotSeeNSFWContent(channel) {
  if (null == channel) {
    return false;
  } else {
    let nsfwAllowed;
    const currentUser = UserStore.getCurrentUser();
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    let tmp3 = null != channel;
    if (tmp3) {
      tmp3 = channel.isNSFW() || isGuildNSFW(GuildStore.getGuild(channel.guild_id));
      const isNSFWResult = channel.isNSFW() || isGuildNSFW(GuildStore.getGuild(channel.guild_id));
    }
    if (tmp3) {
      tmp3 = true !== nsfwAllowed;
    }
    return tmp3;
  }
};
export { isChannelContentGated };
export { useIsChannelContentGated };
export const useShouldHideChannelContent = function useShouldHideChannelContent(stateFromStores) {
  const tmp = useIsChannelContentGated(stateFromStores);
  const obj = SpoilerChannelUtils;
  const tmp2 = tmp || obj.useIsChannelSpoilerGated(stateFromStores);
  return tmp2;
};
export const isCurrentUserMissingDateOfBirth = function isCurrentUserMissingDateOfBirth() {
  const currentUser = UserStore.getCurrentUser();
  return null != currentUser && null == currentUser.nsfwAllowed;
};
export const shouldAgeVerifyForSettingsToggles = function shouldAgeVerifyForSettingsToggles() {
  const obj = RegionalFeatureConfigUtils;
  let isFeatureAgeGatedResult = obj.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.COMMANDS_TOGGLE);
  const obj2 = AgeVerificationUtils;
  if (isFeatureAgeGatedResult) {
    isFeatureAgeGatedResult = obj2.shouldShowTiggerPawtect();
  }
  return isFeatureAgeGatedResult;
};
export const useShouldAgeVerifyForSettingsToggles = function useShouldAgeVerifyForSettingsToggles() {
  const obj = RegionalFeatureConfigUtils;
  let isFeatureAgeGated = obj.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.COMMANDS_TOGGLE);
  const obj2 = AgeVerificationUtils;
  if (isFeatureAgeGated) {
    isFeatureAgeGated = obj2.useShouldShowTiggerPawtect();
  }
  return isFeatureAgeGated;
};
