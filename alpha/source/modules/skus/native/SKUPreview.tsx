// Module ID: 9462
// Function ID: 9463
// Name: SKUPreview
// Dependencies: [19, 17, 8489, 1072, 21, 5306, 9463, 575, 9402, 9489, 2114, 9500, 9491, 9512, 9514, 9515, 5902, 5477, 1255, 2]
// Exports: default

// Module 9462 (SKUPreview)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import GlobalUtils from "GlobalUtils" /* 1255 */;
import CollectiblesItemType from "CollectiblesItemType" /* 2114 */;
import useToken from "useToken" /* 5902 */;
import CollectiblesItemRecord from "CollectiblesItemRecord" /* 8489 */;
import useShopProductItems from "useShopProductItems" /* 9402 */;
import WishlistItemCardBase from "WishlistItemCardBase" /* 9463 */;
import ProfileFrameSamplePreviewDefault from "ProfileFrameSamplePreview" /* 9512 */;
import SlayerStorefrontItemCardDefault from "SlayerStorefrontItemCard" /* 9515 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5306 */;
import size_mod from "module_2" /* 2 */;

class CollectiblesPreview {
  constructor(arg0) {
    let collectiblesItemData;
    ({ collectiblesItemData, size } = arg0);
    if (size === undefined) {
      size = WishlistItemCardBase.DEFAULT_ITEM_SIZE;
    }
    let size2 = size;
    if (typeof size === "number") {
      const size1 = { width: size, height: size };
      size2 = size1;
    }
    const tmp3 = closure_8(size2.width, size2.height);
    if ("bundle" === collectiblesItemData.type) {
      const self = this;
      const self2 = this;
      const itemsSortingHat = new useShopProductItems.ItemsSortingHat(collectiblesItemData.items);
      const items = [, ];
      ({ scaler: arr2[0], bundleContainer: arr2[1] } = tmp3);
      ({ firstAvatarDecoration: obj15.deco, firstProfileEffect: obj15.pfx, firstNameplate: obj15.nameplate } = itemsSortingHat);
      return <View style={tmp3.container}>{null}</View>;
    } else {
      const type = collectiblesItemData.item.type;
      if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
        return <View style={tmp3.container}>{null}</View>;
      } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
        return <View style={tmp3.container}>{null}</View>;
      } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME === type) {
        const items1 = [, ];
        ({ scaler: arr[0], profileFrameContainer: arr[1] } = tmp3);
        ({ profileFrame: collectiblesItemData.item, previewWidth: WishlistItemCardBase.DEFAULT_ITEM_SIZE - nativeDefault.space.PX_48, previewHeight: WishlistItemCardBase.DEFAULT_ITEM_SIZE });
        ProfileFrameSamplePreviewDefault;
        return <View style={tmp3.container}>{null}</View>;
      } else if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
        return <View style={tmp3.container}>{null}</View>;
      } else {
        return null;
      }
    }
  }
}
function CollectiblesSKUPreview(sku) {
  sku = sku.sku;
  let DEFAULT_ITEM_SIZE = sku.size;
  if (DEFAULT_ITEM_SIZE === undefined) {
    DEFAULT_ITEM_SIZE = sku(9463).DEFAULT_ITEM_SIZE;
  }
  const items = [sku];
  const memo = react.useMemo(() => closure_5(sku), items);
  let tmp4 = null;
  if (null != memo) {
    tmp4 = <CollectiblesPreview collectiblesItemData={memo} size={DEFAULT_ITEM_SIZE} />;
  }
  return tmp4;
}
class SocialLayerStorefrontSKUPreview {
  constructor(size) {
    let DEFAULT_ITEM_SIZE = size.size;
    const sku = size.sku;
    if (DEFAULT_ITEM_SIZE === undefined) {
      DEFAULT_ITEM_SIZE = WishlistItemCardBase.DEFAULT_ITEM_SIZE;
    }
    size = DEFAULT_ITEM_SIZE;
    if (typeof DEFAULT_ITEM_SIZE === "number") {
      const size1 = { width: DEFAULT_ITEM_SIZE, height: DEFAULT_ITEM_SIZE };
      size = size1;
    }
    return jsx(SlayerStorefrontItemCardDefault, { sku, containerStyle: closure_8(size.width, size.height).socialLayerStorefrontContainer });
  }
}
class PremiumSKUPreview {
  constructor(size) {
    let DEFAULT_ITEM_SIZE = size.size;
    if (DEFAULT_ITEM_SIZE === undefined) {
      DEFAULT_ITEM_SIZE = WishlistItemCardBase.DEFAULT_ITEM_SIZE;
    }
    size = DEFAULT_ITEM_SIZE;
    if (typeof DEFAULT_ITEM_SIZE === "number") {
      const size1 = { width: DEFAULT_ITEM_SIZE, height: DEFAULT_ITEM_SIZE };
      size = size1;
    }
    const tmp3 = closure_8(size.width, size.height);
    const obj = useToken;
    const token = obj.useToken(nativeDefault.colors.TEXT_DEFAULT);
    return <View style={tmp3.premiumRiveContainer}>{null}</View>;
  }
}
const View = react_native.View;
let closure_5 = CollectiblesItemRecord.transformSKUToCollectiblesItem;
const SKUProductLines = Constants.SKUProductLines;
const jsx = Fragment.jsx;
const metroImportAll = createStyles.createStyles((width, height) => {
  let items;
  const obj = { container: { width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }, scaler: size, bundleContainer: { paddingTop: 20 }, socialLayerStorefrontContainer: { width, height }, profileFrameContainer: { padding: nativeDefault.space.PX_8 }, premiumRiveContainer: { width, height } };
  size = { width: WishlistItemCardBase.DEFAULT_ITEM_SIZE, height: WishlistItemCardBase.DEFAULT_ITEM_SIZE, justifyContent: "center", alignItems: "center", transform: items };
  items = [{ scaleX: width / WishlistItemCardBase.DEFAULT_ITEM_SIZE }, ];
  ({ scaleX: width / WishlistItemCardBase.DEFAULT_ITEM_SIZE });
  items[1] = { scaleY: height / WishlistItemCardBase.DEFAULT_ITEM_SIZE };
  ({ scaleY: height / WishlistItemCardBase.DEFAULT_ITEM_SIZE });
  ({ padding: nativeDefault.space.PX_8 });
  return obj;
});
let size = { width: WishlistItemCardBase.DEFAULT_ITEM_SIZE, height: WishlistItemCardBase.DEFAULT_ITEM_SIZE };
size = size_mod;
const result = size.fileFinishedImporting("modules/skus/native/SKUPreview.tsx");

export default function SKUPreview(arg0) {
  let sku;
  ({ sku, size } = arg0);
  if (size === undefined) {
    size = WishlistItemCardBase.DEFAULT_ITEM_SIZE;
  }
  const productLine = sku.productLine;
  if (SKUProductLines.COLLECTIBLES === productLine) {
    return <CollectiblesSKUPreview sku={sku} size={size} />;
  } else if (SKUProductLines.SOCIAL_LAYER_GAME_ITEM === productLine) {
    return <SocialLayerStorefrontSKUPreview sku={sku} size={size} />;
  } else if (SKUProductLines.PREMIUM === productLine) {
    return <PremiumSKUPreview size={size} />;
  } else {
    if (SKUProductLines.APPLICATION !== productLine) {
      if (SKUProductLines.BOOST !== productLine) {
        if (SKUProductLines.GUILD_ROLE !== productLine) {
          if (SKUProductLines.GUILD_PRODUCT !== productLine) {
            const obj = GlobalUtils;
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
