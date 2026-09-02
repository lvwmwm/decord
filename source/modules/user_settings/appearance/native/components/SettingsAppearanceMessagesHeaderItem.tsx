// Module ID: 15116
// Function ID: 15117
// Name: MessagesHeaderItem
// Dependencies: [19, 17, 21, 4478, 709, 4474, 1233, 2]
// Exports: default

// Module 15116 (MessagesHeaderItem)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 709 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import Text from "Text" /* 4474 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
noopAll;
createCacheKey = { messagesHeaderContainer: null };
createCacheKey = { flexDirection: "row", gap: ThemesDefault.space.PX_12, alignItems: "center", marginHorizontal: ThemesDefault.space.PX_24 };
createCacheKey[0] = createCacheKey;
let closure_4 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceMessagesHeaderItem.tsx");

export default function MessagesHeaderItem(animatedStyles) {
  let obj = { style: callback().messagesHeaderContainer, children: null };
  obj = { animated: true, style: animatedStyles.animatedStyles.textNormal, variant: "text-lg/bold", children: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(getSystemLocale.t.OIgYlQ);
  obj[1] = jsx(Text.Text, { animated: true, style: animatedStyles.animatedStyles.textNormal, variant: "text-lg/bold", children: null });
  return <View animated style={arg0.animatedStyles.textNormal} variant="text-lg/bold">{null}</View>;
};
