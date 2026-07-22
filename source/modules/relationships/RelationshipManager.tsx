// Module ID: 16045
// Function ID: 123183
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16045 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleRelationshipAdd(relationship) {
  relationship = relationship.relationship;
  if (!tmp) {
    const AccessibilityAnnouncer = arg1(dependencyMap[6]).AccessibilityAnnouncer;
    const intl = arg1(dependencyMap[7]).intl;
    const obj = { username: relationship.user.username };
    AccessibilityAnnouncer.announce(intl.formatToPlainString(arg1(dependencyMap[7]).t.zH0kC7, obj));
    const result = importAll(dependencyMap[8]).showPendingNotification(relationship.user);
    const obj2 = importAll(dependencyMap[8]);
  }
}
function handleFriendRequestAccepted(user) {
  user = user.user;
  const AccessibilityAnnouncer = arg1(dependencyMap[6]).AccessibilityAnnouncer;
  const intl = arg1(dependencyMap[7]).intl;
  AccessibilityAnnouncer.announce(intl.formatToPlainString(arg1(dependencyMap[7]).t./+7xky, { username: user.username }));
  const result = importAll(dependencyMap[8]).showAcceptedNotification(user);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const RelationshipTypes = arg1(dependencyMap[5]).RelationshipTypes;
let tmp2 = (arg0) => {
  class RelationshipManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_4(this, RelationshipManager);
      items1 = [...items];
      obj = closure_6(RelationshipManager);
      tmp2 = closure_5;
      if (closure_9()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      obj = { RELATIONSHIP_ADD: closure_10, FRIEND_REQUEST_ACCEPTED: closure_11 };
      tmp2Result.actions = obj;
      return tmp2Result;
    }
  }
  const arg1 = RelationshipManager;
  callback2(RelationshipManager, arg0);
  return callback(RelationshipManager);
}(importDefault(dependencyMap[9]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/relationships/RelationshipManager.tsx");

export default tmp2;
