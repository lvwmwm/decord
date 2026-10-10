// Module ID: 11644
// Function ID: 11645
// Name: CustomTypingIndicatorAnnounceActionSheet
// Dependencies: [19, 17, 1085, 2062, 21, 5092, 587, 558, 576, 6851, 6878, 7093, 6843, 11645, 11646, 11647, 1398, 11648, 11649, 11650, 11651, 11652, 1126, 1200, 3851, 5088, 5379, 6813, 6839, 2]

// Module 11644 (CustomTypingIndicatorAnnounceActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2062 */;
import openUserSettings from "openUserSettings" /* 7093 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet, openUserSettingsResult;

let metroImportAll;
let metroImportDefault;
const View = react_native.View;
const UserSettingsSections = Constants.UserSettingsSections;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles(() => {
  const obj = { content: { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16 }, examples: { width: "100%", gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_16 }, newBadge: { marginTop: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, paddingVertical: 0 }, title: { textAlign: "center", marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_8 }, body: { textAlign: "center", marginBottom: nativeDefault.space.PX_24 }, actions: { gap: nativeDefault.space.PX_12, width: "100%" }, row: { alignSelf: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderColor: nativeDefault.colors.BORDER_NORMAL, borderWidth: 1, borderRadius: nativeDefault.radii.md }, outerRow: { padding: nativeDefault.space.PX_8, opacity: 0.75 }, innerRow: { padding: nativeDefault.space.PX_10 }, outerStack: { width: "auto", maxWidth: "80%", overflow: "hidden" }, innerStack: { width: "auto", maxWidth: "100%", overflow: "hidden" } };
  ({ alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16 });
  ({ width: "100%", gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_16 });
  ({ marginTop: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, paddingVertical: 0 });
  ({ textAlign: "center", marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_8 });
  ({ textAlign: "center", marginBottom: nativeDefault.space.PX_24 });
  ({ gap: nativeDefault.space.PX_12, width: "100%" });
  ({ alignSelf: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderColor: nativeDefault.colors.BORDER_NORMAL, borderWidth: 1, borderRadius: nativeDefault.radii.md });
  ({ padding: nativeDefault.space.PX_8, opacity: 0.75 });
  ({ padding: nativeDefault.space.PX_10 });
  return obj;
});
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function CustomTypingIndicatorAnnounceActionSheet(markAsDismissed) {
  let analyticsLocations2;
  let items1;
  let tmp6;
  let obj = markAsDismissed(analyticsLocations2[8]);
  const cResult = obj.c(73);
  markAsDismissed = markAsDismissed.markAsDismissed;
  const analyticsLocations = markAsDismissed.analyticsLocations;
  const ref = react.useRef(null);
  const tmp5 = closure_9();
  if (cResult[0] !== analyticsLocations) {
    let items = analyticsLocations;
    if (analyticsLocations == null) {
      items = [];
    }
    cResult[0] = analyticsLocations;
    cResult[1] = items;
    tmp6 = items;
  } else {
    tmp6 = cResult[1];
  }
  const tmp8 = ref(analyticsLocations2[9]);
  analyticsLocations2 = tmp8(tmp6, ref(tmp2[10]).CUSTOM_TYPING_INDICATOR_ANNOUNCEMENT_SHEET).analyticsLocations;
  if (cResult[2] === analyticsLocations2) {
    if (cResult[5] !== markAsDismissed) {
      class R {
        constructor() {
          markAsDismissed(ContentDismissActionType.USER_DISMISS);
        }
      }
      cResult[5] = markAsDismissed;
      cResult[6] = R;
    } else {
      class R {
        constructor() {
          markAsDismissed(ContentDismissActionType.USER_DISMISS);
        }
      }
    }
    if (cResult[7] !== markAsDismissed) {
      class A {
        constructor() {
          markAsDismissed(ContentDismissActionType.USER_DISMISS);
        }
      }
      cResult[7] = markAsDismissed;
      cResult[8] = A;
    } else {
      class A {
        constructor() {
          markAsDismissed(ContentDismissActionType.USER_DISMISS);
        }
      }
    }
    const content = tmp5.content;
    if (cResult[9] !== markAsDismissed) {
      class A {
        constructor() {
          markAsDismissed(ContentDismissActionType.USER_DISMISS);
        }
      }
      let obj2 = {
        onPress() {
              const current = ref.current;
              if (current != null) {
                current.closeActionSheet();
              }
              markAsDismissed(ContentDismissActionType.USER_DISMISS);
            }
      };
      cResult[9] = markAsDismissed;
      cResult[10] = closure_7(markAsDismissed(analyticsLocations2[12]).ActionSheetHeaderBar, obj2);
      const tmp13 = closure_7(markAsDismissed(analyticsLocations2[12]).ActionSheetHeaderBar, obj2);
    } else {
      class A {
        constructor() {
          markAsDismissed(ContentDismissActionType.USER_DISMISS);
        }
      }
    }
    if (cResult[11] === tmp5.outerRow) {
      let tmp16;
      class A {
        constructor() {
          markAsDismissed(ContentDismissActionType.USER_DISMISS);
        }
      }
      const _Symbol = Symbol;
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        class A {
          constructor() {
            markAsDismissed(ContentDismissActionType.USER_DISMISS);
          }
        }
        tmp17[0] = ref(analyticsLocations2[13]);
        tmp17[1] = ref(analyticsLocations2[14]);
        tmp17[2] = ref(analyticsLocations2[13]);
        cResult[14] = tmp17;
        tmp16 = tmp17;
      } else {
        class A {
          constructor() {
            markAsDismissed(ContentDismissActionType.USER_DISMISS);
          }
        }
      }
      if (cResult[15] !== tmp5.outerStack) {
        class A {
          constructor() {
            markAsDismissed(ContentDismissActionType.USER_DISMISS);
          }
        }
        let obj3 = { name: "Cap", suggestion: tmp(tmp2[16]).TypingSuggestion.UNSPECIFIED, emojiSize: 24, spacing: 8, textVariant: "text-md/medium", textColor: "text-subtle", lineClamp: 1, emojiSource: tmp16, style: tmp5.outerStack };
        const tmp7Result = ref(analyticsLocations2[15]);
        cResult[15] = tmp5.outerStack;
        cResult[16] = closure_7(tmp7Result, obj3);
        const tmp20 = closure_7(tmp7Result, obj3);
      } else {
        class A {
          constructor() {
            markAsDismissed(ContentDismissActionType.USER_DISMISS);
          }
        }
      }
      if (cResult[17] === tmp14) {
        class A {
          constructor() {
            markAsDismissed(ContentDismissActionType.USER_DISMISS);
          }
        }
        if (cResult[20] === tmp5.innerRow) {
          let tmp26;
          class A {
            constructor() {
              markAsDismissed(ContentDismissActionType.USER_DISMISS);
            }
          }
          const _Symbol2 = Symbol;
          if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
            class A {
              constructor() {
                markAsDismissed(ContentDismissActionType.USER_DISMISS);
              }
            }
            tmp27[0] = ref(analyticsLocations2[17]);
            tmp27[1] = ref(analyticsLocations2[18]);
            tmp27[2] = ref(analyticsLocations2[17]);
            cResult[23] = tmp27;
            tmp26 = tmp27;
          } else {
            class A {
              constructor() {
                markAsDismissed(ContentDismissActionType.USER_DISMISS);
              }
            }
          }
          if (cResult[24] !== tmp5.innerStack) {
            class A {
              constructor() {
                markAsDismissed(ContentDismissActionType.USER_DISMISS);
              }
            }
            const obj4 = { name: "Rose", suggestion: markAsDismissed(analyticsLocations2[16]).TypingSuggestion.YAPPING, emojiSize: 28, spacing: 10, textVariant: "text-lg/medium", textColor: "text-default", lineClamp: 1, style: tmp5.innerStack, emojiSource: tmp26 };
            const tmp7Result3 = ref(analyticsLocations2[15]);
            cResult[24] = tmp5.innerStack;
            cResult[25] = closure_7(tmp7Result3, obj4);
            const tmp30 = closure_7(tmp7Result3, obj4);
          } else {
            class A {
              constructor() {
                markAsDismissed(ContentDismissActionType.USER_DISMISS);
              }
            }
          }
          if (cResult[26] === tmp25) {
            class A {
              constructor() {
                markAsDismissed(ContentDismissActionType.USER_DISMISS);
              }
            }
            if (cResult[29] === tmp5.outerRow) {
              let tmp36;
              class A {
                constructor() {
                  markAsDismissed(ContentDismissActionType.USER_DISMISS);
                }
              }
              const _Symbol3 = Symbol;
              if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
                class A {
                  constructor() {
                    markAsDismissed(ContentDismissActionType.USER_DISMISS);
                  }
                }
                tmp37[0] = ref(analyticsLocations2[19]);
                tmp37[1] = ref(analyticsLocations2[20]);
                tmp37[2] = ref(analyticsLocations2[21]);
                cResult[32] = tmp37;
                tmp36 = tmp37;
              } else {
                class A {
                  constructor() {
                    markAsDismissed(ContentDismissActionType.USER_DISMISS);
                  }
                }
              }
              if (cResult[33] !== tmp5.outerStack) {
                class A {
                  constructor() {
                    markAsDismissed(ContentDismissActionType.USER_DISMISS);
                  }
                }
                const obj5 = { name: "Loky", suggestion: markAsDismissed(analyticsLocations2[16]).TypingSuggestion.OVERSHARING, emojiSize: 24, spacing: 8, textVariant: "text-md/medium", textColor: "text-subtle", lineClamp: 1, style: tmp5.outerStack, emojiSource: tmp36 };
                const tmp7Result4 = ref(analyticsLocations2[15]);
                cResult[33] = tmp5.outerStack;
                cResult[34] = closure_7(tmp7Result4, obj5);
                const tmp40 = closure_7(tmp7Result4, obj5);
              } else {
                class A {
                  constructor() {
                    markAsDismissed(ContentDismissActionType.USER_DISMISS);
                  }
                }
              }
              if (cResult[35] === tmp35) {
                class A {
                  constructor() {
                    markAsDismissed(ContentDismissActionType.USER_DISMISS);
                  }
                }
                if (cResult[38] === tmp5.examples) {
                  class A {
                    constructor() {
                      markAsDismissed(ContentDismissActionType.USER_DISMISS);
                    }
                  }
                }
                const obj6 = { style: tmp5.examples, children: items1 };
                items1 = [tmp21, tmp31, tmp41];
                cResult[38] = tmp5.examples;
                cResult[39] = tmp21;
                cResult[40] = tmp31;
                cResult[41] = tmp41;
                cResult[42] = closure_8(View, obj6);
                closure_8(View, obj6);
                class C {
                  constructor() {
                    obj = closure_0(closure_2[11]);
                    obj1 = { screen: UserSettingsSections.TYPING_INDICATOR, params: null };
                    obj4 = { analyticsLocations };
                    obj1.params = obj4;
                    openUserSettingsResult = obj.openUserSettings(obj1, () => {
                      markAsDismissed(constants.TAKE_ACTION);
                    });
                    return;
                  }
                }
              }
              const obj7 = { style: tmp35, children: tmp38 };
              cResult[35] = tmp35;
              cResult[36] = tmp38;
              cResult[37] = closure_7(View, obj7);
              const tmp44 = closure_7(View, obj7);
            }
            const items2 = [, ];
            ({ row: arr4[0], outerRow: arr4[1] } = tmp5);
            cResult[29] = tmp5.outerRow;
            cResult[30] = tmp5.row;
            cResult[31] = items2;
          }
          const obj8 = { style: tmp25, children: tmp28 };
          cResult[26] = tmp25;
          cResult[27] = tmp28;
          cResult[28] = closure_7(View, obj8);
          const tmp34 = closure_7(View, obj8);
        }
        const items3 = [, ];
        ({ row: arr3[0], innerRow: arr3[1] } = tmp5);
        cResult[20] = tmp5.innerRow;
        cResult[21] = tmp5.row;
        cResult[22] = items3;
      }
      const obj9 = { style: tmp14, children: tmp18 };
      cResult[17] = tmp14;
      cResult[18] = tmp18;
      cResult[19] = closure_7(View, obj9);
      const tmp24 = closure_7(View, obj9);
    }
    const items4 = [, ];
    ({ row: arr2[0], outerRow: arr2[1] } = tmp5);
    cResult[11] = tmp5.outerRow;
    cResult[12] = tmp5.row;
    cResult[13] = items4;
  }
  class C {
    constructor() {
      obj = closure_0(closure_2[11]);
      obj1 = { screen: UserSettingsSections.TYPING_INDICATOR, params: null };
      obj4 = { analyticsLocations };
      obj1.params = obj4;
      openUserSettingsResult = obj.openUserSettings(obj1, () => {
        markAsDismissed(constants.TAKE_ACTION);
      });
      return;
    }
  }
  cResult[2] = analyticsLocations2;
  cResult[3] = markAsDismissed;
  cResult[4] = C;
}) : (function CustomTypingIndicatorAnnounceActionSheet(markAsDismissed) {
  let SafeAreaPaddingView;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items10;
  let items11;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj10;
  let obj12;
  let obj3;
  let obj4;
  let obj8;
  let tmp3Result;
  let tmp3Result3;
  let tmp3Result4;
  markAsDismissed = markAsDismissed.markAsDismissed;
  let analyticsLocations1 = markAsDismissed.analyticsLocations;
  let analyticsLocations;
  let obj = react;
  const ref = react.useRef(null);
  const tmp2 = closure_9();
  const tmp5 = ref(analyticsLocations[9]);
  if (analyticsLocations1 == null) {
    analyticsLocations1 = [];
  }
  analyticsLocations = tmp5(analyticsLocations1, tmp3(tmp4[10]).CUSTOM_TYPING_INDICATOR_ANNOUNCEMENT_SHEET).analyticsLocations;
  const items = [markAsDismissed, analyticsLocations];
  const items1 = [markAsDismissed];
  const callback = obj.useCallback(() => {
    let obj3;
    const obj2 = { screen: UserSettingsSections.TYPING_INDICATOR, params: obj3 };
    obj3 = { analyticsLocations };
    const obj = openUserSettings;
    obj.openUserSettings(obj2, () => {
      markAsDismissed(constants.TAKE_ACTION);
    });
  }, items);
  const items2 = [markAsDismissed];
  const callback1 = obj.useCallback(() => {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items1);
  const callback2 = obj.useCallback(() => {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items2);
  let obj2 = { ref, onDismiss: callback2, startExpanded: true, handleDisabled: true, children: closure_7(SafeAreaPaddingView, obj3) };
  BottomSheet = markAsDismissed(tmp4[28]).BottomSheet;
  obj3 = { bottom: true, children: closure_8(View, obj4) };
  obj4 = { style: tmp2.content, children: items3 };
  SafeAreaPaddingView = markAsDismissed(tmp4[27]).SafeAreaPaddingView;
  items3 = [, , , , , ];
  const obj5 = {
    onPress() {
      const current = ref.current;
      if (current != null) {
        current.closeActionSheet();
      }
      markAsDismissed(ContentDismissActionType.USER_DISMISS);
    }
  };
  items3[0] = closure_7(markAsDismissed(analyticsLocations[12]).ActionSheetHeaderBar, obj5);
  const obj6 = { style: tmp2.examples, children: items6 };
  const obj7 = { style: items4, children: closure_7(tmp3Result, obj8) };
  items4 = [, ];
  ({ row: arr6[0], outerRow: arr6[1] } = tmp2);
  obj8 = { name: "Cap", suggestion: markAsDismissed(analyticsLocations[16]).TypingSuggestion.UNSPECIFIED, emojiSize: 24, spacing: 8, textVariant: "text-md/medium", textColor: "text-subtle", lineClamp: 1, emojiSource: items5, style: tmp2.outerStack };
  tmp3Result = ref(analyticsLocations[15]);
  items5 = [ref(analyticsLocations[13]), ref(analyticsLocations[14]), ref(analyticsLocations[13])];
  items6 = [closure_7(View, obj7), , ];
  const obj9 = { style: items7, children: closure_7(tmp3Result3, obj10) };
  items7 = [, ];
  ({ row: arr9[0], innerRow: arr9[1] } = tmp2);
  obj10 = { name: "Rose", suggestion: markAsDismissed(analyticsLocations[16]).TypingSuggestion.YAPPING, emojiSize: 28, spacing: 10, textVariant: "text-lg/medium", textColor: "text-default", lineClamp: 1, style: tmp2.innerStack, emojiSource: items8 };
  tmp3Result3 = ref(analyticsLocations[15]);
  items8 = [ref(analyticsLocations[17]), ref(analyticsLocations[18]), ref(analyticsLocations[17])];
  items6[1] = closure_7(View, obj9);
  const obj11 = { style: items9, children: closure_7(tmp3Result4, obj12) };
  items9 = [, ];
  ({ row: arr11[0], outerRow: arr11[1] } = tmp2);
  obj12 = { name: "Loky", suggestion: markAsDismissed(analyticsLocations[16]).TypingSuggestion.OVERSHARING, emojiSize: 24, spacing: 8, textVariant: "text-md/medium", textColor: "text-subtle", lineClamp: 1, style: tmp2.outerStack, emojiSource: items10 };
  tmp3Result4 = ref(analyticsLocations[15]);
  items10 = [ref(analyticsLocations[19]), ref(analyticsLocations[20]), ref(analyticsLocations[21])];
  items6[2] = closure_7(View, obj11);
  items3[1] = closure_8(View, obj6);
  const obj13 = { text: intl.string(markAsDismissed(analyticsLocations[22]).t.y2b7CA), color: markAsDismissed(analyticsLocations[23]).BadgeColors.EXPRESSIVE, style: tmp2.newBadge };
  const TextBadge = markAsDismissed(tmp4[23]).TextBadge;
  intl = markAsDismissed(tmp4[22]).intl;
  items3[2] = closure_7(TextBadge, obj13);
  const obj14 = { variant: "heading-lg/medium", style: tmp2.title, color: "text-default", children: intl2.string(ref(analyticsLocations[24]).uGxDiu) };
  const Text = markAsDismissed(tmp4[25]).Text;
  intl2 = markAsDismissed(tmp4[22]).intl;
  items3[3] = closure_7(Text, obj14);
  const obj15 = { variant: "text-md/normal", style: tmp2.body, color: "text-muted", children: intl3.string(ref(analyticsLocations[24]).yezU3E) };
  const Text2 = markAsDismissed(tmp4[25]).Text;
  intl3 = markAsDismissed(tmp4[22]).intl;
  items3[4] = closure_7(Text2, obj15);
  const obj16 = { style: tmp2.actions, children: items11 };
  const obj17 = { text: intl4.string(ref(analyticsLocations[24]).TswY68), variant: "primary", size: "lg", onPress: callback };
  const Button = markAsDismissed(tmp4[26]).Button;
  intl4 = markAsDismissed(tmp4[22]).intl;
  items11 = [closure_7(Button, obj17), ];
  const obj18 = { text: intl5.string(markAsDismissed(analyticsLocations[22]).t.TulDPl), variant: "secondary", size: "lg", onPress: callback1 };
  const Button2 = markAsDismissed(tmp4[26]).Button;
  intl5 = markAsDismissed(tmp4[22]).intl;
  items11[1] = closure_7(Button2, obj18);
  items3[5] = closure_8(View, obj16);
  return closure_7(BottomSheet, obj2);
});
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorAnnounceActionSheet.tsx");

export default tmp3;
