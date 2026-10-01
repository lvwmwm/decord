// Module ID: 14972
// Function ID: 14973
// Name: UserSettingsLocale
// Dependencies: [5, 19, 17, 2113, 2112, 21, 4836, 576, 8659, 504, 6544, 5997, 1115, 6000, 14973, 2]

// Module 14972 (UserSettingsLocale)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import IntlLoaderStore from "IntlLoaderStore" /* 2113 */;
import TableRadioRow2 from "TableRadioRow" /* 6000 */;
import flags from "flags" /* 14973 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import LocaleStore from "LocaleStore" /* 2112 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c3, c4, localizedName;

let closure_4;
let hasOwnProperty;
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
        return { value: "HermesInternal", done: null };
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
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp13) {
        c4 = 3;
        throw tmp13;
      }
    }
  });
  return obj(...arguments);
};
({ Image: closure_4, ScrollView: hasOwnProperty } = react_native);
const setAppLocale = IntlLoaderStore.setAppLocale;
const jsx = Fragment.jsx;
obj = { content: obj2, flagImage: { width: 27, height: 18 } };
obj2 = { padding: nativeDefault.space.PX_16 };
let closure_9 = createStyles.createStyles(obj);
const memoResult = react.memo(function UserSettingsLocale() {
  let availableLocales;
  let flagImage;
  let locale;
  const tmp = closure_9();
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
      return <TableRadioRow key={name} value={value} label={name} subLabel={intl.string(localizedName)} icon={null} />;
    })
  });
  const TableRadioGroup = require("TableRadioGroup").TableRadioGroup;
  const obj5 = require("intl");
  availableLocales = obj5.getAvailableLocales();
  return <closure_5 contentContainerStyle={tmp.content}>{null}</closure_5>;
});
const result = size.fileFinishedImporting("modules/user_settings/language_and_time/native/UserSettingsLocale.tsx");

export default memoResult;
