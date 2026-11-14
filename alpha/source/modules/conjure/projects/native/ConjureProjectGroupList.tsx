// Module ID: 10550
// Function ID: 10551
// Name: ConjureProjectGroupList
// Dependencies: [19, 17, 5177, 7377, 7017, 21, 5306, 575, 2020, 5552, 7236, 10551, 10536, 7418, 5929, 10521, 504, 10552, 6387, 1113, 4131, 7443, 7720, 10553, 10543, 7746, 10555, 7963, 10560, 7997, 10533, 10557, 5936, 7329, 2]
// Exports: default

// Module 10550 (ConjureProjectGroupList)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 2020 */;
import _modDef4131 from "module_4131" /* 4131 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import Text_Text from "Text/Text" /* 5929 */;
import getTimestampStringDefault from "getTimestampString" /* 6387 */;
import conjureServerProject from "conjureServerProject" /* 7236 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 7418 */;
import GuildIcon from "GuildIcon" /* 7720 */;
import TableRowGroup2 from "TableRowGroup" /* 7746 */;
import useConjureProjectGroupsDefault from "useConjureProjectGroups" /* 10533 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 10536 */;
import ConjureProjectIconDefault from "ConjureProjectIcon" /* 10543 */;
import openConjureProject from "openConjureProject" /* 10551 */;
import useConjureProjectGroupState from "useConjureProjectGroupState" /* 10555 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 5177 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 7377 */;
import ConjureProjectStore from "ConjureProjectStore" /* 7017 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const GuildIconDefault = GuildIcon;
let _require;

let c10;
let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let size;
let size1;
let size2;
function ActivityIndicatorBadge(activity) {
  let tmp2Result;
  activity = activity.activity;
  const tmp = closure_11();
  const obj = { style: tmp.trailingIndicator, children: tmp2Result };
  if ("unread" === activity) {
    const obj2 = { style: tmp.unreadDot };
    tmp2Result = tmp2(tmp3, obj2);
  } else {
    tmp2Result = tmp2(ActivityIndicator_ActivityIndicator.ActivityIndicator, { size: "small" });
  }
  return metroImportAll(View, obj);
}
function SubLabelText(arg0) {
  let children;
  let style;
  ({ children, style } = arg0);
  return metroImportAll(Text_Text.Text, { variant: "body-xs/medium", color: "text-subtle", lineClamp: 1, includeFontPadding: true, style, children });
}
function ProjectRows(arg0) {
  let groupGuildId;
  let hideServer;
  let projects;
  let require;
  ({ projects, groupGuildId: require, hideServer: importDefault } = arg0);
  let obj = {
    hasIcons: true,
    children: projects.map((project) => {
      const obj = { project, groupGuildId: require, hideServer: importDefault };
      return metroImportAll(closure_15, obj, project.id);
    })
  };
  const TableRowGroup = TableRowGroup2.TableRowGroup;
  return closure_8(TableRowGroup, obj);
}
function ProjectGroup(arg0) {
  let ChevronSmallDownIcon;
  let bEFqlW;
  let collapsed;
  let forceExpanded;
  let formatToPlainString;
  let groupKey;
  let guild;
  let hideServer;
  let id;
  let items;
  let items1;
  let items2;
  let obj12;
  let onOpen;
  let projects;
  let title;
  let tmp12Result;
  let tmp21;
  let toggle;
  ({ title, guild, onOpen, projects, hideServer } = arg0);
  ({ groupKey, forceExpanded } = arg0);
  if (hideServer === undefined) {
    hideServer = false;
  }
  const tmp = closure_11();
  const obj = useConjureProjectGroupState;
  const conjureProjectGroupCollapsed = obj.useConjureProjectGroupCollapsed(groupKey, forceExpanded);
  ({ collapsed, toggle } = conjureProjectGroupCollapsed);
  const obj2 = useConjureProjectGroupState;
  const conjureProjectGroupActivity = obj2.useConjureProjectGroupActivity(projects);
  if (collapsed) {
    ChevronSmallDownIcon = tmp2(7963).ChevronSmallRightIcon;
  } else {
    ChevronSmallDownIcon = tmp2(10560).ChevronSmallDownIcon;
  }
  let tmp8 = null;
  const tmp7 = authStore;
  if (null != guild) {
    const obj3 = { guild, size: GuildIcon.GuildIconSizes.XSMALL_20, selected: false, style: tmp.groupIcon };
    const tmp11 = GuildIconDefault;
    tmp8 = metroImportAll(tmp11, obj3);
  }
  const obj4 = { children: items };
  items = [tmp8, ];
  const obj5 = { variant: "body-md/medium", color: "text-subtle", lineClamp: 1, style: tmp.groupName, children: title };
  items[1] = metroImportAll(Text_Text.Text, obj5);
  const tmp6Result = React4(tmp7, obj4);
  const obj6 = { style: tmp.group, children: items2 };
  const obj7 = { style: tmp.groupHeader, children: items1 };
  if (null != onOpen) {
    const obj8 = { scaleAmountInPx: 4, style: tmp.groupTitle, accessibilityRole: "button", accessibilityLabel: title, onPress: onOpen, children: tmp6Result };
    tmp12Result = tmp12(tmp2(7997).PressableScale, obj8);
  } else {
    const obj9 = { style: tmp.groupTitle, accessibilityRole: "header", children: tmp6Result };
    tmp12Result = tmp12(tmp14, obj9);
  }
  items1 = [tmp12Result, , ];
  let tmp12Result3 = null;
  if (collapsed) {
    tmp12Result3 = null;
    if (null != conjureProjectGroupActivity) {
      const obj10 = { activity: conjureProjectGroupActivity };
      tmp12Result3 = tmp12(ActivityIndicatorBadge, obj10);
    }
  }
  items1[1] = tmp12Result3;
  const obj11 = { scaleAmountInPx: 4, hitSlop: PX_8, accessibilityRole: "button", accessibilityState: { expanded: !collapsed }, accessibilityLabel: formatToPlainString(bEFqlW, { name: title }), onPress: toggle, children: metroImportAll(ChevronSmallDownIcon, obj12) };
  const PressableScale = tmp2(7997).PressableScale;
  const intl = tmp2(1113).intl;
  formatToPlainString = intl.formatToPlainString;
  const tmp19 = _modDef4131;
  if (collapsed) {
    bEFqlW = tmp19.bEFqlW;
    tmp21 = tmp18;
  } else {
    bEFqlW = tmp19["+0dHt6"];
    tmp21 = tmp18;
  }
  obj12 = { size: "xs", color: tmp21(575).colors.ICON_MUTED };
  items1[2] = metroImportAll(PressableScale, obj11);
  items2 = [React4(View, obj7), ];
  let tmp12Result4 = null;
  if (!collapsed) {
    const obj13 = { projects, groupGuildId: id, hideServer };
    id = undefined;
    const tmp23 = ProjectRows;
    if (guild != null) {
      id = guild.id;
    }
    tmp12Result4 = tmp12(tmp23, obj13);
  }
  items2[1] = tmp12Result4;
  return React4(View, obj6);
}
function ServerProjectGroup(guildId) {
  let forceExpanded;
  let name;
  let projects;
  let tmp9;
  guildId = guildId.guildId;
  ({ projects, forceExpanded } = guildId);
  let obj = guildId(504);
  const items = [GuildStore];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId), items1);
  const items2 = [guildId];
  let obj2 = { groupKey: guildId, title: name, guild: stateFromStores, onOpen: tmp9, projects, forceExpanded, hideServer: true };
  name = undefined;
  const callback = react.useCallback(() => {
    const obj = KeyboardManagerUtils;
    const result = obj.dismissGlobalKeyboard();
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.hideAllActionSheets();
    const obj3 = openConjureProject;
    obj3.openConjureProject(guildId);
  }, items2);
  const tmp = guildId;
  const tmp5 = closure_8;
  const tmp6 = ProjectGroup;
  if (stateFromStores != null) {
    name = stateFromStores.name;
  }
  if (name == null) {
    const intl = tmp(1113).intl;
    name = intl.string(_modDef4131["6bhivN"]);
  }
  tmp9 = undefined;
  if (null != stateFromStores) {
    tmp9 = callback;
  }
  return tmp5(tmp6, obj2);
}
const View = react_native.View;
({ jsx: metroImportAll, jsxs: c9, Fragment: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { state: obj2, trailingIndicator: size, subLabel: obj3, shareTargetIcon: obj4, userIconWrapper: size1, shareTargetLabel: { flexShrink: 1 }, unreadDot: size2, group: obj5, groupHeader: obj6, groupTitle: obj7, groupIcon: obj8, groupName: { flexShrink: 1 } };
obj2 = { alignItems: "center", gap: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
size = { width: nativeDefault.space.PX_20, height: nativeDefault.space.PX_20, alignItems: "center", justifyContent: "center" };
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj4 = { borderRadius: nativeDefault.radii.xs };
size1 = { width: nativeDefault.space.PX_16, height: nativeDefault.space.PX_16, alignItems: "center", justifyContent: "center" };
size2 = { width: nativeDefault.space.PX_8, height: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj5 = { gap: nativeDefault.space.PX_8 };
obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, minHeight: nativeDefault.space.PX_32 };
obj7 = { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj8 = { borderRadius: nativeDefault.radii.xs };
let closure_11 = createStyles(obj);
const PX_8 = nativeDefault.space.PX_8;
let closure_15 = react.memo(function ProjectRow(project) {
  let UserIcon;
  let hideServer;
  let items4;
  let obj12;
  let stringResult1;
  let tmp11;
  let tmp28Result6;
  project = project.project;
  ({ groupGuildId: importDefault, hideServer } = project);
  if (hideServer === undefined) {
    hideServer = false;
  }
  const tmp = closure_11();
  let obj = project(10521);
  const conjureHomeProjectState = obj.useConjureHomeProjectState(project.id);
  let obj2 = project(504);
  const items = [ConjurePublishStatusStore];
  const items1 = [project.id];
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
  let obj3 = project(10521);
  let result = obj3.conjureHomeProjectShowsDraft(conjureHomeProjectState, stateFromStores);
  let obj4 = project(10521);
  let result1 = obj4.conjureProjectLastActivityTime(project);
  const obj5 = project(10552);
  const conjureProjectShareTargetDetails = obj5.useConjureProjectShareTargetDetails(project);
  if (!hideServer) {
    tmp11 = conjureProjectShareTargetDetails;
  } else {
    let kind;
    if (conjureProjectShareTargetDetails != null) {
      kind = conjureProjectShareTargetDetails.kind;
    }
    tmp11 = null;
  }
  let tmp14Result = null;
  if (null != result1) {
    const obj6 = { since: result1, getFormatter: project(6387).getAbbreviatedFormatter, includeWeeks: true };
    const tmp14 = getTimestampStringDefault;
    tmp14Result = tmp14(obj6);
  }
  let stringResult = null;
  if (result) {
    const intl = tmp2(1113).intl;
    stringResult = intl.string(_modDef4131.CSAaT0);
  }
  if ("deleting" === conjureHomeProjectState) {
    const intl4 = tmp2(1113).intl;
    stringResult1 = intl4.string(_modDef4131.Yh5pAc);
  } else if ("in_progress" === conjureHomeProjectState) {
    const intl3 = tmp2(1113).intl;
    stringResult1 = intl3.string(_modDef4131["Y8pS+n"]);
  } else {
    const items2 = [tmp14Result, , ];
    let label;
    if (tmp11 != null) {
      label = tmp11.label;
    }
    if (label == null) {
      let stringResult2 = null;
      const tmp2Result = project(10552);
      if (tmp2Result.isConjureProjectWithoutServer(project)) {
        const intl2 = tmp2(1113).intl;
        stringResult2 = intl2.string(_modDef4131.poYQxw);
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
    stringResult3 = intl5.string(_modDef4131["N+3Pzk"]);
  }
  items3[2] = stringResult3;
  const found1 = items3.filter((item) => null != item && "" !== item);
  const joined = found1.join(", ");
  const obj7 = { label: project.name, subLabel: null, accessibilityLabel: null, icon: null, trailing: null, disabled: null, onPress: null };
  if ("deleting" !== conjureHomeProjectState) {
    if ("in_progress" !== conjureHomeProjectState) {
      let tmp45Result;
      if (null != tmp11) {
        let tmp28Result4;
        let tmp28Result = null;
        const obj8 = { style: tmp.subLabel, children: items4 };
        const tmp45 = closure_9;
        if (null != tmp14Result) {
          const _HermesInternal = HermesInternal;
          const obj9 = { children: "" + tmp14Result + " \u00B7" };
          tmp28Result = tmp28(SubLabelText, obj9);
        }
        items4 = [tmp28Result, , , ];
        if ("guild" === tmp11.kind) {
          const obj10 = { guild: tmp11.guild, size: project(7720).GuildIconSizes.XXSMALL, selected: false, style: tmp.shareTargetIcon };
          const tmp36 = GuildIconDefault;
          tmp28Result4 = tmp28(tmp36, obj10);
        } else {
          const obj11 = { style: tmp.userIconWrapper, children: closure_8(UserIcon, obj12) };
          obj12 = { size: "xxs", color: nativeDefault.colors.TEXT_SUBTLE };
          UserIcon = tmp2(10553).UserIcon;
          tmp28Result4 = tmp28(tmp46, obj11);
        }
        items4[1] = tmp28Result4;
        const obj13 = { style: tmp.shareTargetLabel, children: tmp11.label };
        items4[2] = closure_8(SubLabelText, obj13);
        let tmp28Result5 = null;
        const tmp37 = SubLabelText;
        if (null != stringResult) {
          const _HermesInternal2 = HermesInternal;
          const obj14 = { children: "\u00B7 " + stringResult };
          tmp28Result5 = tmp28(tmp37, obj14);
        }
        items4[3] = tmp28Result5;
        tmp45Result = tmp45(tmp46, obj8);
      }
      obj7.subLabel = tmp45Result;
      obj7.accessibilityLabel = joined;
      const obj15 = { project, size: "list" };
      obj7.icon = closure_8(ConjureProjectIconDefault, obj15);
      if ("deleting" !== conjureHomeProjectState) {
        obj7.trailing = tmp28Result6;
        obj7.disabled = "deleting" === conjureHomeProjectState;
        obj7.onPress = function onPress() {
          let result = importDefault;
          if (importDefault == null) {
            const obj = conjureServerProject;
            result = obj.conjureServerProjectGuildId(tmp);
          }
          if (null != result) {
            if (null != GuildStore.getGuild(result)) {
              const obj2 = KeyboardManagerUtils;
              const result1 = obj2.dismissGlobalKeyboard();
              const obj3 = ActionSheetActionCreatorsDefault;
              obj3.hideAllActionSheets();
              const obj4 = openConjureProject;
              obj4.openConjureProject(result, project.id);
            }
          }
          openConjureHomeScreenDefault(project.id, { entryPoint: "project_list" });
        };
        return closure_8(tmp29, obj7);
      }
      let str10 = "working";
      const tmp44 = ActivityIndicatorBadge;
      if ("unread" === conjureHomeProjectState) {
        str10 = "unread";
      }
      const obj16 = { activity: str10 };
      tmp28Result6 = closure_8(tmp44, obj16);
    }
  }
  let tmp41;
  if ("" !== stringResult1) {
    tmp41 = stringResult1;
  }
  tmp45Result = tmp41;
});
size = size_mod;
let result = size.fileFinishedImporting("modules/conjure/projects/native/ConjureProjectGroupList.tsx");

export default function ConjureProjectGroupList(query) {
  let Text;
  let Text3;
  let collaborating;
  let forceExpanded;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items1;
  let items2;
  let items3;
  let obj3;
  let obj9;
  let ownedProjectsFetchState;
  let personal;
  let servers;
  let tmp14Result;
  _require = undefined;
  const tmp = closure_11();
  const tmp4 = useConjureProjectGroupsDefault(query.query);
  ({ personal, collaborating, servers } = tmp4);
  const hasProjects = tmp4.hasProjects;
  let obj = require("get initialized");
  const items = [ConjureProjectStore];
  const stateFromStores = obj.useStateFromStores(items, () => ownedProjectsFetchState.getOwnedProjectsFetchState());
  const tmp7 = "" !== query.query.trim();
  _require = tmp7;
  if (personal.length <= 0) {
    if (collaborating.length <= 0) {
      let tmp14Result1;
      if (servers.length <= 0) {
        if (hasProjects) {
          const obj2 = { style: tmp.state, children: closure_8(Text3, obj3) };
          obj3 = { variant: "body-sm/normal", color: "text-subtle", children: intl4.string(_modDef4131.X37fkR) };
          Text3 = tmp5(5929).Text;
          intl4 = tmp5(1113).intl;
          tmp14Result1 = closure_8(View, obj2);
        } else if ("error" === stateFromStores) {
          const obj4 = { style: tmp.state, children: items1 };
          const obj5 = { variant: "body-sm/normal", color: "text-muted", children: intl2.string(_modDef4131.DJAPMO) };
          const Text2 = tmp5(5929).Text;
          intl2 = tmp5(1113).intl;
          items1 = [closure_8(Text2, obj5), ];
          const obj6 = {
            variant: "secondary",
            size: "sm",
            text: intl3.string(_modDef4131["WFJ/vb"]),
            onPress() {
                      const obj = forceExpanded(dependencyMap[33]);
                      return obj.listProjects();
                    }
          };
          const Button = tmp5(5936).Button;
          intl3 = tmp5(1113).intl;
          items1[1] = closure_8(Button, obj6);
          tmp14Result1 = closure_9(View, obj4);
        } else {
          let obj8;
          const tmp22 = View;
          if ("success" !== stateFromStores) {
            obj8 = { style: tmp.state, children: closure_8(require("ActivityIndicator/ActivityIndicator").ActivityIndicator, {}) };
            const obj7 = { style: tmp.state, children: closure_8(require("ActivityIndicator/ActivityIndicator").ActivityIndicator, {}) };
          } else {
            obj8 = { style: tmp.state, children: closure_8(Text, obj9) };
            obj9 = { variant: "body-sm/normal", color: "text-subtle", children: intl.string(_modDef4131["9/5sLV"]) };
            Text = tmp5(5929).Text;
            intl = tmp5(1113).intl;
          }
          tmp14Result1 = tmp21(tmp22, obj8);
        }
      }
      return tmp14Result1;
    }
  }
  const tmp15 = closure_10;
  if (personal.length > 0) {
    const obj10 = { style: tmp.group, children: items2 };
    const obj11 = {
      title: intl5.string(_modDef4131.w9wAEy),
      hasIcons: true,
      children: personal.map((project) => {
          const obj = { project };
          return closure_1_8(closure_1_15, obj, project.id);
        })
    };
    const TableRowGroup = tmp5(7746).TableRowGroup;
    intl5 = tmp5(1113).intl;
    items2 = [closure_8(TableRowGroup, obj11), ];
    let tmp18Result = null;
    const tmp17 = View;
    const tmp18 = closure_8;
    if (collaborating.length > 0) {
      const obj12 = { groupKey: require("ConjureProjectGroupsTypes").CONJURE_COLLABORATING_GROUP_KEY, title: intl6.string(_modDef4131.dOfCq0), projects: collaborating, forceExpanded: tmp7 };
      intl6 = tmp5(1113).intl;
      tmp18Result = tmp18(ProjectGroup, obj12);
    }
    items2[1] = tmp18Result;
    tmp14Result = tmp14(tmp17, obj10);
  } else {
    tmp14Result = null;
  }
  const obj13 = { children: items3 };
  items3 = [
    tmp14Result,
    servers.map((guildId) => {
      const obj = { guildId: guildId.guildId, projects: guildId.projects, forceExpanded };
      return metroImportAll(ServerProjectGroup, obj, guildId.guildId);
    })
  ];
  tmp14Result1 = tmp14(tmp15, obj13);
};
