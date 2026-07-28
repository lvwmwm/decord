// Module ID: 6254
// Function ID: 56033
// Name: _isNativeReflectConstruct
// Dependencies: [57, 6, 7, 15, 17, 18, 6250, 1334, 6249, 6248, 1284, 2]

// Module 6254 (_isNativeReflectConstruct)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import DismissibleContent from "DismissibleContent";
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
  class MobileBottomSheet$Type {
    constructor() {
      self = this;
      tmp = outer1_3(this, MobileBottomSheet$Type);
      items = [, , , , , , , , ];
      items[0] = { no: 1, name: "asset_url", kind: "scalar", T: 9 };
      items[1] = { no: 2, name: "header", kind: "scalar", T: 9 };
      items[2] = { no: 3, name: "body", kind: "scalar", T: 9 };
      items[3] = { no: 4, name: "help_article_id", kind: "scalar", T: 9 };
      obj = { no: 5, name: "button", kind: "message" };
      obj.T = function T() {
        return MobileBottomSheet$Type(outer2_1[6]).CTAButton;
      };
      items[4] = obj;
      obj = { no: 6, name: "dismissible_content", kind: "enum" };
      obj.T = function T() {
        const items = ["discord_protos.discord_users.v1.DismissibleContent", MobileBottomSheet$Type(outer2_1[7]).DismissibleContent];
        return items;
      };
      items[5] = obj;
      obj1 = { no: 7, name: "help_article", kind: "message" };
      obj1.T = function T() {
        return MobileBottomSheet$Type(outer2_1[8]).HelpArticle;
      };
      items[6] = obj1;
      obj2 = { no: 8, name: "header_localized", kind: "message" };
      obj2.T = function T() {
        return MobileBottomSheet$Type(outer2_1[9]).LocalizedString;
      };
      items[7] = obj2;
      obj3 = { no: 9, name: "body_localized", kind: "message" };
      obj3.T = function T() {
        return MobileBottomSheet$Type(outer2_1[9]).LocalizedString;
      };
      items[8] = obj3;
      items1 = ["discord_protos.premium_marketing.v1.MobileBottomSheet"];
      items1[1] = items;
      obj6 = outer1_6(MobileBottomSheet$Type);
      tmp2 = outer1_5;
      if (outer1_8()) {
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
  callback2(MobileBottomSheet$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { assetUrl: "", header: "", body: "", helpArticleId: "", dismissibleContent: 0 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, MobileBottomSheet$Type(outer1_1[10]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = MobileBottomSheet$Type(outer1_1[10]).reflectionMergePartial(this, obj, arr);
        const obj3 = MobileBottomSheet$Type(outer1_1[10]);
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
          let tmp41 = MobileBottomSheet$Type;
          let tmp42 = outer1_1;
          let CTAButton = MobileBottomSheet$Type(outer1_1[6]).CTAButton;
          let tmp43 = CTAButton;
          let tmp44 = pos;
          let tmp45 = readUnknownField;
          obj.button = CTAButton.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.button);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (6 === tmp7) {
          obj.dismissibleContent = pos.int32();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (7 === tmp7) {
          let tmp36 = MobileBottomSheet$Type;
          let tmp37 = outer1_1;
          let HelpArticle = MobileBottomSheet$Type(outer1_1[8]).HelpArticle;
          let tmp38 = HelpArticle;
          let tmp39 = pos;
          let tmp40 = readUnknownField;
          obj.helpArticle = HelpArticle.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.helpArticle);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (8 === tmp7) {
          let tmp31 = MobileBottomSheet$Type;
          let tmp32 = outer1_1;
          let LocalizedString2 = MobileBottomSheet$Type(outer1_1[9]).LocalizedString;
          let tmp33 = LocalizedString2;
          let tmp34 = pos;
          let tmp35 = readUnknownField;
          obj.headerLocalized = LocalizedString2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.headerLocalized);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (9 === tmp7) {
          let tmp26 = MobileBottomSheet$Type;
          let tmp27 = outer1_1;
          let LocalizedString = MobileBottomSheet$Type(outer1_1[9]).LocalizedString;
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
                let tmp12 = MobileBottomSheet$Type;
                let tmp13 = outer1_1;
                onRead = MobileBottomSheet$Type(outer1_1[10]).UnknownFieldHandler.onRead;
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
        tag.tag(1, MobileBottomSheet$Type(outer1_1[10]).WireType.LengthDelimited).string(assetUrl.assetUrl);
        const tagResult = tag.tag(1, MobileBottomSheet$Type(outer1_1[10]).WireType.LengthDelimited);
      }
      if ("" !== assetUrl.header) {
        tag.tag(2, MobileBottomSheet$Type(outer1_1[10]).WireType.LengthDelimited).string(assetUrl.header);
        const tagResult1 = tag.tag(2, MobileBottomSheet$Type(outer1_1[10]).WireType.LengthDelimited);
      }
      if ("" !== assetUrl.body) {
        tag.tag(3, MobileBottomSheet$Type(outer1_1[10]).WireType.LengthDelimited).string(assetUrl.body);
        const tagResult2 = tag.tag(3, MobileBottomSheet$Type(outer1_1[10]).WireType.LengthDelimited);
      }
      if ("" !== assetUrl.helpArticleId) {
        tag.tag(4, MobileBottomSheet$Type(outer1_1[10]).WireType.LengthDelimited).string(assetUrl.helpArticleId);
        const tagResult3 = tag.tag(4, MobileBottomSheet$Type(outer1_1[10]).WireType.LengthDelimited);
      }
      if (assetUrl.button) {
        const CTAButton = MobileBottomSheet$Type(outer1_1[6]).CTAButton;
        const tagResult4 = tag.tag(5, MobileBottomSheet$Type(outer1_1[10]).WireType.LengthDelimited);
        const joined = CTAButton.internalBinaryWrite(assetUrl.button, tag.tag(5, MobileBottomSheet$Type(outer1_1[10]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = CTAButton.internalBinaryWrite(assetUrl.button, tag.tag(5, MobileBottomSheet$Type(outer1_1[10]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (0 !== assetUrl.dismissibleContent) {
        tag.tag(6, MobileBottomSheet$Type(outer1_1[10]).WireType.Varint).int32(assetUrl.dismissibleContent);
        const tagResult5 = tag.tag(6, MobileBottomSheet$Type(outer1_1[10]).WireType.Varint);
      }
      if (assetUrl.helpArticle) {
        const HelpArticle = MobileBottomSheet$Type(outer1_1[8]).HelpArticle;
        const tagResult6 = tag.tag(7, MobileBottomSheet$Type(outer1_1[10]).WireType.LengthDelimited);
        const joined1 = HelpArticle.internalBinaryWrite(assetUrl.helpArticle, tag.tag(7, MobileBottomSheet$Type(outer1_1[10]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = HelpArticle.internalBinaryWrite(assetUrl.helpArticle, tag.tag(7, MobileBottomSheet$Type(outer1_1[10]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (assetUrl.headerLocalized) {
        const LocalizedString = MobileBottomSheet$Type(outer1_1[9]).LocalizedString;
        const tagResult7 = tag.tag(8, MobileBottomSheet$Type(outer1_1[10]).WireType.LengthDelimited);
        const joined2 = LocalizedString.internalBinaryWrite(assetUrl.headerLocalized, tag.tag(8, MobileBottomSheet$Type(outer1_1[10]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = LocalizedString.internalBinaryWrite(assetUrl.headerLocalized, tag.tag(8, MobileBottomSheet$Type(outer1_1[10]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (assetUrl.bodyLocalized) {
        const LocalizedString2 = MobileBottomSheet$Type(outer1_1[9]).LocalizedString;
        const tagResult8 = tag.tag(9, MobileBottomSheet$Type(outer1_1[10]).WireType.LengthDelimited);
        const joined3 = LocalizedString2.internalBinaryWrite(assetUrl.bodyLocalized, tag.tag(9, MobileBottomSheet$Type(outer1_1[10]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult3 = LocalizedString2.internalBinaryWrite(assetUrl.bodyLocalized, tag.tag(9, MobileBottomSheet$Type(outer1_1[10]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = MobileBottomSheet$Type(outer1_1[10]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, assetUrl, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(MobileBottomSheet$Type, items);
})(require("module_1284").MessageType);
tmp2 = new tmp2();
let result = require("_defineProperties").fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/mobile_bottom_sheet.tsx");

export const MobileBottomSheet = tmp2;
