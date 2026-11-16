// Module ID: 13775
// Function ID: 13776
// Name: ConjureManagedCopyBanner
// Dependencies: [19, 21, 13192, 1113, 4131, 13776, 8159, 2]
// Exports: default

// Module 13775 (ConjureManagedCopyBanner)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import useConjureManagedCopyDefault from "useConjureManagedCopy" /* 13192 */;
import openConjureProjectAboutSheetDefault from "openConjureProjectAboutSheet" /* 13776 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp;
const _modDef4131 = tmp(4131);
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
    const InlineNotice = sourceApplicationId(8159).InlineNotice;
    let intl = sourceApplicationId(1113).intl;
    tmp6 = <InlineNotice type="info" role="none" message={intl.string(_modDef4131.PTo2Qf)} action={tmp5} />;
  }
  return tmp6;
};
