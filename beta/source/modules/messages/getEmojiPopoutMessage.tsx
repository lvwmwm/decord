// Module ID: 9800
// Function ID: 9801
// Name: getEmojiPopoutMessage
// Dependencies: [5897, 1115, 2]
// Exports: getEmojiPopoutData

// Module 9800 (getEmojiPopoutMessage)
import intl11 from "intl" /* 1115 */;
import ExpressionSourceRecord from "ExpressionSourceRecord" /* 5897 */;
import size from "module_2" /* 2 */;

const EmojiSourceDataTypes = ExpressionSourceRecord.EmojiSourceDataTypes;
const constants = { DEFAULT: "Custom Emoji Popout", CROSS_SERVER: "Custom Emoji Popout (Cross-Server)", UPSELL_CURRENT_SERVER_JOINED: "Custom Emoji Popout (Upsell Joined Current-Server)", UPSELL_CROSS_SERVER_JOINED: "Custom Emoji Popout (Upsell Joined Cross-Server)", UPSELL_CROSS_SERVER_JOINABLE: "Custom Emoji Popout (Upsell Not-Joined Cross-Server)", UPSELL_CROSS_SERVER_UNJOINABLE: "Custom Emoji Popout (Soft Upsell)" };
const EmojiPopoutType = { GET_PREMIUM: "GET_PREMIUM", JOIN_GUILD: "JOIN_GUILD", UNAVAILABLE: "UNAVAILABLE" };
const result = size.fileFinishedImporting("modules/messages/getEmojiPopoutMessage.tsx");

export { EmojiPopoutType };
export const getEmojiPopoutData = function getEmojiPopoutData(sourceType) {
  let emojiComesFromCurrentGuild;
  let emojiComesFromCurrentGuild2;
  let expressionSourceApplication;
  let formatToPlainStringResult;
  let hasJoinedEmojiSourceGuild;
  let hasJoinedEmojiSourceGuild2;
  let hasJoinedEmojiSourceGuild3;
  let intl10;
  let intl9;
  let isDiscoverable;
  let isDiscoverable2;
  let isPremium;
  let isPremium2;
  let isPremium3;
  let isRoleSubscriptionEmoji;
  let isUnusableRoleSubscriptionEmoji;
  let isUnusableRoleSubscriptionEmoji2;
  let obj;
  let onOpenPremiumSettings;
  let shouldHideRoleSubscriptionCTA;
  let tmp6;
  let userIsRoleSubscriber;
  ({ expressionSourceApplication, hasJoinedEmojiSourceGuild, isUnusableRoleSubscriptionEmoji, isDiscoverable, emojiComesFromCurrentGuild, userIsRoleSubscriber, shouldHideRoleSubscriptionCTA } = sourceType);
  ({ isPremium, isRoleSubscriptionEmoji, onOpenPremiumSettings } = sourceType);
  if (sourceType.sourceType === EmojiSourceDataTypes.APPLICATION) {
    let CROSS_SERVER;
    if (null != expressionSourceApplication) {
      const intl8 = intl11.intl;
      const obj2 = { appName: expressionSourceApplication.name };
      formatToPlainStringResult = intl8.formatToPlainString(intl11.t.uERlTd, obj2);
      tmp6 = require;
    }
    ({ isPremium: isPremium2, hasJoinedEmojiSourceGuild: hasJoinedEmojiSourceGuild2, isDiscoverable: isDiscoverable2 } = sourceType);
    ({ isUnusableRoleSubscriptionEmoji: isUnusableRoleSubscriptionEmoji2, emojiComesFromCurrentGuild: emojiComesFromCurrentGuild2 } = sourceType);
    const DEFAULT = constants.DEFAULT;
    if (isPremium2) {
      if (!hasJoinedEmojiSourceGuild2) {
        let obj5;
        if (isDiscoverable2) {
          CROSS_SERVER = tmp39.CROSS_SERVER;
        }
        ({ isPremium: isPremium3, hasJoinedEmojiSourceGuild: hasJoinedEmojiSourceGuild3 } = sourceType);
        let isDiscoverable3 = !hasJoinedEmojiSourceGuild3;
        const isUnusableRoleSubscriptionEmoji3 = sourceType.isUnusableRoleSubscriptionEmoji;
        if (!hasJoinedEmojiSourceGuild3) {
          isDiscoverable3 = sourceType.isDiscoverable;
        }
        if (isPremium3) {
          if (isDiscoverable3) {
            const obj3 = { type: obj.JOIN_GUILD, text: intl10.string(tmp6(1115).t.riu2R5), description: null };
            intl10 = tmp6(1115).intl;
            obj5 = obj3;
          }
          const obj4 = { emojiDescription: formatToPlainStringResult, analyticsType: CROSS_SERVER };
          const merged = Object.assign(obj5);
          return obj4;
        }
        if (!isPremium3) {
          obj5 = { type: obj.GET_PREMIUM, text: intl9.string(tmp6(1115).t["gl/XHJ"]), description: null };
          intl9 = tmp6(1115).intl;
        }
        obj5 = { type: obj.UNAVAILABLE, text: null, description: null };
        const obj6 = { type: obj.UNAVAILABLE, text: null, description: null };
      }
    }
    if (!isPremium2) {
      if (hasJoinedEmojiSourceGuild2) {
        if (!isUnusableRoleSubscriptionEmoji2) {
          CROSS_SERVER = emojiComesFromCurrentGuild2 ? tmp39.UPSELL_CURRENT_SERVER_JOINED : tmp39.UPSELL_CROSS_SERVER_JOINED;
        }
      }
    }
    if (!isPremium2) {
      isPremium2 = hasJoinedEmojiSourceGuild2;
    }
    CROSS_SERVER = DEFAULT;
    if (!isPremium2) {
      CROSS_SERVER = isDiscoverable2 ? tmp39.UPSELL_CROSS_SERVER_JOINABLE : tmp39.UPSELL_CROSS_SERVER_UNJOINABLE;
    }
  }
  if (isPremium) {
    let tmp21;
    let string2Result;
    if (hasJoinedEmojiSourceGuild) {
      let tmp26;
      let string3Result;
      if (isRoleSubscriptionEmoji) {
        let tmp31;
        let stringResult;
        if (shouldHideRoleSubscriptionCTA) {
          if (isUnusableRoleSubscriptionEmoji) {
            const intl7 = intl11.intl;
            stringResult = intl7.string(intl11.t.xFb68j);
            tmp31 = require;
          }
          tmp26 = tmp31;
          string3Result = stringResult;
        }
        const intl6 = intl11.intl;
        const string4 = intl6.string;
        const t4 = intl11.t;
        if (isUnusableRoleSubscriptionEmoji) {
          let string4Result;
          let tmp34;
          if (userIsRoleSubscriber) {
            string4Result = string4(t4.vLklfF);
            let tmp33 = tmp28;
            tmp34 = tmp27;
          } else {
            string4Result = string4(t4["g8i/bf"]);
            tmp33 = tmp28;
            tmp34 = tmp27;
          }
          tmp31 = tmp34;
          stringResult = string4Result;
        } else {
          stringResult = string4(t4.Eoynp0);
          tmp31 = tmp27;
        }
      } else {
        const intl5 = intl11.intl;
        const string3 = intl5.string;
        const t3 = intl11.t;
        if (emojiComesFromCurrentGuild) {
          string3Result = string3(t3.hU4kIe);
          tmp26 = tmp22;
        } else {
          string3Result = string3(t3.GM0xaX);
          tmp26 = tmp22;
        }
      }
      tmp21 = tmp26;
      string2Result = string3Result;
    } else {
      const intl4 = intl11.intl;
      const string2 = intl4.string;
      const t2 = intl11.t;
      if (isDiscoverable) {
        string2Result = string2(t2.xE9WGt);
        tmp21 = tmp17;
      } else {
        string2Result = string2(t2["0LMpW+"]);
        tmp21 = tmp17;
      }
    }
    tmp6 = tmp21;
    formatToPlainStringResult = string2Result;
  } else if (hasJoinedEmojiSourceGuild) {
    let tmp11;
    let stringResult1;
    if (shouldHideRoleSubscriptionCTA) {
      if (isUnusableRoleSubscriptionEmoji) {
        const intl3 = intl11.intl;
        stringResult1 = intl3.string(intl11.t.xFb68j);
        tmp11 = require;
      }
      tmp6 = tmp11;
      formatToPlainStringResult = stringResult1;
    }
    const intl2 = intl11.intl;
    const string = intl2.string;
    const t = intl11.t;
    if (isUnusableRoleSubscriptionEmoji) {
      let stringResult2;
      let tmp14;
      if (userIsRoleSubscriber) {
        stringResult2 = string(t.vLklfF);
        tmp14 = tmp7;
      } else {
        stringResult2 = string(t["g8i/bf"]);
        tmp14 = tmp7;
      }
      tmp11 = tmp14;
      stringResult1 = stringResult2;
    } else if (emojiComesFromCurrentGuild) {
      stringResult1 = string(t.ICPhqa);
      tmp11 = tmp7;
    } else {
      stringResult1 = string(t.jQy3aM);
      tmp11 = tmp7;
    }
  } else {
    const intl = intl11.intl;
    if (isDiscoverable) {
      formatToPlainStringResult = intl.string(tmp2(1115).t.FJ6Z01);
      tmp6 = tmp2;
    } else {
      obj = { openPremiumSettings: onOpenPremiumSettings };
      formatToPlainStringResult = intl.format(tmp2(1115).t.U6vLcA, obj);
      tmp6 = tmp2;
    }
  }
};
