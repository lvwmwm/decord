// Module ID: 15942
// Function ID: 15943
// Name: MfaOptionScreen
// Dependencies: [19, 17, 21, 558, 568, 7185, 15943, 4754, 5186, 15944, 7371, 7216, 2]

// Module 15942 (MfaOptionScreen)
import c from "c" /* 568 */;
import Text_Text from "Text/Text" /* 4754 */;
import Stack_Stack from "Stack/Stack" /* 5186 */;
import useWideAuthViewDefault from "useWideAuthView" /* 7185 */;
import BackgroundImageDefault from "BackgroundImage" /* 7216 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7371 */;
import MfaScreenUtilsDefault from "MfaScreenUtils" /* 15943 */;
import noop from "module_19" /* 19 */;

require = fn;
const ScrollView = fn(17).ScrollView;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: metroRequire } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/mfa/native/screens/MfaOptionScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((mfaMethod) => {
  const cResult = c.c(34);
  ({ headerText, headerImage, subtitle, input, submit, screenProps, error, content } = mfaMethod);
  const tmp5 = useWideAuthViewDefault();
  const screenStyles = MfaScreenUtilsDefault.useScreenStyles(tmp5);
  const first = screenProps.mfaChallenge.methods[0];
  if (first != null) {
    const type = first.type;
  }
  if (cResult[0] === headerText) {
    if (cResult[1] === screenStyles.mfaContainerHeaderText) {
      let tmp11 = cResult[2];
    }
    if (cResult[3] !== subtitle) {
      let tmp14 = null != subtitle;
      if (tmp14) {
        const obj3 = { variant: "heading-sm/normal", color: "text-default", children: subtitle };
        tmp14 = React4(tmp(4754).Text, obj3);
      }
      cResult[3] = subtitle;
      cResult[4] = tmp14;
      let tmp13 = tmp14;
    } else {
      tmp13 = cResult[4];
    }
    if (cResult[5] !== error) {
      let tmp17 = null != error;
      if (tmp17) {
        const obj4 = { variant: "text-sm/normal", color: "text-feedback-critical", children: error };
        tmp17 = React4(tmp(4754).Text, obj4);
      }
      cResult[5] = error;
      cResult[6] = tmp17;
      let tmp16 = tmp17;
    } else {
      tmp16 = cResult[6];
    }
    if (cResult[7] === screenStyles.mfaContainerHeader) {
      if (cResult[8] === tmp10) {
        if (cResult[9] === tmp11) {
          if (cResult[10] === tmp13) {
            if (cResult[11] === tmp16) {
              let tmp19 = cResult[12];
            }
            if (cResult[13] === input) {
              if (cResult[14] === tmp19) {
                let tmp22 = cResult[15];
              }
              if (cResult[16] === screenProps) {
                if (cResult[17] === tmp25) {
                  let tmp26 = cResult[18];
                }
                if (cResult[19] === screenStyles.submit) {
                  if (cResult[20] === submit) {
                    if (cResult[21] === tmp26) {
                      let tmp29 = cResult[22];
                    }
                    if (cResult[23] === content) {
                      if (cResult[24] === screenStyles.contentContainer) {
                        if (cResult[25] === tmp8) {
                          if (cResult[26] === tmp29) {
                            if (cResult[27] === tmp9) {
                              if (cResult[28] === tmp22) {
                                let tmp32 = cResult[29];
                              }
                              const _Symbol = Symbol;
                              if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
                                const tmp38 = React4(tmp4(7216), { backgroundImageCover: false });
                                cResult[30] = tmp38;
                                let tmp36 = tmp38;
                              } else {
                                tmp36 = cResult[30];
                              }
                              if (cResult[31] === tmp5) {
                                if (cResult[32] === tmp32) {
                                  let tmp39 = cResult[33];
                                }
                                return tmp39;
                              }
                              const items = [tmp36, ];
                              let tmp42 = tmp32;
                              if (tmp5) {
                                const obj5 = { keyboardShouldPersistTaps: "handled", children: tmp32 };
                                tmp42 = React4(ScrollView, obj5);
                              }
                              const obj6 = { children: null };
                              items[1] = tmp42;
                              obj6.children = items;
                              const tmp40Result = hasOwnProperty(timestampProducer, obj6);
                              cResult[31] = tmp5;
                              cResult[32] = tmp32;
                              cResult[33] = tmp40Result;
                              tmp39 = tmp40Result;
                            }
                          }
                        }
                      }
                    }
                    const rect = { bottom: tmp8, top: tmp9, style: screenStyles.contentContainer, children: null };
                    const items1 = [tmp22, content, tmp29];
                    rect.children = items1;
                    const tmp34 = hasOwnProperty(tmp(7371).SafeAreaPaddingView, rect);
                    cResult[23] = content;
                    cResult[24] = screenStyles.contentContainer;
                    cResult[25] = tmp8;
                    cResult[26] = tmp29;
                    cResult[27] = tmp9;
                    cResult[28] = tmp22;
                    cResult[29] = tmp34;
                    tmp32 = tmp34;
                  }
                }
                const obj7 = { style: screenStyles.submit, children: null };
                const items2 = [submit, tmp26];
                obj7.children = items2;
                const tmp31 = hasOwnProperty(tmp(5186).Stack, obj7);
                cResult[19] = screenStyles.submit;
                cResult[20] = submit;
                cResult[21] = tmp26;
                cResult[22] = tmp31;
                tmp29 = tmp31;
              }
              let tmp27 = tmp25;
              if (type === mfaMethod.mfaMethod) {
                const obj8 = { props: screenProps };
                tmp27 = React4(tmp4(15944), obj8);
              }
              cResult[16] = screenProps;
              cResult[17] = type === mfaMethod.mfaMethod;
              cResult[18] = tmp27;
              tmp26 = tmp27;
            }
            const obj9 = { children: null };
            const items3 = [tmp19, input];
            obj9.children = items3;
            const tmp24 = hasOwnProperty(tmp(5186).Stack, obj9);
            cResult[13] = input;
            cResult[14] = tmp19;
            cResult[15] = tmp24;
            tmp22 = tmp24;
          }
        }
      }
    }
    const obj10 = { style: screenStyles.mfaContainerHeader, spacing: 4, children: null };
    const items4 = [tmp10, tmp11, tmp13, tmp16];
    obj10.children = items4;
    const tmp21 = hasOwnProperty(tmp(5186).Stack, obj10);
    cResult[7] = screenStyles.mfaContainerHeader;
    cResult[8] = tmp10;
    cResult[9] = tmp11;
    cResult[10] = tmp13;
    cResult[11] = tmp16;
    cResult[12] = tmp21;
    tmp19 = tmp21;
  }
  const tmp12 = React4(Text_Text.Heading, { variant: "heading-xl/extrabold", style: screenStyles.mfaContainerHeaderText, children: headerText });
  cResult[0] = headerText;
  cResult[1] = screenStyles.mfaContainerHeaderText;
  cResult[2] = tmp12;
  tmp11 = tmp12;
}) : ((arg0) => {
  ({ headerImage, subtitle, screenProps, error } = arg0);
  ({ headerText, input, submit, mfaMethod, content } = arg0);
  const tmp3 = useWideAuthViewDefault();
  const screenStyles = MfaScreenUtilsDefault.useScreenStyles(tmp3);
  const first = screenProps.mfaChallenge.methods[0];
  let type;
  if (first != null) {
    type = first.type;
  }
  const rect = { bottom: !tmp3, top: !tmp3, style: screenStyles.contentContainer, children: null };
  const obj2 = { style: screenStyles.mfaContainerHeader, spacing: 4, children: null };
  let tmp9 = null != headerImage;
  if (tmp9) {
    tmp9 = headerImage;
  }
  const items = [tmp9, React4(Text_Text.Heading, { variant: "heading-xl/extrabold", style: screenStyles.mfaContainerHeaderText, children: headerText }), , ];
  let tmp10Result = null != subtitle;
  if (tmp10Result) {
    const obj4 = { variant: "heading-sm/normal", color: "text-default", children: subtitle };
    tmp10Result = tmp10(tmp8(4754).Text, obj4);
  }
  items[2] = tmp10Result;
  let tmp10Result4 = null != error;
  if (tmp10Result4) {
    const obj5 = { variant: "text-sm/normal", color: "text-feedback-critical", children: error };
    tmp10Result4 = tmp10(tmp8(4754).Text, obj5);
  }
  let tmp10Result5 = type === mfaMethod;
  const obj6 = { children: null };
  items[3] = tmp10Result4;
  obj2.children = items;
  const items1 = [hasOwnProperty(Stack_Stack.Stack, obj2), input];
  obj6.children = items1;
  const items2 = [hasOwnProperty(Stack_Stack.Stack, obj6), content, ];
  const obj7 = { style: screenStyles.submit, children: null };
  const items3 = [submit, ];
  if (tmp10Result5) {
    const obj8 = { props: screenProps };
    tmp10Result5 = tmp10(tmp(15944), obj8);
  }
  items3[1] = tmp10Result5;
  obj7.children = items3;
  items2[2] = hasOwnProperty(Stack_Stack.Stack, obj7);
  rect.children = items2;
  const tmp7Result = hasOwnProperty(common_SafeAreaView.SafeAreaPaddingView, rect);
  const children = [React4(BackgroundImageDefault, { backgroundImageCover: false }), ];
  let tmp10Result6 = tmp7Result;
  if (tmp3) {
    const obj9 = { keyboardShouldPersistTaps: "handled", children: tmp7Result };
    tmp10Result6 = tmp10(ScrollView, obj9);
  }
  children[1] = tmp10Result6;
  return hasOwnProperty(timestampProducer, { children });
});
