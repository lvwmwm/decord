// Module ID: 13249
// Function ID: 13250
// Name: ConjureLinkedAppsTab
// Dependencies: [19, 7017, 21, 7443, 5552, 13250, 6274, 1113, 4131, 6337, 575, 5929, 13251, 13252, 7746, 2]
// Exports: default

// Module 13249 (ConjureLinkedAppsTab)
import intl4 from "intl" /* 1113 */;
import _modDef4131 from "module_4131" /* 4131 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5552 */;
import AlertModal from "AlertModal" /* 6274 */;
import ConjureProjectStore from "ConjureProjectStore" /* 7017 */;
import ConjureLinkedAppBuildSheetDefault from "ConjureLinkedAppBuildSheet" /* 13250 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap, project_id;

let closure_4;
let hasOwnProperty;
function SettingRow(onBuildChange) {
  let setting;
  let title;
  let tmp2Result;
  ({ name: require, setting } = onBuildChange);
  onBuildChange = onBuildChange.onBuildChange;
  const options = setting.options;
  const found = options.find((data) => data.data === setting.value);
  let obj = {
    label: setting.label,
    trailing: tmp2Result,
    arrow: !setting.locked,
    disabled: setting.locked,
    onPress: function openChoices() {
      let obj2;
      let value;
      const tmp = ActionSheetActionCreators;
      let obj = { content: React3(ConjureLinkedAppBuildSheetDefault, obj2), key: ConjureLinkedAppSheet, stackingBehavior: "stack" };
      const showActionSheet = tmp.showActionSheet;
      obj2 = {
        sheetKey: ConjureLinkedAppSheet,
        title: require,
        setting,
        onPick(arg0) {
          const obj = value;
          if (arg0 !== value.value) {
            onBuildChange(obj.buildFor(arg0));
          }
        }
      };
      showActionSheet(obj);
    }
  };
  tmp2Result = undefined;
  const TableRow = require("TableRow").TableRow;
  const tmp3 = require;
  const tmp4 = onBuildChange;
  if (null != found) {
    let obj2 = { text: found.label };
    tmp2Result = tmp2(tmp3(tmp4[3]).TableRow.TrailingText, obj2);
  }
  return closure_4(TableRow, obj);
}
const canPublishProject = ConjureProjectStore.canPublishProject;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const ConjureLinkedAppSheet = "ConjureLinkedAppSheet";
const result = size.fileFinishedImporting("modules/conjure/linked_apps/native/ConjureLinkedAppsTab.tsx");

export default function ConjureLinkedAppsTab(linkedApps) {
  let _undefined;
  let _undefined2;
  let _undefined3;
  let c2;
  let c3;
  let c4;
  let c5;
  let callers;
  let failed;
  let intl;
  let intl2;
  let items;
  let items1;
  let items2;
  let obj4;
  let obj7;
  let str2;
  let str3;
  let string;
  let targets;
  let tmp10Result;
  let tmp4Result;
  linkedApps = linkedApps.linkedApps;
  const onOpenSettings = linkedApps.onOpenSettings;
  dependencyMap = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  ({ callers, targets, projects: c2, names: c3, failed, setBuild: c4, remove: c5 } = linkedApps);
  let tmp = c5;
  const tmp2 = linkedApps;
  const tmp3 = dependencyMap;
  const saved = linkedApps.saved;
  let obj = { spacing: onOpenSettings(575).space.PX_24, children: items1 };
  const tmp4 = onOpenSettings;
  let Stack = linkedApps(6337).Stack;
  let tmpResult = null;
  if (callers.length > 0) {
    let obj2 = { spacing: tmp4(575).space.PX_16, children: items };
    const Stack2 = tmp2(6337).Stack;
    let obj3 = { variant: "body-xs/semibold", color: "text-muted", accessibilityRole: "header", children: intl.formatToPlainString(tmp4(4131).uLPdNT, obj4) };
    const Text = tmp2(5929).Text;
    intl = tmp2(1113).intl;
    obj4 = { name: linkedApps.name };
    items = [
      c4(Text, obj3),
      callers.map((project_id) => {
          let flow;
          let intl;
          let items;
          project_id = project_id.project_id;
          let tmp = _undefined2[project_id];
          const name = tmp;
          const linkedAppSettings = linkedApps(c2[12]).linkedAppSettings;
          linkedApps(c2[12]);
          let obj = linkedApps(c2[12]);
          const linkedAppSettingsResult = linkedAppSettings(obj.linkedAppCallerSides(project_id, project_id), project_id.build);
          let obj2 = linkedApps(c2[12]);
          const linkedAppPurposeResult = obj2.linkedAppPurpose(project_id.purpose);
          let obj3 = { spacing: onOpenSettings(c2[10]).space.PX_8, children: items };
          const Stack = linkedApps(c2[9]).Stack;
          const obj4 = { caller: tmp, target: project_id.name, callerProject: c2[project_id], targetProject: project_id.project, flow };
          flow = project_id.flow;
          const tmp10 = onOpenSettings(c2[13]);
          const tmp8 = onOpenSettings;
          if (flow == null) {
            flow = null;
          }
          items = [_undefined(tmp10, obj4), , , ];
          let tmp9Result = null;
          if (null != linkedAppPurposeResult) {
            const obj5 = { variant: "body-sm/normal", color: "text-default", lineClamp: 1, children: linkedAppPurposeResult };
            tmp9Result = tmp9(tmp2(tmp3[11]).Text, obj5);
          }
          items[1] = tmp9Result;
          let preview;
          const TableRowGroup = tmp2(tmp3[14]).TableRowGroup;
          if (linkedAppSettingsResult != null) {
            preview = linkedAppSettingsResult.preview;
          }
          function onBuildChange(arg0) {
            return c4(project_id, arg0);
          }
          let tmp9Result4 = null;
          if (null != preview) {
            const obj6 = { name: tmp, setting: linkedAppSettingsResult.preview, onBuildChange };
            tmp9Result4 = tmp9(SettingRow, obj6);
          }
          const items1 = [tmp9Result4, , ];
          let tmp9Result5 = null;
          if (null != linkedAppSettingsResult) {
            const obj7 = { name: tmp, setting: linkedAppSettingsResult.live, onBuildChange };
            tmp9Result5 = tmp9(SettingRow, obj7);
          }
          const obj8 = { hasIcons: false, children: items1 };
          items1[1] = tmp9Result5;
          const obj9 = {
            label: intl.string(tmp8(c2[8]).bN1S9T),
            variant: "danger",
            onPress() {
              let intl;
              let intl2;
              let intl3;
              let obj2;
              let obj3;
              let closure_0 = project_id;
              const tmp = AlertModal;
              const showConfirmModal = tmp.showConfirmModal;
              const obj = {
                key: "ConjureRemoveLinkedApp-" + project_id,
                title: intl.formatToPlainString(_modDef4131.zSfIvv, obj2),
                content: intl2.formatToPlainString(_modDef4131["7TX+mR"], obj3),
                confirmText: intl3.string(_modDef4131.vDZEGQ),
                variant: "destructive",
                onConfirm() {
                  return closure_2_5(closure_0);
                }
              };
              intl = intl4.intl;
              obj2 = { name };
              intl2 = intl4.intl;
              obj3 = { name };
              intl3 = intl4.intl;
              showConfirmModal(obj);
            }
          };
          const TableRow = tmp2(tmp3[3]).TableRow;
          intl = tmp2(tmp3[7]).intl;
          items1[2] = _undefined(TableRow, obj9);
          items[2] = _undefined3(TableRowGroup, obj8);
          let note;
          if (linkedAppSettingsResult != null) {
            note = linkedAppSettingsResult.note;
          }
          let tmp9Result6 = null;
          if (null != note) {
            const obj10 = { variant: "body-sm/normal", color: "text-muted", children: linkedAppSettingsResult.note };
            tmp9Result6 = tmp9(tmp2(tmp3[11]).Text, obj10);
          }
          items[3] = tmp9Result6;
          return _undefined3(Stack, obj3, project_id);
        })
    ];
    tmpResult = tmp(Stack2, obj2);
  }
  items1 = [tmpResult, , ];
  let tmpResult2 = null;
  if (targets.length > 0) {
    let obj5 = { spacing: tmp4(575).space.PX_16, children: items2 };
    const Stack3 = tmp2(6337).Stack;
    let tmp8 = c4;
    let obj6 = { variant: "body-xs/semibold", color: "text-muted", accessibilityRole: "header", children: intl2.formatToPlainString(tmp4(4131).L3Bf1s, obj7) };
    const Text2 = tmp2(5929).Text;
    intl2 = tmp2(1113).intl;
    obj7 = { name: linkedApps.name };
    items2 = [
      c4(Text2, obj6),
      targets.map((project_id) => {
          let TableRow;
          let flow;
          let intl;
          let items;
          let obj10;
          let obj9;
          project_id = project_id.project_id;
          const obj = linkedApps(_undefined[12]);
          const linkedAppTargetSidesResult = obj.linkedAppTargetSides(project_id, project_id);
          const obj2 = linkedApps(_undefined[12]);
          const linkedAppPurposeResult = obj2.linkedAppPurpose(project_id.purpose);
          const obj3 = linkedApps(_undefined[12]);
          const linkedAppDataSummaryResult = obj3.linkedAppDataSummary(linkedAppTargetSidesResult, project_id.build);
          const obj4 = { spacing: onOpenSettings(_undefined[10]).space.PX_8, children: items };
          const Stack = linkedApps(_undefined[9]).Stack;
          const obj5 = { caller: linkedAppTargetSidesResult.caller, target: linkedAppTargetSidesResult.target, callerProject: project_id.project, targetProject: _undefined[project_id], flow };
          flow = project_id.flow;
          const tmp10 = onOpenSettings(_undefined[13]);
          const tmp7 = c5;
          const tmp8 = onOpenSettings;
          if (flow == null) {
            flow = null;
          }
          items = [_undefined(tmp10, obj5), , , ];
          let tmp9Result = null;
          if (null != linkedAppPurposeResult) {
            const obj6 = { variant: "body-sm/normal", color: "text-default", lineClamp: 1, children: linkedAppPurposeResult };
            tmp9Result = tmp9(tmp2(tmp3[11]).Text, obj6);
          }
          items[1] = tmp9Result;
          let tmp9Result3 = null;
          if (null != linkedAppDataSummaryResult) {
            const obj7 = { variant: "body-sm/normal", color: "text-subtle", children: linkedAppDataSummaryResult };
            tmp9Result3 = tmp9(tmp2(tmp3[11]).Text, obj7);
          }
          items[2] = tmp9Result3;
          let tmp9Result4 = null;
          if (null != _undefined[project_id]) {
            tmp9Result4 = null;
            if (_undefined2(_undefined[project_id])) {
              const obj8 = { hasIcons: false, children: _undefined(TableRow, obj9) };
              const TableRowGroup = tmp2(tmp3[14]).TableRowGroup;
              obj9 = {
                label: intl.formatToPlainString(tmp8(_undefined[8]).DfBXSF, obj10),
                arrow: true,
                onPress() {
                      return onOpenSettings(project_id);
                    }
              };
              TableRow = tmp2(tmp3[3]).TableRow;
              intl = tmp2(tmp3[7]).intl;
              obj10 = { target: linkedAppTargetSidesResult.target };
              tmp9Result4 = tmp9(TableRowGroup, obj8);
            }
          }
          items[3] = tmp9Result4;
          return tmp7(Stack, obj4, project_id);
        })
    ];
    tmpResult2 = tmp(Stack3, obj5);
  }
  items1[1] = tmpResult2;
  if (failed) {
    let tmp10 = c4;
    let str = "text-muted";
    const Text3 = tmp2(5929).Text;
    if (failed) {
      str = "text-feedback-critical";
    }
    let obj8 = { variant: "body-sm/normal", color: str, accessibilityRole: str2, accessibilityLiveRegion: str3, children: string(failed ? tmp4Result.dIEOrl : tmp4Result["/d6saK"]) };
    str2 = undefined;
    if (failed) {
      str2 = "alert";
    }
    str3 = "polite";
    if (failed) {
      str3 = "assertive";
    }
    let intl3 = tmp2(1113).intl;
    string = intl3.string;
    tmp4Result = tmp4(4131);
    tmp10Result = tmp10(Text3, obj8);
  } else {
    tmp10Result = null;
  }
  items1[2] = tmp10Result;
  return tmp(Stack, obj);
};
