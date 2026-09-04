// Module ID: 6987
// Function ID: 6988
// Name: CountrySelectModal
// Dependencies: [19, 21, 1233, 5579, 4731, 6988, 6985, 6978, 7016, 6940, 2]
// Exports: default

// Module 6987 (CountrySelectModal)
import NavigationStack from "NavigationStack" /* 6940 */;
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/verification/native/components/CountrySelectModal.tsx");

export default function CountrySelectModal() {
  const screens = React.useMemo(() => {
    let obj = { COUNTRY_SELECT: null };
    obj = { title: null, headerLeft: null, render: null };
    const intl = callback(1233).intl;
    obj[0] = intl.string(callback(1233).t.gzXECH);
    obj[1] = callback(5579).getHeaderCloseButton(callback2(4731).pop);
    obj[2] = function render() {
      return callback2(callback(table[5]), {
        onClose() {
          return callback(4731).pop();
        },
        onCountrySelected(countryCode) {
          return callback(6985).setCountryCode(countryCode);
        }
      });
    };
    obj[0] = obj;
    return obj;
  }, []);
  const effect = React.useEffect(() => () => {
    callback(6978).runAfterInteractions(callback(7016).setCountrySelectorClosed, 400);
  }, []);
  return jsx(NavigationStack.Navigator, { screens, initialRouteName: "COUNTRY_SELECT" });
};
