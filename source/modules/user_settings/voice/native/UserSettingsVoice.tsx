// Module ID: 10836
// Function ID: 10837
// Name: UserSettingsVoice
// Dependencies: [19, 17, 10837, 10838, 21, 4342, 5828, 10839, 4775, 10840, 10842, 4338, 1236, 10846, 10847, 10849, 5389, 2]
// Exports: UserSettingsTableRowGroup, default

// Module 10836 (UserSettingsVoice)
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
  let obj = importDefault(10839);
  let nonContextualStreamOutputPresent = obj.useConfig({ location: "NewUserSettingsVoice" }).nonContextualStreamOutputPresent;
  obj = { style: tmp.container, children: null };
  const items = [callback(importDefault(10840), {}), , , , , , ];
  if (nonContextualStreamOutputPresent) {
    nonContextualStreamOutputPresent = tmp4(tmp2(10842), {});
  }
  items[1] = nonContextualStreamOutputPresent;
  obj = { style: tmp.tableRow, variant: "text-sm/medium", children: null };
  const intl = tmp7(1236).intl;
  obj[2] = intl.format(require(1236) /* getSystemLocale */.t["V+B3FH"], { guideURL: closure_5 });
  items[2] = callback(require(4338) /* Text */.Text, obj);
  items[3] = callback(importDefault(10846), {});
  const obj2 = { spacing: 24, children: null };
  items[4] = isMobileOverlaySupported() && callback(importDefault(10847), {});
  items[5] = callback(importDefault(10849), {});
  items[6] = callback(require(5389) /* SafeAreaPaddingView */.SafeAreaPaddingView, { bottom: true });
  obj2[1] = items;
  obj[1] = closure_7(require(4775) /* Stack */.Stack, obj2);
  return callback(View, obj);
};
export const UserSettingsTableRowGroup = function UserSettingsTableRowGroup(arg0) {
  const merged = Object.assign(arg0);
  return callback(require(5828) /* TableRowGroupTitle */.TableRowGroup, {});
};
