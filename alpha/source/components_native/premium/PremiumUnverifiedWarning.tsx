// Module ID: 15456
// Function ID: 15457
// Name: PremiumUnverifiedWarning
// Dependencies: [19, 1383, 21, 5014, 575, 5080, 1187, 1113, 504, 2]

// Module 15456 (PremiumUnverifiedWarning)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import native from "native" /* 1187 */;
import native2 from "native" /* 5080 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1383 */;
import createStyles from "createStyles" /* 5014 */;
import get_initialized from "get initialized" /* 504 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const obj = { warning: { color: nativeDefault.unsafe_rawColors.RED_400, fontSize: 12, marginTop: 10 } };
({ color: nativeDefault.unsafe_rawColors.RED_400, fontSize: 12, marginTop: 10 });
let closure_4 = createStyles.createLegacyClassComponentStyles(obj);
const PureComponent = react.PureComponent;
class PremiumUnverifiedWarning extends PureComponent {
  render() {
    let tmp3 = null;
    if (!this.props.verified) {
      const items = [tmp.warning, tmp2];
      const LegacyText = native.LegacyText;
      const intl = intl2.intl;
      tmp3 = <LegacyText style={items}>{intl.string(intl2.t["0LgOKH"])}</LegacyText>;
    }
    return tmp3;
  }
}
const prototype = PremiumUnverifiedWarning.prototype;
PremiumUnverifiedWarning.contextType = native2.ThemeContext;
let items = [UserStore];
const tmp4 = get_initialized.connectStores(items, () => {
  const currentUser = UserStore.getCurrentUser();
  let verified;
  if (currentUser != null) {
    verified = currentUser.verified;
  }
  if (verified == null) {
    verified = false;
  }
  return { verified };
})(PremiumUnverifiedWarning);
const result = size.fileFinishedImporting("components_native/premium/PremiumUnverifiedWarning.tsx");

export default tmp4;
