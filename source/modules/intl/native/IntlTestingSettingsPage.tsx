// Module ID: 14641
// Function ID: 111576
// Name: TestLocaleSelector
// Dependencies: [57, 5, 31, 27, 1922, 1921, 33, 4130, 689, 7654, 1212, 8042, 7653, 566, 3712, 5501, 5165, 1250, 4541, 4126, 14642, 14674, 2]
// Exports: default

// Module 14641 (TestLocaleSelector)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { setAppLocale } from "_setAppLocale";
import closure_9 from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_6;
let closure_7;
const require = arg1;
function TestLocaleSelector() {
  const obj = {
    title: "Locale",
    hasIcons: false,
    defaultValue: require(1212) /* getSystemLocale */.intl.currentLocale,
    onChange: (() => {
      // CreateGeneratorClosureLongIndex (0x67)
      let closure_0 = outer1_4(tmp);
      return function() {
        return callback(...arguments);
      };
    })()
  };
  const items = [callback2(require(7653) /* TableRadioRow */.TableRadioRow, { label: "English", value: "en-US" }), callback2(require(7653) /* TableRadioRow */.TableRadioRow, { label: "French", value: "fr" })];
  obj.children = items;
  return callback3(require(7654) /* context */.TableRadioGroup, obj);
}
function LocaleInfo() {
  let require;
  let tmp4;
  let obj = require(566) /* initialize */;
  let items = [closure_9];
  const tmp = callback(obj.useStateFromStoresArray(items, () => {
    const items = [outer1_9.locale, outer1_9.systemLocale];
    return items;
  }), 2);
  const first = tmp[0];
  [tmp4, require] = callback(React.useState(importDefault(3712).locale), 2);
  const items1 = [first];
  const effect = React.useEffect(() => {
    const timerId = setTimeout(() => {
      outer1_0(outer2_1(outer2_2[14]).locale());
    }, 0);
  }, items1);
  let obj1 = importDefault(3712);
  obj = { hasIcons: false };
  obj = { label: "Active System", trailing: callback2(require(5165) /* TableRowInner */.TableRow.TrailingText, { text: "@discord/intl" }) };
  const items2 = [callback2(require(5165) /* TableRowInner */.TableRow, obj), , , , ];
  obj1 = { label: "App locale", trailing: callback2(require(5165) /* TableRowInner */.TableRow.TrailingText, { text: first }) };
  items2[1] = callback2(require(5165) /* TableRowInner */.TableRow, obj1);
  const obj2 = { label: "System locale", trailing: callback2(require(5165) /* TableRowInner */.TableRow.TrailingText, { text: tmp[1] }) };
  items2[2] = callback2(require(5165) /* TableRowInner */.TableRow, obj2);
  const obj3 = { label: "@discord/intl locale" };
  const obj4 = { text: require(1212) /* getSystemLocale */.intl.currentLocale };
  obj3.trailing = callback2(require(5165) /* TableRowInner */.TableRow.TrailingText, obj4);
  items2[3] = callback2(require(5165) /* TableRowInner */.TableRow, obj3);
  const obj5 = { label: "Moment locale", trailing: callback2(require(5165) /* TableRowInner */.TableRow.TrailingText, { text: tmp4 }) };
  let str = "Locale data does not match";
  if (tmp4 === obj1.localeData()._abbr) {
    str = "Locale data matches current locale";
  }
  obj5.subLabel = str;
  items2[4] = callback2(require(5165) /* TableRowInner */.TableRow, obj5);
  obj.children = items2;
  return closure_11(require(5501) /* TableRowGroupTitle */.TableRowGroup, obj);
}
({ View: closure_6, ScrollView: closure_7 } = get_ActivityIndicator);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.wrap = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.container = { padding: 16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("result").fileFinishedImporting("modules/intl/native/IntlTestingSettingsPage.tsx");

export default function IntlTestingSettingsPage() {
  const tmp = _createForOfIteratorHelperLoose();
  const syncExternalStore = React.useSyncExternalStore(_require(1212).intl.onLocaleChange, () => callback(outer1_2[10]).intl.currentLocale);
  _require = callback(React.useState({}), 2)[1];
  const effect = React.useEffect(() => {
    const result = callback(outer1_2[17]).waitForAllDefaultIntlMessagesLoaded();
    result.then(() => {
      outer1_0({});
    });
  }, []);
  let obj = { style: tmp.wrap };
  obj = { spacing: 24, style: tmp.container };
  const items = [callback2(LocaleInfo, {}), callback2(TestLocaleSelector, {}), , , , , , ];
  obj = { variant: "text-md/normal" };
  const intl = _require(1212).intl;
  obj.children = intl.format(importDefault(14642).HMvEC5, {});
  items[2] = callback2(_require(4126).Text, obj);
  const obj1 = { variant: "text-md/normal" };
  const intl2 = _require(1212).intl;
  obj1.children = intl2.format(importDefault(14674).swfLzV, {});
  items[3] = callback2(_require(4126).Text, obj1);
  const obj2 = { variant: "text-md/normal" };
  const intl3 = _require(1212).intl;
  obj2.children = intl3.format(importDefault(14642).rmps8y, {});
  items[4] = callback2(_require(4126).Text, obj2);
  const obj3 = { variant: "text-md/normal" };
  const intl4 = _require(1212).intl;
  obj3.children = intl4.format(importDefault(14642).uczI4g, {
    linkTarget() {

    }
  });
  items[5] = callback2(_require(4126).Text, obj3);
  const obj5 = { variant: "text-md/normal" };
  const intl5 = _require(1212).intl;
  obj5.children = intl5.format(importDefault(14642).rdfRyh, {});
  items[6] = callback2(_require(4126).Text, obj5);
  const obj6 = { variant: "text-md/normal" };
  const intl6 = _require(1212).intl;
  obj6.children = intl6.format(importDefault(14642).XOdbAy, {
    username: "some user",
    usernameHook(children) {
      obj = { style: { backgroundColor: "green", borderRadius: 4, paddingHorizontal: 6, paddingVertical: 0 }, children: outer1_10(callback(outer1_2[19]).Text, obj) };
      obj = { variant: "text-sm/normal", color: "text-overlay-light", children };
      return outer1_10(outer1_6, obj);
    }
  });
  items[7] = callback2(_require(4126).Text, obj6);
  obj.children = items;
  obj.children = callback3(_require(4541).Stack, obj);
  return callback2(closure_7, obj);
};
