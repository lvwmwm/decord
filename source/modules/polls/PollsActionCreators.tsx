// Module ID: 9935
// Function ID: 76811
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5, 3759, 6830, 1194, 1348, 4468, 4946, 4349, 4467, 7902, 653, 44, 4470, 1212, 5048, 9936, 7901, 4324, 22, 566, 686, 7006, 9941, 3976, 7906, 6691, 7939, 4029, 2]

// Module 9935 (_createForOfIteratorHelperLoose)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { DraftType } from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import useMessagePollInteractions from "useMessagePollInteractions";
import ME from "ME";

let closure_13;
let closure_14;
let closure_15;
let closure_16;
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
function getPollVoteEventProperties(arg0, arg1) {
  let length;
  let closure_0 = arg0;
  const items = [...arg1];
  let num = 0;
  let c1 = 0;
  let c2 = 0;
  if (0 < items.length) {
    do {
      let tmpResult = tmp(items[num]);
      num = num + 1;
      length = items.length;
    } while (num < length);
  }
  return { analyticsSelectedAnswerIds: items, selectedTextAnswersCount: c1, selectedEmojiAnswersCount: c2 };
}
function showLurkingAlert(guildId) {
  let body;
  let title;
  guildId = guildId.guildId;
  ({ title, body } = guildId);
  let obj = importDefault(4470);
  obj = { title, body };
  const intl = guildId(1212).intl;
  obj.confirmText = intl.string(guildId(1212).t["9VLmlZ"]);
  const intl2 = guildId(1212).intl;
  obj.cancelText = intl2.string(guildId(1212).t["2m+Sqk"]);
  obj.onConfirm = function onConfirm() {
    let obj = outer1_1(outer1_3[14]);
    obj = { source: outer1_16.POLL_ALERT };
    obj.joinGuild(guildId, obj);
  };
  obj.show(obj);
}
function handleShowVotesForAnswer(messageId) {
  let answerId;
  let channelId;
  ({ channelId, answerId } = messageId);
  channel = channel.getChannel(channelId);
  if (null != channel) {
    if (lurking.isLurking(channel.guild_id)) {
      let obj = { guildId: channel.guild_id };
      const intl = require(1212) /* getSystemLocale */.intl;
      obj.title = intl.string(require(1212) /* getSystemLocale */.t["7LpysO"]);
      const intl2 = require(1212) /* getSystemLocale */.intl;
      obj.body = intl2.string(require(1212) /* getSystemLocale */.t["5sHHoy"]);
      showLurkingAlert(obj);
    } else {
      const message = store.getMessage(channelId, messageId.messageId);
      if (null != message) {
        if (null != message.poll) {
          if (0 !== message.poll.answers.length) {
            if (null == answerId) {
              const _String = String;
              answerId = String(message.poll.answers[0].answer_id);
            }
            obj = importAll(9936);
            obj = { message, initialAnswerId: answerId };
            obj.showVotesForAnswer(obj);
          }
        }
      }
    }
  }
}
function handleUpdateVoteEditingState(channelId) {
  channelId = channelId.channelId;
  const isEditing = channelId.isEditing;
  callback2(channelId, channelId.messageId, (showResults) => {
    const obj = { channelId, selectedAnswerIds: new Set(), submitting: false, editing: isEditing };
    showResults = undefined;
    if (null != showResults) {
      showResults = showResults.showResults;
    }
    obj.showResults = null != showResults && showResults;
    return obj;
  });
}
function getCurrentAnswerIds(channelId) {
  const message = store.getMessage(channelId.channelId, channelId.messageId);
  if (null == message) {
    let items = [];
  } else {
    const reactions = message.reactions;
    items = reactions.flatMap((me_vote) => {
      if (true === me_vote.me_vote) {
        let name = me_vote.emoji.name;
      } else {
        name = [];
      }
      return name;
    });
  }
  return items;
}
function optimisticallySetAnswers() {
  return _optimisticallySetAnswers(...arguments);
}
function _optimisticallySetAnswers() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function handlePollSubmitVote(result) {
  return _handlePollSubmitVote(...arguments);
}
function _handlePollSubmitVote() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _handleClearPollVote() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _handlePollActionTapped() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _createPoll() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _endPollEarly() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
({ getPollState: closure_13, updatePollState: closure_14 } = useMessagePollInteractions);
({ AnalyticEvents: closure_15, JoinGuildSources: closure_16 } = ME);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/polls/PollsActionCreators.tsx");

export default {
  handlePollAnswerTapped(result) {
    let channelId;
    let messageId;
    const answerId = result.answerId;
    let obj = Object.create(null);
    obj.answerId = 0;
    let merged = Object.assign(result, obj);
    let allow_multiselect;
    ({ channelId, messageId } = merged);
    let message = store.getMessage(channelId, messageId);
    if (null != message) {
      obj = { message, channelId, messageId };
    } else {
      const message1 = message.getMessage(channelId, messageId);
      if (null != message1.message) {
        obj = { channelId, messageId, message: message1.message };
      } else {
        channelId2(message[11])(null != message, "Tapped on a non-existent poll message");
        const _Error = Error;
        const error = new Error();
        throw error;
      }
    }
    channelId2 = obj.channelId;
    const messageId2 = obj.messageId;
    message = obj.message;
    let basicPollChatData = answerId(message[16]).computeBasicPollChatData(message);
    if (null == basicPollChatData) {
      basicPollChatData = {};
    }
    if (true !== basicPollChatData.tapShouldOpenVotersModal) {
      let poll = message.poll;
      allow_multiselect = undefined;
      if (null != poll) {
        allow_multiselect = poll.allow_multiselect;
      }
      callback2(channelId2, messageId2, (arg0) => {
        let analyticsSelectedAnswerIds;
        let analyticsSelectedAnswerIds2;
        let done;
        let selectedEmojiAnswersCount;
        let selectedEmojiAnswersCount2;
        let selectedTextAnswersCount;
        let selectedTextAnswersCount2;
        if (null == arg0) {
          const _Set = Set;
          const items = [answerId];
          const set = new Set(items);
          const poll2 = message.poll;
          let answers;
          if (null != poll2) {
            answers = poll2.answers;
          }
          ({ analyticsSelectedAnswerIds: analyticsSelectedAnswerIds2, selectedTextAnswersCount: selectedTextAnswersCount2, selectedEmojiAnswersCount: selectedEmojiAnswersCount2 } = outer1_19(answers, set));
          let obj2 = channelId2(message[17]);
          let obj = { channel_id: channelId2, message_id: messageId2, selected_answer_ids: analyticsSelectedAnswerIds2, selected_text_answers_count: selectedTextAnswersCount2, selected_emoji_answers_count: selectedEmojiAnswersCount2 };
          obj2.trackWithMetadata(outer1_15.POLL_VOTE_SELECTED, obj);
          obj = { channelId: channelId2, selectedAnswerIds: set, submitting: false, editing: false, showResults: false };
          return obj;
        } else {
          const obj1 = {};
          const merged = Object.assign(arg0);
          const _Set2 = Set;
          const set1 = new Set(obj1.selectedAnswerIds);
          obj1.selectedAnswerIds = set1;
          if (set1.has(answerId)) {
            set1.delete(answerId);
          } else {
            if (!allow_multiselect) {
              const tmp3 = outer1_17(set1);
              let iter = tmp3();
              if (!iter.done) {
                do {
                  let deleteResult1 = set1.delete(iter.value);
                  let iter2 = tmp3();
                  iter = iter2;
                  done = iter2.done;
                } while (!done);
              }
            }
            set1.add(answerId);
          }
          const poll = message.poll;
          let answers1;
          if (null != poll) {
            answers1 = poll.answers;
          }
          ({ analyticsSelectedAnswerIds, selectedTextAnswersCount, selectedEmojiAnswersCount } = outer1_19(answers1, set1));
          obj = channelId2(message[17]);
          obj2 = { channel_id: channelId2, message_id: messageId2, selected_answer_ids: analyticsSelectedAnswerIds, selected_text_answers_count: selectedTextAnswersCount, selected_emoji_answers_count: selectedEmojiAnswersCount };
          obj.trackWithMetadata(outer1_15.POLL_VOTE_SELECTED, obj2);
          return obj1;
        }
      });
    } else {
      let obj1 = { channelId: channelId2, messageId: messageId2, answerId };
      handleShowVotesForAnswer(obj1);
    }
  },
  handlePollSubmitVote,
  handleUpdateVoteEditingState,
  handlePollActionTapped(result) {
    return _handlePollActionTapped(...arguments);
  },
  createPoll() {
    return _createPoll(...arguments);
  },
  endPollEarly() {
    return _endPollEarly(...arguments);
  }
};
export { handleShowVotesForAnswer };
