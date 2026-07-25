// Module ID: 9169
// Function ID: 71965
// Name: CountrySelectModal
// Dependencies: [31, 33, 1212, 5087, 4338, 9170, 9167, 5582, 9189, 5517, 2]
// Exports: default

// Module 9169 (CountrySelectModal)
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("getSystemLocale").fileFinishedImporting("modules/verification/native/components/CountrySelectModal.tsx");

export default function CountrySelectModal() {
  const screens = React.useMemo(() => (function getScreens() {
    let obj = {};
    obj = {};
    const intl = outer2_0(outer2_2[2]).intl;
    obj.title = intl.string(outer2_0(outer2_2[2]).t.gzXECH);
    obj.headerLeft = outer2_0(outer2_2[3]).getHeaderCloseButton(outer2_1(outer2_2[4]).pop);
    obj.render = function render() {
      return outer3_4(outer3_1(outer3_2[5]), {
        onClose() {
          return outer4_1(outer4_2[4]).pop();
        },
        onCountrySelected(countryCode) {
          return outer4_1(outer4_2[6]).setCountryCode(countryCode);
        }
      });
    };
    obj.COUNTRY_SELECT = obj;
    return obj;
  })(), []);
  const effect = React.useEffect(() => () => {
    outer2_1(outer2_2[7]).runAfterInteractions(outer2_1(outer2_2[8]).setCountrySelectorClosed, 400);
  }, []);
  return jsx(require(5517) /* NavigationStack */.Navigator, { screens, initialRouteName: "COUNTRY_SELECT" });
};
