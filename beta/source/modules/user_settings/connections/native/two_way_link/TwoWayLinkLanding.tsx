// Module ID: 9729
// Function ID: 9730
// Name: TwoWayLinkLanding
// Dependencies: [19, 17, 6572, 21, 5014, 9730, 504, 5717, 5624, 6975, 1113, 7292, 6027, 5634, 2]
// Exports: TwoWayLinkLanding

// Module 9729 (TwoWayLinkLanding)
import get_initialized from "get initialized" /* 504 */;
import intl3 from "intl" /* 1113 */;
import Text_Text from "Text/Text" /* 5624 */;
import TableRow2 from "TableRow" /* 6975 */;
import TwoWayLinkStyles from "TwoWayLinkStyles" /* 9730 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 6572 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let label;

let c3;
let closure_4;
let metroImportDefault;
let metroRequire;
({ View: c3, ScrollView: closure_4 } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ image: { marginBottom: 32 }, valueProps: { marginTop: 24, maxWidth: "100%" } });
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/TwoWayLinkLanding.tsx");

export function TwoWayLinkLanding(learnMoreLink) {
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
    const account = ConnectedAccountsStore.getAccount(null, require);
    let twoWayLink;
    if (account != null) {
      twoWayLink = account.twoWayLink;
    }
    return false === twoWayLink;
  });
  const obj5 = { source: img, style: items1 };
  items1 = [tmp.image, ];
  const tmp10 = valueProps(5717);
  const tmp8 = closure_4;
  if (imgStyle == null) {
    imgStyle = false;
  }
  items1[1] = imgStyle;
  items2 = [closure_6(tmp10, obj5), , , ];
  const obj6 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, accessibilityRole: "header", children: tmp11 };
  tmp11 = headerConnect;
  const Text = tmp2(5624).Text;
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
    const Text2 = tmp2(5624).Text;
    intl = tmp2(1113).intl;
    obj10 = { helpCenterLink: learnMoreLink };
    tmp9Result = tmp9(Text2, obj9);
  }
  items3[1] = tmp9Result;
  items4 = [closure_7(tmp8, { alwaysBounceVertical: false, children: items3 }), ];
  const obj11 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: closure_6(Stack, obj12) };
  const SafeAreaPaddingView = tmp2(7292).SafeAreaPaddingView;
  obj12 = { spacing: 8, direction: "vertical", style: twoWayLinkStyles.footerButton, children: closure_6(Button, obj13) };
  Stack = tmp2(6027).Stack;
  obj13 = { variant: "primary", size: "lg", text: intl2.string(intl3.t.LhlgY9), onPress: onNext };
  Button = tmp2(5634).Button;
  intl2 = tmp2(1113).intl;
  items4[1] = closure_6(SafeAreaPaddingView, obj11);
  return closure_7(closure_3, obj3);
}
