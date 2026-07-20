// Module ID: 8805
// Function ID: 69413
// Name: UnifiedGiftModalRecipientSelectScreen
// Dependencies: []
// Exports: default

// Module 8805 (UnifiedGiftModalRecipientSelectScreen)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const UserRowModes = arg1(dependencyMap[2]).UserRowModes;
const jsx = arg1(dependencyMap[3]).jsx;
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { end: null, y: null, backgroundColor: importDefault(dependencyMap[5]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj.container = obj;
let closure_6 = obj.createStyles(obj);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/checkout/native/gifting/UnifiedGiftModalRecipientSelectScreen.tsx");

export default function UnifiedGiftModalRecipientSelectScreen(setRecipientUser) {
  const arg1 = setRecipientUser.setRecipientUser;
  let obj = arg1(dependencyMap[6]);
  const importDefault = obj.useNavigation();
  obj = { style: callback().container, children: jsx(importDefault(dependencyMap[7]), obj) };
  obj = {
    onSelectUser(user) {
      setRecipientUser(user);
      navigation.navigate(setRecipientUser(closure_2[8]).UnifiedGiftModalScreens.GIFT_DETAIL);
    },
    rowMode: UserRowModes.NONE,
    disableGradient: true,
    disableThemedGradient: true
  };
  return <View {...obj} />;
};
