// Module ID: 8527
// Function ID: 8528
// Name: CountrySelectModal
// Dependencies: [19, 21, 1236, 5270, 4509, 8528, 8525, 5821, 8549, 5783, 2]
// Exports: default

// Module 8527 (CountrySelectModal)
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
    obj[1] = callback(5270).getHeaderCloseButton(callback2(4509).pop);
    obj[2] = function render() {
      return callback2(callback(table[5]), {
        onClose() {
          return callback(4509).pop();
        },
        onCountrySelected(countryCode) {
          return callback(8525).setCountryCode(countryCode);
        }
      });
    };
    obj[0] = obj;
    return obj;
  }, []);
  const effect = React.useEffect(() => () => {
    callback(5821).runAfterInteractions(callback(8549).setCountrySelectorClosed, 400);
  }, []);
  return jsx(require(5783) /* NavigationStack */.Navigator, { screens, initialRouteName: "COUNTRY_SELECT" });
};
