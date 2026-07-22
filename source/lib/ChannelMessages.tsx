// Module ID: 4800
// Function ID: 41730
// Name: mergeMessage
// Dependencies: []
// Exports: flatMapChannelMessages

// Module 4800 (mergeMessage)
function mergeMessage(get, id) {
  let messageRecord = get.get(id.id);
  if (null != messageRecord) {
    let num = 0;
    if (null != messageRecord.editedTimestamp) {
      num = +messageRecord.editedTimestamp;
    }
    let num2 = 0;
    if (null != id.edited_timestamp) {
      const _Date = Date;
      const date = new Date(id.edited_timestamp);
      num2 = +date;
    }
    let tmp7 = num2 > num;
    if (!tmp7) {
      const embeds = id.embeds;
      let length;
      if (null != embeds) {
        length = embeds.length;
      }
      let num3 = 0;
      if (null != length) {
        num3 = length;
      }
      tmp7 = messageRecord.embeds.length < num3;
    }
    if (!tmp7) {
      tmp7 = messageRecord.content !== id.content;
    }
    return messageRecord;
  }
  messageRecord = id(dependencyMap[5]).createMessageRecord(id);
}
importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
({ MAX_MESSAGES_PER_CHANNEL: closure_6, MAX_LOADED_MESSAGES: closure_7, MAX_MESSAGE_CACHE_SIZE: closure_8, TRUNCATED_MESSAGE_VIEW_SIZE: closure_9, MessageStates: closure_10 } = arg1(dependencyMap[3]));
let importDefaultResult1 = importDefault(dependencyMap[4]);
importDefaultResult1 = new importDefaultResult1("ChannelMessages");
let closure_12 = () => {
  class MessageCache {
    constructor(arg0) {
      tmp = closure_4(this, MessageCache);
      this._messages = [];
      this._map = {};
      this._wasAtEdge = false;
      this._isCacheBefore = arg0;
      return;
    }
  }
  const arg1 = MessageCache;
  let obj = {
    key: "clone",
    value: function clone() {
      const tmp = new MessageCache(this._isCacheBefore);
      const merged = Object.assign(this._map);
      tmp._map = {};
      const items = [...this._messages];
      tmp._messages = items;
      tmp._wasAtEdge = this._wasAtEdge;
      return tmp;
    }
  };
  const items = [obj, , , , , , , , , , , , , ];
  obj = {
    key: "wasAtEdge",
    get() {
      return this._wasAtEdge;
    },
    set(_wasAtEdge) {
      this._wasAtEdge = _wasAtEdge;
    }
  };
  items[1] = obj;
  obj = {
    key: "length",
    get() {
      return this._messages.length;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "clear",
    value() {
      this._map = {};
      this._messages = [];
      this._wasAtEdge = false;
    }
  };
  items[4] = {
    key: "remove",
    value(arg0) {
      const MessageCache = arg0;
      this._messages = callback(closure_3[6]).filter(this._messages, (id) => id.id !== id);
      delete r1[r2];
    }
  };
  items[5] = {
    key: "removeMany",
    value(closure_30) {
      const MessageCache = this;
      closure_30(closure_3[6]).each(closure_30, (arg0) => {
        delete r1[r0];
      });
      const _messages = this._messages;
      this._messages = _messages.filter((id) => -1 === id.indexOf(id.id));
    }
  };
  items[6] = {
    key: "replace",
    value(arg0, id) {
      let _messages;
      let _messages2;
      const self = this;
      const tmp = this._map[arg0];
      if (null != tmp) {
        const _map = self._map;
        delete r1[r3];
        self._map[id.id] = id;
        ({ _messages: _messages2, _messages } = self);
        _messages[_messages2.indexOf(tmp)] = id;
      }
    }
  };
  items[7] = {
    key: "update",
    value(arg0, arg1) {
      let _messages;
      let _messages2;
      const self = this;
      const tmp = this._map[arg0];
      if (null != tmp) {
        const tmp3 = arg1(tmp);
        self._map[tmp.id] = tmp3;
        ({ _messages: _messages2, _messages } = self);
        _messages[_messages2.indexOf(tmp)] = tmp3;
      }
    }
  };
  items[8] = {
    key: "has",
    value(arg0) {
      return null != this._map[arg0];
    }
  };
  items[9] = {
    key: "get",
    value(arg0) {
      return this._map[arg0];
    }
  };
  items[10] = {
    key: "forEach",
    value(arg0, arg1) {
      const _messages = this._messages;
      const item = _messages.forEach(arg0, arg1);
    }
  };
  items[11] = {
    key: "cache",
    value(arg0) {
      let flag = arg1;
      const self = this;
      const MessageCache = this;
      if (arg1 === undefined) {
        flag = false;
      }
      if (0 === self.length) {
        self._wasAtEdge = flag;
      }
      if (self._messages.length + arg0.length > closure_8) {
        self._wasAtEdge = false;
        if (arg0.length > closure_8) {
          const slice = arg0.slice;
          if (self._isCacheBefore) {
            self._messages = slice(arg0.length - closure_8);
          } else {
            self._messages = slice(0, closure_8);
          }
          self._map = {};
          const _messages = self._messages;
          const item = _messages.forEach((id) => {
            self._map[id.id] = id;
            return id;
          });
        } else {
          const diff = closure_8 - arg0.length;
          const _messages1 = self._messages;
          const slice2 = _messages1.slice;
          if (self._isCacheBefore) {
            const _Math = Math;
            self._messages = slice2(Math.max(self._messages.length - diff, 0));
          } else {
            self._messages = slice2(0, diff);
          }
        }
      }
      const items = [];
      if (self._isCacheBefore) {
        HermesBuiltin.arraySpread(arg0, HermesBuiltin.arraySpread(self._messages, 0));
        let tmp7 = items;
      } else {
        HermesBuiltin.arraySpread(self._messages, HermesBuiltin.arraySpread(arg0, 0));
        tmp7 = items;
      }
      self._messages = tmp7;
      self._map = {};
      const _messages2 = self._messages;
      const item1 = _messages2.forEach((id) => {
        self._map[id.id] = id;
        return id;
      });
    }
  };
  items[12] = {
    key: "extractAll",
    value() {
      this._messages = [];
      this._map = {};
      return this._messages;
    }
  };
  items[13] = {
    key: "extract",
    value(arg0) {
      const self = this;
      const MessageCache = this;
      const _Math = Math;
      if (this._isCacheBefore) {
        const maxResult = _Math.max(self.length - arg0, 0);
        const _messages = self._messages;
        let substr = _messages.slice(maxResult, self.length);
        const _messages1 = self._messages;
        _messages1.splice(maxResult);
      } else {
        const _messages2 = self._messages;
        substr = _messages2.slice(0, _Math.min(arg0, self.length));
        const _messages3 = self._messages;
        _messages3.splice(0, arg0);
      }
      const item = substr.forEach((id) => {
        delete r1[r0];
        return id.id;
      });
      return substr;
    }
  };
  return callback(MessageCache, items);
}();
const tmp6 = () => {
  class ChannelMessages {
    constructor(arg0) {
      tmp = closure_4(this, ChannelMessages);
      this.ready = false;
      this.cached = false;
      this.jumpType = ChannelMessages(closure_3[7]).JumpType.ANIMATED;
      this.jumpTargetId = null;
      this.jumpTargetOffset = 0;
      this.jumpSequenceId = 1;
      this.jumped = false;
      this.jumpedToPresent = false;
      this.jumpFlash = true;
      this.jumpReturnTargetId = null;
      this.onJumpComplete = null;
      this.focusTargetId = null;
      this.focusSequenceId = 1;
      this.initialScrollSequenceId = 0;
      this.suppressRowAnimationSequenceId = 0;
      this.hasMoreBefore = true;
      this.hasMoreAfter = false;
      this.loadingMore = false;
      this.revealedMessageId = null;
      this.hasFetched = false;
      this.error = false;
      this._array = [];
      tmp2 = new closure_12(true);
      this._before = tmp2;
      tmp3 = new closure_12(false);
      this._after = tmp3;
      this._map = {};
      this.channelId = arg0;
      return;
    }
  }
  const arg1 = ChannelMessages;
  let obj = {
    key: "mutate",
    value(ready) {
      let flag = arg1;
      const self = this;
      if (arg1 === undefined) {
        flag = false;
      }
      const tmp = new ChannelMessages(self.channelId);
      const _array = self._array;
      if (flag) {
        const items = [];
        HermesBuiltin.arraySpread(_array, 0);
        let tmp2 = items;
      } else {
        tmp2 = _array;
      }
      tmp._array = tmp2;
      const _map = self._map;
      if (flag) {
        const obj = {};
        const merged = Object.assign(_map);
        let tmp6 = obj;
      } else {
        tmp6 = _map;
      }
      tmp._map = tmp6;
      const _after = self._after;
      if (flag) {
        let cloneResult = _after.clone();
      } else {
        cloneResult = _after;
      }
      tmp._after = cloneResult;
      const _before = self._before;
      if (flag) {
        let cloneResult1 = _before.clone();
      } else {
        cloneResult1 = _before;
      }
      tmp._before = cloneResult1;
      if (ready instanceof Function) {
        ({ ready: tmp.ready, jumpType: tmp.jumpType, jumpTargetId: tmp.jumpTargetId, jumpTargetOffset: tmp.jumpTargetOffset, jumpSequenceId: tmp.jumpSequenceId, jumped: tmp.jumped, jumpedToPresent: tmp.jumpedToPresent, jumpFlash: tmp.jumpFlash, jumpReturnTargetId: tmp.jumpReturnTargetId, onJumpComplete: tmp.onJumpComplete, focusTargetId: tmp.focusTargetId, focusSequenceId: tmp.focusSequenceId, hasMoreBefore: tmp.hasMoreBefore, hasMoreAfter: tmp.hasMoreAfter, loadingMore: tmp.loadingMore, revealedMessageId: tmp.revealedMessageId, cached: tmp.cached, hasFetched: tmp.hasFetched, error: tmp.error, initialScrollSequenceId: tmp.initialScrollSequenceId, suppressRowAnimationSequenceId: tmp.suppressRowAnimationSequenceId } = self);
        ready(tmp);
      } else if ("object" === typeof ready) {
        if (undefined !== ready.ready) {
          ready = true === ready.ready;
        } else {
          ready = self.ready;
        }
        tmp.ready = ready;
        tmp.jumpType = undefined !== ready.jumpType ? ready.jumpType : self.jumpType;
        tmp.jumpTargetId = undefined !== ready.jumpTargetId ? ready.jumpTargetId : self.jumpTargetId;
        tmp.jumpTargetOffset = undefined !== ready.jumpTargetOffset ? ready.jumpTargetOffset : self.jumpTargetOffset;
        tmp.jumpSequenceId = undefined !== ready.jumpSequenceId ? ready.jumpSequenceId : self.jumpSequenceId;
        if (undefined !== ready.jumped) {
          let jumped = true === ready.jumped;
        } else {
          jumped = self.jumped;
        }
        tmp.jumped = jumped;
        if (undefined !== ready.jumpedToPresent) {
          let jumpedToPresent = true === ready.jumpedToPresent;
        } else {
          jumpedToPresent = self.jumpedToPresent;
        }
        tmp.jumpedToPresent = jumpedToPresent;
        if (undefined !== ready.jumpFlash) {
          let jumpFlash = true === ready.jumpFlash;
        } else {
          jumpFlash = self.jumpFlash;
        }
        tmp.jumpFlash = jumpFlash;
        tmp.jumpReturnTargetId = undefined !== ready.jumpReturnTargetId ? ready.jumpReturnTargetId : self.jumpReturnTargetId;
        tmp.focusTargetId = undefined !== ready.focusTargetId ? ready.focusTargetId : self.focusTargetId;
        tmp.focusSequenceId = undefined !== ready.focusSequenceId ? ready.focusSequenceId : self.focusSequenceId;
        if (undefined !== ready.hasMoreBefore) {
          let hasMoreBefore = true === ready.hasMoreBefore;
        } else {
          hasMoreBefore = self.hasMoreBefore;
        }
        tmp.hasMoreBefore = hasMoreBefore;
        if (undefined !== ready.hasMoreAfter) {
          let hasMoreAfter = true === ready.hasMoreAfter;
        } else {
          hasMoreAfter = self.hasMoreAfter;
        }
        tmp.hasMoreAfter = hasMoreAfter;
        tmp.loadingMore = undefined !== ready.loadingMore ? ready.loadingMore : self.loadingMore;
        tmp.revealedMessageId = undefined !== ready.revealedMessageId ? ready.revealedMessageId : self.revealedMessageId;
        tmp.cached = undefined !== ready.cached ? ready.cached : self.cached;
        tmp.hasFetched = undefined !== ready.hasFetched ? ready.hasFetched : self.hasFetched;
        tmp.error = undefined !== ready.error ? ready.error : self.error;
        tmp.onJumpComplete = undefined !== ready.onJumpComplete ? ready.onJumpComplete : self.onJumpComplete;
        tmp.initialScrollSequenceId = undefined !== ready.initialScrollSequenceId ? ready.initialScrollSequenceId : self.initialScrollSequenceId;
        tmp.suppressRowAnimationSequenceId = undefined !== ready.suppressRowAnimationSequenceId ? ready.suppressRowAnimationSequenceId : self.suppressRowAnimationSequenceId;
      }
      return tmp;
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "length",
    get() {
      return this._array.length;
    }
  };
  items[1] = obj;
  obj = {
    key: "toArray",
    value() {
      const items = [...this._array];
      return items;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "forEach",
    value(call) {
      let flag = arg2;
      if (arg2 === undefined) {
        flag = false;
      }
      const _array = this._array;
      if (flag) {
        let diff = _array.length - 1;
        if (diff >= 0) {
          if (false !== call.call(arg1, _array[diff], diff)) {
            const diff1 = diff - 1;
            while (diff1 >= 0) {
              diff = diff1;
              if (false === call.call(arg1, _array[diff1], diff1)) {
                break;
              }
            }
          }
        }
      } else {
        const item = _array.forEach(call, arg1);
      }
    }
  };
  items[4] = {
    key: "reduce",
    value(arg0, arg1) {
      const _array = this._array;
      return _array.reduce(arg0, arg1);
    }
  };
  items[5] = {
    key: "some",
    value(arg0, arg1) {
      const _array = this._array;
      return _array.some(arg0, arg1);
    }
  };
  items[6] = {
    key: "filter",
    value(arg0, arg1) {
      const _array = this._array;
      return _array.filter(arg0, arg1);
    }
  };
  items[7] = {
    key: "forAll",
    value(arg0, arg1) {
      const _before = this._before;
      const item = _before.forEach(arg0, arg1);
      const _array = this._array;
      const item1 = _array.forEach(arg0, arg1);
      const _after = this._after;
      const item2 = _after.forEach(arg0, arg1);
    }
  };
  items[8] = {
    key: "findOldest",
    value(arg0) {
      const self = this;
      let found = callback(closure_3[6]).find(this._before._messages, arg0);
      if (null == found) {
        found = callback(closure_3[6]).find(self._array, arg0);
        const arr2 = callback(closure_3[6]);
      }
      if (null == found) {
        found = callback(closure_3[6]).find(self._after._messages, arg0);
        const arr3 = callback(closure_3[6]);
      }
      return found;
    }
  };
  items[9] = {
    key: "findNewest",
    value(arg0) {
      const self = this;
      let findLastResult = callback(closure_3[6]).findLast(this._after._messages, arg0);
      if (null == findLastResult) {
        findLastResult = callback(closure_3[6]).findLast(self._array, arg0);
        const obj2 = callback(closure_3[6]);
      }
      if (null == findLastResult) {
        findLastResult = callback(closure_3[6]).findLast(self._before._messages, arg0);
        const obj3 = callback(closure_3[6]);
      }
      return findLastResult;
    }
  };
  items[10] = {
    key: "map",
    value(arg0, arg1) {
      const _array = this._array;
      return _array.map(arg0, arg1);
    }
  };
  items[11] = {
    key: "first",
    value() {
      return this._array[0];
    }
  };
  items[12] = {
    key: "last",
    value() {
      return this._array[this._array.length - 1];
    }
  };
  items[13] = {
    key: "get",
    value(arg0) {
      let flag = arg1;
      const self = this;
      if (arg1 === undefined) {
        flag = false;
      }
      let tmp2 = tmp;
      if (null == self._map[arg0]) {
        tmp2 = tmp;
        if (flag) {
          const _before = self._before;
          let value = _before.get(arg0);
          if (null == value) {
            const _after = self._after;
            value = _after.get(arg0);
          }
          tmp2 = value;
        }
      }
      return tmp2;
    }
  };
  items[14] = {
    key: "getByIndex",
    value(arg0) {
      return this._array[arg0];
    }
  };
  items[15] = {
    key: "getAfter",
    value(arg0) {
      const self = this;
      const value = this.get(arg0);
      if (null == value) {
        return null;
      } else {
        const _array = self._array;
        const index = _array.indexOf(value);
        let tmp3 = null;
        if (-1 !== index) {
          tmp3 = null;
          if (index !== self.length - 1) {
            tmp3 = self._array[index + 1];
          }
        }
        return tmp3;
      }
    }
  };
  items[16] = {
    key: "getManyAfter",
    value(arg0, arg1, arg2) {
      const self = this;
      const value = this.get(arg0);
      if (null == value) {
        return null;
      } else {
        const _array = self._array;
        const index = _array.indexOf(value);
        if (-1 === index) {
          return null;
        } else {
          const items = [];
          const sum = index + 1;
          if (sum < self.length) {
            let tmp3 = sum;
            if (-1 === arg1) {
              while (true) {
                let tmp4 = null == arg2;
                if (!tmp4) {
                  tmp4 = arg2(self._array[tmp3]);
                }
                if (tmp4) {
                  let arr = items.push(self._array[tmp3]);
                }
                let sum1 = tmp3 + 1;
                if (sum1 >= self.length) {
                  break;
                } else {
                  tmp3 = sum1;
                  if (tmp2) {
                    continue;
                  } else {
                    tmp3 = sum1;
                    if (items.length >= arg1) {
                      break;
                    }
                  }
                  continue;
                }
              }
            } else {
              tmp3 = sum;
            }
          }
          return items;
        }
      }
    }
  };
  items[17] = {
    key: "getManyBefore",
    value(arg0, arg1, arg2) {
      const self = this;
      const value = this.get(arg0);
      if (null == value) {
        return null;
      } else {
        const _array = self._array;
        const index = _array.indexOf(value);
        if (-1 === index) {
          return null;
        } else {
          const items = [];
          const diff = index - 1;
          if (diff >= 0) {
            let tmp4 = diff;
            if (-1 === arg1) {
              while (true) {
                let tmp5 = null == arg2;
                if (!tmp5) {
                  tmp5 = arg2(self._array[tmp4]);
                }
                if (tmp5) {
                  let arr = items.unshift(self._array[tmp4]);
                }
                let diff1 = tmp4 - 1;
                if (diff1 < 0) {
                  break;
                } else {
                  tmp4 = diff1;
                  if (tmp3) {
                    continue;
                  } else {
                    tmp4 = diff1;
                    if (items.length >= arg1) {
                      break;
                    }
                  }
                  continue;
                }
              }
            } else {
              tmp4 = diff;
            }
          }
          return items;
        }
      }
    }
  };
  items[18] = {
    key: "hasAnyAfter",
    value(arg0, arg1) {
      let num = arg2;
      const self = this;
      if (arg2 === undefined) {
        num = -1;
      }
      const value = self.get(arg0);
      if (null == value) {
        return false;
      } else {
        const _array = self._array;
        const index = _array.indexOf(value);
        if (-1 === index) {
          return false;
        } else {
          const sum = index + 1;
          if (sum < self.length) {
            let tmp4 = sum;
            if (-1 === num) {
              while (!arg1(self._array[tmp4])) {
                let sum1 = tmp4 + 1;
                if (sum1 < self.length) {
                  tmp4 = sum1;
                  if (tmp3) {
                    continue;
                  } else {
                    tmp4 = sum1;
                  }
                  continue;
                }
              }
              return true;
            } else {
              tmp4 = sum;
            }
          }
          return false;
        }
      }
    }
  };
  items[19] = {
    key: "has",
    value(arg0) {
      let flag = arg1;
      const self = this;
      if (arg1 === undefined) {
        flag = true;
      }
      let tmp = null != self._map[arg0];
      if (!tmp) {
        if (flag) {
          const _before = self._before;
          let hasItem = _before.has(arg0);
          if (!hasItem) {
            const _after = self._after;
            hasItem = _after.has(arg0);
          }
          flag = hasItem;
        }
        tmp = flag;
      }
      return tmp;
    }
  };
  items[20] = {
    key: "indexOf",
    value(arg0) {
      const ChannelMessages = arg0;
      let closure_1 = -1;
      const _array = this._array;
      const found = _array.find((id) => {
        let flag = id.id === id;
        if (flag) {
          let closure_1 = arg1;
          flag = true;
        }
        return flag;
      });
      return closure_1;
    }
  };
  items[21] = {
    key: "hasPresent",
    value() {
      const self = this;
      return this._after.length > 0 && self._after.wasAtEdge || !self.hasMoreAfter;
    }
  };
  items[22] = {
    key: "hasBeforeCached",
    value(arg0) {
      const self = this;
      if (this.length > 0) {
        if (self._before.length > 0) {
          const firstResult = self.first();
          let tmp3 = null != firstResult;
          if (tmp3) {
            tmp3 = firstResult.id === arg0;
          }
          return tmp3;
        }
      }
      return false;
    }
  };
  items[23] = {
    key: "hasAfterCached",
    value(arg0) {
      const self = this;
      if (this.length > 0) {
        if (self._after.length > 0) {
          const lastResult = self.last();
          let tmp3 = null != lastResult;
          if (tmp3) {
            tmp3 = lastResult.id === arg0;
          }
          return tmp3;
        }
      }
      return false;
    }
  };
  items[24] = {
    key: "update",
    value(arg0, arg1) {
      const self = this;
      const ChannelMessages = arg0;
      const tmp = this._map[arg0];
      if (null == tmp) {
        const _before = self._before;
        if (_before.has(arg0)) {
          let mutation = self.mutate((_before) => {
            _before = _before._before;
            return _before.update(_before, arg1);
          }, true);
        } else {
          const _after = self._after;
          mutation = self;
          if (_after.has(arg0)) {
            mutation = self.mutate((_after) => {
              _after = _after._after;
              return _after.update(_after, arg1);
            }, true);
          }
        }
        return mutation;
      } else {
        let closure_3 = arg1(tmp);
        return self.mutate((_map) => {
          let _array;
          let _array2;
          _map._map[tmp.id] = closure_3;
          ({ _array: _array2, _array } = _map);
          _array[_array2.indexOf(tmp)] = closure_3;
        }, true);
      }
    }
  };
  items[25] = {
    key: "replace",
    value(arg0, arg1) {
      const self = this;
      const ChannelMessages = arg0;
      const tmp = this._map[arg0];
      if (null == tmp) {
        const _before = self._before;
        if (_before.has(arg0)) {
          let mutation = self.mutate((_before) => _before._before.replace(_before, arg1), true);
        } else {
          const _after = self._after;
          mutation = self;
          if (_after.has(arg0)) {
            mutation = self.mutate((_after) => _after._after.replace(_after, arg1), true);
          }
        }
      } else {
        return self.mutate((_map) => {
          delete r2[r1];
          _map._map[arg1.id] = arg1;
          const _array = _map._array;
          _map._array[_array.indexOf(tmp)] = arg1;
        }, true);
      }
    }
  };
  items[26] = {
    key: "remove",
    value(arg0) {
      const ChannelMessages = arg0;
      return this.mutate((_array) => {
        delete r1[r2];
        _array = _array._array;
        _array._array = _array.filter((id) => id.id !== closure_0);
        const _before = _array._before;
        _before.remove(_array);
        const _after = _array._after;
        _after.remove(_array);
      }, true);
    }
  };
  items[27] = {
    key: "removeMany",
    value(arr) {
      const self = this;
      const ChannelMessages = this;
      let self2 = this;
      if (arr.some((arg0) => self.has(arg0))) {
        self2 = self.mutate((_array) => {
          const self = _array;
          _array(closure_3[6]).each(_array, (arg0) => {
            delete r1[r0];
          });
          _array = _array._array;
          _array._array = _array.filter((id) => -1 === closure_1.indexOf(id.id));
          const _before = _array._before;
          _before.removeMany(_array);
          const _after = _array._after;
          _after.removeMany(_array);
        }, true);
      }
      return self2;
    }
  };
  items[28] = {
    key: "merge",
    value(arg0) {
      let flag = arg1;
      let flag2 = arg2;
      const self = this;
      const ChannelMessages = arg0;
      if (arg1 === undefined) {
        flag = false;
      }
      if (flag2 === undefined) {
        flag2 = false;
      }
      return self.mutate((_merge) => {
        _merge._merge(_merge, flag, flag2);
      }, true);
    }
  };
  items[29] = {
    key: "_merge",
    value(arr) {
      let flag = arg1;
      let flag2 = arg2;
      const self = this;
      const ChannelMessages = this;
      if (arg1 === undefined) {
        flag = false;
      }
      if (flag2 === undefined) {
        flag2 = false;
      }
      const found = arr.filter((id) => {
        let _array;
        let _array2;
        self._map[id.id] = id;
        let flag = null == tmp;
        if (!flag) {
          ({ _array: _array2, _array } = self);
          _array[_array2.indexOf(tmp)] = id;
          flag = false;
        }
        return flag;
      });
      if (!flag2) {
        const items = [];
        if (flag) {
          HermesBuiltin.arraySpread(self._array, HermesBuiltin.arraySpread(found, 0));
          let tmp7 = items;
        } else {
          HermesBuiltin.arraySpread(found, HermesBuiltin.arraySpread(self._array, 0));
          tmp7 = items;
        }
        self._array = tmp7;
      } else {
        flag ? self._before : self._after.clear();
        const obj = flag ? self._before : self._after;
      }
    }
  };
  items[30] = {
    key: "mergeDelta",
    value() {
      let items = arg0;
      let items1 = arg1;
      let items2 = arg2;
      const self = this;
      if (arg0 === undefined) {
        items = [];
      }
      const ChannelMessages = items;
      if (items1 === undefined) {
        items1 = [];
      }
      if (items2 === undefined) {
        items2 = [];
      }
      return self.mutate((_before) => {
        _before = _before._before;
        _before.clear();
        const _after = _before._after;
        _after.clear();
        const items = new Set(items2);
        const item = items.forEach((id) => set.add(id.id));
        const item1 = items1.forEach((id) => set.add(id.id));
        const _array = _before._array;
        const found = _array.filter((id) => !set.has(id.id));
        const mapped = items.map((message) => set(closure_3[5]).createMessageRecord(message));
        const combined = found.concat(mapped, items1.map((message) => set(closure_3[5]).createMessageRecord(message)));
        _before._array = combined.sort((id, id2) => callback(closure_3[8]).compare(id.id, id2.id));
      });
    }
  };
  items[31] = {
    key: "_clearMessages",
    value() {
      this._array = [];
      this._map = {};
    }
  };
  items[32] = {
    key: "reset",
    value(arg0) {
      const ChannelMessages = arg0;
      return this.mutate((_before) => {
        _before._array = _before;
        _before._map = {};
        const item = _before.forEach((id) => {
          id._map[id.id] = id;
          return id;
        });
        _before = _before._before;
        _before.clear();
        const _after = _before._after;
        _after.clear();
      });
    }
  };
  items[33] = {
    key: "truncateTop",
    value(arg0) {
      let flag = arg1;
      const self = this;
      if (arg1 === undefined) {
        flag = true;
      }
      let ChannelMessages;
      const diff = self._array.length - arg0;
      ChannelMessages = diff;
      let mutation = self;
      if (diff > 0) {
        mutation = self.mutate((_map) => {
          let _array;
          let _before;
          let num = 0;
          if (0 < diff) {
            do {
              _map = _map._map;
              let id = _map._array[num].id;
              delete r4[r2];
              num = num + 1;
              let tmp = closure_0;
            } while (num < closure_0);
          }
          ({ _before, _array } = _map);
          _before.cache(_array.slice(0, diff), !_map.hasMoreBefore);
          _array = _map._array;
          _map._array = _array.slice(diff);
          _map.hasMoreBefore = true;
        }, flag);
      }
      return mutation;
    }
  };
  items[34] = {
    key: "truncateBottom",
    value(arg0) {
      return this;
    }
  };
  items[35] = {
    key: "jumpToPresent",
    value(arg0) {
      const ChannelMessages = arg0;
      return this.mutate((_after) => {
        _after = _after._after;
        const extractAllResult = _after.extractAll();
        _after.hasMoreAfter = false;
        const bound = Math.max(extractAllResult.length - _after, 0);
        const substr = extractAllResult.slice(bound);
        extractAllResult.splice(bound);
        const _before = _after._before;
        _before.cache(_after._array);
        const _before2 = _after._before;
        _before2.cache(extractAllResult);
        _after._clearMessages();
        _after._merge(substr);
        _after.hasMoreBefore = _after._before.length > 0;
        _after.jumped = true;
        _after.jumpTargetId = null;
        _after.jumpTargetOffset = 0;
        _after.jumpedToPresent = true;
        _after.jumpFlash = false;
        _after.jumpReturnTargetId = null;
        _after.jumpSequenceId = _after.jumpSequenceId + 1;
        _after.onJumpComplete = null;
        _after.ready = true;
        _after.loadingMore = false;
      }, true);
    }
  };
  items[36] = {
    key: "jumpToMessage",
    value(arg0) {
      let flash;
      let returnTargetId;
      const self = this;
      ({ messageId: closure_0, flash } = arg0);
      if (flash === undefined) {
        flash = true;
      }
      ({ offset: closure_2, returnTargetId } = arg0);
      if (returnTargetId === undefined) {
        returnTargetId = null;
      }
      ({ jumpType: closure_4, onJumpComplete: closure_5 } = arg0);
      return self.mutate((jumpSequenceId) => {
        jumpSequenceId.jumped = true;
        jumpSequenceId.jumpedToPresent = false;
        if (null != closure_4) {
          let ANIMATED = closure_4;
        } else {
          ANIMATED = callback(returnTargetId[7]).JumpType.ANIMATED;
        }
        jumpSequenceId.jumpType = ANIMATED;
        jumpSequenceId.jumpTargetId = callback;
        let num2 = 0;
        if (null != callback) {
          num2 = 0;
          if (null != closure_2) {
            num2 = closure_2;
          }
        }
        jumpSequenceId.jumpTargetOffset = num2;
        jumpSequenceId.jumpSequenceId = jumpSequenceId.jumpSequenceId + 1;
        let tmp4 = null;
        if (null != closure_5) {
          tmp4 = closure_5;
        }
        jumpSequenceId.onJumpComplete = tmp4;
        jumpSequenceId.jumpFlash = flash;
        jumpSequenceId.jumpReturnTargetId = returnTargetId;
        jumpSequenceId.ready = true;
        jumpSequenceId.loadingMore = false;
      }, false);
    }
  };
  items[37] = {
    key: "focusOnMessage",
    value(arg0) {
      const ChannelMessages = arg0;
      return this.mutate((focusSequenceId) => {
        focusSequenceId.focusTargetId = focusSequenceId;
        focusSequenceId.focusSequenceId = focusSequenceId.focusSequenceId + 1;
        focusSequenceId.ready = true;
        focusSequenceId.loadingMore = false;
      }, false);
    }
  };
  items[38] = {
    key: "loadFromCache",
    value(arg0, arg1) {
      const ChannelMessages = arg0;
      return this.mutate((_before) => {
        const arr = _before ? _before._before : _before._after;
        _before._merge(arr.extract(arg1), _before);
        if (_before) {
          _before.hasMoreBefore = tmp2;
        } else {
          _before.hasMoreAfter = tmp2;
        }
        _before.ready = true;
        _before.loadingMore = false;
      }, true);
    }
  };
  items[39] = {
    key: "truncate",
    value(arg0, arg1) {
      const self = this;
      if (this.length <= closure_7) {
        return self;
      } else if (arg0) {
        let truncateBottomResult = self.truncateBottom(closure_9);
      } else {
        truncateBottomResult = self;
        if (arg1) {
          truncateBottomResult = self.truncateTop(closure_9);
        }
      }
    }
  };
  items[40] = {
    key: "receiveMessage",
    value(nonce) {
      let flag = arg1;
      const self = this;
      if (arg1 === undefined) {
        flag = true;
      }
      let ChannelMessages;
      let value = null;
      if (null != nonce.nonce) {
        value = self.get(nonce.nonce, true);
      }
      if (null != value) {
        const author = nonce.author;
        let id;
        if (null != author) {
          id = author.id;
        }
        const author2 = value.author;
        let id1;
        if (null != author2) {
          id1 = author2.id;
        }
        if (id === id1) {
          if (null != nonce.nonce) {
            if (value.id === nonce.nonce) {
              const messageRecord = ChannelMessages(closure_3[5]).createMessageRecord(nonce);
              if (null != value.interactionData) {
                messageRecord.interactionData = value.interactionData;
              }
              return self.replace(nonce.nonce, messageRecord);
            }
          }
        }
      }
      if (self.hasMoreAfter) {
        if (self._after.wasAtEdge) {
          self._after.wasAtEdge = false;
        }
        return self;
      } else {
        let obj = ChannelMessages(closure_3[5]);
        const messageRecord1 = obj.createMessageRecord(nonce);
        ChannelMessages = messageRecord1;
        const lastResult = self.last();
        if (null != lastResult) {
          if (obj2.compare(nonce.id, lastResult.id) < 0) {
            obj = { location: "receiveMessage" };
            if (obj3.getConfig(obj).enabled) {
              let mutation = self.mutate((_map) => {
                let _array;
                let _array2;
                _map._map[messageRecord1.id] = messageRecord1;
                if (null != _map._map[closure_0.id]) {
                  ({ _array: _array2, _array } = _map);
                  _array[_array2.indexOf(tmp)] = messageRecord1;
                } else {
                  callback(closure_3[10]).insert(_map._array, messageRecord1, (id, id2) => callback(closure_3[8]).compare(id.id, id2.id));
                  const obj = callback(closure_3[10]);
                }
              }, true);
            }
            if (flag) {
              let truncateTopResult = mutation.truncateTop(closure_6, false);
            } else {
              truncateTopResult = mutation;
              if (self.length > closure_7) {
                truncateTopResult = mutation.truncateBottom(closure_6, false);
              }
            }
            return truncateTopResult;
          }
          const obj2 = callback(closure_3[8]);
        }
        const items = [messageRecord1];
        mutation = self.merge(items);
      }
    }
  };
  items[41] = {
    key: "receivePushNotification",
    value(nonce) {
      const self = this;
      let value = null;
      if (null != nonce.nonce) {
        value = self.get(nonce.nonce, true);
      }
      if (null != value) {
        return self;
      } else if (null != self.get(nonce.id, true)) {
        return self;
      } else {
        let obj = ChannelMessages(closure_3[11]);
        let tmp4 = !obj.isIOSPushNotificationRawPayloadFixExperimentEnabled();
        if (!tmp4) {
          tmp4 = !arg1;
        }
        obj = { ready: true, cached: tmp4 };
        const mutation = self.mutate(obj);
        const items = [callback3(self, nonce)];
        return mutation.merge(items);
      }
    }
  };
  items[42] = {
    key: "receiveReactionInAppNotification",
    value(nonce) {
      const self = this;
      let value = null;
      if (null != nonce.nonce) {
        value = self.get(nonce.nonce, true);
      }
      let mergeResult = self;
      if (null == value) {
        const mutation = self.mutate({ display: null, flexDirection: null });
        const items = [callback3(self, nonce)];
        mergeResult = mutation.merge(items);
      }
      return mergeResult;
    }
  };
  items[43] = {
    key: "loadStart",
    value(present) {
      const self = this;
      const obj = { loadingMore: true, jumped: null != present };
      present = undefined;
      if (null != present) {
        present = present.present;
      }
      obj.jumpedToPresent = null != present && present;
      let messageId;
      if (null != present) {
        messageId = present.messageId;
      }
      let tmp3 = null;
      if (null != messageId) {
        tmp3 = messageId;
      }
      obj.jumpTargetId = tmp3;
      let offset;
      if (null != present) {
        offset = present.offset;
      }
      let num = 0;
      if (null != offset) {
        num = offset;
      }
      obj.jumpTargetOffset = num;
      let returnMessageId;
      if (null != present) {
        returnMessageId = present.returnMessageId;
      }
      let tmp6 = null;
      if (null != returnMessageId) {
        tmp6 = returnMessageId;
      }
      obj.jumpReturnTargetId = tmp6;
      let onJumpComplete;
      if (null != present) {
        onJumpComplete = present.onJumpComplete;
      }
      let tmp8 = null;
      if (null != onJumpComplete) {
        tmp8 = onJumpComplete;
      }
      obj.onJumpComplete = tmp8;
      obj.ready = null == present && self.ready;
      return this.mutate(obj);
    }
  };
  items[44] = {
    key: "loadComplete",
    value(newMessages) {
      const self = this;
      const items = [...newMessages.newMessages];
      const isBefore = newMessages.isBefore;
      const isAfter = newMessages.isAfter;
      const jump = newMessages.jump;
      let tmp3 = null;
      if (null != jump) {
        tmp3 = jump;
      }
      const hasMoreBefore = newMessages.hasMoreBefore;
      const hasMoreAfter = newMessages.hasMoreAfter;
      const avoidInitialScroll = newMessages.avoidInitialScroll;
      const cached = newMessages.cached;
      let obj = callback(closure_3[6])(items);
      const reversed = obj.reverse();
      const valueResult = reversed.map((message) => callback(closure_3[5]).createMessageRecord(message)).value();
      if (null != isBefore && isBefore) {
        if (null == tmp3) {
          if (self.ready) {
            let mergeResult = self.merge(valueResult, tmp, true);
          }
          obj = { 0: "<string:1040334421>", 9223372036854775807: "<string:1040334338>" };
          let jumpType;
          if (null != tmp3) {
            jumpType = tmp3.jumpType;
          }
          if (null == jumpType) {
            jumpType = ChannelMessages(closure_3[7]).JumpType.ANIMATED;
          }
          obj.jumpType = jumpType;
          let flash;
          if (null != tmp3) {
            flash = tmp3.flash;
          }
          obj.jumpFlash = null != flash && flash;
          obj.jumped = null != tmp3;
          let present;
          if (null != tmp3) {
            present = tmp3.present;
          }
          obj.jumpedToPresent = null != present && present;
          let messageId;
          if (null != tmp3) {
            messageId = tmp3.messageId;
          }
          let tmp23 = null;
          if (null != messageId) {
            tmp23 = messageId;
          }
          obj.jumpTargetId = tmp23;
          let num2 = 0;
          if (null != tmp3) {
            num2 = 0;
            if (null != tmp3.messageId) {
              num2 = 0;
              if (null != tmp3.offset) {
                num2 = tmp3.offset;
              }
            }
          }
          obj.jumpTargetOffset = num2;
          if (null != tmp3) {
            if (!tmp6) {
              let jumpSequenceId = mergeResult.jumpSequenceId + 1;
            }
            obj.jumpSequenceId = jumpSequenceId;
            let returnMessageId;
            if (null != tmp3) {
              returnMessageId = tmp3.returnMessageId;
            }
            let tmp25 = null;
            if (null != returnMessageId) {
              tmp25 = returnMessageId;
            }
            obj.jumpReturnTargetId = tmp25;
            let onJumpComplete;
            if (null != tmp3) {
              onJumpComplete = tmp3.onJumpComplete;
            }
            let tmp27 = null;
            if (null != onJumpComplete) {
              tmp27 = onJumpComplete;
            }
            obj.onJumpComplete = tmp27;
            let hasMoreBefore2 = tmp4;
            if (null == tmp3) {
              hasMoreBefore2 = tmp4;
              if (tmp2) {
                hasMoreBefore2 = mergeResult.hasMoreBefore;
              }
            }
            obj.hasMoreBefore = hasMoreBefore2;
            let hasMoreAfter2 = tmp5;
            if (null == tmp3) {
              hasMoreAfter2 = tmp5;
              if (tmp) {
                hasMoreAfter2 = mergeResult.hasMoreAfter;
              }
            }
            obj.hasMoreAfter = hasMoreAfter2;
            obj.cached = tmp7;
            obj.hasFetched = newMessages.hasFetched;
            obj.error = false;
            const initialScrollSequenceId = mergeResult.initialScrollSequenceId;
            if (tmp16) {
              let sum = initialScrollSequenceId + 1;
            } else {
              sum = initialScrollSequenceId;
            }
            obj.initialScrollSequenceId = sum;
            const suppressRowAnimationSequenceId = mergeResult.suppressRowAnimationSequenceId;
            if (tmp16) {
              let sum1 = suppressRowAnimationSequenceId + 1;
            } else {
              sum1 = suppressRowAnimationSequenceId;
            }
            obj.suppressRowAnimationSequenceId = sum1;
            return mergeResult.mutate(obj);
          }
          jumpSequenceId = mergeResult.jumpSequenceId;
        }
      }
      const _array = self._array;
      const found = _array.filter((state) => state.state === constants.SENDING);
      const _array1 = self._array;
      const found1 = _array1.filter((state) => state.state === constants.SEND_FAILED);
      const resetResult = self.reset(valueResult);
      if (tmp9) {
        if (!tmp) {
          if (!tmp2) {
            let messageId1;
            if (null != tmp3) {
              messageId1 = tmp3.messageId;
            }
            if (null == messageId1) {
              let offset;
              if (null != tmp3) {
                offset = tmp3.offset;
              }
              if (null == offset) {
                let mergeResult1 = resetResult;
                if (found1.length > 0) {
                  const _HermesInternal = HermesInternal;
                  closure_11.info("loadComplete: merging with SEND_FAILED messages for channelId=" + self.channelId);
                  mergeResult1 = resetResult.merge(found1);
                }
                mergeResult = mergeResult1;
                if (found.length > 0) {
                  const _HermesInternal2 = HermesInternal;
                  closure_11.info("loadComplete: merging with SENDING messages for channelId=" + self.channelId);
                  mergeResult = mergeResult1.merge(found);
                }
              }
            }
          }
        }
      }
      closure_11.info("loadComplete: resetting state for channelId=" + self.channelId + ", sending.length=" + found.length);
      mergeResult = resetResult;
    }
  };
  items[45] = {
    key: "addCachedMessages",
    value(arr, cached) {
      const self = this;
      const ChannelMessages = this;
      let obj = ChannelMessages(closure_3[12]);
      const result = obj.requireSortedDescending(arr);
      const mapped = arr.map((arg0) => callback2(self, arg0));
      const reversed = mapped.reverse();
      const _array = this._array;
      const found = _array.filter((arg0) => {
        const self = arg0;
        return !reversed.some((id) => id.id === id.id);
      });
      const item = found.forEach((arg0) => callback(closure_3[10]).insert(reversed, arg0, (id, id2) => callback(closure_3[8]).compare(id.id, id2.id)));
      obj = { cached };
      const initialScrollSequenceId = self.initialScrollSequenceId;
      if (tmp4) {
        let sum = initialScrollSequenceId + 1;
      } else {
        sum = initialScrollSequenceId;
      }
      obj.initialScrollSequenceId = sum;
      return self.reset(reversed).mutate(obj);
    }
  };
  const items1 = [
    {
      key: "forEach",
      value(arg0) {
        const item = callback(closure_3[6]).forEach(ChannelMessages._channelMessages, arg0);
      }
    },
    {
      key: "get",
      value(arg0) {
        return ChannelMessages._channelMessages[arg0];
      }
    },
    {
      key: "hasPresent",
      value(arg0) {
        const value = ChannelMessages.get(arg0);
        return null != value && value.hasPresent();
      }
    },
    {
      key: "getOrCreate",
      value(channelId) {
        let tmp = ChannelMessages._channelMessages[channelId];
        if (null == tmp) {
          const prototype = ChannelMessages.prototype;
          const tmp6 = new ChannelMessages(channelId);
          ChannelMessages._channelMessages[channelId] = tmp6;
          tmp = tmp6;
        }
        return tmp;
      }
    },
    {
      key: "clear",
      value(arg0) {
        delete r1[r0];
      }
    },
    {
      key: "clearCache",
      value(arg0) {
        const self = this;
        if (null != ChannelMessages._channelMessages[arg0]) {
          const _before = tmp._before;
          _before.clear();
          const _after = tmp._after;
          _after.clear();
          self.commit(tmp);
        }
      }
    },
    {
      key: "commit",
      value(channelId) {
        ChannelMessages._channelMessages[channelId.channelId] = channelId;
      }
    }
  ];
  return callback(ChannelMessages, items, items1);
}();
tmp6._channelMessages = {};
const tmp3 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("lib/ChannelMessages.tsx");

export default tmp6;
export const flatMapChannelMessages = function flatMapChannelMessages(arr) {
  return arr.flatMap((_array) => _array._array);
};
