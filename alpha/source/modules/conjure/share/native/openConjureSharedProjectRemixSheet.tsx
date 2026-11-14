// Module ID: 13790
// Function ID: 13791
// Name: openConjureSharedProjectRemixSheet
// Dependencies: [19, 21, 10536, 5552, 10978, 2]
// Exports: default

// Module 13790 (openConjureSharedProjectRemixSheet)
import Fragment from "Fragment" /* 21 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5552 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 10536 */;
import ConjureRemixSheet from "ConjureRemixSheet" /* 10978 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const ConjureRemixSheetDefault = ConjureRemixSheet;

function openRemixed(arg0) {
  openConjureHomeScreenDefault(arg0, { entryPoint: "remix" });
}
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/conjure/share/native/openConjureSharedProjectRemixSheet.tsx");

export default function openConjureSharedProjectRemixSheet(project, currentGuildId, mode) {
  let obj2;
  let tmp3;
  let tmp4;
  let tmp = arg3;
  if (arg3 === undefined) {
    tmp = null;
  }
  const tmp2 = ActionSheetActionCreators;
  const showActionSheet = tmp2.showActionSheet;
  const obj = { key: ConjureRemixSheet.CONJURE_REMIX_SHEET_KEY, content: tmp3(tmp4, obj2) };
  obj2 = { project, mode, currentGuildId, onRemixed: openRemixed, shareTicket: tmp };
  tmp4 = ConjureRemixSheetDefault;
  showActionSheet(obj);
  tmp3 = jsx;
};
