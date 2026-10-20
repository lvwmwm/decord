// Module ID: 12194
// Function ID: 12195
// Name: ConjureLiveBehindTip
// Dependencies: [19, 21, 12184, 12195, 9732, 1128, 3820, 2]

// Module 12194 (ConjureLiveBehindTip)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1128 */;
import _modDef3820 from "module_3820" /* 3820 */;
import UploadIcon from "UploadIcon" /* 9732 */;
import conjureLiveBehindTip from "conjureLiveBehindTip" /* 12184 */;
import ConjureTipHintDefault from "ConjureTipHint" /* 12195 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const obj = {
  render(arg0, context) {
    const publish = context.context.publish;
    let tmp2 = null;
    if (null != publish) {
      ConjureTipHintDefault;
      const intl = intl2.intl;
      const obj2 = {
        onPublish() {
            return publish.run("outdated_notice");
          }
      };
      tmp2 = <tmp6 icon={UploadIcon.UploadIcon} onDismiss={tmp}>{intl.format(_modDef3820.fWfeZ8, obj2)}</tmp6>;
    }
    return tmp2;
  }
};
const merged = Object.assign(conjureLiveBehindTip.CONJURE_LIVE_BEHIND_TIP_BASE);
const result = size.fileFinishedImporting("modules/conjure/tips/native/ConjureLiveBehindTip.tsx");

export const CONJURE_LIVE_BEHIND_TIP = obj;
