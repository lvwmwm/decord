// Module ID: 11707
// Function ID: 90957
// Name: NewUserPermissionsOnboarding
// Dependencies: [57, 31, 27, 653, 11718, 33, 4126, 689, 5081, 4545]
// Exports: default

// Module 11707 (NewUserPermissionsOnboarding)
import "_slicedToArray";
import module_31 from "module_31";
import get ActivityIndicator from "get ActivityIndicator";
import ME from "ME";
import getFontScale from "getFontScale";

({ View: closure_2, ScrollView: closure_3 } = module_31);
({ jsx: closure_4, jsxs: closure_5 } = get_ActivityIndicator);
ME = { scrollContainer: { minHeight: "100%" }, container: {} };
ME = { paddingTop: 80 + require("SuggestedFriendSource").NAV_BAR_HEIGHT };
ME.alertContainer = ME;
const merged = Object.assign(require("module_33").shadows.SHADOW_HIGH);
ME.alert = { backgroundColor: require("module_33").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("module_33").radii.xl, borderColor: require("module_33").colors.INTERACTIVE_BACKGROUND_ACTIVE };
ME.alertContent = {};
ME.alertTitle = { isHighlighted: null, isPressable: null };
const obj1 = { backgroundColor: require("module_33").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("module_33").radii.xl, borderColor: require("module_33").colors.INTERACTIVE_BACKGROUND_ACTIVE };
ME.alertSubtitle = { paddingBottom: require("module_33").space.PX_16, textAlign: "center" };
ME.buttonWrapper = { flexDirection: "row" };
const obj2 = { paddingBottom: require("module_33").space.PX_16, textAlign: "center" };
ME.primaryButtonContainer = { marginBottom: require("module_33").space.PX_12 };
const obj3 = { marginBottom: require("module_33").space.PX_12 };
ME.trailing = { flexGrow: 0, padding: require("module_33").space.PX_16 };
ME = ME.createStyles(ME);
const result = getFontScale.fileFinishedImporting("modules/nuf/native/components/NewUserPermissionsOnboarding.android.tsx");

export default function NewUserPermissionsOnboarding(showSkip) {
  let header;
  let loading;
  let onAllow;
  let onDontAllow;
  let subtitle;
  let title;
  let trailing;
  let flag = showSkip.showSkip;
  ({ title, subtitle, header, trailing, loading } = showSkip);
  if (flag === undefined) {
    flag = true;
  }
  ({ onAllow, onDontAllow } = showSkip);
  const tmp = ME();
  let obj = { contentContainerStyle: tmp.scrollContainer };
  obj = { style: tmp.container };
  obj = { style: tmp.alertContainer };
  const obj1 = {};
  const items = [header, ];
  const obj2 = { style: tmp.alert };
  const obj3 = { style: tmp.alertContent };
  const obj4 = { "Null": "r", "Null": 59, alignItems: 85.5, style: tmp.alertTitle, children: title };
  const items1 = [callback(arg1(dependencyMap[6]).Text, obj4), callback(arg1(dependencyMap[6]).Text, { style: tmp.alertSubtitle, children: subtitle }), , ];
  const obj6 = {};
  const items2 = [tmp.buttonWrapper, ];
  let primaryButtonContainer = flag;
  if (flag) {
    primaryButtonContainer = tmp.primaryButtonContainer;
  }
  items2[1] = primaryButtonContainer;
  obj6.style = items2;
  const obj7 = {};
  const intl = arg1(dependencyMap[8]).intl;
  obj7.text = intl.string(arg1(dependencyMap[8]).t.2nYlT2);
  obj7.onPress = onAllow;
  obj7.loading = loading;
  obj7.grow = true;
  obj6.children = callback(arg1(dependencyMap[7]).Button, obj7);
  items1[2] = callback(closure_2, obj6);
  if (flag) {
    const obj8 = { style: tmp.buttonWrapper };
    const obj9 = { variant: "secondary" };
    const intl2 = arg1(dependencyMap[8]).intl;
    obj9.text = intl2.string(arg1(dependencyMap[8]).t.5Wxrcd);
    obj9.onPress = onDontAllow;
    obj9.grow = true;
    obj8.children = callback(arg1(dependencyMap[7]).Button, obj9);
    flag = callback(closure_2, obj8);
  }
  items1[3] = flag;
  obj3.children = items1;
  obj2.children = closure_5(closure_2, obj3);
  items[1] = callback(closure_2, obj2);
  obj1.children = items;
  obj.children = closure_5(closure_2, obj1);
  obj.children = callback(closure_2, obj);
  const items3 = [callback(closure_2, obj), callback(closure_2, { style: tmp.trailing, children: trailing })];
  obj.children = items3;
  return closure_5(closure_3, obj);
};
