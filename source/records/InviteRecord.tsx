// Module ID: 7458
// Function ID: 59917
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 7458 (_isNativeReflectConstruct)
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
const tmp2 = (arg0) => {
  class InviteRecord {
    constructor(arg0) {
      self = this;
      tmp = closure_2(this, InviteRecord);
      obj = closure_5(InviteRecord);
      tmp2 = closure_4;
      if (closure_7()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, [], closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.code = arg0.code || "";
      tmp2Result.temporary = arg0.temporary || false;
      tmp2Result.revoked = arg0.revoked || false;
      tmp2Result.uses = arg0.uses || 0;
      tmp2Result.maxUses = arg0.maxUses || 0;
      tmp2Result.maxAge = arg0.maxAge || 0;
      createdAt = arg0.createdAt;
      if (!createdAt) {
        tmp7 = globalThis;
        _Date = Date;
        prototype = Date.prototype;
        tmp8 = new.target;
        tmp9 = new.target;
        createdAt = new Date();
      }
      tmp2Result.createdAt = createdAt;
      ({ channel: tmp6.channel, guild: tmp6.guild } = arg0);
      tmp2Result.inviter = arg0.inviter || null;
      tmp2Result.targetType = arg0.targetType || null;
      tmp2Result.targetUser = arg0.targetUser || null;
      tmp2Result.targetApplication = arg0.targetApplication || null;
      tmp2Result.type = arg0.type || null;
      tmp2Result.flags = arg0.flags || 0;
      tmp2Result.roles = arg0.roles || [];
      return tmp2Result;
    }
  }
  const importDefault = InviteRecord;
  callback2(InviteRecord, arg0);
  let obj = {
    key: "isExpired",
    value() {
      const maxAge = this.maxAge;
      if (maxAge > 0) {
        const obj = InviteRecord(closure_1[6])(tmp.createdAt);
        const _Date = Date;
        if (addResult.isBefore(Date.now())) {
          return true;
        }
        const addResult = InviteRecord(closure_1[6])(tmp.createdAt).add(maxAge, "seconds");
      }
      return false;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getExpiresAt",
    value() {
      const self = this;
      let num = Infinity;
      if (this.maxAge > 0) {
        const obj = InviteRecord(closure_1[6])(self.createdAt);
        num = InviteRecord(closure_1[6])(self.createdAt).add(self.maxAge, "seconds").toDate();
        const addResult = InviteRecord(closure_1[6])(self.createdAt).add(self.maxAge, "seconds");
      }
      return num;
    }
  };
  items[1] = obj;
  obj = {
    key: "toString",
    value() {
      return this.code;
    }
  };
  items[2] = obj;
  const items1 = [
    {
      key: "createFromServer",
      value(max_uses) {
        let tmp = InviteRecord;
        const obj = {};
        const merged = Object.assign(max_uses);
        obj["maxUses"] = max_uses.max_uses;
        obj["maxAge"] = max_uses.max_age;
        const created_at = max_uses.created_at;
        let tmp4;
        if (null != created_at) {
          tmp4 = created_at;
        }
        obj["createdAt"] = InviteRecord(closure_1[6])(tmp4);
        obj["targetType"] = max_uses.target_type;
        obj["targetUser"] = max_uses.target_user;
        obj["targetApplication"] = max_uses.target_application;
        tmp = new tmp(obj);
        return tmp;
      }
    }
  ];
  return callback(InviteRecord, items, items1);
}(importDefault(dependencyMap[5]));
const result = arg1(dependencyMap[7]).fileFinishedImporting("records/InviteRecord.tsx");

export default tmp2;
