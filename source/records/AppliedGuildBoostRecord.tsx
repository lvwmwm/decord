// Module ID: 4025
// Function ID: 33538
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4025 (_isNativeReflectConstruct)
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
  class AppliedGuildBoostRecord {
    constructor(arg0) {
      self = this;
      tmp = AppliedGuildBoostRecord(this, AppliedGuildBoostRecord);
      obj = closure_3(AppliedGuildBoostRecord);
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
      ({ id: tmp6.id, guildId: tmp6.guildId, userId: tmp6.userId, user: tmp6.user, ended: tmp6.ended } = arg0);
      endsAt = null;
      if (null != arg0.endsAt) {
        endsAt = arg0.endsAt;
      }
      tmp2Result.endsAt = endsAt;
      return tmp2Result;
    }
  }
  let closure_0 = AppliedGuildBoostRecord;
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
}(importDefault(dependencyMap[5]));
const result = arg1(dependencyMap[6]).fileFinishedImporting("records/AppliedGuildBoostRecord.tsx");

export default tmp2;
