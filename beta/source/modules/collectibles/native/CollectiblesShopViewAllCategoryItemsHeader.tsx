// Module ID: 16161
// Function ID: 16162
// Name: CollectiblesShopViewAllCategoryItemsHeader
// Dependencies: [19, 17, 21, 4758, 558, 1488, 13727, 8112, 8115, 1119, 2]
// Exports: default

// Module 16161 (CollectiblesShopViewAllCategoryItemsHeader)
import util from "util" /* 1119 */;
import useNavigation from "useNavigation" /* 1488 */;
import HeaderShared from "HeaderShared" /* 8112 */;
import _modDef8115 from "module_8115" /* 8115 */;
import useYouBarSettingsSafeArea from "useYouBarSettingsSafeArea" /* 13727 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4758);
let closure_7 = createStyles.createStyles({ headerContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingBottom: 12, paddingLeft: 8 }, backButton: { flex: 1 }, logo: { flex: 2, height: 36 }, dummyRightButton: { flex: 1 } });
let ReactCompilerGating = fn(558);
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopViewAllCategoryItemsHeader.tsx");

export default function CollectiblesShopViewAllCategoryItemsHeader_unoptimized(arg0) {
  ({ logoUrl, buttonColor, categoryName } = arg0);
  const navigation = useNavigation.useStackNavigation();
  const tmp = closure_7();
  const obj3 = { style: null, children: null };
  const obj4 = {};
  const youBarSettingsCustomHeaderPaddingTop = useYouBarSettingsSafeArea.useYouBarSettingsCustomHeaderPaddingTop();
  const merged = Object.assign(tmp.headerContainer);
  obj4.paddingTop = youBarSettingsCustomHeaderPaddingTop;
  obj3.style = obj4;
  const obj5 = { style: tmp.backButton, children: null };
  const obj6 = { source: _modDef8115, color: buttonColor, accessibilityLabel: null, onPress: null };
  const intl = util.intl;
  obj6.accessibilityLabel = intl.string(util.t["13/7kX"]);
  obj6.onPress = function onPress() {
    navigation.goBack();
  };
  obj5.children = hasOwnProperty(HeaderShared.HeaderIconButton, obj6);
  const items = [hasOwnProperty(React4, obj5), , ];
  const obj7 = { resizeMode: "contain", style: tmp.logo, source: { uri: logoUrl }, accessibilityLabel: null, accessibilityRole: "header" };
  const intl2 = util.intl;
  obj7.accessibilityLabel = intl2.formatToPlainString(util.t.FNtLb3, { category: categoryName });
  items[1] = hasOwnProperty(React3, obj7);
  items[2] = hasOwnProperty(React4, { style: tmp.dummyRightButton });
  obj3.children = items;
  return timestampProducer(React4, obj3);
};
