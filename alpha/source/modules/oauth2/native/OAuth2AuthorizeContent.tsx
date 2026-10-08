// Module ID: 10648
// Function ID: 10649
// Name: OAuth2AuthorizeContent
// Dependencies: [32, 19, 17, 21, 5090, 587, 558, 576, 1496, 1630, 8886, 6720, 2]

// Module 10648 (OAuth2AuthorizeContent)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1496 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import KeyboardAwareViewDefault from "KeyboardAwareView" /* 6720 */;
import ObscuredSurfaceDefault from "ObscuredSurface" /* 8886 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { fill: { flex: 1 }, scrollView: obj2, scrollViewContentLandscape: { flexDirection: "row", alignItems: "center", width: "100%", flexGrow: 1, gap: 16 }, scrollViewContentPortrait: { flexDirection: "column", width: "100%", flexGrow: 1, gap: 16 }, header: { paddingTop: 24 }, bodyContainer: { flexDirection: "column", gap: 16, padding: 16 }, bodyContainerBackground: obj3, footerPortrait: { flexDirection: "column", padding: 16, gap: 16 }, separator: obj4 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingHorizontal: 16 };
createStyles = createStyles.createStyles;
obj3 = { marginHorizontal: 16, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.lg };
obj4 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_10 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function OAuth2AuthorizeContent(onScroll) {
  let appDetails;
  let body;
  let bottom;
  let centerContent;
  let closure_4;
  let first;
  let first1;
  let first2;
  let footer;
  let header;
  let items;
  let items1;
  let items2;
  let items3;
  let left;
  let right;
  let setAllContentSeen;
  let tmp = dependencyMap;
  let obj = react2;
  const cResult = obj.c(55);
  ({ header, body, footer, appDetails, centerContent, setAllContentSeen } = onScroll);
  onScroll = onScroll.onScroll;
  const obscured = onScroll.obscured;
  const hasContentBackground = onScroll.hasContentBackground;
  const tmp3 = closure_10();
  let obj2 = react;
  const ref = react.useRef(null);
  size = useWindowDimensionsDefault();
  const tmp7 = useSafeAreaInsetsDefault();
  ({ left, right, bottom } = tmp7);
  [first, closure_4] = react.useState(-1);
  [first1, metroRequire] = react.useState(-1);
  [first2, metroImportDefault] = react.useState(-1);
  let tmp14 = first >= 0 && first1 >= 0;
  if (tmp14) {
    tmp14 = null == footer || first2 >= 0;
  }
  metroImportAll = tmp14;
  if (cResult[0] === first) {
    if (cResult[1] === tmp14) {
      if (cResult[2] === first1) {
        let tmp16;
        let tmp17;
        let tmp19;
        if (cResult[3] === setAllContentSeen) {
          tmp16 = cResult[4];
          tmp17 = cResult[5];
        }
        const layoutEffect = obj2.useLayoutEffect(tmp16, tmp17);
        if (cResult[6] !== bottom) {
          let obj3 = { marginBottom: bottom };
          cResult[6] = bottom;
          cResult[7] = obj3;
          tmp19 = obj3;
        } else {
          tmp19 = cResult[7];
        }
        if (cResult[8] === tmp3.fill) {
          let tmp20;
          if (cResult[9] === tmp19) {
            tmp20 = cResult[10];
          }
          if (cResult[11] === left) {
            let tmp21;
            if (cResult[12] === right) {
              tmp21 = cResult[13];
            }
            if (cResult[14] === tmp3.scrollView) {
              let tmp22;
              let tmp25;
              let tmp26;
              if (cResult[15] === tmp21) {
                tmp22 = cResult[16];
              }
              const tmp23 = size.width > size.height ? tmp3.scrollViewContentLandscape : tmp3.scrollViewContentPortrait;
              const _Symbol = Symbol;
              if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                const fn2 = function $(arg0, arg1) {
                  const current = ref.current;
                  if (current != null) {
                    current.scrollTo({ y: 0 });
                  }
                  closure_4(arg1);
                };
                cResult[17] = fn2;
                tmp25 = fn2;
              } else {
                tmp25 = cResult[17];
              }
              const _Symbol2 = Symbol;
              if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                function ee(nativeEvent) {
                  closure_6(nativeEvent.nativeEvent.layout.height);
                }
                cResult[18] = ee;
                tmp26 = ee;
              } else {
                tmp26 = cResult[18];
              }
              if (cResult[19] === onScroll) {
                let tmp27;
                if (cResult[20] === setAllContentSeen) {
                  tmp27 = cResult[21];
                }
                if (cResult[22] === header) {
                  let tmp28;
                  let tmp33;
                  if (cResult[23] === tmp3.header) {
                    tmp28 = cResult[24];
                  }
                  let prop = null;
                  if (hasContentBackground) {
                    prop = tmp3.bodyContainerBackground;
                  }
                  if (cResult[25] !== size.width > size.height) {
                    const tmp34 = size.width > size.height ? { flex: 1 } : {};
                    cResult[25] = size.width > size.height;
                    cResult[26] = tmp34;
                    tmp33 = tmp34;
                  } else {
                    tmp33 = cResult[26];
                  }
                  if (cResult[27] === tmp3.bodyContainer) {
                    if (cResult[28] === prop) {
                      let tmp35;
                      if (cResult[29] === tmp33) {
                        tmp35 = cResult[30];
                      }
                      if (cResult[31] === appDetails) {
                        let tmp36;
                        if (cResult[32] === tmp3.separator) {
                          tmp36 = cResult[33];
                        }
                        if (cResult[34] === body) {
                          if (cResult[35] === tmp35) {
                            let tmp42;
                            if (cResult[36] === tmp36) {
                              tmp42 = cResult[37];
                            }
                            if (cResult[38] === obscured) {
                              if (cResult[39] === tmp28) {
                                let tmp46;
                                if (cResult[40] === tmp42) {
                                  tmp46 = cResult[41];
                                }
                                if (cResult[42] === centerContent) {
                                  if (cResult[43] === tmp27) {
                                    if (cResult[44] === tmp46) {
                                      if (cResult[45] === tmp22) {
                                        let tmp49;
                                        if (cResult[46] === tmp23) {
                                          tmp49 = cResult[47];
                                        }
                                        if (cResult[48] === footer) {
                                          let tmp53;
                                          if (cResult[49] === tmp3.footerPortrait) {
                                            tmp53 = cResult[50];
                                          }
                                          if (cResult[51] === tmp49) {
                                            if (cResult[52] === tmp53) {
                                              let tmp57;
                                              if (cResult[53] === tmp20) {
                                                tmp57 = cResult[54];
                                              }
                                              return tmp57;
                                            }
                                          }
                                          const obj4 = { style: tmp20, children: items };
                                          items = [tmp49, tmp53];
                                          const tmp59 = React4(KeyboardAwareViewDefault, obj4);
                                          cResult[51] = tmp49;
                                          cResult[52] = tmp53;
                                          cResult[53] = tmp20;
                                          cResult[54] = tmp59;
                                          tmp57 = tmp59;
                                        }
                                        let tmp54 = null;
                                        if (null != footer) {
                                          const obj5 = {
                                            onLayout(nativeEvent) {
                                                                                      closure_7(nativeEvent.nativeEvent.layout.height);
                                                                                    },
                                            style: tmp3.footerPortrait,
                                            children: footer
                                          };
                                          tmp54 = metroImportDefault(hasOwnProperty, obj5);
                                        }
                                        cResult[48] = footer;
                                        cResult[49] = tmp3.footerPortrait;
                                        cResult[50] = tmp54;
                                        tmp53 = tmp54;
                                      }
                                    }
                                  }
                                }
                                const obj6 = { style: tmp22, contentContainerStyle: tmp23, ref, onContentSizeChange: tmp25, scrollEventThrottle: 16, onLayout: tmp26, onScroll: tmp27, centerContent, children: tmp46 };
                                const tmp52 = metroImportDefault(metroRequire, obj6);
                                cResult[42] = centerContent;
                                cResult[43] = tmp27;
                                cResult[44] = tmp46;
                                cResult[45] = tmp22;
                                cResult[46] = tmp23;
                                cResult[47] = tmp52;
                                tmp49 = tmp52;
                              }
                            }
                            const obj7 = { obscured, children: items1 };
                            items1 = [tmp28, tmp42];
                            const tmp48 = React4(ObscuredSurfaceDefault, obj7);
                            cResult[38] = obscured;
                            cResult[39] = tmp28;
                            cResult[40] = tmp42;
                            cResult[41] = tmp48;
                            tmp46 = tmp48;
                          }
                        }
                        const obj8 = { style: tmp35, children: items2 };
                        items2 = [body, tmp36];
                        const tmp45 = React4(hasOwnProperty, obj8);
                        cResult[34] = body;
                        cResult[35] = tmp35;
                        cResult[36] = tmp36;
                        cResult[37] = tmp45;
                        tmp42 = tmp45;
                      }
                      let tmp37 = null;
                      if (null != appDetails) {
                        const obj10 = { style: tmp3.separator };
                        const obj9 = { children: items3 };
                        items3 = [metroImportDefault(hasOwnProperty, obj10), ];
                        const obj11 = { children: appDetails };
                        items3[1] = metroImportDefault(hasOwnProperty, obj11);
                        tmp37 = React4(metroImportAll, obj9);
                      }
                      cResult[31] = appDetails;
                      cResult[32] = tmp3.separator;
                      cResult[33] = tmp37;
                      tmp36 = tmp37;
                    }
                  }
                  const items4 = [tmp3.bodyContainer, prop, tmp33];
                  cResult[27] = tmp3.bodyContainer;
                  cResult[28] = prop;
                  cResult[29] = tmp33;
                  cResult[30] = items4;
                  tmp35 = items4;
                }
                let tmp29 = null;
                if (null != header) {
                  const obj12 = { style: tmp3.header, children: header };
                  tmp29 = metroImportDefault(hasOwnProperty, obj12);
                }
                cResult[22] = header;
                cResult[23] = tmp3.header;
                cResult[24] = tmp29;
                tmp28 = tmp29;
              }
              function te(nativeEvent) {
                nativeEvent = nativeEvent.nativeEvent;
                let contentOffset = nativeEvent.contentOffset;
                const layoutMeasurement = nativeEvent.layoutMeasurement;
                if (contentOffset === undefined) {
                  contentOffset = { y: 0 };
                }
                if (layoutMeasurement.height + contentOffset.y >= nativeEvent.contentSize.height - 5) {
                  if (setAllContentSeen != null) {
                    tmp(true);
                  }
                }
                if (onScroll != null) {
                  onScroll(nativeEvent);
                }
              }
              cResult[19] = onScroll;
              cResult[20] = setAllContentSeen;
              cResult[21] = te;
              tmp27 = te;
            }
            const items5 = [tmp3.scrollView, tmp21];
            cResult[14] = tmp3.scrollView;
            cResult[15] = tmp21;
            cResult[16] = items5;
            tmp22 = items5;
          }
          const obj13 = { paddingLeft: left, paddingRight: right };
          cResult[11] = left;
          cResult[12] = right;
          cResult[13] = obj13;
          tmp21 = obj13;
        }
        const items6 = [tmp3.fill, tmp19];
        cResult[8] = tmp3.fill;
        cResult[9] = tmp19;
        cResult[10] = items6;
        tmp20 = items6;
      }
    }
  }
  const fn = function s() {
    let obj2;
    let obj3;
    const tmp = closure_8;
    if (tmp) {
      const obj = { layoutMeasurement: obj2, contentSize: obj3 };
      let contentOffset = obj.contentOffset;
      const layoutMeasurement = obj.layoutMeasurement;
      obj2 = { height: first1 };
      obj3 = { height };
      if (contentOffset === undefined) {
        contentOffset = { y: 0 };
      }
      if (layoutMeasurement.height + contentOffset.y >= obj.contentSize.height - 5) {
        if (setAllContentSeen != null) {
          tmp7(true);
        }
      } else if (setAllContentSeen != null) {
        tmp4(false);
      }
    }
  };
  const items7 = [first, tmp14, first1, setAllContentSeen];
  cResult[0] = first;
  cResult[1] = tmp14;
  cResult[2] = first1;
  cResult[3] = setAllContentSeen;
  cResult[4] = fn;
  cResult[5] = items7;
  tmp17 = items7;
  tmp16 = fn;
}) : (function OAuth2AuthorizeContent(onScroll) {
  let appDetails;
  let body;
  let bottom;
  let centerContent;
  let closure_4;
  let first;
  let first1;
  let first2;
  let footer;
  let hasContentBackground;
  let header;
  let items1;
  let items2;
  let items3;
  let items5;
  let items6;
  let items7;
  let left;
  let obj4;
  let obscured;
  let right;
  let setAllContentSeen;
  let tmp3Result2;
  ({ header, footer, appDetails, setAllContentSeen } = onScroll);
  onScroll = onScroll.onScroll;
  first = undefined;
  closure_4 = undefined;
  first1 = undefined;
  metroRequire = undefined;
  metroImportDefault = undefined;
  metroImportAll = undefined;
  ({ body, centerContent, hasContentBackground, obscured } = onScroll);
  let tmp = closure_10();
  let obj = react;
  const ref = react.useRef(null);
  const tmp4 = dependencyMap;
  size = useWindowDimensionsDefault();
  ({ left, right, bottom } = useSafeAreaInsetsDefault());
  useSafeAreaInsetsDefault();
  [first, closure_4] = react.useState(-1);
  [first1, metroRequire] = react.useState(-1);
  [first2, metroImportDefault] = react.useState(-1);
  let tmp13 = first >= 0 && first1 >= 0;
  if (tmp13) {
    tmp13 = null == footer || first2 >= 0;
  }
  metroImportAll = tmp13;
  const items = [first, tmp13, first1, setAllContentSeen];
  const layoutEffect = obj.useLayoutEffect(() => {
    let obj2;
    let obj3;
    const tmp = closure_8;
    if (tmp) {
      const obj = { layoutMeasurement: obj2, contentSize: obj3 };
      let contentOffset = obj.contentOffset;
      const layoutMeasurement = obj.layoutMeasurement;
      obj2 = { height: first1 };
      obj3 = { height };
      if (contentOffset === undefined) {
        contentOffset = { y: 0 };
      }
      if (layoutMeasurement.height + contentOffset.y >= obj.contentSize.height - 5) {
        if (setAllContentSeen != null) {
          tmp7(true);
        }
      } else if (setAllContentSeen != null) {
        tmp4(false);
      }
    }
  }, items);
  let obj2 = { style: items1, children: items7 };
  items1 = [tmp.fill, { marginBottom: bottom }];
  let obj3 = {
    style: items2,
    contentContainerStyle: tmp5 ? tmp.scrollViewContentLandscape : tmp.scrollViewContentPortrait,
    ref,
    onContentSizeChange(arg0, arg1) {
      const current = ref.current;
      if (current != null) {
        current.scrollTo({ y: 0 });
      }
      closure_4(arg1);
    },
    scrollEventThrottle: 16,
    onLayout(nativeEvent) {
      closure_6(nativeEvent.nativeEvent.layout.height);
    },
    onScroll(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      let contentOffset = nativeEvent.contentOffset;
      const layoutMeasurement = nativeEvent.layoutMeasurement;
      if (contentOffset === undefined) {
        contentOffset = { y: 0 };
      }
      if (layoutMeasurement.height + contentOffset.y >= nativeEvent.contentSize.height - 5) {
        if (setAllContentSeen != null) {
          tmp(true);
        }
      }
      if (onScroll != null) {
        onScroll(nativeEvent);
      }
    },
    centerContent,
    children: React4(tmp3Result2, obj4)
  };
  items2 = [tmp.scrollView, { paddingLeft: left, paddingRight: right }];
  let tmp18Result = null;
  obj4 = { obscured, children: items3 };
  const tmp3Result = KeyboardAwareViewDefault;
  const tmp19 = metroRequire;
  tmp3Result2 = ObscuredSurfaceDefault;
  if (null != header) {
    const obj5 = { style: tmp.header, children: header };
    tmp18Result = tmp18(hasOwnProperty, obj5);
  }
  items3 = [tmp18Result, ];
  const items4 = [tmp.bodyContainer, , ];
  let prop = null;
  if (hasContentBackground) {
    prop = tmp.bodyContainerBackground;
  }
  items4[1] = prop;
  const obj6 = { style: items4, children: items5 };
  items4[2] = size.width > size.height ? { flex: 1 } : {};
  items5 = [body, ];
  let tmp16Result = null;
  if (null != appDetails) {
    const obj7 = { children: items6 };
    const obj8 = { style: tmp.separator };
    items6 = [metroImportDefault(hasOwnProperty, obj8), ];
    const obj9 = { children: appDetails };
    items6[1] = metroImportDefault(hasOwnProperty, obj9);
    tmp16Result = tmp16(metroImportAll, obj7);
  }
  items5[1] = tmp16Result;
  items3[1] = React4(hasOwnProperty, obj6);
  items7 = [metroImportDefault(tmp19, obj3), ];
  let tmp18Result2 = null;
  if (null != footer) {
    const obj10 = {
      onLayout(nativeEvent) {
          closure_7(nativeEvent.nativeEvent.layout.height);
        },
      style: tmp.footerPortrait,
      children: footer
    };
    tmp18Result2 = tmp18(tmp23, obj10);
  }
  items7[1] = tmp18Result2;
  return React4(tmp3Result, obj2);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/oauth2/native/OAuth2AuthorizeContent.tsx");

export default tmp5;
