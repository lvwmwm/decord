// Module ID: 12168
// Function ID: 12169
// Name: ConjureIdeasTip
// Dependencies: [19, 21, 12151, 12160, 9863, 1128, 3883, 2]

// Module 12168 (ConjureIdeasTip)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1128 */;
import _modDef3883 from "module_3883" /* 3883 */;
import LightbulbIcon from "LightbulbIcon" /* 9863 */;
import conjureIdeasTip from "conjureIdeasTip" /* 12151 */;
import ConjureTipHintDefault from "ConjureTipHint" /* 12160 */;
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
    return <tmp icon={LightbulbIcon.LightbulbIcon} onDismiss={dismiss}>{intl.format(_modDef3883.cjZvW9, obj2)}</tmp>;
  }
};
const merged = Object.assign(conjureIdeasTip.CONJURE_IDEAS_TIP_BASE);
const result = size.fileFinishedImporting("modules/conjure/tips/native/ConjureIdeasTip.tsx");

export const CONJURE_IDEAS_TIP = obj;
