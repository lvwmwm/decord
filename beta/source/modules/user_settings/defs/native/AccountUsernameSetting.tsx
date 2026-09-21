// Module ID: 14968
// Function ID: 14969
// Name: AccountUsernameSetting
// Dependencies: [19, 1376, 8238, 1078, 21, 558, 568, 4603, 504, 12002, 4754, 11594, 1119, 14969, 2]

// Module 14968 (AccountUsernameSetting)
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import UserUtilsDefault from "UserUtils" /* 4603 */;
import AutomodQuarantineUtils from "AutomodQuarantineUtils" /* 12002 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1376 */;

const Text_Text = Text(4754);
require = fn;
const jsx = fn(21).jsx;
fn(558);
const ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function o() {
      return UserUtilsDefault.getUserTag(currentUser.getCurrentUser(), { decoration: "never" });
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (() => {
  const items = [UserStore];
  return initialize.useStateFromStores(items, () => UserUtilsDefault.getUserTag(currentUser.getCurrentUser(), { decoration: "never" }));
});
const SettingBuilders = fn(11594);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let Text = require;
  let tmp = dependencyMap;
  const cResult = c.c(2);
  const guildAutomodProfileQuarantineErrors = AutomodQuarantineUtils.useGuildAutomodProfileQuarantineErrors();
  let first;
  if (guildAutomodProfileQuarantineErrors != null) {
    const nick = guildAutomodProfileQuarantineErrors.nick;
    if (nick != null) {
      first = nick[0];
    }
  }
  if (null == first) {
    return null;
  } else if (cResult[0] !== first) {
    Text = Text_Text.Text;
    const obj3 = { variant: "text-xs/medium", color: "text-feedback-warning", children: first };
    tmp = <Text variant="text-xs/medium" color="text-feedback-warning">{first}</Text>;
    cResult[0] = first;
    cResult[1] = tmp;
  }
}) : (() => {
  const guildAutomodProfileQuarantineErrors = AutomodQuarantineUtils.useGuildAutomodProfileQuarantineErrors();
  let first;
  if (guildAutomodProfileQuarantineErrors != null) {
    const nick = guildAutomodProfileQuarantineErrors.nick;
    if (nick != null) {
      first = nick[0];
    }
  }
  let tmp5 = null;
  if (null != first) {
    const obj2 = { variant: "text-xs/medium", color: "text-feedback-warning", children: first };
    tmp5 = jsx(Text_Text.Text, { variant: "text-xs/medium", color: "text-feedback-warning", children: first });
  }
  return tmp5;
});
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.IEpCBQ);
  },
  parent: fn(8238).MobileUserSettings.ACCOUNT,
  useTrailing: tmp3,
  useDescription: ReactCompilerGating.isReactCompilerEnabled() ? (() => {
    let Text = require;
    let tmp = dependencyMap;
    const cResult = c.c(2);
    const guildAutomodProfileQuarantineErrors = AutomodQuarantineUtils.useGuildAutomodProfileQuarantineErrors();
    let first;
    if (guildAutomodProfileQuarantineErrors != null) {
      const nick = guildAutomodProfileQuarantineErrors.nick;
      if (nick != null) {
        first = nick[0];
      }
    }
    if (null == first) {
      return null;
    } else if (cResult[0] !== first) {
      Text = Text_Text.Text;
      const obj3 = { variant: "text-xs/medium", color: "text-feedback-warning", children: first };
      tmp = <Text variant="text-xs/medium" color="text-feedback-warning">{first}</Text>;
      cResult[0] = first;
      cResult[1] = tmp;
    }
  }) : (() => {
    const guildAutomodProfileQuarantineErrors = AutomodQuarantineUtils.useGuildAutomodProfileQuarantineErrors();
    let first;
    if (guildAutomodProfileQuarantineErrors != null) {
      const nick = guildAutomodProfileQuarantineErrors.nick;
      if (nick != null) {
        first = nick[0];
      }
    }
    let tmp5 = null;
    if (null != first) {
      const obj2 = { variant: "text-xs/medium", color: "text-feedback-warning", children: first };
      tmp5 = jsx(Text_Text.Text, { variant: "text-xs/medium", color: "text-feedback-warning", children: first });
    }
    return tmp5;
  }),
  screen: {
    route: fn(1078).UserSettingsSections.ACCOUNT_CHANGE_USERNAME,
    getComponent() {
      return require("UserSettingsChangeUsername").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountUsernameSetting.tsx");

export default route;
