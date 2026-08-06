// Module ID: 8444
// Function ID: 8445
// Name: CountrySelectModal
// Dependencies: [19, 21, 1236, 5253, 4490, 8445, 8442, 5742, 8466, 5704, 2]
// Exports: default

// Module 8444 (CountrySelectModal)
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
    obj[1] = callback(5253).getHeaderCloseButton(callback2(4490).pop);
    obj[2] = function render() {
      return callback2(callback(table[5]), {
        onClose() {
          return callback(4490).pop();
        },
        onCountrySelected(countryCode) {
          return callback(8442).setCountryCode(countryCode);
        }
      });
    };
    obj[0] = obj;
    return obj;
  }, []);
  const effect = React.useEffect(() => () => {
    callback(5742).runAfterInteractions(callback(8466).setCountrySelectorClosed, 400);
  }, []);
  return jsx(require(5704) /* NavigationStack */.Navigator, { screens, initialRouteName: "COUNTRY_SELECT" });
};
