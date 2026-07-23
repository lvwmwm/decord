// Module ID: 1296
// Function ID: 15152
// Name: MessageType
// Dependencies: [6, 7, 1297, 1299, 1301, 1303, 1304, 1306, 1307, 1308, 1309, 1289, 1294, 1292, 1285]

// Module 1296 (MessageType)
import _classCallCheck from "ReflectionBinaryReader";
import _defineProperties from "ReflectionBinaryWriter";


export const MessageType = (() => {
  class MessageType {
    constructor(arg0, arg1, arg2) {
      obj = arg2;
      self = this;
      tmp = outer1_2(this, MessageType);
      this.defaultCheckDepth = 16;
      this.typeName = arg0;
      this.fields = arg1.map(MessageType(outer1_1[2]).normalizeFieldInfo);
      if (null == arg2) {
        obj = {};
      }
      self.options = obj;
      reflectionTypeCheck = new MessageType(outer1_1[3]).ReflectionTypeCheck(self);
      self.refTypeCheck = reflectionTypeCheck;
      reflectionJsonReader = new MessageType(outer1_1[4]).ReflectionJsonReader(self);
      self.refJsonReader = reflectionJsonReader;
      reflectionJsonWriter = new MessageType(outer1_1[5]).ReflectionJsonWriter(self);
      self.refJsonWriter = reflectionJsonWriter;
      reflectionBinaryReader = new MessageType(outer1_1[6]).ReflectionBinaryReader(self);
      self.refBinReader = reflectionBinaryReader;
      reflectionBinaryWriter = new MessageType(outer1_1[7]).ReflectionBinaryWriter(self);
      self.refBinWriter = reflectionBinaryWriter;
      return;
    }
  }
  let obj = {
    key: "create",
    value: function create(arr) {
      const reflectionCreateResult = MessageType(outer1_1[8]).reflectionCreate(this);
      if (undefined !== arr) {
        const result = MessageType(outer1_1[9]).reflectionMergePartial(this, reflectionCreateResult, arr);
        const obj2 = MessageType(outer1_1[9]);
      }
      return reflectionCreateResult;
    }
  };
  const items = [obj, , , , , , , , , , , , , , , ];
  obj = {
    key: "clone",
    value: function clone(arr) {
      let obj = this.create();
      obj = MessageType(outer1_1[9]);
      const result = obj.reflectionMergePartial(this, obj, arr);
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "equals",
    value: function equals(arg0, arg1) {
      return MessageType(outer1_1[10]).reflectionEquals(this, arg0, arg1);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "is",
    value: function is(arg0) {
      const self = this;
      if (arguments.length > 1) {
        if (undefined !== arguments[1]) {
          let defaultCheckDepth = arguments[1];
        }
        const refTypeCheck = self.refTypeCheck;
        return refTypeCheck.is(arg0, defaultCheckDepth, false);
      }
      defaultCheckDepth = self.defaultCheckDepth;
    }
  };
  items[4] = {
    key: "isAssignable",
    value: function isAssignable(arg0, arg1) {
      const self = this;
      if (arguments.length > 1) {
        if (undefined !== arguments[1]) {
          let defaultCheckDepth = arguments[1];
        }
        const refTypeCheck = self.refTypeCheck;
        return refTypeCheck.is(arg0, defaultCheckDepth, true);
      }
      defaultCheckDepth = self.defaultCheckDepth;
    }
  };
  items[5] = {
    key: "mergePartial",
    value: function mergePartial(reflectionCreateResult, arr) {
      const result = MessageType(outer1_1[9]).reflectionMergePartial(this, reflectionCreateResult, arr);
    }
  };
  items[6] = {
    key: "fromBinary",
    value: function fromBinary(toBinaryResult, BINARY_READ_OPTIONS) {
      const binaryReadOptionsResult = MessageType(outer1_1[11]).binaryReadOptions(BINARY_READ_OPTIONS);
      return this.internalBinaryRead(binaryReadOptionsResult.readerFactory(toBinaryResult), toBinaryResult.byteLength, binaryReadOptionsResult);
    }
  };
  items[7] = {
    key: "fromJson",
    value: function fromJson(prepareResult) {
      return this.internalJsonRead(prepareResult, MessageType(outer1_1[12]).jsonReadOptions(arg1));
    }
  };
  items[8] = {
    key: "fromJsonString",
    value: function fromJsonString(arg0, arg1) {
      return this.fromJson(JSON.parse(arg0), arg1);
    }
  };
  items[9] = {
    key: "toJson",
    value: function toJson(arg0, prettySpaces) {
      return this.internalJsonWrite(arg0, MessageType(outer1_1[12]).jsonWriteOptions(prettySpaces));
    }
  };
  items[10] = {
    key: "toJsonString",
    value: function toJsonString(arg0, prettySpaces) {
      prettySpaces = undefined;
      if (null != prettySpaces) {
        prettySpaces = prettySpaces.prettySpaces;
      }
      let num = 0;
      if (null !== prettySpaces) {
        num = 0;
        if (undefined !== prettySpaces) {
          num = prettySpaces;
        }
      }
      return JSON.stringify(this.toJson(arg0, prettySpaces), null, num);
    }
  };
  items[11] = {
    key: "toBinary",
    value: function toBinary(favoriteGifs) {
      const binaryWriteOptionsResult = MessageType(outer1_1[13]).binaryWriteOptions(arg1);
      const obj = MessageType(outer1_1[13]);
      return this.internalBinaryWrite(favoriteGifs, binaryWriteOptionsResult.writerFactory(), binaryWriteOptionsResult).finish();
    }
  };
  items[12] = {
    key: "internalJsonRead",
    value: function internalJsonRead(prepareResult, ignoreUnknownFields, arg2) {
      let obj = arg2;
      const self = this;
      if (null !== prepareResult) {
        if ("object" === typeof prepareResult) {
          const _Array = Array;
          if (!Array.isArray(prepareResult)) {
            if (null == obj) {
              obj = self.create();
            }
            const refJsonReader = self.refJsonReader;
            refJsonReader.read(prepareResult, obj, ignoreUnknownFields);
            return obj;
          }
        }
      }
      obj = MessageType(outer1_1[14]);
      const error = new Error("Unable to parse message " + self.typeName + " from JSON " + obj.typeofJsonValue(prepareResult) + ".");
      throw error;
    }
  };
  items[13] = {
    key: "internalJsonWrite",
    value: function internalJsonWrite(arg0, emitDefaultValues) {
      const refJsonWriter = this.refJsonWriter;
      return refJsonWriter.write(arg0, emitDefaultValues);
    }
  };
  items[14] = {
    key: "internalBinaryWrite",
    value: function internalBinaryWrite(bodyLocalized, tagResult, binaryWriteOptionsResult) {
      const refBinWriter = this.refBinWriter;
      refBinWriter.write(bodyLocalized, tagResult, binaryWriteOptionsResult);
      return tagResult;
    }
  };
  items[15] = {
    key: "internalBinaryRead",
    value: function internalBinaryRead(binaryReadOptionsResult, byteLength, binaryReadOptionsResult2, bodyLocalized) {
      let obj = bodyLocalized;
      const self = this;
      if (null == bodyLocalized) {
        obj = self.create();
      }
      const refBinReader = self.refBinReader;
      refBinReader.read(binaryReadOptionsResult, obj, binaryReadOptionsResult2, byteLength);
      return obj;
    }
  };
  return _defineProperties(MessageType, items);
})();
