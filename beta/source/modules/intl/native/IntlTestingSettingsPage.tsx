// Module ID: 15178
// Function ID: 15179
// Name: IntlTestingSettingsPage
// Dependencies: [32, 5, 19, 17, 2113, 2112, 21, 4836, 576, 5997, 1115, 8659, 6000, 504, 4421, 5999, 5917, 1154, 5279, 4832, 15179, 15211, 2]
// Exports: default

// Module 15178 (IntlTestingSettingsPage)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import intl7 from "intl" /* 1115 */;
import _mod1154 from "module_1154" /* 1154 */;
import IntlLoaderStore from "IntlLoaderStore" /* 2113 */;
import _modDef4421 from "module_4421" /* 4421 */;
import TableRow6 from "TableRow" /* 5917 */;
import TableRowGroup2 from "TableRowGroup" /* 5999 */;
import _modDef15179 from "module_15179" /* 15179 */;
import _modDef15211 from "module_15211" /* 15211 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import LocaleStore from "LocaleStore" /* 2112 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c3, c4;

let c10;
let metroImportDefault;
let metroRequire;
let obj2;
let unpackModuleId;
function TestLocaleSelector() {
  let items;
  let obj = {
    title: "Locale",
    hasIcons: false,
    defaultValue: require("intl").intl.currentLocale,
    onChange: function() {
      return closure_0(...arguments);
    },
    children: items
  };
  const TableRadioGroup = require("TableRadioGroup").TableRadioGroup;
  _require = _asyncToGenerator(async (arg0, value) => {
    let closure_1;
    closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        let closure_2;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_2 = tmp4;
            c3 = 1;
            c4 = 1;
            const obj4 = { value: setAppLocale(closure_0), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          const obj = tmp(closure_2[11]);
          obj.updateLocale(closure_0);
          c4 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp13) {
        c4 = 3;
        throw tmp13;
      }
    }
  });
  items = [closure_10(require("TableRadioRow").TableRadioRow, { label: "English", value: "en-US" }), closure_10(require("TableRadioRow").TableRadioRow, { label: "French", value: "fr" })];
  return closure_11(TableRadioGroup, obj);
}
function LocaleInfo() {
  let TrailingText;
  let first;
  let obj7;
  let require;
  let str;
  let tmp3;
  let tmp5;
  let obj = get_initialized;
  let items = [LocaleStore];
  [first, tmp3] = obj.useStateFromStoresArray(items, () => {
    const items = [, ];
    ({ locale: arr[0], systemLocale: arr[1] } = LocaleStore);
    return items;
  });
  [tmp5, require] = react.useState(_modDef4421.locale);
  const items1 = [first];
  _slicedToArray(react.useState(_modDef4421.locale), 2);
  const effect = react.useEffect(() => {
    const timerId = setTimeout(() => {
      const obj = _modDef4421;
      closure_1_0(obj.locale());
    }, 0);
  }, items1);
  const obj2 = _modDef4421;
  const _abbr = obj2.localeData()._abbr;
  const TableRowGroup = TableRowGroup2.TableRowGroup;
  const obj3 = { label: "Active System", trailing: closure_10(TableRow6.TableRow.TrailingText, { text: "@discord/intl" }) };
  const TableRow = TableRow6.TableRow;
  const items2 = [closure_10(TableRow, obj3), , , , ];
  const obj4 = { label: "App locale", trailing: closure_10(TableRow6.TableRow.TrailingText, { text: first }) };
  const TableRow2 = TableRow6.TableRow;
  items2[1] = closure_10(TableRow2, obj4);
  const obj5 = { label: "System locale", trailing: closure_10(TableRow6.TableRow.TrailingText, { text: tmp3 }) };
  const TableRow3 = TableRow6.TableRow;
  items2[2] = closure_10(TableRow3, obj5);
  const obj6 = { label: "@discord/intl locale", trailing: closure_10(TrailingText, obj7) };
  const TableRow4 = TableRow6.TableRow;
  obj7 = { text: intl7.intl.currentLocale };
  TrailingText = TableRow6.TableRow.TrailingText;
  items2[3] = closure_10(TableRow4, obj6);
  const obj8 = { label: "Moment locale", trailing: closure_10(TableRow6.TableRow.TrailingText, { text: tmp5 }), subLabel: str };
  const TableRow5 = TableRow6.TableRow;
  str = "Locale data does not match";
  const tmp7 = closure_11;
  const tmp8 = closure_10;
  if (tmp5 === _abbr) {
    str = "Locale data matches current locale";
  }
  const obj9 = { hasIcons: false, children: items2 };
  items2[4] = tmp8(TableRow5, obj8);
  return tmp7(TableRowGroup, obj9);
}
({ View: metroRequire, ScrollView: metroImportDefault } = react_native);
const setAppLocale = IntlLoaderStore.setAppLocale;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let obj = { wrap: obj2, container: { padding: 16 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_12 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/intl/native/IntlTestingSettingsPage.tsx");

export default function IntlTestingSettingsPage() {
  let Stack;
  let closure_0;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items;
  let obj10;
  let obj2;
  let obj7;
  const tmp = closure_12();
  const syncExternalStore = react.useSyncExternalStore(require("intl").intl.onLocaleChange, () => closure_0(dependencyMap[10]).intl.currentLocale);
  _require = _slicedToArray(react.useState({}), 2)[1];
  const effect = react.useEffect(() => {
    const obj = _mod1154;
    const result = obj.waitForAllDefaultIntlMessagesLoaded();
    result.then(() => {
      closure_1_0({});
    });
  }, []);
  let obj = { style: tmp.wrap, children: closure_11(Stack, obj2) };
  obj2 = { spacing: 24, style: tmp.container, children: items };
  Stack = require("Stack/Stack").Stack;
  items = [closure_10(LocaleInfo, {}), closure_10(TestLocaleSelector, {}), , , , , , ];
  const obj3 = { variant: "text-md/normal", children: intl.format(_modDef15179.HMvEC5, {}) };
  const Text = require("Text/Text").Text;
  intl = require("intl").intl;
  items[2] = closure_10(Text, obj3);
  const obj4 = { variant: "text-md/normal", children: intl2.format(_modDef15211.swfLzV, {}) };
  const Text2 = require("Text/Text").Text;
  intl2 = require("intl").intl;
  items[3] = closure_10(Text2, obj4);
  const obj5 = { variant: "text-md/normal", children: intl3.format(_modDef15179.rmps8y, {}) };
  const Text3 = require("Text/Text").Text;
  intl3 = require("intl").intl;
  items[4] = closure_10(Text3, obj5);
  const obj6 = { variant: "text-md/normal", children: intl4.format(_modDef15179.uczI4g, obj7) };
  const Text4 = require("Text/Text").Text;
  intl4 = require("intl").intl;
  obj7 = {
    linkTarget() {

    }
  };
  items[5] = closure_10(Text4, obj6);
  const obj8 = { variant: "text-md/normal", children: intl5.format(_modDef15179.rdfRyh, {}) };
  const Text5 = require("Text/Text").Text;
  intl5 = require("intl").intl;
  items[6] = closure_10(Text5, obj8);
  const obj9 = { variant: "text-md/normal", children: intl6.format(_modDef15179.XOdbAy, obj10) };
  const Text6 = require("Text/Text").Text;
  intl6 = require("intl").intl;
  obj10 = {
    username: "some user",
    usernameHook(children) {
      let obj2;
      const obj = { style: { backgroundColor: "green", borderRadius: 4, paddingHorizontal: 6, paddingVertical: 0 }, children: closure_1_10(closure_0(dependencyMap[19]).Text, obj2) };
      obj2 = { variant: "text-sm/normal", color: "text-overlay-light", children };
      return closure_1_10(closure_1_6, obj);
    }
  };
  items[7] = closure_10(Text6, obj9);
  return closure_10(closure_7, obj);
};
