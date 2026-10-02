// Module ID: 7481
// Function ID: 7482
// Name: getTagProperties
// Dependencies: [17, 4830, 7482, 1127, 7484, 7486, 2]
// Exports: default

// Module 7481 (getTagProperties)
import react_native from "react-native" /* 17 */;
import intl7 from "intl" /* 1127 */;
import MessageConstants from "MessageConstants" /* 4830 */;
import PublicGuildsUtils from "PublicGuildsUtils" /* 7482 */;
import isCrosspostDefault from "isCrosspost" /* 7484 */;
import size from "module_2" /* 2 */;

const Image = react_native.Image;
const MessageTagTypes = MessageConstants.MessageTagTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/getTagProperties.tsx");

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
  const obj = PublicGuildsUtils;
  if (!obj.isPublicSystemMessage(message)) {
    let stringResult;
    let SYSTEM_DM_TAG_SYSTEM_TYPE;
    let flag;
    let tmp5;
    if (!isSystemDM) {
      const tmp4 = importDefault;
      if (isCrosspostDefault(message)) {
        const intl2 = tmp2(1127).intl;
        stringResult = intl2.string(tmp2(1127).t.PuJGuM);
        SYSTEM_DM_TAG_SYSTEM_TYPE = MessageTagTypes.BOT_TAG_SERVER_TYPE;
        flag = isVerifiedBotResult;
      } else {
        flag = isVerifiedBotResult;
        stringResult = null;
        if (message.author.bot) {
          const intl = tmp2(1127).intl;
          let uri;
          const stringResult1 = intl.string(intl7.t["9RNkeF"]);
          if (isVerifiedBotResult) {
            uri = Image.resolveAssetSource(tmp4(7486)).uri;
          }
          flag = isVerifiedBotResult;
          stringResult = stringResult1;
          tmp5 = uri;
        }
      }
    }
    let tmp12 = null;
    if (null != stringResult) {
      const tmp2Result = PublicGuildsUtils;
      if (!tmp2Result.isPublicSystemMessage(message)) {
        let stringResult2;
        if (!isSystemDM) {
          const tmp14 = isCrosspostDefault(message);
          const intl4 = tmp2(1127).intl;
          const string = intl4.string;
          const t = tmp2(1127).t;
          if (tmp14) {
            stringResult2 = string(t["39trQT"]);
          } else if (flag) {
            stringResult2 = string(t.g76OcH);
          } else {
            stringResult2 = string(t.qwJHjo);
          }
        }
        tmp12 = stringResult2;
      }
      const intl5 = tmp2(1127).intl;
      stringResult2 = intl5.string(tmp2(1127).t["7s687k"]);
    }
    let ownerId;
    if (channel != null) {
      ownerId = channel.ownerId;
    }
    let tmp17 = ownerId === message.author.id;
    if (tmp17) {
      let isForumPostResult;
      if (channel != null) {
        isForumPostResult = channel.isForumPost();
      }
      tmp17 = isForumPostResult;
    }
    let stringResult3 = null;
    if (tmp17) {
      const intl6 = tmp2(1127).intl;
      stringResult3 = intl6.string(tmp2(1127).t.fyE8sH);
    }
    const obj2 = { tagText: stringResult, tagAccessibilityLabel: tmp12, tagVerified: flag, tagTextColor: "Boolean", tagBackgroundColor: "unicodeVersion", tagType: SYSTEM_DM_TAG_SYSTEM_TYPE, tagIconUrl: tmp5, opTagText: stringResult3, opTagTextColor: -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000050382222694464785, opTagBackgroundColor: -6250090545854004000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 };
    ({ opTagTextColor: obj3.opTagTextColor, opTagBackgroundColor: obj3.opTagBackgroundColor } = colors);
    return obj2;
  }
  const intl3 = tmp2(1127).intl;
  stringResult = intl3.string(tmp2(1127).t.lKQ7Wt);
  SYSTEM_DM_TAG_SYSTEM_TYPE = MessageTagTypes.SYSTEM_DM_TAG_SYSTEM_TYPE;
  flag = true;
};
