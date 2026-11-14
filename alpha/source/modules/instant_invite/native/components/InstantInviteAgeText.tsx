// Module ID: 15073
// Function ID: 15074
// Name: InstantInviteAgeText
// Dependencies: [19, 17, 8462, 21, 5306, 504, 5929, 8463, 7428, 8460, 1113, 2]
// Exports: default

// Module 15073 (InstantInviteAgeText)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import intl3 from "intl" /* 1113 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 8460 */;
import InstantInviteUtils from "InstantInviteUtils" /* 8463 */;
import react from "react" /* 19 */;
import CreateInviteModalStore from "CreateInviteModalStore" /* 8462 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsxs: closure_4, jsx: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ inviteAgeContainer: { flexDirection: "row", alignItems: "center", flexWrap: "wrap" } });
const result = size.fileFinishedImporting("modules/instant_invite/native/components/InstantInviteAgeText.tsx");

export default function InstantInviteAgeText(style) {
  let Text2;
  let canEditInvite;
  let intl;
  let intl2;
  let inviteSettings;
  let items1;
  let items2;
  let items3;
  let obj5;
  ({ channel: require, callbackActionSheet: dependencyMap, canEditInvite } = style);
  style = style.style;
  if (canEditInvite === undefined) {
    canEditInvite = true;
  }
  ({ onEdit: View, source: CreateInviteModalStore } = style);
  const tmp = closure_6();
  let obj = get_initialized;
  const items = [CreateInviteModalStore];
  const stateFromStores = obj.useStateFromStores(items, () => CreateInviteModalStore.getInviteSettings());
  let tmp6Result = null;
  if (null != stateFromStores) {
    const obj2 = { style: items1, children: items3 };
    items1 = [tmp.inviteAgeContainer, style];
    const obj3 = { variant: "body-md/normal", children: items2 };
    const Text = tmp2(5929).Text;
    items2 = [, ];
    const tmp2Result = InstantInviteUtils;
    items2[0] = tmp2Result.maxAgeString(stateFromStores.maxAge, stateFromStores.maxUses);
    items2[1] = " ";
    items3 = [closure_4(Text, obj3), ];
    const tmp6 = closure_4;
    const tmp7 = View;
    if (canEditInvite) {
      const obj4 = {
        onPress() {
              const obj = instant_invite_InstantInviteUtils;
              obj.handlePressSettings(require, dependencyMap, CreateInviteModalStore);
              if (View != null) {
                View();
              }
            },
        accessibilityRole: "link",
        accessibilityLabel: intl.string(intl3.t["VNe8P/"]),
        hitSlop: { top: 8, left: 8, bottom: 8, right: 8 },
        children: closure_5(Text2, obj5)
      };
      const PressableOpacity = tmp2(7428).PressableOpacity;
      intl = tmp2(1113).intl;
      obj5 = { variant: "body-md/medium", color: "text-link", children: intl2.string(intl3.t["VNe8P/"]) };
      Text2 = tmp2(5929).Text;
      intl2 = tmp2(1113).intl;
      canEditInvite = closure_5(PressableOpacity, obj4);
    }
    items3[1] = canEditInvite;
    tmp6Result = tmp6(tmp7, obj2);
  }
  return tmp6Result;
};
