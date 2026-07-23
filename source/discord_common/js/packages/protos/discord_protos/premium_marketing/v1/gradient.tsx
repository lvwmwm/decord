// Module ID: 7143
// Function ID: 57562
// Name: _isNativeReflectConstruct
// Dependencies: [57, 6, 7, 15, 17, 18, 1284, 2]

// Module 7143 (_isNativeReflectConstruct)
import _slicedToArray from "_slicedToArray";
import module_1284 from "module_1284";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let tmp2 = ((MessageType) => {
  class Gradient$Type {
    constructor() {
      self = this;
      tmp = outer1_3(this, Gradient$Type);
      items = [, ];
      items[0] = { no: 1, name: "colors", kind: "scalar", repeat: 2, T: 9 };
      items[1] = { no: 2, name: "angle", kind: "scalar", T: 2 };
      items1 = ["discord_protos.premium_marketing.v1.Gradient"];
      items1[1] = items;
      obj = outer1_6(Gradient$Type);
      tmp2 = outer1_5;
      if (outer1_8()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_6;
        constructResult = Reflect.construct(obj, items1, outer1_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(Gradient$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { colors: [], angle: 0 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, Gradient$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = Gradient$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = Gradient$Type(outer1_1[6]);
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
          let colors = obj.colors;
          let arr = colors.push(pos.string());
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          obj.angle = pos.float();
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
                let tmp12 = Gradient$Type;
                let tmp13 = outer1_1;
                onRead = Gradient$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
    value(colors, tag, writeUnknownFields) {
      let length;
      let num = 0;
      if (0 < colors.colors.length) {
        do {
          let tmp = Gradient$Type;
          let tmp2 = outer1_1;
          let tagResult = tag.tag(1, Gradient$Type(outer1_1[6]).WireType.LengthDelimited);
          let stringResult = tagResult.string(colors.colors[num]);
          num = num + 1;
          length = colors.colors.length;
        } while (num < length);
      }
      if (0 !== colors.angle) {
        tag.tag(2, Gradient$Type(outer1_1[6]).WireType.Bit32).float(colors.angle);
        const tagResult1 = tag.tag(2, Gradient$Type(outer1_1[6]).WireType.Bit32);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = Gradient$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, colors, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(Gradient$Type, items);
})(require("module_1284").MessageType);
tmp2 = new tmp2();
let result = require("_defineProperties").fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/gradient.tsx");

export const Gradient = tmp2;
