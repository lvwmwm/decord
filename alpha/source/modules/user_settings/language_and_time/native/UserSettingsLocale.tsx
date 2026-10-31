// Module ID: 17403
// Function ID: 17404
// Name: UserSettingsLocale
// Dependencies: [5, 19, 17, 2063, 2062, 21, 5014, 575, 5932, 504, 7292, 7058, 1113, 7061, 5717, 17404, 2]

// Module 17403 (UserSettingsLocale)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import IntlLoaderStore from "IntlLoaderStore" /* 2063 */;
import FastImageDefault from "FastImage" /* 5717 */;
import TableRadioRow2 from "TableRadioRow" /* 7061 */;
import flags from "flags" /* 17404 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import LocaleStore from "LocaleStore" /* 2062 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c3, c4, localizedName;

let obj2;
function handleLanguageChange() {
  return obj(...arguments);
}
let obj = function _handleLanguageChange() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0 = arg0;
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
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
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
            let closure_2 = tmp4;
            let closure_1 = tmp;
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
          obj = closure_130_1(closure_130_2[8]);
          obj.updateLocale(closure_0);
          c4 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp13) {
        c4 = 3;
        throw tmp13;
      }
    }
  });
  return obj(...arguments);
};
const ScrollView = react_native.ScrollView;
const setAppLocale = IntlLoaderStore.setAppLocale;
const jsx = Fragment.jsx;
obj = { content: obj2, flagImage: { width: 27, height: 18 } };
obj2 = { padding: nativeDefault.space.PX_16 };
let closure_8 = createStyles.createStyles(obj);
const memoResult = react.memo(function UserSettingsLocale() {
  let availableLocales;
  let flagImage;
  let locale;
  const tmp = closure_8();
  _require = tmp;
  const items = [LocaleStore];
  obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  const SafeAreaPaddingView = require("common/SafeAreaView").SafeAreaPaddingView;
  ({
    defaultValue: stateFromStores,
    onChange: handleLanguageChange,
    hasIcons: true,
    children: availableLocales.map((localizedName) => {
      let name;
      let value;
      ({ name, value } = localizedName);
      localizedName = localizedName.localizedName;
      const TableRadioRow = TableRadioRow2.TableRadioRow;
      const intl = intl2.intl;
      ({ style: flagImage.flagImage, source: flags.flags[value] });
      FastImageDefault;
      return <TableRadioRow key={name} value={value} label={name} subLabel={intl.string(localizedName)} icon={null} />;
    })
  });
  const TableRadioGroup = require("TableRadioGroup").TableRadioGroup;
  const obj5 = require("intl");
  availableLocales = obj5.getAvailableLocales();
  return <ScrollView contentContainerStyle={tmp.content}>{null}</ScrollView>;
});
const result = size.fileFinishedImporting("modules/user_settings/language_and_time/native/UserSettingsLocale.tsx");

export default memoResult;
