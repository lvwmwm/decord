// Module ID: 9382
// Function ID: 9383
// Name: StorefrontPromotionRecord
// Dependencies: [32, 1407, 9383, 2]
// Exports: getCollectiblesCollectAndClaim, getCollectiblesTargetedOffer

// Module 9382 (StorefrontPromotionRecord)
import StorefrontCollectiblesTypes from "StorefrontCollectiblesTypes" /* 9383 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import Record from "Record" /* 1407 */;
import size from "module_2" /* 2 */;

let display_name;

function parseSkuIds(sku_ids) {
  if (null == sku_ids) {
    return null;
  } else {
    const obj = {};
    const _Object = Object;
    const entries = Object.entries(sku_ids);
    const tmp4 = entries[Symbol.iterator]();
    while (tmp4 !== undefined) {
      let tmp9 = _slicedToArray(tmp6, 2);
      let obj2 = { priceTiers: tmp9[1].price_tiers };
      obj[tmp9[0]] = obj2;
      continue;
    }
    return obj;
  }
}
function parseCollectiblesShared(shared) {
  let help_center;
  let obj22;
  let obj8;
  let progress_indicator;
  let progress_steps;
  let tmp;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp8;
  let tmp9;
  ({ progress_indicator, navigation, help_center } = shared);
  const obj = { title: progress_indicator.title, description: progress_indicator.description, rewardStates: tmp, assets: obj8, style: tmp6 };
  tmp = undefined;
  if (null != progress_indicator.indicator_reward_states) {
    const indicator_reward_states = progress_indicator.indicator_reward_states;
    let tmp2;
    if (null != indicator_reward_states.in_progress) {
      const obj2 = { progressSteps: progress_steps.map(parseCollectiblesProgressIndicatorRewardState) };
      progress_steps = indicator_reward_states.in_progress.progress_steps;
      tmp2 = obj2;
    }
    const obj3 = { inProgress: tmp2, earned: tmp4, consumed: tmp5 };
    tmp4 = undefined;
    if (null != indicator_reward_states.earned) {
      const obj6 = { title: null, description: null };
      ({ title: obj4.title, description: obj4.description } = indicator_reward_states.earned);
      tmp4 = obj6;
    }
    tmp5 = undefined;
    if (null != indicator_reward_states.consumed) {
      const obj7 = { title: null, description: null };
      ({ title: obj5.title, description: obj5.description } = indicator_reward_states.consumed);
      tmp5 = obj7;
    }
    tmp = obj3;
  }
  tmp6 = undefined;
  obj8 = { backgroundUrl: progress_indicator.assets.background_url, rewardPreview: { hiddenUrl: progress_indicator.assets.reward_preview.hidden_url, revealedUrl: progress_indicator.assets.reward_preview.revealed_url } };
  if (null != progress_indicator.style) {
    tmp6 = { contentTheme: progress_indicator.style.content_theme, progressColor: progress_indicator.style.progress_color };
    const obj9 = { contentTheme: progress_indicator.style.content_theme, progressColor: progress_indicator.style.progress_color };
  }
  let tab;
  const obj10 = { progressIndicator: obj, navigation: tmp8, helpCenter: tmp9 };
  if (navigation != null) {
    tab = navigation.tab;
  }
  tmp8 = undefined;
  if (null != tab) {
    const obj21 = { tab: obj22 };
    tmp8 = obj21;
    obj22 = { title: navigation.tab.title, icon: navigation.tab.icon };
  }
  tmp9 = undefined;
  if (null != help_center) {
    const obj23 = { text: null, id: null };
    ({ text: obj11.text, id: obj11.id } = help_center);
    tmp9 = obj23;
  }
  return obj10;
}
function parseCollectiblesProgressIndicatorRewardState(title) {
  return { title: title.title, description: title.description };
}
class StorefrontPromotionRecord extends Record {
  constructor(arg0) {
    const tmp = new StorefrontPromotionRecord(new.target, this);
    ({ id: tmp.id, applicationId: tmp.applicationId, name: tmp.name, displayName: tmp.displayName, rewardType: tmp.rewardType, rewardStatus: tmp.rewardStatus, rewardConfig: tmp.rewardConfig, skuIds: tmp.skuIds, appliesToAllSkus: tmp.appliesToAllSkus, includeBundles: tmp.includeBundles, startsAt: tmp.startsAt, endsAt: tmp.endsAt, redemptionEndsAt: tmp.redemptionEndsAt, progress: tmp.progress, tenantMetadata: tmp.tenantMetadata } = arg0);
    return tmp;
  }
  static createFromServer(display_name) {
    let _Date1;
    let application_id;
    let applies_to_all_skus;
    let collectibles;
    let help_center_id;
    let hero_url;
    let id;
    let include_bundles;
    let name;
    let obj10;
    let obj12;
    let obj13;
    let obj14;
    let obj15;
    let obj16;
    let obj17;
    let obj18;
    let obj19;
    let obj20;
    let obj6;
    let obj7;
    let obj8;
    let obj9;
    let offer_notice;
    let progress_steps;
    let progress_steps1;
    let reward_status;
    let reward_type;
    let sku_ids;
    let target;
    let text;
    let text2;
    let tmp18;
    let tmp19;
    let tmp26;
    let tmp27;
    let tmp29;
    let tmp30;
    let tmp31;
    let tmp6;
    let type;
    const f103325 = (heroUrl) => ({ heroUrl: heroUrl.hero_url });
    ({ id, application_id, name } = display_name);
    if (name == null) {
      name = null;
    }
    display_name = display_name.display_name;
    if (display_name == null) {
      display_name = null;
    }
    ({ reward_status, reward_type } = display_name);
    if (reward_status == null) {
      reward_status = null;
    }
    let tmp3 = null;
    if (null != display_name.reward_config) {
      const reward_config = display_name.reward_config;
      let tmp4 = null;
      if (null != reward_config) {
        let tmp5 = null;
        if (null != reward_config.discount) {
          tmp5 = { id: reward_config.discount.id, type: reward_config.discount.type, amount: reward_config.discount.amount, fiatEnabled: reward_config.discount.fiat_enabled, orbsEnabled: reward_config.discount.orbs_enabled };
          const obj = { id: reward_config.discount.id, type: reward_config.discount.type, amount: reward_config.discount.amount, fiatEnabled: reward_config.discount.fiat_enabled, orbsEnabled: reward_config.discount.orbs_enabled };
        }
        const obj2 = { discount: tmp5, action: tmp6 };
        tmp6 = null;
        if (null != reward_config.action) {
          const obj3 = { actionType: reward_config.action.action_type, deliveryMode: reward_config.action.delivery_mode, skuIds: sku_ids };
          sku_ids = reward_config.action.sku_ids;
          if (sku_ids == null) {
            sku_ids = [];
          }
          tmp6 = obj3;
        }
        tmp4 = obj2;
      }
      tmp3 = tmp4;
    }
    let date = null;
    ({ applies_to_all_skus, include_bundles } = display_name);
    const tmp7 = parseSkuIds(display_name.sku_ids);
    if (null != display_name.starts_at) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      date = new Date(display_name.starts_at);
    }
    let date1 = null;
    if (null != display_name.ends_at) {
      const _Date2 = Date;
      const self3 = this;
      const self4 = this;
      date1 = new Date(display_name.ends_at);
    }
    let date2 = null;
    if (null != display_name.redemption_ends_at) {
      _Date1 = Date;
      const self5 = this;
      const self6 = this;
      date2 = new Date(display_name.redemption_ends_at);
    }
    let tmp16 = null;
    if (null != display_name.progress) {
      const progress = display_name.progress;
      const obj5 = { current: null, target, label: progress.label };
      ({ current: obj4.current, target } = progress);
      tmp16 = obj5;
    }
    let tmp17 = null;
    if (null != display_name.tenant_metadata) {
      const tenant_metadata = display_name.tenant_metadata;
      _Date1 = undefined;
      if (null != tenant_metadata.collectibles) {
        let tmp28;
        collectibles = tenant_metadata.collectibles;
        type = collectibles.type;
        tmp18 = require;
        tmp19 = dependencyMap;
        if (StorefrontCollectiblesTypes.StorefrontPromotionCollectiblesType.COLLECT_AND_CLAIM === type) {
          type = collectibles.subtype;
          if (tmp18(9383).StorefrontPromotionCollectAndClaimSubtype.TAKEOVER === type) {
            target = { type: tmp18(9383).StorefrontPromotionCollectiblesType.COLLECT_AND_CLAIM, subtype: tmp18(9383).StorefrontPromotionCollectAndClaimSubtype.TAKEOVER, collectionId: collectibles.collection_id, shopHome: obj6, indexPage: obj12, shared: collectibles };
            const reward_states = collectibles.shop_home.reward_states;
            obj6 = { title: collectibles.shop_home.title, description: collectibles.shop_home.description, rewardStates: obj7, style: tmp31 };
            obj7 = { inProgress: obj8, earned: obj9, consumed: obj10 };
            obj8 = { progressSteps: progress_steps.map(f103325) };
            progress_steps = reward_states.in_progress.progress_steps;
            tmp31 = undefined;
            obj10 = { heroUrl: reward_states.consumed.hero_url };
            obj9 = { heroUrl: reward_states.earned.hero_url };
            if (null != collectibles.shop_home.style) {
              tmp31 = { contentTheme: collectibles.shop_home.style.content_theme };
              const obj11 = { contentTheme: collectibles.shop_home.style.content_theme };
            }
            const reward_states2 = collectibles.index_page.reward_states;
            obj12 = { description: collectibles.index_page.description, rewardStates: obj13, style: tmp18 };
            obj13 = { inProgress: obj14, earned: obj15, consumed: type };
            obj14 = { progressSteps: progress_steps1.map(f103325) };
            progress_steps1 = reward_states2.in_progress.progress_steps;
            type = { heroUrl: hero_url };
            hero_url = reward_states2.consumed.hero_url;
            tmp18 = undefined;
            obj15 = { heroUrl: reward_states2.earned.hero_url };
            if (null != collectibles.index_page.style) {
              type = { contentTheme: collectibles.index_page.style.content_theme };
              tmp18 = type;
            }
            tmp19 = parseCollectiblesShared;
            collectibles = parseCollectiblesShared(collectibles.shared);
            tmp28 = target;
          } else {
            target = tmp18(9383).StorefrontPromotionCollectAndClaimSubtype.BASIC;
            if (target === type) {
              target = { type: tmp18(9383).StorefrontPromotionCollectiblesType.COLLECT_AND_CLAIM, subtype: tmp18(9383).StorefrontPromotionCollectAndClaimSubtype.BASIC, collectionId: collectibles.collection_id, shopHome: obj16, indexPage: obj18, shared: type };
              obj16 = { title: collectibles.shop_home.title, description: collectibles.shop_home.description, style: tmp29 };
              tmp29 = undefined;
              if (null != collectibles.shop_home.style) {
                obj17 = { contentTheme: collectibles.shop_home.style.content_theme };
                tmp29 = obj17;
              }
              obj18 = { description: collectibles.index_page.description, style: tmp30 };
              tmp30 = undefined;
              if (null != collectibles.index_page.style) {
                obj17 = { contentTheme: collectibles.index_page.style.content_theme };
                tmp30 = obj17;
              }
              hero_url = parseCollectiblesShared;
              type = parseCollectiblesShared(collectibles.shared);
              tmp28 = target;
            }
          }
        } else {
          target = tmp18(9383).StorefrontPromotionCollectiblesType.TARGETED_OFFER;
          if (target === type) {
            const reward = collectibles.reward;
            let nagbar;
            if (reward != null) {
              const storefront = reward.storefront;
              if (storefront != null) {
                nagbar = storefront.nagbar;
              }
            }
            offer_notice = undefined;
            if (reward != null) {
              const checkout = reward.checkout;
              if (checkout != null) {
                offer_notice = checkout.offer_notice;
              }
            }
            let override_title;
            if (reward != null) {
              obj17 = reward.collected;
              if (obj17 != null) {
                override_title = obj17.override_title;
              }
            }
            progress_steps1 = undefined;
            if (null != override_title) {
              obj17 = "";
              if ("" !== override_title) {
                progress_steps1 = override_title;
              }
            }
            hero_url = undefined;
            if (reward != null) {
              hero_url = reward.flavor;
            }
            if (null == nagbar) {
              if (null == offer_notice) {
                if (null == progress_steps1) {
                  if (null == hero_url) {
                    type = { type: tmp18(9383).StorefrontPromotionCollectiblesType.TARGETED_OFFER };
                    target = type;
                  }
                  tmp28 = target;
                }
              }
            }
            target = { type: tmp18(9383).StorefrontPromotionCollectiblesType.TARGETED_OFFER, reward: type };
            let tmp25;
            if (null != nagbar) {
              const header_text = nagbar.header_text;
              obj19 = { headerText: header_text, cta: tmp26, helpCenterId: help_center_id, icon: text2 };
              tmp26 = undefined;
              if (null != nagbar.cta) {
                text = nagbar.cta.text;
                obj20 = { text };
                tmp26 = obj20;
              }
              help_center_id = nagbar.help_center_id;
              text2 = nagbar.icon;
              tmp25 = { nagbar: obj19 };
              const obj21 = { nagbar: obj19 };
            }
            type = { storefront: tmp25, checkout: tmp27, collected: obj17, flavor: hero_url };
            tmp27 = undefined;
            if (null != offer_notice) {
              const icon = offer_notice.icon;
              obj19 = { icon, text: text2 };
              text2 = offer_notice.text;
              offer_notice = { offerNotice: obj19 };
              tmp27 = offer_notice;
            }
            obj17 = undefined;
            if (null != progress_steps1) {
              offer_notice = { overrideTitle: progress_steps1 };
              obj17 = offer_notice;
            }
          }
        }
        _Date1 = tmp28;
      }
      tmp17 = { collectibles: _Date1 };
      const obj22 = { collectibles: _Date1 };
    }
    if (typeof StorefrontPromotionRecord === "function") {
      const self7 = this;
      const self8 = this;
      const tmp33 = new StorefrontPromotionRecord(tmp10, text, obj20, text2, obj19, progress_steps1, offer_notice, obj17, hero_url, type, tmp18, tmp19, collectibles, target, _Date1, StorefrontPromotionRecord, this, id, application_id, name);
      tmp33.id = id;
      tmp33.applicationId = application_id;
      tmp33.name = name;
      tmp33.displayName = display_name;
      tmp33.rewardType = reward_type;
      tmp33.rewardStatus = reward_status;
      tmp33.rewardConfig = tmp3;
      tmp33.skuIds = tmp7;
      tmp33.appliesToAllSkus = applies_to_all_skus;
      tmp33.includeBundles = include_bundles;
      tmp33.startsAt = date;
      tmp33.endsAt = date1;
      tmp33.redemptionEndsAt = date2;
      tmp33.progress = tmp16;
      tmp33.tenantMetadata = tmp17;
      return tmp33;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/storefront/records/StorefrontPromotionRecord.tsx");

export default StorefrontPromotionRecord;
export const getCollectiblesTargetedOffer = function getCollectiblesTargetedOffer(tenantMetadata) {
  let collectibles;
  if (tenantMetadata != null) {
    tenantMetadata = tenantMetadata.tenantMetadata;
    if (tenantMetadata != null) {
      collectibles = tenantMetadata.collectibles;
    }
  }
  let type;
  if (collectibles != null) {
    type = collectibles.type;
  }
  let tmp3;
  if (type === StorefrontCollectiblesTypes.StorefrontPromotionCollectiblesType.TARGETED_OFFER) {
    tmp3 = collectibles;
  }
  return tmp3;
};
export const getCollectiblesCollectAndClaim = function getCollectiblesCollectAndClaim(tenantMetadata) {
  let collectibles;
  if (tenantMetadata != null) {
    tenantMetadata = tenantMetadata.tenantMetadata;
    if (tenantMetadata != null) {
      collectibles = tenantMetadata.collectibles;
    }
  }
  let type;
  if (collectibles != null) {
    type = collectibles.type;
  }
  let tmp3;
  if (type === StorefrontCollectiblesTypes.StorefrontPromotionCollectiblesType.COLLECT_AND_CLAIM) {
    tmp3 = collectibles;
  }
  return tmp3;
};
