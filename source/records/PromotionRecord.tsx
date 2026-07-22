// Module ID: 7126
// Function ID: 57320
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 7126 (_isNativeReflectConstruct)
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
const tmp2 = (arg0) => {
  class PromotionRecord {
    constructor(arg0) {
      self = this;
      tmp = closure_2(this, PromotionRecord);
      obj = closure_5(PromotionRecord);
      tmp2 = closure_4;
      if (closure_7()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, [], closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      ({ id: tmp6.id, trialId: tmp6.trialId, startDate: tmp6.startDate, endDate: tmp6.endDate, outboundRedemptionEndDate: tmp6.outboundRedemptionEndDate, inboundHeaderText: tmp6.inboundHeaderText, inboundBodyText: tmp6.inboundBodyText, inboundHelpCenterLink: tmp6.inboundHelpCenterLink, outboundTitle: tmp6.outboundTitle, outboundRedemptionModalBody: tmp6.outboundRedemptionModalBody, outboundTermsAndConditions: tmp6.outboundTermsAndConditions, outboundRedemptionPageLink: tmp6.outboundRedemptionPageLink, outboundRedemptionUrlFormat: tmp6.outboundRedemptionUrlFormat, flags } = arg0);
      num = 0;
      if (null != flags) {
        num = flags;
      }
      tmp2Result.flags = num;
      prop = arg0.inboundRestrictedCountries;
      if (null == prop) {
        prop = [];
      }
      tmp2Result.inboundRestrictedCountries = prop;
      prop1 = arg0.outboundRestrictedCountries;
      if (null == prop1) {
        prop1 = [];
      }
      tmp2Result.outboundRestrictedCountries = prop1;
      allowedCountries = arg0.allowedCountries;
      if (null == allowedCountries) {
        allowedCountries = [];
      }
      tmp2Result.allowedCountries = allowedCountries;
      BLOCKLIST = arg0.countryListMode;
      if (null == BLOCKLIST) {
        tmp7 = PromotionRecord;
        tmp8 = closure_1;
        num2 = 6;
        BLOCKLIST = PromotionRecord(closure_1[6]).CountryListMode.BLOCKLIST;
      }
      tmp2Result.countryListMode = BLOCKLIST;
      ({ promotionType: tmp6.promotionType, partnerId: tmp6.partnerId, marketingComponents: tmp6.marketingComponents, rewardSkuIds: tmp6.rewardSkuIds, bogoRewardEnabled } = arg0);
      tmp2Result.bogoRewardEnabled = null != bogoRewardEnabled && bogoRewardEnabled;
      tmp2Result.promotionKey = arg0.promotionKey;
      return tmp2Result;
    }
  }
  const arg1 = PromotionRecord;
  callback2(PromotionRecord, arg0);
  let obj = {
    key: "isBogo",
    get() {
      return this.promotionType === PromotionRecord(closure_1[6]).PromotionTypes.BOGO;
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "isMarketingMoment",
    get() {
      return this.promotionType === PromotionRecord(closure_1[6]).PromotionTypes.MARKETING_MOMENT;
    }
  };
  items[1] = obj;
  obj = {
    key: "hasBogoReward",
    get() {
      return this.bogoRewardEnabled;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "hasFlag",
    value(arg0) {
      return PromotionRecord(closure_1[7]).hasFlag(this.flags, arg0);
    }
  };
  items[4] = {
    key: "isCountryRestricted",
    value(arg0) {
      const self = this;
      if (this.countryListMode === PromotionRecord(closure_1[6]).CountryListMode.ALLOWLIST) {
        const allowedCountries = self.allowedCountries;
        return !allowedCountries.includes(arg0);
      } else {
        const promotionType = self.promotionType;
        if (PromotionRecord(closure_1[6]).PromotionTypes.THIRD_PARTY_INBOUND !== promotionType) {
          if (PromotionRecord(closure_1[6]).PromotionTypes.THIRD_PARTY_DIRECT_FULFILLMENT !== promotionType) {
            if (PromotionRecord(closure_1[6]).PromotionTypes.THIRD_PARTY_OUTBOUND !== promotionType) {
              if (PromotionRecord(closure_1[6]).PromotionTypes.THIRD_PARTY_OUTBOUND_RECURRING !== promotionType) {
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
  };
  const items1 = [
    {
      key: "createFromServer",
      value(id) {
        let allowed_countries;
        let partner_id;
        let tmp = PromotionRecord;
        const obj = { id: id.id, trialId: id.trial_id, startDate: new Date(id.start_date) };
        const date = new Date(id.start_date);
        obj.endDate = new Date(id.end_date);
        let date2 = null;
        if (null != id.outbound_redemption_end_date) {
          const _Date = Date;
          date2 = new Date(id.outbound_redemption_end_date);
        }
        obj.outboundRedemptionEndDate = date2;
        const inbound_header_text = id.inbound_header_text;
        let str = "";
        let str2 = "";
        if (null != inbound_header_text) {
          str2 = inbound_header_text;
        }
        obj.inboundHeaderText = str2;
        const inbound_body_text = id.inbound_body_text;
        let tmp7 = str;
        if (null != inbound_body_text) {
          tmp7 = inbound_body_text;
        }
        obj.inboundBodyText = tmp7;
        const inbound_help_center_link = id.inbound_help_center_link;
        let tmp8 = str;
        if (null != inbound_help_center_link) {
          tmp8 = inbound_help_center_link;
        }
        obj.inboundHelpCenterLink = tmp8;
        const outbound_title = id.outbound_title;
        let tmp9 = str;
        if (null != outbound_title) {
          tmp9 = outbound_title;
        }
        obj.outboundTitle = tmp9;
        const outbound_redemption_modal_body = id.outbound_redemption_modal_body;
        let tmp10 = str;
        if (null != outbound_redemption_modal_body) {
          tmp10 = outbound_redemption_modal_body;
        }
        obj.outboundRedemptionModalBody = tmp10;
        const outbound_terms_and_conditions = id.outbound_terms_and_conditions;
        let tmp11 = str;
        if (null != outbound_terms_and_conditions) {
          tmp11 = outbound_terms_and_conditions;
        }
        obj.outboundTermsAndConditions = tmp11;
        const outbound_redemption_page_link = id.outbound_redemption_page_link;
        let tmp12 = str;
        if (null != outbound_redemption_page_link) {
          tmp12 = outbound_redemption_page_link;
        }
        obj.outboundRedemptionPageLink = tmp12;
        const outbound_redemption_url_format = id.outbound_redemption_url_format;
        let tmp13 = str;
        if (null != outbound_redemption_url_format) {
          tmp13 = outbound_redemption_url_format;
        }
        obj.outboundRedemptionUrlFormat = tmp13;
        ({ flags: obj.flags, inbound_restricted_countries: obj.inboundRestrictedCountries, outbound_restricted_countries: obj.outboundRestrictedCountries, allowed_countries } = id);
        if (null == allowed_countries) {
          allowed_countries = [];
        }
        obj.allowedCountries = allowed_countries;
        let BLOCKLIST = id.country_list_mode;
        if (null == BLOCKLIST) {
          BLOCKLIST = PromotionRecord(closure_1[6]).CountryListMode.BLOCKLIST;
        }
        obj.countryListMode = BLOCKLIST;
        ({ promotion_type: obj.promotionType, partner_id } = id);
        let tmp16 = null;
        if (null != partner_id) {
          tmp16 = partner_id;
        }
        obj.partnerId = tmp16;
        let marketing_components = id.marketing_components;
        if (null == marketing_components) {
          marketing_components = [];
        }
        obj.marketingComponents = marketing_components;
        const metadata = id.metadata;
        let reward_sku_ids;
        if (null != metadata) {
          const premium_promotion = metadata.premium_promotion;
          if (null != premium_promotion) {
            reward_sku_ids = premium_promotion.reward_sku_ids;
          }
        }
        if (null == reward_sku_ids) {
          const metadata2 = id.metadata;
          let reward_sku_ids1;
          if (null != metadata2) {
            const gift_promotion = metadata2.gift_promotion;
            if (null != gift_promotion) {
              reward_sku_ids1 = gift_promotion.reward_sku_ids;
            }
          }
          reward_sku_ids = reward_sku_ids1;
        }
        if (null == reward_sku_ids) {
          reward_sku_ids = [];
        }
        obj.rewardSkuIds = reward_sku_ids;
        const metadata3 = id.metadata;
        let enabled;
        if (null != metadata3) {
          const premium_promotion2 = metadata3.premium_promotion;
          if (null != premium_promotion2) {
            const reward_config = premium_promotion2.reward_config;
            if (null != reward_config) {
              const bogo = reward_config.bogo;
              if (null != bogo) {
                enabled = bogo.enabled;
              }
            }
          }
        }
        obj.bogoRewardEnabled = true === enabled;
        const promotion_key = id.promotion_key;
        if (null != promotion_key) {
          str = promotion_key;
        }
        obj.promotionKey = str;
        tmp = new tmp(obj);
        return tmp;
      }
    }
  ];
  return callback(PromotionRecord, items, items1);
}(importDefault(dependencyMap[5]));
const result = arg1(dependencyMap[8]).fileFinishedImporting("records/PromotionRecord.tsx");

export default tmp2;
