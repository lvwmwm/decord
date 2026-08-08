// Module ID: 12502
// Function ID: 12503
// Name: showUnavailableToast
// Dependencies: [19, 17, 8816, 5398, 21, 4303, 712, 4002, 1236, 12503, 589, 9355, 12507, 10104, 8812, 12479, 5728, 5748, 4271, 7000, 9468, 4299, 2]
// Exports: default

// Module 12502 (showUnavailableToast)
import openCollectiblesShop from "openCollectiblesShop";
import get_ActivityIndicator from "QUICK_SWITCHER";
import getFetchState from "getFetchState";
import { ACTION_SHEET_MAX_WIDTH } from "ACTION_SHEET_START_HEIGHT_RATIO";
import jsxProd from "Text";
import createCacheKey from "createCacheKey";

let c4;
let c5;
let c9;
let metroImportAll;
const require = arg1;
function showUnavailableToast() {
  let obj = importDefault(4002);
  obj = { key: "SHOP_THIS_LOOK_ITEM_UNAVAILABLE", content: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl.string(require(1236) /* getSystemLocale */.t.YymRft);
  obj.open(obj);
}
function ShopThisLookCard(skuId) {
  skuId = skuId.skuId;
  const size = skuId.size;
  let obj = skuId(12503);
  let obj1 = skuId(589);
  const items = [getFetchState];
  const items1 = [skuId];
  const stateFromStores = obj1.useStateFromStores(items, () => {
    const productsForSku = outer1_6.getProductsForSku(skuId);
    let found;
    if (productsForSku != null) {
      found = productsForSku.flatMap((skus) => skus.skus).find((id) => id.id === closure_0);
      const flatMapResult = productsForSku.flatMap((skus) => skus.skus);
    }
    return found;
  }, items1);
  if ("loading" === obj.useCollectiblesShopProduct(skuId, { needsCategory: false, shouldFetchProduct: false }).state) {
    obj = { size: null, renderPreview: null, accessibilityHidden: true };
    obj[0] = size;
    obj[1] = function renderPreview() {
      return callback(closure_4, {});
    };
    let tmp13 = callback(importDefault(9355), obj);
  } else {
    tmp13 = null;
    if (null != stateFromStores) {
      const result = tmp(12507).isShoppableCollectibleSku(stateFromStores);
      const tmp7 = importDefault(10104);
      if (result) {
        obj = { sku: null, size: null, onPress: null };
        obj[0] = stateFromStores;
        obj[1] = size;
        obj[2] = skuId.onPress;
        let tmp5Result = tmp5(tmp7, obj);
      } else {
        obj1 = { sku: null, size: null, overlay: null, onPress: null };
        obj1[0] = stateFromStores;
        obj1[1] = size;
        obj1[2] = tmp(9355).WishlistItemCardOverlay.LOCKED;
        obj1[3] = showUnavailableToast;
        tmp5Result = tmp5(tmp7, obj1);
      }
      const tmpResult = tmp(12507);
    }
  }
  return tmp13;
}
({ ActivityIndicator: c4, View: c5 } = get_ActivityIndicator);
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
createCacheKey = { container: null, description: null, itemsContainer: null };
createCacheKey = { paddingHorizontal: require("Themes").space.PX_16, gap: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textAlign: "center", marginTop: -require("Themes").space.PX_8 };
let obj1 = { textAlign: "center", marginTop: -require("Themes").space.PX_8 };
createCacheKey[2] = { alignSelf: "center", flexDirection: "row", flexWrap: "wrap", paddingBottom: require("Themes").space.PX_8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { alignSelf: "center", flexDirection: "row", flexWrap: "wrap", paddingBottom: require("Themes").space.PX_8 };
let result = require("getFetchState").fileFinishedImporting("modules/collectibles/shop_this_look/native/ShopThisLookActionSheet.tsx");

export default function ShopThisLookActionSheet(arg0) {
  let c0;
  let gap;
  let guildId;
  let rowWidth;
  let userId;
  let _require;
  let analyticsLocations;
  let dependencyMap;
  ({ userId, guildId } = arg0);
  const tmp = createCacheKey();
  let obj = _require(8812);
  const equippedCollectibleSkuIds = obj.useEquippedCollectibleSkuIds(userId, guildId);
  obj = { maxWidth: ACTION_SHEET_MAX_WIDTH };
  ({ cardWidth: c0, rowWidth, gap } = analyticsLocations(12479)(obj));
  const tmp2 = analyticsLocations(12479)(obj);
  analyticsLocations = analyticsLocations(5728)(analyticsLocations(5748).USER_PROFILE_OVERFLOW_MENU).analyticsLocations;
  const items = [analyticsLocations];
  dependencyMap = React.useCallback((initialProductSkuId) => {
    let obj = analyticsLocations(4271);
    obj.hideActionSheet();
    obj = { initialProductSkuId, analyticsLocations, analyticsSource: analyticsLocations(5748).USER_PROFILE_OVERFLOW_MENU };
    const result = _undefined(7000).openCollectiblesShopMobile(obj);
  }, items);
  obj = { startExpanded: true, title: null, children: null };
  const tmp3 = analyticsLocations(5728);
  const intl = _require(1236).intl;
  obj[1] = intl.string(_require(1236).t.xNdRDO);
  const obj1 = { style: tmp.container, children: null };
  const obj2 = { variant: "text-sm/medium", color: "text-subtle", style: tmp.description, children: null };
  const intl2 = _require(1236).intl;
  obj2[3] = intl2.string(_require(1236).t["ws+0Lr"]);
  const items1 = [callback(_require(4299).Text, obj2), ];
  const tmp4 = analyticsLocations(9468);
  const items2 = [tmp.itemsContainer, { gap, width: rowWidth }];
  items1[1] = callback(closure_5, {
    style: items2,
    children: equippedCollectibleSkuIds.map((skuId) => {
      let closure_0 = skuId;
      return outer1_8(outer1_12, {
        skuId,
        size: closure_0,
        onPress() {
          return outer1_2(closure_0);
        }
      }, skuId);
    })
  });
  obj1[1] = items1;
  obj[2] = callback2(closure_5, obj1);
  return callback(tmp4, obj);
};
