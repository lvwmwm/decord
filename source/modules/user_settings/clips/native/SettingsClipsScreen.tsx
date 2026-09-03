// Module ID: 14818
// Function ID: 14819
// Name: ClipsSettingsScreen
// Dependencies: [19, 7896, 21, 11292, 14578, 2]
// Exports: default

// Module 14818 (ClipsSettingsScreen)
import _modDef14578 from "module_14578" /* 14578 */;
import closure_3 from "noop" /* 19 */;
import { MobileUserSettings } from "MobileUserSettings" /* 7896 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/clips/native/SettingsClipsScreen.tsx");

export default function ClipsSettingsScreen() {
  const node = React.useMemo(() => {
    const items = [constants.CLIPS_OPT_OUT_OF_VOICE_RECORDING];
    const sections = [{ settings: items }];
    return callback(table[3]).createList({ sections });
  }, []);
  return jsx(_modDef14578, { node });
};
