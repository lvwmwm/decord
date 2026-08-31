// Module ID: 11835
// Function ID: 11836
// Name: GuildDirectorySearchModal
// Dependencies: [19, 21, 11836, 5976, 5909, 2]
// Exports: default

// Module 11835 (GuildDirectorySearchModal)
import noopAll from "noop" /* 19 */;
import useInitialValueDefault from "useInitialValue" /* 5909 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
noopAll;
const SEARCH_SCREEN_KEY = "SEARCH_SCREEN_KEY";
const result = require("set").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectorySearchModal.tsx");

export default function GuildDirectorySearchModal(arg0) {
  const _require = arg0;
  return jsx(_require(5976).Navigator, {
    screens: useInitialValueDefault(() => ({
      [closure_1_4]: {
        fullscreen: true,
        headerShown: false,
        render() {
          const merged = Object.assign(closure_0);
          return closure_1_3(closure_1_1(closure_1_2[2]), {});
        }
      }
    })),
    initialRouteName: SEARCH_SCREEN_KEY
  });
};
