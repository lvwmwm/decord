// Module ID: 9518
// Function ID: 74070
// Name: isNewMessageGroup
// Dependencies: [653, 664, 5651, 21, 3800, 2]
// Exports: isNewGroupItem

// Module 9518 (isNewMessageGroup)
import ME from "ME";

let closure_3;
let closure_4;
let closure_5;
function isNewMessageGroup(isForumPost, content, hasFlag) {
  let type = hasFlag;
  const tmp = !hasFlag.hasFlag(constants3.HAS_THREAD) && !type.isCommandType();
  let tmp2 = !tmp;
  if (tmp) {
    if (content.blocked !== type.blocked || content.ignored !== type.ignored) {
      tmp2 = tmp3;
    } else if (type.type > constants.DEFAULT) {
      let tmp35 = !importDefault(5651)(content);
      if (!tmp35) {
        type = type.type;
        tmp35 = type === constants.REPLY;
      }
      let tmp32 = tmp35;
    } else {
      const tmp40 = !importDefault(5651)(content);
      tmp32 = !tmp40;
      if (tmp40) {
        let tmp5 = content.author.id !== type.author.id;
        if (!tmp5) {
          let tmp9 = content.hasFlag(constants3.EPHEMERAL) !== type.hasFlag(constants3.EPHEMERAL);
          if (!tmp9) {
            let tmp11 = null != type.webhookId && content.author.username !== type.author.username;
            if (!tmp11) {
              let tmp12 = null == isForumPost || !isForumPost.isForumPost();
              if (!tmp12) {
                tmp12 = content.id !== importDefault(21).castChannelIdAsMessageId(isForumPost.id);
                const obj = importDefault(21);
              }
              let tmp15 = !tmp12;
              if (tmp12) {
                let tmp18 = !require(3800) /* resetCache */.isSameDay(content.timestamp, type.timestamp);
                if (!tmp18) {
                  let tmp22 = !require(3800) /* resetCache */.isWithinInterval(content.timestamp, type.timestamp, closure_6);
                  if (!tmp22) {
                    let hasFlagResult1 = !type.hasFlag(constants3.SUPPRESS_NOTIFICATIONS);
                    if (!hasFlagResult1) {
                      hasFlagResult1 = content.hasFlag(constants3.SUPPRESS_NOTIFICATIONS);
                    }
                    let tmp26 = !hasFlagResult1;
                    if (!tmp26) {
                      let hasFlagResult2 = !content.hasFlag(constants3.SUPPRESS_NOTIFICATIONS);
                      if (!hasFlagResult2) {
                        hasFlagResult2 = type.hasFlag(constants3.SUPPRESS_NOTIFICATIONS);
                      }
                      if (!hasFlagResult2) {
                        hasFlagResult2 = !(type.mentions.length > 0 || type.mentionRoles.length > 0 || type.mentionEveryone);
                        const tmp30 = type.mentions.length > 0 || type.mentionRoles.length > 0 || type.mentionEveryone;
                      }
                      tmp26 = !hasFlagResult2 || type.applicationId !== content.applicationId;
                      const tmp31 = !hasFlagResult2 || type.applicationId !== content.applicationId;
                    }
                    tmp22 = tmp26;
                  }
                  tmp18 = tmp22;
                  const obj3 = require(3800) /* resetCache */;
                }
                tmp15 = tmp18;
                const obj2 = require(3800) /* resetCache */;
              }
              tmp11 = tmp15;
            }
            tmp9 = tmp11;
          }
          tmp5 = tmp9;
          const hasFlagResult = content.hasFlag(constants3.EPHEMERAL);
        }
        tmp32 = tmp5;
      }
    }
  }
  return tmp2;
}
({ MessageTypes: closure_3, ChannelStreamTypes: closure_4, MessageFlags: closure_5 } = ME);
let closure_6 = 7 * require("set").Millis.MINUTE;
const result = require("isSystemMessage").fileFinishedImporting("modules/messages/isNewMessageGroup.tsx");

export default isNewMessageGroup;
export const isNewGroupItem = function isNewGroupItem(isForumPost, type, hasFlag) {
  let tmp = null == type;
  if (!tmp) {
    let tmp3 = type.type === constants2.MESSAGE && type.content.id === type.content.channel_id;
    if (!tmp3) {
      let tmp5 = type.type !== constants2.MESSAGE;
      if (tmp5) {
        tmp5 = type.type !== constants2.THREAD_STARTER_MESSAGE;
      }
      if (!tmp5) {
        tmp5 = isNewMessageGroup(isForumPost, type.content, hasFlag);
      }
      tmp3 = tmp5;
    }
    tmp = tmp3;
  }
  return tmp;
};
