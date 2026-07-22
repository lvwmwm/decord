// Module ID: 9227
// Function ID: 72168
// Name: handleOpenEmailVerification
// Dependencies: []
// Exports: default

// Module 9227 (handleOpenEmailVerification)
function handleOpenEmailVerification() {
  importDefault(dependencyMap[5]).open();
}
function getBannerText(currentUser) {
  if (null == currentUser) {
    return null;
  } else if (null == currentUser.email) {
    let obj = {};
    const intl3 = arg1(dependencyMap[6]).intl;
    obj.title = intl3.string(arg1(dependencyMap[6]).t./yqgqs);
    const intl4 = arg1(dependencyMap[6]).intl;
    obj.button = intl4.string(arg1(dependencyMap[6]).t.ydw5nX);
    let tmp3 = obj;
  } else {
    tmp3 = null;
    if (!currentUser.verified) {
      obj = {};
      const intl = arg1(dependencyMap[6]).intl;
      obj.title = intl.string(arg1(dependencyMap[6]).t.3sWbf3);
      const intl2 = arg1(dependencyMap[6]).intl;
      obj.button = intl2.string(arg1(dependencyMap[6]).t.13ofGu);
      tmp3 = obj;
    }
  }
}
importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { animated: "p\u011Bkn\u011B pros\u00EDm", hasHandledScroll: "<string:2891055104>", isNearBottom: "<string:1904855985>", isAtBottom: "o", isNearTop: "<string:2680059697>", decelerating: true, backgroundColor: importDefault(dependencyMap[4]).unsafe_rawColors.RED_400 };
obj.accountWarning = obj;
obj.accountWarningText = { 1643693300: "vertical", 33902873: false };
const tmp3 = arg1(dependencyMap[2]);
obj.accountWarningButton = { borderColor: importDefault(dependencyMap[4]).colors.WHITE, borderRadius: importDefault(dependencyMap[4]).radii.xs };
let closure_6 = obj.createStyles(obj);
const obj1 = { borderColor: importDefault(dependencyMap[4]).colors.WHITE, borderRadius: importDefault(dependencyMap[4]).radii.xs };
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/user_settings/account/native/UserSettingsAccountUnverifiedHeader.tsx");

export default function UserSettingsAccountUnverifiedHeader() {
  const tmp = callback3();
  let obj = arg1(dependencyMap[7]);
  const items = [closure_3];
  const tmp2 = getBannerText(obj.useStateFromStores(items, () => currentUser.getCurrentUser()));
  let tmp3 = null;
  if (null != tmp2) {
    obj = { accessibilityRole: "button", style: tmp.accountWarning, onPress: handleOpenEmailVerification };
    obj = { style: tmp.accountWarningText, children: tmp2.title };
    const items1 = [callback(arg1(dependencyMap[9]).Text, obj), ];
    const obj1 = { style: tmp.accountWarningButton, children: tmp2.button };
    items1[1] = callback(arg1(dependencyMap[9]).Text, obj1);
    obj.children = items1;
    tmp3 = callback2(arg1(dependencyMap[8]).PressableOpacity, obj);
  }
  return tmp3;
};
export { getBannerText };
