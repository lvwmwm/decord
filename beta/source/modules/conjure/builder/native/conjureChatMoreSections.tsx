// Module ID: 18385
// Function ID: 18386
// Name: conjureChatMoreSections
// Dependencies: [6621, 1112, 4190, 10371, 10137, 18386, 14366, 11239, 6936, 5622, 10343, 7386, 5609, 18388, 5615, 16955, 17187, 18352, 10378, 7235, 18301, 5620, 2]
// Exports: conjureChatMoreSections

// Module 18385 (conjureChatMoreSections)
import _modDef4190 from "module_4190" /* 4190 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6621 */;
import conjureProjectMute from "conjureProjectMute" /* 6936 */;
import openConjureUnpublishUserAppAlertDefault from "openConjureUnpublishUserAppAlert" /* 18301 */;
import conjureProjectActions from "conjureProjectActions" /* 18388 */;
import size from "module_2" /* 2 */;

const isProjectOwner = ConjureProjectStore.isProjectOwner;
const result = size.fileFinishedImporting("modules/conjure/builder/native/conjureChatMoreSections.tsx");

export function conjureChatMoreSections(project) {
  let annotate;
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl14;
  let intl15;
  let intl2;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let muted;
  let onConnectTool;
  let onDebug;
  let onHistory;
  let onOpenSettings;
  let onRefresh;
  let onShare;
  let preview;
  let stringResult;
  project = project.project;
  ({ guildId: importDefault, removeTarget: dependencyMap, annotate, onShare, onRefresh, onDebug, onConnectTool, preview } = project);
  ({ muted, onOpenSettings, onHistory } = project);
  const tmp = preview(project);
  let obj = { kind: "action", key: "settings", label: intl.string(_modDef4190.I2XSKe), IconComponent: project(10371).SettingsIcon, onPress: onOpenSettings };
  const tmp2 = project;
  intl = project(1112).intl;
  const items = [obj];
  if (null != onShare) {
    const push = items.push;
    const obj2 = { kind: "action", key: "share", label: intl2.string(tmp2(1112).t.RDE0Sc), IconComponent: tmp2(10137).ShareIcon, onPress: onShare };
    intl2 = tmp2(1112).intl;
    push(obj2);
  }
  if (null != annotate) {
    const entry = { kind: "switch", key: "annotate", label: intl15.string(tmp4(4190)["6GOFLB"]), IconComponent: tmp2(18386).ExperimentalDirectSelectIcon, value: null, disabled: null, subLabel: stringResult, closesOnEnable: true, onValueChange: annotate.onToggle };
    const push10 = items.push;
    intl15 = tmp2(1112).intl;
    ({ active: obj15.value, busy: obj15.disabled } = annotate);
    stringResult = undefined;
    if (annotate.busy) {
      const intl3 = tmp2(1112).intl;
      stringResult = intl3.string(tmp4(4190).bcdhe6);
    }
    push10(entry);
  }
  if (null != onRefresh) {
    const push2 = items.push;
    const obj3 = { kind: "action", key: "refresh", label: intl4.string(_modDef4190["p4B/7M"]), IconComponent: tmp2(14366).RefreshIcon, onPress: onRefresh };
    intl4 = tmp2(1112).intl;
    push2(obj3);
  }
  const entry1 = {
    kind: "switch",
    key: "notifications",
    label: intl5.string(tmp2(1112).t.HcoRu0),
    IconComponent: tmp2(11239).BellIcon,
    value: !muted,
    onValueChange(arg0) {
      const obj = conjureProjectMute;
      return obj.setConjureProjectMuted(project.id, !arg0);
    }
  };
  const push3 = items.push;
  intl5 = tmp2(1112).intl;
  const obj4 = { kind: "action", key: "history", label: intl6.string(_modDef4190["3hIVou"]), IconComponent: tmp2(5622).ClockIcon, onPress: onHistory };
  intl6 = tmp2(1112).intl;
  push3(entry1, obj4);
  let items1;
  if (preview != null) {
    items1 = preview.items;
  }
  if (items1 == null) {
    items1 = [];
  }
  const obj5 = {
    kind: "action",
    key: "copy-link",
    label: intl7.string(tmp2(1112).t.WqhZss),
    IconComponent: tmp2(5609).LinkIcon,
    onPress() {
      const obj = conjureProjectActions;
      return obj.copyConjureProjectLink(project, importDefault);
    }
  };
  const mapped = items1.map((kind, index) => {
    let KeyIcon;
    let closure_0 = kind;
    let obj = {
      kind: "action",
      key: "preview-" + kind.kind + "-" + index,
      label: kind.label,
      IconComponent: KeyIcon,
      onPress() {
        let onPressResult;
        const obj = preview;
        if (preview != null) {
          onPressResult = obj.onPress(kind);
        }
        return onPressResult;
      }
    };
    if ("refresh" === kind.kind) {
      KeyIcon = project(dependencyMap[10]).RetryIcon;
    } else {
      KeyIcon = project(dependencyMap[11]).KeyIcon;
    }
    return obj;
  });
  intl7 = tmp2(1112).intl;
  const items2 = [obj5, ];
  const obj6 = {
    kind: "action",
    key: "export",
    label: intl8.string(_modDef4190.WsEEP7),
    IconComponent: tmp2(5615).DownloadIcon,
    onPress() {
      const obj = conjureProjectActions;
      return obj.exportConjureProject(project);
    }
  };
  intl8 = tmp2(1112).intl;
  items2[1] = obj6;
  if (tmp) {
    const push4 = items2.push;
    const obj7 = {
      kind: "action",
      key: "import",
      label: intl9.string(_modDef4190.rWGY3e),
      IconComponent: tmp2(16955).FileUpIcon,
      onPress() {
          const obj = conjureProjectActions;
          return obj.importConjureProject(project);
        }
    };
    intl9 = tmp2(1112).intl;
    push4(obj7);
  }
  const items3 = [];
  if (null != onDebug) {
    const push5 = items3.push;
    const obj8 = { kind: "action", key: "debug", label: intl10.string(_modDef4190["Q4FN+H"]), IconComponent: tmp2(17187).BugIcon, onPress: onDebug };
    intl10 = tmp2(1112).intl;
    push5(obj8);
  }
  if (null != onConnectTool) {
    const push6 = items3.push;
    const obj9 = { kind: "action", key: "connect-tool", label: intl11.string(_modDef4190.yOIql5), IconComponent: tmp2(18352).LinkPlusIcon, onPress: onConnectTool };
    intl11 = tmp2(1112).intl;
    push6(obj9);
  }
  const push7 = items3.push;
  const obj10 = {
    kind: "action",
    key: "copy-project-id",
    label: intl12.string(_modDef4190["nm/zuU"]),
    IconComponent: tmp2(10378).IdIcon,
    onPress() {
      const obj = conjureProjectActions;
      return obj.copyConjureProjectId(project);
    }
  };
  intl12 = tmp2(1112).intl;
  push7(obj10);
  const tmp2Result = tmp2(18388);
  if (tmp2Result.canUnpublishConjureUserApp(project)) {
    const push8 = items3.push;
    const obj11 = {
      kind: "action",
      key: "unpublish",
      label: intl13.string(_modDef4190.jYAR58),
      IconComponent: tmp2(7235).EyeSlashIcon,
      destructive: true,
      onPress() {
          return openConjureUnpublishUserAppAlertDefault(project);
        }
    };
    intl13 = tmp2(1112).intl;
    push8(obj11);
  }
  if (tmp) {
    const push9 = items3.push;
    const obj12 = {
      kind: "action",
      key: "delete",
      label: intl14.string(tmp2(1112).t.oyYWHE),
      IconComponent: tmp2(5620).TrashIcon,
      destructive: true,
      onPress() {
          const obj = conjureProjectActions;
          return obj.deleteConjureProject(project, dependencyMap);
        }
    };
    intl14 = tmp2(1112).intl;
    push9(obj12);
  }
  const items4 = [items, mapped, items2, items3];
  return items4.filter((item) => item.length > 0);
}
