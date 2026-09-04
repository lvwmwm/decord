// Module ID: 9919
// Function ID: 9920
// Name: UserSettingsVoiceOverlay
// Dependencies: [19, 9909, 21, 644, 9908, 1233, 7141, 9920, 2]
// Exports: default

// Module 9919 (UserSettingsVoiceOverlay)
import noopAll from "noop" /* 19 */;
import defaultAreStatesEqual from "defaultAreStatesEqual" /* 644 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import TableSwitchRow from "TableSwitchRow" /* 7141 */;
import UserSettingsVoice from "UserSettingsVoice" /* 9908 */;
import dispatcherDefault from "dispatcher" /* 9920 */;
import closure_3 from "getUserAgnosticState" /* 9909 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoiceOverlay.tsx");

export default function UserSettingsVoiceOverlay() {
  let obj = defaultAreStatesEqual;
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => enabled.getEnabled());
  obj = { title: null, hasIcons: false, children: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.bNqkD9);
  obj = { label: null, subLabel: null, value: null, onValueChange: null };
  const intl2 = getSystemLocale.intl;
  obj[0] = intl2.string(getSystemLocale.t["9CSZJm"]);
  const intl3 = getSystemLocale.intl;
  obj[1] = intl3.string(getSystemLocale.t.Wfoivk);
  obj[2] = stateFromStores;
  obj[3] = dispatcherDefault.setEnabled;
  obj[2] = jsx(TableSwitchRow.TableSwitchRow, { label: null, subLabel: null, value: null, onValueChange: null });
  return jsx(UserSettingsVoice.UserSettingsTableRowGroup, { label: null, subLabel: null, value: null, onValueChange: null });
};
