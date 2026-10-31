// Module ID: 6734
// Function ID: 6735
// Name: AgeGateUtils
// Dependencies: [4881, 4863, 6735, 4885, 4917, 1383, 1097, 1072, 1113, 11, 5693, 6731, 6736, 6726, 504, 6725, 6729, 2061, 6739, 6752, 6753, 2]
// Exports: getAgeGateType, guildNeedsAgeGate, isChannelAgeVerificationGated, isCurrentUserMissingDateOfBirth, maybeOpenAgeGateForVoiceChannel, maybeShowAgeGate, shouldAgeVerifyForSettingsToggles, shouldShowAgeGateForChannelId, shouldShowAgeGateForCurrentUser, shouldShowAgeGateForGuildContentLevel, shouldShowAgeGateForVoiceChannel, useAgeGateVerifyContent, useAgeGateVerifyContentForGuild, useShouldAgeVerifyForSettingsToggles, useShouldHideChannelContent, userNeedsAgeGate

// Module 6734 (AgeGateUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import get_initialized from "get initialized" /* 504 */;
import intl17 from "intl" /* 1113 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2061 */;
import GuildRecord from "GuildRecord" /* 4881 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5693 */;
import shouldAgeVerifyForAgeGate2 from "shouldAgeVerifyForAgeGate" /* 6725 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6726 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6729 */;
import AgeGatedFeature from "AgeGatedFeature" /* 6731 */;
import getTinyBroncoWarningDescriptions from "getTinyBroncoWarningDescriptions" /* 6736 */;
import AgeGateModalActionCreators from "AgeGateModalActionCreators" /* 6739 */;
import NSFWContentGate from "NSFWContentGate" /* 6752 */;
import SpoilerChannelUtils from "SpoilerChannelUtils" /* 6753 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import GuildNSFWAgreeStore from "GuildNSFWAgreeStore" /* 6735 */;
import GuildStore from "GuildStore" /* 4885 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4917 */;
import UserStore from "UserStore" /* 1383 */;
import AgeGateConstants from "AgeGateConstants" /* 1097 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let GuildNSFWContentLevel;
let unpackModuleId;
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
function useIsChannelContentGated(stateFromStores) {
  _require = stateFromStores;
  const obj = require("AgeVerificationUtils");
  const shouldShowTiggerPawtect = obj.useShouldShowTiggerPawtect();
  items = [GuildNSFWAgreeStore];
  const obj2 = require("get initialized");
  stateFromStores = obj2.useStateFromStores(items, () => {
    let guild_id;
    const didAgree = GuildNSFWAgreeStore.didAgree;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
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
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
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
  let tmp7 = null != stateFromStores;
  if (tmp7) {
    const isNSFWResult = stateFromStores.isNSFW();
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
const AgeGateType = AgeGateConstants.AgeGateType;
({ GuildNSFWContentLevel, HelpdeskArticles: unpackModuleId } = Constants);
const date = new Date("06/16/2020");
let items = [, ];
({ AGE_RESTRICTED: arr[0], EXPLICIT: arr[1] } = GuildNSFWContentLevel);
let items1 = [, , ];
({ NSFW_SERVER: arr2[0], NSFW_SERVER_INVITE: arr2[1], NSFW_SERVER_INVITE_EMBED: arr2[2] } = AgeGateSource);
let items2 = [, ];
({ FAMILY_CENTER: arr3[0], DEEP_LINK_PROMPT: arr3[1] } = AgeGateSource);
const set = new Set(items1);
const set1 = new Set(items2);
let result = size.fileFinishedImporting("modules/age_gate/AgeGateUtils.tsx");

export const SERVER_AGE_GATE_SOURCES = set;
export function userNeedsAgeGate() {
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
}
export function guildNeedsAgeGate(nsfwLevel) {
  return items.includes(nsfwLevel.nsfwLevel);
}
export function useAgeGateVerifyContentForGuild(stateFromStores) {
  let Zt4Mf4;
  let formatResult;
  let intl8;
  let obj8;
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
  const obj3 = shouldAgeVerifyForAgeGate2;
  const shouldAgeVerifyForAgeGate = obj3.useShouldAgeVerifyForAgeGate();
  let tmp8 = null;
  const obj4 = RegionalFeatureConfigUtils;
  const tmp4 = isGuildNSFW;
  if (obj4.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES)) {
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
      const tmpResult = getTinyBroncoWarningDescriptions;
      tinyBroncoWarningDescriptions = tmpResult.getTinyBroncoWarningDescriptions(tmp4Result, str);
    } else {
      tinyBroncoWarningDescriptions = null;
    }
    tmp8 = tinyBroncoWarningDescriptions;
  }
  const intl = tmp(1113).intl;
  const string = intl.string;
  const t = tmp(1113).t;
  const stringResult = string(tmp5 ? t.ZtuRts : t.E4Cd5I);
  const intl2 = tmp(1113).intl;
  const format = intl2.format;
  const t2 = tmp(1113).t;
  if (tmp5) {
    formatResult = format(t2["8tk6bB"], {});
  } else {
    formatResult = format(t2.XQZvwn, {});
  }
  const intl3 = tmp(1113).intl;
  const string2 = intl3.string;
  const t3 = tmp(1113).t;
  if (tmp5) {
    string2Result = string2(t3.V6Gmu9);
  } else {
    string2Result = string2(t3["5rygLk"]);
  }
  const intl4 = tmp(1113).intl;
  const string3 = intl4.string;
  const t4 = tmp(1113).t;
  const string3Result = string3(tmp5 ? t4.xi46lg : t4.ZmwvDc);
  if (shouldAgeVerifyForAgeGate) {
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
      const intl9 = tmp(1113).intl;
      string5 = intl9.string;
      if (null != tmp8) {
        Zt4Mf4 = tmp(1113).t.FDSSia;
      } else {
        Zt4Mf4 = tmp(1113).t.Zt4Mf4;
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
      intl8 = tmp(1113).intl;
    }
    tmp16 = obj6;
  } else {
    const obj7 = { title: null, description: null, agreement: null, modalType: null };
    if (stateFromStores) {
      const intl6 = tmp(1113).intl;
      const string4 = intl6.string;
      const t5 = tmp(1113).t;
      obj7.title = string4(tmp5 ? t5["H0SG/g"] : t5.NEabBa);
      const intl7 = tmp(1113).intl;
      const format2 = intl7.format;
      const t6 = tmp(1113).t;
      const obj9 = { helpURL: obj8.getArticleURL(unpackModuleId.NSFW_AGE_GATING) };
      const tmp17 = tmp5 ? t6["6++3cX"] : t6["2kHZes"];
      obj8 = HelpdeskUtilsDefault;
      obj7.description = format2(tmp17, obj9);
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
      const intl5 = tmp(1113).intl;
      obj7.agreement = intl5.string(intl17.t.wVq7uo);
      obj7.modalType = AgeVerificationAnalyticsUtils.NsfwSpaceWarningModalType.NSFW_CHANNEL_VERIFIED;
      tmp16 = obj7;
    }
  }
  return tmp16;
}
export function useAgeGateVerifyContent(source) {
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
  let obj6;
  let obj8;
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
  let tmp6 = source === AgeGateSource.NSFW_SERVER;
  const obj2 = shouldAgeVerifyForAgeGate2;
  const shouldAgeVerifyForAgeGate = obj2.useShouldAgeVerifyForAgeGate();
  if (!tmp6) {
    tmp6 = source === tmp5.NSFW_SERVER_INVITE;
  }
  if (!tmp6) {
    tmp6 = source === tmp5.NSFW_SERVER_INVITE_EMBED;
  }
  items = [UserStore];
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
    if (tmp6) {
      const tmpResult4 = getTinyBroncoWarningDescriptions;
      tinyBroncoWarningDescriptions = tmpResult4.getTinyBroncoWarningDescriptions(true, "");
    }
  }
  if (source !== AgeGateSource.JOIN_LARGE_GUILD_UNDERAGE) {
    if (source !== AgeGateSource.ACCESS_LARGE_GUILD_UNDERAGE) {
      let obj5;
      if (isAgeVerified) {
        let Zt4Mf4;
        const intl10 = tmp(1113).intl;
        const string4 = intl10.string;
        if (null != tinyBroncoWarningDescriptions) {
          Zt4Mf4 = tmp(1113).t.FDSSia;
        } else {
          Zt4Mf4 = tmp(1113).t.Zt4Mf4;
        }
        const obj3 = { verifyAgreementButtonText: string4(Zt4Mf4), verifyGateDescription: teen, verifyTitle: string5Result, verifyDisagreementButtonText: string6(f3Pet92), verifyEmphasiseDisagree: null != tinyBroncoWarningDescriptions };
        teen = undefined;
        if (tinyBroncoWarningDescriptions != null) {
          teen = tinyBroncoWarningDescriptions.teen;
        }
        if (teen == null) {
          let format2Result;
          const intl11 = tmp(1113).intl;
          const format2 = intl11.format;
          const t3 = tmp(1113).t;
          if (tmp6) {
            format2Result = format2(t3["8tk6bB"], {});
          } else {
            format2Result = format2(t3.XQZvwn, {});
          }
          teen = format2Result;
        }
        const intl12 = tmp(1113).intl;
        const string5 = intl12.string;
        const t4 = tmp(1113).t;
        if (tmp6) {
          string5Result = string5(t4.xi46lg);
        } else {
          string5Result = string5(t4.ZmwvDc);
        }
        const intl13 = tmp(1113).intl;
        string6 = intl13.string;
        if (null != tinyBroncoWarningDescriptions) {
          f3Pet92 = tmp(1113).t["/g10LC"];
        } else {
          f3Pet92 = tmp(1113).t.f3Pet9;
        }
        obj5 = obj3;
      } else if (source === AgeGateSource.LARGE_GUILD) {
        const obj4 = { verifyTitle: intl7.string(intl17.t["7ymzsL"]), verifyGateDescription: intl8.string(intl17.t.SxY4IW), verifyAgreementButtonText: intl9.string(intl17.t.FDSSia) };
        intl7 = tmp(1113).intl;
        intl8 = tmp(1113).intl;
        intl9 = tmp(1113).intl;
        obj5 = obj4;
      } else {
        if (stateFromStores) {
          if (tmp6) {
            if (!shouldAgeVerifyForAgeGate) {
              obj5 = { verifyTitle: intl.string(intl17.t["H0SG/g"]), verifyGateDescription: format(prop, obj6), verifyAgreementButtonText: null };
              intl = tmp(1113).intl;
              const intl2 = tmp(1113).intl;
              format = intl2.format;
              obj6 = { helpURL: obj8.getArticleURL(unpackModuleId.AGE_GATE) };
              prop = tmp(1113).t["6++3cX"];
              obj8 = HelpdeskUtilsDefault;
            }
          }
        }
        const obj7 = { verifyAgreementButtonText: intl3.string(intl17.t.FDSSia), verifyGateDescription: unverified, verifyTitle: string2Result, verifyDisagreementButtonText: string3(f3Pet9) };
        intl3 = tmp(1113).intl;
        unverified = undefined;
        if (tinyBroncoWarningDescriptions != null) {
          unverified = tinyBroncoWarningDescriptions.unverified;
        }
        if (unverified == null) {
          let stringResult;
          const intl4 = tmp(1113).intl;
          const string = intl4.string;
          const t = tmp(1113).t;
          if (tmp6) {
            stringResult = string(t.V6Gmu9);
          } else {
            stringResult = string(t["5rygLk"]);
          }
          unverified = stringResult;
        }
        const intl5 = tmp(1113).intl;
        const string2 = intl5.string;
        const t2 = tmp(1113).t;
        if (tmp6) {
          string2Result = string2(t2.xi46lg);
        } else {
          string2Result = string2(t2.ZmwvDc);
        }
        const intl6 = tmp(1113).intl;
        string3 = intl6.string;
        if (null != tinyBroncoWarningDescriptions) {
          f3Pet9 = tmp(1113).t["/g10LC"];
        } else {
          f3Pet9 = tmp(1113).t.f3Pet9;
        }
        obj5 = obj7;
      }
      return obj5;
    }
  }
  if (source === AgeGateSource.JOIN_LARGE_GUILD_UNDERAGE) {
    MjQbfi = tmp(1113).t["u/xsK9"];
  } else {
    MjQbfi = tmp(1113).t.MjQbfi;
  }
  const intl14 = tmp(1113).intl;
  const string7 = intl14.string;
  const t5 = tmp(1113).t;
  if (isAgeVerified) {
    string7Result = string7(t5.SAoMVJ);
  } else {
    string7Result = string7(t5.SxY4IW);
  }
  const intl15 = tmp(1113).intl;
  const string8 = intl15.string;
  const t6 = tmp(1113).t;
  if (isAgeVerified) {
    string8Result = string8(t6.Zt4Mf4);
  } else {
    string8Result = string8(t6.FDSSia);
  }
  const obj9 = { verifyTitle: intl16.string(MjQbfi), verifyGateDescription: string7Result, verifyAgreementButtonText: string8Result };
  intl16 = tmp(1113).intl;
  return obj9;
}
export function shouldShowAgeGateForCurrentUser() {
  const currentUser = UserStore.getCurrentUser();
  if (null == currentUser) {
    return false;
  } else {
    const obj = shouldAgeVerifyForAgeGate2;
    const tmp4 = true !== currentUser.nsfwAllowed || obj.shouldAgeVerifyForAgeGate();
    return tmp4;
  }
}
export function shouldShowAgeGateForGuildContentLevel(arg0) {
  const currentUser = UserStore.getCurrentUser();
  let flag = false;
  if (null != currentUser) {
    const obj = shouldAgeVerifyForAgeGate2;
    flag = true !== currentUser.nsfwAllowed || obj.shouldAgeVerifyForAgeGate();
    true !== currentUser.nsfwAllowed || obj.shouldAgeVerifyForAgeGate();
  }
  if (flag) {
    if (null != arg0) {
      const guild = GuildStore.getGuild(arg0);
      const tmp8 = null != guild && isGuildNSFW(guild);
      return tmp8;
    }
  }
  return false;
}
export function shouldShowAgeGateForChannelId(id) {
  const currentUser = UserStore.getCurrentUser();
  let flag = false;
  if (null != currentUser) {
    const obj = shouldAgeVerifyForAgeGate2;
    flag = true !== currentUser.nsfwAllowed || obj.shouldAgeVerifyForAgeGate();
    true !== currentUser.nsfwAllowed || obj.shouldAgeVerifyForAgeGate();
  }
  let tmp5 = !flag;
  if (flag) {
    tmp5 = null == id;
  }
  const tmp6 = !tmp5 && isChannelContentGated(ChannelStore.getChannel(id));
  return tmp6;
}
export function shouldShowAgeGateForVoiceChannel(channelId) {
  const obj = shouldAgeVerifyForAgeGate2;
  let result = obj.shouldAgeVerifyForAgeGate();
  if (result) {
    const currentUser = UserStore.getCurrentUser();
    let flag = false;
    if (null != currentUser) {
      const tmpResult = shouldAgeVerifyForAgeGate2;
      flag = true !== currentUser.nsfwAllowed || tmpResult.shouldAgeVerifyForAgeGate();
      true !== currentUser.nsfwAllowed || tmpResult.shouldAgeVerifyForAgeGate();
    }
    let tmp9 = !flag;
    if (flag) {
      tmp9 = null == channelId;
    }
    result = !tmp9 && isChannelContentGated(ChannelStore.getChannel(channelId));
    const tmp10 = !tmp9 && isChannelContentGated(ChannelStore.getChannel(channelId));
  }
  return result;
}
export function maybeOpenAgeGateForVoiceChannel(id) {
  const obj = shouldAgeVerifyForAgeGate2;
  let result = obj.shouldAgeVerifyForAgeGate();
  if (result) {
    const currentUser = UserStore.getCurrentUser();
    let flag = false;
    if (null != currentUser) {
      const tmpResult = shouldAgeVerifyForAgeGate2;
      flag = true !== currentUser.nsfwAllowed || tmpResult.shouldAgeVerifyForAgeGate();
      true !== currentUser.nsfwAllowed || tmpResult.shouldAgeVerifyForAgeGate();
    }
    let tmp8 = !flag;
    if (flag) {
      tmp8 = null == id;
    }
    result = !tmp8 && isChannelContentGated(ChannelStore.getChannel(id));
    const tmp9 = !tmp8 && isChannelContentGated(ChannelStore.getChannel(id));
  }
  let flag3 = result;
  if (flag3) {
    const tmpResult2 = AgeGateModalActionCreators;
    tmpResult2.openAgeGateModal(AgeGateSource.NSFW_VOICE_CHANNEL, id);
    flag3 = true;
  }
  return flag3;
}
export function maybeShowAgeGate(guildId, channelId, JOIN_LARGE_GUILD_UNDERAGE) {
  const currentUser = UserStore.getCurrentUser();
  let flag = false;
  if (null != currentUser) {
    const obj2 = shouldAgeVerifyForAgeGate2;
    flag = true !== currentUser.nsfwAllowed || obj2.shouldAgeVerifyForAgeGate();
    true !== currentUser.nsfwAllowed || obj2.shouldAgeVerifyForAgeGate();
  }
  let flag3 = false;
  if (flag) {
    flag3 = false;
    if (null != guildId) {
      const guild = GuildStore.getGuild(guildId);
      flag3 = null != guild && isGuildNSFW(guild);
      const tmp8 = null != guild && isGuildNSFW(guild);
    }
  }
  let NSFW_SERVER = JOIN_LARGE_GUILD_UNDERAGE;
  if (flag3) {
    if (null == NSFW_SERVER) {
      NSFW_SERVER = AgeGateSource.NSFW_SERVER;
    }
    const obj4 = AgeGateModalActionCreators;
    obj4.openAgeGateModal(NSFW_SERVER);
  } else {
    const currentUser1 = obj.getCurrentUser();
    let tmp11 = null != currentUser1 && null == currentUser1.nsfwAllowed;
    if (tmp11) {
      const currentUser2 = obj.getCurrentUser();
      let flag4 = false;
      if (null != currentUser2) {
        const obj3 = shouldAgeVerifyForAgeGate2;
        flag4 = true !== currentUser2.nsfwAllowed || obj3.shouldAgeVerifyForAgeGate();
        true !== currentUser2.nsfwAllowed || obj3.shouldAgeVerifyForAgeGate();
      }
      let tmp17 = !flag4;
      if (flag4) {
        tmp17 = null == channelId;
      }
      tmp11 = !tmp17 && isChannelContentGated(ChannelStore.getChannel(channelId));
      const tmp18 = !tmp17 && isChannelContentGated(ChannelStore.getChannel(channelId));
    }
    if (tmp11) {
      let NSFW_CHANNEL = NSFW_SERVER;
      const openAgeGateModal = AgeGateModalActionCreators.openAgeGateModal;
      AgeGateModalActionCreators;
      if (NSFW_SERVER == null) {
        NSFW_CHANNEL = AgeGateSource.NSFW_CHANNEL;
      }
      openAgeGateModal(NSFW_CHANNEL);
    }
  }
}
export const SOURCES_WITH_DOB = set1;
export function getAgeGateType(source) {
  if (set1.has(source)) {
    return AgeGateType.DATE_OF_BIRTH;
  } else {
    const obj = shouldAgeVerifyForAgeGate2;
    if (obj.shouldAgeVerifyForAgeGate()) {
      return AgeGateType.AGE_ASSURANCE;
    } else {
      let AGE_ASSURANCE;
      const channel = ChannelStore.getChannel(SelectedChannelStore.getChannelId());
      const currentUser = UserStore.getCurrentUser();
      let nsfwAllowed;
      if (currentUser != null) {
        nsfwAllowed = currentUser.nsfwAllowed;
      }
      if (false !== nsfwAllowed) {
        AGE_ASSURANCE = AgeGateType.DATE_OF_BIRTH;
      } else {
        AGE_ASSURANCE = AgeGateType.AGE_ASSURANCE;
      }
      return AGE_ASSURANCE;
    }
  }
}
export const isChannelOrGuildNSFW = NSFWContentGate.isChannelOrGuildNSFW;
export const userCannotSeeNSFWContent = NSFWContentGate.userCannotSeeNSFWContent;
export function isChannelAgeVerificationGated(channel) {
  if (null == channel) {
    return false;
  } else {
    const obj = AgeVerificationUtils;
    const result = obj.shouldShowTiggerPawtect();
    const obj2 = NSFWContentGate;
    const tmp4 = obj2.isChannelOrGuildNSFW(channel) && result;
    return tmp4;
  }
}
export { isChannelContentGated };
export { useIsChannelContentGated };
export function useShouldHideChannelContent(stateFromStores) {
  const tmp = useIsChannelContentGated(stateFromStores);
  const obj = SpoilerChannelUtils;
  const tmp2 = tmp || obj.useIsChannelSpoilerGated(stateFromStores);
  return tmp2;
}
export function isCurrentUserMissingDateOfBirth() {
  const currentUser = UserStore.getCurrentUser();
  return null != currentUser && null == currentUser.nsfwAllowed;
}
export function shouldAgeVerifyForSettingsToggles() {
  const obj = RegionalFeatureConfigUtils;
  let isFeatureAgeGatedResult = obj.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.COMMANDS_TOGGLE);
  const obj2 = AgeVerificationUtils;
  if (isFeatureAgeGatedResult) {
    isFeatureAgeGatedResult = obj2.shouldShowTiggerPawtect();
  }
  return isFeatureAgeGatedResult;
}
export function useShouldAgeVerifyForSettingsToggles() {
  const obj = RegionalFeatureConfigUtils;
  let isFeatureAgeGated = obj.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.COMMANDS_TOGGLE);
  const obj2 = AgeVerificationUtils;
  if (isFeatureAgeGated) {
    isFeatureAgeGated = obj2.useShouldShowTiggerPawtect();
  }
  return isFeatureAgeGated;
}
