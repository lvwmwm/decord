// Module ID: 12693
// Function ID: 98614
// Name: _createForOfIteratorHelperLoose
// Dependencies: [6, 7, 3768, 4142, 4351, 21, 2]

// Module 12693 (_createForOfIteratorHelperLoose)
import set from "set";
import _defineProperties from "_defineProperties";
import _callSuper from "_callSuper";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

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
let tmp2 = (() => {
  class PreviewData {
    constructor() {
      tmp = outer1_3(this, PreviewData);
      this.localNeeded = true;
      map = new Map();
      this.messages = map;
      return;
    }
  }
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
        tmp2 = value.message instanceof outer1_5;
      }
      if (!tmp2) {
        value.message = PreviewData(outer1_2[4]).createMessageRecord(value.message);
        const obj = PreviewData(outer1_2[4]);
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
          tmp4 = outer1_1(outer1_2[5]).compare(id.id, id) > 0;
          const obj = outer1_1(outer1_2[5]);
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
      const tmp = outer1_7(arg0);
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
            let obj = PreviewData(outer1_2[4]);
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
            tmp3 = str.message instanceof outer1_5;
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
})();
let result = require("_callSuper").fileFinishedImporting("modules/message_previews/PreviewData.tsx");

export const PreviewData = tmp2;
