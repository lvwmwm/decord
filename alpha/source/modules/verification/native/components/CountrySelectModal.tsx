// Module ID: 7424
// Function ID: 7425
// Name: CountrySelectModal
// Dependencies: [19, 21, 1112, 7095, 6429, 7425, 7422, 7189, 7452, 7092, 2]
// Exports: default

// Module 7424 (CountrySelectModal)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1112 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
import Navigator from "Navigator" /* 7092 */;
import NavigatorHeader from "NavigatorHeader" /* 7095 */;
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
