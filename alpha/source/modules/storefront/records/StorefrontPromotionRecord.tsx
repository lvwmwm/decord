// Module ID: 10982
// Function ID: 10983
// Name: StorefrontPromotionRecord
// Dependencies: [1406, 10983, 10985, 10986, 10984, 10987, 10988, 10989, 2]
// Exports: doesStorefrontPromotionCoverSku, getCollectiblesCollectAndClaim, getCollectiblesCollectionSale, getCollectiblesCollectionSequencedOffer, getCollectiblesTargetedOffer

// Module 10982 (StorefrontPromotionRecord)
import StorefrontCollectiblesTypes from "StorefrontCollectiblesTypes" /* 10983 */;
import CollectiblesPromotionIcon from "CollectiblesPromotionIcon" /* 10984 */;
import CollectiblesPromotionBlockTarget from "CollectiblesPromotionBlockTarget" /* 10985 */;
import CollectiblesPromotionBlockStyle from "CollectiblesPromotionBlockStyle" /* 10986 */;
import CollectiblesPromotionCountdownUnit from "CollectiblesPromotionCountdownUnit" /* 10987 */;
import Record from "Record" /* 1406 */;
import size from "module_2" /* 2 */;

let display_name;

function isEnumValue(arg0, arg1) {
  const values = Object.values(arg0);
  return values.includes(arg1);
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
  constructor(skuIds) {
    const tmp3 = new StorefrontPromotionRecord(tmp2, tmp);
    ({ id: tmp3.id, applicationId: tmp3.applicationId, name: tmp3.name, displayName: tmp3.displayName, rewardType: tmp3.rewardType, rewardStatus: tmp3.rewardStatus, rewardConfig: tmp3.rewardConfig } = skuIds);
    skuIds = null;
    if (Array.isArray(skuIds.skuIds)) {
      skuIds = skuIds.skuIds;
    }
    tmp3.skuIds = skuIds;
    ({ appliesToAllSkus: tmp3.appliesToAllSkus, includeBundles: tmp3.includeBundles, startsAt: tmp3.startsAt, endsAt: tmp3.endsAt, redemptionEndsAt: tmp3.redemptionEndsAt, progress: tmp3.progress, tenantMetadata: tmp3.tenantMetadata } = skuIds);
    return tmp3;
  }
  static createFromServer(display_name) {
    let RIGHT;
    let RIGHT2;
    let _Date1;
    let application_id;
    let applies_to_all_skus;
    let countdown_style;
    let flag;
    let flag2;
    let help_center_id;
    let hero_url;
    let id;
    let include_bundles;
    let merged;
    let name;
    let obj10;
    let obj11;
    let obj12;
    let obj14;
    let obj15;
    let obj16;
    let obj17;
    let obj19;
    let obj20;
    let obj21;
    let obj23;
    let obj24;
    let obj7;
    let obj9;
    let offer_notice;
    let orbs_quantity;
    let progress_steps;
    let progress_steps1;
    let reward_status;
    let reward_type;
    let show_countdown_cta;
    let sku_ids;
    let target;
    let text;
    let text2;
    let tmp12;
    let tmp21;
    let tmp30;
    let tmp31;
    let tmp32;
    let tmp33;
    let tmp34;
    let tmp35;
    let tmp36;
    let tmp38;
    let tmp6;
    let type;
    function parseCollectiblesBlocks(target) {
      let NONE;
      if (null != target) {
        const obj2 = {};
        const _Object2 = Object;
        const values = Object.values(CollectiblesPromotionBlockTarget.CollectiblesPromotionBlockTarget);
        const iter = values[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp5 = target[nextResult];
          let tmp6 = tmp5;
          let style;
          let tmp4 = nextResult;
          if (tmp5 != null) {
            style = tmp5.style;
          }
          if (style == null) {
            style = CollectiblesPromotionBlockStyle.CollectiblesPromotionBlockStyle.GREEN;
          }
          let tmp12 = style;
          let icon;
          if (tmp6 != null) {
            icon = tmp6.icon;
          }
          if (icon == null) {
            icon = CollectiblesPromotionIcon.CollectiblesPromotionIcon.TAG;
          }
          let tmp19 = icon;
          let label;
          if (tmp6 != null) {
            label = tmp6.label;
          }
          let tmp22 = null != label;
          if (tmp22) {
            tmp22 = "" !== tmp6.label;
          }
          if (tmp22) {
            tmp22 = isEnumValue(CollectiblesPromotionBlockStyle.CollectiblesPromotionBlockStyle, tmp12);
          }
          if (tmp22) {
            tmp22 = isEnumValue(CollectiblesPromotionIcon.CollectiblesPromotionIcon, tmp19);
          }
          if (tmp22) {
            let obj = { label: tmp6.label, style: tmp12, icon: tmp19, countdownUnit: NONE };
            let tmp42 = require;
            let tmp44 = dependencyMap;
            if (isEnumValue(CollectiblesPromotionCountdownUnit.CollectiblesPromotionCountdownUnit, tmp6.countdown_unit)) {
              NONE = tmp6.countdown_unit;
            } else {
              NONE = tmp42(tmp44[5]).CollectiblesPromotionCountdownUnit.NONE;
            }
            obj2[tmp4] = obj;
          }
          continue;
        }
        const _Object = Object;
        let tmp48;
        if (Object.keys(obj2).length > 0) {
          tmp48 = obj2;
        }
        return tmp48;
      }
    }
    const f98761 = (heroUrl) => ({ heroUrl: heroUrl.hero_url });
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
          let obj = { id: reward_config.discount.id, type: reward_config.discount.type, amount: reward_config.discount.amount, fiatEnabled: reward_config.discount.fiat_enabled };
          tmp5 = obj;
        }
        let obj2 = { discount: tmp5, action: tmp6 };
        tmp6 = null;
        if (null != reward_config.action) {
          const obj3 = { actionType: reward_config.action.action_type, deliveryMode: reward_config.action.delivery_mode, skuIds: sku_ids, orbsBackQuantity: orbs_quantity };
          sku_ids = reward_config.action.sku_ids;
          if (sku_ids == null) {
            sku_ids = [];
          }
          const orbs_back = reward_config.action.orbs_back;
          orbs_quantity = undefined;
          if (orbs_back != null) {
            const first = orbs_back.tiers[0];
            if (first != null) {
              orbs_quantity = first.orbs_quantity;
            }
          }
          if (orbs_quantity == null) {
            orbs_quantity = null;
          }
          tmp6 = obj3;
        }
        tmp4 = obj2;
      }
      tmp3 = tmp4;
    }
    let sku_ids1 = display_name.sku_ids;
    if (sku_ids1 == null) {
      sku_ids1 = null;
    }
    let date = null;
    ({ applies_to_all_skus, include_bundles } = display_name);
    if (null != display_name.starts_at) {
      let tmp11 = globalThis;
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
      let tmp16 = globalThis;
      _Date1 = Date;
      const self5 = this;
      const self6 = this;
      date2 = new Date(display_name.redemption_ends_at);
    }
    let tmp18 = null;
    if (null != display_name.progress) {
      const progress = display_name.progress;
      const obj5 = { current: null, target, label: progress.label };
      ({ current: obj4.current, target } = progress);
      tmp18 = obj5;
    }
    let tmp19 = null;
    if (null != display_name.tenant_metadata) {
      const tenant_metadata = display_name.tenant_metadata;
      _Date1 = undefined;
      if (null != tenant_metadata.collectibles) {
        const collectibles = tenant_metadata.collectibles;
        type = collectibles.type;
        tmp21 = require;
        let tmp22 = dependencyMap;
        if (StorefrontCollectiblesTypes.StorefrontPromotionCollectiblesType.COLLECT_AND_CLAIM === type) {
          type = collectibles.subtype;
          if (tmp21(10983).StorefrontPromotionCollectAndClaimSubtype.TAKEOVER === type) {
            const obj6 = { type: tmp21(10983).StorefrontPromotionCollectiblesType.COLLECT_AND_CLAIM, subtype: tmp21(10983).StorefrontPromotionCollectAndClaimSubtype.TAKEOVER, collectionId: collectibles.collection_id, shopHome: obj7, indexPage: obj14, shared: parseCollectiblesShared(collectibles.shared) };
            const reward_states = collectibles.shop_home.reward_states;
            obj7 = { title: collectibles.shop_home.title, description: collectibles.shop_home.description, rewardStates: obj9, style: tmp34 };
            obj9 = { inProgress: obj10, earned: obj11, consumed: obj12 };
            obj10 = { progressSteps: progress_steps.map(f98761) };
            progress_steps = reward_states.in_progress.progress_steps;
            tmp34 = undefined;
            obj11 = { heroUrl: reward_states.earned.hero_url };
            obj12 = { heroUrl: reward_states.consumed.hero_url };
            if (null != collectibles.shop_home.style) {
              tmp34 = { contentTheme: collectibles.shop_home.style.content_theme };
              const obj13 = { contentTheme: collectibles.shop_home.style.content_theme };
            }
            const reward_states2 = collectibles.index_page.reward_states;
            obj14 = { description: collectibles.index_page.description, rewardStates: obj15, style: tmp35 };
            obj15 = { inProgress: obj16, earned: obj17, consumed: type };
            obj16 = { progressSteps: progress_steps1.map(f98761) };
            progress_steps1 = reward_states2.in_progress.progress_steps;
            type = { heroUrl: hero_url };
            hero_url = reward_states2.consumed.hero_url;
            tmp35 = undefined;
            obj17 = { heroUrl: reward_states2.earned.hero_url };
            if (null != collectibles.index_page.style) {
              type = { contentTheme: collectibles.index_page.style.content_theme };
              tmp35 = type;
            }
            tmp21 = parseCollectiblesShared;
            merged = obj6;
          } else if (tmp21(10983).StorefrontPromotionCollectAndClaimSubtype.BASIC === type) {
            const obj18 = { type: tmp21(10983).StorefrontPromotionCollectiblesType.COLLECT_AND_CLAIM, subtype: tmp21(10983).StorefrontPromotionCollectAndClaimSubtype.BASIC, collectionId: collectibles.collection_id, shopHome: obj19, indexPage: obj21, shared: type };
            obj19 = { title: collectibles.shop_home.title, description: collectibles.shop_home.description, style: tmp32 };
            tmp32 = undefined;
            if (null != collectibles.shop_home.style) {
              obj20 = { contentTheme: collectibles.shop_home.style.content_theme };
              tmp32 = obj20;
            }
            obj21 = { description: collectibles.index_page.description, style: tmp33 };
            tmp33 = undefined;
            if (null != collectibles.index_page.style) {
              obj20 = { contentTheme: collectibles.index_page.style.content_theme };
              tmp33 = obj20;
            }
            hero_url = parseCollectiblesShared;
            type = parseCollectiblesShared(collectibles.shared);
            merged = obj18;
          }
        } else if (tmp21(10983).StorefrontPromotionCollectiblesType.TARGETED_OFFER === type) {
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
            obj20 = reward.collected;
            if (obj20 != null) {
              override_title = obj20.override_title;
            }
          }
          progress_steps1 = undefined;
          if (null != override_title) {
            obj20 = "";
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
                let obj22;
                if (null == hero_url) {
                  type = { type: tmp21(10983).StorefrontPromotionCollectiblesType.TARGETED_OFFER };
                  obj22 = type;
                }
                merged = obj22;
              }
            }
          }
          obj22 = { type: tmp21(10983).StorefrontPromotionCollectiblesType.TARGETED_OFFER, reward: type };
          let tmp29;
          if (null != nagbar) {
            const header_text = nagbar.header_text;
            obj23 = { headerText: header_text, cta: tmp30, helpCenterId: help_center_id, icon: text2 };
            tmp30 = undefined;
            if (null != nagbar.cta) {
              text = nagbar.cta.text;
              obj24 = { text };
              tmp30 = obj24;
            }
            help_center_id = nagbar.help_center_id;
            text2 = nagbar.icon;
            tmp29 = { nagbar: obj23 };
            const obj25 = { nagbar: obj23 };
          }
          type = { storefront: tmp29, checkout: tmp31, collected: obj20, flavor: hero_url };
          tmp31 = undefined;
          if (null != offer_notice) {
            let icon = offer_notice.icon;
            obj23 = { icon, text: text2 };
            text2 = offer_notice.text;
            offer_notice = { offerNotice: obj23 };
            tmp31 = offer_notice;
          }
          obj20 = undefined;
          if (null != progress_steps1) {
            offer_notice = { overrideTitle: progress_steps1 };
            obj20 = offer_notice;
          }
        } else if (tmp21(10983).StorefrontPromotionCollectiblesType.COLLECTION_SALE === type) {
          offer_notice = collectibles.navigation;
          const obj27 = { type: tmp21(10983).StorefrontPromotionCollectiblesType.COLLECTION_SALE, collectionId: null, countdownStyle: null, showCountdownCta: show_countdown_cta, countdownPosition: RIGHT2, showUpsellBlocks: flag2, navigation: type };
          ({ collection_id: obj8.collectionId, countdown_style: obj8.countdownStyle, show_countdown_cta } = collectibles);
          if (show_countdown_cta == null) {
            show_countdown_cta = true;
          }
          RIGHT2 = collectibles.countdown_position;
          if (RIGHT2 == null) {
            RIGHT2 = tmp21(10988).CollectiblesPromotionCountdownPosition.RIGHT;
          }
          flag2 = collectibles.show_upsell_blocks;
          if (flag2 == null) {
            flag2 = false;
          }
          let tab;
          if (offer_notice != null) {
            tab = offer_notice.tab;
          }
          type = undefined;
          if (null != tab) {
            hero_url = { tab: obj20 };
            obj20 = { title: offer_notice.tab.title, icon: offer_notice };
            offer_notice = offer_notice.tab.icon;
            type = hero_url;
          }
          merged = obj27;
        } else if (tmp21(10983).StorefrontPromotionCollectiblesType.COLLECTION_SEQUENCED_OFFER === type) {
          offer_notice = collectibles.navigation;
          const obj28 = { type: tmp21(10983).StorefrontPromotionCollectiblesType.COLLECTION_SEQUENCED_OFFER, collectionId: null, position: null, countdownStyle: countdown_style, showCountdownCta: flag, countdownPosition: RIGHT, navigation: type };
          ({ collection_id: obj26.collectionId, position: obj26.position, countdown_style } = collectibles);
          if (countdown_style == null) {
            countdown_style = tmp21(10989).CollectionPromotionCountdownStyle.DARK;
          }
          flag = collectibles.show_countdown_cta;
          if (flag == null) {
            flag = true;
          }
          RIGHT = collectibles.countdown_position;
          if (RIGHT == null) {
            RIGHT = tmp21(10988).CollectiblesPromotionCountdownPosition.RIGHT;
          }
          let tab1;
          if (offer_notice != null) {
            tab1 = offer_notice.tab;
          }
          type = undefined;
          if (null != tab1) {
            hero_url = { tab: obj20 };
            obj20 = { title: offer_notice.tab.title, icon: offer_notice };
            offer_notice = offer_notice.tab.icon;
            type = hero_url;
          }
          merged = obj28;
        }
        target = collectibles.blocks;
        tmp36 = parseCollectiblesBlocks(target);
        let tmp37 = merged;
        if (null != merged) {
          tmp37 = merged;
          if (null != tmp36) {
            target = { blocks: tmp36 };
            tmp12 = target;
            tmp38 = merged;
            merged = Object.assign(merged);
            tmp37 = target;
          }
        }
        _Date1 = tmp37;
      }
      tmp19 = { collectibles: _Date1 };
      const obj53 = { collectibles: _Date1 };
    }
    if (typeof StorefrontPromotionRecord === "function") {
      let tmp39 = StorefrontPromotionRecord;
      const self7 = this;
      const self8 = this;
      let tmp40 = new StorefrontPromotionRecord(tmp12, tmp38, text, obj24, text2, obj23, progress_steps1, offer_notice, obj20, hero_url, type, tmp21, merged, tmp36, target, _Date1, tmp, this, id, application_id);
      let tmp41 = tmp40;
      tmp40.id = id;
      tmp40.applicationId = application_id;
      tmp40.name = name;
      tmp40.displayName = display_name;
      tmp40.rewardType = reward_type;
      tmp40.rewardStatus = reward_status;
      tmp40.rewardConfig = tmp3;
      let tmp42 = globalThis;
      const _Array = Array;
      let tmp43 = null;
      if (Array.isArray(sku_ids1)) {
        tmp43 = sku_ids1;
      }
      tmp40.skuIds = tmp43;
      tmp40.appliesToAllSkus = applies_to_all_skus;
      tmp40.includeBundles = include_bundles;
      tmp40.startsAt = date;
      tmp40.endsAt = date1;
      tmp40.redemptionEndsAt = date2;
      tmp40.progress = tmp18;
      tmp40.tenantMetadata = tmp19;
      return tmp40;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/storefront/records/StorefrontPromotionRecord.tsx");

export default StorefrontPromotionRecord;
export function getCollectiblesTargetedOffer(tenantMetadata) {
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
}
export function getCollectiblesCollectAndClaim(tenantMetadata) {
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
}
export function getCollectiblesCollectionSale(tenantMetadata) {
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
  if (type === StorefrontCollectiblesTypes.StorefrontPromotionCollectiblesType.COLLECTION_SALE) {
    tmp3 = collectibles;
  }
  return tmp3;
}
export function getCollectiblesCollectionSequencedOffer(tenantMetadata) {
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
  if (type === StorefrontCollectiblesTypes.StorefrontPromotionCollectiblesType.COLLECTION_SEQUENCED_OFFER) {
    tmp3 = collectibles;
  }
  return tmp3;
}
export function doesStorefrontPromotionCoverSku(appliesToAllSkus, arg1) {
  appliesToAllSkus = appliesToAllSkus.appliesToAllSkus;
  if (!appliesToAllSkus) {
    let tmp3 = null != arg1;
    if (tmp3) {
      const skuIds = appliesToAllSkus.skuIds;
      let hasItem;
      if (skuIds != null) {
        hasItem = skuIds.includes(arg1);
      }
      tmp3 = true === hasItem;
    }
    appliesToAllSkus = tmp3;
  }
  return appliesToAllSkus;
}
