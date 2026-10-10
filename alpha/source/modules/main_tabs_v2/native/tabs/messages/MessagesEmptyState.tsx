// Module ID: 16463
// Function ID: 16464
// Name: MessagesEmptyState
// Dependencies: [19, 17, 21, 5092, 558, 576, 1503, 1273, 8971, 8326, 15352, 16464, 1126, 5088, 5379, 2]

// Module 16463 (MessagesEmptyState)
import react2 from "react" /* 576 */;
import intl4 from "intl" /* 1126 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1273 */;
import useNavigation from "useNavigation" /* 1503 */;
import Text_Text from "Text/Text" /* 5088 */;
import components_Button_Button from "components/Button/Button" /* 5379 */;
import useIsScreenLandscape from "useIsScreenLandscape" /* 8326 */;
import useTrackImpressionDefault from "useTrackImpression" /* 8971 */;
import useYouBarTotalHeight from "useYouBarTotalHeight" /* 15352 */;
import ActivitiesTogetherSpotIllustration from "ActivitiesTogetherSpotIllustration" /* 16464 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let navigation;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ container: { flex: 1, justifyContent: "center" }, scrollViewContentContainer: { flexGrow: 2 }, innerContainer: { alignItems: "center", justifyContent: "center" }, imageContainer: { alignItems: "center", marginBottom: 24 }, textWrapper: { paddingHorizontal: 48 }, body: { marginBottom: 24, textAlign: "center" }, title: { textAlign: "center", fontSize: 18, marginBottom: 8 }, buttonWrapper: { paddingHorizontal: 16, paddingBottom: 16 } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function MessagesEmptyState() {
  let container;
  let innerContainer;
  let items;
  let items1;
  let items2;
  let textWrapper;
  let title;
  let tmp6;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(39);
  const tmp4 = closure_8();
  const obj2 = useNavigation;
  navigation = obj2.useNavigation();
  if (cResult[0] !== navigation) {
    const fn = function t() {
      navigation.navigate("friends", { screen: "add-friends", params: { sourcePage: "Messages Empty State", presentation: "card" } });
    };
    cResult[0] = navigation;
    cResult[1] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW, name: discord_common_AnalyticsUtils.ImpressionNames.MESSAGES_EMPTY_NUX };
    cResult[2] = obj3;
    tmp7 = obj3;
  } else {
    tmp7 = cResult[2];
  }
  useTrackImpressionDefault(tmp7);
  const tmpResult = useIsScreenLandscape;
  const isScreenLandscape = tmpResult.useIsScreenLandscape();
  const tmpResult2 = useYouBarTotalHeight;
  const youBarTotalHeight = tmpResult2.useYouBarTotalHeight();
  if (cResult[3] === isScreenLandscape) {
    let tmp11;
    if (cResult[4] === youBarTotalHeight) {
      tmp11 = cResult[5];
    }
    if (cResult[6] === tmp4.scrollViewContentContainer) {
      let tmp13;
      let tmp14;
      let tmp17;
      let tmp21;
      let tmp23;
      let tmp26;
      let tmp28;
      if (cResult[7] === tmp11) {
        tmp13 = cResult[8];
      }
      const _Symbol = Symbol;
      ({ container, innerContainer } = tmp4);
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp16 = metroRequire(ActivitiesTogetherSpotIllustration.ActivitiesTogetherSpotIllustration, { width: 230, accessible: false });
        cResult[9] = tmp16;
        tmp14 = tmp16;
      } else {
        tmp14 = cResult[9];
      }
      if (cResult[10] !== tmp4.imageContainer) {
        const obj4 = { style: tmp4.imageContainer, children: tmp14 };
        const tmp20 = metroRequire(React3, obj4);
        cResult[10] = tmp4.imageContainer;
        cResult[11] = tmp20;
        tmp17 = tmp20;
      } else {
        tmp17 = cResult[11];
      }
      const _Symbol2 = Symbol;
      ({ textWrapper, title } = tmp4);
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(intl4.t["8JZof8"]);
        cResult[12] = stringResult;
        tmp21 = stringResult;
      } else {
        tmp21 = cResult[12];
      }
      if (cResult[13] !== tmp4.title) {
        const obj5 = { color: "mobile-text-heading-primary", variant: "heading-md/bold", style: title, children: tmp21 };
        const tmp25 = metroRequire(Text_Text.Heading, obj5);
        cResult[13] = tmp4.title;
        cResult[14] = tmp25;
        tmp23 = tmp25;
      } else {
        tmp23 = cResult[14];
      }
      const _Symbol3 = Symbol;
      const body = tmp4.body;
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(intl4.t["qm+H7x"]);
        cResult[15] = stringResult1;
        tmp26 = stringResult1;
      } else {
        tmp26 = cResult[15];
      }
      if (cResult[16] !== tmp4.body) {
        const obj6 = { color: "text-default", variant: "text-md/medium", style: body, children: tmp26 };
        const tmp30 = metroRequire(Text_Text.Text, obj6);
        cResult[16] = tmp4.body;
        cResult[17] = tmp30;
        tmp28 = tmp30;
      } else {
        tmp28 = cResult[17];
      }
      if (cResult[18] === tmp4.textWrapper) {
        if (cResult[19] === tmp23) {
          let tmp31;
          if (cResult[20] === tmp28) {
            tmp31 = cResult[21];
          }
          if (cResult[22] === tmp4.innerContainer) {
            if (cResult[23] === tmp31) {
              let tmp35;
              let tmp39;
              let tmp41;
              if (cResult[24] === tmp17) {
                tmp35 = cResult[25];
              }
              const _Symbol4 = Symbol;
              const buttonWrapper = tmp4.buttonWrapper;
              if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
                const intl3 = tmp(1126).intl;
                const stringResult2 = intl3.string(intl4.t.zIJnA6);
                cResult[26] = stringResult2;
                tmp39 = stringResult2;
              } else {
                tmp39 = cResult[26];
              }
              if (cResult[27] !== tmp6) {
                const obj7 = { text: tmp39, onPress: tmp6, size: "lg" };
                const tmp43 = metroRequire(components_Button_Button.Button, obj7);
                cResult[27] = tmp6;
                cResult[28] = tmp43;
                tmp41 = tmp43;
              } else {
                tmp41 = cResult[28];
              }
              if (cResult[29] === tmp4.buttonWrapper) {
                let tmp44;
                if (cResult[30] === tmp41) {
                  tmp44 = cResult[31];
                }
                if (cResult[32] === tmp4.container) {
                  if (cResult[33] === tmp35) {
                    let tmp48;
                    if (cResult[34] === tmp44) {
                      tmp48 = cResult[35];
                    }
                    if (cResult[36] === tmp48) {
                      let tmp52;
                      if (cResult[37] === tmp13) {
                        tmp52 = cResult[38];
                      }
                      return tmp52;
                    }
                    const obj8 = { alwaysBounceVertical: false, bounces: false, contentContainerStyle: tmp13, children: tmp48 };
                    const tmp55 = metroRequire(hasOwnProperty, obj8);
                    cResult[36] = tmp48;
                    cResult[37] = tmp13;
                    cResult[38] = tmp55;
                    tmp52 = tmp55;
                  }
                }
                const obj9 = { style: container, children: items };
                items = [tmp35, tmp44];
                const tmp51 = metroImportDefault(React3, obj9);
                cResult[32] = tmp4.container;
                cResult[33] = tmp35;
                cResult[34] = tmp44;
                cResult[35] = tmp51;
                tmp48 = tmp51;
              }
              const obj10 = { style: buttonWrapper, children: tmp41 };
              const tmp47 = metroRequire(React3, obj10);
              cResult[29] = tmp4.buttonWrapper;
              cResult[30] = tmp41;
              cResult[31] = tmp47;
              tmp44 = tmp47;
            }
          }
          const obj11 = { style: innerContainer, children: items1 };
          items1 = [tmp17, tmp31];
          const tmp38 = metroImportDefault(React3, obj11);
          cResult[22] = tmp4.innerContainer;
          cResult[23] = tmp31;
          cResult[24] = tmp17;
          cResult[25] = tmp38;
          tmp35 = tmp38;
        }
      }
      const obj12 = { style: textWrapper, children: items2 };
      items2 = [tmp23, tmp28];
      const tmp34 = metroImportDefault(React3, obj12);
      cResult[18] = tmp4.textWrapper;
      cResult[19] = tmp23;
      cResult[20] = tmp28;
      cResult[21] = tmp34;
      tmp31 = tmp34;
    }
    const items3 = [tmp4.scrollViewContentContainer, tmp11];
    cResult[6] = tmp4.scrollViewContentContainer;
    cResult[7] = tmp11;
    cResult[8] = items3;
    tmp13 = items3;
  }
  let tmp12;
  if (isScreenLandscape) {
    tmp12 = { paddingBottom: youBarTotalHeight };
    const obj13 = { paddingBottom: youBarTotalHeight };
  }
  cResult[3] = isScreenLandscape;
  cResult[4] = youBarTotalHeight;
  cResult[5] = tmp12;
  tmp11 = tmp12;
}) : (function MessagesEmptyState() {
  let Button;
  let intl;
  let intl2;
  let intl3;
  let items2;
  let items3;
  let items4;
  let obj13;
  let obj6;
  const tmp = closure_8();
  const obj = useNavigation;
  navigation = obj.useNavigation();
  const items = [navigation];
  const callback = react.useCallback(() => {
    navigation.navigate("friends", { screen: "add-friends", params: { sourcePage: "Messages Empty State", presentation: "card" } });
  }, items);
  const obj2 = { type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW, name: discord_common_AnalyticsUtils.ImpressionNames.MESSAGES_EMPTY_NUX };
  const tmp6 = useTrackImpressionDefault;
  tmp6(obj2);
  const obj3 = useIsScreenLandscape;
  const isScreenLandscape = obj3.useIsScreenLandscape();
  useYouBarTotalHeight;
  const items1 = [tmp.scrollViewContentContainer, ];
  let tmp13;
  const tmp12 = hasOwnProperty;
  if (isScreenLandscape) {
    tmp13 = { paddingBottom: tmp10 };
    const obj4 = { paddingBottom: tmp10 };
  }
  items1[1] = tmp13;
  const obj5 = { alwaysBounceVertical: false, bounces: false, contentContainerStyle: items1, children: metroImportDefault(React3, obj6) };
  const obj7 = { style: tmp.innerContainer, children: items2 };
  items2 = [, ];
  obj6 = { style: tmp.container, children: items4 };
  const obj8 = { style: tmp.imageContainer, children: metroRequire(ActivitiesTogetherSpotIllustration.ActivitiesTogetherSpotIllustration, { width: 230, accessible: false }) };
  items2[0] = metroRequire(React3, obj8);
  const obj9 = { style: tmp.textWrapper, children: items3 };
  const obj10 = { color: "mobile-text-heading-primary", variant: "heading-md/bold", style: tmp.title, children: intl.string(intl4.t["8JZof8"]) };
  const Heading = tmp2(5088).Heading;
  intl = tmp2(1126).intl;
  items3 = [metroRequire(Heading, obj10), ];
  const obj11 = { color: "text-default", variant: "text-md/medium", style: tmp.body, children: intl2.string(intl4.t["qm+H7x"]) };
  const Text = tmp2(5088).Text;
  intl2 = tmp2(1126).intl;
  items3[1] = metroRequire(Text, obj11);
  items2[1] = metroImportDefault(React3, obj9);
  items4 = [metroImportDefault(React3, obj7), ];
  const obj12 = { style: tmp.buttonWrapper, children: metroRequire(Button, obj13) };
  obj13 = { text: intl3.string(intl4.t.zIJnA6), onPress: callback, size: "lg" };
  Button = tmp2(5379).Button;
  intl3 = tmp2(1126).intl;
  items4[1] = metroRequire(React3, obj12);
  return metroRequire(tmp12, obj5);
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/MessagesEmptyState.tsx");

export default tmp4;
