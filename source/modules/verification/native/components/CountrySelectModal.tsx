// Module ID: 8744
// Function ID: 8745
// Name: CountrySelectModal
// Dependencies: [19, 21, 1236, 5442, 4675, 8745, 8742, 5993, 8766, 5955, 2]
// Exports: default

// Module 8744 (CountrySelectModal)
import NavigationStack from "NavigationStack" /* 5955 */;
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/verification/native/components/CountrySelectModal.tsx");

export default function CountrySelectModal() {
  const screens = React.useMemo(() => {
    let obj = { COUNTRY_SELECT: null };
    obj = { title: null, headerLeft: null, render: null };
    const intl = callback(1236).intl;
    obj[0] = intl.string(callback(1236).t.gzXECH);
    obj[1] = callback(5442).getHeaderCloseButton(callback2(4675).pop);
    obj[2] = function render() {
      return callback2(callback(table[5]), {
        onClose() {
          return callback(4675).pop();
        },
        onCountrySelected(countryCode) {
          return callback(8742).setCountryCode(countryCode);
        }
      });
    };
    obj[0] = obj;
    return obj;
  }, []);
  const effect = React.useEffect(() => () => {
    callback(5993).runAfterInteractions(callback(8766).setCountrySelectorClosed, 400);
  }, []);
  return jsx(NavigationStack.Navigator, { screens, initialRouteName: "COUNTRY_SELECT" });
};
