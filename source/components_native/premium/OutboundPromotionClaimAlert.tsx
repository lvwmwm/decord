// Module ID: 12370
// Function ID: 94605
// Name: OutboundPromotionClaimAlert
// Dependencies: []
// Exports: default

// Module 12370 (OutboundPromotionClaimAlert)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ ActivityIndicator: closure_5, View: closure_6, Image: closure_7, ScrollView: closure_8 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { loading: { marginVertical: 80 }, body: { alignItems: "center" }, title: { marginBottom: 8 }, errorTitle: { 0: "<string:1091687288>", 0: "/assets/design/components/Icon/native/redesign/generated/images" }, bodyText: {} };
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[5]).radii.sm };
obj.copyInputContainer = obj;
obj.copyInputLabel = { 0: "<string:410124289>", 0: "<string:402653184>" };
const tmp3 = arg1(dependencyMap[3]);
obj.copyInput = { borderColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWEST, borderRadius: importDefault(dependencyMap[5]).radii.xs };
const obj1 = { borderColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWEST, borderRadius: importDefault(dependencyMap[5]).radii.xs };
obj.copyInputCopied = { borderColor: importDefault(dependencyMap[5]).colors.ICON_FEEDBACK_POSITIVE };
obj.copyButton = {};
obj.promotionArt = {};
obj.errorArt = { <string:651579779>: "isArray", <string:4249959009>: "GuildRoleSubscriptionTierDetailsTab", <string:1446732419>: "isArray" };
let closure_11 = obj.createStyles(obj);
const obj2 = { borderColor: importDefault(dependencyMap[5]).colors.ICON_FEEDBACK_POSITIVE };
const result = arg1(dependencyMap[18]).fileFinishedImporting("components_native/premium/OutboundPromotionClaimAlert.tsx");

export default function OutboundPromotionClaimAlert(onCancel) {
  let tmp5;
  onCancel = onCancel.onCancel;
  const arg1 = onCancel;
  const onClaim = onCancel.onClaim;
  const importDefault = onClaim;
  const code = onCancel.code;
  const dependencyMap = code;
  const outboundPromotion = onCancel.outboundPromotion;
  const callback = outboundPromotion;
  const tmp = callback4();
  const tmp2 = callback(React.useState(null), 2);
  const first = tmp2[0];
  const React = tmp2[1];
  [tmp5, closure_5] = callback(importDefault(dependencyMap[6])(false, 2000), 2);
  const tmp6 = null != code;
  const tmp4 = callback(importDefault(dependencyMap[6])(false, 2000), 2);
  const analyticsLocations = importDefault(dependencyMap[7])(importDefault(dependencyMap[8]).USER_SETTINGS_GIFT_INVENTORY).analyticsLocations;
  const items = [tmp6, , , , , ];
  ({ id: arr[1], outboundTitle: arr[2], partnerId: arr[3] } = outboundPromotion);
  items[4] = onClaim;
  items[5] = analyticsLocations;
  const effect = React.useEffect(() => {
    if (!tmp6) {
      let obj = onCancel(code[9]);
      obj = {};
      ({ id: obj2.promotionId, outboundTitle: obj2.promotionTitle, partnerId: obj2.partnerId } = outboundPromotion);
      obj.analyticsLocations = analyticsLocations;
      const result = obj.claimOutboundPromotion(obj);
      result.then((arg0) => callback(arg0)).catch((arg0) => callback2(arg0));
      const nextPromise = result.then((arg0) => callback(arg0));
    }
  }, items);
  if (null != code) {
    let obj = { style: tmp.body };
    obj = { source: importDefault(dependencyMap[10]), style: tmp.promotionArt };
    const items1 = [callback2(analyticsLocations, obj), , , ];
    const obj1 = { style: tmp.title };
    const intl = arg1(dependencyMap[12]).intl;
    obj1.children = intl.string(arg1(dependencyMap[12]).t.23BfZh);
    items1[1] = callback2(arg1(dependencyMap[11]).Heading, obj1);
    const obj2 = { style: tmp.bodyText, variant: "text-md/medium", children: outboundPromotion.outboundRedemptionModalBody };
    items1[2] = callback2(arg1(dependencyMap[11]).Text, obj2);
    let obj3 = { style: tmp.copyInputContainer };
    const obj4 = { delete: null, dispatch: null, raw: null, style: tmp.copyInputLabel };
    const intl2 = arg1(dependencyMap[12]).intl;
    obj4.children = intl2.string(arg1(dependencyMap[12]).t.s9LFQh);
    const items2 = [callback2(arg1(dependencyMap[11]).Text, obj4), , ];
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
    const obj7 = { "Bool(false)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003076984559, "Bool(false)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000636598737303, "Bool(false)": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007971384466157509 };
    const obj8 = { flex: 1 };
    obj7.style = obj8;
    const obj9 = {
      onStartShouldSetResponderCapture() {
          return true;
        }
    };
    const obj10 = { children: code };
    obj9.children = callback2(arg1(dependencyMap[11]).Text, obj10);
    obj7.children = callback2(tmp6, obj9);
    let items3 = [callback2(closure_8, obj7), ];
    let obj11 = { style: tmp.copyButton };
    let obj12 = {};
    const intl3 = arg1(dependencyMap[12]).intl;
    const string = intl3.string;
    let t5VZ88 = arg1(dependencyMap[12]).t;
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
    obj12 = tmp25(arg1(dependencyMap[13]).Button, obj12);
    obj11.children = obj12;
    items3[1] = callback2(tmp6, obj11);
    obj5.children = items3;
    items2[1] = callback3(tmp6, obj5);
    obj11 = callback2;
    items3 = arg1(dependencyMap[11]).Text;
    obj5 = callback2(items3, { deer: "isArray", Ufm9XX: "isArray", playstationVersion: "isArray" });
    items2[2] = obj5;
    obj3.children = items2;
    obj3 = tmp12(tmp13, obj3);
    items1[3] = obj3;
    obj.children = items1;
    callback3(tmp6, obj);
    const tmp27 = tmp6;
  } else {
    obj = { style: tmp.loading };
    let tmp11 = callback2(closure_5, obj);
    const obj13 = { style: tmp.body };
    const obj14 = { source: importDefault(dependencyMap[15]), style: tmp.errorArt };
    const items4 = [callback2(analyticsLocations, obj14), , ];
    const obj15 = { style: tmp.errorTitle };
    const intl4 = arg1(dependencyMap[12]).intl;
    obj15.children = intl4.string(arg1(dependencyMap[12]).t.iufib1);
    items4[1] = callback2(arg1(dependencyMap[11]).Text, obj15);
    const obj16 = { style: tmp.bodyText, variant: "text-md/medium" };
    const intl5 = arg1(dependencyMap[12]).intl;
    obj16.children = intl5.string(arg1(dependencyMap[12]).t.eAn6z2);
    items4[2] = callback2(arg1(dependencyMap[11]).Text, obj16);
    obj13.children = items4;
    const obj17 = { onCancel };
    const tmp38 = callback2;
    const tmp43 = callback3(tmp6, obj13);
    if (null != first) {
      const intl7 = arg1(dependencyMap[12]).intl;
      let stringResult1 = intl7.string(arg1(dependencyMap[12]).t.cpT0Cq);
    } else {
      const intl6 = arg1(dependencyMap[12]).intl;
      stringResult1 = intl6.string(arg1(dependencyMap[12]).t.+zx47d);
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
      const intl8 = arg1(dependencyMap[12]).intl;
      stringResult2 = intl8.string(arg1(dependencyMap[12]).t.TulDPl);
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
    return tmp38(importDefault(dependencyMap[16]), obj17);
  }
};
