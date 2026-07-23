// Module ID: 14513
// Function ID: 110783
// Name: CollectiblesShopViewAllCategoryItemsHeader
// Dependencies: [31, 27, 33, 4130, 1456, 12384, 9122, 9126, 1212, 2]
// Exports: default

// Module 14513 (CollectiblesShopViewAllCategoryItemsHeader)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
const require = arg1;
({ Image: closure_3, View: closure_4 } = get_ActivityIndicator);
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ headerContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingBottom: 12, paddingLeft: 8 }, backButton: { flex: 1 }, logo: { flex: 2, height: 36 }, dummyRightButton: { flex: 1 } });
const result = require("jsxProd").fileFinishedImporting("modules/collectibles/native/CollectiblesShopViewAllCategoryItemsHeader.tsx");

export default function CollectiblesShopViewAllCategoryItemsHeader(arg0) {
  let buttonColor;
  let categoryName;
  let logoUrl;
  ({ logoUrl, buttonColor, categoryName } = arg0);
  let obj = _require(1456);
  _require = obj.useStackNavigation();
  const tmp = callback3();
  let obj1 = _require(12384);
  obj = {};
  obj = {};
  const youBarSettingsCustomHeaderPaddingTop = obj1.useYouBarSettingsCustomHeaderPaddingTop();
  const merged = Object.assign(tmp.headerContainer);
  obj["paddingTop"] = youBarSettingsCustomHeaderPaddingTop;
  obj.style = obj;
  obj1 = { style: tmp.backButton };
  const obj2 = { source: importDefault(9126), color: buttonColor };
  const intl = _require(1212).intl;
  obj2.accessibilityLabel = intl.string(_require(1212).t["13/7kX"]);
  obj2.onPress = function onPress() {
    navigation.goBack();
  };
  obj1.children = callback(_require(9122).HeaderIconButton, obj2);
  const items = [callback(closure_4, obj1), , ];
  const obj3 = { resizeMode: "contain", style: tmp.logo, source: { uri: logoUrl } };
  const intl2 = _require(1212).intl;
  obj3.accessibilityLabel = intl2.formatToPlainString(_require(1212).t.FNtLb3, { category: categoryName });
  obj3.accessibilityRole = "header";
  items[1] = callback(closure_3, obj3);
  items[2] = callback(closure_4, { style: tmp.dummyRightButton });
  obj.children = items;
  return callback2(closure_4, obj);
};
