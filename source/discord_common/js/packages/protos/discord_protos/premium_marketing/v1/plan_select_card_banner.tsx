// Module ID: 7149
// Function ID: 57679
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 7149 (_isNativeReflectConstruct)
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
  class PlanSelectCardBanner$Type {
    constructor() {
      self = this;
      tmp = closure_3(this, PlanSelectCardBanner$Type);
      obj = {
        T() {
              return callback(closure_1[6]).ThemeAwareAsset;
            }
      };
      items = [, , ];
      items[0] = obj;
      items[1] = {};
      items[2] = {
        T() {
              return callback(closure_1[7]).LocalizedString;
            }
      };
      items1 = ["Set"];
      items1[1] = items;
      obj2 = closure_6(PlanSelectCardBanner$Type);
      tmp2 = closure_5;
      if (closure_8()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj2, items1, closure_6(self).constructor);
      } else {
        constructResult = obj2.apply(self, items1);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = PlanSelectCardBanner$Type;
  callback2(PlanSelectCardBanner$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { body: "" };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, PlanSelectCardBanner$Type(closure_1[8]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = PlanSelectCardBanner$Type(closure_1[8]).reflectionMergePartial(this, obj, arr);
        const obj3 = PlanSelectCardBanner$Type(closure_1[8]);
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
          let tmp31 = PlanSelectCardBanner$Type;
          let tmp32 = closure_1;
          let ThemeAwareAsset = PlanSelectCardBanner$Type(closure_1[6]).ThemeAwareAsset;
          let tmp33 = ThemeAwareAsset;
          let tmp34 = pos;
          let tmp35 = readUnknownField;
          obj.asset = ThemeAwareAsset.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.asset);
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          obj.body = pos.string();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          let tmp26 = PlanSelectCardBanner$Type;
          let tmp27 = closure_1;
          let LocalizedString = PlanSelectCardBanner$Type(closure_1[7]).LocalizedString;
          let tmp28 = LocalizedString;
          let tmp29 = pos;
          let tmp30 = readUnknownField;
          obj.bodyLocalized = LocalizedString.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.bodyLocalized);
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
                let tmp12 = PlanSelectCardBanner$Type;
                let tmp13 = closure_1;
                onRead = PlanSelectCardBanner$Type(closure_1[8]).UnknownFieldHandler.onRead;
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
    value(asset, tag, writeUnknownFields) {
      if (asset.asset) {
        const ThemeAwareAsset = PlanSelectCardBanner$Type(closure_1[6]).ThemeAwareAsset;
        const tagResult = tag.tag(1, PlanSelectCardBanner$Type(closure_1[8]).WireType.LengthDelimited);
        const joined = ThemeAwareAsset.internalBinaryWrite(asset.asset, tag.tag(1, PlanSelectCardBanner$Type(closure_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = ThemeAwareAsset.internalBinaryWrite(asset.asset, tag.tag(1, PlanSelectCardBanner$Type(closure_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("" !== asset.body) {
        tag.tag(2, PlanSelectCardBanner$Type(closure_1[8]).WireType.LengthDelimited).string(asset.body);
        const tagResult1 = tag.tag(2, PlanSelectCardBanner$Type(closure_1[8]).WireType.LengthDelimited);
      }
      if (asset.bodyLocalized) {
        const LocalizedString = PlanSelectCardBanner$Type(closure_1[7]).LocalizedString;
        const tagResult2 = tag.tag(3, PlanSelectCardBanner$Type(closure_1[8]).WireType.LengthDelimited);
        const joined1 = LocalizedString.internalBinaryWrite(asset.bodyLocalized, tag.tag(3, PlanSelectCardBanner$Type(closure_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = LocalizedString.internalBinaryWrite(asset.bodyLocalized, tag.tag(3, PlanSelectCardBanner$Type(closure_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = PlanSelectCardBanner$Type(closure_1[8]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, asset, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(PlanSelectCardBanner$Type, items);
}(arg1(dependencyMap[8]).MessageType);
tmp2 = new tmp2();
const result = arg1(dependencyMap[9]).fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/plan_select_card_banner.tsx");

export const PlanSelectCardBanner = tmp2;
