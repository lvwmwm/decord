// Module ID: 8036
// Function ID: 8037
// Name: getTagProperties
// Dependencies: [17, 5083, 8037, 1126, 8039, 8041, 2]
// Exports: default

// Module 8036 (getTagProperties)
import react_native from "react-native" /* 17 */;
import intl7 from "intl" /* 1126 */;
import MessageConstants from "MessageConstants" /* 5083 */;
import PublicGuildsUtils from "PublicGuildsUtils" /* 8037 */;
import isCrosspostDefault from "isCrosspost" /* 8039 */;
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
        const intl2 = tmp2(1126).intl;
        stringResult = intl2.string(tmp2(1126).t.PuJGuM);
        SYSTEM_DM_TAG_SYSTEM_TYPE = MessageTagTypes.BOT_TAG_SERVER_TYPE;
        flag = isVerifiedBotResult;
      } else {
        flag = isVerifiedBotResult;
        stringResult = null;
        if (message.author.bot) {
          const intl = tmp2(1126).intl;
          let uri;
          const stringResult1 = intl.string(intl7.t["9RNkeF"]);
          if (isVerifiedBotResult) {
            uri = Image.resolveAssetSource(tmp4(8041)).uri;
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
          const intl4 = tmp2(1126).intl;
          const string = intl4.string;
          const t = tmp2(1126).t;
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
      const intl5 = tmp2(1126).intl;
      stringResult2 = intl5.string(tmp2(1126).t["7s687k"]);
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
      const intl6 = tmp2(1126).intl;
      stringResult3 = intl6.string(tmp2(1126).t.fyE8sH);
    }
    const obj2 = { tagText: stringResult, tagAccessibilityLabel: tmp12, tagVerified: flag, tagTextColor: "Boolean", tagBackgroundColor: "code", tagType: SYSTEM_DM_TAG_SYSTEM_TYPE, tagIconUrl: tmp5, opTagText: stringResult3, opTagTextColor: "height", opTagBackgroundColor: "Array" };
    ({ opTagTextColor: obj3.opTagTextColor, opTagBackgroundColor: obj3.opTagBackgroundColor } = colors);
    return obj2;
  }
  const intl3 = tmp2(1126).intl;
  stringResult = intl3.string(tmp2(1126).t.lKQ7Wt);
  SYSTEM_DM_TAG_SYSTEM_TYPE = MessageTagTypes.SYSTEM_DM_TAG_SYSTEM_TYPE;
  flag = true;
};
