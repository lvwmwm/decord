// Module ID: 7876
// Function ID: 62181
// Name: _callSuper
// Dependencies: [57, 6, 7, 15, 17, 18, 1284, 1313, 2]

// Module 7876 (_callSuper)
import _slicedToArray from "_slicedToArray";
import module_1284 from "module_1284";
import _callSuper from "_callSuper";
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
let obj = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", EXCLUDE: 1, [1]: "EXCLUDE", OVERRIDE: 2, [2]: "OVERRIDE", REQUIRE: 3, [3]: "REQUIRE", ASSIGNMENT: 4, [4]: "ASSIGNMENT" };
obj = { REGULAR: 0, [0]: "REGULAR", HOLDOUT: 1, [1]: "HOLDOUT" };
let tmp2 = ((MessageType) => {
  class Rule$Type {
    constructor() {
      tmp = outer1_3(this, Rule$Type);
      obj = { no: 1, name: "type", kind: "enum" };
      obj.T = function T() {
        const items = ["discord_protos.discord_experimentation.v1.Rule.Type", outer2_8];
        return items;
      };
      items = [, , , , , ];
      items[0] = obj;
      obj = { no: 2, name: "filters", kind: "message", repeat: 1 };
      obj.T = function T() {
        return outer2_11;
      };
      items[1] = obj;
      obj1 = { no: 3, name: "override", kind: "message" };
      obj1.T = function T() {
        return outer2_10;
      };
      items[2] = obj1;
      items[3] = { no: 4, name: "is_sunset_rule", kind: "scalar", T: 8 };
      obj2 = { no: 5, name: "subtype", kind: "enum" };
      obj2.T = function T() {
        const items = ["discord_protos.discord_experimentation.v1.Rule.Subtype", outer2_9];
        return items;
      };
      items[4] = obj2;
      items[5] = { no: 6, name: "hash", kind: "scalar", T: 9 };
      items1 = ["discord_protos.discord_experimentation.v1.Rule"];
      items1[1] = items;
      return outer1_52(this, Rule$Type, items1);
    }
  }
  callback3(Rule$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { type: 0, filters: [], isSunsetRule: false, subtype: 0, hash: "" };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, Rule$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = Rule$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = Rule$Type(outer1_1[6]);
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
          obj.type = pos.int32();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          let filters = obj.filters;
          let tmp30 = outer1_11;
          let arr = filters.push(outer1_11.internalBinaryRead(pos, pos.uint32(), readUnknownField));
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          let tmp26 = outer1_10;
          let tmp27 = outer1_10;
          let tmp28 = pos;
          let tmp29 = readUnknownField;
          obj.override = outer1_10.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.override);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (4 === tmp7) {
          obj.isSunsetRule = pos.bool();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (5 === tmp7) {
          obj.subtype = pos.int32();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (6 === tmp7) {
          obj.hash = pos.string();
          tmp10 = tmp3;
          tmp11 = tmp4;
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
                let tmp12 = Rule$Type;
                let tmp13 = outer1_1;
                onRead = Rule$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
    value(type, tag, writeUnknownFields) {
      let length;
      if (0 !== type.type) {
        tag.tag(1, Rule$Type(outer1_1[6]).WireType.Varint).int32(type.type);
        const tagResult = tag.tag(1, Rule$Type(outer1_1[6]).WireType.Varint);
      }
      let num3 = 0;
      if (0 < type.filters.length) {
        do {
          let tmp4 = outer1_11;
          let tmp5 = Rule$Type;
          let tmp6 = outer1_1;
          let tagResult1 = tag.tag(2, Rule$Type(outer1_1[6]).WireType.LengthDelimited);
          let internalBinaryWriteResult = outer1_11.internalBinaryWrite(type.filters[num3], tagResult1.fork(), writeUnknownFields);
          let joined = internalBinaryWriteResult.join();
          num3 = num3 + 1;
          length = type.filters.length;
        } while (num3 < length);
      }
      if (type.override) {
        const tagResult2 = tag.tag(3, Rule$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined1 = outer1_10.internalBinaryWrite(type.override, tag.tag(3, Rule$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = outer1_10.internalBinaryWrite(type.override, tag.tag(3, Rule$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (false !== type.isSunsetRule) {
        tag.tag(4, Rule$Type(outer1_1[6]).WireType.Varint).bool(type.isSunsetRule);
        const tagResult3 = tag.tag(4, Rule$Type(outer1_1[6]).WireType.Varint);
      }
      if (0 !== type.subtype) {
        tag.tag(5, Rule$Type(outer1_1[6]).WireType.Varint).int32(type.subtype);
        const tagResult4 = tag.tag(5, Rule$Type(outer1_1[6]).WireType.Varint);
      }
      if ("" !== type.hash) {
        tag.tag(6, Rule$Type(outer1_1[6]).WireType.LengthDelimited).string(type.hash);
        const tagResult5 = tag.tag(6, Rule$Type(outer1_1[6]).WireType.LengthDelimited);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = Rule$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, type, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(Rule$Type, items);
})(require("module_1284").MessageType);
tmp2 = new tmp2();
let tmp4 = ((MessageType) => {
  class Override$Type {
    constructor() {
      tmp = outer1_3(this, Override$Type);
      items = [];
      items[0] = { no: 1, name: "variation_id", kind: "scalar", T: 5 };
      items1 = ["discord_protos.discord_experimentation.v1.Override"];
      items1[1] = items;
      return outer1_52(this, Override$Type, items1);
    }
  }
  callback3(Override$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { variationId: 0 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, Override$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = Override$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = Override$Type(outer1_1[6]);
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
          obj.variationId = pos.int32();
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
                let tmp12 = Override$Type;
                let tmp13 = outer1_1;
                onRead = Override$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
    value(variationId, tag, writeUnknownFields) {
      if (0 !== variationId.variationId) {
        tag.tag(1, Override$Type(outer1_1[6]).WireType.Varint).int32(variationId.variationId);
        const tagResult = tag.tag(1, Override$Type(outer1_1[6]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = Override$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, variationId, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(Override$Type, items);
})(require("module_1284").MessageType);
tmp4 = new tmp4();
let closure_10 = tmp4;
let tmp6 = ((MessageType) => {
  class Filter$Type {
    constructor() {
      tmp = outer1_3(this, Filter$Type);
      obj = { no: 2, name: "client_version", kind: "message", oneof: "filter" };
      obj.T = function T() {
        return outer2_30;
      };
      items = [, , , , , , , , , , , , , , , , , , , , , , , , , , , ];
      items[0] = obj;
      obj = { no: 3, name: "client_os", kind: "message", oneof: "filter" };
      obj.T = function T() {
        return outer2_25;
      };
      items[1] = obj;
      obj1 = { no: 4, name: "staff", kind: "message", oneof: "filter" };
      obj1.T = function T() {
        return outer2_12;
      };
      items[2] = obj1;
      obj2 = { no: 5, name: "user_in_guild", kind: "message", oneof: "filter" };
      obj2.T = function T() {
        return outer2_13;
      };
      items[3] = obj2;
      obj3 = { no: 6, name: "user_ids", kind: "message", oneof: "filter" };
      obj3.T = function T() {
        return outer2_14;
      };
      items[4] = obj3;
      obj4 = { no: 7, name: "client_locale", kind: "message", oneof: "filter" };
      obj4.T = function T() {
        return outer2_16;
      };
      items[5] = obj4;
      obj5 = { no: 8, name: "client_location", kind: "message", oneof: "filter" };
      obj5.T = function T() {
        return outer2_18;
      };
      items[6] = obj5;
      obj6 = { no: 9, name: "client_ip", kind: "message", oneof: "filter" };
      obj6.T = function T() {
        return outer2_23;
      };
      items[7] = obj6;
      obj7 = { no: 10, name: "user_locale", kind: "message", oneof: "filter" };
      obj7.T = function T() {
        return outer2_15;
      };
      items[8] = obj7;
      obj8 = { no: 11, name: "bot", kind: "message", oneof: "filter" };
      obj8.T = function T() {
        return outer2_36;
      };
      items[9] = obj8;
      obj9 = { no: 12, name: "user_age_range", kind: "message", oneof: "filter" };
      obj9.T = function T() {
        return outer2_37;
      };
      items[10] = obj9;
      obj10 = { no: 13, name: "user_id_range", kind: "message", oneof: "filter" };
      obj10.T = function T() {
        return outer2_39;
      };
      items[11] = obj10;
      obj11 = { no: 14, name: "user_has_flag", kind: "message", oneof: "filter" };
      obj11.T = function T() {
        return outer2_40;
      };
      items[12] = obj11;
      obj12 = { no: 15, name: "unit_id_in_range_by_hash", kind: "message", oneof: "filter" };
      obj12.T = function T() {
        return outer2_41;
      };
      items[13] = obj12;
      obj13 = { no: 16, name: "client_release_channel", kind: "message", oneof: "filter" };
      obj13.T = function T() {
        return outer2_42;
      };
      items[14] = obj13;
      obj14 = { no: 17, name: "always", kind: "message", oneof: "filter" };
      obj14.T = function T() {
        return outer2_43;
      };
      items[15] = obj14;
      obj15 = { no: 18, name: "client_system_locale", kind: "message", oneof: "filter" };
      obj15.T = function T() {
        return outer2_17;
      };
      items[16] = obj15;
      obj16 = { no: 19, name: "unit_id_in_experiment", kind: "message", oneof: "filter" };
      obj16.T = function T() {
        return outer2_44;
      };
      items[17] = obj16;
      obj17 = { no: 20, name: "user_premium_type", kind: "message", oneof: "filter" };
      obj17.T = function T() {
        return outer2_45;
      };
      items[18] = obj17;
      obj18 = { no: 21, name: "unit_id_matches_filter_snapshot", kind: "message", oneof: "filter" };
      obj18.T = function T() {
        return outer2_46;
      };
      items[19] = obj18;
      obj19 = { no: 22, name: "guild_ids", kind: "message", oneof: "filter" };
      obj19.T = function T() {
        return outer2_47;
      };
      items[20] = obj19;
      obj20 = { no: 23, name: "guild_id_range", kind: "message", oneof: "filter" };
      obj20.T = function T() {
        return outer2_49;
      };
      items[21] = obj20;
      obj21 = { no: 25, name: "guild_member_count_range", kind: "message", oneof: "filter" };
      obj21.T = function T() {
        return outer2_48;
      };
      items[22] = obj21;
      obj22 = { no: 26, name: "guild_has_feature", kind: "message", oneof: "filter" };
      obj22.T = function T() {
        return outer2_50;
      };
      items[23] = obj22;
      obj23 = { no: 27, name: "user_location", kind: "message", oneof: "filter" };
      obj23.T = function T() {
        return outer2_22;
      };
      items[24] = obj23;
      obj24 = { no: 28, name: "user_ip", kind: "message", oneof: "filter" };
      obj24.T = function T() {
        return outer2_24;
      };
      items[25] = obj24;
      obj25 = { no: 29, name: "installation_ids", kind: "message", oneof: "filter" };
      obj25.T = function T() {
        return outer2_51;
      };
      items[26] = obj25;
      items[27] = { no: 30, name: "negate", kind: "scalar", T: 8 };
      items1 = ["discord_protos.discord_experimentation.v1.Filter"];
      items1[1] = items;
      return outer1_52(this, Filter$Type, items1);
    }
  }
  callback3(Filter$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { filter: { oneofKind: undefined }, negate: false };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, Filter$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = Filter$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = Filter$Type(outer1_1[6]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos) {
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      if (pos.pos < pos.pos + arg1) {
        [r10052, r10053] = outer1_2(pos.tag(), 2);
        const tmp3 = outer1_2(pos.tag(), 2);
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(negate, tag, writeUnknownFields) {
      if ("clientVersion" === negate.filter.oneofKind) {
        let joined24 = outer1_30;
        const tagResult = tag.tag(2, Filter$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined = outer1_30.internalBinaryWrite(negate.filter.clientVersion, tag.tag(2, Filter$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = outer1_30.internalBinaryWrite(negate.filter.clientVersion, tag.tag(2, Filter$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("clientOs" === negate.filter.oneofKind) {
        const tagResult1 = tag.tag(3, Filter$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined1 = outer1_25.internalBinaryWrite(negate.filter.clientOs, tag.tag(3, Filter$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = outer1_25.internalBinaryWrite(negate.filter.clientOs, tag.tag(3, Filter$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("staff" === negate.filter.oneofKind) {
        const tagResult2 = tag.tag(4, Filter$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined2 = outer1_12.internalBinaryWrite(negate.filter.staff, tag.tag(4, Filter$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = outer1_12.internalBinaryWrite(negate.filter.staff, tag.tag(4, Filter$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("userInGuild" === negate.filter.oneofKind) {
        const tagResult3 = tag.tag(5, Filter$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined3 = outer1_13.internalBinaryWrite(negate.filter.userInGuild, tag.tag(5, Filter$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult3 = outer1_13.internalBinaryWrite(negate.filter.userInGuild, tag.tag(5, Filter$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("userIds" === negate.filter.oneofKind) {
        const tagResult4 = tag.tag(6, Filter$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined4 = outer1_14.internalBinaryWrite(negate.filter.userIds, tag.tag(6, Filter$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult4 = outer1_14.internalBinaryWrite(negate.filter.userIds, tag.tag(6, Filter$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("clientLocale" === negate.filter.oneofKind) {
        const tagResult5 = tag.tag(7, Filter$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined5 = outer1_16.internalBinaryWrite(negate.filter.clientLocale, tag.tag(7, Filter$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult5 = outer1_16.internalBinaryWrite(negate.filter.clientLocale, tag.tag(7, Filter$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("clientLocation" === negate.filter.oneofKind) {
        const tagResult6 = tag.tag(8, Filter$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined6 = outer1_18.internalBinaryWrite(negate.filter.clientLocation, tag.tag(8, Filter$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult6 = outer1_18.internalBinaryWrite(negate.filter.clientLocation, tag.tag(8, Filter$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("clientIp" === negate.filter.oneofKind) {
        const tagResult7 = tag.tag(9, Filter$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined7 = outer1_23.internalBinaryWrite(negate.filter.clientIp, tag.tag(9, Filter$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult7 = outer1_23.internalBinaryWrite(negate.filter.clientIp, tag.tag(9, Filter$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("userLocale" === negate.filter.oneofKind) {
        const tagResult8 = tag.tag(10, Filter$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined8 = outer1_15.internalBinaryWrite(negate.filter.userLocale, tag.tag(10, Filter$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult8 = outer1_15.internalBinaryWrite(negate.filter.userLocale, tag.tag(10, Filter$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("bot" === negate.filter.oneofKind) {
        const tagResult9 = tag.tag(11, Filter$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined9 = outer1_36.internalBinaryWrite(negate.filter.bot, tag.tag(11, Filter$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult9 = outer1_36.internalBinaryWrite(negate.filter.bot, tag.tag(11, Filter$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("userAgeRange" === negate.filter.oneofKind) {
        const tagResult10 = tag.tag(12, Filter$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined10 = outer1_37.internalBinaryWrite(negate.filter.userAgeRange, tag.tag(12, Filter$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult10 = outer1_37.internalBinaryWrite(negate.filter.userAgeRange, tag.tag(12, Filter$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("userIdRange" === negate.filter.oneofKind) {
        const tagResult11 = tag.tag(13, Filter$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined11 = outer1_39.internalBinaryWrite(negate.filter.userIdRange, tag.tag(13, Filter$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult11 = outer1_39.internalBinaryWrite(negate.filter.userIdRange, tag.tag(13, Filter$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("userHasFlag" === negate.filter.oneofKind) {
        const tagResult12 = tag.tag(14, Filter$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined12 = outer1_40.internalBinaryWrite(negate.filter.userHasFlag, tag.tag(14, Filter$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult12 = outer1_40.internalBinaryWrite(negate.filter.userHasFlag, tag.tag(14, Filter$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("unitIdInRangeByHash" === negate.filter.oneofKind) {
        const tagResult13 = tag.tag(15, Filter$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined13 = outer1_41.internalBinaryWrite(negate.filter.unitIdInRangeByHash, tag.tag(15, Filter$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult13 = outer1_41.internalBinaryWrite(negate.filter.unitIdInRangeByHash, tag.tag(15, Filter$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("clientReleaseChannel" === negate.filter.oneofKind) {
        const tagResult14 = tag.tag(16, Filter$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined14 = outer1_42.internalBinaryWrite(negate.filter.clientReleaseChannel, tag.tag(16, Filter$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult14 = outer1_42.internalBinaryWrite(negate.filter.clientReleaseChannel, tag.tag(16, Filter$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("always" === negate.filter.oneofKind) {
        const tagResult15 = tag.tag(17, Filter$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined15 = outer1_43.internalBinaryWrite(negate.filter.always, tag.tag(17, Filter$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult15 = outer1_43.internalBinaryWrite(negate.filter.always, tag.tag(17, Filter$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("clientSystemLocale" === negate.filter.oneofKind) {
        const tagResult16 = tag.tag(18, Filter$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined16 = outer1_17.internalBinaryWrite(negate.filter.clientSystemLocale, tag.tag(18, Filter$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult16 = outer1_17.internalBinaryWrite(negate.filter.clientSystemLocale, tag.tag(18, Filter$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("unitIdInExperiment" === negate.filter.oneofKind) {
        const tagResult17 = tag.tag(19, Filter$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined17 = outer1_44.internalBinaryWrite(negate.filter.unitIdInExperiment, tag.tag(19, Filter$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult17 = outer1_44.internalBinaryWrite(negate.filter.unitIdInExperiment, tag.tag(19, Filter$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("userPremiumType" === negate.filter.oneofKind) {
        const tagResult18 = tag.tag(20, Filter$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined18 = outer1_45.internalBinaryWrite(negate.filter.userPremiumType, tag.tag(20, Filter$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult18 = outer1_45.internalBinaryWrite(negate.filter.userPremiumType, tag.tag(20, Filter$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("unitIdMatchesFilterSnapshot" === negate.filter.oneofKind) {
        const tagResult19 = tag.tag(21, Filter$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined19 = outer1_46.internalBinaryWrite(negate.filter.unitIdMatchesFilterSnapshot, tag.tag(21, Filter$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult19 = outer1_46.internalBinaryWrite(negate.filter.unitIdMatchesFilterSnapshot, tag.tag(21, Filter$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("guildIds" === negate.filter.oneofKind) {
        const tagResult20 = tag.tag(22, Filter$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined20 = outer1_47.internalBinaryWrite(negate.filter.guildIds, tag.tag(22, Filter$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult20 = outer1_47.internalBinaryWrite(negate.filter.guildIds, tag.tag(22, Filter$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("guildIdRange" === negate.filter.oneofKind) {
        const tagResult21 = tag.tag(23, Filter$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined21 = outer1_49.internalBinaryWrite(negate.filter.guildIdRange, tag.tag(23, Filter$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult21 = outer1_49.internalBinaryWrite(negate.filter.guildIdRange, tag.tag(23, Filter$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("guildMemberCountRange" === negate.filter.oneofKind) {
        const tagResult22 = tag.tag(25, Filter$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined22 = outer1_48.internalBinaryWrite(negate.filter.guildMemberCountRange, tag.tag(25, Filter$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult22 = outer1_48.internalBinaryWrite(negate.filter.guildMemberCountRange, tag.tag(25, Filter$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("guildHasFeature" === negate.filter.oneofKind) {
        const tagResult23 = tag.tag(26, Filter$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined23 = outer1_50.internalBinaryWrite(negate.filter.guildHasFeature, tag.tag(26, Filter$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult23 = outer1_50.internalBinaryWrite(negate.filter.guildHasFeature, tag.tag(26, Filter$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("userLocation" === negate.filter.oneofKind) {
        const tagResult24 = tag.tag(27, Filter$Type(outer1_1[6]).WireType.LengthDelimited);
        joined24 = outer1_22.internalBinaryWrite(negate.filter.userLocation, tag.tag(27, Filter$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult24 = outer1_22.internalBinaryWrite(negate.filter.userLocation, tag.tag(27, Filter$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("userIp" === negate.filter.oneofKind) {
        joined24 = outer1_24;
        joined24 = Filter$Type;
        joined24 = outer1_1;
        const tagResult25 = tag.tag(28, Filter$Type(outer1_1[6]).WireType.LengthDelimited);
        joined24 = outer1_24.internalBinaryWrite(negate.filter.userIp, tag.tag(28, Filter$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult25 = outer1_24.internalBinaryWrite(negate.filter.userIp, tag.tag(28, Filter$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("installationIds" === negate.filter.oneofKind) {
        joined24 = outer1_51;
        joined24 = Filter$Type;
        joined24 = outer1_1;
        const tagResult26 = tag.tag(29, Filter$Type(outer1_1[6]).WireType.LengthDelimited);
        joined24 = outer1_51.internalBinaryWrite(negate.filter.installationIds, tag.tag(29, Filter$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult26 = outer1_51.internalBinaryWrite(negate.filter.installationIds, tag.tag(29, Filter$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (false !== negate.negate) {
        joined24 = Filter$Type;
        joined24 = outer1_1;
        joined24 = tag.tag(30, Filter$Type(outer1_1[6]).WireType.Varint).bool(negate.negate);
        const tagResult27 = tag.tag(30, Filter$Type(outer1_1[6]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          joined24 = Filter$Type;
          joined24 = outer1_1;
          onWrite = Filter$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        joined24 = onWrite(this.typeName, negate, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(Filter$Type, items);
})(require("module_1284").MessageType);
tmp6 = new tmp6();
let closure_11 = tmp6;
let tmp8 = ((MessageType) => {
  class StaffUsers$Type {
    constructor() {
      tmp = outer1_3(this, StaffUsers$Type);
      items = [, ];
      items[0] = { no: 1, name: "work_accounts", kind: "scalar", T: 8 };
      items[1] = { no: 2, name: "personal_accounts", kind: "scalar", T: 8 };
      items1 = ["discord_protos.discord_experimentation.v1.StaffUsers"];
      items1[1] = items;
      items1[2] = { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" };
      return outer1_52(this, StaffUsers$Type, items1);
    }
  }
  callback3(StaffUsers$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { workAccounts: false, personalAccounts: false };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, StaffUsers$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = StaffUsers$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = StaffUsers$Type(outer1_1[6]);
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
          obj.workAccounts = pos.bool();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          obj.personalAccounts = pos.bool();
          tmp10 = tmp3;
          tmp11 = tmp4;
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
                let tmp12 = StaffUsers$Type;
                let tmp13 = outer1_1;
                onRead = StaffUsers$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
    value(workAccounts, tag, writeUnknownFields) {
      if (false !== workAccounts.workAccounts) {
        tag.tag(1, StaffUsers$Type(outer1_1[6]).WireType.Varint).bool(workAccounts.workAccounts);
        const tagResult = tag.tag(1, StaffUsers$Type(outer1_1[6]).WireType.Varint);
      }
      if (false !== workAccounts.personalAccounts) {
        tag.tag(2, StaffUsers$Type(outer1_1[6]).WireType.Varint).bool(workAccounts.personalAccounts);
        const tagResult1 = tag.tag(2, StaffUsers$Type(outer1_1[6]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = StaffUsers$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, workAccounts, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(StaffUsers$Type, items);
})(require("module_1284").MessageType);
tmp8 = new tmp8();
let closure_12 = tmp8;
let tmp10 = ((MessageType) => {
  class UserInGuild$Type {
    constructor() {
      tmp = outer1_3(this, UserInGuild$Type);
      items = [];
      items[0] = { no: 1, name: "guild_ids", kind: "scalar", repeat: 1, T: 6 };
      items1 = ["discord_protos.discord_experimentation.v1.UserInGuild"];
      items1[1] = items;
      items1[2] = { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" };
      return outer1_52(this, UserInGuild$Type, items1);
    }
  }
  callback3(UserInGuild$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { guildIds: [] };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, UserInGuild$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = UserInGuild$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = UserInGuild$Type(outer1_1[6]);
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
          let tmp28 = UserInGuild$Type;
          let tmp29 = outer1_1;
          if (tmp9 === UserInGuild$Type(outer1_1[6]).WireType.LengthDelimited) {
            let sum1 = pos.int32() + pos.pos;
            let tmp12 = tmp4;
            let tmp13 = tmp5;
            let tmp11 = sum1;
            if (pos.pos < sum1) {
              do {
                let guildIds = obj.guildIds;
                let str5 = pos.fixed64();
                let arr = guildIds.push(str5.toString());
                tmp11 = sum1;
                tmp12 = tmp4;
                tmp13 = tmp5;
                pos = pos.pos;
              } while (pos < sum1);
            }
          } else {
            let guildIds1 = obj.guildIds;
            let str4 = pos.fixed64();
            arr = guildIds1.push(str4.toString());
            tmp11 = tmp3;
            tmp12 = tmp4;
            tmp13 = tmp5;
          }
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
                let tmp14 = UserInGuild$Type;
                let tmp15 = outer1_1;
                onRead = UserInGuild$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
    value(guildIds, tag, writeUnknownFields) {
      let length;
      if (guildIds.guildIds.length) {
        tag.tag(1, UserInGuild$Type(outer1_1[6]).WireType.LengthDelimited).fork();
        let num3 = 0;
        if (0 < guildIds.guildIds.length) {
          do {
            let fixed64Result = tag.fixed64(guildIds.guildIds[num3]);
            num3 = num3 + 1;
            length = guildIds.guildIds.length;
          } while (num3 < length);
        }
        const joined = tag.join();
        const tagResult = tag.tag(1, UserInGuild$Type(outer1_1[6]).WireType.LengthDelimited);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = UserInGuild$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, guildIds, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(UserInGuild$Type, items);
})(require("module_1284").MessageType);
tmp10 = new tmp10();
let closure_13 = tmp10;
let tmp12 = ((MessageType) => {
  class UserIds$Type {
    constructor() {
      tmp = outer1_3(this, UserIds$Type);
      items = [];
      items[0] = { no: 1, name: "user_ids", kind: "scalar", repeat: 1, T: 6 };
      items1 = ["discord_protos.discord_experimentation.v1.UserIds"];
      items1[1] = items;
      items1[2] = { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" };
      return outer1_52(this, UserIds$Type, items1);
    }
  }
  callback3(UserIds$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { userIds: [] };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, UserIds$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = UserIds$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = UserIds$Type(outer1_1[6]);
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
          let tmp28 = UserIds$Type;
          let tmp29 = outer1_1;
          if (tmp9 === UserIds$Type(outer1_1[6]).WireType.LengthDelimited) {
            let sum1 = pos.int32() + pos.pos;
            let tmp12 = tmp4;
            let tmp13 = tmp5;
            let tmp11 = sum1;
            if (pos.pos < sum1) {
              do {
                let userIds = obj.userIds;
                let str5 = pos.fixed64();
                let arr = userIds.push(str5.toString());
                tmp11 = sum1;
                tmp12 = tmp4;
                tmp13 = tmp5;
                pos = pos.pos;
              } while (pos < sum1);
            }
          } else {
            let userIds1 = obj.userIds;
            let str4 = pos.fixed64();
            arr = userIds1.push(str4.toString());
            tmp11 = tmp3;
            tmp12 = tmp4;
            tmp13 = tmp5;
          }
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
                let tmp14 = UserIds$Type;
                let tmp15 = outer1_1;
                onRead = UserIds$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
    value(userIds, tag, writeUnknownFields) {
      let length;
      if (userIds.userIds.length) {
        tag.tag(1, UserIds$Type(outer1_1[6]).WireType.LengthDelimited).fork();
        let num3 = 0;
        if (0 < userIds.userIds.length) {
          do {
            let fixed64Result = tag.fixed64(userIds.userIds[num3]);
            num3 = num3 + 1;
            length = userIds.userIds.length;
          } while (num3 < length);
        }
        const joined = tag.join();
        const tagResult = tag.tag(1, UserIds$Type(outer1_1[6]).WireType.LengthDelimited);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = UserIds$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, userIds, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(UserIds$Type, items);
})(require("module_1284").MessageType);
tmp12 = new tmp12();
let closure_14 = tmp12;
let tmp14 = ((MessageType) => {
  class UserLocale$Type {
    constructor() {
      tmp = outer1_3(this, UserLocale$Type);
      items = [];
      items[0] = { no: 1, name: "locales", kind: "scalar", repeat: 2, T: 9 };
      items1 = ["discord_protos.discord_experimentation.v1.UserLocale"];
      items1[1] = items;
      items1[2] = { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" };
      return outer1_52(this, UserLocale$Type, items1);
    }
  }
  callback3(UserLocale$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { locales: [] };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, UserLocale$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = UserLocale$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = UserLocale$Type(outer1_1[6]);
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
          let locales = obj.locales;
          let arr = locales.push(pos.string());
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
                let tmp12 = UserLocale$Type;
                let tmp13 = outer1_1;
                onRead = UserLocale$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
    value(locales, tag, writeUnknownFields) {
      let length;
      let num = 0;
      if (0 < locales.locales.length) {
        do {
          let tmp = UserLocale$Type;
          let tmp2 = outer1_1;
          let tagResult = tag.tag(1, UserLocale$Type(outer1_1[6]).WireType.LengthDelimited);
          let stringResult = tagResult.string(locales.locales[num]);
          num = num + 1;
          length = locales.locales.length;
        } while (num < length);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = UserLocale$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, locales, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(UserLocale$Type, items);
})(require("module_1284").MessageType);
tmp14 = new tmp14();
let closure_15 = tmp14;
let tmp16 = ((MessageType) => {
  class ClientLocale$Type {
    constructor() {
      tmp = outer1_3(this, ClientLocale$Type);
      items = [];
      items[0] = { no: 1, name: "locales", kind: "scalar", repeat: 2, T: 9 };
      items1 = ["discord_protos.discord_experimentation.v1.ClientLocale"];
      items1[1] = items;
      items1[2] = { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" };
      return outer1_52(this, ClientLocale$Type, items1);
    }
  }
  callback3(ClientLocale$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { locales: [] };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, ClientLocale$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = ClientLocale$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = ClientLocale$Type(outer1_1[6]);
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
          let locales = obj.locales;
          let arr = locales.push(pos.string());
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
                let tmp12 = ClientLocale$Type;
                let tmp13 = outer1_1;
                onRead = ClientLocale$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
    value(locales, tag, writeUnknownFields) {
      let length;
      let num = 0;
      if (0 < locales.locales.length) {
        do {
          let tmp = ClientLocale$Type;
          let tmp2 = outer1_1;
          let tagResult = tag.tag(1, ClientLocale$Type(outer1_1[6]).WireType.LengthDelimited);
          let stringResult = tagResult.string(locales.locales[num]);
          num = num + 1;
          length = locales.locales.length;
        } while (num < length);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = ClientLocale$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, locales, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(ClientLocale$Type, items);
})(require("module_1284").MessageType);
tmp16 = new tmp16();
let closure_16 = tmp16;
let tmp18 = ((MessageType) => {
  class ClientSystemLocale$Type {
    constructor() {
      tmp = outer1_3(this, ClientSystemLocale$Type);
      items = [];
      items[0] = { no: 1, name: "locales", kind: "scalar", repeat: 2, T: 9 };
      items1 = ["discord_protos.discord_experimentation.v1.ClientSystemLocale"];
      items1[1] = items;
      items1[2] = { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" };
      return outer1_52(this, ClientSystemLocale$Type, items1);
    }
  }
  callback3(ClientSystemLocale$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { locales: [] };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, ClientSystemLocale$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = ClientSystemLocale$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = ClientSystemLocale$Type(outer1_1[6]);
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
          let locales = obj.locales;
          let arr = locales.push(pos.string());
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
                let tmp12 = ClientSystemLocale$Type;
                let tmp13 = outer1_1;
                onRead = ClientSystemLocale$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
    value(locales, tag, writeUnknownFields) {
      let length;
      let num = 0;
      if (0 < locales.locales.length) {
        do {
          let tmp = ClientSystemLocale$Type;
          let tmp2 = outer1_1;
          let tagResult = tag.tag(1, ClientSystemLocale$Type(outer1_1[6]).WireType.LengthDelimited);
          let stringResult = tagResult.string(locales.locales[num]);
          num = num + 1;
          length = locales.locales.length;
        } while (num < length);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = ClientSystemLocale$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, locales, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(ClientSystemLocale$Type, items);
})(require("module_1284").MessageType);
tmp18 = new tmp18();
let closure_17 = tmp18;
let tmp20 = ((MessageType) => {
  class ClientLocation$Type {
    constructor() {
      tmp = outer1_3(this, ClientLocation$Type);
      obj = { no: 1, name: "locations", kind: "message", repeat: 1 };
      obj.T = function T() {
        return outer2_21;
      };
      items = [];
      items[0] = obj;
      items1 = ["discord_protos.discord_experimentation.v1.ClientLocation"];
      items1[1] = items;
      items1[2] = { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" };
      return outer1_52(this, ClientLocation$Type, items1);
    }
  }
  callback3(ClientLocation$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { locations: [] };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, ClientLocation$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = ClientLocation$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = ClientLocation$Type(outer1_1[6]);
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
          let locations = obj.locations;
          let tmp26 = outer1_21;
          let arr = locations.push(outer1_21.internalBinaryRead(pos, pos.uint32(), readUnknownField));
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
                let tmp12 = ClientLocation$Type;
                let tmp13 = outer1_1;
                onRead = ClientLocation$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
    value(locations, tag, writeUnknownFields) {
      let length;
      let num = 0;
      if (0 < locations.locations.length) {
        do {
          let tmp = outer1_21;
          let tmp2 = ClientLocation$Type;
          let tmp3 = outer1_1;
          let tagResult = tag.tag(1, ClientLocation$Type(outer1_1[6]).WireType.LengthDelimited);
          let internalBinaryWriteResult = outer1_21.internalBinaryWrite(locations.locations[num], tagResult.fork(), writeUnknownFields);
          let joined = internalBinaryWriteResult.join();
          num = num + 1;
          length = locations.locations.length;
        } while (num < length);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = ClientLocation$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, locations, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(ClientLocation$Type, items);
})(require("module_1284").MessageType);
tmp20 = new tmp20();
let closure_18 = tmp20;
let tmp22 = ((MessageType) => {
  class ClientLocation_Place$Type {
    constructor() {
      tmp = outer1_3(this, ClientLocation_Place$Type);
      items = [, , ];
      items[0] = { no: 1, name: "city", kind: "scalar", T: 9 };
      items[1] = { no: 2, name: "subdivision", kind: "scalar", T: 9 };
      items[2] = { no: 3, name: "country", kind: "scalar", T: 9 };
      items1 = ["discord_protos.discord_experimentation.v1.ClientLocation.Place"];
      items1[1] = items;
      return outer1_52(this, ClientLocation_Place$Type, items1);
    }
  }
  callback3(ClientLocation_Place$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { city: "", subdivision: "", country: "" };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, ClientLocation_Place$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = ClientLocation_Place$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = ClientLocation_Place$Type(outer1_1[6]);
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
          obj.city = pos.string();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          obj.subdivision = pos.string();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          obj.country = pos.string();
          tmp10 = tmp3;
          tmp11 = tmp4;
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
                let tmp12 = ClientLocation_Place$Type;
                let tmp13 = outer1_1;
                onRead = ClientLocation_Place$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
    value(city, tag, writeUnknownFields) {
      if ("" !== city.city) {
        tag.tag(1, ClientLocation_Place$Type(outer1_1[6]).WireType.LengthDelimited).string(city.city);
        const tagResult = tag.tag(1, ClientLocation_Place$Type(outer1_1[6]).WireType.LengthDelimited);
      }
      if ("" !== city.subdivision) {
        tag.tag(2, ClientLocation_Place$Type(outer1_1[6]).WireType.LengthDelimited).string(city.subdivision);
        const tagResult1 = tag.tag(2, ClientLocation_Place$Type(outer1_1[6]).WireType.LengthDelimited);
      }
      if ("" !== city.country) {
        tag.tag(3, ClientLocation_Place$Type(outer1_1[6]).WireType.LengthDelimited).string(city.country);
        const tagResult2 = tag.tag(3, ClientLocation_Place$Type(outer1_1[6]).WireType.LengthDelimited);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = ClientLocation_Place$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, city, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(ClientLocation_Place$Type, items);
})(require("module_1284").MessageType);
tmp22 = new tmp22();
let closure_19 = tmp22;
let tmp24 = ((MessageType) => {
  class ClientLocation_ISORegion$Type {
    constructor() {
      tmp = outer1_3(this, ClientLocation_ISORegion$Type);
      items = [, ];
      items[0] = { no: 1, name: "iso_country", kind: "scalar", T: 9 };
      items[1] = { no: 2, name: "iso_subdivision", kind: "scalar", T: 9 };
      items1 = ["discord_protos.discord_experimentation.v1.ClientLocation.ISORegion"];
      items1[1] = items;
      return outer1_52(this, ClientLocation_ISORegion$Type, items1);
    }
  }
  callback3(ClientLocation_ISORegion$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { isoCountry: "", isoSubdivision: "" };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, ClientLocation_ISORegion$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = ClientLocation_ISORegion$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = ClientLocation_ISORegion$Type(outer1_1[6]);
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
          obj.isoCountry = pos.string();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          obj.isoSubdivision = pos.string();
          tmp10 = tmp3;
          tmp11 = tmp4;
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
                let tmp12 = ClientLocation_ISORegion$Type;
                let tmp13 = outer1_1;
                onRead = ClientLocation_ISORegion$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
    value(isoCountry, tag, writeUnknownFields) {
      if ("" !== isoCountry.isoCountry) {
        tag.tag(1, ClientLocation_ISORegion$Type(outer1_1[6]).WireType.LengthDelimited).string(isoCountry.isoCountry);
        const tagResult = tag.tag(1, ClientLocation_ISORegion$Type(outer1_1[6]).WireType.LengthDelimited);
      }
      if ("" !== isoCountry.isoSubdivision) {
        tag.tag(2, ClientLocation_ISORegion$Type(outer1_1[6]).WireType.LengthDelimited).string(isoCountry.isoSubdivision);
        const tagResult1 = tag.tag(2, ClientLocation_ISORegion$Type(outer1_1[6]).WireType.LengthDelimited);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = ClientLocation_ISORegion$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, isoCountry, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(ClientLocation_ISORegion$Type, items);
})(require("module_1284").MessageType);
tmp24 = new tmp24();
let closure_20 = tmp24;
let tmp26 = ((MessageType) => {
  class ClientLocation_Location$Type {
    constructor() {
      tmp = outer1_3(this, ClientLocation_Location$Type);
      obj = { no: 1, name: "iso_region", kind: "message", oneof: "location" };
      obj.T = function T() {
        return outer2_20;
      };
      items = [, , ];
      items[0] = obj;
      items[1] = { no: 2, name: "is_eu", kind: "scalar", oneof: "location", T: 8 };
      obj = { no: 3, name: "place", kind: "message", oneof: "location" };
      obj.T = function T() {
        return outer2_19;
      };
      items[2] = obj;
      items1 = ["discord_protos.discord_experimentation.v1.ClientLocation.Location"];
      items1[1] = items;
      return outer1_52(this, ClientLocation_Location$Type, items1);
    }
  }
  callback3(ClientLocation_Location$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { location: { oneofKind: undefined } };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, ClientLocation_Location$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = ClientLocation_Location$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = ClientLocation_Location$Type(outer1_1[6]);
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
          obj = { oneofKind: "isoRegion" };
          let tmp30 = outer1_20;
          let tmp31 = outer1_20;
          let tmp32 = pos;
          let tmp33 = readUnknownField;
          obj.isoRegion = outer1_20.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.location.isoRegion);
          obj.location = obj;
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          let obj1 = { oneofKind: "isEu", isEu: pos.bool() };
          obj.location = obj1;
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          obj = { oneofKind: "place" };
          let tmp26 = outer1_19;
          let tmp27 = outer1_19;
          let tmp28 = pos;
          let tmp29 = readUnknownField;
          obj.place = outer1_19.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.location.place);
          obj.location = obj;
          tmp10 = tmp3;
          tmp11 = tmp4;
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
                let tmp12 = ClientLocation_Location$Type;
                let tmp13 = outer1_1;
                onRead = ClientLocation_Location$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
    value(location, tag, writeUnknownFields) {
      if ("isoRegion" === location.location.oneofKind) {
        const tagResult = tag.tag(1, ClientLocation_Location$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined = outer1_20.internalBinaryWrite(location.location.isoRegion, tag.tag(1, ClientLocation_Location$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = outer1_20.internalBinaryWrite(location.location.isoRegion, tag.tag(1, ClientLocation_Location$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("isEu" === location.location.oneofKind) {
        tag.tag(2, ClientLocation_Location$Type(outer1_1[6]).WireType.Varint).bool(location.location.isEu);
        const tagResult1 = tag.tag(2, ClientLocation_Location$Type(outer1_1[6]).WireType.Varint);
      }
      if ("place" === location.location.oneofKind) {
        const tagResult2 = tag.tag(3, ClientLocation_Location$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined1 = outer1_19.internalBinaryWrite(location.location.place, tag.tag(3, ClientLocation_Location$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = outer1_19.internalBinaryWrite(location.location.place, tag.tag(3, ClientLocation_Location$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = ClientLocation_Location$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, location, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(ClientLocation_Location$Type, items);
})(require("module_1284").MessageType);
tmp26 = new tmp26();
let closure_21 = tmp26;
let tmp28 = ((MessageType) => {
  class UserLocation$Type {
    constructor() {
      tmp = outer1_3(this, UserLocation$Type);
      obj = { no: 1, name: "locations", kind: "message", repeat: 1 };
      obj.T = function T() {
        return outer2_21;
      };
      items = [, ];
      items[0] = obj;
      items[1] = { no: 2, name: "prefer_client_ip", kind: "scalar", T: 8 };
      items1 = ["discord_protos.discord_experimentation.v1.UserLocation"];
      items1[1] = items;
      items1[2] = { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" };
      return outer1_52(this, UserLocation$Type, items1);
    }
  }
  callback3(UserLocation$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { locations: [], preferClientIp: false };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, UserLocation$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = UserLocation$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = UserLocation$Type(outer1_1[6]);
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
          let locations = obj.locations;
          let tmp26 = outer1_21;
          let arr = locations.push(outer1_21.internalBinaryRead(pos, pos.uint32(), readUnknownField));
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          obj.preferClientIp = pos.bool();
          tmp10 = tmp3;
          tmp11 = tmp4;
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
                let tmp12 = UserLocation$Type;
                let tmp13 = outer1_1;
                onRead = UserLocation$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
    value(locations, tag, writeUnknownFields) {
      let length;
      let num = 0;
      if (0 < locations.locations.length) {
        do {
          let tmp = outer1_21;
          let tmp2 = UserLocation$Type;
          let tmp3 = outer1_1;
          let tagResult = tag.tag(1, UserLocation$Type(outer1_1[6]).WireType.LengthDelimited);
          let internalBinaryWriteResult = outer1_21.internalBinaryWrite(locations.locations[num], tagResult.fork(), writeUnknownFields);
          let joined = internalBinaryWriteResult.join();
          num = num + 1;
          length = locations.locations.length;
        } while (num < length);
      }
      if (false !== locations.preferClientIp) {
        tag.tag(2, UserLocation$Type(outer1_1[6]).WireType.Varint).bool(locations.preferClientIp);
        const tagResult1 = tag.tag(2, UserLocation$Type(outer1_1[6]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = UserLocation$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, locations, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(UserLocation$Type, items);
})(require("module_1284").MessageType);
tmp28 = new tmp28();
let closure_22 = tmp28;
let tmp30 = ((MessageType) => {
  class ClientIP$Type {
    constructor() {
      tmp = outer1_3(this, ClientIP$Type);
      items = [];
      items[0] = { no: 1, name: "blocks", kind: "scalar", repeat: 2, T: 9 };
      items1 = ["discord_protos.discord_experimentation.v1.ClientIP"];
      items1[1] = items;
      items1[2] = { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" };
      return outer1_52(this, ClientIP$Type, items1);
    }
  }
  callback3(ClientIP$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { blocks: [] };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, ClientIP$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = ClientIP$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = ClientIP$Type(outer1_1[6]);
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
          let blocks = obj.blocks;
          let arr = blocks.push(pos.string());
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
                let tmp12 = ClientIP$Type;
                let tmp13 = outer1_1;
                onRead = ClientIP$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
    value(blocks, tag, writeUnknownFields) {
      let length;
      let num = 0;
      if (0 < blocks.blocks.length) {
        do {
          let tmp = ClientIP$Type;
          let tmp2 = outer1_1;
          let tagResult = tag.tag(1, ClientIP$Type(outer1_1[6]).WireType.LengthDelimited);
          let stringResult = tagResult.string(blocks.blocks[num]);
          num = num + 1;
          length = blocks.blocks.length;
        } while (num < length);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = ClientIP$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, blocks, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(ClientIP$Type, items);
})(require("module_1284").MessageType);
tmp30 = new tmp30();
let closure_23 = tmp30;
let tmp32 = ((MessageType) => {
  class UserIP$Type {
    constructor() {
      tmp = outer1_3(this, UserIP$Type);
      items = [, ];
      items[0] = { no: 1, name: "blocks", kind: "scalar", repeat: 2, T: 9 };
      items[1] = { no: 2, name: "prefer_client_ip", kind: "scalar", T: 8 };
      items1 = ["discord_protos.discord_experimentation.v1.UserIP"];
      items1[1] = items;
      items1[2] = { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" };
      return outer1_52(this, UserIP$Type, items1);
    }
  }
  callback3(UserIP$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { blocks: [], preferClientIp: false };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, UserIP$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = UserIP$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = UserIP$Type(outer1_1[6]);
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
          let blocks = obj.blocks;
          let arr = blocks.push(pos.string());
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          obj.preferClientIp = pos.bool();
          tmp10 = tmp3;
          tmp11 = tmp4;
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
                let tmp12 = UserIP$Type;
                let tmp13 = outer1_1;
                onRead = UserIP$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
    value(blocks, tag, writeUnknownFields) {
      let length;
      let num = 0;
      if (0 < blocks.blocks.length) {
        do {
          let tmp = UserIP$Type;
          let tmp2 = outer1_1;
          let tagResult = tag.tag(1, UserIP$Type(outer1_1[6]).WireType.LengthDelimited);
          let stringResult = tagResult.string(blocks.blocks[num]);
          num = num + 1;
          length = blocks.blocks.length;
        } while (num < length);
      }
      if (false !== blocks.preferClientIp) {
        tag.tag(2, UserIP$Type(outer1_1[6]).WireType.Varint).bool(blocks.preferClientIp);
        const tagResult1 = tag.tag(2, UserIP$Type(outer1_1[6]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = UserIP$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, blocks, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(UserIP$Type, items);
})(require("module_1284").MessageType);
tmp32 = new tmp32();
let closure_24 = tmp32;
let tmp34 = ((MessageType) => {
  class ClientOperatingSystem$Type {
    constructor() {
      tmp = outer1_3(this, ClientOperatingSystem$Type);
      obj = { no: 1, name: "ios_version", kind: "message" };
      obj.T = function T() {
        return outer2_26;
      };
      items = [, , , , , , ];
      items[0] = obj;
      obj = { no: 2, name: "android_version", kind: "message" };
      obj.T = function T() {
        return outer2_26;
      };
      items[1] = obj;
      obj1 = { no: 3, name: "macos_version", kind: "message" };
      obj1.T = function T() {
        return outer2_26;
      };
      items[2] = obj1;
      obj2 = { no: 4, name: "windows_version", kind: "message" };
      obj2.T = function T() {
        return outer2_26;
      };
      items[3] = obj2;
      obj3 = { no: 5, name: "playstation_version", kind: "message" };
      obj3.T = function T() {
        return outer2_26;
      };
      items[4] = obj3;
      obj4 = { no: 6, name: "xbox_version", kind: "message" };
      obj4.T = function T() {
        return outer2_26;
      };
      items[5] = obj4;
      obj5 = { no: 7, name: "linux_version", kind: "message" };
      obj5.T = function T() {
        return outer2_26;
      };
      items[6] = obj5;
      items1 = ["discord_protos.discord_experimentation.v1.ClientOperatingSystem"];
      items1[1] = items;
      items1[2] = { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" };
      return outer1_52(this, ClientOperatingSystem$Type, items1);
    }
  }
  callback3(ClientOperatingSystem$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, ClientOperatingSystem$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = ClientOperatingSystem$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = ClientOperatingSystem$Type(outer1_1[6]);
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
          let tmp50 = outer1_26;
          let tmp51 = outer1_26;
          let tmp52 = pos;
          let tmp53 = readUnknownField;
          obj.iosVersion = outer1_26.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.iosVersion);
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          let tmp46 = outer1_26;
          let tmp47 = outer1_26;
          let tmp48 = pos;
          let tmp49 = readUnknownField;
          obj.androidVersion = outer1_26.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.androidVersion);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          let tmp42 = outer1_26;
          let tmp43 = outer1_26;
          let tmp44 = pos;
          let tmp45 = readUnknownField;
          obj.macosVersion = outer1_26.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.macosVersion);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (4 === tmp7) {
          let tmp38 = outer1_26;
          let tmp39 = outer1_26;
          let tmp40 = pos;
          let tmp41 = readUnknownField;
          obj.windowsVersion = outer1_26.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.windowsVersion);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (5 === tmp7) {
          let tmp34 = outer1_26;
          let tmp35 = outer1_26;
          let tmp36 = pos;
          let tmp37 = readUnknownField;
          obj.playstationVersion = outer1_26.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.playstationVersion);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (6 === tmp7) {
          let tmp30 = outer1_26;
          let tmp31 = outer1_26;
          let tmp32 = pos;
          let tmp33 = readUnknownField;
          obj.xboxVersion = outer1_26.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.xboxVersion);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (7 === tmp7) {
          let tmp26 = outer1_26;
          let tmp27 = outer1_26;
          let tmp28 = pos;
          let tmp29 = readUnknownField;
          obj.linuxVersion = outer1_26.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.linuxVersion);
          tmp10 = tmp3;
          tmp11 = tmp4;
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
                let tmp12 = ClientOperatingSystem$Type;
                let tmp13 = outer1_1;
                onRead = ClientOperatingSystem$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
    value(iosVersion, tag, writeUnknownFields) {
      if (iosVersion.iosVersion) {
        const tagResult = tag.tag(1, ClientOperatingSystem$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined = outer1_26.internalBinaryWrite(iosVersion.iosVersion, tag.tag(1, ClientOperatingSystem$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = outer1_26.internalBinaryWrite(iosVersion.iosVersion, tag.tag(1, ClientOperatingSystem$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (iosVersion.androidVersion) {
        const tagResult1 = tag.tag(2, ClientOperatingSystem$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined1 = outer1_26.internalBinaryWrite(iosVersion.androidVersion, tag.tag(2, ClientOperatingSystem$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = outer1_26.internalBinaryWrite(iosVersion.androidVersion, tag.tag(2, ClientOperatingSystem$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (iosVersion.macosVersion) {
        const tagResult2 = tag.tag(3, ClientOperatingSystem$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined2 = outer1_26.internalBinaryWrite(iosVersion.macosVersion, tag.tag(3, ClientOperatingSystem$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = outer1_26.internalBinaryWrite(iosVersion.macosVersion, tag.tag(3, ClientOperatingSystem$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (iosVersion.windowsVersion) {
        const tagResult3 = tag.tag(4, ClientOperatingSystem$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined3 = outer1_26.internalBinaryWrite(iosVersion.windowsVersion, tag.tag(4, ClientOperatingSystem$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult3 = outer1_26.internalBinaryWrite(iosVersion.windowsVersion, tag.tag(4, ClientOperatingSystem$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (iosVersion.playstationVersion) {
        const tagResult4 = tag.tag(5, ClientOperatingSystem$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined4 = outer1_26.internalBinaryWrite(iosVersion.playstationVersion, tag.tag(5, ClientOperatingSystem$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult4 = outer1_26.internalBinaryWrite(iosVersion.playstationVersion, tag.tag(5, ClientOperatingSystem$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (iosVersion.xboxVersion) {
        const tagResult5 = tag.tag(6, ClientOperatingSystem$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined5 = outer1_26.internalBinaryWrite(iosVersion.xboxVersion, tag.tag(6, ClientOperatingSystem$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult5 = outer1_26.internalBinaryWrite(iosVersion.xboxVersion, tag.tag(6, ClientOperatingSystem$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (iosVersion.linuxVersion) {
        const tagResult6 = tag.tag(7, ClientOperatingSystem$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined6 = outer1_26.internalBinaryWrite(iosVersion.linuxVersion, tag.tag(7, ClientOperatingSystem$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult6 = outer1_26.internalBinaryWrite(iosVersion.linuxVersion, tag.tag(7, ClientOperatingSystem$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = ClientOperatingSystem$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, iosVersion, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(ClientOperatingSystem$Type, items);
})(require("module_1284").MessageType);
tmp34 = new tmp34();
let closure_25 = tmp34;
let tmp36 = ((MessageType) => {
  class SDKVersion$Type {
    constructor() {
      tmp = outer1_3(this, SDKVersion$Type);
      obj = { no: 1, name: "ranges", kind: "message", repeat: 1 };
      obj.T = function T() {
        return outer2_27;
      };
      items = [, ];
      items[0] = obj;
      items[1] = { no: 2, name: "work_around_pyoto_bug", kind: "scalar", T: 8 };
      items1 = ["discord_protos.discord_experimentation.v1.SDKVersion"];
      items1[1] = items;
      return outer1_52(this, SDKVersion$Type, items1);
    }
  }
  callback3(SDKVersion$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { ranges: [], workAroundPyotoBug: false };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, SDKVersion$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = SDKVersion$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = SDKVersion$Type(outer1_1[6]);
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
          let ranges = obj.ranges;
          let tmp26 = outer1_27;
          let arr = ranges.push(outer1_27.internalBinaryRead(pos, pos.uint32(), readUnknownField));
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          obj.workAroundPyotoBug = pos.bool();
          tmp10 = tmp3;
          tmp11 = tmp4;
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
                let tmp12 = SDKVersion$Type;
                let tmp13 = outer1_1;
                onRead = SDKVersion$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
    value(ranges, tag, writeUnknownFields) {
      let length;
      let num = 0;
      if (0 < ranges.ranges.length) {
        do {
          let tmp = outer1_27;
          let tmp2 = SDKVersion$Type;
          let tmp3 = outer1_1;
          let tagResult = tag.tag(1, SDKVersion$Type(outer1_1[6]).WireType.LengthDelimited);
          let internalBinaryWriteResult = outer1_27.internalBinaryWrite(ranges.ranges[num], tagResult.fork(), writeUnknownFields);
          let joined = internalBinaryWriteResult.join();
          num = num + 1;
          length = ranges.ranges.length;
        } while (num < length);
      }
      if (false !== ranges.workAroundPyotoBug) {
        tag.tag(2, SDKVersion$Type(outer1_1[6]).WireType.Varint).bool(ranges.workAroundPyotoBug);
        const tagResult1 = tag.tag(2, SDKVersion$Type(outer1_1[6]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = SDKVersion$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, ranges, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(SDKVersion$Type, items);
})(require("module_1284").MessageType);
tmp36 = new tmp36();
let closure_26 = tmp36;
let tmp38 = ((MessageType) => {
  class SDKVersionRange$Type {
    constructor() {
      tmp = outer1_3(this, SDKVersionRange$Type);
      obj = { no: 1, name: "lower_bound", kind: "message" };
      obj.T = function T() {
        return outer2_28;
      };
      items = [, ];
      items[0] = obj;
      obj = { no: 2, name: "upper_bound", kind: "message" };
      obj.T = function T() {
        return outer2_28;
      };
      items[1] = obj;
      items1 = ["discord_protos.discord_experimentation.v1.SDKVersionRange"];
      items1[1] = items;
      return outer1_52(this, SDKVersionRange$Type, items1);
    }
  }
  callback3(SDKVersionRange$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, SDKVersionRange$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = SDKVersionRange$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = SDKVersionRange$Type(outer1_1[6]);
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
          let tmp30 = outer1_28;
          let tmp31 = outer1_28;
          let tmp32 = pos;
          let tmp33 = readUnknownField;
          obj.lowerBound = outer1_28.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.lowerBound);
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          let tmp26 = outer1_28;
          let tmp27 = outer1_28;
          let tmp28 = pos;
          let tmp29 = readUnknownField;
          obj.upperBound = outer1_28.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.upperBound);
          tmp10 = tmp3;
          tmp11 = tmp4;
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
                let tmp12 = SDKVersionRange$Type;
                let tmp13 = outer1_1;
                onRead = SDKVersionRange$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
    value(lowerBound, tag, writeUnknownFields) {
      if (lowerBound.lowerBound) {
        const tagResult = tag.tag(1, SDKVersionRange$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined = outer1_28.internalBinaryWrite(lowerBound.lowerBound, tag.tag(1, SDKVersionRange$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = outer1_28.internalBinaryWrite(lowerBound.lowerBound, tag.tag(1, SDKVersionRange$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (lowerBound.upperBound) {
        const tagResult1 = tag.tag(2, SDKVersionRange$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined1 = outer1_28.internalBinaryWrite(lowerBound.upperBound, tag.tag(2, SDKVersionRange$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = outer1_28.internalBinaryWrite(lowerBound.upperBound, tag.tag(2, SDKVersionRange$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = SDKVersionRange$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, lowerBound, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(SDKVersionRange$Type, items);
})(require("module_1284").MessageType);
tmp38 = new tmp38();
let closure_27 = tmp38;
let tmp40 = ((MessageType) => {
  class SDKVersionRangeBound$Type {
    constructor() {
      tmp = outer1_3(this, SDKVersionRangeBound$Type);
      obj = { no: 1, name: "version", kind: "message" };
      obj.T = function T() {
        return outer2_29;
      };
      items = [, ];
      items[0] = obj;
      items[1] = { no: 2, name: "inclusive", kind: "scalar", T: 8 };
      items1 = ["discord_protos.discord_experimentation.v1.SDKVersionRangeBound"];
      items1[1] = items;
      return outer1_52(this, SDKVersionRangeBound$Type, items1);
    }
  }
  callback3(SDKVersionRangeBound$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { inclusive: false };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, SDKVersionRangeBound$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = SDKVersionRangeBound$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = SDKVersionRangeBound$Type(outer1_1[6]);
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
          let tmp26 = outer1_29;
          let tmp27 = outer1_29;
          let tmp28 = pos;
          let tmp29 = readUnknownField;
          obj.version = outer1_29.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.version);
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          obj.inclusive = pos.bool();
          tmp10 = tmp3;
          tmp11 = tmp4;
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
                let tmp12 = SDKVersionRangeBound$Type;
                let tmp13 = outer1_1;
                onRead = SDKVersionRangeBound$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
    value(version, tag, writeUnknownFields) {
      if (version.version) {
        const tagResult = tag.tag(1, SDKVersionRangeBound$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined = outer1_29.internalBinaryWrite(version.version, tag.tag(1, SDKVersionRangeBound$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = outer1_29.internalBinaryWrite(version.version, tag.tag(1, SDKVersionRangeBound$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (false !== version.inclusive) {
        tag.tag(2, SDKVersionRangeBound$Type(outer1_1[6]).WireType.Varint).bool(version.inclusive);
        const tagResult1 = tag.tag(2, SDKVersionRangeBound$Type(outer1_1[6]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = SDKVersionRangeBound$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, version, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(SDKVersionRangeBound$Type, items);
})(require("module_1284").MessageType);
tmp40 = new tmp40();
let closure_28 = tmp40;
let tmp42 = ((MessageType) => {
  class SDKVersionSpecifier$Type {
    constructor() {
      tmp = outer1_3(this, SDKVersionSpecifier$Type);
      items = [];
      items[0] = { no: 1, name: "version", kind: "scalar", T: 5 };
      items1 = ["discord_protos.discord_experimentation.v1.SDKVersionSpecifier"];
      items1[1] = items;
      return outer1_52(this, SDKVersionSpecifier$Type, items1);
    }
  }
  callback3(SDKVersionSpecifier$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { version: 0 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, SDKVersionSpecifier$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = SDKVersionSpecifier$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = SDKVersionSpecifier$Type(outer1_1[6]);
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
          obj.version = pos.int32();
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
                let tmp12 = SDKVersionSpecifier$Type;
                let tmp13 = outer1_1;
                onRead = SDKVersionSpecifier$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
    value(version, tag, writeUnknownFields) {
      if (0 !== version.version) {
        tag.tag(1, SDKVersionSpecifier$Type(outer1_1[6]).WireType.Varint).int32(version.version);
        const tagResult = tag.tag(1, SDKVersionSpecifier$Type(outer1_1[6]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = SDKVersionSpecifier$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, version, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(SDKVersionSpecifier$Type, items);
})(require("module_1284").MessageType);
tmp42 = new tmp42();
let closure_29 = tmp42;
let tmp44 = ((MessageType) => {
  class ClientPlatform$Type {
    constructor() {
      tmp = outer1_3(this, ClientPlatform$Type);
      obj = { no: 1, name: "ios_version", kind: "message" };
      obj.T = function T() {
        return outer2_31;
      };
      items = [, , , , , ];
      items[0] = obj;
      obj = { no: 2, name: "android_version", kind: "message" };
      obj.T = function T() {
        return outer2_31;
      };
      items[1] = obj;
      obj1 = { no: 3, name: "web_version", kind: "message" };
      obj1.T = function T() {
        return outer2_31;
      };
      items[2] = obj1;
      obj2 = { no: 4, name: "native_version", kind: "message" };
      obj2.T = function T() {
        return outer2_31;
      };
      items[3] = obj2;
      items[4] = { no: 6, name: "allow_non_native_web", kind: "scalar", T: 8 };
      obj3 = { no: 5, name: "client_required_changes", kind: "message" };
      obj3.T = function T() {
        return outer2_35;
      };
      items[5] = obj3;
      items1 = ["discord_protos.discord_experimentation.v1.ClientPlatform"];
      items1[1] = items;
      items1[2] = { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" };
      return outer1_52(this, ClientPlatform$Type, items1);
    }
  }
  callback3(ClientPlatform$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { allowNonNativeWeb: false };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, ClientPlatform$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = ClientPlatform$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = ClientPlatform$Type(outer1_1[6]);
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
          let tmp42 = outer1_31;
          let tmp43 = outer1_31;
          let tmp44 = pos;
          let tmp45 = readUnknownField;
          obj.iosVersion = outer1_31.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.iosVersion);
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          let tmp38 = outer1_31;
          let tmp39 = outer1_31;
          let tmp40 = pos;
          let tmp41 = readUnknownField;
          obj.androidVersion = outer1_31.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.androidVersion);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          let tmp34 = outer1_31;
          let tmp35 = outer1_31;
          let tmp36 = pos;
          let tmp37 = readUnknownField;
          obj.webVersion = outer1_31.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.webVersion);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (4 === tmp7) {
          let tmp30 = outer1_31;
          let tmp31 = outer1_31;
          let tmp32 = pos;
          let tmp33 = readUnknownField;
          obj.nativeVersion = outer1_31.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.nativeVersion);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (6 === tmp7) {
          obj.allowNonNativeWeb = pos.bool();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (5 === tmp7) {
          let tmp26 = outer1_35;
          let tmp27 = outer1_35;
          let tmp28 = pos;
          let tmp29 = readUnknownField;
          obj.clientRequiredChanges = outer1_35.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.clientRequiredChanges);
          tmp10 = tmp3;
          tmp11 = tmp4;
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
                let tmp12 = ClientPlatform$Type;
                let tmp13 = outer1_1;
                onRead = ClientPlatform$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
    value(iosVersion, tag, writeUnknownFields) {
      if (iosVersion.iosVersion) {
        const tagResult = tag.tag(1, ClientPlatform$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined = outer1_31.internalBinaryWrite(iosVersion.iosVersion, tag.tag(1, ClientPlatform$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = outer1_31.internalBinaryWrite(iosVersion.iosVersion, tag.tag(1, ClientPlatform$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (iosVersion.androidVersion) {
        const tagResult1 = tag.tag(2, ClientPlatform$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined1 = outer1_31.internalBinaryWrite(iosVersion.androidVersion, tag.tag(2, ClientPlatform$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = outer1_31.internalBinaryWrite(iosVersion.androidVersion, tag.tag(2, ClientPlatform$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (iosVersion.webVersion) {
        const tagResult2 = tag.tag(3, ClientPlatform$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined2 = outer1_31.internalBinaryWrite(iosVersion.webVersion, tag.tag(3, ClientPlatform$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = outer1_31.internalBinaryWrite(iosVersion.webVersion, tag.tag(3, ClientPlatform$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (iosVersion.nativeVersion) {
        const tagResult3 = tag.tag(4, ClientPlatform$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined3 = outer1_31.internalBinaryWrite(iosVersion.nativeVersion, tag.tag(4, ClientPlatform$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult3 = outer1_31.internalBinaryWrite(iosVersion.nativeVersion, tag.tag(4, ClientPlatform$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (false !== iosVersion.allowNonNativeWeb) {
        tag.tag(6, ClientPlatform$Type(outer1_1[6]).WireType.Varint).bool(iosVersion.allowNonNativeWeb);
        const tagResult4 = tag.tag(6, ClientPlatform$Type(outer1_1[6]).WireType.Varint);
      }
      if (iosVersion.clientRequiredChanges) {
        const tagResult5 = tag.tag(5, ClientPlatform$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined4 = outer1_35.internalBinaryWrite(iosVersion.clientRequiredChanges, tag.tag(5, ClientPlatform$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult4 = outer1_35.internalBinaryWrite(iosVersion.clientRequiredChanges, tag.tag(5, ClientPlatform$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = ClientPlatform$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, iosVersion, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(ClientPlatform$Type, items);
})(require("module_1284").MessageType);
tmp44 = new tmp44();
let closure_30 = tmp44;
let tmp46 = ((MessageType) => {
  class PlatformVersion$Type {
    constructor() {
      tmp = outer1_3(this, PlatformVersion$Type);
      obj = { no: 1, name: "ranges", kind: "message", repeat: 1 };
      obj.T = function T() {
        return outer2_32;
      };
      items = [, ];
      items[0] = obj;
      items[1] = { no: 2, name: "work_around_pyoto_bug", kind: "scalar", T: 8 };
      items1 = ["discord_protos.discord_experimentation.v1.PlatformVersion"];
      items1[1] = items;
      return outer1_52(this, PlatformVersion$Type, items1);
    }
  }
  callback3(PlatformVersion$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { ranges: [], workAroundPyotoBug: false };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, PlatformVersion$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = PlatformVersion$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = PlatformVersion$Type(outer1_1[6]);
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
          let ranges = obj.ranges;
          let tmp26 = outer1_32;
          let arr = ranges.push(outer1_32.internalBinaryRead(pos, pos.uint32(), readUnknownField));
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          obj.workAroundPyotoBug = pos.bool();
          tmp10 = tmp3;
          tmp11 = tmp4;
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
                let tmp12 = PlatformVersion$Type;
                let tmp13 = outer1_1;
                onRead = PlatformVersion$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
    value(ranges, tag, writeUnknownFields) {
      let length;
      let num = 0;
      if (0 < ranges.ranges.length) {
        do {
          let tmp = outer1_32;
          let tmp2 = PlatformVersion$Type;
          let tmp3 = outer1_1;
          let tagResult = tag.tag(1, PlatformVersion$Type(outer1_1[6]).WireType.LengthDelimited);
          let internalBinaryWriteResult = outer1_32.internalBinaryWrite(ranges.ranges[num], tagResult.fork(), writeUnknownFields);
          let joined = internalBinaryWriteResult.join();
          num = num + 1;
          length = ranges.ranges.length;
        } while (num < length);
      }
      if (false !== ranges.workAroundPyotoBug) {
        tag.tag(2, PlatformVersion$Type(outer1_1[6]).WireType.Varint).bool(ranges.workAroundPyotoBug);
        const tagResult1 = tag.tag(2, PlatformVersion$Type(outer1_1[6]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = PlatformVersion$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, ranges, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(PlatformVersion$Type, items);
})(require("module_1284").MessageType);
tmp46 = new tmp46();
let closure_31 = tmp46;
let tmp48 = ((MessageType) => {
  class PlatformVersionRange$Type {
    constructor() {
      tmp = outer1_3(this, PlatformVersionRange$Type);
      obj = { no: 1, name: "lower_bound", kind: "message" };
      obj.T = function T() {
        return outer2_33;
      };
      items = [, ];
      items[0] = obj;
      obj = { no: 2, name: "upper_bound", kind: "message" };
      obj.T = function T() {
        return outer2_33;
      };
      items[1] = obj;
      items1 = ["discord_protos.discord_experimentation.v1.PlatformVersionRange"];
      items1[1] = items;
      return outer1_52(this, PlatformVersionRange$Type, items1);
    }
  }
  callback3(PlatformVersionRange$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, PlatformVersionRange$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = PlatformVersionRange$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = PlatformVersionRange$Type(outer1_1[6]);
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
          let tmp30 = outer1_33;
          let tmp31 = outer1_33;
          let tmp32 = pos;
          let tmp33 = readUnknownField;
          obj.lowerBound = outer1_33.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.lowerBound);
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          let tmp26 = outer1_33;
          let tmp27 = outer1_33;
          let tmp28 = pos;
          let tmp29 = readUnknownField;
          obj.upperBound = outer1_33.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.upperBound);
          tmp10 = tmp3;
          tmp11 = tmp4;
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
                let tmp12 = PlatformVersionRange$Type;
                let tmp13 = outer1_1;
                onRead = PlatformVersionRange$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
    value(lowerBound, tag, writeUnknownFields) {
      if (lowerBound.lowerBound) {
        const tagResult = tag.tag(1, PlatformVersionRange$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined = outer1_33.internalBinaryWrite(lowerBound.lowerBound, tag.tag(1, PlatformVersionRange$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = outer1_33.internalBinaryWrite(lowerBound.lowerBound, tag.tag(1, PlatformVersionRange$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (lowerBound.upperBound) {
        const tagResult1 = tag.tag(2, PlatformVersionRange$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined1 = outer1_33.internalBinaryWrite(lowerBound.upperBound, tag.tag(2, PlatformVersionRange$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = outer1_33.internalBinaryWrite(lowerBound.upperBound, tag.tag(2, PlatformVersionRange$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = PlatformVersionRange$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, lowerBound, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(PlatformVersionRange$Type, items);
})(require("module_1284").MessageType);
tmp48 = new tmp48();
let closure_32 = tmp48;
let tmp50 = ((MessageType) => {
  class PlatformVersionRangeBound$Type {
    constructor() {
      tmp = outer1_3(this, PlatformVersionRangeBound$Type);
      obj = { no: 1, name: "version", kind: "message" };
      obj.T = function T() {
        return outer2_34;
      };
      items = [, ];
      items[0] = obj;
      items[1] = { no: 2, name: "inclusive", kind: "scalar", T: 8 };
      items1 = ["discord_protos.discord_experimentation.v1.PlatformVersionRangeBound"];
      items1[1] = items;
      return outer1_52(this, PlatformVersionRangeBound$Type, items1);
    }
  }
  callback3(PlatformVersionRangeBound$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { inclusive: false };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, PlatformVersionRangeBound$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = PlatformVersionRangeBound$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = PlatformVersionRangeBound$Type(outer1_1[6]);
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
          let tmp26 = outer1_34;
          let tmp27 = outer1_34;
          let tmp28 = pos;
          let tmp29 = readUnknownField;
          obj.version = outer1_34.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.version);
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          obj.inclusive = pos.bool();
          tmp10 = tmp3;
          tmp11 = tmp4;
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
                let tmp12 = PlatformVersionRangeBound$Type;
                let tmp13 = outer1_1;
                onRead = PlatformVersionRangeBound$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
    value(version, tag, writeUnknownFields) {
      if (version.version) {
        const tagResult = tag.tag(1, PlatformVersionRangeBound$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined = outer1_34.internalBinaryWrite(version.version, tag.tag(1, PlatformVersionRangeBound$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = outer1_34.internalBinaryWrite(version.version, tag.tag(1, PlatformVersionRangeBound$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (false !== version.inclusive) {
        tag.tag(2, PlatformVersionRangeBound$Type(outer1_1[6]).WireType.Varint).bool(version.inclusive);
        const tagResult1 = tag.tag(2, PlatformVersionRangeBound$Type(outer1_1[6]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = PlatformVersionRangeBound$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, version, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(PlatformVersionRangeBound$Type, items);
})(require("module_1284").MessageType);
tmp50 = new tmp50();
let closure_33 = tmp50;
let tmp52 = ((MessageType) => {
  class PlatformVersionSpecifier$Type {
    constructor() {
      tmp = outer1_3(this, PlatformVersionSpecifier$Type);
      items = [, , ];
      items[0] = { no: 1, name: "major", kind: "scalar", T: 13 };
      obj = { no: 2, name: "minor", kind: "message" };
      obj.T = function T() {
        return PlatformVersionSpecifier$Type(outer2_1[7]).UInt32Value;
      };
      items[1] = obj;
      obj = { no: 3, name: "build", kind: "message" };
      obj.T = function T() {
        return PlatformVersionSpecifier$Type(outer2_1[7]).UInt64Value;
      };
      items[2] = obj;
      items1 = ["discord_protos.discord_experimentation.v1.PlatformVersionSpecifier"];
      items1[1] = items;
      return outer1_52(this, PlatformVersionSpecifier$Type, items1);
    }
  }
  callback3(PlatformVersionSpecifier$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { major: 0 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, PlatformVersionSpecifier$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = PlatformVersionSpecifier$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = PlatformVersionSpecifier$Type(outer1_1[6]);
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
          obj.major = pos.uint32();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          let tmp31 = PlatformVersionSpecifier$Type;
          let tmp32 = outer1_1;
          let UInt32Value = PlatformVersionSpecifier$Type(outer1_1[7]).UInt32Value;
          let tmp33 = UInt32Value;
          let tmp34 = pos;
          let tmp35 = readUnknownField;
          obj.minor = UInt32Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.minor);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          let tmp26 = PlatformVersionSpecifier$Type;
          let tmp27 = outer1_1;
          let UInt64Value = PlatformVersionSpecifier$Type(outer1_1[7]).UInt64Value;
          let tmp28 = UInt64Value;
          let tmp29 = pos;
          let tmp30 = readUnknownField;
          obj.build = UInt64Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.build);
          tmp10 = tmp3;
          tmp11 = tmp4;
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
                let tmp12 = PlatformVersionSpecifier$Type;
                let tmp13 = outer1_1;
                onRead = PlatformVersionSpecifier$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
    value(major, tag, writeUnknownFields) {
      if (0 !== major.major) {
        tag.tag(1, PlatformVersionSpecifier$Type(outer1_1[6]).WireType.Varint).uint32(major.major);
        const tagResult = tag.tag(1, PlatformVersionSpecifier$Type(outer1_1[6]).WireType.Varint);
      }
      if (major.minor) {
        const UInt32Value = PlatformVersionSpecifier$Type(outer1_1[7]).UInt32Value;
        const tagResult1 = tag.tag(2, PlatformVersionSpecifier$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined = UInt32Value.internalBinaryWrite(major.minor, tag.tag(2, PlatformVersionSpecifier$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = UInt32Value.internalBinaryWrite(major.minor, tag.tag(2, PlatformVersionSpecifier$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (major.build) {
        const UInt64Value = PlatformVersionSpecifier$Type(outer1_1[7]).UInt64Value;
        const tagResult2 = tag.tag(3, PlatformVersionSpecifier$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined1 = UInt64Value.internalBinaryWrite(major.build, tag.tag(3, PlatformVersionSpecifier$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = UInt64Value.internalBinaryWrite(major.build, tag.tag(3, PlatformVersionSpecifier$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = PlatformVersionSpecifier$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, major, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(PlatformVersionSpecifier$Type, items);
})(require("module_1284").MessageType);
tmp52 = new tmp52();
let closure_34 = tmp52;
let tmp54 = ((MessageType) => {
  class ClientRequiredChanges$Type {
    constructor() {
      tmp = outer1_3(this, ClientRequiredChanges$Type);
      items = [, ];
      items[0] = { no: 1, name: "commit_hashes", kind: "scalar", repeat: 2, T: 9 };
      items[1] = { no: 2, name: "pr_numbers", kind: "scalar", repeat: 1, T: 5 };
      items1 = ["discord_protos.discord_experimentation.v1.ClientRequiredChanges"];
      items1[1] = items;
      return outer1_52(this, ClientRequiredChanges$Type, items1);
    }
  }
  callback3(ClientRequiredChanges$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { commitHashes: [], prNumbers: [] };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, ClientRequiredChanges$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = ClientRequiredChanges$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = ClientRequiredChanges$Type(outer1_1[6]);
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
          let commitHashes = obj.commitHashes;
          let arr = commitHashes.push(pos.string());
          let tmp11 = tmp3;
          let tmp12 = tmp4;
          let tmp13 = tmp5;
        } else if (2 === tmp8) {
          let tmp28 = ClientRequiredChanges$Type;
          let tmp29 = outer1_1;
          if (tmp9 === ClientRequiredChanges$Type(outer1_1[6]).WireType.LengthDelimited) {
            let sum1 = pos.int32() + pos.pos;
            tmp12 = tmp4;
            tmp13 = tmp5;
            tmp11 = sum1;
            if (pos.pos < sum1) {
              do {
                let prNumbers = obj.prNumbers;
                arr = prNumbers.push(pos.int32());
                tmp11 = sum1;
                tmp12 = tmp4;
                tmp13 = tmp5;
                pos = pos.pos;
              } while (pos < sum1);
            }
          } else {
            let prNumbers1 = obj.prNumbers;
            let arr1 = prNumbers1.push(pos.int32());
            tmp11 = tmp3;
            tmp12 = tmp4;
            tmp13 = tmp5;
          }
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
                let tmp14 = ClientRequiredChanges$Type;
                let tmp15 = outer1_1;
                onRead = ClientRequiredChanges$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
    value(commitHashes, tag, writeUnknownFields) {
      let length;
      let length2;
      let num = 0;
      if (0 < commitHashes.commitHashes.length) {
        do {
          let tmp = ClientRequiredChanges$Type;
          let tmp2 = outer1_1;
          let tagResult = tag.tag(1, ClientRequiredChanges$Type(outer1_1[6]).WireType.LengthDelimited);
          let stringResult = tagResult.string(commitHashes.commitHashes[num]);
          num = num + 1;
          length = commitHashes.commitHashes.length;
        } while (num < length);
      }
      if (commitHashes.prNumbers.length) {
        tag.tag(2, ClientRequiredChanges$Type(outer1_1[6]).WireType.LengthDelimited).fork();
        let num3 = 0;
        if (0 < commitHashes.prNumbers.length) {
          do {
            let int32Result = tag.int32(commitHashes.prNumbers[num3]);
            num3 = num3 + 1;
            length2 = commitHashes.prNumbers.length;
          } while (num3 < length2);
        }
        const joined = tag.join();
        const tagResult1 = tag.tag(2, ClientRequiredChanges$Type(outer1_1[6]).WireType.LengthDelimited);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = ClientRequiredChanges$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, commitHashes, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(ClientRequiredChanges$Type, items);
})(require("module_1284").MessageType);
tmp54 = new tmp54();
let closure_35 = tmp54;
let tmp56 = ((MessageType) => {
  class UserIsBot$Type {
    constructor() {
      tmp = outer1_3(this, UserIsBot$Type);
      items = [];
      items[0] = { no: 1, name: "is_bot", kind: "scalar", T: 8 };
      items1 = ["discord_protos.discord_experimentation.v1.UserIsBot"];
      items1[1] = items;
      items1[2] = { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" };
      return outer1_52(this, UserIsBot$Type, items1);
    }
  }
  callback3(UserIsBot$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { isBot: false };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, UserIsBot$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = UserIsBot$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = UserIsBot$Type(outer1_1[6]);
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
          obj.isBot = pos.bool();
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
                let tmp12 = UserIsBot$Type;
                let tmp13 = outer1_1;
                onRead = UserIsBot$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
    value(isBot, tag, writeUnknownFields) {
      if (false !== isBot.isBot) {
        tag.tag(1, UserIsBot$Type(outer1_1[6]).WireType.Varint).bool(isBot.isBot);
        const tagResult = tag.tag(1, UserIsBot$Type(outer1_1[6]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = UserIsBot$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, isBot, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(UserIsBot$Type, items);
})(require("module_1284").MessageType);
tmp56 = new tmp56();
let closure_36 = tmp56;
let tmp58 = ((MessageType) => {
  class UserAgeRange$Type {
    constructor() {
      tmp = outer1_3(this, UserAgeRange$Type);
      obj = { no: 1, name: "min_age_years", kind: "message" };
      obj.T = function T() {
        return UserAgeRange$Type(outer2_1[7]).UInt32Value;
      };
      items = [, ];
      items[0] = obj;
      obj = { no: 2, name: "max_age_years", kind: "message" };
      obj.T = function T() {
        return UserAgeRange$Type(outer2_1[7]).UInt32Value;
      };
      items[1] = obj;
      items1 = ["discord_protos.discord_experimentation.v1.UserAgeRange"];
      items1[1] = items;
      items1[2] = { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" };
      return outer1_52(this, UserAgeRange$Type, items1);
    }
  }
  callback3(UserAgeRange$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, UserAgeRange$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = UserAgeRange$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = UserAgeRange$Type(outer1_1[6]);
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
          let tmp31 = UserAgeRange$Type;
          let tmp32 = outer1_1;
          let UInt32Value2 = UserAgeRange$Type(outer1_1[7]).UInt32Value;
          let tmp33 = UInt32Value2;
          let tmp34 = pos;
          let tmp35 = readUnknownField;
          obj.minAgeYears = UInt32Value2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.minAgeYears);
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          let tmp26 = UserAgeRange$Type;
          let tmp27 = outer1_1;
          let UInt32Value = UserAgeRange$Type(outer1_1[7]).UInt32Value;
          let tmp28 = UInt32Value;
          let tmp29 = pos;
          let tmp30 = readUnknownField;
          obj.maxAgeYears = UInt32Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.maxAgeYears);
          tmp10 = tmp3;
          tmp11 = tmp4;
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
                let tmp12 = UserAgeRange$Type;
                let tmp13 = outer1_1;
                onRead = UserAgeRange$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
    value(minAgeYears, tag, writeUnknownFields) {
      if (minAgeYears.minAgeYears) {
        const UInt32Value = UserAgeRange$Type(outer1_1[7]).UInt32Value;
        const tagResult = tag.tag(1, UserAgeRange$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined = UInt32Value.internalBinaryWrite(minAgeYears.minAgeYears, tag.tag(1, UserAgeRange$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = UInt32Value.internalBinaryWrite(minAgeYears.minAgeYears, tag.tag(1, UserAgeRange$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (minAgeYears.maxAgeYears) {
        const UInt32Value2 = UserAgeRange$Type(outer1_1[7]).UInt32Value;
        const tagResult1 = tag.tag(2, UserAgeRange$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined1 = UInt32Value2.internalBinaryWrite(minAgeYears.maxAgeYears, tag.tag(2, UserAgeRange$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = UInt32Value2.internalBinaryWrite(minAgeYears.maxAgeYears, tag.tag(2, UserAgeRange$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = UserAgeRange$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, minAgeYears, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(UserAgeRange$Type, items);
})(require("module_1284").MessageType);
tmp58 = new tmp58();
let closure_37 = tmp58;
let tmp60 = ((MessageType) => {
  class Fixed64Value$Type {
    constructor() {
      tmp = outer1_3(this, Fixed64Value$Type);
      items = [];
      items[0] = { no: 1, name: "value", kind: "scalar", T: 6 };
      items1 = ["discord_protos.discord_experimentation.v1.Fixed64Value"];
      items1[1] = items;
      return outer1_52(this, Fixed64Value$Type, items1);
    }
  }
  callback3(Fixed64Value$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { value: "0" };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, Fixed64Value$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = Fixed64Value$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = Fixed64Value$Type(outer1_1[6]);
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
          let str4 = pos.fixed64();
          obj.value = str4.toString();
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
                let tmp12 = Fixed64Value$Type;
                let tmp13 = outer1_1;
                onRead = Fixed64Value$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
    value(value, tag, writeUnknownFields) {
      if ("0" !== value.value) {
        tag.tag(1, Fixed64Value$Type(outer1_1[6]).WireType.Bit64).fixed64(value.value);
        const tagResult = tag.tag(1, Fixed64Value$Type(outer1_1[6]).WireType.Bit64);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = Fixed64Value$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, value, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(Fixed64Value$Type, items);
})(require("module_1284").MessageType);
tmp60 = new tmp60();
let closure_38 = tmp60;
let tmp62 = ((MessageType) => {
  class UserIDRange$Type {
    constructor() {
      tmp = outer1_3(this, UserIDRange$Type);
      obj = { no: 1, name: "min_id", kind: "message" };
      obj.T = function T() {
        return outer2_38;
      };
      items = [, ];
      items[0] = obj;
      obj = { no: 2, name: "max_id", kind: "message" };
      obj.T = function T() {
        return outer2_38;
      };
      items[1] = obj;
      items1 = ["discord_protos.discord_experimentation.v1.UserIDRange"];
      items1[1] = items;
      items1[2] = { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" };
      return outer1_52(this, UserIDRange$Type, items1);
    }
  }
  callback3(UserIDRange$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, UserIDRange$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = UserIDRange$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = UserIDRange$Type(outer1_1[6]);
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
          let tmp30 = outer1_38;
          let tmp31 = outer1_38;
          let tmp32 = pos;
          let tmp33 = readUnknownField;
          obj.minId = outer1_38.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.minId);
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          let tmp26 = outer1_38;
          let tmp27 = outer1_38;
          let tmp28 = pos;
          let tmp29 = readUnknownField;
          obj.maxId = outer1_38.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.maxId);
          tmp10 = tmp3;
          tmp11 = tmp4;
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
                let tmp12 = UserIDRange$Type;
                let tmp13 = outer1_1;
                onRead = UserIDRange$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
    value(minId, tag, writeUnknownFields) {
      if (minId.minId) {
        const tagResult = tag.tag(1, UserIDRange$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined = outer1_38.internalBinaryWrite(minId.minId, tag.tag(1, UserIDRange$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = outer1_38.internalBinaryWrite(minId.minId, tag.tag(1, UserIDRange$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (minId.maxId) {
        const tagResult1 = tag.tag(2, UserIDRange$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined1 = outer1_38.internalBinaryWrite(minId.maxId, tag.tag(2, UserIDRange$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = outer1_38.internalBinaryWrite(minId.maxId, tag.tag(2, UserIDRange$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = UserIDRange$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, minId, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(UserIDRange$Type, items);
})(require("module_1284").MessageType);
tmp62 = new tmp62();
let closure_39 = tmp62;
let tmp64 = ((MessageType) => {
  class UserHasFlag$Type {
    constructor() {
      tmp = outer1_3(this, UserHasFlag$Type);
      items = [];
      items[0] = { no: 1, name: "mask", kind: "scalar", T: 6 };
      items1 = ["discord_protos.discord_experimentation.v1.UserHasFlag"];
      items1[1] = items;
      items1[2] = { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" };
      return outer1_52(this, UserHasFlag$Type, items1);
    }
  }
  callback3(UserHasFlag$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { mask: "0" };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, UserHasFlag$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = UserHasFlag$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = UserHasFlag$Type(outer1_1[6]);
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
          let str4 = pos.fixed64();
          obj.mask = str4.toString();
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
                let tmp12 = UserHasFlag$Type;
                let tmp13 = outer1_1;
                onRead = UserHasFlag$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
    value(mask, tag, writeUnknownFields) {
      if ("0" !== mask.mask) {
        tag.tag(1, UserHasFlag$Type(outer1_1[6]).WireType.Bit64).fixed64(mask.mask);
        const tagResult = tag.tag(1, UserHasFlag$Type(outer1_1[6]).WireType.Bit64);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = UserHasFlag$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, mask, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(UserHasFlag$Type, items);
})(require("module_1284").MessageType);
tmp64 = new tmp64();
let closure_40 = tmp64;
let tmp66 = ((MessageType) => {
  class UnitIdInRangeByHash$Type {
    constructor() {
      tmp = outer1_3(this, UnitIdInRangeByHash$Type);
      items = [, , ];
      items[0] = { no: 1, name: "hash_key", kind: "scalar", T: 9 };
      items[1] = { no: 2, name: "stop_ring_position", kind: "scalar", T: 13 };
      items[2] = { no: 3, name: "start_ring_position", kind: "scalar", T: 13 };
      items1 = ["discord_protos.discord_experimentation.v1.UnitIdInRangeByHash"];
      items1[1] = items;
      items1[2] = { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_UTILITY" };
      return outer1_52(this, UnitIdInRangeByHash$Type, items1);
    }
  }
  callback3(UnitIdInRangeByHash$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { hashKey: "", stopRingPosition: 0, startRingPosition: 0 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, UnitIdInRangeByHash$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = UnitIdInRangeByHash$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = UnitIdInRangeByHash$Type(outer1_1[6]);
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
          obj.hashKey = pos.string();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          obj.stopRingPosition = pos.uint32();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          obj.startRingPosition = pos.uint32();
          tmp10 = tmp3;
          tmp11 = tmp4;
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
                let tmp12 = UnitIdInRangeByHash$Type;
                let tmp13 = outer1_1;
                onRead = UnitIdInRangeByHash$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
    value(hashKey, tag, writeUnknownFields) {
      if ("" !== hashKey.hashKey) {
        tag.tag(1, UnitIdInRangeByHash$Type(outer1_1[6]).WireType.LengthDelimited).string(hashKey.hashKey);
        const tagResult = tag.tag(1, UnitIdInRangeByHash$Type(outer1_1[6]).WireType.LengthDelimited);
      }
      if (0 !== hashKey.stopRingPosition) {
        tag.tag(2, UnitIdInRangeByHash$Type(outer1_1[6]).WireType.Varint).uint32(hashKey.stopRingPosition);
        const tagResult1 = tag.tag(2, UnitIdInRangeByHash$Type(outer1_1[6]).WireType.Varint);
      }
      if (0 !== hashKey.startRingPosition) {
        tag.tag(3, UnitIdInRangeByHash$Type(outer1_1[6]).WireType.Varint).uint32(hashKey.startRingPosition);
        const tagResult2 = tag.tag(3, UnitIdInRangeByHash$Type(outer1_1[6]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = UnitIdInRangeByHash$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, hashKey, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(UnitIdInRangeByHash$Type, items);
})(require("module_1284").MessageType);
tmp66 = new tmp66();
let closure_41 = tmp66;
let tmp68 = ((MessageType) => {
  class ClientReleaseChannel$Type {
    constructor() {
      tmp = outer1_3(this, ClientReleaseChannel$Type);
      items = [];
      items[0] = { no: 1, name: "release_channels", kind: "scalar", repeat: 2, T: 9 };
      items1 = ["discord_protos.discord_experimentation.v1.ClientReleaseChannel"];
      items1[1] = items;
      items1[2] = { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" };
      return outer1_52(this, ClientReleaseChannel$Type, items1);
    }
  }
  callback3(ClientReleaseChannel$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { releaseChannels: [] };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, ClientReleaseChannel$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = ClientReleaseChannel$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = ClientReleaseChannel$Type(outer1_1[6]);
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
          let releaseChannels = obj.releaseChannels;
          let arr = releaseChannels.push(pos.string());
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
                let tmp12 = ClientReleaseChannel$Type;
                let tmp13 = outer1_1;
                onRead = ClientReleaseChannel$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
    value(releaseChannels, tag, writeUnknownFields) {
      let length;
      let num = 0;
      if (0 < releaseChannels.releaseChannels.length) {
        do {
          let tmp = ClientReleaseChannel$Type;
          let tmp2 = outer1_1;
          let tagResult = tag.tag(1, ClientReleaseChannel$Type(outer1_1[6]).WireType.LengthDelimited);
          let stringResult = tagResult.string(releaseChannels.releaseChannels[num]);
          num = num + 1;
          length = releaseChannels.releaseChannels.length;
        } while (num < length);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = ClientReleaseChannel$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, releaseChannels, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(ClientReleaseChannel$Type, items);
})(require("module_1284").MessageType);
tmp68 = new tmp68();
let closure_42 = tmp68;
let tmp70 = ((MessageType) => {
  class Always$Type {
    constructor() {
      tmp = outer1_3(this, Always$Type);
      items = [];
      items[0] = { no: 1, name: "value", kind: "scalar", T: 8 };
      items1 = ["discord_protos.discord_experimentation.v1.Always"];
      items1[1] = items;
      items1[2] = { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_UTILITY" };
      return outer1_52(this, Always$Type, items1);
    }
  }
  callback3(Always$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { value: false };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, Always$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = Always$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = Always$Type(outer1_1[6]);
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
          obj.value = pos.bool();
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
                let tmp12 = Always$Type;
                let tmp13 = outer1_1;
                onRead = Always$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
    value(value, tag, writeUnknownFields) {
      if (false !== value.value) {
        tag.tag(1, Always$Type(outer1_1[6]).WireType.Varint).bool(value.value);
        const tagResult = tag.tag(1, Always$Type(outer1_1[6]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = Always$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, value, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(Always$Type, items);
})(require("module_1284").MessageType);
tmp70 = new tmp70();
let closure_43 = tmp70;
let tmp72 = ((MessageType) => {
  class UnitIdInExperiment$Type {
    constructor() {
      tmp = outer1_3(this, UnitIdInExperiment$Type);
      items = [, ];
      items[0] = { no: 1, name: "experiment_id", kind: "scalar", T: 6 };
      items[1] = { no: 2, name: "variation_ids", kind: "scalar", repeat: 1, T: 5 };
      items1 = ["discord_protos.discord_experimentation.v1.UnitIdInExperiment"];
      items1[1] = items;
      items1[2] = { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_UTILITY", "discord_protos.discord_experimentation.v1.filter_evaluation_mode": "FILTER_EVALUATION_MODE_LAZY" };
      return outer1_52(this, UnitIdInExperiment$Type, items1);
    }
  }
  callback3(UnitIdInExperiment$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { experimentId: "0", variationIds: [] };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, UnitIdInExperiment$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = UnitIdInExperiment$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = UnitIdInExperiment$Type(outer1_1[6]);
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
          let str4 = pos.fixed64();
          obj.experimentId = str4.toString();
          let tmp11 = tmp3;
          let tmp12 = tmp4;
          let tmp13 = tmp5;
        } else if (2 === tmp8) {
          let tmp28 = UnitIdInExperiment$Type;
          let tmp29 = outer1_1;
          if (tmp9 === UnitIdInExperiment$Type(outer1_1[6]).WireType.LengthDelimited) {
            let sum1 = pos.int32() + pos.pos;
            tmp12 = tmp4;
            tmp13 = tmp5;
            tmp11 = sum1;
            if (pos.pos < sum1) {
              do {
                let variationIds = obj.variationIds;
                let arr = variationIds.push(pos.int32());
                tmp11 = sum1;
                tmp12 = tmp4;
                tmp13 = tmp5;
                pos = pos.pos;
              } while (pos < sum1);
            }
          } else {
            let variationIds1 = obj.variationIds;
            arr = variationIds1.push(pos.int32());
            tmp11 = tmp3;
            tmp12 = tmp4;
            tmp13 = tmp5;
          }
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
                let tmp14 = UnitIdInExperiment$Type;
                let tmp15 = outer1_1;
                onRead = UnitIdInExperiment$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
    value(experimentId, tag, writeUnknownFields) {
      let length;
      if ("0" !== experimentId.experimentId) {
        tag.tag(1, UnitIdInExperiment$Type(outer1_1[6]).WireType.Bit64).fixed64(experimentId.experimentId);
        const tagResult = tag.tag(1, UnitIdInExperiment$Type(outer1_1[6]).WireType.Bit64);
      }
      if (experimentId.variationIds.length) {
        tag.tag(2, UnitIdInExperiment$Type(outer1_1[6]).WireType.LengthDelimited).fork();
        let num5 = 0;
        if (0 < experimentId.variationIds.length) {
          do {
            let int32Result = tag.int32(experimentId.variationIds[num5]);
            num5 = num5 + 1;
            length = experimentId.variationIds.length;
          } while (num5 < length);
        }
        const joined = tag.join();
        const tagResult1 = tag.tag(2, UnitIdInExperiment$Type(outer1_1[6]).WireType.LengthDelimited);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = UnitIdInExperiment$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, experimentId, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(UnitIdInExperiment$Type, items);
})(require("module_1284").MessageType);
tmp72 = new tmp72();
let closure_44 = tmp72;
let tmp74 = ((MessageType) => {
  class UserPremiumType$Type {
    constructor() {
      tmp = outer1_3(this, UserPremiumType$Type);
      items = [];
      items[0] = { no: 1, name: "premium_types", kind: "scalar", repeat: 1, T: 5 };
      items1 = ["discord_protos.discord_experimentation.v1.UserPremiumType"];
      items1[1] = items;
      items1[2] = { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" };
      return outer1_52(this, UserPremiumType$Type, items1);
    }
  }
  callback3(UserPremiumType$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { premiumTypes: [] };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, UserPremiumType$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = UserPremiumType$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = UserPremiumType$Type(outer1_1[6]);
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
          let tmp28 = UserPremiumType$Type;
          let tmp29 = outer1_1;
          if (tmp9 === UserPremiumType$Type(outer1_1[6]).WireType.LengthDelimited) {
            let sum1 = pos.int32() + pos.pos;
            let tmp12 = tmp4;
            let tmp13 = tmp5;
            let tmp11 = sum1;
            if (pos.pos < sum1) {
              do {
                let premiumTypes = obj.premiumTypes;
                let arr = premiumTypes.push(pos.int32());
                tmp11 = sum1;
                tmp12 = tmp4;
                tmp13 = tmp5;
                pos = pos.pos;
              } while (pos < sum1);
            }
          } else {
            let premiumTypes1 = obj.premiumTypes;
            arr = premiumTypes1.push(pos.int32());
            tmp11 = tmp3;
            tmp12 = tmp4;
            tmp13 = tmp5;
          }
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
                let tmp14 = UserPremiumType$Type;
                let tmp15 = outer1_1;
                onRead = UserPremiumType$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
    value(premiumTypes, tag, writeUnknownFields) {
      let length;
      if (premiumTypes.premiumTypes.length) {
        tag.tag(1, UserPremiumType$Type(outer1_1[6]).WireType.LengthDelimited).fork();
        let num3 = 0;
        if (0 < premiumTypes.premiumTypes.length) {
          do {
            let int32Result = tag.int32(premiumTypes.premiumTypes[num3]);
            num3 = num3 + 1;
            length = premiumTypes.premiumTypes.length;
          } while (num3 < length);
        }
        const joined = tag.join();
        const tagResult = tag.tag(1, UserPremiumType$Type(outer1_1[6]).WireType.LengthDelimited);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = UserPremiumType$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, premiumTypes, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(UserPremiumType$Type, items);
})(require("module_1284").MessageType);
tmp74 = new tmp74();
let closure_45 = tmp74;
let tmp76 = ((MessageType) => {
  class UnitIdMatchesFilterSnapshot$Type {
    constructor() {
      tmp = outer1_3(this, UnitIdMatchesFilterSnapshot$Type);
      items = [, ];
      items[0] = { no: 1, name: "filter_snapshot_name", kind: "scalar", T: 9 };
      items[1] = { no: 2, name: "target_filter_values", kind: "scalar", repeat: 1, T: 6 };
      items1 = ["discord_protos.discord_experimentation.v1.UnitIdMatchesFilterSnapshot"];
      items1[1] = items;
      items1[2] = { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_UTILITY" };
      return outer1_52(this, UnitIdMatchesFilterSnapshot$Type, items1);
    }
  }
  callback3(UnitIdMatchesFilterSnapshot$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { filterSnapshotName: "", targetFilterValues: [] };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, UnitIdMatchesFilterSnapshot$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = UnitIdMatchesFilterSnapshot$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = UnitIdMatchesFilterSnapshot$Type(outer1_1[6]);
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
          obj.filterSnapshotName = pos.string();
          let tmp11 = tmp3;
          let tmp12 = tmp4;
          let tmp13 = tmp5;
        } else if (2 === tmp8) {
          let tmp28 = UnitIdMatchesFilterSnapshot$Type;
          let tmp29 = outer1_1;
          if (tmp9 === UnitIdMatchesFilterSnapshot$Type(outer1_1[6]).WireType.LengthDelimited) {
            let sum1 = pos.int32() + pos.pos;
            tmp12 = tmp4;
            tmp13 = tmp5;
            tmp11 = sum1;
            if (pos.pos < sum1) {
              do {
                let targetFilterValues = obj.targetFilterValues;
                let str5 = pos.fixed64();
                let arr = targetFilterValues.push(str5.toString());
                tmp11 = sum1;
                tmp12 = tmp4;
                tmp13 = tmp5;
                pos = pos.pos;
              } while (pos < sum1);
            }
          } else {
            let targetFilterValues1 = obj.targetFilterValues;
            let str4 = pos.fixed64();
            arr = targetFilterValues1.push(str4.toString());
            tmp11 = tmp3;
            tmp12 = tmp4;
            tmp13 = tmp5;
          }
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
                let tmp14 = UnitIdMatchesFilterSnapshot$Type;
                let tmp15 = outer1_1;
                onRead = UnitIdMatchesFilterSnapshot$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
    value(filterSnapshotName, tag, writeUnknownFields) {
      let length;
      if ("" !== filterSnapshotName.filterSnapshotName) {
        tag.tag(1, UnitIdMatchesFilterSnapshot$Type(outer1_1[6]).WireType.LengthDelimited).string(filterSnapshotName.filterSnapshotName);
        const tagResult = tag.tag(1, UnitIdMatchesFilterSnapshot$Type(outer1_1[6]).WireType.LengthDelimited);
      }
      if (filterSnapshotName.targetFilterValues.length) {
        tag.tag(2, UnitIdMatchesFilterSnapshot$Type(outer1_1[6]).WireType.LengthDelimited).fork();
        let num5 = 0;
        if (0 < filterSnapshotName.targetFilterValues.length) {
          do {
            let fixed64Result = tag.fixed64(filterSnapshotName.targetFilterValues[num5]);
            num5 = num5 + 1;
            length = filterSnapshotName.targetFilterValues.length;
          } while (num5 < length);
        }
        const joined = tag.join();
        const tagResult1 = tag.tag(2, UnitIdMatchesFilterSnapshot$Type(outer1_1[6]).WireType.LengthDelimited);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = UnitIdMatchesFilterSnapshot$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, filterSnapshotName, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(UnitIdMatchesFilterSnapshot$Type, items);
})(require("module_1284").MessageType);
tmp76 = new tmp76();
let closure_46 = tmp76;
let tmp78 = ((MessageType) => {
  class GuildIds$Type {
    constructor() {
      tmp = outer1_3(this, GuildIds$Type);
      items = [];
      items[0] = { no: 1, name: "guild_ids", kind: "scalar", repeat: 1, T: 6 };
      items1 = ["discord_protos.discord_experimentation.v1.GuildIds"];
      items1[1] = items;
      items1[2] = { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_GUILD", "discord_protos.discord_experimentation.v1.filter_evaluation_mode": "FILTER_EVALUATION_MODE_LAZY" };
      return outer1_52(this, GuildIds$Type, items1);
    }
  }
  callback3(GuildIds$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { guildIds: [] };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, GuildIds$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = GuildIds$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = GuildIds$Type(outer1_1[6]);
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
          let tmp28 = GuildIds$Type;
          let tmp29 = outer1_1;
          if (tmp9 === GuildIds$Type(outer1_1[6]).WireType.LengthDelimited) {
            let sum1 = pos.int32() + pos.pos;
            let tmp12 = tmp4;
            let tmp13 = tmp5;
            let tmp11 = sum1;
            if (pos.pos < sum1) {
              do {
                let guildIds = obj.guildIds;
                let str5 = pos.fixed64();
                let arr = guildIds.push(str5.toString());
                tmp11 = sum1;
                tmp12 = tmp4;
                tmp13 = tmp5;
                pos = pos.pos;
              } while (pos < sum1);
            }
          } else {
            let guildIds1 = obj.guildIds;
            let str4 = pos.fixed64();
            arr = guildIds1.push(str4.toString());
            tmp11 = tmp3;
            tmp12 = tmp4;
            tmp13 = tmp5;
          }
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
                let tmp14 = GuildIds$Type;
                let tmp15 = outer1_1;
                onRead = GuildIds$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
    value(guildIds, tag, writeUnknownFields) {
      let length;
      if (guildIds.guildIds.length) {
        tag.tag(1, GuildIds$Type(outer1_1[6]).WireType.LengthDelimited).fork();
        let num3 = 0;
        if (0 < guildIds.guildIds.length) {
          do {
            let fixed64Result = tag.fixed64(guildIds.guildIds[num3]);
            num3 = num3 + 1;
            length = guildIds.guildIds.length;
          } while (num3 < length);
        }
        const joined = tag.join();
        const tagResult = tag.tag(1, GuildIds$Type(outer1_1[6]).WireType.LengthDelimited);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = GuildIds$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, guildIds, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(GuildIds$Type, items);
})(require("module_1284").MessageType);
tmp78 = new tmp78();
let closure_47 = tmp78;
let tmp80 = ((MessageType) => {
  class GuildMemberCountRange$Type {
    constructor() {
      tmp = outer1_3(this, GuildMemberCountRange$Type);
      obj = { no: 1, name: "min_count", kind: "message" };
      obj.T = function T() {
        return GuildMemberCountRange$Type(outer2_1[7]).UInt32Value;
      };
      items = [, ];
      items[0] = obj;
      obj = { no: 2, name: "max_count", kind: "message" };
      obj.T = function T() {
        return GuildMemberCountRange$Type(outer2_1[7]).UInt32Value;
      };
      items[1] = obj;
      items1 = ["discord_protos.discord_experimentation.v1.GuildMemberCountRange"];
      items1[1] = items;
      items1[2] = { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_GUILD", "discord_protos.discord_experimentation.v1.filter_evaluation_mode": "FILTER_EVALUATION_MODE_STICKY" };
      return outer1_52(this, GuildMemberCountRange$Type, items1);
    }
  }
  callback3(GuildMemberCountRange$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, GuildMemberCountRange$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = GuildMemberCountRange$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = GuildMemberCountRange$Type(outer1_1[6]);
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
          let tmp31 = GuildMemberCountRange$Type;
          let tmp32 = outer1_1;
          let UInt32Value2 = GuildMemberCountRange$Type(outer1_1[7]).UInt32Value;
          let tmp33 = UInt32Value2;
          let tmp34 = pos;
          let tmp35 = readUnknownField;
          obj.minCount = UInt32Value2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.minCount);
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          let tmp26 = GuildMemberCountRange$Type;
          let tmp27 = outer1_1;
          let UInt32Value = GuildMemberCountRange$Type(outer1_1[7]).UInt32Value;
          let tmp28 = UInt32Value;
          let tmp29 = pos;
          let tmp30 = readUnknownField;
          obj.maxCount = UInt32Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.maxCount);
          tmp10 = tmp3;
          tmp11 = tmp4;
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
                let tmp12 = GuildMemberCountRange$Type;
                let tmp13 = outer1_1;
                onRead = GuildMemberCountRange$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
    value(minCount, tag, writeUnknownFields) {
      if (minCount.minCount) {
        const UInt32Value = GuildMemberCountRange$Type(outer1_1[7]).UInt32Value;
        const tagResult = tag.tag(1, GuildMemberCountRange$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined = UInt32Value.internalBinaryWrite(minCount.minCount, tag.tag(1, GuildMemberCountRange$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = UInt32Value.internalBinaryWrite(minCount.minCount, tag.tag(1, GuildMemberCountRange$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (minCount.maxCount) {
        const UInt32Value2 = GuildMemberCountRange$Type(outer1_1[7]).UInt32Value;
        const tagResult1 = tag.tag(2, GuildMemberCountRange$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined1 = UInt32Value2.internalBinaryWrite(minCount.maxCount, tag.tag(2, GuildMemberCountRange$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = UInt32Value2.internalBinaryWrite(minCount.maxCount, tag.tag(2, GuildMemberCountRange$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = GuildMemberCountRange$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, minCount, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(GuildMemberCountRange$Type, items);
})(require("module_1284").MessageType);
tmp80 = new tmp80();
let closure_48 = tmp80;
let tmp82 = ((MessageType) => {
  class GuildIdRange$Type {
    constructor() {
      tmp = outer1_3(this, GuildIdRange$Type);
      obj = { no: 1, name: "min_id", kind: "message" };
      obj.T = function T() {
        return outer2_38;
      };
      items = [, ];
      items[0] = obj;
      obj = { no: 2, name: "max_id", kind: "message" };
      obj.T = function T() {
        return outer2_38;
      };
      items[1] = obj;
      items1 = ["discord_protos.discord_experimentation.v1.GuildIdRange"];
      items1[1] = items;
      items1[2] = { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_GUILD", "discord_protos.discord_experimentation.v1.filter_evaluation_mode": "FILTER_EVALUATION_MODE_LAZY" };
      return outer1_52(this, GuildIdRange$Type, items1);
    }
  }
  callback3(GuildIdRange$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, GuildIdRange$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = GuildIdRange$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = GuildIdRange$Type(outer1_1[6]);
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
          let tmp30 = outer1_38;
          let tmp31 = outer1_38;
          let tmp32 = pos;
          let tmp33 = readUnknownField;
          obj.minId = outer1_38.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.minId);
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          let tmp26 = outer1_38;
          let tmp27 = outer1_38;
          let tmp28 = pos;
          let tmp29 = readUnknownField;
          obj.maxId = outer1_38.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.maxId);
          tmp10 = tmp3;
          tmp11 = tmp4;
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
                let tmp12 = GuildIdRange$Type;
                let tmp13 = outer1_1;
                onRead = GuildIdRange$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
    value(minId, tag, writeUnknownFields) {
      if (minId.minId) {
        const tagResult = tag.tag(1, GuildIdRange$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined = outer1_38.internalBinaryWrite(minId.minId, tag.tag(1, GuildIdRange$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = outer1_38.internalBinaryWrite(minId.minId, tag.tag(1, GuildIdRange$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (minId.maxId) {
        const tagResult1 = tag.tag(2, GuildIdRange$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined1 = outer1_38.internalBinaryWrite(minId.maxId, tag.tag(2, GuildIdRange$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = outer1_38.internalBinaryWrite(minId.maxId, tag.tag(2, GuildIdRange$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = GuildIdRange$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, minId, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(GuildIdRange$Type, items);
})(require("module_1284").MessageType);
tmp82 = new tmp82();
let closure_49 = tmp82;
let tmp84 = ((MessageType) => {
  class GuildHasFeature$Type {
    constructor() {
      tmp = outer1_3(this, GuildHasFeature$Type);
      items = [];
      items[0] = { no: 1, name: "features", kind: "scalar", repeat: 2, T: 9 };
      items1 = ["discord_protos.discord_experimentation.v1.GuildHasFeature"];
      items1[1] = items;
      items1[2] = { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_GUILD", "discord_protos.discord_experimentation.v1.filter_evaluation_mode": "FILTER_EVALUATION_MODE_STICKY" };
      return outer1_52(this, GuildHasFeature$Type, items1);
    }
  }
  callback3(GuildHasFeature$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { features: [] };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, GuildHasFeature$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = GuildHasFeature$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = GuildHasFeature$Type(outer1_1[6]);
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
          let features = obj.features;
          let arr = features.push(pos.string());
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
                let tmp12 = GuildHasFeature$Type;
                let tmp13 = outer1_1;
                onRead = GuildHasFeature$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
    value(features, tag, writeUnknownFields) {
      let length;
      let num = 0;
      if (0 < features.features.length) {
        do {
          let tmp = GuildHasFeature$Type;
          let tmp2 = outer1_1;
          let tagResult = tag.tag(1, GuildHasFeature$Type(outer1_1[6]).WireType.LengthDelimited);
          let stringResult = tagResult.string(features.features[num]);
          num = num + 1;
          length = features.features.length;
        } while (num < length);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = GuildHasFeature$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, features, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(GuildHasFeature$Type, items);
})(require("module_1284").MessageType);
tmp84 = new tmp84();
let closure_50 = tmp84;
let tmp86 = ((MessageType) => {
  class InstallationIds$Type {
    constructor() {
      tmp = outer1_3(this, InstallationIds$Type);
      items = [];
      items[0] = { no: 1, name: "installation_ids", kind: "scalar", repeat: 1, T: 6 };
      items1 = ["discord_protos.discord_experimentation.v1.InstallationIds"];
      items1[1] = items;
      items1[2] = { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" };
      return outer1_52(this, InstallationIds$Type, items1);
    }
  }
  callback3(InstallationIds$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { installationIds: [] };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, InstallationIds$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = InstallationIds$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = InstallationIds$Type(outer1_1[6]);
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
          let tmp28 = InstallationIds$Type;
          let tmp29 = outer1_1;
          if (tmp9 === InstallationIds$Type(outer1_1[6]).WireType.LengthDelimited) {
            let sum1 = pos.int32() + pos.pos;
            let tmp12 = tmp4;
            let tmp13 = tmp5;
            let tmp11 = sum1;
            if (pos.pos < sum1) {
              do {
                let installationIds = obj.installationIds;
                let str5 = pos.fixed64();
                let arr = installationIds.push(str5.toString());
                tmp11 = sum1;
                tmp12 = tmp4;
                tmp13 = tmp5;
                pos = pos.pos;
              } while (pos < sum1);
            }
          } else {
            let installationIds1 = obj.installationIds;
            let str4 = pos.fixed64();
            arr = installationIds1.push(str4.toString());
            tmp11 = tmp3;
            tmp12 = tmp4;
            tmp13 = tmp5;
          }
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
                let tmp14 = InstallationIds$Type;
                let tmp15 = outer1_1;
                onRead = InstallationIds$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
    value(installationIds, tag, writeUnknownFields) {
      let length;
      if (installationIds.installationIds.length) {
        tag.tag(1, InstallationIds$Type(outer1_1[6]).WireType.LengthDelimited).fork();
        let num3 = 0;
        if (0 < installationIds.installationIds.length) {
          do {
            let fixed64Result = tag.fixed64(installationIds.installationIds[num3]);
            num3 = num3 + 1;
            length = installationIds.installationIds.length;
          } while (num3 < length);
        }
        const joined = tag.join();
        const tagResult = tag.tag(1, InstallationIds$Type(outer1_1[6]).WireType.LengthDelimited);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = InstallationIds$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, installationIds, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(InstallationIds$Type, items);
})(require("module_1284").MessageType);
tmp86 = new tmp86();
let closure_51 = tmp86;
let result = require("_defineProperties").fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/discord_experimentation/v1/rules.tsx");

export const Rule_Type = obj;
export const Rule_Subtype = obj;
export const FilterCategory = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", USER: 1, [1]: "USER", CLIENT: 2, [2]: "CLIENT", GUILD: 3, [3]: "GUILD", UTILITY: 4, [4]: "UTILITY" };
export const FilterEvaluationMode = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", STICKY: 1, [1]: "STICKY", LAZY: 2, [2]: "LAZY" };
export const Rule = tmp2;
export const Override = tmp4;
export const Filter = tmp6;
export const StaffUsers = tmp8;
export const UserInGuild = tmp10;
export const UserIds = tmp12;
export const UserLocale = tmp14;
export const ClientLocale = tmp16;
export const ClientSystemLocale = tmp18;
export const ClientLocation = tmp20;
export const ClientLocation_Place = tmp22;
export const ClientLocation_ISORegion = tmp24;
export const ClientLocation_Location = tmp26;
export const UserLocation = tmp28;
export const ClientIP = tmp30;
export const UserIP = tmp32;
export const ClientOperatingSystem = tmp34;
export const SDKVersion = tmp36;
export const SDKVersionRange = tmp38;
export const SDKVersionRangeBound = tmp40;
export const SDKVersionSpecifier = tmp42;
export const ClientPlatform = tmp44;
export const PlatformVersion = tmp46;
export const PlatformVersionRange = tmp48;
export const PlatformVersionRangeBound = tmp50;
export const PlatformVersionSpecifier = tmp52;
export const ClientRequiredChanges = tmp54;
export const UserIsBot = tmp56;
export const UserAgeRange = tmp58;
export const Fixed64Value = tmp60;
export const UserIDRange = tmp62;
export const UserHasFlag = tmp64;
export const UnitIdInRangeByHash = tmp66;
export const ClientReleaseChannel = tmp68;
export const Always = tmp70;
export const UnitIdInExperiment = tmp72;
export const UserPremiumType = tmp74;
export const UnitIdMatchesFilterSnapshot = tmp76;
export const GuildIds = tmp78;
export const GuildMemberCountRange = tmp80;
export const GuildIdRange = tmp82;
export const GuildHasFeature = tmp84;
export const InstallationIds = tmp86;
