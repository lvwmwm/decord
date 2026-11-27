// Module ID: 18723
// Function ID: 18724
// Name: openConjureSetupAskForm
// Dependencies: [19, 21, 5257, 18724, 18505, 18656, 2]
// Exports: default

// Module 18723 (openConjureSetupAskForm)
import Fragment from "Fragment" /* 21 */;
import ConjureSettingsSheetDefault from "ConjureSettingsSheet" /* 18505 */;
import conjureSettingsAsks from "conjureSettingsAsks" /* 18656 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/conjure/setup_asks/native/openConjureSetupAskForm.tsx");

export default function openConjureSetupAskForm(projectId, kind) {
  let askId;
  let fn;
  let request;
  if ("keys" !== kind.kind) {
    ({ request, askId } = kind);
    const showActionSheet2 = askId(5257).showActionSheet;
    const obj2 = { projectId, initialTab: "app", scopeKeys: null, note: null, notifyAgent: null != askId, onSaved: fn, isPreview: true };
    ({ keys: obj3.scopeKeys, note: obj3.note } = request);
    fn = undefined;
    askId(5257);
    const tmp10 = jsx;
    const tmp12 = ConjureSettingsSheetDefault;
    const tmp7 = askId;
    if (null != askId) {
      fn = () => {
        const obj = conjureSettingsAsks;
        return obj.markSettingsRequestSaved(askId);
      };
    }
    const obj4 = { content: tmp10(tmp12, obj2), key: tmp7(18505).CONJURE_SETTINGS_SHEET_KEY };
    showActionSheet2(obj4);
  } else {
    let obj = { content: null, key: askId(18724).CONJURE_SECRETS_SHEET_KEY };
    const showActionSheet = askId(5257).showActionSheet;
    askId(5257);
    showActionSheet(obj);
  }
};
