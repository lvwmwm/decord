// Module ID: 15001
// Function ID: 15002
// Name: PremiumRestorationAlert
// Dependencies: [19, 6845, 21, 15002, 504, 2]

// Module 15001 (PremiumRestorationAlert)
import UntouchableAlertDefault from "UntouchableAlert" /* 15002 */;
import noop from "module_19" /* 19 */;
import IAPStore from "IAPStore" /* 6845 */;
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
