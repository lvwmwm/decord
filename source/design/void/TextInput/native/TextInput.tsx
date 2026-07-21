// Module ID: 8420
// Function ID: 67099
// Name: VoidTextInput
// Dependencies: []

// Module 8420 (VoidTextInput)
const TextInput = arg1(dependencyMap[1]).TextInput;
const tmp2 = arg1(dependencyMap[2]);
const KeyboardThemes = tmp2.KeyboardThemes;
const jsx = arg1(dependencyMap[3]).jsx;
let obj1 = arg1(dependencyMap[4]);
let obj = {};
obj = { "Null": "center", "Null": "center", fontFamily: tmp2.Fonts.PRIMARY_MEDIUM, color: importDefault(dependencyMap[5]).colors.TEXT_DEFAULT };
obj.input = obj;
obj1 = { color: importDefault(dependencyMap[5]).colors.INPUT_PLACEHOLDER_TEXT_DEFAULT };
obj.placeholderTextColor = obj1;
let closure_6 = obj1.createStyles(obj);
const forwardRefResult = importAll(dependencyMap[0]).forwardRef((style, ref) => {
  let obj = Object.create(null);
  obj.style = 0;
  const merged = Object.assign(style, obj);
  const tmp3 = callback();
  obj = ref(dependencyMap[6]);
  const theme = obj.useThemeContext().theme;
  const obj2 = ref(dependencyMap[6]);
  const unsafe_rawColors = importDefault(dependencyMap[5]).unsafe_rawColors;
  const tmp5 = ref(dependencyMap[6]).isThemeDark(theme) ? unsafe_rawColors.PRIMARY_100 : unsafe_rawColors.PRIMARY_500;
  obj = { ref, style: items };
  const items = [tmp3.input, style.style];
  const isThemeDarkResult = ref(dependencyMap[6]).isThemeDark(theme);
  const tmp6 = jsx;
  const tmp7 = TextInput;
  obj.keyboardAppearance = ref(dependencyMap[6]).isThemeDark(theme) ? KeyboardThemes.DARK : KeyboardThemes.LIGHT;
  obj.placeholderTextColor = tmp3.placeholderTextColor.color;
  const obj4 = ref(dependencyMap[6]);
  let hexWithOpacityResult = tmp5;
  if (obj5.isAndroid()) {
    hexWithOpacityResult = ref(dependencyMap[8]).hexWithOpacity(tmp5, 0.5);
    const obj6 = ref(dependencyMap[8]);
  }
  obj.selectionColor = hexWithOpacityResult;
  const merged1 = Object.assign(merged);
  return tmp6(tmp7, obj);
});
forwardRefResult.displayName = "VoidTextInput";
const importAllResult = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("design/void/TextInput/native/TextInput.tsx");

export default forwardRefResult;
