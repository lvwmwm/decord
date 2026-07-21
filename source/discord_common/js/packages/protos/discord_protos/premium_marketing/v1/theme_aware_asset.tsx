// Module ID: 7140
// Function ID: 57538
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 7140 (_isNativeReflectConstruct)
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
  class ThemeAwareAsset$Type {
    constructor() {
      self = this;
      tmp = closure_3(this, ThemeAwareAsset$Type);
      items = [, , , ];
      items[0] = {};
      items[1] = { 1347510942: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009426723821, 1678385745: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000339912703632747, 1364379111: 83384453357996800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 140698458: null };
      items[2] = { 1347510942: null, 1678385745: null, 1364379111: null, 140698458: null };
      items[3] = { 1347510942: 9, 1678385745: 7, 1364379111: "cta_label_localized", 140698458: "message" };
      items1 = [false];
      items1[1] = items;
      obj = closure_6(ThemeAwareAsset$Type);
      tmp2 = closure_5;
      if (closure_8()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = ThemeAwareAsset$Type;
  callback2(ThemeAwareAsset$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, representation: null };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, ThemeAwareAsset$Type(closure_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = ThemeAwareAsset$Type(closure_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = ThemeAwareAsset$Type(closure_1[6]);
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
                let tmp13 = closure_1;
                onRead = ThemeAwareAsset$Type(closure_1[6]).UnknownFieldHandler.onRead;
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
    value(lightUrl, tag, writeUnknownFields) {
      if ("" !== lightUrl.lightUrl) {
        tag.tag(1, ThemeAwareAsset$Type(closure_1[6]).WireType.LengthDelimited).string(lightUrl.lightUrl);
        const tagResult = tag.tag(1, ThemeAwareAsset$Type(closure_1[6]).WireType.LengthDelimited);
      }
      if ("" !== lightUrl.darkUrl) {
        tag.tag(2, ThemeAwareAsset$Type(closure_1[6]).WireType.LengthDelimited).string(lightUrl.darkUrl);
        const tagResult1 = tag.tag(2, ThemeAwareAsset$Type(closure_1[6]).WireType.LengthDelimited);
      }
      if ("" !== lightUrl.lightStaticUrl) {
        tag.tag(3, ThemeAwareAsset$Type(closure_1[6]).WireType.LengthDelimited).string(lightUrl.lightStaticUrl);
        const tagResult2 = tag.tag(3, ThemeAwareAsset$Type(closure_1[6]).WireType.LengthDelimited);
      }
      if ("" !== lightUrl.darkStaticUrl) {
        tag.tag(4, ThemeAwareAsset$Type(closure_1[6]).WireType.LengthDelimited).string(lightUrl.darkStaticUrl);
        const tagResult3 = tag.tag(4, ThemeAwareAsset$Type(closure_1[6]).WireType.LengthDelimited);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = ThemeAwareAsset$Type(closure_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, lightUrl, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(ThemeAwareAsset$Type, items);
}(arg1(dependencyMap[6]).MessageType);
tmp2 = new tmp2();
const result = arg1(dependencyMap[7]).fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/theme_aware_asset.tsx");

export const ThemeAwareAsset = tmp2;
