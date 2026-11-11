// Module ID: 7534
// Function ID: 7535
// Name: PlayStationLinkSuccess
// Dependencies: [19, 17, 21, 5243, 7378, 7418, 5957, 5866, 1113, 7351, 5873, 2]
// Exports: PlayStationLinkSuccess

// Module 7534 (PlayStationLinkSuccess)
import react_native from "react-native" /* 17 */;
import intl4 from "intl" /* 1113 */;
import Text_Text from "Text/Text" /* 5866 */;
import components_Button_Button from "components/Button/Button" /* 5873 */;
import FastImageDefault from "FastImage" /* 5957 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7351 */;
import TwoWayLinkStyles from "TwoWayLinkStyles" /* 7378 */;
import _modDef7418 from "module_7418" /* 7418 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ image: { width: 124, height: 160, marginBottom: 24 } });
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkSuccess.tsx");

export function PlayStationLinkSuccess(onClose) {
  let Button;
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  let obj8;
  let obj9;
  onClose = onClose.onClose;
  const tmp = closure_7();
  let obj = TwoWayLinkStyles;
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  const obj2 = { style: twoWayLinkStyles.container, children: items1 };
  const obj3 = { style: twoWayLinkStyles.content, children: items };
  const memo = react.useMemo(() => {
    const obj = { uri: _modDef7418 };
    return obj;
  }, []);
  items = [, , ];
  const obj4 = { source: memo, style: tmp.image };
  items[0] = hasOwnProperty(FastImageDefault, obj4);
  const obj5 = { variant: "heading-xl/semibold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, children: intl.string(intl4.t.e6SOl0) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items[1] = hasOwnProperty(Text, obj5);
  const obj6 = { variant: "body-md/normal", color: "text-default", style: twoWayLinkStyles.body, children: intl2.string(intl4.t.QjAZAQ) };
  const Text2 = Text_Text.Text;
  intl2 = intl4.intl;
  items[2] = hasOwnProperty(Text2, obj6);
  items1 = [metroRequire(View, obj3), ];
  const obj7 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: hasOwnProperty(View, obj8) };
  obj8 = { style: twoWayLinkStyles.footerButton, children: hasOwnProperty(Button, obj9) };
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  obj9 = { size: "md", text: intl3.string(intl4.t.i4jeWR), onPress: onClose };
  Button = components_Button_Button.Button;
  intl3 = intl4.intl;
  items1[1] = hasOwnProperty(SafeAreaPaddingView, obj7);
  return metroRequire(View, obj2);
}
