// Module ID: 10442
// Function ID: 80567
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default

// Module 10442 (_createForOfIteratorHelperLoose)
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
function useMissingActivities(arg0, arg1) {
  arg1 = arg0;
  const dependencyMap = arg1;
  const items = [arg0, arg1];
  const tmp = callback(React.useMemo(() => function getMessagesWithActivities(arr, isPrivate) {
    if (isPrivate.isPrivate()) {
      const found = arr.filter((application) => {
        application = application.application;
        let id;
        if (null != application) {
          id = application.id;
        }
        let tmp2 = null != id;
        if (tmp2) {
          const activity = application.activity;
          let party_id;
          if (null != activity) {
            party_id = activity.party_id;
          }
          tmp2 = null != party_id;
        }
        return tmp2;
      });
      const items = [found, found.map((id) => id.id)];
      return items;
    } else {
      const items1 = [closure_8, closure_7];
      return items1;
    }
  }(arg0, arg1), items), 2);
  const first = tmp[0];
  const callback = first;
  const items1 = [closure_5];
  const items2 = [first];
  const stateFromStoresArray = arg1(dependencyMap[4]).useStateFromStoresArray(items1, () => {
    const items = [];
    const arg0 = items;
    const item = first.forEach((author) => {
      const items = author;
      if (null != closure_5.findActivity(author.author.id, (application_id) => {
        const application = application_id.application;
        let id;
        if (null != application) {
          id = application.id;
        }
        let tmp2 = application_id.application_id === id;
        if (tmp2) {
          const party = application_id.party;
          let id1;
          if (null != party) {
            id1 = party.id;
          }
          const activity = application_id.activity;
          let party_id;
          if (null != activity) {
            party_id = activity.party_id;
          }
          tmp2 = id1 === party_id;
        }
        return tmp2;
      }, null, true)) {
        items.push(author.id);
      }
    });
    return items;
  }, items2);
  const React = stateFromStoresArray;
  const items3 = [first, stateFromStoresArray];
  const items4 = [
    tmp[1],
    React.useMemo(() => function makeActivitySubscriptions(first, stateFromStoresArray) {
      if (0 === first.length) {
        return closure_6;
      } else {
        const items = [];
        const item = first.forEach((application) => {
          application = application.application;
          if (null != application) {
            const id = application.id;
          }
          const activity = application.activity;
          if (null != activity) {
            const party_id = activity.party_id;
          }
          if (!(application.id in arg1)) {
            if (null != id) {
              if (null != party_id) {
                const timestamp = application.timestamp;
                const obj = { userId: application.author.id, applicationId: id, partyId: party_id };
                ({ id: obj.messageId, channel_id: obj.channelId } = application);
                obj.inviteTime = timestamp.getTime();
                items.push(obj);
              }
            }
          }
        });
        return items;
      }
    }(first, stateFromStoresArray), items3)
  ];
  return items4;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = [];
let closure_7 = [];
let closure_8 = [];
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/activities/useSubscribeMissingActivities.tsx");

export default function useSubscribeMissingActivities(arg0, arg1) {
  const tmp = callback(useMissingActivities(arg0, arg1), 2);
  arg1 = tmp2;
  const items = [tmp[1]];
  const effect = React.useEffect(() => {
    let iter2;
    let tmp2;
    const tmp = callback(tmp2);
    let iter = tmp();
    if (!iter.done) {
      do {
        let value = iter.value;
        tmp2 = closure_4;
        if (!closure_4.isSubscribed(value)) {
          let tmp3 = closure_0;
          let tmp4 = closure_1;
          let obj = closure_0(closure_1[5]);
          let subscription = obj.subscribe(value);
        }
        iter2 = tmp();
        iter = iter2;
      } while (!iter2.done);
    }
  }, items);
  const items1 = [tmp[0], tmp[1]];
  return items1;
};
