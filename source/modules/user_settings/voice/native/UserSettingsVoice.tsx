// Module ID: 10851
// Function ID: 10852
// Name: UserSettingsVoice
// Dependencies: [19, 17, 10852, 10853, 21, 4303, 5767, 10854, 4712, 10855, 10857, 4299, 1236, 10861, 10862, 10864, 5328, 2]
// Exports: UserSettingsTableRowGroup, default

// Module 10851 (UserSettingsVoice)
import "noop";
import { View } from "set";
import { isMobileOverlaySupported } from "getUserAgnosticState";
import { USER_SETTINGS_VOICE_GUILD_URL as closure_5 } from "combined";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ container: { paddingHorizontal: 16 }, tableRow: { marginTop: 12 } });
const result = require("getUserAgnosticState").fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoice.tsx");

export default function UserSettingsVoice() {
  const tmp = callback2();
  let obj = importDefault(10854);
  let nonContextualStreamOutputPresent = obj.useConfig({ location: "NewUserSettingsVoice" }).nonContextualStreamOutputPresent;
  obj = { style: tmp.container, children: null };
  const items = [callback(importDefault(10855), {}), , , , , , ];
  if (nonContextualStreamOutputPresent) {
    nonContextualStreamOutputPresent = tmp4(tmp2(10857), {});
  }
  items[1] = nonContextualStreamOutputPresent;
  obj = { style: tmp.tableRow, variant: "text-sm/medium", children: null };
  const intl = tmp7(1236).intl;
  obj[2] = intl.format(require(1236) /* getSystemLocale */.t["V+B3FH"], { guideURL: closure_5 });
  items[2] = callback(require(4299) /* Text */.Text, obj);
  items[3] = callback(importDefault(10861), {});
  const obj2 = { spacing: 24, children: null };
  items[4] = isMobileOverlaySupported() && callback(importDefault(10862), {});
  items[5] = callback(importDefault(10864), {});
  items[6] = callback(require(5328) /* SafeAreaPaddingView */.SafeAreaPaddingView, { bottom: true });
  obj2[1] = items;
  obj[1] = closure_7(require(4712) /* Stack */.Stack, obj2);
  return callback(View, obj);
};
export const UserSettingsTableRowGroup = function UserSettingsTableRowGroup(arg0) {
  const merged = Object.assign(arg0);
  return callback(require(5767) /* TableRowGroupTitle */.TableRowGroup, {});
};
