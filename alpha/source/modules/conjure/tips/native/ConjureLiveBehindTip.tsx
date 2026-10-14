// Module ID: 11829
// Function ID: 11830
// Name: ConjureLiveBehindTip
// Dependencies: [19, 21, 11819, 11830, 9415, 1126, 3849, 2]

// Module 11829 (ConjureLiveBehindTip)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1126 */;
import _modDef3849 from "module_3849" /* 3849 */;
import UploadIcon from "UploadIcon" /* 9415 */;
import conjureLiveBehindTip from "conjureLiveBehindTip" /* 11819 */;
import ConjureTipHintDefault from "ConjureTipHint" /* 11830 */;
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
      tmp2 = <tmp6 icon={UploadIcon.UploadIcon} onDismiss={tmp}>{intl.format(_modDef3849.fWfeZ8, obj2)}</tmp6>;
    }
    return tmp2;
  }
};
const merged = Object.assign(conjureLiveBehindTip.CONJURE_LIVE_BEHIND_TIP_BASE);
const result = size.fileFinishedImporting("modules/conjure/tips/native/ConjureLiveBehindTip.tsx");

export const CONJURE_LIVE_BEHIND_TIP = obj;
