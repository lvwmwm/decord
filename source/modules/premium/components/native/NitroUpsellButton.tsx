// Module ID: 8424
// Function ID: 8425
// Dependencies: [19, 4181, 21, 589, 4600, 6624, 712, 2]

// Module 8424
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
  let obj = require(589) /* initialize */;
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  obj = { text, size: "lg", loading, onPress, icon: null, variant: "experimental_premium-primary", shiny: null };
  obj = { color: null, size: "sm" };
  obj[0] = importDefault(712).colors.WHITE;
  obj[4] = jsx(require(6624) /* NitroWheelIcon */.NitroWheelIcon, { color: null, size: "sm" });
  if (flag) {
    flag = !stateFromStores;
  }
  obj[6] = flag;
  return jsx(require(4600) /* Button */.Button, { color: null, size: "sm" });
});
const result = require("jsxProd").fileFinishedImporting("modules/premium/components/native/NitroUpsellButton.tsx");

export default memoResult;
