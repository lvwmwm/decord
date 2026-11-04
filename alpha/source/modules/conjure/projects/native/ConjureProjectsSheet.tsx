// Module ID: 13225
// Function ID: 13226
// Name: ConjureProjectsSheet
// Dependencies: [32, 19, 17, 5012, 11045, 21, 5141, 575, 5761, 13226, 504, 13227, 6211, 1113, 3995, 7116, 7098, 12322, 12319, 7095, 11157, 13228, 7201, 13203, 13231, 13204, 5768, 11054, 1627, 9824, 5729, 7502, 7457, 8168, 11161, 5400, 7355, 2]
// Exports: default

// Module 13225 (ConjureProjectsSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl7 from "intl" /* 1113 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import _modDef3995 from "module_3995" /* 3995 */;
import useMountEffectDefault from "useMountEffect" /* 5729 */;
import Text_Text from "Text/Text" /* 5761 */;
import getTimestampStringDefault from "getTimestampString" /* 6211 */;
import GuildIconDefault from "GuildIcon" /* 7098 */;
import TableRowGroup2 from "TableRowGroup" /* 7201 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 7457 */;
import ActionSheet2 from "ActionSheet" /* 7502 */;
import useConjureEntryPointPlacementDefault from "useConjureEntryPointPlacement" /* 9824 */;
import ConjureActionCreators from "ConjureActionCreators" /* 11054 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 11157 */;
import AssetRegistryDefault from "AssetRegistry" /* 11161 */;
import ConjureProjectIcon from "ConjureProjectIcon" /* 12319 */;
import useConjureServerProjects from "useConjureServerProjects" /* 13203 */;
import confirmConjureYouBarPinDefault from "confirmConjureYouBarPin" /* 13228 */;
import useConjureOwnProjectListStateDefault from "useConjureOwnProjectListState" /* 13231 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 5012 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 11045 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5141 */;
import size_mod from "module_2" /* 2 */;

const ConjureProjectIconDefault = ConjureProjectIcon;
let importDefault;

let c10;
let c9;
let metroImportAll;
function SubLabelText(arg0) {
  let children;
  let style;
  ({ children, style } = arg0);
  return metroImportAll(Text_Text.Text, { variant: "body-xs/medium", color: "text-subtle", lineClamp: 1, includeFontPadding: true, style, children });
}
function confirmPin() {
  confirmConjureYouBarPinDefault(true);
}
function ProjectSection(projects) {
  projects = projects.projects;
  let tmp2 = null;
  if (0 !== projects.length) {
    let obj = {
      title: tmp,
      hasIcons: true,
      children: projects.map((project) => {
          const obj = { project };
          return closure_1_8(closure_1_13, obj, project.id);
        })
    };
    const TableRowGroup = TableRowGroup2.TableRowGroup;
    tmp2 = metroImportAll(TableRowGroup, obj);
  }
  return tmp2;
}
function ServerGroupedSections(arg0) {
  let found3;
  let guildId;
  let intl;
  let intl2;
  let projects;
  ({ projects, guildId } = arg0);
  let obj = guildId(504);
  const items = [GuildStore];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(guildId);
    let name;
    if (guild != null) {
      name = guild.name;
    }
    if (name == null) {
      name = null;
    }
    return name;
  }, items1);
  const found = projects.filter((item) => {
    const obj = useConjureServerProjects;
    return obj.conjureProjectPointsAtGuild(item, guildId);
  });
  const found1 = projects.filter((item) => {
    const obj = useConjureServerProjects;
    return !obj.conjureProjectPointsAtGuild(item, guildId);
  });
  const found2 = found1.filter((guild_id) => null == guild_id.guild_id && null == guild_id.preview_guild_id);
  const obj2 = { title: intl.string(found2(3995).QOFD3F), projects: found3 };
  found3 = found1.filter((item) => !found2.includes(item));
  intl = guildId(1113).intl;
  const items2 = [closure_8(ProjectSection, obj2), , ];
  const obj3 = { title: intl2.string(found2(3995).poYQxw), projects: found2 };
  intl2 = guildId(1113).intl;
  items2[1] = closure_8(ProjectSection, obj3);
  let formatToPlainStringResult;
  const tmp = guildId;
  const tmp10 = ProjectSection;
  const tmp11 = found2;
  const tmp7 = closure_9;
  const tmp8 = closure_10;
  const tmp9 = closure_8;
  if (null != stateFromStores) {
    const intl3 = tmp(1113).intl;
    const obj4 = { guildName: stateFromStores };
    formatToPlainStringResult = intl3.formatToPlainString(tmp11(3995).dxv7PD, obj4);
  }
  const obj5 = { children: items2 };
  items2[2] = tmp9(tmp10, { title: formatToPlainStringResult, projects: found });
  return tmp7(tmp8, obj5);
}
function ProjectList(arg0) {
  let Text;
  let Text3;
  let c1;
  let guildId;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items1;
  let items2;
  let obj13;
  let obj7;
  let query;
  let tmp18Result;
  ({ query, guildId } = arg0);
  let conjureSharedWithMeProjects;
  const tmp = closure_11(0);
  const tmp4 = useConjureOwnProjectListStateDefault(query);
  let obj = conjureSharedWithMeProjects(13204);
  conjureSharedWithMeProjects = obj.useConjureSharedWithMeProjects();
  const trimmed = query.trim();
  let toLocaleLowerCaseResult = trimmed.toLocaleLowerCase();
  importDefault = toLocaleLowerCaseResult;
  const items = [conjureSharedWithMeProjects, toLocaleLowerCaseResult];
  const memo = react.useMemo(() => conjureSharedWithMeProjects.filter((name) => {
    name = name.name;
    const toLocaleLowerCaseResult = name.toLocaleLowerCase();
    return toLocaleLowerCaseResult.includes(closure_1_1);
  }), items);
  const obj2 = { title: intl.string(_modDef3995.ygVWuJ), projects: memo };
  intl = conjureSharedWithMeProjects(1113).intl;
  const tmp10 = closure_8(ProjectSection, obj2);
  const tmp9 = ProjectSection;
  if ("projects" === tmp4.kind) {
    let tmp8Result;
    const tmp18 = closure_9;
    const tmp19 = closure_10;
    if (null != guildId) {
      const obj3 = { projects: tmp4.projects, guildId };
      tmp8Result = tmp8(ServerGroupedSections, obj3);
    } else {
      let stringResult;
      if (memo.length > 0) {
        const intl6 = tmp5(1113).intl;
        stringResult = intl6.string(tmp2(3995).lqroiy);
      }
      const obj4 = { title: stringResult, projects: tmp4.projects };
      tmp8Result = tmp8(tmp9, obj4);
    }
    const obj5 = { children: items1 };
    items1 = [tmp8Result, tmp10];
    tmp18Result = tmp18(tmp19, obj5);
  } else if (memo.length <= 0) {
    let tmp8Result2;
    if ("no_match" === tmp4.kind) {
      const obj6 = { style: tmp.state, children: closure_8(Text3, obj7) };
      obj7 = { variant: "body-sm/normal", color: "text-subtle", children: intl5.string(_modDef3995.X37fkR) };
      Text3 = tmp5(5761).Text;
      intl5 = tmp5(1113).intl;
      tmp8Result2 = tmp8(View, obj6);
    } else if ("error" === tmp4.kind) {
      const obj8 = { style: tmp.state, children: items2 };
      const obj9 = { variant: "body-sm/normal", color: "text-muted", children: intl3.string(_modDef3995.DJAPMO) };
      const Text2 = tmp5(5761).Text;
      intl3 = tmp5(1113).intl;
      items2 = [closure_8(Text2, obj9), ];
      const obj10 = {
        variant: "secondary",
        size: "sm",
        text: intl4.string(_modDef3995["WFJ/vb"]),
        onPress() {
              const obj = conjureSharedWithMeProjects(dependencyMap[27]);
              return obj.listProjects();
            }
      };
      const Button = tmp5(5768).Button;
      intl4 = tmp5(1113).intl;
      items2[1] = closure_8(Button, obj10);
      tmp8Result2 = closure_9(View, obj8);
    } else if ("loading" === tmp4.kind) {
      const obj11 = { style: tmp.state, children: closure_8(conjureSharedWithMeProjects(7095).ActivityIndicator, {}) };
      tmp8Result2 = tmp8(View, obj11);
    } else {
      const obj12 = { style: tmp.state, children: closure_8(Text, obj13) };
      obj13 = { variant: "body-sm/normal", color: "text-subtle", children: intl2.string(_modDef3995["9/5sLV"]) };
      Text = tmp5(5761).Text;
      intl2 = tmp5(1113).intl;
      tmp8Result2 = tmp8(View, obj12);
    }
    tmp18Result = tmp8Result2;
  } else {
    tmp18Result = tmp10;
    if ("no_match" !== tmp4.kind) {
      tmp18Result = tmp10;
    }
  }
  return tmp18Result;
}
const View = react_native.View;
({ jsx: metroImportAll, jsxs: c9, Fragment: c10 } = Fragment);
let closure_11 = createStyles.createStyles((arg0) => {
  let size1;
  let size2;
  const obj = { scrollContent: { gap: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_16 + arg0 }, state: { alignItems: "center", gap: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_24 }, trailingIndicator: size, subLabel: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 }, shareTargetIcon: { borderRadius: nativeDefault.radii.xs }, userIconWrapper: size1, shareTargetLabel: { flexShrink: 1 }, unreadDot: size2 };
  ({ gap: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_16 + arg0 });
  ({ alignItems: "center", gap: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_24 });
  size = { width: nativeDefault.space.PX_20, height: nativeDefault.space.PX_20, alignItems: "center", justifyContent: "center" };
  ({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 });
  ({ borderRadius: nativeDefault.radii.xs });
  size1 = { width: nativeDefault.space.PX_16, height: nativeDefault.space.PX_16, alignItems: "center", justifyContent: "center" };
  size2 = { width: nativeDefault.space.PX_8, height: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
  return obj;
});
let closure_13 = react.memo(function ProjectRow(project) {
  let UserIcon;
  let items4;
  let obj12;
  let stringResult1;
  let tmp25Result7;
  let tmp25Result8;
  project = project.project;
  const tmp = closure_11(0);
  const obj = project(13226);
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
  const obj3 = project(13226);
  const result = obj3.conjureHomeProjectShowsDraft(conjureHomeProjectState, stateFromStores);
  const obj4 = project(13226);
  const result1 = obj4.conjureProjectLastActivityTime(project);
  const obj5 = project(13227);
  const conjureProjectShareTargetDetails = obj5.useConjureProjectShareTargetDetails(project);
  let tmp11Result = null;
  if (null != result1) {
    const obj6 = { since: result1, getFormatter: project(6211).getAbbreviatedFormatter, includeWeeks: true };
    const tmp11 = getTimestampStringDefault;
    tmp11Result = tmp11(obj6);
  }
  let stringResult = null;
  if (result) {
    const intl = tmp2(1113).intl;
    stringResult = intl.string(_modDef3995.CSAaT0);
  }
  if ("deleting" === conjureHomeProjectState) {
    const intl4 = tmp2(1113).intl;
    stringResult1 = intl4.string(_modDef3995.Yh5pAc);
  } else if ("in_progress" === conjureHomeProjectState) {
    const intl3 = tmp2(1113).intl;
    stringResult1 = intl3.string(_modDef3995["Y8pS+n"]);
  } else {
    const items2 = [tmp11Result, , ];
    let label;
    if (conjureProjectShareTargetDetails != null) {
      label = conjureProjectShareTargetDetails.label;
    }
    if (label == null) {
      let stringResult2 = null;
      const tmp2Result = project(13227);
      if (tmp2Result.isConjureProjectWithoutServer(project)) {
        const intl2 = tmp2(1113).intl;
        stringResult2 = intl2.string(_modDef3995.poYQxw);
      }
      label = stringResult2;
    }
    items2[1] = label;
    items2[2] = stringResult;
    const found = items2.filter((item) => null != item);
    stringResult1 = found.join(" \u00B7 ");
  }
  const items3 = [project.name, stringResult1, ];
  let stringResult3 = null;
  if ("unread" === conjureHomeProjectState) {
    const intl5 = tmp2(1113).intl;
    stringResult3 = intl5.string(_modDef3995["N+3Pzk"]);
  }
  items3[2] = stringResult3;
  const found1 = items3.filter((item) => null != item && "" !== item);
  const joined = found1.join(", ");
  const obj7 = { label: project.name, subLabel: null, accessibilityLabel: null, icon: null, trailing: null, disabled: null, onPress: null };
  if ("deleting" !== conjureHomeProjectState) {
    if ("in_progress" !== conjureHomeProjectState) {
      let tmp43Result;
      if (null != conjureProjectShareTargetDetails) {
        let tmp25Result5;
        let tmp25Result = null;
        const obj8 = { style: tmp.subLabel, children: items4 };
        const tmp43 = closure_9;
        if (null != tmp11Result) {
          const _HermesInternal = HermesInternal;
          const obj9 = { children: "" + tmp11Result + " \u00B7" };
          tmp25Result = tmp25(SubLabelText, obj9);
        }
        items4 = [tmp25Result, , , ];
        if ("guild" === conjureProjectShareTargetDetails.kind) {
          const obj10 = { guild: conjureProjectShareTargetDetails.guild, size: project(7098).GuildIconSizes.XXSMALL, selected: false, style: tmp.shareTargetIcon };
          const tmp33 = GuildIconDefault;
          tmp25Result5 = tmp25(tmp33, obj10);
        } else {
          const obj11 = { style: tmp.userIconWrapper, children: closure_8(UserIcon, obj12) };
          obj12 = { size: "xxs", color: nativeDefault.colors.TEXT_SUBTLE };
          UserIcon = tmp2(12322).UserIcon;
          tmp25Result5 = tmp25(tmp44, obj11);
        }
        items4[1] = tmp25Result5;
        const obj13 = { style: tmp.shareTargetLabel, children: conjureProjectShareTargetDetails.label };
        items4[2] = closure_8(SubLabelText, obj13);
        let tmp25Result6 = null;
        const tmp34 = SubLabelText;
        if (null != stringResult) {
          const _HermesInternal2 = HermesInternal;
          const obj14 = { children: "\u00B7 " + stringResult };
          tmp25Result6 = tmp25(tmp34, obj14);
        }
        items4[3] = tmp25Result6;
        tmp43Result = tmp43(tmp44, obj8);
      }
      obj7.subLabel = tmp43Result;
      obj7.accessibilityLabel = joined;
      const obj15 = { project, size: "list" };
      obj7.icon = closure_8(ConjureProjectIconDefault, obj15);
      if ("deleting" !== conjureHomeProjectState) {
        obj7.trailing = tmp25Result8;
        obj7.disabled = "deleting" === conjureHomeProjectState;
        obj7.onPress = function onPress() {
          return openConjureHomeScreenDefault(project.id, { entryPoint: "project_list" });
        };
        return closure_8(tmp26, obj7);
      }
      const obj16 = { style: tmp.trailingIndicator, children: tmp25Result7 };
      if ("unread" === conjureHomeProjectState) {
        const obj17 = { style: tmp.unreadDot };
        tmp25Result7 = tmp25(tmp41, obj17);
      } else {
        tmp25Result7 = tmp25(tmp2(7095).ActivityIndicator, { size: "small" });
      }
      tmp25Result8 = closure_8(View, obj16);
    }
  }
  let tmp38;
  if ("" !== stringResult1) {
    tmp38 = stringResult1;
  }
  tmp43Result = tmp38;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/conjure/projects/native/ConjureProjectsSheet.tsx");

export default function ConjureProjectsSheet(guildId) {
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
  let tmp11Result;
  let tmp6;
  let tmp7;
  guildId = guildId.guildId;
  if (guildId === undefined) {
    guildId = null;
  }
  const bottom = useSafeAreaInsetsDefault().bottom;
  const tmp4 = closure_11(bottom);
  [tmp6, tmp7] = react.useState("");
  _slicedToArray(react.useState(""), 2);
  const tmp8 = useConjureEntryPointPlacementDefault("ConjureProjectsSheet");
  let placement;
  if (tmp8 != null) {
    placement = tmp8.placement;
  }
  useMountEffectDefault(() => {
    const obj = ConjureActionCreators;
    obj.listProjects();
  });
  const ActionSheet = ActionSheet2.ActionSheet;
  let obj = { title: intl.string(_modDef3995.uk6jhJ), trailing: tmp11Result };
  const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl = intl7.intl;
  tmp11Result = undefined;
  if ("you_screen" === placement) {
    const obj2 = { icon: AssetRegistryDefault, variant: "tertiary", size: "sm", accessibilityLabel: intl2.string(_modDef3995.qCBh6V), onPress: confirmPin };
    const IconButton = tmp12(8168).IconButton;
    intl2 = tmp12(1113).intl;
    tmp11Result = tmp11(IconButton, obj2);
  }
  const obj3 = { scrollable: true, startExpanded: true, header: metroImportAll(BottomSheetTitleHeader, obj), children: React4(BottomSheetScrollView, obj4) };
  obj4 = { contentContainerStyle: tmp4.scrollContent, scrollIndicatorInsets: { bottom }, keyboardShouldPersistTaps: "handled", children: items };
  BottomSheetScrollView = tmp12(5400).BottomSheetScrollView;
  const obj5 = { size: "md", onChange: tmp7, placeholder: intl3.string(_modDef3995["2y8sUh"]), accessibilityLabel: intl4.string(_modDef3995.u0kEN9) };
  const SearchBar = tmp12(7355).SearchBar;
  intl3 = tmp12(1113).intl;
  intl4 = tmp12(1113).intl;
  items = [metroImportAll(SearchBar, obj5), , ];
  const obj6 = { hasIcons: true, children: metroImportAll(TableRow, obj7) };
  const TableRowGroup = tmp12(7201).TableRowGroup;
  obj7 = {
    label: intl5.string(_modDef3995.bnVYYC),
    subLabel: intl6.string(_modDef3995.gnzLwZ),
    icon: metroImportAll(ConjureProjectIcon.ConjureNewProjectIcon, { size: "list" }),
    arrow: true,
    onPress() {
      return openConjureHomeScreenDefault(undefined, { focusComposer: true });
    }
  };
  TableRow = tmp12(7116).TableRow;
  intl5 = tmp12(1113).intl;
  intl6 = tmp12(1113).intl;
  items[1] = metroImportAll(TableRowGroup, obj6);
  items[2] = metroImportAll(ProjectList, { query: tmp6, guildId });
  return metroImportAll(ActionSheet, obj3);
};
