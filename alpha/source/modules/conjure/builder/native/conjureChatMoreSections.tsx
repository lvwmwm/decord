// Module ID: 18539
// Function ID: 18540
// Name: conjureChatMoreSections
// Dependencies: [6903, 1112, 4244, 10409, 12822, 18540, 14025, 8555, 7639, 5721, 10640, 7291, 5708, 18542, 5714, 12377, 17340, 18505, 11035, 7257, 18454, 18535, 18544, 5719, 2]
// Exports: conjureChatMoreSections

// Module 18539 (conjureChatMoreSections)
import ConjureProjectStore from "ConjureProjectStore" /* 6903 */;
import conjureProjectMute from "conjureProjectMute" /* 7639 */;
import openConjureUnpublishUserAppAlertDefault from "openConjureUnpublishUserAppAlert" /* 18454 */;
import conjureProjectActions from "conjureProjectActions" /* 18542 */;
import openConjureRemoveAppAlertDefault from "openConjureRemoveAppAlert" /* 18544 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const isProjectOwner = ConjureProjectStore.isProjectOwner;
let result = size.fileFinishedImporting("modules/conjure/builder/native/conjureChatMoreSections.tsx");

export function conjureChatMoreSections(project) {
  let annotate;
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl14;
  let intl15;
  let intl16;
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
  let removeTarget;
  let stringResult;
  let target;
  project = project.project;
  ({ guildId: importDefault, removeTarget } = project);
  ({ annotate, onOpenSettings, onShare, onRefresh, onDebug, onConnectTool, preview } = project);
  let c4;
  ({ muted, onHistory } = project);
  const tmp = preview(project);
  const items = [];
  if (null != onOpenSettings) {
    let obj = { kind: "action", key: "settings", label: intl.string(require("module_4244").I2XSKe), IconComponent: project(removeTarget[3]).SettingsIcon, onPress: onOpenSettings };
    const push = items.push;
    intl = project(removeTarget[1]).intl;
    push(obj);
  }
  if (null != onShare) {
    const push2 = items.push;
    const obj2 = { kind: "action", key: "share", label: intl2.string(project(removeTarget[1]).t.RDE0Sc), IconComponent: project(removeTarget[4]).ShareIcon, onPress: onShare };
    intl2 = project(removeTarget[1]).intl;
    push2(obj2);
  }
  if (null != annotate) {
    const entry = { kind: "switch", key: "annotate", label: intl16.string(require("module_4244")["6GOFLB"]), IconComponent: project(removeTarget[5]).ExperimentalDirectSelectIcon, value: null, disabled: null, subLabel: stringResult, closesOnEnable: true, onValueChange: annotate.onToggle };
    const push12 = items.push;
    intl16 = project(removeTarget[1]).intl;
    ({ active: obj17.value, busy: obj17.disabled } = annotate);
    stringResult = undefined;
    const tmp28 = project;
    const tmp30 = importDefault;
    if (annotate.busy) {
      const intl3 = tmp28(tmp29[1]).intl;
      stringResult = intl3.string(tmp30(tmp29[2]).bcdhe6);
    }
    push12(entry);
  }
  if (null != onRefresh) {
    const push3 = items.push;
    const obj3 = { kind: "action", key: "refresh", label: intl4.string(require("module_4244")["p4B/7M"]), IconComponent: project(removeTarget[6]).RefreshIcon, onPress: onRefresh };
    intl4 = project(removeTarget[1]).intl;
    push3(obj3);
  }
  const entry1 = {
    kind: "switch",
    key: "notifications",
    label: intl5.string(project(removeTarget[1]).t.HcoRu0),
    IconComponent: project(removeTarget[7]).BellIcon,
    value: !muted,
    onValueChange(arg0) {
      const obj = conjureProjectMute;
      return obj.setConjureProjectMuted(project.id, !arg0);
    }
  };
  const push4 = items.push;
  intl5 = project(removeTarget[1]).intl;
  const obj4 = { kind: "action", key: "history", label: intl6.string(require("module_4244")["3hIVou"]), IconComponent: project(removeTarget[9]).ClockIcon, onPress: onHistory };
  intl6 = project(removeTarget[1]).intl;
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
    label: intl7.string(project(removeTarget[1]).t.WqhZss),
    IconComponent: project(removeTarget[12]).LinkIcon,
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
      KeyIcon = project(removeTarget[10]).RetryIcon;
    } else {
      KeyIcon = project(removeTarget[11]).KeyIcon;
    }
    return obj;
  });
  intl7 = tmp15(tmp16[1]).intl;
  const items2 = [obj5, ];
  const obj6 = {
    kind: "action",
    key: "export",
    label: intl8.string(require("module_4244").WsEEP7),
    IconComponent: project(removeTarget[14]).DownloadIcon,
    onPress() {
      const obj = conjureProjectActions;
      return obj.exportConjureProject(project);
    }
  };
  intl8 = tmp15(tmp16[1]).intl;
  items2[1] = obj6;
  if (tmp) {
    const push5 = items2.push;
    const obj7 = {
      kind: "action",
      key: "import",
      label: intl9.string(require("module_4244").rWGY3e),
      IconComponent: project(removeTarget[15]).FileUpIcon,
      onPress() {
          const obj = conjureProjectActions;
          return obj.importConjureProject(project);
        }
    };
    intl9 = tmp15(tmp16[1]).intl;
    push5(obj7);
  }
  const items3 = [];
  if (null != onDebug) {
    const push6 = items3.push;
    const obj8 = { kind: "action", key: "debug", label: intl10.string(require("module_4244")["Q4FN+H"]), IconComponent: project(removeTarget[16]).BugIcon, onPress: onDebug };
    intl10 = tmp15(tmp16[1]).intl;
    push6(obj8);
  }
  if (null != onConnectTool) {
    const push7 = items3.push;
    const obj9 = { kind: "action", key: "connect-tool", label: intl11.string(require("module_4244").yOIql5), IconComponent: project(removeTarget[17]).LinkPlusIcon, onPress: onConnectTool };
    intl11 = tmp15(tmp16[1]).intl;
    push7(obj9);
  }
  const push8 = items3.push;
  const obj10 = {
    kind: "action",
    key: "copy-project-id",
    label: intl12.string(require("module_4244")["nm/zuU"]),
    IconComponent: project(removeTarget[18]).IdIcon,
    onPress() {
      const obj = conjureProjectActions;
      return obj.copyConjureProjectId(project);
    }
  };
  intl12 = tmp15(tmp16[1]).intl;
  push8(obj10);
  const tmp15Result = project(removeTarget[13]);
  if (tmp15Result.canUnpublishConjureUserApp(project)) {
    const push9 = items3.push;
    const obj11 = {
      kind: "action",
      key: "unpublish",
      label: intl13.string(require("module_4244").jYAR58),
      IconComponent: project(removeTarget[19]).EyeSlashIcon,
      destructive: true,
      onPress() {
          return openConjureUnpublishUserAppAlertDefault(project);
        }
    };
    intl13 = tmp15(tmp16[1]).intl;
    push9(obj11);
  }
  const tmp15Result2 = project(removeTarget[21]);
  const result = tmp15Result2.conjureAdminUnpublishTarget(project, removeTarget);
  c4 = result;
  if (null != result) {
    const push10 = items3.push;
    const obj12 = {
      kind: "action",
      key: "unpublish-from-server",
      label: intl14.string(require("module_4244").mS61Dm),
      IconComponent: project(removeTarget[19]).EyeSlashIcon,
      destructive: true,
      onPress() {
          const obj = { project, target, action: "remove" };
          return openConjureRemoveAppAlertDefault(obj);
        }
    };
    intl14 = tmp15(tmp16[1]).intl;
    push10(obj12);
  }
  if (tmp) {
    const push11 = items3.push;
    const obj13 = {
      kind: "action",
      key: "delete",
      label: intl15.string(project(removeTarget[1]).t.oyYWHE),
      IconComponent: project(removeTarget[23]).TrashIcon,
      destructive: true,
      onPress() {
          const obj = conjureProjectActions;
          return obj.deleteConjureProject(project, removeTarget);
        }
    };
    intl15 = tmp15(tmp16[1]).intl;
    push11(obj13);
  }
  const items4 = [items, mapped, items2, items3];
  return items4.filter((item) => item.length > 0);
}
