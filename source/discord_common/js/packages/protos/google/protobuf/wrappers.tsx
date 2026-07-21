// Module ID: 1313
// Function ID: 15270
// Name: _callSuper
// Dependencies: []

// Module 1313 (_callSuper)
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
let tmp2 = (MessageType) => {
  class DoubleValue$Type {
    constructor() {
      tmp = closure_3(this, DoubleValue$Type);
      items = [];
      items[0] = {};
      items1 = [false];
      items1[1] = items;
      return closure_8(this, DoubleValue$Type, items1);
    }
  }
  const arg1 = DoubleValue$Type;
  callback3(DoubleValue$Type, MessageType);
  let obj = {
    key: "internalJsonWrite",
    value(value) {
      const refJsonWriter = this.refJsonWriter;
      return refJsonWriter.scalar(2, value.value, "value", false, true);
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "internalJsonRead",
    value(arg0, arg1, arg2) {
      let obj = arg2;
      const self = this;
      if (!arg2) {
        obj = self.create();
      }
      const refJsonReader = self.refJsonReader;
      obj.value = refJsonReader.scalar(arg0, 1, undefined, "value");
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "create",
    value(arr) {
      let obj = { value: 0 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, DoubleValue$Type(closure_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = DoubleValue$Type(closure_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = DoubleValue$Type(closure_1[6]);
      }
      return obj;
    }
  };
  items[2] = obj;
  items[3] = {
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
          obj.value = pos.double();
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
                let tmp12 = DoubleValue$Type;
                let tmp13 = closure_1;
                onRead = DoubleValue$Type(closure_1[6]).UnknownFieldHandler.onRead;
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
  items[4] = {
    key: "internalBinaryWrite",
    value(value, tag, writeUnknownFields) {
      if (0 !== value.value) {
        tag.tag(1, DoubleValue$Type(closure_1[6]).WireType.Bit64).double(value.value);
        const tagResult = tag.tag(1, DoubleValue$Type(closure_1[6]).WireType.Bit64);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = DoubleValue$Type(closure_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, value, tag);
      }
      return tag;
    }
  };
  return callback(DoubleValue$Type, items);
}(arg1(dependencyMap[6]).MessageType);
tmp2 = new tmp2();
let tmp4 = (MessageType) => {
  class FloatValue$Type {
    constructor() {
      tmp = closure_3(this, FloatValue$Type);
      items = [];
      items[0] = {};
      items1 = [];
      items1[1] = items;
      return closure_8(this, FloatValue$Type, items1);
    }
  }
  const arg1 = FloatValue$Type;
  callback3(FloatValue$Type, MessageType);
  let obj = {
    key: "internalJsonWrite",
    value(value) {
      const refJsonWriter = this.refJsonWriter;
      return refJsonWriter.scalar(1, value.value, "value", false, true);
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "internalJsonRead",
    value(arg0, arg1, arg2) {
      let obj = arg2;
      const self = this;
      if (!arg2) {
        obj = self.create();
      }
      const refJsonReader = self.refJsonReader;
      obj.value = refJsonReader.scalar(arg0, 1, undefined, "value");
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "create",
    value(arr) {
      let obj = { value: 0 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, FloatValue$Type(closure_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = FloatValue$Type(closure_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = FloatValue$Type(closure_1[6]);
      }
      return obj;
    }
  };
  items[2] = obj;
  items[3] = {
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
          obj.value = pos.float();
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
                let tmp12 = FloatValue$Type;
                let tmp13 = closure_1;
                onRead = FloatValue$Type(closure_1[6]).UnknownFieldHandler.onRead;
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
  items[4] = {
    key: "internalBinaryWrite",
    value(value, tag, writeUnknownFields) {
      if (0 !== value.value) {
        tag.tag(1, FloatValue$Type(closure_1[6]).WireType.Bit32).float(value.value);
        const tagResult = tag.tag(1, FloatValue$Type(closure_1[6]).WireType.Bit32);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = FloatValue$Type(closure_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, value, tag);
      }
      return tag;
    }
  };
  return callback(FloatValue$Type, items);
}(arg1(dependencyMap[6]).MessageType);
tmp4 = new tmp4();
let tmp6 = (MessageType) => {
  class Int64Value$Type {
    constructor() {
      tmp = closure_3(this, Int64Value$Type);
      items = [];
      items[0] = { 9223372036854775807: "y", 0: "isArray", 9223372036854775807: "construct", no: "Array" };
      items1 = [];
      items1[1] = items;
      return closure_8(this, Int64Value$Type, items1);
    }
  }
  const arg1 = Int64Value$Type;
  callback3(Int64Value$Type, MessageType);
  let obj = {
    key: "internalJsonWrite",
    value(value) {
      const refJsonWriter = this.refJsonWriter;
      return refJsonWriter.scalar(Int64Value$Type(closure_1[6]).ScalarType.INT64, value.value, "value", false, true);
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "internalJsonRead",
    value(arg0, arg1, arg2) {
      let obj = arg2;
      const self = this;
      if (!arg2) {
        obj = self.create();
      }
      const refJsonReader = self.refJsonReader;
      obj.value = refJsonReader.scalar(arg0, Int64Value$Type(closure_1[6]).ScalarType.INT64, Int64Value$Type(closure_1[6]).LongType.STRING, "value");
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "create",
    value(arr) {
      let obj = { value: "0" };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, Int64Value$Type(closure_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = Int64Value$Type(closure_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = Int64Value$Type(closure_1[6]);
      }
      return obj;
    }
  };
  items[2] = obj;
  items[3] = {
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
          let str4 = pos.int64();
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
                let tmp12 = Int64Value$Type;
                let tmp13 = closure_1;
                onRead = Int64Value$Type(closure_1[6]).UnknownFieldHandler.onRead;
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
  items[4] = {
    key: "internalBinaryWrite",
    value(value, tag, writeUnknownFields) {
      if ("0" !== value.value) {
        tag.tag(1, Int64Value$Type(closure_1[6]).WireType.Varint).int64(value.value);
        const tagResult = tag.tag(1, Int64Value$Type(closure_1[6]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = Int64Value$Type(closure_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, value, tag);
      }
      return tag;
    }
  };
  return callback(Int64Value$Type, items);
}(arg1(dependencyMap[6]).MessageType);
tmp6 = new tmp6();
let tmp8 = (MessageType) => {
  class UInt64Value$Type {
    constructor() {
      tmp = closure_3(this, UInt64Value$Type);
      items = [];
      items[0] = { 9223372036854775807: 370, 0: 1536, 9223372036854775807: 1829654784, no: 1 };
      items1 = [];
      items1[1] = items;
      return closure_8(this, UInt64Value$Type, items1);
    }
  }
  const arg1 = UInt64Value$Type;
  callback3(UInt64Value$Type, MessageType);
  let obj = {
    key: "internalJsonWrite",
    value(value) {
      const refJsonWriter = this.refJsonWriter;
      return refJsonWriter.scalar(UInt64Value$Type(closure_1[6]).ScalarType.UINT64, value.value, "value", false, true);
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "internalJsonRead",
    value(arg0, arg1, arg2) {
      let obj = arg2;
      const self = this;
      if (!arg2) {
        obj = self.create();
      }
      const refJsonReader = self.refJsonReader;
      obj.value = refJsonReader.scalar(arg0, UInt64Value$Type(closure_1[6]).ScalarType.UINT64, UInt64Value$Type(closure_1[6]).LongType.STRING, "value");
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "create",
    value(arr) {
      let obj = { value: "0" };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, UInt64Value$Type(closure_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = UInt64Value$Type(closure_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = UInt64Value$Type(closure_1[6]);
      }
      return obj;
    }
  };
  items[2] = obj;
  items[3] = {
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
          let str4 = pos.uint64();
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
                let tmp12 = UInt64Value$Type;
                let tmp13 = closure_1;
                onRead = UInt64Value$Type(closure_1[6]).UnknownFieldHandler.onRead;
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
  items[4] = {
    key: "internalBinaryWrite",
    value(value, tag, writeUnknownFields) {
      if ("0" !== value.value) {
        tag.tag(1, UInt64Value$Type(closure_1[6]).WireType.Varint).uint64(value.value);
        const tagResult = tag.tag(1, UInt64Value$Type(closure_1[6]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = UInt64Value$Type(closure_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, value, tag);
      }
      return tag;
    }
  };
  return callback(UInt64Value$Type, items);
}(arg1(dependencyMap[6]).MessageType);
tmp8 = new tmp8();
let tmp10 = (MessageType) => {
  class Int32Value$Type {
    constructor() {
      tmp = closure_3(this, Int32Value$Type);
      items = [];
      items[0] = {};
      items1 = [];
      items1[1] = items;
      return closure_8(this, Int32Value$Type, items1);
    }
  }
  const arg1 = Int32Value$Type;
  callback3(Int32Value$Type, MessageType);
  let obj = {
    key: "internalJsonWrite",
    value(value) {
      const refJsonWriter = this.refJsonWriter;
      return refJsonWriter.scalar(5, value.value, "value", false, true);
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "internalJsonRead",
    value(arg0, arg1, arg2) {
      let obj = arg2;
      const self = this;
      if (!arg2) {
        obj = self.create();
      }
      const refJsonReader = self.refJsonReader;
      obj.value = refJsonReader.scalar(arg0, 5, undefined, "value");
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "create",
    value(arr) {
      let obj = { value: 0 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, Int32Value$Type(closure_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = Int32Value$Type(closure_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = Int32Value$Type(closure_1[6]);
      }
      return obj;
    }
  };
  items[2] = obj;
  items[3] = {
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
          obj.value = pos.int32();
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
                let tmp12 = Int32Value$Type;
                let tmp13 = closure_1;
                onRead = Int32Value$Type(closure_1[6]).UnknownFieldHandler.onRead;
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
  items[4] = {
    key: "internalBinaryWrite",
    value(value, tag, writeUnknownFields) {
      if (0 !== value.value) {
        tag.tag(1, Int32Value$Type(closure_1[6]).WireType.Varint).int32(value.value);
        const tagResult = tag.tag(1, Int32Value$Type(closure_1[6]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = Int32Value$Type(closure_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, value, tag);
      }
      return tag;
    }
  };
  return callback(Int32Value$Type, items);
}(arg1(dependencyMap[6]).MessageType);
tmp10 = new tmp10();
let tmp12 = (MessageType) => {
  class UInt32Value$Type {
    constructor() {
      tmp = closure_3(this, UInt32Value$Type);
      items = [];
      items[0] = {};
      items1 = [];
      items1[1] = items;
      return closure_8(this, UInt32Value$Type, items1);
    }
  }
  const arg1 = UInt32Value$Type;
  callback3(UInt32Value$Type, MessageType);
  let obj = {
    key: "internalJsonWrite",
    value(value) {
      const refJsonWriter = this.refJsonWriter;
      return refJsonWriter.scalar(13, value.value, "value", false, true);
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "internalJsonRead",
    value(arg0, arg1, arg2) {
      let obj = arg2;
      const self = this;
      if (!arg2) {
        obj = self.create();
      }
      const refJsonReader = self.refJsonReader;
      obj.value = refJsonReader.scalar(arg0, 13, undefined, "value");
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "create",
    value(arr) {
      let obj = { value: 0 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, UInt32Value$Type(closure_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = UInt32Value$Type(closure_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = UInt32Value$Type(closure_1[6]);
      }
      return obj;
    }
  };
  items[2] = obj;
  items[3] = {
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
          obj.value = pos.uint32();
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
                let tmp12 = UInt32Value$Type;
                let tmp13 = closure_1;
                onRead = UInt32Value$Type(closure_1[6]).UnknownFieldHandler.onRead;
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
  items[4] = {
    key: "internalBinaryWrite",
    value(value, tag, writeUnknownFields) {
      if (0 !== value.value) {
        tag.tag(1, UInt32Value$Type(closure_1[6]).WireType.Varint).uint32(value.value);
        const tagResult = tag.tag(1, UInt32Value$Type(closure_1[6]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = UInt32Value$Type(closure_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, value, tag);
      }
      return tag;
    }
  };
  return callback(UInt32Value$Type, items);
}(arg1(dependencyMap[6]).MessageType);
tmp12 = new tmp12();
let tmp14 = (MessageType) => {
  class BoolValue$Type {
    constructor() {
      tmp = closure_3(this, BoolValue$Type);
      items = [];
      items[0] = { 9223372036854775807: "routingFailures", 0: "isArray", 9223372036854775807: "upsellCTADismissed", no: "isArray" };
      items1 = [];
      items1[1] = items;
      return closure_8(this, BoolValue$Type, items1);
    }
  }
  const arg1 = BoolValue$Type;
  callback3(BoolValue$Type, MessageType);
  let obj = {
    key: "internalJsonWrite",
    value(value) {
      return value.value;
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "internalJsonRead",
    value(arg0, arg1, arg2) {
      let obj = arg2;
      const self = this;
      if (!arg2) {
        obj = self.create();
      }
      const refJsonReader = self.refJsonReader;
      obj.value = refJsonReader.scalar(arg0, 8, undefined, "value");
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "create",
    value(arr) {
      let obj = { value: false };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, BoolValue$Type(closure_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = BoolValue$Type(closure_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = BoolValue$Type(closure_1[6]);
      }
      return obj;
    }
  };
  items[2] = obj;
  items[3] = {
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
                let tmp12 = BoolValue$Type;
                let tmp13 = closure_1;
                onRead = BoolValue$Type(closure_1[6]).UnknownFieldHandler.onRead;
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
  items[4] = {
    key: "internalBinaryWrite",
    value(value, tag, writeUnknownFields) {
      if (false !== value.value) {
        tag.tag(1, BoolValue$Type(closure_1[6]).WireType.Varint).bool(value.value);
        const tagResult = tag.tag(1, BoolValue$Type(closure_1[6]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = BoolValue$Type(closure_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, value, tag);
      }
      return tag;
    }
  };
  return callback(BoolValue$Type, items);
}(arg1(dependencyMap[6]).MessageType);
tmp14 = new tmp14();
let tmp16 = (MessageType) => {
  class StringValue$Type {
    constructor() {
      tmp = closure_3(this, StringValue$Type);
      items = [];
      items[0] = { 9223372036854775807: -120.702, 0: 10, 9223372036854775807: "WHITE_500", no: 0.25 };
      items1 = [33];
      items1[1] = items;
      return closure_8(this, StringValue$Type, items1);
    }
  }
  const arg1 = StringValue$Type;
  callback3(StringValue$Type, MessageType);
  let obj = {
    key: "internalJsonWrite",
    value(value) {
      return value.value;
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "internalJsonRead",
    value(arg0, arg1, arg2) {
      let obj = arg2;
      const self = this;
      if (!arg2) {
        obj = self.create();
      }
      const refJsonReader = self.refJsonReader;
      obj.value = refJsonReader.scalar(arg0, 9, undefined, "value");
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "create",
    value(arr) {
      let obj = { value: "" };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, StringValue$Type(closure_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = StringValue$Type(closure_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = StringValue$Type(closure_1[6]);
      }
      return obj;
    }
  };
  items[2] = obj;
  items[3] = {
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
          obj.value = pos.string();
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
                let tmp12 = StringValue$Type;
                let tmp13 = closure_1;
                onRead = StringValue$Type(closure_1[6]).UnknownFieldHandler.onRead;
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
  items[4] = {
    key: "internalBinaryWrite",
    value(value, tag, writeUnknownFields) {
      if ("" !== value.value) {
        tag.tag(1, StringValue$Type(closure_1[6]).WireType.LengthDelimited).string(value.value);
        const tagResult = tag.tag(1, StringValue$Type(closure_1[6]).WireType.LengthDelimited);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = StringValue$Type(closure_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, value, tag);
      }
      return tag;
    }
  };
  return callback(StringValue$Type, items);
}(arg1(dependencyMap[6]).MessageType);
tmp16 = new tmp16();
let tmp18 = (MessageType) => {
  class BytesValue$Type {
    constructor() {
      tmp = closure_3(this, BytesValue$Type);
      items = [];
      items[0] = {};
      items1 = [false];
      items1[1] = items;
      return closure_8(this, BytesValue$Type, items1);
    }
  }
  const arg1 = BytesValue$Type;
  callback3(BytesValue$Type, MessageType);
  let obj = {
    key: "internalJsonWrite",
    value(value) {
      const refJsonWriter = this.refJsonWriter;
      return refJsonWriter.scalar(12, value.value, "value", false, true);
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "internalJsonRead",
    value(arg0, arg1, arg2) {
      let obj = arg2;
      const self = this;
      if (!arg2) {
        obj = self.create();
      }
      const refJsonReader = self.refJsonReader;
      obj.value = refJsonReader.scalar(arg0, 12, undefined, "value");
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const uint8Array = new Uint8Array(0);
      obj.value = uint8Array;
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, BytesValue$Type(closure_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = BytesValue$Type(closure_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = BytesValue$Type(closure_1[6]);
      }
      return obj;
    }
  };
  items[2] = obj;
  items[3] = {
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
          obj.value = pos.bytes();
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
                let tmp12 = BytesValue$Type;
                let tmp13 = closure_1;
                onRead = BytesValue$Type(closure_1[6]).UnknownFieldHandler.onRead;
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
  items[4] = {
    key: "internalBinaryWrite",
    value(value, tag, writeUnknownFields) {
      if (value.value.length) {
        tag.tag(1, BytesValue$Type(closure_1[6]).WireType.LengthDelimited).bytes(value.value);
        const tagResult = tag.tag(1, BytesValue$Type(closure_1[6]).WireType.LengthDelimited);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = BytesValue$Type(closure_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, value, tag);
      }
      return tag;
    }
  };
  return callback(BytesValue$Type, items);
}(arg1(dependencyMap[6]).MessageType);
tmp18 = new tmp18();
const result = arg1(dependencyMap[7]).fileFinishedImporting("../discord_common/js/packages/protos/google/protobuf/wrappers.tsx");

export const DoubleValue = tmp2;
export const FloatValue = tmp4;
export const Int64Value = tmp6;
export const UInt64Value = tmp8;
export const Int32Value = tmp10;
export const UInt32Value = tmp12;
export const BoolValue = tmp14;
export const StringValue = tmp16;
export const BytesValue = tmp18;
