// Module ID: 15445
// Function ID: 15446
// Name: OutboundPromotionClaimAlert
// Dependencies: [32, 19, 17, 21, 5014, 575, 15446, 7326, 7351, 9667, 5717, 15447, 5624, 1113, 5634, 7358, 15448, 6030, 5709, 2]
// Exports: default

// Module 15445 (OutboundPromotionClaimAlert)
import nativeDefault from "native" /* 575 */;
import LinkingDefault from "Linking" /* 5709 */;
import ClipboardUtils from "ClipboardUtils" /* 7358 */;
import PromotionUtils from "PromotionUtils" /* 9667 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let react = react_mod;
({ ActivityIndicator: hasOwnProperty, View: metroRequire, ScrollView: metroImportDefault } = react_native);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { loading: { marginVertical: 80 }, body: { alignItems: "center" }, title: { marginBottom: 8 }, errorTitle: { lineHeight: 24, marginBottom: 8 }, bodyText: { textAlign: "center", lineHeight: 20 }, copyInputContainer: obj2, copyInputLabel: { lineHeight: 20, marginBottom: 8 }, copyInput: obj3, copyInputCopied: obj4, copyButton: { paddingHorizontal: 8, marginLeft: 8 }, promotionArt: { width: 200, height: 100, marginBottom: 20 }, errorArt: { width: 141, height: 99, marginBottom: 20 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, marginTop: 16, padding: 12, borderRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
obj3 = { borderWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.xs, padding: 8, marginBottom: 8, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
obj4 = { borderColor: nativeDefault.colors.ICON_FEEDBACK_POSITIVE };
let closure_10 = createStyles(obj);
let result = size.fileFinishedImporting("components_native/premium/OutboundPromotionClaimAlert.tsx");

export default function OutboundPromotionClaimAlert(onCancel) {
  let Button;
  let _undefined;
  let c4;
  let c5;
  let intl;
  let intl2;
  let intl4;
  let intl5;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj11;
  let obj12;
  let obj14;
  let stringResult1;
  let stringResult2;
  let tmp11;
  let tmp14Result;
  let tmp3;
  let tmp7;
  onCancel = onCancel.onCancel;
  const onClaim = onCancel.onClaim;
  const code = onCancel.code;
  const outboundPromotion = onCancel.outboundPromotion;
  react = undefined;
  c5 = undefined;
  let tmp = closure_10();
  [tmp3, c4] = outboundPromotion(react.useState(null), 2);
  const tmp2 = outboundPromotion(react.useState(null), 2);
  [tmp7, c5] = outboundPromotion(onClaim(code[6])(false, 2000), 2);
  let closure_6 = tmp8;
  const tmp6 = outboundPromotion(onClaim(code[6])(false, 2000), 2);
  const tmp9 = onClaim(code[7]);
  const analyticsLocations = tmp9(onClaim(code[8]).USER_SETTINGS_GIFT_INVENTORY).analyticsLocations;
  const items = [tmp8, , , , , ];
  ({ id: arr[1], outboundTitle: arr[2], partnerId: arr[3] } = outboundPromotion);
  items[4] = onClaim;
  items[5] = analyticsLocations;
  const effect = react.useEffect(() => {
    const tmp = closure_6;
    if (!tmp) {
      const obj3 = { promotionId: null, promotionTitle: null, partnerId: null, analyticsLocations };
      ({ id: obj2.promotionId, outboundTitle: obj2.promotionTitle, partnerId: obj2.partnerId } = outboundPromotion);
      const obj = PromotionUtils;
      const result = obj.claimOutboundPromotion(obj3);
      const nextPromise = result.then((result) => onClaim(result));
      nextPromise.catch((error) => closure_1_4(error));
    }
  }, items);
  if (null != code) {
    let tmp19;
    let stringResult;
    let obj2 = { style: tmp.body, children: items1 };
    let obj3 = { source: tmp4(tmp5[11]), style: tmp.promotionArt };
    const tmp4Result = onClaim(code[10]);
    items1 = [closure_8(tmp4Result, obj3), , , ];
    const obj4 = { style: tmp.title, variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: intl.string(onCancel(code[13]).t["23BfZh"]) };
    const Heading = onCancel(tmp5[12]).Heading;
    intl = onCancel(tmp5[13]).intl;
    items1[1] = closure_8(Heading, obj4);
    const obj5 = { style: tmp.bodyText, variant: "text-md/medium", children: outboundPromotion.outboundRedemptionModalBody };
    items1[2] = closure_8(onCancel(code[12]).Text, obj5);
    const obj6 = { style: tmp.copyInputContainer, children: items2 };
    const obj7 = { style: tmp.copyInputLabel, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: intl2.string(onCancel(code[13]).t.s9LFQh) };
    const Text = onCancel(tmp5[12]).Text;
    intl2 = onCancel(tmp5[13]).intl;
    items2 = [closure_8(Text, obj7), , ];
    const copyInput = tmp.copyInput;
    if (tmp7) {
      const obj8 = {};
      const merged = Object.assign(copyInput);
      const merged1 = Object.assign(tmp.copyInputCopied);
      tmp19 = obj8;
    } else {
      tmp19 = copyInput;
    }
    const obj9 = { style: tmp19, children: items3 };
    const obj10 = { style: { flex: 1 }, horizontal: true, showsHorizontalScrollIndicator: false, children: closure_8(closure_6, obj11) };
    obj11 = {
      onStartShouldSetResponderCapture() {
          return true;
        },
      children: closure_8(onCancel(code[12]).Text, obj12)
    };
    obj12 = { lineClamp: 1, variant: "text-sm/medium", color: "interactive-text-active", children: code };
    items3 = [closure_8(analyticsLocations, obj10), ];
    const obj13 = { style: tmp.copyButton, children: closure_8(Button, obj14) };
    Button = tmp18(tmp5[14]).Button;
    const intl3 = tmp18(tmp5[13]).intl;
    const string = intl3.string;
    const t = tmp18(tmp5[13]).t;
    if (tmp7) {
      stringResult = string(t.t5VZ88);
    } else {
      stringResult = string(t.OpuAlK);
    }
    obj14 = {
      text: stringResult,
      size: "sm",
      onPress() {
          const obj = ClipboardUtils;
          obj.copy(code);
          _undefined(true);
        }
    };
    items3[1] = closure_8(closure_6, obj13);
    items2[1] = closure_9(closure_6, obj9);
    items2[2] = closure_8(onCancel(code[12]).Text, { variant: "text-sm/medium", color: "text-muted", children: "This code is included in your confirmation email" });
    items1[3] = closure_9(closure_6, obj6);
    tmp14Result = tmp14(tmp15, obj2);
    tmp11 = tmp16;
  } else {
    tmp11 = closure_8;
    let obj = { style: tmp.loading };
    tmp14Result = closure_8(c5, obj);
  }
  const obj15 = { style: tmp.body, children: items4 };
  const obj16 = { source: onClaim(code[16]), style: tmp.errorArt };
  const tmp4Result3 = onClaim(code[10]);
  items4 = [tmp11(tmp4Result3, obj16), , ];
  const obj17 = { style: tmp.errorTitle, variant: "text-lg/bold", color: "mobile-text-heading-primary", children: intl4.string(onCancel(code[13]).t.iufib1) };
  const Text2 = onCancel(tmp5[12]).Text;
  intl4 = onCancel(tmp5[13]).intl;
  items4[1] = tmp11(Text2, obj17);
  const obj18 = { style: tmp.bodyText, variant: "text-md/medium", children: intl5.string(onCancel(code[13]).t.eAn6z2) };
  const Text3 = onCancel(tmp5[12]).Text;
  intl5 = onCancel(tmp5[13]).intl;
  items4[2] = tmp11(Text3, obj18);
  const obj19 = {
    onCancel,
    confirmText: stringResult1,
    onConfirm() {
      if (null != code) {
        const obj = PromotionUtils;
        const outboundPromotionRedemptionUrl = obj.getOutboundPromotionRedemptionUrl(tmp, outboundPromotion);
        const obj2 = LinkingDefault;
        obj2.openURL(outboundPromotionRedemptionUrl);
      }
      onCancel();
    },
    cancelText: stringResult2,
    noDefaultButtons: null == code && null == tmp3,
    children: tmp14Result
  };
  const tmp29 = closure_9(closure_6, obj15);
  const tmp4Result4 = onClaim(code[17]);
  if (null != tmp3) {
    const intl7 = tmp28(tmp5[13]).intl;
    stringResult1 = intl7.string(tmp28(tmp5[13]).t.cpT0Cq);
  } else {
    const intl6 = tmp28(tmp5[13]).intl;
    stringResult1 = intl6.string(tmp28(tmp5[13]).t["+zx47d"]);
  }
  stringResult2 = undefined;
  if (null == tmp3) {
    const intl8 = tmp28(tmp5[13]).intl;
    stringResult2 = intl8.string(tmp28(tmp5[13]).t.TulDPl);
  }
  if (null != tmp3) {
    tmp14Result = tmp29;
  }
  return tmp11(tmp4Result4, obj19);
};
