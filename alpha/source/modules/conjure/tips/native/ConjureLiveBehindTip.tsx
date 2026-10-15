// Module ID: 12054
// Function ID: 12055
// Name: ConjureLiveBehindTip
// Dependencies: [19, 21, 12044, 12055, 9626, 1126, 3862, 2]

// Module 12054 (ConjureLiveBehindTip)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1126 */;
import _modDef3862 from "module_3862" /* 3862 */;
import UploadIcon from "UploadIcon" /* 9626 */;
import conjureLiveBehindTip from "conjureLiveBehindTip" /* 12044 */;
import ConjureTipHintDefault from "ConjureTipHint" /* 12055 */;
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
      tmp2 = <tmp6 icon={UploadIcon.UploadIcon} onDismiss={tmp}>{intl.format(_modDef3862.fWfeZ8, obj2)}</tmp6>;
    }
    return tmp2;
  }
};
const merged = Object.assign(conjureLiveBehindTip.CONJURE_LIVE_BEHIND_TIP_BASE);
const result = size.fileFinishedImporting("modules/conjure/tips/native/ConjureLiveBehindTip.tsx");

export const CONJURE_LIVE_BEHIND_TIP = obj;
