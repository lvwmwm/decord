// Module ID: 14429
// Function ID: 14430
// Name: ClipsSettingsScreen
// Dependencies: [19, 8235, 21, 10516, 14094, 2]
// Exports: default

// Module 14429 (ClipsSettingsScreen)
import _modDef14094 from "module_14094" /* 14094 */;
import closure_3 from "noop" /* 19 */;
import { MobileUserSettings } from "MobileUserSettings" /* 8235 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/clips/native/SettingsClipsScreen.tsx");

export default function ClipsSettingsScreen() {
  const node = React.useMemo(() => {
    const items = [constants.CLIPS_OPT_OUT_OF_VOICE_RECORDING];
    const sections = [{ settings: items }];
    return callback(table[3]).createList({ sections });
  }, []);
  return jsx(_modDef14094, { node });
};
