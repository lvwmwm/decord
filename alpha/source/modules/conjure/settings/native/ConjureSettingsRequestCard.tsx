// Module ID: 17182
// Function ID: 17183
// Name: ConjureSettingsRequestCard
// Dependencies: [19, 21, 5091, 587, 558, 576, 5055, 16993, 5087, 1126, 3827, 5376, 17080, 2]

// Module 17182 (ConjureSettingsRequestCard)
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5055 */;
import ConjureSettingsSheet from "ConjureSettingsSheet" /* 16993 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ConjureSettingsSheetDefault = ConjureSettingsSheet;

let closure_4;
let hasOwnProperty;
let obj2;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { card: obj2 };
obj2 = { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
let closure_6 = createStyles.createStyles(obj);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureSettingsRequestCard(projectId) {
  let intl;
  let items;
  let tmp = projectId;
  let obj = projectId(576);
  const cResult = obj.c(16);
  projectId = projectId.projectId;
  const request = projectId.request;
  const tmp4 = closure_6();
  if (cResult[0] === projectId) {
    if (cResult[1] === request.keys) {
      let tmp5;
      let tmp7;
      let tmp11;
      let tmp14;
      let tmp17;
      let tmp20;
      if (cResult[2] === request.note) {
        tmp5 = cResult[3];
      }
      const _Symbol = Symbol;
      const card = tmp4.card;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = { variant: "text-xs/semibold", color: "text-muted", children: intl.string(request(3827)["jZjP+I"]) };
        const Text = tmp(5087).Text;
        intl = tmp(1126).intl;
        const tmp10 = closure_4(Text, obj2);
        cResult[4] = tmp10;
        tmp7 = tmp10;
      } else {
        tmp7 = cResult[4];
      }
      if (cResult[5] !== request.note) {
        if (null != request.note) {
          let note;
          if ("" !== request.note) {
            note = request.note;
          }
          cResult[5] = request.note;
          cResult[6] = note;
          tmp11 = note;
        }
        const intl2 = tmp(1126).intl;
        note = intl2.string(request(3827).XuOf5s);
      } else {
        tmp11 = cResult[6];
      }
      if (cResult[7] !== tmp11) {
        const obj3 = { variant: "text-sm/normal", color: "text-default", children: tmp11 };
        const tmp16 = closure_4(tmp(5087).Text, obj3);
        cResult[7] = tmp11;
        cResult[8] = tmp16;
        tmp14 = tmp16;
      } else {
        tmp14 = cResult[8];
      }
      const _Symbol2 = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = tmp(1126).intl;
        const stringResult = intl3.string(request(3827).d49riY);
        cResult[9] = stringResult;
        tmp17 = stringResult;
      } else {
        tmp17 = cResult[9];
      }
      if (cResult[10] !== tmp5) {
        const obj4 = { variant: "secondary", size: "sm", onPress: tmp5, text: tmp17 };
        const tmp22 = closure_4(tmp(5376).Button, obj4);
        cResult[10] = tmp5;
        cResult[11] = tmp22;
        tmp20 = tmp22;
      } else {
        tmp20 = cResult[11];
      }
      if (cResult[12] === tmp4.card) {
        if (cResult[13] === tmp14) {
          let tmp23;
          if (cResult[14] === tmp20) {
            tmp23 = cResult[15];
          }
          return tmp23;
        }
      }
      const obj5 = { style: card, children: items };
      items = [tmp7, tmp14, tmp20];
      const tmp26 = closure_5(request(17080), obj5);
      cResult[12] = tmp4.card;
      cResult[13] = tmp14;
      cResult[14] = tmp20;
      cResult[15] = tmp26;
      tmp23 = tmp26;
    }
  }
  const fn = function n() {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { content: React3(ConjureSettingsSheetDefault, obj2), key: ConjureSettingsSheet.CONJURE_SETTINGS_SHEET_KEY };
    obj2 = { projectId, scopeKeys: request.keys, note: request.note, notifyAgent: true, isPreview: true };
    showActionSheet(obj);
  };
  cResult[0] = projectId;
  cResult[1] = request.keys;
  cResult[2] = request.note;
  cResult[3] = fn;
  tmp5 = fn;
}) : (function ConjureSettingsRequestCard(projectId) {
  let intl;
  let intl3;
  projectId = projectId.projectId;
  const request = projectId.request;
  const items = [projectId, request];
  let tmp = closure_6();
  const callback = react.useCallback(() => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { content: React3(ConjureSettingsSheetDefault, obj2), key: ConjureSettingsSheet.CONJURE_SETTINGS_SHEET_KEY };
    obj2 = { projectId, scopeKeys: request.keys, note: request.note, notifyAgent: true, isPreview: true };
    showActionSheet(obj);
  }, items);
  let obj = { style: tmp.card, children: null };
  let obj2 = { variant: "text-xs/semibold", color: "text-muted", children: intl.string(request(3827)["jZjP+I"]) };
  const tmp6 = request(17080);
  const Text = projectId(5087).Text;
  intl = projectId(1126).intl;
  const items1 = [closure_4(Text, obj2), , ];
  const tmp3 = closure_5;
  if (null != request.note) {
    let note;
    if ("" !== request.note) {
      note = request.note;
    }
    const obj3 = { variant: "text-sm/normal", color: "text-default", children: note };
    items1[1] = closure_4(tmp9, obj3);
    const obj4 = { variant: "secondary", size: "sm", onPress: callback, text: intl3.string(request(3827).d49riY) };
    const Button = tmp8(5376).Button;
    intl3 = tmp8(1126).intl;
    items1[2] = closure_4(Button, obj4);
    obj.children = items1;
    return tmp3(tmp6, obj);
  }
  const intl2 = tmp8(1126).intl;
  note = intl2.string(tmp4(3827).XuOf5s);
});
const result = size.fileFinishedImporting("modules/conjure/settings/native/ConjureSettingsRequestCard.tsx");

export default tmp3;
