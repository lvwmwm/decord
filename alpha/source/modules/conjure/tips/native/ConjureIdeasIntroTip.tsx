// Module ID: 18506
// Function ID: 18507
// Name: ConjureIdeasIntroTip
// Dependencies: [19, 21, 18507, 18508, 9637, 1112, 4192, 5515, 2]

// Module 18506 (ConjureIdeasIntroTip)
import intl4 from "intl" /* 1112 */;
import _modDef4192 from "module_4192" /* 4192 */;
import components_Button_Button from "components/Button/Button" /* 5515 */;
import LightbulbIcon from "LightbulbIcon" /* 9637 */;
import conjureIdeasIntroTip from "conjureIdeasIntroTip" /* 18507 */;
import ConjureTipCallout from "ConjureTipCallout" /* 18508 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const ConjureTipCalloutDefault = ConjureTipCallout;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let obj = {
  render(arg0, context) {
    let Button;
    let intl;
    let intl2;
    let intl3;
    let items;
    let obj5;
    const onAskForIdeas = context.context.onAskForIdeas;
    const dismiss = context.dismiss;
    const obj = { icon: LightbulbIcon.LightbulbIcon, onDismiss: dismiss, children: items };
    const tmp = ConjureTipCalloutDefault;
    const obj2 = { children: intl.string(_modDef4192.OJlbhX) };
    const ConjureTipTitle = ConjureTipCallout.ConjureTipTitle;
    intl = intl4.intl;
    items = [_false(ConjureTipTitle, obj2), , ];
    const obj3 = { children: intl2.string(_modDef4192["3vJBni"]) };
    const ConjureTipBody = ConjureTipCallout.ConjureTipBody;
    intl2 = intl4.intl;
    items[1] = _false(ConjureTipBody, obj3);
    const obj4 = { children: _false(Button, obj5) };
    const ConjureTipActions = ConjureTipCallout.ConjureTipActions;
    obj5 = {
      variant: "primary",
      size: "sm",
      text: intl3.string(_modDef4192["U/bLzU"]),
      disabled: null == onAskForIdeas,
      onPress() {
        if (dismiss != null) {
          tmp();
        }
        if (onAskForIdeas != null) {
          tmp3();
        }
      }
    };
    Button = components_Button_Button.Button;
    intl3 = intl4.intl;
    items[2] = _false(ConjureTipActions, obj4);
    return React3(tmp, obj);
  }
};
const merged = Object.assign(conjureIdeasIntroTip.CONJURE_IDEAS_INTRO_TIP_BASE);
const result = size.fileFinishedImporting("modules/conjure/tips/native/ConjureIdeasIntroTip.tsx");

export const CONJURE_IDEAS_INTRO_TIP = obj;
