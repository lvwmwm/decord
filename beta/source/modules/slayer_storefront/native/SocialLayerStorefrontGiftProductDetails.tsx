// Module ID: 10468
// Function ID: 10469
// Name: SocialLayerStorefrontGiftProductDetails
// Dependencies: [19, 17, 1074, 21, 4836, 576, 6589, 10267, 1397, 8288, 4832, 2]
// Exports: default

// Module 10468 (SocialLayerStorefrontGiftProductDetails)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import SlayerStorefrontItemCardDefault from "SlayerStorefrontItemCard" /* 8288 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let size;
({ Image: closure_4, View: hasOwnProperty } = react_native);
const constants = Constants.PriceSetAssignmentPurchaseTypes;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, text: obj3, appInfo: obj4, appIcon: size };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_16, borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: nativeDefault.radii.lg, marginHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, gap: nativeDefault.space.PX_4 };
obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
size = { width: 20, height: 20, borderRadius: nativeDefault.radii.xs };
let closure_9 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontGiftProductDetails.tsx");

export default function SocialLayerStorefrontGiftProductDetails(sku) {
  let items1;
  let items2;
  let items3;
  let obj8;
  sku = sku.sku;
  let getOrFetchApplication;
  let tmp = closure_9();
  let obj = getOrFetchApplication(6589);
  getOrFetchApplication = obj.useGetOrFetchApplication(sku.applicationId);
  const obj2 = getOrFetchApplication(10267);
  let obj3 = { sku, priceSetAssignmentPurchaseType: constants.GIFT };
  const userPrice = obj2.useFormattedSKUPrice(obj3).userPrice;
  const items = [getOrFetchApplication];
  const memo = react.useMemo(() => {
    let applicationIconURL = null;
    const tmp = getOrFetchApplication;
    if (null != getOrFetchApplication) {
      const obj3 = { id: null, icon: null, size: 20 };
      ({ id: obj2.id, icon: obj2.icon } = tmp);
      const obj = AvatarUtilsDefault;
      applicationIconURL = obj.getApplicationIconURL(obj3);
    }
    return applicationIconURL;
  }, items);
  const obj4 = { style: tmp.container, children: items1 };
  items1 = [closure_7(SlayerStorefrontItemCardDefault, { sku, size: 55 }), , ];
  let tmp6Result = null != getOrFetchApplication;
  const obj5 = { style: tmp.text, children: items3 };
  if (tmp6Result) {
    let tmp8Result = null != memo;
    const obj6 = { style: tmp.appInfo, children: items2 };
    if (tmp8Result) {
      const obj7 = { source: obj8, style: tmp.appIcon };
      obj8 = { uri: memo };
      tmp8Result = tmp8(closure_4, obj7);
    }
    items2 = [tmp8Result, ];
    const obj9 = { variant: "text-sm/medium", color: "text-muted", children: getOrFetchApplication.name };
    items2[1] = closure_7(getOrFetchApplication(4832).Text, obj9);
    tmp6Result = tmp6(tmp7, obj6);
  }
  items3 = [tmp6Result, ];
  const obj10 = { variant: "text-md/semibold", children: sku.name };
  items3[1] = closure_7(getOrFetchApplication(4832).Text, obj10);
  items1[1] = closure_8(closure_5, obj5);
  let tmp8Result2 = null != userPrice;
  if (tmp8Result2) {
    const obj11 = { variant: "text-md/semibold", children: userPrice };
    tmp8Result2 = tmp8(tmp2(4832).Text, obj11);
  }
  items1[2] = tmp8Result2;
  return closure_8(closure_5, obj4);
};
