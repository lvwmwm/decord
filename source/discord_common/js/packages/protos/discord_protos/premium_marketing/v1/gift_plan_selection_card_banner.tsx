// Module ID: 7141
// Function ID: 57558
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 7141 (_isNativeReflectConstruct)
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
const obj = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", NORMAL: 1, [1]: "NORMAL", LARGE_TILTED: 2, [2]: "LARGE_TILTED" };
let tmp2 = (MessageType) => {
  class GiftPlanSelectionCardBanner$Type {
    constructor() {
      self = this;
      tmp = closure_3(this, GiftPlanSelectionCardBanner$Type);
      items = [, , , , , , , , , , , , , , , ];
      items[0] = {};
      items[1] = {};
      items[2] = {};
      items[3] = {
        T() {
              return callback(closure_1[6]).ThemeAwareAsset;
            }
      };
      items[4] = {};
      items[5] = {};
      items[6] = {};
      obj = { -111020099: -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002535835848762357, 1351895378: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009801187377842802, 1456955659: 4695003774544651000000000000000000000000000000 };
      obj.T = function T() {
        return callback(closure_1[7]).Gradient;
      };
      items[7] = obj;
      items[8] = {
        T() {
              return callback(closure_1[6]).ThemeAwareAsset;
            }
      };
      items[9] = {
        T() {
              return callback(closure_1[6]).ThemeAwareAsset;
            }
      };
      items[10] = {
        T() {
              return callback(closure_1[6]).ThemeAwareAsset;
            }
      };
      obj = { -111020099: true, 1351895378: null, 1456955659: 12 };
      obj.T = function T() {
        return callback(closure_1[6]).ThemeAwareAsset;
      };
      items[11] = obj;
      items[12] = {
        T() {
              return callback(closure_1[8]).LocalizedString;
            }
      };
      obj1 = { -111020099: "isArray", 1351895378: "key", 1456955659: "Array" };
      obj1.T = function T() {
        return callback(closure_1[8]).LocalizedString;
      };
      items[13] = obj1;
      obj2 = { -111020099: "<string:23215616>", 1351895378: "<string:24400128>", 1456955659: "<string:69741122>" };
      obj2.T = function T() {
        return callback(closure_1[8]).LocalizedString;
      };
      items[14] = obj2;
      obj3 = { -111020099: "isArray", 1351895378: "key", 1456955659: "Array" };
      obj3.T = function T() {
        const items = [-1424897350, closure_8, "ASSET_VARIANT_"];
        return items;
      };
      items[15] = obj3;
      items1 = [null];
      items1[1] = items;
      obj6 = closure_6(GiftPlanSelectionCardBanner$Type);
      tmp2 = closure_5;
      if (closure_9()) {
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
  const arg1 = GiftPlanSelectionCardBanner$Type;
  callback2(GiftPlanSelectionCardBanner$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, GiftPlanSelectionCardBanner$Type(closure_1[9]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = GiftPlanSelectionCardBanner$Type(closure_1[9]).reflectionMergePartial(this, obj, arr);
        const obj3 = GiftPlanSelectionCardBanner$Type(closure_1[9]);
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
        tag.tag(1, GiftPlanSelectionCardBanner$Type(closure_1[9]).WireType.LengthDelimited).string(header.header);
        const tagResult = tag.tag(1, GiftPlanSelectionCardBanner$Type(closure_1[9]).WireType.LengthDelimited);
      }
      if ("" !== header.desktopBody) {
        tag.tag(2, GiftPlanSelectionCardBanner$Type(closure_1[9]).WireType.LengthDelimited).string(header.desktopBody);
        const tagResult1 = tag.tag(2, GiftPlanSelectionCardBanner$Type(closure_1[9]).WireType.LengthDelimited);
      }
      if ("" !== header.mobileBody) {
        tag.tag(3, GiftPlanSelectionCardBanner$Type(closure_1[9]).WireType.LengthDelimited).string(header.mobileBody);
        const tagResult2 = tag.tag(3, GiftPlanSelectionCardBanner$Type(closure_1[9]).WireType.LengthDelimited);
      }
      if (header.avatarAsset) {
        const ThemeAwareAsset = GiftPlanSelectionCardBanner$Type(closure_1[6]).ThemeAwareAsset;
        const tagResult3 = tag.tag(4, GiftPlanSelectionCardBanner$Type(closure_1[9]).WireType.LengthDelimited);
        const joined = ThemeAwareAsset.internalBinaryWrite(header.avatarAsset, tag.tag(4, GiftPlanSelectionCardBanner$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = ThemeAwareAsset.internalBinaryWrite(header.avatarAsset, tag.tag(4, GiftPlanSelectionCardBanner$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("" !== header.bannerAssetUrl) {
        tag.tag(5, GiftPlanSelectionCardBanner$Type(closure_1[9]).WireType.LengthDelimited).string(header.bannerAssetUrl);
        const tagResult4 = tag.tag(5, GiftPlanSelectionCardBanner$Type(closure_1[9]).WireType.LengthDelimited);
      }
      if ("" !== header.backgroundAssetUrl) {
        tag.tag(6, GiftPlanSelectionCardBanner$Type(closure_1[9]).WireType.LengthDelimited).string(header.backgroundAssetUrl);
        const tagResult5 = tag.tag(6, GiftPlanSelectionCardBanner$Type(closure_1[9]).WireType.LengthDelimited);
      }
      if ("" !== header.cardAssetUrl) {
        tag.tag(7, GiftPlanSelectionCardBanner$Type(closure_1[9]).WireType.LengthDelimited).string(header.cardAssetUrl);
        const tagResult6 = tag.tag(7, GiftPlanSelectionCardBanner$Type(closure_1[9]).WireType.LengthDelimited);
      }
      if (header.gradient) {
        const Gradient = GiftPlanSelectionCardBanner$Type(closure_1[7]).Gradient;
        const tagResult7 = tag.tag(8, GiftPlanSelectionCardBanner$Type(closure_1[9]).WireType.LengthDelimited);
        const joined1 = Gradient.internalBinaryWrite(header.gradient, tag.tag(8, GiftPlanSelectionCardBanner$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = Gradient.internalBinaryWrite(header.gradient, tag.tag(8, GiftPlanSelectionCardBanner$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (header.bannerAsset) {
        const ThemeAwareAsset2 = GiftPlanSelectionCardBanner$Type(closure_1[6]).ThemeAwareAsset;
        const tagResult8 = tag.tag(9, GiftPlanSelectionCardBanner$Type(closure_1[9]).WireType.LengthDelimited);
        const joined2 = ThemeAwareAsset2.internalBinaryWrite(header.bannerAsset, tag.tag(9, GiftPlanSelectionCardBanner$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = ThemeAwareAsset2.internalBinaryWrite(header.bannerAsset, tag.tag(9, GiftPlanSelectionCardBanner$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (header.backgroundAsset) {
        const ThemeAwareAsset3 = GiftPlanSelectionCardBanner$Type(closure_1[6]).ThemeAwareAsset;
        const tagResult9 = tag.tag(10, GiftPlanSelectionCardBanner$Type(closure_1[9]).WireType.LengthDelimited);
        const joined3 = ThemeAwareAsset3.internalBinaryWrite(header.backgroundAsset, tag.tag(10, GiftPlanSelectionCardBanner$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult3 = ThemeAwareAsset3.internalBinaryWrite(header.backgroundAsset, tag.tag(10, GiftPlanSelectionCardBanner$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (header.cardAsset) {
        const ThemeAwareAsset4 = GiftPlanSelectionCardBanner$Type(closure_1[6]).ThemeAwareAsset;
        const tagResult10 = tag.tag(11, GiftPlanSelectionCardBanner$Type(closure_1[9]).WireType.LengthDelimited);
        const joined4 = ThemeAwareAsset4.internalBinaryWrite(header.cardAsset, tag.tag(11, GiftPlanSelectionCardBanner$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult4 = ThemeAwareAsset4.internalBinaryWrite(header.cardAsset, tag.tag(11, GiftPlanSelectionCardBanner$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (header.mobileBannerAsset) {
        const ThemeAwareAsset5 = GiftPlanSelectionCardBanner$Type(closure_1[6]).ThemeAwareAsset;
        const tagResult11 = tag.tag(12, GiftPlanSelectionCardBanner$Type(closure_1[9]).WireType.LengthDelimited);
        const joined5 = ThemeAwareAsset5.internalBinaryWrite(header.mobileBannerAsset, tag.tag(12, GiftPlanSelectionCardBanner$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult5 = ThemeAwareAsset5.internalBinaryWrite(header.mobileBannerAsset, tag.tag(12, GiftPlanSelectionCardBanner$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (header.headerLocalized) {
        const LocalizedString = GiftPlanSelectionCardBanner$Type(closure_1[8]).LocalizedString;
        const tagResult12 = tag.tag(13, GiftPlanSelectionCardBanner$Type(closure_1[9]).WireType.LengthDelimited);
        const joined6 = LocalizedString.internalBinaryWrite(header.headerLocalized, tag.tag(13, GiftPlanSelectionCardBanner$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult6 = LocalizedString.internalBinaryWrite(header.headerLocalized, tag.tag(13, GiftPlanSelectionCardBanner$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (header.desktopBodyLocalized) {
        const LocalizedString2 = GiftPlanSelectionCardBanner$Type(closure_1[8]).LocalizedString;
        const tagResult13 = tag.tag(14, GiftPlanSelectionCardBanner$Type(closure_1[9]).WireType.LengthDelimited);
        const joined7 = LocalizedString2.internalBinaryWrite(header.desktopBodyLocalized, tag.tag(14, GiftPlanSelectionCardBanner$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult7 = LocalizedString2.internalBinaryWrite(header.desktopBodyLocalized, tag.tag(14, GiftPlanSelectionCardBanner$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (header.mobileBodyLocalized) {
        const LocalizedString3 = GiftPlanSelectionCardBanner$Type(closure_1[8]).LocalizedString;
        const tagResult14 = tag.tag(15, GiftPlanSelectionCardBanner$Type(closure_1[9]).WireType.LengthDelimited);
        const joined8 = LocalizedString3.internalBinaryWrite(header.mobileBodyLocalized, tag.tag(15, GiftPlanSelectionCardBanner$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult8 = LocalizedString3.internalBinaryWrite(header.mobileBodyLocalized, tag.tag(15, GiftPlanSelectionCardBanner$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (0 !== header.assetVariant) {
        tag.tag(16, GiftPlanSelectionCardBanner$Type(closure_1[9]).WireType.Varint).int32(header.assetVariant);
        const tagResult15 = tag.tag(16, GiftPlanSelectionCardBanner$Type(closure_1[9]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = GiftPlanSelectionCardBanner$Type(closure_1[9]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, header, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(GiftPlanSelectionCardBanner$Type, items);
}(arg1(dependencyMap[9]).MessageType);
tmp2 = new tmp2();
const result = arg1(dependencyMap[10]).fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/gift_plan_selection_card_banner.tsx");

export const GiftPlanSelectionCardBanner_AssetVariant = obj;
export const GiftPlanSelectionCardBanner = tmp2;
