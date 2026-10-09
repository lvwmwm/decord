// Module ID: 16396
// Function ID: 16397
// Name: MessagesEmptyState
// Dependencies: [32, 19, 17, 21, 5091, 558, 576, 1497, 1503, 1273, 8952, 8310, 15290, 6163, 16397, 1126, 5087, 5376, 2]

// Module 16396 (MessagesEmptyState)
import react2 from "react" /* 576 */;
import intl4 from "intl" /* 1126 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1273 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1497 */;
import useNavigation from "useNavigation" /* 1503 */;
import Text_Text from "Text/Text" /* 5087 */;
import components_Button_Button from "components/Button/Button" /* 5376 */;
import FastImageDefault from "FastImage" /* 6163 */;
import useIsScreenLandscape from "useIsScreenLandscape" /* 8310 */;
import useTrackImpressionDefault from "useTrackImpression" /* 8952 */;
import useYouBarTotalHeight from "useYouBarTotalHeight" /* 15290 */;
import AssetRegistryDefault from "AssetRegistry" /* 16397 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let navigation;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let c9 = 622;
let c10 = 350;
let closure_11 = createStyles.createStyles({ container: { flex: 1, justifyContent: "center" }, scrollViewContentContainer: { flexGrow: 2 }, innerContainer: { alignItems: "center", justifyContent: "center" }, imageContainer: { alignItems: "center", marginBottom: 24 }, textWrapper: { paddingHorizontal: 48 }, body: { marginBottom: 24, textAlign: "center" }, title: { textAlign: "center", fontSize: 18, marginBottom: 8 }, buttonWrapper: { paddingHorizontal: 16, paddingBottom: 16 } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function MessagesEmptyState() {
  let closure_129_0;
  let container;
  let first;
  let imageContainer;
  let innerContainer;
  let items;
  let items1;
  let items2;
  let textWrapper;
  let title;
  let tmp10;
  let tmp11;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(43);
  const tmp4 = closure_11();
  let width = useWindowDimensionsDefault().width;
  [tmp7, closure_129_0] = react.useState(0);
  _slicedToArray(react.useState(0), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(nativeEvent) {
      closure_1_0(nativeEvent.nativeEvent.layout.width);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmpResult = useNavigation;
  navigation = tmpResult.useNavigation();
  if (cResult[1] !== navigation) {
    const fn2 = function w() {
      navigation.navigate("friends", { screen: "add-friends", params: { sourcePage: "Messages Empty State", presentation: "card" } });
    };
    cResult[1] = navigation;
    cResult[2] = fn2;
    tmp10 = fn2;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW, name: discord_common_AnalyticsUtils.ImpressionNames.MESSAGES_EMPTY_NUX };
    cResult[3] = obj2;
    tmp11 = obj2;
  } else {
    tmp11 = cResult[3];
  }
  useTrackImpressionDefault(tmp11);
  if (tmp7 > 0) {
    width = tmp7;
  }
  const result = 0.9 * width;
  const tmpResult3 = useIsScreenLandscape;
  const isScreenLandscape = tmpResult3.useIsScreenLandscape();
  const tmpResult4 = useYouBarTotalHeight;
  const youBarTotalHeight = tmpResult4.useYouBarTotalHeight();
  if (cResult[4] === isScreenLandscape) {
    let tmp16;
    if (cResult[5] === youBarTotalHeight) {
      tmp16 = cResult[6];
    }
    if (cResult[7] === tmp4.scrollViewContentContainer) {
      let tmp18;
      let result1;
      if (cResult[8] === tmp16) {
        tmp18 = cResult[9];
      }
      ({ container, innerContainer, imageContainer } = tmp4);
      if (result < c9) {
        result1 = c10 * (result / tmp19);
      } else {
        result1 = c10;
      }
      const _Math = Math;
      const bound = Math.min(result, tmp19);
      if (cResult[10] === result1) {
        let tmp23;
        if (cResult[11] === bound) {
          tmp23 = cResult[12];
        }
        if (cResult[13] === tmp4.imageContainer) {
          let tmp27;
          let tmp31;
          let tmp33;
          let tmp36;
          let tmp38;
          if (cResult[14] === tmp23) {
            tmp27 = cResult[15];
          }
          const _Symbol = Symbol;
          ({ textWrapper, title } = tmp4);
          if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(1126).intl;
            const stringResult = intl.string(intl4.t["8JZof8"]);
            cResult[16] = stringResult;
            tmp31 = stringResult;
          } else {
            tmp31 = cResult[16];
          }
          if (cResult[17] !== tmp4.title) {
            const obj3 = { color: "mobile-text-heading-primary", variant: "heading-md/bold", style: title, children: tmp31 };
            const tmp35 = metroImportDefault(Text_Text.Heading, obj3);
            cResult[17] = tmp4.title;
            cResult[18] = tmp35;
            tmp33 = tmp35;
          } else {
            tmp33 = cResult[18];
          }
          const _Symbol2 = Symbol;
          const body = tmp4.body;
          if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp(1126).intl;
            const stringResult1 = intl2.string(intl4.t["qm+H7x"]);
            cResult[19] = stringResult1;
            tmp36 = stringResult1;
          } else {
            tmp36 = cResult[19];
          }
          if (cResult[20] !== tmp4.body) {
            const obj4 = { color: "text-default", variant: "text-md/medium", style: body, children: tmp36 };
            const tmp40 = metroImportDefault(Text_Text.Text, obj4);
            cResult[20] = tmp4.body;
            cResult[21] = tmp40;
            tmp38 = tmp40;
          } else {
            tmp38 = cResult[21];
          }
          if (cResult[22] === tmp4.textWrapper) {
            if (cResult[23] === tmp33) {
              let tmp41;
              if (cResult[24] === tmp38) {
                tmp41 = cResult[25];
              }
              if (cResult[26] === tmp4.innerContainer) {
                if (cResult[27] === tmp27) {
                  let tmp45;
                  let tmp49;
                  let tmp51;
                  if (cResult[28] === tmp41) {
                    tmp45 = cResult[29];
                  }
                  const _Symbol3 = Symbol;
                  const buttonWrapper = tmp4.buttonWrapper;
                  if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl3 = tmp(1126).intl;
                    const stringResult2 = intl3.string(intl4.t.zIJnA6);
                    cResult[30] = stringResult2;
                    tmp49 = stringResult2;
                  } else {
                    tmp49 = cResult[30];
                  }
                  if (cResult[31] !== tmp10) {
                    const obj5 = { text: tmp49, onPress: tmp10, size: "lg" };
                    const tmp53 = metroImportDefault(components_Button_Button.Button, obj5);
                    cResult[31] = tmp10;
                    cResult[32] = tmp53;
                    tmp51 = tmp53;
                  } else {
                    tmp51 = cResult[32];
                  }
                  if (cResult[33] === tmp4.buttonWrapper) {
                    let tmp54;
                    if (cResult[34] === tmp51) {
                      tmp54 = cResult[35];
                    }
                    if (cResult[36] === tmp4.container) {
                      if (cResult[37] === tmp45) {
                        let tmp58;
                        if (cResult[38] === tmp54) {
                          tmp58 = cResult[39];
                        }
                        if (cResult[40] === tmp58) {
                          let tmp62;
                          if (cResult[41] === tmp18) {
                            tmp62 = cResult[42];
                          }
                          return tmp62;
                        }
                        const obj6 = { alwaysBounceVertical: false, bounces: false, contentContainerStyle: tmp18, children: tmp58 };
                        const tmp65 = metroImportDefault(metroRequire, obj6);
                        cResult[40] = tmp58;
                        cResult[41] = tmp18;
                        cResult[42] = tmp65;
                        tmp62 = tmp65;
                      }
                    }
                    const obj7 = { style: container, onLayout: first, children: items };
                    items = [tmp45, tmp54];
                    const tmp61 = metroImportAll(hasOwnProperty, obj7);
                    cResult[36] = tmp4.container;
                    cResult[37] = tmp45;
                    cResult[38] = tmp54;
                    cResult[39] = tmp61;
                    tmp58 = tmp61;
                  }
                  const obj8 = { style: buttonWrapper, children: tmp51 };
                  const tmp57 = metroImportDefault(hasOwnProperty, obj8);
                  cResult[33] = tmp4.buttonWrapper;
                  cResult[34] = tmp51;
                  cResult[35] = tmp57;
                  tmp54 = tmp57;
                }
              }
              const obj9 = { style: innerContainer, children: items1 };
              items1 = [tmp27, tmp41];
              const tmp48 = metroImportAll(hasOwnProperty, obj9);
              cResult[26] = tmp4.innerContainer;
              cResult[27] = tmp27;
              cResult[28] = tmp41;
              cResult[29] = tmp48;
              tmp45 = tmp48;
            }
          }
          const obj10 = { style: textWrapper, children: items2 };
          items2 = [tmp33, tmp38];
          const tmp44 = metroImportAll(hasOwnProperty, obj10);
          cResult[22] = tmp4.textWrapper;
          cResult[23] = tmp33;
          cResult[24] = tmp38;
          cResult[25] = tmp44;
          tmp41 = tmp44;
        }
        const obj11 = { style: imageContainer, children: tmp23 };
        const tmp30 = metroImportDefault(hasOwnProperty, obj11);
        cResult[13] = tmp4.imageContainer;
        cResult[14] = tmp23;
        cResult[15] = tmp30;
        tmp27 = tmp30;
      }
      const obj12 = { resizeMode: "contain", source: AssetRegistryDefault, style: size };
      size = { height: result1, width: bound };
      const tmp5Result = FastImageDefault;
      const tmp26 = metroImportDefault(tmp5Result, obj12);
      cResult[10] = result1;
      cResult[11] = bound;
      cResult[12] = tmp26;
      tmp23 = tmp26;
    }
    const items3 = [tmp4.scrollViewContentContainer, tmp16];
    cResult[7] = tmp4.scrollViewContentContainer;
    cResult[8] = tmp16;
    cResult[9] = items3;
    tmp18 = items3;
  }
  let tmp17;
  if (isScreenLandscape) {
    tmp17 = { paddingBottom: youBarTotalHeight };
    const obj13 = { paddingBottom: youBarTotalHeight };
  }
  cResult[4] = isScreenLandscape;
  cResult[5] = youBarTotalHeight;
  cResult[6] = tmp17;
  tmp16 = tmp17;
}) : (function MessagesEmptyState() {
  let Button;
  let closure_129_0;
  let intl;
  let intl2;
  let intl3;
  let items2;
  let items3;
  let items4;
  let obj13;
  let obj5;
  let obj8;
  let result1;
  let tmp2Result;
  let tmp5;
  const tmp = closure_11();
  let width = useWindowDimensionsDefault().width;
  [tmp5, closure_129_0] = react.useState(0);
  _slicedToArray(react.useState(0), 2);
  const callback = react.useCallback((nativeEvent) => {
    closure_1_0(nativeEvent.nativeEvent.layout.width);
  }, []);
  const obj = useNavigation;
  navigation = obj.useNavigation();
  const items = [navigation];
  const callback1 = react.useCallback(() => {
    navigation.navigate("friends", { screen: "add-friends", params: { sourcePage: "Messages Empty State", presentation: "card" } });
  }, items);
  const obj2 = { type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW, name: discord_common_AnalyticsUtils.ImpressionNames.MESSAGES_EMPTY_NUX };
  const tmp10 = useTrackImpressionDefault;
  tmp10(obj2);
  if (tmp5 > 0) {
    width = tmp5;
  }
  const result = 0.9 * width;
  const tmp7Result = useIsScreenLandscape;
  const isScreenLandscape = tmp7Result.useIsScreenLandscape();
  useYouBarTotalHeight;
  const items1 = [tmp.scrollViewContentContainer, ];
  let tmp18;
  const tmp17 = metroRequire;
  if (isScreenLandscape) {
    tmp18 = { paddingBottom: tmp15 };
    const obj3 = { paddingBottom: tmp15 };
  }
  items1[1] = tmp18;
  const obj4 = { alwaysBounceVertical: false, bounces: false, contentContainerStyle: items1, children: metroImportAll(hasOwnProperty, obj5) };
  obj5 = { style: tmp.container, onLayout: callback, children: items4 };
  const obj6 = { style: tmp.innerContainer, children: items2 };
  const obj7 = { style: tmp.imageContainer, children: metroImportDefault(tmp2Result, obj8) };
  obj8 = { resizeMode: "contain", source: AssetRegistryDefault, style: size };
  tmp2Result = FastImageDefault;
  if (result < c9) {
    result1 = c10 * (result / tmp22);
  } else {
    result1 = c10;
  }
  size = { height: result1, width: Math.min(result, tmp22) };
  items2 = [metroImportDefault(hasOwnProperty, obj7), ];
  const obj9 = { style: tmp.textWrapper, children: items3 };
  const obj10 = { color: "mobile-text-heading-primary", variant: "heading-md/bold", style: tmp.title, children: intl.string(intl4.t["8JZof8"]) };
  const Heading = tmp7(5087).Heading;
  intl = tmp7(1126).intl;
  items3 = [metroImportDefault(Heading, obj10), ];
  const obj11 = { color: "text-default", variant: "text-md/medium", style: tmp.body, children: intl2.string(intl4.t["qm+H7x"]) };
  const Text = tmp7(5087).Text;
  intl2 = tmp7(1126).intl;
  items3[1] = metroImportDefault(Text, obj11);
  items2[1] = metroImportAll(hasOwnProperty, obj9);
  items4 = [metroImportAll(hasOwnProperty, obj6), ];
  const obj12 = { style: tmp.buttonWrapper, children: metroImportDefault(Button, obj13) };
  obj13 = { text: intl3.string(intl4.t.zIJnA6), onPress: callback1, size: "lg" };
  Button = tmp7(5376).Button;
  intl3 = tmp7(1126).intl;
  items4[1] = metroImportDefault(hasOwnProperty, obj12);
  return metroImportDefault(tmp17, obj4);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/MessagesEmptyState.tsx");

export default tmp4;
