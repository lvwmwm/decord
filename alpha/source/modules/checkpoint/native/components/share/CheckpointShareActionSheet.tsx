// Module ID: 13237
// Function ID: 13238
// Name: CheckpointShareActionSheet
// Dependencies: [32, 19, 17, 5303, 21, 6078, 3090, 5005, 587, 558, 576, 1497, 5334, 6075, 13238, 5247, 7358, 7308, 1125, 6971, 13191, 7047, 6963, 2]

// Module 13237 (CheckpointShareActionSheet)
import nativeDefault from "native" /* 587 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1497 */;
import _modDef3090 from "module_3090" /* 3090 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import ActionSheetConstants from "ActionSheetConstants" /* 5303 */;
import checkpoint_CheckpointMessageComponentUtils from "checkpoint/CheckpointMessageComponentUtils" /* 6075 */;
import CheckpointCardTypes from "CheckpointCardTypes" /* 6078 */;
import ForwardingIconDefault from "ForwardingIcon" /* 13191 */;
import CheckpointShareCardDefault from "CheckpointShareCard" /* 13238 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj3;
let obj4;
let obj5;
let size;
let _slicedToArray = _slicedToArray_mod;
({ ScrollView: hasOwnProperty, View: metroRequire } = react_native);
const ACTION_SHEET_MAX_WIDTH = ActionSheetConstants.ACTION_SHEET_MAX_WIDTH;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let obj = {};
obj[CheckpointCardTypes.CheckpointCardTypes.DEFAULT] = _modDef3090.DZQzJn;
obj[CheckpointCardTypes.CheckpointCardTypes.CHARACTER_ONLY] = _modDef3090.tUU3fe;
obj[CheckpointCardTypes.CheckpointCardTypes.STATS_ONLY] = _modDef3090.e2UHGT;
let createStyles = createStyles_mod;
let obj2 = { carousel: obj3, carouselContent: { alignItems: "center", gap: 48 }, pageDots: obj4, pageDot: size, activePageDot: obj5 };
obj3 = { marginHorizontal: -nativeDefault.space.PX_16, height: 284 };
createStyles = createStyles.createStyles;
obj4 = { flexDirection: "row", justifyContent: "center", gap: nativeDefault.space.PX_16 };
size = { width: 8, height: 8, borderRadius: nativeDefault.radii.round, borderWidth: 1, borderColor: nativeDefault.colors.ICON_MUTED };
obj5 = { borderColor: nativeDefault.colors.ICON_STRONG, backgroundColor: nativeDefault.colors.ICON_STRONG };
let closure_11 = createStyles(obj2);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointShareActionSheet(character) {
  let closure_2;
  let first;
  let first1;
  let intl;
  let intl3;
  let items2;
  let items6;
  let obj9;
  let stats;
  let tmp12;
  let tmp = character;
  let tmp2 = dependencyMap;
  obj = character(576);
  const cResult = obj.c(52);
  character = character.character;
  ({ stats, onForward: importDefault } = character);
  const tmp4 = closure_11();
  dependencyMap = tmp4;
  const bound = Math.min(useWindowDimensionsDefault().width, items6);
  let obj2 = first1;
  const ref = first1.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { disallowInterruption: true };
    cResult[0] = obj3;
    first = obj3;
  } else {
    first = cResult[0];
  }
  const tmpResult = tmp(5334);
  const nativeGesture = tmpResult.useNativeGesture(first);
  let tmp10 = ref(obj2.useState(0), 2);
  first1 = tmp10[0];
  let closure_5 = tmp10[1];
  if (cResult[1] !== stats) {
    const tmpResult3 = tmp(6075);
    const stats2 = tmpResult3.toCheckpointMessageComponentData(tmp(6078).CheckpointCardTypes.STATS_ONLY, null, stats).stats;
    let result = null;
    if (null != stats2) {
      const tmpResult4 = tmp(6075);
      result = tmpResult4.transformCheckpoint2026StatsToRowGeneratedComponent(stats2);
    }
    cResult[1] = stats;
    cResult[2] = result;
    tmp12 = result;
  } else {
    tmp12 = cResult[2];
  }
  stats = tmp12;
  if (null != character) {
    let tmp15;
    let tmp18;
    let tmp22;
    let tmp26;
    if (null != tmp12) {
      const items = [tmp(6078).CheckpointCardTypes.CHARACTER_ONLY, tmp(6078).CheckpointCardTypes.DEFAULT, tmp(6078).CheckpointCardTypes.STATS_ONLY];
      items6 = items;
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function x(item) {
        obj = character(closure_2[14]);
        return obj.getCheckpointShareCardSize(item).width;
      };
      cResult[3] = fn;
      tmp15 = fn;
    } else {
      tmp15 = cResult[3];
    }
    const mapped = items6.map(tmp15);
    let num4 = mapped[0];
    if (num4 == null) {
      num4 = 0;
    }
    let num6 = mapped[mapped.length - 1];
    if (num6 == null) {
      num6 = 0;
    }
    const mapped1 = mapped.map((item, index) => {
      const substr = mapped.slice(0, index);
      return substr.reduce((acc, item) => acc + item + 48, 0) + (item - num4) / 2;
    });
    closure_11 = tmp17;
    function scrollToIndex(arg0) {

    }
    const ActionSheet = tmp(7358).ActionSheet;
    const _Symbol2 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { title: intl.string(tmp(1125).t.RDE0Sc) };
      const BottomSheetTitleHeader = tmp(7308).BottomSheetTitleHeader;
      intl = tmp(1125).intl;
      const tmp20 = mapped(BottomSheetTitleHeader, obj4);
      cResult[4] = tmp20;
      tmp18 = tmp20;
    } else {
      tmp18 = cResult[4];
    }
    const _Symbol3 = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(1125).intl;
      const stringResult = intl2.string(_modDef3090.KXDPot);
      cResult[5] = stringResult;
      tmp22 = stringResult;
    } else {
      tmp22 = cResult[5];
    }
    if (null != items6[first1]) {
      ({ text: intl3.string(mapped1[items6[first1]]) });
      intl3 = tmp(1125).intl;
    }
    const _Symbol4 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [{ name: "increment" }, { name: "decrement" }];
      cResult[6] = items1;
      tmp26 = items1;
    } else {
      tmp26 = cResult[6];
    }
    const GestureDetector = tmp(5334).GestureDetector;
    const result1 = (bound - num4) / 2;
    const result2 = (bound - num6) / 2;
    if (cResult[7] === result1) {
      let tmp31;
      if (cResult[8] === result2) {
        tmp31 = cResult[9];
      }
      if (cResult[10] === tmp4.carouselContent) {
        let tmp32;
        if (cResult[11] === tmp31) {
          tmp32 = cResult[12];
        }
        if (cResult[13] === character) {
          let tmp33;
          if (cResult[14] === tmp12) {
            tmp33 = cResult[15];
          }
          function handleMomentumScrollEnd(nativeEvent) {
            let closure_0;
            const x = nativeEvent.nativeEvent.contentOffset.x;
            let c1 = 0;
            const item = mapped1.forEach((item, index) => {
              const absolute = Math.abs(item - closure_0);
              if (absolute < Math.abs(mapped1[c1] - closure_0)) {
                c1 = index;
              }
            });
            closure_5(c1);
          }
          const mapped2 = items6.map(tmp33);
          if (cResult[16] === closure_5) {
            if (cResult[17] === handleMomentumScrollEnd) {
              if (cResult[18] === ref) {
                if (cResult[19] === mapped1) {
                  if (cResult[20] === tmp4.carousel) {
                    if (cResult[21] === tmp32) {
                      let tmp35;
                      if (cResult[22] === mapped2) {
                        tmp35 = cResult[23];
                      }
                      if (cResult[24] === GestureDetector) {
                        if (cResult[25] === nativeGesture) {
                          let tmp38;
                          if (cResult[26] === tmp35) {
                            tmp38 = cResult[27];
                          }
                          function handleAccessibilityAction(nativeEvent) {
                            const actionName = nativeEvent.nativeEvent.actionName;
                            if ("increment" === actionName) {
                              const sum = first1 + 1;
                              if (typeof scrollToIndex === "function") {
                                const tmp10 = sum < 0 || sum >= items6.length;
                                if (!tmp10) {
                                  closure_5(sum);
                                  const current2 = ref.current;
                                  if (current2 != null) {
                                    obj = { x: mapped1[sum], animated: true };
                                    current2.scrollTo(obj);
                                  }
                                }
                              } else {
                                throw new TypeError("Trying to call a non-function");
                              }
                            } else if ("decrement" === actionName) {
                              const diff = first1 - 1;
                              if (typeof scrollToIndex === "function") {
                                const tmp = diff < 0 || diff >= items6.length;
                                if (!tmp) {
                                  closure_5(diff);
                                  const current = ref.current;
                                  if (current != null) {
                                    const obj2 = { x: mapped1[diff], animated: true };
                                    current.scrollTo(obj2);
                                  }
                                }
                              } else {
                                throw new TypeError("Trying to call a non-function");
                              }
                            }
                          }
                          if (cResult[28] === stats) {
                            if (cResult[29] === handleAccessibilityAction) {
                              if (cResult[30] === tmp26) {
                                if (cResult[31] === tmp38) {
                                  if (cResult[32] === tmp22) {
                                    let tmp41;
                                    if (cResult[33] === tmp24) {
                                      tmp41 = cResult[34];
                                    }
                                    if (cResult[35] === items6) {
                                      if (cResult[36] === first1) {
                                        if (cResult[37] === tmp4.activePageDot) {
                                          if (cResult[38] === tmp4.pageDot) {
                                            let tmp44;
                                            let tmp48;
                                            let tmp47;
                                            if (cResult[39] === tmp4.pageDots) {
                                              tmp44 = cResult[40];
                                            }
                                            const _Symbol5 = Symbol;
                                            if (cResult[41] === Symbol.for("react.memo_cache_sentinel")) {
                                              const intl4 = tmp(1125).intl;
                                              const stringResult1 = intl4.string(tmp(1125).t.I3ltXO);
                                              const obj6 = { IconComponent: ForwardingIconDefault };
                                              const TableRowIcon = tmp(6971).TableRowIcon;
                                              const tmp51 = mapped(TableRowIcon, obj6);
                                              cResult[41] = stringResult1;
                                              cResult[42] = tmp51;
                                              tmp48 = tmp51;
                                              tmp47 = stringResult1;
                                            } else {
                                              tmp47 = cResult[41];
                                              tmp48 = cResult[42];
                                            }
                                            function handleForward() {
                                              if (null != closure_11) {
                                                obj = ActionSheetActionCreatorsDefault;
                                                obj.hideActionSheet();
                                                importDefault(tmp);
                                              }
                                            }
                                            if (cResult[43] === handleForward) {
                                              let tmp53;
                                              if (cResult[44] === null == items6[first1]) {
                                                tmp53 = cResult[45];
                                              }
                                              if (cResult[46] === ActionSheet) {
                                                if (cResult[47] === tmp41) {
                                                  if (cResult[48] === tmp44) {
                                                    if (cResult[49] === tmp53) {
                                                      let tmp56;
                                                      if (cResult[50] === tmp18) {
                                                        tmp56 = cResult[51];
                                                      }
                                                      return tmp56;
                                                    }
                                                  }
                                                }
                                              }
                                              const obj7 = { startExpanded: true, header: tmp18, children: items2 };
                                              items2 = [tmp41, tmp44, tmp53];
                                              const tmp58 = num4(ActionSheet, obj7);
                                              cResult[46] = ActionSheet;
                                              cResult[47] = tmp41;
                                              cResult[48] = tmp44;
                                              cResult[49] = tmp53;
                                              cResult[50] = tmp18;
                                              cResult[51] = tmp58;
                                              tmp56 = tmp58;
                                            }
                                            const obj8 = { hasIcons: true, children: mapped(tmp(6963).TableRow, obj9) };
                                            const TableRowGroup = tmp(7047).TableRowGroup;
                                            obj9 = { label: tmp47, icon: tmp48, onPress: handleForward, disabled: null == items6[first1] };
                                            const tmp55 = mapped(TableRowGroup, obj8);
                                            cResult[43] = handleForward;
                                            cResult[44] = null == items6[first1];
                                            cResult[45] = tmp55;
                                            tmp53 = tmp55;
                                          }
                                        }
                                      }
                                    }
                                    let tmp45 = items6.length > 1;
                                    if (tmp45) {
                                      const obj10 = {
                                        style: tmp4.pageDots,
                                        accessibilityElementsHidden: true,
                                        importantForAccessibility: "no-hide-descendants",
                                        children: items6.map((item, index) => {
                                                                              const style = [closure_2.pageDot, ];
                                                                              let activePageDot = index === first1;
                                                                              const tmp = metroImportAll;
                                                                              const tmp2 = metroRequire;
                                                                              if (activePageDot) {
                                                                                activePageDot = closure_2.activePageDot;
                                                                              }
                                                                              style[1] = activePageDot;
                                                                              return tmp(tmp2, { style }, item);
                                                                            })
                                      };
                                      tmp45 = mapped(tmp21, obj10);
                                    }
                                    cResult[35] = items6;
                                    cResult[36] = first1;
                                    cResult[37] = tmp4.activePageDot;
                                    cResult[38] = tmp4.pageDot;
                                    cResult[39] = tmp4.pageDots;
                                    cResult[40] = tmp45;
                                    tmp44 = tmp45;
                                  }
                                }
                              }
                            }
                          }
                          const obj11 = { accessible: true, accessibilityRole: "adjustable", accessibilityLabel: tmp22, accessibilityValue: tmp24, accessibilityActions: tmp26, onAccessibilityAction: handleAccessibilityAction, children: tmp38 };
                          const tmp43 = mapped(stats, obj11);
                          cResult[28] = stats;
                          cResult[29] = handleAccessibilityAction;
                          cResult[30] = tmp26;
                          cResult[31] = tmp38;
                          cResult[32] = tmp22;
                          cResult[33] = tmp24;
                          cResult[34] = tmp43;
                          tmp41 = tmp43;
                        }
                      }
                      const obj12 = { gesture: nativeGesture, children: tmp35 };
                      const tmp40 = mapped(GestureDetector, obj12);
                      cResult[24] = GestureDetector;
                      cResult[25] = nativeGesture;
                      cResult[26] = tmp35;
                      cResult[27] = tmp40;
                      tmp38 = tmp40;
                    }
                  }
                }
              }
            }
          }
          const obj13 = { ref, horizontal: true, nestedScrollEnabled: true, style: tmp28, contentContainerStyle: tmp32, showsHorizontalScrollIndicator: false, decelerationRate: "fast", snapToOffsets: mapped1, onMomentumScrollEnd: handleMomentumScrollEnd, children: mapped2 };
          const tmp37 = mapped(closure_5, obj13);
          cResult[16] = closure_5;
          cResult[17] = handleMomentumScrollEnd;
          cResult[18] = ref;
          cResult[19] = mapped1;
          cResult[20] = tmp4.carousel;
          cResult[21] = tmp32;
          cResult[22] = mapped2;
          cResult[23] = tmp37;
          tmp35 = tmp37;
        }
        const fn2 = function $(cardType) {
          obj = { cardType, character, stats };
          return metroImportAll(CheckpointShareCardDefault, obj, cardType);
        };
        cResult[13] = character;
        cResult[14] = tmp12;
        cResult[15] = fn2;
        tmp33 = fn2;
      }
      const items3 = [tmp4.carouselContent, tmp31];
      cResult[10] = tmp4.carouselContent;
      cResult[11] = tmp31;
      cResult[12] = items3;
      tmp32 = items3;
    }
    const obj14 = { paddingLeft: result1, paddingRight: result2 };
    cResult[7] = result1;
    cResult[8] = result2;
    cResult[9] = obj14;
    tmp31 = obj14;
  }
  if (null != character) {
    const items4 = [tmp(6078).CheckpointCardTypes.CHARACTER_ONLY];
    items6 = items4;
  } else if (null != tmp12) {
    const items5 = [tmp(6078).CheckpointCardTypes.STATS_ONLY];
    items6 = items5;
  } else {
    items6 = [];
  }
}) : (function CheckpointShareActionSheet(character) {
  let BottomSheetTitleHeader;
  let GestureDetector;
  let TableRow;
  let TableRowIcon;
  let closure_3;
  let closure_6;
  let first;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items2;
  let items3;
  let items4;
  let obj11;
  let obj12;
  let obj3;
  let obj6;
  let obj7;
  let tmp18;
  character = character.character;
  let stats = character.stats;
  const onForward = character.onForward;
  let ref;
  first = undefined;
  closure_6 = undefined;
  let memo;
  let items7;
  let mapped;
  let num;
  let mapped1;
  let closure_12;
  let tmp = mapped1();
  _slicedToArray = tmp;
  let tmp2 = stats;
  const bound = Math.min(stats(onForward[11])().width, memo);
  ref = ref.useRef(null);
  obj = character(onForward[12]);
  const nativeGesture = obj.useNativeGesture({ disallowInterruption: true });
  [first, closure_6] = ref.useState(0);
  const items = [stats];
  memo = ref.useMemo(() => {
    obj = checkpoint_CheckpointMessageComponentUtils;
    stats = obj.toCheckpointMessageComponentData(CheckpointCardTypes.CheckpointCardTypes.STATS_ONLY, null, stats).stats;
    let result = null;
    if (null != stats) {
      const tmpResult = checkpoint_CheckpointMessageComponentUtils;
      result = tmpResult.transformCheckpoint2026StatsToRowGeneratedComponent(stats);
    }
    return result;
  }, items);
  if (null != character) {
    if (null != memo) {
      const items1 = [tmp6(tmp3[5]).CheckpointCardTypes.CHARACTER_ONLY, tmp6(tmp3[5]).CheckpointCardTypes.DEFAULT, tmp6(tmp3[5]).CheckpointCardTypes.STATS_ONLY];
      items7 = items1;
    }
    mapped = items7.map((item) => {
      obj = character(onForward[14]);
      return obj.getCheckpointShareCardSize(item).width;
    });
    num = mapped[0];
    if (num == null) {
      num = 0;
    }
    let num3 = mapped[mapped.length - 1];
    if (num3 == null) {
      num3 = 0;
    }
    mapped1 = mapped.map((item, index) => {
      const substr = mapped.slice(0, index);
      return substr.reduce((acc, item) => acc + item + 48, 0) + (item - num) / 2;
    });
    closure_12 = tmp14;
    let obj2 = { startExpanded: true, header: items7(BottomSheetTitleHeader, obj3), children: items4 };
    const ActionSheet = tmp6(tmp3[16]).ActionSheet;
    obj3 = { title: intl.string(character(onForward[18]).t.RDE0Sc) };
    BottomSheetTitleHeader = tmp6(tmp3[17]).BottomSheetTitleHeader;
    intl = tmp6(tmp3[18]).intl;
    const obj4 = {
      accessible: true,
      accessibilityRole: "adjustable",
      accessibilityLabel: intl2.string(tmp2(onForward[6]).KXDPot),
      accessibilityValue: tmp18,
      accessibilityActions: items2,
      onAccessibilityAction: function handleAccessibilityAction(nativeEvent) {
          const actionName = nativeEvent.nativeEvent.actionName;
          if ("increment" === actionName) {
            const sum = first + 1;
            const tmp9 = sum < 0 || sum >= items7.length;
            if (!tmp9) {
              closure_6(sum);
              const current2 = ref.current;
              if (current2 != null) {
                obj = { x: mapped1[sum], animated: true };
                current2.scrollTo(obj);
              }
            }
          } else if ("decrement" === actionName) {
            const diff = first - 1;
            const tmp2 = diff < 0 || diff >= items7.length;
            if (!tmp2) {
              closure_6(diff);
              const current = ref.current;
              if (current != null) {
                const obj2 = { x: mapped1[diff], animated: true };
                current.scrollTo(obj2);
              }
            }
          }
        },
      children: items7(GestureDetector, obj6)
    };
    intl2 = tmp6(tmp3[18]).intl;
    tmp18 = undefined;
    const tmp15 = mapped;
    if (null != items7[first]) {
      const obj5 = { text: intl3.string(num[items7[first]]) };
      intl3 = tmp6(tmp3[18]).intl;
      tmp18 = obj5;
    }
    items2 = [{ name: "increment" }, { name: "decrement" }];
    obj6 = { gesture: nativeGesture, children: items7(first, obj7) };
    obj7 = {
      ref,
      horizontal: true,
      nestedScrollEnabled: true,
      style: tmp.carousel,
      contentContainerStyle: items3,
      showsHorizontalScrollIndicator: false,
      decelerationRate: "fast",
      snapToOffsets: mapped1,
      onMomentumScrollEnd: function handleMomentumScrollEnd(nativeEvent) {
          let closure_0;
          const x = nativeEvent.nativeEvent.contentOffset.x;
          let c1 = 0;
          const item = mapped1.forEach((item, index) => {
            const absolute = Math.abs(item - closure_0);
            if (absolute < Math.abs(mapped1[c1] - closure_0)) {
              c1 = index;
            }
          });
          closure_6(c1);
        },
      children: items7.map((cardType) => {
          obj = { cardType, character, stats: memo };
          return metroImportAll(CheckpointShareCardDefault, obj, cardType);
        })
    };
    items3 = [tmp.carouselContent, ];
    const obj8 = { paddingLeft: (bound - num) / 2, paddingRight: (bound - num3) / 2 };
    items3[1] = obj8;
    GestureDetector = tmp6(tmp3[12]).GestureDetector;
    items4 = [items7(tmp17, obj4), , ];
    let tmp16Result = items7.length > 1;
    if (tmp16Result) {
      const obj9 = {
        style: tmp.pageDots,
        accessibilityElementsHidden: true,
        importantForAccessibility: "no-hide-descendants",
        children: items7.map((item, index) => {
              const style = [closure_3.pageDot, ];
              let activePageDot = index === first;
              const tmp = metroImportAll;
              const tmp2 = metroRequire;
              if (activePageDot) {
                activePageDot = closure_3.activePageDot;
              }
              style[1] = activePageDot;
              return tmp(tmp2, { style }, item);
            })
      };
      tmp16Result = tmp16(tmp17, obj9);
    }
    items4[1] = tmp16Result;
    const obj10 = { hasIcons: true, children: items7(TableRow, obj11) };
    const TableRowGroup = tmp6(tmp3[21]).TableRowGroup;
    obj11 = {
      label: intl4.string(character(onForward[18]).t.I3ltXO),
      icon: items7(TableRowIcon, obj12),
      onPress: function handleForward() {
          if (null != closure_12) {
            obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
            onForward(tmp);
          }
        },
      disabled: null == items7[first]
    };
    TableRow = tmp6(tmp3[22]).TableRow;
    intl4 = tmp6(tmp3[18]).intl;
    obj12 = { IconComponent: tmp2(onForward[20]) };
    TableRowIcon = tmp6(tmp3[19]).TableRowIcon;
    items4[2] = items7(TableRowGroup, obj10);
    return tmp15(ActionSheet, obj2);
  }
  if (null != character) {
    const items5 = [tmp6(tmp3[5]).CheckpointCardTypes.CHARACTER_ONLY];
    items7 = items5;
  } else if (null != memo) {
    const items6 = [tmp6(tmp3[5]).CheckpointCardTypes.STATS_ONLY];
    items7 = items6;
  } else {
    items7 = [];
  }
});
size = size_mod;
let result = size.fileFinishedImporting("modules/checkpoint/native/components/share/CheckpointShareActionSheet.tsx");

export default tmp5;
