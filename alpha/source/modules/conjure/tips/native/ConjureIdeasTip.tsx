// Module ID: 12087
// Function ID: 12088
// Name: ConjureIdeasTip
// Dependencies: [19, 21, 12069, 12078, 9799, 1128, 3865, 2]

// Module 12087 (ConjureIdeasTip)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1128 */;
import _modDef3865 from "module_3865" /* 3865 */;
import LightbulbIcon from "LightbulbIcon" /* 9799 */;
import conjureIdeasTip from "conjureIdeasTip" /* 12069 */;
import ConjureTipHintDefault from "ConjureTipHint" /* 12078 */;
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
    return <tmp icon={LightbulbIcon.LightbulbIcon} onDismiss={dismiss}>{intl.format(_modDef3865.cjZvW9, obj2)}</tmp>;
  }
};
const merged = Object.assign(conjureIdeasTip.CONJURE_IDEAS_TIP_BASE);
const result = size.fileFinishedImporting("modules/conjure/tips/native/ConjureIdeasTip.tsx");

export const CONJURE_IDEAS_TIP = obj;
