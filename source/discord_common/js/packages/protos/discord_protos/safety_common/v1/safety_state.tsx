// Module ID: 1868
// Function ID: 20782
// Name: _callSuper
// Dependencies: []

// Module 1868 (_callSuper)
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
  return closure_5(arg0, constructResult);
}
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
let closure_7 = importDefault(dependencyMap[5]);
let obj = { REASON_UNSPECIFIED: 0, [0]: "REASON_UNSPECIFIED", DISABLED_SUSPICIOUS_ACTIVITY: 1, [1]: "DISABLED_SUSPICIOUS_ACTIVITY", SMITE_REMOVE_EMAIL_VERIFICATION: 2, [2]: "SMITE_REMOVE_EMAIL_VERIFICATION", USER_REQUIRED_VERIFICATION_INTERVENTIONS_CLIENT: 3, [3]: "USER_REQUIRED_VERIFICATION_INTERVENTIONS_CLIENT", ACTIVE_ASSIGNMENT_COMPLETED: 4, [4]: "ACTIVE_ASSIGNMENT_COMPLETED", ACTIVE_ASSIGNMENT_CREATED: 5, [5]: "ACTIVE_ASSIGNMENT_CREATED", DEFERRED_ASSIGNMENT_CREATED: 6, [6]: "DEFERRED_ASSIGNMENT_CREATED", DEFERRED_ASSIGNMENT_UPGRADED_TO_ACTIVE: 7, [7]: "DEFERRED_ASSIGNMENT_UPGRADED_TO_ACTIVE", DEFERRED_ASSIGNMENT_CANCELLED: 8, [8]: "DEFERRED_ASSIGNMENT_CANCELLED", ASSIGNMENT_STATE_REPAIRED: 9, [9]: "ASSIGNMENT_STATE_REPAIRED", MANUAL_PERMANENT_BAN: 10, [10]: "MANUAL_PERMANENT_BAN", SAFETY_SYSTEM_UNBAN: 11, [11]: "SAFETY_SYSTEM_UNBAN", GENERIC_AUTOMATED_SAFETY_ACTION: 12, [12]: "GENERIC_AUTOMATED_SAFETY_ACTION", GENERIC_MANUAL_SAFETY_ACTION: 13, [13]: "GENERIC_MANUAL_SAFETY_ACTION", BANNED_USER_BACKFILL: 14, [14]: "BANNED_USER_BACKFILL" };
obj = { ANNOTATION_UNSPECIFIED: 0, [0]: "ANNOTATION_UNSPECIFIED", SPAMMER: 1, [1]: "SPAMMER", SELF_DELETED: 2, [2]: "SELF_DELETED", SELF_DISABLED: 3, [3]: "SELF_DISABLED", UNDERAGE_DELETED: 4, [4]: "UNDERAGE_DELETED", SAFETY_POLICY_VIOLATION: 5, [5]: "SAFETY_POLICY_VIOLATION", INACTIVITY_DELETED: 6, [6]: "INACTIVITY_DELETED", GENERIC_DELETED: 7, [7]: "GENERIC_DELETED" };
let tmp2 = (MessageType) => {
  class NormalState$Type {
    constructor() {
      tmp = closure_3(this, NormalState$Type);
      items = [];
      items[1] = [];
      return closure_15(this, NormalState$Type, items);
    }
  }
  const arg1 = NormalState$Type;
  callback3(NormalState$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, NormalState$Type(closure_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = NormalState$Type(closure_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = NormalState$Type(closure_1[6]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
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
          onWrite = NormalState$Type(closure_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, arg0, arg1);
      }
      return arg1;
    }
  };
  items[2] = obj;
  return callback(NormalState$Type, items);
}(arg1(dependencyMap[6]).MessageType);
tmp2 = new tmp2();
let tmp4 = (MessageType) => {
  class RestrictedState$Type {
    constructor() {
      tmp = closure_3(this, RestrictedState$Type);
      obj = {
        T() {
              return callback(closure_1[7]).Timestamp;
            }
      };
      items = [];
      items[0] = obj;
      items1 = [null];
      items1[1] = items;
      return closure_15(this, RestrictedState$Type, items1);
    }
  }
  const arg1 = RestrictedState$Type;
  callback3(RestrictedState$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, RestrictedState$Type(closure_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = RestrictedState$Type(closure_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = RestrictedState$Type(closure_1[6]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
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
        let tmp5 = callback;
        let tmp6 = callback(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          let tmp26 = RestrictedState$Type;
          let tmp27 = closure_1;
          let Timestamp = RestrictedState$Type(closure_1[7]).Timestamp;
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
                let tmp13 = closure_1;
                onRead = RestrictedState$Type(closure_1[6]).UnknownFieldHandler.onRead;
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
        let tmp3 = tmp10;
        let tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(restrictedUntil, tag, writeUnknownFields) {
      if (restrictedUntil.restrictedUntil) {
        const Timestamp = RestrictedState$Type(closure_1[7]).Timestamp;
        const tagResult = tag.tag(1, RestrictedState$Type(closure_1[6]).WireType.LengthDelimited);
        const joined = Timestamp.internalBinaryWrite(restrictedUntil.restrictedUntil, tag.tag(1, RestrictedState$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = Timestamp.internalBinaryWrite(restrictedUntil.restrictedUntil, tag.tag(1, RestrictedState$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = RestrictedState$Type(closure_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, restrictedUntil, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(RestrictedState$Type, items);
}(arg1(dependencyMap[6]).MessageType);
tmp4 = new tmp4();
let tmp6 = (MessageType) => {
  class DeferredActionState$Type {
    constructor() {
      tmp = closure_3(this, DeferredActionState$Type);
      obj = { -111020099: "marginBottom", 1351895378: "slice", 1456955659: "formatToPlainString" };
      obj.T = function T() {
        return callback(closure_1[7]).Timestamp;
      };
      items = [];
      items[0] = obj;
      items1 = [];
      items1[1] = items;
      return closure_15(this, DeferredActionState$Type, items1);
    }
  }
  const arg1 = DeferredActionState$Type;
  callback3(DeferredActionState$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, DeferredActionState$Type(closure_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = DeferredActionState$Type(closure_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = DeferredActionState$Type(closure_1[6]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
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
        let tmp5 = callback;
        let tmp6 = callback(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          let tmp26 = DeferredActionState$Type;
          let tmp27 = closure_1;
          let Timestamp = DeferredActionState$Type(closure_1[7]).Timestamp;
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
                let tmp13 = closure_1;
                onRead = DeferredActionState$Type(closure_1[6]).UnknownFieldHandler.onRead;
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
        let tmp3 = tmp10;
        let tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(actionDeferredUntil, tag, writeUnknownFields) {
      if (actionDeferredUntil.actionDeferredUntil) {
        const Timestamp = DeferredActionState$Type(closure_1[7]).Timestamp;
        const tagResult = tag.tag(1, DeferredActionState$Type(closure_1[6]).WireType.LengthDelimited);
        const joined = Timestamp.internalBinaryWrite(actionDeferredUntil.actionDeferredUntil, tag.tag(1, DeferredActionState$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = Timestamp.internalBinaryWrite(actionDeferredUntil.actionDeferredUntil, tag.tag(1, DeferredActionState$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = DeferredActionState$Type(closure_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, actionDeferredUntil, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(DeferredActionState$Type, items);
}(arg1(dependencyMap[6]).MessageType);
tmp6 = new tmp6();
let tmp8 = (MessageType) => {
  class TempBannedState$Type {
    constructor() {
      tmp = closure_3(this, TempBannedState$Type);
      obj = { -111020099: -141359518085676640000000000000000000000000000000000000000000000000000000000000000000000, 1351895378: 130196384959298370000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 1456955659: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030586585593 };
      obj.T = function T() {
        return callback(closure_1[7]).Timestamp;
      };
      items = [, , ];
      items[0] = obj;
      items[1] = {
        T() {
              const items = [null, callback(closure_1[8]).ClassificationType];
              return items;
            }
      };
      obj = { -111020099: "<string:1111621634>", 1351895378: "<string:1107297328>", 1456955659: "<string:1090520112>" };
      obj.T = function T() {
        return callback(closure_1[7]).Timestamp;
      };
      items[2] = obj;
      items1 = [];
      items1[1] = items;
      return closure_15(this, TempBannedState$Type, items1);
    }
  }
  const arg1 = TempBannedState$Type;
  callback3(TempBannedState$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { classificationTypes: [] };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, TempBannedState$Type(closure_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = TempBannedState$Type(closure_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = TempBannedState$Type(closure_1[6]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
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
        let tmp6 = callback;
        let tmp7 = callback(pos.tag(), 2);
        [tmp8, tmp9] = tmp7;
        if (1 === tmp8) {
          let tmp38 = TempBannedState$Type;
          let tmp39 = closure_1;
          let Timestamp2 = TempBannedState$Type(closure_1[7]).Timestamp;
          let tmp40 = Timestamp2;
          let tmp41 = pos;
          let tmp42 = readUnknownField;
          obj.bannedUntil = Timestamp2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.bannedUntil);
          let tmp11 = tmp3;
          let tmp12 = tmp4;
          let tmp13 = tmp5;
        } else if (2 === tmp8) {
          let tmp33 = TempBannedState$Type;
          let tmp34 = closure_1;
          if (tmp9 === TempBannedState$Type(closure_1[6]).WireType.LengthDelimited) {
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
          let tmp29 = closure_1;
          let Timestamp = TempBannedState$Type(closure_1[7]).Timestamp;
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
                let tmp15 = closure_1;
                onRead = TempBannedState$Type(closure_1[6]).UnknownFieldHandler.onRead;
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
        let tmp3 = tmp11;
        let tmp4 = tmp12;
        let tmp5 = tmp13;
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
        const Timestamp = TempBannedState$Type(closure_1[7]).Timestamp;
        const tagResult = tag.tag(1, TempBannedState$Type(closure_1[6]).WireType.LengthDelimited);
        const joined = Timestamp.internalBinaryWrite(bannedUntil.bannedUntil, tag.tag(1, TempBannedState$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = Timestamp.internalBinaryWrite(bannedUntil.bannedUntil, tag.tag(1, TempBannedState$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (bannedUntil.classificationTypes.length) {
        tag.tag(2, TempBannedState$Type(closure_1[6]).WireType.LengthDelimited).fork();
        let num6 = 0;
        if (0 < bannedUntil.classificationTypes.length) {
          do {
            let int32Result = tag.int32(bannedUntil.classificationTypes[num6]);
            num6 = num6 + 1;
            length = bannedUntil.classificationTypes.length;
          } while (num6 < length);
        }
        const joined1 = tag.join();
        const tagResult1 = tag.tag(2, TempBannedState$Type(closure_1[6]).WireType.LengthDelimited);
      }
      if (bannedUntil.bannedAt) {
        const Timestamp2 = TempBannedState$Type(closure_1[7]).Timestamp;
        const tagResult2 = tag.tag(3, TempBannedState$Type(closure_1[6]).WireType.LengthDelimited);
        const joined2 = Timestamp2.internalBinaryWrite(bannedUntil.bannedAt, tag.tag(3, TempBannedState$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = Timestamp2.internalBinaryWrite(bannedUntil.bannedAt, tag.tag(3, TempBannedState$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = TempBannedState$Type(closure_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, bannedUntil, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(TempBannedState$Type, items);
}(arg1(dependencyMap[6]).MessageType);
tmp8 = new tmp8();
let tmp10 = (MessageType) => {
  class BannedState$Type {
    constructor() {
      tmp = closure_3(this, BannedState$Type);
      obj = { 0: "context", 0: "y", 0: "isArray", 0: 1 };
      obj.T = function T() {
        const items = [null, callback(closure_1[8]).ClassificationType];
        return items;
      };
      items = [, ];
      items[0] = obj;
      obj = { -111020099: 0, 1351895378: "sh", 1456955659: 1 };
      obj.T = function T() {
        return callback(closure_1[7]).Timestamp;
      };
      items[1] = obj;
      items1 = [];
      items1[1] = items;
      return closure_15(this, BannedState$Type, items1);
    }
  }
  const arg1 = BannedState$Type;
  callback3(BannedState$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { classificationTypes: [] };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, BannedState$Type(closure_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = BannedState$Type(closure_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = BannedState$Type(closure_1[6]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
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
        let tmp6 = callback;
        let tmp7 = callback(pos.tag(), 2);
        [tmp8, tmp9] = tmp7;
        if (1 === tmp8) {
          let tmp33 = BannedState$Type;
          let tmp34 = closure_1;
          if (tmp9 === BannedState$Type(closure_1[6]).WireType.LengthDelimited) {
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
          let tmp29 = closure_1;
          let Timestamp = BannedState$Type(closure_1[7]).Timestamp;
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
                let tmp15 = closure_1;
                onRead = BannedState$Type(closure_1[6]).UnknownFieldHandler.onRead;
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
        let tmp3 = tmp11;
        let tmp4 = tmp12;
        let tmp5 = tmp13;
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
        tag.tag(1, BannedState$Type(closure_1[6]).WireType.LengthDelimited).fork();
        let num3 = 0;
        if (0 < classificationTypes.classificationTypes.length) {
          do {
            let int32Result = tag.int32(classificationTypes.classificationTypes[num3]);
            num3 = num3 + 1;
            length = classificationTypes.classificationTypes.length;
          } while (num3 < length);
        }
        const joined = tag.join();
        const tagResult = tag.tag(1, BannedState$Type(closure_1[6]).WireType.LengthDelimited);
      }
      if (classificationTypes.bannedAt) {
        const Timestamp = BannedState$Type(closure_1[7]).Timestamp;
        const tagResult1 = tag.tag(2, BannedState$Type(closure_1[6]).WireType.LengthDelimited);
        const joined1 = Timestamp.internalBinaryWrite(classificationTypes.bannedAt, tag.tag(2, BannedState$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = Timestamp.internalBinaryWrite(classificationTypes.bannedAt, tag.tag(2, BannedState$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = BannedState$Type(closure_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, classificationTypes, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(BannedState$Type, items);
}(arg1(dependencyMap[6]).MessageType);
tmp10 = new tmp10();
let tmp12 = (MessageType) => {
  class SafetyState$Type {
    constructor() {
      tmp = closure_3(this, SafetyState$Type);
      obj = {
        T() {
              return closure_10;
            }
      };
      items = [, , , , , , , ];
      items[0] = obj;
      obj = { "Bool(false)": false, "Bool(false)": "no-preference", "Bool(false)": "db.fs_info", "Bool(false)": 0 };
      obj.T = function T() {
        return closure_11;
      };
      items[1] = obj;
      items[2] = {
        T() {
              return closure_12;
            }
      };
      items[3] = {
        T() {
              return closure_13;
            }
      };
      obj1 = { "Bool(false)": "<string:1414004738>", "Bool(false)": "<string:3644981249>", "Bool(false)": "<string:1694499380>", "Bool(false)": "<string:1107296695>" };
      obj1.T = function T() {
        return closure_14;
      };
      items[4] = obj1;
      obj2 = { -111020099: "in", 1351895378: "<string:507642112>", 1456955659: "<string:1962934591>" };
      obj2.T = function T() {
        const items = [, closure_8];
        return items;
      };
      items[5] = obj2;
      obj3 = { 0: null, 0: null, 0: null, 0: null };
      obj3.T = function T() {
        const items = [, closure_9];
        return items;
      };
      items[6] = obj3;
      obj4 = { -111020099: "r", 1351895378: "emitVoiceMessageRecorded", 1456955659: "r" };
      obj4.T = function T() {
        return callback(closure_1[9]).UInt64Value;
      };
      items[7] = obj4;
      items1 = [null];
      items1[1] = items;
      return closure_15(this, SafetyState$Type, items1);
    }
  }
  const arg1 = SafetyState$Type;
  callback3(SafetyState$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { state: { oneofKind: undefined }, reason: 0, annotations: [] };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, SafetyState$Type(closure_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = SafetyState$Type(closure_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = SafetyState$Type(closure_1[6]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
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
        let tmp6 = callback;
        let tmp7 = callback(pos.tag(), 2);
        [tmp8, tmp9] = tmp7;
        if (101 === tmp8) {
          obj = { oneofKind: "normal" };
          let tmp54 = closure_10;
          let tmp55 = closure_10;
          let tmp56 = pos;
          let tmp57 = readUnknownField;
          obj.normal = closure_10.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.state.normal);
          obj.state = obj;
          let tmp11 = tmp3;
          let tmp12 = tmp4;
          let tmp13 = tmp5;
        } else if (102 === tmp8) {
          let obj1 = { oneofKind: "restricted" };
          let tmp50 = closure_11;
          let tmp51 = closure_11;
          let tmp52 = pos;
          let tmp53 = readUnknownField;
          obj1.restricted = closure_11.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.state.restricted);
          obj.state = obj1;
          tmp11 = tmp3;
          tmp12 = tmp4;
          tmp13 = tmp5;
        } else if (103 === tmp8) {
          let obj2 = { oneofKind: "deferredAction" };
          let tmp46 = closure_12;
          let tmp47 = closure_12;
          let tmp48 = pos;
          let tmp49 = readUnknownField;
          obj2.deferredAction = closure_12.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.state.deferredAction);
          obj.state = obj2;
          tmp11 = tmp3;
          tmp12 = tmp4;
          tmp13 = tmp5;
        } else if (104 === tmp8) {
          let obj3 = { oneofKind: "tempBanned" };
          let tmp42 = closure_13;
          let tmp43 = closure_13;
          let tmp44 = pos;
          let tmp45 = readUnknownField;
          obj3.tempBanned = closure_13.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.state.tempBanned);
          obj.state = obj3;
          tmp11 = tmp3;
          tmp12 = tmp4;
          tmp13 = tmp5;
        } else if (105 === tmp8) {
          obj = { oneofKind: "banned" };
          let tmp38 = closure_14;
          let tmp39 = closure_14;
          let tmp40 = pos;
          let tmp41 = readUnknownField;
          obj.banned = closure_14.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.state.banned);
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
          let tmp34 = closure_1;
          if (tmp9 === SafetyState$Type(closure_1[6]).WireType.LengthDelimited) {
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
          let tmp29 = closure_1;
          let UInt64Value = SafetyState$Type(closure_1[9]).UInt64Value;
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
                let tmp15 = closure_1;
                onRead = SafetyState$Type(closure_1[6]).UnknownFieldHandler.onRead;
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
        let tmp3 = tmp11;
        let tmp4 = tmp12;
        let tmp5 = tmp13;
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
        const tagResult = tag.tag(101, SafetyState$Type(closure_1[6]).WireType.LengthDelimited);
        const joined = closure_10.internalBinaryWrite(state.state.normal, tag.tag(101, SafetyState$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = closure_10.internalBinaryWrite(state.state.normal, tag.tag(101, SafetyState$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("restricted" === state.state.oneofKind) {
        const tagResult1 = tag.tag(102, SafetyState$Type(closure_1[6]).WireType.LengthDelimited);
        const joined1 = closure_11.internalBinaryWrite(state.state.restricted, tag.tag(102, SafetyState$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = closure_11.internalBinaryWrite(state.state.restricted, tag.tag(102, SafetyState$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("deferredAction" === state.state.oneofKind) {
        const tagResult2 = tag.tag(103, SafetyState$Type(closure_1[6]).WireType.LengthDelimited);
        const joined2 = closure_12.internalBinaryWrite(state.state.deferredAction, tag.tag(103, SafetyState$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = closure_12.internalBinaryWrite(state.state.deferredAction, tag.tag(103, SafetyState$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("tempBanned" === state.state.oneofKind) {
        const tagResult3 = tag.tag(104, SafetyState$Type(closure_1[6]).WireType.LengthDelimited);
        const joined3 = closure_13.internalBinaryWrite(state.state.tempBanned, tag.tag(104, SafetyState$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult3 = closure_13.internalBinaryWrite(state.state.tempBanned, tag.tag(104, SafetyState$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("banned" === state.state.oneofKind) {
        const tagResult4 = tag.tag(105, SafetyState$Type(closure_1[6]).WireType.LengthDelimited);
        const joined4 = closure_14.internalBinaryWrite(state.state.banned, tag.tag(105, SafetyState$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult4 = closure_14.internalBinaryWrite(state.state.banned, tag.tag(105, SafetyState$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (0 !== state.reason) {
        tag.tag(1, SafetyState$Type(closure_1[6]).WireType.Varint).int32(state.reason);
        const tagResult5 = tag.tag(1, SafetyState$Type(closure_1[6]).WireType.Varint);
      }
      if (state.annotations.length) {
        tag.tag(2, SafetyState$Type(closure_1[6]).WireType.LengthDelimited).fork();
        let num15 = 0;
        if (0 < state.annotations.length) {
          do {
            let int32Result1 = tag.int32(state.annotations[num15]);
            num15 = num15 + 1;
            length = state.annotations.length;
          } while (num15 < length);
        }
        const joined5 = tag.join();
        const tagResult6 = tag.tag(2, SafetyState$Type(closure_1[6]).WireType.LengthDelimited);
      }
      if (state.lastMutationId) {
        const UInt64Value = SafetyState$Type(closure_1[9]).UInt64Value;
        const tagResult7 = tag.tag(3, SafetyState$Type(closure_1[6]).WireType.LengthDelimited);
        const joined6 = UInt64Value.internalBinaryWrite(state.lastMutationId, tag.tag(3, SafetyState$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult5 = UInt64Value.internalBinaryWrite(state.lastMutationId, tag.tag(3, SafetyState$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = SafetyState$Type(closure_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, state, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(SafetyState$Type, items);
}(arg1(dependencyMap[6]).MessageType);
tmp12 = new tmp12();
const result = arg1(dependencyMap[10]).fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/safety_common/v1/safety_state.tsx");

export const SafetyStateReason = obj;
export const SafetyAnnotations = obj;
export const NormalState = tmp2;
export const RestrictedState = tmp4;
export const DeferredActionState = tmp6;
export const TempBannedState = tmp8;
export const BannedState = tmp10;
export const SafetyState = tmp12;
