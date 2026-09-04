// Module ID: 14899
// Function ID: 14900
// Name: ClipsSettingsScreen
// Dependencies: [19, 7906, 21, 11400, 14614, 2]
// Exports: default

// Module 14899 (ClipsSettingsScreen)
import _modDef14614 from "module_14614" /* 14614 */;
import closure_3 from "noop" /* 19 */;
import { MobileUserSettings } from "MobileUserSettings" /* 7906 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/clips/native/SettingsClipsScreen.tsx");

export default function ClipsSettingsScreen() {
  const node = React.useMemo(() => {
    const items = [constants.CLIPS_OPT_OUT_OF_VOICE_RECORDING];
    const sections = [{ settings: items }];
    return callback(table[3]).createList({ sections });
  }, []);
  return jsx(_modDef14614, { node });
};
