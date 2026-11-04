// Module ID: 10298
// Function ID: 10299
// Name: isNewMessageGroup
// Dependencies: [1072, 1089, 7023, 11, 4963, 2]
// Exports: isNewGroupItem

// Module 10298 (isNewMessageGroup)
import DurationsDefault from "Durations" /* 1089 */;
import DateUtils from "DateUtils" /* 4963 */;
import isSystemMessageDefault from "isSystemMessage" /* 7023 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
function isNewMessageGroup(isForumPost, content, hasFlag) {
  const hasFlagResult = hasFlag.hasFlag(hasOwnProperty.HAS_THREAD);
  const tmp3 = !hasFlagResult && !hasFlag.isCommandType();
  let tmp4 = !tmp3;
  if (tmp3) {
    let tmp6 = content.blocked !== hasFlag.blocked || content.ignored !== hasFlag.ignored;
    if (!tmp6) {
      let tmp33;
      if (hasFlag.type > constants.DEFAULT) {
        const tmp36 = isSystemMessageDefault(content);
        let tmp37 = !tmp36;
        if (tmp36) {
          tmp37 = hasFlag.type === tmp7.REPLY;
        }
        tmp33 = tmp37;
      } else {
        tmp33 = isSystemMessageDefault(content);
        const tmp38 = importDefault;
        if (!tmp33) {
          let tmp8 = content.author.id !== hasFlag.author.id;
          if (!tmp8) {
            const hasFlagResult1 = content.hasFlag(hasOwnProperty.EPHEMERAL);
            let tmp10 = hasFlagResult1 !== hasFlag.hasFlag(tmp.EPHEMERAL);
            if (!tmp10) {
              let tmp12 = null != hasFlag.webhookId && content.author.username !== hasFlag.author.username;
              if (!tmp12) {
                let isForumPostResult;
                if (isForumPost != null) {
                  isForumPostResult = isForumPost.isForumPost();
                }
                let tmp15 = !isForumPostResult;
                if (isForumPostResult) {
                  const id = content.id;
                  const tmp38Result = tmp38(11);
                  tmp15 = id !== tmp38Result.castChannelIdAsMessageId(isForumPost.id);
                }
                let tmp16 = !tmp15;
                if (tmp15) {
                  const obj2 = DateUtils;
                  const isSameDayResult = obj2.isSameDay(content.timestamp, hasFlag.timestamp);
                  let tmp19 = !isSameDayResult;
                  const tmp17 = require;
                  if (isSameDayResult) {
                    const tmp17Result = tmp17(4963);
                    const isWithinIntervalResult = tmp17Result.isWithinInterval(content.timestamp, hasFlag.timestamp, closure_6);
                    let tmp22 = !isWithinIntervalResult;
                    if (isWithinIntervalResult) {
                      const hasFlagResult2 = hasFlag.hasFlag(hasOwnProperty.SUPPRESS_NOTIFICATIONS);
                      let hasFlagResult3 = !hasFlagResult2;
                      if (hasFlagResult2) {
                        hasFlagResult3 = content.hasFlag(tmp.SUPPRESS_NOTIFICATIONS);
                      }
                      let tmp25 = !hasFlagResult3;
                      if (hasFlagResult3) {
                        const hasFlagResult4 = content.hasFlag(hasOwnProperty.SUPPRESS_NOTIFICATIONS);
                        let hasFlagResult5 = !hasFlagResult4;
                        if (hasFlagResult4) {
                          hasFlagResult5 = hasFlag.hasFlag(tmp.SUPPRESS_NOTIFICATIONS);
                        }
                        if (!hasFlagResult5) {
                          hasFlagResult5 = !(hasFlag.mentions.length > 0 || hasFlag.mentionRoles.length > 0 || hasFlag.mentionEveryone);
                        }
                        let tmp29 = !hasFlagResult5;
                        if (hasFlagResult5) {
                          let tmp30 = hasFlag.applicationId !== content.applicationId;
                          if (!tmp30) {
                            const additionalName = hasFlag.additionalName;
                            let tmp31 = null;
                            if (null != additionalName) {
                              tmp31 = null;
                              if ("" !== additionalName) {
                                tmp31 = additionalName;
                              }
                            }
                            const additionalName2 = content.additionalName;
                            let tmp32 = null;
                            if (null != additionalName2) {
                              tmp32 = null;
                              if ("" !== additionalName2) {
                                tmp32 = additionalName2;
                              }
                            }
                            tmp30 = tmp31 !== tmp32;
                          }
                          tmp29 = tmp30;
                        }
                        tmp25 = tmp29;
                      }
                      tmp22 = tmp25;
                    }
                    tmp19 = tmp22;
                  }
                  tmp16 = tmp19;
                }
                tmp12 = tmp16;
              }
              tmp10 = tmp12;
            }
            tmp8 = tmp10;
          }
          tmp33 = tmp8;
        }
      }
      tmp6 = tmp33;
    }
    tmp4 = tmp6;
  }
  return tmp4;
}
({ MessageTypes: c3, ChannelStreamTypes: closure_4, MessageFlags: hasOwnProperty } = Constants);
let closure_6 = 7 * DurationsDefault.Millis.MINUTE;
const result = size.fileFinishedImporting("modules/messages/isNewMessageGroup.tsx");

export default isNewMessageGroup;
export function isNewGroupItem(isForumPost, type, hasFlag) {
  let tmp = null == type;
  if (!tmp) {
    let tmp3 = type.type === constants2.MESSAGE && type.content.id === type.content.channel_id;
    if (!tmp3) {
      tmp3 = type.type !== tmp2.MESSAGE && type.type !== tmp2.THREAD_STARTER_MESSAGE || isNewMessageGroup(isForumPost, type.content, hasFlag);
      const tmp4 = type.type !== tmp2.MESSAGE && type.type !== tmp2.THREAD_STARTER_MESSAGE || isNewMessageGroup(isForumPost, type.content, hasFlag);
    }
    tmp = tmp3;
  }
  return tmp;
}
