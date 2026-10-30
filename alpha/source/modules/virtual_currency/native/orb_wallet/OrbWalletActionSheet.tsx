// Module ID: 17637
// Function ID: 17638
// Name: OrbWalletActionSheet
// Dependencies: [19, 17, 21, 5009, 575, 7345, 5075, 17638, 17639, 5267, 17640, 17647, 5619, 1114, 2173, 2]
// Exports: default

// Module 17637 (OrbWalletActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7345 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, section: obj3, challengesTitleRow: obj4, divider: obj5 };
obj2 = { width: "100%", paddingBottom: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj4 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8 };
obj5 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/virtual_currency/native/orb_wallet/OrbWalletActionSheet.tsx");

export default function OrbWalletActionSheet(analyticsPage) {
  let AnalyticsLocationsProvider;
  let Provider;
  let Text;
  let balance;
  let intl;
  let items2;
  let items3;
  let obj2;
  let obj3;
  let obj4;
  let obj5;
  let obj8;
  let obj9;
  let source;
  ({ balance, source } = analyticsPage);
  analyticsPage = analyticsPage.analyticsPage;
  const themeOverride = analyticsPage.themeOverride;
  const ref = react.useRef(null);
  const tmp2 = closure_7();
  let items = [source];
  let items1 = [analyticsPage];
  const memo = react.useMemo(() => {
    let items1;
    if (typeof source === "string") {
      const items = [tmp, AnalyticsLocationDefault.ORB_WALLET];
      items1 = items;
    } else {
      items1 = [AnalyticsLocationDefault.ORB_WALLET];
    }
    return items1;
  }, items);
  const memo1 = react.useMemo(() => ({ analyticsPage }), items1);
  const obj = { theme: themeOverride, children: closure_5(AnalyticsLocationsProvider, obj2) };
  const ThemeContextProvider = source(5075).ThemeContextProvider;
  obj2 = { newLocations: memo, children: closure_5(Provider, obj3) };
  AnalyticsLocationsProvider = source(17638).AnalyticsLocationsProvider;
  obj3 = { value: memo1, children: closure_5(BottomSheet, obj4) };
  Provider = source(17639).OrbWalletAnalyticsContext.Provider;
  obj4 = { ref, startExpanded: true, children: closure_6(View, obj5) };
  obj5 = { style: tmp2.container, children: items3 };
  const obj6 = { style: tmp2.section, children: items2 };
  BottomSheet = source(5267).BottomSheet;
  items2 = [closure_5(source(17640).OrbBalanceHeader, { orbBalance: balance }), closure_5(source(17647).OrbWalletPrimaryCard, { orbBalance: balance })];
  items3 = [closure_6(View, obj6), , , ];
  const obj7 = { style: tmp2.section, children: closure_5(View, obj8) };
  obj8 = { style: tmp2.challengesTitleRow, children: closure_5(Text, obj9) };
  obj9 = { variant: "text-sm/normal", color: "text-subtle", children: intl.string(analyticsPage(2173).H6Ny8N) };
  Text = source(5619).Text;
  intl = source(1114).intl;
  items3[1] = closure_5(View, obj7);
  const obj10 = { style: tmp2.divider };
  items3[2] = closure_5(View, obj10);
  const obj11 = { style: tmp2.section, children: closure_5(source(17640).OrbWalletFooter, {}) };
  items3[3] = closure_5(View, obj11);
  return closure_5(ThemeContextProvider, obj);
};
