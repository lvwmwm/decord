// Module ID: 7124
// Function ID: 57307
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 7124 (_isNativeReflectConstruct)
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
let tmp2 = (MessageType) => {
  class PremiumMarketingComponentProperties$Type {
    constructor() {
      self = this;
      tmp = closure_3(this, PremiumMarketingComponentProperties$Type);
      items = [, , , , , , , , , , , , , , , , , , , ];
      items[0] = { flexDirection: "y", alignItems: "%MapIteratorPrototype%", backgroundColor: "isArray", borderRadius: "DEFAULT_NAVIGATION_SPAN_NAME", paddingHorizontal: "onActionExecuted" };
      obj = { flexDirection: 1912602466, alignItems: 0, backgroundColor: 962072625, borderRadius: 779536564 };
      obj.T = function T() {
        return callback(closure_1[6]).AnnouncementModalVariant1Properties;
      };
      items[1] = obj;
      obj = { flexDirection: "message", alignItems: "PLUM_9", backgroundColor: 1, borderRadius: "emoji_id" };
      obj.T = function T() {
        return callback(closure_1[7]).PremiumTab;
      };
      items[2] = obj;
      items[3] = {
        T() {
              return callback(closure_1[8]).MarketingPageBanner;
            }
      };
      obj1 = { flexDirection: "done", alignItems: "construct", backgroundColor: "o", borderRadius: "isArray" };
      obj1.T = function T() {
        return callback(closure_1[9]).PaymentModalBanner;
      };
      items[4] = obj1;
      obj2 = { flexDirection: "<string:108118062>", alignItems: "<string:1895825408>", backgroundColor: "r", borderRadius: "<string:1018060626>" };
      obj2.T = function T() {
        return callback(closure_1[10]).MobileBottomSheet;
      };
      items[5] = obj2;
      items[6] = {
        T() {
              return callback(closure_1[11]).GiftIcon;
            }
      };
      items[7] = {
        T() {
              return callback(closure_1[12]).GiftIconCoachmark;
            }
      };
      items[8] = {
        T() {
              return callback(closure_1[13]).GiftPlanSelectionCardBanner;
            }
      };
      items[9] = {
        T() {
              return callback(closure_1[14]).GiftCustomizationBanner;
            }
      };
      items[10] = {
        T() {
              return callback(closure_1[15]).BillingSettingsNitroGiftBanner;
            }
      };
      items[11] = {
        T() {
              return callback(closure_1[16]).GiftReminderNagbar;
            }
      };
      obj3 = { flexDirection: null, alignItems: null, backgroundColor: null, borderRadius: null };
      obj3.T = function T() {
        return callback(closure_1[17]).GiftReminderCoachmark;
      };
      items[12] = obj3;
      obj4 = { flexDirection: "message", alignItems: "properties", backgroundColor: null, borderRadius: "\u{1F918}\u{1F3FB}" };
      obj4.T = function T() {
        return callback(closure_1[18]).PremiumTabTooltip;
      };
      items[13] = obj4;
      items[14] = {
        T() {
              return callback(closure_1[19]).PremiumTabPopover;
            }
      };
      obj5 = { flexDirection: "GIFS_SEARCH", alignItems: "FORCE", backgroundColor: "absolute", borderRadius: "decorationStyle" };
      obj5.T = function T() {
        return callback(closure_1[20]).Nagbar;
      };
      items[15] = obj5;
      items[16] = {
        T() {
              return callback(closure_1[21]).PlanSelectCardBanner;
            }
      };
      obj6 = { flexDirection: "it", alignItems: "Array", backgroundColor: "isArray", borderRadius: "body" };
      obj6.T = function T() {
        return callback(closure_1[22]).BillingSettingsBanner;
      };
      items[17] = obj6;
      items[18] = { body: false, guildId: false, ao: false, "": false };
      items[19] = {};
      items1 = ["THREAD_UPDATE"];
      items1[1] = items;
      obj9 = closure_6(PremiumMarketingComponentProperties$Type);
      tmp2 = closure_5;
      if (closure_8()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj9, items1, closure_6(self).constructor);
      } else {
        constructResult = obj9.apply(self, items1);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = PremiumMarketingComponentProperties$Type;
  callback2(PremiumMarketingComponentProperties$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { "Bool(true)": true, "Bool(true)": "/assets/.cache/intl/bW9kdWxlcy9jaGVja291dC9tZXNzYWdlcw==", "Bool(true)": null, properties: { oneofKind: undefined } };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, PremiumMarketingComponentProperties$Type(closure_1[23]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = PremiumMarketingComponentProperties$Type(closure_1[23]).reflectionMergePartial(this, obj, arr);
        const obj3 = PremiumMarketingComponentProperties$Type(closure_1[23]);
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
        [r10060, r10061] = callback(pos.tag(), 2);
        const tmp3 = callback(pos.tag(), 2);
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(properties, tag, writeUnknownFields) {
      if ("placeholder" === properties.properties.oneofKind) {
        tag.tag(1, PremiumMarketingComponentProperties$Type(closure_1[23]).WireType.LengthDelimited).string(properties.properties.placeholder);
        const tagResult = tag.tag(1, PremiumMarketingComponentProperties$Type(closure_1[23]).WireType.LengthDelimited);
      }
      if ("announcementModalVariant1" === properties.properties.oneofKind) {
        const AnnouncementModalVariant1Properties = PremiumMarketingComponentProperties$Type(closure_1[6]).AnnouncementModalVariant1Properties;
        const tagResult1 = tag.tag(2, PremiumMarketingComponentProperties$Type(closure_1[23]).WireType.LengthDelimited);
        const joined = AnnouncementModalVariant1Properties.internalBinaryWrite(properties.properties.announcementModalVariant1, tag.tag(2, PremiumMarketingComponentProperties$Type(closure_1[23]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = AnnouncementModalVariant1Properties.internalBinaryWrite(properties.properties.announcementModalVariant1, tag.tag(2, PremiumMarketingComponentProperties$Type(closure_1[23]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("premiumTab" === properties.properties.oneofKind) {
        const PremiumTab = PremiumMarketingComponentProperties$Type(closure_1[7]).PremiumTab;
        const tagResult2 = tag.tag(4, PremiumMarketingComponentProperties$Type(closure_1[23]).WireType.LengthDelimited);
        const joined1 = PremiumTab.internalBinaryWrite(properties.properties.premiumTab, tag.tag(4, PremiumMarketingComponentProperties$Type(closure_1[23]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = PremiumTab.internalBinaryWrite(properties.properties.premiumTab, tag.tag(4, PremiumMarketingComponentProperties$Type(closure_1[23]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("marketingPageBanner" === properties.properties.oneofKind) {
        const MarketingPageBanner = PremiumMarketingComponentProperties$Type(closure_1[8]).MarketingPageBanner;
        const tagResult3 = tag.tag(5, PremiumMarketingComponentProperties$Type(closure_1[23]).WireType.LengthDelimited);
        const joined2 = MarketingPageBanner.internalBinaryWrite(properties.properties.marketingPageBanner, tag.tag(5, PremiumMarketingComponentProperties$Type(closure_1[23]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = MarketingPageBanner.internalBinaryWrite(properties.properties.marketingPageBanner, tag.tag(5, PremiumMarketingComponentProperties$Type(closure_1[23]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("paymentModalBanner" === properties.properties.oneofKind) {
        const PaymentModalBanner = PremiumMarketingComponentProperties$Type(closure_1[9]).PaymentModalBanner;
        const tagResult4 = tag.tag(6, PremiumMarketingComponentProperties$Type(closure_1[23]).WireType.LengthDelimited);
        const joined3 = PaymentModalBanner.internalBinaryWrite(properties.properties.paymentModalBanner, tag.tag(6, PremiumMarketingComponentProperties$Type(closure_1[23]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult3 = PaymentModalBanner.internalBinaryWrite(properties.properties.paymentModalBanner, tag.tag(6, PremiumMarketingComponentProperties$Type(closure_1[23]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("mobileBottomSheet" === properties.properties.oneofKind) {
        const MobileBottomSheet = PremiumMarketingComponentProperties$Type(closure_1[10]).MobileBottomSheet;
        const tagResult5 = tag.tag(7, PremiumMarketingComponentProperties$Type(closure_1[23]).WireType.LengthDelimited);
        const joined4 = MobileBottomSheet.internalBinaryWrite(properties.properties.mobileBottomSheet, tag.tag(7, PremiumMarketingComponentProperties$Type(closure_1[23]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult4 = MobileBottomSheet.internalBinaryWrite(properties.properties.mobileBottomSheet, tag.tag(7, PremiumMarketingComponentProperties$Type(closure_1[23]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("giftIcon" === properties.properties.oneofKind) {
        const GiftIcon = PremiumMarketingComponentProperties$Type(closure_1[11]).GiftIcon;
        const tagResult6 = tag.tag(8, PremiumMarketingComponentProperties$Type(closure_1[23]).WireType.LengthDelimited);
        const joined5 = GiftIcon.internalBinaryWrite(properties.properties.giftIcon, tag.tag(8, PremiumMarketingComponentProperties$Type(closure_1[23]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult5 = GiftIcon.internalBinaryWrite(properties.properties.giftIcon, tag.tag(8, PremiumMarketingComponentProperties$Type(closure_1[23]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("giftIconCoachmark" === properties.properties.oneofKind) {
        const GiftIconCoachmark = PremiumMarketingComponentProperties$Type(closure_1[12]).GiftIconCoachmark;
        const tagResult7 = tag.tag(9, PremiumMarketingComponentProperties$Type(closure_1[23]).WireType.LengthDelimited);
        const joined6 = GiftIconCoachmark.internalBinaryWrite(properties.properties.giftIconCoachmark, tag.tag(9, PremiumMarketingComponentProperties$Type(closure_1[23]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult6 = GiftIconCoachmark.internalBinaryWrite(properties.properties.giftIconCoachmark, tag.tag(9, PremiumMarketingComponentProperties$Type(closure_1[23]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("giftPlanSelectionCardBanner" === properties.properties.oneofKind) {
        const GiftPlanSelectionCardBanner = PremiumMarketingComponentProperties$Type(closure_1[13]).GiftPlanSelectionCardBanner;
        const tagResult8 = tag.tag(10, PremiumMarketingComponentProperties$Type(closure_1[23]).WireType.LengthDelimited);
        const joined7 = GiftPlanSelectionCardBanner.internalBinaryWrite(properties.properties.giftPlanSelectionCardBanner, tag.tag(10, PremiumMarketingComponentProperties$Type(closure_1[23]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult7 = GiftPlanSelectionCardBanner.internalBinaryWrite(properties.properties.giftPlanSelectionCardBanner, tag.tag(10, PremiumMarketingComponentProperties$Type(closure_1[23]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("giftCustomizationBanner" === properties.properties.oneofKind) {
        const GiftCustomizationBanner = PremiumMarketingComponentProperties$Type(closure_1[14]).GiftCustomizationBanner;
        const tagResult9 = tag.tag(11, PremiumMarketingComponentProperties$Type(closure_1[23]).WireType.LengthDelimited);
        const joined8 = GiftCustomizationBanner.internalBinaryWrite(properties.properties.giftCustomizationBanner, tag.tag(11, PremiumMarketingComponentProperties$Type(closure_1[23]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult8 = GiftCustomizationBanner.internalBinaryWrite(properties.properties.giftCustomizationBanner, tag.tag(11, PremiumMarketingComponentProperties$Type(closure_1[23]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("billingSettingsNitroGiftBanner" === properties.properties.oneofKind) {
        const BillingSettingsNitroGiftBanner = PremiumMarketingComponentProperties$Type(closure_1[15]).BillingSettingsNitroGiftBanner;
        const tagResult10 = tag.tag(12, PremiumMarketingComponentProperties$Type(closure_1[23]).WireType.LengthDelimited);
        const joined9 = BillingSettingsNitroGiftBanner.internalBinaryWrite(properties.properties.billingSettingsNitroGiftBanner, tag.tag(12, PremiumMarketingComponentProperties$Type(closure_1[23]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult9 = BillingSettingsNitroGiftBanner.internalBinaryWrite(properties.properties.billingSettingsNitroGiftBanner, tag.tag(12, PremiumMarketingComponentProperties$Type(closure_1[23]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("giftReminderNagbar" === properties.properties.oneofKind) {
        const GiftReminderNagbar = PremiumMarketingComponentProperties$Type(closure_1[16]).GiftReminderNagbar;
        const tagResult11 = tag.tag(13, PremiumMarketingComponentProperties$Type(closure_1[23]).WireType.LengthDelimited);
        const joined10 = GiftReminderNagbar.internalBinaryWrite(properties.properties.giftReminderNagbar, tag.tag(13, PremiumMarketingComponentProperties$Type(closure_1[23]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult10 = GiftReminderNagbar.internalBinaryWrite(properties.properties.giftReminderNagbar, tag.tag(13, PremiumMarketingComponentProperties$Type(closure_1[23]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("giftReminderCoachmark" === properties.properties.oneofKind) {
        const GiftReminderCoachmark = PremiumMarketingComponentProperties$Type(closure_1[17]).GiftReminderCoachmark;
        const tagResult12 = tag.tag(14, PremiumMarketingComponentProperties$Type(closure_1[23]).WireType.LengthDelimited);
        const joined11 = GiftReminderCoachmark.internalBinaryWrite(properties.properties.giftReminderCoachmark, tag.tag(14, PremiumMarketingComponentProperties$Type(closure_1[23]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult11 = GiftReminderCoachmark.internalBinaryWrite(properties.properties.giftReminderCoachmark, tag.tag(14, PremiumMarketingComponentProperties$Type(closure_1[23]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("premiumTabTooltip" === properties.properties.oneofKind) {
        const PremiumTabTooltip = PremiumMarketingComponentProperties$Type(closure_1[18]).PremiumTabTooltip;
        const tagResult13 = tag.tag(15, PremiumMarketingComponentProperties$Type(closure_1[23]).WireType.LengthDelimited);
        const joined12 = PremiumTabTooltip.internalBinaryWrite(properties.properties.premiumTabTooltip, tag.tag(15, PremiumMarketingComponentProperties$Type(closure_1[23]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult12 = PremiumTabTooltip.internalBinaryWrite(properties.properties.premiumTabTooltip, tag.tag(15, PremiumMarketingComponentProperties$Type(closure_1[23]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("premiumTabPopover" === properties.properties.oneofKind) {
        const PremiumTabPopover = PremiumMarketingComponentProperties$Type(closure_1[19]).PremiumTabPopover;
        const tagResult14 = tag.tag(16, PremiumMarketingComponentProperties$Type(closure_1[23]).WireType.LengthDelimited);
        const joined13 = PremiumTabPopover.internalBinaryWrite(properties.properties.premiumTabPopover, tag.tag(16, PremiumMarketingComponentProperties$Type(closure_1[23]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult13 = PremiumTabPopover.internalBinaryWrite(properties.properties.premiumTabPopover, tag.tag(16, PremiumMarketingComponentProperties$Type(closure_1[23]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("nagbar" === properties.properties.oneofKind) {
        const Nagbar = PremiumMarketingComponentProperties$Type(closure_1[20]).Nagbar;
        const tagResult15 = tag.tag(17, PremiumMarketingComponentProperties$Type(closure_1[23]).WireType.LengthDelimited);
        const joined14 = Nagbar.internalBinaryWrite(properties.properties.nagbar, tag.tag(17, PremiumMarketingComponentProperties$Type(closure_1[23]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult14 = Nagbar.internalBinaryWrite(properties.properties.nagbar, tag.tag(17, PremiumMarketingComponentProperties$Type(closure_1[23]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("planSelectCardBanner" === properties.properties.oneofKind) {
        const PlanSelectCardBanner = PremiumMarketingComponentProperties$Type(closure_1[21]).PlanSelectCardBanner;
        const tagResult16 = tag.tag(19, PremiumMarketingComponentProperties$Type(closure_1[23]).WireType.LengthDelimited);
        const joined15 = PlanSelectCardBanner.internalBinaryWrite(properties.properties.planSelectCardBanner, tag.tag(19, PremiumMarketingComponentProperties$Type(closure_1[23]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult15 = PlanSelectCardBanner.internalBinaryWrite(properties.properties.planSelectCardBanner, tag.tag(19, PremiumMarketingComponentProperties$Type(closure_1[23]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("billingSettingsBanner" === properties.properties.oneofKind) {
        const BillingSettingsBanner = PremiumMarketingComponentProperties$Type(closure_1[22]).BillingSettingsBanner;
        const tagResult17 = tag.tag(20, PremiumMarketingComponentProperties$Type(closure_1[23]).WireType.LengthDelimited);
        const joined16 = BillingSettingsBanner.internalBinaryWrite(properties.properties.billingSettingsBanner, tag.tag(20, PremiumMarketingComponentProperties$Type(closure_1[23]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult16 = BillingSettingsBanner.internalBinaryWrite(properties.properties.billingSettingsBanner, tag.tag(20, PremiumMarketingComponentProperties$Type(closure_1[23]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("" !== properties.contentIdentifier) {
        tag.tag(3, PremiumMarketingComponentProperties$Type(closure_1[23]).WireType.LengthDelimited).string(properties.contentIdentifier);
        const tagResult18 = tag.tag(3, PremiumMarketingComponentProperties$Type(closure_1[23]).WireType.LengthDelimited);
      }
      if (false !== properties.isDefaultBase) {
        tag.tag(18, PremiumMarketingComponentProperties$Type(closure_1[23]).WireType.Varint).bool(properties.isDefaultBase);
        const tagResult19 = tag.tag(18, PremiumMarketingComponentProperties$Type(closure_1[23]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = PremiumMarketingComponentProperties$Type(closure_1[23]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, properties, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(PremiumMarketingComponentProperties$Type, items);
}(arg1(dependencyMap[23]).MessageType);
tmp2 = new tmp2();
const result = arg1(dependencyMap[24]).fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/premium_marketing_component_properties.tsx");

export const PremiumMarketingComponentProperties = tmp2;
