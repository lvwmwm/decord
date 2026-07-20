// Module ID: 14381
// Function ID: 108532
// Name: CollectiblesShopViewAllCategoryItemsHeader
// Dependencies: [31, 27, 1849, 33, 4126, 8885, 5426, 1212, 4655, 5385]
// Exports: default

// Module 14381 (CollectiblesShopViewAllCategoryItemsHeader)
import "module_31";
import get ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import module_33 from "module_33";
import XSmallIcon from "XSmallIcon";

({ Image: closure_3, View: closure_4 } = get_ActivityIndicator);
({ jsx: closure_5, jsxs: closure_6 } = _isNativeReflectConstruct);
let closure_7 = module_33.createStyles({ headerContainer: {}, backButton: { flex: 1 }, logo: {}, dummyRightButton: { flex: 1 } });
const result = XSmallIcon.fileFinishedImporting("modules/collectibles/native/CollectiblesShopViewAllCategoryItemsHeader.tsx");

export default function CollectiblesShopViewAllCategoryItemsHeader(arg0) {
  let buttonColor;
  let categoryName;
  let logoUrl;
  ({ logoUrl, buttonColor, categoryName } = arg0);
  let obj = callback(dependencyMap[4]);
  const callback = obj.useStackNavigation();
  const tmp = callback4();
  let obj1 = callback(dependencyMap[5]);
  obj = {};
  obj = {};
  const youBarSettingsCustomHeaderPaddingTop = obj1.useYouBarSettingsCustomHeaderPaddingTop();
  const merged = Object.assign(tmp.headerContainer);
  obj["paddingTop"] = youBarSettingsCustomHeaderPaddingTop;
  obj.style = obj;
  obj1 = { style: tmp.backButton };
  const obj2 = { source: importDefault(dependencyMap[7]), color: buttonColor };
  const intl = callback(dependencyMap[8]).intl;
  obj2.accessibilityLabel = intl.string(callback(dependencyMap[8]).t.13/7kX);
  obj2.onPress = function onPress() {
    navigation.goBack();
  };
  obj1.children = callback2(callback(dependencyMap[6]).HeaderIconButton, obj2);
  const items = [callback2(closure_4, obj1), , ];
  const obj3 = { resizeMode: "contain", style: tmp.logo, source: { uri: logoUrl } };
  const intl2 = callback(dependencyMap[8]).intl;
  obj3.accessibilityLabel = intl2.formatToPlainString(callback(dependencyMap[8]).t.FNtLb3, { category: categoryName });
  obj3.accessibilityRole = "header";
  items[1] = callback2(closure_3, obj3);
  items[2] = callback2(closure_4, { style: tmp.dummyRightButton });
  obj.children = items;
  return callback3(closure_4, obj);
};
