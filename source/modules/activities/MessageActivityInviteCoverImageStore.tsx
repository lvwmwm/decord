// Module ID: 12313
// Function ID: 95903
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1362, 566, 686, 2]

// Module 12313 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import importDefaultResult from "priv";

function _isNativeReflectConstruct() {
  let initialize = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return initialize;
  }
  const result = _isNativeReflectConstruct();
}
let obj = { max: 500 };
importDefaultResult = new importDefaultResult(obj);
let tmp4 = ((Store) => {
  class MessageActivityInviteCoverImageStore {
    constructor() {
      self = this;
      tmp = MessageActivityInviteCoverImageStore(this, MessageActivityInviteCoverImageStore);
      obj = outer1_3(MessageActivityInviteCoverImageStore);
      tmp2 = outer1_2;
      if (outer1_6()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(MessageActivityInviteCoverImageStore, Store);
  const items = [
    {
      key: "getCoverImageURL",
      value(messageId) {
        return outer1_5.get(messageId.messageId);
      }
    }
  ];
  return callback(MessageActivityInviteCoverImageStore, items);
})(require("initialize").Store);
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
tmp4 = new tmp4(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/activities/MessageActivityInviteCoverImageStore.tsx");

export default tmp4;
