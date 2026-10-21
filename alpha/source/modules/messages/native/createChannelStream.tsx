// Module ID: 12932
// Function ID: 12933
// Name: createChannelStream
// Dependencies: [10981, 7729, 8249, 8109, 1087, 11, 9965, 12933, 1128, 4794, 8309, 11269, 7346, 12936, 2]
// Exports: default

// Module 12932 (createChannelStream)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import Constants from "Constants" /* 1087 */;
import isNewMessageGroupDefault from "isNewMessageGroup" /* 9965 */;
import tryInjectMessage from "tryInjectMessage" /* 12933 */;
import PushFeedbackStore_mod from "PushFeedbackStore" /* 10981 */;
import EditMessageStore from "EditMessageStore" /* 7729 */;
import UploadStore from "UploadStore" /* 8249 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 8109 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let PushFeedbackStore = PushFeedbackStore_mod;
({ Changeset: metroRequire, LoadingType: metroImportDefault, RowType: metroImportAll, SeparatorType: c9 } = RowGeneratorConstants);
const MessageFlags = Constants.MessageFlags;
let result = size.fileFinishedImporting("modules/messages/native/createChannelStream.tsx");

export default function createChannelStream(forceRender) {
  let canAddNewReactions;
  let closure_11;
  let closure_12;
  let closure_13;
  let closure_6;
  let closure_7;
  let closure_8;
  let editing;
  let id;
  let intl;
  let messages;
  let pushFeedback;
  let renderContentOnly;
  let roleStyle;
  let updateMessageIds;
  let uploads;
  ({ channel: require, messages } = forceRender);
  ({ uploads, oldestUnreadMessageId: id, replyingMessageId: PushFeedbackStore, currentUserId: EditMessageStore, canAddNewReactions: UploadStore, selectedSummary: closure_6, selectedConversation: closure_7, chatManager: closure_8, roleStyle } = forceRender);
  forceRender = forceRender.forceRender;
  ({ updateMessageIds: closure_11, isResourceChannel: closure_12, unloadableContentEntryMessageIds: closure_13 } = forceRender);
  let items1;
  function unreadFilter(id) {
    let tmp3;
    const tmp = require;
    if (require.isForumPost()) {
      let tmp4 = tmp2;
      if (tmp4) {
        id = id.id;
        obj = SnowflakeUtilsDefault;
        tmp4 = id !== obj.castChannelIdAsMessageId(tmp.id);
      }
      tmp3 = tmp4;
    } else {
      tmp3 = tmp2;
    }
    return tmp3;
  }
  function insertMessage(message) {
    const first = items1[0];
    if (null != first) {
      let tmp;
      if (require.isForumPost()) {
        let tmp2 = tmp13;
        if (tmp2) {
          id = message.id;
          obj = SnowflakeUtilsDefault;
          tmp2 = id !== obj.castChannelIdAsMessageId(tmp11.id);
        }
        tmp = tmp2;
      } else {
        tmp = tmp13;
      }
      if (!tmp) {
        if (isNewMessageGroupDefault(require, first[first.length - 1], message)) {
          items = [message];
          items1.unshift(items);
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
    obj = { message, updateMessageIds, forceRender };
    return constants2.determineChangeType(obj, flag);
  }
  let items = [];
  let obj = {};
  const substr = uploads.slice();
  const reversed = substr.reverse();
  let iter = reversed[Symbol.iterator]();
  let nextResult = iter.next();
  while (iter !== undefined) {
    let tmp4 = UploadStore;
    let tmp3 = nextResult;
    let messageForFile = UploadStore.getMessageForFile(nextResult.id);
    let nonce;
    let tmp6 = messageForFile;
    if (messageForFile != null) {
      nonce = messageForFile.nonce;
    }
    if (null != nonce) {
      let tmp8 = messageForFile;
      let tmp9 = nextResult;
      obj[tmp6.nonce] = tmp3;
    }
    continue;
  }
  items1 = [];
  let item = messages.forEach((id) => {
    obj = tryInjectMessage;
    const result = obj.tryCreateInjectedMessage(id, require);
    const tmp2 = null != result && "before" === result.position;
    if (tmp2) {
      insertMessage(result.message);
      if (id === id.id) {
        id = result.message.id;
      }
    }
    insertMessage(id);
    let tmp8 = null != result;
    const tmp6 = insertMessage;
    if (tmp8) {
      tmp8 = "after" === result.position;
    }
    if (tmp8) {
      tmp6(result.message);
    }
  });
  const item1 = items1.forEach((item, index) => {
    let flag;
    let hasItem;
    let intl;
    let intl6;
    let isForumPostResult;
    let isSystemDMResult;
    let obj22;
    let pushType;
    let str2;
    let tmp162;
    let tmp8;
    let tmp85;
    let tmp96;
    let message = item[item.length - 1];
    let hasMoreAfter = 0 === index;
    const diff = items1.length - 1;
    const tmp = items1;
    if (hasMoreAfter) {
      let tmp3 = message;
      hasMoreAfter = message.hasMoreAfter;
    }
    if (hasMoreAfter) {
      let tmp5 = items;
      let obj2 = { rowType: constants2.LOAD_AFTER, changeType: forceRender ? tmp8.UPDATE : tmp8.NOOP, roleStyle, isLoading: message.loadingMore, text: intl.string(require("intl").t.XBlaiC) };
      let tmp6 = constants2;
      let tmp7 = forceRender;
      tmp8 = constants;
      let tmp9 = roleStyle;
      let tmp11 = message;
      let tmp12 = require;
      let tmp13 = id;
      let tmp4 = items;
      const push = items.push;
      intl = require("intl").intl;
      let tmp14 = require;
      push(obj2);
    }
    let tmp19 = message.hasMoreBefore && tmp17;
    let tmp20 = unreadFilter(message);
    let timestamp = null;
    if (index !== diff) {
      timestamp = tmp[index + 1][0].timestamp;
    }
    if (index === diff) {
      let tmp25 = item.isDM() && !tmp18.hasMoreBefore && tmp17;
      if (!tmp25) {
        tmp25 = obj4.isThread() && !obj4.isForumPost() && !tmp18.hasMoreBefore && tmp17;
        const isThreadResult = obj4.isThread() && !obj4.isForumPost() && !tmp18.hasMoreBefore && tmp17;
      }
      flag = false;
      if (tmp25) {
        flag = true;
      }
    } else {
      flag = true;
      require("DateUtils");
    }
    function processHiddenMessageRow(changeType) {
      let isSystemDMResult;
      const iter = item[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        message = nextResult;
        let tmp4 = metroRequire;
        let tmp5 = determineChangeType(nextResult) !== metroRequire.NOOP && changeType.changeType === tmp4.NOOP;
        if (tmp5) {
          changeType.changeType = tmp4.UPDATE;
        }
        let content = changeType.content;
        let obj2 = { rowType: metroImportAll.MESSAGE, changeType: tmp4.NOOP, roleStyle, message, isSystemDM: isSystemDMResult, isFirst: message === message, canAddNewReactions: UploadStore };
        let unshift = content.unshift;
        isSystemDMResult = require.isSystemDM();
        if (isSystemDMResult) {
          isSystemDMResult = message.isSystemDM();
        }
        let arr = unshift(obj2);
        continue;
      }
      changeType.revealed = message.id === messages.revealedMessageId;
      changeType.context = message.id;
      return changeType;
    }
    const obj5 = { roleStyle, message, isFirst: true, content: [], text: "", revealed: false };
    let arr = items;
    let tmp30 = items[items.length - 1];
    if (message.hasFlag(forceRender.HIDDEN_SUSPENDED_USER)) {
      if (null == tmp30) {
        const obj10 = { rowType: closure_8.SUSPENDED_USER_GROUP, changeType: tmp162, canUncollapse: false };
        tmp162 = determineChangeType(message);
        const merged = Object.assign(obj5);
        arr.push(obj10);
        tmp30 = obj10;
      }
      const result = processHiddenMessageRow(tmp30);
      const intl4 = require("intl").intl;
      const obj11 = { count: tmp30.content.length };
      tmp30.text = intl4.formatToPlainString(require("intl").t.rHRovo, obj11);
    } else if (message.blocked) {
      let tmp143;
      if (null == tmp30) {
        let INSERT2 = determineChangeType(message);
        const blocked = INSERT2 === constants.NOOP && closure_8.getBlocked(message);
        if (blocked) {
          INSERT2 = constants.INSERT;
        }
        const obj12 = { rowType: closure_8.BLOCKED_GROUP, changeType: INSERT2 };
        const merged1 = Object.assign(obj5);
        arr.push(obj12);
        tmp143 = obj12;
      } else {
        tmp143 = tmp30;
      }
      const result1 = processHiddenMessageRow(tmp143);
      const intl3 = require("intl").intl;
      const obj14 = { count: tmp143.content.length };
      tmp143.text = intl3.formatToPlainString(require("intl").t["+FcYM/"], obj14);
    } else if (message.ignored) {
      let tmp125;
      if (null == tmp30) {
        let INSERT = determineChangeType(message);
        const ignored = INSERT === constants.NOOP && closure_8.getIgnored(message);
        if (ignored) {
          INSERT = constants.INSERT;
        }
        const obj15 = { rowType: closure_8.IGNORED_GROUP, changeType: INSERT };
        const merged2 = Object.assign(obj5);
        arr.push(obj15);
        tmp125 = obj15;
      } else {
        tmp125 = tmp30;
      }
      const result2 = processHiddenMessageRow(tmp125);
      const intl2 = require("intl").intl;
      const obj16 = { count: tmp125.content.length };
      tmp125.text = intl2.formatToPlainString(require("intl").t["VFWjc+"], obj16);
    } else {
      let iter = item[Symbol.iterator]();
      let nextResult = iter.next();
      while (iter !== undefined) {
        let result3;
        let obj6 = nextResult;
        let tmp35 = nextResult !== message;
        let obj7 = item;
        let isEditingResult = EditMessageStore.isEditing(item.id, nextResult.id);
        if (!isEditingResult) {
          isEditingResult = closure_3 === obj6.id;
        }
        let tmp41 = isEditingResult;
        PushFeedbackStore = PushFeedbackStore.getPushFeedback(obj6.channel_id, obj6.id);
        let obj8 = require("canReplyToMessage");
        let tmp49 = messages;
        let canReplyToMessageResult = obj8.canReplyToMessage(obj7, obj6);
        let tmp52 = messages(id[11])(obj6, closure_4);
        if (tmp52) {
          let obj9 = require("ThreadHooks");
          tmp52 = !obj9.isNonModInLockedThread(obj7);
        }
        let tmp57 = message;
        if (message.hasOwnProperty(obj6.id)) {
          result3 = closure_8.determineChangeTypeForUploadProgress(tmp57[obj6.id]);
        } else {
          result3 = determineChangeType(obj6, true);
        }
        let tmp64 = constants;
        let tmp65 = null != constants;
        if (tmp65) {
          tmp65 = tmp64.endId === obj6.id;
        }
        if (tmp65) {
          tmp65 = tmp64.count > 1;
        }
        if (tmp65) {
          let obj17 = { rowType: roleStyle.SUMMARY, changeType: determineChangeType(obj6), roleStyle, summary: tmp64, isBeforeContent: false };
          let push2 = items.push;
          let push2Result = push2(obj17);
        }
        let arr2 = items;
        let obj18 = { roleStyle, message: obj6, isSystemDM: isSystemDMResult, isFirst: obj6 === message, isEditing: tmp41, separatorBefore: tmp85, canAddNewReactions, alwaysShowAddReaction: isForumPostResult, renderContentOnly, pushFeedbackType: pushType, canReply: !tmp96 && canReplyToMessageResult, canEdit: !tmp96 && tmp52, rowType: closure_8.MESSAGE, changeType: result3, showContentInventoryEntryFallbackEmbed: hasItem };
        let tmp77 = roleStyle;
        let push3 = items.push;
        isSystemDMResult = obj7.isSystemDM();
        if (isSystemDMResult) {
          isSystemDMResult = obj6.isSystemDM();
        }
        tmp85 = !tmp35;
        if (tmp85) {
          tmp85 = !renderContentOnly;
        }
        if (tmp85) {
          let tmp88 = flag || tmp20 || tmp19;
          tmp85 = tmp88;
        }
        isForumPostResult = obj7.isForumPost();
        if (isForumPostResult) {
          id = obj6.id;
          let tmp49Result = tmp49(id[5]);
          isForumPostResult = id === tmp49Result.castChannelIdAsMessageId(obj7.id);
        }
        tmp96 = renderContentOnly;
        pushType = undefined;
        if (PushFeedbackStore != null) {
          pushType = PushFeedbackStore.pushType;
        }
        let obj13 = closure_13;
        hasItem = undefined;
        if (closure_13 != null) {
          hasItem = obj13.has(obj6.id);
        }
        let push3Result = push3(obj18);
        let tmp106 = constants2;
        let tmp107 = null != constants2;
        if (tmp107) {
          tmp107 = obj6.id === tmp106.startMessageId;
        }
        if (tmp107) {
          tmp107 = tmp106.messageCount > 1;
        }
        if (tmp107) {
          let obj19 = { rowType: roleStyle.CONVERSATION, changeType: determineChangeType(obj6), roleStyle: tmp77, conversationHeader: tmp49(id[13])(tmp106) };
          let push4 = arr2.push;
          let push4Result = push4(obj19);
        }
        let tmp116 = null != tmp64;
        if (tmp116) {
          tmp116 = tmp64.startId === obj6.id;
        }
        if (tmp116) {
          tmp116 = tmp64.count > 1;
        }
        if (tmp116) {
          let obj20 = { rowType: roleStyle.SUMMARY, changeType: determineChangeType(obj6), roleStyle: tmp77, summary: tmp64, isBeforeContent: true };
          let push5 = arr2.push;
          let push5Result = push5(obj20);
        }
        continue;
      }
    }
    if (flag) {
      const tmp175 = renderContentOnly;
      if (!tmp175) {
        let NOOP = determineChangeType(message);
        if (NOOP === constants.UPDATE) {
          NOOP = constants.NOOP;
        }
        const obj21 = { rowType: roleStyle.DAY, changeType: NOOP, roleStyle, text: obj22.dateFormat(message.timestamp, "LL") };
        obj22 = require("DateUtils");
        items.push(obj21);
      }
    }
    if (tmp20) {
      tmp20 = !renderContentOnly;
    }
    if (tmp20) {
      const push6 = items.push;
      const obj23 = { rowType: roleStyle.UNREAD, changeType: determineChangeType(message), roleStyle, text: str2.toUpperCase() };
      const intl5 = require("intl").intl;
      str2 = intl5.string(require("intl").t.q7hm3m);
      push6(obj23);
    }
    if (tmp19) {
      tmp19 = !renderContentOnly;
    }
    if (tmp19) {
      const push7 = items.push;
      const obj24 = { rowType: constants2.LOAD_BEFORE, changeType: forceRender ? constants.UPDATE : constants.NOOP, roleStyle, isLoading: message.loadingMore, text: intl6.string(require("intl").t.XBlaiC) };
      intl6 = require("intl").intl;
      push7(obj24);
    }
  });
  let tmp12 = 0 === items1.length && !messages.loadingMore;
  if (tmp12) {
    let tmp13 = messages.hasMoreAfter || messages.hasMoreBefore;
    tmp12 = tmp13;
  }
  if (tmp12) {
    let tmp14 = constants2;
    let obj2 = { rowType: messages.hasMoreBefore ? tmp14.LOAD_BEFORE : tmp14.LOAD_AFTER, changeType: forceRender ? tmp15.UPDATE : tmp15.NOOP, roleStyle, isLoading: messages.loadingMore, text: intl.string(require("intl").t.XBlaiC) };
    const tmp17 = id;
    let push = items.push;
    intl = require("intl").intl;
    let arr = push(obj2);
  }
  return items;
};
