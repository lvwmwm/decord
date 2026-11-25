// Module ID: 14858
// Function ID: 14859
// Name: NUFChannelsActionSheet
// Dependencies: [19, 4759, 21, 5127, 5141, 14859, 14860, 1112, 2]
// Exports: default

// Module 14858 (NUFChannelsActionSheet)
import Fragment from "Fragment" /* 21 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4759 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import NUFTemplateV2Default from "NUFTemplateV2" /* 14859 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/nuf_channels/native/components/NUFChannelsActionSheet.tsx");

export default function NUFChannelsActionSheet(markAsDismissed) {
  let intl;
  let intl2;
  let intl3;
  markAsDismissed = markAsDismissed.markAsDismissed;
  const items = [markAsDismissed];
  const callback = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    if (markAsDismissed != null) {
      tmp2(ContentDismissActionType.UNKNOWN);
    }
  }, items);
  const BottomSheet = markAsDismissed(5141).BottomSheet;
  ({ illustration: null, title: intl.string(markAsDismissed(1112).t.Ay9424), description: intl2.string(markAsDismissed(1112).t.mufH2P), CTALabel: intl3.string(markAsDismissed(1112).t.BddRzS), onCTAPress: callback });
  const tmp2 = NUFTemplateV2Default;
  intl = markAsDismissed(1112).intl;
  intl2 = markAsDismissed(1112).intl;
  intl3 = markAsDismissed(1112).intl;
  return <BottomSheet onDismiss={function onDismiss() {
    let tmpResult;
    if (markAsDismissed != null) {
      tmpResult = tmp(ContentDismissActionType.UNKNOWN);
    }
    return tmpResult;
  }} startExpanded>{null}</BottomSheet>;
};
