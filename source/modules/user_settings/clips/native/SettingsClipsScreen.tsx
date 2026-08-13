// Module ID: 14295
// Function ID: 14296
// Name: ClipsSettingsScreen
// Dependencies: [19, 8127, 21, 10407, 13956, 2]
// Exports: default

// Module 14295 (ClipsSettingsScreen)
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
  return jsx(importDefault(13956), { node });
};
