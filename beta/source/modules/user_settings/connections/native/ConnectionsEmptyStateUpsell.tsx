// Module ID: 14495
// Function ID: 14496
// Name: ConnectionsEmptyStateUpsell
// Dependencies: [19, 17, 1074, 21, 4836, 576, 4767, 8528, 14496, 14497, 1397, 4685, 5919, 1177, 4800, 14493, 1981, 4832, 6923, 1613, 5279, 1115, 2]
// Exports: default

// Module 14495 (ConnectionsEmptyStateUpsell)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import AvatarUtils from "AvatarUtils" /* 1397 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import Text_Text from "Text/Text" /* 4832 */;
import Card_Card from "Card/Card" /* 5919 */;
import authorizeConnectionDefault from "authorizeConnection" /* 8528 */;
import ConnectionsTracking from "ConnectionsTracking" /* 14496 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let metroImportDefault;
let metroRequire;
let tmp;
const shared = tmp(4685);
function EmptyStateCard(platform) {
  let closure_1;
  let obj4;
  let obj5;
  let tmp9;
  platform = platform.platform;
  importDefault = undefined;
  let connectionBackgroundColor;
  let tmp = closure_8();
  const tmp3 = require("useTheme")();
  importDefault = tmp3;
  const items = [platform];
  const callback = react.useCallback(() => {
    const obj = { platformType: platform.type, location: AnalyticsLocations.CONNECTIONS_EMPTY_STATE };
    authorizeConnectionDefault(obj);
    const obj2 = ConnectionsTracking;
    const obj3 = { platformType: platform.type };
    const result = obj2.trackEmptyStateCardClicked(obj3);
  }, items);
  let obj = platform(connectionBackgroundColor[9]);
  const tmp2 = connectionBackgroundColor;
  connectionBackgroundColor = obj.getConnectionBackgroundColor(platform.type);
  const items1 = [connectionBackgroundColor, platform.icon.darkPNG, platform.icon.lightPNG, platform.icon.whitePNG, tmp3];
  const memo = react.useMemo(() => {
    let whitePNG;
    const makeSource = AvatarUtils.makeSource;
    AvatarUtils;
    if (null != connectionBackgroundColor) {
      whitePNG = platform.icon.whitePNG;
    } else {
      const icon = platform.icon;
      const tmpResult = shared;
      whitePNG = tmpResult.isThemeDark(closure_1) ? icon.darkPNG : icon.lightPNG;
    }
    return makeSource(whitePNG);
  }, items1);
  let obj2 = { onPress: callback, style: tmp.card, border: "strong", children: closure_6(tmp9, obj4) };
  const items2 = [tmp.iconContainer, ];
  let tmp10 = null != platform.color;
  const Card = platform(connectionBackgroundColor[12]).Card;
  const tmp5 = platform;
  tmp9 = View;
  if (tmp10) {
    let obj3 = { backgroundColor: connectionBackgroundColor };
    tmp10 = obj3;
  }
  items2[1] = tmp10;
  obj4 = { style: items2, children: closure_6(tmp5(tmp2[13]).Icon, obj5) };
  obj5 = { style: tmp.icon, source: memo, resizeMode: "contain", disableColor: true, accessibilityLabel: platform.name };
  return closure_6(Card, obj2);
}
function OtherConnectionsCard(count) {
  let Text;
  let obj2;
  let paths;
  count = count.count;
  const tmp = closure_8();
  const callback = react.useCallback(() => {
    const obj = require("ActionSheetActionCreators");
    obj.openLazy(require("asyncRequire")(paths[15], paths.paths), "AddConnection");
  }, []);
  let obj = { onPress: callback, style: tmp.card, border: "strong", children: metroRequire(Text, obj2) };
  const Card = Card_Card.Card;
  obj2 = { variant: "text-md/medium", color: "interactive-text-default", children: "+" + count };
  Text = Text_Text.Text;
  return metroRequire(Card, obj);
}
const View = react_native.View;
const AnalyticsLocations = Constants.AnalyticsLocations;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles(() => {
  const obj = { container: { flex: 1, alignItems: "center" }, content: { flex: 1, width: "100%", maxWidth: 260, alignItems: "center", justifyContent: "center" }, card: { flex: 1, maxHeight: 76, maxWidth: 76, aspectRatio: 1, alignItems: "center", justifyContent: "center", padding: 12 }, textContainer: { marginTop: 32 }, text: { textAlign: "center" }, iconContainer: { flex: 1, maxHeight: 52, maxWidth: 52, aspectRatio: 1, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center", padding: 8 }, icon: { flex: 1, aspectRatio: 1 } };
  ({ flex: 1, maxHeight: 52, maxWidth: 52, aspectRatio: 1, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center", padding: 8 });
  return obj;
});
let result = size.fileFinishedImporting("modules/user_settings/connections/native/ConnectionsEmptyStateUpsell.tsx");

export default function ConnectionsEmptyStateUpsell() {
  let emptyStatePlatforms;
  let intl;
  let intl2;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let obj4;
  const tmp = closure_8();
  let obj = emptyStatePlatforms(6923);
  emptyStatePlatforms = obj.useEmptyStatePlatforms();
  const items = [emptyStatePlatforms];
  const memo = react.useMemo(() => emptyStatePlatforms.slice(0, 3), items);
  const items1 = [emptyStatePlatforms];
  const memo1 = react.useMemo(() => emptyStatePlatforms.slice(3, 5), items1);
  const obj2 = { style: items2, children: closure_7(View, obj4) };
  items2 = [tmp.container, { paddingBottom: useSafeAreaInsetsDefault().bottom }];
  obj4 = { style: tmp.content, children: items5 };
  const obj5 = { spacing: 16, direction: "vertical", align: "center", style: tmp.textContainer, children: items3 };
  ({ paddingBottom: useSafeAreaInsetsDefault().bottom });
  const Stack = emptyStatePlatforms(5279).Stack;
  const obj6 = {
    spacing: 16,
    justify: "center",
    direction: "horizontal",
    children: memo.map((platform) => {
      const obj = { platform };
      return closure_1_6(EmptyStateCard, obj, platform.type);
    })
  };
  const Stack2 = emptyStatePlatforms(5279).Stack;
  items3 = [closure_6(Stack2, obj6), ];
  const obj7 = { spacing: 16, justify: "center", direction: "horizontal", children: items4 };
  const Stack3 = emptyStatePlatforms(5279).Stack;
  items4 = [
    memo1.map((platform) => {
      const obj = { platform };
      return closure_1_6(EmptyStateCard, obj, platform.type);
    }),

  ];
  const obj8 = { count: emptyStatePlatforms.length - 5 };
  items4[1] = closure_6(OtherConnectionsCard, obj8);
  items3[1] = closure_7(Stack3, obj7);
  items5 = [closure_7(Stack, obj5), ];
  const obj9 = { spacing: 8, align: "center", style: tmp.textContainer, children: items6 };
  const Stack4 = emptyStatePlatforms(5279).Stack;
  const obj10 = { variant: "text-lg/bold", color: "mobile-text-heading-primary", style: tmp.text, children: intl.string(emptyStatePlatforms(1115).t.JlrHXb) };
  const Text = emptyStatePlatforms(4832).Text;
  intl = emptyStatePlatforms(1115).intl;
  items6 = [closure_6(Text, obj10), ];
  const obj11 = { variant: "text-md/medium", color: "text-default", style: tmp.text, children: intl2.string(emptyStatePlatforms(1115).t.XijaQP) };
  const Text2 = emptyStatePlatforms(4832).Text;
  intl2 = emptyStatePlatforms(1115).intl;
  items6[1] = closure_6(Text2, obj11);
  items5[1] = closure_7(Stack4, obj9);
  return closure_6(View, obj2);
};
