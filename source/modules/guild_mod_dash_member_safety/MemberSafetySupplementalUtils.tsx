// Module ID: 6734
// Function ID: 52446
// Name: pendingMemberRequestKey
// Dependencies: [5, 653, 1212, 4814, 6735, 4066, 3976, 507, 2]
// Exports: fetchMemberSupplemental, getIntegrationLabel, getJoinSourceTypeLabel, registerFetchedSupplementals, useGetIntegrationIconString

// Module 6734 (pendingMemberRequestKey)
import useTheme from "useTheme";
import { Endpoints } from "ME";

const require = arg1;
function pendingMemberRequestKey(arg0, arg1) {
  return arg0 + arg1;
}
function createFetchKeys(arg0, arr) {
  let closure_0 = arg0;
  return arr.map((arg0) => outer1_9(closure_0, arg0));
}
function getUserIdFromFetchKey(arg0) {
  return arg0.split("-")[1];
}
function updateFetchRequests(arr) {
  let closure_0 = arg1;
  const item = arr.forEach((arg0) => {
    outer1_5[arg0] = closure_0;
  });
}
function _transformFetchMemberSupplementalResponse(userId) {
  return { userId: userId.user_id, sourceInviteCode: userId.source_invite_code, joinSourceType: userId.join_source_type, inviterId: userId.inviter_id, integrationType: userId.integration_type };
}
async function _fetchMemberSupplemental(arg0, arg1, arg2) {
  let items;
  const tmp2 = outer2_10(arg0, arg1);
  const arr = (function getFetchchableUsers(arr) {
    const found = arr.filter((arg0) => outer4_5[arg0] <= outer4_6.UNFETCHED);
    return found.map(outer3_11);
  })(tmp2);
  if (0 === arr.length) {
    return [];
  } else {
    outer2_12(tmp3, outer2_6.PENDING);
    const HTTP = outer2_0(outer2_2[7]).HTTP;
    let obj = { url: outer2_4.MEMBER_SAFETY_SUPPLEMENTAL(tmp) };
    obj = { user_ids: arr2 };
    obj.body = obj;
    obj.rejectWithError = true;
    const tmp30 = yield HTTP.post(obj);
    const _Array = Array;
    if (Array.isArray(tmp30.body)) {
      const body = tmp30.body;
      const mapped = body.map(outer2_13);
      items = [];
      const item = mapped.forEach((userId) => items.push(userId.userId));
      const tmp13 = outer2_10(arg0, items);
      outer2_12(tmp13, outer2_6.SUCCEEDED);
      outer2_12(outer2_10(arg0, arr2.filter((arg0) => !items.includes(arg0))), outer2_6.FAILED);
      return mapped;
    } else {
      outer2_12(tmp3, outer2_6.FAILED);
      return [];
    }
  }
  tmp = arg0;
}
let closure_5 = {};
let closure_6 = { FAILED: 0, [0]: "FAILED", UNFETCHED: 1, [1]: "UNFETCHED", PENDING: 2, [2]: "PENDING", SUCCEEDED: 3, [3]: "SUCCEEDED", FAILED_NO_RETRY: 4, [4]: "FAILED_NO_RETRY" };
let obj = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", BOT: 1, [1]: "BOT", INTEGRATION: 2, [2]: "INTEGRATION", DISCOVERY: 3, [3]: "DISCOVERY", HUB: 4, [4]: "HUB", INVITE: 5, [5]: "INVITE", VANITY_URL: 6, [6]: "VANITY_URL", MANUAL_MEMBER_VERIFICATION: 7, [7]: "MANUAL_MEMBER_VERIFICATION", SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL: 8, [8]: "SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL" };
obj = { DISCORD: "discord", TWITCH: "twitch", YOUTUBE: "youtube", GUILD_SUBSCRIPTION: "guild_subscription" };
const result = require("getSystemLocale").fileFinishedImporting("modules/guild_mod_dash_member_safety/MemberSafetySupplementalUtils.tsx");

export const registerFetchedSupplementals = function registerFetchedSupplementals(guildId, memberIds) {
  let closure_0 = guildId;
  const item = memberIds.forEach((arg0) => {
    outer1_5[outer1_9(closure_0, arg0)] = outer1_6.SUCCEEDED;
  });
};
export const JoinSourceType = obj;
export const getJoinSourceTypeLabel = function getJoinSourceTypeLabel(arg0) {
  let tmp = arg1;
  let flag = arg2;
  if (arg1 === undefined) {
    tmp = null;
  }
  if (flag === undefined) {
    flag = false;
  }
  if (obj.BOT === arg0) {
    const intl10 = require(1212) /* getSystemLocale */.intl;
    return intl10.string(require(1212) /* getSystemLocale */.t.HumZAi);
  } else if (obj.INTEGRATION === arg0) {
    const intl9 = require(1212) /* getSystemLocale */.intl;
    return intl9.string(require(1212) /* getSystemLocale */.t.gmCUFw);
  } else if (obj.DISCOVERY === arg0) {
    const intl8 = require(1212) /* getSystemLocale */.intl;
    return intl8.string(require(1212) /* getSystemLocale */.t["Ql/e9Y"]);
  } else if (obj.HUB === arg0) {
    const intl7 = require(1212) /* getSystemLocale */.intl;
    return intl7.string(require(1212) /* getSystemLocale */.t.Op8B3O);
  } else if (obj.INVITE === arg0) {
    const intl6 = require(1212) /* getSystemLocale */.intl;
    return intl6.string(require(1212) /* getSystemLocale */.t["/3vIRd"]);
  } else if (obj.VANITY_URL === arg0) {
    if (null != tmp) {
      if (!flag) {
        const intl4 = require(1212) /* getSystemLocale */.intl;
        obj = { vanityUrl: tmp };
        let formatToPlainStringResult = intl4.formatToPlainString(require(1212) /* getSystemLocale */.t.EIUjRy, obj);
      }
      return formatToPlainStringResult;
    }
    const intl5 = require(1212) /* getSystemLocale */.intl;
    formatToPlainStringResult = intl5.string(require(1212) /* getSystemLocale */.t.dGiD1O);
  } else if (obj.MANUAL_MEMBER_VERIFICATION === arg0) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(require(1212) /* getSystemLocale */.t.vdu7oS);
  } else if (obj.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL === arg0) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(require(1212) /* getSystemLocale */.t["9/ZreX"]);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.DvMBkS);
  }
};
export const IntegrationType = obj;
export const getIntegrationLabel = function getIntegrationLabel(arg0) {
  if (obj.TWITCH === arg0) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(require(1212) /* getSystemLocale */.t.AVGAkw);
  } else if (obj.YOUTUBE === arg0) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(require(1212) /* getSystemLocale */.t.PHSAsn);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.gmCUFw);
  }
};
export const useGetIntegrationIconString = function useGetIntegrationIconString(arg0) {
  const obj = importDefault(4814);
  const value = obj.get(require(6735) /* usePlatformAllowed */.useLegacyPlatformType(arg0));
  let tmp3 = null;
  if (null != value) {
    const items = [, ];
    ({ TWITCH: arr[0], YOUTUBE: arr[1] } = obj);
    tmp3 = null;
    if (items.includes(arg0)) {
      let str = value.icon;
      const _HermesInternal = HermesInternal;
      const obj3 = require(3976) /* AccessibilityAnnouncer */;
      str = "')";
      const combined = "url('" + require(3976) /* AccessibilityAnnouncer */.isThemeDark(tmp2) ? str.darkSVG : str.lightSVG + "')";
      const tmp7 = require(3976) /* AccessibilityAnnouncer */.isThemeDark(tmp2) ? str.darkSVG : str.lightSVG;
    }
  }
  return tmp3;
};
export const fetchMemberSupplemental = function fetchMemberSupplemental() {
  return _fetchMemberSupplemental(...arguments);
};
