// Module ID: 13939
// Function ID: 106658
// Name: ClipsSettingsScreen
// Dependencies: [31, 7697, 33, 10059, 13612, 2]
// Exports: default

// Module 13939 (ClipsSettingsScreen)
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
  return jsx(importDefault(13612), { node });
};
