// Module ID: 6714
// Function ID: 52178
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 6714 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let closure_0 = Symbol_iterator;
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
      closure_0 = tmp;
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
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
const EMPTY_STRING_SNOWFLAKE_ID = arg1(dependencyMap[5]).EMPTY_STRING_SNOWFLAKE_ID;
const tmp2 = () => {
  class KvMessage {
    constructor() {
      tmp = closure_1(this, KvMessage);
      return;
    }
  }
  let closure_0 = KvMessage;
  let obj = {
    key: "fromMessage",
    value(arg0, channelId, id, connectionId) {
      const tmp = KvMessage(KvMessage.deriveMemberUsers(arg0, id), 2);
      return { id: id.id, channelId, message: id, members: tmp[0], users: tmp[1], connectionId };
    }
  };
  const items = [obj, ];
  obj = {
    key: "deriveMemberUsers",
    value(arg0, author) {
      let iter3;
      author = author.author;
      let id;
      if (null != author) {
        id = author.id;
      }
      const items = [id, ];
      const interaction = author.interaction;
      let id1;
      if (null != interaction) {
        id1 = interaction.user.id;
      }
      items[1] = id1;
      const mentions = author.mentions;
      let mapped;
      if (null != mentions) {
        mapped = mentions.map((id) => id.id);
      }
      if (null == mapped) {
        mapped = [];
      }
      HermesBuiltin.arraySpread(mapped, 2);
      const items1 = [];
      const items2 = [];
      const tmp5 = callback2(new Set(items));
      const iter = tmp5();
      let iter2 = iter;
      if (!iter.done) {
        do {
          let value = iter2.value;
          if (null != value) {
            let tmp6 = closure_4;
            let user = closure_4.getUser(value);
            let tmp9 = arg0;
            let tmp8 = closure_3;
            if (null == arg0) {
              tmp9 = closure_5;
            }
            let trueMember = closure_3.getTrueMember(tmp9, value);
            if (null != user) {
              let arr = items2.push(user);
            }
            let tmp12 = user;
            let tmp13 = trueMember;
            if (null != trueMember) {
              arr = items1.push(trueMember);
              let tmp15 = user;
              let tmp16 = trueMember;
            }
          }
          iter3 = tmp5();
          iter2 = iter3;
        } while (!iter3.done);
      }
      const items3 = [items1, items2];
      return items3;
    }
  };
  items[1] = obj;
  return callback(KvMessage, null, items);
}();
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/app_database/modules/messages/KvMessage.tsx");

export const KvMessage = tmp2;
