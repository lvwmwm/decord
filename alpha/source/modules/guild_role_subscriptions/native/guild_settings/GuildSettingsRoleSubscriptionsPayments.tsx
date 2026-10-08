// Module ID: 18306
// Function ID: 18307
// Name: GuildSettingsRoleSubscriptionsPayments
// Dependencies: [19, 21, 558, 576, 16785, 1126, 2]

// Module 18306 (GuildSettingsRoleSubscriptionsPayments)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl3 from "intl" /* 1126 */;
import UnavailableNoticeDefault from "UnavailableNotice" /* 16785 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildSettingsRoleSubscriptionPayments() {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    UnavailableNoticeDefault;
    const intl = tmp(1126).intl;
    const intl2 = tmp(1126).intl;
    const tmp8 = <tmp7 title={intl.string(intl3.t.qAMb9K)} description={intl2.string(intl3.t.pRuzXJ)} brightTitle />;
    cResult[0] = tmp8;
    first = tmp8;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function GuildSettingsRoleSubscriptionPayments(arg0) {
  const merged = Object.assign(arg0, Object.assign({ ref: 0 }));
  UnavailableNoticeDefault;
  const intl = intl3.intl;
  const intl2 = intl3.intl;
  return <tmp2 title={intl.string(intl3.t.qAMb9K)} description={intl2.string(intl3.t.pRuzXJ)} brightTitle />;
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsPayments.tsx");

export default tmp3;
