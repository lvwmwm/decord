// Module ID: 9522
// Function ID: 9523
// Name: premium_marketing_component_properties
// Dependencies: [32, 1209, 9523, 9527, 9528, 9529, 9530, 9531, 9533, 9535, 9536, 9537, 9538, 9539, 9540, 9541, 9542, 9543, 9544, 9545, 9546, 9547, 9548, 9549, 9550, 9551, 9552, 9553, 9554, 9555, 9556, 2]

// Module 9522 (premium_marketing_component_properties)
import _mod1209 from "module_1209" /* 1209 */;
import announcement_modal_variant_1_properties from "announcement_modal_variant_1_properties" /* 9523 */;
import premium_tab from "premium_tab" /* 9527 */;
import marketing_page_banner from "marketing_page_banner" /* 9528 */;
import payment_modal_banner from "payment_modal_banner" /* 9529 */;
import mobile_bottom_sheet from "mobile_bottom_sheet" /* 9530 */;
import gift_icon from "gift_icon" /* 9531 */;
import gift_icon_coachmark from "gift_icon_coachmark" /* 9533 */;
import gift_plan_selection_card_banner from "gift_plan_selection_card_banner" /* 9535 */;
import gift_customization_banner from "gift_customization_banner" /* 9536 */;
import billing_settings_nitro_gift_banner from "billing_settings_nitro_gift_banner" /* 9537 */;
import gift_reminder_nagbar from "gift_reminder_nagbar" /* 9538 */;
import gift_reminder_coachmark from "gift_reminder_coachmark" /* 9539 */;
import premium_tab_tooltip from "premium_tab_tooltip" /* 9540 */;
import premium_tab_popover from "premium_tab_popover" /* 9541 */;
import nagbar2 from "nagbar" /* 9542 */;
import plan_select_card_banner from "plan_select_card_banner" /* 9543 */;
import billing_settings_banner from "billing_settings_banner" /* 9544 */;
import shop_nagbar from "shop_nagbar" /* 9545 */;
import admin_editor_test_component from "admin_editor_test_component" /* 9546 */;
import guild_header_coachmark from "guild_header_coachmark" /* 9547 */;
import guild_boost_checkout_banner from "guild_boost_checkout_banner" /* 9548 */;
import guild_boost_marketing_page_banner from "guild_boost_marketing_page_banner" /* 9549 */;
import guild_boost_tab_banner from "guild_boost_tab_banner" /* 9550 */;
import shop_tab_tooltip from "shop_tab_tooltip" /* 9551 */;
import premium_home_perk_card from "premium_home_perk_card" /* 9552 */;
import marketing_page_bento_box from "marketing_page_bento_box" /* 9553 */;
import outbound_promotion_popover from "outbound_promotion_popover" /* 9554 */;
import outbound_promotion_claim_modal_card from "outbound_promotion_claim_modal_card" /* 9555 */;
import shop_coachmark from "shop_coachmark" /* 9556 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let internalBinaryWrite, internalBinaryWrite10, internalBinaryWrite2, internalBinaryWrite3, internalBinaryWrite4, internalBinaryWrite5, internalBinaryWrite6, internalBinaryWrite7, internalBinaryWrite8, internalBinaryWrite9;

const MessageType = _mod1209.MessageType;
class PremiumMarketingComponentProperties$Type extends MessageType {
  constructor() {
    const items = [
      { no: 1, name: "placeholder", kind: "scalar", oneof: "properties", T: 9 },
      {
        no: 2,
        name: "announcement_modal_variant_1",
        kind: "message",
        oneof: "properties",
        T() {
          return require("announcement_modal_variant_1_properties").AnnouncementModalVariant1Properties;
        }
      },
      {
        no: 4,
        name: "premium_tab",
        kind: "message",
        oneof: "properties",
        T() {
          return require("premium_tab").PremiumTab;
        }
      },
      {
        no: 5,
        name: "marketing_page_banner",
        kind: "message",
        oneof: "properties",
        T() {
          return require("marketing_page_banner").MarketingPageBanner;
        }
      },
      {
        no: 6,
        name: "payment_modal_banner",
        kind: "message",
        oneof: "properties",
        T() {
          return require("payment_modal_banner").PaymentModalBanner;
        }
      },
      {
        no: 7,
        name: "mobile_bottom_sheet",
        kind: "message",
        oneof: "properties",
        T() {
          return require("mobile_bottom_sheet").MobileBottomSheet;
        }
      },
      {
        no: 8,
        name: "gift_icon",
        kind: "message",
        oneof: "properties",
        T() {
          return require("gift_icon").GiftIcon;
        }
      },
      {
        no: 9,
        name: "gift_icon_coachmark",
        kind: "message",
        oneof: "properties",
        T() {
          return require("gift_icon_coachmark").GiftIconCoachmark;
        }
      },
      {
        no: 10,
        name: "gift_plan_selection_card_banner",
        kind: "message",
        oneof: "properties",
        T() {
          return require("gift_plan_selection_card_banner").GiftPlanSelectionCardBanner;
        }
      },
      {
        no: 11,
        name: "gift_customization_banner",
        kind: "message",
        oneof: "properties",
        T() {
          return require("gift_customization_banner").GiftCustomizationBanner;
        }
      },
      {
        no: 12,
        name: "billing_settings_nitro_gift_banner",
        kind: "message",
        oneof: "properties",
        T() {
          return require("billing_settings_nitro_gift_banner").BillingSettingsNitroGiftBanner;
        }
      },
      {
        no: 13,
        name: "gift_reminder_nagbar",
        kind: "message",
        oneof: "properties",
        T() {
          return require("gift_reminder_nagbar").GiftReminderNagbar;
        }
      },
      {
        no: 14,
        name: "gift_reminder_coachmark",
        kind: "message",
        oneof: "properties",
        T() {
          return require("gift_reminder_coachmark").GiftReminderCoachmark;
        }
      },
      {
        no: 15,
        name: "premium_tab_tooltip",
        kind: "message",
        oneof: "properties",
        T() {
          return require("premium_tab_tooltip").PremiumTabTooltip;
        }
      },
      {
        no: 16,
        name: "premium_tab_popover",
        kind: "message",
        oneof: "properties",
        T() {
          return require("premium_tab_popover").PremiumTabPopover;
        }
      },
      {
        no: 17,
        name: "nagbar",
        kind: "message",
        oneof: "properties",
        T() {
          return require("nagbar").Nagbar;
        }
      },
      {
        no: 19,
        name: "plan_select_card_banner",
        kind: "message",
        oneof: "properties",
        T() {
          return require("plan_select_card_banner").PlanSelectCardBanner;
        }
      },
      {
        no: 20,
        name: "billing_settings_banner",
        kind: "message",
        oneof: "properties",
        T() {
          return require("billing_settings_banner").BillingSettingsBanner;
        }
      },
      {
        no: 21,
        name: "shop_nagbar",
        kind: "message",
        oneof: "properties",
        T() {
          return require("shop_nagbar").ShopNagbar;
        }
      },
      {
        no: 22,
        name: "admin_editor_test_component",
        kind: "message",
        oneof: "properties",
        T() {
          return require("admin_editor_test_component").AdminEditorTestComponent;
        }
      },
      {
        no: 23,
        name: "guild_header_coachmark",
        kind: "message",
        oneof: "properties",
        T() {
          return require("guild_header_coachmark").GuildHeaderCoachmark;
        }
      },
      {
        no: 24,
        name: "guild_boost_checkout_banner",
        kind: "message",
        oneof: "properties",
        T() {
          return require("guild_boost_checkout_banner").GuildBoostCheckoutBanner;
        }
      },
      {
        no: 25,
        name: "guild_boost_marketing_page_banner",
        kind: "message",
        oneof: "properties",
        T() {
          return require("guild_boost_marketing_page_banner").GuildBoostMarketingPageBanner;
        }
      },
      {
        no: 26,
        name: "guild_boost_tab_banner",
        kind: "message",
        oneof: "properties",
        T() {
          return require("guild_boost_tab_banner").GuildBoostTabBanner;
        }
      },
      {
        no: 27,
        name: "shop_tab_tooltip",
        kind: "message",
        oneof: "properties",
        T() {
          return require("shop_tab_tooltip").ShopTabTooltip;
        }
      },
      {
        no: 28,
        name: "premium_home_rewards_perk_card",
        kind: "message",
        oneof: "properties",
        T() {
          return require("premium_home_perk_card").PremiumHomePerkCard;
        }
      },
      {
        no: 29,
        name: "marketing_page_rewards_bento_box",
        kind: "message",
        oneof: "properties",
        T() {
          return require("marketing_page_bento_box").MarketingPageBentoBox;
        }
      },
      {
        no: 30,
        name: "outbound_promotion_popover",
        kind: "message",
        oneof: "properties",
        T() {
          return require("outbound_promotion_popover").OutboundPromotionPopover;
        }
      },
    ,
    ,
    ,

    ];
    const obj = { no: 31, name: "outbound_promotion_claim_modal_card", kind: "message", oneof: "properties", T };
    class T {
      constructor() {
        return require("outbound_promotion_claim_modal_card").OutboundPromotionClaimModalCard;
      }
    }
    items[28] = obj;
    items[29] = {
      no: 32,
      name: "shop_coachmark",
      kind: "message",
      oneof: "properties",
      T() {
        return require("shop_coachmark").ShopCoachmark;
      }
    };
    items[30] = { no: 3, name: "content_identifier", kind: "scalar", T: 9 };
    items[31] = { no: 18, name: "is_default_base", kind: "scalar", T: 8 };
    const tmp2 = new tmp("discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties", items, T);
    return tmp2;
  }
  create(partialSettings) {
    const obj = { properties: { oneofKind: "rejectWithError" }, contentIdentifier: "", isDefaultBase: false };
    const _Object = Object;
    const obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1209.MESSAGE_TYPE, obj2);
    if (undefined !== partialSettings) {
      const tmpResult = _mod1209;
      const result = tmpResult.reflectionMergePartial(this, obj, partialSettings);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, arg2, arg3) {
    const self = this;
    let obj = arg3;
    if (arg3 == null) {
      obj = self.create();
    }
    if (pos.pos < pos.pos + arg1) {
      [r10019, r10020] = pos.tag();
      _slicedToArray(pos.tag(), 2);
    }
    return obj;
  }
  internalBinaryWrite(properties, tag, writeUnknownFields) {
    if ("placeholder" === properties.properties.oneofKind) {
      const tagResult = tag.tag(1, _mod1209.WireType.LengthDelimited);
      tagResult.string(properties.properties.placeholder);
    }
    if ("announcementModalVariant1" === properties.properties.oneofKind) {
      const AnnouncementModalVariant1Properties = announcement_modal_variant_1_properties.AnnouncementModalVariant1Properties;
      internalBinaryWrite = AnnouncementModalVariant1Properties.internalBinaryWrite;
      const announcementModalVariant1 = properties.properties.announcementModalVariant1;
      const tagResult1 = tag.tag(2, _mod1209.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(announcementModalVariant1, tagResult1.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if ("premiumTab" === properties.properties.oneofKind) {
      const PremiumTab = premium_tab.PremiumTab;
      internalBinaryWrite2 = PremiumTab.internalBinaryWrite;
      const premiumTab = properties.properties.premiumTab;
      const tagResult2 = tag.tag(4, _mod1209.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(premiumTab, tagResult2.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    if ("marketingPageBanner" === properties.properties.oneofKind) {
      const MarketingPageBanner = marketing_page_banner.MarketingPageBanner;
      internalBinaryWrite3 = MarketingPageBanner.internalBinaryWrite;
      const marketingPageBanner = properties.properties.marketingPageBanner;
      const tagResult3 = tag.tag(5, _mod1209.WireType.LengthDelimited);
      const internalBinaryWrite3Result = internalBinaryWrite3(marketingPageBanner, tagResult3.fork(), writeUnknownFields);
      const joined2 = internalBinaryWrite3Result.join();
    }
    if ("paymentModalBanner" === properties.properties.oneofKind) {
      const PaymentModalBanner = payment_modal_banner.PaymentModalBanner;
      internalBinaryWrite4 = PaymentModalBanner.internalBinaryWrite;
      const paymentModalBanner = properties.properties.paymentModalBanner;
      const tagResult4 = tag.tag(6, _mod1209.WireType.LengthDelimited);
      const internalBinaryWrite4Result = internalBinaryWrite4(paymentModalBanner, tagResult4.fork(), writeUnknownFields);
      const joined3 = internalBinaryWrite4Result.join();
    }
    if ("mobileBottomSheet" === properties.properties.oneofKind) {
      const MobileBottomSheet = mobile_bottom_sheet.MobileBottomSheet;
      internalBinaryWrite5 = MobileBottomSheet.internalBinaryWrite;
      const mobileBottomSheet = properties.properties.mobileBottomSheet;
      const tagResult5 = tag.tag(7, _mod1209.WireType.LengthDelimited);
      const internalBinaryWrite5Result = internalBinaryWrite5(mobileBottomSheet, tagResult5.fork(), writeUnknownFields);
      const joined4 = internalBinaryWrite5Result.join();
    }
    if ("giftIcon" === properties.properties.oneofKind) {
      const GiftIcon = gift_icon.GiftIcon;
      internalBinaryWrite6 = GiftIcon.internalBinaryWrite;
      const giftIcon = properties.properties.giftIcon;
      const tagResult6 = tag.tag(8, _mod1209.WireType.LengthDelimited);
      const internalBinaryWrite6Result = internalBinaryWrite6(giftIcon, tagResult6.fork(), writeUnknownFields);
      const joined5 = internalBinaryWrite6Result.join();
    }
    if ("giftIconCoachmark" === properties.properties.oneofKind) {
      const GiftIconCoachmark = gift_icon_coachmark.GiftIconCoachmark;
      internalBinaryWrite7 = GiftIconCoachmark.internalBinaryWrite;
      const giftIconCoachmark = properties.properties.giftIconCoachmark;
      const tagResult7 = tag.tag(9, _mod1209.WireType.LengthDelimited);
      const internalBinaryWrite7Result = internalBinaryWrite7(giftIconCoachmark, tagResult7.fork(), writeUnknownFields);
      const joined6 = internalBinaryWrite7Result.join();
    }
    if ("giftPlanSelectionCardBanner" === properties.properties.oneofKind) {
      const GiftPlanSelectionCardBanner = gift_plan_selection_card_banner.GiftPlanSelectionCardBanner;
      internalBinaryWrite8 = GiftPlanSelectionCardBanner.internalBinaryWrite;
      const giftPlanSelectionCardBanner = properties.properties.giftPlanSelectionCardBanner;
      const tagResult8 = tag.tag(10, _mod1209.WireType.LengthDelimited);
      const internalBinaryWrite8Result = internalBinaryWrite8(giftPlanSelectionCardBanner, tagResult8.fork(), writeUnknownFields);
      const joined7 = internalBinaryWrite8Result.join();
    }
    if ("giftCustomizationBanner" === properties.properties.oneofKind) {
      const GiftCustomizationBanner = gift_customization_banner.GiftCustomizationBanner;
      internalBinaryWrite9 = GiftCustomizationBanner.internalBinaryWrite;
      const giftCustomizationBanner = properties.properties.giftCustomizationBanner;
      const tagResult9 = tag.tag(11, _mod1209.WireType.LengthDelimited);
      const internalBinaryWrite9Result = internalBinaryWrite9(giftCustomizationBanner, tagResult9.fork(), writeUnknownFields);
      const joined8 = internalBinaryWrite9Result.join();
    }
    if ("billingSettingsNitroGiftBanner" === properties.properties.oneofKind) {
      const BillingSettingsNitroGiftBanner = billing_settings_nitro_gift_banner.BillingSettingsNitroGiftBanner;
      internalBinaryWrite10 = BillingSettingsNitroGiftBanner.internalBinaryWrite;
      const billingSettingsNitroGiftBanner = properties.properties.billingSettingsNitroGiftBanner;
      const tagResult10 = tag.tag(12, _mod1209.WireType.LengthDelimited);
      const result = internalBinaryWrite10(billingSettingsNitroGiftBanner, tagResult10.fork(), writeUnknownFields);
      const joined9 = result.join();
    }
    if ("giftReminderNagbar" === properties.properties.oneofKind) {
      const GiftReminderNagbar = gift_reminder_nagbar.GiftReminderNagbar;
      const internalBinaryWrite11 = GiftReminderNagbar.internalBinaryWrite;
      const giftReminderNagbar = properties.properties.giftReminderNagbar;
      const tagResult11 = tag.tag(13, _mod1209.WireType.LengthDelimited);
      const result1 = internalBinaryWrite11(giftReminderNagbar, tagResult11.fork(), writeUnknownFields);
      const joined10 = result1.join();
    }
    if ("giftReminderCoachmark" === properties.properties.oneofKind) {
      const GiftReminderCoachmark = gift_reminder_coachmark.GiftReminderCoachmark;
      const internalBinaryWrite12 = GiftReminderCoachmark.internalBinaryWrite;
      const giftReminderCoachmark = properties.properties.giftReminderCoachmark;
      const tagResult12 = tag.tag(14, _mod1209.WireType.LengthDelimited);
      const result2 = internalBinaryWrite12(giftReminderCoachmark, tagResult12.fork(), writeUnknownFields);
      const joined11 = result2.join();
    }
    if ("premiumTabTooltip" === properties.properties.oneofKind) {
      const PremiumTabTooltip = premium_tab_tooltip.PremiumTabTooltip;
      const internalBinaryWrite13 = PremiumTabTooltip.internalBinaryWrite;
      const premiumTabTooltip = properties.properties.premiumTabTooltip;
      const tagResult13 = tag.tag(15, _mod1209.WireType.LengthDelimited);
      const result3 = internalBinaryWrite13(premiumTabTooltip, tagResult13.fork(), writeUnknownFields);
      const joined12 = result3.join();
    }
    if ("premiumTabPopover" === properties.properties.oneofKind) {
      const PremiumTabPopover = premium_tab_popover.PremiumTabPopover;
      const internalBinaryWrite14 = PremiumTabPopover.internalBinaryWrite;
      const premiumTabPopover = properties.properties.premiumTabPopover;
      const tagResult14 = tag.tag(16, _mod1209.WireType.LengthDelimited);
      const result4 = internalBinaryWrite14(premiumTabPopover, tagResult14.fork(), writeUnknownFields);
      const joined13 = result4.join();
    }
    if ("nagbar" === properties.properties.oneofKind) {
      const Nagbar = nagbar2.Nagbar;
      const internalBinaryWrite15 = Nagbar.internalBinaryWrite;
      const nagbar = properties.properties.nagbar;
      const tagResult15 = tag.tag(17, _mod1209.WireType.LengthDelimited);
      const result5 = internalBinaryWrite15(nagbar, tagResult15.fork(), writeUnknownFields);
      const joined14 = result5.join();
    }
    if ("planSelectCardBanner" === properties.properties.oneofKind) {
      const PlanSelectCardBanner = plan_select_card_banner.PlanSelectCardBanner;
      const internalBinaryWrite16 = PlanSelectCardBanner.internalBinaryWrite;
      const planSelectCardBanner = properties.properties.planSelectCardBanner;
      const tagResult16 = tag.tag(19, _mod1209.WireType.LengthDelimited);
      const result6 = internalBinaryWrite16(planSelectCardBanner, tagResult16.fork(), writeUnknownFields);
      const joined15 = result6.join();
    }
    if ("billingSettingsBanner" === properties.properties.oneofKind) {
      const BillingSettingsBanner = billing_settings_banner.BillingSettingsBanner;
      const internalBinaryWrite17 = BillingSettingsBanner.internalBinaryWrite;
      const billingSettingsBanner = properties.properties.billingSettingsBanner;
      const tagResult17 = tag.tag(20, _mod1209.WireType.LengthDelimited);
      const result7 = internalBinaryWrite17(billingSettingsBanner, tagResult17.fork(), writeUnknownFields);
      const joined16 = result7.join();
    }
    if ("shopNagbar" === properties.properties.oneofKind) {
      const ShopNagbar = shop_nagbar.ShopNagbar;
      const internalBinaryWrite18 = ShopNagbar.internalBinaryWrite;
      const shopNagbar = properties.properties.shopNagbar;
      const tagResult18 = tag.tag(21, _mod1209.WireType.LengthDelimited);
      const result8 = internalBinaryWrite18(shopNagbar, tagResult18.fork(), writeUnknownFields);
      const joined17 = result8.join();
    }
    if ("adminEditorTestComponent" === properties.properties.oneofKind) {
      const AdminEditorTestComponent = admin_editor_test_component.AdminEditorTestComponent;
      const internalBinaryWrite19 = AdminEditorTestComponent.internalBinaryWrite;
      const adminEditorTestComponent = properties.properties.adminEditorTestComponent;
      const tagResult19 = tag.tag(22, _mod1209.WireType.LengthDelimited);
      const result9 = internalBinaryWrite19(adminEditorTestComponent, tagResult19.fork(), writeUnknownFields);
      const joined18 = result9.join();
    }
    if ("guildHeaderCoachmark" === properties.properties.oneofKind) {
      const GuildHeaderCoachmark = guild_header_coachmark.GuildHeaderCoachmark;
      const internalBinaryWrite20 = GuildHeaderCoachmark.internalBinaryWrite;
      const guildHeaderCoachmark = properties.properties.guildHeaderCoachmark;
      const tagResult20 = tag.tag(23, _mod1209.WireType.LengthDelimited);
      const result10 = internalBinaryWrite20(guildHeaderCoachmark, tagResult20.fork(), writeUnknownFields);
      const joined19 = result10.join();
    }
    if ("guildBoostCheckoutBanner" === properties.properties.oneofKind) {
      const GuildBoostCheckoutBanner = guild_boost_checkout_banner.GuildBoostCheckoutBanner;
      const internalBinaryWrite21 = GuildBoostCheckoutBanner.internalBinaryWrite;
      const guildBoostCheckoutBanner = properties.properties.guildBoostCheckoutBanner;
      const tagResult21 = tag.tag(24, _mod1209.WireType.LengthDelimited);
      const result11 = internalBinaryWrite21(guildBoostCheckoutBanner, tagResult21.fork(), writeUnknownFields);
      const joined20 = result11.join();
    }
    if ("guildBoostMarketingPageBanner" === properties.properties.oneofKind) {
      const GuildBoostMarketingPageBanner = guild_boost_marketing_page_banner.GuildBoostMarketingPageBanner;
      const internalBinaryWrite22 = GuildBoostMarketingPageBanner.internalBinaryWrite;
      const guildBoostMarketingPageBanner = properties.properties.guildBoostMarketingPageBanner;
      const tagResult22 = tag.tag(25, _mod1209.WireType.LengthDelimited);
      const result12 = internalBinaryWrite22(guildBoostMarketingPageBanner, tagResult22.fork(), writeUnknownFields);
      const joined21 = result12.join();
    }
    if ("guildBoostTabBanner" === properties.properties.oneofKind) {
      const GuildBoostTabBanner = guild_boost_tab_banner.GuildBoostTabBanner;
      const internalBinaryWrite23 = GuildBoostTabBanner.internalBinaryWrite;
      const guildBoostTabBanner = properties.properties.guildBoostTabBanner;
      const tagResult23 = tag.tag(26, _mod1209.WireType.LengthDelimited);
      const result13 = internalBinaryWrite23(guildBoostTabBanner, tagResult23.fork(), writeUnknownFields);
      const joined22 = result13.join();
    }
    if ("shopTabTooltip" === properties.properties.oneofKind) {
      const ShopTabTooltip = shop_tab_tooltip.ShopTabTooltip;
      const internalBinaryWrite24 = ShopTabTooltip.internalBinaryWrite;
      const shopTabTooltip = properties.properties.shopTabTooltip;
      const tagResult24 = tag.tag(27, _mod1209.WireType.LengthDelimited);
      const result14 = internalBinaryWrite24(shopTabTooltip, tagResult24.fork(), writeUnknownFields);
      const joined23 = result14.join();
    }
    if ("premiumHomeRewardsPerkCard" === properties.properties.oneofKind) {
      const PremiumHomePerkCard = premium_home_perk_card.PremiumHomePerkCard;
      const internalBinaryWrite25 = PremiumHomePerkCard.internalBinaryWrite;
      const premiumHomeRewardsPerkCard = properties.properties.premiumHomeRewardsPerkCard;
      const tagResult25 = tag.tag(28, _mod1209.WireType.LengthDelimited);
      const result15 = internalBinaryWrite25(premiumHomeRewardsPerkCard, tagResult25.fork(), writeUnknownFields);
      const joined24 = result15.join();
    }
    if ("marketingPageRewardsBentoBox" === properties.properties.oneofKind) {
      const MarketingPageBentoBox = marketing_page_bento_box.MarketingPageBentoBox;
      const internalBinaryWrite26 = MarketingPageBentoBox.internalBinaryWrite;
      const marketingPageRewardsBentoBox = properties.properties.marketingPageRewardsBentoBox;
      const tagResult26 = tag.tag(29, _mod1209.WireType.LengthDelimited);
      const result16 = internalBinaryWrite26(marketingPageRewardsBentoBox, tagResult26.fork(), writeUnknownFields);
      const joined25 = result16.join();
    }
    if ("outboundPromotionPopover" === properties.properties.oneofKind) {
      const OutboundPromotionPopover = outbound_promotion_popover.OutboundPromotionPopover;
      const internalBinaryWrite27 = OutboundPromotionPopover.internalBinaryWrite;
      const outboundPromotionPopover = properties.properties.outboundPromotionPopover;
      const tagResult27 = tag.tag(30, _mod1209.WireType.LengthDelimited);
      const result17 = internalBinaryWrite27(outboundPromotionPopover, tagResult27.fork(), writeUnknownFields);
      const joined26 = result17.join();
    }
    if ("outboundPromotionClaimModalCard" === properties.properties.oneofKind) {
      const OutboundPromotionClaimModalCard = outbound_promotion_claim_modal_card.OutboundPromotionClaimModalCard;
      const internalBinaryWrite28 = OutboundPromotionClaimModalCard.internalBinaryWrite;
      const outboundPromotionClaimModalCard = properties.properties.outboundPromotionClaimModalCard;
      const tagResult28 = tag.tag(31, _mod1209.WireType.LengthDelimited);
      const result18 = internalBinaryWrite28(outboundPromotionClaimModalCard, tagResult28.fork(), writeUnknownFields);
      const joined27 = result18.join();
    }
    if ("shopCoachmark" === properties.properties.oneofKind) {
      const ShopCoachmark = shop_coachmark.ShopCoachmark;
      const internalBinaryWrite29 = ShopCoachmark.internalBinaryWrite;
      const shopCoachmark = properties.properties.shopCoachmark;
      const tagResult29 = tag.tag(32, _mod1209.WireType.LengthDelimited);
      const result19 = internalBinaryWrite29(shopCoachmark, tagResult29.fork(), writeUnknownFields);
      const joined28 = result19.join();
    }
    if ("" !== properties.contentIdentifier) {
      const tagResult30 = tag.tag(3, _mod1209.WireType.LengthDelimited);
      tagResult30.string(properties.contentIdentifier);
    }
    if (false !== properties.isDefaultBase) {
      const tagResult31 = tag.tag(18, _mod1209.WireType.Varint);
      tagResult31.bool(properties.isDefaultBase);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1209.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, properties, tag);
    }
    return tag;
  }
}
const prototype = PremiumMarketingComponentProperties$Type.prototype;
const premiumMarketingComponentPropertiesType = new PremiumMarketingComponentProperties$Type();
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/premium_marketing_component_properties.tsx");

export const PremiumMarketingComponentProperties = premiumMarketingComponentPropertiesType;
