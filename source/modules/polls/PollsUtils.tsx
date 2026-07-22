// Module ID: 6998
// Function ID: 55951
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: createPollServerDataFromCreateRequest, filterOutUUID, formatPollResultNotificationCenterText, generateEmptyPollAnswer, getPollAnswerVotesTooltipText, getPollReplyPreview, getPollResultsReplyPreview, getPollResultsReplyPreviewMobile, getTotalVotes, hasNonVoteReactions, isIncompleteAnswer, isPollCreationEmpty, useCanPostPollsInChannel

// Module 6998 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
  return arg1(dependencyMap[7]).v4();
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
  return new Date(timestamp + duration * importDefault(dependencyMap[10]).Millis.HOUR).toISOString();
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
    truncateTextResult = closure_8(dependencyMap[11]).truncateText(str, closure_8);
    const obj = closure_8(dependencyMap[11]);
  }
  return truncateTextResult;
}
function getSampleOfVoterUsernamesForAnswer(message, id) {
  const channelId = message.getChannelId();
  const reactions = reactions.getReactions(channelId, message.id, { id }, closure_9, id(dependencyMap[14]).ReactionTypes.VOTE);
  const channel = channel.getChannel(channelId);
  id = channel;
  let guildId = null;
  if (null != channel) {
    guildId = null;
    if (!channel.isPrivate()) {
      guildId = channel.getGuildId();
    }
  }
  const importDefault = guildId;
  let items;
  if (null != reactions) {
    items = reactions.values();
  }
  if (null == items) {
    items = [];
  }
  const obj = { id };
  const tmp3 = importDefault(dependencyMap[15]);
  const tmp3Result = importDefault(dependencyMap[15])(Array.from(items));
  const rejectResult = importDefault(dependencyMap[15])(Array.from(items)).reject((id) => blockedOrIgnored.isBlockedOrIgnored(id.id));
  const takeResult = importDefault(dependencyMap[15])(Array.from(items)).reject((id) => blockedOrIgnored.isBlockedOrIgnored(id.id)).take(closure_9);
  return importDefault(dependencyMap[15])(Array.from(items)).reject((id) => blockedOrIgnored.isBlockedOrIgnored(id.id)).take(closure_9).map((arg0) => {
    let id;
    if (null != channel) {
      id = channel.id;
    }
    return guildId(closure_2[16]).getName(guildId, id, arg0);
  }).value();
}
function formatVoterTooltipText(arr, arg1) {
  let num = 0;
  const bound = Math.max(0, arg1 - arr.length);
  let num2 = 1;
  if (1 === arr.length) {
    if (bound > num) {
      const intl6 = arg1(dependencyMap[13]).intl;
      let obj = {};
      num = arr[num];
      obj.a = num;
      obj.n = bound;
      let formatToPlainStringResult = intl6.formatToPlainString(arg1(dependencyMap[13]).t.SV/iZn, obj);
    } else {
      formatToPlainStringResult = arr[num];
    }
  } else {
    let num6 = 2;
    if (2 === arr.length) {
      if (bound > num) {
        const intl5 = arg1(dependencyMap[13]).intl;
        obj = { a: arr[num] };
        num2 = arr[num2];
        obj.b = num2;
        obj.n = bound;
        let formatToPlainStringResult1 = intl5.formatToPlainString(arg1(dependencyMap[13]).t.YBnZK0, obj);
      } else {
        const intl4 = arg1(dependencyMap[13]).intl;
        const obj1 = { a: arr[num], b: arr[num2] };
        formatToPlainStringResult1 = intl4.formatToPlainString(arg1(dependencyMap[13]).t.O5+f5c, obj1);
      }
    } else if (3 === arr.length) {
      if (bound > num) {
        const intl3 = arg1(dependencyMap[13]).intl;
        const obj2 = { a: arr[num], b: arr[num2] };
        num6 = arr[num6];
        obj2.c = num6;
        obj2.n = bound;
        let formatToPlainStringResult2 = intl3.formatToPlainString(arg1(dependencyMap[13]).t.ThXp+N, obj2);
      } else {
        const intl2 = arg1(dependencyMap[13]).intl;
        const obj3 = { a: arr[num], b: arr[num2], c: arr[num6] };
        formatToPlainStringResult2 = intl2.formatToPlainString(arg1(dependencyMap[13]).t.0UzBM3, obj3);
      }
    } else {
      const intl = arg1(dependencyMap[13]).intl;
      obj = { n: bound };
      return intl.formatToPlainString(arg1(dependencyMap[13]).t.yVX6kE, obj);
    }
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
({ POLL_RESULT_MESSAGE_POLL_TITLE_MAX_VISIBLE_CHARS: closure_8, VOTES_TOOLTIP_MAX_USERS: closure_9 } = arg1(dependencyMap[5]));
const tmp2 = arg1(dependencyMap[5]);
({ ChannelTypesSets: closure_10, Permissions: closure_11 } = arg1(dependencyMap[6]));
const tmp3 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/polls/PollsUtils.tsx");

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
  const arg1 = channel;
  const items = [closure_6];
  return arg1(dependencyMap[8]).useStateFromStores(items, (self) => {
    let tmp = null != self;
    if (tmp) {
      tmp = self.id !== self(closure_2[9]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
    }
    if (tmp) {
      const POLLS = constants.POLLS;
      const tmp7 = !POLLS.has(self.type);
      let tmp8 = !tmp7;
      if (!tmp7) {
        const tmp10 = !self.isPrivate();
        let tmp11 = !tmp10;
        if (tmp10) {
          let canResult = closure_6.can(constants2.SEND_MESSAGES, self);
          if (canResult) {
            canResult = closure_6.can(constants2.SEND_POLLS, self);
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
    tmp = null == answers.find((arg0) => callback(arg0));
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
    const obj = {};
    const merged = Object.assign(poll);
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
  let obj = arg1(dependencyMap[12]);
  const messageAuthor = obj.getMessageAuthor(message);
  const intl = arg1(dependencyMap[13]).intl;
  obj = { username: messageAuthor.nick, title: getPollResultsPollName(message, closure_8) };
  return intl.format(arg1(dependencyMap[13]).t.Vn97Ka, obj);
};
export const getPollResultsReplyPreviewMobile = function getPollResultsReplyPreviewMobile(merged) {
  if ("author" in merged) {
    let obj = arg1(dependencyMap[12]);
    const messageAuthor = obj.getMessageAuthor(merged);
    const intl = arg1(dependencyMap[13]).intl;
    obj = { username: messageAuthor.nick, title: getPollResultsPollName(merged, closure_8) };
    return intl.formatToParts(arg1(dependencyMap[13]).t.Vn97Ka, obj);
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
  const message = message.getMessage(arg1, arg0);
  if (null == message) {
    return "";
  } else {
    const obj = { id };
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
    const intl3 = arg1(dependencyMap[13]).intl;
    let obj = { questionText };
    let formatToPlainStringResult = intl3.formatToPlainString(arg1(dependencyMap[13]).t.8anM0l, obj);
  } else if (null != victorAnswerId) {
    const intl2 = arg1(dependencyMap[13]).intl;
    obj = { questionText, victorAnswerText };
    const _HermesInternal2 = HermesInternal;
    obj.percentage = "" + num + "%";
    formatToPlainStringResult = intl2.formatToPlainString(arg1(dependencyMap[13]).t.8yEgvE, obj);
  } else {
    const intl = arg1(dependencyMap[13]).intl;
    obj = { questionText };
    const _HermesInternal = HermesInternal;
    obj.percentage = "" + num + "%";
    formatToPlainStringResult = intl.formatToPlainString(arg1(dependencyMap[13]).t.XVk6Zv, obj);
  }
  return formatToPlainStringResult;
};
