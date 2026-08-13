// Module ID: 12574
// Function ID: 12575
// Name: ShopThisLookMenuAction
// Dependencies: [676, 1949, 698, 2]
// Exports: trackShopThisLookMenuAction, trackShopThisLookRowAction

// Module 12574 (ShopThisLookMenuAction)
import { AnalyticEvents } from "ME";

let obj = { PROFILE_FRAME: "profile_frame", PROFILE_EFFECT: "profile_effect", AVATAR_DECORATION: "avatar_decoration", NAMEPLATE: "nameplate" };
const result = require("expandEventProperties").fileFinishedImporting("modules/collectibles/shop_this_look/ShopThisLookAnalyticsUtils.tsx");

export const ShopThisLookMenuAction = { MENU_VIEWED: "menu_viewed", COACHMARK_VIEWED: "coachmark_viewed", COACHMARK_CTA_CLICKED: "coachmark_cta_clicked", COACHMARK_DISMISSED: "coachmark_dismissed", RED_DOT_VIEWED: "red_dot_viewed", RED_DOT_DISMISSED: "red_dot_dismissed" };
export const ShopThisLookRowAction = { ROW_VIEWED: "row_viewed", ROW_CLICKED: "row_clicked" };
export const ShopThisLookProductType = obj;
export const trackShopThisLookMenuAction = function trackShopThisLookMenuAction(COACHMARK_CTA_CLICKED, ACTION_SHEET) {
  let obj = importDefault(698);
  obj = { action: COACHMARK_CTA_CLICKED, source: null };
  obj[1] = ACTION_SHEET;
  obj.track(AnalyticEvents.SHOP_THIS_LOOK_MENU_ACTION, obj);
};
export const trackShopThisLookRowAction = function trackShopThisLookRowAction(arg0) {
  let action;
  let isDisabled;
  let productType;
  let skuId;
  let source;
  ({ productType, source } = arg0);
  ({ action, skuId, isDisabled } = arg0);
  let obj = importDefault(698);
  obj = { action, sku_id: skuId, product_type: null, is_disabled: null, source: null };
  if (require(1949) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME === productType) {
    let NAMEPLATE = obj.PROFILE_FRAME;
  } else if (tmp2(1949).CollectiblesItemType.PROFILE_EFFECT === productType) {
    NAMEPLATE = obj.PROFILE_EFFECT;
  } else if (tmp2(1949).CollectiblesItemType.AVATAR_DECORATION === productType) {
    NAMEPLATE = obj.AVATAR_DECORATION;
  } else if (tmp2(1949).CollectiblesItemType.NAMEPLATE === productType) {
    NAMEPLATE = obj.NAMEPLATE;
  }
  obj[2] = NAMEPLATE;
  obj[3] = isDisabled;
  obj[4] = source;
  obj.track(AnalyticEvents.SHOP_THIS_LOOK_ROW_ACTION, obj);
};
