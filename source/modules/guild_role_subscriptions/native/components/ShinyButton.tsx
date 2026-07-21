// Module ID: 9347
// Function ID: 73001
// Name: ShinyButton
// Dependencies: []
// Exports: default

// Module 9347 (ShinyButton)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let obj = arg1(dependencyMap[2]);
obj = {};
obj = { borderRadius: importDefault(dependencyMap[3]).radii.sm, backgroundColor: importDefault(dependencyMap[3]).colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT };
obj.container = obj;
obj.sparkleIcon = { marginRight: 4, tintColor: importDefault(dependencyMap[3]).colors.WHITE };
obj.disabled = { opacity: 0.5 };
let closure_4 = obj.createStyles(obj);
const obj1 = { marginRight: 4, tintColor: importDefault(dependencyMap[3]).colors.WHITE };
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/guild_role_subscriptions/native/components/ShinyButton.tsx");

export default function ShinyButton(style) {
  let disabled;
  let loading;
  let onPress;
  ({ loading, disabled, onPress } = style);
  if (onPress === undefined) {
    onPress = function c() {

    };
  }
  let obj = { 9223372036854775807: "ERROR", 0: "ERROR", -9223372036854775808: "NOT_RESPONDER", 9223372036854775807: "NOT_RESPONDER" };
  Object.setPrototypeOf(null);
  const merged = Object.assign(style, obj);
  const tmp3 = callback();
  obj = { onPress };
  const items = [tmp3.container, style.style];
  obj.pillStyle = items;
  obj.loading = loading;
  obj.disabled = disabled;
  let tmp6Result;
  if (!loading) {
    obj = { size: arg1(dependencyMap[5]).Icon.Sizes.REFRESH_SMALL_16, source: importDefault(dependencyMap[6]) };
    const items1 = [tmp3.sparkleIcon, ];
    if (disabled) {
      disabled = tmp3.disabled;
    }
    items1[1] = disabled;
    obj.style = items1;
    tmp6Result = jsx(arg1(dependencyMap[5]).Icon, obj);
    const tmp6 = jsx;
  }
  obj.icon = tmp6Result;
  const merged1 = Object.assign(merged);
  return jsx(arg1(dependencyMap[4]).BaseTextButton, obj);
};
