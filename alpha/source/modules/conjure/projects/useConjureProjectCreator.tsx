// Module ID: 12763
// Function ID: 12764
// Name: useConjureProjectCreator
// Dependencies: [19, 1384, 10831, 1114, 3865, 12764, 504, 12598, 5063, 2]
// Exports: default, getConjureProjectCreatorLabel

// Module 12763 (useConjureProjectCreator)
import intl3 from "intl" /* 1114 */;
import _modDef3865 from "module_3865" /* 3865 */;
import UserUtils from "UserUtils" /* 5063 */;
import conjureMessageAuthors from "conjureMessageAuthors" /* 12598 */;
import ListUtils from "ListUtils" /* 12764 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1384 */;
import ConjureChatStore from "ConjureChatStore" /* 10831 */;
import size from "module_2" /* 2 */;

let set;

function useConjureProjectPeople(stateFromStores) {
  let stateFromStoresArray;
  let stateFromStoresArray1;
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let owner_user_id;
  if (stateFromStores != null) {
    owner_user_id = stateFromStores.owner_user_id;
  }
  let obj = id(stateFromStoresArray[6]);
  let items = [ConjureChatStore];
  const items1 = [id, owner_user_id];
  stateFromStoresArray = obj.useStateFromStoresArray(items, function() {
    if (null == id) {
      return [];
    } else {
      const messages = ConjureChatStore.getMessages(tmp);
      const _Set = Set;
      const self = this;
      const self2 = this;
      const flatMapResult = messages.flatMap((user_id) => {
        if (null != user_id.user_id) {
          if (user_id.user_id !== owner_user_id) {
            const items = [user_id.user_id];
          }
          return [];
        }
      });
      let items = [];
      set = new Set(flatMapResult.reverse());
      HermesBuiltin.arraySpread(items, set, 0);
      return items;
    }
  }, items1);
  const items2 = [owner_user_id, stateFromStoresArray];
  const effect = stateFromStores.useEffect(() => {
    if (null != owner_user_id) {
      const obj = conjureMessageAuthors;
      const messageAuthor = obj.requestMessageAuthor(tmp);
      const item = stateFromStoresArray.forEach(conjureMessageAuthors.requestMessageAuthor);
    }
  }, items2);
  const items3 = [stateFromStoresArray1];
  const items4 = [owner_user_id];
  const obj2 = id(stateFromStoresArray[6]);
  stateFromStores = obj2.useStateFromStores(items3, () => {
    let user = null;
    if (null != owner_user_id) {
      user = UserStore.getUser(tmp);
    }
    return user;
  }, items4);
  const items5 = [stateFromStoresArray1];
  const items6 = [stateFromStoresArray];
  const obj3 = id(stateFromStoresArray[6]);
  stateFromStoresArray1 = obj3.useStateFromStoresArray(items5, () => {
    let user;
    const mapped = stateFromStoresArray.map((item) => user.getUser(item));
    return mapped.filter((item) => null != item);
  }, items6);
  const items7 = [stateFromStores, stateFromStoresArray1];
  return stateFromStores.useMemo(() => {
    let tmp = stateFromStores;
    if (stateFromStores == null) {
      tmp = null;
    }
    return { creator: tmp, collaborators: stateFromStoresArray1 };
  }, items7);
}
const result = size.fileFinishedImporting("modules/conjure/projects/useConjureProjectCreator.tsx");

export default function useConjureProjectCreator(stateFromStores) {
  const tmp = useConjureProjectPeople(stateFromStores);
  const creator = tmp.creator;
  const collaborators = tmp.collaborators;
  const items = [creator, collaborators];
  return react.useMemo(() => {
    let formatToPlainStringResult;
    let tmp4Result;
    let tmp2 = null;
    if (null != creator) {
      let obj = { creator, collaborators, label: formatToPlainStringResult };
      const obj2 = UserUtils;
      const name = obj2.getName(tmp);
      const mapped = collaborators.map((item) => {
        const obj = creator(closure_1_2[8]);
        return obj.getName(item);
      });
      if (0 === mapped.length) {
        const intl2 = tmp4(1114).intl;
        const obj3 = { creator: name };
        formatToPlainStringResult = intl2.formatToPlainString(_modDef3865.t5RWBS, obj3);
      } else {
        const intl = tmp4(1114).intl;
        const formatToPlainString = intl.formatToPlainString;
        const obj4 = { creator: name, collaborators: tmp4Result.getListSummaryLabel(mapped) };
        const prop = _modDef3865["b5uCe/"];
        tmp4Result = ListUtils;
        formatToPlainStringResult = formatToPlainString(prop, obj4);
      }
      tmp2 = obj;
    }
    return tmp2;
  }, items);
};
export function getConjureProjectCreatorLabel(creator, names) {
  let formatToPlainStringResult;
  let obj2;
  if (0 === names.length) {
    const intl2 = intl3.intl;
    const obj3 = { creator };
    formatToPlainStringResult = intl2.formatToPlainString(_modDef3865.t5RWBS, obj3);
  } else {
    const intl = intl3.intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj = { creator, collaborators: obj2.getListSummaryLabel(names) };
    const prop = _modDef3865["b5uCe/"];
    obj2 = ListUtils;
    formatToPlainStringResult = formatToPlainString(prop, obj);
  }
  return formatToPlainStringResult;
}
export { useConjureProjectPeople };
