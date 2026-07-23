// Module ID: 8942
// Function ID: 70485
// Name: TwoWayLinkLanding
// Dependencies: [31, 27, 4812, 33, 4130, 8943, 566, 4126, 5165, 5459, 1212, 5121, 4541, 4543, 2]
// Exports: TwoWayLinkLanding

// Module 8942 (TwoWayLinkLanding)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_2;
let closure_3;
let closure_4;
let closure_6;
let closure_7;
const require = arg1;
({ Image: closure_2, View: closure_3, ScrollView: closure_4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = _createForOfIteratorHelperLoose.createStyles({ image: { marginBottom: 32 }, valueProps: { marginTop: 24, maxWidth: "100%" } });
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/TwoWayLinkLanding.tsx");

export const TwoWayLinkLanding = function TwoWayLinkLanding(learnMoreLink) {
  let body;
  let headerConnect;
  let headerReconnect;
  let img;
  let imgStyle;
  let onNext;
  let require;
  let valueProps;
  ({ platformType: require, imgStyle, headerConnect, headerReconnect, valueProps } = learnMoreLink);
  learnMoreLink = learnMoreLink.learnMoreLink;
  ({ img, body, onNext } = learnMoreLink);
  const tmp = callback2();
  let obj = require(valueProps[5]);
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  let obj1 = require(valueProps[6]);
  const items = [_isNativeReflectConstruct];
  obj = { style: twoWayLinkStyles.container };
  obj = { alwaysBounceVertical: false };
  obj1 = { style: twoWayLinkStyles.content };
  const obj2 = { source: img };
  const items1 = [tmp.image, ];
  let tmp9 = null != imgStyle;
  const stateFromStores = obj1.useStateFromStores(items, () => {
    const account = outer1_5.getAccount(null, closure_0);
    let twoWayLink;
    if (null != account) {
      twoWayLink = account.twoWayLink;
    }
    return false === twoWayLink;
  });
  if (tmp9) {
    tmp9 = imgStyle;
  }
  items1[1] = tmp9;
  obj2.style = items1;
  const items2 = [callback(closure_2, obj2), , , ];
  const obj3 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, accessibilityRole: "header" };
  let tmp11 = headerConnect;
  if (stateFromStores) {
    tmp11 = headerConnect;
    if (null != headerReconnect) {
      tmp11 = headerReconnect;
    }
  }
  obj3.children = tmp11;
  items2[1] = callback(require(valueProps[7]).Text, obj3);
  const obj4 = { variant: "text-md/medium", color: "text-default", style: twoWayLinkStyles.body, children: body };
  items2[2] = callback(require(valueProps[7]).Text, obj4);
  items2[3] = callback(closure_3, {
    style: tmp.valueProps,
    children: valueProps.map((label) => {
      let icon;
      let subLabel;
      label = label.label;
      ({ subLabel, icon } = label);
      let obj = { start: 0 === arg1, end: arg1 === valueProps.length - 1, subLabel };
      obj = { variant: "text-sm/normal", color: "mobile-text-heading-primary", children: label };
      obj.label = outer1_6(outer1_0(valueProps[7]).Text, obj);
      obj.icon = outer1_6(outer1_0(valueProps[8]).TableRow.Icon, { IconComponent: icon });
      return outer1_6(outer1_0(valueProps[8]).TableRow, obj, label);
    })
  });
  obj1.children = items2;
  const items3 = [closure_7(closure_3, obj1), ];
  let tmp12 = null;
  if (null != learnMoreLink) {
    const obj6 = { variant: "text-md/normal", color: "text-default", style: twoWayLinkStyles.body };
    const intl = require(valueProps[10]).intl;
    const obj7 = { helpCenterLink: learnMoreLink };
    obj6.children = intl.format(require(valueProps[10]).t["/l3n+1"], obj7);
    tmp12 = callback(require(valueProps[9]).TextWithIOSLinkWorkaround, obj6);
  }
  items3[1] = tmp12;
  obj.children = items3;
  const items4 = [closure_7(closure_4, obj), ];
  const obj8 = { bottom: true, style: twoWayLinkStyles.footerContainer };
  const obj9 = { spacing: 8, direction: "vertical", style: twoWayLinkStyles.footerButton };
  const obj10 = { variant: "primary", size: "lg" };
  const intl2 = require(valueProps[10]).intl;
  obj10.text = intl2.string(require(valueProps[10]).t.LhlgY9);
  obj10.onPress = onNext;
  obj9.children = callback(require(valueProps[13]).Button, obj10);
  obj8.children = callback(require(valueProps[12]).Stack, obj9);
  items4[1] = callback(require(valueProps[11]).SafeAreaPaddingView, obj8);
  obj.children = items4;
  return closure_7(closure_3, obj);
};
