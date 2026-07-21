// Module ID: 7133
// Function ID: 57438
// Name: _callSuper
// Dependencies: []

// Module 7133 (_callSuper)
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
const obj = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", EXPRESSIVE: 1, [1]: "EXPRESSIVE", PRIMARY: 2, [2]: "PRIMARY" };
let tmp2 = (MessageType) => {
  class MarketingPageBanner$Type {
    constructor() {
      tmp = closure_3(this, MarketingPageBanner$Type);
      items = [, , , , , , , , ];
      items[0] = {};
      items[1] = { 9223372036854775807: 2417, 0: 487680, 9223372036854775807: 641859584, no: true };
      items[2] = {};
      items[3] = { 9223372036854775807: "rgba(0, 0, 0, 0.7)", 0: 16, 9223372036854775807: "row", no: "center" };
      obj = { "Null": "filter_snapshot_name", "Null": "scalar", "Null": 9 };
      obj.T = function T() {
        return closure_9;
      };
      items[4] = obj;
      obj = { "Null": "#E6E6E7", "Null": "OPACITY_BLUE_52", "Null": 0.5215686274509804 };
      obj.T = function T() {
        return callback(closure_1[6]).HelpArticle;
      };
      items[5] = obj;
      items[6] = {
        T() {
              return callback(closure_1[7]).LocalizedString;
            }
      };
      items[7] = {
        T() {
              return callback(closure_1[7]).LocalizedString;
            }
      };
      items[8] = {
        T() {
              const items = ["containerStyle", closure_8, "MARKETING_PAGE_BANNER_BUTTON_VARIANT_"];
              return items;
            }
      };
      items1 = ["<string:1374118385>"];
      items1[1] = items;
      return closure_10(this, MarketingPageBanner$Type, items1);
    }
  }
  const arg1 = MarketingPageBanner$Type;
  callback3(MarketingPageBanner$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, MarketingPageBanner$Type(closure_1[8]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = MarketingPageBanner$Type(closure_1[8]).reflectionMergePartial(this, obj, arr);
        const obj3 = MarketingPageBanner$Type(closure_1[8]);
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
          obj.helpArticleId = pos.string();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (5 === tmp7) {
          let tmp41 = closure_9;
          let tmp42 = closure_9;
          let tmp43 = pos;
          let tmp44 = readUnknownField;
          obj.button = closure_9.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.button);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (6 === tmp7) {
          let tmp36 = MarketingPageBanner$Type;
          let tmp37 = closure_1;
          let HelpArticle = MarketingPageBanner$Type(closure_1[6]).HelpArticle;
          let tmp38 = HelpArticle;
          let tmp39 = pos;
          let tmp40 = readUnknownField;
          obj.helpArticle = HelpArticle.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.helpArticle);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (7 === tmp7) {
          let tmp31 = MarketingPageBanner$Type;
          let tmp32 = closure_1;
          let LocalizedString2 = MarketingPageBanner$Type(closure_1[7]).LocalizedString;
          let tmp33 = LocalizedString2;
          let tmp34 = pos;
          let tmp35 = readUnknownField;
          obj.headerLocalized = LocalizedString2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.headerLocalized);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (8 === tmp7) {
          let tmp26 = MarketingPageBanner$Type;
          let tmp27 = closure_1;
          let LocalizedString = MarketingPageBanner$Type(closure_1[7]).LocalizedString;
          let tmp28 = LocalizedString;
          let tmp29 = pos;
          let tmp30 = readUnknownField;
          obj.bodyLocalized = LocalizedString.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.bodyLocalized);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (9 === tmp7) {
          obj.buttonVariant = pos.int32();
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
                let tmp12 = MarketingPageBanner$Type;
                let tmp13 = closure_1;
                onRead = MarketingPageBanner$Type(closure_1[8]).UnknownFieldHandler.onRead;
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
        tag.tag(1, MarketingPageBanner$Type(closure_1[8]).WireType.LengthDelimited).string(assetUrl.assetUrl);
        const tagResult = tag.tag(1, MarketingPageBanner$Type(closure_1[8]).WireType.LengthDelimited);
      }
      if ("" !== assetUrl.header) {
        tag.tag(2, MarketingPageBanner$Type(closure_1[8]).WireType.LengthDelimited).string(assetUrl.header);
        const tagResult1 = tag.tag(2, MarketingPageBanner$Type(closure_1[8]).WireType.LengthDelimited);
      }
      if ("" !== assetUrl.body) {
        tag.tag(3, MarketingPageBanner$Type(closure_1[8]).WireType.LengthDelimited).string(assetUrl.body);
        const tagResult2 = tag.tag(3, MarketingPageBanner$Type(closure_1[8]).WireType.LengthDelimited);
      }
      if ("" !== assetUrl.helpArticleId) {
        tag.tag(4, MarketingPageBanner$Type(closure_1[8]).WireType.LengthDelimited).string(assetUrl.helpArticleId);
        const tagResult3 = tag.tag(4, MarketingPageBanner$Type(closure_1[8]).WireType.LengthDelimited);
      }
      if (assetUrl.button) {
        const tagResult4 = tag.tag(5, MarketingPageBanner$Type(closure_1[8]).WireType.LengthDelimited);
        const joined = closure_9.internalBinaryWrite(assetUrl.button, tag.tag(5, MarketingPageBanner$Type(closure_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = closure_9.internalBinaryWrite(assetUrl.button, tag.tag(5, MarketingPageBanner$Type(closure_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (assetUrl.helpArticle) {
        const HelpArticle = MarketingPageBanner$Type(closure_1[6]).HelpArticle;
        const tagResult5 = tag.tag(6, MarketingPageBanner$Type(closure_1[8]).WireType.LengthDelimited);
        const joined1 = HelpArticle.internalBinaryWrite(assetUrl.helpArticle, tag.tag(6, MarketingPageBanner$Type(closure_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = HelpArticle.internalBinaryWrite(assetUrl.helpArticle, tag.tag(6, MarketingPageBanner$Type(closure_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (assetUrl.headerLocalized) {
        const LocalizedString = MarketingPageBanner$Type(closure_1[7]).LocalizedString;
        const tagResult6 = tag.tag(7, MarketingPageBanner$Type(closure_1[8]).WireType.LengthDelimited);
        const joined2 = LocalizedString.internalBinaryWrite(assetUrl.headerLocalized, tag.tag(7, MarketingPageBanner$Type(closure_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = LocalizedString.internalBinaryWrite(assetUrl.headerLocalized, tag.tag(7, MarketingPageBanner$Type(closure_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (assetUrl.bodyLocalized) {
        const LocalizedString2 = MarketingPageBanner$Type(closure_1[7]).LocalizedString;
        const tagResult7 = tag.tag(8, MarketingPageBanner$Type(closure_1[8]).WireType.LengthDelimited);
        const joined3 = LocalizedString2.internalBinaryWrite(assetUrl.bodyLocalized, tag.tag(8, MarketingPageBanner$Type(closure_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult3 = LocalizedString2.internalBinaryWrite(assetUrl.bodyLocalized, tag.tag(8, MarketingPageBanner$Type(closure_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (0 !== assetUrl.buttonVariant) {
        tag.tag(9, MarketingPageBanner$Type(closure_1[8]).WireType.Varint).int32(assetUrl.buttonVariant);
        const tagResult8 = tag.tag(9, MarketingPageBanner$Type(closure_1[8]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = MarketingPageBanner$Type(closure_1[8]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, assetUrl, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(MarketingPageBanner$Type, items);
}(arg1(dependencyMap[8]).MessageType);
tmp2 = new tmp2();
let tmp4 = (MessageType) => {
  class MarketingPageBannerButton$Type {
    constructor() {
      tmp = closure_3(this, MarketingPageBannerButton$Type);
      items = [, , , , ];
      items[0] = { 9223372036854775807: "YELLOW_NEW_72", 0: 1, 9223372036854775807: "light_url", no: "scalar" };
      items[1] = {
        T() {
              const items = [false, callback(closure_1[9]).ButtonAction, "BUTTON_ACTION_"];
              return items;
            }
      };
      items[2] = {};
      obj = { "Null": 0.975, "Null": "PRIMARY_230", "Null": 0.975 };
      obj.T = function T() {
        return callback(closure_1[7]).LocalizedString;
      };
      items[3] = obj;
      obj = { "Null": 2417, "Null": -1854455552, "Null": 24182788 };
      obj.T = function T() {
        return callback(closure_1[10]).UInt64Value;
      };
      items[4] = obj;
      items1 = ["nativeConfig"];
      items1[1] = items;
      return closure_10(this, MarketingPageBannerButton$Type, items1);
    }
  }
  const arg1 = MarketingPageBannerButton$Type;
  callback3(MarketingPageBannerButton$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { "Null": 24, "Null": 8, "Null": 3 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, MarketingPageBannerButton$Type(closure_1[8]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = MarketingPageBannerButton$Type(closure_1[8]).reflectionMergePartial(this, obj, arr);
        const obj3 = MarketingPageBannerButton$Type(closure_1[8]);
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
          obj.copy = pos.string();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          obj.buttonAction = pos.int32();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          obj.deeplinkSection = pos.string();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (4 === tmp7) {
          let tmp31 = MarketingPageBannerButton$Type;
          let tmp32 = closure_1;
          let LocalizedString = MarketingPageBannerButton$Type(closure_1[7]).LocalizedString;
          let tmp33 = LocalizedString;
          let tmp34 = pos;
          let tmp35 = readUnknownField;
          obj.copyLocalized = LocalizedString.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.copyLocalized);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (5 === tmp7) {
          let tmp26 = MarketingPageBannerButton$Type;
          let tmp27 = closure_1;
          let UInt64Value = MarketingPageBannerButton$Type(closure_1[10]).UInt64Value;
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
                let tmp12 = MarketingPageBannerButton$Type;
                let tmp13 = closure_1;
                onRead = MarketingPageBannerButton$Type(closure_1[8]).UnknownFieldHandler.onRead;
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
    value(copy, tag, writeUnknownFields) {
      if ("" !== copy.copy) {
        tag.tag(1, MarketingPageBannerButton$Type(closure_1[8]).WireType.LengthDelimited).string(copy.copy);
        const tagResult = tag.tag(1, MarketingPageBannerButton$Type(closure_1[8]).WireType.LengthDelimited);
      }
      if (0 !== copy.buttonAction) {
        tag.tag(2, MarketingPageBannerButton$Type(closure_1[8]).WireType.Varint).int32(copy.buttonAction);
        const tagResult1 = tag.tag(2, MarketingPageBannerButton$Type(closure_1[8]).WireType.Varint);
      }
      if ("" !== copy.deeplinkSection) {
        tag.tag(3, MarketingPageBannerButton$Type(closure_1[8]).WireType.LengthDelimited).string(copy.deeplinkSection);
        const tagResult2 = tag.tag(3, MarketingPageBannerButton$Type(closure_1[8]).WireType.LengthDelimited);
      }
      if (copy.copyLocalized) {
        const LocalizedString = MarketingPageBannerButton$Type(closure_1[7]).LocalizedString;
        const tagResult3 = tag.tag(4, MarketingPageBannerButton$Type(closure_1[8]).WireType.LengthDelimited);
        const joined = LocalizedString.internalBinaryWrite(copy.copyLocalized, tag.tag(4, MarketingPageBannerButton$Type(closure_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = LocalizedString.internalBinaryWrite(copy.copyLocalized, tag.tag(4, MarketingPageBannerButton$Type(closure_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (copy.navigableStorefrontApplicationId) {
        const UInt64Value = MarketingPageBannerButton$Type(closure_1[10]).UInt64Value;
        const tagResult4 = tag.tag(5, MarketingPageBannerButton$Type(closure_1[8]).WireType.LengthDelimited);
        const joined1 = UInt64Value.internalBinaryWrite(copy.navigableStorefrontApplicationId, tag.tag(5, MarketingPageBannerButton$Type(closure_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = UInt64Value.internalBinaryWrite(copy.navigableStorefrontApplicationId, tag.tag(5, MarketingPageBannerButton$Type(closure_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = MarketingPageBannerButton$Type(closure_1[8]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, copy, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(MarketingPageBannerButton$Type, items);
}(arg1(dependencyMap[8]).MessageType);
tmp4 = new tmp4();
const result = arg1(dependencyMap[11]).fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/marketing_page_banner.tsx");

export const MarketingPageBannerButtonVariant = obj;
export const MarketingPageBanner = tmp2;
export const MarketingPageBannerButton = tmp4;
