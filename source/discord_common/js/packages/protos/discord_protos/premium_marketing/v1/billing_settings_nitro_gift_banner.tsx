// Module ID: 7143
// Function ID: 57593
// Name: _isNativeReflectConstruct
// Dependencies: [0, 0, 0, 0, 4294967295, 4294967295, 0, 0, 0, 0, 0]

// Module 7143 (_isNativeReflectConstruct)
import __exportStarResult1 from "__exportStarResult1";
import closure_3 from "__exportStarResult1";
import closure_4 from "__exportStarResult1";
import closure_5 from "__exportStarResult1";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let tmp2 = (MessageType) => {
  class BillingSettingsNitroGiftBanner$Type {
    constructor() {
      self = this;
      tmp = closure_3(this, BillingSettingsNitroGiftBanner$Type);
      items = [, , , , , , , , , , , ];
      items[0] = {};
      items[1] = {};
      items[2] = {};
      items[3] = {};
      obj = { -111020099: null, 1351895378: null, 1456955659: null };
      obj.T = function T() {
        return callback(closure_1[6]).Gradient;
      };
      items[4] = obj;
      items[5] = {};
      items[6] = {};
      obj = { -111020099: "PRIMARY_330", 1351895378: 1, 1456955659: "value" };
      obj.T = function T() {
        return callback(closure_1[7]).ThemeAwareAsset;
      };
      items[7] = obj;
      obj1 = { -111020099: "BRAND_200", 1351895378: 1, 1456955659: "obtained_at" };
      obj1.T = function T() {
        return callback(closure_1[7]).ThemeAwareAsset;
      };
      items[8] = obj1;
      obj2 = { -111020099: "w", 1351895378: "Array", 1456955659: "isArray" };
      obj2.T = function T() {
        return callback(closure_1[8]).LocalizedString;
      };
      items[9] = obj2;
      items[10] = {
        T() {
              return callback(closure_1[8]).LocalizedString;
            }
      };
      obj3 = { -111020099: "\u{1F9CF}\u{1F3FF}\u200D\u2642\uFE0F", 1351895378: true, 1456955659: null };
      obj3.T = function T() {
        return callback(closure_1[8]).LocalizedString;
      };
      items[11] = obj3;
      items1 = [1658629096];
      items1[1] = items;
      obj6 = closure_6(BillingSettingsNitroGiftBanner$Type);
      tmp2 = closure_5;
      if (closure_8()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj6, items1, closure_6(self).constructor);
      } else {
        constructResult = obj6.apply(self, items1);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = BillingSettingsNitroGiftBanner$Type;
  callback2(BillingSettingsNitroGiftBanner$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { i: null, toString: 1, key: 892, runOnJS: -9, "Bool(true)": 0, <string:1058271762>: 0 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, BillingSettingsNitroGiftBanner$Type(closure_1[9]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = BillingSettingsNitroGiftBanner$Type(closure_1[9]).reflectionMergePartial(this, obj, arr);
        const obj3 = BillingSettingsNitroGiftBanner$Type(closure_1[9]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
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
        const LocalizedString = BillingSettingsNitroGiftBanner$Type(closure_1[8]).LocalizedString;
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
        tag.tag(1, BillingSettingsNitroGiftBanner$Type(closure_1[9]).WireType.LengthDelimited).string(assetUrl.assetUrl);
        const tagResult = tag.tag(1, BillingSettingsNitroGiftBanner$Type(closure_1[9]).WireType.LengthDelimited);
      }
      if ("" !== assetUrl.header) {
        tag.tag(2, BillingSettingsNitroGiftBanner$Type(closure_1[9]).WireType.LengthDelimited).string(assetUrl.header);
        const tagResult1 = tag.tag(2, BillingSettingsNitroGiftBanner$Type(closure_1[9]).WireType.LengthDelimited);
      }
      if ("" !== assetUrl.body) {
        tag.tag(3, BillingSettingsNitroGiftBanner$Type(closure_1[9]).WireType.LengthDelimited).string(assetUrl.body);
        const tagResult2 = tag.tag(3, BillingSettingsNitroGiftBanner$Type(closure_1[9]).WireType.LengthDelimited);
      }
      if ("" !== assetUrl.backgroundAssetUrl) {
        tag.tag(4, BillingSettingsNitroGiftBanner$Type(closure_1[9]).WireType.LengthDelimited).string(assetUrl.backgroundAssetUrl);
        const tagResult3 = tag.tag(4, BillingSettingsNitroGiftBanner$Type(closure_1[9]).WireType.LengthDelimited);
      }
      if (assetUrl.gradient) {
        const Gradient = BillingSettingsNitroGiftBanner$Type(closure_1[6]).Gradient;
        const tagResult4 = tag.tag(5, BillingSettingsNitroGiftBanner$Type(closure_1[9]).WireType.LengthDelimited);
        const joined = Gradient.internalBinaryWrite(assetUrl.gradient, tag.tag(5, BillingSettingsNitroGiftBanner$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = Gradient.internalBinaryWrite(assetUrl.gradient, tag.tag(5, BillingSettingsNitroGiftBanner$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("" !== assetUrl.textColor) {
        tag.tag(6, BillingSettingsNitroGiftBanner$Type(closure_1[9]).WireType.LengthDelimited).string(assetUrl.textColor);
        const tagResult5 = tag.tag(6, BillingSettingsNitroGiftBanner$Type(closure_1[9]).WireType.LengthDelimited);
      }
      if ("" !== assetUrl.additionalTerms) {
        tag.tag(7, BillingSettingsNitroGiftBanner$Type(closure_1[9]).WireType.LengthDelimited).string(assetUrl.additionalTerms);
        const tagResult6 = tag.tag(7, BillingSettingsNitroGiftBanner$Type(closure_1[9]).WireType.LengthDelimited);
      }
      if (assetUrl.asset) {
        const ThemeAwareAsset = BillingSettingsNitroGiftBanner$Type(closure_1[7]).ThemeAwareAsset;
        const tagResult7 = tag.tag(8, BillingSettingsNitroGiftBanner$Type(closure_1[9]).WireType.LengthDelimited);
        const joined1 = ThemeAwareAsset.internalBinaryWrite(assetUrl.asset, tag.tag(8, BillingSettingsNitroGiftBanner$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = ThemeAwareAsset.internalBinaryWrite(assetUrl.asset, tag.tag(8, BillingSettingsNitroGiftBanner$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (assetUrl.backgroundAsset) {
        const ThemeAwareAsset2 = BillingSettingsNitroGiftBanner$Type(closure_1[7]).ThemeAwareAsset;
        const tagResult8 = tag.tag(9, BillingSettingsNitroGiftBanner$Type(closure_1[9]).WireType.LengthDelimited);
        const joined2 = ThemeAwareAsset2.internalBinaryWrite(assetUrl.backgroundAsset, tag.tag(9, BillingSettingsNitroGiftBanner$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = ThemeAwareAsset2.internalBinaryWrite(assetUrl.backgroundAsset, tag.tag(9, BillingSettingsNitroGiftBanner$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (assetUrl.headerLocalized) {
        const LocalizedString = BillingSettingsNitroGiftBanner$Type(closure_1[8]).LocalizedString;
        const tagResult9 = tag.tag(10, BillingSettingsNitroGiftBanner$Type(closure_1[9]).WireType.LengthDelimited);
        const joined3 = LocalizedString.internalBinaryWrite(assetUrl.headerLocalized, tag.tag(10, BillingSettingsNitroGiftBanner$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult3 = LocalizedString.internalBinaryWrite(assetUrl.headerLocalized, tag.tag(10, BillingSettingsNitroGiftBanner$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (assetUrl.bodyLocalized) {
        const LocalizedString2 = BillingSettingsNitroGiftBanner$Type(closure_1[8]).LocalizedString;
        const tagResult10 = tag.tag(11, BillingSettingsNitroGiftBanner$Type(closure_1[9]).WireType.LengthDelimited);
        const joined4 = LocalizedString2.internalBinaryWrite(assetUrl.bodyLocalized, tag.tag(11, BillingSettingsNitroGiftBanner$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult4 = LocalizedString2.internalBinaryWrite(assetUrl.bodyLocalized, tag.tag(11, BillingSettingsNitroGiftBanner$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (assetUrl.additionalTermsLocalized) {
        const LocalizedString3 = BillingSettingsNitroGiftBanner$Type(closure_1[8]).LocalizedString;
        const tagResult11 = tag.tag(12, BillingSettingsNitroGiftBanner$Type(closure_1[9]).WireType.LengthDelimited);
        const joined5 = LocalizedString3.internalBinaryWrite(assetUrl.additionalTermsLocalized, tag.tag(12, BillingSettingsNitroGiftBanner$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult5 = LocalizedString3.internalBinaryWrite(assetUrl.additionalTermsLocalized, tag.tag(12, BillingSettingsNitroGiftBanner$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = BillingSettingsNitroGiftBanner$Type(closure_1[9]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, assetUrl, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(BillingSettingsNitroGiftBanner$Type, items);
}(require("__exportStarResult1").MessageType);
tmp2 = new tmp2();
const result = require("__exportStarResult1").fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/billing_settings_nitro_gift_banner.tsx");

export const BillingSettingsNitroGiftBanner = tmp2;
