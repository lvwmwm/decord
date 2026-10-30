// Module ID: 12590
// Function ID: 12591
// Name: ConjureLiveBehindTip
// Dependencies: [19, 21, 12405, 12585, 9895, 1114, 3865, 12574, 2]

// Module 12590 (ConjureLiveBehindTip)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1114 */;
import _modDef3865 from "module_3865" /* 3865 */;
import UploadIcon from "UploadIcon" /* 9895 */;
import useConjureStartPublishDefault from "useConjureStartPublish" /* 12405 */;
import conjureLiveBehindTip from "conjureLiveBehindTip" /* 12574 */;
import ConjureTipHintDefault from "ConjureTipHint" /* 12585 */;
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
  return <tmp icon={UploadIcon.UploadIcon} onDismiss={onDismiss}>{intl.format(_modDef3865.fWfeZ8, obj2)}</tmp>;
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
