// Module ID: 7988
// Function ID: 63185
// Name: _createForOfIteratorHelperLoose
// Dependencies: [4122, 4991, 1348, 1917, 4349, 1849, 7989, 653, 4329, 3771, 3775, 1392, 7990, 3764, 3747, 7991, 1212, 7002, 7993, 477, 7994, 7995, 2]
// Exports: default

// Module 7988 (_createForOfIteratorHelperLoose)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { getPollState } from "useMessagePollInteractions";
import ME from "ME";
import set from "_isNativeReflectConstruct";

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
function reactionForId(reactions, first) {
  let value;
  const tmp = _createForOfIteratorHelperLoose(reactions);
  const iter = tmp();
  let iter2 = iter;
  if (!iter.done) {
    while (true) {
      value = iter2.value;
      if ("number" === typeof value.emoji.id) {
        let _HermesInternal = HermesInternal;
        let id = "" + value.emoji.id;
      } else {
        id = value.emoji.id;
      }
      if (id === first) {
        break;
      } else {
        let iter3 = tmp();
        iter2 = iter3;
      }
    }
    return value;
  }
}
function transformPollEmoji(animated, size) {
  let obj = size;
  if (size === undefined) {
    obj = {};
  }
  let flag = obj.animateEmoji;
  if (flag === undefined) {
    flag = false;
  }
  let num = obj.size;
  if (num === undefined) {
    num = 48;
  }
  if (null != animated) {
    animated = animated.animated;
    let tmp = animated;
    if (null == animated) {
      tmp = animated;
      if (null != animated.id) {
        customEmojiById = customEmojiById.getCustomEmojiById(animated.id);
        animated = undefined;
        if (null != customEmojiById) {
          animated = customEmojiById.animated;
        }
        tmp = null != animated && animated;
        const tmp5 = null != animated && animated;
      }
    }
    if (flag) {
      flag = null != tmp;
    }
    if (flag) {
      flag = tmp;
    }
    obj = {};
    let combined = null;
    if (null != animated.id) {
      const _HermesInternal = HermesInternal;
      combined = "" + animated.id;
    }
    obj.id = combined;
    obj.name = animated.name;
    if (null == animated.id) {
      let name = importDefault(3771).convertSurrogateToName(animated.name);
      const obj3 = importDefault(3771);
    } else {
      name = animated.name;
    }
    obj.displayName = name;
    if (null == animated.id) {
      let uRL = importDefault(3775).getURL(animated.name);
      const obj6 = importDefault(3775);
    } else {
      obj = { id: animated.id, animated: flag, size: num };
      uRL = importDefault(1392).getEmojiURL(obj);
      const obj4 = importDefault(1392);
    }
    obj.src = uRL;
    obj.animated = flag;
    return obj;
  }
}
function isPollMessageDirectlyInteractive(poll) {
  let tmp = null == poll.poll;
  if (!tmp) {
    tmp = store.getMessage(poll.channel_id, poll.id) === poll;
  }
  return tmp;
}
function computeBasicPollChatData(message, arg1, maxSettingsForPreset) {
  let editing;
  let selectedAnswerIds;
  let showResults;
  let submitting;
  let tmp = arg1;
  let obj = maxSettingsForPreset;
  if (maxSettingsForPreset === undefined) {
    obj = {};
  }
  let formattedExpirationLabel = obj.formattedExpirationLabel;
  const poll = message.poll;
  if (null != poll) {
    let str = "";
    if (message.state === MessageStates.SENT) {
      if (null == formattedExpirationLabel) {
        formattedExpirationLabel = require(7990) /* formatExpirationLabel */.formatExpirationLabel(poll.expiry);
        const obj2 = require(7990) /* formatExpirationLabel */;
      }
      str = formattedExpirationLabel;
    }
    if (null == tmp) {
      tmp = getPollState(message.getChannelId(), message.id);
    }
    if (null == tmp) {
      tmp = obj;
    }
    ({ selectedAnswerIds, submitting, editing, showResults } = tmp);
    let reactions = message.reactions;
    let obj3 = reactions;
    let flag = true;
    if (!isPollMessageDirectlyInteractive(message)) {
      message = store.getMessage(message.channel_id, message.id);
      reactions = undefined;
      if (null != message) {
        reactions = message.reactions;
      }
      obj3 = reactions;
      flag = !message.isSearchHit && null != message;
      const tmp11 = !message.isSearchHit && null != message;
    }
    const someResult = obj3.some((me_vote) => true === me_vote.me_vote);
    let tmp15 = !editing;
    if (tmp15) {
      tmp15 = someResult;
    }
    let tmp17 = tmp15;
    if (!tmp15) {
      tmp17 = tmp6;
    }
    if (!tmp17) {
      tmp17 = showResults;
    }
    let tmp18 = tmp3;
    if (message.state === MessageStates.SENT) {
      tmp18 = flag;
    }
    if (tmp18) {
      tmp18 = !someResult || editing || tmp17;
      const tmp19 = !someResult || editing || tmp17;
    }
    channel = channel.getChannel(message.getChannelId());
    let guildId;
    if (null != channel) {
      if (null != channel.getGuildId) {
        guildId = channel.getGuildId();
      }
    }
    let selfMember = null;
    if (null != guildId) {
      selfMember = selfMember.getSelfMember(guildId);
    }
    const result = require(3764) /* getAutomodQuarantinedProfileFlags */.hasAutomodQuarantinedProfile(selfMember);
    const obj5 = require(3764) /* getAutomodQuarantinedProfileFlags */;
    obj = { poll, canTapAnswers: tmp18 };
    let tmp28 = tmp15;
    const result1 = require(3747) /* isCommunicationDisabled */.isMemberCommunicationDisabled(selfMember);
    if (tmp15) {
      tmp28 = tmp3;
    }
    if (tmp28) {
      tmp28 = !tmp6;
    }
    obj.canRemoveVote = tmp28;
    obj.canShowVoteCounts = tmp17;
    obj.canSubmitVote = !submitting && selectedAnswerIds.size > 0 && !tmp15 && message.state === MessageStates.SENT && !result && !result1;
    obj.expirationLabel = str;
    obj.hasSelectedAnswer = selectedAnswerIds.size > 0;
    obj.hasVoted = tmp15;
    obj.hasVoteRecorded = someResult;
    obj.isEditingVote = editing;
    obj.isExpired = null == str && message.state === MessageStates.SENT;
    obj.isInteractive = flag;
    obj.isSent = message.state === MessageStates.SENT;
    obj.reactions = obj3;
    obj.selectedAnswerIds = selectedAnswerIds;
    obj.submitting = submitting;
    obj.tapShouldOpenVotersModal = tmp17;
    obj.showResults = showResults;
    return obj;
  }
}
const MessageStates = ME.MessageStates;
let obj = { channelId: ME.EMPTY_STRING_SNOWFLAKE_ID, selectedAnswerIds: null, submitting: false, editing: false, showResults: false };
let set = new Set();
obj.selectedAnswerIds = set;
let result = set.fileFinishedImporting("modules/polls/chat/formatPollMessageChatData.tsx");

export default function formatPollMessageChatData(poll, arg1, maxSettingsForPreset) {
  let answers;
  let c10;
  let c9;
  let canRemoveVote;
  let canShowVoteCounts;
  let canSubmitVote;
  let canTapAnswers;
  let expirationLabel;
  let isEditingVote;
  let isExpired;
  let isInteractive;
  let layout_type;
  let reactions;
  let showResults;
  let tapShouldOpenVotersModal;
  let obj = maxSettingsForPreset;
  if (maxSettingsForPreset === undefined) {
    obj = {};
  }
  let flag = obj.animateEmoji;
  if (flag === undefined) {
    flag = false;
  }
  let str = obj.theme;
  if (str === undefined) {
    str = "dark";
  }
  let useReducedMotion;
  layout_type = undefined;
  canSubmitVote = undefined;
  expirationLabel = undefined;
  let hasSelectedAnswer;
  let hasVoted;
  isExpired = undefined;
  reactions = undefined;
  c9 = undefined;
  c10 = undefined;
  showResults = undefined;
  let totalVotes;
  let closure_13;
  let closure_14;
  let c15;
  poll = poll.poll;
  if (null != poll) {
    const currentUser = reactions.getCurrentUser();
    if (null != currentUser) {
      useReducedMotion = canSubmitVote.useReducedMotion;
      const channel = hasSelectedAnswer.getChannel(poll.getChannelId());
      let guildId;
      if (null != channel) {
        if (null != channel.getGuildId) {
          guildId = channel.getGuildId();
        }
      }
      let obj1 = flag(layout_type[15]);
      ({ answers, layout_type } = poll);
      obj = { formattedExpirationLabel: tmp };
      const avatarUrl = obj1.getAvatarUrl(currentUser, guildId);
      let tmp8 = computeBasicPollChatData(poll, arg1, obj);
      if (null != tmp8) {
        ({ canTapAnswers, canSubmitVote } = tmp8);
        ({ expirationLabel, canRemoveVote, canShowVoteCounts } = tmp8);
        if (undefined === expirationLabel) {
          let intl = flag(layout_type[16]).intl;
          expirationLabel = intl.string(flag(layout_type[16]).t["e+J3JZ"]);
        }
        hasSelectedAnswer = tmp8.hasSelectedAnswer;
        hasVoted = tmp8.hasVoted;
        ({ isEditingVote, isExpired } = tmp8);
        ({ isInteractive, reactions } = tmp8);
        ({ selectedAnswerIds: c9, submitting: c10, tapShouldOpenVotersModal, showResults } = tmp8);
        let obj3 = flag(layout_type[17]);
        totalVotes = obj3.getTotalVotes(reactions);
        const intl2 = flag(layout_type[16]).intl;
        obj = { count: totalVotes };
        closure_13 = intl2.formatToPlainString(flag(layout_type[16]).t.XRkuof, obj);
        const _Math = Math;
        const items = [];
        HermesBuiltin.arraySpread(answers.map((answer_id) => {
          const tmp = callback(reactions, "" + answer_id.answer_id);
          let vote;
          if (null != tmp) {
            const count_details = tmp.count_details;
            if (null != count_details) {
              vote = count_details.vote;
            }
          }
          let num = 0;
          if (null != vote) {
            num = vote;
          }
          return num;
        }), 0);
        const _Math2 = Math;
        closure_14 = HermesBuiltin.apply(items, Math);
        const mapped = answers.map((answer_id) => {
          const combined = "" + answer_id.answer_id;
          const tmp2 = callback(reactions, combined);
          let vote;
          if (null != tmp2) {
            const count_details = tmp2.count_details;
            if (null != count_details) {
              vote = count_details.vote;
            }
          }
          let num = 0;
          if (null != vote) {
            num = vote;
          }
          let num2 = 0;
          if (0 !== totalVotes) {
            num2 = num / totalVotes;
          }
          const hasItem = _undefined.has(combined);
          let tmp7 = hasVoted;
          if (hasVoted) {
            let me_vote;
            if (null != tmp2) {
              me_vote = tmp2.me_vote;
            }
            tmp7 = null != me_vote;
            const tmp8 = me_vote;
          }
          if (tmp7) {
            tmp7 = tmp8;
          }
          let obj = { didSelfVote: tmp7, hasVoted, isExpired, isSelected: hasItem, isLeader: num >= callback && 0 !== num, showResults };
          const match = flag(layout_type[8]).match(obj);
          const str = flag(layout_type[8]);
          const withResult = match.with({ isExpired: true, isLeader: true, didSelfVote: true }, () => "victorSelected");
          const withResult1 = match.with({ isExpired: true, isLeader: true, didSelfVote: true }, () => "victorSelected").with({ isExpired: true, isLeader: true, didSelfVote: false }, () => "victorNotSelected");
          const withResult2 = match.with({ isExpired: true, isLeader: true, didSelfVote: true }, () => "victorSelected").with({ isExpired: true, isLeader: true, didSelfVote: false }, () => "victorNotSelected").with({ isExpired: true, didSelfVote: true }, () => "loserSelected");
          const withResult3 = match.with({ isExpired: true, isLeader: true, didSelfVote: true }, () => "victorSelected").with({ isExpired: true, isLeader: true, didSelfVote: false }, () => "victorNotSelected").with({ isExpired: true, didSelfVote: true }, () => "loserSelected").with({ isExpired: true }, () => "notVoted");
          const withResult4 = match.with({ isExpired: true, isLeader: true, didSelfVote: true }, () => "victorSelected").with({ isExpired: true, isLeader: true, didSelfVote: false }, () => "victorNotSelected").with({ isExpired: true, didSelfVote: true }, () => "loserSelected").with({ isExpired: true }, () => "notVoted").with({ didSelfVote: true, isExpired: false }, () => "voted");
          const withResult5 = match.with({ isExpired: true, isLeader: true, didSelfVote: true }, () => "victorSelected").with({ isExpired: true, isLeader: true, didSelfVote: false }, () => "victorNotSelected").with({ isExpired: true, didSelfVote: true }, () => "loserSelected").with({ isExpired: true }, () => "notVoted").with({ didSelfVote: true, isExpired: false }, () => "voted").with({ hasVoted: true, isExpired: false }, () => "notVoted");
          const withResult6 = match.with({ isExpired: true, isLeader: true, didSelfVote: true }, () => "victorSelected").with({ isExpired: true, isLeader: true, didSelfVote: false }, () => "victorNotSelected").with({ isExpired: true, didSelfVote: true }, () => "loserSelected").with({ isExpired: true }, () => "notVoted").with({ didSelfVote: true, isExpired: false }, () => "voted").with({ hasVoted: true, isExpired: false }, () => "notVoted").with({ isSelected: true }, () => "selected");
          obj = { answerId: combined };
          obj = { text: answer_id.poll_media.text };
          const obj1 = { animateEmoji: num };
          const withResult7 = match.with({ isExpired: true, isLeader: true, didSelfVote: true }, () => "victorSelected").with({ isExpired: true, isLeader: true, didSelfVote: false }, () => "victorNotSelected").with({ isExpired: true, didSelfVote: true }, () => "loserSelected").with({ isExpired: true }, () => "notVoted").with({ didSelfVote: true, isExpired: false }, () => "voted").with({ hasVoted: true, isExpired: false }, () => "notVoted").with({ isSelected: true }, () => "selected").with({ isExpired: false, showResults: true }, () => "notVoted");
          obj.emoji = _undefined2(answer_id.poll_media.emoji, obj1);
          obj.stickerId = answer_id.poll_media.sticker_id;
          obj.attachmentIds = answer_id.poll_media.attachment_ids;
          obj.pollMedia = obj;
          obj.isSelected = hasItem;
          let tmp11 = isExpired;
          if (isExpired) {
            tmp11 = tmp6;
          }
          obj.isVictor = tmp11;
          obj.didSelfVote = tmp7;
          obj.style = match.with({ isExpired: true, isLeader: true, didSelfVote: true }, () => "victorSelected").with({ isExpired: true, isLeader: true, didSelfVote: false }, () => "victorNotSelected").with({ isExpired: true, didSelfVote: true }, () => "loserSelected").with({ isExpired: true }, () => "notVoted").with({ didSelfVote: true, isExpired: false }, () => "voted").with({ hasVoted: true, isExpired: false }, () => "notVoted").with({ isSelected: true }, () => "selected").with({ isExpired: false, showResults: true }, () => "notVoted").otherwise(() => "normalVote");
          let tmp12 = c10;
          if (c10) {
            tmp12 = !useReducedMotion;
          }
          obj.shouldAnimateTransition = tmp12;
          obj.votesPercentage = Math.round(100 * num2);
          const otherwiseResult = match.with({ isExpired: true, isLeader: true, didSelfVote: true }, () => "victorSelected").with({ isExpired: true, isLeader: true, didSelfVote: false }, () => "victorNotSelected").with({ isExpired: true, didSelfVote: true }, () => "loserSelected").with({ isExpired: true }, () => "notVoted").with({ didSelfVote: true, isExpired: false }, () => "voted").with({ hasVoted: true, isExpired: false }, () => "notVoted").with({ isSelected: true }, () => "selected").with({ isExpired: false, showResults: true }, () => "notVoted").otherwise(() => "normalVote");
          const match1 = flag(layout_type[8]).match(layout_type);
          const str2 = flag(layout_type[8]);
          obj.votes = match1.with(flag(layout_type[18]).PollLayoutTypes.IMAGE_ONLY_ANSWERS, () => "(" + num.toLocaleString() + ")").otherwise(() => {
            const intl = flag(layout_type[16]).intl;
            return intl.formatToPlainString(flag(layout_type[16]).t.XRkuof, { count: num });
          });
          return obj;
        });
        obj1 = { isExpired, canSubmitVote, hasVoted, isEditingVote, canRemoveVote, isInteractive, showResults };
        let match = flag(layout_type[8]).match(obj1);
        const obj2 = { isInteractive: false };
        let str2 = flag(layout_type[8]);
        obj3 = { isExpired: true };
        let withResult = match.with(obj2, () => {

        });
        const obj4 = { isEditingVote: true };
        let withResult1 = match.with(obj2, () => {

        }).with(obj3, () => {

        });
        const obj5 = { canRemoveVote: true };
        let withResult2 = match.with(obj2, () => {

        }).with(obj3, () => {

        }).with(obj4, () => {
          const obj = {};
          const intl = flag(layout_type[16]).intl;
          obj.label = intl.string(flag(layout_type[16]).t.JwkNU4);
          obj.presentation = "button";
          obj.enabled = hasSelectedAnswer;
          obj.type = "submit";
          return obj;
        });
        let withResult3 = match.with(obj2, () => {

        }).with(obj3, () => {

        }).with(obj4, () => {
          const obj = {};
          const intl = flag(layout_type[16]).intl;
          obj.label = intl.string(flag(layout_type[16]).t.JwkNU4);
          obj.presentation = "button";
          obj.enabled = hasSelectedAnswer;
          obj.type = "submit";
          return obj;
        }).with(obj5, () => {
          const obj = { label: null, presentation: "secondaryButton", enabled: true, type: "remove" };
          const intl = flag(layout_type[16]).intl;
          obj.label = intl.string(flag(layout_type[16]).t.XhQEh8);
          return obj;
        });
        let withResult4 = match.with(obj2, () => {

        }).with(obj3, () => {

        }).with(obj4, () => {
          const obj = {};
          const intl = flag(layout_type[16]).intl;
          obj.label = intl.string(flag(layout_type[16]).t.JwkNU4);
          obj.presentation = "button";
          obj.enabled = hasSelectedAnswer;
          obj.type = "submit";
          return obj;
        }).with(obj5, () => {
          const obj = { label: null, presentation: "secondaryButton", enabled: true, type: "remove" };
          const intl = flag(layout_type[16]).intl;
          obj.label = intl.string(flag(layout_type[16]).t.XhQEh8);
          return obj;
        }).with({ hasVoted: false, showResults: true }, () => {
          const obj = { label: null, presentation: "secondaryButton", enabled: true, type: "showVotes" };
          const intl = flag(layout_type[16]).intl;
          obj.label = intl.string(flag(layout_type[16]).t.gNj6In);
          return obj;
        });
        let obj16 = flag(layout_type[19]);
        let otherwiseResult = match.with(obj2, () => {

        }).with(obj3, () => {

        }).with(obj4, () => {
          const obj = {};
          const intl = flag(layout_type[16]).intl;
          obj.label = intl.string(flag(layout_type[16]).t.JwkNU4);
          obj.presentation = "button";
          obj.enabled = hasSelectedAnswer;
          obj.type = "submit";
          return obj;
        }).with(obj5, () => {
          const obj = { label: null, presentation: "secondaryButton", enabled: true, type: "remove" };
          const intl = flag(layout_type[16]).intl;
          obj.label = intl.string(flag(layout_type[16]).t.XhQEh8);
          return obj;
        }).with({ hasVoted: false, showResults: true }, () => {
          const obj = { label: null, presentation: "secondaryButton", enabled: true, type: "showVotes" };
          const intl = flag(layout_type[16]).intl;
          obj.label = intl.string(flag(layout_type[16]).t.gNj6In);
          return obj;
        }).otherwise(() => {
          const obj = {};
          const intl = flag(layout_type[16]).intl;
          obj.label = intl.string(flag(layout_type[16]).t.JwkNU4);
          obj.presentation = "button";
          obj.enabled = canSubmitVote;
          obj.type = "submit";
          return obj;
        });
        const intl3 = flag(layout_type[16]).intl;
        const string = intl3.string;
        const t = flag(layout_type[16]).t;
        if (isIOSResult) {
          let stringResult = string(t["PVATM/"]);
        } else {
          stringResult = string(t.cHfFql);
        }
        c15 = stringResult;
        isIOSResult = obj16.isIOS();
        const obj6 = { isExpired, isInteractive, isEditingVote };
        let match1 = flag(layout_type[8]).match(obj6);
        const str3 = flag(layout_type[8]);
        const obj7 = { isEditingVote: true };
        let withResult5 = match1.with({ isInteractive: false, isExpired: false }, () => {
          const obj = { label: null, presentation: "text", enabled: false };
          const intl = flag(layout_type[16]).intl;
          obj.label = intl.string(flag(layout_type[16]).t.trrip0);
          return obj;
        });
        let tmp28;
        let withResult6 = match1.with({ isInteractive: false, isExpired: false }, () => {
          const obj = { label: null, presentation: "text", enabled: false };
          const intl = flag(layout_type[16]).intl;
          obj.label = intl.string(flag(layout_type[16]).t.trrip0);
          return obj;
        }).with(obj7, () => {
          const obj = { label: null, presentation: "textButton", enabled: true, type: "cancel" };
          const intl = flag(layout_type[16]).intl;
          obj.label = intl.string(flag(layout_type[16]).t["ETE/oC"]);
          return obj;
        });
        if (isInteractive) {
          if (!isExpired) {
            if (!hasVoted) {
              if (!showResults) {
                const obj8 = { label: null, presentation: "textButton", enabled: true, type: "showVotes" };
                const intl4 = flag(layout_type[16]).intl;
                obj8.label = intl4.string(flag(layout_type[16]).t["/KHAUF"]);
                tmp28 = obj8;
              }
            }
          }
        }
        const allow_multiselect = poll.allow_multiselect;
        const otherwiseResult1 = match1.with({ isInteractive: false, isExpired: false }, () => {
          const obj = { label: null, presentation: "text", enabled: false };
          const intl = flag(layout_type[16]).intl;
          obj.label = intl.string(flag(layout_type[16]).t.trrip0);
          return obj;
        }).with(obj7, () => {
          const obj = { label: null, presentation: "textButton", enabled: true, type: "cancel" };
          const intl = flag(layout_type[16]).intl;
          obj.label = intl.string(flag(layout_type[16]).t["ETE/oC"]);
          return obj;
        }).otherwise(() => {
          const obj = { label: closure_13, secondaryLabel: expirationLabel, accessibilityHint: c15, presentation: "text", enabled: true, type: "showVoterDetails" };
          return obj;
        });
        const obj9 = { isInteractive, isExpired, canSelectMultipleAnswers: allow_multiselect };
        const match2 = flag(layout_type[8]).match(obj9);
        const obj10 = { isInteractive: false };
        const str4 = flag(layout_type[8]);
        const obj11 = { isExpired: true };
        let withResult7 = match2.with(obj10, () => {

        });
        const obj12 = { canSelectMultipleAnswers: true };
        const withResult8 = match2.with(obj10, () => {

        }).with(obj11, () => {

        });
        const obj13 = {
          question: poll.question,
          promptLabel: match2.with(obj10, () => {

                }).with(obj11, () => {

                }).with(obj12, () => {
                  const intl = flag(layout_type[16]).intl;
                  return intl.string(flag(layout_type[16]).t.yCXvxa);
                }).otherwise(() => {
                  const intl = flag(layout_type[16]).intl;
                  return intl.string(flag(layout_type[16]).t["9Y2wKO"]);
                }),
          answers: mapped
        };
        const withResult9 = match2.with(obj10, () => {

        }).with(obj11, () => {

        }).with(obj12, () => {
          const intl = flag(layout_type[16]).intl;
          return intl.string(flag(layout_type[16]).t.yCXvxa);
        });
        const obj14 = { tapShouldOpenVotersModal, canTapAnswers, canSelectMultipleAnswers: allow_multiselect };
        const match3 = flag(layout_type[8]).match(obj14);
        const obj15 = { tapShouldOpenVotersModal: true };
        const str5 = flag(layout_type[8]);
        obj16 = { canTapAnswers: false };
        const withResult10 = match3.with(obj15, () => flag(layout_type[20]).PollChatAnswerInteractionType.LIST);
        const obj17 = { canSelectMultipleAnswers: false };
        const withResult11 = match3.with(obj15, () => flag(layout_type[20]).PollChatAnswerInteractionType.LIST).with(obj16, () => flag(layout_type[20]).PollChatAnswerInteractionType.LIST);
        const obj18 = { canSelectMultipleAnswers: true };
        const withResult12 = match3.with(obj15, () => flag(layout_type[20]).PollChatAnswerInteractionType.LIST).with(obj16, () => flag(layout_type[20]).PollChatAnswerInteractionType.LIST).with(obj17, () => flag(layout_type[20]).PollChatAnswerInteractionType.RADIO_BUTTONS);
        obj13.answersInteraction = match3.with(obj15, () => flag(layout_type[20]).PollChatAnswerInteractionType.LIST).with(obj16, () => flag(layout_type[20]).PollChatAnswerInteractionType.LIST).with(obj17, () => flag(layout_type[20]).PollChatAnswerInteractionType.RADIO_BUTTONS).with(obj18, () => flag(layout_type[20]).PollChatAnswerInteractionType.CHECKBOXES).exhaustive();
        let tmp33;
        if (tapShouldOpenVotersModal) {
          tmp33 = stringResult;
        }
        obj13.answerTapAccessibilityLabel = tmp33;
        obj13.layoutType = layout_type;
        const obj19 = { theme: str, layoutType: layout_type };
        obj13.resources = useReducedMotion(layout_type[21])(obj19);
        obj13.containerStyle = "normal";
        obj13.primaryAction = otherwiseResult;
        obj13.isInteractive = isInteractive;
        obj13.canTapAnswers = canTapAnswers;
        obj13.canSelectMultipleAnswers = allow_multiselect;
        obj13.hasSelectedAnswer = hasSelectedAnswer;
        obj13.canShowVoteCounts = canShowVoteCounts;
        obj13.hasVoted = hasVoted;
        obj13.isExpired = isExpired;
        obj13.myAvatarUrl = avatarUrl;
        obj13.secondaryAction = otherwiseResult1;
        obj13.tertiaryAction = tmp28;
        return obj13;
      }
    }
  }
};
export { reactionForId };
export { isPollMessageDirectlyInteractive };
export { computeBasicPollChatData };
