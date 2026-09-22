// Module ID: 11545
// Function ID: 11546
// Name: SafetyToolsSafetyTipsActionSheet
// Dependencies: [19, 17, 11500, 21, 4636, 576, 11536, 1114, 11513, 4632, 2]
// Exports: default

// Module 11545 (SafetyToolsSafetyTipsActionSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4632 */;
import SafetyTipsSectionDefault from "SafetyTipsSection" /* 11513 */;
import SafetyToolsActionSheetWrapperDefault from "SafetyToolsActionSheetWrapper" /* 11536 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
let closure_4 = fn(11500).getInappropriateConversationsSafetyTips;
const jsx = fn(21).jsx;
const createStyles = fn(4636);
let obj2 = { safetyTipsContainer: { marginHorizontal: nativeDefault.space.PX_16 } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/shared/native/SafetyToolsSafetyTipsActionSheet.tsx");

export default function SafetyToolsSafetyTipsActionSheet(arg0) {
  ({ channelId, recipientId, warningId, warningType, onClose } = arg0);
  const obj = { hasHeaderBack: true, recipientId, warningId, warningType, headerTitle: null, channelId: null, onClose: null, children: null };
  const tmp = closure_6();
  const intl = util.intl;
  obj.headerTitle = intl.string(util.t.EtNxi6);
  obj.channelId = channelId;
  obj.onClose = onClose;
  const obj2 = { style: tmp.safetyTipsContainer, children: null };
  const obj3 = { description: null, safetyTips: null };
  const intl2 = util.intl;
  obj3.description = intl2.string(util.t.DJMZX6);
  obj3.safetyTips = closure_4().map((children, index) => jsx(Text_Text.Text, { variant: "text-sm/medium", children }, index));
  obj2.children = <tmp3 description={null} safetyTips={null} />;
  obj.children = <View style={tmp.safetyTipsContainer}>{null}</View>;
  return <tmp2 hasHeaderBack recipientId={recipientId} warningId={warningId} warningType={warningType} headerTitle={null} channelId={null} onClose={null}>{null}</tmp2>;
};
