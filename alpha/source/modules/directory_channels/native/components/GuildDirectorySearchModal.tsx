// Module ID: 11994
// Function ID: 11995
// Name: GuildDirectorySearchModal
// Dependencies: [19, 21, 11995, 6607, 6096, 2]
// Exports: default

// Module 11994 (GuildDirectorySearchModal)
import useInitialValueDefault from "useInitialValue" /* 6096 */;
import GuildDirectorySearchDefault from "GuildDirectorySearch" /* 11995 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const jsx = fn(21).jsx;
const SEARCH_SCREEN_KEY = "SEARCH_SCREEN_KEY";
const size = fn(2);
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectorySearchModal.tsx");

export default function GuildDirectorySearchModal(arg0) {
  _require = arg0;
  return jsx(require("Navigator").Navigator, {
    screens: useInitialValueDefault(() => ({
      [closure_2_4]: {
        fullscreen: true,
        headerShown: false,
        render() {
          const merged = Object.assign(closure_0);
          return jsx(GuildDirectorySearchDefault, {});
        }
      }
    })),
    initialRouteName: SEARCH_SCREEN_KEY
  });
};
