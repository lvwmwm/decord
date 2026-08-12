// Module ID: 8566
// Function ID: 8567
// Name: CountrySelectModal
// Dependencies: [19, 21, 1236, 5309, 4549, 8567, 8564, 5860, 8588, 5822, 2]
// Exports: default

// Module 8566 (CountrySelectModal)
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
    obj[1] = callback(5309).getHeaderCloseButton(callback2(4549).pop);
    obj[2] = function render() {
      return callback2(callback(table[5]), {
        onClose() {
          return callback(4549).pop();
        },
        onCountrySelected(countryCode) {
          return callback(8564).setCountryCode(countryCode);
        }
      });
    };
    obj[0] = obj;
    return obj;
  }, []);
  const effect = React.useEffect(() => () => {
    callback(5860).runAfterInteractions(callback(8588).setCountrySelectorClosed, 400);
  }, []);
  return jsx(require(5822) /* NavigationStack */.Navigator, { screens, initialRouteName: "COUNTRY_SELECT" });
};
