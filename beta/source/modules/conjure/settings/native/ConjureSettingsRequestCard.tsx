// Module ID: 12378
// Function ID: 12379
// Name: ConjureSettingsRequestCard
// Dependencies: [19, 21, 4971, 587, 558, 576, 12379, 5210, 11803, 5234, 1128, 3830, 11820, 11824, 5244, 2]

// Module 12378 (ConjureSettingsRequestCard)
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5210 */;
import ConjureSettingsSheet from "ConjureSettingsSheet" /* 11803 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4971 */;
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
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureSettingsRequestCard(projectId) {
  let done;
  let intl;
  let intl2;
  let intl5;
  let items;
  let items1;
  let markSaved;
  let notifyAgent;
  let summary;
  let tmp = projectId;
  let obj = projectId(notifyAgent[5]);
  const cResult = obj.c(27);
  projectId = projectId.projectId;
  const request = projectId.request;
  notifyAgent = projectId.notifyAgent;
  let tmp4 = undefined === notifyAgent;
  const askId = projectId.askId;
  if (!tmp4) {
    tmp4 = notifyAgent;
  }
  notifyAgent = tmp4;
  const tmp5 = closure_6();
  const tmpResult = tmp(notifyAgent[6]);
  const conjureSettingsAsk = tmpResult.useConjureSettingsAsk(projectId, request, askId);
  ({ done, summary, markSaved } = conjureSettingsAsk);
  if (cResult[0] === markSaved) {
    if (cResult[1] === tmp4) {
      if (cResult[2] === projectId) {
        if (cResult[3] === request.keys) {
          let tmp8;
          if (cResult[4] === request.note) {
            tmp8 = cResult[5];
          }
          if (tmp7) {
            if (!done) {
              let tmp10;
              let tmp14;
              const _Symbol = Symbol;
              if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
                let obj2 = { variant: "text-xs/semibold", color: "text-muted", children: intl.string(request(notifyAgent[11])["+uXDk+"]) };
                const Text = tmp(tmp2[9]).Text;
                intl = tmp(tmp2[10]).intl;
                const tmp13 = closure_4(Text, obj2);
                cResult[6] = tmp13;
                tmp10 = tmp13;
              } else {
                tmp10 = cResult[6];
              }
              if (cResult[7] !== tmp5.card) {
                const obj3 = { style: tmp5.card, children: tmp10 };
                const tmp17 = closure_4(request(notifyAgent[12]), obj3);
                cResult[7] = tmp5.card;
                cResult[8] = tmp17;
                tmp14 = tmp17;
              } else {
                tmp14 = cResult[8];
              }
              return tmp14;
            }
          }
          if (done) {
            let tmp41;
            let tmp45;
            const _Symbol4 = Symbol;
            if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
              const obj4 = { variant: "text-xs/semibold", color: "text-feedback-positive", children: intl5.string(request(notifyAgent[11]).AxBLLy) };
              const Text3 = tmp(tmp2[9]).Text;
              intl5 = tmp(tmp2[10]).intl;
              const tmp44 = closure_4(Text3, obj4);
              cResult[9] = tmp44;
              tmp41 = tmp44;
            } else {
              tmp41 = cResult[9];
            }
            if (cResult[10] !== summary) {
              let tmp46 = null;
              if (summary.length > 0) {
                const obj5 = { variant: "text-sm/normal", color: "text-default", children: summary.join(" \u00B7 ") };
                const Text4 = tmp(tmp2[9]).Text;
                tmp46 = closure_4(Text4, obj5);
              }
              cResult[10] = summary;
              cResult[11] = tmp46;
              tmp45 = tmp46;
            } else {
              tmp45 = cResult[11];
            }
            if (cResult[12] === tmp5.card) {
              let tmp48;
              if (cResult[13] === tmp45) {
                tmp48 = cResult[14];
              }
              return tmp48;
            }
            const obj6 = { style: tmp5.card, children: items };
            items = [tmp41, tmp45];
            const tmp51 = closure_5(request(notifyAgent[12]), obj6);
            cResult[12] = tmp5.card;
            cResult[13] = tmp45;
            cResult[14] = tmp51;
            tmp48 = tmp51;
          } else {
            let tmp19;
            let tmp23;
            let tmp26;
            let tmp30;
            let tmp33;
            const _Symbol2 = Symbol;
            const card = tmp5.card;
            if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
              const obj7 = { variant: "text-xs/semibold", color: "text-muted", children: intl2.string(request(notifyAgent[11])["jZjP+I"]) };
              const Text2 = tmp(tmp2[9]).Text;
              intl2 = tmp(tmp2[10]).intl;
              const tmp22 = closure_4(Text2, obj7);
              cResult[15] = tmp22;
              tmp19 = tmp22;
            } else {
              tmp19 = cResult[15];
            }
            if (cResult[16] !== request.note) {
              if (null != request.note) {
                let note;
                if ("" !== request.note) {
                  note = request.note;
                }
                cResult[16] = request.note;
                cResult[17] = note;
                tmp23 = note;
              }
              const intl3 = tmp(tmp2[10]).intl;
              note = intl3.string(request(tmp2[11]).XuOf5s);
            } else {
              tmp23 = cResult[17];
            }
            if (cResult[18] !== tmp23) {
              const obj8 = { text: tmp23, variant: "text-sm/normal", color: "text-default" };
              const tmp29 = closure_4(request(notifyAgent[13]), obj8);
              cResult[18] = tmp23;
              cResult[19] = tmp29;
              tmp26 = tmp29;
            } else {
              tmp26 = cResult[19];
            }
            const _Symbol3 = Symbol;
            if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
              const intl4 = tmp(tmp2[10]).intl;
              const stringResult = intl4.string(request(notifyAgent[11]).d49riY);
              cResult[20] = stringResult;
              tmp30 = stringResult;
            } else {
              tmp30 = cResult[20];
            }
            if (cResult[21] !== tmp8) {
              const obj9 = { variant: "secondary", size: "sm", onPress: tmp8, text: tmp30 };
              const tmp35 = closure_4(tmp(notifyAgent[14]).Button, obj9);
              cResult[21] = tmp8;
              cResult[22] = tmp35;
              tmp33 = tmp35;
            } else {
              tmp33 = cResult[22];
            }
            if (cResult[23] === tmp5.card) {
              if (cResult[24] === tmp26) {
                let tmp36;
                if (cResult[25] === tmp33) {
                  tmp36 = cResult[26];
                }
                return tmp36;
              }
            }
            const obj10 = { style: card, children: items1 };
            items1 = [tmp19, tmp26, tmp33];
            const tmp39 = closure_5(request(notifyAgent[12]), obj10);
            cResult[23] = tmp5.card;
            cResult[24] = tmp26;
            cResult[25] = tmp33;
            cResult[26] = tmp39;
            tmp36 = tmp39;
          }
        }
      }
    }
  }
  const fn = function n() {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { content: React3(ConjureSettingsSheetDefault, obj2), key: ConjureSettingsSheet.CONJURE_SETTINGS_SHEET_KEY };
    obj2 = { projectId, scopeKeys: request.keys, note: request.note, notifyAgent, onSaved: markSaved, isPreview: true };
    showActionSheet(obj);
  };
  cResult[0] = markSaved;
  cResult[1] = tmp4;
  cResult[2] = projectId;
  cResult[3] = request.keys;
  cResult[4] = request.note;
  cResult[5] = fn;
  tmp8 = fn;
}) : (function ConjureSettingsRequestCard(projectId) {
  let Text;
  let done;
  let intl;
  let intl2;
  let intl4;
  let intl5;
  let markSaved;
  let obj3;
  let summary;
  let tmp16;
  projectId = projectId.projectId;
  const request = projectId.request;
  let flag = projectId.notifyAgent;
  const askId = projectId.askId;
  if (flag === undefined) {
    flag = true;
  }
  markSaved = undefined;
  let tmp = closure_6();
  let obj = projectId(flag[6]);
  const conjureSettingsAsk = obj.useConjureSettingsAsk(projectId, request, askId);
  ({ done, summary, markSaved } = conjureSettingsAsk);
  const items = [markSaved, flag, projectId, request];
  const superseded = conjureSettingsAsk.superseded;
  const callback = markSaved.useCallback(() => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { content: React3(ConjureSettingsSheetDefault, obj2), key: ConjureSettingsSheet.CONJURE_SETTINGS_SHEET_KEY };
    obj2 = { projectId, scopeKeys: request.keys, note: request.note, notifyAgent: flag, onSaved: markSaved, isPreview: true };
    showActionSheet(obj);
  }, items);
  if (superseded) {
    let tmp10Result;
    if (!done) {
      let obj2 = { style: tmp.card, children: closure_4(Text, obj3) };
      obj3 = { variant: "text-xs/semibold", color: "text-muted", children: intl.string(request(flag[11])["+uXDk+"]) };
      const tmp8 = request(flag[12]);
      Text = tmp2(tmp3[9]).Text;
      intl = tmp2(tmp3[10]).intl;
      tmp10Result = closure_4(tmp8, obj2);
    }
    return tmp10Result;
  }
  const obj4 = { style: tmp.card, children: null };
  const tmp12 = request(flag[12]);
  const Text2 = tmp2(tmp3[9]).Text;
  const tmp10 = closure_5;
  if (done) {
    const obj5 = { variant: "text-xs/semibold", color: "text-feedback-positive", children: intl5.string(request(flag[11]).AxBLLy) };
    intl5 = tmp2(tmp3[10]).intl;
    const items1 = [closure_4(Text2, obj5), ];
    let tmp13Result = null;
    if (summary.length > 0) {
      const obj6 = { variant: "text-sm/normal", color: "text-default", children: summary.join(" \u00B7 ") };
      const Text3 = tmp2(tmp3[9]).Text;
      tmp13Result = tmp13(Text3, obj6);
    }
    items1[1] = tmp13Result;
    obj4.children = items1;
    tmp16 = obj4;
  } else {
    const obj7 = { variant: "text-xs/semibold", color: "text-muted", children: intl2.string(request(flag[11])["jZjP+I"]) };
    intl2 = tmp2(tmp3[10]).intl;
    const items2 = [closure_4(Text2, obj7), , ];
    if (null != request.note) {
      let note;
      if ("" !== request.note) {
        note = request.note;
      }
      const obj8 = { text: note, variant: "text-sm/normal", color: "text-default" };
      items2[1] = closure_4(tmp14, obj8);
      const obj9 = { variant: "secondary", size: "sm", onPress: callback, text: intl4.string(request(flag[11]).d49riY) };
      const Button = tmp2(tmp3[14]).Button;
      intl4 = tmp2(tmp3[10]).intl;
      items2[2] = closure_4(Button, obj9);
      obj4.children = items2;
      tmp16 = obj4;
    }
    const intl3 = tmp2(tmp3[10]).intl;
    note = intl3.string(tmp11(tmp3[11]).XuOf5s);
  }
  tmp10Result = tmp10(tmp12, tmp16);
});
const result = size.fileFinishedImporting("modules/conjure/settings/native/ConjureSettingsRequestCard.tsx");

export default tmp3;
