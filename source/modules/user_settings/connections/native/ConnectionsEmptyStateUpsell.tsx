// Module ID: 13862
// Function ID: 106116
// Name: EmptyStateCard
// Dependencies: [31, 27, 653, 33, 4130, 689, 4066, 8970, 13863, 13864, 1392, 3976, 5167, 1273, 4098, 13860, 1934, 4126, 6735, 1557, 4541, 1212, 2]
// Exports: default

// Module 13862 (EmptyStateCard)
import result from "result";
import { View } from "get ActivityIndicator";
import { AnalyticsLocations } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
function EmptyStateCard(platform) {
  platform = platform.platform;
  const tmp = callback3();
  const tmp2 = importDefault(connectionBackgroundColor[6])();
  importDefault = tmp2;
  const items = [platform];
  const callback = React.useCallback(() => {
    let obj = { platformType: platform.type, location: outer1_5.CONNECTIONS_EMPTY_STATE };
    tmp2(connectionBackgroundColor[7])(obj);
    obj = { platformType: platform.type };
    const result = platform(connectionBackgroundColor[8]).trackEmptyStateCardClicked(obj);
  }, items);
  let obj = platform(connectionBackgroundColor[9]);
  connectionBackgroundColor = obj.getConnectionBackgroundColor(platform.type);
  const items1 = [connectionBackgroundColor, platform.icon.darkPNG, platform.icon.lightPNG, platform.icon.whitePNG, tmp2];
  const memo = React.useMemo(() => {
    if (null != connectionBackgroundColor) {
      let whitePNG = platform.icon.whitePNG;
    } else {
      const icon = platform.icon;
      whitePNG = platform(connectionBackgroundColor[11]).isThemeDark(closure_1) ? icon.darkPNG : icon.lightPNG;
      const obj2 = platform(connectionBackgroundColor[11]);
    }
    return platform(connectionBackgroundColor[10]).makeSource(whitePNG);
  }, items1);
  obj = { onPress: callback, style: tmp.card, border: "strong" };
  obj = {};
  const items2 = [tmp.iconContainer, ];
  let tmp9 = null != platform.color;
  if (tmp9) {
    const obj1 = { backgroundColor: connectionBackgroundColor };
    tmp9 = obj1;
  }
  items2[1] = tmp9;
  obj.style = items2;
  obj.children = callback(platform(connectionBackgroundColor[13]).Icon, { style: tmp.icon, source: memo, resizeMode: "contain", disableColor: true, accessibilityLabel: platform.name });
  obj.children = callback(View, obj);
  return callback(platform(connectionBackgroundColor[12]).Card, obj);
}
function OtherConnectionsCard(count) {
  const callback = React.useCallback(() => {
    outer1_1(outer1_2[14]).openLazy(outer1_0(outer1_2[16])(outer1_2[15], outer1_2.paths), "AddConnection");
  }, []);
  let obj = { onPress: callback, style: callback3().card, border: "strong" };
  obj = { variant: "text-md/medium", color: "interactive-text-default", children: "+" + count.count };
  obj.children = callback(require(4126) /* Text */.Text, obj);
  return callback(require(5167) /* getCardBackgroundToken */.Card, obj);
}
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = _createForOfIteratorHelperLoose.createStyles(() => {
  let obj = { container: { flex: 1, alignItems: "center" }, content: { flex: 1, width: "100%", maxWidth: 260, alignItems: "center", justifyContent: "center" }, card: { flex: 1, maxHeight: 76, maxWidth: 76, aspectRatio: 1, alignItems: "center", justifyContent: "center", padding: 12 }, textContainer: { marginTop: 32 }, text: { textAlign: "center" } };
  obj = { flex: 1, maxHeight: 52, maxWidth: 52, aspectRatio: 1, borderRadius: importDefault(689).radii.round, alignItems: "center", justifyContent: "center", padding: 8 };
  obj.iconContainer = obj;
  obj.icon = { flex: 1, aspectRatio: 1 };
  return obj;
});
let result = require("ME").fileFinishedImporting("modules/user_settings/connections/native/ConnectionsEmptyStateUpsell.tsx");

export default function ConnectionsEmptyStateUpsell() {
  const tmp = callback3();
  let obj = emptyStatePlatforms(6735);
  emptyStatePlatforms = obj.useEmptyStatePlatforms();
  const items = [emptyStatePlatforms];
  const memo = React.useMemo(() => emptyStatePlatforms.slice(0, 3), items);
  const items1 = [emptyStatePlatforms];
  const memo1 = React.useMemo(() => emptyStatePlatforms.slice(3, 5), items1);
  obj = {};
  const items2 = [tmp.container, ];
  obj = { paddingBottom: importDefault(1557)().bottom };
  items2[1] = obj;
  obj.style = items2;
  const obj1 = { style: tmp.content };
  const obj2 = { spacing: 16, direction: "vertical", align: "center", style: tmp.textContainer };
  const obj3 = { spacing: 16, justify: "center", direction: "horizontal", children: memo.map((platform) => outer1_6(outer1_9, { platform }, platform.type)) };
  const items3 = [callback(emptyStatePlatforms(4541).Stack, obj3), ];
  const obj4 = { spacing: 16, justify: "center", direction: "horizontal" };
  const items4 = [memo1.map((platform) => outer1_6(outer1_9, { platform }, platform.type)), callback(OtherConnectionsCard, { count: emptyStatePlatforms.length - 5 })];
  obj4.children = items4;
  items3[1] = callback2(emptyStatePlatforms(4541).Stack, obj4);
  obj2.children = items3;
  const items5 = [callback2(emptyStatePlatforms(4541).Stack, obj2), ];
  const obj6 = { spacing: 8, align: "center", style: tmp.textContainer };
  const obj7 = { variant: "text-lg/bold", color: "mobile-text-heading-primary", style: tmp.text };
  const intl = emptyStatePlatforms(1212).intl;
  obj7.children = intl.string(emptyStatePlatforms(1212).t.JlrHXb);
  const items6 = [callback(emptyStatePlatforms(4126).Text, obj7), ];
  const obj8 = { variant: "text-md/medium", color: "text-default", style: tmp.text };
  const intl2 = emptyStatePlatforms(1212).intl;
  obj8.children = intl2.string(emptyStatePlatforms(1212).t.XijaQP);
  items6[1] = callback(emptyStatePlatforms(4126).Text, obj8);
  obj6.children = items6;
  items5[1] = callback2(emptyStatePlatforms(4541).Stack, obj6);
  obj1.children = items5;
  obj.children = callback2(View, obj1);
  return callback(View, obj);
};
