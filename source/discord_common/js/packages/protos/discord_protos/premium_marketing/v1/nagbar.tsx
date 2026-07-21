// Module ID: 7148
// Function ID: 57654
// Name: _isNativeReflectConstruct
// Dependencies: [42795008, 368181248, 121307136, 31588352, 196608, 368312320, 369229824, 249757696, 44957696, 248184832, 248315904, 292683776]

// Module 7148 (_isNativeReflectConstruct)
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
  class Nagbar$Type {
    constructor() {
      self = this;
      tmp = closure_3(this, Nagbar$Type);
      items = [, , , , , , , ];
      items[0] = { 1347510942: 5, 1678385745: "banner_asset_url", 1364379111: "scalar", 140698458: 9 };
      items[1] = {};
      obj = { 9223372036854775807: null, 9223372036854775807: null, 0: null };
      obj.T = function T() {
        const items = [6965542329722403000000000000000000000000000000000000000000000000000000000000000000000000000000, callback(closure_1[6]).ButtonAction, "BUTTON_ACTION_"];
        return items;
      };
      items[2] = obj;
      items[3] = {};
      obj = { 9223372036854775807: "message", 9223372036854775807: "NEUTRAL_46", 0: 1 };
      obj.T = function T() {
        return callback(closure_1[7]).HelpArticle;
      };
      items[4] = obj;
      obj1 = { 9223372036854775807: null, 9223372036854775807: null, 0: null };
      obj1.T = function T() {
        return callback(closure_1[8]).LocalizedString;
      };
      items[5] = obj1;
      items[6] = {
        T() {
              return callback(closure_1[8]).LocalizedString;
            }
      };
      obj2 = { 9223372036854775807: "butt", 9223372036854775807: 360, 0: 0 };
      obj2.T = function T() {
        return callback(closure_1[9]).UInt64Value;
      };
      items[7] = obj2;
      items1 = [2131857280];
      items1[1] = items;
      obj5 = closure_6(Nagbar$Type);
      tmp2 = closure_5;
      if (closure_8()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj5, items1, closure_6(self).constructor);
      } else {
        constructResult = obj5.apply(self, items1);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = Nagbar$Type;
  callback2(Nagbar$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { 0: null, -9223372036854775808: null, 9223372036854775807: null, 9223372036854775807: null };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, Nagbar$Type(closure_1[10]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = Nagbar$Type(closure_1[10]).reflectionMergePartial(this, obj, arr);
        const obj3 = Nagbar$Type(closure_1[10]);
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
          obj.body = pos.string();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          obj.ctaLabel = pos.string();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          obj.ctaAction = pos.int32();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (4 === tmp7) {
          obj.deeplinkSection = pos.string();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (5 === tmp7) {
          let tmp41 = Nagbar$Type;
          let tmp42 = closure_1;
          let HelpArticle = Nagbar$Type(closure_1[7]).HelpArticle;
          let tmp43 = HelpArticle;
          let tmp44 = pos;
          let tmp45 = readUnknownField;
          obj.helpArticle = HelpArticle.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.helpArticle);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (6 === tmp7) {
          let tmp36 = Nagbar$Type;
          let tmp37 = closure_1;
          let LocalizedString2 = Nagbar$Type(closure_1[8]).LocalizedString;
          let tmp38 = LocalizedString2;
          let tmp39 = pos;
          let tmp40 = readUnknownField;
          obj.bodyLocalized = LocalizedString2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.bodyLocalized);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (7 === tmp7) {
          let tmp31 = Nagbar$Type;
          let tmp32 = closure_1;
          let LocalizedString = Nagbar$Type(closure_1[8]).LocalizedString;
          let tmp33 = LocalizedString;
          let tmp34 = pos;
          let tmp35 = readUnknownField;
          obj.ctaLabelLocalized = LocalizedString.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.ctaLabelLocalized);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (8 === tmp7) {
          let tmp26 = Nagbar$Type;
          let tmp27 = closure_1;
          let UInt64Value = Nagbar$Type(closure_1[9]).UInt64Value;
          let tmp28 = UInt64Value;
          let tmp29 = pos;
          let tmp30 = readUnknownField;
          obj.navigableStorefrontApplicationId = UInt64Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.navigableStorefrontApplicationId);
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
                let tmp12 = Nagbar$Type;
                let tmp13 = closure_1;
                onRead = Nagbar$Type(closure_1[10]).UnknownFieldHandler.onRead;
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
    value(body, tag, writeUnknownFields) {
      if ("" !== body.body) {
        tag.tag(1, Nagbar$Type(closure_1[10]).WireType.LengthDelimited).string(body.body);
        const tagResult = tag.tag(1, Nagbar$Type(closure_1[10]).WireType.LengthDelimited);
      }
      if ("" !== body.ctaLabel) {
        tag.tag(2, Nagbar$Type(closure_1[10]).WireType.LengthDelimited).string(body.ctaLabel);
        const tagResult1 = tag.tag(2, Nagbar$Type(closure_1[10]).WireType.LengthDelimited);
      }
      if (0 !== body.ctaAction) {
        tag.tag(3, Nagbar$Type(closure_1[10]).WireType.Varint).int32(body.ctaAction);
        const tagResult2 = tag.tag(3, Nagbar$Type(closure_1[10]).WireType.Varint);
      }
      if ("" !== body.deeplinkSection) {
        tag.tag(4, Nagbar$Type(closure_1[10]).WireType.LengthDelimited).string(body.deeplinkSection);
        const tagResult3 = tag.tag(4, Nagbar$Type(closure_1[10]).WireType.LengthDelimited);
      }
      if (body.helpArticle) {
        const HelpArticle = Nagbar$Type(closure_1[7]).HelpArticle;
        const tagResult4 = tag.tag(5, Nagbar$Type(closure_1[10]).WireType.LengthDelimited);
        const joined = HelpArticle.internalBinaryWrite(body.helpArticle, tag.tag(5, Nagbar$Type(closure_1[10]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = HelpArticle.internalBinaryWrite(body.helpArticle, tag.tag(5, Nagbar$Type(closure_1[10]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (body.bodyLocalized) {
        const LocalizedString = Nagbar$Type(closure_1[8]).LocalizedString;
        const tagResult5 = tag.tag(6, Nagbar$Type(closure_1[10]).WireType.LengthDelimited);
        const joined1 = LocalizedString.internalBinaryWrite(body.bodyLocalized, tag.tag(6, Nagbar$Type(closure_1[10]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = LocalizedString.internalBinaryWrite(body.bodyLocalized, tag.tag(6, Nagbar$Type(closure_1[10]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (body.ctaLabelLocalized) {
        const LocalizedString2 = Nagbar$Type(closure_1[8]).LocalizedString;
        const tagResult6 = tag.tag(7, Nagbar$Type(closure_1[10]).WireType.LengthDelimited);
        const joined2 = LocalizedString2.internalBinaryWrite(body.ctaLabelLocalized, tag.tag(7, Nagbar$Type(closure_1[10]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = LocalizedString2.internalBinaryWrite(body.ctaLabelLocalized, tag.tag(7, Nagbar$Type(closure_1[10]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (body.navigableStorefrontApplicationId) {
        const UInt64Value = Nagbar$Type(closure_1[9]).UInt64Value;
        const tagResult7 = tag.tag(8, Nagbar$Type(closure_1[10]).WireType.LengthDelimited);
        const joined3 = UInt64Value.internalBinaryWrite(body.navigableStorefrontApplicationId, tag.tag(8, Nagbar$Type(closure_1[10]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult3 = UInt64Value.internalBinaryWrite(body.navigableStorefrontApplicationId, tag.tag(8, Nagbar$Type(closure_1[10]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = Nagbar$Type(closure_1[10]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, body, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(Nagbar$Type, items);
}(arg1(dependencyMap[10]).MessageType);
tmp2 = new tmp2();
const result = arg1(dependencyMap[11]).fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/nagbar.tsx");

export const Nagbar = tmp2;
