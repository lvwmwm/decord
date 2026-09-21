// Module ID: 10147
// Function ID: 10148
// Name: InstantInviteAgeText
// Dependencies: [19, 17, 10077, 21, 4756, 7225, 504, 4752, 10078, 5339, 10076, 1115, 2]
// Exports: default

// Module 10147 (InstantInviteAgeText)
import initialize from "initialize" /* 504 */;
import ManaTypeConsolidationExperiment from "ManaTypeConsolidationExperiment" /* 7225 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 10076 */;
import noop from "module_19" /* 19 */;
import CreateInviteModalStore from "CreateInviteModalStore" /* 10077 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsxs: closure_4, jsx: hasOwnProperty } = jsxProd);
const createStyles = fn(4756);
let closure_6 = createStyles.createStyles({ inviteAgeContainer: { flexDirection: "row", alignItems: "center", flexWrap: "wrap" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/instant_invite/native/components/InstantInviteAgeText.tsx");

export default function InstantInviteAgeText(style) {
  ({ channel: require, callbackActionSheet: dependencyMap, canEditInvite } = style);
  if (canEditInvite === undefined) {
    canEditInvite = true;
  }
  ({ onEdit: View, source: CreateInviteModalStore } = style);
  const tmp = closure_6();
  const manaTypeConsolidationExperiment = ManaTypeConsolidationExperiment.useManaTypeConsolidationExperiment("InstantInviteAgeText");
  const items = [CreateInviteModalStore];
  const stateFromStores = initialize.useStateFromStores(items, () => inviteSettings.getInviteSettings());
  let tmp7Result = null;
  if (null != stateFromStores) {
    const obj3 = { style: null, children: null };
    const items1 = [tmp.inviteAgeContainer, style.style];
    obj3.style = items1;
    let str = "text-xs/normal";
    let str2 = "text-xs/normal";
    if (manaTypeConsolidationExperiment) {
      str2 = "experimental/body-md/normal";
    }
    const obj4 = { variant: str2, children: null };
    const items2 = [tmp2(10078).maxAgeString(stateFromStores.maxAge, stateFromStores.maxUses), " "];
    obj4.children = items2;
    const items3 = [closure_4(tmp2(4752).Text, obj4), ];
    if (canEditInvite) {
      const obj5 = {
        onPress() {
              instant_invite_InstantInviteUtils.handlePressSettings(closure_1_0, dependencyMap, inviteSettings);
              if (View != null) {
                View();
              }
            },
        accessibilityRole: "link",
        accessibilityLabel: null,
        hitSlop: null,
        children: null
      };
      const intl = tmp2(1115).intl;
      obj5.accessibilityLabel = intl.string(tmp2(1115).t["VNe8P/"]);
      obj5.hitSlop = { top: 8, left: 8, bottom: 8, right: 8 };
      if (manaTypeConsolidationExperiment) {
        str = "experimental/body-md/medium";
      }
      const obj6 = { variant: str, color: "text-link", children: null };
      const intl2 = tmp2(1115).intl;
      obj6.children = intl2.string(tmp2(1115).t["VNe8P/"]);
      obj5.children = closure_5(tmp2(4752).Text, obj6);
      canEditInvite = tmp9(tmp2(5339).PressableOpacity, obj5);
    }
    items3[1] = canEditInvite;
    obj3.children = items3;
    tmp7Result = tmp7(View, obj3);
    const tmp2Result = tmp2(10078);
  }
  return tmp7Result;
};
