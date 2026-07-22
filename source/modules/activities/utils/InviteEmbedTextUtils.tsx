// Module ID: 12193
// Function ID: 93729
// Name: getRequestToStreamText
// Dependencies: []
// Exports: getDeadGameInviteText, getHeaderText, getPartyText

// Module 12193 (getRequestToStreamText)
function getRequestToStreamText(author, guild_id, id) {
  if (author.author.id === id) {
    const intl2 = guild_id(dependencyMap[2]).intl;
    let stringResult = intl2.string(importDefault(dependencyMap[3]).8B3U5O);
  } else {
    const intl = guild_id(dependencyMap[2]).intl;
    const obj = { username: guild_id(dependencyMap[4]).getName(guild_id.guild_id, guild_id.id, author.author) };
    stringResult = intl.formatToPlainString(importDefault(dependencyMap[3]).d/qbC0, obj);
    const obj2 = guild_id(dependencyMap[4]);
  }
  return stringResult;
}
function getAskToJoinText(author, appName, isPrivate, id1, arg4) {
  if (author.author.id === id1) {
    if (isPrivate.isPrivate()) {
      const user = user.getUser(isPrivate.getRecipientId());
      if (null != user) {
        const intl2 = appName(dependencyMap[2]).intl;
        const formatToPlainString2 = intl2.formatToPlainString;
        const t2 = appName(dependencyMap[2]).t;
        if (arg4) {
          let obj = { username: user.globalName, appName };
          let formatToPlainString2Result = formatToPlainString2(t2.JddpN2, obj);
        } else {
          obj = { username: user.globalName, appName };
          formatToPlainString2Result = formatToPlainString2(t2.gYVkSW, obj);
        }
        return formatToPlainString2Result;
      }
    }
    const intl = appName(dependencyMap[2]).intl;
    const formatToPlainString = intl.formatToPlainString;
    const t = appName(dependencyMap[2]).t;
    if (arg4) {
      const obj1 = { appName };
      let formatToPlainStringResult = formatToPlainString(t.2N1kNS, obj1);
    } else {
      const obj2 = { appName };
      formatToPlainStringResult = formatToPlainString(t.IA6uDV, obj2);
    }
    return formatToPlainStringResult;
  } else {
    const intl3 = appName(dependencyMap[2]).intl;
    const formatToPlainString3 = intl3.formatToPlainString;
    const t3 = appName(dependencyMap[2]).t;
    if (arg4) {
      const obj3 = { username: author.author.globalName, appName };
      let formatToPlainString3Result = formatToPlainString3(t3.XE8axA, obj3);
    } else {
      obj = { username: author.author.globalName, appName };
      formatToPlainString3Result = formatToPlainString3(t3.hgcjOn, obj);
    }
    return formatToPlainString3Result;
  }
}
let closure_3 = importDefault(dependencyMap[0]);
const ActivityActionTypes = arg1(dependencyMap[1]).ActivityActionTypes;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/activities/utils/InviteEmbedTextUtils.tsx");

export const getHeaderText = function getHeaderText(name) {
  if (ActivityActionTypes.LISTEN === arg1) {
    const intl5 = arg1(dependencyMap[2]).intl;
    let obj = { name };
    return intl5.formatToPlainString(arg1(dependencyMap[2]).t./8czH4, obj);
  } else if (ActivityActionTypes.WATCH === arg1) {
    const intl4 = arg1(dependencyMap[2]).intl;
    obj = { name };
    return intl4.formatToPlainString(arg1(dependencyMap[2]).t.BBJXVk, obj);
  } else if (ActivityActionTypes.JOIN === arg1) {
    let stringResult;
    if (!arg2) {
      const intl3 = arg1(dependencyMap[2]).intl;
      stringResult = intl3.string(arg1(dependencyMap[2]).t.pkq6Vq);
    }
    return stringResult;
  } else if (ActivityActionTypes.STREAM_REQUEST === arg1) {
    const intl2 = arg1(dependencyMap[2]).intl;
    return intl2.string(importDefault(dependencyMap[3]).DKHhec);
  } else {
    const JOIN_REQUEST = ActivityActionTypes.JOIN_REQUEST;
    const intl = arg1(dependencyMap[2]).intl;
    return intl.string(arg1(dependencyMap[2]).t.Ckxb6j);
  }
};
export { getRequestToStreamText };
export { getAskToJoinText };
export const getDeadGameInviteText = function getDeadGameInviteText(activity, name_override, id, id1, arg4) {
  activity = activity.activity;
  let type;
  if (null != activity) {
    type = activity.type;
  }
  if (ActivityActionTypes.LISTEN !== type) {
    if (ActivityActionTypes.WATCH !== type) {
      if (ActivityActionTypes.JOIN !== type) {
        if (ActivityActionTypes.STREAM_REQUEST === type) {
          return getRequestToStreamText(activity, id, id1);
        } else {
          const JOIN_REQUEST = ActivityActionTypes.JOIN_REQUEST;
          return getAskToJoinText(activity, name_override, id, id1, true);
        }
      }
    }
  }
  const intl = name_override(dependencyMap[2]).intl;
  const t = name_override(dependencyMap[2]).t;
  return intl.string(arg4 ? t.x1UXGR : t.Ek+51n);
};
export const getPartyText = function getPartyText(arg0) {
  let activityActionType;
  let maxPartySize;
  let partySize;
  ({ activityActionType, maxPartySize, partySize } = arg0);
  if (activityActionType === ActivityActionTypes.STREAM_REQUEST) {
    return "";
  } else {
    if (activityActionType !== ActivityActionTypes.LISTEN) {
      if (maxPartySize > 0) {
        const intl2 = arg1(dependencyMap[2]).intl;
        let obj = { partySize, maxPartySize };
        let formatToPlainStringResult = intl2.formatToPlainString(arg1(dependencyMap[2]).t.gLu7NU, obj);
      } else {
        const intl = arg1(dependencyMap[2]).intl;
        obj = { partySize };
        formatToPlainStringResult = intl.formatToPlainString(arg1(dependencyMap[2]).t.65JnWC, obj);
      }
    }
    if (maxPartySize > 0) {
      const intl4 = arg1(dependencyMap[2]).intl;
      obj = { partySize, maxPartySize };
      let formatToPlainStringResult1 = intl4.formatToPlainString(arg1(dependencyMap[2]).t.Zogoou, obj);
    } else {
      const intl3 = arg1(dependencyMap[2]).intl;
      const obj1 = { partySize };
      formatToPlainStringResult1 = intl3.formatToPlainString(arg1(dependencyMap[2]).t.UGei0j, obj1);
    }
  }
};
