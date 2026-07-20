// Module ID: 7130
// Function ID: 57450
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 7130 (_isNativeReflectConstruct)
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
  class PaymentModalBanner$Type {
    constructor() {
      self = this;
      tmp = closure_3(this, PaymentModalBanner$Type);
      items = [, , , , ];
      items[0] = { body: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002012870360051815, guildId: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003200674821102785, ao: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030586585845, "": 2798595.4946969007 };
      items[1] = { body: null, guildId: null, ao: null, "": null };
      items[2] = {};
      obj = { emojiId: "3", emojiName: 3, userId: "mobile_body" };
      obj.T = function T() {
        return callback(closure_1[6]).LocalizedString;
      };
      items[3] = obj;
      obj = { emojiId: null, emojiName: 9, userId: null };
      obj.T = function T() {
        return callback(closure_1[6]).LocalizedString;
      };
      items[4] = obj;
      items1 = [true];
      items1[1] = items;
      obj3 = closure_6(PaymentModalBanner$Type);
      tmp2 = closure_5;
      if (closure_8()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj3, items1, closure_6(self).constructor);
      } else {
        constructResult = obj3.apply(self, items1);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = PaymentModalBanner$Type;
  callback2(PaymentModalBanner$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { fill: null, padding: null, accessibilityLabel: null };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, PaymentModalBanner$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = PaymentModalBanner$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = PaymentModalBanner$Type(closure_1[7]);
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
          obj.assetUrl = pos.string();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          obj.header = pos.string();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          obj.body = pos.string();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (4 === tmp7) {
          let tmp31 = PaymentModalBanner$Type;
          let tmp32 = closure_1;
          let LocalizedString2 = PaymentModalBanner$Type(closure_1[6]).LocalizedString;
          let tmp33 = LocalizedString2;
          let tmp34 = pos;
          let tmp35 = readUnknownField;
          obj.headerLocalized = LocalizedString2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.headerLocalized);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (5 === tmp7) {
          let tmp26 = PaymentModalBanner$Type;
          let tmp27 = closure_1;
          let LocalizedString = PaymentModalBanner$Type(closure_1[6]).LocalizedString;
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
                let tmp12 = PaymentModalBanner$Type;
                let tmp13 = closure_1;
                onRead = PaymentModalBanner$Type(closure_1[7]).UnknownFieldHandler.onRead;
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
    value(assetUrl, tag, writeUnknownFields) {
      if ("" !== assetUrl.assetUrl) {
        tag.tag(1, PaymentModalBanner$Type(closure_1[7]).WireType.LengthDelimited).string(assetUrl.assetUrl);
        const tagResult = tag.tag(1, PaymentModalBanner$Type(closure_1[7]).WireType.LengthDelimited);
      }
      if ("" !== assetUrl.header) {
        tag.tag(2, PaymentModalBanner$Type(closure_1[7]).WireType.LengthDelimited).string(assetUrl.header);
        const tagResult1 = tag.tag(2, PaymentModalBanner$Type(closure_1[7]).WireType.LengthDelimited);
      }
      if ("" !== assetUrl.body) {
        tag.tag(3, PaymentModalBanner$Type(closure_1[7]).WireType.LengthDelimited).string(assetUrl.body);
        const tagResult2 = tag.tag(3, PaymentModalBanner$Type(closure_1[7]).WireType.LengthDelimited);
      }
      if (assetUrl.headerLocalized) {
        const LocalizedString = PaymentModalBanner$Type(closure_1[6]).LocalizedString;
        const tagResult3 = tag.tag(4, PaymentModalBanner$Type(closure_1[7]).WireType.LengthDelimited);
        const joined = LocalizedString.internalBinaryWrite(assetUrl.headerLocalized, tag.tag(4, PaymentModalBanner$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = LocalizedString.internalBinaryWrite(assetUrl.headerLocalized, tag.tag(4, PaymentModalBanner$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (assetUrl.bodyLocalized) {
        const LocalizedString2 = PaymentModalBanner$Type(closure_1[6]).LocalizedString;
        const tagResult4 = tag.tag(5, PaymentModalBanner$Type(closure_1[7]).WireType.LengthDelimited);
        const joined1 = LocalizedString2.internalBinaryWrite(assetUrl.bodyLocalized, tag.tag(5, PaymentModalBanner$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = LocalizedString2.internalBinaryWrite(assetUrl.bodyLocalized, tag.tag(5, PaymentModalBanner$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = PaymentModalBanner$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, assetUrl, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(PaymentModalBanner$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp2 = new tmp2();
const result = arg1(dependencyMap[8]).fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/payment_modal_banner.tsx");

export const PaymentModalBanner = tmp2;
