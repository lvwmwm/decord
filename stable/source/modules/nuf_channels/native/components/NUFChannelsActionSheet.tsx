// Module ID: 14066
// Function ID: 14067
// Name: NUFChannelsActionSheet
// Dependencies: [19, 2038, 21, 4755, 7427, 14067, 14068, 1115, 2]
// Exports: default

// Module 14066 (NUFChannelsActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4755 */;
import NUFTemplateV2Default from "NUFTemplateV2" /* 14067 */;
import NUFChannelIllustrationDefault from "NUFChannelIllustration" /* 14068 */;
import noop from "module_19" /* 19 */;

const require = fn;
const ContentDismissActionType = fn(2038).ContentDismissActionType;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/nuf_channels/native/components/NUFChannelsActionSheet.tsx");

export default function NUFChannelsActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const items = [markAsDismissed];
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    if (markAsDismissed != null) {
      tmp2(ContentDismissActionType.UNKNOWN);
    }
  }, items);
  const obj = {
    onDismiss() {
      let tmpResult;
      if (markAsDismissed != null) {
        tmpResult = tmp(ContentDismissActionType.UNKNOWN);
      }
      return tmpResult;
    },
    startExpanded: true,
    children: null
  };
  const obj2 = { illustration: jsx(NUFChannelIllustrationDefault, {}), title: null, description: null, CTALabel: null, onCTAPress: null };
  const intl = markAsDismissed(1115).intl;
  obj2.title = intl.string(markAsDismissed(1115).t.Ay9424);
  const intl2 = markAsDismissed(1115).intl;
  obj2.description = intl2.string(markAsDismissed(1115).t.mufH2P);
  const intl3 = markAsDismissed(1115).intl;
  obj2.CTALabel = intl3.string(markAsDismissed(1115).t.BddRzS);
  obj2.onCTAPress = callback;
  obj.children = jsx(NUFTemplateV2Default, { illustration: jsx(NUFChannelIllustrationDefault, {}), title: null, description: null, CTALabel: null, onCTAPress: null });
  return jsx(markAsDismissed(7427).BottomSheet, {
    onDismiss() {
      let tmpResult;
      if (markAsDismissed != null) {
        tmpResult = tmp(ContentDismissActionType.UNKNOWN);
      }
      return tmpResult;
    },
    startExpanded: true,
    children: null
  });
};
