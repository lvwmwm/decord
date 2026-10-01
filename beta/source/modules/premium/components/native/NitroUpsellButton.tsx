// Module ID: 9425
// Function ID: 9426
// Name: NitroUpsellButton
// Dependencies: [19, 4825, 21, 504, 5281, 8122, 576, 2]

// Module 9425 (NitroUpsellButton)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import NitroWheelIcon2 from "NitroWheelIcon" /* 8122 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
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
