// Module ID: 7146
// Function ID: 57592
// Name: _isNativeReflectConstruct
// Dependencies: [57, 6, 7, 15, 17, 18, 7145, 7143, 7136, 1284, 2]

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
  class GiftPlanSelectionCardBanner$Type {
    constructor() {
      self = this;
      tmp = outer1_3(this, GiftPlanSelectionCardBanner$Type);
      items = [, , , , , , , , , , , , , , , ];
      items[0] = { no: 1, name: "header", kind: "scalar", T: 9 };
      items[1] = { no: 2, name: "desktop_body", kind: "scalar", T: 9 };
      items[2] = { no: 3, name: "mobile_body", kind: "scalar", T: 9 };
      obj = { no: 4, name: "avatar_asset", kind: "message" };
      obj.T = function T() {
        return GiftPlanSelectionCardBanner$Type(outer2_1[6]).ThemeAwareAsset;
      };
      items[3] = obj;
      items[4] = { no: 5, name: "banner_asset_url", kind: "scalar", T: 9 };
      items[5] = { no: 6, name: "background_asset_url", kind: "scalar", T: 9 };
      items[6] = { no: 7, name: "card_asset_url", kind: "scalar", T: 9 };
      obj = { no: 8, name: "gradient", kind: "message" };
      obj.T = function T() {
        return GiftPlanSelectionCardBanner$Type(outer2_1[7]).Gradient;
      };
      items[7] = obj;
      obj1 = { no: 9, name: "banner_asset", kind: "message" };
      obj1.T = function T() {
        return GiftPlanSelectionCardBanner$Type(outer2_1[6]).ThemeAwareAsset;
      };
      items[8] = obj1;
      obj2 = { no: 10, name: "background_asset", kind: "message" };
      obj2.T = function T() {
        return GiftPlanSelectionCardBanner$Type(outer2_1[6]).ThemeAwareAsset;
      };
      items[9] = obj2;
      obj3 = { no: 11, name: "card_asset", kind: "message" };
      obj3.T = function T() {
        return GiftPlanSelectionCardBanner$Type(outer2_1[6]).ThemeAwareAsset;
      };
      items[10] = obj3;
      obj4 = { no: 12, name: "mobile_banner_asset", kind: "message" };
      obj4.T = function T() {
        return GiftPlanSelectionCardBanner$Type(outer2_1[6]).ThemeAwareAsset;
      };
      items[11] = obj4;
      obj5 = { no: 13, name: "header_localized", kind: "message" };
      obj5.T = function T() {
        return GiftPlanSelectionCardBanner$Type(outer2_1[8]).LocalizedString;
      };
      items[12] = obj5;
      obj6 = { no: 14, name: "desktop_body_localized", kind: "message" };
      obj6.T = function T() {
        return GiftPlanSelectionCardBanner$Type(outer2_1[8]).LocalizedString;
      };
      items[13] = obj6;
      obj7 = { no: 15, name: "mobile_body_localized", kind: "message" };
      obj7.T = function T() {
        return GiftPlanSelectionCardBanner$Type(outer2_1[8]).LocalizedString;
      };
      items[14] = obj7;
      obj8 = { no: 16, name: "asset_variant", kind: "enum" };
      obj8.T = function T() {
        const items = ["discord_protos.premium_marketing.v1.GiftPlanSelectionCardBanner.AssetVariant", outer2_8, "ASSET_VARIANT_"];
        return items;
      };
      items[15] = obj8;
      items1 = ["discord_protos.premium_marketing.v1.GiftPlanSelectionCardBanner"];
      items1[1] = items;
      obj11 = outer1_6(GiftPlanSelectionCardBanner$Type);
      tmp2 = outer1_5;
      if (outer1_9()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_6;
        constructResult = Reflect.construct(obj11, items1, outer1_6(self).constructor);
      } else {
        constructResult = obj11.apply(self, items1);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(GiftPlanSelectionCardBanner$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { header: "", desktopBody: "", mobileBody: "", bannerAssetUrl: "", backgroundAssetUrl: "", cardAssetUrl: "", assetVariant: 0 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, GiftPlanSelectionCardBanner$Type(outer1_1[9]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = GiftPlanSelectionCardBanner$Type(outer1_1[9]).reflectionMergePartial(this, obj, arr);
        const obj3 = GiftPlanSelectionCardBanner$Type(outer1_1[9]);
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
      const sum = pos.pos + arg1;
      if (pos.pos < sum) {
        obj.assetVariant = pos.int32();
        while (true) {
          do {
            let tmp3 = tmp5;
            let tmp4 = tmp6;
          } while (pos.pos >= sum);
        }
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(header, tag, writeUnknownFields) {
      if ("" !== header.header) {
        tag.tag(1, GiftPlanSelectionCardBanner$Type(outer1_1[9]).WireType.LengthDelimited).string(header.header);
        const tagResult = tag.tag(1, GiftPlanSelectionCardBanner$Type(outer1_1[9]).WireType.LengthDelimited);
      }
      if ("" !== header.desktopBody) {
        tag.tag(2, GiftPlanSelectionCardBanner$Type(outer1_1[9]).WireType.LengthDelimited).string(header.desktopBody);
        const tagResult1 = tag.tag(2, GiftPlanSelectionCardBanner$Type(outer1_1[9]).WireType.LengthDelimited);
      }
      if ("" !== header.mobileBody) {
        tag.tag(3, GiftPlanSelectionCardBanner$Type(outer1_1[9]).WireType.LengthDelimited).string(header.mobileBody);
        const tagResult2 = tag.tag(3, GiftPlanSelectionCardBanner$Type(outer1_1[9]).WireType.LengthDelimited);
      }
      if (header.avatarAsset) {
        const ThemeAwareAsset = GiftPlanSelectionCardBanner$Type(outer1_1[6]).ThemeAwareAsset;
        const tagResult3 = tag.tag(4, GiftPlanSelectionCardBanner$Type(outer1_1[9]).WireType.LengthDelimited);
        const joined = ThemeAwareAsset.internalBinaryWrite(header.avatarAsset, tag.tag(4, GiftPlanSelectionCardBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = ThemeAwareAsset.internalBinaryWrite(header.avatarAsset, tag.tag(4, GiftPlanSelectionCardBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("" !== header.bannerAssetUrl) {
        tag.tag(5, GiftPlanSelectionCardBanner$Type(outer1_1[9]).WireType.LengthDelimited).string(header.bannerAssetUrl);
        const tagResult4 = tag.tag(5, GiftPlanSelectionCardBanner$Type(outer1_1[9]).WireType.LengthDelimited);
      }
      if ("" !== header.backgroundAssetUrl) {
        tag.tag(6, GiftPlanSelectionCardBanner$Type(outer1_1[9]).WireType.LengthDelimited).string(header.backgroundAssetUrl);
        const tagResult5 = tag.tag(6, GiftPlanSelectionCardBanner$Type(outer1_1[9]).WireType.LengthDelimited);
      }
      if ("" !== header.cardAssetUrl) {
        tag.tag(7, GiftPlanSelectionCardBanner$Type(outer1_1[9]).WireType.LengthDelimited).string(header.cardAssetUrl);
        const tagResult6 = tag.tag(7, GiftPlanSelectionCardBanner$Type(outer1_1[9]).WireType.LengthDelimited);
      }
      if (header.gradient) {
        const Gradient = GiftPlanSelectionCardBanner$Type(outer1_1[7]).Gradient;
        const tagResult7 = tag.tag(8, GiftPlanSelectionCardBanner$Type(outer1_1[9]).WireType.LengthDelimited);
        const joined1 = Gradient.internalBinaryWrite(header.gradient, tag.tag(8, GiftPlanSelectionCardBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = Gradient.internalBinaryWrite(header.gradient, tag.tag(8, GiftPlanSelectionCardBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (header.bannerAsset) {
        const ThemeAwareAsset2 = GiftPlanSelectionCardBanner$Type(outer1_1[6]).ThemeAwareAsset;
        const tagResult8 = tag.tag(9, GiftPlanSelectionCardBanner$Type(outer1_1[9]).WireType.LengthDelimited);
        const joined2 = ThemeAwareAsset2.internalBinaryWrite(header.bannerAsset, tag.tag(9, GiftPlanSelectionCardBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = ThemeAwareAsset2.internalBinaryWrite(header.bannerAsset, tag.tag(9, GiftPlanSelectionCardBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (header.backgroundAsset) {
        const ThemeAwareAsset3 = GiftPlanSelectionCardBanner$Type(outer1_1[6]).ThemeAwareAsset;
        const tagResult9 = tag.tag(10, GiftPlanSelectionCardBanner$Type(outer1_1[9]).WireType.LengthDelimited);
        const joined3 = ThemeAwareAsset3.internalBinaryWrite(header.backgroundAsset, tag.tag(10, GiftPlanSelectionCardBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult3 = ThemeAwareAsset3.internalBinaryWrite(header.backgroundAsset, tag.tag(10, GiftPlanSelectionCardBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (header.cardAsset) {
        const ThemeAwareAsset4 = GiftPlanSelectionCardBanner$Type(outer1_1[6]).ThemeAwareAsset;
        const tagResult10 = tag.tag(11, GiftPlanSelectionCardBanner$Type(outer1_1[9]).WireType.LengthDelimited);
        const joined4 = ThemeAwareAsset4.internalBinaryWrite(header.cardAsset, tag.tag(11, GiftPlanSelectionCardBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult4 = ThemeAwareAsset4.internalBinaryWrite(header.cardAsset, tag.tag(11, GiftPlanSelectionCardBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (header.mobileBannerAsset) {
        const ThemeAwareAsset5 = GiftPlanSelectionCardBanner$Type(outer1_1[6]).ThemeAwareAsset;
        const tagResult11 = tag.tag(12, GiftPlanSelectionCardBanner$Type(outer1_1[9]).WireType.LengthDelimited);
        const joined5 = ThemeAwareAsset5.internalBinaryWrite(header.mobileBannerAsset, tag.tag(12, GiftPlanSelectionCardBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult5 = ThemeAwareAsset5.internalBinaryWrite(header.mobileBannerAsset, tag.tag(12, GiftPlanSelectionCardBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (header.headerLocalized) {
        const LocalizedString = GiftPlanSelectionCardBanner$Type(outer1_1[8]).LocalizedString;
        const tagResult12 = tag.tag(13, GiftPlanSelectionCardBanner$Type(outer1_1[9]).WireType.LengthDelimited);
        const joined6 = LocalizedString.internalBinaryWrite(header.headerLocalized, tag.tag(13, GiftPlanSelectionCardBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult6 = LocalizedString.internalBinaryWrite(header.headerLocalized, tag.tag(13, GiftPlanSelectionCardBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (header.desktopBodyLocalized) {
        const LocalizedString2 = GiftPlanSelectionCardBanner$Type(outer1_1[8]).LocalizedString;
        const tagResult13 = tag.tag(14, GiftPlanSelectionCardBanner$Type(outer1_1[9]).WireType.LengthDelimited);
        const joined7 = LocalizedString2.internalBinaryWrite(header.desktopBodyLocalized, tag.tag(14, GiftPlanSelectionCardBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult7 = LocalizedString2.internalBinaryWrite(header.desktopBodyLocalized, tag.tag(14, GiftPlanSelectionCardBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (header.mobileBodyLocalized) {
        const LocalizedString3 = GiftPlanSelectionCardBanner$Type(outer1_1[8]).LocalizedString;
        const tagResult14 = tag.tag(15, GiftPlanSelectionCardBanner$Type(outer1_1[9]).WireType.LengthDelimited);
        const joined8 = LocalizedString3.internalBinaryWrite(header.mobileBodyLocalized, tag.tag(15, GiftPlanSelectionCardBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult8 = LocalizedString3.internalBinaryWrite(header.mobileBodyLocalized, tag.tag(15, GiftPlanSelectionCardBanner$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (0 !== header.assetVariant) {
        tag.tag(16, GiftPlanSelectionCardBanner$Type(outer1_1[9]).WireType.Varint).int32(header.assetVariant);
        const tagResult15 = tag.tag(16, GiftPlanSelectionCardBanner$Type(outer1_1[9]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = GiftPlanSelectionCardBanner$Type(outer1_1[9]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, header, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(GiftPlanSelectionCardBanner$Type, items);
})(require("module_1284").MessageType);
tmp2 = new tmp2();
let result = require("_defineProperties").fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/gift_plan_selection_card_banner.tsx");

export const GiftPlanSelectionCardBanner_AssetVariant = obj;
export const GiftPlanSelectionCardBanner = tmp2;
