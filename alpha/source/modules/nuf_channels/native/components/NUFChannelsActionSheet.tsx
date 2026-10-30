// Module ID: 15140
// Function ID: 15141
// Name: NUFChannelsActionSheet
// Dependencies: [19, 4855, 21, 5253, 5267, 15141, 15142, 1114, 2]
// Exports: default

// Module 15140 (NUFChannelsActionSheet)
import Fragment from "Fragment" /* 21 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4855 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import NUFTemplateV2Default from "NUFTemplateV2" /* 15141 */;
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
  BottomSheet = markAsDismissed(5267).BottomSheet;
  ({ illustration: null, title: intl.string(markAsDismissed(1114).t.Ay9424), description: intl2.string(markAsDismissed(1114).t.mufH2P), CTALabel: intl3.string(markAsDismissed(1114).t.BddRzS), onCTAPress: callback });
  const tmp2 = NUFTemplateV2Default;
  intl = markAsDismissed(1114).intl;
  intl2 = markAsDismissed(1114).intl;
  intl3 = markAsDismissed(1114).intl;
  return <BottomSheet onDismiss={function onDismiss() {
    let tmpResult;
    if (markAsDismissed != null) {
      tmpResult = tmp(ContentDismissActionType.UNKNOWN);
    }
    return tmpResult;
  }} startExpanded>{null}</BottomSheet>;
};
