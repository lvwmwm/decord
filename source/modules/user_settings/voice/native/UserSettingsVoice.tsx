// Module ID: 10699
// Function ID: 83320
// Name: UserSettingsVoice
// Dependencies: []
// Exports: UserSettingsTableRowGroup, default

// Module 10699 (UserSettingsVoice)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const isMobileOverlaySupported = arg1(dependencyMap[2]).isMobileOverlaySupported;
let closure_5 = arg1(dependencyMap[3]).USER_SETTINGS_VOICE_GUILD_URL;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
let closure_8 = arg1(dependencyMap[5]).createStyles({ container: { paddingHorizontal: 16 }, tableRow: { marginTop: 12 } });
const obj = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoice.tsx");

export default function UserSettingsVoice() {
  const tmp = callback2();
  let obj = importDefault(dependencyMap[7]);
  let nonContextualStreamOutputPresent = obj.useConfig({ location: "NewUserSettingsVoice" }).nonContextualStreamOutputPresent;
  obj = { style: tmp.container };
  obj = { spacing: 24 };
  const items = [callback(importDefault(dependencyMap[9]), {}), , , , , , ];
  if (nonContextualStreamOutputPresent) {
    nonContextualStreamOutputPresent = callback(importDefault(dependencyMap[10]), {});
  }
  items[1] = nonContextualStreamOutputPresent;
  const obj1 = { style: tmp.tableRow, variant: "text-sm/medium" };
  const intl = arg1(dependencyMap[12]).intl;
  obj1.children = intl.format(arg1(dependencyMap[12]).t.V+B3FH, { guideURL: closure_5 });
  items[2] = callback(arg1(dependencyMap[11]).TextWithIOSLinkWorkaround, obj1);
  items[3] = callback(importDefault(dependencyMap[13]), {});
  let tmp8 = isMobileOverlaySupported();
  if (tmp8) {
    tmp8 = callback(importDefault(dependencyMap[14]), {});
  }
  items[4] = tmp8;
  items[5] = callback(importDefault(dependencyMap[15]), {});
  items[6] = callback(arg1(dependencyMap[16]).SafeAreaPaddingView, { bottom: true });
  obj.children = items;
  obj.children = closure_7(arg1(dependencyMap[8]).Stack, obj);
  return callback(View, obj);
};
export const UserSettingsTableRowGroup = function UserSettingsTableRowGroup(arg0) {
  const merged = Object.assign(arg0);
  return callback(arg1(dependencyMap[6]).TableRowGroup, {});
};
