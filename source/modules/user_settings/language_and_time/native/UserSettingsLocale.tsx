// Module ID: 14133
// Function ID: 107259
// Name: handleLanguageChange
// Dependencies: []

// Module 14133 (handleLanguageChange)
function handleLanguageChange() {
  return _handleLanguageChange(...arguments);
}
function _handleLanguageChange() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _handleLanguageChange = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ Image: closure_4, ScrollView: closure_5 } = arg1(dependencyMap[2]));
const setAppLocale = arg1(dependencyMap[3]).setAppLocale;
let closure_7 = importDefault(dependencyMap[4]);
const jsx = arg1(dependencyMap[5]).jsx;
const tmp2 = arg1(dependencyMap[2]);
let obj = {};
obj = { padding: importDefault(dependencyMap[7]).space.PX_16 };
obj.content = obj;
obj.flagImage = { "Null": "fi", "Null": "png" };
let closure_9 = arg1(dependencyMap[6]).createStyles(obj);
const obj2 = arg1(dependencyMap[6]);
const memoResult = importAllResult.memo(function UserSettingsLocale() {
  const tmp = callback2();
  const arg1 = tmp;
  let obj = arg1(dependencyMap[9]);
  const items = [closure_7];
  obj = { contentContainerStyle: tmp.content };
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  obj = { bottom: true };
  const obj1 = { defaultValue: stateFromStores, onChange: handleLanguageChange, hasIcons: true };
  const availableLocales = arg1(dependencyMap[12]).getAvailableLocales();
  obj1.children = availableLocales.map((localizedName) => {
    let name;
    let value;
    ({ name, value } = localizedName);
    let obj = { value, label: name };
    const intl = tmp(closure_2[12]).intl;
    obj.subLabel = intl.string(localizedName.localizedName);
    obj = { style: tmp.flagImage, source: tmp(closure_2[14]).flags[value] };
    obj.icon = callback(closure_4, obj);
    return callback(tmp(closure_2[13]).TableRadioRow, obj, name);
  });
  obj.children = jsx(arg1(dependencyMap[11]).TableRadioGroup, obj1);
  obj.children = jsx(arg1(dependencyMap[10]).SafeAreaPaddingView, obj);
  return <closure_5 {...obj} />;
});
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/user_settings/language_and_time/native/UserSettingsLocale.tsx");

export default memoResult;
