// Module ID: 12020
// Function ID: 92881
// Name: AddToWishlistItemCard
// Dependencies: []
// Exports: default

// Module 12020 (AddToWishlistItemCard)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
const AnalyticEvents = arg1(dependencyMap[4]).AnalyticEvents;
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { top: importDefault(dependencyMap[7]).space.PX_4, right: importDefault(dependencyMap[7]).space.PX_4, padding: importDefault(dependencyMap[7]).space.PX_6, borderRadius: importDefault(dependencyMap[7]).radii.round, backgroundColor: importDefault(dependencyMap[7]).colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
obj.heartOverlay = obj;
let closure_11 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/wishlists/native/AddToWishlistItemCard.tsx");

export default function AddToWishlistItemCard(sku) {
  sku = sku.sku;
  const arg1 = sku;
  const wishlistId = sku.wishlistId;
  const importDefault = wishlistId;
  const analyticsLocations = sku.analyticsLocations;
  const dependencyMap = analyticsLocations;
  let obj = { 0: "spring", 9223372036854775807: 0.4, 9223372036854775807: 1 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(sku, obj);
  let callback = merged;
  const tmp4 = callback4();
  const callback2 = tmp4;
  const wishlistAnalyticsContext = arg1(dependencyMap[8]).useWishlistAnalyticsContext();
  const React = wishlistAnalyticsContext;
  const tmp6 = callback2(React.useState(false), 2);
  const first = tmp6[0];
  const View = first;
  let closure_7 = tmp6[1];
  const items = [sku, tmp4.heartOverlay, merged.size];
  // CreateGeneratorClosureLongIndex (0x67)
  callback = React.useCallback(() => {
    let obj = {};
    obj = { sku, size: merged.size };
    const items = [callback(wishlistId(analyticsLocations[9]), obj), ];
    obj = { style: tmp4.heartOverlay, pointerEvents: "none" };
    const obj1 = { size: "sm", color: wishlistId(analyticsLocations[7]).colors.ICON_OVERLAY_LIGHT };
    obj.children = callback(sku(analyticsLocations[10]).HeartOutlineIcon, obj1);
    items[1] = callback(first, obj);
    obj.children = items;
    return callback2(closure_9, obj);
  }, items);
  const items1 = [first, wishlistAnalyticsContext, , , , ];
  ({ id: arr2[2], productLine: arr2[3] } = sku);
  items1[4] = wishlistId;
  items1[5] = analyticsLocations;
  const callback1 = React.useCallback(callback(tmp), items1);
  obj = {};
  const obj2 = arg1(dependencyMap[8]);
  const intl = arg1(dependencyMap[14]).intl;
  obj = {};
  const tmp10 = importDefault(dependencyMap[15]);
  obj.productName = arg1(dependencyMap[16]).getProductNameAndTypeFromSku(sku);
  obj.accessibilityLabel = intl.formatToPlainString(arg1(dependencyMap[14]).t.xRjJBe, obj);
  obj.renderPreview = callback;
  obj.onPress = callback1;
  const merged1 = Object.assign(merged);
  return callback3(tmp10, obj);
};
