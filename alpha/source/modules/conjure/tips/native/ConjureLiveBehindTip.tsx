// Module ID: 12260
// Function ID: 12261
// Name: ConjureLiveBehindTip
// Dependencies: [19, 21, 12250, 12261, 9762, 1128, 3830, 2]

// Module 12260 (ConjureLiveBehindTip)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1128 */;
import _modDef3830 from "module_3830" /* 3830 */;
import UploadIcon from "UploadIcon" /* 9762 */;
import conjureLiveBehindTip from "conjureLiveBehindTip" /* 12250 */;
import ConjureTipHintDefault from "ConjureTipHint" /* 12261 */;
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
      tmp2 = <tmp6 icon={UploadIcon.UploadIcon} onDismiss={tmp}>{intl.format(_modDef3830.fWfeZ8, obj2)}</tmp6>;
    }
    return tmp2;
  }
};
const merged = Object.assign(conjureLiveBehindTip.CONJURE_LIVE_BEHIND_TIP_BASE);
const result = size.fileFinishedImporting("modules/conjure/tips/native/ConjureLiveBehindTip.tsx");

export const CONJURE_LIVE_BEHIND_TIP = obj;
