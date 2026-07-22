// Module ID: 7142
// Function ID: 57577
// Name: _isNativeReflectConstruct
// Dependencies: [0, 0, 0, 0, 4294967295, 4294967295, 0, 0, 0, 0, 0]

// Module 7142 (_isNativeReflectConstruct)
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
const obj = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", NORMAL: 1, [1]: "NORMAL", LARGE_TILTED: 2, [2]: "LARGE_TILTED" };
let tmp2 = (MessageType) => {
  class GiftCustomizationBanner$Type {
    constructor() {
      self = this;
      tmp = closure_3(this, GiftCustomizationBanner$Type);
      items = [, , , , , , , , , , ];
      items[0] = {};
      items[1] = {};
      items[2] = {};
      obj = { -111020099: true, 1351895378: true, 1456955659: true };
      obj.T = function T() {
        return callback(closure_1[6]).Gradient;
      };
      items[3] = obj;
      items[4] = {};
      obj = { -111020099: null, 1351895378: null, 1456955659: null };
      obj.T = function T() {
        return callback(closure_1[7]).ThemeAwareAsset;
      };
      items[5] = obj;
      obj1 = { -111020099: "_oneway", 1351895378: "isArray", 1456955659: "isArray" };
      obj1.T = function T() {
        return callback(closure_1[7]).ThemeAwareAsset;
      };
      items[6] = obj1;
      items[7] = {
        T() {
              return callback(closure_1[7]).ThemeAwareAsset;
            }
      };
      obj2 = { -111020099: 0.25, 1351895378: "ILLO_GREEN_70", 1456955659: 0.3 };
      obj2.T = function T() {
        const items = [true, closure_8, "ASSET_VARIANT_"];
        return items;
      };
      items[8] = obj2;
      items[9] = {
        T() {
              return callback(closure_1[8]).LocalizedString;
            }
      };
      items[10] = {
        T() {
              return callback(closure_1[8]).LocalizedString;
            }
      };
      items1 = [false];
      items1[1] = items;
      obj5 = closure_6(GiftCustomizationBanner$Type);
      tmp2 = closure_5;
      if (closure_9()) {
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
  const arg1 = GiftCustomizationBanner$Type;
  callback2(GiftCustomizationBanner$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, GiftCustomizationBanner$Type(closure_1[9]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = GiftCustomizationBanner$Type(closure_1[9]).reflectionMergePartial(this, obj, arr);
        const obj3 = GiftCustomizationBanner$Type(closure_1[9]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos) {
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      if (pos.pos < pos.pos + arg1) {
        [r10028, r10029] = callback(pos.tag(), 2);
        const tmp3 = callback(pos.tag(), 2);
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(assetUrl, tag, writeUnknownFields) {
      if ("" !== assetUrl.assetUrl) {
        tag.tag(1, GiftCustomizationBanner$Type(closure_1[9]).WireType.LengthDelimited).string(assetUrl.assetUrl);
        const tagResult = tag.tag(1, GiftCustomizationBanner$Type(closure_1[9]).WireType.LengthDelimited);
      }
      if ("" !== assetUrl.desktopBody) {
        tag.tag(2, GiftCustomizationBanner$Type(closure_1[9]).WireType.LengthDelimited).string(assetUrl.desktopBody);
        const tagResult1 = tag.tag(2, GiftCustomizationBanner$Type(closure_1[9]).WireType.LengthDelimited);
      }
      if ("" !== assetUrl.mobileBody) {
        tag.tag(3, GiftCustomizationBanner$Type(closure_1[9]).WireType.LengthDelimited).string(assetUrl.mobileBody);
        const tagResult2 = tag.tag(3, GiftCustomizationBanner$Type(closure_1[9]).WireType.LengthDelimited);
      }
      if (assetUrl.gradient) {
        const Gradient = GiftCustomizationBanner$Type(closure_1[6]).Gradient;
        const tagResult3 = tag.tag(4, GiftCustomizationBanner$Type(closure_1[9]).WireType.LengthDelimited);
        const joined = Gradient.internalBinaryWrite(assetUrl.gradient, tag.tag(4, GiftCustomizationBanner$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = Gradient.internalBinaryWrite(assetUrl.gradient, tag.tag(4, GiftCustomizationBanner$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("" !== assetUrl.backgroundAssetUrl) {
        tag.tag(5, GiftCustomizationBanner$Type(closure_1[9]).WireType.LengthDelimited).string(assetUrl.backgroundAssetUrl);
        const tagResult4 = tag.tag(5, GiftCustomizationBanner$Type(closure_1[9]).WireType.LengthDelimited);
      }
      if (assetUrl.asset) {
        const ThemeAwareAsset = GiftCustomizationBanner$Type(closure_1[7]).ThemeAwareAsset;
        const tagResult5 = tag.tag(6, GiftCustomizationBanner$Type(closure_1[9]).WireType.LengthDelimited);
        const joined1 = ThemeAwareAsset.internalBinaryWrite(assetUrl.asset, tag.tag(6, GiftCustomizationBanner$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = ThemeAwareAsset.internalBinaryWrite(assetUrl.asset, tag.tag(6, GiftCustomizationBanner$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (assetUrl.backgroundAsset) {
        const ThemeAwareAsset2 = GiftCustomizationBanner$Type(closure_1[7]).ThemeAwareAsset;
        const tagResult6 = tag.tag(7, GiftCustomizationBanner$Type(closure_1[9]).WireType.LengthDelimited);
        const joined2 = ThemeAwareAsset2.internalBinaryWrite(assetUrl.backgroundAsset, tag.tag(7, GiftCustomizationBanner$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = ThemeAwareAsset2.internalBinaryWrite(assetUrl.backgroundAsset, tag.tag(7, GiftCustomizationBanner$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (assetUrl.mobileBackgroundAsset) {
        const ThemeAwareAsset3 = GiftCustomizationBanner$Type(closure_1[7]).ThemeAwareAsset;
        const tagResult7 = tag.tag(8, GiftCustomizationBanner$Type(closure_1[9]).WireType.LengthDelimited);
        const joined3 = ThemeAwareAsset3.internalBinaryWrite(assetUrl.mobileBackgroundAsset, tag.tag(8, GiftCustomizationBanner$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult3 = ThemeAwareAsset3.internalBinaryWrite(assetUrl.mobileBackgroundAsset, tag.tag(8, GiftCustomizationBanner$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (0 !== assetUrl.assetVariant) {
        tag.tag(9, GiftCustomizationBanner$Type(closure_1[9]).WireType.Varint).int32(assetUrl.assetVariant);
        const tagResult8 = tag.tag(9, GiftCustomizationBanner$Type(closure_1[9]).WireType.Varint);
      }
      if (assetUrl.desktopBodyLocalized) {
        const LocalizedString = GiftCustomizationBanner$Type(closure_1[8]).LocalizedString;
        const tagResult9 = tag.tag(10, GiftCustomizationBanner$Type(closure_1[9]).WireType.LengthDelimited);
        const joined4 = LocalizedString.internalBinaryWrite(assetUrl.desktopBodyLocalized, tag.tag(10, GiftCustomizationBanner$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult4 = LocalizedString.internalBinaryWrite(assetUrl.desktopBodyLocalized, tag.tag(10, GiftCustomizationBanner$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (assetUrl.mobileBodyLocalized) {
        const LocalizedString2 = GiftCustomizationBanner$Type(closure_1[8]).LocalizedString;
        const tagResult10 = tag.tag(11, GiftCustomizationBanner$Type(closure_1[9]).WireType.LengthDelimited);
        const joined5 = LocalizedString2.internalBinaryWrite(assetUrl.mobileBodyLocalized, tag.tag(11, GiftCustomizationBanner$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult5 = LocalizedString2.internalBinaryWrite(assetUrl.mobileBodyLocalized, tag.tag(11, GiftCustomizationBanner$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = GiftCustomizationBanner$Type(closure_1[9]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, assetUrl, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(GiftCustomizationBanner$Type, items);
}(require("__exportStarResult1").MessageType);
tmp2 = new tmp2();
const result = require("__exportStarResult1").fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/gift_customization_banner.tsx");

export const GiftCustomizationBanner_AssetVariant = obj;
export const GiftCustomizationBanner = tmp2;
