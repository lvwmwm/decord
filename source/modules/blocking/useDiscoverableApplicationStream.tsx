// Module ID: 9104
// Function ID: 71382
// Name: getDiscoverableApplicationStream
// Dependencies: [4149, 3767, 653, 566, 2]
// Exports: default

// Module 9104 (getDiscoverableApplicationStream)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import { RelationshipTypes } from "ME";

const require = arg1;
function getDiscoverableApplicationStream(id) {
  let obj;
  let obj2;
  let tmp = arg1;
  if (arg1 === undefined) {
    const items = [_isNativeReflectConstruct, closure_3];
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
const result = require("ME").fileFinishedImporting("modules/blocking/useDiscoverableApplicationStream.tsx");

export default function useDiscoverableApplicationStream(arg0) {
  const _require = arg0;
  let items = [_isNativeReflectConstruct, closure_3];
  const items1 = [arg0];
  return _require(566).useStateFromStores(items, () => {
    const items = [outer1_2, outer1_3];
    return outer1_5(closure_0, items);
  }, items1);
};
export { getDiscoverableApplicationStream };
