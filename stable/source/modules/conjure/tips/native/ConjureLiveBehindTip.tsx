// Module ID: 12862
// Function ID: 12863
// Name: ConjureLiveBehindTip
// Dependencies: [19, 21, 12297, 12857, 10071, 1113, 4026, 12846, 2]

// Module 12862 (ConjureLiveBehindTip)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import _modDef4026 from "module_4026" /* 4026 */;
import UploadIcon from "UploadIcon" /* 10071 */;
import useConjureStartPublishDefault from "useConjureStartPublish" /* 12297 */;
import conjureLiveBehindTip from "conjureLiveBehindTip" /* 12846 */;
import ConjureTipHintDefault from "ConjureTipHint" /* 12857 */;
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
  return <tmp icon={UploadIcon.UploadIcon} onDismiss={onDismiss}>{intl.format(_modDef4026.fWfeZ8, obj2)}</tmp>;
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
