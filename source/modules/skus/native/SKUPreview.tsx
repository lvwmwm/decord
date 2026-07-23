// Module ID: 8672
// Function ID: 68614
// Name: resolveSize
// Dependencies: [31, 27, 6778, 653, 33, 4130, 8673, 689, 8696, 8207, 8215, 1876, 8226, 8216, 8697, 8699, 7791, 8212, 3834, 3842, 1327, 2]
// Exports: default

// Module 8672 (resolveSize)
import result from "result";
import { View } from "get ActivityIndicator";
import { transformSKUToCollectiblesItem as closure_5 } from "_createForOfIteratorHelperLoose";
import { SKUProductLines } from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function resolveSize(DEFAULT_ITEM_SIZE) {
  let tmp = DEFAULT_ITEM_SIZE;
  if ("number" === typeof DEFAULT_ITEM_SIZE) {
    const obj = { width: DEFAULT_ITEM_SIZE, height: DEFAULT_ITEM_SIZE };
    tmp = obj;
  }
  return tmp;
}
class CollectiblesPreview {
  constructor(arg0) {
    ({ collectiblesItemData, size } = global);
    if (size === undefined) {
      tmp = closure_0;
      tmp2 = closure_2;
      num = 6;
      size = require("SourceIcon").DEFAULT_ITEM_SIZE;
    }
    size2 = resolveSize(size);
    tmp3 = f68621(size2.width, size2.height);
    if ("bundle" === collectiblesItemData.type) {
      tmp35 = closure_0;
      tmp36 = closure_2;
      num9 = 8;
      obj13 = require("extractBundleItemsFromArray");
      if (obj13.isValidCollectiblesBundleItems(collectiblesItemData.items)) {
        tmp38 = closure_0;
        tmp39 = closure_2;
        num10 = 9;
        ItemsSortingHat = require("ItemsSortingHat").ItemsSortingHat;
        prototype = ItemsSortingHat.prototype;
        tmp40 = new.target;
        tmp41 = new.target;
        itemsSortingHat = new ItemsSortingHat(collectiblesItemData.items);
        tmp43 = itemsSortingHat;
        tmp44 = jsx;
        tmp45 = View;
        obj = {};
        obj.style = tmp3.container;
        tmp46 = jsx;
        tmp47 = View;
        obj1 = {};
        items = [, ];
        ({ scaler: arr2[0], bundleContainer: arr2[1] } = tmp3);
        obj1.style = items;
        tmp48 = jsx;
        tmp49 = closure_1;
        num11 = 10;
        obj2 = {};
        ({ firstAvatarDecoration: obj16.deco, firstProfileEffect: obj16.pfx, firstNameplate: obj16.nameplate } = itemsSortingHat);
        str = "small";
        obj2.size = "small";
        obj2.previewAssets = collectiblesItemData.previewAssets;
        flag2 = true;
        obj2.disableStaticBackground = true;
        tmp50 = f68621;
        obj2.targetSize = f68621;
        obj1.children = jsx(require("getSizedAssetUri"), obj2);
        obj.children = jsx(View, obj1);
        return jsx(View, obj);
      } else {
        tmp37 = null;
        return null;
      }
    } else {
      type = collectiblesItemData.item.type;
      tmp51 = closure_0;
      tmp52 = closure_2;
      num12 = 11;
      if (require("CollectiblesItemType").CollectiblesItemType.AVATAR_DECORATION === type) {
        tmp28 = jsx;
        tmp29 = View;
        obj3 = {};
        obj3.style = tmp3.container;
        tmp30 = jsx;
        tmp31 = View;
        obj4 = {};
        obj4.style = tmp3.scaler;
        tmp32 = jsx;
        tmp33 = closure_1;
        tmp34 = closure_2;
        num7 = 12;
        obj5 = {};
        obj5.item = collectiblesItemData.item;
        num8 = 100;
        obj5.size = 100;
        obj4.children = jsx(require("AvatarDecorationSampleV2"), obj5);
        obj3.children = jsx(View, obj4);
        return jsx(View, obj3);
      } else {
        tmp53 = closure_0;
        tmp54 = closure_2;
        if (require("CollectiblesItemType").CollectiblesItemType.PROFILE_EFFECT === type) {
          tmp21 = jsx;
          tmp22 = View;
          obj6 = {};
          obj6.style = tmp3.container;
          tmp23 = jsx;
          tmp24 = View;
          obj7 = {};
          obj7.style = tmp3.scaler;
          tmp25 = jsx;
          tmp26 = closure_1;
          tmp27 = closure_2;
          num6 = 13;
          obj8 = {};
          obj8.item = collectiblesItemData.item;
          flag = true;
          obj8.hideBackground = true;
          obj7.children = jsx(require("ProfileEffectSample"), obj8);
          obj6.children = jsx(View, obj7);
          return jsx(View, obj6);
        } else {
          tmp55 = closure_0;
          tmp56 = closure_2;
          if (require("CollectiblesItemType").CollectiblesItemType.PROFILE_FRAME === type) {
            tmp12 = jsx;
            tmp13 = View;
            obj9 = {};
            obj9.style = tmp3.container;
            tmp14 = jsx;
            tmp15 = View;
            obj10 = {};
            items1 = [, ];
            ({ scaler: arr[0], profileFrameContainer: arr[1] } = tmp3);
            obj10.style = items1;
            tmp16 = jsx;
            tmp17 = closure_1;
            tmp18 = closure_2;
            num3 = 14;
            obj11 = {};
            obj11.profileFrame = collectiblesItemData.item;
            tmp20 = closure_0;
            num4 = 6;
            tmp19 = require("filterLayer");
            num5 = 7;
            obj11.previewWidth = require("SourceIcon").DEFAULT_ITEM_SIZE - require("_createForOfIteratorHelperLoose").space.PX_48;
            obj11.previewHeight = require("SourceIcon").DEFAULT_ITEM_SIZE;
            obj10.children = jsx(tmp19, obj11);
            obj9.children = jsx(View, obj10);
            return jsx(View, obj9);
          } else {
            tmp57 = closure_0;
            tmp58 = closure_2;
            if (require("CollectiblesItemType").CollectiblesItemType.NAMEPLATE === type) {
              tmp5 = jsx;
              tmp6 = View;
              obj = {};
              obj.style = tmp3.container;
              tmp7 = jsx;
              tmp8 = View;
              obj12 = {};
              obj12.style = tmp3.scaler;
              tmp9 = jsx;
              tmp10 = closure_1;
              tmp11 = closure_2;
              num2 = 15;
              obj13 = {};
              obj13.item = collectiblesItemData.item;
              obj12.children = jsx(require("NameplateCardPreview"), obj13);
              obj.children = jsx(View, obj12);
              return jsx(View, obj);
            } else {
              tmp4 = null;
              return null;
            }
          }
        }
      }
    }
  }
}
function CollectiblesSKUPreview(sku) {
  sku = sku.sku;
  let DEFAULT_ITEM_SIZE = sku.size;
  if (DEFAULT_ITEM_SIZE === undefined) {
    DEFAULT_ITEM_SIZE = sku(8673).DEFAULT_ITEM_SIZE;
  }
  const items = [sku];
  const memo = React.useMemo(() => outer1_5(sku), items);
  let tmp4 = null;
  if (null != memo) {
    const obj = { collectiblesItemData: memo, size: DEFAULT_ITEM_SIZE };
    tmp4 = <CollectiblesPreview collectiblesItemData={memo} size={DEFAULT_ITEM_SIZE} />;
  }
  return tmp4;
}
class SocialLayerStorefrontSKUPreview {
  constructor(arg0) {
    DEFAULT_ITEM_SIZE = global.size;
    if (DEFAULT_ITEM_SIZE === undefined) {
      tmp = closure_0;
      tmp2 = closure_2;
      num = 6;
      DEFAULT_ITEM_SIZE = require("SourceIcon").DEFAULT_ITEM_SIZE;
    }
    size = resolveSize(DEFAULT_ITEM_SIZE);
    tmp3 = f68621(size.width, size.height);
    obj = require("apexExperiment");
    tmp4 = null;
    if (obj.useIsEligibleForSocialLayerStorefrontMobilePurchasing({ location: "sku_preview" })) {
      tmp5 = jsx;
      tmp6 = closure_1;
      tmp7 = closure_2;
      num2 = 17;
      obj = {};
      obj.sku = global.sku;
      obj.containerStyle = tmp3.socialLayerStorefrontContainer;
      tmp4 = jsx(require("SlayerStorefrontItemCard"), obj);
    }
    return tmp4;
  }
}
class PremiumSKUPreview {
  constructor(arg0) {
    DEFAULT_ITEM_SIZE = global.size;
    if (DEFAULT_ITEM_SIZE === undefined) {
      tmp = closure_0;
      tmp2 = closure_2;
      num = 6;
      DEFAULT_ITEM_SIZE = require("SourceIcon").DEFAULT_ITEM_SIZE;
    }
    size = resolveSize(DEFAULT_ITEM_SIZE);
    tmp3 = f68621(size.width, size.height);
    obj = require("map");
    obj = { style: tmp3.premiumRiveContainer };
    token = obj.useToken(require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT);
    obj.children = jsx(require("ManaContext").ThemeAwareNitroWishlistingWumpusRive, { dataBinding: { logoColor: token } });
    return jsx(View, obj);
  }
}
let closure_8 = _createForOfIteratorHelperLoose.createStyles((width, height) => {
  let obj = { container: { width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" } };
  obj = { width: require(8673) /* SourceIcon */.DEFAULT_ITEM_SIZE, height: require(8673) /* SourceIcon */.DEFAULT_ITEM_SIZE, justifyContent: "center", alignItems: "center" };
  obj = { scaleX: width / require(8673) /* SourceIcon */.DEFAULT_ITEM_SIZE };
  const items = [obj, { scaleY: height / require(8673) /* SourceIcon */.DEFAULT_ITEM_SIZE }];
  obj.transform = items;
  obj.scaler = obj;
  obj.bundleContainer = { paddingTop: 20 };
  obj.socialLayerStorefrontContainer = { width, height };
  const obj1 = { scaleY: height / require(8673) /* SourceIcon */.DEFAULT_ITEM_SIZE };
  obj.profileFrameContainer = { padding: importDefault(689).space.PX_8 };
  obj.premiumRiveContainer = { width, height };
  return obj;
});
_createForOfIteratorHelperLoose = { width: require("SourceIcon").DEFAULT_ITEM_SIZE, height: require("SourceIcon").DEFAULT_ITEM_SIZE };
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/skus/native/SKUPreview.tsx");

export default function SKUPreview(arg0) {
  let size;
  let sku;
  ({ sku, size } = arg0);
  if (size === undefined) {
    size = require(8673) /* SourceIcon */.DEFAULT_ITEM_SIZE;
  }
  const productLine = sku.productLine;
  if (SKUProductLines.COLLECTIBLES === productLine) {
    let obj = { sku, size };
    return <CollectiblesSKUPreview sku={sku} size={size} />;
  } else if (SKUProductLines.SOCIAL_LAYER_GAME_ITEM === productLine) {
    obj = { sku, size };
    return <SocialLayerStorefrontSKUPreview sku={sku} size={size} />;
  } else if (SKUProductLines.PREMIUM === productLine) {
    const obj1 = { size };
    return <PremiumSKUPreview size={size} />;
  } else {
    if (SKUProductLines.APPLICATION !== productLine) {
      if (SKUProductLines.BOOST !== productLine) {
        if (SKUProductLines.GUILD_ROLE !== productLine) {
          if (SKUProductLines.GUILD_PRODUCT !== productLine) {
            obj = require(1327) /* isDiscordFrontendDevelopment */;
            obj.assertNever(sku.productLine);
          }
        }
      }
    }
    return null;
  }
};
export { CollectiblesPreview };
export { SocialLayerStorefrontSKUPreview };
export { PremiumSKUPreview };
