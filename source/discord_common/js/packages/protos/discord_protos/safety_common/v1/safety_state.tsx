// Module ID: 1868
// Function ID: 20784
// Name: _callSuper
// Dependencies: [57, 6, 7, 15, 17, 18, 1284, 1312, 1869, 1313, 2]

// Module 1868 (_callSuper)
import _slicedToArray from "_slicedToArray";
import module_1284 from "module_1284";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

const require = arg1;
function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const obj = callback2(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(obj, items, callback2(arg0).constructor);
  } else {
    constructResult = obj.apply(arg0, items);
  }
  return _possibleConstructorReturn(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let obj = { REASON_UNSPECIFIED: 0, [0]: "REASON_UNSPECIFIED", DISABLED_SUSPICIOUS_ACTIVITY: 1, [1]: "DISABLED_SUSPICIOUS_ACTIVITY", SMITE_REMOVE_EMAIL_VERIFICATION: 2, [2]: "SMITE_REMOVE_EMAIL_VERIFICATION", USER_REQUIRED_VERIFICATION_INTERVENTIONS_CLIENT: 3, [3]: "USER_REQUIRED_VERIFICATION_INTERVENTIONS_CLIENT", ACTIVE_ASSIGNMENT_COMPLETED: 4, [4]: "ACTIVE_ASSIGNMENT_COMPLETED", ACTIVE_ASSIGNMENT_CREATED: 5, [5]: "ACTIVE_ASSIGNMENT_CREATED", DEFERRED_ASSIGNMENT_CREATED: 6, [6]: "DEFERRED_ASSIGNMENT_CREATED", DEFERRED_ASSIGNMENT_UPGRADED_TO_ACTIVE: 7, [7]: "DEFERRED_ASSIGNMENT_UPGRADED_TO_ACTIVE", DEFERRED_ASSIGNMENT_CANCELLED: 8, [8]: "DEFERRED_ASSIGNMENT_CANCELLED", ASSIGNMENT_STATE_REPAIRED: 9, [9]: "ASSIGNMENT_STATE_REPAIRED", MANUAL_PERMANENT_BAN: 10, [10]: "MANUAL_PERMANENT_BAN", SAFETY_SYSTEM_UNBAN: 11, [11]: "SAFETY_SYSTEM_UNBAN", GENERIC_AUTOMATED_SAFETY_ACTION: 12, [12]: "GENERIC_AUTOMATED_SAFETY_ACTION", GENERIC_MANUAL_SAFETY_ACTION: 13, [13]: "GENERIC_MANUAL_SAFETY_ACTION", BANNED_USER_BACKFILL: 14, [14]: "BANNED_USER_BACKFILL" };
obj = { ANNOTATION_UNSPECIFIED: 0, [0]: "ANNOTATION_UNSPECIFIED", SPAMMER: 1, [1]: "SPAMMER", SELF_DELETED: 2, [2]: "SELF_DELETED", SELF_DISABLED: 3, [3]: "SELF_DISABLED", UNDERAGE_DELETED: 4, [4]: "UNDERAGE_DELETED", SAFETY_POLICY_VIOLATION: 5, [5]: "SAFETY_POLICY_VIOLATION", INACTIVITY_DELETED: 6, [6]: "INACTIVITY_DELETED", GENERIC_DELETED: 7, [7]: "GENERIC_DELETED" };
let tmp2 = ((MessageType) => {
  class NormalState$Type {
    constructor() {
      tmp = outer1_3(this, NormalState$Type);
      items = ["discord_protos.safety_common.v1.NormalState"];
      items[1] = [];
      return outer1_15(this, NormalState$Type, items);
    }
  }
  callback3(NormalState$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, NormalState$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = NormalState$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = NormalState$Type(outer1_1[6]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(arg0, arg1, arg2, arg3) {
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(arg0, arg1, writeUnknownFields) {
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = NormalState$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, arg0, arg1);
      }
      return arg1;
    }
  };
  items[2] = obj;
  return callback(NormalState$Type, items);
})(require("module_1284").MessageType);
tmp2 = new tmp2();
let closure_10 = tmp2;
let tmp4 = ((MessageType) => {
  class RestrictedState$Type {
    constructor() {
      tmp = outer1_3(this, RestrictedState$Type);
      obj = { no: 1, name: "restricted_until", kind: "message" };
      obj.T = function T() {
        return RestrictedState$Type(outer2_1[7]).Timestamp;
      };
      items = [];
      items[0] = obj;
      items1 = ["discord_protos.safety_common.v1.RestrictedState"];
      items1[1] = items;
      return outer1_15(this, RestrictedState$Type, items1);
    }
  }
  callback3(RestrictedState$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, RestrictedState$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = RestrictedState$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = RestrictedState$Type(outer1_1[6]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp7;
      let tmp8;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          let tmp26 = RestrictedState$Type;
          let tmp27 = outer1_1;
          let Timestamp = RestrictedState$Type(outer1_1[7]).Timestamp;
          let tmp28 = Timestamp;
          let tmp29 = pos;
          let tmp30 = readUnknownField;
          obj.restrictedUntil = Timestamp.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.restrictedUntil);
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp19 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp20 = tmp7;
            let tmp21 = tmp8;
            let prototype = _Error.prototype;
            let tmp22 = new.target;
            let tmp23 = new.target;
            _Error = new _Error("Unknown field " + tmp7 + " (wire type " + tmp8 + ") for " + self.typeName);
            let tmp25 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp8);
            tmp10 = readUnknownField;
            tmp11 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp12 = RestrictedState$Type;
                let tmp13 = outer1_1;
                onRead = RestrictedState$Type(outer1_1[6]).UnknownFieldHandler.onRead;
              }
              let tmp14 = obj;
              let tmp15 = tmp7;
              let tmp16 = tmp8;
              let tmp17 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp7, tmp8, skipResult);
              tmp10 = readUnknownField;
              tmp11 = skipResult;
            }
          }
        }
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(restrictedUntil, tag, writeUnknownFields) {
      if (restrictedUntil.restrictedUntil) {
        const Timestamp = RestrictedState$Type(outer1_1[7]).Timestamp;
        const tagResult = tag.tag(1, RestrictedState$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined = Timestamp.internalBinaryWrite(restrictedUntil.restrictedUntil, tag.tag(1, RestrictedState$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = Timestamp.internalBinaryWrite(restrictedUntil.restrictedUntil, tag.tag(1, RestrictedState$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = RestrictedState$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, restrictedUntil, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(RestrictedState$Type, items);
})(require("module_1284").MessageType);
tmp4 = new tmp4();
let closure_11 = tmp4;
let tmp6 = ((MessageType) => {
  class DeferredActionState$Type {
    constructor() {
      tmp = outer1_3(this, DeferredActionState$Type);
      obj = { no: 1, name: "action_deferred_until", kind: "message" };
      obj.T = function T() {
        return DeferredActionState$Type(outer2_1[7]).Timestamp;
      };
      items = [];
      items[0] = obj;
      items1 = ["discord_protos.safety_common.v1.DeferredActionState"];
      items1[1] = items;
      return outer1_15(this, DeferredActionState$Type, items1);
    }
  }
  callback3(DeferredActionState$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, DeferredActionState$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = DeferredActionState$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = DeferredActionState$Type(outer1_1[6]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp7;
      let tmp8;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          let tmp26 = DeferredActionState$Type;
          let tmp27 = outer1_1;
          let Timestamp = DeferredActionState$Type(outer1_1[7]).Timestamp;
          let tmp28 = Timestamp;
          let tmp29 = pos;
          let tmp30 = readUnknownField;
          obj.actionDeferredUntil = Timestamp.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.actionDeferredUntil);
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp19 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp20 = tmp7;
            let tmp21 = tmp8;
            let prototype = _Error.prototype;
            let tmp22 = new.target;
            let tmp23 = new.target;
            _Error = new _Error("Unknown field " + tmp7 + " (wire type " + tmp8 + ") for " + self.typeName);
            let tmp25 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp8);
            tmp10 = readUnknownField;
            tmp11 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp12 = DeferredActionState$Type;
                let tmp13 = outer1_1;
                onRead = DeferredActionState$Type(outer1_1[6]).UnknownFieldHandler.onRead;
              }
              let tmp14 = obj;
              let tmp15 = tmp7;
              let tmp16 = tmp8;
              let tmp17 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp7, tmp8, skipResult);
              tmp10 = readUnknownField;
              tmp11 = skipResult;
            }
          }
        }
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(actionDeferredUntil, tag, writeUnknownFields) {
      if (actionDeferredUntil.actionDeferredUntil) {
        const Timestamp = DeferredActionState$Type(outer1_1[7]).Timestamp;
        const tagResult = tag.tag(1, DeferredActionState$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined = Timestamp.internalBinaryWrite(actionDeferredUntil.actionDeferredUntil, tag.tag(1, DeferredActionState$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = Timestamp.internalBinaryWrite(actionDeferredUntil.actionDeferredUntil, tag.tag(1, DeferredActionState$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = DeferredActionState$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, actionDeferredUntil, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(DeferredActionState$Type, items);
})(require("module_1284").MessageType);
tmp6 = new tmp6();
let closure_12 = tmp6;
let tmp8 = ((MessageType) => {
  class TempBannedState$Type {
    constructor() {
      tmp = outer1_3(this, TempBannedState$Type);
      obj = { no: 1, name: "banned_until", kind: "message" };
      obj.T = function T() {
        return TempBannedState$Type(outer2_1[7]).Timestamp;
      };
      items = [, , ];
      items[0] = obj;
      obj = { no: 2, name: "classification_types", kind: "enum", repeat: 1 };
      obj.T = function T() {
        const items = ["discord_protos.safety_common.v1.ClassificationType", TempBannedState$Type(outer2_1[8]).ClassificationType];
        return items;
      };
      items[1] = obj;
      obj1 = { no: 3, name: "banned_at", kind: "message" };
      obj1.T = function T() {
        return TempBannedState$Type(outer2_1[7]).Timestamp;
      };
      items[2] = obj1;
      items1 = ["discord_protos.safety_common.v1.TempBannedState"];
      items1[1] = items;
      return outer1_15(this, TempBannedState$Type, items1);
    }
  }
  callback3(TempBannedState$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { classificationTypes: [] };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, TempBannedState$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = TempBannedState$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = TempBannedState$Type(outer1_1[6]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp8;
      let tmp9;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp6 = outer1_2;
        let tmp7 = outer1_2(pos.tag(), 2);
        [tmp8, tmp9] = tmp7;
        if (1 === tmp8) {
          let tmp38 = TempBannedState$Type;
          let tmp39 = outer1_1;
          let Timestamp2 = TempBannedState$Type(outer1_1[7]).Timestamp;
          let tmp40 = Timestamp2;
          let tmp41 = pos;
          let tmp42 = readUnknownField;
          obj.bannedUntil = Timestamp2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.bannedUntil);
          let tmp11 = tmp3;
          let tmp12 = tmp4;
          let tmp13 = tmp5;
        } else if (2 === tmp8) {
          let tmp33 = TempBannedState$Type;
          let tmp34 = outer1_1;
          if (tmp9 === TempBannedState$Type(outer1_1[6]).WireType.LengthDelimited) {
            let sum1 = pos.int32() + pos.pos;
            tmp12 = tmp4;
            tmp13 = tmp5;
            tmp11 = sum1;
            if (pos.pos < sum1) {
              do {
                let classificationTypes = obj.classificationTypes;
                let arr = classificationTypes.push(pos.int32());
                tmp11 = sum1;
                tmp12 = tmp4;
                tmp13 = tmp5;
                pos = pos.pos;
              } while (pos < sum1);
            }
          } else {
            let classificationTypes1 = obj.classificationTypes;
            arr = classificationTypes1.push(pos.int32());
            tmp11 = tmp3;
            tmp12 = tmp4;
            tmp13 = tmp5;
          }
        } else if (3 === tmp8) {
          let tmp28 = TempBannedState$Type;
          let tmp29 = outer1_1;
          let Timestamp = TempBannedState$Type(outer1_1[7]).Timestamp;
          let tmp30 = Timestamp;
          let tmp31 = pos;
          let tmp32 = readUnknownField;
          obj.bannedAt = Timestamp.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.bannedAt);
          tmp11 = tmp3;
          tmp12 = tmp4;
          tmp13 = tmp5;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp21 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp22 = tmp8;
            let tmp23 = tmp9;
            let prototype = _Error.prototype;
            let tmp24 = new.target;
            let tmp25 = new.target;
            _Error = new _Error("Unknown field " + tmp8 + " (wire type " + tmp9 + ") for " + self.typeName);
            let tmp27 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp9);
            tmp11 = tmp3;
            tmp12 = readUnknownField;
            tmp13 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp14 = TempBannedState$Type;
                let tmp15 = outer1_1;
                onRead = TempBannedState$Type(outer1_1[6]).UnknownFieldHandler.onRead;
              }
              let tmp16 = obj;
              let tmp17 = tmp8;
              let tmp18 = tmp9;
              let tmp19 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp8, tmp9, skipResult);
              tmp11 = tmp3;
              tmp12 = readUnknownField;
              tmp13 = skipResult;
            }
          }
        }
        tmp3 = tmp11;
        tmp4 = tmp12;
        tmp5 = tmp13;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(bannedUntil, tag, writeUnknownFields) {
      let length;
      if (bannedUntil.bannedUntil) {
        const Timestamp = TempBannedState$Type(outer1_1[7]).Timestamp;
        const tagResult = tag.tag(1, TempBannedState$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined = Timestamp.internalBinaryWrite(bannedUntil.bannedUntil, tag.tag(1, TempBannedState$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = Timestamp.internalBinaryWrite(bannedUntil.bannedUntil, tag.tag(1, TempBannedState$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (bannedUntil.classificationTypes.length) {
        tag.tag(2, TempBannedState$Type(outer1_1[6]).WireType.LengthDelimited).fork();
        let num6 = 0;
        if (0 < bannedUntil.classificationTypes.length) {
          do {
            let int32Result = tag.int32(bannedUntil.classificationTypes[num6]);
            num6 = num6 + 1;
            length = bannedUntil.classificationTypes.length;
          } while (num6 < length);
        }
        const joined1 = tag.join();
        const tagResult1 = tag.tag(2, TempBannedState$Type(outer1_1[6]).WireType.LengthDelimited);
      }
      if (bannedUntil.bannedAt) {
        const Timestamp2 = TempBannedState$Type(outer1_1[7]).Timestamp;
        const tagResult2 = tag.tag(3, TempBannedState$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined2 = Timestamp2.internalBinaryWrite(bannedUntil.bannedAt, tag.tag(3, TempBannedState$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = Timestamp2.internalBinaryWrite(bannedUntil.bannedAt, tag.tag(3, TempBannedState$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = TempBannedState$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, bannedUntil, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(TempBannedState$Type, items);
})(require("module_1284").MessageType);
tmp8 = new tmp8();
let closure_13 = tmp8;
let tmp10 = ((MessageType) => {
  class BannedState$Type {
    constructor() {
      tmp = outer1_3(this, BannedState$Type);
      obj = { no: 1, name: "classification_types", kind: "enum", repeat: 1 };
      obj.T = function T() {
        const items = ["discord_protos.safety_common.v1.ClassificationType", BannedState$Type(outer2_1[8]).ClassificationType];
        return items;
      };
      items = [, ];
      items[0] = obj;
      obj = { no: 2, name: "banned_at", kind: "message" };
      obj.T = function T() {
        return BannedState$Type(outer2_1[7]).Timestamp;
      };
      items[1] = obj;
      items1 = ["discord_protos.safety_common.v1.BannedState"];
      items1[1] = items;
      return outer1_15(this, BannedState$Type, items1);
    }
  }
  callback3(BannedState$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { classificationTypes: [] };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, BannedState$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = BannedState$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = BannedState$Type(outer1_1[6]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp8;
      let tmp9;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp6 = outer1_2;
        let tmp7 = outer1_2(pos.tag(), 2);
        [tmp8, tmp9] = tmp7;
        if (1 === tmp8) {
          let tmp33 = BannedState$Type;
          let tmp34 = outer1_1;
          if (tmp9 === BannedState$Type(outer1_1[6]).WireType.LengthDelimited) {
            let sum1 = pos.int32() + pos.pos;
            let tmp12 = tmp4;
            let tmp13 = tmp5;
            let tmp11 = sum1;
            if (pos.pos < sum1) {
              do {
                let classificationTypes = obj.classificationTypes;
                let arr = classificationTypes.push(pos.int32());
                tmp11 = sum1;
                tmp12 = tmp4;
                tmp13 = tmp5;
                pos = pos.pos;
              } while (pos < sum1);
            }
          } else {
            let classificationTypes1 = obj.classificationTypes;
            arr = classificationTypes1.push(pos.int32());
            tmp11 = tmp3;
            tmp12 = tmp4;
            tmp13 = tmp5;
          }
        } else if (2 === tmp8) {
          let tmp28 = BannedState$Type;
          let tmp29 = outer1_1;
          let Timestamp = BannedState$Type(outer1_1[7]).Timestamp;
          let tmp30 = Timestamp;
          let tmp31 = pos;
          let tmp32 = readUnknownField;
          obj.bannedAt = Timestamp.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.bannedAt);
          tmp11 = tmp3;
          tmp12 = tmp4;
          tmp13 = tmp5;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp21 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp22 = tmp8;
            let tmp23 = tmp9;
            let prototype = _Error.prototype;
            let tmp24 = new.target;
            let tmp25 = new.target;
            _Error = new _Error("Unknown field " + tmp8 + " (wire type " + tmp9 + ") for " + self.typeName);
            let tmp27 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp9);
            tmp11 = tmp3;
            tmp12 = readUnknownField;
            tmp13 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp14 = BannedState$Type;
                let tmp15 = outer1_1;
                onRead = BannedState$Type(outer1_1[6]).UnknownFieldHandler.onRead;
              }
              let tmp16 = obj;
              let tmp17 = tmp8;
              let tmp18 = tmp9;
              let tmp19 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp8, tmp9, skipResult);
              tmp11 = tmp3;
              tmp12 = readUnknownField;
              tmp13 = skipResult;
            }
          }
        }
        tmp3 = tmp11;
        tmp4 = tmp12;
        tmp5 = tmp13;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(classificationTypes, tag, writeUnknownFields) {
      let length;
      if (classificationTypes.classificationTypes.length) {
        tag.tag(1, BannedState$Type(outer1_1[6]).WireType.LengthDelimited).fork();
        let num3 = 0;
        if (0 < classificationTypes.classificationTypes.length) {
          do {
            let int32Result = tag.int32(classificationTypes.classificationTypes[num3]);
            num3 = num3 + 1;
            length = classificationTypes.classificationTypes.length;
          } while (num3 < length);
        }
        const joined = tag.join();
        const tagResult = tag.tag(1, BannedState$Type(outer1_1[6]).WireType.LengthDelimited);
      }
      if (classificationTypes.bannedAt) {
        const Timestamp = BannedState$Type(outer1_1[7]).Timestamp;
        const tagResult1 = tag.tag(2, BannedState$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined1 = Timestamp.internalBinaryWrite(classificationTypes.bannedAt, tag.tag(2, BannedState$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = Timestamp.internalBinaryWrite(classificationTypes.bannedAt, tag.tag(2, BannedState$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = BannedState$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, classificationTypes, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(BannedState$Type, items);
})(require("module_1284").MessageType);
tmp10 = new tmp10();
let closure_14 = tmp10;
let tmp12 = ((MessageType) => {
  class SafetyState$Type {
    constructor() {
      tmp = outer1_3(this, SafetyState$Type);
      obj = { no: 101, name: "normal", kind: "message", oneof: "state" };
      obj.T = function T() {
        return outer2_10;
      };
      items = [, , , , , , , ];
      items[0] = obj;
      obj = { no: 102, name: "restricted", kind: "message", oneof: "state" };
      obj.T = function T() {
        return outer2_11;
      };
      items[1] = obj;
      obj1 = { no: 103, name: "deferred_action", kind: "message", oneof: "state" };
      obj1.T = function T() {
        return outer2_12;
      };
      items[2] = obj1;
      obj2 = { no: 104, name: "temp_banned", kind: "message", oneof: "state" };
      obj2.T = function T() {
        return outer2_13;
      };
      items[3] = obj2;
      obj3 = { no: 105, name: "banned", kind: "message", oneof: "state" };
      obj3.T = function T() {
        return outer2_14;
      };
      items[4] = obj3;
      obj4 = { no: 1, name: "reason", kind: "enum" };
      obj4.T = function T() {
        const items = ["discord_protos.safety_common.v1.SafetyStateReason", outer2_8];
        return items;
      };
      items[5] = obj4;
      obj5 = { no: 2, name: "annotations", kind: "enum", repeat: 1 };
      obj5.T = function T() {
        const items = ["discord_protos.safety_common.v1.SafetyAnnotations", outer2_9];
        return items;
      };
      items[6] = obj5;
      obj6 = { no: 3, name: "last_mutation_id", kind: "message" };
      obj6.T = function T() {
        return SafetyState$Type(outer2_1[9]).UInt64Value;
      };
      items[7] = obj6;
      items1 = ["discord_protos.safety_common.v1.SafetyState"];
      items1[1] = items;
      return outer1_15(this, SafetyState$Type, items1);
    }
  }
  callback3(SafetyState$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { state: { oneofKind: undefined }, reason: 0, annotations: [] };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, SafetyState$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = SafetyState$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = SafetyState$Type(outer1_1[6]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp8;
      let tmp9;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp6 = outer1_2;
        let tmp7 = outer1_2(pos.tag(), 2);
        [tmp8, tmp9] = tmp7;
        if (101 === tmp8) {
          obj = { oneofKind: "normal" };
          let tmp54 = outer1_10;
          let tmp55 = outer1_10;
          let tmp56 = pos;
          let tmp57 = readUnknownField;
          obj.normal = outer1_10.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.state.normal);
          obj.state = obj;
          let tmp11 = tmp3;
          let tmp12 = tmp4;
          let tmp13 = tmp5;
        } else if (102 === tmp8) {
          let obj1 = { oneofKind: "restricted" };
          let tmp50 = outer1_11;
          let tmp51 = outer1_11;
          let tmp52 = pos;
          let tmp53 = readUnknownField;
          obj1.restricted = outer1_11.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.state.restricted);
          obj.state = obj1;
          tmp11 = tmp3;
          tmp12 = tmp4;
          tmp13 = tmp5;
        } else if (103 === tmp8) {
          let obj2 = { oneofKind: "deferredAction" };
          let tmp46 = outer1_12;
          let tmp47 = outer1_12;
          let tmp48 = pos;
          let tmp49 = readUnknownField;
          obj2.deferredAction = outer1_12.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.state.deferredAction);
          obj.state = obj2;
          tmp11 = tmp3;
          tmp12 = tmp4;
          tmp13 = tmp5;
        } else if (104 === tmp8) {
          let obj3 = { oneofKind: "tempBanned" };
          let tmp42 = outer1_13;
          let tmp43 = outer1_13;
          let tmp44 = pos;
          let tmp45 = readUnknownField;
          obj3.tempBanned = outer1_13.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.state.tempBanned);
          obj.state = obj3;
          tmp11 = tmp3;
          tmp12 = tmp4;
          tmp13 = tmp5;
        } else if (105 === tmp8) {
          obj = { oneofKind: "banned" };
          let tmp38 = outer1_14;
          let tmp39 = outer1_14;
          let tmp40 = pos;
          let tmp41 = readUnknownField;
          obj.banned = outer1_14.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.state.banned);
          obj.state = obj;
          tmp11 = tmp3;
          tmp12 = tmp4;
          tmp13 = tmp5;
        } else if (1 === tmp8) {
          obj.reason = pos.int32();
          tmp11 = tmp3;
          tmp12 = tmp4;
          tmp13 = tmp5;
        } else if (2 === tmp8) {
          let tmp33 = SafetyState$Type;
          let tmp34 = outer1_1;
          if (tmp9 === SafetyState$Type(outer1_1[6]).WireType.LengthDelimited) {
            let sum1 = pos.int32() + pos.pos;
            tmp12 = tmp4;
            tmp13 = tmp5;
            tmp11 = sum1;
            if (pos.pos < sum1) {
              do {
                let annotations = obj.annotations;
                let arr = annotations.push(pos.int32());
                tmp11 = sum1;
                tmp12 = tmp4;
                tmp13 = tmp5;
                pos = pos.pos;
              } while (pos < sum1);
            }
          } else {
            let annotations1 = obj.annotations;
            arr = annotations1.push(pos.int32());
            tmp11 = tmp3;
            tmp12 = tmp4;
            tmp13 = tmp5;
          }
        } else if (3 === tmp8) {
          let tmp28 = SafetyState$Type;
          let tmp29 = outer1_1;
          let UInt64Value = SafetyState$Type(outer1_1[9]).UInt64Value;
          let tmp30 = UInt64Value;
          let tmp31 = pos;
          let tmp32 = readUnknownField;
          obj.lastMutationId = UInt64Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.lastMutationId);
          tmp11 = tmp3;
          tmp12 = tmp4;
          tmp13 = tmp5;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp21 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp22 = tmp8;
            let tmp23 = tmp9;
            let prototype = _Error.prototype;
            let tmp24 = new.target;
            let tmp25 = new.target;
            _Error = new _Error("Unknown field " + tmp8 + " (wire type " + tmp9 + ") for " + self.typeName);
            let tmp27 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp9);
            tmp11 = tmp3;
            tmp12 = readUnknownField;
            tmp13 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp14 = SafetyState$Type;
                let tmp15 = outer1_1;
                onRead = SafetyState$Type(outer1_1[6]).UnknownFieldHandler.onRead;
              }
              let tmp16 = obj;
              let tmp17 = tmp8;
              let tmp18 = tmp9;
              let tmp19 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp8, tmp9, skipResult);
              tmp11 = tmp3;
              tmp12 = readUnknownField;
              tmp13 = skipResult;
            }
          }
        }
        tmp3 = tmp11;
        tmp4 = tmp12;
        tmp5 = tmp13;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(state, tag, writeUnknownFields) {
      let length;
      if ("normal" === state.state.oneofKind) {
        const tagResult = tag.tag(101, SafetyState$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined = outer1_10.internalBinaryWrite(state.state.normal, tag.tag(101, SafetyState$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = outer1_10.internalBinaryWrite(state.state.normal, tag.tag(101, SafetyState$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("restricted" === state.state.oneofKind) {
        const tagResult1 = tag.tag(102, SafetyState$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined1 = outer1_11.internalBinaryWrite(state.state.restricted, tag.tag(102, SafetyState$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = outer1_11.internalBinaryWrite(state.state.restricted, tag.tag(102, SafetyState$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("deferredAction" === state.state.oneofKind) {
        const tagResult2 = tag.tag(103, SafetyState$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined2 = outer1_12.internalBinaryWrite(state.state.deferredAction, tag.tag(103, SafetyState$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = outer1_12.internalBinaryWrite(state.state.deferredAction, tag.tag(103, SafetyState$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("tempBanned" === state.state.oneofKind) {
        const tagResult3 = tag.tag(104, SafetyState$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined3 = outer1_13.internalBinaryWrite(state.state.tempBanned, tag.tag(104, SafetyState$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult3 = outer1_13.internalBinaryWrite(state.state.tempBanned, tag.tag(104, SafetyState$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("banned" === state.state.oneofKind) {
        const tagResult4 = tag.tag(105, SafetyState$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined4 = outer1_14.internalBinaryWrite(state.state.banned, tag.tag(105, SafetyState$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult4 = outer1_14.internalBinaryWrite(state.state.banned, tag.tag(105, SafetyState$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (0 !== state.reason) {
        tag.tag(1, SafetyState$Type(outer1_1[6]).WireType.Varint).int32(state.reason);
        const tagResult5 = tag.tag(1, SafetyState$Type(outer1_1[6]).WireType.Varint);
      }
      if (state.annotations.length) {
        tag.tag(2, SafetyState$Type(outer1_1[6]).WireType.LengthDelimited).fork();
        let num15 = 0;
        if (0 < state.annotations.length) {
          do {
            let int32Result1 = tag.int32(state.annotations[num15]);
            num15 = num15 + 1;
            length = state.annotations.length;
          } while (num15 < length);
        }
        const joined5 = tag.join();
        const tagResult6 = tag.tag(2, SafetyState$Type(outer1_1[6]).WireType.LengthDelimited);
      }
      if (state.lastMutationId) {
        const UInt64Value = SafetyState$Type(outer1_1[9]).UInt64Value;
        const tagResult7 = tag.tag(3, SafetyState$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined6 = UInt64Value.internalBinaryWrite(state.lastMutationId, tag.tag(3, SafetyState$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult5 = UInt64Value.internalBinaryWrite(state.lastMutationId, tag.tag(3, SafetyState$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = SafetyState$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, state, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(SafetyState$Type, items);
})(require("module_1284").MessageType);
tmp12 = new tmp12();
let result = require("_defineProperties").fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/safety_common/v1/safety_state.tsx");

export const SafetyStateReason = obj;
export const SafetyAnnotations = obj;
export const NormalState = tmp2;
export const RestrictedState = tmp4;
export const DeferredActionState = tmp6;
export const TempBannedState = tmp8;
export const BannedState = tmp10;
export const SafetyState = tmp12;
