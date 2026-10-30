// Module ID: 11914
// Function ID: 11915
// Name: UserSettingsVoiceOverlay
// Dependencies: [19, 11902, 21, 563, 11901, 1114, 7363, 11915, 2]
// Exports: default

// Module 11914 (UserSettingsVoiceOverlay)
import Fragment from "Fragment" /* 21 */;
import useStateFromStores from "useStateFromStores" /* 563 */;
import intl4 from "intl" /* 1114 */;
import TableSwitchRow2 from "TableSwitchRow" /* 7363 */;
import UserSettingsVoice from "UserSettingsVoice" /* 11901 */;
import MobileVoiceOverlayActionCreatorsDefault from "MobileVoiceOverlayActionCreators" /* 11915 */;
import react from "react" /* 19 */;
import MobileVoiceOverlayStore from "MobileVoiceOverlayStore" /* 11902 */;
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
