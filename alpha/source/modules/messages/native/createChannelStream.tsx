// Module ID: 11642
// Function ID: 11643
// Name: createChannelStream
// Dependencies: [11181, 7267, 7430, 7548, 1074, 11, 11643, 11645, 11646, 1115, 4541, 7591, 11459, 6874, 2]
// Exports: default

// Module 11642 (createChannelStream)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import isNewMessageGroupDefault from "isNewMessageGroup" /* 11645 */;
import tryInjectMessage from "tryInjectMessage" /* 11646 */;
import PushFeedbackStore from "PushFeedbackStore" /* 11181 */;
import EditMessageStore from "EditMessageStore" /* 7267 */;
import UploadStore from "UploadStore" /* 7430 */;

const require = globalThis.__r;

require = fn;
const RowGeneratorConstants = fn(7548);
({ Changeset: metroRequire, LoadingType: closure_7, RowType: closure_8, SeparatorType: closure_9 } = RowGeneratorConstants);
const MessageFlags = fn(1074).MessageFlags;
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/createChannelStream.tsx");

export default function createChannelStream(forceRender) {
  ({ channel: require, messages } = forceRender);
  ({ uploads, oldestUnreadMessageId: id, replyingMessageId: PushFeedbackStore, currentUserId: EditMessageStore, canAddNewReactions: UploadStore, selectedSummary: closure_6, selectedConversation: closure_7, chatManager: closure_8, roleStyle } = forceRender);
  forceRender = forceRender.forceRender;
  ({ updateMessageIds: closure_11, isResourceChannel: closure_12, unloadableContentEntryMessageIds: closure_13 } = forceRender);
  let items1;
  function unreadFilter(id) {
    if (require.isForumPost()) {
      let tmp4 = tmp2;
      if (tmp2) {
        tmp4 = id.id !== SnowflakeUtilsDefault.castChannelIdAsMessageId(require.id);
      }
      let tmp3 = tmp4;
    } else {
      tmp3 = tmp2;
    }
    return tmp3;
  }
  function insertMessage(message) {
    const first = items1[0];
    if (null != first) {
      if (forumPost.isForumPost()) {
        let tmp2 = tmp15;
        if (tmp15) {
          tmp2 = message.id !== SnowflakeUtilsDefault.castChannelIdAsMessageId(tmp13.id);
        }
        let tmp = tmp2;
      } else {
        tmp = tmp15;
      }
      if (!tmp) {
        if (isNewMessageGroupDefault(tmp13, first[first.length - 1], message)) {
          items = [message];
          arr.unshift(items);
        } else {
          first.unshift(message);
        }
      }
    }
    items1 = [message];
    items1.unshift(items1);
  }
  function determineChangeType(message) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    return constants2.determineChangeType({ message, updateMessageIds, forceRender }, flag);
  }
  let items = [];
  let obj = {};
  const substr = uploads.slice();
  const reversed = substr.reverse();
  let iter = reversed[Symbol.iterator]();
  let nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    let messageForFile = UploadStore.getMessageForFile(nextResult.id);
    let nonce;
    let tmp6 = messageForFile;
    if (messageForFile != null) {
      nonce = messageForFile.nonce;
    }
    if (null != nonce) {
      obj[tmp6.nonce] = tmp3;
    }
    continue;
  }
  items1 = [];
  let item = messages.forEach((id) => {
    const result = tryInjectMessage.tryCreateInjectedMessage(id, forumPost);
    let tmp2 = null != result;
    if (tmp2) {
      tmp2 = "before" === result.position;
    }
    if (tmp2) {
      insertMessage(result.message);
      if (id === id.id) {
        id = result.message.id;
      }
    }
    insertMessage(id);
    let tmp8 = null != result;
    if (tmp8) {
      tmp8 = "after" === result.position;
    }
    if (tmp8) {
      insertMessage(result.message);
    }
  });
  const item1 = items1.forEach((item, index) => {
    let message = item[item.length - 1];
    let hasMoreAfter = 0 === index;
    const diff = items1.length - 1;
    if (hasMoreAfter) {
      hasMoreAfter = message.hasMoreAfter;
    }
    if (!hasMoreAfter) {
      let tmp17 = message.hasMoreBefore && tmp15;
      let tmp19 = unreadFilter(message);
      let timestamp = null;
      if (index !== diff) {
        timestamp = items1[index + 1][0].timestamp;
      }
      if (index === diff) {
        let tmp25 = item.isDM() && !tmp16.hasMoreBefore && tmp15;
        if (!tmp25) {
          let isThreadResult = obj4.isThread();
          if (isThreadResult) {
            isThreadResult = !obj4.isForumPost();
          }
          if (isThreadResult) {
            isThreadResult = !tmp16.hasMoreBefore;
          }
          if (isThreadResult) {
            isThreadResult = tmp15;
          }
          tmp25 = isThreadResult;
        }
        let flag = false;
        if (tmp25) {
          flag = true;
        }
      } else {
        flag = true;
        const obj3 = require("DateUtils");
      }
      function processHiddenMessageRow(changeType) {
        const iter = item[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          message = nextResult;
          let tmp4 = constants;
          let tmp5 = determineChangeType(nextResult) !== constants.NOOP && changeType.changeType === tmp4.NOOP;
          if (tmp5) {
            changeType.changeType = tmp4.UPDATE;
          }
          let content = changeType.content;
          let obj2 = { rowType: null, changeType: null, roleStyle: null, message: null, isSystemDM: null, isFirst: null, canAddNewReactions: null };
          obj2.rowType = constants2.MESSAGE;
          obj2.changeType = tmp4.NOOP;
          obj2.roleStyle = roleStyle;
          obj2.message = message;
          let isSystemDMResult = require.isSystemDM();
          if (isSystemDMResult) {
            isSystemDMResult = message.isSystemDM();
          }
          obj2.isSystemDM = isSystemDMResult;
          obj2.isFirst = message === message;
          obj2.canAddNewReactions = canAddNewReactions;
          let arr = content.unshift(obj2);
          continue;
        }
        changeType.revealed = message.id === messages.revealedMessageId;
        changeType.context = message.id;
        return changeType;
      }
      let obj2 = { roleStyle, message, isFirst: true, content: [], text: "", revealed: false };
      let tmp32 = items[items.length - 1];
      if (message.hasFlag(forceRender.HIDDEN_SUSPENDED_USER)) {
        if (null == tmp32) {
          const obj5 = {};
          const merged = Object.assign(obj2);
          obj5.rowType = closure_1_8.SUSPENDED_USER_GROUP;
          obj5.changeType = determineChangeType(message);
          obj5.canUncollapse = false;
          arr.push(obj5);
          tmp32 = obj5;
          const tmp169 = determineChangeType(message);
        }
        const result = processHiddenMessageRow(tmp32);
        const intl4 = require("util").intl;
        const obj10 = { count: tmp32.content.length };
        tmp32.text = intl4.formatToPlainString(require("util").t.rHRovo, obj10);
      } else if (message.blocked) {
        if (null == tmp32) {
          let INSERT2 = determineChangeType(message);
          let blocked = INSERT2 === constants.NOOP;
          if (blocked) {
            blocked = closure_8.getBlocked(message);
          }
          if (blocked) {
            INSERT2 = constants.INSERT;
          }
          const obj11 = {};
          const merged1 = Object.assign(obj2);
          obj11.rowType = closure_1_8.BLOCKED_GROUP;
          obj11.changeType = INSERT2;
          arr.push(obj11);
          let tmp150 = obj11;
        } else {
          tmp150 = tmp32;
        }
        const result1 = processHiddenMessageRow(tmp150);
        const intl3 = require("util").intl;
        const obj12 = { count: tmp150.content.length };
        tmp150.text = intl3.formatToPlainString(require("util").t["+FcYM/"], obj12);
      } else if (message.ignored) {
        if (null == tmp32) {
          let INSERT = determineChangeType(message);
          let ignored = INSERT === constants.NOOP;
          if (ignored) {
            ignored = closure_8.getIgnored(message);
          }
          if (ignored) {
            INSERT = constants.INSERT;
          }
          const obj15 = {};
          const merged2 = Object.assign(obj2);
          obj15.rowType = closure_1_8.IGNORED_GROUP;
          obj15.changeType = INSERT;
          arr.push(obj15);
          let tmp132 = obj15;
        } else {
          tmp132 = tmp32;
        }
        const result2 = processHiddenMessageRow(tmp132);
        const intl2 = require("util").intl;
        const obj16 = { count: tmp132.content.length };
        tmp132.text = intl2.formatToPlainString(require("util").t["VFWjc+"], obj16);
      } else {
        let iter = item[Symbol.iterator]();
        let nextResult = iter.next();
        while (iter !== undefined) {
          let obj6 = nextResult;
          let tmp38 = nextResult !== message;
          let obj7 = item;
          let isEditingResult = editing.isEditing(item.id, nextResult.id);
          if (!isEditingResult) {
            isEditingResult = closure_3 === obj6.id;
          }
          let tmp44 = isEditingResult;
          pushFeedback = pushFeedback.getPushFeedback(obj6.channel_id, obj6.id);
          let obj8 = require("canReplyToMessage");
          let tmp52 = messages;
          let canReplyToMessageResult = obj8.canReplyToMessage(obj7, obj6);
          let tmp55 = messages(id[12])(obj6, closure_4);
          if (tmp55) {
            let obj9 = require("ThreadHooks");
            tmp55 = !obj9.isNonModInLockedThread(obj7);
          }
          let tmp60 = message;
          if (message.hasOwnProperty(obj6.id)) {
            let result3 = closure_8.determineChangeTypeForUploadProgress(tmp60[obj6.id]);
          } else {
            result3 = determineChangeType(obj6, true);
          }
          let tmp67 = closure_6;
          let tmp68 = null != closure_6;
          if (tmp68) {
            tmp68 = tmp67.endId === obj6.id;
          }
          if (tmp68) {
            tmp68 = tmp67.count > 1;
          }
          if (tmp68) {
            let obj17 = { rowType: null, changeType: null, roleStyle: null, summary: null, isBeforeContent: false };
            obj17.rowType = roleStyle.SUMMARY;
            obj17.changeType = determineChangeType(obj6);
            obj17.roleStyle = roleStyle;
            obj17.summary = tmp67;
            let arr14 = items.push(obj17);
          }
          let arr2 = items;
          let obj18 = { roleStyle: null, message: null, isSystemDM: null, isFirst: null, isEditing: null, separatorBefore: null, canAddNewReactions: null, alwaysShowAddReaction: null, renderContentOnly: null, pushFeedbackType: null, canReply: null, canEdit: null, rowType: null, changeType: null, showContentInventoryEntryFallbackEmbed: null };
          let tmp80 = roleStyle;
          obj18.roleStyle = roleStyle;
          obj18.message = obj6;
          let isSystemDMResult = obj7.isSystemDM();
          if (isSystemDMResult) {
            isSystemDMResult = obj6.isSystemDM();
          }
          obj18.isSystemDM = isSystemDMResult;
          obj18.isFirst = obj6 === message;
          obj18.isEditing = tmp44;
          let tmp88 = !tmp38;
          if (!tmp38) {
            tmp88 = !renderContentOnly;
          }
          if (tmp88) {
            let tmp91 = flag;
            if (!flag) {
              tmp91 = tmp19;
            }
            if (!tmp91) {
              tmp91 = tmp17;
            }
            tmp88 = tmp91;
          }
          obj18.separatorBefore = tmp88;
          obj18.canAddNewReactions = canAddNewReactions;
          let isForumPostResult = obj7.isForumPost();
          if (isForumPostResult) {
            let tmp52Result = tmp52(id[5]);
            isForumPostResult = obj6.id === tmp52Result.castChannelIdAsMessageId(obj7.id);
          }
          obj18.alwaysShowAddReaction = isForumPostResult;
          let tmp99 = renderContentOnly;
          obj18.renderContentOnly = renderContentOnly;
          let pushType;
          if (pushFeedback != null) {
            pushType = pushFeedback.pushType;
          }
          obj18.pushFeedbackType = pushType;
          let tmp103 = !tmp99;
          if (!tmp99) {
            tmp103 = canReplyToMessageResult;
          }
          obj18.canReply = tmp103;
          let tmp105 = !tmp99;
          if (!tmp99) {
            tmp105 = tmp55;
          }
          obj18.canEdit = tmp105;
          obj18.rowType = closure_1_8.MESSAGE;
          obj18.changeType = result3;
          let obj13 = closure_13;
          let hasItem;
          if (closure_13 != null) {
            hasItem = obj13.has(obj6.id);
          }
          obj18.showContentInventoryEntryFallbackEmbed = hasItem;
          let arr15 = items.push(obj18);
          let tmp111 = closure_7;
          let result4 = null != closure_7;
          if (result4) {
            let obj14 = require("createConversationHeader");
            result4 = obj14.isConversationStartMessage(tmp111, obj6.id);
          }
          if (result4) {
            let obj19 = { rowType: null, changeType: null, roleStyle: null, conversationHeader: null };
            obj19.rowType = roleStyle.CONVERSATION;
            obj19.changeType = determineChangeType(obj6);
            obj19.roleStyle = tmp80;
            obj19.conversationHeader = tmp52(id[6])(tmp111);
            let arr16 = arr2.push(obj19);
          }
          let tmp123 = null != tmp67;
          if (tmp123) {
            tmp123 = tmp67.startId === obj6.id;
          }
          if (tmp123) {
            tmp123 = tmp67.count > 1;
          }
          if (tmp123) {
            let obj20 = { rowType: null, changeType: null, roleStyle: null, summary: null, isBeforeContent: true };
            obj20.rowType = roleStyle.SUMMARY;
            obj20.changeType = determineChangeType(obj6);
            obj20.roleStyle = tmp80;
            obj20.summary = tmp67;
            let arr17 = arr2.push(obj20);
          }
          continue;
        }
      }
      if (flag) {
        if (!renderContentOnly) {
          let NOOP = determineChangeType(message);
          if (NOOP === constants.UPDATE) {
            NOOP = constants.NOOP;
          }
          const obj21 = { rowType: roleStyle.DAY, changeType: NOOP, roleStyle, text: require("DateUtils").dateFormat(message.timestamp, "LL") };
          items.push(obj21);
          const obj23 = require("DateUtils");
        }
      }
      if (tmp19) {
        tmp19 = !renderContentOnly;
      }
      if (tmp19) {
        const obj22 = { rowType: roleStyle.UNREAD, changeType: determineChangeType(message), roleStyle, text: null };
        const intl5 = require("util").intl;
        obj22.text = intl5.string(require("util").t.q7hm3m).toUpperCase();
        items.push(obj22);
        const str2 = intl5.string(require("util").t.q7hm3m);
      }
      if (tmp17) {
        tmp17 = !renderContentOnly;
      }
      if (tmp17) {
        let obj24 = { rowType: constants2.LOAD_BEFORE, changeType: forceRender ? constants.UPDATE : constants.NOOP, roleStyle, isLoading: message.loadingMore, text: null };
        const intl6 = require("util").intl;
        obj24.text = intl6.string(require("util").t.XBlaiC);
        obj24 = items.push(obj24);
      }
    } else {
      let obj25 = { rowType: constants2.LOAD_AFTER, changeType: null, roleStyle: null, isLoading: null, text: null };
      let intl = constants;
      obj25.changeType = forceRender ? intl.UPDATE : intl.NOOP;
      obj25.roleStyle = roleStyle;
      obj25.isLoading = message.loadingMore;
      intl = require("util").intl;
      obj25.text = intl.string(require("util").t.XBlaiC);
      obj25 = items.push(obj25);
    }
  });
  let tmp12 = 0 === items1.length && !messages.loadingMore;
  if (tmp12) {
    tmp12 = messages.hasMoreAfter || messages.hasMoreBefore;
    let tmp13 = messages.hasMoreAfter || messages.hasMoreBefore;
  }
  if (!tmp12) {
    return items;
  } else {
    let obj2 = { rowType: messages.hasMoreBefore ? constants2.LOAD_BEFORE : constants2.LOAD_AFTER, changeType: forceRender ? constants.UPDATE : constants.NOOP, roleStyle, isLoading: messages.loadingMore, text: null };
    roleStyle = require("util").intl;
    messages = roleStyle.string;
    obj2.text = messages(require("util").t.XBlaiC);
    obj2 = items.push(obj2);
  }
};
