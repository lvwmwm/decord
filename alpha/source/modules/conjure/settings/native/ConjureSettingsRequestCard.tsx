// Module ID: 12653
// Function ID: 12654
// Name: ConjureSettingsRequestCard
// Dependencies: [19, 21, 5014, 575, 12654, 5258, 12468, 12477, 5624, 1113, 3868, 12482, 5634, 2]
// Exports: default

// Module 12653 (ConjureSettingsRequestCard)
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5258 */;
import ConjureSettingsSheet from "ConjureSettingsSheet" /* 12468 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const ConjureSettingsSheetDefault = ConjureSettingsSheet;

let closure_4;
let hasOwnProperty;
let obj2;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { card: obj2 };
obj2 = { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/settings/native/ConjureSettingsRequestCard.tsx");

export default function ConjureSettingsRequestCard(projectId) {
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
  let obj = projectId(flag[4]);
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
      obj3 = { variant: "text-xs/semibold", color: "text-muted", children: intl.string(request(flag[10])["+uXDk+"]) };
      const tmp8 = request(flag[7]);
      Text = tmp2(tmp3[8]).Text;
      intl = tmp2(tmp3[9]).intl;
      tmp10Result = closure_4(tmp8, obj2);
    }
    return tmp10Result;
  }
  const obj4 = { style: tmp.card, children: null };
  const tmp12 = request(flag[7]);
  const Text2 = tmp2(tmp3[8]).Text;
  const tmp10 = closure_5;
  if (done) {
    const obj5 = { variant: "text-xs/semibold", color: "text-feedback-positive", children: intl5.string(request(flag[10]).AxBLLy) };
    intl5 = tmp2(tmp3[9]).intl;
    const items1 = [closure_4(Text2, obj5), ];
    let tmp13Result = null;
    if (summary.length > 0) {
      const obj6 = { variant: "text-sm/normal", color: "text-default", children: summary.join(" \u00B7 ") };
      const Text3 = tmp2(tmp3[8]).Text;
      tmp13Result = tmp13(Text3, obj6);
    }
    items1[1] = tmp13Result;
    obj4.children = items1;
    tmp16 = obj4;
  } else {
    const obj7 = { variant: "text-xs/semibold", color: "text-muted", children: intl2.string(request(flag[10])["jZjP+I"]) };
    intl2 = tmp2(tmp3[9]).intl;
    const items2 = [closure_4(Text2, obj7), , ];
    if (null != request.note) {
      let note;
      if ("" !== request.note) {
        note = request.note;
      }
      const obj8 = { text: note, variant: "text-sm/normal", color: "text-default" };
      items2[1] = closure_4(tmp14, obj8);
      const obj9 = { variant: "secondary", size: "sm", onPress: callback, text: intl4.string(request(flag[10]).d49riY) };
      const Button = tmp2(tmp3[12]).Button;
      intl4 = tmp2(tmp3[9]).intl;
      items2[2] = closure_4(Button, obj9);
      obj4.children = items2;
      tmp16 = obj4;
    }
    const intl3 = tmp2(tmp3[9]).intl;
    note = intl3.string(tmp11(tmp3[10]).XuOf5s);
  }
  tmp10Result = tmp10(tmp12, tmp16);
};
