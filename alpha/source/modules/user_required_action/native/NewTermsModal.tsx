// Module ID: 17987
// Function ID: 17988
// Name: NewTermsModal
// Dependencies: [5, 32, 19, 17, 2057, 1085, 21, 5090, 587, 6877, 1126, 5936, 558, 576, 1630, 6209, 5370, 8281, 1272, 8941, 5086, 5375, 7013, 8646, 2]

// Module 17987 (NewTermsModal)
import nativeDefault from "native" /* 587 */;
import intl10 from "intl" /* 1126 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 5936 */;
import showSimpleActionSheet2 from "showSimpleActionSheet" /* 6877 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 7013 */;
import AssetRegistryDefault from "AssetRegistry" /* 8646 */;
import useTrackImpressionDefault from "useTrackImpression" /* 8941 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 2057 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c2, c3, dependencyMap;

let c10;
let closure_12;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let unpackModuleId;
function handleTouch() {
  metroImportDefault.dismiss();
}
function handleMoreActions() {
  let intl;
  let items;
  let obj = { key: "NewTermsModalMore", options: items, hasIcons: false };
  const obj2 = {
    label: intl.string(intl10.t["2jxGer"]),
    isDestructive: true,
    onPress() {
      const obj = AuthenticationActionCreatorsDefault;
      return obj.logout("new_terms_modal");
    }
  };
  const showSimpleActionSheet = showSimpleActionSheet2.showSimpleActionSheet;
  showSimpleActionSheet2;
  intl = intl10.intl;
  items = [obj2];
  const result = showSimpleActionSheet(obj);
}
({ View: metroRequire, Keyboard: metroImportDefault, ScrollView: metroImportAll } = react_native);
({ MarketingURLs: c10, UserRequiredActions: unpackModuleId } = Constants);
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { contentContainer: obj2, scrollView: { flex: 1 }, container: obj3, description: obj4, agreementDescription: obj5, navbarRight: obj6, stickyFooter: obj7 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, flexGrow: 1, display: "flex", alignContent: "center", justifyContent: "center" };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj4 = { marginTop: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_24 };
obj5 = { marginTop: nativeDefault.space.PX_24 };
obj6 = { position: "absolute", right: 0, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj7 = { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_24, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_14 = createStyles(obj);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function NewTermsModal() {
  let bottom;
  let closure_2;
  let contentContainer;
  let intl;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items1;
  let items3;
  let obj11;
  let obj13;
  let obj15;
  let obj3;
  let obj9;
  let required_action;
  let scrollView;
  let tmp11;
  let tmp13;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let top;
  let tmp = required_action;
  let obj = required_action(576);
  const cResult = obj.c(48);
  const tmp4 = closure_14();
  ({ bottom, top } = useSafeAreaInsetsDefault());
  const tmp6 = useSafeAreaInsetsDefault();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const action = UserRequiredActionStore.getAction();
    cResult[0] = action;
    required_action = action;
  } else {
    required_action = cResult[0];
  }
  [tmp11, importDefault] = _slicedToArray(react.useState(false), 2);
  const tmp10 = _slicedToArray(react.useState(false), 2);
  const tmpResult = tmp(6209);
  tmpResult.useNavigatorBackPressHandler(tmp(5370).BackPressHandler.minimize);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp14 = _asyncToGenerator;
    required_action = _asyncToGenerator(async (arg0, value) => {
      let closure_1;
      let obj2;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let tmp;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              tmp = undefined;
              tmp4(true);
              c2 = 1;
              c3 = 1;
              const obj5 = { value: obj2.acceptAgreements(), done: false };
              obj2 = tmp(closure_2_2[17]);
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            tmp = value;
            tmp4(tmp);
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp14) {
          c3 = 3;
          throw tmp14;
        }
      }
    });
    function t1() {
      return closure_0(...arguments);
    }
    cResult[1] = t1;
    tmp13 = t1;
  } else {
    tmp13 = cResult[1];
  }
  dependencyMap = tmp13;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    function handleAdvance() {
      if (first === unpackModuleId.AGREEMENTS) {
        closure_2();
      }
    }
    cResult[2] = handleAdvance;
    tmp15 = handleAdvance;
  } else {
    tmp15 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { type: tmp(1272).ImpressionTypes.VIEW, name: tmp(1272).ImpressionNames.USER_AGREEMENTS, properties: obj3 };
    obj3 = { required_action };
    let obj4 = {};
    const items = [];
    cResult[3] = obj2;
    cResult[4] = obj4;
    cResult[5] = items;
    tmp18 = items;
    tmp17 = obj4;
    tmp16 = obj2;
  } else {
    tmp16 = cResult[3];
    tmp17 = cResult[4];
    tmp18 = cResult[5];
  }
  useTrackImpressionDefault(tmp16, tmp17, tmp18);
  if (null == required_action) {
    return null;
  } else {
    if (cResult[6] === bottom) {
      let tmp20;
      if (cResult[7] === top) {
        tmp20 = cResult[8];
      }
      if (cResult[9] === tmp4.container) {
        let tmp21;
        let tmp22;
        let tmp25;
        let tmp28;
        let tmp31;
        let tmp35;
        let tmp39;
        let tmp43;
        let tmp47;
        let tmp49;
        if (cResult[10] === tmp20) {
          tmp21 = cResult[11];
        }
        const _Symbol = Symbol;
        ({ scrollView, contentContainer } = tmp4);
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          let obj5 = { maxFontSizeMultiplier: 2, variant: "heading-xxl/bold", children: intl.string(tmp(1126).t["7glvXu"]) };
          const Text = tmp(5086).Text;
          intl = tmp(1126).intl;
          const tmp24 = closure_12(Text, obj5);
          cResult[12] = tmp24;
          tmp22 = tmp24;
        } else {
          tmp22 = cResult[12];
        }
        const _Symbol2 = Symbol;
        const description = tmp4.description;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(1126).intl;
          const obj6 = { url: constants.TERMS_SUMMARY };
          const formatResult = intl2.format(tmp(1126).t.CN0Hvb, obj6);
          cResult[13] = formatResult;
          tmp25 = formatResult;
        } else {
          tmp25 = cResult[13];
        }
        if (cResult[14] !== tmp4.description) {
          const obj7 = { variant: "text-md/normal", style: description, children: tmp25 };
          const tmp30 = closure_12(tmp(5086).Text, obj7);
          cResult[14] = tmp4.description;
          cResult[15] = tmp30;
          tmp28 = tmp30;
        } else {
          tmp28 = cResult[15];
        }
        const _Symbol3 = Symbol;
        if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
          const obj8 = { variant: "text-md/normal", children: intl3.format(tmp(1126).t.iw0hFi, obj9) };
          const Text2 = tmp(5086).Text;
          intl3 = tmp(1126).intl;
          obj9 = { url: constants.TERMS };
          const tmp34 = closure_12(Text2, obj8);
          cResult[16] = tmp34;
          tmp31 = tmp34;
        } else {
          tmp31 = cResult[16];
        }
        const _Symbol4 = Symbol;
        if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
          const obj10 = { variant: "text-md/normal", children: intl4.format(tmp(1126).t["36klnD"], obj11) };
          const Text3 = tmp(5086).Text;
          intl4 = tmp(1126).intl;
          obj11 = { url: constants.PAID_TERMS };
          const tmp38 = closure_12(Text3, obj10);
          cResult[17] = tmp38;
          tmp35 = tmp38;
        } else {
          tmp35 = cResult[17];
        }
        const _Symbol5 = Symbol;
        if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
          const obj12 = { variant: "text-md/normal", children: intl5.format(tmp(1126).t.TquFBF, obj13) };
          const Text4 = tmp(5086).Text;
          intl5 = tmp(1126).intl;
          obj13 = { url: constants.PRIVACY };
          const tmp42 = closure_12(Text4, obj12);
          cResult[18] = tmp42;
          tmp39 = tmp42;
        } else {
          tmp39 = cResult[18];
        }
        const _Symbol6 = Symbol;
        if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
          const obj14 = { variant: "text-md/normal", children: intl6.format(tmp(1126).t.ia96Tb, obj15) };
          const Text5 = tmp(5086).Text;
          intl6 = tmp(1126).intl;
          obj15 = { url: constants.GUIDELINES };
          const tmp46 = closure_12(Text5, obj14);
          cResult[19] = tmp46;
          tmp43 = tmp46;
        } else {
          tmp43 = cResult[19];
        }
        const _Symbol7 = Symbol;
        const agreementDescription = tmp4.agreementDescription;
        if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
          const intl7 = tmp(1126).intl;
          const stringResult = intl7.string(tmp(1126).t["+USXQE"]);
          cResult[20] = stringResult;
          tmp47 = stringResult;
        } else {
          tmp47 = cResult[20];
        }
        if (cResult[21] !== tmp4.agreementDescription) {
          const obj16 = { variant: "text-md/normal", style: agreementDescription, children: tmp47 };
          const tmp51 = closure_12(tmp(5086).Text, obj16);
          cResult[21] = tmp4.agreementDescription;
          cResult[22] = tmp51;
          tmp49 = tmp51;
        } else {
          tmp49 = cResult[22];
        }
        if (cResult[23] === tmp4.contentContainer) {
          if (cResult[24] === tmp4.scrollView) {
            if (cResult[25] === tmp28) {
              let tmp52;
              let tmp57;
              let tmp59;
              if (cResult[26] === tmp49) {
                tmp52 = cResult[27];
              }
              const _Symbol8 = Symbol;
              const stickyFooter = tmp4.stickyFooter;
              if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
                const intl8 = tmp(1126).intl;
                const stringResult1 = intl8.string(tmp(1126).t["+TBKL1"]);
                cResult[28] = stringResult1;
                tmp57 = stringResult1;
              } else {
                tmp57 = cResult[28];
              }
              if (cResult[29] !== tmp11) {
                const obj17 = { loading: tmp11, onPress: tmp15, text: tmp57 };
                const tmp61 = closure_12(tmp(5375).Button, obj17);
                cResult[29] = tmp11;
                cResult[30] = tmp61;
                tmp59 = tmp61;
              } else {
                tmp59 = cResult[30];
              }
              if (cResult[31] === tmp4.stickyFooter) {
                let tmp62;
                let tmp66;
                if (cResult[32] === tmp59) {
                  tmp62 = cResult[33];
                }
                if (cResult[34] !== top) {
                  const obj18 = { top };
                  cResult[34] = top;
                  cResult[35] = obj18;
                  tmp66 = obj18;
                } else {
                  tmp66 = cResult[35];
                }
                if (cResult[36] === tmp4.navbarRight) {
                  let tmp67;
                  let tmp68;
                  if (cResult[37] === tmp66) {
                    tmp67 = cResult[38];
                  }
                  const _Symbol9 = Symbol;
                  const tintColor = tmp4.navbarRight.tintColor;
                  if (cResult[39] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl9 = tmp(1126).intl;
                    const stringResult2 = intl9.string(tmp(1126).t["UKOtz+"]);
                    cResult[39] = stringResult2;
                    tmp68 = stringResult2;
                  } else {
                    tmp68 = cResult[39];
                  }
                  if (cResult[40] === tmp4.navbarRight.tintColor) {
                    let tmp70;
                    if (cResult[41] === tmp67) {
                      tmp70 = cResult[42];
                    }
                    if (cResult[43] === tmp52) {
                      if (cResult[44] === tmp62) {
                        if (cResult[45] === tmp70) {
                          let tmp75;
                          if (cResult[46] === tmp21) {
                            tmp75 = cResult[47];
                          }
                          return tmp75;
                        }
                      }
                    }
                    const obj19 = { style: tmp21, children: items1 };
                    items1 = [tmp52, tmp62, tmp70];
                    const tmp78 = closure_13(closure_6, obj19);
                    cResult[43] = tmp52;
                    cResult[44] = tmp62;
                    cResult[45] = tmp70;
                    cResult[46] = tmp21;
                    cResult[47] = tmp78;
                    tmp75 = tmp78;
                  }
                  const obj20 = { style: tmp67, source: AssetRegistryDefault, color: tintColor, onPress: handleMoreActions, accessibilityRole: "button", accessibilityLabel: tmp68 };
                  const tmp5Result = TouchableHitBoxDefault;
                  const tmp74 = closure_12(tmp5Result, obj20);
                  cResult[40] = tmp4.navbarRight.tintColor;
                  cResult[41] = tmp67;
                  cResult[42] = tmp74;
                  tmp70 = tmp74;
                }
                const items2 = [tmp4.navbarRight, tmp66];
                cResult[36] = tmp4.navbarRight;
                cResult[37] = tmp66;
                cResult[38] = items2;
                tmp67 = items2;
              }
              const obj21 = { style: stickyFooter, children: tmp59 };
              const tmp65 = closure_12(closure_6, obj21);
              cResult[31] = tmp4.stickyFooter;
              cResult[32] = tmp59;
              cResult[33] = tmp65;
              tmp62 = tmp65;
            }
          }
        }
        const obj22 = { style: scrollView, contentContainerStyle: contentContainer, onTouchStart: handleTouch, children: items3 };
        items3 = [tmp22, tmp28, tmp31, tmp35, tmp39, tmp43, tmp49];
        const tmp56 = closure_13(closure_8, obj22);
        cResult[23] = tmp4.contentContainer;
        cResult[24] = tmp4.scrollView;
        cResult[25] = tmp28;
        cResult[26] = tmp49;
        cResult[27] = tmp56;
        tmp52 = tmp56;
      }
      const items4 = [tmp4.container, tmp20];
      cResult[9] = tmp4.container;
      cResult[10] = tmp20;
      cResult[11] = items4;
      tmp21 = items4;
    }
    const obj23 = { paddingTop: top, paddingBottom: bottom };
    cResult[6] = bottom;
    cResult[7] = top;
    cResult[8] = obj23;
    tmp20 = obj23;
  }
}) : (function NewTermsModal() {
  let Button;
  let action;
  let closure_1;
  let closure_2;
  let first;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items;
  let items1;
  let items2;
  let items3;
  let obj11;
  let obj13;
  let obj15;
  let obj17;
  let obj20;
  let obj9;
  let tmp = closure_14();
  const tmp3 = dependencyMap;
  const rect = useSafeAreaInsetsDefault();
  const top = rect.top;
  const bottom = rect.bottom;
  const memo = react.useMemo(() => action.getAction(), []);
  [first, importDefault] = react.useState(false);
  let obj = memo(6209);
  obj.useNavigatorBackPressHandler(memo(5370).BackPressHandler.minimize);
  dependencyMap = react.useCallback(_asyncToGenerator(async (arg0, value) => {
    let closure_0;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let tmp;
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            tmp = undefined;
            tmp4(true);
            const obj2 = tmp(c2[17]);
            c2 = 1;
            c3 = 1;
            const obj5 = { value: obj2.acceptAgreements(), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          tmp = value;
          closure_129_1(tmp);
          c3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp14) {
        c3 = 3;
        throw tmp14;
      }
    }
  }), []);
  let obj2 = { type: memo(1272).ImpressionTypes.VIEW, name: memo(1272).ImpressionNames.USER_AGREEMENTS, properties: { required_action: memo } };
  const tmp9 = useTrackImpressionDefault;
  tmp9(obj2, {}, []);
  let tmp11 = null;
  if (null != memo) {
    let obj3 = { style: items, children: items2 };
    items = [tmp.container, ];
    let obj4 = { paddingTop: top, paddingBottom: bottom };
    items[1] = obj4;
    const tmp14 = closure_8;
    const obj6 = { style: null, contentContainerStyle: null, onTouchStart: handleTouch, children: items1 };
    ({ scrollView: obj5.style, contentContainer: obj5.contentContainerStyle } = tmp);
    const obj7 = { maxFontSizeMultiplier: 2, variant: "heading-xxl/bold", children: intl.string(memo(1126).t["7glvXu"]) };
    const Text = tmp7(5086).Text;
    intl = tmp7(1126).intl;
    items1 = [closure_12(Text, obj7), , , , , , ];
    const obj8 = { variant: "text-md/normal", style: tmp.description, children: intl2.format(memo(1126).t.CN0Hvb, obj9) };
    const Text2 = tmp7(5086).Text;
    intl2 = tmp7(1126).intl;
    obj9 = { url: constants.TERMS_SUMMARY };
    items1[1] = closure_12(Text2, obj8);
    const obj10 = { variant: "text-md/normal", children: intl3.format(memo(1126).t.iw0hFi, obj11) };
    const Text3 = tmp7(5086).Text;
    intl3 = tmp7(1126).intl;
    obj11 = { url: constants.TERMS };
    items1[2] = closure_12(Text3, obj10);
    const obj12 = { variant: "text-md/normal", children: intl4.format(memo(1126).t["36klnD"], obj13) };
    const Text4 = tmp7(5086).Text;
    intl4 = tmp7(1126).intl;
    obj13 = { url: constants.PAID_TERMS };
    items1[3] = closure_12(Text4, obj12);
    const obj14 = { variant: "text-md/normal", children: intl5.format(memo(1126).t.TquFBF, obj15) };
    const Text5 = tmp7(5086).Text;
    intl5 = tmp7(1126).intl;
    obj15 = { url: constants.PRIVACY };
    items1[4] = closure_12(Text5, obj14);
    const obj16 = { variant: "text-md/normal", children: intl6.format(memo(1126).t.ia96Tb, obj17) };
    const Text6 = tmp7(5086).Text;
    intl6 = tmp7(1126).intl;
    obj17 = { url: constants.GUIDELINES };
    items1[5] = closure_12(Text6, obj16);
    const obj18 = { variant: "text-md/normal", style: tmp.agreementDescription, children: intl7.string(memo(1126).t["+USXQE"]) };
    const Text7 = tmp7(5086).Text;
    intl7 = tmp7(1126).intl;
    items1[6] = closure_12(Text7, obj18);
    items2 = [closure_13(closure_8, obj6), , ];
    const obj19 = { style: tmp.stickyFooter, children: closure_12(Button, obj20) };
    obj20 = {
      loading: first,
      onPress: function handleAdvance() {
          if (memo === unpackModuleId.AGREEMENTS) {
            closure_2();
          }
        },
      text: intl8.string(memo(1126).t["+TBKL1"])
    };
    Button = tmp7(5375).Button;
    intl8 = tmp7(1126).intl;
    items2[1] = closure_12(closure_6, obj19);
    const obj21 = { style: items3, source: AssetRegistryDefault, color: tmp.navbarRight.tintColor, onPress: handleMoreActions, accessibilityRole: "button", accessibilityLabel: intl9.string(memo(1126).t["UKOtz+"]) };
    items3 = [tmp.navbarRight, ];
    const obj41 = { top };
    items3[1] = obj41;
    const tmp2Result = TouchableHitBoxDefault;
    intl9 = tmp7(1126).intl;
    items2[2] = closure_12(tmp2Result, obj21);
    tmp11 = closure_13(closure_6, obj3);
  }
  return tmp11;
});
let result = size.fileFinishedImporting("modules/user_required_action/native/NewTermsModal.tsx");

export default tmp6;
