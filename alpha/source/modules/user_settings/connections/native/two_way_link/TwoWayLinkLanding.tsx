// Module ID: 9186
// Function ID: 9187
// Name: TwoWayLinkLanding
// Dependencies: [19, 17, 5758, 21, 5091, 558, 576, 9187, 504, 6163, 5087, 6186, 1126, 5376, 5374, 6810, 2]

// Module 9186 (TwoWayLinkLanding)
import get_initialized from "get initialized" /* 504 */;
import intl3 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 5087 */;
import TableRow2 from "TableRow" /* 6186 */;
import TwoWayLinkStyles from "TwoWayLinkStyles" /* 9187 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5758 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let metroImportDefault;
let metroRequire;
({ View: c3, ScrollView: closure_4 } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ image: { marginBottom: 32 }, valueProps: { marginTop: 24, maxWidth: "100%" } });
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function TwoWayLinkLanding(platformType) {
  let body;
  let container;
  let content;
  let first;
  let headerConnect;
  let headerReconnect;
  let img;
  let imgStyle;
  let items1;
  let learnMoreLink;
  let onNext;
  let tmp8;
  let valueProps;
  let obj = platformType(576);
  const cResult = obj.c(47);
  platformType = platformType.platformType;
  ({ img, imgStyle, headerConnect, headerReconnect, body, valueProps } = platformType);
  ({ learnMoreLink, onNext } = platformType);
  const tmp4 = closure_8();
  const obj2 = platformType(9187);
  const twoWayLinkStyles = obj2.useTwoWayLinkStyles();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConnectedAccountsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== platformType) {
    const fn = function u() {
      const account = ConnectedAccountsStore.getAccount(null, platformType);
      let twoWayLink;
      if (account != null) {
        twoWayLink = account.twoWayLink;
      }
      return false === twoWayLink;
    };
    cResult[1] = platformType;
    cResult[2] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const tmpResult = platformType(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp8);
  ({ container, content } = twoWayLinkStyles);
  if (imgStyle == null) {
    imgStyle = false;
  }
  if (cResult[3] === tmp4.image) {
    let tmp10;
    if (cResult[4] === imgStyle) {
      tmp10 = cResult[5];
    }
    if (cResult[6] === img) {
      let tmp11;
      if (cResult[7] === tmp10) {
        tmp11 = cResult[8];
      }
      let tmp15 = headerConnect;
      if (stateFromStores) {
        tmp15 = headerConnect;
        if (null != headerReconnect) {
          tmp15 = headerReconnect;
        }
      }
      if (cResult[9] === twoWayLinkStyles.title) {
        let tmp16;
        if (cResult[10] === tmp15) {
          tmp16 = cResult[11];
        }
        if (cResult[12] === body) {
          let tmp19;
          if (cResult[13] === twoWayLinkStyles.body) {
            tmp19 = cResult[14];
          }
          const valueProps2 = tmp4.valueProps;
          if (cResult[15] !== valueProps) {
            let tmp23;
            if (cResult[17] !== valueProps.length) {
              class M {
                constructor(label, arg1) {
                  let icon;
                  let subLabel;
                  label = label.label;
                  ({ subLabel, icon } = label);
                  const obj = { start: 0 === arg1, end: arg1 === valueProps.length - 1, subLabel, label: metroRequire(Text_Text.Text, { variant: "text-sm/normal", color: "mobile-text-heading-primary", children: label }), icon: metroRequire(TableRow2.TableRow.Icon, { IconComponent: icon }) };
                  const TableRow = TableRow2.TableRow;
                  return metroRequire(TableRow, obj, label);
                }
              }
              cResult[17] = valueProps.length;
              cResult[18] = M;
              tmp23 = M;
            } else {
              class M {
                constructor(label, arg1) {
                  let icon;
                  let subLabel;
                  label = label.label;
                  ({ subLabel, icon } = label);
                  const obj = { start: 0 === arg1, end: arg1 === valueProps.length - 1, subLabel, label: metroRequire(Text_Text.Text, { variant: "text-sm/normal", color: "mobile-text-heading-primary", children: label }), icon: metroRequire(TableRow2.TableRow.Icon, { IconComponent: icon }) };
                  const TableRow = TableRow2.TableRow;
                  return metroRequire(TableRow, obj, label);
                }
              }
            }
            const mapped = valueProps.map(tmp23);
            cResult[15] = valueProps;
            cResult[16] = mapped;
          } else {
            class M {
              constructor(label, arg1) {
                let icon;
                let subLabel;
                label = label.label;
                ({ subLabel, icon } = label);
                const obj = { start: 0 === arg1, end: arg1 === valueProps.length - 1, subLabel, label: metroRequire(Text_Text.Text, { variant: "text-sm/normal", color: "mobile-text-heading-primary", children: label }), icon: metroRequire(TableRow2.TableRow.Icon, { IconComponent: icon }) };
                const TableRow = TableRow2.TableRow;
                return metroRequire(TableRow, obj, label);
              }
            }
          }
          if (cResult[19] === tmp4.valueProps) {
            class M {
              constructor(label, arg1) {
                let icon;
                let subLabel;
                label = label.label;
                ({ subLabel, icon } = label);
                const obj = { start: 0 === arg1, end: arg1 === valueProps.length - 1, subLabel, label: metroRequire(Text_Text.Text, { variant: "text-sm/normal", color: "mobile-text-heading-primary", children: label }), icon: metroRequire(TableRow2.TableRow.Icon, { IconComponent: icon }) };
                const TableRow = TableRow2.TableRow;
                return metroRequire(TableRow, obj, label);
              }
            }
            if (cResult[22] === twoWayLinkStyles.content) {
              class M {
                constructor(label, arg1) {
                  let icon;
                  let subLabel;
                  label = label.label;
                  ({ subLabel, icon } = label);
                  const obj = { start: 0 === arg1, end: arg1 === valueProps.length - 1, subLabel, label: metroRequire(Text_Text.Text, { variant: "text-sm/normal", color: "mobile-text-heading-primary", children: label }), icon: metroRequire(TableRow2.TableRow.Icon, { IconComponent: icon }) };
                  const TableRow = TableRow2.TableRow;
                  return metroRequire(TableRow, obj, label);
                }
              }
            }
            const obj3 = { style: content, children: items1 };
            items1 = [tmp11, tmp16, tmp19, tmp25];
            cResult[22] = twoWayLinkStyles.content;
            cResult[23] = tmp19;
            cResult[24] = tmp25;
            cResult[25] = tmp11;
            cResult[26] = tmp16;
            cResult[27] = closure_7(closure_3, obj3);
            const tmp32 = closure_7(closure_3, obj3);
          }
          const obj4 = { style: valueProps2, children: tmp22 };
          cResult[19] = tmp4.valueProps;
          cResult[20] = tmp22;
          cResult[21] = closure_6(closure_3, obj4);
          const tmp28 = closure_6(closure_3, obj4);
        }
        const obj5 = { variant: "text-md/medium", color: "text-default", style: twoWayLinkStyles.body, children: body };
        const tmp21 = closure_6(platformType(5087).Text, obj5);
        cResult[12] = body;
        cResult[13] = twoWayLinkStyles.body;
        cResult[14] = tmp21;
        tmp19 = tmp21;
      }
      const obj6 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, accessibilityRole: "header", children: tmp15 };
      const tmp18 = closure_6(platformType(5087).Text, obj6);
      cResult[9] = twoWayLinkStyles.title;
      cResult[10] = tmp15;
      cResult[11] = tmp18;
      tmp16 = tmp18;
    }
    const obj7 = { source: img, style: tmp10 };
    const tmp14 = closure_6(valueProps(6163), obj7);
    cResult[6] = img;
    cResult[7] = tmp10;
    cResult[8] = tmp14;
    tmp11 = tmp14;
  }
  const items2 = [tmp4.image, imgStyle];
  cResult[3] = tmp4.image;
  cResult[4] = imgStyle;
  cResult[5] = items2;
  tmp10 = items2;
}) : (function TwoWayLinkLanding(learnMoreLink) {
  let Button;
  let Stack;
  let body;
  let headerConnect;
  let headerReconnect;
  let img;
  let imgStyle;
  let intl;
  let intl2;
  let items1;
  let items2;
  let items4;
  let obj10;
  let obj12;
  let obj13;
  let onNext;
  let require;
  let tmp11;
  let valueProps;
  ({ platformType: require, imgStyle, headerConnect, headerReconnect, valueProps } = learnMoreLink);
  learnMoreLink = learnMoreLink.learnMoreLink;
  ({ img, body, onNext } = learnMoreLink);
  const tmp = closure_8();
  let obj = TwoWayLinkStyles;
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  const items = [ConnectedAccountsStore];
  const obj3 = { style: twoWayLinkStyles.container, children: items4 };
  const obj4 = { style: twoWayLinkStyles.content, children: items2 };
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, () => {
    const account = ConnectedAccountsStore.getAccount(null, _require);
    let twoWayLink;
    if (account != null) {
      twoWayLink = account.twoWayLink;
    }
    return false === twoWayLink;
  });
  const obj5 = { source: img, style: items1 };
  items1 = [tmp.image, ];
  const tmp10 = valueProps(6163);
  const tmp8 = closure_4;
  if (imgStyle == null) {
    imgStyle = false;
  }
  items1[1] = imgStyle;
  items2 = [closure_6(tmp10, obj5), , , ];
  const obj6 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, accessibilityRole: "header", children: tmp11 };
  tmp11 = headerConnect;
  const Text = tmp2(5087).Text;
  if (stateFromStores) {
    tmp11 = headerConnect;
    if (null != headerReconnect) {
      tmp11 = headerReconnect;
    }
  }
  items2[1] = closure_6(Text, obj6);
  const obj7 = { variant: "text-md/medium", color: "text-default", style: twoWayLinkStyles.body, children: body };
  items2[2] = closure_6(Text_Text.Text, obj7);
  const obj8 = {
    style: tmp.valueProps,
    children: valueProps.map((label, index) => {
      let icon;
      let subLabel;
      label = label.label;
      ({ subLabel, icon } = label);
      const obj = { start: 0 === index, end: index === valueProps.length - 1, subLabel, label: metroRequire(Text_Text.Text, { variant: "text-sm/normal", color: "mobile-text-heading-primary", children: label }), icon: metroRequire(TableRow2.TableRow.Icon, { IconComponent: icon }) };
      const TableRow = TableRow2.TableRow;
      return metroRequire(TableRow, obj, label);
    })
  };
  items2[3] = closure_6(closure_3, obj8);
  const items3 = [closure_7(closure_3, obj4), ];
  let tmp9Result = null;
  if (null != learnMoreLink) {
    const obj9 = { variant: "text-md/normal", color: "text-default", style: twoWayLinkStyles.body, children: intl.format(intl3.t["/l3n+1"], obj10) };
    const Text2 = tmp2(5087).Text;
    intl = tmp2(1126).intl;
    obj10 = { helpCenterLink: learnMoreLink };
    tmp9Result = tmp9(Text2, obj9);
  }
  items3[1] = tmp9Result;
  items4 = [closure_7(tmp8, { alwaysBounceVertical: false, children: items3 }), ];
  const obj11 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: closure_6(Stack, obj12) };
  const SafeAreaPaddingView = tmp2(6810).SafeAreaPaddingView;
  obj12 = { spacing: 8, direction: "vertical", style: twoWayLinkStyles.footerButton, children: closure_6(Button, obj13) };
  Stack = tmp2(5374).Stack;
  obj13 = { variant: "primary", size: "lg", text: intl2.string(intl3.t.LhlgY9), onPress: onNext };
  Button = tmp2(5376).Button;
  intl2 = tmp2(1126).intl;
  items4[1] = closure_6(SafeAreaPaddingView, obj11);
  return closure_7(closure_3, obj3);
});
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/TwoWayLinkLanding.tsx");

export const TwoWayLinkLanding = tmp5;
