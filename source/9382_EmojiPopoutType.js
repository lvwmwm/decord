// Module ID: 9382
// Function ID: 73172
// Name: EmojiPopoutType
// Dependencies: []
// Exports: getEmojiPopoutData

// Module 9382 (EmojiPopoutType)
const EmojiSourceDataTypes = require(dependencyMap[0]).EmojiSourceDataTypes;
let closure_3 = { DEFAULT: "Custom Emoji Popout", CROSS_SERVER: "Custom Emoji Popout (Cross-Server)", UPSELL_CURRENT_SERVER_JOINED: "Custom Emoji Popout (Upsell Joined Current-Server)", UPSELL_CROSS_SERVER_JOINED: "Custom Emoji Popout (Upsell Joined Cross-Server)", UPSELL_CROSS_SERVER_JOINABLE: "Custom Emoji Popout (Upsell Not-Joined Cross-Server)", UPSELL_CROSS_SERVER_UNJOINABLE: "Custom Emoji Popout (Soft Upsell)" };
const obj = { GET_PREMIUM: "GET_PREMIUM", JOIN_GUILD: "JOIN_GUILD", UNAVAILABLE: "UNAVAILABLE" };
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/messages/getEmojiPopoutMessage.tsx");

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
      const intl8 = require(dependencyMap[1]).intl;
      let obj = { appName: expressionSourceApplication.name };
      let formatToPlainStringResult = intl8.formatToPlainString(require(dependencyMap[1]).t.uERlTd, obj);
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
            const intl10 = require(dependencyMap[1]).intl;
            obj1.text = intl10.string(require(dependencyMap[1]).t.riu2R5);
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
          const intl9 = require(dependencyMap[1]).intl;
          obj2.text = intl9.string(require(dependencyMap[1]).t.gl/XHJ);
          obj2.description = null;
        }
        const obj3 = { width: "Normal", height: true, marginVertical: "AbortSignal", type: obj.UNAVAILABLE };
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
      const intl4 = require(dependencyMap[1]).intl;
      const string2 = intl4.string;
      const t = require(dependencyMap[1]).t;
      if (isDiscoverable) {
        let string2Result = string2(t.xE9WGt);
      } else {
        string2Result = string2(t.0LMpW+);
      }
    }
    if (!isRoleSubscriptionEmoji) {
      const intl5 = require(dependencyMap[1]).intl;
      const string3 = intl5.string;
      const t2 = require(dependencyMap[1]).t;
      if (emojiComesFromCurrentGuild) {
        let string3Result = string3(t2.hU4kIe);
      } else {
        string3Result = string3(t2.GM0xaX);
      }
    }
    if (!shouldHideRoleSubscriptionCTA) {
      const intl6 = require(dependencyMap[1]).intl;
      const string4 = intl6.string;
      let vLklfF2 = require(dependencyMap[1]).t;
      if (isUnusableRoleSubscriptionEmoji) {
        if (userIsRoleSubscriber) {
          vLklfF2 = vLklfF2.vLklfF;
          let string4Result = string4(vLklfF2);
        } else {
          string4Result = string4(vLklfF2.g8i/bf);
        }
      } else {
        let string4Result1 = string4(vLklfF2.Eoynp0);
      }
    }
    const intl7 = require(dependencyMap[1]).intl;
    string4Result1 = intl7.string(require(dependencyMap[1]).t.xFb68j);
  } else if (hasJoinedEmojiSourceGuild) {
    if (!shouldHideRoleSubscriptionCTA) {
      const intl2 = require(dependencyMap[1]).intl;
      const string = intl2.string;
      let vLklfF = require(dependencyMap[1]).t;
      if (isUnusableRoleSubscriptionEmoji) {
        if (userIsRoleSubscriber) {
          vLklfF = vLklfF.vLklfF;
          let stringResult = string(vLklfF);
        } else {
          stringResult = string(vLklfF.g8i/bf);
        }
      } else if (emojiComesFromCurrentGuild) {
        let stringResult1 = string(vLklfF.ICPhqa);
      } else {
        stringResult1 = string(vLklfF.jQy3aM);
      }
    }
    const intl3 = require(dependencyMap[1]).intl;
    stringResult1 = intl3.string(require(dependencyMap[1]).t.xFb68j);
  } else {
    const intl = require(dependencyMap[1]).intl;
    if (isDiscoverable) {
      formatToPlainStringResult = intl.string(tmp2(tmp3[1]).t.FJ6Z01);
    } else {
      obj = { openPremiumSettings: onOpenPremiumSettings };
      formatToPlainStringResult = intl.format(tmp2(tmp3[1]).t.U6vLcA, obj);
    }
  }
};
