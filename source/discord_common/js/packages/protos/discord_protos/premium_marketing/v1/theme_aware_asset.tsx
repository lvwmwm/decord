// Module ID: 7145
// Function ID: 57583
// Name: _isNativeReflectConstruct
// Dependencies: [57, 6, 7, 15, 17, 18, 1284, 2]

// Module 7145 (_isNativeReflectConstruct)
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
  class ThemeAwareAsset$Type {
    constructor() {
      self = this;
      tmp = outer1_3(this, ThemeAwareAsset$Type);
      items = [, , , ];
      items[0] = { no: 1, name: "light_url", kind: "scalar", T: 9 };
      items[1] = { no: 2, name: "dark_url", kind: "scalar", T: 9 };
      items[2] = { no: 3, name: "light_static_url", kind: "scalar", T: 9 };
      items[3] = { no: 4, name: "dark_static_url", kind: "scalar", T: 9 };
      items1 = ["discord_protos.premium_marketing.v1.ThemeAwareAsset"];
      items1[1] = items;
      obj = outer1_6(ThemeAwareAsset$Type);
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
  callback2(ThemeAwareAsset$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { lightUrl: "", darkUrl: "", lightStaticUrl: "", darkStaticUrl: "" };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, ThemeAwareAsset$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = ThemeAwareAsset$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = ThemeAwareAsset$Type(outer1_1[6]);
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
          obj.lightUrl = pos.string();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          obj.darkUrl = pos.string();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          obj.lightStaticUrl = pos.string();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (4 === tmp7) {
          obj.darkStaticUrl = pos.string();
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
                let tmp12 = ThemeAwareAsset$Type;
                let tmp13 = outer1_1;
                onRead = ThemeAwareAsset$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
    value(lightUrl, tag, writeUnknownFields) {
      if ("" !== lightUrl.lightUrl) {
        tag.tag(1, ThemeAwareAsset$Type(outer1_1[6]).WireType.LengthDelimited).string(lightUrl.lightUrl);
        const tagResult = tag.tag(1, ThemeAwareAsset$Type(outer1_1[6]).WireType.LengthDelimited);
      }
      if ("" !== lightUrl.darkUrl) {
        tag.tag(2, ThemeAwareAsset$Type(outer1_1[6]).WireType.LengthDelimited).string(lightUrl.darkUrl);
        const tagResult1 = tag.tag(2, ThemeAwareAsset$Type(outer1_1[6]).WireType.LengthDelimited);
      }
      if ("" !== lightUrl.lightStaticUrl) {
        tag.tag(3, ThemeAwareAsset$Type(outer1_1[6]).WireType.LengthDelimited).string(lightUrl.lightStaticUrl);
        const tagResult2 = tag.tag(3, ThemeAwareAsset$Type(outer1_1[6]).WireType.LengthDelimited);
      }
      if ("" !== lightUrl.darkStaticUrl) {
        tag.tag(4, ThemeAwareAsset$Type(outer1_1[6]).WireType.LengthDelimited).string(lightUrl.darkStaticUrl);
        const tagResult3 = tag.tag(4, ThemeAwareAsset$Type(outer1_1[6]).WireType.LengthDelimited);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = ThemeAwareAsset$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, lightUrl, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(ThemeAwareAsset$Type, items);
})(require("module_1284").MessageType);
tmp2 = new tmp2();
let result = require("_defineProperties").fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/theme_aware_asset.tsx");

export const ThemeAwareAsset = tmp2;
