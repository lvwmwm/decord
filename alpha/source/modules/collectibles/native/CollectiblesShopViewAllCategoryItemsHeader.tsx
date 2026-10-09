// Module ID: 16166
// Function ID: 16167
// Name: CollectiblesShopViewAllCategoryItemsHeader
// Dependencies: [19, 17, 21, 5091, 558, 576, 1503, 13676, 1126, 9270, 9273, 6163, 2]
// Exports: default

// Module 16166 (CollectiblesShopViewAllCategoryItemsHeader)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import intl4 from "intl" /* 1126 */;
import useNavigation from "useNavigation" /* 1503 */;
import FastImageDefault from "FastImage" /* 6163 */;
import HeaderShared from "HeaderShared" /* 9270 */;
import AssetRegistryDefault from "AssetRegistry" /* 9273 */;
import useYouBarSettingsSafeArea from "useYouBarSettingsSafeArea" /* 13676 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ headerContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingBottom: 12, paddingLeft: 8 }, backButton: { flex: 1 }, logo: { flex: 2, height: 36 }, dummyRightButton: { flex: 1 } });
let closure_7 = ReactCompilerGating.isReactCompilerEnabled();
const result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopViewAllCategoryItemsHeader.tsx");

export default function CollectiblesShopViewAllCategoryItemsHeader(arg0) {
  let HeaderIconButton;
  let buttonColor;
  let buttonColor2;
  let categoryName;
  let categoryName2;
  let intl;
  let intl2;
  let items;
  let logoUrl;
  let logoUrl2;
  let obj14;
  let obj16;
  let obj18;
  let obj9;
  let tmp14;
  let youBarSettingsCustomHeaderPaddingTop1;
  const tmp = closure_7;
  if (tmp) {
    const obj11 = react2;
    const cResult = obj11.c(27);
    ({ logoUrl: logoUrl2, buttonColor: buttonColor2, categoryName: categoryName2 } = arg0);
    const obj12 = useNavigation;
    const stackNavigation = obj12.useStackNavigation();
    const tmp20 = closure_6();
    const obj13 = useYouBarSettingsSafeArea;
    const youBarSettingsCustomHeaderPaddingTop = obj13.useYouBarSettingsCustomHeaderPaddingTop();
    if (cResult[0] === youBarSettingsCustomHeaderPaddingTop) {
      let tmp26;
      const _Symbol = Symbol;
      const backButton = tmp20.backButton;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = tmp15(1126).intl;
        const stringResult = intl3.string(intl4.t["13/7kX"]);
        cResult[3] = stringResult;
        tmp26 = stringResult;
      } else {
        tmp26 = cResult[3];
      }
      if (cResult[4] !== stackNavigation) {
        class S {
          constructor() {
            stackNavigation.goBack();
          }
        }
        cResult[4] = stackNavigation;
        cResult[5] = S;
      } else {
        class S {
          constructor() {
            stackNavigation.goBack();
          }
        }
      }
      if (cResult[6] === buttonColor2) {
        class S {
          constructor() {
            stackNavigation.goBack();
          }
        }
        if (cResult[9] === tmp20.backButton) {
          class S {
            constructor() {
              stackNavigation.goBack();
            }
          }
          const logo = tmp20.logo;
          if (cResult[12] !== logoUrl2) {
            class S {
              constructor() {
                stackNavigation.goBack();
              }
            }
            tmp38[0] = logoUrl2;
            cResult[12] = logoUrl2;
            cResult[13] = tmp38;
          } else {
            class S {
              constructor() {
                stackNavigation.goBack();
              }
            }
          }
          if (cResult[14] !== categoryName2) {
            class S {
              constructor() {
                stackNavigation.goBack();
              }
            }
            const obj3 = { category: categoryName2 };
            cResult[14] = categoryName2;
            cResult[15] = obj17.formatToPlainString(intl4.t.FNtLb3, obj3);
            const formatToPlainStringResult = obj17.formatToPlainString(intl4.t.FNtLb3, obj3);
          } else {
            class S {
              constructor() {
                stackNavigation.goBack();
              }
            }
          }
          if (cResult[16] === tmp20.logo) {
            class S {
              constructor() {
                stackNavigation.goBack();
              }
            }
          }
          const obj4 = { resizeMode: "contain", style: logo, source: tmp37, accessibilityLabel: tmp39, accessibilityRole: "header" };
          cResult[16] = tmp20.logo;
          cResult[17] = tmp37;
          cResult[18] = tmp39;
          cResult[19] = React3(FastImageDefault, obj4);
          const tmp44 = React3(FastImageDefault, obj4);
        }
        const obj5 = { style: backButton, children: tmp29 };
        cResult[9] = tmp20.backButton;
        cResult[10] = tmp29;
        cResult[11] = React3(View, obj5);
        const tmp36 = React3(View, obj5);
      }
      const obj6 = { source: AssetRegistryDefault, color: buttonColor2, accessibilityLabel: tmp26, onPress: tmp28 };
      const HeaderIconButton2 = tmp15(9270).HeaderIconButton;
      cResult[6] = buttonColor2;
      cResult[7] = tmp28;
      cResult[8] = React3(HeaderIconButton2, obj6);
      const tmp32 = React3(HeaderIconButton2, obj6);
    }
    const obj7 = { paddingTop: youBarSettingsCustomHeaderPaddingTop };
    const merged = Object.assign(tmp20.headerContainer);
    cResult[0] = youBarSettingsCustomHeaderPaddingTop;
    cResult[1] = tmp20.headerContainer;
    cResult[2] = obj7;
  } else {
    class S {
      constructor() {
        stackNavigation.goBack();
      }
    }
    ({ logoUrl, buttonColor, categoryName } = arg0);
    const obj = useNavigation;
    const _require = obj.useStackNavigation();
    const tmp5 = closure_6();
    const obj8 = { style: obj9, children: items };
    obj9 = { paddingTop: youBarSettingsCustomHeaderPaddingTop1 };
    const obj2 = useYouBarSettingsSafeArea;
    youBarSettingsCustomHeaderPaddingTop1 = obj2.useYouBarSettingsCustomHeaderPaddingTop();
    const merged1 = Object.assign(tmp5.headerContainer);
    const obj10 = { style: tmp5.backButton, children: React3(HeaderIconButton, obj14) };
    obj14 = {
      source: AssetRegistryDefault,
      color: buttonColor,
      accessibilityLabel: intl.string(intl4.t["13/7kX"]),
      onPress() {
          navigation.goBack();
        }
    };
    HeaderIconButton = HeaderShared.HeaderIconButton;
    intl = intl4.intl;
    items = [React3(View, obj10), , ];
    const obj15 = { resizeMode: "contain", style: tmp5.logo, source: obj16, accessibilityLabel: intl2.formatToPlainString(intl4.t.FNtLb3, obj18), accessibilityRole: "header" };
    obj16 = { uri: logoUrl };
    const tmp13 = FastImageDefault;
    intl2 = intl4.intl;
    obj18 = { category: categoryName };
    items[1] = React3(tmp13, obj15);
    const obj19 = { style: tmp5.dummyRightButton };
    items[2] = React3(View, obj19);
    tmp14 = hasOwnProperty(View, obj8);
  }
  return tmp14;
};
