// Module ID: 8809
// Function ID: 69425
// Name: UnifiedGiftModalRecipientSelectScreen
// Dependencies: []
// Exports: default

// Module 8809 (UnifiedGiftModalRecipientSelectScreen)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const UserRowModes = arg1(dependencyMap[2]).UserRowModes;
const jsx = arg1(dependencyMap[3]).jsx;
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { <string:1191183569>: true, <string:1224738001>: null, backgroundColor: importDefault(dependencyMap[5]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
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
