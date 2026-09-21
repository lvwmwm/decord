// Module ID: 15504
// Function ID: 15505
// Name: UntouchableAlert
// Dependencies: [19, 17, 21, 4758, 4471, 5796, 2]

// Module 15504 (UntouchableAlert)
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 5796 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4758);
let closure_4 = createStyles.createLegacyClassComponentStyles({ container: { flex: 1, alignItems: "center", justifyContent: "center" } });
const PureComponent = noop.PureComponent;
class UntouchableAlert extends PureComponent {
}
const prototype = UntouchableAlert.prototype;
prototype["componentDidMount"] = function componentDidMount() {
  const self = this;
  if (!this.props.loading) {
    self.closeAlert();
  }
};
prototype["componentDidUpdate"] = function componentDidUpdate(loading) {
  const self = this;
  loading = this.props.loading;
  if (!tmp) {
    self.closeAlert();
  }
};
prototype["closeAlert"] = function closeAlert() {
  const self = this;
  setImmediate(() => {
    const props = self.props;
    return props.onClose();
  });
};
prototype["render"] = function render() {
  let tmp2 = null;
  if (this.props.loading) {
    const obj = { style: tmp.container, children: jsx(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
    tmp2 = <View style={tmp.container}>{jsx(ActivityIndicator_ActivityIndicator.ActivityIndicator, {})}</View>;
  }
  return tmp2;
};
UntouchableAlert.contextType = fn(4471).ThemeContext;
const size = fn(2);
const result = size.fileFinishedImporting("components_native/common/UntouchableAlert.tsx");

export default UntouchableAlert;
