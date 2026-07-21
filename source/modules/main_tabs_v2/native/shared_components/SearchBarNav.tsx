// Module ID: 5766
// Function ID: 49381
// Dependencies: [31, 33, 477, 1324, 5775, 3837, 5778, 3836, 2, 31, 27, 1452, 653]

// Module 5766
import module_33 from "module_33";
import module_477 from "module_477";
import useIsMobileVisualRefreshExperimentEnabled from "useIsMobileVisualRefreshExperimentEnabled";
import importAllResult from "module_31";
import ME from "ME";

const View = module_33.View;
({ jsx: closure_3, jsxs: closure_4 } = module_477);
let obj = {};
obj = { height: require("useInputStyles").NAV_BAR_HEIGHT, paddingHorizontal: require("useFocus").space.PX_16, backgroundColor: require("useFocus").colors.BACKGROUND_BASE_LOW, borderBottomWidth: module_33.StyleSheet.hairlineWidth, borderColor: require("useFocus").colors.BORDER_STRONG };
obj.container = obj;
useIsMobileVisualRefreshExperimentEnabled = { paddingLeft: require("useFocus").space.PX_16 };
obj.cancelText = useIsMobileVisualRefreshExperimentEnabled;
obj.cancelIcon = { marginRight: require("useFocus").space.PX_16 };
obj.flex = { flex: 1 };
let closure_5 = useIsMobileVisualRefreshExperimentEnabled.createStyles(obj);
const obj2 = { marginRight: require("useFocus").space.PX_16 };
const result = ME.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/SearchBarNav.tsx");

export default importAllResult.forwardRef((onClose, ref) => {
  let obj = Object.create(null);
  obj.onClose = 0;
  const merged = Object.assign(onClose, obj);
  const tmp3 = callback2();
  obj = { accessibilityRole: "button" };
  const intl = ref(dependencyMap[7]).intl;
  obj.accessibilityLabel = intl.string(ref(dependencyMap[7]).t.ETE/oC);
  obj.onPress = onClose.onClose;
  obj.hitSlop = { label: "Array", maxLength: "gradientTop", backgroundColor: "EXPERIMENT_GUILD_EXPOSURE_SUPPRESSED", padding: "showReferralNotificationDot" };
  let obj1 = ref(dependencyMap[8]);
  if (obj1.isAndroid()) {
    obj = { style: tmp3.cancelIcon };
    let tmp5Result = tmp5(tmp6(tmp7[9]).ArrowLargeLeftIcon, obj);
  } else {
    obj1 = { view_sequence_number: null, fileFinishedImporting: null, YNaxMp: null, Warning: null, style: tmp3.cancelText };
    const intl2 = tmp6(tmp7[7]).intl;
    obj1.children = intl2.string(tmp6(tmp7[7]).t.ETE/oC);
    tmp5Result = tmp5(tmp6(tmp7[10]).Text, obj1);
  }
  obj.children = tmp5Result;
  const tmp4Result = callback(ref(dependencyMap[6]).PressableOpacity, obj);
  const obj2 = { style: tmp3.container };
  let obj5 = ref(dependencyMap[8]);
  let tmp12 = null;
  if (obj5.isAndroid()) {
    tmp12 = tmp4Result;
  }
  const items = [tmp12, , ];
  const obj3 = { style: tmp3.flex };
  const obj4 = {};
  obj5 = { "Null": null, "Null": null, ref };
  const merged1 = Object.assign(merged);
  obj4.children = callback(ref(dependencyMap[11]).SearchField, obj5);
  obj3.children = callback(View, obj4);
  items[1] = callback(View, obj3);
  let tmp14 = null;
  if (!obj10.isAndroid()) {
    tmp14 = tmp4Result;
  }
  items[2] = tmp14;
  obj2.children = items;
  return closure_4(View, obj2);
});
