// Module ID: 14964
// Function ID: 14965
// Name: PremiumRestorationAlert
// Dependencies: [19, 6824, 21, 14965, 504, 2]

// Module 14964 (PremiumRestorationAlert)
import UntouchableAlertDefault from "UntouchableAlert" /* 14965 */;
import noop from "module_19" /* 19 */;
import IAPStore from "IAPStore" /* 6824 */;
import initialize from "initialize" /* 504 */;

const jsx = fn(21).jsx;
const PureComponent = noop.PureComponent;
class PremiumRestorationAlert extends PureComponent {
}
PremiumRestorationAlert.prototype["render"] = function render() {
  ({ isBusy, onClose } = this.props);
  return jsx(UntouchableAlertDefault, { loading, onClose });
};
const items = [IAPStore];
const size = fn(2);
const result = size.fileFinishedImporting("components_native/premium/PremiumRestorationAlert.tsx");

export default initialize.connectStores(items, () => ({ isBusy: IAPStore.isBusy() }))(PremiumRestorationAlert);
