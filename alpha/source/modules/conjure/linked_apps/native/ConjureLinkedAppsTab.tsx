// Module ID: 11788
// Function ID: 11789
// Name: ConjureLinkedAppsTab
// Dependencies: [19, 21, 558, 576, 5901, 1128, 3830, 5196, 11789, 6889, 11784, 6973, 5220, 5964, 587, 2]

// Module 11788 (ConjureLinkedAppsTab)
import nativeDefault from "native" /* 587 */;
import _modDef3830 from "module_3830" /* 3830 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
const ConjureLinkedAppSheet = "ConjureLinkedAppSheet";
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureLinkedAppsTab(linkedApps) {
  let callers;
  let failed;
  let intl2;
  let items;
  let names;
  let remove;
  let setBuild;
  let tmp4;
  let tmp = names;
  const tmp2 = remove;
  let obj = names(remove[3]);
  const cResult = obj.c(21);
  linkedApps = linkedApps.linkedApps;
  ({ callers, names } = linkedApps);
  ({ failed, setBuild } = linkedApps);
  remove = linkedApps.remove;
  if (cResult[0] !== remove) {
    function confirmRemove(arg0, name) {
      let intl;
      let intl2;
      let intl3;
      let obj2;
      let obj3;
      let closure_0 = arg0;
      const tmp = names(remove[4]);
      const showConfirmModal = tmp.showConfirmModal;
      const obj = {
        key: "ConjureRemoveLinkedApp-" + arg0,
        title: intl.formatToPlainString(setBuild(remove[6]).zSfIvv, obj2),
        content: intl2.formatToPlainString(setBuild(remove[6])["7TX+mR"], obj3),
        confirmText: intl3.string(setBuild(remove[6]).vDZEGQ),
        variant: "destructive",
        onConfirm() {
          return remove(closure_0);
        }
      };
      intl = names(remove[5]).intl;
      obj2 = { name };
      intl2 = names(remove[5]).intl;
      obj3 = { name };
      intl3 = names(remove[5]).intl;
      showConfirmModal(obj);
    }
    cResult[0] = remove;
    cResult[1] = confirmRemove;
    tmp4 = confirmRemove;
  } else {
    tmp4 = cResult[1];
  }
  let closure_3 = tmp4;
  if (cResult[2] === tmp4) {
    if (cResult[3] === names) {
      let tmp5;
      let tmp7;
      let tmp10;
      if (cResult[4] === setBuild) {
        tmp5 = cResult[5];
      }
      let closure_4 = tmp5;
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        let intl = tmp(tmp2[5]).intl;
        const stringResult = intl.string(setBuild(tmp2[6])["6c2rjv"]);
        cResult[6] = stringResult;
        tmp7 = stringResult;
      } else {
        tmp7 = cResult[6];
      }
      if (cResult[7] === callers) {
        if (cResult[8] === names) {
          let tmp13;
          let tmp16;
          if (cResult[9] === tmp5) {
            tmp10 = cResult[10];
          }
          if (cResult[14] !== tmp10) {
            let obj2 = { description: tmp7, hasIcons: false, children: tmp10 };
            const tmp15 = closure_3(tmp(tmp2[11]).TableRowGroup, obj2);
            cResult[14] = tmp10;
            cResult[15] = tmp15;
            tmp13 = tmp15;
          } else {
            tmp13 = cResult[15];
          }
          if (cResult[16] !== failed) {
            let tmp17 = null;
            if (failed) {
              let obj3 = { variant: "text-sm/normal", color: "text-feedback-critical", accessibilityRole: "alert", accessibilityLiveRegion: "assertive", children: intl2.string(setBuild(tmp2[6]).dIEOrl) };
              const Text = tmp(tmp2[12]).Text;
              intl2 = tmp(tmp2[5]).intl;
              tmp17 = closure_3(Text, obj3);
            }
            cResult[16] = failed;
            cResult[17] = tmp17;
            tmp16 = tmp17;
          } else {
            tmp16 = cResult[17];
          }
          if (cResult[18] === tmp13) {
            let tmp20;
            if (cResult[19] === tmp16) {
              tmp20 = cResult[20];
            }
            return tmp20;
          }
          const obj4 = { spacing: setBuild(tmp2[14]).space.PX_8, children: items };
          const Stack = tmp(tmp2[13]).Stack;
          items = [tmp13, tmp16];
          const tmp23 = closure_4(Stack, obj4);
          cResult[18] = tmp13;
          cResult[19] = tmp16;
          cResult[20] = tmp23;
          tmp20 = tmp23;
        }
      }
      if (cResult[11] === names) {
        let tmp11;
        if (cResult[12] === tmp5) {
          tmp11 = cResult[13];
        }
        const mapped = callers.map(tmp11);
        cResult[7] = callers;
        cResult[8] = names;
        cResult[9] = tmp5;
        cResult[10] = mapped;
        tmp10 = mapped;
      }
      const fn = function x(build) {
        let TrailingText;
        let obj2;
        let obj3;
        names = build;
        const obj = {
          label: names[build.project_id],
          trailing: closure_3(TrailingText, obj2),
          arrow: true,
          onPress() {
            return closure_4(build);
          }
        };
        const TableRow = names(remove[9]).TableRow;
        obj2 = { text: obj3.linkedAppBuildLabel(build.build) };
        TrailingText = names(remove[9]).TableRow.TrailingText;
        obj3 = names(remove[10]);
        return closure_3(TableRow, obj, build.project_id);
      };
      cResult[11] = names;
      cResult[12] = tmp5;
      cResult[13] = fn;
      tmp11 = fn;
    }
  }
  function openSheet(project_id) {
    let obj2;
    project_id = project_id.project_id;
    let closure_1 = tmp;
    const build = project_id.build;
    const obj = { content: closure_3(setBuild(remove[8]), obj2), key: sheetKey, stackingBehavior: "stack" };
    const showActionSheet = names(remove[7]).showActionSheet;
    obj2 = {
      sheetKey,
      title: project_id[project_id],
      value: build,
      onPick(arg0) {
        return setBuild(project_id, arg0);
      },
      onRemove() {
        return closure_3(project_id, closure_1);
      }
    };
    names(remove[7]);
    showActionSheet(obj);
  }
  cResult[2] = tmp4;
  cResult[3] = names;
  cResult[4] = setBuild;
  cResult[5] = openSheet;
  tmp5 = openSheet;
}) : (function ConjureLinkedAppsTab(linkedApps) {
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
    description: intl.string(_modDef3830["6c2rjv"]),
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
          let obj = { content: closure_1_3(closure_1_1(_undefined2[8]), obj2), key: sheetKey, stackingBehavior: "stack" };
          const showActionSheet = build(_undefined2[7]).showActionSheet;
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
              const tmp = project_id(_undefined2[4]);
              const showConfirmModal = tmp.showConfirmModal;
              const obj = {
                key: "ConjureRemoveLinkedApp-" + project_id,
                title: intl.formatToPlainString(closure_3_1(_undefined2[6]).zSfIvv, obj2),
                content: intl2.formatToPlainString(closure_3_1(_undefined2[6])["7TX+mR"], obj3),
                confirmText: intl3.string(closure_3_1(_undefined2[6]).vDZEGQ),
                variant: "destructive",
                onConfirm() {
                  return closure_2_2(closure_0);
                }
              };
              intl = project_id(_undefined2[5]).intl;
              obj2 = { name };
              intl2 = project_id(_undefined2[5]).intl;
              obj3 = { name };
              intl3 = project_id(_undefined2[5]).intl;
              showConfirmModal(obj);
            }
          };
          build(_undefined2[7]);
          showActionSheet(obj);
        }
      };
      const TableRow = c0(c2[9]).TableRow;
      obj2 = { text: obj3.linkedAppBuildLabel(build.build) };
      TrailingText = c0(c2[9]).TableRow.TrailingText;
      obj3 = c0(c2[10]);
      return closure_1_3(TableRow, obj, build.project_id);
    })
  };
  const TableRowGroup = require("TableRowGroup").TableRowGroup;
  intl = require("intl").intl;
  items = [closure_3(TableRowGroup, obj2), ];
  let tmp5Result = null;
  const tmp5 = closure_3;
  if (failed) {
    let obj3 = { variant: "text-sm/normal", color: "text-feedback-critical", accessibilityRole: "alert", accessibilityLiveRegion: "assertive", children: intl2.string(_modDef3830.dIEOrl) };
    const Text = tmp2(5220).Text;
    intl2 = tmp2(1128).intl;
    tmp5Result = tmp5(Text, obj3);
  }
  items[1] = tmp5Result;
  return tmp(Stack, obj);
});
const result = size.fileFinishedImporting("modules/conjure/linked_apps/native/ConjureLinkedAppsTab.tsx");

export default tmp4;
