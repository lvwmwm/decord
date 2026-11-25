// Module ID: 18538
// Function ID: 18539
// Name: conjureChatMoreSections
// Dependencies: [6903, 1112, 4244, 10409, 12822, 18539, 14025, 8555, 7639, 5721, 10640, 7291, 5708, 18541, 5714, 12377, 17340, 18505, 11035, 7257, 18454, 5719, 2]
// Exports: conjureChatMoreSections

// Module 18538 (conjureChatMoreSections)
import _modDef4244 from "module_4244" /* 4244 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6903 */;
import conjureProjectMute from "conjureProjectMute" /* 7639 */;
import openConjureUnpublishUserAppAlertDefault from "openConjureUnpublishUserAppAlert" /* 18454 */;
import conjureProjectActions from "conjureProjectActions" /* 18541 */;
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
  ({ guildId: importDefault, removeTarget: dependencyMap, annotate, onOpenSettings, onShare, onRefresh, onDebug, onConnectTool, preview } = project);
  ({ muted, onHistory } = project);
  const tmp = preview(project);
  const items = [];
  if (null != onOpenSettings) {
    let obj = { kind: "action", key: "settings", label: intl.string(_modDef4244.I2XSKe), IconComponent: project(10409).SettingsIcon, onPress: onOpenSettings };
    const push = items.push;
    intl = project(1112).intl;
    push(obj);
  }
  if (null != onShare) {
    const push2 = items.push;
    const obj2 = { kind: "action", key: "share", label: intl2.string(project(1112).t.RDE0Sc), IconComponent: project(12822).ShareIcon, onPress: onShare };
    intl2 = project(1112).intl;
    push2(obj2);
  }
  if (null != annotate) {
    const entry = { kind: "switch", key: "annotate", label: intl15.string(_modDef4244["6GOFLB"]), IconComponent: project(18539).ExperimentalDirectSelectIcon, value: null, disabled: null, subLabel: stringResult, closesOnEnable: true, onValueChange: annotate.onToggle };
    const push11 = items.push;
    intl15 = project(1112).intl;
    ({ active: obj15.value, busy: obj15.disabled } = annotate);
    stringResult = undefined;
    const tmp26 = project;
    const tmp28 = importDefault;
    if (annotate.busy) {
      const intl3 = tmp26(1112).intl;
      stringResult = intl3.string(tmp28(4244).bcdhe6);
    }
    push11(entry);
  }
  if (null != onRefresh) {
    const push3 = items.push;
    const obj3 = { kind: "action", key: "refresh", label: intl4.string(_modDef4244["p4B/7M"]), IconComponent: project(14025).RefreshIcon, onPress: onRefresh };
    intl4 = project(1112).intl;
    push3(obj3);
  }
  const entry1 = {
    kind: "switch",
    key: "notifications",
    label: intl5.string(project(1112).t.HcoRu0),
    IconComponent: project(8555).BellIcon,
    value: !muted,
    onValueChange(arg0) {
      const obj = conjureProjectMute;
      return obj.setConjureProjectMuted(project.id, !arg0);
    }
  };
  const push4 = items.push;
  intl5 = project(1112).intl;
  const obj4 = { kind: "action", key: "history", label: intl6.string(_modDef4244["3hIVou"]), IconComponent: project(5721).ClockIcon, onPress: onHistory };
  intl6 = project(1112).intl;
  push4(entry1, obj4);
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
    label: intl7.string(project(1112).t.WqhZss),
    IconComponent: project(5708).LinkIcon,
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
  intl7 = tmp15(1112).intl;
  const items2 = [obj5, ];
  const obj6 = {
    kind: "action",
    key: "export",
    label: intl8.string(_modDef4244.WsEEP7),
    IconComponent: project(5714).DownloadIcon,
    onPress() {
      const obj = conjureProjectActions;
      return obj.exportConjureProject(project);
    }
  };
  intl8 = tmp15(1112).intl;
  items2[1] = obj6;
  if (tmp) {
    const push5 = items2.push;
    const obj7 = {
      kind: "action",
      key: "import",
      label: intl9.string(_modDef4244.rWGY3e),
      IconComponent: project(12377).FileUpIcon,
      onPress() {
          const obj = conjureProjectActions;
          return obj.importConjureProject(project);
        }
    };
    intl9 = tmp15(1112).intl;
    push5(obj7);
  }
  const items3 = [];
  if (null != onDebug) {
    const push6 = items3.push;
    const obj8 = { kind: "action", key: "debug", label: intl10.string(_modDef4244["Q4FN+H"]), IconComponent: project(17340).BugIcon, onPress: onDebug };
    intl10 = tmp15(1112).intl;
    push6(obj8);
  }
  if (null != onConnectTool) {
    const push7 = items3.push;
    const obj9 = { kind: "action", key: "connect-tool", label: intl11.string(_modDef4244.yOIql5), IconComponent: project(18505).LinkPlusIcon, onPress: onConnectTool };
    intl11 = tmp15(1112).intl;
    push7(obj9);
  }
  const push8 = items3.push;
  const obj10 = {
    kind: "action",
    key: "copy-project-id",
    label: intl12.string(_modDef4244["nm/zuU"]),
    IconComponent: project(11035).IdIcon,
    onPress() {
      const obj = conjureProjectActions;
      return obj.copyConjureProjectId(project);
    }
  };
  intl12 = tmp15(1112).intl;
  push8(obj10);
  const tmp15Result = project(18541);
  if (tmp15Result.canUnpublishConjureUserApp(project)) {
    const push9 = items3.push;
    const obj11 = {
      kind: "action",
      key: "unpublish",
      label: intl13.string(_modDef4244.jYAR58),
      IconComponent: project(7257).EyeSlashIcon,
      destructive: true,
      onPress() {
          return openConjureUnpublishUserAppAlertDefault(project);
        }
    };
    intl13 = tmp15(1112).intl;
    push9(obj11);
  }
  if (tmp) {
    const push10 = items3.push;
    const obj12 = {
      kind: "action",
      key: "delete",
      label: intl14.string(project(1112).t.oyYWHE),
      IconComponent: project(5719).TrashIcon,
      destructive: true,
      onPress() {
          const obj = conjureProjectActions;
          return obj.deleteConjureProject(project, dependencyMap);
        }
    };
    intl14 = tmp15(1112).intl;
    push10(obj12);
  }
  const items4 = [items, mapped, items2, items3];
  return items4.filter((item) => item.length > 0);
}
