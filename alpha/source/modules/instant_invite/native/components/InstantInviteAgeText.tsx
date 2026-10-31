// Module ID: 9196
// Function ID: 9197
// Name: InstantInviteAgeText
// Dependencies: [19, 17, 9119, 21, 5014, 7149, 504, 5624, 9120, 6980, 9118, 1113, 2]
// Exports: default

// Module 9196 (InstantInviteAgeText)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import intl3 from "intl" /* 1113 */;
import ManaTypeConsolidationExperiment from "ManaTypeConsolidationExperiment" /* 7149 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9118 */;
import InstantInviteUtils from "InstantInviteUtils" /* 9120 */;
import react from "react" /* 19 */;
import CreateInviteModalStore from "CreateInviteModalStore" /* 9119 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
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
  let obj6;
  ({ channel: require, callbackActionSheet: dependencyMap, canEditInvite } = style);
  style = style.style;
  if (canEditInvite === undefined) {
    canEditInvite = true;
  }
  ({ onEdit: View, source: CreateInviteModalStore } = style);
  const tmp = closure_6();
  let obj = ManaTypeConsolidationExperiment;
  const manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("InstantInviteAgeText");
  const items = [CreateInviteModalStore];
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, () => CreateInviteModalStore.getInviteSettings());
  let tmp7Result = null;
  if (null != stateFromStores) {
    const obj3 = { style: items1, children: items3 };
    items1 = [tmp.inviteAgeContainer, style];
    let str = "text-xs/normal";
    let str2 = "text-xs/normal";
    const Text = tmp2(5624).Text;
    const tmp8 = View;
    if (manaTypeConsolidationExperiment) {
      str2 = "experimental/body-md/normal";
    }
    const obj4 = { variant: str2, children: items2 };
    items2 = [, ];
    const tmp2Result = InstantInviteUtils;
    items2[0] = tmp2Result.maxAgeString(stateFromStores.maxAge, stateFromStores.maxUses);
    items2[1] = " ";
    items3 = [closure_4(Text, obj4), ];
    if (canEditInvite) {
      const obj5 = {
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
        children: closure_5(Text2, obj6)
      };
      const PressableOpacity = tmp2(6980).PressableOpacity;
      intl = tmp2(1113).intl;
      Text2 = tmp2(5624).Text;
      if (manaTypeConsolidationExperiment) {
        str = "experimental/body-md/medium";
      }
      obj6 = { variant: str, color: "text-link", children: intl2.string(intl3.t["VNe8P/"]) };
      intl2 = tmp2(1113).intl;
      canEditInvite = tmp9(PressableOpacity, obj5);
    }
    items3[1] = canEditInvite;
    tmp7Result = tmp7(tmp8, obj3);
  }
  return tmp7Result;
};
