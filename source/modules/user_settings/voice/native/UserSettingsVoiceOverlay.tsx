// Module ID: 10721
// Function ID: 83364
// Name: UserSettingsVoiceOverlay
// Dependencies: [31, 10703, 33, 624, 10702, 1212, 5502, 10722, 2]
// Exports: default

// Module 10721 (UserSettingsVoiceOverlay)
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
  obj.onValueChange = importDefault(10722).setEnabled;
  obj.children = jsx(require(5502) /* TableSwitchRow */.TableSwitchRow, {});
  return jsx(require(10702) /* UserSettingsVoice */.UserSettingsTableRowGroup, {});
};
