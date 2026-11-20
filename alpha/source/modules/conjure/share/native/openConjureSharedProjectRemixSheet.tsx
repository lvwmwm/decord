// Module ID: 12167
// Function ID: 12168
// Name: openConjureSharedProjectRemixSheet
// Dependencies: [19, 21, 12168, 5008, 12169, 2]
// Exports: default

// Module 12167 (openConjureSharedProjectRemixSheet)
import Fragment from "Fragment" /* 21 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5008 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 12168 */;
import ConjureRemixSheet from "ConjureRemixSheet" /* 12169 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const ConjureRemixSheetDefault = ConjureRemixSheet;

function openRemixed(arg0) {
  openConjureHomeScreenDefault(arg0, { entryPoint: "remix" });
}
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/conjure/share/native/openConjureSharedProjectRemixSheet.tsx");

export default function openConjureSharedProjectRemixSheet(project, currentGuildId) {
  let obj2;
  let tmp3;
  let tmp4;
  let tmp = arg2;
  if (arg2 === undefined) {
    tmp = null;
  }
  const tmp2 = ActionSheetActionCreators;
  const showActionSheet = tmp2.showActionSheet;
  const obj = { key: ConjureRemixSheet.CONJURE_REMIX_SHEET_KEY, content: tmp3(tmp4, obj2) };
  obj2 = { project, currentGuildId, onRemixed: openRemixed, shareTicket: tmp };
  tmp4 = ConjureRemixSheetDefault;
  showActionSheet(obj);
  tmp3 = jsx;
};
