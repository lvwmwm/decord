// Module ID: 15227
// Function ID: 15228
// Name: SelectScreen
// Dependencies: [19, 17, 15224, 21, 4836, 5994, 8055, 6363, 1485, 6544, 4832, 1115, 2]
// Exports: default

// Module 15227 (SelectScreen)
import react_native from "react-native" /* 17 */;
import NavigatorConstants from "NavigatorConstants" /* 5994 */;
import useWideAuthViewDefault from "useWideAuthView" /* 6363 */;
import RowButton from "RowButton" /* 8055 */;
import MFAConstants from "MFAConstants" /* 15224 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_1, importDefault;

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
const SELECT_NAMES = MFAConstants.SELECT_NAMES;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles((arg0) => {
  let diff;
  const obj = { container: { marginLeft: 16, marginRight: 16 }, selectContainer: { marginTop: diff, marginLeft: 16, marginRight: 16, display: "flex", alignItems: "center" } };
  const NAV_BAR_HEIGHT = NavigatorConstants.NAV_BAR_HEIGHT;
  const tmp3 = arg0;
  if (tmp3) {
    diff = NAV_BAR_HEIGHT;
  } else {
    diff = NAV_BAR_HEIGHT - NavigatorConstants.STATUS_BAR_HEIGHT;
  }
  return obj;
});
const result = size.fileFinishedImporting("modules/mfa/native/screens/SelectScreen.tsx");

export default function SelectScreen(mfaChallenge) {
  let intl;
  let intl2;
  let items;
  let items1;
  let methods;
  _require = mfaChallenge;
  const tmp = useWideAuthViewDefault();
  const tmp2 = closure_7(tmp);
  let obj = require("useNavigation");
  importDefault = obj.useNavigation();
  const obj2 = { top: !tmp, style: tmp2.container, children: items1 };
  const obj3 = { style: tmp2.selectContainer, children: items };
  const SafeAreaPaddingView = require("common/SafeAreaView").SafeAreaPaddingView;
  const obj4 = { variant: "heading-xl/extrabold", children: intl.string(require("intl").t.S9b9bX) };
  const Heading = require("Text/Text").Heading;
  intl = require("intl").intl;
  items = [closure_5(Heading, obj4), ];
  const obj5 = { variant: "text-sm/medium", children: intl2.string(require("intl").t.Jz1lXO) };
  const Text = require("Text/Text").Text;
  intl2 = require("intl").intl;
  items[1] = closure_5(Text, obj5);
  items1 = [closure_6(View, obj3), ];
  const obj6 = {
    style: { marginTop: 16, gap: 8 },
    children: methods.map((type) => {
      closure_1 = type;
      let closure_2 = closure_1;
      const obj = {
        label: SELECT_NAMES[type.type],
        onPress() {
          closure_2.push(type.type, closure_0);
        }
      };
      return hasOwnProperty(RowButton.RowButton, obj, type.type);
    })
  };
  methods = mfaChallenge.mfaChallenge.methods;
  items1[1] = closure_5(View, obj6);
  return closure_6(SafeAreaPaddingView, obj2);
};
