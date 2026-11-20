// Module ID: 10872
// Function ID: 10873
// Name: UserSettingsVoiceOverlay
// Dependencies: [19, 10843, 21, 563, 10842, 1112, 7436, 10873, 2]
// Exports: default

// Module 10872 (UserSettingsVoiceOverlay)
import Fragment from "Fragment" /* 21 */;
import useStateFromStores from "useStateFromStores" /* 563 */;
import intl4 from "intl" /* 1112 */;
import TableSwitchRow2 from "TableSwitchRow" /* 7436 */;
import UserSettingsVoice from "UserSettingsVoice" /* 10842 */;
import MobileVoiceOverlayActionCreatorsDefault from "MobileVoiceOverlayActionCreators" /* 10873 */;
import react from "react" /* 19 */;
import MobileVoiceOverlayStore from "MobileVoiceOverlayStore" /* 10843 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoiceOverlay.tsx");

export default function UserSettingsVoiceOverlay() {
  let enabled;
  let intl2;
  let intl3;
  const items = [MobileVoiceOverlayStore];
  const obj = useStateFromStores;
  const stateFromStores = obj.useStateFromStores(items, () => enabled.getEnabled());
  const UserSettingsTableRowGroup = UserSettingsVoice.UserSettingsTableRowGroup;
  const intl = intl4.intl;
  ({ label: intl2.string(intl4.t["9CSZJm"]), subLabel: intl3.string(intl4.t.Wfoivk), value: stateFromStores, onValueChange: MobileVoiceOverlayActionCreatorsDefault.setEnabled });
  const TableSwitchRow = TableSwitchRow2.TableSwitchRow;
  intl2 = intl4.intl;
  intl3 = intl4.intl;
  return <UserSettingsTableRowGroup title={intl.string(intl4.t.bNqkD9)} hasIcons={false}>{null}</UserSettingsTableRowGroup>;
};
