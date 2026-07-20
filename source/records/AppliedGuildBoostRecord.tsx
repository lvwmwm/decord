// Module ID: 4025
// Function ID: 33531
// Name: _isNativeReflectConstruct
// Dependencies: [5, 6, 7, 1891, 1884, 2, 6]

// Module 4025 (_isNativeReflectConstruct)
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
const result = _classCallCheck.fileFinishedImporting("records/AppliedGuildBoostRecord.tsx");

export default (arg0) => {
  class AppliedGuildBoostRecord {
    constructor(arg0) {
      self = this;
      tmp = AppliedGuildBoostRecord(this, AppliedGuildBoostRecord);
      obj = _createForOfIteratorHelperLoose(AppliedGuildBoostRecord);
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
      ({ id: tmp6.id, guildId: tmp6.guildId, userId: tmp6.userId, user: tmp6.user, ended: tmp6.ended } = arg0);
      endsAt = null;
      if (null != arg0.endsAt) {
        endsAt = arg0.endsAt;
      }
      tmp2Result.endsAt = endsAt;
      return tmp2Result;
    }
  }
  let asyncGeneratorStep = AppliedGuildBoostRecord;
  callback2(AppliedGuildBoostRecord, arg0);
  const items = [
    {
      key: "createFromServer",
      value(id) {
        let tmp = AppliedGuildBoostRecord;
        const obj = { id: id.id, guildId: id.guild_id };
        if (null != id.user) {
          let user_id = id.user.id;
        } else {
          user_id = id.user_id;
        }
        obj.userId = user_id;
        ({ user: obj.user, ended: obj.ended } = id);
        let date = null;
        if (null != id.ends_at) {
          date = null;
          if ("" !== id.ends_at) {
            const _Date = Date;
            date = new Date(id.ends_at);
          }
        }
        obj.endsAt = date;
        tmp = new tmp(obj);
        return tmp;
      }
    }
  ];
  return callback(AppliedGuildBoostRecord, null, items);
}(require("keys"));
