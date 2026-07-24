// Module ID: 7133
// Function ID: 57388
// Name: _isNativeReflectConstruct
// Dependencies: [57, 6, 7, 15, 17, 18, 7134, 7137, 7138, 7139, 7140, 7141, 7143, 7145, 7146, 7147, 7148, 7149, 7150, 7151, 7152, 7153, 7154, 7155, 1284, 2]

// Module 7133 (_isNativeReflectConstruct)
import _slicedToArray from "_slicedToArray";
import _callSuper from "_callSuper";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";

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
  class PremiumMarketingComponentProperties$Type {
    constructor() {
      self = this;
      tmp = outer1_3(this, PremiumMarketingComponentProperties$Type);
      items = [, , , , , , , , , , , , , , , , , , , , ];
      items[0] = { no: 1, name: "placeholder", kind: "scalar", oneof: "properties", T: 9 };
      obj = { no: 2, name: "announcement_modal_variant_1", kind: "message", oneof: "properties" };
      obj.T = function T() {
        return PremiumMarketingComponentProperties$Type(outer2_1[6]).AnnouncementModalVariant1Properties;
      };
      items[1] = obj;
      obj = { no: 4, name: "premium_tab", kind: "message", oneof: "properties" };
      obj.T = function T() {
        return PremiumMarketingComponentProperties$Type(outer2_1[7]).PremiumTab;
      };
      items[2] = obj;
      obj1 = { no: 5, name: "marketing_page_banner", kind: "message", oneof: "properties" };
      obj1.T = function T() {
        return PremiumMarketingComponentProperties$Type(outer2_1[8]).MarketingPageBanner;
      };
      items[3] = obj1;
      obj2 = { no: 6, name: "payment_modal_banner", kind: "message", oneof: "properties" };
      obj2.T = function T() {
        return PremiumMarketingComponentProperties$Type(outer2_1[9]).PaymentModalBanner;
      };
      items[4] = obj2;
      obj3 = { no: 7, name: "mobile_bottom_sheet", kind: "message", oneof: "properties" };
      obj3.T = function T() {
        return PremiumMarketingComponentProperties$Type(outer2_1[10]).MobileBottomSheet;
      };
      items[5] = obj3;
      obj4 = { no: 8, name: "gift_icon", kind: "message", oneof: "properties" };
      obj4.T = function T() {
        return PremiumMarketingComponentProperties$Type(outer2_1[11]).GiftIcon;
      };
      items[6] = obj4;
      obj5 = { no: 9, name: "gift_icon_coachmark", kind: "message", oneof: "properties" };
      obj5.T = function T() {
        return PremiumMarketingComponentProperties$Type(outer2_1[12]).GiftIconCoachmark;
      };
      items[7] = obj5;
      obj6 = { no: 10, name: "gift_plan_selection_card_banner", kind: "message", oneof: "properties" };
      obj6.T = function T() {
        return PremiumMarketingComponentProperties$Type(outer2_1[13]).GiftPlanSelectionCardBanner;
      };
      items[8] = obj6;
      obj7 = { no: 11, name: "gift_customization_banner", kind: "message", oneof: "properties" };
      obj7.T = function T() {
        return PremiumMarketingComponentProperties$Type(outer2_1[14]).GiftCustomizationBanner;
      };
      items[9] = obj7;
      obj8 = { no: 12, name: "billing_settings_nitro_gift_banner", kind: "message", oneof: "properties" };
      obj8.T = function T() {
        return PremiumMarketingComponentProperties$Type(outer2_1[15]).BillingSettingsNitroGiftBanner;
      };
      items[10] = obj8;
      obj9 = { no: 13, name: "gift_reminder_nagbar", kind: "message", oneof: "properties" };
      obj9.T = function T() {
        return PremiumMarketingComponentProperties$Type(outer2_1[16]).GiftReminderNagbar;
      };
      items[11] = obj9;
      obj10 = { no: 14, name: "gift_reminder_coachmark", kind: "message", oneof: "properties" };
      obj10.T = function T() {
        return PremiumMarketingComponentProperties$Type(outer2_1[17]).GiftReminderCoachmark;
      };
      items[12] = obj10;
      obj11 = { no: 15, name: "premium_tab_tooltip", kind: "message", oneof: "properties" };
      obj11.T = function T() {
        return PremiumMarketingComponentProperties$Type(outer2_1[18]).PremiumTabTooltip;
      };
      items[13] = obj11;
      obj12 = { no: 16, name: "premium_tab_popover", kind: "message", oneof: "properties" };
      obj12.T = function T() {
        return PremiumMarketingComponentProperties$Type(outer2_1[19]).PremiumTabPopover;
      };
      items[14] = obj12;
      obj13 = { no: 17, name: "nagbar", kind: "message", oneof: "properties" };
      obj13.T = function T() {
        return PremiumMarketingComponentProperties$Type(outer2_1[20]).Nagbar;
      };
      items[15] = obj13;
      obj14 = { no: 19, name: "plan_select_card_banner", kind: "message", oneof: "properties" };
      obj14.T = function T() {
        return PremiumMarketingComponentProperties$Type(outer2_1[21]).PlanSelectCardBanner;
      };
      items[16] = obj14;
      obj15 = { no: 20, name: "billing_settings_banner", kind: "message", oneof: "properties" };
      obj15.T = function T() {
        return PremiumMarketingComponentProperties$Type(outer2_1[22]).BillingSettingsBanner;
      };
      items[17] = obj15;
      obj16 = { no: 21, name: "shop_nagbar", kind: "message", oneof: "properties" };
      obj16.T = function T() {
        return PremiumMarketingComponentProperties$Type(outer2_1[23]).ShopNagbar;
      };
      items[18] = obj16;
      items[19] = { no: 3, name: "content_identifier", kind: "scalar", T: 9 };
      items[20] = { no: 18, name: "is_default_base", kind: "scalar", T: 8 };
      items1 = ["discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties"];
      items1[1] = items;
      obj19 = outer1_6(PremiumMarketingComponentProperties$Type);
      tmp2 = outer1_5;
      if (outer1_8()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_6;
        constructResult = Reflect.construct(obj19, items1, outer1_6(self).constructor);
      } else {
        constructResult = obj19.apply(self, items1);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(PremiumMarketingComponentProperties$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { properties: { oneofKind: undefined }, contentIdentifier: "", isDefaultBase: false };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, PremiumMarketingComponentProperties$Type(outer1_1[24]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = PremiumMarketingComponentProperties$Type(outer1_1[24]).reflectionMergePartial(this, obj, arr);
        const obj3 = PremiumMarketingComponentProperties$Type(outer1_1[24]);
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
        obj.isDefaultBase = pos.bool();
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
    value(properties, tag, writeUnknownFields) {
      if ("placeholder" === properties.properties.oneofKind) {
        tag.tag(1, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.LengthDelimited).string(properties.properties.placeholder);
        const tagResult = tag.tag(1, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.LengthDelimited);
      }
      if ("announcementModalVariant1" === properties.properties.oneofKind) {
        const AnnouncementModalVariant1Properties = PremiumMarketingComponentProperties$Type(outer1_1[6]).AnnouncementModalVariant1Properties;
        const tagResult1 = tag.tag(2, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.LengthDelimited);
        const joined = AnnouncementModalVariant1Properties.internalBinaryWrite(properties.properties.announcementModalVariant1, tag.tag(2, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = AnnouncementModalVariant1Properties.internalBinaryWrite(properties.properties.announcementModalVariant1, tag.tag(2, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("premiumTab" === properties.properties.oneofKind) {
        const PremiumTab = PremiumMarketingComponentProperties$Type(outer1_1[7]).PremiumTab;
        const tagResult2 = tag.tag(4, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.LengthDelimited);
        const joined1 = PremiumTab.internalBinaryWrite(properties.properties.premiumTab, tag.tag(4, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = PremiumTab.internalBinaryWrite(properties.properties.premiumTab, tag.tag(4, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("marketingPageBanner" === properties.properties.oneofKind) {
        const MarketingPageBanner = PremiumMarketingComponentProperties$Type(outer1_1[8]).MarketingPageBanner;
        const tagResult3 = tag.tag(5, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.LengthDelimited);
        const joined2 = MarketingPageBanner.internalBinaryWrite(properties.properties.marketingPageBanner, tag.tag(5, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = MarketingPageBanner.internalBinaryWrite(properties.properties.marketingPageBanner, tag.tag(5, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("paymentModalBanner" === properties.properties.oneofKind) {
        const PaymentModalBanner = PremiumMarketingComponentProperties$Type(outer1_1[9]).PaymentModalBanner;
        const tagResult4 = tag.tag(6, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.LengthDelimited);
        const joined3 = PaymentModalBanner.internalBinaryWrite(properties.properties.paymentModalBanner, tag.tag(6, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult3 = PaymentModalBanner.internalBinaryWrite(properties.properties.paymentModalBanner, tag.tag(6, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("mobileBottomSheet" === properties.properties.oneofKind) {
        const MobileBottomSheet = PremiumMarketingComponentProperties$Type(outer1_1[10]).MobileBottomSheet;
        const tagResult5 = tag.tag(7, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.LengthDelimited);
        const joined4 = MobileBottomSheet.internalBinaryWrite(properties.properties.mobileBottomSheet, tag.tag(7, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult4 = MobileBottomSheet.internalBinaryWrite(properties.properties.mobileBottomSheet, tag.tag(7, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("giftIcon" === properties.properties.oneofKind) {
        const GiftIcon = PremiumMarketingComponentProperties$Type(outer1_1[11]).GiftIcon;
        const tagResult6 = tag.tag(8, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.LengthDelimited);
        const joined5 = GiftIcon.internalBinaryWrite(properties.properties.giftIcon, tag.tag(8, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult5 = GiftIcon.internalBinaryWrite(properties.properties.giftIcon, tag.tag(8, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("giftIconCoachmark" === properties.properties.oneofKind) {
        const GiftIconCoachmark = PremiumMarketingComponentProperties$Type(outer1_1[12]).GiftIconCoachmark;
        const tagResult7 = tag.tag(9, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.LengthDelimited);
        const joined6 = GiftIconCoachmark.internalBinaryWrite(properties.properties.giftIconCoachmark, tag.tag(9, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult6 = GiftIconCoachmark.internalBinaryWrite(properties.properties.giftIconCoachmark, tag.tag(9, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("giftPlanSelectionCardBanner" === properties.properties.oneofKind) {
        const GiftPlanSelectionCardBanner = PremiumMarketingComponentProperties$Type(outer1_1[13]).GiftPlanSelectionCardBanner;
        const tagResult8 = tag.tag(10, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.LengthDelimited);
        const joined7 = GiftPlanSelectionCardBanner.internalBinaryWrite(properties.properties.giftPlanSelectionCardBanner, tag.tag(10, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult7 = GiftPlanSelectionCardBanner.internalBinaryWrite(properties.properties.giftPlanSelectionCardBanner, tag.tag(10, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("giftCustomizationBanner" === properties.properties.oneofKind) {
        const GiftCustomizationBanner = PremiumMarketingComponentProperties$Type(outer1_1[14]).GiftCustomizationBanner;
        const tagResult9 = tag.tag(11, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.LengthDelimited);
        const joined8 = GiftCustomizationBanner.internalBinaryWrite(properties.properties.giftCustomizationBanner, tag.tag(11, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult8 = GiftCustomizationBanner.internalBinaryWrite(properties.properties.giftCustomizationBanner, tag.tag(11, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("billingSettingsNitroGiftBanner" === properties.properties.oneofKind) {
        const BillingSettingsNitroGiftBanner = PremiumMarketingComponentProperties$Type(outer1_1[15]).BillingSettingsNitroGiftBanner;
        const tagResult10 = tag.tag(12, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.LengthDelimited);
        const joined9 = BillingSettingsNitroGiftBanner.internalBinaryWrite(properties.properties.billingSettingsNitroGiftBanner, tag.tag(12, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult9 = BillingSettingsNitroGiftBanner.internalBinaryWrite(properties.properties.billingSettingsNitroGiftBanner, tag.tag(12, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("giftReminderNagbar" === properties.properties.oneofKind) {
        const GiftReminderNagbar = PremiumMarketingComponentProperties$Type(outer1_1[16]).GiftReminderNagbar;
        const tagResult11 = tag.tag(13, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.LengthDelimited);
        const joined10 = GiftReminderNagbar.internalBinaryWrite(properties.properties.giftReminderNagbar, tag.tag(13, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult10 = GiftReminderNagbar.internalBinaryWrite(properties.properties.giftReminderNagbar, tag.tag(13, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("giftReminderCoachmark" === properties.properties.oneofKind) {
        const GiftReminderCoachmark = PremiumMarketingComponentProperties$Type(outer1_1[17]).GiftReminderCoachmark;
        const tagResult12 = tag.tag(14, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.LengthDelimited);
        const joined11 = GiftReminderCoachmark.internalBinaryWrite(properties.properties.giftReminderCoachmark, tag.tag(14, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult11 = GiftReminderCoachmark.internalBinaryWrite(properties.properties.giftReminderCoachmark, tag.tag(14, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("premiumTabTooltip" === properties.properties.oneofKind) {
        const PremiumTabTooltip = PremiumMarketingComponentProperties$Type(outer1_1[18]).PremiumTabTooltip;
        const tagResult13 = tag.tag(15, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.LengthDelimited);
        const joined12 = PremiumTabTooltip.internalBinaryWrite(properties.properties.premiumTabTooltip, tag.tag(15, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult12 = PremiumTabTooltip.internalBinaryWrite(properties.properties.premiumTabTooltip, tag.tag(15, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("premiumTabPopover" === properties.properties.oneofKind) {
        const PremiumTabPopover = PremiumMarketingComponentProperties$Type(outer1_1[19]).PremiumTabPopover;
        const tagResult14 = tag.tag(16, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.LengthDelimited);
        const joined13 = PremiumTabPopover.internalBinaryWrite(properties.properties.premiumTabPopover, tag.tag(16, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult13 = PremiumTabPopover.internalBinaryWrite(properties.properties.premiumTabPopover, tag.tag(16, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("nagbar" === properties.properties.oneofKind) {
        const Nagbar = PremiumMarketingComponentProperties$Type(outer1_1[20]).Nagbar;
        const tagResult15 = tag.tag(17, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.LengthDelimited);
        const joined14 = Nagbar.internalBinaryWrite(properties.properties.nagbar, tag.tag(17, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult14 = Nagbar.internalBinaryWrite(properties.properties.nagbar, tag.tag(17, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("planSelectCardBanner" === properties.properties.oneofKind) {
        const PlanSelectCardBanner = PremiumMarketingComponentProperties$Type(outer1_1[21]).PlanSelectCardBanner;
        const tagResult16 = tag.tag(19, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.LengthDelimited);
        const joined15 = PlanSelectCardBanner.internalBinaryWrite(properties.properties.planSelectCardBanner, tag.tag(19, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult15 = PlanSelectCardBanner.internalBinaryWrite(properties.properties.planSelectCardBanner, tag.tag(19, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("billingSettingsBanner" === properties.properties.oneofKind) {
        const BillingSettingsBanner = PremiumMarketingComponentProperties$Type(outer1_1[22]).BillingSettingsBanner;
        const tagResult17 = tag.tag(20, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.LengthDelimited);
        const joined16 = BillingSettingsBanner.internalBinaryWrite(properties.properties.billingSettingsBanner, tag.tag(20, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult16 = BillingSettingsBanner.internalBinaryWrite(properties.properties.billingSettingsBanner, tag.tag(20, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("shopNagbar" === properties.properties.oneofKind) {
        const ShopNagbar = PremiumMarketingComponentProperties$Type(outer1_1[23]).ShopNagbar;
        const tagResult18 = tag.tag(21, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.LengthDelimited);
        const joined17 = ShopNagbar.internalBinaryWrite(properties.properties.shopNagbar, tag.tag(21, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult17 = ShopNagbar.internalBinaryWrite(properties.properties.shopNagbar, tag.tag(21, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("" !== properties.contentIdentifier) {
        tag.tag(3, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.LengthDelimited).string(properties.contentIdentifier);
        const tagResult19 = tag.tag(3, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.LengthDelimited);
      }
      if (false !== properties.isDefaultBase) {
        tag.tag(18, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.Varint).bool(properties.isDefaultBase);
        const tagResult20 = tag.tag(18, PremiumMarketingComponentProperties$Type(outer1_1[24]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = PremiumMarketingComponentProperties$Type(outer1_1[24]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, properties, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(PremiumMarketingComponentProperties$Type, items);
})(require("module_1284").MessageType);
tmp2 = new tmp2();
let result = require("_defineProperties").fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/premium_marketing_component_properties.tsx");

export const PremiumMarketingComponentProperties = tmp2;
