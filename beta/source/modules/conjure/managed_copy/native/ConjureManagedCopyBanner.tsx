// Module ID: 13027
// Function ID: 13028
// Name: ConjureManagedCopyBanner
// Dependencies: [19, 21, 12321, 1113, 4026, 13028, 8128, 2]
// Exports: default

// Module 13027 (ConjureManagedCopyBanner)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import useConjureManagedCopyDefault from "useConjureManagedCopy" /* 12321 */;
import openConjureProjectAboutSheetDefault from "openConjureProjectAboutSheet" /* 13028 */;
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
    const InlineNotice = sourceApplicationId(8128).InlineNotice;
    let intl = sourceApplicationId(1113).intl;
    tmp6 = <InlineNotice type="info" role="none" message={intl.string(_modDef4026.PTo2Qf)} action={tmp5} />;
  }
  return tmp6;
};
