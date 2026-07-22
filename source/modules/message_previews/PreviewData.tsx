// Module ID: 12528
// Function ID: 96137
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 12528 (_createForOfIteratorHelperLoose)
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
let closure_6 = importDefault(dependencyMap[3]);
const tmp2 = () => {
  class PreviewData {
    constructor() {
      tmp = closure_3(this, PreviewData);
      this.localNeeded = true;
      map = new Map();
      this.messages = map;
      return;
    }
  }
  const arg1 = PreviewData;
  let obj = {
    key: "isLatest",
    value(arg0, arg1) {
      return this.messageGeneration(arg0, arg1) === arg1;
    }
  };
  const items = [obj, , , , , , , , , ];
  obj = {
    key: "messageGeneration",
    value(arg0, arg1) {
      let self = this;
      const messages = this.messages;
      let str = messages.get(arg0);
      if (null == str) {
        return -Infinity;
      } else {
        if (str.generation !== arg1) {
          const messages2 = self.messages;
          const obj = {};
          const merged = Object.assign(str);
          str = "generation";
          obj["generation"] = arg1;
          self = messages2.set(arg0, obj);
          let generation = arg1;
        }
        generation = str.generation;
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "messageId",
    value(arg0) {
      const messages = this.messages;
      const value = messages.get(arg0);
      let id;
      if (null != value) {
        const message = value.message;
        if (null != message) {
          id = message.id;
        }
      }
      let tmp3 = null;
      if (null != id) {
        tmp3 = id;
      }
      return tmp3;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "messageRecord",
    value(arg0) {
      const messages = this.messages;
      const value = messages.get(arg0);
      let tmp2 = null == value || null == value.message;
      if (!tmp2) {
        tmp2 = value.message instanceof closure_5;
      }
      if (!tmp2) {
        value.message = PreviewData(closure_2[4]).createMessageRecord(value.message);
        const obj = PreviewData(closure_2[4]);
      }
      let message;
      if (null != value) {
        message = value.message;
      }
      let tmp7 = null;
      if (null != message) {
        tmp7 = message;
      }
      return tmp7;
    }
  };
  items[4] = {
    key: "has",
    value(arg0) {
      const messages = this.messages;
      return messages.has(arg0);
    }
  };
  items[5] = {
    key: "put",
    value(arg0, message, generation) {
      const messages = this.messages;
      const result = messages.set(arg0, { message, generation });
    }
  };
  items[6] = {
    key: "putNew",
    value(arg0, id) {
      const self = this;
      const messages = this.messages;
      const value = messages.get(arg0);
      let tmp2 = null != id;
      if (tmp2) {
        id = undefined;
        if (null != value) {
          const message = value.message;
          if (null != message) {
            id = message.id;
          }
        }
        let tmp4 = null == id;
        if (!tmp4) {
          tmp4 = callback(closure_2[5]).compare(id.id, id) > 0;
          const obj = callback(closure_2[5]);
        }
        tmp2 = tmp4;
      }
      if (tmp2) {
        self.put(arg0, id, arg2);
      }
    }
  };
  items[7] = {
    key: "putMany",
    value(arg0, arg1) {
      let done;
      const self = this;
      const tmp = callback3(arg0);
      let iter = tmp();
      if (!iter.done) {
        do {
          let value = iter.value;
          let putResult = self.put(value.channel_id, value, arg1);
          let iter2 = tmp();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
    }
  };
  items[8] = {
    key: "update",
    value(id) {
      let self = this;
      if (null != id.id) {
        if (null != id.channel_id) {
          const channel_id = id.channel_id;
          const messages2 = self.messages;
          let str = messages2.get(channel_id);
          id = undefined;
          if (null != str) {
            const message = str.message;
            if (null != message) {
              id = message.id;
            }
          }
          if (id === id.id) {
            let obj = PreviewData(closure_2[4]);
            if (tmp3) {
              let updateMessageRecordResult = obj.updateMessageRecord(str.message, id);
            } else {
              updateMessageRecordResult = obj.updateServerMessage(str.message, id);
            }
            const messages = self.messages;
            obj = {};
            const merged = Object.assign(str);
            str = "message";
            obj["message"] = updateMessageRecordResult;
            self = messages.set(channel_id, obj);
            const tmp3 = str.message instanceof closure_5;
          }
        }
      }
    }
  };
  items[9] = {
    key: "delete",
    value(arg0) {
      const messages = this.messages;
      messages.delete(arg0);
    }
  };
  return callback(PreviewData, items);
}();
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/message_previews/PreviewData.tsx");

export const PreviewData = tmp2;
