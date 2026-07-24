// Module ID: 7809
// Function ID: 61751
// Name: getTagProperties
// Dependencies: [27, 4123, 7810, 1212, 7812, 7814, 2]
// Exports: default

// Module 7809 (getTagProperties)
import { Image } from "get ActivityIndicator";
import { MessageTagTypes } from "MESSAGE_GROUP_SPACING";

const result = require("isPublicSystemMessage").fileFinishedImporting("modules/messages/native/renderer/getTagProperties.tsx");

export default function getTagProperties(arg0) {
  let channel;
  let colors;
  let isSystemDM;
  let message;
  ({ message, isSystemDM } = arg0);
  if (isSystemDM === undefined) {
    isSystemDM = false;
  }
  ({ channel, colors } = arg0);
  const author = message.author;
  const isVerifiedBotResult = author.isVerifiedBot();
  let obj = require(7810) /* isPublicSystemMessage */;
  if (!obj.isPublicSystemMessage(message)) {
    if (!isSystemDM) {
      if (importDefault(7812)(message)) {
        const intl2 = require(1212) /* getSystemLocale */.intl;
        let stringResult = intl2.string(require(1212) /* getSystemLocale */.t.PuJGuM);
        let SYSTEM_DM_TAG_SYSTEM_TYPE = MessageTagTypes.BOT_TAG_SERVER_TYPE;
        let flag = isVerifiedBotResult;
      } else {
        stringResult = null;
        flag = isVerifiedBotResult;
        if (message.author.bot) {
          const intl = require(1212) /* getSystemLocale */.intl;
          let uri;
          if (isVerifiedBotResult) {
            uri = Image.resolveAssetSource(importDefault(7814)).uri;
          }
          stringResult = intl.string(require(1212) /* getSystemLocale */.t["9RNkeF"]);
          flag = isVerifiedBotResult;
          const stringResult1 = intl.string(require(1212) /* getSystemLocale */.t["9RNkeF"]);
          const tmp5 = uri;
        }
      }
    }
    if (null == stringResult) {
      let ownerId;
      if (null != channel) {
        ownerId = channel.ownerId;
      }
      let stringResult2 = null;
      if (tmp30) {
        const intl6 = require(1212) /* getSystemLocale */.intl;
        stringResult2 = intl6.string(require(1212) /* getSystemLocale */.t.fyE8sH);
      }
      obj = { tagText: stringResult, tagAccessibilityLabel: null, tagVerified: flag, tagTextColor: undefined, tagBackgroundColor: undefined, tagType: SYSTEM_DM_TAG_SYSTEM_TYPE, tagIconUrl: tmp5, opTagText: stringResult2 };
      ({ opTagTextColor: obj3.opTagTextColor, opTagBackgroundColor: obj3.opTagBackgroundColor } = colors);
      return obj;
    } else {
      if (!obj2.isPublicSystemMessage(message)) {
        if (!isSystemDM) {
          const intl4 = require(1212) /* getSystemLocale */.intl;
          const string = intl4.string;
          const t = require(1212) /* getSystemLocale */.t;
          if (tmp22) {
            let stringResult3 = string(t["39trQT"]);
          } else if (flag) {
            stringResult3 = string(t.g76OcH);
          } else {
            stringResult3 = string(t.qwJHjo);
          }
          tmp22 = importDefault(7812)(message);
        }
      }
      const intl5 = require(1212) /* getSystemLocale */.intl;
      stringResult3 = intl5.string(require(1212) /* getSystemLocale */.t["7s687k"]);
      obj2 = require(7810) /* isPublicSystemMessage */;
    }
  }
  const intl3 = require(1212) /* getSystemLocale */.intl;
  stringResult = intl3.string(require(1212) /* getSystemLocale */.t.lKQ7Wt);
  SYSTEM_DM_TAG_SYSTEM_TYPE = MessageTagTypes.SYSTEM_DM_TAG_SYSTEM_TYPE;
  flag = true;
};
