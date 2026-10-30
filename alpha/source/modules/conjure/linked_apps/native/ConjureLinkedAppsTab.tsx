// Module ID: 12468
// Function ID: 12469
// Name: ConjureLinkedAppsTab
// Dependencies: [19, 21, 5959, 1114, 3865, 5253, 12469, 6022, 575, 7054, 6969, 12464, 5619, 2]
// Exports: default

// Module 12468 (ConjureLinkedAppsTab)
import nativeDefault from "native" /* 575 */;
import _modDef3865 from "module_3865" /* 3865 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, build, dependencyMap, importDefault;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
const ConjureLinkedAppSheet = "ConjureLinkedAppSheet";
const result = size.fileFinishedImporting("modules/conjure/linked_apps/native/ConjureLinkedAppsTab.tsx");

export default function ConjureLinkedAppsTab(linkedApps) {
  let _undefined;
  let _undefined2;
  let c0;
  let c1;
  let c2;
  let callers;
  let intl;
  let intl2;
  let items;
  linkedApps = linkedApps.linkedApps;
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  ({ callers, names: c0, setBuild: c1, remove: c2 } = linkedApps);
  const tmp2 = _require;
  const failed = linkedApps.failed;
  let tmp = closure_4;
  let obj = { spacing: nativeDefault.space.PX_8, children: items };
  const Stack = require("Stack/Stack").Stack;
  let obj2 = {
    description: intl.string(_modDef3865["6c2rjv"]),
    hasIcons: false,
    children: callers.map((build) => {
      let TrailingText;
      let obj2;
      let obj3;
      let c0 = build;
      let obj = {
        label: c0[build.project_id],
        trailing: closure_1_3(TrailingText, obj2),
        arrow: true,
        onPress() {
          let obj2;
          const project_id = build.project_id;
          let tmp = build[project_id];
          let closure_1 = tmp;
          build = build.build;
          let obj = { content: closure_1_3(closure_1_1(_undefined2[6]), obj2), key: sheetKey, stackingBehavior: "stack" };
          const showActionSheet = build(_undefined2[5]).showActionSheet;
          obj2 = {
            sheetKey,
            title: tmp,
            value: build,
            onPick(arg0) {
              return closure_2_1(project_id, arg0);
            },
            onRemove() {
              let intl;
              let intl2;
              let intl3;
              let obj2;
              let obj3;
              const tmp = project_id(_undefined2[2]);
              const showConfirmModal = tmp.showConfirmModal;
              const obj = {
                key: "ConjureRemoveLinkedApp-" + project_id,
                title: intl.formatToPlainString(closure_3_1(_undefined2[4]).zSfIvv, obj2),
                content: intl2.formatToPlainString(closure_3_1(_undefined2[4])["7TX+mR"], obj3),
                confirmText: intl3.string(closure_3_1(_undefined2[4]).vDZEGQ),
                variant: "destructive",
                onConfirm() {
                  return closure_2_2(closure_0);
                }
              };
              intl = project_id(_undefined2[3]).intl;
              obj2 = { name };
              intl2 = project_id(_undefined2[3]).intl;
              obj3 = { name };
              intl3 = project_id(_undefined2[3]).intl;
              showConfirmModal(obj);
            }
          };
          build(_undefined2[5]);
          showActionSheet(obj);
        }
      };
      const TableRow = c0(c2[10]).TableRow;
      obj2 = { text: obj3.linkedAppBuildLabel(build.build) };
      TrailingText = c0(c2[10]).TableRow.TrailingText;
      obj3 = c0(c2[11]);
      return closure_1_3(TableRow, obj, build.project_id);
    })
  };
  const TableRowGroup = require("TableRowGroup").TableRowGroup;
  intl = require("intl").intl;
  items = [closure_3(TableRowGroup, obj2), ];
  let tmp5Result = null;
  const tmp5 = closure_3;
  if (failed) {
    let obj3 = { variant: "text-sm/normal", color: "text-feedback-critical", accessibilityRole: "alert", accessibilityLiveRegion: "assertive", children: intl2.string(_modDef3865.dIEOrl) };
    const Text = tmp2(5619).Text;
    intl2 = tmp2(1114).intl;
    tmp5Result = tmp5(Text, obj3);
  }
  items[1] = tmp5Result;
  return tmp(Stack, obj);
};
