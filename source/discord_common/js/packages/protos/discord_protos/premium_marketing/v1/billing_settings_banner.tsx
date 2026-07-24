// Module ID: 7154
// Function ID: 57739
// Name: _callSuper
// Dependencies: [57, 6, 7, 15, 17, 18, 7134, 7135, 1313, 1284, 7144, 7136, 2]

// Module 7154 (_callSuper)
import _slicedToArray from "_slicedToArray";
import _callSuper from "_callSuper";
import closure_4 from "_callSuper";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

const require = arg1;
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
  return _possibleConstructorReturn(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let tmp2 = ((MessageType) => {
  class BillingSettingsBannerCTAButton$Type {
    constructor() {
      tmp = outer1_3(this, BillingSettingsBannerCTAButton$Type);
      items = [, , , , ];
      items[0] = { no: 1, name: "copy", kind: "scalar", T: 9 };
      obj = { no: 2, name: "button_action", kind: "enum" };
      obj.T = function T() {
        const items = ["discord_protos.premium_marketing.v1.ButtonAction", BillingSettingsBannerCTAButton$Type(outer2_1[6]).ButtonAction, "BUTTON_ACTION_"];
        return items;
      };
      items[1] = obj;
      items[2] = { no: 3, name: "deeplink_section", kind: "scalar", T: 9 };
      obj = { no: 4, name: "copy_localized", kind: "message" };
      obj.T = function T() {
        return BillingSettingsBannerCTAButton$Type(outer2_1[7]).LocalizedString;
      };
      items[3] = obj;
      obj1 = { no: 5, name: "navigable_storefront_application_id", kind: "message" };
      obj1.T = function T() {
        return BillingSettingsBannerCTAButton$Type(outer2_1[8]).UInt64Value;
      };
      items[4] = obj1;
      items1 = ["discord_protos.premium_marketing.v1.BillingSettingsBannerCTAButton"];
      items1[1] = items;
      return outer1_9(this, BillingSettingsBannerCTAButton$Type, items1);
    }
  }
  callback3(BillingSettingsBannerCTAButton$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { copy: "", buttonAction: 0, deeplinkSection: "" };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, BillingSettingsBannerCTAButton$Type(outer1_1[9]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = BillingSettingsBannerCTAButton$Type(outer1_1[9]).reflectionMergePartial(this, obj, arr);
        const obj3 = BillingSettingsBannerCTAButton$Type(outer1_1[9]);
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
          let tmp31 = BillingSettingsBannerCTAButton$Type;
          let tmp32 = outer1_1;
          let LocalizedString = BillingSettingsBannerCTAButton$Type(outer1_1[7]).LocalizedString;
          let tmp33 = LocalizedString;
          let tmp34 = pos;
          let tmp35 = readUnknownField;
          obj.copyLocalized = LocalizedString.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.copyLocalized);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (5 === tmp7) {
          let tmp26 = BillingSettingsBannerCTAButton$Type;
          let tmp27 = outer1_1;
          let UInt64Value = BillingSettingsBannerCTAButton$Type(outer1_1[8]).UInt64Value;
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
                let tmp12 = BillingSettingsBannerCTAButton$Type;
                let tmp13 = outer1_1;
                onRead = BillingSettingsBannerCTAButton$Type(outer1_1[9]).UnknownFieldHandler.onRead;
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
    value(copy, tag, writeUnknownFields) {
      if ("" !== copy.copy) {
        tag.tag(1, BillingSettingsBannerCTAButton$Type(outer1_1[9]).WireType.LengthDelimited).string(copy.copy);
        const tagResult = tag.tag(1, BillingSettingsBannerCTAButton$Type(outer1_1[9]).WireType.LengthDelimited);
      }
      if (0 !== copy.buttonAction) {
        tag.tag(2, BillingSettingsBannerCTAButton$Type(outer1_1[9]).WireType.Varint).int32(copy.buttonAction);
        const tagResult1 = tag.tag(2, BillingSettingsBannerCTAButton$Type(outer1_1[9]).WireType.Varint);
      }
      if ("" !== copy.deeplinkSection) {
        tag.tag(3, BillingSettingsBannerCTAButton$Type(outer1_1[9]).WireType.LengthDelimited).string(copy.deeplinkSection);
        const tagResult2 = tag.tag(3, BillingSettingsBannerCTAButton$Type(outer1_1[9]).WireType.LengthDelimited);
      }
      if (copy.copyLocalized) {
        const LocalizedString = BillingSettingsBannerCTAButton$Type(outer1_1[7]).LocalizedString;
        const tagResult3 = tag.tag(4, BillingSettingsBannerCTAButton$Type(outer1_1[9]).WireType.LengthDelimited);
        const joined = LocalizedString.internalBinaryWrite(copy.copyLocalized, tag.tag(4, BillingSettingsBannerCTAButton$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = LocalizedString.internalBinaryWrite(copy.copyLocalized, tag.tag(4, BillingSettingsBannerCTAButton$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (copy.navigableStorefrontApplicationId) {
        const UInt64Value = BillingSettingsBannerCTAButton$Type(outer1_1[8]).UInt64Value;
        const tagResult4 = tag.tag(5, BillingSettingsBannerCTAButton$Type(outer1_1[9]).WireType.LengthDelimited);
        const joined1 = UInt64Value.internalBinaryWrite(copy.navigableStorefrontApplicationId, tag.tag(5, BillingSettingsBannerCTAButton$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = UInt64Value.internalBinaryWrite(copy.navigableStorefrontApplicationId, tag.tag(5, BillingSettingsBannerCTAButton$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = BillingSettingsBannerCTAButton$Type(outer1_1[9]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, copy, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(BillingSettingsBannerCTAButton$Type, items);
})(require("module_1284").MessageType);
tmp2 = new tmp2();
let closure_8 = tmp2;
let tmp4 = ((MessageType) => {
  class BillingSettingsBanner$Type {
    constructor() {
      tmp = outer1_3(this, BillingSettingsBanner$Type);
      items = [, , , , , , ];
      items[0] = { no: 1, name: "header", kind: "scalar", T: 9 };
      items[1] = { no: 2, name: "body", kind: "scalar", T: 9 };
      obj = { no: 3, name: "asset", kind: "message" };
      obj.T = function T() {
        return BillingSettingsBanner$Type(outer2_1[10]).ThemeAwareAsset;
      };
      items[2] = obj;
      obj = { no: 4, name: "button", kind: "message" };
      obj.T = function T() {
        return outer2_8;
      };
      items[3] = obj;
      obj1 = { no: 5, name: "header_localized", kind: "message" };
      obj1.T = function T() {
        return BillingSettingsBanner$Type(outer2_1[7]).LocalizedString;
      };
      items[4] = obj1;
      obj2 = { no: 6, name: "body_localized", kind: "message" };
      obj2.T = function T() {
        return BillingSettingsBanner$Type(outer2_1[7]).LocalizedString;
      };
      items[5] = obj2;
      obj3 = { no: 7, name: "help_article", kind: "message" };
      obj3.T = function T() {
        return BillingSettingsBanner$Type(outer2_1[11]).HelpArticle;
      };
      items[6] = obj3;
      items1 = ["discord_protos.premium_marketing.v1.BillingSettingsBanner"];
      items1[1] = items;
      return outer1_9(this, BillingSettingsBanner$Type, items1);
    }
  }
  callback3(BillingSettingsBanner$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { header: "", body: "" };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, BillingSettingsBanner$Type(outer1_1[9]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = BillingSettingsBanner$Type(outer1_1[9]).reflectionMergePartial(this, obj, arr);
        const obj3 = BillingSettingsBanner$Type(outer1_1[9]);
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
          obj.header = pos.string();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          obj.body = pos.string();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          let tmp45 = BillingSettingsBanner$Type;
          let tmp46 = outer1_1;
          let ThemeAwareAsset = BillingSettingsBanner$Type(outer1_1[10]).ThemeAwareAsset;
          let tmp47 = ThemeAwareAsset;
          let tmp48 = pos;
          let tmp49 = readUnknownField;
          obj.asset = ThemeAwareAsset.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.asset);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (4 === tmp7) {
          let tmp41 = outer1_8;
          let tmp42 = outer1_8;
          let tmp43 = pos;
          let tmp44 = readUnknownField;
          obj.button = outer1_8.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.button);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (5 === tmp7) {
          let tmp36 = BillingSettingsBanner$Type;
          let tmp37 = outer1_1;
          let LocalizedString2 = BillingSettingsBanner$Type(outer1_1[7]).LocalizedString;
          let tmp38 = LocalizedString2;
          let tmp39 = pos;
          let tmp40 = readUnknownField;
          obj.headerLocalized = LocalizedString2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.headerLocalized);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (6 === tmp7) {
          let tmp31 = BillingSettingsBanner$Type;
          let tmp32 = outer1_1;
          let LocalizedString = BillingSettingsBanner$Type(outer1_1[7]).LocalizedString;
          let tmp33 = LocalizedString;
          let tmp34 = pos;
          let tmp35 = readUnknownField;
          obj.bodyLocalized = LocalizedString.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.bodyLocalized);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (7 === tmp7) {
          let tmp26 = BillingSettingsBanner$Type;
          let tmp27 = outer1_1;
          let HelpArticle = BillingSettingsBanner$Type(outer1_1[11]).HelpArticle;
          let tmp28 = HelpArticle;
          let tmp29 = pos;
          let tmp30 = readUnknownField;
          obj.helpArticle = HelpArticle.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.helpArticle);
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
                let tmp12 = BillingSettingsBanner$Type;
                let tmp13 = outer1_1;
                onRead = BillingSettingsBanner$Type(outer1_1[9]).UnknownFieldHandler.onRead;
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
    value(header, tag, writeUnknownFields) {
      if ("" !== header.header) {
        tag.tag(1, BillingSettingsBanner$Type(outer1_1[9]).WireType.LengthDelimited).string(header.header);
        const tagResult = tag.tag(1, BillingSettingsBanner$Type(outer1_1[9]).WireType.LengthDelimited);
      }
      if ("" !== header.body) {
        tag.tag(2, BillingSettingsBanner$Type(outer1_1[9]).WireType.LengthDelimited).string(header.body);
        const tagResult1 = tag.tag(2, BillingSettingsBanner$Type(outer1_1[9]).WireType.LengthDelimited);
      }
      if (header.asset) {
        const ThemeAwareAsset = BillingSettingsBanner$Type(outer1_1[10]).ThemeAwareAsset;
        const tagResult2 = tag.tag(3, BillingSettingsBanner$Type(outer1_1[9]).WireType.LengthDelimited);
        const joined = ThemeAwareAsset.internalBinaryWrite(header.asset, tag.tag(3, BillingSettingsBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = ThemeAwareAsset.internalBinaryWrite(header.asset, tag.tag(3, BillingSettingsBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (header.button) {
        const tagResult3 = tag.tag(4, BillingSettingsBanner$Type(outer1_1[9]).WireType.LengthDelimited);
        const joined1 = outer1_8.internalBinaryWrite(header.button, tag.tag(4, BillingSettingsBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = outer1_8.internalBinaryWrite(header.button, tag.tag(4, BillingSettingsBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (header.headerLocalized) {
        const LocalizedString = BillingSettingsBanner$Type(outer1_1[7]).LocalizedString;
        const tagResult4 = tag.tag(5, BillingSettingsBanner$Type(outer1_1[9]).WireType.LengthDelimited);
        const joined2 = LocalizedString.internalBinaryWrite(header.headerLocalized, tag.tag(5, BillingSettingsBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = LocalizedString.internalBinaryWrite(header.headerLocalized, tag.tag(5, BillingSettingsBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (header.bodyLocalized) {
        const LocalizedString2 = BillingSettingsBanner$Type(outer1_1[7]).LocalizedString;
        const tagResult5 = tag.tag(6, BillingSettingsBanner$Type(outer1_1[9]).WireType.LengthDelimited);
        const joined3 = LocalizedString2.internalBinaryWrite(header.bodyLocalized, tag.tag(6, BillingSettingsBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult3 = LocalizedString2.internalBinaryWrite(header.bodyLocalized, tag.tag(6, BillingSettingsBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (header.helpArticle) {
        const HelpArticle = BillingSettingsBanner$Type(outer1_1[11]).HelpArticle;
        const tagResult6 = tag.tag(7, BillingSettingsBanner$Type(outer1_1[9]).WireType.LengthDelimited);
        const joined4 = HelpArticle.internalBinaryWrite(header.helpArticle, tag.tag(7, BillingSettingsBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult4 = HelpArticle.internalBinaryWrite(header.helpArticle, tag.tag(7, BillingSettingsBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = BillingSettingsBanner$Type(outer1_1[9]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, header, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(BillingSettingsBanner$Type, items);
})(require("module_1284").MessageType);
tmp4 = new tmp4();
let result = require("_defineProperties").fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/billing_settings_banner.tsx");

export const BillingSettingsBannerCTAButton = tmp2;
export const BillingSettingsBanner = tmp4;
