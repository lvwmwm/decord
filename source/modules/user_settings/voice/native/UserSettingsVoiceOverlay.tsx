// Module ID: 10710
// Function ID: 83381
// Name: UserSettingsVoiceOverlay
// Dependencies: []
// Exports: default

// Module 10710 (UserSettingsVoiceOverlay)
importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoiceOverlay.tsx");

export default function UserSettingsVoiceOverlay() {
  let obj = arg1(dependencyMap[3]);
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => enabled.getEnabled());
  obj = {};
  const intl = arg1(dependencyMap[5]).intl;
  obj.title = intl.string(arg1(dependencyMap[5]).t.bNqkD9);
  obj.hasIcons = false;
  obj = {};
  const intl2 = arg1(dependencyMap[5]).intl;
  obj.label = intl2.string(arg1(dependencyMap[5]).t.9CSZJm);
  const intl3 = arg1(dependencyMap[5]).intl;
  obj.subLabel = intl3.string(arg1(dependencyMap[5]).t.Wfoivk);
  obj.value = stateFromStores;
  obj.onValueChange = importDefault(dependencyMap[7]).setEnabled;
  obj.children = jsx(arg1(dependencyMap[6]).TableSwitchRow, obj);
  return jsx(arg1(dependencyMap[4]).UserSettingsTableRowGroup, obj);
};
