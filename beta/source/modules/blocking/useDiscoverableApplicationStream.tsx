// Module ID: 10337
// Function ID: 10338
// Name: useDiscoverableApplicationStream
// Dependencies: [4858, 4479, 1074, 504, 2]
// Exports: default

// Module 10337 (useDiscoverableApplicationStream)
import Constants from "Constants" /* 1074 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4858 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
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
