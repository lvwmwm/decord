// Module ID: 13984
// Function ID: 106836
// Name: ClipsSettingsScreen
// Dependencies: [31, 7733, 33, 10099, 13657, 2]
// Exports: default

// Module 13984 (ClipsSettingsScreen)
import result from "result";
import { MobileSetting } from "MobileSetting";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/clips/native/SettingsClipsScreen.tsx");

export default function ClipsSettingsScreen() {
  const node = React.useMemo(() => {
    const items = [outer1_4.CLIPS_OPT_OUT_OF_VOICE_RECORDING];
    const sections = [{ settings: items }];
    return outer1_0(outer1_2[3]).createList({ sections });
  }, []);
  return jsx(importDefault(13657), { node });
};
