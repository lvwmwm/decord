// Module ID: 16381
// Function ID: 16382
// Name: MessagesItemChannelWave
// Dependencies: [19, 21, 5218, 1115, 4784, 2]

// Module 16381 (MessagesItemChannelWave)
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4784 */;
import components_Button_Button from "components/Button/Button" /* 5218 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/channel/MessagesItemChannelWave.tsx");

export default noop.memo(function MessagesItemChannelWave(hasNameplate) {
  let flag = hasNameplate.hasNameplate;
  if (flag === undefined) {
    flag = false;
  }
  const obj = { text: null, icon: null, variant: null, size: "sm", onPress: null };
  const intl = util.intl;
  obj.text = intl.string(util.t.n8nU4W);
  obj.icon = jsx(Text_Text.Text, { style: { marginTop: 3 }, variant: "text-sm/semibold", "aria-hidden": true, children: "\u{1F44B}" });
  let str = "secondary";
  if (flag) {
    str = "secondary-overlay";
  }
  obj.variant = str;
  obj.onPress = hasNameplate.wavePressed;
  return jsx(components_Button_Button.Button, { text: null, icon: null, variant: null, size: "sm", onPress: null });
});
