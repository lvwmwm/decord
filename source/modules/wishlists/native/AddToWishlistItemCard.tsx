// Module ID: 12134
// Function ID: 95032
// Name: AddToWishlistItemCard
// Dependencies: [5, 57, 31, 27, 653, 33, 4130, 689, 12132, 8672, 8711, 675, 8683, 3831, 1212, 8673, 8668, 2]
// Exports: default

// Module 12134 (AddToWishlistItemCard)
import closure_3 from "jsxProd";
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import { AnalyticEvents } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_8;
let closure_9;
const require = arg1;
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { position: "absolute", top: require("_createForOfIteratorHelperLoose").space.PX_4, right: require("_createForOfIteratorHelperLoose").space.PX_4, zIndex: 1, alignItems: "center", justifyContent: "center", padding: require("_createForOfIteratorHelperLoose").space.PX_6, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, backgroundColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
_createForOfIteratorHelperLoose.heartOverlay = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("result").fileFinishedImporting("modules/wishlists/native/AddToWishlistItemCard.tsx");

export default function AddToWishlistItemCard(sku) {
  sku = sku.sku;
  const wishlistId = sku.wishlistId;
  const analyticsLocations = sku.analyticsLocations;
  let obj = { sku: 0, wishlistId: 0, analyticsLocations: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(sku, obj);
  const tmp4 = _createForOfIteratorHelperLoose();
  let callback = tmp4;
  const wishlistAnalyticsContext = sku(analyticsLocations[8]).useWishlistAnalyticsContext();
  const tmp6 = callback(wishlistAnalyticsContext.useState(false), 2);
  const first = tmp6[0];
  let closure_7 = tmp6[1];
  let items = [sku, tmp4.heartOverlay, merged.size];
  // CreateGeneratorClosureLongIndex (0x67)
  callback = wishlistAnalyticsContext.useCallback(() => {
    let obj = {};
    obj = { sku, size: merged.size };
    const items = [outer1_8(wishlistId(analyticsLocations[9]), obj), ];
    obj = { style: tmp4.heartOverlay, pointerEvents: "none" };
    const obj1 = { size: "sm", color: wishlistId(analyticsLocations[7]).colors.ICON_OVERLAY_LIGHT };
    obj.children = outer1_8(sku(analyticsLocations[10]).HeartOutlineIcon, obj1);
    items[1] = outer1_8(first, obj);
    obj.children = items;
    return outer1_10(outer1_9, obj);
  }, items);
  const items1 = [first, wishlistAnalyticsContext, , , , ];
  ({ id: arr2[2], productLine: arr2[3] } = sku);
  items1[4] = wishlistId;
  items1[5] = analyticsLocations;
  const callback1 = wishlistAnalyticsContext.useCallback(merged(tmp), items1);
  obj = {};
  const obj2 = sku(analyticsLocations[8]);
  const intl = sku(analyticsLocations[14]).intl;
  obj = {};
  const tmp10 = wishlistId(analyticsLocations[15]);
  obj.productName = sku(analyticsLocations[16]).getProductNameAndTypeFromSku(sku);
  obj.accessibilityLabel = intl.formatToPlainString(sku(analyticsLocations[14]).t.xRjJBe, obj);
  obj.renderPreview = callback;
  obj.onPress = callback1;
  const merged1 = Object.assign(merged);
  return callback2(tmp10, obj);
};
