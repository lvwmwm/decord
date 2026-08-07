// Module ID: 8461
// Function ID: 8462
// Name: CountrySelectModal
// Dependencies: [19, 21, 1236, 5269, 4507, 8462, 8459, 5761, 8483, 5723, 2]
// Exports: default

// Module 8461 (CountrySelectModal)
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
    obj[1] = callback(5269).getHeaderCloseButton(callback2(4507).pop);
    obj[2] = function render() {
      return callback2(callback(table[5]), {
        onClose() {
          return callback(4507).pop();
        },
        onCountrySelected(countryCode) {
          return callback(8459).setCountryCode(countryCode);
        }
      });
    };
    obj[0] = obj;
    return obj;
  }, []);
  const effect = React.useEffect(() => () => {
    callback(5761).runAfterInteractions(callback(8483).setCountrySelectorClosed, 400);
  }, []);
  return jsx(require(5723) /* NavigationStack */.Navigator, { screens, initialRouteName: "COUNTRY_SELECT" });
};
