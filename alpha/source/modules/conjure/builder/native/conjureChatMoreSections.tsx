// Module ID: 18414
// Function ID: 18415
// Name: conjureChatMoreSections
// Dependencies: [6500, 1113, 4089, 10309, 13775, 18415, 14278, 11177, 6817, 5501, 10283, 7267, 5488, 18417, 5494, 17010, 17236, 18421, 10316, 7116, 18420, 5499, 2]
// Exports: conjureChatMoreSections

// Module 18414 (conjureChatMoreSections)
import _modDef4089 from "module_4089" /* 4089 */;
import conjureProjectMute from "conjureProjectMute" /* 6817 */;
import conjureProjectActions from "conjureProjectActions" /* 18417 */;
import openConjureUnpublishUserAppAlertDefault from "openConjureUnpublishUserAppAlert" /* 18420 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6500 */;
import size from "module_2" /* 2 */;

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
  let onRemix;
  let preview;
  let stringResult;
  project = project.project;
  ({ guildId: importDefault, removeTarget: dependencyMap, annotate, onRefresh, onDebug, onConnectTool, preview } = project);
  ({ muted, onOpenSettings, onRemix, onHistory } = project);
  const tmp = closure_4(project);
  let obj = { kind: "action", key: "settings", label: intl.string(_modDef4089.I2XSKe), IconComponent: project(10309).SettingsIcon, onPress: onOpenSettings };
  const tmp2 = project;
  intl = project(1113).intl;
  const items = [obj];
  if (preview(project)) {
    const push = items.push;
    const obj2 = { kind: "action", key: "remix", label: intl2.string(_modDef4089["276ll6"]), IconComponent: tmp2(13775).PaperPlusIcon, onPress: onRemix };
    intl2 = tmp2(1113).intl;
    push(obj2);
  }
  if (null != annotate) {
    const entry = { kind: "switch", key: "annotate", label: intl15.string(tmp4(4089)["6GOFLB"]), IconComponent: tmp2(18415).ExperimentalDirectSelectIcon, value: null, disabled: null, subLabel: stringResult, closesOnEnable: true, onValueChange: annotate.onToggle };
    const push10 = items.push;
    intl15 = tmp2(1113).intl;
    ({ active: obj15.value, busy: obj15.disabled } = annotate);
    stringResult = undefined;
    if (annotate.busy) {
      const intl3 = tmp2(1113).intl;
      stringResult = intl3.string(tmp4(4089).bcdhe6);
    }
    push10(entry);
  }
  if (null != onRefresh) {
    const push2 = items.push;
    const obj3 = { kind: "action", key: "refresh", label: intl4.string(_modDef4089["p4B/7M"]), IconComponent: tmp2(14278).RefreshIcon, onPress: onRefresh };
    intl4 = tmp2(1113).intl;
    push2(obj3);
  }
  const entry1 = {
    kind: "switch",
    key: "notifications",
    label: intl5.string(tmp2(1113).t.HcoRu0),
    IconComponent: tmp2(11177).BellIcon,
    value: !muted,
    onValueChange(arg0) {
      const obj = conjureProjectMute;
      return obj.setConjureProjectMuted(project.id, !arg0);
    }
  };
  const push3 = items.push;
  intl5 = tmp2(1113).intl;
  const obj4 = { kind: "action", key: "history", label: intl6.string(_modDef4089["3hIVou"]), IconComponent: tmp2(5501).ClockIcon, onPress: onHistory };
  intl6 = tmp2(1113).intl;
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
    label: intl7.string(tmp2(1113).t.WqhZss),
    IconComponent: tmp2(5488).LinkIcon,
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
  intl7 = tmp2(1113).intl;
  const items2 = [obj5, ];
  const obj6 = {
    kind: "action",
    key: "export",
    label: intl8.string(_modDef4089.WsEEP7),
    IconComponent: tmp2(5494).DownloadIcon,
    onPress() {
      const obj = conjureProjectActions;
      return obj.exportConjureProject(project);
    }
  };
  intl8 = tmp2(1113).intl;
  items2[1] = obj6;
  if (tmp) {
    const push4 = items2.push;
    const obj7 = {
      kind: "action",
      key: "import",
      label: intl9.string(_modDef4089.rWGY3e),
      IconComponent: tmp2(17010).FileUpIcon,
      onPress() {
          const obj = conjureProjectActions;
          return obj.importConjureProject(project);
        }
    };
    intl9 = tmp2(1113).intl;
    push4(obj7);
  }
  const items3 = [];
  if (null != onDebug) {
    const push5 = items3.push;
    const obj8 = { kind: "action", key: "debug", label: intl10.string(_modDef4089["Q4FN+H"]), IconComponent: tmp2(17236).BugIcon, onPress: onDebug };
    intl10 = tmp2(1113).intl;
    push5(obj8);
  }
  if (null != onConnectTool) {
    const push6 = items3.push;
    const obj9 = { kind: "action", key: "connect-tool", label: intl11.string(_modDef4089.yOIql5), IconComponent: tmp2(18421).LinkPlusIcon, onPress: onConnectTool };
    intl11 = tmp2(1113).intl;
    push6(obj9);
  }
  const push7 = items3.push;
  const obj10 = {
    kind: "action",
    key: "copy-project-id",
    label: intl12.string(_modDef4089["nm/zuU"]),
    IconComponent: tmp2(10316).IdIcon,
    onPress() {
      const obj = conjureProjectActions;
      return obj.copyConjureProjectId(project);
    }
  };
  intl12 = tmp2(1113).intl;
  push7(obj10);
  const tmp2Result = tmp2(18417);
  if (tmp2Result.canUnpublishConjureUserApp(project)) {
    const push8 = items3.push;
    const obj11 = {
      kind: "action",
      key: "unpublish",
      label: intl13.string(_modDef4089.jYAR58),
      IconComponent: tmp2(7116).EyeSlashIcon,
      destructive: true,
      onPress() {
          return openConjureUnpublishUserAppAlertDefault(project);
        }
    };
    intl13 = tmp2(1113).intl;
    push8(obj11);
  }
  if (tmp) {
    const push9 = items3.push;
    const obj12 = {
      kind: "action",
      key: "delete",
      label: intl14.string(tmp2(1113).t.oyYWHE),
      IconComponent: tmp2(5499).TrashIcon,
      destructive: true,
      onPress() {
          const obj = conjureProjectActions;
          return obj.deleteConjureProject(project, dependencyMap);
        }
    };
    intl14 = tmp2(1113).intl;
    push9(obj12);
  }
  const items4 = [items, mapped, items2, items3];
  return items4.filter((item) => item.length > 0);
}
