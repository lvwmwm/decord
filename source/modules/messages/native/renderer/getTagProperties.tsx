// Module ID: 7714
// Function ID: 61428
// Name: getTagProperties
// Dependencies: []
// Exports: default

// Module 7714 (getTagProperties)
const Image = require(dependencyMap[0]).Image;
const MessageTagTypes = require(dependencyMap[1]).MessageTagTypes;
const _module = require(dependencyMap[6]);
const result = _module.fileFinishedImporting("modules/messages/native/renderer/getTagProperties.tsx");

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
  let obj = require(dependencyMap[2]);
  if (!obj.isPublicSystemMessage(message)) {
    if (!isSystemDM) {
      if (importDefault(dependencyMap[4])(message)) {
        const intl2 = require(dependencyMap[3]).intl;
        let stringResult = intl2.string(require(dependencyMap[3]).t.PuJGuM);
        let SYSTEM_DM_TAG_SYSTEM_TYPE = MessageTagTypes.BOT_TAG_SERVER_TYPE;
        let flag = isVerifiedBotResult;
      } else {
        stringResult = null;
        flag = isVerifiedBotResult;
        if (message.author.bot) {
          const intl = require(dependencyMap[3]).intl;
          let uri;
          if (isVerifiedBotResult) {
            uri = Image.resolveAssetSource(importDefault(dependencyMap[5])).uri;
          }
          stringResult = intl.string(require(dependencyMap[3]).t.9RNkeF);
          flag = isVerifiedBotResult;
          const stringResult1 = intl.string(require(dependencyMap[3]).t.9RNkeF);
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
        const intl6 = require(dependencyMap[3]).intl;
        stringResult2 = intl6.string(require(dependencyMap[3]).t.fyE8sH);
      }
      obj = { tagText: stringResult, tagAccessibilityLabel: null, tagVerified: flag, tagTextColor: undefined, tagBackgroundColor: undefined, tagType: SYSTEM_DM_TAG_SYSTEM_TYPE, tagIconUrl: tmp5, opTagText: stringResult2 };
      ({ opTagTextColor: obj3.opTagTextColor, opTagBackgroundColor: obj3.opTagBackgroundColor } = colors);
      return obj;
    } else {
      if (!obj2.isPublicSystemMessage(message)) {
        if (!isSystemDM) {
          const intl4 = require(dependencyMap[3]).intl;
          const string = intl4.string;
          const t = require(dependencyMap[3]).t;
          if (tmp22) {
            let stringResult3 = string(t.39trQT);
          } else if (flag) {
            stringResult3 = string(t.g76OcH);
          } else {
            stringResult3 = string(t.qwJHjo);
          }
          const tmp22 = importDefault(dependencyMap[4])(message);
        }
      }
      const intl5 = require(dependencyMap[3]).intl;
      stringResult3 = intl5.string(require(dependencyMap[3]).t.7s687k);
      const obj2 = require(dependencyMap[2]);
    }
  }
  const intl3 = require(dependencyMap[3]).intl;
  stringResult = intl3.string(require(dependencyMap[3]).t.lKQ7Wt);
  SYSTEM_DM_TAG_SYSTEM_TYPE = MessageTagTypes.SYSTEM_DM_TAG_SYSTEM_TYPE;
  flag = true;
};
