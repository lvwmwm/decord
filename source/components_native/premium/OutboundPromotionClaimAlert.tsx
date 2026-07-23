// Module ID: 12489
// Function ID: 96789
// Name: OutboundPromotionClaimAlert
// Dependencies: [57, 31, 27, 33, 4130, 689, 12490, 5464, 5484, 7452, 12491, 4126, 1212, 4543, 5492, 12492, 4561, 3827, 2]
// Exports: default

// Module 12489 (OutboundPromotionClaimAlert)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ ActivityIndicator: closure_5, View: closure_6, Image: closure_7, ScrollView: closure_8 } = get_ActivityIndicator);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = { loading: { marginVertical: 80 }, body: { alignItems: "center" }, title: { marginBottom: 8 }, errorTitle: { lineHeight: 24, marginBottom: 8 }, bodyText: { textAlign: "center", lineHeight: 20 } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, marginTop: 16, padding: 12, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.copyInputContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.copyInputLabel = { lineHeight: 20, marginBottom: 8 };
let obj1 = { borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, padding: 8, marginBottom: 8, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
_createForOfIteratorHelperLoose.copyInput = obj1;
_createForOfIteratorHelperLoose.copyInputCopied = { borderColor: require("_createForOfIteratorHelperLoose").colors.ICON_FEEDBACK_POSITIVE };
_createForOfIteratorHelperLoose.copyButton = { paddingHorizontal: 8, marginLeft: 8 };
_createForOfIteratorHelperLoose.promotionArt = { width: 200, height: 100, marginBottom: 20 };
_createForOfIteratorHelperLoose.errorArt = { width: 141, height: 99, marginBottom: 20 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { borderColor: require("_createForOfIteratorHelperLoose").colors.ICON_FEEDBACK_POSITIVE };
let result = require("get ActivityIndicator").fileFinishedImporting("components_native/premium/OutboundPromotionClaimAlert.tsx");

export default function OutboundPromotionClaimAlert(onCancel) {
  let closure_5;
  let tmp5;
  onCancel = onCancel.onCancel;
  const onClaim = onCancel.onClaim;
  const code = onCancel.code;
  const outboundPromotion = onCancel.outboundPromotion;
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = outboundPromotion(React.useState(null), 2);
  const first = tmp2[0];
  React = tmp2[1];
  [tmp5, closure_5] = outboundPromotion(onClaim(code[6])(false, 2000), 2);
  let closure_6 = tmp6;
  const tmp4 = outboundPromotion(onClaim(code[6])(false, 2000), 2);
  const analyticsLocations = onClaim(code[7])(onClaim(code[8]).USER_SETTINGS_GIFT_INVENTORY).analyticsLocations;
  const items = [null != code, , , , , ];
  ({ id: arr[1], outboundTitle: arr[2], partnerId: arr[3] } = outboundPromotion);
  items[4] = onClaim;
  items[5] = analyticsLocations;
  const effect = React.useEffect(() => {
    if (!closure_6) {
      let obj = onCancel(code[9]);
      obj = {};
      ({ id: obj2.promotionId, outboundTitle: obj2.promotionTitle, partnerId: obj2.partnerId } = outboundPromotion);
      obj.analyticsLocations = analyticsLocations;
      const result = obj.claimOutboundPromotion(obj);
      result.then((arg0) => outer1_1(arg0)).catch((arg0) => outer1_4(arg0));
      const nextPromise = result.then((arg0) => outer1_1(arg0));
    }
  }, items);
  if (null != code) {
    let obj = { style: tmp.body };
    obj = { source: onClaim(code[10]), style: tmp.promotionArt };
    const items1 = [callback(analyticsLocations, obj), , , ];
    const obj1 = { style: tmp.title, variant: "heading-xl/bold", color: "mobile-text-heading-primary" };
    const intl = onCancel(code[12]).intl;
    obj1.children = intl.string(onCancel(code[12]).t["23BfZh"]);
    items1[1] = callback(onCancel(code[11]).Heading, obj1);
    let obj2 = { style: tmp.bodyText, variant: "text-md/medium", children: outboundPromotion.outboundRedemptionModalBody };
    items1[2] = callback(onCancel(code[11]).Text, obj2);
    let obj3 = { style: tmp.copyInputContainer };
    const obj4 = { style: tmp.copyInputLabel, variant: "text-md/semibold", color: "mobile-text-heading-primary" };
    const intl2 = onCancel(code[12]).intl;
    obj4.children = intl2.string(onCancel(code[12]).t.s9LFQh);
    const items2 = [callback(onCancel(code[11]).Text, obj4), , ];
    let obj5 = {};
    const copyInput = tmp.copyInput;
    if (tmp5) {
      const obj6 = {};
      const merged = Object.assign(copyInput);
      const merged1 = Object.assign(tmp.copyInputCopied);
      let tmp19 = obj6;
    } else {
      tmp19 = copyInput;
    }
    obj5.style = tmp19;
    const obj7 = { style: null, horizontal: true, showsHorizontalScrollIndicator: false };
    const obj8 = { flex: 1 };
    obj7.style = obj8;
    const obj9 = {
      onStartShouldSetResponderCapture() {
          return true;
        }
    };
    const obj10 = { lineClamp: 1, variant: "text-sm/medium", color: "interactive-text-active", children: code };
    obj9.children = callback(onCancel(code[11]).Text, obj10);
    obj7.children = callback(closure_6, obj9);
    let items3 = [callback(closure_8, obj7), ];
    let obj11 = { style: tmp.copyButton };
    let obj12 = {};
    const intl3 = onCancel(code[12]).intl;
    const string = intl3.string;
    let t5VZ88 = onCancel(code[12]).t;
    if (tmp5) {
      t5VZ88 = t5VZ88.t5VZ88;
      let stringResult = string(t5VZ88);
    } else {
      stringResult = string(t5VZ88.OpuAlK);
    }
    obj12.text = stringResult;
    obj12.size = "sm";
    obj12.onPress = function onPress() {
      onCancel(code[14]).copy(code);
      callback(true);
    };
    obj12 = tmp25(onCancel(code[13]).Button, obj12);
    obj11.children = obj12;
    items3[1] = callback(closure_6, obj11);
    obj5.children = items3;
    items2[1] = callback2(closure_6, obj5);
    obj11 = callback;
    items3 = onCancel(code[11]).Text;
    obj5 = callback(items3, { variant: "text-sm/medium", color: "text-muted", children: "This code is included in your confirmation email" });
    items2[2] = obj5;
    obj3.children = items2;
    obj3 = tmp12(tmp13, obj3);
    items1[3] = obj3;
    obj.children = items1;
    callback2(closure_6, obj);
    const tmp27 = closure_6;
  } else {
    obj = { style: tmp.loading };
    let tmp11 = callback(closure_5, obj);
    const obj13 = { style: tmp.body };
    const obj14 = { source: onClaim(code[15]), style: tmp.errorArt };
    const items4 = [callback(analyticsLocations, obj14), , ];
    const obj15 = { style: tmp.errorTitle, variant: "text-lg/bold", color: "mobile-text-heading-primary" };
    const intl4 = onCancel(code[12]).intl;
    obj15.children = intl4.string(onCancel(code[12]).t.iufib1);
    items4[1] = callback(onCancel(code[11]).Text, obj15);
    const obj16 = { style: tmp.bodyText, variant: "text-md/medium" };
    const intl5 = onCancel(code[12]).intl;
    obj16.children = intl5.string(onCancel(code[12]).t.eAn6z2);
    items4[2] = callback(onCancel(code[11]).Text, obj16);
    obj13.children = items4;
    const obj17 = { onCancel };
    const tmp38 = callback;
    const tmp43 = callback2(closure_6, obj13);
    if (null != first) {
      const intl7 = onCancel(code[12]).intl;
      let stringResult1 = intl7.string(onCancel(code[12]).t.cpT0Cq);
    } else {
      const intl6 = onCancel(code[12]).intl;
      stringResult1 = intl6.string(onCancel(code[12]).t["+zx47d"]);
    }
    obj17.confirmText = stringResult1;
    obj17.onConfirm = function onConfirm() {
      if (null != code) {
        const outboundPromotionRedemptionUrl = onCancel(code[9]).getOutboundPromotionRedemptionUrl(code, outboundPromotion);
        const obj = onCancel(code[9]);
        onClaim(code[17]).openURL(outboundPromotionRedemptionUrl);
        const obj2 = onClaim(code[17]);
      }
      onCancel();
    };
    let stringResult2;
    if (null == first) {
      const intl8 = onCancel(code[12]).intl;
      stringResult2 = intl8.string(onCancel(code[12]).t.TulDPl);
    }
    obj17.cancelText = stringResult2;
    let tmp53 = !tmp6;
    if (!tmp6) {
      tmp53 = null == first;
    }
    obj17.noDefaultButtons = tmp53;
    if (null != first) {
      tmp11 = tmp43;
    }
    obj17.children = tmp11;
    return tmp38(onClaim(code[16]), obj17);
  }
};
