// Module ID: 12295
// Function ID: 94245
// Name: _isNativeReflectConstruct
// Dependencies: [1348, 1917, 1838, 2, 5, 57, 4359, 1849]

// Module 12295 (_isNativeReflectConstruct)
import closure_0 from "_isNativeReflectConstruct";
import closure_1 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import keys from "keys";
import asyncGeneratorStep from "asyncGeneratorStep";
import closure_5 from "_isNativeReflectConstruct";
import importDefaultResult from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
const obj = { PRIMARY: 1, [1]: "PRIMARY", MEMBER: 2, [2]: "MEMBER" };
const result = _isNativeReflectConstruct.fileFinishedImporting("modules/premium/premium_group/records/SubscriptionGroupMemberRecord.tsx");

export default (importDefaultResult) => {
  class SubscriptionGroupMemberRecord {
    constructor(arg0) {
      self = this;
      tmp = SubscriptionGroupMemberRecord(this, SubscriptionGroupMemberRecord);
      obj = keys(SubscriptionGroupMemberRecord);
      tmp2 = _createForOfIteratorHelperLoose;
      if (closure_7()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = keys;
        constructResult = Reflect.construct(obj, [], keys(self).constructor);
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
}(require("_slicedToArray"));
export const SubscriptionMemberTypes = obj;
