// Module ID: 9781
// Function ID: 76018
// Name: SocialLayerStorefrontGiftProductDetails
// Dependencies: [31, 27, 653, 33, 4130, 689, 5468, 9772, 1392, 8256, 4126, 2]
// Exports: default

// Module 9781 (SocialLayerStorefrontGiftProductDetails)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { PriceSetAssignmentPurchaseTypes as closure_6 } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_7;
let closure_8;
const require = arg1;
({ Image: closure_4, View: closure_5 } = get_ActivityIndicator);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_12, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_16, borderWidth: 2, borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.text = { flex: 1, gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
let obj2 = { flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.appInfo = obj2;
let obj3 = { width: 20, height: 20, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs };
_createForOfIteratorHelperLoose.appIcon = obj3;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { flex: 1, gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
const result = require("ME").fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontGiftProductDetails.tsx");

export default function SocialLayerStorefrontGiftProductDetails(sku) {
  sku = sku.sku;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = getOrFetchApplication(5468);
  getOrFetchApplication = obj.useGetOrFetchApplication(sku.applicationId);
  let obj1 = getOrFetchApplication(9772);
  obj = { sku, priceSetAssignmentPurchaseType: constants.GIFT };
  const userPrice = obj1.useFormattedSKUPrice(obj).userPrice;
  const items = [getOrFetchApplication];
  const memo = React.useMemo(() => {
    let applicationIconURL = null;
    if (null != getOrFetchApplication) {
      let obj = outer1_1(outer1_2[8]);
      obj = {};
      ({ id: obj2.id, icon: obj2.icon } = getOrFetchApplication);
      obj.size = 20;
      applicationIconURL = obj.getApplicationIconURL(obj);
    }
    return applicationIconURL;
  }, items);
  obj = { style: tmp.container };
  const items1 = [callback(importDefault(8256), { sku, size: 55 }), , ];
  obj1 = { style: tmp.text };
  let tmp7Result = null != getOrFetchApplication;
  if (tmp7Result) {
    const obj2 = { style: tmp.appInfo };
    let tmp9 = null != memo;
    if (tmp9) {
      const obj3 = {};
      const obj4 = { uri: memo };
      obj3.source = obj4;
      obj3.style = tmp.appIcon;
      tmp9 = callback(closure_4, obj3);
    }
    const items2 = [tmp9, ];
    const obj5 = { variant: "text-sm/medium", color: "text-muted", children: getOrFetchApplication.name };
    items2[1] = callback(getOrFetchApplication(4126).Text, obj5);
    obj2.children = items2;
    tmp7Result = closure_8(closure_5, obj2);
    const tmp7 = closure_8;
    const tmp8 = closure_5;
  }
  const items3 = [tmp7Result, callback(getOrFetchApplication(4126).Text, { variant: "text-md/semibold", children: sku.name })];
  obj1.children = items3;
  items1[1] = closure_8(closure_5, obj1);
  let tmp15 = null != userPrice;
  if (tmp15) {
    const obj7 = { variant: "text-md/semibold", children: userPrice };
    tmp15 = callback(getOrFetchApplication(4126).Text, obj7);
  }
  items1[2] = tmp15;
  obj.children = items1;
  return closure_8(closure_5, obj);
};
