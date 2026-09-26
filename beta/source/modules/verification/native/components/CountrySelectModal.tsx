// Module ID: 7324
// Function ID: 7325
// Name: CountrySelectModal
// Dependencies: [19, 21, 1115, 5873, 4991, 7325, 7322, 7315, 7353, 7277, 2]
// Exports: default

// Module 7324 (CountrySelectModal)
import util from "util" /* 1115 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4991 */;
import NavigatorHeader from "NavigatorHeader" /* 5873 */;
import Navigator from "Navigator" /* 7277 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/verification/native/components/CountrySelectModal.tsx");

export default function CountrySelectModal() {
  const screens = noop.useMemo(() => {
    const obj = { COUNTRY_SELECT: null };
    const obj2 = { title: null, headerLeft: null, render: null };
    const intl = util.intl;
    obj2.title = intl.string(util.t.gzXECH);
    obj2.headerLeft = NavigatorHeader.getHeaderCloseButton(ModalActionCreatorsDefault.pop);
    obj2.render = function render() {
      return closure_1_4(closure_1_1(dependencyMap[5]), {
        onClose() {
          return closure_1_1(4991).pop();
        },
        onCountrySelected(countryCode) {
          return closure_1_1(7322).setCountryCode(countryCode);
        }
      });
    };
    obj.COUNTRY_SELECT = obj2;
    return obj;
  }, []);
  const effect = noop.useEffect(() => () => {
    closure_1_1(7315).runAfterInteractions(closure_1_1(7353).setCountrySelectorClosed, 400);
  }, []);
  return jsx(Navigator.Navigator, { screens, initialRouteName: "COUNTRY_SELECT" });
};
