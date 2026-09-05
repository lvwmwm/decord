// Module ID: 15672
// Function ID: 15673
// Name: BackButton
// Dependencies: [21, 1483, 15673, 1114, 15667, 2]
// Exports: default

// Module 15672 (BackButton)
import set from "set" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import MFAButtonDefault from "MFAButton" /* 15673 */;

const jsx = jsxProd.jsx;
const result = set.fileFinishedImporting("modules/mfa/native/components/BackButton.tsx");

export default function BackButton(props) {
  props = props.props;
  importDefault = undefined;
  let obj = props(1483);
  importDefault = obj.useNavigation();
  obj = { variant: "secondary", text: null, onPress: null };
  const intl = props(1114).intl;
  obj[1] = intl.string(props(1114).t.Tot4EC);
  obj[2] = function onPress() {

  };
  return jsx(MFAButtonDefault, { variant: "secondary", text: null, onPress: null });
};
