// Module ID: 10944
// Function ID: 10945
// Name: UserSettingsVoiceOverlay
// Dependencies: [19, 10934, 21, 647, 10933, 1236, 5874, 10945, 2]
// Exports: default

// Module 10944 (UserSettingsVoiceOverlay)
import noopAll from "noop" /* 19 */;
import defaultAreStatesEqual from "defaultAreStatesEqual" /* 647 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import TableSwitchRow from "TableSwitchRow" /* 5874 */;
import UserSettingsVoice from "UserSettingsVoice" /* 10933 */;
import dispatcherDefault from "dispatcher" /* 10945 */;
import closure_3 from "getUserAgnosticState" /* 10934 */;
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
