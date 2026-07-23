// Module ID: 7003
// Function ID: 55985
// Name: _createForOfIteratorHelperLoose
// Dependencies: [1348, 7004, 4349, 3758, 3767, 7071, 653, 491, 566, 5606, 664, 1833, 4360, 1212, 7006, 22, 4319, 2]
// Exports: createPollServerDataFromCreateRequest, filterOutUUID, formatPollResultNotificationCenterText, generateEmptyPollAnswer, getPollAnswerVotesTooltipText, getPollReplyPreview, getPollResultsReplyPreview, getPollResultsReplyPreviewMobile, getTotalVotes, hasNonVoteReactions, isIncompleteAnswer, isPollCreationEmpty, useCanPostPollsInChannel

// Module 7003 (_createForOfIteratorHelperLoose)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import POLL_ATTACHMENT_FOLDER from "POLL_ATTACHMENT_FOLDER";
import ME from "ME";

let closure_10;
let closure_11;
let closure_8;
let closure_9;
const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function generateLocalCreationAnswerId() {
  return require(491) /* v1 */.v4();
}
function isAnswerFilled(text) {
  let trimmed;
  if (null != text.text) {
    trimmed = str.trim();
  }
  let tmp2 = null != trimmed;
  if (tmp2) {
    tmp2 = trimmed.length > 0;
  }
  return tmp2;
}
function createPollExpiryTimestamp(duration) {
  const timestamp = Date.now();
  return new Date(timestamp + duration * importDefault(664).Millis.HOUR).toISOString();
}
function getPollResultsPollName(merged, closure_8) {
  const first = merged.embeds[0];
  let rawValue;
  if (null != first) {
    const fields = first.fields;
    if (null != fields) {
      const found = fields.find((rawName) => "poll_question_text" === rawName.rawName);
      if (null != found) {
        rawValue = found.rawValue;
      }
    }
  }
  let str = "";
  if (null != rawValue) {
    str = rawValue;
  }
  let truncateTextResult = str;
  if (null != closure_8) {
    truncateTextResult = require(1833) /* cssValueToNumber */.truncateText(str, closure_8);
    const obj = require(1833) /* cssValueToNumber */;
  }
  return truncateTextResult;
}
function getSampleOfVoterUsernamesForAnswer(message, id) {
  const channelId = message.getChannelId();
  const obj = { id, name: "", animated: false };
  reactions = reactions.getReactions(channelId, message.id, obj, closure_9, channel(7006).ReactionTypes.VOTE);
  channel = channel.getChannel(channelId);
  let guildId = null;
  if (null != channel) {
    guildId = null;
    if (!channel.isPrivate()) {
      guildId = channel.getGuildId();
    }
  }
  let items;
  if (null != reactions) {
    items = reactions.values();
  }
  if (null == items) {
    items = [];
  }
  const tmp3 = guildId(22);
  const tmp3Result = guildId(22)(Array.from(items));
  const rejectResult = guildId(22)(Array.from(items)).reject((id) => outer1_7.isBlockedOrIgnored(id.id));
  const takeResult = guildId(22)(Array.from(items)).reject((id) => outer1_7.isBlockedOrIgnored(id.id)).take(closure_9);
  return guildId(22)(Array.from(items)).reject((id) => outer1_7.isBlockedOrIgnored(id.id)).take(closure_9).map((arg0) => {
    let id;
    if (null != channel) {
      id = channel.id;
    }
    return guildId(outer1_2[16]).getName(guildId, id, arg0);
  }).value();
}
function formatVoterTooltipText(arr, arg1) {
  let num = 0;
  const bound = Math.max(0, arg1 - arr.length);
  let num2 = 1;
  if (1 === arr.length) {
    if (bound > num) {
      const intl6 = require(1212) /* getSystemLocale */.intl;
      let obj = {};
      num = arr[num];
      obj.a = num;
      obj.n = bound;
      let formatToPlainStringResult = intl6.formatToPlainString(require(1212) /* getSystemLocale */.t["SV/iZn"], obj);
    } else {
      formatToPlainStringResult = arr[num];
    }
  } else {
    let num6 = 2;
    if (2 === arr.length) {
      if (bound > num) {
        const intl5 = require(1212) /* getSystemLocale */.intl;
        obj = { a: arr[num] };
        num2 = arr[num2];
        obj.b = num2;
        obj.n = bound;
        let formatToPlainStringResult1 = intl5.formatToPlainString(require(1212) /* getSystemLocale */.t.YBnZK0, obj);
      } else {
        const intl4 = require(1212) /* getSystemLocale */.intl;
        const obj1 = { a: arr[num], b: arr[num2] };
        formatToPlainStringResult1 = intl4.formatToPlainString(require(1212) /* getSystemLocale */.t["O5+f5c"], obj1);
      }
    } else if (3 === arr.length) {
      if (bound > num) {
        const intl3 = require(1212) /* getSystemLocale */.intl;
        const obj2 = { a: arr[num], b: arr[num2] };
        num6 = arr[num6];
        obj2.c = num6;
        obj2.n = bound;
        let formatToPlainStringResult2 = intl3.formatToPlainString(require(1212) /* getSystemLocale */.t["ThXp+N"], obj2);
      } else {
        const intl2 = require(1212) /* getSystemLocale */.intl;
        const obj3 = { a: arr[num], b: arr[num2], c: arr[num6] };
        formatToPlainStringResult2 = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t["0UzBM3"], obj3);
      }
    } else {
      const intl = require(1212) /* getSystemLocale */.intl;
      obj = { n: bound };
      return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.yVX6kE, obj);
    }
  }
}
({ POLL_RESULT_MESSAGE_POLL_TITLE_MAX_VISIBLE_CHARS: closure_8, VOTES_TOOLTIP_MAX_USERS: closure_9 } = POLL_ATTACHMENT_FOLDER);
({ ChannelTypesSets: closure_10, Permissions: closure_11 } = ME);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/polls/PollsUtils.tsx");

export const generateEmptyPollAnswer = function generateEmptyPollAnswer() {
  return { text: undefined, image: undefined, localCreationAnswerId: generateLocalCreationAnswerId() };
};
export { generateLocalCreationAnswerId };
export const filterOutUUID = function filterOutUUID(str) {
  return str.replace(/\b[a-f\d]{8}-(?:[a-f\d]{4}-){3}[a-f\d]{12}-\b/i, "");
};
export const hasNonVoteReactions = function hasNonVoteReactions(reactions) {
  const tmp = _createForOfIteratorHelperLoose(reactions.reactions);
  let iter = tmp();
  if (!iter.done) {
    while (null != iter.value.me_vote) {
      let iter2 = tmp();
      iter = iter2;
    }
    return true;
  }
  return false;
};
export const useCanPostPollsInChannel = function useCanPostPollsInChannel(channel) {
  const _require = channel;
  const items = [closure_6];
  return _require(566).useStateFromStores(items, () => {
    let tmp = null != _private;
    if (tmp) {
      tmp = _private.id !== _private(outer1_2[9]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
    }
    if (tmp) {
      const POLLS = outer1_10.POLLS;
      const tmp7 = !POLLS.has(_private.type);
      let tmp8 = !tmp7;
      if (!tmp7) {
        const tmp10 = !_private.isPrivate();
        let tmp11 = !tmp10;
        if (tmp10) {
          let canResult = outer1_6.can(outer1_11.SEND_MESSAGES, _private);
          if (canResult) {
            canResult = outer1_6.can(outer1_11.SEND_POLLS, _private);
          }
          tmp11 = canResult;
        }
        tmp8 = tmp11;
      }
      tmp = tmp8;
    }
    return tmp;
  });
};
export const isPollCreationEmpty = function isPollCreationEmpty(closure_4, answers) {
  let tmp = 0 === closure_4.length;
  if (tmp) {
    tmp = null == answers.find((arg0) => outer1_15(arg0));
  }
  return tmp;
};
export { isAnswerFilled };
export const isIncompleteAnswer = function isIncompleteAnswer(text) {
  if (null != text.text) {
    const trimmed = str.trim();
  }
  let tmp = null != text.image;
  if (tmp) {
    let tmp2 = null == trimmed;
    if (!tmp2) {
      tmp2 = 0 === trimmed.length;
    }
    tmp = tmp2;
  }
  return tmp;
};
export { createPollExpiryTimestamp };
export const createPollServerDataFromCreateRequest = function createPollServerDataFromCreateRequest(poll) {
  if (null != poll) {
    let mapped;
    if (null != poll) {
      const answers = poll.answers;
      if (null != answers) {
        mapped = answers.map((poll_media) => {
          let name;
          poll_media = poll_media.poll_media;
          let emoji;
          if (null != poll_media) {
            emoji = poll_media.emoji;
          }
          let obj = {};
          const merged = Object.assign(poll_media.poll_media);
          let tmp3;
          if (null != emoji) {
            obj = {};
            ({ id: obj2.id, name } = emoji);
            let str = "";
            if (null != name) {
              str = name;
            }
            obj.name = str;
            tmp3 = obj;
          }
          obj["emoji"] = tmp3;
          obj = {};
          const merged1 = Object.assign(poll_media);
          obj["answer_id"] = arg1 + 1;
          obj["poll_media"] = obj;
          return obj;
        });
      }
    }
    let duration;
    if (null != poll) {
      duration = poll.duration;
    }
    let str = "0";
    if (null != duration) {
      str = createPollExpiryTimestamp(poll.duration);
    }
    let obj = {};
    let merged = Object.assign(poll);
    obj["expiry"] = str;
    obj["answers"] = mapped;
    return obj;
  }
};
export const getPollReplyPreview = function getPollReplyPreview(message) {
  const poll = message.poll;
  let text;
  if (null != poll) {
    const question = poll.question;
    if (null != question) {
      text = question.text;
    }
  }
  let str = "";
  if (null != text) {
    str = text;
  }
  return str;
};
export const getPollResultsReplyPreview = function getPollResultsReplyPreview(message) {
  let obj = require(4360) /* useNullableMessageAuthor */;
  const messageAuthor = obj.getMessageAuthor(message);
  const intl = require(1212) /* getSystemLocale */.intl;
  obj = { username: messageAuthor.nick, title: getPollResultsPollName(message, closure_8) };
  return intl.format(require(1212) /* getSystemLocale */.t.Vn97Ka, obj);
};
export const getPollResultsReplyPreviewMobile = function getPollResultsReplyPreviewMobile(merged) {
  if ("author" in merged) {
    let obj = require(4360) /* useNullableMessageAuthor */;
    const messageAuthor = obj.getMessageAuthor(merged);
    const intl = require(1212) /* getSystemLocale */.intl;
    obj = { username: messageAuthor.nick, title: getPollResultsPollName(merged, closure_8) };
    return intl.formatToParts(require(1212) /* getSystemLocale */.t.Vn97Ka, obj);
  } else {
    return null;
  }
};
export const getTotalVotes = function getTotalVotes(reactions) {
  return reactions.reduce((arg0, count_details) => {
    count_details = count_details.count_details;
    let vote;
    if (null != count_details) {
      vote = count_details.vote;
    }
    let num = 0;
    if (null != vote) {
      num = vote;
    }
    return arg0 + num;
  }, 0);
};
export { getSampleOfVoterUsernamesForAnswer };
export { formatVoterTooltipText };
export const getPollAnswerVotesTooltipText = function getPollAnswerVotesTooltipText(arg0, arg1, id) {
  message = message.getMessage(arg1, arg0);
  if (null == message) {
    return "";
  } else {
    const obj = { id, name: "", animated: false };
    let str = "";
    const reaction = message.getReaction(obj);
    let vote;
    if (null != reaction) {
      const count_details = reaction.count_details;
      if (null != count_details) {
        vote = count_details.vote;
      }
    }
    let num2 = 0;
    if (null != vote) {
      num2 = vote;
    }
    const arr = getSampleOfVoterUsernamesForAnswer(message, id);
    if (0 !== arr.length) {
      str = formatVoterTooltipText(arr, num2);
    }
    return str;
  }
};
export const formatPollResultNotificationCenterText = function formatPollResultNotificationCenterText(totalVotes) {
  let questionText;
  let victorAnswerId;
  let victorAnswerText;
  ({ questionText, totalVotes } = totalVotes);
  let num = 0;
  ({ victorAnswerText, victorAnswerId } = totalVotes);
  if (totalVotes.totalVotes > 0) {
    const _Math = Math;
    num = Math.round(tmp / totalVotes * 100);
  }
  if (0 === totalVotes) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    let obj = { questionText };
    let formatToPlainStringResult = intl3.formatToPlainString(require(1212) /* getSystemLocale */.t["8anM0l"], obj);
  } else if (null != victorAnswerId) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj = { questionText, victorAnswerText };
    const _HermesInternal2 = HermesInternal;
    obj.percentage = "" + num + "%";
    formatToPlainStringResult = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t["8yEgvE"], obj);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    obj = { questionText };
    const _HermesInternal = HermesInternal;
    obj.percentage = "" + num + "%";
    formatToPlainStringResult = intl.formatToPlainString(require(1212) /* getSystemLocale */.t.XVk6Zv, obj);
  }
  return formatToPlainStringResult;
};
