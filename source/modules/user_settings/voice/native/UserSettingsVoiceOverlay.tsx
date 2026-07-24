// Module ID: 10749
// Function ID: 83622
// Name: UserSettingsVoiceOverlay
// Dependencies: [31, 10739, 33, 624, 10738, 1212, 5502, 10750, 2]
// Exports: default

// Module 10749 (UserSettingsVoiceOverlay)
import "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoiceOverlay.tsx");

export default function UserSettingsVoiceOverlay() {
  let obj = require(624) /* defaultAreStatesEqual */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_3.getEnabled());
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.bNqkD9);
  obj.hasIcons = false;
  obj = {};
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.label = intl2.string(require(1212) /* getSystemLocale */.t["9CSZJm"]);
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.subLabel = intl3.string(require(1212) /* getSystemLocale */.t.Wfoivk);
  obj.value = stateFromStores;
  obj.onValueChange = importDefault(10750).setEnabled;
  obj.children = jsx(require(5502) /* TableSwitchRow */.TableSwitchRow, {});
  return jsx(require(10738) /* UserSettingsVoice */.UserSettingsTableRowGroup, {});
};
