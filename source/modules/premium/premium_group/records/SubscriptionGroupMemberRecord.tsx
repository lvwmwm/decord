// Module ID: 12302
// Function ID: 94280
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12302 (_isNativeReflectConstruct)
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
let closure_5 = importDefault(dependencyMap[6]);
const obj = { PRIMARY: 1, [1]: "PRIMARY", MEMBER: 2, [2]: "MEMBER" };
const importDefaultResult = importDefault(dependencyMap[5]);
const tmp3 = (importDefaultResult) => {
  class SubscriptionGroupMemberRecord {
    constructor(arg0) {
      self = this;
      tmp = SubscriptionGroupMemberRecord(this, SubscriptionGroupMemberRecord);
      obj = closure_3(SubscriptionGroupMemberRecord);
      tmp2 = closure_2;
      if (closure_7()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_3;
        constructResult = Reflect.construct(obj, [], closure_3(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp7 = new closure_5(importDefaultResult.user);
      tmp2Result.user = tmp7;
      ({ member_type: tmp6.member_type, accepted_at: tmp6.accepted_at } = importDefaultResult);
      return tmp2Result;
    }
  }
  let closure_0 = SubscriptionGroupMemberRecord;
  callback2(SubscriptionGroupMemberRecord, importDefaultResult);
  let obj = {
    key: "isPrimary",
    value() {
      return this.member_type === constants.PRIMARY;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "isMember",
    value() {
      let tmp = this.member_type === constants.MEMBER;
      if (tmp) {
        tmp = null != this.accepted_at;
      }
      return tmp;
    }
  };
  items[1] = obj;
  obj = {
    key: "isInvited",
    value() {
      let tmp = this.member_type === constants.MEMBER;
      if (tmp) {
        tmp = null == this.accepted_at;
      }
      return tmp;
    }
  };
  items[2] = obj;
  const items1 = [
    {
      key: "createFromServer",
      value(user) {
        return new SubscriptionGroupMemberRecord(user);
      }
    }
  ];
  return callback(SubscriptionGroupMemberRecord, items, items1);
}(importDefault(dependencyMap[5]));
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/premium/premium_group/records/SubscriptionGroupMemberRecord.tsx");

export default tmp3;
export const SubscriptionMemberTypes = obj;
