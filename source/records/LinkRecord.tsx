// Module ID: 7092
// Function ID: 56931
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 7092 (_isNativeReflectConstruct)
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
const Routes = arg1(dependencyMap[6]).Routes;
const tmp3 = (importDefaultResult) => {
  class LinkRecord {
    constructor(arg0) {
      self = this;
      tmp = LinkRecord(this, LinkRecord);
      obj = closure_3(LinkRecord);
      tmp2 = closure_2;
      if (closure_6()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_3;
        constructResult = Reflect.construct(obj, [], closure_3(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      ({ id: tmp6.id, path: tmp6.path, inviteCode: tmp6.inviteCode } = importDefaultResult);
      return tmp2Result;
    }
  }
  let closure_0 = LinkRecord;
  callback2(LinkRecord, importDefaultResult);
  let obj = {
    key: "fromPath",
    value(id) {
      return new LinkRecord({ id, path: id });
    }
  };
  const items = [obj, ];
  obj = {
    key: "fromInviteCode",
    value(inviteCode) {
      const obj = { id: "invite:" + inviteCode, path: closure_5.INVITE(inviteCode), inviteCode };
      return new LinkRecord({ id: "invite:" + inviteCode, path: closure_5.INVITE(inviteCode), inviteCode });
    }
  };
  items[1] = obj;
  return callback(LinkRecord, null, items);
}(importDefault(dependencyMap[5]));
const importDefaultResult = importDefault(dependencyMap[5]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("records/LinkRecord.tsx");

export default tmp3;
export const LinkRecord = tmp3;
