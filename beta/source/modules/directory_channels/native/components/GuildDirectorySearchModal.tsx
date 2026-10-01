// Module ID: 11784
// Function ID: 11785
// Name: GuildDirectorySearchModal
// Dependencies: [19, 21, 11785, 6421, 5910, 2]
// Exports: default

// Module 11784 (GuildDirectorySearchModal)
import Fragment from "Fragment" /* 21 */;
import reactDefault from "react" /* 5910 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const jsx = Fragment.jsx;
const SEARCH_SCREEN_KEY = "SEARCH_SCREEN_KEY";
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectorySearchModal.tsx");

export default function GuildDirectorySearchModal(arg0) {
  _require = arg0;
  const Navigator = require("Navigator").Navigator;
  return <Navigator screens={reactDefault(() => {
    let obj = {
      fullscreen: true,
      headerShown: false,
      render() {
        const obj = {};
        const tmp = closure_2_1(closure_2_2[2]);
        const merged = Object.assign(closure_0);
        return closure_2_3(tmp, obj);
      }
    };
    return { [closure_2_4]: obj };
  })} initialRouteName={SEARCH_SCREEN_KEY} />;
};
