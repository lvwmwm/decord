// Module ID: 16831
// Function ID: 16832
// Name: SettingsHeaderBackButton
// Dependencies: [19, 17, 21, 5170, 575, 7068, 1113, 16832, 2]
// Exports: default

// Module 16831 (SettingsHeaderBackButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import Pressables from "Pressables" /* 7068 */;
import BackIconWithBadge from "BackIconWithBadge" /* 16832 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
const obj = { backIcon: obj2 };
obj2 = { borderRadius: nativeDefault.radii.round, marginTop: nativeDefault.space.PX_8 };
let closure_4 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/core/native/SettingsHeaderBackButton.tsx");

export default function SettingsHeaderBackButton(navigation) {
  let intl;
  navigation = navigation.navigation;
  let flag = navigation.hideBadge;
  if (flag === undefined) {
    flag = false;
  }
  ({
    onPress() {
      return navigation.goBack();
    },
    accessible: true,
    accessibilityRole: "button",
    accessibilityLabel: intl.string(intl2.t["13/7kX"]),
    hitSlop: BackIconWithBadge.BACK_ICON_WITH_BADGE_HIT_SLOP,
    children: null
  });
  const tmp = closure_4();
  const PressableOpacity = Pressables.PressableOpacity;
  intl = intl2.intl;
  ({ style: tmp.backIcon, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: jsx(BackIconWithBadge.SettingsLeftIconWithBadge, { navigation, hideBadge: flag }) });
  return <View collapsable={false}>{null}</View>;
};
