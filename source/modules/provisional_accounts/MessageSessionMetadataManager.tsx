// Module ID: 15933
// Function ID: 122205
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15933 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const AnalyticEvents = arg1(dependencyMap[5]).AnalyticEvents;
let tmp2 = (arg0) => {
  class MessageSessionMetadataManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_2(this, MessageSessionMetadataManager);
      items1 = [...items];
      obj = closure_5(MessageSessionMetadataManager);
      tmp2 = closure_4;
      if (closure_8()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items1, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      MessageSessionMetadataManager = tmp2Result;
      tmp2Result.actions = {
        MESSAGE_CREATE(arg0) {
              return tmp2Result.handleMessageCreate(arg0);
            },
        MESSAGE_UPDATE(arg0) {
              return tmp2Result.handleMessageUpdate(arg0);
            }
      };
      return tmp2Result;
    }
  }
  const importDefault = MessageSessionMetadataManager;
  callback2(MessageSessionMetadataManager, arg0);
  let obj = {
    key: "handleMessageCreate",
    value(message) {
      const result = this._trackIfSessionMetadataExists(message.message);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "handleMessageUpdate",
    value(message) {
      const result = this._trackIfSessionMetadataExists(message.message);
    }
  };
  items[1] = obj;
  obj = {
    key: "_getAuthorizedApplicationIds",
    value(authorized_application_ids) {
      return authorized_application_ids.authorized_application_ids;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "_trackIfSessionMetadataExists",
    value(session_metadata) {
      let author;
      const self = this;
      if (null != session_metadata.session_metadata) {
        let id;
        let obj = MessageSessionMetadataManager(closure_1[6]);
        obj = {};
        ({ id: obj2.message_id, channel_id: obj2.channel_id, author } = session_metadata);
        if (null != author) {
          id = author.id;
        }
        obj.author_id = id;
        obj.authorized_application_ids = self._getAuthorizedApplicationIds(session_metadata.session_metadata);
        obj.track(constants.MESSAGE_DISPATCH_SESSION_METADATA_FOUND, obj);
      }
    }
  };
  return callback(MessageSessionMetadataManager, items);
}(importDefault(dependencyMap[7]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/provisional_accounts/MessageSessionMetadataManager.tsx");

export default tmp2;
