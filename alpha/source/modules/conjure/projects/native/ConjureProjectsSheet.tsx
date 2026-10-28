// Module ID: 14403
// Function ID: 14404
// Name: ConjureProjectsSheet
// Dependencies: [32, 19, 17, 10749, 21, 5004, 587, 558, 576, 14394, 504, 1125, 3863, 6824, 12210, 6916, 10856, 6939, 14404, 14407, 7023, 5270, 5280, 10757, 1630, 9597, 5299, 7991, 10901, 7284, 7181, 5305, 7334, 2]

// Module 14403 (ConjureProjectsSheet)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl7 from "intl" /* 1125 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import _modDef3863 from "module_3863" /* 3863 */;
import Text_Text from "Text/Text" /* 5270 */;
import components_Button_Button from "components/Button/Button" /* 5280 */;
import useMountEffectDefault from "useMountEffect" /* 5299 */;
import BottomSheetModal from "BottomSheetModal" /* 5305 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 6916 */;
import TableRow2 from "TableRow" /* 6939 */;
import TableRowGroup2 from "TableRowGroup" /* 7023 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 7284 */;
import ActionSheet2 from "ActionSheet" /* 7334 */;
import useConjureEntryPointPlacementDefault from "useConjureEntryPointPlacement" /* 9597 */;
import ConjureActionCreators from "ConjureActionCreators" /* 10757 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 10856 */;
import AssetRegistryDefault from "AssetRegistry" /* 10901 */;
import ConjureProjectIcon from "ConjureProjectIcon" /* 12210 */;
import confirmConjureYouBarPinDefault from "confirmConjureYouBarPin" /* 14404 */;
import useConjureOwnProjectListStateDefault from "useConjureOwnProjectListState" /* 14407 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10749 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5004 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const ConjureProjectIconDefault = ConjureProjectIcon;

let metroImportAll;
let metroImportDefault;
function confirmPin() {
  confirmConjureYouBarPinDefault(true);
}
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles((arg0) => {
  let size1;
  const obj = { scrollContent: { gap: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_16 + arg0 }, state: { alignItems: "center", gap: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_24 }, trailingIndicator: size, unreadDot: size1 };
  ({ gap: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_16 + arg0 });
  ({ alignItems: "center", gap: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_24 });
  size = { width: nativeDefault.space.PX_20, height: nativeDefault.space.PX_20, alignItems: "center", justifyContent: "center" };
  size1 = { width: nativeDefault.space.PX_8, height: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
  return obj;
});
const memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ProjectRow(project) {
  let first;
  let tmp35Result;
  let tmp35Result2;
  let tmp8;
  let tmp9;
  const tmp = project;
  const obj = project(576);
  const cResult = obj.c(34);
  project = project.project;
  const tmp4 = closure_9(0);
  const obj2 = project(14394);
  const conjureHomeProjectState = obj2.useConjureHomeProjectState(project.id);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjurePublishStatusStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== project.id) {
    const fn = function s() {
      const publishStatus = ConjurePublishStatusStore.getPublishStatus(project.id);
      let publishState;
      if (publishStatus != null) {
        publishState = publishStatus.publishState;
      }
      if (publishState == null) {
        publishState = null;
      }
      return publishState;
    };
    const items1 = [project.id];
    cResult[1] = project.id;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp9 = items1;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp8, tmp9);
  if (cResult[4] === stateFromStores) {
    let tmp11;
    let stringResult1;
    if (cResult[5] === conjureHomeProjectState) {
      tmp11 = cResult[6];
    }
    if (cResult[7] === project) {
      if (cResult[8] === tmp11) {
        let tmp13;
        let tmp14;
        let tmp23;
        if (cResult[9] === conjureHomeProjectState) {
          tmp13 = cResult[10];
          tmp14 = cResult[11];
        }
        if (cResult[12] !== conjureHomeProjectState) {
          let stringResult = null;
          if ("unread" === conjureHomeProjectState) {
            const intl4 = tmp(1125).intl;
            stringResult = intl4.string(_modDef3863["N+3Pzk"]);
          }
          cResult[12] = conjureHomeProjectState;
          cResult[13] = stringResult;
          tmp23 = stringResult;
        } else {
          tmp23 = cResult[13];
        }
        if (cResult[14] === project.name) {
          if (cResult[15] === tmp14) {
            let obj8;
            let tmp29;
            let tmp33;
            if (cResult[16] === tmp23) {
              obj8 = cResult[17];
            }
            const joined = obj8.join(", ");
            if (cResult[18] !== project) {
              const obj3 = { project, size: "list" };
              const tmp32 = closure_7(ConjureProjectIconDefault, obj3);
              cResult[18] = project;
              cResult[19] = tmp32;
              tmp29 = tmp32;
            } else {
              tmp29 = cResult[19];
            }
            if (cResult[20] === tmp13) {
              if (cResult[21] === conjureHomeProjectState) {
                let tmp38;
                if (cResult[22] === tmp4) {
                  tmp33 = cResult[23];
                }
                if (cResult[24] !== project.id) {
                  const fn2 = function k() {
                    return openConjureHomeScreenDefault(project.id);
                  };
                  cResult[24] = project.id;
                  cResult[25] = fn2;
                  tmp38 = fn2;
                } else {
                  tmp38 = cResult[25];
                }
                if (cResult[26] === joined) {
                  if (cResult[27] === tmp13) {
                    if (cResult[28] === project.name) {
                      if (cResult[29] === tmp33) {
                        if (cResult[30] === tmp38) {
                          if (cResult[31] === tmp28) {
                            let tmp39;
                            if (cResult[32] === tmp29) {
                              tmp39 = cResult[33];
                            }
                            return tmp39;
                          }
                        }
                      }
                    }
                  }
                }
                const obj4 = { label: project.name, subLabel: tmp28, accessibilityLabel: joined, icon: tmp29, trailing: tmp33, disabled: tmp13, onPress: tmp38 };
                const tmp41 = closure_7(tmp(6939).TableRow, obj4);
                cResult[26] = joined;
                cResult[27] = tmp13;
                cResult[28] = project.name;
                cResult[29] = tmp33;
                cResult[30] = tmp38;
                cResult[31] = tmp28;
                cResult[32] = tmp29;
                cResult[33] = tmp41;
                tmp39 = tmp41;
              }
            }
            if (!tmp13) {
              cResult[20] = tmp13;
              cResult[21] = conjureHomeProjectState;
              cResult[22] = tmp4;
              cResult[23] = tmp35Result2;
              tmp33 = tmp35Result2;
            }
            const obj5 = { style: tmp4.trailingIndicator, children: tmp35Result };
            if ("unread" === conjureHomeProjectState) {
              const obj6 = { style: tmp4.unreadDot };
              tmp35Result = tmp35(tmp36, obj6);
            } else {
              tmp35Result = tmp35(tmp(6916).ActivityIndicator, { size: "small" });
            }
            tmp35Result2 = closure_7(View, obj5);
          }
        }
        const items2 = [project.name, tmp14, tmp23];
        const found = items2.filter((item) => null != item && "" !== item);
        cResult[14] = project.name;
        cResult[15] = tmp14;
        cResult[16] = tmp23;
        cResult[17] = found;
        obj8 = found;
      }
    }
    const tmpResult4 = tmp(14394);
    const result = tmpResult4.conjureProjectLastActivityTime(project);
    if ("deleting" === conjureHomeProjectState) {
      const intl3 = tmp(1125).intl;
      stringResult1 = intl3.string(_modDef3863.Yh5pAc);
    } else if ("in_progress" === conjureHomeProjectState) {
      const intl2 = tmp(1125).intl;
      stringResult1 = intl2.string(_modDef3863["Y8pS+n"]);
    } else {
      let relativeTimestamp = null;
      if (null != result) {
        const tmpResult5 = tmp(6824);
        relativeTimestamp = tmpResult5.getRelativeTimestamp(result, false);
      }
      const items3 = [relativeTimestamp, ];
      let stringResult2 = null;
      if (tmp11) {
        const intl = tmp(1125).intl;
        stringResult2 = intl.string(_modDef3863.CSAaT0);
      }
      items3[1] = stringResult2;
      const found1 = items3.filter((item) => null != item);
      stringResult1 = found1.join(" \u00B7 ");
    }
    cResult[7] = project;
    cResult[8] = tmp11;
    cResult[9] = conjureHomeProjectState;
    cResult[10] = "deleting" === conjureHomeProjectState;
    cResult[11] = stringResult1;
    tmp14 = stringResult1;
    tmp13 = tmp16;
  }
  const tmpResult6 = tmp(14394);
  const result1 = tmpResult6.conjureHomeProjectShowsDraft(conjureHomeProjectState, stateFromStores);
  cResult[4] = stateFromStores;
  cResult[5] = conjureHomeProjectState;
  cResult[6] = result1;
  tmp11 = result1;
}) : (function ProjectRow(project) {
  let stringResult;
  let tmp19Result;
  let tmp19Result2;
  let tmp20;
  project = project.project;
  const tmp = closure_9(0);
  const obj = project(14394);
  const conjureHomeProjectState = obj.useConjureHomeProjectState(project.id);
  const items = [ConjurePublishStatusStore];
  const items1 = [project.id];
  const obj2 = project(504);
  const stateFromStores = obj2.useStateFromStores(items, () => {
    const publishStatus = ConjurePublishStatusStore.getPublishStatus(project.id);
    let publishState;
    if (publishStatus != null) {
      publishState = publishStatus.publishState;
    }
    if (publishState == null) {
      publishState = null;
    }
    return publishState;
  }, items1);
  const obj3 = project(14394);
  const result = obj3.conjureHomeProjectShowsDraft(conjureHomeProjectState, stateFromStores);
  const obj4 = project(14394);
  const result1 = obj4.conjureProjectLastActivityTime(project);
  if ("deleting" === conjureHomeProjectState) {
    const intl3 = tmp2(1125).intl;
    stringResult = intl3.string(_modDef3863.Yh5pAc);
  } else if ("in_progress" === conjureHomeProjectState) {
    const intl2 = tmp2(1125).intl;
    stringResult = intl2.string(_modDef3863["Y8pS+n"]);
  } else {
    let relativeTimestamp = null;
    if (null != result1) {
      const tmp2Result = project(6824);
      relativeTimestamp = tmp2Result.getRelativeTimestamp(result1, false);
    }
    const items2 = [relativeTimestamp, ];
    let stringResult1 = null;
    if (result) {
      const intl = tmp2(1125).intl;
      stringResult1 = intl.string(_modDef3863.CSAaT0);
    }
    items2[1] = stringResult1;
    const found = items2.filter((item) => null != item);
    stringResult = found.join(" \u00B7 ");
  }
  const items3 = [project.name, stringResult, ];
  let stringResult2 = null;
  if ("unread" === conjureHomeProjectState) {
    const intl4 = tmp2(1125).intl;
    stringResult2 = intl4.string(_modDef3863["N+3Pzk"]);
  }
  items3[2] = stringResult2;
  const found1 = items3.filter((item) => null != item && "" !== item);
  const joined = found1.join(", ");
  const obj5 = { label: project.name, subLabel: tmp20, accessibilityLabel: joined, icon: closure_7(ConjureProjectIconDefault, { project, size: "list" }), trailing: null, disabled: null, onPress: null };
  tmp20 = undefined;
  const TableRow = tmp2(6939).TableRow;
  if ("" !== stringResult) {
    tmp20 = stringResult;
  }
  if ("deleting" !== conjureHomeProjectState) {
    obj5.trailing = tmp19Result2;
    obj5.disabled = "deleting" === conjureHomeProjectState;
    obj5.onPress = function onPress() {
      return openConjureHomeScreenDefault(project.id);
    };
    return closure_7(TableRow, obj5);
  }
  const obj6 = { style: tmp.trailingIndicator, children: tmp19Result };
  if ("unread" === conjureHomeProjectState) {
    const obj7 = { style: tmp.unreadDot };
    tmp19Result = tmp19(tmp22, obj7);
  } else {
    tmp19Result = tmp19(tmp2(6916).ActivityIndicator, { size: "small" });
  }
  tmp19Result2 = closure_7(View, obj6);
}));
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function ProjectList(query) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj = react2;
  const cResult = obj.c(18);
  query = query.query;
  const tmp4 = closure_9(0);
  const tmp6 = useConjureOwnProjectListStateDefault(query);
  if ("projects" === tmp6.kind) {
    let tmp41;
    let tmp45;
    if (cResult[0] !== tmp6.projects) {
      let tmp43;
      const _Symbol5 = Symbol;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function w(project) {
          const obj = { project };
          return closure_1_7(closure_1_10, obj, project.id);
        };
        cResult[2] = fn;
        tmp43 = fn;
      } else {
        tmp43 = cResult[2];
      }
      const projects = tmp6.projects;
      const mapped = projects.map(tmp43);
      cResult[0] = tmp6.projects;
      cResult[1] = mapped;
      tmp41 = mapped;
    } else {
      tmp41 = cResult[1];
    }
    if (cResult[3] !== tmp41) {
      const obj2 = { hasIcons: true, children: tmp41 };
      const tmp47 = metroImportDefault(TableRowGroup2.TableRowGroup, obj2);
      cResult[3] = tmp41;
      cResult[4] = tmp47;
      tmp45 = tmp47;
    } else {
      tmp45 = cResult[4];
    }
    return tmp45;
  } else {
    let tmp10;
    if ("no_match" === tmp6.kind) {
      let tmp34;
      let tmp37;
      const _Symbol4 = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { variant: "text-sm/normal", color: "text-subtle", children: intl4.string(_modDef3863.X37fkR) };
        const Text3 = tmp(5270).Text;
        intl4 = tmp(1125).intl;
        const tmp36 = metroImportDefault(Text3, obj3);
        cResult[5] = tmp36;
        tmp34 = tmp36;
      } else {
        tmp34 = cResult[5];
      }
      if (cResult[6] !== tmp4.state) {
        const obj4 = { style: tmp4.state, children: tmp34 };
        const tmp40 = metroImportDefault(View, obj4);
        cResult[6] = tmp4.state;
        cResult[7] = tmp40;
        tmp37 = tmp40;
      } else {
        tmp37 = cResult[7];
      }
      tmp10 = tmp37;
    } else if ("error" === tmp6.kind) {
      let tmp23;
      let tmp26;
      let tmp29;
      const _Symbol2 = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { variant: "text-sm/normal", color: "text-muted", children: intl2.string(_modDef3863.DJAPMO) };
        const Text2 = tmp(5270).Text;
        intl2 = tmp(1125).intl;
        const tmp25 = metroImportDefault(Text2, obj5);
        cResult[8] = tmp25;
        tmp23 = tmp25;
      } else {
        tmp23 = cResult[8];
      }
      const _Symbol3 = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const obj6 = {
          variant: "secondary",
          size: "sm",
          text: intl3.string(_modDef3863["WFJ/vb"]),
          onPress() {
                  const obj = ConjureActionCreators;
                  return obj.listProjects();
                }
        };
        const Button = tmp(5280).Button;
        intl3 = tmp(1125).intl;
        const tmp28 = metroImportDefault(Button, obj6);
        cResult[9] = tmp28;
        tmp26 = tmp28;
      } else {
        tmp26 = cResult[9];
      }
      if (cResult[10] !== tmp4.state) {
        const obj7 = { style: tmp4.state, children: items };
        items = [tmp23, tmp26];
        const tmp32 = metroImportAll(View, obj7);
        cResult[10] = tmp4.state;
        cResult[11] = tmp32;
        tmp29 = tmp32;
      } else {
        tmp29 = cResult[11];
      }
      tmp10 = tmp29;
    } else if ("loading" === tmp6.kind) {
      let tmp15;
      let tmp18;
      const _Symbol = Symbol;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp17 = metroImportDefault(ActivityIndicator_ActivityIndicator.ActivityIndicator, {});
        cResult[12] = tmp17;
        tmp15 = tmp17;
      } else {
        tmp15 = cResult[12];
      }
      if (cResult[13] !== tmp4.state) {
        const obj8 = { style: tmp4.state, children: tmp15 };
        const tmp21 = metroImportDefault(View, obj8);
        cResult[13] = tmp4.state;
        cResult[14] = tmp21;
        tmp18 = tmp21;
      } else {
        tmp18 = cResult[14];
      }
      tmp10 = tmp18;
    } else {
      let tmp7;
      const _Symbol6 = Symbol;
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        const obj9 = { variant: "text-sm/normal", color: "text-subtle", children: intl.string(_modDef3863["9/5sLV"]) };
        const Text = tmp(5270).Text;
        intl = tmp(1125).intl;
        const tmp9 = metroImportDefault(Text, obj9);
        cResult[15] = tmp9;
        tmp7 = tmp9;
      } else {
        tmp7 = cResult[15];
      }
      if (cResult[16] !== tmp4.state) {
        const obj10 = { style: tmp4.state, children: tmp7 };
        const tmp13 = metroImportDefault(View, obj10);
        cResult[16] = tmp4.state;
        cResult[17] = tmp13;
        tmp10 = tmp13;
      } else {
        tmp10 = cResult[17];
      }
    }
    return tmp10;
  }
}) : (function ProjectList(query) {
  let Text;
  let Text3;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj4;
  let obj9;
  let projects;
  let tmp8;
  query = query.query;
  const tmp = closure_9(0);
  const tmp4 = useConjureOwnProjectListStateDefault(query);
  if ("projects" === tmp4.kind) {
    const obj2 = {
      hasIcons: true,
      children: projects.map((project) => {
          const obj = { project };
          return closure_1_7(closure_1_10, obj, project.id);
        })
    };
    projects = tmp4.projects;
    const TableRowGroup = TableRowGroup2.TableRowGroup;
    tmp8 = metroImportDefault(TableRowGroup, obj2);
  } else if ("no_match" === tmp4.kind) {
    const obj3 = { style: tmp.state, children: metroImportDefault(Text3, obj4) };
    obj4 = { variant: "text-sm/normal", color: "text-subtle", children: intl4.string(_modDef3863.X37fkR) };
    Text3 = Text_Text.Text;
    intl4 = intl7.intl;
    tmp8 = metroImportDefault(View, obj3);
  } else if ("error" === tmp4.kind) {
    const obj5 = { style: tmp.state, children: items };
    const obj6 = { variant: "text-sm/normal", color: "text-muted", children: intl2.string(_modDef3863.DJAPMO) };
    const Text2 = Text_Text.Text;
    intl2 = intl7.intl;
    items = [metroImportDefault(Text2, obj6), ];
    const obj7 = {
      variant: "secondary",
      size: "sm",
      text: intl3.string(_modDef3863["WFJ/vb"]),
      onPress() {
          const obj = ConjureActionCreators;
          return obj.listProjects();
        }
    };
    const Button = components_Button_Button.Button;
    intl3 = intl7.intl;
    items[1] = metroImportDefault(Button, obj7);
    tmp8 = metroImportAll(View, obj5);
  } else if ("loading" === tmp4.kind) {
    const obj8 = { style: tmp.state, children: metroImportDefault(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
    tmp8 = metroImportDefault(View, obj8);
  } else {
    let obj = { style: tmp.state, children: metroImportDefault(Text, obj9) };
    obj9 = { variant: "text-sm/normal", color: "text-subtle", children: intl.string(_modDef3863["9/5sLV"]) };
    Text = Text_Text.Text;
    intl = intl7.intl;
    tmp8 = metroImportDefault(View, obj);
  }
  return tmp8;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureProjectsSheet() {
  let first;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj7;
  let tmp13;
  let tmp16;
  let tmp20;
  let tmp23;
  let tmp24;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp34;
  let tmp37;
  let tmp7;
  let tmp8;
  let obj = react2;
  const cResult = obj.c(22);
  const bottom = useSafeAreaInsetsDefault().bottom;
  const tmp5 = closure_9(bottom);
  [tmp7, tmp8] = react.useState("");
  _slicedToArray(react.useState(""), 2);
  const tmp9 = useConjureEntryPointPlacementDefault("ConjureProjectsSheet");
  let placement;
  if (tmp9 != null) {
    placement = tmp9.placement;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o() {
      const obj = ConjureActionCreators;
      obj.listProjects();
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  useMountEffectDefault(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1125).intl;
    const stringResult = intl.string(_modDef3863.uk6jhJ);
    cResult[1] = stringResult;
    tmp13 = stringResult;
  } else {
    tmp13 = cResult[1];
  }
  if (cResult[2] !== ("you_screen" === placement)) {
    let tmp17;
    if ("you_screen" === placement) {
      const obj2 = { icon: AssetRegistryDefault, variant: "tertiary", size: "sm", accessibilityLabel: intl2.string(_modDef3863.qCBh6V), onPress: confirmPin };
      const IconButton = tmp(7991).IconButton;
      intl2 = tmp(1125).intl;
      tmp17 = metroImportDefault(IconButton, obj2);
    }
    cResult[2] = "you_screen" === placement;
    cResult[3] = tmp17;
    tmp16 = tmp17;
  } else {
    tmp16 = cResult[3];
  }
  if (cResult[4] !== tmp16) {
    const obj3 = { title: tmp13, trailing: tmp16 };
    const tmp22 = metroImportDefault(BottomSheetTitleHeader2.BottomSheetTitleHeader, obj3);
    cResult[4] = tmp16;
    cResult[5] = tmp22;
    tmp20 = tmp22;
  } else {
    tmp20 = cResult[5];
  }
  const scrollContent = tmp5.scrollContent;
  if (cResult[6] !== bottom) {
    const obj4 = { bottom };
    cResult[6] = bottom;
    cResult[7] = obj4;
    tmp23 = obj4;
  } else {
    tmp23 = cResult[7];
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { size: "md", onChange: tmp8, placeholder: intl3.string(_modDef3863["2y8sUh"]), accessibilityLabel: intl4.string(_modDef3863.u0kEN9) };
    const SearchBar = tmp(7181).SearchBar;
    intl3 = tmp(1125).intl;
    intl4 = tmp(1125).intl;
    const tmp26 = metroImportDefault(SearchBar, obj5);
    cResult[8] = tmp26;
    tmp24 = tmp26;
  } else {
    tmp24 = cResult[8];
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const intl5 = tmp(1125).intl;
    const stringResult1 = intl5.string(_modDef3863.bnVYYC);
    const intl6 = tmp(1125).intl;
    const stringResult2 = intl6.string(_modDef3863.gnzLwZ);
    const tmp33 = metroImportDefault(ConjureProjectIcon.ConjureNewProjectIcon, { size: "list" });
    cResult[9] = stringResult1;
    cResult[10] = stringResult2;
    cResult[11] = tmp33;
    tmp29 = tmp33;
    tmp28 = stringResult2;
    tmp27 = stringResult1;
  } else {
    tmp27 = cResult[9];
    tmp28 = cResult[10];
    tmp29 = cResult[11];
  }
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    const obj6 = { hasIcons: true, children: metroImportDefault(TableRow2.TableRow, obj7) };
    const TableRowGroup = tmp(7023).TableRowGroup;
    obj7 = {
      label: tmp27,
      subLabel: tmp28,
      icon: tmp29,
      arrow: true,
      onPress() {
          return openConjureHomeScreenDefault();
        }
    };
    const tmp36 = metroImportDefault(TableRowGroup, obj6);
    cResult[12] = tmp36;
    tmp34 = tmp36;
  } else {
    tmp34 = cResult[12];
  }
  if (cResult[13] !== tmp7) {
    const obj8 = { query: tmp7 };
    const tmp40 = metroImportDefault(closure_12, obj8);
    cResult[13] = tmp7;
    cResult[14] = tmp40;
    tmp37 = tmp40;
  } else {
    tmp37 = cResult[14];
  }
  if (cResult[15] === tmp5.scrollContent) {
    if (cResult[16] === tmp37) {
      let tmp41;
      if (cResult[17] === tmp23) {
        tmp41 = cResult[18];
      }
      if (cResult[19] === tmp41) {
        let tmp43;
        if (cResult[20] === tmp20) {
          tmp43 = cResult[21];
        }
        return tmp43;
      }
      const obj9 = { scrollable: true, startExpanded: true, header: tmp20, children: tmp41 };
      const tmp45 = metroImportDefault(ActionSheet2.ActionSheet, obj9);
      cResult[19] = tmp41;
      cResult[20] = tmp20;
      cResult[21] = tmp45;
      tmp43 = tmp45;
    }
  }
  const obj10 = { contentContainerStyle: scrollContent, scrollIndicatorInsets: tmp23, keyboardShouldPersistTaps: "handled", children: items };
  items = [tmp24, tmp34, tmp37];
  const tmp42 = metroImportAll(BottomSheetModal.BottomSheetScrollView, obj10);
  cResult[15] = tmp5.scrollContent;
  cResult[16] = tmp37;
  cResult[17] = tmp23;
  cResult[18] = tmp42;
  tmp41 = tmp42;
}) : (function ConjureProjectsSheet() {
  let BottomSheetScrollView;
  let TableRow;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items;
  let obj4;
  let obj7;
  let tmp10Result;
  let tmp5;
  let tmp6;
  const bottom = useSafeAreaInsetsDefault().bottom;
  const tmp3 = closure_9(bottom);
  [tmp5, tmp6] = react.useState("");
  _slicedToArray(react.useState(""), 2);
  const tmp7 = useConjureEntryPointPlacementDefault("ConjureProjectsSheet");
  let placement;
  if (tmp7 != null) {
    placement = tmp7.placement;
  }
  useMountEffectDefault(() => {
    const obj = ConjureActionCreators;
    obj.listProjects();
  });
  const ActionSheet = ActionSheet2.ActionSheet;
  let obj = { title: intl.string(_modDef3863.uk6jhJ), trailing: tmp10Result };
  const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl = intl7.intl;
  tmp10Result = undefined;
  if ("you_screen" === placement) {
    const obj2 = { icon: AssetRegistryDefault, variant: "tertiary", size: "sm", accessibilityLabel: intl2.string(_modDef3863.qCBh6V), onPress: confirmPin };
    const IconButton = tmp11(7991).IconButton;
    intl2 = tmp11(1125).intl;
    tmp10Result = tmp10(IconButton, obj2);
  }
  const obj3 = { scrollable: true, startExpanded: true, header: metroImportDefault(BottomSheetTitleHeader, obj), children: metroImportAll(BottomSheetScrollView, obj4) };
  obj4 = { contentContainerStyle: tmp3.scrollContent, scrollIndicatorInsets: { bottom }, keyboardShouldPersistTaps: "handled", children: items };
  BottomSheetScrollView = tmp11(5305).BottomSheetScrollView;
  const obj5 = { size: "md", onChange: tmp6, placeholder: intl3.string(_modDef3863["2y8sUh"]), accessibilityLabel: intl4.string(_modDef3863.u0kEN9) };
  const SearchBar = tmp11(7181).SearchBar;
  intl3 = tmp11(1125).intl;
  intl4 = tmp11(1125).intl;
  items = [metroImportDefault(SearchBar, obj5), , ];
  const obj6 = { hasIcons: true, children: metroImportDefault(TableRow, obj7) };
  const TableRowGroup = tmp11(7023).TableRowGroup;
  obj7 = {
    label: intl5.string(_modDef3863.bnVYYC),
    subLabel: intl6.string(_modDef3863.gnzLwZ),
    icon: metroImportDefault(ConjureProjectIcon.ConjureNewProjectIcon, { size: "list" }),
    arrow: true,
    onPress() {
      return openConjureHomeScreenDefault();
    }
  };
  TableRow = tmp11(6939).TableRow;
  intl5 = tmp11(1125).intl;
  intl6 = tmp11(1125).intl;
  items[1] = metroImportDefault(TableRowGroup, obj6);
  items[2] = metroImportDefault(closure_12, { query: tmp5 });
  return metroImportDefault(ActionSheet, obj3);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/conjure/projects/native/ConjureProjectsSheet.tsx");

export default tmp4;
