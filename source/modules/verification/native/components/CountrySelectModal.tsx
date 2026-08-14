// Module ID: 8592
// Function ID: 8593
// Name: CountrySelectModal
// Dependencies: [19, 21, 1236, 5331, 4572, 8593, 8590, 5882, 8614, 5844, 2]
// Exports: default

// Module 8592 (CountrySelectModal)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("getSystemLocale").fileFinishedImporting("modules/verification/native/components/CountrySelectModal.tsx");

export default function CountrySelectModal() {
  const screens = React.useMemo(() => {
    let obj = { COUNTRY_SELECT: null };
    obj = { title: null, headerLeft: null, render: null };
    const intl = callback(1236).intl;
    obj[0] = intl.string(callback(1236).t.gzXECH);
    obj[1] = callback(5331).getHeaderCloseButton(callback2(4572).pop);
    obj[2] = function render() {
      return callback2(callback(table[5]), {
        onClose() {
          return callback(4572).pop();
        },
        onCountrySelected(countryCode) {
          return callback(8590).setCountryCode(countryCode);
        }
      });
    };
    obj[0] = obj;
    return obj;
  }, []);
  const effect = React.useEffect(() => () => {
    callback(5882).runAfterInteractions(callback(8614).setCountrySelectorClosed, 400);
  }, []);
  return jsx(require(5844) /* NavigationStack */.Navigator, { screens, initialRouteName: "COUNTRY_SELECT" });
};
