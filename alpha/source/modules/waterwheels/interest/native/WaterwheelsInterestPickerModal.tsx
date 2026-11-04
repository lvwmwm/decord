// Module ID: 18665
// Function ID: 18666
// Name: WaterwheelsInterestPickerModal
// Dependencies: [19, 17, 1072, 21, 5141, 5323, 18666, 18669, 6879, 18670, 1113, 2537, 2]

// Module 18665 (WaterwheelsInterestPickerModal)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

class WaterwheelsInterestPickerModal {
  constructor() {
    let callback;
    let closure_0;
    let intl;
    let intl2;
    let onSkip;
    const tmp = closure_7();
    const tmp4 = onSkip(18666)("WaterwheelsInterestPickerModal");
    _require = tmp4;
    onSkip = react.useCallback((gameIds) => {
      const obj = closure_0(dependencyMap[7]);
      const result = obj.setInterestPickerPicks(gameIds);
      const obj2 = closure_0(dependencyMap[7]);
      const result1 = obj2.markInterestPickerSeen();
      const obj3 = callback(dependencyMap[8]);
      obj3.popWithKey(closure_1_6);
      const obj4 = closure_0(dependencyMap[5]);
      const rootNavigationRef = obj4.getRootNavigationRef();
      if (null != rootNavigationRef) {
        const obj5 = { screen: "icymi-screen", params: { inNestedNavigator: true } };
        rootNavigationRef.navigate("icymi", obj5);
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
      let obj2 = { catalog: tmp4, title: intl.string(tmp2(2537)["5MUKTF"]), subtitle: intl2.string(tmp2(2537)["z/57xV"]), minSelection: 1, onContinue: onSkip, onSkip };
      onSkip(18670);
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
