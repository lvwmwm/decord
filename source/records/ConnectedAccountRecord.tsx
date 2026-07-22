// Module ID: 4810
// Function ID: 42091
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4810 (_isNativeReflectConstruct)
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
const tmp2 = (arg0) => {
  class ConnectedAccountRecord {
    constructor(arg0) {
      self = this;
      tmp = ConnectedAccountRecord(this, ConnectedAccountRecord);
      obj = closure_3(ConnectedAccountRecord);
      tmp2 = closure_2;
      if (closure_5()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_3;
        constructResult = Reflect.construct(obj, [], closure_3(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      ({ id: tmp6.id, type: tmp6.type, name: tmp6.name } = arg0);
      tmp2Result.revoked = arg0.revoked || false;
      tmp2Result.integrations = arg0.integrations || [];
      tmp2Result.visibility = arg0.visibility || 0;
      tmp2Result.friendSync = arg0.friend_sync || false;
      tmp2Result.showActivity = arg0.show_activity || false;
      tmp2Result.verified = arg0.verified || false;
      tmp2Result.accessToken = arg0.access_token || null;
      tmp2Result.twoWayLink = arg0.two_way_link || false;
      tmp2Result.metadata = arg0.metadata || null;
      tmp2Result.metadataVisibility = arg0.metadata_visibility || 0;
      return tmp2Result;
    }
  }
  let closure_0 = ConnectedAccountRecord;
  callback2(ConnectedAccountRecord, arg0);
  const items = [
    {
      key: "toString",
      value() {
        return this.name;
      }
    }
  ];
  return callback(ConnectedAccountRecord, items);
}(importDefault(dependencyMap[5]));
const result = arg1(dependencyMap[6]).fileFinishedImporting("records/ConnectedAccountRecord.tsx");

export default tmp2;
