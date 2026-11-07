// Module ID: 7279
// Function ID: 7280
// Name: CountrySelectModal
// Dependencies: [19, 21, 1113, 7064, 6799, 7280, 7277, 7270, 7307, 7231, 2]
// Exports: default

// Module 7279 (CountrySelectModal)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6799 */;
import NavigatorHeader from "NavigatorHeader" /* 7064 */;
import Navigator from "Navigator" /* 7231 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/verification/native/components/CountrySelectModal.tsx");

export default function CountrySelectModal() {
  const screens = react.useMemo(() => {
    let intl;
    let obj2;
    let obj3;
    let obj = { COUNTRY_SELECT: obj2 };
    obj2 = {
      title: intl.string(intl2.t.gzXECH),
      headerLeft: obj3.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
      render() {
        let obj = {
          onClose() {
            const arr = closure_1_1(closure_1_2[4]);
            return arr.pop();
          },
          onCountrySelected(countryCode) {
            const obj = closure_1_1(closure_1_2[6]);
            return obj.setCountryCode(countryCode);
          }
        };
        return closure_1_4(closure_1_1(closure_1_2[5]), obj);
      }
    };
    intl = intl2.intl;
    obj3 = NavigatorHeader;
    return obj;
  }, []);
  const effect = react.useEffect(() => () => {
    const obj = closure_1_1(closure_1_2[7]);
    obj.runAfterInteractions(closure_1_1(closure_1_2[8]).setCountrySelectorClosed, 400);
  }, []);
  return jsx(Navigator.Navigator, { screens, initialRouteName: "COUNTRY_SELECT" });
};
