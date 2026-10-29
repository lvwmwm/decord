// Module ID: 12353
// Function ID: 12354
// Name: conjureChatMoreSections
// Dependencies: [6831, 1125, 3864, 7547, 10803, 12354, 12356, 9176, 10835, 5729, 11993, 7111, 5716, 12358, 5722, 12374, 12377, 12379, 10479, 11632, 12372, 7121, 12376, 5727, 2]
// Exports: conjureChatMoreSections

// Module 12353 (conjureChatMoreSections)
import conjureProjectMute from "conjureProjectMute" /* 10835 */;
import conjureProjectActions from "conjureProjectActions" /* 12358 */;
import openConjureRemoveAppAlertDefault from "openConjureRemoveAppAlert" /* 12372 */;
import openConjureUnpublishUserAppAlertDefault from "openConjureUnpublishUserAppAlert" /* 12376 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6831 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let c3;
let closure_4;
({ canRemixProject: c3, isProjectOwner: closure_4 } = ConjureProjectStore);
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
  let intl16;
  let intl2;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let muted;
  let obj12;
  let onConnectTool;
  let onDebug;
  let onHistory;
  let onOpenSettings;
  let onRefresh;
  let onRemix;
  let preview;
  let removeTarget;
  let stringResult;
  project = project.project;
  ({ guildId: importDefault, removeTarget } = project);
  ({ annotate, onRefresh, onDebug, onConnectTool, preview } = project);
  ({ muted, onOpenSettings, onRemix, onHistory } = project);
  const tmp = closure_4(project);
  let obj = { kind: "action", key: "settings", label: intl.string(require("module_3864").I2XSKe), IconComponent: project(removeTarget[3]).SettingsIcon, onPress: onOpenSettings };
  const tmp2 = project;
  intl = project(removeTarget[1]).intl;
  const items = [obj];
  if (preview(project)) {
    const push = items.push;
    const obj2 = { kind: "action", key: "remix", label: intl2.string(require("module_3864").XWgAfc), IconComponent: tmp2(removeTarget[4]).RemixIcon, onPress: onRemix };
    intl2 = tmp2(tmp3[1]).intl;
    push(obj2);
  }
  if (null != annotate) {
    const entry = { kind: "switch", key: "annotate", label: intl16.string(tmp4(tmp3[2])["6GOFLB"]), IconComponent: tmp2(tmp3[5]).ExperimentalDirectSelectIcon, value: null, disabled: null, subLabel: stringResult, closesOnEnable: true, onValueChange: annotate.onToggle };
    const push11 = items.push;
    intl16 = tmp2(tmp3[1]).intl;
    ({ active: obj17.value, busy: obj17.disabled } = annotate);
    stringResult = undefined;
    if (annotate.busy) {
      const intl3 = tmp2(tmp3[1]).intl;
      stringResult = intl3.string(tmp4(tmp3[2]).bcdhe6);
    }
    push11(entry);
  }
  if (null != onRefresh) {
    const push2 = items.push;
    const obj3 = { kind: "action", key: "refresh", label: intl4.string(require("module_3864")["p4B/7M"]), IconComponent: tmp2(removeTarget[6]).RefreshIcon, onPress: onRefresh };
    intl4 = tmp2(tmp3[1]).intl;
    push2(obj3);
  }
  const entry1 = {
    kind: "switch",
    key: "notifications",
    label: intl5.string(tmp2(tmp3[1]).t.HcoRu0),
    IconComponent: tmp2(tmp3[7]).BellIcon,
    value: !muted,
    onValueChange(arg0) {
      const obj = conjureProjectMute;
      return obj.setConjureProjectMuted(project.id, !arg0);
    }
  };
  const push3 = items.push;
  intl5 = tmp2(tmp3[1]).intl;
  const obj4 = { kind: "action", key: "history", label: intl6.string(require("module_3864")["3hIVou"]), IconComponent: tmp2(removeTarget[9]).ClockIcon, onPress: onHistory };
  intl6 = tmp2(tmp3[1]).intl;
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
    label: intl7.string(tmp2(removeTarget[1]).t.WqhZss),
    IconComponent: tmp2(removeTarget[12]).LinkIcon,
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
  intl7 = tmp2(tmp3[1]).intl;
  const items2 = [obj5, ];
  const obj6 = {
    kind: "action",
    key: "export",
    label: intl8.string(require("module_3864").WsEEP7),
    IconComponent: tmp2(removeTarget[14]).DownloadIcon,
    onPress() {
      const obj = conjureProjectActions;
      return obj.exportConjureProject(project);
    }
  };
  intl8 = tmp2(tmp3[1]).intl;
  items2[1] = obj6;
  if (tmp) {
    const push4 = items2.push;
    const obj7 = {
      kind: "action",
      key: "import",
      label: intl9.string(require("module_3864").rWGY3e),
      IconComponent: tmp2(removeTarget[15]).FileUpIcon,
      onPress() {
          const obj = conjureProjectActions;
          return obj.importConjureProject(project);
        }
    };
    intl9 = tmp2(tmp3[1]).intl;
    push4(obj7);
  }
  const items3 = [];
  if (null != onDebug) {
    const push5 = items3.push;
    const obj8 = { kind: "action", key: "debug", label: intl10.string(require("module_3864")["Q4FN+H"]), IconComponent: tmp2(removeTarget[16]).BugIcon, onPress: onDebug };
    intl10 = tmp2(tmp3[1]).intl;
    push5(obj8);
  }
  if (null != onConnectTool) {
    const push6 = items3.push;
    const obj9 = { kind: "action", key: "connect-tool", label: intl11.string(require("module_3864").yOIql5), IconComponent: tmp2(removeTarget[17]).LinkPlusIcon, onPress: onConnectTool };
    intl11 = tmp2(tmp3[1]).intl;
    push6(obj9);
  }
  const push7 = items3.push;
  const obj10 = {
    kind: "action",
    key: "copy-project-id",
    label: intl12.string(require("module_3864")["nm/zuU"]),
    IconComponent: tmp2(removeTarget[18]).IdIcon,
    onPress() {
      const obj = conjureProjectActions;
      return obj.copyConjureProjectId(project);
    }
  };
  intl12 = tmp2(tmp3[1]).intl;
  push7(obj10);
  let canRemoveBot;
  if (removeTarget != null) {
    canRemoveBot = removeTarget.canRemoveBot;
  }
  if (true === canRemoveBot) {
    const push8 = items3.push;
    const obj11 = {
      kind: "action",
      key: "remove-from-server",
      label: intl13.formatToPlainString(require("module_3864")["3gKG2j"], obj12),
      IconComponent: tmp2(removeTarget[19]).DoorExitIcon,
      destructive: true,
      onPress() {
          const obj = { project, target: removeTarget, action: "remove" };
          return openConjureRemoveAppAlertDefault(obj);
        }
    };
    intl13 = tmp2(tmp3[1]).intl;
    obj12 = { server: removeTarget.guildName };
    push8(obj11);
  }
  const tmp2Result = tmp2(removeTarget[13]);
  if (tmp2Result.canUnpublishConjureUserApp(project)) {
    const push9 = items3.push;
    const obj13 = {
      kind: "action",
      key: "unpublish",
      label: intl14.string(require("module_3864").jYAR58),
      IconComponent: tmp2(removeTarget[21]).EyeSlashIcon,
      destructive: true,
      onPress() {
          return openConjureUnpublishUserAppAlertDefault(project);
        }
    };
    intl14 = tmp2(tmp3[1]).intl;
    push9(obj13);
  }
  if (tmp) {
    const push10 = items3.push;
    const obj14 = {
      kind: "action",
      key: "delete",
      label: intl15.string(tmp2(removeTarget[1]).t.oyYWHE),
      IconComponent: tmp2(removeTarget[23]).TrashIcon,
      destructive: true,
      onPress() {
          const obj = conjureProjectActions;
          return obj.deleteConjureProject(project, removeTarget);
        }
    };
    intl15 = tmp2(tmp3[1]).intl;
    push10(obj14);
  }
  const items4 = [items, mapped, items2, items3];
  return items4.filter((item) => item.length > 0);
}
