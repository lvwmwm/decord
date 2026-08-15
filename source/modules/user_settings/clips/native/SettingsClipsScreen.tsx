// Module ID: 14331
// Function ID: 14332
// Name: ClipsSettingsScreen
// Dependencies: [19, 8198, 21, 10669, 13991, 2]
// Exports: default

// Module 14331 (ClipsSettingsScreen)
import noop from "noop";
import { MobileUserSettings } from "MobileUserSettings";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/clips/native/SettingsClipsScreen.tsx");

export default function ClipsSettingsScreen() {
  const node = React.useMemo(() => {
    const items = [constants.CLIPS_OPT_OUT_OF_VOICE_RECORDING];
    const sections = [{ settings: items }];
    return callback(table[3]).createList({ sections });
  }, []);
  return jsx(importDefault(13991), { node });
};
