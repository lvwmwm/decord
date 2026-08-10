// Module ID: 14480
// Function ID: 14481
// Name: render
// Dependencies: [19, 5858, 21, 14481, 589, 2]

// Module 14480 (render)
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
  return jsx(importDefault(14481), { loading, onClose });
};
const items = [importDefaultResult];
const tmp4 = require("initialize").connectStores(items, () => ({ isBusy: importDefaultResult.isBusy() }))(PremiumRestorationAlert);
const result = require("jsxProd").fileFinishedImporting("components_native/premium/PremiumRestorationAlert.tsx");

export default tmp4;
