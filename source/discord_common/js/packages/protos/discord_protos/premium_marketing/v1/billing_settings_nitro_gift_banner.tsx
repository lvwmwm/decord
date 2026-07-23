// Module ID: 7148
// Function ID: 57627
// Name: _isNativeReflectConstruct
// Dependencies: [57, 6, 7, 15, 17, 18, 7143, 7145, 7136, 1284, 2]

// Module 7148 (_isNativeReflectConstruct)
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
let tmp2 = ((MessageType) => {
  class BillingSettingsNitroGiftBanner$Type {
    constructor() {
      self = this;
      tmp = outer1_3(this, BillingSettingsNitroGiftBanner$Type);
      items = [, , , , , , , , , , , ];
      items[0] = { no: 1, name: "asset_url", kind: "scalar", T: 9 };
      items[1] = { no: 2, name: "header", kind: "scalar", T: 9 };
      items[2] = { no: 3, name: "body", kind: "scalar", T: 9 };
      items[3] = { no: 4, name: "background_asset_url", kind: "scalar", T: 9 };
      obj = { no: 5, name: "gradient", kind: "message" };
      obj.T = function T() {
        return BillingSettingsNitroGiftBanner$Type(outer2_1[6]).Gradient;
      };
      items[4] = obj;
      items[5] = { no: 6, name: "text_color", kind: "scalar", T: 9 };
      items[6] = { no: 7, name: "additional_terms", kind: "scalar", T: 9 };
      obj = { no: 8, name: "asset", kind: "message" };
      obj.T = function T() {
        return BillingSettingsNitroGiftBanner$Type(outer2_1[7]).ThemeAwareAsset;
      };
      items[7] = obj;
      obj1 = { no: 9, name: "background_asset", kind: "message" };
      obj1.T = function T() {
        return BillingSettingsNitroGiftBanner$Type(outer2_1[7]).ThemeAwareAsset;
      };
      items[8] = obj1;
      obj2 = { no: 10, name: "header_localized", kind: "message" };
      obj2.T = function T() {
        return BillingSettingsNitroGiftBanner$Type(outer2_1[8]).LocalizedString;
      };
      items[9] = obj2;
      obj3 = { no: 11, name: "body_localized", kind: "message" };
      obj3.T = function T() {
        return BillingSettingsNitroGiftBanner$Type(outer2_1[8]).LocalizedString;
      };
      items[10] = obj3;
      obj4 = { no: 12, name: "additional_terms_localized", kind: "message" };
      obj4.T = function T() {
        return BillingSettingsNitroGiftBanner$Type(outer2_1[8]).LocalizedString;
      };
      items[11] = obj4;
      items1 = ["discord_protos.premium_marketing.v1.BillingSettingsNitroGiftBanner"];
      items1[1] = items;
      obj7 = outer1_6(BillingSettingsNitroGiftBanner$Type);
      tmp2 = outer1_5;
      if (outer1_8()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_6;
        constructResult = Reflect.construct(obj7, items1, outer1_6(self).constructor);
      } else {
        constructResult = obj7.apply(self, items1);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(BillingSettingsNitroGiftBanner$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { assetUrl: "", header: "", body: "", backgroundAssetUrl: "", textColor: "", additionalTerms: "" };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, BillingSettingsNitroGiftBanner$Type(outer1_1[9]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = BillingSettingsNitroGiftBanner$Type(outer1_1[9]).reflectionMergePartial(this, obj, arr);
        const obj3 = BillingSettingsNitroGiftBanner$Type(outer1_1[9]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, binaryReadOptionsResult2) {
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      if (pos.pos < sum) {
        const LocalizedString = BillingSettingsNitroGiftBanner$Type(outer1_1[8]).LocalizedString;
        obj.additionalTermsLocalized = LocalizedString.internalBinaryRead(pos, pos.uint32(), binaryReadOptionsResult2, obj.additionalTermsLocalized);
        while (true) {
          do {
            let tmp3 = tmp10;
            let tmp4 = tmp11;
          } while (pos.pos >= sum);
        }
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(assetUrl, tag, writeUnknownFields) {
      if ("" !== assetUrl.assetUrl) {
        tag.tag(1, BillingSettingsNitroGiftBanner$Type(outer1_1[9]).WireType.LengthDelimited).string(assetUrl.assetUrl);
        const tagResult = tag.tag(1, BillingSettingsNitroGiftBanner$Type(outer1_1[9]).WireType.LengthDelimited);
      }
      if ("" !== assetUrl.header) {
        tag.tag(2, BillingSettingsNitroGiftBanner$Type(outer1_1[9]).WireType.LengthDelimited).string(assetUrl.header);
        const tagResult1 = tag.tag(2, BillingSettingsNitroGiftBanner$Type(outer1_1[9]).WireType.LengthDelimited);
      }
      if ("" !== assetUrl.body) {
        tag.tag(3, BillingSettingsNitroGiftBanner$Type(outer1_1[9]).WireType.LengthDelimited).string(assetUrl.body);
        const tagResult2 = tag.tag(3, BillingSettingsNitroGiftBanner$Type(outer1_1[9]).WireType.LengthDelimited);
      }
      if ("" !== assetUrl.backgroundAssetUrl) {
        tag.tag(4, BillingSettingsNitroGiftBanner$Type(outer1_1[9]).WireType.LengthDelimited).string(assetUrl.backgroundAssetUrl);
        const tagResult3 = tag.tag(4, BillingSettingsNitroGiftBanner$Type(outer1_1[9]).WireType.LengthDelimited);
      }
      if (assetUrl.gradient) {
        const Gradient = BillingSettingsNitroGiftBanner$Type(outer1_1[6]).Gradient;
        const tagResult4 = tag.tag(5, BillingSettingsNitroGiftBanner$Type(outer1_1[9]).WireType.LengthDelimited);
        const joined = Gradient.internalBinaryWrite(assetUrl.gradient, tag.tag(5, BillingSettingsNitroGiftBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = Gradient.internalBinaryWrite(assetUrl.gradient, tag.tag(5, BillingSettingsNitroGiftBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("" !== assetUrl.textColor) {
        tag.tag(6, BillingSettingsNitroGiftBanner$Type(outer1_1[9]).WireType.LengthDelimited).string(assetUrl.textColor);
        const tagResult5 = tag.tag(6, BillingSettingsNitroGiftBanner$Type(outer1_1[9]).WireType.LengthDelimited);
      }
      if ("" !== assetUrl.additionalTerms) {
        tag.tag(7, BillingSettingsNitroGiftBanner$Type(outer1_1[9]).WireType.LengthDelimited).string(assetUrl.additionalTerms);
        const tagResult6 = tag.tag(7, BillingSettingsNitroGiftBanner$Type(outer1_1[9]).WireType.LengthDelimited);
      }
      if (assetUrl.asset) {
        const ThemeAwareAsset = BillingSettingsNitroGiftBanner$Type(outer1_1[7]).ThemeAwareAsset;
        const tagResult7 = tag.tag(8, BillingSettingsNitroGiftBanner$Type(outer1_1[9]).WireType.LengthDelimited);
        const joined1 = ThemeAwareAsset.internalBinaryWrite(assetUrl.asset, tag.tag(8, BillingSettingsNitroGiftBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = ThemeAwareAsset.internalBinaryWrite(assetUrl.asset, tag.tag(8, BillingSettingsNitroGiftBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (assetUrl.backgroundAsset) {
        const ThemeAwareAsset2 = BillingSettingsNitroGiftBanner$Type(outer1_1[7]).ThemeAwareAsset;
        const tagResult8 = tag.tag(9, BillingSettingsNitroGiftBanner$Type(outer1_1[9]).WireType.LengthDelimited);
        const joined2 = ThemeAwareAsset2.internalBinaryWrite(assetUrl.backgroundAsset, tag.tag(9, BillingSettingsNitroGiftBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = ThemeAwareAsset2.internalBinaryWrite(assetUrl.backgroundAsset, tag.tag(9, BillingSettingsNitroGiftBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (assetUrl.headerLocalized) {
        const LocalizedString = BillingSettingsNitroGiftBanner$Type(outer1_1[8]).LocalizedString;
        const tagResult9 = tag.tag(10, BillingSettingsNitroGiftBanner$Type(outer1_1[9]).WireType.LengthDelimited);
        const joined3 = LocalizedString.internalBinaryWrite(assetUrl.headerLocalized, tag.tag(10, BillingSettingsNitroGiftBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult3 = LocalizedString.internalBinaryWrite(assetUrl.headerLocalized, tag.tag(10, BillingSettingsNitroGiftBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (assetUrl.bodyLocalized) {
        const LocalizedString2 = BillingSettingsNitroGiftBanner$Type(outer1_1[8]).LocalizedString;
        const tagResult10 = tag.tag(11, BillingSettingsNitroGiftBanner$Type(outer1_1[9]).WireType.LengthDelimited);
        const joined4 = LocalizedString2.internalBinaryWrite(assetUrl.bodyLocalized, tag.tag(11, BillingSettingsNitroGiftBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult4 = LocalizedString2.internalBinaryWrite(assetUrl.bodyLocalized, tag.tag(11, BillingSettingsNitroGiftBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (assetUrl.additionalTermsLocalized) {
        const LocalizedString3 = BillingSettingsNitroGiftBanner$Type(outer1_1[8]).LocalizedString;
        const tagResult11 = tag.tag(12, BillingSettingsNitroGiftBanner$Type(outer1_1[9]).WireType.LengthDelimited);
        const joined5 = LocalizedString3.internalBinaryWrite(assetUrl.additionalTermsLocalized, tag.tag(12, BillingSettingsNitroGiftBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult5 = LocalizedString3.internalBinaryWrite(assetUrl.additionalTermsLocalized, tag.tag(12, BillingSettingsNitroGiftBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = BillingSettingsNitroGiftBanner$Type(outer1_1[9]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, assetUrl, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(BillingSettingsNitroGiftBanner$Type, items);
})(require("module_1284").MessageType);
tmp2 = new tmp2();
let result = require("_defineProperties").fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/billing_settings_nitro_gift_banner.tsx");

export const BillingSettingsNitroGiftBanner = tmp2;
