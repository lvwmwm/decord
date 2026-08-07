// Module ID: 9447
// Function ID: 9448
// Dependencies: [19, 4294, 21, 589, 4712, 7644, 712, 2]

// Module 9447
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const memoResult = require("noop").memo(function NitroUpsellButton(shiny) {
  let loading;
  let onPress;
  let text;
  let flag = shiny.shiny;
  ({ loading, onPress, text } = shiny);
  if (flag === undefined) {
    flag = true;
  }
  let str = shiny.size;
  if (str === undefined) {
    str = "lg";
  }
  let obj = require(589) /* initialize */;
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  obj = { text, size: str, loading, onPress, icon: null, variant: "experimental_premium-primary", shiny: null };
  obj = { color: null, size: "sm" };
  obj[0] = importDefault(712).colors.WHITE;
  obj[4] = jsx(require(7644) /* NitroWheelIcon */.NitroWheelIcon, { color: null, size: "sm" });
  if (flag) {
    flag = !stateFromStores;
  }
  obj[6] = flag;
  return jsx(require(4712) /* Button */.Button, { color: null, size: "sm" });
});
const result = require("jsxProd").fileFinishedImporting("modules/premium/components/native/NitroUpsellButton.tsx");

export default memoResult;
