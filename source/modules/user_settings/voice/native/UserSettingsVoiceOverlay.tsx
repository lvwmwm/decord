// Module ID: 10857
// Function ID: 10858
// Name: UserSettingsVoiceOverlay
// Dependencies: [19, 10847, 21, 647, 10846, 1236, 5768, 10858, 2]
// Exports: default

// Module 10857 (UserSettingsVoiceOverlay)
import "noop";
import getUserAgnosticState from "getUserAgnosticState";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoiceOverlay.tsx");

export default function UserSettingsVoiceOverlay() {
  let obj = require(647) /* defaultAreStatesEqual */;
  const items = [getUserAgnosticState];
  const stateFromStores = obj.useStateFromStores(items, () => enabled.getEnabled());
  obj = { title: null, hasIcons: false, children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t.bNqkD9);
  obj = { label: null, subLabel: null, value: null, onValueChange: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl2.string(require(1236) /* getSystemLocale */.t["9CSZJm"]);
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl3.string(require(1236) /* getSystemLocale */.t.Wfoivk);
  obj[2] = stateFromStores;
  obj[3] = importDefault(10858).setEnabled;
  obj[2] = jsx(require(5768) /* TableSwitchRow */.TableSwitchRow, { label: null, subLabel: null, value: null, onValueChange: null });
  return jsx(require(10846) /* UserSettingsVoice */.UserSettingsTableRowGroup, { label: null, subLabel: null, value: null, onValueChange: null });
};
