// Module ID: 14000
// Function ID: 14001
// Name: ClipsSettingsScreen
// Dependencies: [19, 7753, 21, 10116, 13673, 2]
// Exports: default

// Module 14000 (ClipsSettingsScreen)
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
  return jsx(importDefault(13673), { node });
};
