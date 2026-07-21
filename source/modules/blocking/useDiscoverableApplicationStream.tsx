// Module ID: 9057
// Function ID: 71102
// Name: getDiscoverableApplicationStream
// Dependencies: []
// Exports: default

// Module 9057 (getDiscoverableApplicationStream)
function getDiscoverableApplicationStream(id) {
  let obj;
  let obj2;
  let tmp = arg1;
  if (arg1 === undefined) {
    const items = [closure_2, closure_3];
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
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const RelationshipTypes = arg1(dependencyMap[2]).RelationshipTypes;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/blocking/useDiscoverableApplicationStream.tsx");

export default function useDiscoverableApplicationStream(arg0) {
  const arg1 = arg0;
  const items = [closure_2, closure_3];
  const items1 = [arg0];
  return arg1(dependencyMap[3]).useStateFromStores(items, () => {
    const items = [closure_2, closure_3];
    return callback(arg0, items);
  }, items1);
};
export { getDiscoverableApplicationStream };
