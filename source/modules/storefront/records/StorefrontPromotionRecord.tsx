// Module ID: 8681
// Function ID: 8682
// Name: parseSkuIds
// Dependencies: [32, 1883, 2]

// Module 8681 (parseSkuIds)
import _slicedToArray from "_slicedToArray";
import "toJS";

function parseSkuIds(sku_ids) {
  if (null == sku_ids) {
    return null;
  } else {
    let obj = {};
    const _Object = Object;
    const entries = Object.entries(sku_ids);
    const tmp4 = entries[Symbol.iterator]();
    while (tmp4 !== undefined) {
      let tmp8 = callback;
      let tmp9 = callback(tmp6, 2);
      obj = { priceTiers: null };
      obj[0] = tmp9[1].price_tiers;
      obj[tmp9[0]] = obj;
      continue;
    }
    return obj;
  }
}
let prototype;
prototype = function StorefrontPromotionRecord(arg0) {
  const tmp = new prototype(new.target, new.target);
  // ThrowIfThisInitialized (0x7c)
  ({ id: tmp.id, applicationId: tmp.applicationId, name: tmp.name, displayName: tmp.displayName, rewardType: tmp.rewardType, rewardStatus: tmp.rewardStatus, rewardConfig: tmp.rewardConfig, skuIds: tmp.skuIds, appliesToAllSkus: tmp.appliesToAllSkus, includeBundles: tmp.includeBundles, startsAt: tmp.startsAt, endsAt: tmp.endsAt, tenantMetadata: tmp.tenantMetadata } = arg0);
  return tmp;
}.prototype;
class prototype extends tmp2 {
}
prototype["createFromServer"] = function createFromServer(display_name) {
  let application_id;
  let applies_to_all_skus;
  let id;
  let include_bundles;
  let name;
  let reward_status;
  let reward_type;
  ({ id, application_id, name } = display_name);
  if (name == null) {
    name = null;
  }
  display_name = display_name.display_name;
  if (display_name == null) {
    display_name = null;
  }
  ({ reward_type, reward_status } = display_name);
  if (reward_status == null) {
    reward_status = null;
  }
  let tmp8 = null;
  if (null != display_name.reward_config) {
    const reward_config = display_name.reward_config;
    let tmp9 = null;
    if (null != reward_config) {
      let tmp10 = null;
      if (null != reward_config.discount) {
        let obj = { id: null, type: null, amount: null, fiatEnabled: null, orbsEnabled: null };
        obj[0] = reward_config.discount.id;
        obj[1] = reward_config.discount.type;
        obj[2] = reward_config.discount.amount;
        obj[3] = reward_config.discount.fiat_enabled;
        obj[4] = reward_config.discount.orbs_enabled;
        tmp10 = obj;
      }
      obj = { discount: null };
      obj[0] = tmp10;
      tmp9 = obj;
    }
    tmp8 = tmp9;
  }
  const tmp11 = parseSkuIds(display_name.sku_ids);
  let date = null;
  ({ applies_to_all_skus, include_bundles } = display_name);
  if (null != display_name.starts_at) {
    let _Date = Date;
    date = new Date(display_name.starts_at);
  }
  let date1 = null;
  if (null != display_name.ends_at) {
    _Date = new.target;
    const _Date2 = Date;
    date1 = new Date(display_name.ends_at);
  }
  let tmp19 = null;
  if (null != display_name.tenant_metadata) {
    const tenant_metadata = display_name.tenant_metadata;
    if (null == tenant_metadata.collectibles) {
      obj = { collectibles: null };
      obj[0] = _Date;
      tmp19 = obj;
    } else {
      const collectibles = tenant_metadata.collectibles;
      const reward = collectibles.reward;
      let nagbar;
      if (reward != null) {
        const storefront = reward.storefront;
        if (storefront != null) {
          nagbar = storefront.nagbar;
        }
      }
      const reward2 = collectibles.reward;
      if (reward2 != null) {
        const checkout = reward2.checkout;
        if (checkout != null) {
          const offer_notice = checkout.offer_notice;
        }
      }
      if (null != nagbar) {
        let tmp21;
        if (null != nagbar) {
          const header_text = nagbar.header_text;
          const obj1 = { headerText: null, cta: null, helpCenterId: null, icon: null };
          obj1[0] = header_text;
          let tmp22;
          if (null != nagbar.cta) {
            const text = nagbar.cta.text;
            const obj2 = { text: null };
            obj2[0] = text;
            tmp22 = obj2;
          }
          obj1[1] = tmp22;
          const help_center_id = nagbar.help_center_id;
          obj1[2] = help_center_id;
          const icon = nagbar.icon;
          const obj3 = { nagbar: null };
          obj1[3] = icon;
          obj3[0] = obj1;
          tmp21 = obj3;
        }
        const obj4 = { storefront: null, checkout: null };
        obj4[0] = tmp21;
        let tmp23;
        if (null != offer_notice) {
          const icon2 = offer_notice.icon;
          const obj5 = { icon: null, text: null };
          obj5[0] = icon2;
          const text2 = offer_notice.text;
          const obj6 = { offerNotice: null };
          obj5[1] = text2;
          obj6[0] = obj5;
          tmp23 = obj6;
        }
        let obj7 = { reward: null };
        obj4[1] = tmp23;
        obj7[0] = obj4;
      }
      obj7 = {};
    }
  }
  if (typeof prototype !== "find") {
    HermesBuiltin.throwTypeError();
  }
  const tmp25 = new prototype(str, tmp5, tmp4, tmp3, tmp2, tmp, _Date2, _Date, prototype, new.target, id, application_id, name, display_name, reward_type, reward_status, tmp8, tmp11);
  // ThrowIfThisInitialized (0x7c)
  tmp25.id = id;
  tmp25.applicationId = application_id;
  tmp25.name = name;
  tmp25.displayName = display_name;
  tmp25.rewardType = reward_type;
  tmp25.rewardStatus = reward_status;
  tmp25.rewardConfig = tmp8;
  tmp25.skuIds = tmp11;
  tmp25.appliesToAllSkus = applies_to_all_skus;
  tmp25.includeBundles = include_bundles;
  tmp25.startsAt = date;
  tmp25.endsAt = date1;
  tmp25.tenantMetadata = tmp19;
  return tmp25;
};
const result = require("set").fileFinishedImporting("modules/storefront/records/StorefrontPromotionRecord.tsx");

export default prototype;
