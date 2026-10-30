// Module ID: 17829
// Function ID: 17830
// Name: CollectiblesShopViewAllCategoryItemsHeader
// Dependencies: [19, 17, 21, 5009, 1498, 15305, 9791, 9795, 1114, 5712, 2]
// Exports: default

// Module 17829 (CollectiblesShopViewAllCategoryItemsHeader)
import react_native from "react-native" /* 17 */;
import intl3 from "intl" /* 1114 */;
import useNavigation from "useNavigation" /* 1498 */;
import FastImageDefault from "FastImage" /* 5712 */;
import HeaderShared from "HeaderShared" /* 9791 */;
import AssetRegistryDefault from "AssetRegistry" /* 9795 */;
import useYouBarSettingsSafeArea from "useYouBarSettingsSafeArea" /* 15305 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ headerContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingBottom: 12, paddingLeft: 8 }, backButton: { flex: 1 }, logo: { flex: 2, height: 36 }, dummyRightButton: { flex: 1 } });
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
  const tmp = closure_6();
  const obj3 = { style: obj4, children: items };
  obj4 = { paddingTop: youBarSettingsCustomHeaderPaddingTop };
  const obj2 = useYouBarSettingsSafeArea;
  youBarSettingsCustomHeaderPaddingTop = obj2.useYouBarSettingsCustomHeaderPaddingTop();
  const merged = Object.assign(tmp.headerContainer);
  const obj5 = { style: tmp.backButton, children: React3(HeaderIconButton, obj6) };
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
  items = [React3(View, obj5), , ];
  const obj7 = { resizeMode: "contain", style: tmp.logo, source: { uri: logoUrl }, accessibilityLabel: intl2.formatToPlainString(intl3.t.FNtLb3, { category: categoryName }), accessibilityRole: "header" };
  const tmp4 = FastImageDefault;
  intl2 = intl3.intl;
  items[1] = React3(tmp4, obj7);
  const obj8 = { style: tmp.dummyRightButton };
  items[2] = React3(View, obj8);
  return hasOwnProperty(View, obj3);
};
