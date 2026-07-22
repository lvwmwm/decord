// Module ID: 9748
// Function ID: 75853
// Name: SocialLayerStorefrontWishlistItemCard
// Dependencies: []
// Exports: default

// Module 9748 (SocialLayerStorefrontWishlistItemCard)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
({ jsx: closure_6, Fragment: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { poster: null, style: null, muted: null, disableFocus: null, pauseWhileAppInactive: null, text: null, variant: null, top: importDefault(dependencyMap[5]).space.PX_8, left: importDefault(dependencyMap[5]).space.PX_8, borderRadius: importDefault(dependencyMap[5]).radii.sm };
obj.applicationIcon = obj;
const tmp2 = arg1(dependencyMap[3]);
obj.nestedCard = { shadowColor: undefined, shadowOffset: { "Null": "%FunctionPrototype%", "Null": "paddingStart" }, borderRadius: importDefault(dependencyMap[5]).radii.none };
let closure_9 = obj.createStyles(obj);
const obj1 = { shadowColor: undefined, shadowOffset: { "Null": "%FunctionPrototype%", "Null": "paddingStart" }, borderRadius: importDefault(dependencyMap[5]).radii.none };
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/wishlists/native/SocialLayerStorefrontWishlistItemCard.tsx");

export default function SocialLayerStorefrontWishlistItemCard(sku) {
  sku = sku.sku;
  const arg1 = sku;
  let flag = sku.isOwned;
  if (flag === undefined) {
    flag = false;
  }
  const wishlistOwnerId = sku.wishlistOwnerId;
  const importDefault = wishlistOwnerId;
  const size = sku.size;
  const dependencyMap = size;
  let obj = { "Null": false, "Null": false, "Null": false, "Null": false, gap: false };
  Object.setPrototypeOf(null);
  const merged = Object.assign(sku, obj);
  let React;
  let closure_4;
  let closure_5;
  let tmp6;
  const items = [closure_5];
  const items1 = [sku.id, wishlistOwnerId];
  const applicationId = sku.applicationId;
  React = applicationId;
  const stateFromStores = arg1(dependencyMap[6]).useStateFromStores(items, () => {
    let hasSentGiftResult = null != wishlistOwnerId;
    if (hasSentGiftResult) {
      hasSentGiftResult = memo.hasSentGift(sku.id, wishlistOwnerId);
    }
    return hasSentGiftResult;
  }, items1);
  const obj2 = arg1(dependencyMap[6]);
  const items2 = [closure_4];
  const items3 = [applicationId];
  const stateFromStores1 = arg1(dependencyMap[6]).useStateFromStores(items2, () => {
    let application = null;
    if (null != applicationId) {
      application = stateFromStores1.getApplication(applicationId);
    }
    return application;
  }, items3);
  closure_4 = stateFromStores1;
  const items4 = [stateFromStores1];
  const memo = React.useMemo(() => {
    let iconSource;
    if (null != stateFromStores1) {
      iconSource = stateFromStores1.getIconSource(24);
    }
    return iconSource;
  }, items4);
  closure_5 = memo;
  tmp6 = callback();
  const items5 = [sku, size, memo, , ];
  ({ applicationIcon: arr6[3], nestedCard: arr6[4] } = tmp6);
  const callback = React.useCallback(() => {
    let obj = {};
    obj = { sku, size, containerStyle: tmp6.nestedCard };
    const items = [tmp6(wishlistOwnerId(size[7]), obj), ];
    let tmp3 = null != memo;
    if (tmp3) {
      obj = { source: memo, style: size.applicationIcon };
      tmp3 = tmp6(wishlistOwnerId(size[8]), obj);
    }
    items[1] = tmp3;
    obj.children = items;
    return closure_8(closure_7, obj);
  }, items5);
  obj = { accessibilityLabel: sku.name, renderPreview: callback, source: sku.source };
  const obj3 = arg1(dependencyMap[6]);
  const tmp8 = tmp6;
  if (!flag) {
    flag = stateFromStores;
  }
  obj.isOwned = flag;
  obj.size = size;
  const merged1 = Object.assign(merged);
  return tmp8(importDefault(dependencyMap[9]), obj);
};
