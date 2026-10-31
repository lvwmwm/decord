// Module ID: 15179
// Function ID: 15180
// Name: NUFChannelsActionSheet
// Dependencies: [19, 4860, 21, 5258, 5272, 15180, 15181, 1113, 2]
// Exports: default

// Module 15179 (NUFChannelsActionSheet)
import Fragment from "Fragment" /* 21 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4860 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import NUFTemplateV2Default from "NUFTemplateV2" /* 15180 */;
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
  BottomSheet = markAsDismissed(5272).BottomSheet;
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
