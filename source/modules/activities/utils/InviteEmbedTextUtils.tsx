// Module ID: 12307
// Function ID: 95880
// Name: getRequestToStreamText
// Dependencies: [1849, 653, 1212, 2652, 4319, 2]
// Exports: getDeadGameInviteText, getHeaderText, getPartyText

// Module 12307 (getRequestToStreamText)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ActivityActionTypes } from "ME";

const require = arg1;
function getRequestToStreamText(author, guild_id, id) {
  if (author.author.id === id) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    let stringResult = intl2.string(importDefault(2652)["8B3U5O"]);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    const obj = { username: require(4319) /* getNickname */.getName(guild_id.guild_id, guild_id.id, author.author) };
    stringResult = intl.formatToPlainString(importDefault(2652)["d/qbC0"], obj);
    const obj2 = require(4319) /* getNickname */;
  }
  return stringResult;
}
function getAskToJoinText(author, appName, isPrivate, id1, arg4) {
  if (author.author.id === id1) {
    if (isPrivate.isPrivate()) {
      user = user.getUser(isPrivate.getRecipientId());
      if (null != user) {
        const intl2 = require(1212) /* getSystemLocale */.intl;
        const formatToPlainString2 = intl2.formatToPlainString;
        const t2 = require(1212) /* getSystemLocale */.t;
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
    const intl = require(1212) /* getSystemLocale */.intl;
    const formatToPlainString = intl.formatToPlainString;
    const t = require(1212) /* getSystemLocale */.t;
    if (arg4) {
      const obj1 = { appName };
      let formatToPlainStringResult = formatToPlainString(t["2N1kNS"], obj1);
    } else {
      const obj2 = { appName };
      formatToPlainStringResult = formatToPlainString(t.IA6uDV, obj2);
    }
    return formatToPlainStringResult;
  } else {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    const formatToPlainString3 = intl3.formatToPlainString;
    const t3 = require(1212) /* getSystemLocale */.t;
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
const result = require("getSystemLocale").fileFinishedImporting("modules/activities/utils/InviteEmbedTextUtils.tsx");

export const getHeaderText = function getHeaderText(name) {
  if (ActivityActionTypes.LISTEN === arg1) {
    const intl5 = require(1212) /* getSystemLocale */.intl;
    let obj = { name };
    return intl5.formatToPlainString(require(1212) /* getSystemLocale */.t["/8czH4"], obj);
  } else if (ActivityActionTypes.WATCH === arg1) {
    const intl4 = require(1212) /* getSystemLocale */.intl;
    obj = { name };
    return intl4.formatToPlainString(require(1212) /* getSystemLocale */.t.BBJXVk, obj);
  } else if (ActivityActionTypes.JOIN === arg1) {
    let stringResult;
    if (!arg2) {
      const intl3 = require(1212) /* getSystemLocale */.intl;
      stringResult = intl3.string(require(1212) /* getSystemLocale */.t.pkq6Vq);
    }
    return stringResult;
  } else if (ActivityActionTypes.STREAM_REQUEST === arg1) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(importDefault(2652).DKHhec);
  } else {
    const JOIN_REQUEST = ActivityActionTypes.JOIN_REQUEST;
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.Ckxb6j);
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
  const intl = require(1212) /* getSystemLocale */.intl;
  const t = require(1212) /* getSystemLocale */.t;
  return intl.string(arg4 ? t.x1UXGR : t["Ek+51n"]);
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
        const intl2 = require(1212) /* getSystemLocale */.intl;
        let obj = { partySize, maxPartySize };
        let formatToPlainStringResult = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.gLu7NU, obj);
      } else {
        const intl = require(1212) /* getSystemLocale */.intl;
        obj = { partySize };
        formatToPlainStringResult = intl.formatToPlainString(require(1212) /* getSystemLocale */.t["65JnWC"], obj);
      }
    }
    if (maxPartySize > 0) {
      const intl4 = require(1212) /* getSystemLocale */.intl;
      obj = { partySize, maxPartySize };
      let formatToPlainStringResult1 = intl4.formatToPlainString(require(1212) /* getSystemLocale */.t.Zogoou, obj);
    } else {
      const intl3 = require(1212) /* getSystemLocale */.intl;
      const obj1 = { partySize };
      formatToPlainStringResult1 = intl3.formatToPlainString(require(1212) /* getSystemLocale */.t.UGei0j, obj1);
    }
  }
};
