// Module ID: 12199
// Function ID: 93752
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12199 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let importDefaultResult = importDefault(dependencyMap[5]);
let obj = { max: 500 };
importDefaultResult = new importDefaultResult(obj);
let tmp4 = (Store) => {
  class MessageActivityInviteCoverImageStore {
    constructor() {
      self = this;
      tmp = MessageActivityInviteCoverImageStore(this, MessageActivityInviteCoverImageStore);
      obj = closure_3(MessageActivityInviteCoverImageStore);
      tmp2 = closure_2;
      if (closure_6()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let closure_0 = MessageActivityInviteCoverImageStore;
  callback2(MessageActivityInviteCoverImageStore, Store);
  const items = [
    {
      key: "getCoverImageURL",
      value(messageId) {
        return closure_5.get(messageId.messageId);
      }
    }
  ];
  return callback(MessageActivityInviteCoverImageStore, items);
}(importDefault(dependencyMap[6]).Store);
tmp4.displayName = "MessageActivityInviteCoverImageStore";
obj = {
  SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL: function handleSetMessageActivityInviteCoverImageURL(arg0) {
    let coverImageURL;
    let messageId;
    ({ messageId, coverImageURL } = arg0);
    if (importDefaultResult.get(messageId) === coverImageURL) {
      return false;
    } else {
      const result = importDefaultResult.set(messageId, coverImageURL);
    }
  }
};
tmp4 = new tmp4(importDefault(dependencyMap[7]), obj);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/activities/MessageActivityInviteCoverImageStore.tsx");

export default tmp4;
