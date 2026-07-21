// Module ID: 14546
// Function ID: 109613
// Name: OrbOnboardingPill
// Dependencies: []

// Module 14546 (OrbOnboardingPill)
class OrbOnboardingPill {
  constructor(arg0) {
    flag = global.accessible;
    if (flag === undefined) {
      flag = true;
    }
    tmp = closure_4();
    tmp2 = jsxs;
    obj = { onPress: global.onPress, style: tmp.container, accessibilityRole: "button", activeOpacity: 0.8 };
    obj.accessible = flag;
    obj.accessibilityElementsHidden = !flag;
    str = "no";
    if (flag) {
      str = "auto";
    }
    obj.importantForAccessibility = str;
    items = [, ];
    items[0] = jsx(arg1(dependencyMap[3]).OrbsIcon, { size: "sm" });
    obj = { hasMaxConnections: "Show debug log overlay in collectibles shop", isBoostOnlySubscription: "shop_show_debug_overlay" };
    intl = arg1(dependencyMap[5]).intl;
    obj.children = intl.string(arg1(dependencyMap[5]).t.9JpRfC);
    items[1] = jsx(arg1(dependencyMap[4]).Text, obj);
    obj.children = items;
    return tmp2(arg1(dependencyMap[2]).PressableOpacity, obj);
  }
}
importAll(dependencyMap[0]);
({ jsx: closure_2, jsxs: closure_3 } = arg1(dependencyMap[1]));
OrbOnboardingPill.displayName = "OrbOnboardingPill";
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { 1655333320: "screenshare", -917391382: "png", -324316488: true, -765346074: "/assets/images/native/icons/voice_calls", -403220142: 24, borderRadius: importDefault(dependencyMap[7]).radii.round, paddingHorizontal: importDefault(dependencyMap[7]).space.PX_12, paddingVertical: importDefault(dependencyMap[7]).space.PX_4, backgroundColor: importDefault(dependencyMap[7]).colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, flexShrink: 0, gap: 4 };
obj.container = obj;
let closure_4 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/virtual_currency/native/OrbOnboardingPill.tsx");

export default OrbOnboardingPill;
export { OrbOnboardingPill };
