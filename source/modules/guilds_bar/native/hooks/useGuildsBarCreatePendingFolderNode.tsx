// Module ID: 14763
// Function ID: 111298
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default

// Module 14763 (_createForOfIteratorHelperLoose)
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
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/guilds_bar/native/hooks/useGuildsBarCreatePendingFolderNode.tsx");

export default function useGuildsBarCreatePendingFolderNode() {
  let done;
  let obj = arg1(dependencyMap[3]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => obj.hasFetchedRequestToJoinGuilds);
  const arg1 = stateFromStores;
  const arr2 = importDefault(dependencyMap[4])();
  const items1 = [closure_5];
  const stateFromStores1 = arg1(dependencyMap[3]).useStateFromStores(items1, () => folderExpanded.isFolderExpanded(stateFromStores(closure_2[5]).SpecialGuildsNodeIds.PENDING_JOIN_REQUESTS_FOLDER));
  const items2 = [stateFromStores];
  const effect = React.useEffect(() => {
    if (!stateFromStores) {
      const requestToJoinGuilds = callback(closure_2[6]).fetchRequestToJoinGuilds();
      const obj = callback(closure_2[6]);
    }
  }, items2);
  if (arr2.length > 0) {
    obj = { folderId: arg1(dependencyMap[5]).SpecialGuildsNodeIds.PENDING_JOIN_REQUESTS_FOLDER };
    const intl = arg1(dependencyMap[8]).intl;
    obj.folderName = intl.string(arg1(dependencyMap[8]).t.scsU+l);
    obj.expanded = stateFromStores1;
    obj.guildIds = arr2;
    const folderNode = arg1(dependencyMap[7]).createFolderNode(obj);
    const tmp8 = _createForOfIteratorHelperLoose(arr2);
    let iter = tmp8();
    if (!iter.done) {
      do {
        let children = folderNode.children;
        let tmp9 = closure_0;
        let tmp10 = closure_2;
        let obj5 = closure_0(closure_2[7]);
        let arr = children.push(obj5.createGuildNode(iter.value, folderNode.id));
        let iter2 = tmp8();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
    obj = { expanded: stateFromStores1, pendingFolderNode: folderNode };
    return obj;
  } else {
    return { 1399044010: null, -1603952582: null };
  }
  const obj2 = arg1(dependencyMap[3]);
};
