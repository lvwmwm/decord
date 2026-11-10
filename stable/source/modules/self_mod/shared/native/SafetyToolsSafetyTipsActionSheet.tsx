// Module ID: 11313
// Function ID: 11314
// Name: SafetyToolsSafetyTipsActionSheet
// Dependencies: [19, 17, 11256, 21, 5014, 575, 11304, 1113, 11275, 5624, 2]
// Exports: default

// Module 11313 (SafetyToolsSafetyTipsActionSheet)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import Text_Text from "Text/Text" /* 5624 */;
import Constants from "Constants" /* 11256 */;
import SafetyTipsSectionDefault from "SafetyTipsSection" /* 11275 */;
import SafetyToolsActionSheetWrapperDefault from "SafetyToolsActionSheetWrapper" /* 11304 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
let closure_4 = Constants.getInappropriateConversationsSafetyTips;
const jsx = Fragment.jsx;
const obj = { safetyTipsContainer: obj2 };
obj2 = { marginHorizontal: nativeDefault.space.PX_16 };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/self_mod/shared/native/SafetyToolsSafetyTipsActionSheet.tsx");

export default function SafetyToolsSafetyTipsActionSheet(arg0) {
  let arr;
  let channelId;
  let intl2;
  let onClose;
  let recipientId;
  let warningId;
  let warningType;
  ({ channelId, recipientId, warningId, warningType, onClose } = arg0);
  const tmp = closure_6();
  SafetyToolsActionSheetWrapperDefault;
  const intl = intl3.intl;
  ({ description: intl2.string(intl3.t.DJMZX6), safetyTips: arr.map((children, index) => jsx(Text_Text.Text, { variant: "text-sm/medium", children }, index)) });
  SafetyTipsSectionDefault;
  intl2 = intl3.intl;
  arr = closure_4();
  return <tmp2 hasHeaderBack recipientId={recipientId} warningId={warningId} warningType={warningType} headerTitle={intl.string(intl3.t.EtNxi6)} channelId={channelId} onClose={onClose}>{null}</tmp2>;
};
