// Module ID: 10208
// Function ID: 10209
// Name: GuildDirectorySearchModal
// Dependencies: [19, 21, 10209, 5636, 5569, 2]
// Exports: default

// Module 10208 (GuildDirectorySearchModal)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const SEARCH_SCREEN_KEY = "SEARCH_SCREEN_KEY";
const result = require("DefaultState").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectorySearchModal.tsx");

export default function GuildDirectorySearchModal(arg0) {
  const _require = arg0;
  const obj = { screens: null, initialRouteName: null };
  obj[0] = importDefault(5569)(() => ({
    [outer1_4]: {
      fullscreen: true,
      headerShown: false,
      render() {
        const merged = Object.assign(closure_0);
        return outer1_3(outer1_1(outer1_2[2]), {});
      }
    }
  }));
  obj[1] = SEARCH_SCREEN_KEY;
  return jsx(_require(5636).Navigator, { screens: null, initialRouteName: null });
};
