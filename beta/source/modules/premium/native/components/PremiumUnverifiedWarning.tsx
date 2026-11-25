// Module ID: 14200
// Function ID: 14201
// Name: PremiumUnverifiedWarning
// Dependencies: [19, 1386, 21, 4913, 575, 4974, 1186, 1112, 504, 2]

// Module 14200 (PremiumUnverifiedWarning)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1112 */;
import native from "native" /* 1186 */;
import native2 from "native" /* 4974 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1386 */;
import createStyles from "createStyles" /* 4913 */;
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
const result = size.fileFinishedImporting("modules/premium/native/components/PremiumUnverifiedWarning.tsx");

export default tmp4;
