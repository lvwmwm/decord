// Module ID: 8665
// Function ID: 68574
// Name: resolveSize
// Dependencies: []
// Exports: default

// Module 8665 (resolveSize)
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
      tmp = arg1;
      tmp2 = dependencyMap;
      num = 6;
      size = arg1(dependencyMap[6]).DEFAULT_ITEM_SIZE;
    }
    size2 = resolveSize(size);
    tmp3 = f68581(size2.width, size2.height);
    if ("bundle" === collectiblesItemData.type) {
      tmp35 = arg1;
      tmp36 = dependencyMap;
      num9 = 8;
      obj13 = arg1(dependencyMap[8]);
      if (obj13.isValidCollectiblesBundleItems(collectiblesItemData.items)) {
        tmp38 = arg1;
        tmp39 = dependencyMap;
        num10 = 9;
        ItemsSortingHat = arg1(dependencyMap[9]).ItemsSortingHat;
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
        tmp49 = importDefault;
        num11 = 10;
        obj2 = {};
        ({ firstAvatarDecoration: obj16.deco, firstProfileEffect: obj16.pfx, firstNameplate: obj16.nameplate } = itemsSortingHat);
        str = "small";
        obj2.size = "small";
        obj2.previewAssets = collectiblesItemData.previewAssets;
        flag2 = true;
        obj2.disableStaticBackground = true;
        tmp50 = f68581;
        obj2.targetSize = f68581;
        obj1.children = jsx(importDefault(dependencyMap[10]), obj2);
        obj.children = jsx(View, obj1);
        return jsx(View, obj);
      } else {
        tmp37 = null;
        return null;
      }
    } else {
      type = collectiblesItemData.item.type;
      tmp51 = arg1;
      tmp52 = dependencyMap;
      num12 = 11;
      if (arg1(dependencyMap[11]).CollectiblesItemType.AVATAR_DECORATION === type) {
        tmp28 = jsx;
        tmp29 = View;
        obj3 = {};
        obj3.style = tmp3.container;
        tmp30 = jsx;
        tmp31 = View;
        obj4 = {};
        obj4.style = tmp3.scaler;
        tmp32 = jsx;
        tmp33 = importDefault;
        tmp34 = dependencyMap;
        num7 = 12;
        obj5 = {};
        obj5.item = collectiblesItemData.item;
        num8 = 100;
        obj5.size = 100;
        obj4.children = jsx(importDefault(dependencyMap[12]), obj5);
        obj3.children = jsx(View, obj4);
        return jsx(View, obj3);
      } else {
        tmp53 = arg1;
        tmp54 = dependencyMap;
        if (arg1(dependencyMap[11]).CollectiblesItemType.PROFILE_EFFECT === type) {
          tmp21 = jsx;
          tmp22 = View;
          obj6 = {};
          obj6.style = tmp3.container;
          tmp23 = jsx;
          tmp24 = View;
          obj7 = {};
          obj7.style = tmp3.scaler;
          tmp25 = jsx;
          tmp26 = importDefault;
          tmp27 = dependencyMap;
          num6 = 13;
          obj8 = {};
          obj8.item = collectiblesItemData.item;
          flag = true;
          obj8.hideBackground = true;
          obj7.children = jsx(importDefault(dependencyMap[13]), obj8);
          obj6.children = jsx(View, obj7);
          return jsx(View, obj6);
        } else {
          tmp55 = arg1;
          tmp56 = dependencyMap;
          if (arg1(dependencyMap[11]).CollectiblesItemType.PROFILE_FRAME === type) {
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
            tmp17 = importDefault;
            tmp18 = dependencyMap;
            num3 = 14;
            obj11 = {};
            obj11.profileFrame = collectiblesItemData.item;
            tmp20 = arg1;
            num4 = 6;
            tmp19 = importDefault(dependencyMap[14]);
            num5 = 7;
            obj11.previewWidth = arg1(dependencyMap[6]).DEFAULT_ITEM_SIZE - importDefault(dependencyMap[7]).space.PX_48;
            obj11.previewHeight = arg1(dependencyMap[6]).DEFAULT_ITEM_SIZE;
            obj10.children = jsx(tmp19, obj11);
            obj9.children = jsx(View, obj10);
            return jsx(View, obj9);
          } else {
            tmp57 = arg1;
            tmp58 = dependencyMap;
            if (arg1(dependencyMap[11]).CollectiblesItemType.NAMEPLATE === type) {
              tmp5 = jsx;
              tmp6 = View;
              obj = {};
              obj.style = tmp3.container;
              tmp7 = jsx;
              tmp8 = View;
              obj12 = {};
              obj12.style = tmp3.scaler;
              tmp9 = jsx;
              tmp10 = importDefault;
              tmp11 = dependencyMap;
              num2 = 15;
              obj13 = {};
              obj13.item = collectiblesItemData.item;
              obj12.children = jsx(importDefault(dependencyMap[15]), obj13);
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
  const arg1 = sku;
  let DEFAULT_ITEM_SIZE = sku.size;
  if (DEFAULT_ITEM_SIZE === undefined) {
    DEFAULT_ITEM_SIZE = arg1(dependencyMap[6]).DEFAULT_ITEM_SIZE;
  }
  const items = [sku];
  const memo = React.useMemo(() => callback(sku), items);
  let tmp4 = null;
  if (null != memo) {
    const obj = { collectiblesItemData: memo, size: DEFAULT_ITEM_SIZE };
    tmp4 = <CollectiblesPreview {...obj} />;
  }
  return tmp4;
}
class SocialLayerStorefrontSKUPreview {
  constructor(arg0) {
    DEFAULT_ITEM_SIZE = global.size;
    if (DEFAULT_ITEM_SIZE === undefined) {
      tmp = arg1;
      tmp2 = dependencyMap;
      num = 6;
      DEFAULT_ITEM_SIZE = arg1(dependencyMap[6]).DEFAULT_ITEM_SIZE;
    }
    size = resolveSize(DEFAULT_ITEM_SIZE);
    tmp3 = f68581(size.width, size.height);
    obj = arg1(dependencyMap[16]);
    tmp4 = null;
    if (obj.useIsEligibleForSocialLayerStorefrontMobilePurchasing({ location: "sku_preview" })) {
      tmp5 = jsx;
      tmp6 = importDefault;
      tmp7 = dependencyMap;
      num2 = 17;
      obj = {};
      obj.sku = global.sku;
      obj.containerStyle = tmp3.socialLayerStorefrontContainer;
      tmp4 = jsx(importDefault(dependencyMap[17]), obj);
    }
    return tmp4;
  }
}
class PremiumSKUPreview {
  constructor(arg0) {
    DEFAULT_ITEM_SIZE = global.size;
    if (DEFAULT_ITEM_SIZE === undefined) {
      tmp = arg1;
      tmp2 = dependencyMap;
      num = 6;
      DEFAULT_ITEM_SIZE = arg1(dependencyMap[6]).DEFAULT_ITEM_SIZE;
    }
    size = resolveSize(DEFAULT_ITEM_SIZE);
    tmp3 = f68581(size.width, size.height);
    obj = arg1(dependencyMap[18]);
    obj = { style: tmp3.premiumRiveContainer };
    token = obj.useToken(importDefault(dependencyMap[7]).colors.TEXT_DEFAULT);
    obj.children = jsx(arg1(dependencyMap[19]).ThemeAwareNitroWishlistingWumpusRive, { dataBinding: { logoColor: token } });
    return jsx(View, obj);
  }
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = arg1(dependencyMap[2]).transformSKUToCollectiblesItem;
const SKUProductLines = arg1(dependencyMap[3]).SKUProductLines;
const jsx = arg1(dependencyMap[4]).jsx;
let obj = arg1(dependencyMap[5]);
let closure_8 = obj.createStyles((width, height) => {
  let obj = { container: { 0: null, 0: null, 9223372036854775807: null, 0: null, 0: null } };
  obj = { width: height(dependencyMap[6]).DEFAULT_ITEM_SIZE, height: height(dependencyMap[6]).DEFAULT_ITEM_SIZE, justifyContent: "center", alignItems: "center" };
  obj = { scaleX: width / height(dependencyMap[6]).DEFAULT_ITEM_SIZE };
  const items = [obj, { scaleY: height / height(dependencyMap[6]).DEFAULT_ITEM_SIZE }];
  obj.transform = items;
  obj.scaler = obj;
  obj.bundleContainer = { paddingTop: 20 };
  obj.socialLayerStorefrontContainer = { width, height };
  const obj1 = { scaleY: height / height(dependencyMap[6]).DEFAULT_ITEM_SIZE };
  obj.profileFrameContainer = { padding: importDefault(dependencyMap[7]).space.PX_8 };
  obj.premiumRiveContainer = { width, height };
  return obj;
});
obj = { width: arg1(dependencyMap[6]).DEFAULT_ITEM_SIZE, height: arg1(dependencyMap[6]).DEFAULT_ITEM_SIZE };
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/skus/native/SKUPreview.tsx");

export default function SKUPreview(arg0) {
  let size;
  let sku;
  ({ sku, size } = arg0);
  if (size === undefined) {
    size = arg1(dependencyMap[6]).DEFAULT_ITEM_SIZE;
  }
  const productLine = sku.productLine;
  if (SKUProductLines.COLLECTIBLES === productLine) {
    let obj = { sku, size };
    return <CollectiblesSKUPreview {...obj} />;
  } else if (SKUProductLines.SOCIAL_LAYER_GAME_ITEM === productLine) {
    obj = { sku, size };
    return <SocialLayerStorefrontSKUPreview {...obj} />;
  } else if (SKUProductLines.PREMIUM === productLine) {
    const obj1 = { size };
    return <PremiumSKUPreview {...obj1} />;
  } else {
    if (SKUProductLines.APPLICATION !== productLine) {
      if (SKUProductLines.BOOST !== productLine) {
        if (SKUProductLines.GUILD_ROLE !== productLine) {
          if (SKUProductLines.GUILD_PRODUCT !== productLine) {
            obj = arg1(dependencyMap[20]);
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
