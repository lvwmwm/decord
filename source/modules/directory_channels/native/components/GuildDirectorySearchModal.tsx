// Module ID: 10031
// Function ID: 77479
// Name: GuildDirectorySearchModal
// Dependencies: [31, 33, 10032, 5519, 5450, 2]
// Exports: default

// Module 10031 (GuildDirectorySearchModal)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("DefaultState").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectorySearchModal.tsx");

export default function GuildDirectorySearchModal(arg0) {
  const _require = arg0;
  let obj = {
    screens: importDefault(5450)(() => (function getScreens(closure_0) {
      const obj = {
        fullscreen: true,
        headerShown: false,
        render() {
          const merged = Object.assign(closure_0);
          return outer3_3(outer3_1(outer3_2[2]), {});
        }
      };
      return { ["SEARCH_SCREEN_KEY"]: obj };
    })(closure_0)),
    initialRouteName: "SEARCH_SCREEN_KEY"
  };
  return jsx(_require(5519).Navigator, {
    screens: importDefault(5450)(() => (function getScreens(closure_0) {
      const obj = {
        fullscreen: true,
        headerShown: false,
        render() {
          const merged = Object.assign(closure_0);
          return outer3_3(outer3_1(outer3_2[2]), {});
        }
      };
      return { ["SEARCH_SCREEN_KEY"]: obj };
    })(closure_0)),
    initialRouteName: "SEARCH_SCREEN_KEY"
  });
};
