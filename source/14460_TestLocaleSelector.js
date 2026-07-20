// Module ID: 14460
// Function ID: 108999
// Name: TestLocaleSelector
// Dependencies: []
// Exports: default

// Module 14460 (TestLocaleSelector)
function TestLocaleSelector() {
  const obj = {
    defaultValue: arg1(dependencyMap[10]).intl.currentLocale,
    onChange: () => {
      // CreateGeneratorClosureLongIndex (0x67)
      let closure_0 = callback(tmp);
      return function() {
        return callback(...arguments);
      };
    }()
  };
  const items = [callback3(arg1(dependencyMap[12]).TableRadioRow, {}), callback3(arg1(dependencyMap[12]).TableRadioRow, {})];
  obj.children = items;
  return callback4(arg1(dependencyMap[9]).TableRadioGroup, obj);
}
function LocaleInfo() {
  let tmp4;
  let obj = arg1(dependencyMap[13]);
  const items = [closure_9];
  const tmp = callback2(obj.useStateFromStoresArray(items, () => {
    const items = [closure_9.locale, closure_9.systemLocale];
    return items;
  }), 2);
  const first = tmp[0];
  [tmp4, closure_0] = callback2(React.useState(importDefault(dependencyMap[14]).locale), 2);
  const items1 = [first];
  const effect = React.useEffect(() => {
    const timerId = setTimeout(() => {
      callback(callback2(closure_2[14]).locale());
    }, 0);
  }, items1);
  let obj1 = importDefault(dependencyMap[14]);
  obj = { hasIcons: false };
  obj = { label: "Active System", trailing: callback3(arg1(dependencyMap[16]).TableRow.TrailingText, { text: "@discord/intl" }) };
  const items2 = [callback3(arg1(dependencyMap[16]).TableRow, obj), , , , ];
  obj1 = { label: "App locale", trailing: callback3(arg1(dependencyMap[16]).TableRow.TrailingText, { text: first }) };
  items2[1] = callback3(arg1(dependencyMap[16]).TableRow, obj1);
  const obj2 = { label: "System locale", trailing: callback3(arg1(dependencyMap[16]).TableRow.TrailingText, { text: tmp[1] }) };
  items2[2] = callback3(arg1(dependencyMap[16]).TableRow, obj2);
  const obj3 = { label: "@discord/intl locale" };
  const obj4 = { text: arg1(dependencyMap[10]).intl.currentLocale };
  obj3.trailing = callback3(arg1(dependencyMap[16]).TableRow.TrailingText, obj4);
  items2[3] = callback3(arg1(dependencyMap[16]).TableRow, obj3);
  const obj5 = { label: "Moment locale", trailing: callback3(arg1(dependencyMap[16]).TableRow.TrailingText, { text: tmp4 }) };
  let str = "Locale data does not match";
  if (tmp4 === obj1.localeData()._abbr) {
    str = "Locale data matches current locale";
  }
  obj5.subLabel = str;
  items2[4] = callback3(arg1(dependencyMap[16]).TableRow, obj5);
  obj.children = items2;
  return closure_11(arg1(dependencyMap[15]).TableRowGroup, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
({ View: closure_6, ScrollView: closure_7 } = arg1(dependencyMap[3]));
const setAppLocale = arg1(dependencyMap[4]).setAppLocale;
let closure_9 = importDefault(dependencyMap[5]);
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOW };
obj.wrap = obj;
obj.container = { padding: 16 };
let closure_12 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/intl/native/IntlTestingSettingsPage.tsx");

export default function IntlTestingSettingsPage() {
  const tmp = callback5();
  const syncExternalStore = React.useSyncExternalStore(callback(dependencyMap[10]).intl.onLocaleChange, () => callback(closure_2[10]).intl.currentLocale);
  const callback = callback2(React.useState({}), 2)[1];
  const effect = React.useEffect(() => {
    const result = callback(closure_2[17]).waitForAllDefaultIntlMessagesLoaded();
    result.then(() => {
      callback({});
    });
  }, []);
  let obj = { style: tmp.wrap };
  obj = { spacing: 24, style: tmp.container };
  const items = [callback3(LocaleInfo, {}), callback3(TestLocaleSelector, {}), , , , , , ];
  obj = { variant: "text-md/normal" };
  const intl = callback(dependencyMap[10]).intl;
  obj.children = intl.format(importDefault(dependencyMap[20]).HMvEC5, {});
  items[2] = callback3(callback(dependencyMap[19]).Text, obj);
  const obj1 = { variant: "text-md/normal" };
  const intl2 = callback(dependencyMap[10]).intl;
  obj1.children = intl2.format(importDefault(dependencyMap[21]).swfLzV, {});
  items[3] = callback3(callback(dependencyMap[19]).Text, obj1);
  const obj2 = { variant: "text-md/normal" };
  const intl3 = callback(dependencyMap[10]).intl;
  obj2.children = intl3.format(importDefault(dependencyMap[20]).rmps8y, {});
  items[4] = callback3(callback(dependencyMap[19]).Text, obj2);
  const obj3 = { variant: "text-md/normal" };
  const intl4 = callback(dependencyMap[10]).intl;
  obj3.children = intl4.format(importDefault(dependencyMap[20]).uczI4g, {
    linkTarget() {

    }
  });
  items[5] = callback3(callback(dependencyMap[19]).Text, obj3);
  const obj5 = { variant: "text-md/normal" };
  const intl5 = callback(dependencyMap[10]).intl;
  obj5.children = intl5.format(importDefault(dependencyMap[20]).rdfRyh, {});
  items[6] = callback3(callback(dependencyMap[19]).Text, obj5);
  const obj6 = { variant: "text-md/normal" };
  const intl6 = callback(dependencyMap[10]).intl;
  obj6.children = intl6.format(importDefault(dependencyMap[20]).XOdbAy, {
    username: "some user",
    usernameHook(children) {
      let obj = { style: {}, children: callback2(callback(closure_2[19]).Text, obj) };
      obj = { children };
      return callback2(closure_6, obj);
    }
  });
  items[7] = callback3(callback(dependencyMap[19]).Text, obj6);
  obj.children = items;
  obj.children = callback4(callback(dependencyMap[18]).Stack, obj);
  return callback3(closure_7, obj);
};
