// Module ID: 4809
// Function ID: 42034
// Name: _isNativeReflectConstruct
// Dependencies: [5, 6, 7, 1891, 1884, 2, 6]

// Module 4809 (_isNativeReflectConstruct)
import asyncGeneratorStep from "asyncGeneratorStep";
import closure_1 from "_classCallCheck";
import _defineProperties from "_defineProperties";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import module_1884 from "module_1884";
import _classCallCheck from "_classCallCheck";

function _isNativeReflectConstruct() {
  let asyncGeneratorStep = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return asyncGeneratorStep;
  }
  const result = _isNativeReflectConstruct();
}
const result = _classCallCheck.fileFinishedImporting("records/ConnectedAccountRecord.tsx");

export default (arg0) => {
  class ConnectedAccountRecord {
    constructor(arg0) {
      self = this;
      tmp = ConnectedAccountRecord(this, ConnectedAccountRecord);
      obj = _createForOfIteratorHelperLoose(ConnectedAccountRecord);
      tmp2 = _defineProperties;
      if (closure_5()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = _createForOfIteratorHelperLoose;
        constructResult = Reflect.construct(obj, [], _createForOfIteratorHelperLoose(self).constructor);
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
  let asyncGeneratorStep = ConnectedAccountRecord;
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
}(require("keys"));
