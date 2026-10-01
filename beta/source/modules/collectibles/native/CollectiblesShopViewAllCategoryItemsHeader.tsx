// Module ID: 15464
// Function ID: 15465
// Name: CollectiblesShopViewAllCategoryItemsHeader
// Dependencies: [19, 17, 21, 4836, 1485, 12999, 7288, 7292, 1115, 2]
// Exports: default

// Module 15464 (CollectiblesShopViewAllCategoryItemsHeader)
import intl3 from "intl" /* 1115 */;
import useNavigation from "useNavigation" /* 1485 */;
import HeaderShared from "HeaderShared" /* 7288 */;
import AssetRegistryDefault from "AssetRegistry" /* 7292 */;
import useYouBarSettingsSafeArea from "useYouBarSettingsSafeArea" /* 12999 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
({ Image: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ headerContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingBottom: 12, paddingLeft: 8 }, backButton: { flex: 1 }, logo: { flex: 2, height: 36 }, dummyRightButton: { flex: 1 } });
const result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopViewAllCategoryItemsHeader.tsx");

export default function CollectiblesShopViewAllCategoryItemsHeader(arg0) {
  let HeaderIconButton;
  let buttonColor;
  let categoryName;
  let intl;
  let intl2;
  let items;
  let logoUrl;
  let obj4;
  let obj6;
  let youBarSettingsCustomHeaderPaddingTop;
  ({ logoUrl, buttonColor, categoryName } = arg0);
  const obj = useNavigation;
  let closure_0 = obj.useStackNavigation();
  const tmp = closure_7();
  const obj3 = { style: obj4, children: items };
  obj4 = { paddingTop: youBarSettingsCustomHeaderPaddingTop };
  const obj2 = useYouBarSettingsSafeArea;
  youBarSettingsCustomHeaderPaddingTop = obj2.useYouBarSettingsCustomHeaderPaddingTop();
  const merged = Object.assign(tmp.headerContainer);
  const obj5 = { style: tmp.backButton, children: hasOwnProperty(HeaderIconButton, obj6) };
  obj6 = {
    source: AssetRegistryDefault,
    color: buttonColor,
    accessibilityLabel: intl.string(intl3.t["13/7kX"]),
    onPress() {
      navigation.goBack();
    }
  };
  HeaderIconButton = HeaderShared.HeaderIconButton;
  intl = intl3.intl;
  items = [hasOwnProperty(React3, obj5), , ];
  const obj7 = { resizeMode: "contain", style: tmp.logo, source: { uri: logoUrl }, accessibilityLabel: intl2.formatToPlainString(intl3.t.FNtLb3, { category: categoryName }), accessibilityRole: "header" };
  intl2 = intl3.intl;
  items[1] = hasOwnProperty(_false, obj7);
  const obj8 = { style: tmp.dummyRightButton };
  items[2] = hasOwnProperty(React3, obj8);
  return metroRequire(React3, obj3);
};
