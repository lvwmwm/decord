// Module ID: 9237
// Function ID: 9238
// Name: CountrySelectModal
// Dependencies: [19, 21, 1236, 5143, 4395, 9238, 9235, 5635, 9257, 5570, 2]
// Exports: default

// Module 9237 (CountrySelectModal)
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
    obj[1] = callback(5143).getHeaderCloseButton(callback2(4395).pop);
    obj[2] = function render() {
      return callback2(callback(table[5]), {
        onClose() {
          return callback(4395).pop();
        },
        onCountrySelected(countryCode) {
          return callback(9235).setCountryCode(countryCode);
        }
      });
    };
    obj[0] = obj;
    return obj;
  }, []);
  const effect = React.useEffect(() => () => {
    callback(5635).runAfterInteractions(callback(9257).setCountrySelectorClosed, 400);
  }, []);
  return jsx(require(5570) /* NavigationStack */.Navigator, { screens, initialRouteName: "COUNTRY_SELECT" });
};
