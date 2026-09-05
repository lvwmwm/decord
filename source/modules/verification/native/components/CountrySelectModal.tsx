// Module ID: 7047
// Function ID: 7048
// Name: CountrySelectModal
// Dependencies: [19, 21, 1114, 5624, 4763, 7048, 7045, 7038, 7076, 7000, 2]
// Exports: default

// Module 7047 (CountrySelectModal)
import NavigationStack from "NavigationStack" /* 7000 */;
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/verification/native/components/CountrySelectModal.tsx");

export default function CountrySelectModal() {
  const screens = React.useMemo(() => {
    let obj = { COUNTRY_SELECT: null };
    obj = { title: null, headerLeft: null, render: null };
    const intl = callback(1114).intl;
    obj[0] = intl.string(callback(1114).t.gzXECH);
    obj[1] = callback(5624).getHeaderCloseButton(callback2(4763).pop);
    obj[2] = function render() {
      return callback2(callback(table[5]), {
        onClose() {
          return callback(4763).pop();
        },
        onCountrySelected(countryCode) {
          return callback(7045).setCountryCode(countryCode);
        }
      });
    };
    obj[0] = obj;
    return obj;
  }, []);
  const effect = React.useEffect(() => () => {
    callback(7038).runAfterInteractions(callback(7076).setCountrySelectorClosed, 400);
  }, []);
  return jsx(NavigationStack.Navigator, { screens, initialRouteName: "COUNTRY_SELECT" });
};
