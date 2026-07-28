// Module ID: 8403
// Function ID: 67038
// Dependencies: [31, 4157, 33, 566, 4578, 6606, 689, 2]

// Module 8403
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
const memoResult = require("result").memo(function NitroUpsellButton(shiny) {
  let loading;
  let onPress;
  let text;
  let flag = shiny.shiny;
  ({ loading, onPress, text } = shiny);
  if (flag === undefined) {
    flag = true;
  }
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_3.useReducedMotion);
  obj = { text, size: "lg", loading, onPress };
  obj = { color: importDefault(689).colors.WHITE, size: "sm" };
  obj.icon = jsx(require(6606) /* NitroWheelIcon */.NitroWheelIcon, { color: importDefault(689).colors.WHITE, size: "sm" });
  obj.variant = "experimental_premium-primary";
  if (flag) {
    flag = !stateFromStores;
  }
  obj.shiny = flag;
  return jsx(require(4578) /* Button */.Button, { color: importDefault(689).colors.WHITE, size: "sm" });
});
const result = require("jsxProd").fileFinishedImporting("modules/premium/components/native/NitroUpsellButton.tsx");

export default memoResult;
