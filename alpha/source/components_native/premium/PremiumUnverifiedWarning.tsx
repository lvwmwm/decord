// Module ID: 13788
// Function ID: 13789
// Name: PremiumUnverifiedWarning
// Dependencies: [19, 1390, 21, 5091, 587, 4788, 1200, 1126, 504, 2]

// Module 13788 (PremiumUnverifiedWarning)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import native from "native" /* 1200 */;
import native2 from "native" /* 4788 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1390 */;
import createStyles from "createStyles" /* 5091 */;
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
