// Module ID: 10179
// Function ID: 10180
// Name: SocialLayerStorefrontGiftProductDetails
// Dependencies: [19, 17, 1085, 21, 5092, 587, 558, 576, 6857, 10160, 1415, 9028, 6156, 5088, 2]

// Module 10179 (SocialLayerStorefrontGiftProductDetails)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1415 */;
import Text_Text from "Text/Text" /* 5088 */;
import FastImageDefault from "FastImage" /* 6156 */;
import useGetOrFetchApplications from "useGetOrFetchApplications" /* 6857 */;
import SlayerStorefrontItemCardDefault from "SlayerStorefrontItemCard" /* 9028 */;
import StorefrontNativeUtils from "StorefrontNativeUtils" /* 10160 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let size;
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
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function SocialLayerStorefrontGiftProductDetails(sku) {
  let items;
  let items1;
  let items2;
  let tmp12;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(25);
  sku = sku.sku;
  const tmp4 = closure_8();
  const obj2 = useGetOrFetchApplications;
  const getOrFetchApplication = obj2.useGetOrFetchApplication(sku.applicationId);
  if (cResult[0] !== sku) {
    const obj3 = { sku, priceSetAssignmentPurchaseType: constants.GIFT };
    cResult[0] = sku;
    cResult[1] = obj3;
    tmp6 = obj3;
  } else {
    tmp6 = cResult[1];
  }
  const tmpResult = StorefrontNativeUtils;
  const userPrice = tmpResult.useFormattedSKUPrice(tmp6).userPrice;
  let tmp8 = null;
  if (null != getOrFetchApplication) {
    if (cResult[2] === getOrFetchApplication.icon) {
      let tmp9;
      if (cResult[3] === getOrFetchApplication.id) {
        tmp9 = cResult[4];
      }
      tmp8 = tmp9;
    }
    const obj4 = { id: null, icon: null, size: 20 };
    ({ id: obj6.id, icon: obj6.icon } = getOrFetchApplication);
    const obj5 = AvatarUtilsDefault;
    const applicationIconSource = obj5.getApplicationIconSource(obj4);
    cResult[2] = getOrFetchApplication.icon;
    cResult[3] = getOrFetchApplication.id;
    cResult[4] = applicationIconSource;
    tmp9 = applicationIconSource;
  }
  if (cResult[5] !== sku) {
    const obj7 = { sku, size: 55 };
    const tmp15 = metroRequire(SlayerStorefrontItemCardDefault, obj7);
    cResult[5] = sku;
    cResult[6] = tmp15;
    tmp12 = tmp15;
  } else {
    tmp12 = cResult[6];
  }
  if (cResult[7] === tmp8) {
    if (cResult[8] === getOrFetchApplication) {
      if (cResult[9] === tmp4.appIcon) {
        let tmp16;
        let tmp24;
        if (cResult[10] === tmp4.appInfo) {
          tmp16 = cResult[11];
        }
        if (cResult[12] !== sku.name) {
          const obj8 = { variant: "text-md/semibold", children: sku.name };
          const tmp26 = metroRequire(Text_Text.Text, obj8);
          cResult[12] = sku.name;
          cResult[13] = tmp26;
          tmp24 = tmp26;
        } else {
          tmp24 = cResult[13];
        }
        if (cResult[14] === tmp4.text) {
          if (cResult[15] === tmp16) {
            let tmp27;
            let tmp31;
            if (cResult[16] === tmp24) {
              tmp27 = cResult[17];
            }
            if (cResult[18] !== userPrice) {
              let tmp32 = null != userPrice;
              if (tmp32) {
                const obj9 = { variant: "text-md/semibold", children: userPrice };
                tmp32 = metroRequire(tmp(5088).Text, obj9);
              }
              cResult[18] = userPrice;
              cResult[19] = tmp32;
              tmp31 = tmp32;
            } else {
              tmp31 = cResult[19];
            }
            if (cResult[20] === tmp4.container) {
              if (cResult[21] === tmp12) {
                if (cResult[22] === tmp27) {
                  let tmp34;
                  if (cResult[23] === tmp31) {
                    tmp34 = cResult[24];
                  }
                  return tmp34;
                }
              }
            }
            const obj10 = { style: tmp4.container, children: items };
            items = [tmp12, tmp27, tmp31];
            const tmp37 = metroImportDefault(View, obj10);
            cResult[20] = tmp4.container;
            cResult[21] = tmp12;
            cResult[22] = tmp27;
            cResult[23] = tmp31;
            cResult[24] = tmp37;
            tmp34 = tmp37;
          }
        }
        const obj11 = { style: tmp4.text, children: items1 };
        items1 = [tmp16, tmp24];
        const tmp30 = metroImportDefault(View, obj11);
        cResult[14] = tmp4.text;
        cResult[15] = tmp16;
        cResult[16] = tmp24;
        cResult[17] = tmp30;
        tmp27 = tmp30;
      }
    }
  }
  let tmp18Result = null != getOrFetchApplication;
  if (tmp18Result) {
    let tmp20 = null != tmp8;
    const obj12 = { style: tmp4.appInfo, children: items2 };
    const tmp18 = metroImportDefault;
    const tmp19 = View;
    if (tmp20) {
      const obj13 = { source: tmp8, style: tmp4.appIcon };
      tmp20 = metroRequire(FastImageDefault, obj13);
    }
    items2 = [tmp20, ];
    const obj14 = { variant: "text-sm/medium", color: "text-muted", children: getOrFetchApplication.name };
    items2[1] = metroRequire(Text_Text.Text, obj14);
    tmp18Result = tmp18(tmp19, obj12);
  }
  cResult[7] = tmp8;
  cResult[8] = getOrFetchApplication;
  cResult[9] = tmp4.appIcon;
  cResult[10] = tmp4.appInfo;
  cResult[11] = tmp18Result;
  tmp16 = tmp18Result;
}) : (function SocialLayerStorefrontGiftProductDetails(sku) {
  let items1;
  let items2;
  let items3;
  sku = sku.sku;
  let getOrFetchApplication;
  let tmp = closure_8();
  let obj = getOrFetchApplication(6857);
  getOrFetchApplication = obj.useGetOrFetchApplication(sku.applicationId);
  const obj2 = getOrFetchApplication(10160);
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
    items2[1] = closure_6(getOrFetchApplication(5088).Text, obj8);
    tmp6Result = tmp6(tmp7, obj6);
  }
  items3 = [tmp6Result, ];
  const obj9 = { variant: "text-md/semibold", children: sku.name };
  items3[1] = closure_6(getOrFetchApplication(5088).Text, obj9);
  items1[1] = closure_7(View, obj5);
  let tmp8Result2 = null != userPrice;
  if (tmp8Result2) {
    const obj10 = { variant: "text-md/semibold", children: userPrice };
    tmp8Result2 = tmp8(tmp2(5088).Text, obj10);
  }
  items1[2] = tmp8Result2;
  return closure_7(View, obj4);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontGiftProductDetails.tsx");

export default tmp4;
