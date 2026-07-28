// Module ID: 6252
// Function ID: 56008
// Name: _isNativeReflectConstruct
// Dependencies: [57, 6, 7, 15, 17, 18, 6250, 6249, 6248, 1284, 2]

// Module 6252 (_isNativeReflectConstruct)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
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
let obj = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", EXPRESSIVE: 1, [1]: "EXPRESSIVE", PRIMARY: 2, [2]: "PRIMARY" };
let tmp2 = ((MessageType) => {
  class MarketingPageBanner$Type {
    constructor() {
      self = this;
      tmp = outer1_3(this, MarketingPageBanner$Type);
      items = [, , , , , , , , ];
      items[0] = { no: 1, name: "asset_url", kind: "scalar", T: 9 };
      items[1] = { no: 2, name: "header", kind: "scalar", T: 9 };
      items[2] = { no: 3, name: "body", kind: "scalar", T: 9 };
      items[3] = { no: 4, name: "help_article_id", kind: "scalar", T: 9 };
      obj = { no: 5, name: "button", kind: "message" };
      obj.T = function T() {
        return MarketingPageBanner$Type(outer2_1[6]).CTAButton;
      };
      items[4] = obj;
      obj = { no: 6, name: "help_article", kind: "message" };
      obj.T = function T() {
        return MarketingPageBanner$Type(outer2_1[7]).HelpArticle;
      };
      items[5] = obj;
      obj1 = { no: 7, name: "header_localized", kind: "message" };
      obj1.T = function T() {
        return MarketingPageBanner$Type(outer2_1[8]).LocalizedString;
      };
      items[6] = obj1;
      obj2 = { no: 8, name: "body_localized", kind: "message" };
      obj2.T = function T() {
        return MarketingPageBanner$Type(outer2_1[8]).LocalizedString;
      };
      items[7] = obj2;
      obj3 = { no: 9, name: "button_variant", kind: "enum" };
      obj3.T = function T() {
        const items = ["discord_protos.premium_marketing.v1.MarketingPageBannerButtonVariant", outer2_8, "MARKETING_PAGE_BANNER_BUTTON_VARIANT_"];
        return items;
      };
      items[8] = obj3;
      items1 = ["discord_protos.premium_marketing.v1.MarketingPageBanner"];
      items1[1] = items;
      obj6 = outer1_6(MarketingPageBanner$Type);
      tmp2 = outer1_5;
      if (outer1_9()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_6;
        constructResult = Reflect.construct(obj6, items1, outer1_6(self).constructor);
      } else {
        constructResult = obj6.apply(self, items1);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(MarketingPageBanner$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { assetUrl: "", header: "", body: "", helpArticleId: "", buttonVariant: 0 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, MarketingPageBanner$Type(outer1_1[9]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = MarketingPageBanner$Type(outer1_1[9]).reflectionMergePartial(this, obj, arr);
        const obj3 = MarketingPageBanner$Type(outer1_1[9]);
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
          let tmp41 = MarketingPageBanner$Type;
          let tmp42 = outer1_1;
          let CTAButton = MarketingPageBanner$Type(outer1_1[6]).CTAButton;
          let tmp43 = CTAButton;
          let tmp44 = pos;
          let tmp45 = readUnknownField;
          obj.button = CTAButton.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.button);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (6 === tmp7) {
          let tmp36 = MarketingPageBanner$Type;
          let tmp37 = outer1_1;
          let HelpArticle = MarketingPageBanner$Type(outer1_1[7]).HelpArticle;
          let tmp38 = HelpArticle;
          let tmp39 = pos;
          let tmp40 = readUnknownField;
          obj.helpArticle = HelpArticle.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.helpArticle);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (7 === tmp7) {
          let tmp31 = MarketingPageBanner$Type;
          let tmp32 = outer1_1;
          let LocalizedString2 = MarketingPageBanner$Type(outer1_1[8]).LocalizedString;
          let tmp33 = LocalizedString2;
          let tmp34 = pos;
          let tmp35 = readUnknownField;
          obj.headerLocalized = LocalizedString2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.headerLocalized);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (8 === tmp7) {
          let tmp26 = MarketingPageBanner$Type;
          let tmp27 = outer1_1;
          let LocalizedString = MarketingPageBanner$Type(outer1_1[8]).LocalizedString;
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
                let tmp13 = outer1_1;
                onRead = MarketingPageBanner$Type(outer1_1[9]).UnknownFieldHandler.onRead;
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
    value(assetUrl, tag, writeUnknownFields) {
      if ("" !== assetUrl.assetUrl) {
        tag.tag(1, MarketingPageBanner$Type(outer1_1[9]).WireType.LengthDelimited).string(assetUrl.assetUrl);
        const tagResult = tag.tag(1, MarketingPageBanner$Type(outer1_1[9]).WireType.LengthDelimited);
      }
      if ("" !== assetUrl.header) {
        tag.tag(2, MarketingPageBanner$Type(outer1_1[9]).WireType.LengthDelimited).string(assetUrl.header);
        const tagResult1 = tag.tag(2, MarketingPageBanner$Type(outer1_1[9]).WireType.LengthDelimited);
      }
      if ("" !== assetUrl.body) {
        tag.tag(3, MarketingPageBanner$Type(outer1_1[9]).WireType.LengthDelimited).string(assetUrl.body);
        const tagResult2 = tag.tag(3, MarketingPageBanner$Type(outer1_1[9]).WireType.LengthDelimited);
      }
      if ("" !== assetUrl.helpArticleId) {
        tag.tag(4, MarketingPageBanner$Type(outer1_1[9]).WireType.LengthDelimited).string(assetUrl.helpArticleId);
        const tagResult3 = tag.tag(4, MarketingPageBanner$Type(outer1_1[9]).WireType.LengthDelimited);
      }
      if (assetUrl.button) {
        const CTAButton = MarketingPageBanner$Type(outer1_1[6]).CTAButton;
        const tagResult4 = tag.tag(5, MarketingPageBanner$Type(outer1_1[9]).WireType.LengthDelimited);
        const joined = CTAButton.internalBinaryWrite(assetUrl.button, tag.tag(5, MarketingPageBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = CTAButton.internalBinaryWrite(assetUrl.button, tag.tag(5, MarketingPageBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (assetUrl.helpArticle) {
        const HelpArticle = MarketingPageBanner$Type(outer1_1[7]).HelpArticle;
        const tagResult5 = tag.tag(6, MarketingPageBanner$Type(outer1_1[9]).WireType.LengthDelimited);
        const joined1 = HelpArticle.internalBinaryWrite(assetUrl.helpArticle, tag.tag(6, MarketingPageBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = HelpArticle.internalBinaryWrite(assetUrl.helpArticle, tag.tag(6, MarketingPageBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (assetUrl.headerLocalized) {
        const LocalizedString = MarketingPageBanner$Type(outer1_1[8]).LocalizedString;
        const tagResult6 = tag.tag(7, MarketingPageBanner$Type(outer1_1[9]).WireType.LengthDelimited);
        const joined2 = LocalizedString.internalBinaryWrite(assetUrl.headerLocalized, tag.tag(7, MarketingPageBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = LocalizedString.internalBinaryWrite(assetUrl.headerLocalized, tag.tag(7, MarketingPageBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (assetUrl.bodyLocalized) {
        const LocalizedString2 = MarketingPageBanner$Type(outer1_1[8]).LocalizedString;
        const tagResult7 = tag.tag(8, MarketingPageBanner$Type(outer1_1[9]).WireType.LengthDelimited);
        const joined3 = LocalizedString2.internalBinaryWrite(assetUrl.bodyLocalized, tag.tag(8, MarketingPageBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult3 = LocalizedString2.internalBinaryWrite(assetUrl.bodyLocalized, tag.tag(8, MarketingPageBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (0 !== assetUrl.buttonVariant) {
        tag.tag(9, MarketingPageBanner$Type(outer1_1[9]).WireType.Varint).int32(assetUrl.buttonVariant);
        const tagResult8 = tag.tag(9, MarketingPageBanner$Type(outer1_1[9]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = MarketingPageBanner$Type(outer1_1[9]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, assetUrl, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(MarketingPageBanner$Type, items);
})(require("module_1284").MessageType);
tmp2 = new tmp2();
let result = require("_defineProperties").fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/marketing_page_banner.tsx");

export const MarketingPageBannerButtonVariant = obj;
export const MarketingPageBanner = tmp2;
