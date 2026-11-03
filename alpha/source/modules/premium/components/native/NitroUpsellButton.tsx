// Module ID: 10420
// Function ID: 10421
// Name: NitroUpsellButton
// Dependencies: [19, 5142, 21, 504, 5754, 9656, 575, 2]

// Module 10420 (NitroUpsellButton)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import components_Button_Button from "components/Button/Button" /* 5754 */;
import NitroWheelIcon2 from "NitroWheelIcon" /* 9656 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5142 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const memoResult = react.memo(function NitroUpsellButton(shiny) {
  let loading;
  let onPress;
  let text;
  let useReducedMotion;
  let flag = shiny.shiny;
  ({ loading, onPress, text } = shiny);
  if (flag === undefined) {
    flag = true;
  }
  let str = shiny.size;
  if (str === undefined) {
    str = "lg";
  }
  const items = [AccessibilityStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj2 = { text, size: str, loading, onPress, icon: null, variant: "experimental_premium-primary", shiny: flag };
  const Button = components_Button_Button.Button;
  ({ color: nativeDefault.colors.WHITE, size: "sm" });
  const NitroWheelIcon = NitroWheelIcon2.NitroWheelIcon;
  const tmp2 = jsx;
  if (flag) {
    flag = !stateFromStores;
  }
  return tmp2(Button, obj2);
});
const result = size.fileFinishedImporting("modules/premium/components/native/NitroUpsellButton.tsx");

export default memoResult;
