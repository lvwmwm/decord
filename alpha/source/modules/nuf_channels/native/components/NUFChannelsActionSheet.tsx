// Module ID: 14768
// Function ID: 14769
// Name: NUFChannelsActionSheet
// Dependencies: [19, 4638, 21, 5006, 5020, 14769, 14770, 1113, 2]
// Exports: default

// Module 14768 (NUFChannelsActionSheet)
import Fragment from "Fragment" /* 21 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4638 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import NUFTemplateV2Default from "NUFTemplateV2" /* 14769 */;
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
  const BottomSheet = markAsDismissed(5020).BottomSheet;
  ({ illustration: null, title: intl.string(markAsDismissed(1113).t.Ay9424), description: intl2.string(markAsDismissed(1113).t.mufH2P), CTALabel: intl3.string(markAsDismissed(1113).t.BddRzS), onCTAPress: callback });
  const tmp2 = NUFTemplateV2Default;
  intl = markAsDismissed(1113).intl;
  intl2 = markAsDismissed(1113).intl;
  intl3 = markAsDismissed(1113).intl;
  return <BottomSheet onDismiss={function onDismiss() {
    let tmpResult;
    if (markAsDismissed != null) {
      tmpResult = tmp(ContentDismissActionType.UNKNOWN);
    }
    return tmpResult;
  }} startExpanded>{null}</BottomSheet>;
};
