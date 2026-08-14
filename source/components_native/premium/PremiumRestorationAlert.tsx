// Module ID: 14558
// Function ID: 14559
// Name: render
// Dependencies: [19, 5920, 21, 14559, 589, 2]

// Module 14558 (render)
import importDefaultResult from "updateProduct";
import { jsx } from "jsxProd";
import { PureComponent } from "noop";
import importAllResult from "noop";
import importDefaultResult1 from "initialize";

class PremiumRestorationAlert extends PureComponent {
}
PremiumRestorationAlert.prototype["render"] = function render() {
  let isBusy;
  let onClose;
  ({ isBusy, onClose } = this.props);
  return jsx(importDefault(14559), { loading, onClose });
};
const items = [importDefaultResult];
const tmp4 = require("initialize").connectStores(items, () => ({ isBusy: importDefaultResult.isBusy() }))(PremiumRestorationAlert);
const result = require("jsxProd").fileFinishedImporting("components_native/premium/PremiumRestorationAlert.tsx");

export default tmp4;
