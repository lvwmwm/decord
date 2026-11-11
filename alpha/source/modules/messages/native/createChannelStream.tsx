// Module ID: 14451
// Function ID: 14452
// Name: createChannelStream
// Dependencies: [12288, 8719, 8955, 9094, 1072, 11, 9121, 14452, 14453, 1113, 5065, 9137, 12594, 7223, 14456, 2]
// Exports: default

// Module 14451 (createChannelStream)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import Constants from "Constants" /* 1072 */;
import UnlinkedGamePlayerPlaceholders from "UnlinkedGamePlayerPlaceholders" /* 9121 */;
import isNewMessageGroupDefault from "isNewMessageGroup" /* 14452 */;
import tryInjectMessage from "tryInjectMessage" /* 14453 */;
import PushFeedbackStore_mod from "PushFeedbackStore" /* 12288 */;
import EditMessageStore from "EditMessageStore" /* 8719 */;
import UploadStore from "UploadStore" /* 8955 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 9094 */;
import size from "module_2" /* 2 */;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let PushFeedbackStore = PushFeedbackStore_mod;
({ Changeset: metroRequire, LoadingType: metroImportDefault, RowType: metroImportAll, SeparatorType: c9 } = RowGeneratorConstants);
const MessageFlags = Constants.MessageFlags;
let result = size.fileFinishedImporting("modules/messages/native/createChannelStream.tsx");

export default function createChannelStream(roleStyle) {
  let canAddNewReactions;
  let chatManager;
  let closure_11;
  let closure_12;
  let closure_13;
  let closure_6;
  let closure_7;
  let editing;
  let id;
  let intl;
  let messages;
  let pushFeedback;
  let renderContentOnly;
  let updateMessageIds;
  let uploads;
  ({ channel: require, messages } = roleStyle);
  ({ uploads, oldestUnreadMessageId: id, replyingMessageId: PushFeedbackStore, currentUserId: EditMessageStore, canAddNewReactions: UploadStore, selectedSummary: closure_6, selectedConversation: closure_7, chatManager } = roleStyle);
  roleStyle = roleStyle.roleStyle;
  const forceRender = roleStyle.forceRender;
  ({ updateMessageIds: closure_11, isResourceChannel: closure_12, unloadableContentEntryMessageIds: closure_13 } = roleStyle);
  let items1;
  let length;
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
  function isCollapsiblePlaceholder(id) {
    let result = id.id !== messages.jumpTargetId;
    if (result) {
      obj = UnlinkedGamePlayerPlaceholders;
      result = obj.isUnlinkedGamePlayerPlaceholder(require, id);
    }
    return result;
  }
  function insertMessage(message) {
    const first = items1[0];
    if (null != first) {
      let tmp;
      if (require.isForumPost()) {
        let tmp2 = tmp21;
        if (tmp2) {
          id = message.id;
          obj = SnowflakeUtilsDefault;
          tmp2 = id !== obj.castChannelIdAsMessageId(tmp19.id);
        }
        tmp = tmp2;
      } else {
        tmp = tmp21;
      }
      if (!tmp) {
        if (!isNewMessageGroupDefault(require, first[first.length - 1], message)) {
          let result = tmp6.id !== messages.jumpTargetId;
          const tmp9 = messages;
          if (result) {
            const obj2 = UnlinkedGamePlayerPlaceholders;
            result = obj2.isUnlinkedGamePlayerPlaceholder(tmp19, tmp6);
          }
          let result1 = message.id !== tmp9.jumpTargetId;
          if (result1) {
            const obj3 = UnlinkedGamePlayerPlaceholders;
            result1 = obj3.isUnlinkedGamePlayerPlaceholder(tmp19, message);
          }
          if (result === result1) {
            first.unshift(message);
          }
        }
        items = [message];
        items1.unshift(items);
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
    return chatManager.determineChangeType(obj, flag);
  }
  let items = [];
  let obj = {};
  let substr = uploads.slice();
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
  const item = messages.forEach((id) => {
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
  let tmp11 = null;
  if ("getPreviousMessages" in chatManager) {
    const previousMessages = chatManager.getPreviousMessages();
    length = undefined;
    if (previousMessages != null) {
      length = previousMessages.length;
    }
    if (length == null) {
      length = null;
    }
    tmp11 = length;
  }
  length = tmp11;
  const item1 = items1.forEach((arr, index) => {
    let flag;
    let hasItem;
    let intl;
    let intl6;
    let isForumPostResult;
    let isSystemDMResult;
    let obj24;
    let pushType;
    let stringResult;
    let tmp195;
    let tmp88;
    let tmp9;
    let tmp99;
    const f132396 = (message) => {
      obj = { message, updateMessageIds, forceRender };
      return chatManager.determineChangeType(obj, false) !== constants.NOOP;
    };
    require = arr;
    let message = arr[arr.length - 1];
    let hasMoreAfter = 0 === index;
    const diff = items1.length - 1;
    const tmp2 = items1;
    if (hasMoreAfter) {
      let tmp4 = message;
      hasMoreAfter = message.hasMoreAfter;
    }
    if (hasMoreAfter) {
      let tmp6 = items;
      let obj2 = { rowType: constants2.LOAD_AFTER, changeType: forceRender ? tmp9.UPDATE : tmp9.NOOP, roleStyle, isLoading: message.loadingMore, text: intl.string(require("intl").t.XBlaiC) };
      let tmp7 = constants2;
      let tmp8 = forceRender;
      tmp9 = constants;
      let tmp11 = roleStyle;
      let tmp12 = message;
      let tmp13 = require;
      let tmp14 = id;
      let tmp5 = items;
      const push = items.push;
      intl = require("intl").intl;
      push(obj2);
    }
    let tmp19 = message.hasMoreBefore && tmp18;
    let tmp20 = unreadFilter(message);
    let timestamp = null;
    if (index !== diff) {
      timestamp = tmp2[index + 1][0].timestamp;
    }
    if (index === diff) {
      let tmp25 = require.isDM() && !arr.hasMoreBefore && tmp18;
      if (!tmp25) {
        tmp25 = obj4.isThread() && !obj4.isForumPost() && !arr.hasMoreBefore && tmp18;
        const isThreadResult = obj4.isThread() && !obj4.isForumPost() && !arr.hasMoreBefore && tmp18;
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
      let closure_0;
      let isSystemDMResult;
      const iter = closure_0[Symbol.iterator]();
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
        closure_0 = unshift(obj2);
        continue;
      }
      changeType.revealed = message.id === messages.revealedMessageId;
      changeType.context = message.id;
      return changeType;
    }
    const obj5 = { roleStyle, message, isFirst: true, content: [], text: "", revealed: false };
    let tmp32 = items[items.length - 1];
    const tmp30 = roleStyle;
    if (message.hasFlag(forceRender.HIDDEN_SUSPENDED_USER)) {
      if (null == tmp32) {
        const obj10 = { rowType: chatManager.SUSPENDED_USER_GROUP, changeType: tmp195, canUncollapse: false };
        tmp195 = determineChangeType(message);
        const merged = Object.assign(obj5);
        items.push(obj10);
        tmp32 = obj10;
      }
      const result = processHiddenMessageRow(tmp32);
      const intl4 = require("intl").intl;
      const obj11 = { count: tmp32.content.length };
      tmp32.text = intl4.formatToPlainString(require("intl").t.rHRovo, obj11);
    } else if (message.blocked) {
      let tmp174;
      if (null == tmp32) {
        let INSERT2 = determineChangeType(message);
        const blocked = INSERT2 === constants.NOOP && chatManager.getBlocked(message);
        if (blocked) {
          INSERT2 = constants.INSERT;
        }
        const obj12 = { rowType: chatManager.BLOCKED_GROUP, changeType: INSERT2 };
        const merged1 = Object.assign(obj5);
        items.push(obj12);
        tmp174 = obj12;
      } else {
        tmp174 = tmp32;
      }
      const result1 = processHiddenMessageRow(tmp174);
      const intl3 = require("intl").intl;
      const obj14 = { count: tmp174.content.length };
      tmp174.text = intl3.formatToPlainString(require("intl").t["+FcYM/"], obj14);
    } else if (message.ignored) {
      let tmp154;
      if (null == tmp32) {
        let INSERT = determineChangeType(message);
        const ignored = INSERT === constants.NOOP && chatManager.getIgnored(message);
        if (ignored) {
          INSERT = constants.INSERT;
        }
        const obj15 = { rowType: chatManager.IGNORED_GROUP, changeType: INSERT };
        const merged2 = Object.assign(obj5);
        items.push(obj15);
        tmp154 = obj15;
      } else {
        tmp154 = tmp32;
      }
      const result2 = processHiddenMessageRow(tmp154);
      const intl2 = require("intl").intl;
      const obj16 = { count: tmp154.content.length };
      tmp154.text = intl2.formatToPlainString(require("intl").t["VFWjc+"], obj16);
    } else if (isCollapsiblePlaceholder(message)) {
      let obj17;
      let tmp130 = !renderContentOnly;
      if (tmp130) {
        tmp130 = flag || tmp20 || tmp19;
      }
      let rowType;
      if (tmp32 != null) {
        rowType = tmp32.rowType;
      }
      const tmp134 = chatManager;
      if (rowType === chatManager.MESSAGE) {
        if (null != tmp32.unlinkedGamePlayerPlaceholders) {
          tmp32.message = message;
          tmp32.separatorBefore = tmp130;
          obj17 = tmp32;
        }
        const substr = arr.slice();
        items = [];
        let prop = obj17.unlinkedGamePlayerPlaceholders;
        const arraySpreadResult = HermesBuiltin.arraySpread(items, substr.reverse(), 0);
        if (prop == null) {
          prop = [];
        }
        HermesBuiltin.arraySpread(items, prop, arraySpreadResult);
        obj17.unlinkedGamePlayerPlaceholders = items;
        obj17.changeType = determineChangeType(message);
        let tmp148 = obj17.changeType === constants.NOOP;
        if (tmp148) {
          tmp148 = null != length && tmp149 !== message.length || items.some(f132396);
          null != length && tmp149 !== message.length || items.some(f132396);
        }
        if (tmp148) {
          obj17.changeType = constants.UPDATE;
        }
      }
      obj17 = { roleStyle: tmp30, message, isFirst: true, separatorBefore: tmp130, rowType: tmp134.MESSAGE, changeType: constants.NOOP };
      items.push(obj17);
    } else {
      let iter = arr[Symbol.iterator]();
      let nextResult = iter.next();
      while (iter !== undefined) {
        let result3;
        let obj6 = nextResult;
        let tmp38 = nextResult !== message;
        let obj7 = require;
        let isEditingResult = EditMessageStore.isEditing(require.id, nextResult.id);
        if (!isEditingResult) {
          isEditingResult = closure_3 === obj6.id;
        }
        let tmp44 = isEditingResult;
        PushFeedbackStore = PushFeedbackStore.getPushFeedback(obj6.channel_id, obj6.id);
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
          result3 = chatManager.determineChangeTypeForUploadProgress(tmp60[obj6.id]);
        } else {
          result3 = determineChangeType(obj6, true);
        }
        let tmp67 = constants;
        let tmp68 = null != constants;
        if (tmp68) {
          tmp68 = tmp67.endId === obj6.id;
        }
        if (tmp68) {
          tmp68 = tmp67.count > 1;
        }
        if (tmp68) {
          let obj18 = { rowType: roleStyle.SUMMARY, changeType: determineChangeType(obj6), roleStyle, summary: tmp67, isBeforeContent: false };
          let push2 = items.push;
          let push2Result = push2(obj18);
        }
        let arr3 = items;
        let obj19 = { roleStyle, message: obj6, isSystemDM: isSystemDMResult, isFirst: obj6 === message, isEditing: tmp44, separatorBefore: tmp88, canAddNewReactions, alwaysShowAddReaction: isForumPostResult, renderContentOnly, pushFeedbackType: pushType, canReply: !tmp99 && canReplyToMessageResult, canEdit: !tmp99 && tmp55, rowType: chatManager.MESSAGE, changeType: result3, showContentInventoryEntryFallbackEmbed: hasItem };
        let tmp80 = roleStyle;
        let push3 = items.push;
        isSystemDMResult = obj7.isSystemDM();
        if (isSystemDMResult) {
          isSystemDMResult = obj6.isSystemDM();
        }
        tmp88 = !tmp38;
        if (tmp88) {
          tmp88 = !renderContentOnly;
        }
        if (tmp88) {
          let tmp91 = flag || tmp20 || tmp19;
          tmp88 = tmp91;
        }
        isForumPostResult = obj7.isForumPost();
        if (isForumPostResult) {
          id = obj6.id;
          let tmp52Result = tmp52(id[5]);
          isForumPostResult = id === tmp52Result.castChannelIdAsMessageId(obj7.id);
        }
        tmp99 = renderContentOnly;
        pushType = undefined;
        if (PushFeedbackStore != null) {
          pushType = PushFeedbackStore.pushType;
        }
        let obj13 = closure_13;
        hasItem = undefined;
        if (closure_13 != null) {
          hasItem = obj13.has(obj6.id);
        }
        let push3Result = push3(obj19);
        let tmp110 = constants2;
        let tmp111 = null != constants2;
        if (tmp111) {
          tmp111 = obj6.id === tmp110.startMessageId;
        }
        if (tmp111) {
          tmp111 = tmp110.messageCount > 1;
        }
        if (tmp111) {
          let obj20 = { rowType: roleStyle.CONVERSATION, changeType: determineChangeType(obj6), roleStyle: tmp80, conversationHeader: tmp52(id[14])(tmp110) };
          let push4 = arr3.push;
          let push4Result = push4(obj20);
        }
        let tmp120 = null != tmp67;
        if (tmp120) {
          tmp120 = tmp67.startId === obj6.id;
        }
        if (tmp120) {
          tmp120 = tmp67.count > 1;
        }
        if (tmp120) {
          let obj21 = { rowType: roleStyle.SUMMARY, changeType: determineChangeType(obj6), roleStyle: tmp80, summary: tmp67, isBeforeContent: true };
          let push5 = arr3.push;
          let push5Result = push5(obj21);
        }
        continue;
      }
    }
    if (flag) {
      const tmp209 = renderContentOnly;
      if (!tmp209) {
        let NOOP = determineChangeType(message);
        if (NOOP === constants.UPDATE) {
          NOOP = constants.NOOP;
        }
        const obj22 = { rowType: roleStyle.DAY, changeType: NOOP, roleStyle, text: obj24.dateFormat(message.timestamp, "LL") };
        obj24 = require("DateUtils");
        items.push(obj22);
      }
    }
    if (tmp20) {
      tmp20 = !renderContentOnly;
    }
    if (tmp20) {
      const push6 = items.push;
      const obj23 = { rowType: roleStyle.UNREAD, changeType: determineChangeType(message), roleStyle, text: stringResult.toLocaleUpperCase(require("intl").intl.currentLocale) };
      const intl5 = require("intl").intl;
      stringResult = intl5.string(require("intl").t.q7hm3m);
      push6(obj23);
    }
    if (tmp19) {
      tmp19 = !renderContentOnly;
    }
    if (tmp19) {
      const push7 = items.push;
      const obj25 = { rowType: constants2.LOAD_BEFORE, changeType: forceRender ? constants.UPDATE : constants.NOOP, roleStyle, isLoading: message.loadingMore, text: intl6.string(require("intl").t.XBlaiC) };
      intl6 = require("intl").intl;
      push7(obj25);
    }
  });
  let tmp14 = 0 === items1.length && !messages.loadingMore;
  if (tmp14) {
    tmp14 = messages.hasMoreAfter || messages.hasMoreBefore;
    const tmp15 = messages.hasMoreAfter || messages.hasMoreBefore;
  }
  if (tmp14) {
    let obj2 = { rowType: messages.hasMoreBefore ? tmp16.LOAD_BEFORE : tmp16.LOAD_AFTER, changeType: forceRender ? constants.UPDATE : constants.NOOP, roleStyle, isLoading: messages.loadingMore, text: intl.string(require("intl").t.XBlaiC) };
    const tmp18 = require;
    let tmp19 = id;
    let push = items.push;
    intl = require("intl").intl;
    const arr = push(obj2);
  }
  return items;
};
