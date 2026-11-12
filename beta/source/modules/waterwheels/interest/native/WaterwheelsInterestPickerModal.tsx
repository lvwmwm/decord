// Module ID: 18797
// Function ID: 18798
// Name: WaterwheelsInterestPickerModal
// Dependencies: [19, 17, 1072, 21, 5170, 5347, 18798, 18801, 9031, 6831, 18802, 1113, 2534, 2]

// Module 18797 (WaterwheelsInterestPickerModal)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import RootNavigationRef from "RootNavigationRef" /* 5347 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6831 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 9031 */;
import InterestPickerActionCreators from "InterestPickerActionCreators" /* 18801 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

class WaterwheelsInterestPickerModal {
  constructor() {
    let callback;
    let closure_0;
    let intl;
    let intl2;
    let onSkip;
    let ref;
    const tmp = closure_7();
    const tmp4 = require("useInterestPickerCatalog")("WaterwheelsInterestPickerModal");
    _require = tmp4;
    importDefault = react.useRef(false);
    onSkip = react.useCallback((gameIds) => {
      if (!ref.current) {
        tmp.current = true;
        const obj = InterestPickerActionCreators;
        const result = obj.setInterestPickerPicks(gameIds);
        const obj2 = InterestPickerActionCreators;
        const result1 = obj2.markInterestPickerSeen();
        const obj3 = ICYMIActionCreatorsDefault;
        const dehydrated = obj3.fetchDehydrated({ isDiscoverPickerCommit: true });
        const obj4 = ModalActionCreatorsDefault;
        obj4.popWithKey(c6);
        const obj5 = RootNavigationRef;
        const rootNavigationRef = obj5.getRootNavigationRef();
        if (null != rootNavigationRef) {
          const obj6 = { screen: "icymi-screen", params: { inNestedNavigator: true } };
          rootNavigationRef.navigate("icymi", obj6);
        }
      }
    }, []);
    const items = [tmp4, onSkip];
    const effect = react.useEffect(() => {
      if (null == closure_0) {
        callback([]);
      }
    }, items);
    let tmp7 = null;
    if (null != tmp4) {
      let obj2 = { catalog: tmp4, title: intl.string(tmp2(tmp3[12])["5MUKTF"]), subtitle: intl2.string(tmp2(tmp3[12])["z/57xV"]), minSelection: 1, onContinue: onSkip, onSkip };
      require("InterestGamePicker");
      intl = require("intl").intl;
      intl2 = require("intl").intl;
      tmp7 = <View style={tmp.screen}>{null}</View>;
    }
    return tmp7;
  }
}
const View = react_native.View;
const ModalAnimation = Constants.ModalAnimation;
const jsx = Fragment.jsx;
let c6 = "waterwheels-interest-picker-modal";
const metroImportDefault = createStyles.createStyles({ screen: { flex: 1 } });
WaterwheelsInterestPickerModal.modalConfig = { animation: ModalAnimation.SLIDE_IN_OUT };
let result = size.fileFinishedImporting("modules/waterwheels/interest/native/WaterwheelsInterestPickerModal.tsx");

export default WaterwheelsInterestPickerModal;
export const WATERWHEELS_INTEREST_PICKER_MODAL_KEY = "waterwheels-interest-picker-modal";
