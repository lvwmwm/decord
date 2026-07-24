// Module ID: 10738
// Function ID: 83561
// Name: UserSettingsVoice
// Dependencies: [31, 27, 10739, 10740, 33, 4130, 5501, 10741, 4541, 10742, 10744, 4126, 1212, 10748, 10749, 10751, 5121, 2]
// Exports: UserSettingsTableRowGroup, default

// Module 10738 (UserSettingsVoice)
import "result";
import { View } from "get ActivityIndicator";
import { isMobileOverlaySupported } from "_isNativeReflectConstruct";
import { USER_SETTINGS_VOICE_GUILD_URL as closure_5 } from "combined";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = _createForOfIteratorHelperLoose.createStyles({ container: { paddingHorizontal: 16 }, tableRow: { marginTop: 12 } });
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoice.tsx");

export default function UserSettingsVoice() {
  const tmp = callback2();
  let obj = importDefault(10741);
  let nonContextualStreamOutputPresent = obj.useConfig({ location: "NewUserSettingsVoice" }).nonContextualStreamOutputPresent;
  obj = { style: tmp.container };
  obj = { spacing: 24 };
  const items = [callback(importDefault(10742), {}), , , , , , ];
  if (nonContextualStreamOutputPresent) {
    nonContextualStreamOutputPresent = callback(importDefault(10744), {});
  }
  items[1] = nonContextualStreamOutputPresent;
  const obj1 = { style: tmp.tableRow, variant: "text-sm/medium" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj1.children = intl.format(require(1212) /* getSystemLocale */.t["V+B3FH"], { guideURL: closure_5 });
  items[2] = callback(require(4126) /* Text */.Text, obj1);
  items[3] = callback(importDefault(10748), {});
  let tmp8 = isMobileOverlaySupported();
  if (tmp8) {
    tmp8 = callback(importDefault(10749), {});
  }
  items[4] = tmp8;
  items[5] = callback(importDefault(10751), {});
  items[6] = callback(require(5121) /* SafeAreaPaddingView */.SafeAreaPaddingView, { bottom: true });
  obj.children = items;
  obj.children = closure_7(require(4541) /* Stack */.Stack, obj);
  return callback(View, obj);
};
export const UserSettingsTableRowGroup = function UserSettingsTableRowGroup(arg0) {
  const merged = Object.assign(arg0);
  return callback(require(5501) /* TableRowGroupTitle */.TableRowGroup, {});
};
