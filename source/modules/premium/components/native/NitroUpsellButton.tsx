// Module ID: 9899
// Function ID: 9900
// Dependencies: [19, 4473, 21, 586, 4936, 8592, 709, 2]

// Module 9899
import initialize from "initialize" /* 586 */;
import ThemesDefault from "Themes" /* 709 */;
import Button from "Button" /* 4936 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8592 */;
import closure_3 from "maybeApplyNoTextColorForLightCustomTheme" /* 4473 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
const memoResult = importAllResult.memo(function NitroUpsellButton(shiny) {
  let flag = shiny.shiny;
  ({ loading, onPress, text } = shiny);
  if (flag === undefined) {
    flag = true;
  }
  let str = shiny.size;
  if (str === undefined) {
    str = "lg";
  }
  let obj = initialize;
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  obj = { text, size: str, loading, onPress, icon: null, variant: "experimental_premium-primary", shiny: null };
  obj = { color: ThemesDefault.colors.WHITE, size: "sm" };
  obj[4] = jsx(NitroWheelIcon.NitroWheelIcon, { color: ThemesDefault.colors.WHITE, size: "sm" });
  if (flag) {
    flag = !stateFromStores;
  }
  obj[6] = flag;
  return jsx(Button.Button, { color: ThemesDefault.colors.WHITE, size: "sm" });
});
const result = require("set").fileFinishedImporting("modules/premium/components/native/NitroUpsellButton.tsx");

export default memoResult;
