// Module ID: 9783
// Function ID: 9784
// Name: PromotionRecord
// Dependencies: [1400, 9784, 9821, 1398, 2]

// Module 9783 (PromotionRecord)
import FlagUtils from "FlagUtils" /* 1398 */;
import Record from "Record" /* 1400 */;
import MarketingComponentRecord from "MarketingComponentRecord" /* 9784 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

class PromotionRecord extends Record {
  constructor(inboundRestrictedCountries) {
    let bogoRewardEnabled;
    let flags;
    let priority;
    const tmp4 = new PromotionRecord(tmp3, tmp2, new.target, this, tmp, inboundRestrictedCountries);
    ({ id: tmp4.id, trialId: tmp4.trialId, startDate: tmp4.startDate, endDate: tmp4.endDate, outboundRedemptionEndDate: tmp4.outboundRedemptionEndDate, inboundHeaderText: tmp4.inboundHeaderText, inboundBodyText: tmp4.inboundBodyText, inboundHelpCenterLink: tmp4.inboundHelpCenterLink, outboundTitle: tmp4.outboundTitle, outboundRedemptionModalBody: tmp4.outboundRedemptionModalBody, outboundTermsAndConditions: tmp4.outboundTermsAndConditions, outboundRedemptionPageLink: tmp4.outboundRedemptionPageLink, outboundRedemptionUrlFormat: tmp4.outboundRedemptionUrlFormat, flags } = inboundRestrictedCountries);
    if (flags == null) {
      flags = 0;
    }
    tmp4.flags = flags;
    let prop = inboundRestrictedCountries.inboundRestrictedCountries;
    if (prop == null) {
      prop = [];
    }
    tmp4.inboundRestrictedCountries = prop;
    let prop1 = inboundRestrictedCountries.outboundRestrictedCountries;
    if (prop1 == null) {
      prop1 = [];
    }
    tmp4.outboundRestrictedCountries = prop1;
    let allowedCountries = inboundRestrictedCountries.allowedCountries;
    if (allowedCountries == null) {
      allowedCountries = [];
    }
    tmp4.allowedCountries = allowedCountries;
    let BLOCKLIST = inboundRestrictedCountries.countryListMode;
    if (BLOCKLIST == null) {
      BLOCKLIST = require("promotions/constants").CountryListMode.BLOCKLIST;
    }
    tmp4.countryListMode = BLOCKLIST;
    ({ promotionType: tmp4.promotionType, partnerId: tmp4.partnerId, marketingComponents: tmp4.marketingComponents, rewardSkuIds: tmp4.rewardSkuIds, bogoRewardEnabled } = inboundRestrictedCountries);
    if (bogoRewardEnabled == null) {
      bogoRewardEnabled = false;
    }
    tmp4.bogoRewardEnabled = bogoRewardEnabled;
    let boostBogoMaxCredits = inboundRestrictedCountries.boostBogoMaxCredits;
    if (boostBogoMaxCredits == null) {
      boostBogoMaxCredits = null;
    }
    tmp4.boostBogoMaxCredits = boostBogoMaxCredits;
    ({ promotionKey: tmp4.promotionKey, priority } = inboundRestrictedCountries);
    if (priority == null) {
      priority = require("promotions/constants").FALLBACK_PROMOTION_PRIORITY;
    }
    tmp4.priority = priority;
    return tmp4;
  }
  static createFromServer(id) {
    let BLOCKLIST;
    let allowed_countries;
    let date2;
    let enabled;
    let marketing_components;
    let partner_id;
    let reward_sku_ids;
    let str;
    let str2;
    let str3;
    let str4;
    let str5;
    let str6;
    let str7;
    let str8;
    let str9;
    let tmp13;
    const date = new Date(id.start_date);
    const date1 = new Date(id.end_date);
    const metadata = id.metadata;
    let boost_bogo;
    if (metadata != null) {
      const premium_promotion = metadata.premium_promotion;
      if (premium_promotion != null) {
        const reward_config = premium_promotion.reward_config;
        if (reward_config != null) {
          boost_bogo = reward_config.boost_bogo;
        }
      }
    }
    let FALLBACK_PROMOTION_PRIORITY = id.priority;
    if (FALLBACK_PROMOTION_PRIORITY == null) {
      FALLBACK_PROMOTION_PRIORITY = date(date1[2]).FALLBACK_PROMOTION_PRIORITY;
    }
    let obj = {
      id: id.id,
      trialId: id.trial_id,
      startDate: date,
      endDate: date1,
      outboundRedemptionEndDate: date2,
      inboundHeaderText: str,
      inboundBodyText: str2,
      inboundHelpCenterLink: str3,
      outboundTitle: str4,
      outboundRedemptionModalBody: str5,
      outboundTermsAndConditions: str6,
      outboundRedemptionPageLink: str7,
      outboundRedemptionUrlFormat: str8,
      flags: null,
      inboundRestrictedCountries: null,
      outboundRestrictedCountries: null,
      allowedCountries: allowed_countries,
      countryListMode: BLOCKLIST,
      promotionType: null,
      partnerId: partner_id,
      marketingComponents: marketing_components.map((item) => {
        const obj = { startDate: date, endDate: date1, priority: FALLBACK_PROMOTION_PRIORITY };
        return MarketingComponentRecord.createFromServer(item, obj);
      }),
      rewardSkuIds: reward_sku_ids,
      bogoRewardEnabled: true === enabled,
      boostBogoMaxCredits: tmp13,
      promotionKey: str9,
      priority: FALLBACK_PROMOTION_PRIORITY
    };
    date2 = null;
    const tmp6 = PromotionRecord;
    if (null != id.outbound_redemption_end_date) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      date2 = new Date(id.outbound_redemption_end_date);
    }
    str = id.inbound_header_text;
    if (str == null) {
      str = "";
    }
    str2 = id.inbound_body_text;
    if (str2 == null) {
      str2 = "";
    }
    str3 = id.inbound_help_center_link;
    if (str3 == null) {
      str3 = "";
    }
    str4 = id.outbound_title;
    if (str4 == null) {
      str4 = "";
    }
    str5 = id.outbound_redemption_modal_body;
    if (str5 == null) {
      str5 = "";
    }
    str6 = id.outbound_terms_and_conditions;
    if (str6 == null) {
      str6 = "";
    }
    str7 = id.outbound_redemption_page_link;
    if (str7 == null) {
      str7 = "";
    }
    str8 = id.outbound_redemption_url_format;
    if (str8 == null) {
      str8 = "";
    }
    ({ flags: obj.flags, inbound_restricted_countries: obj.inboundRestrictedCountries, outbound_restricted_countries: obj.outboundRestrictedCountries, allowed_countries } = id);
    if (allowed_countries == null) {
      allowed_countries = [];
    }
    BLOCKLIST = id.country_list_mode;
    if (BLOCKLIST == null) {
      BLOCKLIST = date(date1[2]).CountryListMode.BLOCKLIST;
    }
    ({ promotion_type: obj.promotionType, partner_id } = id);
    if (partner_id == null) {
      partner_id = null;
    }
    marketing_components = id.marketing_components;
    if (marketing_components == null) {
      marketing_components = [];
    }
    const metadata2 = id.metadata;
    reward_sku_ids = undefined;
    if (metadata2 != null) {
      const premium_promotion2 = metadata2.premium_promotion;
      if (premium_promotion2 != null) {
        reward_sku_ids = premium_promotion2.reward_sku_ids;
      }
    }
    if (reward_sku_ids == null) {
      const metadata3 = id.metadata;
      let reward_sku_ids1;
      if (metadata3 != null) {
        const gift_promotion = metadata3.gift_promotion;
        if (gift_promotion != null) {
          reward_sku_ids1 = gift_promotion.reward_sku_ids;
        }
      }
      reward_sku_ids = reward_sku_ids1;
    }
    if (reward_sku_ids == null) {
      reward_sku_ids = [];
    }
    const metadata4 = id.metadata;
    enabled = undefined;
    if (metadata4 != null) {
      const premium_promotion3 = metadata4.premium_promotion;
      if (premium_promotion3 != null) {
        const reward_config2 = premium_promotion3.reward_config;
        if (reward_config2 != null) {
          const bogo = reward_config2.bogo;
          if (bogo != null) {
            enabled = bogo.enabled;
          }
        }
      }
    }
    let enabled1;
    if (boost_bogo != null) {
      enabled1 = boost_bogo.enabled;
    }
    tmp13 = null;
    if (true === enabled1) {
      let max_credits_per_user = boost_bogo.max_credits_per_user;
      if (max_credits_per_user == null) {
        max_credits_per_user = null;
      }
      tmp13 = max_credits_per_user;
    }
    str9 = id.promotion_key;
    if (str9 == null) {
      str9 = "";
    }
    return new tmp6(obj);
  }
  hasFlag(arg0) {
    const obj = FlagUtils;
    return obj.hasFlag(this.flags, arg0);
  }
  isCountryRestricted(arg0) {
    const self = this;
    if (this.countryListMode === require("promotions/constants").CountryListMode.ALLOWLIST) {
      const allowedCountries = self.allowedCountries;
      return !allowedCountries.includes(arg0);
    } else {
      const promotionType = self.promotionType;
      if (require("promotions/constants").PromotionTypes.THIRD_PARTY_INBOUND !== promotionType) {
        if (require("promotions/constants").PromotionTypes.THIRD_PARTY_DIRECT_FULFILLMENT !== promotionType) {
          if (require("promotions/constants").PromotionTypes.THIRD_PARTY_OUTBOUND !== promotionType) {
            if (require("promotions/constants").PromotionTypes.THIRD_PARTY_OUTBOUND_RECURRING !== promotionType) {
              return false;
            }
          }
          const outboundRestrictedCountries = self.outboundRestrictedCountries;
          return outboundRestrictedCountries.includes(arg0);
        }
      }
      const inboundRestrictedCountries = self.inboundRestrictedCountries;
      return inboundRestrictedCountries.includes(arg0);
    }
  }
}
const prototype = PromotionRecord.prototype;
Object.defineProperty(prototype, "isBogo", {
  get: function isBogo() {
    return this.promotionType === require("promotions/constants").PromotionTypes.BOGO;
  },
  set: undefined
});
Object.defineProperty(prototype, "isMarketingMoment", {
  get: function isMarketingMoment() {
    return this.promotionType === require("promotions/constants").PromotionTypes.MARKETING_MOMENT;
  },
  set: undefined
});
Object.defineProperty(prototype, "hasBogoReward", {
  get: function hasBogoReward() {
    return this.bogoRewardEnabled;
  },
  set: undefined
});
const result = size.fileFinishedImporting("records/PromotionRecord.tsx");

export default PromotionRecord;
