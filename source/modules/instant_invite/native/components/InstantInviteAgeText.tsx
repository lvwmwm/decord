// Module ID: 11737
// Function ID: 91170
// Name: InstantInviteAgeText
// Dependencies: []
// Exports: default

// Module 11737 (InstantInviteAgeText)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_3 = importDefault(dependencyMap[2]);
({ jsxs: closure_4, jsx: closure_5 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
let closure_6 = arg1(dependencyMap[4]).createStyles({ inviteAgeContainer: { <string:3635438572>: null, <string:1408024149>: null, <string:1708473420>: null } });
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/instant_invite/native/components/InstantInviteAgeText.tsx");

export default function InstantInviteAgeText(style) {
  let canEditInvite;
  ({ channel: closure_0, callbackActionSheet: closure_1, canEditInvite } = style);
  if (canEditInvite === undefined) {
    canEditInvite = true;
  }
  ({ onEdit: closure_2, source: closure_3 } = style);
  let obj = arg1(dependencyMap[5]);
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => inviteSettings.getInviteSettings());
  let tmp4Result = null;
  if (null != stateFromStores) {
    obj = {};
    const items1 = [tmp.inviteAgeContainer, style.style];
    obj.style = items1;
    obj = { variant: "text-xs/normal" };
    const items2 = [arg1(dependencyMap[7]).maxAgeString(stateFromStores.maxAge, stateFromStores.maxUses), " "];
    obj.children = items2;
    const items3 = [callback(arg1(dependencyMap[6]).Text, obj), ];
    if (canEditInvite) {
      const obj1 = {
        onPress() {
              callback(closure_1[9]).handlePressSettings(callback, closure_1, closure_3);
              if (null != callback2) {
                callback2();
              }
            },
        accessibilityRole: "link"
      };
      const intl = arg1(dependencyMap[10]).intl;
      obj1.accessibilityLabel = intl.string(arg1(dependencyMap[10]).t.VNe8P/);
      obj1.hitSlop = {};
      const obj2 = {};
      const intl2 = arg1(dependencyMap[10]).intl;
      obj2.children = intl2.string(arg1(dependencyMap[10]).t.VNe8P/);
      obj1.children = callback2(arg1(dependencyMap[6]).Text, obj2);
      canEditInvite = callback2(arg1(dependencyMap[8]).PressableOpacity, obj1);
    }
    items3[1] = canEditInvite;
    obj.children = items3;
    tmp4Result = callback(View, obj);
    const obj4 = arg1(dependencyMap[7]);
    const tmp4 = callback;
    const tmp5 = View;
  }
  return tmp4Result;
};
