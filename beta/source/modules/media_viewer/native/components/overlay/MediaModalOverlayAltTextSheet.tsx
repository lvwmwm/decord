// Module ID: 11030
// Function ID: 11031
// Name: MediaModalOverlayAltTextSheet
// Dependencies: [19, 21, 4836, 576, 11031, 5438, 6571, 6570, 1115, 4832, 2]
// Exports: default

// Module 11030 (MediaModalOverlayAltTextSheet)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import useIsScreenLandscape from "useIsScreenLandscape" /* 5438 */;
import useMessagePreviewHeight from "useMessagePreviewHeight" /* 11031 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let obj2;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { padding: nativeDefault.space.PX_16 };
let closure_3 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaModalOverlayAltTextSheet.tsx");

export default function MediaViewerAltTextSheet(description) {
  let intl;
  description = description.description;
  const tmp = closure_3();
  const obj = useMessagePreviewHeight;
  const messagePreviewCollapsedheight = obj.useMessagePreviewCollapsedheight();
  let num = 70;
  const obj2 = useIsScreenLandscape;
  if (!obj2.useIsScreenLandscape()) {
    num = messagePreviewCollapsedheight + 20 + 50;
  }
  BottomSheet = tmp2(6571).BottomSheet;
  ({ title: intl.string(intl2.t.J3IOO1) });
  const BottomSheetTitleHeader = tmp2(6570).BottomSheetTitleHeader;
  intl = tmp2(1115).intl;
  const items = [tmp.container, { minHeight: num }];
  return <BottomSheet header={null} contentStyles={items}>{null}</BottomSheet>;
};
