// Module ID: 18251
// Function ID: 18252
// Name: GuildSettingsRoleSubscriptionsPayments
// Dependencies: [19, 21, 558, 568, 16897, 1119, 2]

// Module 18251 (GuildSettingsRoleSubscriptionsPayments)
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import UnavailableNoticeDefault from "UnavailableNotice" /* 16897 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsPayments.tsx");

export default noop.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { title: null, description: null, brightTitle: true };
    const intl = tmp(1119).intl;
    obj2.title = intl.string(tmp(1119).t.qAMb9K);
    const intl2 = tmp(1119).intl;
    obj2.description = intl2.string(tmp(1119).t.pRuzXJ);
    const tmp8 = jsx(UnavailableNoticeDefault, { title: null, description: null, brightTitle: true });
    cResult[0] = tmp8;
    let first = tmp8;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => {
  const obj = { title: null, description: null, brightTitle: true };
  const intl = util.intl;
  obj.title = intl.string(util.t.qAMb9K);
  const intl2 = util.intl;
  obj.description = intl2.string(util.t.pRuzXJ);
  return jsx(UnavailableNoticeDefault, { title: null, description: null, brightTitle: true });
}));
