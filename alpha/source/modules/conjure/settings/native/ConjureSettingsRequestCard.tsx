// Module ID: 12294
// Function ID: 12295
// Name: ConjureSettingsRequestCard
// Dependencies: [19, 21, 4966, 587, 558, 576, 5192, 11726, 5216, 1128, 3830, 5226, 11742, 2]

// Module 12294 (ConjureSettingsRequestCard)
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5192 */;
import ConjureSettingsSheet from "ConjureSettingsSheet" /* 11726 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4966 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ConjureSettingsSheetDefault = ConjureSettingsSheet;
let dependencyMap;

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
  const cResult = obj.c(17);
  projectId = projectId.projectId;
  const request = projectId.request;
  const notifyAgent = projectId.notifyAgent;
  dependencyMap = tmp4;
  const tmp5 = closure_6();
  if (cResult[0] === (undefined === notifyAgent || notifyAgent)) {
    if (cResult[1] === projectId) {
      if (cResult[2] === request.keys) {
        let tmp6;
        let tmp8;
        let tmp12;
        let tmp15;
        let tmp18;
        let tmp21;
        if (cResult[3] === request.note) {
          tmp6 = cResult[4];
        }
        const _Symbol = Symbol;
        const card = tmp5.card;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          let obj2 = { variant: "text-xs/semibold", color: "text-muted", children: intl.string(request(3830)["jZjP+I"]) };
          const Text = tmp(5216).Text;
          intl = tmp(1128).intl;
          const tmp11 = closure_4(Text, obj2);
          cResult[5] = tmp11;
          tmp8 = tmp11;
        } else {
          tmp8 = cResult[5];
        }
        if (cResult[6] !== request.note) {
          if (null != request.note) {
            let note;
            if ("" !== request.note) {
              note = request.note;
            }
            cResult[6] = request.note;
            cResult[7] = note;
            tmp12 = note;
          }
          const intl2 = tmp(1128).intl;
          note = intl2.string(request(3830).XuOf5s);
        } else {
          tmp12 = cResult[7];
        }
        if (cResult[8] !== tmp12) {
          const obj3 = { variant: "text-sm/normal", color: "text-default", children: tmp12 };
          const tmp17 = closure_4(tmp(5216).Text, obj3);
          cResult[8] = tmp12;
          cResult[9] = tmp17;
          tmp15 = tmp17;
        } else {
          tmp15 = cResult[9];
        }
        const _Symbol2 = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = tmp(1128).intl;
          const stringResult = intl3.string(request(3830).d49riY);
          cResult[10] = stringResult;
          tmp18 = stringResult;
        } else {
          tmp18 = cResult[10];
        }
        if (cResult[11] !== tmp6) {
          const obj4 = { variant: "secondary", size: "sm", onPress: tmp6, text: tmp18 };
          const tmp23 = closure_4(tmp(5226).Button, obj4);
          cResult[11] = tmp6;
          cResult[12] = tmp23;
          tmp21 = tmp23;
        } else {
          tmp21 = cResult[12];
        }
        if (cResult[13] === tmp5.card) {
          if (cResult[14] === tmp15) {
            let tmp24;
            if (cResult[15] === tmp21) {
              tmp24 = cResult[16];
            }
            return tmp24;
          }
        }
        const obj5 = { style: card, children: items };
        items = [tmp8, tmp15, tmp21];
        const tmp27 = closure_5(request(11742), obj5);
        cResult[13] = tmp5.card;
        cResult[14] = tmp15;
        cResult[15] = tmp21;
        cResult[16] = tmp27;
        tmp24 = tmp27;
      }
    }
  }
  const fn = function n() {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { content: React3(ConjureSettingsSheetDefault, obj2), key: ConjureSettingsSheet.CONJURE_SETTINGS_SHEET_KEY };
    obj2 = { projectId, scopeKeys: request.keys, note: request.note, notifyAgent, isPreview: true };
    showActionSheet(obj);
  };
  cResult[0] = undefined === notifyAgent || notifyAgent;
  cResult[1] = projectId;
  cResult[2] = request.keys;
  cResult[3] = request.note;
  cResult[4] = fn;
  tmp6 = fn;
}) : (function ConjureSettingsRequestCard(projectId) {
  let intl;
  let intl3;
  projectId = projectId.projectId;
  const request = projectId.request;
  let flag = projectId.notifyAgent;
  if (flag === undefined) {
    flag = true;
  }
  const items = [flag, projectId, request];
  let tmp = closure_6();
  const callback = react.useCallback(() => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { content: React3(ConjureSettingsSheetDefault, obj2), key: ConjureSettingsSheet.CONJURE_SETTINGS_SHEET_KEY };
    obj2 = { projectId, scopeKeys: request.keys, note: request.note, notifyAgent: flag, isPreview: true };
    showActionSheet(obj);
  }, items);
  let obj = { style: tmp.card, children: null };
  let obj2 = { variant: "text-xs/semibold", color: "text-muted", children: intl.string(request(flag[10])["jZjP+I"]) };
  const tmp6 = request(flag[12]);
  const Text = projectId(flag[8]).Text;
  intl = projectId(flag[9]).intl;
  const items1 = [closure_4(Text, obj2), , ];
  const tmp3 = closure_5;
  if (null != request.note) {
    let note;
    if ("" !== request.note) {
      note = request.note;
    }
    const obj3 = { variant: "text-sm/normal", color: "text-default", children: note };
    items1[1] = closure_4(tmp9, obj3);
    const obj4 = { variant: "secondary", size: "sm", onPress: callback, text: intl3.string(request(flag[10]).d49riY) };
    const Button = tmp8(tmp5[11]).Button;
    intl3 = tmp8(tmp5[9]).intl;
    items1[2] = closure_4(Button, obj4);
    obj.children = items1;
    return tmp3(tmp6, obj);
  }
  const intl2 = tmp8(tmp5[9]).intl;
  note = intl2.string(tmp4(tmp5[10]).XuOf5s);
});
const result = size.fileFinishedImporting("modules/conjure/settings/native/ConjureSettingsRequestCard.tsx");

export default tmp3;
