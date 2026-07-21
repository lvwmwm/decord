// Module ID: 11301
// Function ID: 87926
// Name: OptionList
// Dependencies: []
// Exports: default

// Module 11301 (OptionList)
function OptionList(options) {
  options = options.options;
  const arg1 = options;
  const dependencyMap = options.onSelectOption;
  const tmp = callback();
  const View = tmp;
  const items = [tmp.container, options.style];
  return <View style={items} collapsable={false}>{options.map((displayName) => {
    const options = displayName;
    let obj = {
      onPress() {
        return callback(arg0);
      },
      start: false,
      end: arg1 === options.length - 1,
      label: displayName.displayName,
      subLabel: displayName.displayDescription
    };
    obj = {
      accessibilityRole: "button",
      style: tmp.addButton,
      onPress() {
        return callback(arg0);
      }
    };
    obj = { variant: "text-sm/semibold", style: tmp.addButtonText };
    const intl = options(onSelectOption[8]).intl;
    obj.children = intl.string(options(onSelectOption[8]).t.OYkgVk);
    obj.children = callback(options(onSelectOption[7]).Text, obj);
    obj.trailing = callback(options(onSelectOption[6]).PressableOpacity, obj);
    return callback(options(onSelectOption[5]).TableRow, obj, displayName.name);
  })}</View>;
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { resizeMode: null, width: null, borderColor: importDefault(dependencyMap[4]).colors.BORDER_SUBTLE, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[4]).radii.lg };
const merged = Object.assign(importDefault(dependencyMap[4]).shadows.SHADOW_BORDER);
obj.container = obj;
obj.addButton = { borderRadius: importDefault(dependencyMap[4]).radii.round, backgroundColor: importDefault(dependencyMap[4]).colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND };
const obj1 = { borderRadius: importDefault(dependencyMap[4]).radii.round, backgroundColor: importDefault(dependencyMap[4]).colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND };
obj.addButtonText = { color: importDefault(dependencyMap[4]).colors.REDESIGN_BUTTON_TERTIARY_TEXT };
let closure_4 = obj.createStyles(obj);
const obj2 = { color: importDefault(dependencyMap[4]).colors.REDESIGN_BUTTON_TERTIARY_TEXT };
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/app_launcher/native/screens/command_view/OptionalCommandOptionList.tsx");

export default function OptionalCommandOptionList(options) {
  options = options.options;
  let tmp3 = null;
  if (options.length > 0) {
    const obj = { style: tmp2, options, onSelectOption: tmp };
    tmp3 = <OptionList {...obj} />;
  }
  return tmp3;
};
