// Module ID: 10709
// Function ID: 83369
// Name: UserSettingsVoice
// Dependencies: [31, 27, 10710, 10711, 33, 4130, 5503, 10712, 4541, 10713, 10715, 5459, 1212, 10719, 10720, 10722, 5121, 2]
// Exports: UserSettingsTableRowGroup, default

// Module 10709 (UserSettingsVoice)
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
  let obj = importDefault(10712);
  let nonContextualStreamOutputPresent = obj.useConfig({ location: "NewUserSettingsVoice" }).nonContextualStreamOutputPresent;
  obj = { style: tmp.container };
  obj = { spacing: 24 };
  const items = [callback(importDefault(10713), {}), , , , , , ];
  if (nonContextualStreamOutputPresent) {
    nonContextualStreamOutputPresent = callback(importDefault(10715), {});
  }
  items[1] = nonContextualStreamOutputPresent;
  const obj1 = { style: tmp.tableRow, variant: "text-sm/medium" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj1.children = intl.format(require(1212) /* getSystemLocale */.t["V+B3FH"], { guideURL: closure_5 });
  items[2] = callback(require(5459) /* findLinks */.TextWithIOSLinkWorkaround, obj1);
  items[3] = callback(importDefault(10719), {});
  let tmp8 = isMobileOverlaySupported();
  if (tmp8) {
    tmp8 = callback(importDefault(10720), {});
  }
  items[4] = tmp8;
  items[5] = callback(importDefault(10722), {});
  items[6] = callback(require(5121) /* SafeAreaPaddingView */.SafeAreaPaddingView, { bottom: true });
  obj.children = items;
  obj.children = closure_7(require(4541) /* Stack */.Stack, obj);
  return callback(View, obj);
};
export const UserSettingsTableRowGroup = function UserSettingsTableRowGroup(arg0) {
  const merged = Object.assign(arg0);
  return callback(require(5503) /* TableRowGroupTitle */.TableRowGroup, {});
};
