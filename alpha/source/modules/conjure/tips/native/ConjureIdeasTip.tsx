// Module ID: 12064
// Function ID: 12065
// Name: ConjureIdeasTip
// Dependencies: [19, 21, 12046, 12055, 9784, 1126, 3862, 2]

// Module 12064 (ConjureIdeasTip)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1126 */;
import _modDef3862 from "module_3862" /* 3862 */;
import LightbulbIcon from "LightbulbIcon" /* 9784 */;
import conjureIdeasTip from "conjureIdeasTip" /* 12046 */;
import ConjureTipHintDefault from "ConjureTipHint" /* 12055 */;
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
    return <tmp icon={LightbulbIcon.LightbulbIcon} onDismiss={dismiss}>{intl.format(_modDef3862.cjZvW9, obj2)}</tmp>;
  }
};
const merged = Object.assign(conjureIdeasTip.CONJURE_IDEAS_TIP_BASE);
const result = size.fileFinishedImporting("modules/conjure/tips/native/ConjureIdeasTip.tsx");

export const CONJURE_IDEAS_TIP = obj;
