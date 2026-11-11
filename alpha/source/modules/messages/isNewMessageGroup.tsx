// Module ID: 14452
// Function ID: 14453
// Name: isNewMessageGroup
// Dependencies: [1072, 1089, 6999, 11, 5065, 2]
// Exports: isNewGroupItem

// Module 14452 (isNewMessageGroup)
import DurationsDefault from "Durations" /* 1089 */;
import DateUtils from "DateUtils" /* 5065 */;
import isSystemMessageDefault from "isSystemMessage" /* 6999 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
function isNewMessageGroup(isForumPost, content, hasFlag) {
  const hasFlagResult = hasFlag.hasFlag(hasOwnProperty.HAS_THREAD);
  const tmp3 = !hasFlagResult && !hasFlag.isCommandType();
  let tmp4 = !tmp3;
  if (tmp3) {
    let tmp6 = content.blocked !== hasFlag.blocked || content.ignored !== hasFlag.ignored;
    if (!tmp6) {
      let tmp36;
      if (hasFlag.type > constants.DEFAULT) {
        const tmp39 = isSystemMessageDefault(content);
        let tmp40 = !tmp39;
        if (tmp39) {
          tmp40 = hasFlag.type === tmp7.REPLY;
        }
        tmp36 = tmp40;
      } else {
        tmp36 = isSystemMessageDefault(content);
        const tmp41 = importDefault;
        if (!tmp36) {
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
                  const tmp41Result = tmp41(11);
                  tmp15 = id !== tmp41Result.castChannelIdAsMessageId(isForumPost.id);
                }
                let tmp16 = !tmp15;
                if (tmp15) {
                  const obj2 = DateUtils;
                  const isSameDayResult = obj2.isSameDay(content.timestamp, hasFlag.timestamp);
                  let tmp19 = !isSameDayResult;
                  const tmp17 = require;
                  if (isSameDayResult) {
                    const tmp17Result = tmp17(5065);
                    const isWithinIntervalResult = tmp17Result.isWithinInterval(content.timestamp, hasFlag.timestamp, closure_7);
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
                          let linkedLobby;
                          if (isForumPost != null) {
                            linkedLobby = isForumPost.linkedLobby;
                          }
                          let tmp31 = null == linkedLobby || hasFlag.state !== metroRequire.SENDING;
                          if (tmp31) {
                            let tmp33 = hasFlag.applicationId !== content.applicationId;
                            if (!tmp33) {
                              const additionalName = hasFlag.additionalName;
                              let tmp34 = null;
                              if (null != additionalName) {
                                tmp34 = null;
                                if ("" !== additionalName) {
                                  tmp34 = additionalName;
                                }
                              }
                              const additionalName2 = content.additionalName;
                              let tmp35 = null;
                              if (null != additionalName2) {
                                tmp35 = null;
                                if ("" !== additionalName2) {
                                  tmp35 = additionalName2;
                                }
                              }
                              tmp33 = tmp34 !== tmp35;
                            }
                            tmp31 = tmp33;
                          }
                          tmp29 = tmp31;
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
          tmp36 = tmp8;
        }
      }
      tmp6 = tmp36;
    }
    tmp4 = tmp6;
  }
  return tmp4;
}
({ MessageTypes: c3, ChannelStreamTypes: closure_4, MessageFlags: hasOwnProperty, MessageStates: metroRequire } = Constants);
let closure_7 = 7 * DurationsDefault.Millis.MINUTE;
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
