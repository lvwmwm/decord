// Module ID: 8895
// Function ID: 8896
// Name: ManualReviewPendingAlertModal
// Dependencies: [19, 21, 5146, 1115, 3098, 5146, 2]
// Exports: default

// Module 8895 (ManualReviewPendingAlertModal)
import util from "util" /* 1115 */;
import _modDef3098 from "module_3098" /* 3098 */;
import AlertModal from "AlertModal" /* 5146 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/native/ManualReviewPendingAlertModal.tsx");

export default function ManualReviewPendingAlertModal() {
  const obj = { title: null, content: null, actions: null };
  const intl = util.intl;
  obj.title = intl.string(_modDef3098.CNm4w6);
  const intl2 = util.intl;
  obj.content = intl2.string(_modDef3098["14Fje3"]);
  const obj2 = { children: null };
  const obj3 = { text: null };
  const intl3 = util.intl;
  obj3.text = intl3.string(util.t["NX+WJN"]);
  obj2.children = jsx(AlertModal.AlertActionButton, { text: null }, "got-it");
  obj.actions = jsx(AlertModal.AlertActions, { children: null });
  return jsx(AlertModal.AlertModal, { title: null, content: null, actions: null });
};
