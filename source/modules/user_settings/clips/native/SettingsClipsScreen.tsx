// Module ID: 13928
// Function ID: 106531
// Name: ClipsSettingsScreen
// Dependencies: [31, 7751, 33, 10127, 13601, 2]
// Exports: default

// Module 13928 (ClipsSettingsScreen)
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
  return jsx(importDefault(13601), { node });
};
