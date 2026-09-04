// Module ID: 10809
// Function ID: 10810
// Name: getDiscoverableApplicationStream
// Dependencies: [4503, 4130, 673, 586, 2]
// Exports: default

// Module 10809 (getDiscoverableApplicationStream)
import closure_2 from "reset" /* 4503 */;
import closure_3 from "markAllUserIdListsStale" /* 4130 */;
import { RelationshipTypes } from "ME" /* 673 */;

const require = arg1;
function getDiscoverableApplicationStream(id, items) {
  let tmp = items;
  if (items === undefined) {
    items = [closure_2, closure_3];
    tmp = items;
  }
  [obj, obj2] = tmp;
  if (null != id) {
    let NONE = obj2.getRelationshipType(id);
  } else {
    NONE = RelationshipTypes.NONE;
  }
  let anyDiscoverableStreamForUser = null;
  if (null != id) {
    anyDiscoverableStreamForUser = obj.getAnyDiscoverableStreamForUser(id);
  }
  let tmp6 = null;
  if (NONE !== RelationshipTypes.BLOCKED) {
    tmp6 = null;
    if (null != id) {
      tmp6 = anyDiscoverableStreamForUser;
    }
  }
  return tmp6;
}
const result = require("set").fileFinishedImporting("modules/blocking/useDiscoverableApplicationStream.tsx");

export default function useDiscoverableApplicationStream(arg0) {
  const _require = arg0;
  let items = [closure_2, closure_3];
  const items1 = [arg0];
  return _require(586).useStateFromStores(items, () => {
    const items = [closure_1_2, closure_1_3];
    return closure_1_5(closure_0, items);
  }, items1);
};
export { getDiscoverableApplicationStream };
