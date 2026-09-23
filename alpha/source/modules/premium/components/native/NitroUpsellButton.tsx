// Module ID: 10312
// Function ID: 10313
// Name: NitroUpsellButton
// Dependencies: [19, 4819, 21, 504, 5271, 9016, 576, 2]

// Module 10312 (NitroUpsellButton)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import components_Button_Button from "components/Button/Button" /* 5271 */;
import NitroWheelIcon from "NitroWheelIcon" /* 9016 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4819 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/components/native/NitroUpsellButton.tsx");

export default noop.memo(function NitroUpsellButton(shiny) {
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
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj2 = { text, size: str, loading, onPress, icon: null, variant: "experimental_premium-primary", shiny: null };
  const tmp2 = jsx;
  obj2.icon = jsx(NitroWheelIcon.NitroWheelIcon, { color: nativeDefault.colors.WHITE, size: "sm" });
  if (flag) {
    flag = !stateFromStores;
  }
  obj2.shiny = flag;
  return tmp2(components_Button_Button.Button, obj2);
});
