// Module ID: 10453
// Function ID: 80641
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 31, 10454, 4217, 566, 10456, 2]
// Exports: default

// Module 10453 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";

let require = arg1;
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
function useMissingActivities(arg0, arg1) {
  const _require = arg0;
  const dependencyMap = arg1;
  let items = [arg0, arg1];
  const tmp = first(stateFromStoresArray.useMemo(() => (function getMessagesWithActivities(closure_0, closure_1) {
    if (closure_1.isPrivate()) {
      const found = closure_0.filter((application) => {
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
      const items1 = [outer2_8, outer2_7];
      return items1;
    }
  })(closure_0, closure_1), items), 2);
  first = tmp[0];
  let items1 = [closure_5];
  const items2 = [first];
  stateFromStoresArray = _require(566).useStateFromStoresArray(items1, () => {
    let items = [];
    const item = first.forEach((author) => {
      const items = author;
      if (null != outer2_5.findActivity(author.author.id, (application_id) => {
        const application = author.application;
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
          const activity = author.activity;
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
  const items3 = [first, stateFromStoresArray];
  const items4 = [
    tmp[1],
    stateFromStoresArray.useMemo(() => (function makeActivitySubscriptions(first, stateFromStoresArray) {
      let closure_0 = stateFromStoresArray;
      if (0 === first.length) {
        return outer2_6;
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
          if (!(application.id in closure_0)) {
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
    })(first, stateFromStoresArray), items3)
  ];
  return items4;
}
let closure_6 = [];
let closure_7 = [];
let closure_8 = [];
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/activities/useSubscribeMissingActivities.tsx");

export default function useSubscribeMissingActivities(arg0, arg1) {
  let tmp = callback(useMissingActivities(arg0, arg1), 2);
  const require = tmp2;
  const items = [tmp[1]];
  const effect = React.useEffect(() => {
    let iter2;
    let tmp2;
    const tmp = outer1_9(tmp2);
    let iter = tmp();
    if (!iter.done) {
      do {
        let value = iter.value;
        tmp2 = outer1_4;
        if (!outer1_4.isSubscribed(value)) {
          let tmp3 = tmp2;
          let tmp4 = outer1_1;
          let obj = tmp2(outer1_1[5]);
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
