// Module ID: 18650
// Function ID: 18651
// Name: ConjureServerChangeButtons
// Dependencies: [19, 21, 18651, 5989, 5515, 18340, 18338, 5508, 2]
// Exports: default

// Module 18650 (ConjureServerChangeButtons)
import showConjureProjectServerSheetDefault from "showConjureProjectServerSheet" /* 18338 */;
import openConjureMakePersonalAlertDefault from "openConjureMakePersonalAlert" /* 18340 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
const result = size.fileFinishedImporting("modules/conjure/server_share/native/ConjureServerChangeButtons.tsx");

export default function ConjureServerChangeButtons(projectId) {
  let action;
  let c2;
  let change;
  let current;
  let onReply;
  let str;
  let tmp6Result;
  projectId = projectId.projectId;
  ({ change, current, onReply } = projectId);
  dependencyMap = undefined;
  action = undefined;
  const tmp = dependencyMap;
  const iter = onReply(18651)(projectId, change);
  ({ project: c2, action } = iter);
  let done = iter.done;
  const keep_label = change.keep_label;
  let tmp2 = current;
  const note = iter.note;
  if (current) {
    tmp2 = null != action;
  }
  if (done == null) {
    let tmp4 = null;
    if (current) {
      tmp4 = note;
    }
    done = tmp4;
  }
  if (null != done) {
    let tmp9Result = null;
    const Stack = projectId(5989).Stack;
    const tmp6 = keep_label;
    if (tmp2) {
      let obj = {
        text: action.label,
        variant: str,
        disabled: action.disabled,
        onPress() {
              if (null != c2) {
                let kind;
                if (action != null) {
                  kind = action.kind;
                }
                if ("remove_from_server" === kind) {
                  const obj2 = { project: tmp };
                  openConjureMakePersonalAlertDefault(obj2);
                } else {
                  const obj = { projectId };
                  showConjureProjectServerSheetDefault(obj);
                }
              }
            }
      };
      str = "primary";
      const Button = tmp7(5515).Button;
      const tmp9 = action;
      if ("remove_from_server" === action.kind) {
        str = "critical-secondary";
      }
      tmp9Result = tmp9(Button, obj);
    }
    const items = [tmp9Result, , ];
    let tmp10 = null;
    if (tmp2) {
      tmp10 = null;
      if (null != keep_label) {
        tmp10 = null;
        if (null != onReply) {
          let obj2 = {
            text: keep_label,
            variant: "secondary",
            onPress() {
                      return onReply(keep_label);
                    }
          };
          tmp10 = action(tmp7(5515).Button, obj2);
        }
      }
    }
    items[1] = tmp10;
    let tmp12 = null;
    if (null != done) {
      const obj3 = { variant: "body-sm/normal", color: "text-muted", children: done };
      tmp12 = action(tmp7(5508).Text, obj3);
    }
    const obj4 = { direction: "vertical", spacing: 8, children: items };
    items[2] = tmp12;
    tmp6Result = tmp6(Stack, obj4);
  } else {
    tmp6Result = null;
  }
  return tmp6Result;
};
