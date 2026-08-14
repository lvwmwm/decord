// Module ID: 10847
// Function ID: 10848
// Name: UserSettingsVoiceOverlay
// Dependencies: [19, 10837, 21, 647, 10836, 1236, 5829, 10848, 2]
// Exports: default

// Module 10847 (UserSettingsVoiceOverlay)
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
  obj[3] = importDefault(10848).setEnabled;
  obj[2] = jsx(require(5829) /* TableSwitchRow */.TableSwitchRow, { label: null, subLabel: null, value: null, onValueChange: null });
  return jsx(require(10836) /* UserSettingsVoice */.UserSettingsTableRowGroup, { label: null, subLabel: null, value: null, onValueChange: null });
};
