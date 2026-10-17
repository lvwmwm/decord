// Module ID: 12140
// Function ID: 12141
// Name: ConjureLiveBehindTip
// Dependencies: [19, 21, 12130, 12141, 9705, 1128, 3883, 2]

// Module 12140 (ConjureLiveBehindTip)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1128 */;
import _modDef3883 from "module_3883" /* 3883 */;
import UploadIcon from "UploadIcon" /* 9705 */;
import conjureLiveBehindTip from "conjureLiveBehindTip" /* 12130 */;
import ConjureTipHintDefault from "ConjureTipHint" /* 12141 */;
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
      tmp2 = <tmp6 icon={UploadIcon.UploadIcon} onDismiss={tmp}>{intl.format(_modDef3883.fWfeZ8, obj2)}</tmp6>;
    }
    return tmp2;
  }
};
const merged = Object.assign(conjureLiveBehindTip.CONJURE_LIVE_BEHIND_TIP_BASE);
const result = size.fileFinishedImporting("modules/conjure/tips/native/ConjureLiveBehindTip.tsx");

export const CONJURE_LIVE_BEHIND_TIP = obj;
