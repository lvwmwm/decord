// Module ID: 12862
// Function ID: 12863
// Name: XboxLinkEducation
// Dependencies: [19, 17, 1085, 21, 5091, 558, 576, 9187, 2127, 12863, 6163, 1126, 5087, 5376, 6810, 2]

// Module 12862 (XboxLinkEducation)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl4 from "intl" /* 1126 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2127 */;
import Text_Text from "Text/Text" /* 5087 */;
import components_Button_Button from "components/Button/Button" /* 5376 */;
import FastImageDefault from "FastImage" /* 6163 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6810 */;
import TwoWayLinkStyles from "TwoWayLinkStyles" /* 9187 */;
import _modDef12863 from "module_12863" /* 12863 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
const View = react_native.View;
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ image: { width: 124, height: 160, marginBottom: 24 } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function XboxLinkEducation(onClose) {
  let container;
  let content;
  let footerButton;
  let footerContainer;
  let items;
  let items1;
  let tmp17;
  let tmp19;
  let tmp22;
  let tmp24;
  const obj = react2;
  const cResult = obj.c(48);
  onClose = onClose.onClose;
  const tmp4 = closure_8();
  const obj2 = TwoWayLinkStyles;
  const twoWayLinkStyles = obj2.useTwoWayLinkStyles();
  if (cResult[0] === twoWayLinkStyles.body) {
    if (cResult[1] === twoWayLinkStyles.container) {
      if (cResult[2] === twoWayLinkStyles.content) {
        if (cResult[3] === twoWayLinkStyles.title) {
          let tmp6;
          let tmp7;
          let tmp8;
          let str;
          let str2;
          let tmp9;
          let tmp10;
          let tmp11;
          let tmp12;
          let tmp13;
          let tmp14;
          if (cResult[4] === tmp4.image) {
            tmp6 = cResult[5];
            tmp7 = cResult[6];
            tmp8 = cResult[7];
            str = cResult[8];
            str2 = cResult[9];
            tmp9 = cResult[10];
            tmp10 = cResult[11];
            tmp11 = cResult[12];
            tmp12 = cResult[13];
            tmp13 = cResult[14];
            tmp14 = cResult[15];
          }
          if (cResult[22] === tmp6) {
            if (cResult[23] === str) {
              if (cResult[24] === str2) {
                if (cResult[25] === tmp9) {
                  let tmp28;
                  if (cResult[26] === tmp10) {
                    tmp28 = cResult[27];
                  }
                  if (cResult[28] === tmp7) {
                    if (cResult[29] === tmp11) {
                      if (cResult[30] === tmp12) {
                        if (cResult[31] === tmp13) {
                          let tmp31;
                          let tmp35;
                          let tmp37;
                          if (cResult[32] === tmp28) {
                            tmp31 = cResult[33];
                          }
                          const _Symbol = Symbol;
                          ({ footerContainer, footerButton } = twoWayLinkStyles);
                          if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
                            const intl3 = tmp(1126).intl;
                            const stringResult = intl3.string(intl4.t.i4jeWR);
                            cResult[34] = stringResult;
                            tmp35 = stringResult;
                          } else {
                            tmp35 = cResult[34];
                          }
                          if (cResult[35] !== onClose) {
                            const obj4 = { size: "lg", variant: "primary", text: tmp35, onPress: onClose };
                            const tmp39 = metroRequire(components_Button_Button.Button, obj4);
                            cResult[35] = onClose;
                            cResult[36] = tmp39;
                            tmp37 = tmp39;
                          } else {
                            tmp37 = cResult[36];
                          }
                          if (cResult[37] === twoWayLinkStyles.footerButton) {
                            let tmp40;
                            if (cResult[38] === tmp37) {
                              tmp40 = cResult[39];
                            }
                            if (cResult[40] === twoWayLinkStyles.footerContainer) {
                              let tmp44;
                              if (cResult[41] === tmp40) {
                                tmp44 = cResult[42];
                              }
                              if (cResult[43] === tmp8) {
                                if (cResult[44] === tmp31) {
                                  if (cResult[45] === tmp44) {
                                    let tmp47;
                                    if (cResult[46] === tmp14) {
                                      tmp47 = cResult[47];
                                    }
                                    return tmp47;
                                  }
                                }
                              }
                              const obj5 = { style: tmp14, children: items };
                              items = [tmp31, tmp44];
                              const tmp49 = metroImportDefault(tmp8, obj5);
                              cResult[43] = tmp8;
                              cResult[44] = tmp31;
                              cResult[45] = tmp44;
                              cResult[46] = tmp14;
                              cResult[47] = tmp49;
                              tmp47 = tmp49;
                            }
                            const obj6 = { bottom: true, style: footerContainer, children: tmp40 };
                            const tmp46 = metroRequire(common_SafeAreaView.SafeAreaPaddingView, obj6);
                            cResult[40] = twoWayLinkStyles.footerContainer;
                            cResult[41] = tmp40;
                            cResult[42] = tmp46;
                            tmp44 = tmp46;
                          }
                          const obj7 = { style: footerButton, children: tmp37 };
                          const tmp43 = metroRequire(View, obj7);
                          cResult[37] = twoWayLinkStyles.footerButton;
                          cResult[38] = tmp37;
                          cResult[39] = tmp43;
                          tmp40 = tmp43;
                        }
                      }
                    }
                  }
                  const obj8 = { style: tmp11, children: items1 };
                  items1 = [tmp12, tmp13, tmp28];
                  const tmp33 = metroImportDefault(tmp7, obj8);
                  cResult[28] = tmp7;
                  cResult[29] = tmp11;
                  cResult[30] = tmp12;
                  cResult[31] = tmp13;
                  cResult[32] = tmp28;
                  cResult[33] = tmp33;
                  tmp31 = tmp33;
                }
              }
            }
          }
          const obj9 = { variant: str, color: str2, style: tmp9, children: tmp10 };
          const tmp30 = metroRequire(tmp6, obj9);
          cResult[22] = tmp6;
          cResult[23] = str;
          cResult[24] = str2;
          cResult[25] = tmp9;
          cResult[26] = tmp10;
          cResult[27] = tmp30;
          tmp28 = tmp30;
        }
      }
    }
  }
  const obj3 = HelpdeskUtilsDefault;
  const articleURL = obj3.getArticleURL(HelpdeskArticles.XBOX_CONNECTION);
  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
    const obj10 = { uri: _modDef12863 };
    cResult[16] = obj10;
    tmp17 = obj10;
  } else {
    tmp17 = cResult[16];
  }
  ({ container, content } = twoWayLinkStyles);
  if (cResult[17] !== tmp4.image) {
    const obj11 = { source: tmp17, style: tmp4.image };
    const tmp21 = metroRequire(FastImageDefault, obj11);
    cResult[17] = tmp4.image;
    cResult[18] = tmp21;
    tmp19 = tmp21;
  } else {
    tmp19 = cResult[18];
  }
  const title = twoWayLinkStyles.title;
  if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult1 = intl.string(intl4.t.jHytat);
    cResult[19] = stringResult1;
    tmp22 = stringResult1;
  } else {
    tmp22 = cResult[19];
  }
  if (cResult[20] !== twoWayLinkStyles.title) {
    const obj12 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: title, children: tmp22 };
    const tmp26 = metroRequire(Text_Text.Text, obj12);
    cResult[20] = twoWayLinkStyles.title;
    cResult[21] = tmp26;
    tmp24 = tmp26;
  } else {
    tmp24 = cResult[21];
  }
  const Text = tmp(5087).Text;
  const body = twoWayLinkStyles.body;
  const intl2 = tmp(1126).intl;
  const formatResult = intl2.format(intl4.t.yhozpz, { helpdeskArticleUrl: articleURL });
  cResult[0] = twoWayLinkStyles.body;
  cResult[1] = twoWayLinkStyles.container;
  cResult[2] = twoWayLinkStyles.content;
  cResult[3] = twoWayLinkStyles.title;
  cResult[4] = tmp4.image;
  cResult[5] = Text;
  cResult[6] = View;
  cResult[7] = View;
  cResult[8] = "text-md/medium";
  cResult[9] = "text-default";
  cResult[10] = body;
  cResult[11] = formatResult;
  cResult[12] = content;
  cResult[13] = tmp19;
  cResult[14] = tmp24;
  cResult[15] = container;
  tmp13 = tmp24;
  tmp14 = container;
  tmp12 = tmp19;
  tmp11 = content;
  tmp10 = formatResult;
  tmp9 = body;
  str2 = "text-default";
  str = "text-md/medium";
  tmp8 = tmp18;
  tmp7 = tmp18;
  tmp6 = Text;
}) : (function XboxLinkEducation(onClose) {
  let Button;
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  let obj10;
  let obj9;
  onClose = onClose.onClose;
  const tmp = closure_8();
  let obj = TwoWayLinkStyles;
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  const obj2 = HelpdeskUtilsDefault;
  const articleURL = obj2.getArticleURL(HelpdeskArticles.XBOX_CONNECTION);
  const obj3 = { style: twoWayLinkStyles.container, children: items1 };
  const obj4 = { style: twoWayLinkStyles.content, children: items };
  const memo = react.useMemo(() => {
    const obj = { uri: _modDef12863 };
    return obj;
  }, []);
  items = [, , ];
  const obj5 = { source: memo, style: tmp.image };
  items[0] = metroRequire(FastImageDefault, obj5);
  const obj6 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, children: intl.string(intl4.t.jHytat) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items[1] = metroRequire(Text, obj6);
  const obj7 = { variant: "text-md/medium", color: "text-default", style: twoWayLinkStyles.body, children: intl2.format(intl4.t.yhozpz, { helpdeskArticleUrl: articleURL }) };
  const Text2 = Text_Text.Text;
  intl2 = intl4.intl;
  items[2] = metroRequire(Text2, obj7);
  items1 = [metroImportDefault(View, obj4), ];
  const obj8 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: metroRequire(View, obj9) };
  obj9 = { style: twoWayLinkStyles.footerButton, children: metroRequire(Button, obj10) };
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  obj10 = { size: "lg", variant: "primary", text: intl3.string(intl4.t.i4jeWR), onPress: onClose };
  Button = components_Button_Button.Button;
  intl3 = intl4.intl;
  items1[1] = metroRequire(SafeAreaPaddingView, obj8);
  return metroImportDefault(View, obj3);
});
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkEducation.tsx");

export default tmp3;
