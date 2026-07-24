// Module ID: 7146
// Function ID: 57625
// Name: _isNativeReflectConstruct
// Dependencies: [57, 6, 7, 15, 17, 18, 7142, 7144, 7135, 1284, 2]

// Module 7146 (_isNativeReflectConstruct)
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
let obj = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", NORMAL: 1, [1]: "NORMAL", LARGE_TILTED: 2, [2]: "LARGE_TILTED" };
let tmp2 = ((MessageType) => {
  class GiftCustomizationBanner$Type {
    constructor() {
      self = this;
      tmp = outer1_3(this, GiftCustomizationBanner$Type);
      items = [, , , , , , , , , , ];
      items[0] = { no: 1, name: "asset_url", kind: "scalar", T: 9 };
      items[1] = { no: 2, name: "desktop_body", kind: "scalar", T: 9 };
      items[2] = { no: 3, name: "mobile_body", kind: "scalar", T: 9 };
      obj = { no: 4, name: "gradient", kind: "message" };
      obj.T = function T() {
        return GiftCustomizationBanner$Type(outer2_1[6]).Gradient;
      };
      items[3] = obj;
      items[4] = { no: 5, name: "background_asset_url", kind: "scalar", T: 9 };
      obj = { no: 6, name: "asset", kind: "message" };
      obj.T = function T() {
        return GiftCustomizationBanner$Type(outer2_1[7]).ThemeAwareAsset;
      };
      items[5] = obj;
      obj1 = { no: 7, name: "background_asset", kind: "message" };
      obj1.T = function T() {
        return GiftCustomizationBanner$Type(outer2_1[7]).ThemeAwareAsset;
      };
      items[6] = obj1;
      obj2 = { no: 8, name: "mobile_background_asset", kind: "message" };
      obj2.T = function T() {
        return GiftCustomizationBanner$Type(outer2_1[7]).ThemeAwareAsset;
      };
      items[7] = obj2;
      obj3 = { no: 9, name: "asset_variant", kind: "enum" };
      obj3.T = function T() {
        const items = ["discord_protos.premium_marketing.v1.GiftCustomizationBanner.AssetVariant", outer2_8, "ASSET_VARIANT_"];
        return items;
      };
      items[8] = obj3;
      obj4 = { no: 10, name: "desktop_body_localized", kind: "message" };
      obj4.T = function T() {
        return GiftCustomizationBanner$Type(outer2_1[8]).LocalizedString;
      };
      items[9] = obj4;
      obj5 = { no: 11, name: "mobile_body_localized", kind: "message" };
      obj5.T = function T() {
        return GiftCustomizationBanner$Type(outer2_1[8]).LocalizedString;
      };
      items[10] = obj5;
      items1 = ["discord_protos.premium_marketing.v1.GiftCustomizationBanner"];
      items1[1] = items;
      obj8 = outer1_6(GiftCustomizationBanner$Type);
      tmp2 = outer1_5;
      if (outer1_9()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_6;
        constructResult = Reflect.construct(obj8, items1, outer1_6(self).constructor);
      } else {
        constructResult = obj8.apply(self, items1);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(GiftCustomizationBanner$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { assetUrl: "", desktopBody: "", mobileBody: "", backgroundAssetUrl: "", assetVariant: 0 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, GiftCustomizationBanner$Type(outer1_1[9]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = GiftCustomizationBanner$Type(outer1_1[9]).reflectionMergePartial(this, obj, arr);
        const obj3 = GiftCustomizationBanner$Type(outer1_1[9]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos) {
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      if (pos.pos < pos.pos + arg1) {
        [r10028, r10029] = outer1_2(pos.tag(), 2);
        const tmp3 = outer1_2(pos.tag(), 2);
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(assetUrl, tag, writeUnknownFields) {
      if ("" !== assetUrl.assetUrl) {
        tag.tag(1, GiftCustomizationBanner$Type(outer1_1[9]).WireType.LengthDelimited).string(assetUrl.assetUrl);
        const tagResult = tag.tag(1, GiftCustomizationBanner$Type(outer1_1[9]).WireType.LengthDelimited);
      }
      if ("" !== assetUrl.desktopBody) {
        tag.tag(2, GiftCustomizationBanner$Type(outer1_1[9]).WireType.LengthDelimited).string(assetUrl.desktopBody);
        const tagResult1 = tag.tag(2, GiftCustomizationBanner$Type(outer1_1[9]).WireType.LengthDelimited);
      }
      if ("" !== assetUrl.mobileBody) {
        tag.tag(3, GiftCustomizationBanner$Type(outer1_1[9]).WireType.LengthDelimited).string(assetUrl.mobileBody);
        const tagResult2 = tag.tag(3, GiftCustomizationBanner$Type(outer1_1[9]).WireType.LengthDelimited);
      }
      if (assetUrl.gradient) {
        const Gradient = GiftCustomizationBanner$Type(outer1_1[6]).Gradient;
        const tagResult3 = tag.tag(4, GiftCustomizationBanner$Type(outer1_1[9]).WireType.LengthDelimited);
        const joined = Gradient.internalBinaryWrite(assetUrl.gradient, tag.tag(4, GiftCustomizationBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = Gradient.internalBinaryWrite(assetUrl.gradient, tag.tag(4, GiftCustomizationBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("" !== assetUrl.backgroundAssetUrl) {
        tag.tag(5, GiftCustomizationBanner$Type(outer1_1[9]).WireType.LengthDelimited).string(assetUrl.backgroundAssetUrl);
        const tagResult4 = tag.tag(5, GiftCustomizationBanner$Type(outer1_1[9]).WireType.LengthDelimited);
      }
      if (assetUrl.asset) {
        const ThemeAwareAsset = GiftCustomizationBanner$Type(outer1_1[7]).ThemeAwareAsset;
        const tagResult5 = tag.tag(6, GiftCustomizationBanner$Type(outer1_1[9]).WireType.LengthDelimited);
        const joined1 = ThemeAwareAsset.internalBinaryWrite(assetUrl.asset, tag.tag(6, GiftCustomizationBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = ThemeAwareAsset.internalBinaryWrite(assetUrl.asset, tag.tag(6, GiftCustomizationBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (assetUrl.backgroundAsset) {
        const ThemeAwareAsset2 = GiftCustomizationBanner$Type(outer1_1[7]).ThemeAwareAsset;
        const tagResult6 = tag.tag(7, GiftCustomizationBanner$Type(outer1_1[9]).WireType.LengthDelimited);
        const joined2 = ThemeAwareAsset2.internalBinaryWrite(assetUrl.backgroundAsset, tag.tag(7, GiftCustomizationBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = ThemeAwareAsset2.internalBinaryWrite(assetUrl.backgroundAsset, tag.tag(7, GiftCustomizationBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (assetUrl.mobileBackgroundAsset) {
        const ThemeAwareAsset3 = GiftCustomizationBanner$Type(outer1_1[7]).ThemeAwareAsset;
        const tagResult7 = tag.tag(8, GiftCustomizationBanner$Type(outer1_1[9]).WireType.LengthDelimited);
        const joined3 = ThemeAwareAsset3.internalBinaryWrite(assetUrl.mobileBackgroundAsset, tag.tag(8, GiftCustomizationBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult3 = ThemeAwareAsset3.internalBinaryWrite(assetUrl.mobileBackgroundAsset, tag.tag(8, GiftCustomizationBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (0 !== assetUrl.assetVariant) {
        tag.tag(9, GiftCustomizationBanner$Type(outer1_1[9]).WireType.Varint).int32(assetUrl.assetVariant);
        const tagResult8 = tag.tag(9, GiftCustomizationBanner$Type(outer1_1[9]).WireType.Varint);
      }
      if (assetUrl.desktopBodyLocalized) {
        const LocalizedString = GiftCustomizationBanner$Type(outer1_1[8]).LocalizedString;
        const tagResult9 = tag.tag(10, GiftCustomizationBanner$Type(outer1_1[9]).WireType.LengthDelimited);
        const joined4 = LocalizedString.internalBinaryWrite(assetUrl.desktopBodyLocalized, tag.tag(10, GiftCustomizationBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult4 = LocalizedString.internalBinaryWrite(assetUrl.desktopBodyLocalized, tag.tag(10, GiftCustomizationBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (assetUrl.mobileBodyLocalized) {
        const LocalizedString2 = GiftCustomizationBanner$Type(outer1_1[8]).LocalizedString;
        const tagResult10 = tag.tag(11, GiftCustomizationBanner$Type(outer1_1[9]).WireType.LengthDelimited);
        const joined5 = LocalizedString2.internalBinaryWrite(assetUrl.mobileBodyLocalized, tag.tag(11, GiftCustomizationBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult5 = LocalizedString2.internalBinaryWrite(assetUrl.mobileBodyLocalized, tag.tag(11, GiftCustomizationBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = GiftCustomizationBanner$Type(outer1_1[9]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, assetUrl, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(GiftCustomizationBanner$Type, items);
})(require("module_1284").MessageType);
tmp2 = new tmp2();
let result = require("_defineProperties").fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/gift_customization_banner.tsx");

export const GiftCustomizationBanner_AssetVariant = obj;
export const GiftCustomizationBanner = tmp2;
