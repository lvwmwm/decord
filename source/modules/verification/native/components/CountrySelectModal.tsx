// Module ID: 8570
// Function ID: 8571
// Name: CountrySelectModal
// Dependencies: [19, 21, 1236, 5310, 4550, 8571, 8568, 5861, 8592, 5823, 2]
// Exports: default

// Module 8570 (CountrySelectModal)
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
    obj[1] = callback(5310).getHeaderCloseButton(callback2(4550).pop);
    obj[2] = function render() {
      return callback2(callback(table[5]), {
        onClose() {
          return callback(4550).pop();
        },
        onCountrySelected(countryCode) {
          return callback(8568).setCountryCode(countryCode);
        }
      });
    };
    obj[0] = obj;
    return obj;
  }, []);
  const effect = React.useEffect(() => () => {
    callback(5861).runAfterInteractions(callback(8592).setCountrySelectorClosed, 400);
  }, []);
  return jsx(require(5823) /* NavigationStack */.Navigator, { screens, initialRouteName: "COUNTRY_SELECT" });
};
