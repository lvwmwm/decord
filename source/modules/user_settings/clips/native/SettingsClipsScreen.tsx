// Module ID: 14229
// Function ID: 14230
// Name: ClipsSettingsScreen
// Dependencies: [19, 8084, 21, 10452, 13895, 2]
// Exports: default

// Module 14229 (ClipsSettingsScreen)
import noop from "noop";
import { MobileSetting } from "MobileSetting";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/clips/native/SettingsClipsScreen.tsx");

export default function ClipsSettingsScreen() {
  const node = React.useMemo(() => {
    const items = [constants.CLIPS_OPT_OUT_OF_VOICE_RECORDING];
    const sections = [{ settings: items }];
    return callback(table[3]).createList({ sections });
  }, []);
  return jsx(importDefault(13895), { node });
};
