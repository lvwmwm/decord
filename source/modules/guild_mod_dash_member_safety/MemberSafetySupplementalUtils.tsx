// Module ID: 6729
// Function ID: 52403
// Name: pendingMemberRequestKey
// Dependencies: []
// Exports: fetchMemberSupplemental, getIntegrationLabel, getJoinSourceTypeLabel, registerFetchedSupplementals, useGetIntegrationIconString

// Module 6729 (pendingMemberRequestKey)
function pendingMemberRequestKey(arg0, arg1) {
  return arg0 + arg1;
}
function createFetchKeys(arg0, arr) {
  arr = arg0;
  return arr.map((arg0) => callback(arg0, arg0));
}
function getUserIdFromFetchKey(arg0) {
  return arg0.split("-")[1];
}
function updateFetchRequests(arr) {
  const item = arr.forEach((arg0) => {
    closure_5[arg0] = arg1;
  });
}
function _transformFetchMemberSupplementalResponse(userId) {
  return { userId: userId.user_id, sourceInviteCode: userId.source_invite_code, joinSourceType: userId.join_source_type, inviterId: userId.inviter_id, integrationType: userId.integration_type };
}
async function _fetchMemberSupplemental(arg0, arg1, arg2) {
  let items;
  const tmp2 = callback(arg0, arg1);
  const arr = function getFetchchableUsers(arr) {
    const found = arr.filter((arg0) => closure_5[arg0] <= constants.UNFETCHED);
    return found.map(closure_11);
  }(tmp2);
  if (0 === arr.length) {
    return [];
  } else {
    callback2(tmp3, constants.PENDING);
    const HTTP = items(closure_2[7]).HTTP;
    let obj = { url: closure_4.MEMBER_SAFETY_SUPPLEMENTAL(tmp) };
    obj = { user_ids: arr2 };
    obj.body = obj;
    obj.rejectWithError = true;
    const tmp30 = yield HTTP.post(obj);
    const _Array = Array;
    if (Array.isArray(tmp30.body)) {
      const body = tmp30.body;
      const mapped = body.map(closure_13);
      items = [];
      const item = mapped.forEach((userId) => items.push(userId.userId));
      const tmp13 = callback(arg0, items);
      callback2(tmp13, constants.SUCCEEDED);
      callback2(callback(arg0, arr2.filter((arg0) => !items.includes(arg0))), constants.FAILED);
      return mapped;
    } else {
      callback2(tmp3, constants.FAILED);
      return [];
    }
  }
  const tmp = arg0;
}
let closure_3 = importDefault(dependencyMap[0]);
const Endpoints = arg1(dependencyMap[1]).Endpoints;
let closure_5 = {};
let closure_6 = { FAILED: 0, [0]: "FAILED", UNFETCHED: 1, [1]: "UNFETCHED", PENDING: 2, [2]: "PENDING", SUCCEEDED: 3, [3]: "SUCCEEDED", FAILED_NO_RETRY: 4, [4]: "FAILED_NO_RETRY" };
let obj = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", BOT: 1, [1]: "BOT", INTEGRATION: 2, [2]: "INTEGRATION", DISCOVERY: 3, [3]: "DISCOVERY", HUB: 4, [4]: "HUB", INVITE: 5, [5]: "INVITE", VANITY_URL: 6, [6]: "VANITY_URL", MANUAL_MEMBER_VERIFICATION: 7, [7]: "MANUAL_MEMBER_VERIFICATION", SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL: 8, [8]: "SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL" };
obj = { DISCORD: "discord", TWITCH: "twitch", YOUTUBE: "youtube", GUILD_SUBSCRIPTION: "guild_subscription" };
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/guild_mod_dash_member_safety/MemberSafetySupplementalUtils.tsx");

export const registerFetchedSupplementals = function registerFetchedSupplementals(guildId, memberIds) {
  memberIds = guildId;
  const item = memberIds.forEach((arg0) => {
    closure_5[callback(arg0, arg0)] = constants.SUCCEEDED;
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
    const intl10 = arg1(dependencyMap[2]).intl;
    return intl10.string(arg1(dependencyMap[2]).t.HumZAi);
  } else if (obj.INTEGRATION === arg0) {
    const intl9 = arg1(dependencyMap[2]).intl;
    return intl9.string(arg1(dependencyMap[2]).t.gmCUFw);
  } else if (obj.DISCOVERY === arg0) {
    const intl8 = arg1(dependencyMap[2]).intl;
    return intl8.string(arg1(dependencyMap[2]).t.Ql/e9Y);
  } else if (obj.HUB === arg0) {
    const intl7 = arg1(dependencyMap[2]).intl;
    return intl7.string(arg1(dependencyMap[2]).t.Op8B3O);
  } else if (obj.INVITE === arg0) {
    const intl6 = arg1(dependencyMap[2]).intl;
    return intl6.string(arg1(dependencyMap[2]).t./3vIRd);
  } else if (obj.VANITY_URL === arg0) {
    if (null != tmp) {
      if (!flag) {
        const intl4 = arg1(dependencyMap[2]).intl;
        const obj = { vanityUrl: tmp };
        let formatToPlainStringResult = intl4.formatToPlainString(arg1(dependencyMap[2]).t.EIUjRy, obj);
      }
      return formatToPlainStringResult;
    }
    const intl5 = arg1(dependencyMap[2]).intl;
    formatToPlainStringResult = intl5.string(arg1(dependencyMap[2]).t.dGiD1O);
  } else if (obj.MANUAL_MEMBER_VERIFICATION === arg0) {
    const intl3 = arg1(dependencyMap[2]).intl;
    return intl3.string(arg1(dependencyMap[2]).t.vdu7oS);
  } else if (obj.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL === arg0) {
    const intl2 = arg1(dependencyMap[2]).intl;
    return intl2.string(arg1(dependencyMap[2]).t.9/ZreX);
  } else {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.string(arg1(dependencyMap[2]).t.DvMBkS);
  }
};
export const IntegrationType = obj;
export const getIntegrationLabel = function getIntegrationLabel(arg0) {
  if (obj.TWITCH === arg0) {
    const intl3 = arg1(dependencyMap[2]).intl;
    return intl3.string(arg1(dependencyMap[2]).t.AVGAkw);
  } else if (obj.YOUTUBE === arg0) {
    const intl2 = arg1(dependencyMap[2]).intl;
    return intl2.string(arg1(dependencyMap[2]).t.PHSAsn);
  } else {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.string(arg1(dependencyMap[2]).t.gmCUFw);
  }
};
export const useGetIntegrationIconString = function useGetIntegrationIconString(arg0) {
  const obj = importDefault(dependencyMap[3]);
  const value = obj.get(arg1(dependencyMap[4]).useLegacyPlatformType(arg0));
  let tmp3 = null;
  if (null != value) {
    const items = [, ];
    ({ TWITCH: arr[0], YOUTUBE: arr[1] } = obj);
    tmp3 = null;
    if (items.includes(arg0)) {
      let str = value.icon;
      const _HermesInternal = HermesInternal;
      const obj3 = arg1(dependencyMap[6]);
      str = "')";
      const combined = "url('" + arg1(dependencyMap[6]).isThemeDark(tmp2) ? str.darkSVG : str.lightSVG + "')";
      const tmp7 = arg1(dependencyMap[6]).isThemeDark(tmp2) ? str.darkSVG : str.lightSVG;
    }
  }
  return tmp3;
};
export const fetchMemberSupplemental = function fetchMemberSupplemental() {
  return _fetchMemberSupplemental(...arguments);
};
