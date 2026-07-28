// Module ID: 8788
// Function ID: 69335
// Name: UnifiedGiftModalRecipientSelectScreen
// Dependencies: [31, 27, 8789, 33, 4165, 689, 1456, 8790, 8750, 2]
// Exports: default

// Module 8788 (UnifiedGiftModalRecipientSelectScreen)
import "result";
import { View } from "get ActivityIndicator";
import { UserRowModes } from "UserRowModes";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, paddingTop: 16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("UserRowModes").fileFinishedImporting("modules/checkout/native/gifting/UnifiedGiftModalRecipientSelectScreen.tsx");

export default function UnifiedGiftModalRecipientSelectScreen(setRecipientUser) {
  setRecipientUser = setRecipientUser.setRecipientUser;
  let obj = setRecipientUser(1456);
  const importDefault = obj.useNavigation();
  obj = { style: _createForOfIteratorHelperLoose().container, children: jsx(importDefault(8790), obj) };
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
