// Module ID: 8950
// Function ID: 70559
// Name: _callSuper
// Dependencies: []

// Module 8950 (_callSuper)
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
const obj = { UNSPECIFIED_DISCLOSURE: 0, [0]: "UNSPECIFIED_DISCLOSURE", IP_LOCATION: 1, [1]: "IP_LOCATION", DISPLAYS_ADVERTISEMENTS: 2, [2]: "DISPLAYS_ADVERTISEMENTS", PARTNER_SDK_DATA_SHARING_MESSAGE: 3, [3]: "PARTNER_SDK_DATA_SHARING_MESSAGE" };
let tmp2 = (MessageType) => {
  class ApplicationUserRoleConnection$Type {
    constructor() {
      tmp = closure_3(this, ApplicationUserRoleConnection$Type);
      obj = { 9223372036854775807: "r", 9223372036854775807: "isInTreatment", 0: "OBSIDIAN", 0: "y" };
      obj.V = {};
      items = [, , , ];
      items[0] = obj;
      items[1] = {};
      items[2] = { 1347510942: "surrogates", 1678385745: "isArray", 1364379111: "unicodeVersion", 140698458: "isArray" };
      items[3] = {};
      items1 = ["initializeAndroidNotificationSettingsStore"];
      items1[1] = items;
      return closure_10(this, ApplicationUserRoleConnection$Type, items1);
    }
  }
  const arg1 = ApplicationUserRoleConnection$Type;
  callback3(ApplicationUserRoleConnection$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { "Bool(true)": "png", "Bool(true)": "text", "Bool(true)": "text-md/normal", "Bool(true)": true, metadata: {} };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, ApplicationUserRoleConnection$Type(closure_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = ApplicationUserRoleConnection$Type(closure_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = ApplicationUserRoleConnection$Type(closure_1[6]);
      }
      return obj;
    }
  };
  const items = [obj, , , ];
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
                let tmp13 = closure_1;
                onRead = ApplicationUserRoleConnection$Type(closure_1[6]).UnknownFieldHandler.onRead;
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
    key: "binaryReadMap1",
    value(arg0, pos) {
      let tmp8;
      const sum = pos.pos + pos.uint32();
      let tmp4;
      let tmp5;
      if (pos.pos < sum) {
        while (true) {
          let tmp6 = callback;
          let tmp7 = callback(pos.tag(), 2);
          [tmp8, r10020] = tmp7;
          if (1 === tmp8) {
            let stringResult = pos.string();
            let stringResult1 = tmp3;
          } else if (2 !== tmp8) {
            break;
          } else {
            stringResult1 = pos.string();
          }
          let tmp3 = stringResult1;
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
          let tmp2 = closure_0;
          let tmp3 = closure_1;
          let tagResult = tag.tag(1, closure_0(closure_1[6]).WireType.LengthDelimited);
          let forkResult = tagResult.fork();
          let tagResult1 = forkResult.tag(1, closure_0(closure_1[6]).WireType.LengthDelimited);
          let stringResult = tagResult1.string(tmp);
          let tagResult2 = stringResult.tag(2, closure_0(closure_1[6]).WireType.LengthDelimited);
          let stringResult1 = tagResult2.string(metadata.metadata[tmp]);
          let joined = stringResult1.join();
          num = num + 1;
          length = keys.length;
        } while (num < length);
      }
      if ("" !== metadata.platformName) {
        tag.tag(2, ApplicationUserRoleConnection$Type(closure_1[6]).WireType.LengthDelimited).string(metadata.platformName);
        const tagResult3 = tag.tag(2, ApplicationUserRoleConnection$Type(closure_1[6]).WireType.LengthDelimited);
      }
      if ("" !== metadata.platformUsername) {
        tag.tag(3, ApplicationUserRoleConnection$Type(closure_1[6]).WireType.LengthDelimited).string(metadata.platformUsername);
        const tagResult4 = tag.tag(3, ApplicationUserRoleConnection$Type(closure_1[6]).WireType.LengthDelimited);
      }
      if ("0" !== metadata.version) {
        tag.tag(4, ApplicationUserRoleConnection$Type(closure_1[6]).WireType.Bit64).fixed64(metadata.version);
        const tagResult5 = tag.tag(4, ApplicationUserRoleConnection$Type(closure_1[6]).WireType.Bit64);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = ApplicationUserRoleConnection$Type(closure_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, metadata, tag);
      }
      return tag;
    }
  };
  return callback(ApplicationUserRoleConnection$Type, items);
}(arg1(dependencyMap[6]).MessageType);
tmp2 = new tmp2();
let tmp4 = (MessageType) => {
  class AcknowledgedApplicationDisclosure$Type {
    constructor() {
      tmp = closure_3(this, AcknowledgedApplicationDisclosure$Type);
      obj = {
        T() {
              const items = [false, closure_8];
              return items;
            }
      };
      items = [, ];
      items[0] = obj;
      items[1] = {
        T() {
              return callback(closure_1[7]).Timestamp;
            }
      };
      items1 = [null];
      items1[1] = items;
      return closure_10(this, AcknowledgedApplicationDisclosure$Type, items1);
    }
  }
  const arg1 = AcknowledgedApplicationDisclosure$Type;
  callback3(AcknowledgedApplicationDisclosure$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { disclosureType: 0 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, AcknowledgedApplicationDisclosure$Type(closure_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = AcknowledgedApplicationDisclosure$Type(closure_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = AcknowledgedApplicationDisclosure$Type(closure_1[6]);
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
          obj.disclosureType = pos.int32();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          let tmp26 = AcknowledgedApplicationDisclosure$Type;
          let tmp27 = closure_1;
          let Timestamp = AcknowledgedApplicationDisclosure$Type(closure_1[7]).Timestamp;
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
                let tmp13 = closure_1;
                onRead = AcknowledgedApplicationDisclosure$Type(closure_1[6]).UnknownFieldHandler.onRead;
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
    value(disclosureType, tag, writeUnknownFields) {
      if (0 !== disclosureType.disclosureType) {
        tag.tag(1, AcknowledgedApplicationDisclosure$Type(closure_1[6]).WireType.Varint).int32(disclosureType.disclosureType);
        const tagResult = tag.tag(1, AcknowledgedApplicationDisclosure$Type(closure_1[6]).WireType.Varint);
      }
      if (disclosureType.ackedAt) {
        const Timestamp = AcknowledgedApplicationDisclosure$Type(closure_1[7]).Timestamp;
        const tagResult1 = tag.tag(2, AcknowledgedApplicationDisclosure$Type(closure_1[6]).WireType.LengthDelimited);
        const joined = Timestamp.internalBinaryWrite(disclosureType.ackedAt, tag.tag(2, AcknowledgedApplicationDisclosure$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = Timestamp.internalBinaryWrite(disclosureType.ackedAt, tag.tag(2, AcknowledgedApplicationDisclosure$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = AcknowledgedApplicationDisclosure$Type(closure_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, disclosureType, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(AcknowledgedApplicationDisclosure$Type, items);
}(arg1(dependencyMap[6]).MessageType);
tmp4 = new tmp4();
let tmp6 = (MessageType) => {
  class AcknowledgedApplicationDisclosures$Type {
    constructor() {
      tmp = closure_3(this, AcknowledgedApplicationDisclosures$Type);
      obj = {
        T() {
              return closure_9;
            }
      };
      items = [];
      items[0] = obj;
      items1 = ["Set"];
      items1[1] = items;
      return closure_10(this, AcknowledgedApplicationDisclosures$Type, items1);
    }
  }
  const arg1 = AcknowledgedApplicationDisclosures$Type;
  callback3(AcknowledgedApplicationDisclosures$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { ackedDisclosures: [] };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, AcknowledgedApplicationDisclosures$Type(closure_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = AcknowledgedApplicationDisclosures$Type(closure_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = AcknowledgedApplicationDisclosures$Type(closure_1[6]);
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
          let ackedDisclosures = obj.ackedDisclosures;
          let tmp26 = closure_9;
          let arr = ackedDisclosures.push(closure_9.internalBinaryRead(pos, pos.uint32(), readUnknownField));
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
                let tmp13 = closure_1;
                onRead = AcknowledgedApplicationDisclosures$Type(closure_1[6]).UnknownFieldHandler.onRead;
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
    value(ackedDisclosures, tag, writeUnknownFields) {
      let length;
      let num = 0;
      if (0 < ackedDisclosures.ackedDisclosures.length) {
        do {
          let tmp = closure_9;
          let tmp2 = closure_0;
          let tmp3 = closure_1;
          let tagResult = tag.tag(1, closure_0(closure_1[6]).WireType.LengthDelimited);
          let internalBinaryWriteResult = closure_9.internalBinaryWrite(ackedDisclosures.ackedDisclosures[num], tagResult.fork(), writeUnknownFields);
          let joined = internalBinaryWriteResult.join();
          num = num + 1;
          length = ackedDisclosures.ackedDisclosures.length;
        } while (num < length);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = AcknowledgedApplicationDisclosures$Type(closure_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, ackedDisclosures, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(AcknowledgedApplicationDisclosures$Type, items);
}(arg1(dependencyMap[6]).MessageType);
tmp6 = new tmp6();
const result = arg1(dependencyMap[8]).fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/discord_kkv_store_value_models/v1/applications.tsx");

export const ApplicationDisclosureType = obj;
export const ApplicationUserRoleConnection = tmp2;
export const AcknowledgedApplicationDisclosure = tmp4;
export const AcknowledgedApplicationDisclosures = tmp6;
