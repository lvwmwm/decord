// Module ID: 11085
// Function ID: 86214
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default

// Module 11085 (_createForOfIteratorHelperLoose)
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
({ Changeset: closure_6, LoadingType: closure_7, RowType: closure_8, SeparatorType: closure_9 } = arg1(dependencyMap[3]));
const MessageFlags = arg1(dependencyMap[4]).MessageFlags;
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/messages/native/createChannelStream.tsx");

export default function createChannelStream(forceRender) {
  let iter2;
  let messages;
  let roleStyle;
  let uploads;
  ({ channel: closure_0, messages } = forceRender);
  const importDefault = messages;
  ({ uploads, oldestUnreadMessageId: closure_2, replyingMessageId: closure_3, currentUserId: closure_4, canAddNewReactions: closure_5, selectedSummary: closure_6, chatManager: closure_7, roleStyle } = forceRender);
  forceRender = forceRender.forceRender;
  ({ updateMessageIds: closure_10, isResourceChannel: closure_11, unloadableContentEntryMessageIds: closure_12 } = forceRender);
  let items1;
  function unreadFilter(id) {
    if (forumPost.isForumPost()) {
      let tmp3 = tmp;
      if (tmp) {
        tmp3 = id.id !== messages(closure_2[5]).castChannelIdAsMessageId(forumPost.id);
        const obj = messages(closure_2[5]);
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
        if (messages(closure_2[6])(closure_0, first[first.length - 1], message)) {
          const items = [message];
          items1.unshift(items);
        } else {
          first.unshift(message);
        }
      }
    }
    const items1 = [message];
    items1.unshift(items1);
  }
  function determineChangeType(message) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    return store.determineChangeType({ message, updateMessageIds: closure_10, forceRender }, flag);
  }
  const items = [];
  let arr = {};
  const substr = uploads.slice();
  const tmp = _createForOfIteratorHelperLoose(substr.reverse());
  let iter = tmp();
  if (!iter.done) {
    do {
      let value = iter.value;
      let tmp2 = closure_5;
      let messageForFile = closure_5.getMessageForFile(value.id);
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
    const result = forumPost(id[7]).tryCreateInjectedMessage(id, forumPost);
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
  const item1 = items1.forEach((self) => {
    function processHiddenMessageRow(merged) {
      let iter2;
      let obj;
      const tmp = callback(merged);
      let iter = tmp();
      if (!iter.done) {
        do {
          let value = iter.value;
          let tmp2 = closure_18;
          let tmp3 = closure_6;
          let tmp4 = closure_18(value) !== closure_6.NOOP;
          if (tmp4) {
            let tmp5 = closure_6;
            tmp4 = merged.changeType === closure_6.NOOP;
          }
          if (tmp4) {
            let tmp6 = closure_6;
            merged.changeType = closure_6.UPDATE;
          }
          let content = merged.content;
          obj = {};
          let tmp7 = closure_8;
          obj.rowType = closure_8.MESSAGE;
          let tmp8 = closure_6;
          obj.changeType = closure_6.NOOP;
          let tmp9 = closure_8;
          obj.roleStyle = closure_8;
          obj.message = value;
          let tmp10 = closure_0;
          let tmp11 = closure_0.isSystemDM() && value.isSystemDM();
          obj.isSystemDM = tmp11;
          let tmp12 = closure_1;
          obj.isFirst = value === closure_1;
          let tmp13 = closure_5;
          obj.canAddNewReactions = closure_5;
          let arr = content.unshift(obj);
          iter2 = tmp();
          iter = iter2;
        } while (!iter2.done);
      }
      merged.revealed = obj.id === obj.revealedMessageId;
      merged.context = obj.id;
      return merged;
    }
    let obj = self[self.length - 1];
    const messages = obj;
    let merged = arg1 === items1.length - 1;
    let hasMoreAfter = 0 === arg1;
    if (hasMoreAfter) {
      hasMoreAfter = messages.hasMoreAfter;
    }
    if (!hasMoreAfter) {
      let tmp11 = messages.hasMoreBefore && merged;
      let tmp13 = unreadFilter(obj);
      let timestamp = null;
      if (!merged) {
        timestamp = items1[arg1 + 1][0].timestamp;
      }
      if (merged) {
        let isDMResult = self.isDM();
        if (isDMResult) {
          isDMResult = !messages.hasMoreBefore;
        }
        if (isDMResult) {
          isDMResult = merged;
        }
        if (!isDMResult) {
          let isThreadResult = self.isThread();
          if (isThreadResult) {
            isThreadResult = !self.isForumPost();
          }
          if (isThreadResult) {
            isThreadResult = !messages.hasMoreBefore;
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
        let obj2 = self(closure_2[9]);
        flag = true;
      }
      obj = { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, roleStyle };
      obj.message = obj;
      obj.content = [];
      let tmp28 = items[closure_13.length - 1];
      if (obj.hasFlag(constants.HIDDEN_SUSPENDED_USER)) {
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
        merged = self;
        merged = closure_2;
        const intl4 = self(closure_2[8]).intl;
        const obj1 = { count: tmp28.content.length };
        tmp28.text = intl4.formatToPlainString(self(closure_2[8]).t.rHRovo, obj1);
      } else if (obj.blocked) {
        if (null == tmp28) {
          merged = determineChangeType;
          merged = determineChangeType(obj);
          merged = closure_6;
          merged = merged === closure_6.NOOP;
          if (merged) {
            merged = store;
            merged = store.getBlocked(obj);
          }
          let INSERT2 = merged;
          if (merged) {
            merged = closure_6;
            INSERT2 = closure_6.INSERT;
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
        merged = self;
        merged = closure_2;
        const intl3 = self(closure_2[8]).intl;
        const obj3 = { count: merged.content.length };
        merged.text = intl3.formatToPlainString(self(closure_2[8]).t.+FcYM/, obj3);
      } else if (obj.ignored) {
        if (null == tmp28) {
          const tmp99 = determineChangeType(obj);
          merged = closure_6;
          merged = tmp99 === closure_6.NOOP;
          if (merged) {
            merged = store;
            merged = store.getIgnored(obj);
          }
          let INSERT = tmp99;
          if (merged) {
            merged = closure_6;
            INSERT = closure_6.INSERT;
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
        merged = self;
        merged = closure_2;
        const intl2 = self(closure_2[8]).intl;
        let obj5 = { count: tmp97.content.length };
        tmp97.text = intl2.formatToPlainString(self(closure_2[8]).t.VFWjc+, obj5);
      } else {
        const tmp31 = callback(self);
        let iter = tmp31();
        if (!iter.done) {
          while (true) {
            let value = iter.value;
            let tmp32 = value !== obj;
            let tmp33 = editing;
            let tmp34 = self;
            let isEditingResult = editing.isEditing(self.id, value.id);
            if (!isEditingResult) {
              let tmp36 = pushFeedback;
              isEditingResult = pushFeedback === value.id;
            }
            let tmp37 = pushFeedback;
            let pushFeedback = pushFeedback.getPushFeedback(value.channel_id, value.id);
            let tmp39 = self;
            let tmp40 = closure_2;
            obj4 = self(closure_2[10]);
            let tmp41 = self;
            let tmp43 = messages;
            let canReplyToMessageResult = obj4.canReplyToMessage(self, value);
            let tmp44 = editing;
            let tmp45 = messages(closure_2[11])(value, editing);
            if (tmp45) {
              let tmp46 = self;
              let tmp47 = closure_2;
              obj5 = self(closure_2[12]);
              let tmp48 = self;
              tmp45 = !obj5.isNonModInLockedThread(self);
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
              let arr = items.push(obj6);
            }
            let obj7 = {};
            let tmp65 = roleStyle;
            obj7.roleStyle = roleStyle;
            obj7.message = value;
            let tmp66 = self;
            let tmp64 = items;
            let tmp67 = self.isSystemDM() && value.isSystemDM();
            obj7.isSystemDM = tmp67;
            obj7.isFirst = value === obj;
            obj7.isEditing = isEditingResult;
            let tmp68 = !tmp32;
            if (!tmp32) {
              let tmp69 = callback;
              tmp68 = !callback;
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
            let tmp72 = self;
            let isForumPostResult = self.isForumPost();
            if (isForumPostResult) {
              let tmp74 = messages;
              let tmp75 = closure_2;
              let obj8 = messages(closure_2[5]);
              let tmp76 = self;
              isForumPostResult = value.id === obj8.castChannelIdAsMessageId(self.id);
            }
            obj7.alwaysShowAddReaction = isForumPostResult;
            let tmp77 = callback;
            obj7.renderContentOnly = callback;
            let pushType;
            if (null != pushFeedback) {
              pushType = pushFeedback.pushType;
            }
            obj7.pushFeedbackType = pushType;
            let tmp79 = callback;
            obj7.canReply = !callback && canReplyToMessageResult;
            let tmp80 = callback;
            obj7.canEdit = !callback && tmp45;
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
            let iter2 = tmp31();
            iter = iter2;
            if (iter2.done) {
              break;
            } else {
              // continue
            }
          }
        }
      }
      if (flag) {
        merged = callback;
        if (!callback) {
          merged = determineChangeType;
          let NOOP = determineChangeType(obj);
          merged = closure_6;
          if (NOOP === closure_6.UPDATE) {
            merged = closure_6;
            NOOP = closure_6.NOOP;
          }
          merged = self;
          merged = closure_2;
          merged = items;
          const obj9 = {};
          merged = forceRender;
          obj9.rowType = forceRender.DAY;
          obj9.changeType = NOOP;
          merged = roleStyle;
          obj9.roleStyle = roleStyle;
          obj9.text = self(closure_2[9]).dateFormat(obj.timestamp, "LL");
          merged = items.push(obj9);
          const obj17 = self(closure_2[9]);
        }
      }
      if (tmp13) {
        merged = callback;
        tmp13 = !callback;
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
        merged = self;
        merged = closure_2;
        const intl5 = self(closure_2[8]).intl;
        obj10.text = intl5.string(self(closure_2[8]).t.q7hm3m).toUpperCase();
        merged = items.push(obj10);
        const str9 = intl5.string(self(closure_2[8]).t.q7hm3m);
      }
      if (tmp11) {
        merged = callback;
        tmp11 = !callback;
      }
      if (tmp11) {
        let obj11 = {};
        merged = store;
        obj11.rowType = store.LOAD_BEFORE;
        merged = forceRender;
        merged = closure_6;
        obj11.changeType = forceRender ? merged.UPDATE : merged.NOOP;
        merged = roleStyle;
        obj11.roleStyle = roleStyle;
        merged = messages;
        obj11.isLoading = messages.loadingMore;
        merged = self;
        merged = closure_2;
        merged = items;
        const intl6 = self(closure_2[8]).intl;
        obj11.text = intl6.string(self(closure_2[8]).t.XBlaiC);
        obj11 = items.push(obj11);
      }
    } else {
      let obj12 = { rowType: store.LOAD_AFTER };
      let intl = closure_6;
      obj12.changeType = forceRender ? intl.UPDATE : intl.NOOP;
      obj12.roleStyle = roleStyle;
      obj12.isLoading = messages.loadingMore;
      intl = self(closure_2[8]).intl;
      obj12.text = intl.string(self(closure_2[8]).t.XBlaiC);
      obj12 = items.push(obj12);
    }
  });
  let tmp7 = 0 === items1.length && !messages.loadingMore;
  if (tmp7) {
    tmp7 = messages.hasMoreAfter || messages.hasMoreBefore;
    const tmp8 = messages.hasMoreAfter || messages.hasMoreBefore;
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
    roleStyle = arg1(dependencyMap[8]).intl;
    messages = roleStyle.string;
    arr.text = messages(arg1(dependencyMap[8]).t.XBlaiC);
    arr = items.push(arr);
  }
};
