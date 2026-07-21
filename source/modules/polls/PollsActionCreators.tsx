// Module ID: 9926
// Function ID: 76747
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 9926 (_createForOfIteratorHelperLoose)
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
function getPollVoteEventProperties(arg0, arg1) {
  let length;
  arg1 = arg0;
  const items = [...arg1];
  let num = 0;
  let closure_1 = 0;
  let closure_2 = 0;
  if (0 < items.length) {
    do {
      let tmpResult = tmp(items[num]);
      num = num + 1;
      length = items.length;
    } while (num < length);
  }
  return { analyticsSelectedAnswerIds: items, selectedTextAnswersCount: closure_1, selectedEmojiAnswersCount: closure_2 };
}
function showLurkingAlert(guildId) {
  let body;
  let title;
  const arg1 = guildId.guildId;
  ({ title, body } = guildId);
  let obj = importDefault(dependencyMap[12]);
  obj = { title, body };
  const intl = arg1(dependencyMap[13]).intl;
  obj.confirmText = intl.string(arg1(dependencyMap[13]).t.9VLmlZ);
  const intl2 = arg1(dependencyMap[13]).intl;
  obj.cancelText = intl2.string(arg1(dependencyMap[13]).t.2m+Sqk);
  obj.onConfirm = function onConfirm() {
    let obj = callback(closure_3[14]);
    obj = { source: constants.POLL_ALERT };
    obj.joinGuild(guildId, obj);
  };
  obj.show(obj);
}
function handleShowVotesForAnswer(messageId) {
  let answerId;
  let channelId;
  ({ channelId, answerId } = messageId);
  const channel = channel.getChannel(channelId);
  if (null != channel) {
    if (lurking.isLurking(channel.guild_id)) {
      let obj = { guildId: channel.guild_id };
      const intl = arg1(dependencyMap[13]).intl;
      obj.title = intl.string(arg1(dependencyMap[13]).t.7LpysO);
      const intl2 = arg1(dependencyMap[13]).intl;
      obj.body = intl2.string(arg1(dependencyMap[13]).t.5sHHoy);
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
            obj = importAll(dependencyMap[15]);
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
  const arg1 = channelId;
  const importDefault = channelId.isEditing;
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
  const _optimisticallySetAnswers = obj;
  return obj(...arguments);
}
function handlePollSubmitVote(result) {
  return _handlePollSubmitVote(...arguments);
}
function _handlePollSubmitVote() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _handlePollSubmitVote = obj;
  return obj(...arguments);
}
function _handleClearPollVote() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _handleClearPollVote = obj;
  return obj(...arguments);
}
function _handlePollActionTapped() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _handlePollActionTapped = obj;
  return obj(...arguments);
}
function _createPoll() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _createPoll = obj;
  return obj(...arguments);
}
function _endPollEarly() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _endPollEarly = obj;
  return obj(...arguments);
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
const DraftType = arg1(dependencyMap[5]).DraftType;
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = importDefault(dependencyMap[7]);
let closure_12 = importDefault(dependencyMap[8]);
({ getPollState: closure_13, updatePollState: closure_14 } = arg1(dependencyMap[9]));
const tmp2 = arg1(dependencyMap[9]);
({ AnalyticEvents: closure_15, JoinGuildSources: closure_16 } = arg1(dependencyMap[10]));
const obj = {
  handlePollAnswerTapped(result) {
    let channelId;
    let messageId;
    const answerId = result.answerId;
    const arg1 = answerId;
    let obj = Object.create(null);
    obj.answerId = 0;
    const merged = Object.assign(result, obj);
    let closure_4;
    ({ channelId, messageId } = merged);
    let message = store.getMessage(channelId, messageId);
    if (null != message) {
      obj = { message, channelId, messageId };
    } else {
      const message1 = message.getMessage(channelId, messageId);
      if (null != message1.message) {
        obj = { channelId, messageId, message: message1.message };
      } else {
        importDefault(dependencyMap[11])(null != message, "Tapped on a non-existent poll message");
        const _Error = Error;
        const error = new Error();
        throw error;
      }
    }
    const channelId2 = obj.channelId;
    const importDefault = channelId2;
    const messageId2 = obj.messageId;
    const importAll = messageId2;
    message = obj.message;
    const dependencyMap = message;
    let basicPollChatData = arg1(dependencyMap[16]).computeBasicPollChatData(message);
    if (null == basicPollChatData) {
      basicPollChatData = {};
    }
    if (true !== basicPollChatData.tapShouldOpenVotersModal) {
      const poll = message.poll;
      let allow_multiselect;
      if (null != poll) {
        allow_multiselect = poll.allow_multiselect;
      }
      closure_4 = allow_multiselect;
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
          ({ analyticsSelectedAnswerIds: analyticsSelectedAnswerIds2, selectedTextAnswersCount: selectedTextAnswersCount2, selectedEmojiAnswersCount: selectedEmojiAnswersCount2 } = closure_19(answers, set));
          let obj2 = channelId2(message[17]);
          let obj = { channel_id: channelId2, message_id: messageId2, selected_answer_ids: analyticsSelectedAnswerIds2, selected_text_answers_count: selectedTextAnswersCount2, selected_emoji_answers_count: selectedEmojiAnswersCount2 };
          obj2.trackWithMetadata(constants.POLL_VOTE_SELECTED, obj);
          obj = { 140599176: true, -1335718063: true, -1978968740: true, 185536522: true, 118130959: true, channelId: channelId2, selectedAnswerIds: set };
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
              const tmp3 = callback(set1);
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
          ({ analyticsSelectedAnswerIds, selectedTextAnswersCount, selectedEmojiAnswersCount } = closure_19(answers1, set1));
          obj = channelId2(message[17]);
          obj2 = { channel_id: channelId2, message_id: messageId2, selected_answer_ids: analyticsSelectedAnswerIds, selected_text_answers_count: selectedTextAnswersCount, selected_emoji_answers_count: selectedEmojiAnswersCount };
          obj.trackWithMetadata(constants.POLL_VOTE_SELECTED, obj2);
          return obj1;
        }
      });
    } else {
      const obj1 = { channelId: channelId2, messageId: messageId2, answerId };
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
const tmp3 = arg1(dependencyMap[10]);
const result = arg1(dependencyMap[28]).fileFinishedImporting("modules/polls/PollsActionCreators.tsx");

export default obj;
export { handleShowVotesForAnswer };
