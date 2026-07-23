// Module ID: 13808
// Function ID: 105790
// Name: FamilyCenterActivityGiftRow
// Dependencies: [31, 27, 33, 4130, 689, 7857, 13796, 13805, 13807, 3969, 13806, 4126, 2]
// Exports: default

// Module 13808 (FamilyCenterActivityGiftRow)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { display: "flex", flexDirection: "row", alignItems: "center", borderBottomColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, borderBottomWidth: 1, paddingVertical: 12 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.textContainer = { display: "flex", flexDirection: "column", flexShrink: 1 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityGiftRow.tsx");

export default function FamilyCenterActivityGiftRow(arg0) {
  let claimed;
  let claimedAt;
  let displayName;
  let gifterUserId;
  let isSubscription;
  let offeredAt;
  let price;
  let skuId;
  let subscriptionPlanId;
  ({ skuId, subscriptionPlanId } = arg0);
  ({ price, gifterUserId, claimed, offeredAt, claimedAt } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  const product = importDefault(7857)(skuId).product;
  let obj = require(13796) /* useSelectedTeenUser */;
  const teenUserForId = obj.useTeenUserForId(gifterUserId);
  let obj1 = require(13805) /* getCollectibleTypeName */;
  let tmp3 = null;
  if (null != product) {
    tmp3 = product;
  }
  const purchaseDisplayInfo = obj1.getPurchaseDisplayInfo(tmp3, subscriptionPlanId);
  ({ displayName, isSubscription } = purchaseDisplayInfo);
  if (null != skuId) {
    if (!isSubscription) {
      if (null == product) {
        return null;
      }
    }
  }
  if (null == displayName) {
    return null;
  } else {
    obj = { claimed, price };
    let name = null;
    if (null != teenUserForId) {
      let obj2 = importDefault(3969);
      name = obj2.getName(teenUserForId);
    }
    obj.gifterName = name;
    obj.offeredAt = offeredAt;
    obj.claimedAt = claimedAt;
    obj = { style: tmp.container };
    const giftSubtext = require(13807) /* formatGiftDate */.getGiftSubtext(obj);
    obj1 = { displayName };
    let tmp15 = null;
    const obj9 = require(13807) /* formatGiftDate */;
    const tmp10 = View;
    const tmp11 = callback;
    const tmp9 = callback2;
    if (null != product) {
      tmp15 = product;
    }
    obj1.product = tmp15;
    obj1.isSubscription = isSubscription;
    obj1.subscriptionPlanId = subscriptionPlanId;
    const items = [tmp11(importDefault(13806), obj1), ];
    obj2 = { style: tmp.textContainer };
    const obj3 = { variant: "text-md/semibold", color: "interactive-text-active", ellipsizeMode: "tail", lineClamp: 1, children: displayName };
    const items1 = [callback(require(4126) /* Text */.Text, obj3), ];
    const obj4 = { variant: "text-xs/medium", color: "text-muted", children: giftSubtext };
    items1[1] = callback(require(4126) /* Text */.Text, obj4);
    obj2.children = items1;
    items[1] = callback2(View, obj2);
    obj.children = items;
    return tmp9(tmp10, obj);
  }
};
