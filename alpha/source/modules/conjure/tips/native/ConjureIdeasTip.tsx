// Module ID: 11839
// Function ID: 11840
// Name: ConjureIdeasTip
// Dependencies: [19, 21, 11821, 11830, 9575, 1126, 3849, 2]

// Module 11839 (ConjureIdeasTip)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1126 */;
import _modDef3849 from "module_3849" /* 3849 */;
import LightbulbIcon from "LightbulbIcon" /* 9575 */;
import conjureIdeasTip from "conjureIdeasTip" /* 11821 */;
import ConjureTipHintDefault from "ConjureTipHint" /* 11830 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const obj = {
  render(arg0, context) {
    context = context.context;
    const dismiss = context.dismiss;
    ConjureTipHintDefault;
    const intl = intl2.intl;
    const obj2 = {
      onInspire() {
        const onAskForIdeas = context.onAskForIdeas;
        let onAskForIdeasResult;
        if (onAskForIdeas != null) {
          onAskForIdeasResult = onAskForIdeas();
        }
        return onAskForIdeasResult;
      }
    };
    return <tmp icon={LightbulbIcon.LightbulbIcon} onDismiss={dismiss}>{intl.format(_modDef3849.cjZvW9, obj2)}</tmp>;
  }
};
const merged = Object.assign(conjureIdeasTip.CONJURE_IDEAS_TIP_BASE);
const result = size.fileFinishedImporting("modules/conjure/tips/native/ConjureIdeasTip.tsx");

export const CONJURE_IDEAS_TIP = obj;
