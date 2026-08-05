// Module ID: 8304
// Function ID: 8305
// Name: CountrySelectModal
// Dependencies: [19, 21, 1236, 5223, 4460, 8305, 8302, 5715, 8326, 5650, 2]
// Exports: default

// Module 8304 (CountrySelectModal)
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
    obj[1] = callback(5223).getHeaderCloseButton(callback2(4460).pop);
    obj[2] = function render() {
      return callback2(callback(table[5]), {
        onClose() {
          return callback(4460).pop();
        },
        onCountrySelected(countryCode) {
          return callback(8302).setCountryCode(countryCode);
        }
      });
    };
    obj[0] = obj;
    return obj;
  }, []);
  const effect = React.useEffect(() => () => {
    callback(5715).runAfterInteractions(callback(8326).setCountrySelectorClosed, 400);
  }, []);
  return jsx(require(5650) /* NavigationStack */.Navigator, { screens, initialRouteName: "COUNTRY_SELECT" });
};
