// Module ID: 10931
// Function ID: 10932
// Name: useDiscoverableApplicationStream
// Dependencies: [6852, 5085, 1072, 504, 2]
// Exports: default

// Module 10931 (useDiscoverableApplicationStream)
import Constants from "Constants" /* 1072 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6852 */;
import RelationshipStore from "RelationshipStore" /* 5085 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function getDiscoverableApplicationStream(userId, items) {
  let NONE;
  let obj;
  let obj2;
  let tmp = items;
  if (items === undefined) {
    items = [ApplicationStreamingStore, RelationshipStore];
    tmp = items;
  }
  [obj, obj2] = tmp;
  if (null != userId) {
    NONE = obj2.getRelationshipType(userId);
  } else {
    NONE = RelationshipTypes.NONE;
  }
  let anyDiscoverableStreamForUser = null;
  if (null != userId) {
    anyDiscoverableStreamForUser = obj.getAnyDiscoverableStreamForUser(userId);
  }
  let tmp6 = null;
  if (NONE !== RelationshipTypes.BLOCKED) {
    tmp6 = null;
    if (null != userId) {
      tmp6 = anyDiscoverableStreamForUser;
    }
  }
  return tmp6;
}
const RelationshipTypes = Constants.RelationshipTypes;
const result = size.fileFinishedImporting("modules/blocking/useDiscoverableApplicationStream.tsx");

export default function useDiscoverableApplicationStream(arg0) {
  let closure_0;
  _require = arg0;
  let items = [ApplicationStreamingStore, RelationshipStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const items = [ApplicationStreamingStore, RelationshipStore];
    return getDiscoverableApplicationStream(closure_0, items);
  }, items1);
};
export { getDiscoverableApplicationStream };
