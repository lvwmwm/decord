// Module ID: 18602
// Function ID: 18603
// Name: conjureChatMoreSections
// Dependencies: [6934, 1112, 4245, 10454, 12871, 18603, 14077, 8597, 7670, 5752, 7172, 10685, 7322, 5739, 18605, 5745, 12427, 17391, 18568, 11081, 7288, 18517, 18598, 18607, 5750, 2]
// Exports: conjureChatMoreSections

// Module 18602 (conjureChatMoreSections)
import ConjureProjectStore from "ConjureProjectStore" /* 6934 */;
import conjureProjectMute from "conjureProjectMute" /* 7670 */;
import openConjureUnpublishUserAppAlertDefault from "openConjureUnpublishUserAppAlert" /* 18517 */;
import conjureProjectActions from "conjureProjectActions" /* 18605 */;
import openConjureRemoveAppAlertDefault from "openConjureRemoveAppAlert" /* 18607 */;
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
  let intl17;
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
  let onPlaceViews;
  let onRefresh;
  let onShare;
  let preview;
  let removeTarget;
  let stringResult;
  let target;
  project = project.project;
  ({ guildId: importDefault, removeTarget } = project);
  ({ annotate, onOpenSettings, onShare, onRefresh, onDebug, onConnectTool, onPlaceViews, preview } = project);
  let c4;
  ({ muted, onHistory } = project);
  const tmp = preview(project);
  const items = [];
  if (null != onOpenSettings) {
    let obj = { kind: "action", key: "settings", label: intl.string(require("module_4245").I2XSKe), IconComponent: project(removeTarget[3]).SettingsIcon, onPress: onOpenSettings };
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
    const entry = { kind: "switch", key: "annotate", label: intl17.string(require("module_4245")["6GOFLB"]), IconComponent: project(removeTarget[5]).ExperimentalDirectSelectIcon, value: null, disabled: null, subLabel: stringResult, closesOnEnable: true, onValueChange: annotate.onToggle };
    const push13 = items.push;
    intl17 = project(removeTarget[1]).intl;
    ({ active: obj18.value, busy: obj18.disabled } = annotate);
    stringResult = undefined;
    const tmp29 = project;
    const tmp31 = importDefault;
    if (annotate.busy) {
      const intl3 = tmp29(tmp30[1]).intl;
      stringResult = intl3.string(tmp31(tmp30[2]).bcdhe6);
    }
    push13(entry);
  }
  if (null != onRefresh) {
    const push3 = items.push;
    const obj3 = { kind: "action", key: "refresh", label: intl4.string(require("module_4245")["p4B/7M"]), IconComponent: project(removeTarget[6]).RefreshIcon, onPress: onRefresh };
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
  const obj4 = { kind: "action", key: "history", label: intl6.string(require("module_4245")["3hIVou"]), IconComponent: project(removeTarget[9]).ClockIcon, onPress: onHistory };
  intl6 = project(removeTarget[1]).intl;
  push4(entry1, obj4);
  if (null != onPlaceViews) {
    const push5 = items.push;
    const obj5 = { kind: "action", key: "place-views", label: intl7.string(require("module_4245").e4jp1l), IconComponent: project(removeTarget[10]).AppsIcon, onPress: onPlaceViews };
    intl7 = tmp15(tmp16[1]).intl;
    push5(obj5);
  }
  let items1;
  if (preview != null) {
    items1 = preview.items;
  }
  if (items1 == null) {
    items1 = [];
  }
  const obj6 = {
    kind: "action",
    key: "copy-link",
    label: intl8.string(project(removeTarget[1]).t.WqhZss),
    IconComponent: project(removeTarget[13]).LinkIcon,
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
      KeyIcon = project(removeTarget[11]).RetryIcon;
    } else {
      KeyIcon = project(removeTarget[12]).KeyIcon;
    }
    return obj;
  });
  intl8 = tmp15(tmp16[1]).intl;
  const items2 = [obj6, ];
  const obj7 = {
    kind: "action",
    key: "export",
    label: intl9.string(require("module_4245").WsEEP7),
    IconComponent: project(removeTarget[15]).DownloadIcon,
    onPress() {
      const obj = conjureProjectActions;
      return obj.exportConjureProject(project);
    }
  };
  intl9 = tmp15(tmp16[1]).intl;
  items2[1] = obj7;
  if (tmp) {
    const push6 = items2.push;
    const obj8 = {
      kind: "action",
      key: "import",
      label: intl10.string(require("module_4245").rWGY3e),
      IconComponent: project(removeTarget[16]).FileUpIcon,
      onPress() {
          const obj = conjureProjectActions;
          return obj.importConjureProject(project);
        }
    };
    intl10 = tmp15(tmp16[1]).intl;
    push6(obj8);
  }
  const items3 = [];
  if (null != onDebug) {
    const push7 = items3.push;
    const obj9 = { kind: "action", key: "debug", label: intl11.string(require("module_4245")["Q4FN+H"]), IconComponent: project(removeTarget[17]).BugIcon, onPress: onDebug };
    intl11 = tmp15(tmp16[1]).intl;
    push7(obj9);
  }
  if (null != onConnectTool) {
    const push8 = items3.push;
    const obj10 = { kind: "action", key: "connect-tool", label: intl12.string(require("module_4245").yOIql5), IconComponent: project(removeTarget[18]).LinkPlusIcon, onPress: onConnectTool };
    intl12 = tmp15(tmp16[1]).intl;
    push8(obj10);
  }
  const push9 = items3.push;
  const obj11 = {
    kind: "action",
    key: "copy-project-id",
    label: intl13.string(require("module_4245")["nm/zuU"]),
    IconComponent: project(removeTarget[19]).IdIcon,
    onPress() {
      const obj = conjureProjectActions;
      return obj.copyConjureProjectId(project);
    }
  };
  intl13 = tmp15(tmp16[1]).intl;
  push9(obj11);
  const tmp15Result = project(removeTarget[14]);
  if (tmp15Result.canUnpublishConjureUserApp(project)) {
    const push10 = items3.push;
    const obj12 = {
      kind: "action",
      key: "unpublish",
      label: intl14.string(require("module_4245").jYAR58),
      IconComponent: project(removeTarget[20]).EyeSlashIcon,
      destructive: true,
      onPress() {
          return openConjureUnpublishUserAppAlertDefault(project);
        }
    };
    intl14 = tmp15(tmp16[1]).intl;
    push10(obj12);
  }
  const tmp15Result2 = project(removeTarget[22]);
  const result = tmp15Result2.conjureAdminUnpublishTarget(project, removeTarget);
  c4 = result;
  if (null != result) {
    const push11 = items3.push;
    const obj13 = {
      kind: "action",
      key: "unpublish-from-server",
      label: intl15.string(require("module_4245").mS61Dm),
      IconComponent: project(removeTarget[20]).EyeSlashIcon,
      destructive: true,
      onPress() {
          const obj = { project, target, action: "remove" };
          return openConjureRemoveAppAlertDefault(obj);
        }
    };
    intl15 = tmp15(tmp16[1]).intl;
    push11(obj13);
  }
  if (tmp) {
    const push12 = items3.push;
    const obj14 = {
      kind: "action",
      key: "delete",
      label: intl16.string(project(removeTarget[1]).t.oyYWHE),
      IconComponent: project(removeTarget[24]).TrashIcon,
      destructive: true,
      onPress() {
          const obj = conjureProjectActions;
          return obj.deleteConjureProject(project, removeTarget);
        }
    };
    intl16 = tmp15(tmp16[1]).intl;
    push12(obj14);
  }
  const items4 = [items, mapped, items2, items3];
  return items4.filter((item) => item.length > 0);
}
