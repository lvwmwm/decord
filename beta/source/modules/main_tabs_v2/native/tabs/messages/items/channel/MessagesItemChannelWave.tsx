// Module ID: 15672
// Function ID: 15673
// Name: MessagesItemChannelWave
// Dependencies: [19, 21, 5281, 1115, 4832, 2]

// Module 15672 (MessagesItemChannelWave)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1115 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const memoResult = react.memo(function MessagesItemChannelWave(hasNameplate) {
  let intl;
  let str;
  let flag = hasNameplate.hasNameplate;
  const wavePressed = hasNameplate.wavePressed;
  if (flag === undefined) {
    flag = false;
  }
  const obj = { text: intl.string(intl2.t.n8nU4W), icon: null, variant: str, size: "sm", onPress: wavePressed };
  const Button = components_Button_Button.Button;
  intl = intl2.intl;
  str = "secondary";
  const tmp = jsx;
  if (flag) {
    str = "secondary-overlay";
  }
  return tmp(Button, obj);
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/channel/MessagesItemChannelWave.tsx");

export default memoResult;
