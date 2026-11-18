// Module ID: 11810
// Function ID: 11811
// Name: PinotLazy
// Dependencies: [2, 11811, 11813, 11821, 11836, 11837]

// Module 11810 (PinotLazy)
import useIsPinotChannelLabelVisible from "useIsPinotChannelLabelVisible" /* 11811 */;
import usePinotMemberNotice from "usePinotMemberNotice" /* 11813 */;
import PinotChannelLabel from "PinotChannelLabel" /* 11821 */;
import PinotMemberNoticeBar from "PinotMemberNoticeBar" /* 11836 */;
import PinotMemberNoticeHeaderArrow from "PinotMemberNoticeHeaderArrow" /* 11837 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/pinot/native/PinotLazy.tsx");
const useIsPinotChannelLabelVisible_export = useIsPinotChannelLabelVisible.useIsPinotChannelLabelVisible;
const usePinotMemberNotice_export = usePinotMemberNotice.usePinotMemberNotice;
const PinotChannelLabel_export = PinotChannelLabel.PinotChannelLabel;
const PinotMemberNoticeBar_export = PinotMemberNoticeBar.PinotMemberNoticeBar;
const PinotMemberNoticeHeaderArrow_export = PinotMemberNoticeHeaderArrow.PinotMemberNoticeHeaderArrow;

export { useIsPinotChannelLabelVisible_export as useIsPinotChannelLabelVisible };
export { usePinotMemberNotice_export as usePinotMemberNotice };
export const getPinotChannelLabelText = PinotChannelLabel.getPinotChannelLabelText;
export { PinotChannelLabel_export as PinotChannelLabel };
export { PinotMemberNoticeBar_export as PinotMemberNoticeBar };
export { PinotMemberNoticeHeaderArrow_export as PinotMemberNoticeHeaderArrow };
