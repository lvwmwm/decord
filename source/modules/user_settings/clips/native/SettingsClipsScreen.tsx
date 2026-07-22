// Module ID: 13763
// Function ID: 104051
// Name: ClipsSettingsScreen
// Dependencies: []
// Exports: default

// Module 13763 (ClipsSettingsScreen)
let closure_3 = importAll(dependencyMap[0]);
const MobileSetting = arg1(dependencyMap[1]).MobileSetting;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/user_settings/clips/native/SettingsClipsScreen.tsx");

export default function ClipsSettingsScreen() {
  const node = React.useMemo(() => {
    const items = [constants.CLIPS_OPT_OUT_OF_VOICE_RECORDING];
    const sections = [{ settings: items }];
    return callback(closure_2[3]).createList({ sections });
  }, []);
  return jsx(importDefault(dependencyMap[4]), { node });
};
