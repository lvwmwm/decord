// Module ID: 17838
// Function ID: 17839
// Name: ConjureProjectsSheet
// Dependencies: [32, 19, 17, 10714, 21, 4971, 587, 558, 576, 17839, 504, 1128, 3830, 6789, 12250, 6880, 10818, 6903, 17840, 6987, 5234, 5244, 10720, 1633, 5263, 7248, 7145, 7298, 5269, 2]

// Module 17838 (ConjureProjectsSheet)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl6 from "intl" /* 1128 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1633 */;
import _modDef3830 from "module_3830" /* 3830 */;
import Text_Text from "Text/Text" /* 5234 */;
import components_Button_Button from "components/Button/Button" /* 5244 */;
import useMountEffectDefault from "useMountEffect" /* 5263 */;
import BottomSheetModal from "BottomSheetModal" /* 5269 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 6880 */;
import TableRow2 from "TableRow" /* 6903 */;
import TableRowGroup2 from "TableRowGroup" /* 6987 */;
import SearchBar2 from "SearchBar" /* 7145 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 7248 */;
import ActionSheet2 from "ActionSheet" /* 7298 */;
import ConjureActionCreators from "ConjureActionCreators" /* 10720 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 10818 */;
import ConjureProjectIcon from "ConjureProjectIcon" /* 12250 */;
import useConjureOwnProjectListStateDefault from "useConjureOwnProjectListState" /* 17840 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10714 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4971 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const ConjureProjectIconDefault = ConjureProjectIcon;

let metroImportAll;
let metroImportDefault;
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
  const obj2 = project(17839);
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
            const intl4 = tmp(1128).intl;
            stringResult = intl4.string(_modDef3830["N+3Pzk"]);
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
                const tmp41 = closure_7(tmp(6903).TableRow, obj4);
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
              tmp35Result = tmp35(tmp(6880).ActivityIndicator, { size: "small" });
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
    const tmpResult4 = tmp(17839);
    const result = tmpResult4.conjureProjectLastActivityTime(project);
    if ("deleting" === conjureHomeProjectState) {
      const intl3 = tmp(1128).intl;
      stringResult1 = intl3.string(_modDef3830.Yh5pAc);
    } else if ("in_progress" === conjureHomeProjectState) {
      const intl2 = tmp(1128).intl;
      stringResult1 = intl2.string(_modDef3830["Y8pS+n"]);
    } else {
      let relativeTimestamp = null;
      if (null != result) {
        const tmpResult5 = tmp(6789);
        relativeTimestamp = tmpResult5.getRelativeTimestamp(result, false);
      }
      const items3 = [relativeTimestamp, ];
      let stringResult2 = null;
      if (tmp11) {
        const intl = tmp(1128).intl;
        stringResult2 = intl.string(_modDef3830.CSAaT0);
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
  const tmpResult6 = tmp(17839);
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
  const obj = project(17839);
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
  const obj3 = project(17839);
  const result = obj3.conjureHomeProjectShowsDraft(conjureHomeProjectState, stateFromStores);
  const obj4 = project(17839);
  const result1 = obj4.conjureProjectLastActivityTime(project);
  if ("deleting" === conjureHomeProjectState) {
    const intl3 = tmp2(1128).intl;
    stringResult = intl3.string(_modDef3830.Yh5pAc);
  } else if ("in_progress" === conjureHomeProjectState) {
    const intl2 = tmp2(1128).intl;
    stringResult = intl2.string(_modDef3830["Y8pS+n"]);
  } else {
    let relativeTimestamp = null;
    if (null != result1) {
      const tmp2Result = project(6789);
      relativeTimestamp = tmp2Result.getRelativeTimestamp(result1, false);
    }
    const items2 = [relativeTimestamp, ];
    let stringResult1 = null;
    if (result) {
      const intl = tmp2(1128).intl;
      stringResult1 = intl.string(_modDef3830.CSAaT0);
    }
    items2[1] = stringResult1;
    const found = items2.filter((item) => null != item);
    stringResult = found.join(" \u00B7 ");
  }
  const items3 = [project.name, stringResult, ];
  let stringResult2 = null;
  if ("unread" === conjureHomeProjectState) {
    const intl4 = tmp2(1128).intl;
    stringResult2 = intl4.string(_modDef3830["N+3Pzk"]);
  }
  items3[2] = stringResult2;
  const found1 = items3.filter((item) => null != item && "" !== item);
  const joined = found1.join(", ");
  const obj5 = { label: project.name, subLabel: tmp20, accessibilityLabel: joined, icon: closure_7(ConjureProjectIconDefault, { project, size: "list" }), trailing: null, disabled: null, onPress: null };
  tmp20 = undefined;
  const TableRow = tmp2(6903).TableRow;
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
    tmp19Result = tmp19(tmp2(6880).ActivityIndicator, { size: "small" });
  }
  tmp19Result2 = closure_7(View, obj6);
}));
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function ProjectList(query) {
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
        const obj3 = { variant: "text-sm/normal", color: "text-subtle", children: intl4.string(_modDef3830.X37fkR) };
        const Text3 = tmp(5234).Text;
        intl4 = tmp(1128).intl;
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
        const obj5 = { variant: "text-sm/normal", color: "text-muted", children: intl2.string(_modDef3830.DJAPMO) };
        const Text2 = tmp(5234).Text;
        intl2 = tmp(1128).intl;
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
          text: intl3.string(_modDef3830["WFJ/vb"]),
          onPress() {
                  const obj = ConjureActionCreators;
                  return obj.listProjects();
                }
        };
        const Button = tmp(5244).Button;
        intl3 = tmp(1128).intl;
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
        const obj9 = { variant: "text-sm/normal", color: "text-subtle", children: intl.string(_modDef3830["9/5sLV"]) };
        const Text = tmp(5234).Text;
        intl = tmp(1128).intl;
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
    obj4 = { variant: "text-sm/normal", color: "text-subtle", children: intl4.string(_modDef3830.X37fkR) };
    Text3 = Text_Text.Text;
    intl4 = intl6.intl;
    tmp8 = metroImportDefault(View, obj3);
  } else if ("error" === tmp4.kind) {
    const obj5 = { style: tmp.state, children: items };
    const obj6 = { variant: "text-sm/normal", color: "text-muted", children: intl2.string(_modDef3830.DJAPMO) };
    const Text2 = Text_Text.Text;
    intl2 = intl6.intl;
    items = [metroImportDefault(Text2, obj6), ];
    const obj7 = {
      variant: "secondary",
      size: "sm",
      text: intl3.string(_modDef3830["WFJ/vb"]),
      onPress() {
          const obj = ConjureActionCreators;
          return obj.listProjects();
        }
    };
    const Button = components_Button_Button.Button;
    intl3 = intl6.intl;
    items[1] = metroImportDefault(Button, obj7);
    tmp8 = metroImportAll(View, obj5);
  } else if ("loading" === tmp4.kind) {
    const obj8 = { style: tmp.state, children: metroImportDefault(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
    tmp8 = metroImportDefault(View, obj8);
  } else {
    let obj = { style: tmp.state, children: metroImportDefault(Text, obj9) };
    obj9 = { variant: "text-sm/normal", color: "text-subtle", children: intl.string(_modDef3830["9/5sLV"]) };
    Text = Text_Text.Text;
    intl = intl6.intl;
    tmp8 = metroImportDefault(View, obj);
  }
  return tmp8;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureProjectsSheet() {
  let first;
  let first1;
  let intl;
  let intl2;
  let intl3;
  let items;
  let obj6;
  let obj9;
  let tmp11;
  let tmp14;
  let tmp15;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp25;
  let tmp28;
  let tmp8;
  let obj = react2;
  const cResult = obj.c(15);
  const bottom = useSafeAreaInsetsDefault().bottom;
  const tmp5 = closure_9(bottom);
  [first, tmp8] = react.useState("");
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l() {
      const obj = ConjureActionCreators;
      obj.listProjects();
    };
    cResult[0] = fn;
    first1 = fn;
  } else {
    first1 = cResult[0];
  }
  useMountEffectDefault(first1);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { title: intl.string(_modDef3830.uk6jhJ) };
    const BottomSheetTitleHeader = tmp(7248).BottomSheetTitleHeader;
    intl = tmp(1128).intl;
    const tmp13 = metroImportDefault(BottomSheetTitleHeader, obj2);
    cResult[1] = tmp13;
    tmp11 = tmp13;
  } else {
    tmp11 = cResult[1];
  }
  const scrollContent = tmp5.scrollContent;
  if (cResult[2] !== bottom) {
    const obj3 = { bottom };
    cResult[2] = bottom;
    cResult[3] = obj3;
    tmp14 = obj3;
  } else {
    tmp14 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { size: "md", onChange: tmp8, placeholder: intl2.string(_modDef3830["2y8sUh"]), accessibilityLabel: intl3.string(_modDef3830.u0kEN9) };
    const SearchBar = tmp(7145).SearchBar;
    intl2 = tmp(1128).intl;
    intl3 = tmp(1128).intl;
    const tmp17 = metroImportDefault(SearchBar, obj4);
    cResult[4] = tmp17;
    tmp15 = tmp17;
  } else {
    tmp15 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl4 = tmp(1128).intl;
    const stringResult = intl4.string(_modDef3830.bnVYYC);
    const intl5 = tmp(1128).intl;
    const stringResult1 = intl5.string(_modDef3830.gnzLwZ);
    const tmp24 = metroImportDefault(ConjureProjectIcon.ConjureNewProjectIcon, { size: "list" });
    cResult[5] = stringResult;
    cResult[6] = stringResult1;
    cResult[7] = tmp24;
    tmp20 = tmp24;
    tmp19 = stringResult1;
    tmp18 = stringResult;
  } else {
    tmp18 = cResult[5];
    tmp19 = cResult[6];
    tmp20 = cResult[7];
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { hasIcons: true, children: metroImportDefault(TableRow2.TableRow, obj6) };
    const TableRowGroup = tmp(6987).TableRowGroup;
    obj6 = {
      label: tmp18,
      subLabel: tmp19,
      icon: tmp20,
      arrow: true,
      onPress() {
          return openConjureHomeScreenDefault();
        }
    };
    const tmp27 = metroImportDefault(TableRowGroup, obj5);
    cResult[8] = tmp27;
    tmp25 = tmp27;
  } else {
    tmp25 = cResult[8];
  }
  if (cResult[9] !== first) {
    const obj7 = { query: first };
    const tmp31 = metroImportDefault(closure_11, obj7);
    cResult[9] = first;
    cResult[10] = tmp31;
    tmp28 = tmp31;
  } else {
    tmp28 = cResult[10];
  }
  if (cResult[11] === tmp5.scrollContent) {
    if (cResult[12] === tmp14) {
      let tmp32;
      if (cResult[13] === tmp28) {
        tmp32 = cResult[14];
      }
      return tmp32;
    }
  }
  const obj8 = { scrollable: true, startExpanded: true, header: tmp11, children: metroImportAll(BottomSheetModal.BottomSheetScrollView, obj9) };
  const ActionSheet = tmp(7298).ActionSheet;
  obj9 = { contentContainerStyle: scrollContent, scrollIndicatorInsets: tmp14, keyboardShouldPersistTaps: "handled", children: items };
  items = [tmp15, tmp25, tmp28];
  const tmp33 = metroImportDefault(ActionSheet, obj8);
  cResult[11] = tmp5.scrollContent;
  cResult[12] = tmp14;
  cResult[13] = tmp28;
  cResult[14] = tmp33;
  tmp32 = tmp33;
}) : (function ConjureProjectsSheet() {
  let BottomSheetScrollView;
  let BottomSheetTitleHeader;
  let TableRow;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items;
  let obj2;
  let obj3;
  let obj6;
  let tmp3;
  let tmp4;
  const bottom = useSafeAreaInsetsDefault().bottom;
  const tmp = closure_9(bottom);
  [tmp3, tmp4] = react.useState("");
  _slicedToArray(react.useState(""), 2);
  useMountEffectDefault(() => {
    const obj = ConjureActionCreators;
    obj.listProjects();
  });
  let obj = { scrollable: true, startExpanded: true, header: metroImportDefault(BottomSheetTitleHeader, obj2), children: metroImportAll(BottomSheetScrollView, obj3) };
  const ActionSheet = ActionSheet2.ActionSheet;
  obj2 = { title: intl.string(_modDef3830.uk6jhJ) };
  BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl = intl6.intl;
  obj3 = { contentContainerStyle: tmp.scrollContent, scrollIndicatorInsets: { bottom }, keyboardShouldPersistTaps: "handled", children: items };
  BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
  const obj4 = { size: "md", onChange: tmp4, placeholder: intl2.string(_modDef3830["2y8sUh"]), accessibilityLabel: intl3.string(_modDef3830.u0kEN9) };
  const SearchBar = SearchBar2.SearchBar;
  intl2 = intl6.intl;
  intl3 = intl6.intl;
  items = [metroImportDefault(SearchBar, obj4), , ];
  const obj5 = { hasIcons: true, children: metroImportDefault(TableRow, obj6) };
  const TableRowGroup = TableRowGroup2.TableRowGroup;
  obj6 = {
    label: intl4.string(_modDef3830.bnVYYC),
    subLabel: intl5.string(_modDef3830.gnzLwZ),
    icon: metroImportDefault(ConjureProjectIcon.ConjureNewProjectIcon, { size: "list" }),
    arrow: true,
    onPress() {
      return openConjureHomeScreenDefault();
    }
  };
  TableRow = TableRow2.TableRow;
  intl4 = intl6.intl;
  intl5 = intl6.intl;
  items[1] = metroImportDefault(TableRowGroup, obj5);
  items[2] = metroImportDefault(closure_11, { query: tmp3 });
  return metroImportDefault(ActionSheet, obj);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/conjure/projects/native/ConjureProjectsSheet.tsx");

export default tmp4;
