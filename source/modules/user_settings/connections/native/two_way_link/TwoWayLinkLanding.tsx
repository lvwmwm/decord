// Module ID: 8934
// Function ID: 70431
// Name: TwoWayLinkLanding
// Dependencies: []
// Exports: TwoWayLinkLanding

// Module 8934 (TwoWayLinkLanding)
importAll(dependencyMap[0]);
({ Image: closure_2, View: closure_3, ScrollView: closure_4 } = arg1(dependencyMap[1]));
let closure_5 = importDefault(dependencyMap[2]);
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
const tmp4 = arg1(dependencyMap[3]);
let closure_8 = arg1(dependencyMap[4]).createStyles({ image: { marginBottom: 32 }, valueProps: { IRRELEVANT_CHANNEL: true, minResolutionHeight: true } });
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/user_settings/connections/native/two_way_link/TwoWayLinkLanding.tsx");

export const TwoWayLinkLanding = function TwoWayLinkLanding(learnMoreLink) {
  let body;
  let headerConnect;
  let headerReconnect;
  let img;
  let imgStyle;
  let onNext;
  let valueProps;
  ({ platformType: closure_0, imgStyle, headerConnect, headerReconnect, valueProps } = learnMoreLink);
  const dependencyMap = valueProps;
  learnMoreLink = learnMoreLink.learnMoreLink;
  ({ img, body, onNext } = learnMoreLink);
  const tmp = callback2();
  let obj = arg1(dependencyMap[5]);
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  let obj1 = arg1(dependencyMap[6]);
  const items = [closure_5];
  obj = { style: twoWayLinkStyles.container };
  obj = { alwaysBounceVertical: false };
  obj1 = { style: twoWayLinkStyles.content };
  const obj2 = { source: img };
  const items1 = [tmp.image, ];
  let tmp9 = null != imgStyle;
  const stateFromStores = obj1.useStateFromStores(items, () => {
    const account = account.getAccount(null, closure_0);
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
  const obj3 = { style: twoWayLinkStyles.title };
  let tmp11 = headerConnect;
  if (stateFromStores) {
    tmp11 = headerConnect;
    if (null != headerReconnect) {
      tmp11 = headerReconnect;
    }
  }
  obj3.children = tmp11;
  items2[1] = callback(arg1(dependencyMap[7]).Text, obj3);
  items2[2] = callback(arg1(dependencyMap[7]).Text, { style: twoWayLinkStyles.body, children: body });
  items2[3] = callback(closure_3, {
    style: tmp.valueProps,
    children: valueProps.map((label) => {
      let icon;
      let subLabel;
      label = label.label;
      ({ subLabel, icon } = label);
      let obj = { start: 0 === arg1, end: arg1 === valueProps.length - 1, subLabel };
      obj = { hasMaxConnections: false, isBoostOnlySubscription: false, children: label };
      obj.label = callback2(callback(valueProps[7]).Text, obj);
      obj.icon = callback2(callback(valueProps[8]).TableRow.Icon, { IconComponent: icon });
      return callback2(callback(valueProps[8]).TableRow, obj, label);
    })
  });
  obj1.children = items2;
  const items3 = [closure_7(closure_3, obj1), ];
  let tmp12 = null;
  if (null != learnMoreLink) {
    const obj6 = { hasMaxConnections: 1, isBoostOnlySubscription: 1, style: twoWayLinkStyles.body };
    const intl = arg1(dependencyMap[10]).intl;
    const obj7 = { helpCenterLink: learnMoreLink };
    obj6.children = intl.format(arg1(dependencyMap[10]).t./l3n+1, obj7);
    tmp12 = callback(arg1(dependencyMap[9]).TextWithIOSLinkWorkaround, obj6);
  }
  items3[1] = tmp12;
  obj.children = items3;
  const items4 = [closure_7(closure_4, obj), ];
  const obj8 = { bottom: true, style: twoWayLinkStyles.footerContainer };
  const obj9 = { paddingVertical: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001728076652293636, width: 0.0005190304624491661, style: twoWayLinkStyles.footerButton };
  const obj10 = { "Bool(true)": "/assets/.cache/intl/bW9kdWxlcy9jb2xsZWN0aWJsZXMvd2Vi", "Bool(true)": null };
  const intl2 = arg1(dependencyMap[10]).intl;
  obj10.text = intl2.string(arg1(dependencyMap[10]).t.LhlgY9);
  obj10.onPress = onNext;
  obj9.children = callback(arg1(dependencyMap[13]).Button, obj10);
  obj8.children = callback(arg1(dependencyMap[12]).Stack, obj9);
  items4[1] = callback(arg1(dependencyMap[11]).SafeAreaPaddingView, obj8);
  obj.children = items4;
  return closure_7(closure_3, obj);
};
