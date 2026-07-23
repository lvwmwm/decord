// Module ID: 9394
// Function ID: 73251
// Name: EmojiPopoutType
// Dependencies: [5516, 1212, 2]
// Exports: getEmojiPopoutData

// Module 9394 (EmojiPopoutType)
import { EmojiSourceDataTypes } from "_callSuper";

let closure_3 = { DEFAULT: "Custom Emoji Popout", CROSS_SERVER: "Custom Emoji Popout (Cross-Server)", UPSELL_CURRENT_SERVER_JOINED: "Custom Emoji Popout (Upsell Joined Current-Server)", UPSELL_CROSS_SERVER_JOINED: "Custom Emoji Popout (Upsell Joined Cross-Server)", UPSELL_CROSS_SERVER_JOINABLE: "Custom Emoji Popout (Upsell Not-Joined Cross-Server)", UPSELL_CROSS_SERVER_UNJOINABLE: "Custom Emoji Popout (Soft Upsell)" };
let obj = { GET_PREMIUM: "GET_PREMIUM", JOIN_GUILD: "JOIN_GUILD", UNAVAILABLE: "UNAVAILABLE" };
const result = require("set").fileFinishedImporting("modules/messages/getEmojiPopoutMessage.tsx");

export const EmojiPopoutType = obj;
export const getEmojiPopoutData = function getEmojiPopoutData(sourceType) {
  let emojiComesFromCurrentGuild;
  let emojiComesFromCurrentGuild2;
  let expressionSourceApplication;
  let hasJoinedEmojiSourceGuild;
  let hasJoinedEmojiSourceGuild2;
  let hasJoinedEmojiSourceGuild3;
  let isDiscoverable;
  let isDiscoverable2;
  let isPremium;
  let isPremium2;
  let isPremium3;
  let isRoleSubscriptionEmoji;
  let isUnusableRoleSubscriptionEmoji;
  let isUnusableRoleSubscriptionEmoji2;
  let onOpenPremiumSettings;
  let shouldHideRoleSubscriptionCTA;
  let userIsRoleSubscriber;
  ({ expressionSourceApplication, hasJoinedEmojiSourceGuild, isUnusableRoleSubscriptionEmoji, isDiscoverable, emojiComesFromCurrentGuild, userIsRoleSubscriber, shouldHideRoleSubscriptionCTA } = sourceType);
  ({ isPremium, isRoleSubscriptionEmoji, onOpenPremiumSettings } = sourceType);
  if (sourceType.sourceType === EmojiSourceDataTypes.APPLICATION) {
    if (null != expressionSourceApplication) {
      const intl8 = require(1212) /* getSystemLocale */.intl;
      let obj = { appName: expressionSourceApplication.name };
      let formatToPlainStringResult = intl8.formatToPlainString(require(1212) /* getSystemLocale */.t.uERlTd, obj);
    }
    ({ isPremium: isPremium2, hasJoinedEmojiSourceGuild: hasJoinedEmojiSourceGuild2, isDiscoverable: isDiscoverable2 } = sourceType);
    ({ isUnusableRoleSubscriptionEmoji: isUnusableRoleSubscriptionEmoji2, emojiComesFromCurrentGuild: emojiComesFromCurrentGuild2 } = sourceType);
    if (isPremium2) {
      if (!hasJoinedEmojiSourceGuild2) {
        if (isDiscoverable2) {
          let DEFAULT = constants.CROSS_SERVER;
        }
        obj = {};
        ({ isPremium: isPremium3, hasJoinedEmojiSourceGuild: hasJoinedEmojiSourceGuild3 } = sourceType);
        let isDiscoverable3 = !hasJoinedEmojiSourceGuild3;
        if (isDiscoverable3) {
          isDiscoverable3 = sourceType.isDiscoverable;
        }
        if (isPremium3) {
          if (isDiscoverable3) {
            const obj1 = { type: obj.JOIN_GUILD };
            const intl10 = require(1212) /* getSystemLocale */.intl;
            obj1.text = intl10.string(require(1212) /* getSystemLocale */.t.riu2R5);
            obj1.description = null;
            let obj2 = obj1;
          }
          const merged = Object.assign(obj2);
          obj["emojiDescription"] = formatToPlainStringResult;
          obj["analyticsType"] = DEFAULT;
          return obj;
        }
        if (!isPremium3) {
          obj2 = { type: obj.GET_PREMIUM };
          const intl9 = require(1212) /* getSystemLocale */.intl;
          obj2.text = intl9.string(require(1212) /* getSystemLocale */.t["gl/XHJ"]);
          obj2.description = null;
        }
        const obj3 = { type: obj.UNAVAILABLE, text: null, description: null };
        obj2 = obj3;
      }
    }
    if (!isPremium2) {
      if (hasJoinedEmojiSourceGuild2) {
        if (!isUnusableRoleSubscriptionEmoji2) {
          DEFAULT = emojiComesFromCurrentGuild2 ? tmp33.UPSELL_CURRENT_SERVER_JOINED : tmp33.UPSELL_CROSS_SERVER_JOINED;
        }
      }
    }
    if (!isPremium2) {
      isPremium2 = hasJoinedEmojiSourceGuild2;
    }
    DEFAULT = constants.DEFAULT;
  }
  if (isPremium) {
    if (!hasJoinedEmojiSourceGuild) {
      const intl4 = require(1212) /* getSystemLocale */.intl;
      const string2 = intl4.string;
      const t = require(1212) /* getSystemLocale */.t;
      if (isDiscoverable) {
        let string2Result = string2(t.xE9WGt);
      } else {
        string2Result = string2(t["0LMpW+"]);
      }
    }
    if (!isRoleSubscriptionEmoji) {
      const intl5 = require(1212) /* getSystemLocale */.intl;
      const string3 = intl5.string;
      const t2 = require(1212) /* getSystemLocale */.t;
      if (emojiComesFromCurrentGuild) {
        let string3Result = string3(t2.hU4kIe);
      } else {
        string3Result = string3(t2.GM0xaX);
      }
    }
    if (!shouldHideRoleSubscriptionCTA) {
      const intl6 = require(1212) /* getSystemLocale */.intl;
      const string4 = intl6.string;
      let vLklfF2 = require(1212) /* getSystemLocale */.t;
      if (isUnusableRoleSubscriptionEmoji) {
        if (userIsRoleSubscriber) {
          vLklfF2 = vLklfF2.vLklfF;
          let string4Result = string4(vLklfF2);
        } else {
          string4Result = string4(vLklfF2["g8i/bf"]);
        }
      } else {
        let string4Result1 = string4(vLklfF2.Eoynp0);
      }
    }
    const intl7 = require(1212) /* getSystemLocale */.intl;
    string4Result1 = intl7.string(require(1212) /* getSystemLocale */.t.xFb68j);
  } else if (hasJoinedEmojiSourceGuild) {
    if (!shouldHideRoleSubscriptionCTA) {
      const intl2 = require(1212) /* getSystemLocale */.intl;
      const string = intl2.string;
      let vLklfF = require(1212) /* getSystemLocale */.t;
      if (isUnusableRoleSubscriptionEmoji) {
        if (userIsRoleSubscriber) {
          vLklfF = vLklfF.vLklfF;
          let stringResult = string(vLklfF);
        } else {
          stringResult = string(vLklfF["g8i/bf"]);
        }
      } else if (emojiComesFromCurrentGuild) {
        let stringResult1 = string(vLklfF.ICPhqa);
      } else {
        stringResult1 = string(vLklfF.jQy3aM);
      }
    }
    const intl3 = require(1212) /* getSystemLocale */.intl;
    stringResult1 = intl3.string(require(1212) /* getSystemLocale */.t.xFb68j);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    if (isDiscoverable) {
      formatToPlainStringResult = intl.string(tmp2(1212).t.FJ6Z01);
    } else {
      obj = { openPremiumSettings: onOpenPremiumSettings };
      formatToPlainStringResult = intl.format(tmp2(1212).t.U6vLcA, obj);
    }
  }
};
