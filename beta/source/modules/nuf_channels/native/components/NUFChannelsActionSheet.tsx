// Module ID: 13312
// Function ID: 13313
// Name: NUFChannelsActionSheet
// Dependencies: [19, 2042, 21, 4800, 6571, 13313, 13314, 1115, 2]
// Exports: default

// Module 13312 (NUFChannelsActionSheet)
import Fragment from "Fragment" /* 21 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import NUFTemplateV2Default from "NUFTemplateV2" /* 13313 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let BottomSheet;

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
  BottomSheet = markAsDismissed(6571).BottomSheet;
  ({ illustration: null, title: intl.string(markAsDismissed(1115).t.Ay9424), description: intl2.string(markAsDismissed(1115).t.mufH2P), CTALabel: intl3.string(markAsDismissed(1115).t.BddRzS), onCTAPress: callback });
  const tmp2 = NUFTemplateV2Default;
  intl = markAsDismissed(1115).intl;
  intl2 = markAsDismissed(1115).intl;
  intl3 = markAsDismissed(1115).intl;
  return <BottomSheet onDismiss={function onDismiss() {
    let tmpResult;
    if (markAsDismissed != null) {
      tmpResult = tmp(ContentDismissActionType.UNKNOWN);
    }
    return tmpResult;
  }} startExpanded>{null}</BottomSheet>;
};
