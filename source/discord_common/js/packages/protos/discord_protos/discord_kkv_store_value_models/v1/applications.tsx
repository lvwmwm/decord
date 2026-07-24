// Module ID: 8997
// Function ID: 70828
// Name: _callSuper
// Dependencies: [57, 6, 7, 15, 17, 18, 1284, 1312, 2]

// Module 8997 (_callSuper)
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
let obj = { UNSPECIFIED_DISCLOSURE: 0, [0]: "UNSPECIFIED_DISCLOSURE", IP_LOCATION: 1, [1]: "IP_LOCATION", DISPLAYS_ADVERTISEMENTS: 2, [2]: "DISPLAYS_ADVERTISEMENTS", PARTNER_SDK_DATA_SHARING_MESSAGE: 3, [3]: "PARTNER_SDK_DATA_SHARING_MESSAGE" };
let tmp2 = ((MessageType) => {
  class ApplicationUserRoleConnection$Type {
    constructor() {
      tmp = outer1_3(this, ApplicationUserRoleConnection$Type);
      obj = { no: 1, name: "metadata", kind: "map", K: 9 };
      obj.V = { kind: "scalar", T: 9 };
      items = [, , , ];
      items[0] = obj;
      items[1] = { no: 2, name: "platform_name", kind: "scalar", T: 9 };
      items[2] = { no: 3, name: "platform_username", kind: "scalar", T: 9 };
      items[3] = { no: 4, name: "version", kind: "scalar", T: 6 };
      items1 = ["discord_protos.discord_kkv_store_value_models.v1.ApplicationUserRoleConnection"];
      items1[1] = items;
      return outer1_10(this, ApplicationUserRoleConnection$Type, items1);
    }
  }
  callback3(ApplicationUserRoleConnection$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { metadata: {}, platformName: "", platformUsername: "", version: "0" };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, ApplicationUserRoleConnection$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = ApplicationUserRoleConnection$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = ApplicationUserRoleConnection$Type(outer1_1[6]);
      }
      return obj;
    }
  };
  let items = [obj, , , ];
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
          let binaryReadMap1Result = self.binaryReadMap1(obj.metadata, pos, readUnknownField);
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          obj.platformName = pos.string();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          obj.platformUsername = pos.string();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (4 === tmp7) {
          let str4 = pos.fixed64();
          obj.version = str4.toString();
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
                let tmp12 = ApplicationUserRoleConnection$Type;
                let tmp13 = outer1_1;
                onRead = ApplicationUserRoleConnection$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
    key: "binaryReadMap1",
    value(arg0, pos) {
      let tmp8;
      const sum = pos.pos + pos.uint32();
      let tmp4;
      let tmp5;
      if (pos.pos < sum) {
        while (true) {
          let tmp6 = outer1_2;
          let tmp7 = outer1_2(pos.tag(), 2);
          [tmp8, r10020] = tmp7;
          if (1 === tmp8) {
            let stringResult = pos.string();
            let stringResult1 = tmp3;
          } else if (2 !== tmp8) {
            break;
          } else {
            stringResult1 = pos.string();
          }
          tmp3 = stringResult1;
          tmp4 = stringResult;
          tmp5 = stringResult1;
        }
        const _globalThis = globalThis;
        let _Error = Error;
        const prototype = _Error.prototype;
        _Error = new _Error("unknown map entry field for field discord_protos.discord_kkv_store_value_models.v1.ApplicationUserRoleConnection.metadata");
        throw _Error;
      }
      let str2 = "";
      let str3 = "";
      if (null != tmp4) {
        str3 = tmp4;
      }
      if (null != tmp5) {
        str2 = tmp5;
      }
      arg0[str3] = str2;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "internalBinaryWrite",
    value(metadata, tag, writeUnknownFields) {
      let length;
      const keys = Object.keys(metadata.metadata);
      let num = 0;
      if (0 < keys.length) {
        do {
          let tmp = keys[num];
          let tmp2 = ApplicationUserRoleConnection$Type;
          let tmp3 = outer1_1;
          let tagResult = tag.tag(1, ApplicationUserRoleConnection$Type(outer1_1[6]).WireType.LengthDelimited);
          let forkResult = tagResult.fork();
          let tagResult1 = forkResult.tag(1, ApplicationUserRoleConnection$Type(outer1_1[6]).WireType.LengthDelimited);
          let stringResult = tagResult1.string(tmp);
          let tagResult2 = stringResult.tag(2, ApplicationUserRoleConnection$Type(outer1_1[6]).WireType.LengthDelimited);
          let stringResult1 = tagResult2.string(metadata.metadata[tmp]);
          let joined = stringResult1.join();
          num = num + 1;
          length = keys.length;
        } while (num < length);
      }
      if ("" !== metadata.platformName) {
        tag.tag(2, ApplicationUserRoleConnection$Type(outer1_1[6]).WireType.LengthDelimited).string(metadata.platformName);
        const tagResult3 = tag.tag(2, ApplicationUserRoleConnection$Type(outer1_1[6]).WireType.LengthDelimited);
      }
      if ("" !== metadata.platformUsername) {
        tag.tag(3, ApplicationUserRoleConnection$Type(outer1_1[6]).WireType.LengthDelimited).string(metadata.platformUsername);
        const tagResult4 = tag.tag(3, ApplicationUserRoleConnection$Type(outer1_1[6]).WireType.LengthDelimited);
      }
      if ("0" !== metadata.version) {
        tag.tag(4, ApplicationUserRoleConnection$Type(outer1_1[6]).WireType.Bit64).fixed64(metadata.version);
        const tagResult5 = tag.tag(4, ApplicationUserRoleConnection$Type(outer1_1[6]).WireType.Bit64);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = ApplicationUserRoleConnection$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, metadata, tag);
      }
      return tag;
    }
  };
  return callback(ApplicationUserRoleConnection$Type, items);
})(require("module_1284").MessageType);
tmp2 = new tmp2();
let tmp4 = ((MessageType) => {
  class AcknowledgedApplicationDisclosure$Type {
    constructor() {
      tmp = outer1_3(this, AcknowledgedApplicationDisclosure$Type);
      obj = { no: 1, name: "disclosure_type", kind: "enum" };
      obj.T = function T() {
        const items = ["discord_protos.discord_kkv_store_value_models.v1.ApplicationDisclosureType", outer2_8];
        return items;
      };
      items = [, ];
      items[0] = obj;
      obj = { no: 2, name: "acked_at", kind: "message" };
      obj.T = function T() {
        return AcknowledgedApplicationDisclosure$Type(outer2_1[7]).Timestamp;
      };
      items[1] = obj;
      items1 = ["discord_protos.discord_kkv_store_value_models.v1.AcknowledgedApplicationDisclosure"];
      items1[1] = items;
      return outer1_10(this, AcknowledgedApplicationDisclosure$Type, items1);
    }
  }
  callback3(AcknowledgedApplicationDisclosure$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { disclosureType: 0 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, AcknowledgedApplicationDisclosure$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = AcknowledgedApplicationDisclosure$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = AcknowledgedApplicationDisclosure$Type(outer1_1[6]);
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
          obj.disclosureType = pos.int32();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          let tmp26 = AcknowledgedApplicationDisclosure$Type;
          let tmp27 = outer1_1;
          let Timestamp = AcknowledgedApplicationDisclosure$Type(outer1_1[7]).Timestamp;
          let tmp28 = Timestamp;
          let tmp29 = pos;
          let tmp30 = readUnknownField;
          obj.ackedAt = Timestamp.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.ackedAt);
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
                let tmp12 = AcknowledgedApplicationDisclosure$Type;
                let tmp13 = outer1_1;
                onRead = AcknowledgedApplicationDisclosure$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
    value(disclosureType, tag, writeUnknownFields) {
      if (0 !== disclosureType.disclosureType) {
        tag.tag(1, AcknowledgedApplicationDisclosure$Type(outer1_1[6]).WireType.Varint).int32(disclosureType.disclosureType);
        const tagResult = tag.tag(1, AcknowledgedApplicationDisclosure$Type(outer1_1[6]).WireType.Varint);
      }
      if (disclosureType.ackedAt) {
        const Timestamp = AcknowledgedApplicationDisclosure$Type(outer1_1[7]).Timestamp;
        const tagResult1 = tag.tag(2, AcknowledgedApplicationDisclosure$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined = Timestamp.internalBinaryWrite(disclosureType.ackedAt, tag.tag(2, AcknowledgedApplicationDisclosure$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = Timestamp.internalBinaryWrite(disclosureType.ackedAt, tag.tag(2, AcknowledgedApplicationDisclosure$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = AcknowledgedApplicationDisclosure$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, disclosureType, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(AcknowledgedApplicationDisclosure$Type, items);
})(require("module_1284").MessageType);
tmp4 = new tmp4();
let closure_9 = tmp4;
let tmp6 = ((MessageType) => {
  class AcknowledgedApplicationDisclosures$Type {
    constructor() {
      tmp = outer1_3(this, AcknowledgedApplicationDisclosures$Type);
      obj = { no: 1, name: "acked_disclosures", kind: "message", repeat: 1 };
      obj.T = function T() {
        return outer2_9;
      };
      items = [];
      items[0] = obj;
      items1 = ["discord_protos.discord_kkv_store_value_models.v1.AcknowledgedApplicationDisclosures"];
      items1[1] = items;
      return outer1_10(this, AcknowledgedApplicationDisclosures$Type, items1);
    }
  }
  callback3(AcknowledgedApplicationDisclosures$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { ackedDisclosures: [] };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, AcknowledgedApplicationDisclosures$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = AcknowledgedApplicationDisclosures$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = AcknowledgedApplicationDisclosures$Type(outer1_1[6]);
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
          let ackedDisclosures = obj.ackedDisclosures;
          let tmp26 = outer1_9;
          let arr = ackedDisclosures.push(outer1_9.internalBinaryRead(pos, pos.uint32(), readUnknownField));
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
                let tmp12 = AcknowledgedApplicationDisclosures$Type;
                let tmp13 = outer1_1;
                onRead = AcknowledgedApplicationDisclosures$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
    value(ackedDisclosures, tag, writeUnknownFields) {
      let length;
      let num = 0;
      if (0 < ackedDisclosures.ackedDisclosures.length) {
        do {
          let tmp = outer1_9;
          let tmp2 = AcknowledgedApplicationDisclosures$Type;
          let tmp3 = outer1_1;
          let tagResult = tag.tag(1, AcknowledgedApplicationDisclosures$Type(outer1_1[6]).WireType.LengthDelimited);
          let internalBinaryWriteResult = outer1_9.internalBinaryWrite(ackedDisclosures.ackedDisclosures[num], tagResult.fork(), writeUnknownFields);
          let joined = internalBinaryWriteResult.join();
          num = num + 1;
          length = ackedDisclosures.ackedDisclosures.length;
        } while (num < length);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = AcknowledgedApplicationDisclosures$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, ackedDisclosures, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(AcknowledgedApplicationDisclosures$Type, items);
})(require("module_1284").MessageType);
tmp6 = new tmp6();
let result = require("_defineProperties").fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/discord_kkv_store_value_models/v1/applications.tsx");

export const ApplicationDisclosureType = obj;
export const ApplicationUserRoleConnection = tmp2;
export const AcknowledgedApplicationDisclosure = tmp4;
export const AcknowledgedApplicationDisclosures = tmp6;
