// Module ID: 12996
// Function ID: 12997
// Name: ConjureManagedCopyBanner
// Dependencies: [19, 21, 12290, 1113, 4026, 12997, 8095, 2]
// Exports: default

// Module 12996 (ConjureManagedCopyBanner)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import useConjureManagedCopyDefault from "useConjureManagedCopy" /* 12290 */;
import openConjureProjectAboutSheetDefault from "openConjureProjectAboutSheet" /* 12997 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp;
const _modDef4026 = tmp(4026);
const jsx = Fragment.jsx;
let closure_5 = { guildId: null, channelId: null };
const result = size.fileFinishedImporting("modules/conjure/managed_copy/native/ConjureManagedCopyBanner.tsx");

export default function ConjureManagedCopyBanner(projectId) {
  let tmp = importDefault;
  const tmp3 = useConjureManagedCopyDefault(projectId.projectId);
  let sourceApplicationId;
  if (tmp3 != null) {
    sourceApplicationId = tmp3.sourceApplicationId;
  }
  if (sourceApplicationId == null) {
    sourceApplicationId = null;
  }
  [][0] = sourceApplicationId;
  let tmp6 = null;
  if (null != tmp3) {
    const InlineNotice = sourceApplicationId(8095).InlineNotice;
    let intl = sourceApplicationId(1113).intl;
    tmp6 = <InlineNotice type="info" role="none" message={intl.string(_modDef4026.PTo2Qf)} action={tmp5} />;
  }
  return tmp6;
};
