// Module ID: 14934
// Function ID: 113830
// Name: _createForOfIteratorHelperLoose
// Dependencies: [31, 3948, 4971, 566, 10970, 14935, 9196, 4972, 1212, 2]
// Exports: default

// Module 14934 (_createForOfIteratorHelperLoose)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";

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
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guilds_bar/native/hooks/useGuildsBarCreatePendingFolderNode.tsx");

export default function useGuildsBarCreatePendingFolderNode() {
  let done;
  let obj = stateFromStores(566);
  const items = [_isNativeReflectConstruct];
  stateFromStores = obj.useStateFromStores(items, () => outer1_4.hasFetchedRequestToJoinGuilds);
  const arr2 = importDefault(10970)();
  const items1 = [closure_5];
  const stateFromStores1 = stateFromStores(566).useStateFromStores(items1, () => outer1_5.isFolderExpanded(stateFromStores(outer1_2[5]).SpecialGuildsNodeIds.PENDING_JOIN_REQUESTS_FOLDER));
  const items2 = [stateFromStores];
  const effect = React.useEffect(() => {
    if (!stateFromStores) {
      const requestToJoinGuilds = outer1_1(outer1_2[6]).fetchRequestToJoinGuilds();
      const obj = outer1_1(outer1_2[6]);
    }
  }, items2);
  if (arr2.length > 0) {
    obj = { folderId: stateFromStores(14935).SpecialGuildsNodeIds.PENDING_JOIN_REQUESTS_FOLDER };
    const intl = stateFromStores(1212).intl;
    obj.folderName = intl.string(stateFromStores(1212).t["scsU+l"]);
    obj.expanded = stateFromStores1;
    obj.guildIds = arr2;
    const folderNode = stateFromStores(4972).createFolderNode(obj);
    const tmp8 = _createForOfIteratorHelperLoose(arr2);
    let iter = tmp8();
    if (!iter.done) {
      do {
        let children = folderNode.children;
        let tmp9 = stateFromStores;
        let tmp10 = dependencyMap;
        let obj5 = stateFromStores(4972);
        let arr = children.push(obj5.createGuildNode(iter.value, folderNode.id));
        let iter2 = tmp8();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
    obj = { expanded: stateFromStores1, pendingFolderNode: folderNode };
    return obj;
  } else {
    return { expanded: false, pendingFolderNode: null };
  }
  const obj2 = stateFromStores(566);
};
