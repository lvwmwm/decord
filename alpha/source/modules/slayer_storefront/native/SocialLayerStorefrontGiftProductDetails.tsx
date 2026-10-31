// Module ID: 14409
// Function ID: 14410
// Name: SocialLayerStorefrontGiftProductDetails
// Dependencies: [19, 17, 1072, 21, 5014, 575, 7330, 10674, 1409, 9521, 5717, 5624, 2]
// Exports: default

// Module 14409 (SocialLayerStorefrontGiftProductDetails)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1409 */;
import SlayerStorefrontItemCardDefault from "SlayerStorefrontItemCard" /* 9521 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let size;
let tmp9;
const FastImageDefault = tmp9(5717);
const View = react_native.View;
const constants = Constants.PriceSetAssignmentPurchaseTypes;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, text: obj3, appInfo: obj4, appIcon: size };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_16, borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: nativeDefault.radii.lg, marginHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, gap: nativeDefault.space.PX_4 };
obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
size = { width: 20, height: 20, borderRadius: nativeDefault.radii.xs };
let closure_8 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontGiftProductDetails.tsx");

export default function SocialLayerStorefrontGiftProductDetails(sku) {
  let items1;
  let items2;
  let items3;
  sku = sku.sku;
  let getOrFetchApplication;
  let tmp = closure_8();
  let obj = getOrFetchApplication(7330);
  getOrFetchApplication = obj.useGetOrFetchApplication(sku.applicationId);
  const obj2 = getOrFetchApplication(10674);
  let obj3 = { sku, priceSetAssignmentPurchaseType: constants.GIFT };
  const userPrice = obj2.useFormattedSKUPrice(obj3).userPrice;
  const items = [getOrFetchApplication];
  const memo = react.useMemo(() => {
    let applicationIconSource = null;
    const tmp = getOrFetchApplication;
    if (null != getOrFetchApplication) {
      const obj3 = { id: null, icon: null, size: 20 };
      ({ id: obj2.id, icon: obj2.icon } = tmp);
      const obj = AvatarUtilsDefault;
      applicationIconSource = obj.getApplicationIconSource(obj3);
    }
    return applicationIconSource;
  }, items);
  const obj4 = { style: tmp.container, children: items1 };
  items1 = [closure_6(SlayerStorefrontItemCardDefault, { sku, size: 55 }), , ];
  let tmp6Result = null != getOrFetchApplication;
  const obj5 = { style: tmp.text, children: items3 };
  if (tmp6Result) {
    let tmp8Result = null != memo;
    const obj6 = { style: tmp.appInfo, children: items2 };
    if (tmp8Result) {
      const obj7 = { source: memo, style: tmp.appIcon };
      tmp8Result = tmp8(FastImageDefault, obj7);
    }
    items2 = [tmp8Result, ];
    const obj8 = { variant: "text-sm/medium", color: "text-muted", children: getOrFetchApplication.name };
    items2[1] = closure_6(getOrFetchApplication(5624).Text, obj8);
    tmp6Result = tmp6(tmp7, obj6);
  }
  items3 = [tmp6Result, ];
  const obj9 = { variant: "text-md/semibold", children: sku.name };
  items3[1] = closure_6(getOrFetchApplication(5624).Text, obj9);
  items1[1] = closure_7(View, obj5);
  let tmp8Result2 = null != userPrice;
  if (tmp8Result2) {
    const obj10 = { variant: "text-md/semibold", children: userPrice };
    tmp8Result2 = tmp8(tmp2(5624).Text, obj10);
  }
  items1[2] = tmp8Result2;
  return closure_7(View, obj4);
};
