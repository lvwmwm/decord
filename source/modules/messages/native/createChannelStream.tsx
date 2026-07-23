// Module ID: 11095
// Function ID: 86264
// Name: _createForOfIteratorHelperLoose
// Dependencies: [10442, 6923, 7080, 7622, 653, 21, 9482, 11096, 1212, 3800, 7663, 9965, 5650, 2]
// Exports: default

// Module 11095 (_createForOfIteratorHelperLoose)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import Changeset from "Changeset";
import { MessageFlags } from "ME";

let closure_6;
let closure_7;
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
({ Changeset: closure_6, LoadingType: closure_7, RowType: closure_8, SeparatorType: closure_9 } = Changeset);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/messages/native/createChannelStream.tsx");

export default function createChannelStream(forceRender) {
  let MessageFlags;
  let _arrayLikeToArray;
  let _createForOfIteratorHelperLoose;
  let _isNativeReflectConstruct;
  let closure_4;
  let closure_5;
  let closure_6;
  let closure_7;
  let dependencyMap;
  let iter2;
  let messages;
  let require;
  let roleStyle;
  let uploads;
  ({ channel: require, messages } = forceRender);
  ({ uploads, oldestUnreadMessageId: dependencyMap, replyingMessageId: _isNativeReflectConstruct, currentUserId: closure_4, canAddNewReactions: closure_5, selectedSummary: closure_6, chatManager: closure_7, roleStyle } = forceRender);
  forceRender = forceRender.forceRender;
  ({ updateMessageIds: MessageFlags, isResourceChannel: _createForOfIteratorHelperLoose, unloadableContentEntryMessageIds: _arrayLikeToArray } = forceRender);
  let items1;
  function unreadFilter(id) {
    if (closure_0.isForumPost()) {
      let tmp3 = tmp;
      if (tmp) {
        tmp3 = id.id !== messages(outer1_2[5]).castChannelIdAsMessageId(closure_0.id);
        const obj = messages(outer1_2[5]);
      }
      let tmp2 = tmp3;
    } else {
      tmp2 = tmp;
    }
    return tmp2;
  }
  function insertMessage(message) {
    const first = items1[0];
    if (null != first) {
      if (!unreadFilter(message)) {
        if (messages(outer1_2[6])(closure_0, first[first.length - 1], message)) {
          const items = [message];
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
    return store.determineChangeType({ message, updateMessageIds: closure_10, forceRender }, flag);
  }
  let items = [];
  let arr = {};
  const substr = uploads.slice();
  let tmp = _createForOfIteratorHelperLoose(substr.reverse());
  let iter = tmp();
  if (!iter.done) {
    do {
      let value = iter.value;
      let tmp2 = messageForFile;
      messageForFile = messageForFile.getMessageForFile(value.id);
      let nonce;
      if (null != messageForFile) {
        nonce = messageForFile.nonce;
      }
      if (null != nonce) {
        arr[messageForFile.nonce] = value;
      }
      iter2 = tmp();
      iter = iter2;
    } while (!iter2.done);
  }
  items1 = [];
  const item = messages.forEach((id) => {
    const result = outer1_0(outer1_2[7]).tryCreateInjectedMessage(id, closure_0);
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
    let tmp7 = null != result;
    if (tmp7) {
      tmp7 = "after" === result.position;
    }
    if (tmp7) {
      insertMessage(result.message);
    }
  });
  const item1 = items1.forEach((closure_0) => {
    let iter2;
    function processHiddenMessageRow(merged) {
      let iter2;
      let obj;
      const tmp = outer2_11(systemDM);
      let iter = tmp();
      if (!iter.done) {
        do {
          let value = iter.value;
          let tmp2 = outer1_18;
          let tmp3 = outer2_6;
          let tmp4 = outer1_18(value) !== outer2_6.NOOP;
          if (tmp4) {
            let tmp5 = outer2_6;
            tmp4 = merged.changeType === outer2_6.NOOP;
          }
          if (tmp4) {
            let tmp6 = outer2_6;
            merged.changeType = outer2_6.UPDATE;
          }
          let content = merged.content;
          obj = {};
          let tmp7 = roleStyle;
          obj.rowType = roleStyle.MESSAGE;
          let tmp8 = outer2_6;
          obj.changeType = outer2_6.NOOP;
          let tmp9 = outer1_8;
          obj.roleStyle = outer1_8;
          obj.message = value;
          let tmp10 = systemDM;
          let tmp11 = systemDM.isSystemDM() && value.isSystemDM();
          obj.isSystemDM = tmp11;
          let tmp12 = obj;
          obj.isFirst = value === obj;
          let tmp13 = outer1_5;
          obj.canAddNewReactions = outer1_5;
          let arr = content.unshift(obj);
          iter2 = tmp();
          iter = iter2;
        } while (!iter2.done);
      }
      merged.revealed = obj.id === obj.revealedMessageId;
      merged.context = obj.id;
      return merged;
    }
    let obj = closure_0[closure_0.length - 1];
    let merged = arg1 === items1.length - 1;
    let hasMoreAfter = 0 === arg1;
    if (hasMoreAfter) {
      hasMoreAfter = obj.hasMoreAfter;
    }
    if (!hasMoreAfter) {
      let tmp11 = obj.hasMoreBefore && merged;
      let tmp13 = unreadFilter(obj);
      let timestamp = null;
      if (!merged) {
        timestamp = items1[arg1 + 1][0].timestamp;
      }
      if (merged) {
        let isDMResult = closure_0.isDM();
        if (isDMResult) {
          isDMResult = !obj.hasMoreBefore;
        }
        if (isDMResult) {
          isDMResult = merged;
        }
        if (!isDMResult) {
          let isThreadResult = closure_0.isThread();
          if (isThreadResult) {
            isThreadResult = !closure_0.isForumPost();
          }
          if (isThreadResult) {
            isThreadResult = !obj.hasMoreBefore;
          }
          if (isThreadResult) {
            isThreadResult = merged;
          }
          isDMResult = isThreadResult;
        }
        let flag = false;
        if (isDMResult) {
          flag = true;
        }
      } else {
        let obj2 = outer1_0(outer1_2[9]);
        flag = true;
      }
      obj = { roleStyle, message: null, isFirst: true, content: null, text: "", revealed: false };
      obj.message = obj;
      obj.content = [];
      let tmp28 = items[items.length - 1];
      if (obj.hasFlag(outer1_10.HIDDEN_SUSPENDED_USER)) {
        if (null == tmp28) {
          merged = determineChangeType;
          obj = {};
          merged = obj;
          merged = obj;
          merged = determineChangeType(obj);
          merged = Object.assign(obj);
          merged = roleStyle;
          obj["rowType"] = roleStyle.SUSPENDED_USER_GROUP;
          obj["changeType"] = merged;
          obj["canUncollapse"] = false;
          merged = items;
          merged = items.push(obj);
          tmp28 = obj;
        } else {
          merged = roleStyle;
        }
        merged = processHiddenMessageRow(tmp28);
        merged = outer1_0;
        merged = outer1_2;
        const intl4 = outer1_0(outer1_2[8]).intl;
        const obj1 = { count: tmp28.content.length };
        tmp28.text = intl4.formatToPlainString(outer1_0(outer1_2[8]).t.rHRovo, obj1);
      } else if (obj.blocked) {
        if (null == tmp28) {
          merged = determineChangeType;
          merged = determineChangeType(obj);
          merged = outer1_6;
          merged = merged === outer1_6.NOOP;
          if (merged) {
            merged = store;
            merged = store.getBlocked(obj);
          }
          let INSERT2 = merged;
          if (merged) {
            merged = outer1_6;
            INSERT2 = outer1_6.INSERT;
          }
          obj2 = {};
          merged = obj2;
          merged = obj;
          merged = Object.assign(obj);
          merged = roleStyle;
          obj2["rowType"] = roleStyle.BLOCKED_GROUP;
          obj2["changeType"] = INSERT2;
          merged = items;
          merged = items.push(obj2);
          merged = obj2;
        } else {
          merged = roleStyle;
          merged = tmp28;
        }
        merged = processHiddenMessageRow(merged);
        merged = outer1_0;
        merged = outer1_2;
        const intl3 = outer1_0(outer1_2[8]).intl;
        const obj3 = { count: merged.content.length };
        merged.text = intl3.formatToPlainString(outer1_0(outer1_2[8]).t["+FcYM/"], obj3);
      } else if (obj.ignored) {
        if (null == tmp28) {
          const tmp99 = determineChangeType(obj);
          merged = outer1_6;
          merged = tmp99 === outer1_6.NOOP;
          if (merged) {
            merged = store;
            merged = store.getIgnored(obj);
          }
          let INSERT = tmp99;
          if (merged) {
            merged = outer1_6;
            INSERT = outer1_6.INSERT;
          }
          let obj4 = {};
          merged = obj4;
          merged = obj;
          merged = Object.assign(obj);
          merged = roleStyle;
          obj4["rowType"] = roleStyle.IGNORED_GROUP;
          obj4["changeType"] = INSERT;
          merged = items;
          merged = items.push(obj4);
          let tmp97 = obj4;
        } else {
          tmp97 = tmp28;
        }
        merged = processHiddenMessageRow(tmp97);
        merged = outer1_0;
        merged = outer1_2;
        const intl2 = outer1_0(outer1_2[8]).intl;
        let obj5 = { count: tmp97.content.length };
        tmp97.text = intl2.formatToPlainString(outer1_0(outer1_2[8]).t["VFWjc+"], obj5);
      } else {
        const tmp31 = outer1_11(closure_0);
        let iter = tmp31();
        if (!iter.done) {
          do {
            let value = iter.value;
            let tmp32 = value !== obj;
            let tmp33 = outer1_4;
            let tmp34 = closure_0;
            let isEditingResult = outer1_4.isEditing(closure_0.id, value.id);
            if (!isEditingResult) {
              let tmp36 = _isNativeReflectConstruct;
              isEditingResult = _isNativeReflectConstruct === value.id;
            }
            let tmp37 = outer1_3;
            let pushFeedback = outer1_3.getPushFeedback(value.channel_id, value.id);
            let tmp39 = outer1_0;
            let tmp40 = outer1_2;
            obj4 = outer1_0(outer1_2[10]);
            let tmp41 = closure_0;
            let tmp43 = messages;
            let canReplyToMessageResult = obj4.canReplyToMessage(closure_0, value);
            let tmp44 = closure_4;
            let tmp45 = messages(outer1_2[11])(value, closure_4);
            if (tmp45) {
              let tmp46 = outer1_0;
              let tmp47 = outer1_2;
              obj5 = outer1_0(outer1_2[12]);
              let tmp48 = closure_0;
              tmp45 = !obj5.isNonModInLockedThread(closure_0);
            }
            let tmp49 = arr;
            if (arr.hasOwnProperty(value.id)) {
              let tmp52 = arr;
              let tmp53 = store;
              let result = store.determineChangeTypeForUploadProgress(arr[value.id]);
            } else {
              let tmp50 = determineChangeType;
              result = determineChangeType(value, true);
            }
            let tmp54 = closure_6;
            let tmp55 = null != closure_6;
            if (tmp55) {
              let tmp56 = closure_6;
              tmp55 = closure_6.endId === value.id;
            }
            if (tmp55) {
              let tmp57 = closure_6;
              tmp55 = closure_6.count > 1;
            }
            if (tmp55) {
              let tmp58 = items;
              let obj6 = {};
              let tmp59 = forceRender;
              obj6.rowType = forceRender.SUMMARY;
              let tmp60 = determineChangeType;
              obj6.changeType = determineChangeType(value);
              let tmp61 = roleStyle;
              obj6.roleStyle = roleStyle;
              let tmp62 = closure_6;
              obj6.summary = closure_6;
              obj6.isBeforeContent = false;
              arr = items.push(obj6);
            }
            let obj7 = {};
            let tmp65 = roleStyle;
            obj7.roleStyle = roleStyle;
            obj7.message = value;
            let tmp66 = closure_0;
            let tmp64 = items;
            let tmp67 = closure_0.isSystemDM() && value.isSystemDM();
            obj7.isSystemDM = tmp67;
            obj7.isFirst = value === obj;
            obj7.isEditing = isEditingResult;
            let tmp68 = !tmp32;
            if (!tmp32) {
              let tmp69 = closure_11;
              tmp68 = !closure_11;
            }
            if (tmp68) {
              let tmp70 = flag;
              if (!flag) {
                tmp70 = tmp13;
              }
              if (!tmp70) {
                tmp70 = tmp11;
              }
              tmp68 = tmp70;
            }
            obj7.separatorBefore = tmp68;
            let tmp71 = closure_5;
            obj7.canAddNewReactions = closure_5;
            let tmp72 = closure_0;
            let isForumPostResult = closure_0.isForumPost();
            if (isForumPostResult) {
              let tmp74 = messages;
              let tmp75 = outer1_2;
              let obj8 = messages(outer1_2[5]);
              let tmp76 = closure_0;
              isForumPostResult = value.id === obj8.castChannelIdAsMessageId(closure_0.id);
            }
            obj7.alwaysShowAddReaction = isForumPostResult;
            let tmp77 = closure_11;
            obj7.renderContentOnly = closure_11;
            let pushType;
            if (null != pushFeedback) {
              pushType = pushFeedback.pushType;
            }
            obj7.pushFeedbackType = pushType;
            let tmp79 = closure_11;
            obj7.canReply = !closure_11 && canReplyToMessageResult;
            let tmp80 = closure_11;
            obj7.canEdit = !closure_11 && tmp45;
            let tmp81 = roleStyle;
            obj7.rowType = roleStyle.MESSAGE;
            obj7.changeType = result;
            let tmp82 = set;
            let hasItem;
            if (null != set) {
              let tmp84 = set;
              hasItem = set.has(value.id);
            }
            obj7.showContentInventoryEntryFallbackEmbed = hasItem;
            arr = items.push(obj7);
            let tmp86 = closure_6;
            let tmp87 = null != closure_6;
            if (tmp87) {
              let tmp88 = closure_6;
              tmp87 = closure_6.startId === value.id;
            }
            if (tmp87) {
              let tmp89 = closure_6;
              tmp87 = closure_6.count > 1;
            }
            if (tmp87) {
              let tmp90 = items;
              obj8 = {};
              let tmp91 = forceRender;
              obj8.rowType = forceRender.SUMMARY;
              let tmp92 = determineChangeType;
              obj8.changeType = determineChangeType(value);
              let tmp93 = roleStyle;
              obj8.roleStyle = roleStyle;
              let tmp94 = closure_6;
              obj8.summary = closure_6;
              obj8.isBeforeContent = true;
              let arr1 = items.push(obj8);
            }
            iter2 = tmp31();
            iter = iter2;
          } while (!iter2.done);
        }
      }
      if (flag) {
        merged = closure_11;
        if (!closure_11) {
          merged = determineChangeType;
          let NOOP = determineChangeType(obj);
          merged = outer1_6;
          if (NOOP === outer1_6.UPDATE) {
            merged = outer1_6;
            NOOP = outer1_6.NOOP;
          }
          merged = outer1_0;
          merged = outer1_2;
          merged = items;
          const obj9 = {};
          merged = forceRender;
          obj9.rowType = forceRender.DAY;
          obj9.changeType = NOOP;
          merged = roleStyle;
          obj9.roleStyle = roleStyle;
          obj9.text = outer1_0(outer1_2[9]).dateFormat(obj.timestamp, "LL");
          merged = items.push(obj9);
          const obj17 = outer1_0(outer1_2[9]);
        }
      }
      if (tmp13) {
        merged = closure_11;
        tmp13 = !closure_11;
      }
      if (tmp13) {
        merged = items;
        const obj10 = {};
        merged = forceRender;
        obj10.rowType = forceRender.UNREAD;
        merged = determineChangeType;
        obj10.changeType = determineChangeType(obj);
        merged = roleStyle;
        obj10.roleStyle = roleStyle;
        merged = outer1_0;
        merged = outer1_2;
        const intl5 = outer1_0(outer1_2[8]).intl;
        obj10.text = intl5.string(outer1_0(outer1_2[8]).t.q7hm3m).toUpperCase();
        merged = items.push(obj10);
        const str9 = intl5.string(outer1_0(outer1_2[8]).t.q7hm3m);
      }
      if (tmp11) {
        merged = closure_11;
        tmp11 = !closure_11;
      }
      if (tmp11) {
        let obj11 = {};
        merged = outer1_7;
        obj11.rowType = outer1_7.LOAD_BEFORE;
        merged = forceRender;
        merged = outer1_6;
        obj11.changeType = forceRender ? merged.UPDATE : merged.NOOP;
        merged = roleStyle;
        obj11.roleStyle = roleStyle;
        merged = obj;
        obj11.isLoading = obj.loadingMore;
        merged = outer1_0;
        merged = outer1_2;
        merged = items;
        const intl6 = outer1_0(outer1_2[8]).intl;
        obj11.text = intl6.string(outer1_0(outer1_2[8]).t.XBlaiC);
        obj11 = items.push(obj11);
      }
    } else {
      let obj12 = { rowType: outer1_7.LOAD_AFTER };
      let intl = outer1_6;
      obj12.changeType = forceRender ? intl.UPDATE : intl.NOOP;
      obj12.roleStyle = roleStyle;
      obj12.isLoading = obj.loadingMore;
      intl = outer1_0(outer1_2[8]).intl;
      obj12.text = intl.string(outer1_0(outer1_2[8]).t.XBlaiC);
      obj12 = items.push(obj12);
    }
  });
  let tmp7 = 0 === items1.length && !messages.loadingMore;
  if (tmp7) {
    tmp7 = messages.hasMoreAfter || messages.hasMoreBefore;
    let tmp8 = messages.hasMoreAfter || messages.hasMoreBefore;
  }
  if (!tmp7) {
    return items;
  } else {
    arr = { rowType: messages.hasMoreBefore ? closure_7.LOAD_BEFORE : closure_7.LOAD_AFTER };
    let tmp10 = closure_6;
    arr.changeType = forceRender ? tmp10.UPDATE : tmp10.NOOP;
    arr.roleStyle = roleStyle;
    arr.isLoading = messages.loadingMore;
    tmp10 = dependencyMap;
    roleStyle = require(1212) /* getSystemLocale */.intl;
    messages = roleStyle.string;
    arr.text = messages(require(1212) /* getSystemLocale */.t.XBlaiC);
    arr = items.push(arr);
  }
};
