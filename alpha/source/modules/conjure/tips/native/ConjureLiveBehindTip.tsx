// Module ID: 13516
// Function ID: 13517
// Name: ConjureLiveBehindTip
// Dependencies: [19, 21, 13078, 13511, 10671, 1113, 4079, 13500, 2]

// Module 13516 (ConjureLiveBehindTip)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import _modDef4079 from "module_4079" /* 4079 */;
import UploadIcon from "UploadIcon" /* 10671 */;
import useConjureStartPublishDefault from "useConjureStartPublish" /* 13078 */;
import conjureLiveBehindTip from "conjureLiveBehindTip" /* 13500 */;
import ConjureTipHintDefault from "ConjureTipHint" /* 13511 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

function LiveBehindHint(arg0) {
  let onDismiss;
  let projectId;
  let publish;
  ({ projectId, publish, onDismiss } = arg0);
  let closure_0 = useConjureStartPublishDefault(projectId, publish);
  ConjureTipHintDefault;
  const intl = intl2.intl;
  const obj2 = {
    onPublish() {
      return closure_0("outdated_notice");
    }
  };
  return <tmp icon={UploadIcon.UploadIcon} onDismiss={onDismiss}>{intl.format(_modDef4079.fWfeZ8, obj2)}</tmp>;
}
const jsx = Fragment.jsx;
const obj = {
  render(arg0, context) {
    const publish = context.context.publish;
    let tmp3 = null;
    if (null != publish) {
      tmp3 = <LiveBehindHint projectId={tmp} publish={publish} onDismiss={tmp2} />;
    }
    return tmp3;
  }
};
const merged = Object.assign(conjureLiveBehindTip.CONJURE_LIVE_BEHIND_TIP_BASE);
const result = size.fileFinishedImporting("modules/conjure/tips/native/ConjureLiveBehindTip.tsx");

export const CONJURE_LIVE_BEHIND_TIP = obj;
