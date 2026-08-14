// Module ID: 9679
// Function ID: 9680
// Name: UnifiedGiftModalRecipientSelectScreen
// Dependencies: [19, 17, 9680, 21, 4342, 712, 1499, 9681, 9641, 2]
// Exports: default

// Module 9679 (UnifiedGiftModalRecipientSelectScreen)
import "noop";
import { View } from "get ActivityIndicator";
import { UserRowModes } from "UserRowModes";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { container: null };
createCacheKey = { flex: 1, paddingTop: 16, backgroundColor: require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("UserRowModes").fileFinishedImporting("modules/checkout/native/gifting/UnifiedGiftModalRecipientSelectScreen.tsx");

export default function UnifiedGiftModalRecipientSelectScreen(setRecipientUser) {
  setRecipientUser = setRecipientUser.setRecipientUser;
  let importDefault;
  let obj = setRecipientUser(1499);
  importDefault = obj.useNavigation();
  obj = { style: createCacheKey().container, children: jsx(importDefault(9681), obj) };
  obj = {
    onSelectUser(user) {
      setRecipientUser(user);
      navigation.navigate(setRecipientUser(outer1_2[8]).UnifiedGiftModalScreens.GIFT_DETAIL);
    },
    rowMode: UserRowModes.NONE,
    disableGradient: true,
    disableThemedGradient: true
  };
  return <View onSelectUser={function onSelectUser(user) {
    setRecipientUser(user);
    navigation.navigate(setRecipientUser(outer1_2[8]).UnifiedGiftModalScreens.GIFT_DETAIL);
  }} rowMode={UserRowModes.NONE} disableGradient disableThemedGradient />;
};
