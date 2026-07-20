// Module ID: 11282
// Function ID: 87813
// Name: AppLauncherSelectOptionFormRow
// Dependencies: []
// Exports: default

// Module 11282 (AppLauncherSelectOptionFormRow)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let obj = arg1(dependencyMap[2]);
obj = {};
obj = { flex: 43429591634436890000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, valueOf: 13341927254803950000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, borderRadius: importDefault(dependencyMap[3]).radii.lg, borderRadius: -0.0000025033991957262255, paddingHorizontal: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010473513843542165, backgroundColor: importDefault(dependencyMap[3]).colors.BACKGROUND_SURFACE_HIGH };
obj.formRow = obj;
let closure_4 = obj.createStyles(obj);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/app_launcher/native/base_components/AppLauncherSelectOptionFormRow.tsx");

export default function AppLauncherSelectOptionFormRow(arg0) {
  let autoFocus;
  let option;
  let selected;
  let style;
  let unselectedSubLabel;
  ({ selected, selectedItemName: closure_0, unselectedSubLabel } = arg0);
  const importDefault = unselectedSubLabel;
  let obj = { paddingTop: null, paddingBottom: "LOCAL_PAYMENT_START_PAYMENT_MISSING_REQUIRED_OPTION", position: "Missing required option for startPayment.", left: null, right: "LOCAL_PAYMENT_START_PAYMENT_DEFERRED_PAYMENT_FAILED", zIndex: "LocalPayment startPayment deferred payment failed." };
  ({ style, option, autoFocus } = arg0);
  Object.setPrototypeOf(null);
  const merged = Object.assign(arg0, obj);
  let obj1 = arg1(dependencyMap[4]);
  const animationDelayedAutoFocus = obj1.useAnimationDelayedAutoFocus(autoFocus, merged.onPress);
  obj = { 1726238916: null, 607091733: null };
  const items = [callback().formRow, style];
  obj.style = items;
  obj = {};
  let str = "text-md/medium";
  if (selected) {
    str = "text-sm/medium";
  }
  obj.variant = str;
  let str2 = "text-default";
  if (selected) {
    str2 = "interactive-text-default";
  }
  obj.color = str2;
  obj.lineClamp = 1;
  obj.children = option.displayName;
  obj.label = jsx(arg1(dependencyMap[6]).Text, obj);
  if (selected) {
    let fn = () => {
      const obj = { 9223372036854775807: true, 9223372036854775807: true, 9223372036854775807: true, children: callback };
      return callback2(callback(closure_2[6]).Text, obj);
    };
  } else {
    fn = null;
    if (null != unselectedSubLabel) {
      fn = () => callback2(callback(closure_2[6]).Text, { children: unselectedSubLabel });
    }
  }
  obj.subLabel = fn;
  obj1 = { source: importDefault(dependencyMap[8]), size: arg1(dependencyMap[7]).IconSizes.SMALL_20 };
  obj.trailing = jsx(arg1(dependencyMap[7]).Icon, obj1);
  const merged1 = Object.assign(merged);
  return jsx(arg1(dependencyMap[5]).FormRow, obj);
};
