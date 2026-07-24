// Module ID: 7141
// Function ID: 57566
// Name: _isNativeReflectConstruct
// Dependencies: [57, 6, 7, 15, 17, 18, 7142, 1284, 2]

// Module 7141 (_isNativeReflectConstruct)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import module_1284 from "module_1284";
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
  class GiftIcon$Type {
    constructor() {
      self = this;
      tmp = outer1_3(this, GiftIcon$Type);
      items = [, , , ];
      items[0] = { no: 1, name: "box_animation_url", kind: "scalar", T: 9 };
      items[1] = { no: 2, name: "trinket_animation_url", kind: "scalar", T: 9 };
      items[2] = { no: 3, name: "trinket_glow_animation_url", kind: "scalar", T: 9 };
      obj = { no: 4, name: "gradient", kind: "message" };
      obj.T = function T() {
        return GiftIcon$Type(outer2_1[6]).Gradient;
      };
      items[3] = obj;
      items1 = ["discord_protos.premium_marketing.v1.GiftIcon"];
      items1[1] = items;
      obj2 = outer1_6(GiftIcon$Type);
      tmp2 = outer1_5;
      if (outer1_8()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_6;
        constructResult = Reflect.construct(obj2, items1, outer1_6(self).constructor);
      } else {
        constructResult = obj2.apply(self, items1);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(GiftIcon$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { boxAnimationUrl: "", trinketAnimationUrl: "", trinketGlowAnimationUrl: "" };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, GiftIcon$Type(outer1_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = GiftIcon$Type(outer1_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = GiftIcon$Type(outer1_1[7]);
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
          obj.boxAnimationUrl = pos.string();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          obj.trinketAnimationUrl = pos.string();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          obj.trinketGlowAnimationUrl = pos.string();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (4 === tmp7) {
          let tmp26 = GiftIcon$Type;
          let tmp27 = outer1_1;
          let Gradient = GiftIcon$Type(outer1_1[6]).Gradient;
          let tmp28 = Gradient;
          let tmp29 = pos;
          let tmp30 = readUnknownField;
          obj.gradient = Gradient.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.gradient);
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
                let tmp12 = GiftIcon$Type;
                let tmp13 = outer1_1;
                onRead = GiftIcon$Type(outer1_1[7]).UnknownFieldHandler.onRead;
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
    value(boxAnimationUrl, tag, writeUnknownFields) {
      if ("" !== boxAnimationUrl.boxAnimationUrl) {
        tag.tag(1, GiftIcon$Type(outer1_1[7]).WireType.LengthDelimited).string(boxAnimationUrl.boxAnimationUrl);
        const tagResult = tag.tag(1, GiftIcon$Type(outer1_1[7]).WireType.LengthDelimited);
      }
      if ("" !== boxAnimationUrl.trinketAnimationUrl) {
        tag.tag(2, GiftIcon$Type(outer1_1[7]).WireType.LengthDelimited).string(boxAnimationUrl.trinketAnimationUrl);
        const tagResult1 = tag.tag(2, GiftIcon$Type(outer1_1[7]).WireType.LengthDelimited);
      }
      if ("" !== boxAnimationUrl.trinketGlowAnimationUrl) {
        tag.tag(3, GiftIcon$Type(outer1_1[7]).WireType.LengthDelimited).string(boxAnimationUrl.trinketGlowAnimationUrl);
        const tagResult2 = tag.tag(3, GiftIcon$Type(outer1_1[7]).WireType.LengthDelimited);
      }
      if (boxAnimationUrl.gradient) {
        const Gradient = GiftIcon$Type(outer1_1[6]).Gradient;
        const tagResult3 = tag.tag(4, GiftIcon$Type(outer1_1[7]).WireType.LengthDelimited);
        const joined = Gradient.internalBinaryWrite(boxAnimationUrl.gradient, tag.tag(4, GiftIcon$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = Gradient.internalBinaryWrite(boxAnimationUrl.gradient, tag.tag(4, GiftIcon$Type(outer1_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = GiftIcon$Type(outer1_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, boxAnimationUrl, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(GiftIcon$Type, items);
})(require("module_1284").MessageType);
tmp2 = new tmp2();
let result = require("_defineProperties").fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/gift_icon.tsx");

export const GiftIcon = tmp2;
