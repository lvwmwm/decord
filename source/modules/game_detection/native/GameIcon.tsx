// Module ID: 5474
// Function ID: 46780
// Name: GameIcon
// Dependencies: [31, 27, 1851, 33, 4130, 689, 5475, 5476, 5477, 5478, 2]

// Module 5474 (GameIcon)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { PremiumSubscriptionSKUs } from "GuildFeatures";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_2;
let closure_3;
class GameIcon {
  constructor(arg0) {
    ({ game, skuId, size } = global);
    if (size === undefined) {
      tmp = Image;
      size = Image.NORMAL;
    }
    tmp2 = c8();
    obj = { [closure_6.NORMAL]: tmp2.normal, [closure_6.SMALL]: tmp2.small, [closure_6.SIZE_24]: tmp2.size24, [closure_6.LARGE]: tmp2.large };
    items = [, , ];
    items[0] = tmp2.gameIcon;
    items[1] = obj[size];
    items[2] = global.style;
    if (null == skuId) {
      tmp15 = undefined;
      if (null != game) {
        if (null == undefined) {
          tmp16 = large;
          iconURL = game.getIconURL(large[size]);
          if (null != iconURL) {
            obj = {};
            obj.uri = iconURL;
            tmp15 = obj;
          }
        }
      }
      if (null == tmp15) {
        tmp18 = closure_0;
        tmp19 = closure_1;
        num4 = 9;
        tmp15 = require("registerAsset");
        arr = items.push(tmp2.placeholder);
      }
      tmp21 = jsx;
      tmp22 = View;
      obj1 = {};
      items1 = [, ];
      items1[0] = items;
      items1[1] = tmp2.entityWrapper;
      obj1.style = items1;
      tmp23 = jsx;
      tmp24 = Image;
      obj2 = {};
      obj2.style = obj[size];
      obj2.source = tmp15;
      obj1.children = jsx(Image, obj2);
      return jsx(View, obj1);
    } else {
      tmp3 = PremiumSubscriptionSKUs;
      if (PremiumSubscriptionSKUs.TIER_0 === skuId) {
        tmp12 = closure_0;
        tmp13 = closure_1;
        num3 = 6;
        tmp7 = require("registerAsset");
        tmp14 = tmp7;
      } else {
        tmp4 = PremiumSubscriptionSKUs;
        if (PremiumSubscriptionSKUs.TIER_1 !== skuId) {
          tmp5 = PremiumSubscriptionSKUs;
          if (PremiumSubscriptionSKUs.TIER_2 === skuId) {
            tmp8 = closure_0;
            tmp9 = closure_1;
            num = 8;
            tmp7 = require("registerAsset");
          } else {
            tmp6 = PremiumSubscriptionSKUs;
            tmp7 = null;
          }
        }
      }
      tmp10 = closure_0;
      tmp11 = closure_1;
      num2 = 7;
      tmp7 = require("registerAsset");
    }
    return;
  }
}
({ Image: closure_2, View: closure_3 } = get_ActivityIndicator);
let obj = { SIZE_24: "size_24", SMALL: "small", NORMAL: "normal", LARGE: "large" };
obj = { [obj.SIZE_24]: 24, [obj.SMALL]: 32, [obj.NORMAL]: 48, [obj.LARGE]: 80 };
obj = { gameIcon: { justifyContent: "center", alignItems: "center" } };
obj.size24 = { width: obj.size_24, height: obj.size_24, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose = { width: obj.small, height: obj.small, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
obj.small = _createForOfIteratorHelperLoose;
let obj1 = { width: obj.size_24, height: obj.size_24, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
obj.normal = { width: obj.normal, height: obj.normal, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg };
const obj3 = { width: obj.normal, height: obj.normal, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg };
obj.large = { width: obj.large, height: obj.large, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
const obj4 = { width: obj.large, height: obj.large, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
obj.placeholder = { borderRadius: require("_createForOfIteratorHelperLoose").radii.none, tintColor: require("_createForOfIteratorHelperLoose").colors.ICON_MUTED };
const obj6 = { borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, overflow: "hidden" };
obj.entityWrapper = obj6;
let closure_8 = _createForOfIteratorHelperLoose.createStyles(obj);
GameIcon.Sizes = obj;
const obj5 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.none, tintColor: require("_createForOfIteratorHelperLoose").colors.ICON_MUTED };
const result = require("GuildFeatures").fileFinishedImporting("modules/game_detection/native/GameIcon.tsx");

export default GameIcon;
export const GameIconSizes = obj;
export const GameIconImageSize = obj;
