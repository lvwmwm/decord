// Module ID: 14380
// Function ID: 14381
// Name: render
// Dependencies: [19, 5767, 21, 14381, 589, 2]

// Module 14380 (render)
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
  return jsx(importDefault(14381), { loading, onClose });
};
const items = [importDefaultResult];
const tmp4 = require("initialize").connectStores(items, () => ({ isBusy: importDefaultResult.isBusy() }))(PremiumRestorationAlert);
const result = require("jsxProd").fileFinishedImporting("components_native/premium/PremiumRestorationAlert.tsx");

export default tmp4;
