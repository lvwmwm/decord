// Module ID: 11531
// Function ID: 11532
// Name: MediaModalOverlayAltTextSheet
// Dependencies: [19, 21, 5009, 575, 11532, 8765, 5267, 7315, 1114, 5619, 2]
// Exports: default

// Module 11531 (MediaModalOverlayAltTextSheet)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1114 */;
import useIsScreenLandscape from "useIsScreenLandscape" /* 8765 */;
import useMessagePreviewHeight from "useMessagePreviewHeight" /* 11532 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
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
  BottomSheet = tmp2(5267).BottomSheet;
  ({ title: intl.string(intl2.t.J3IOO1) });
  const BottomSheetTitleHeader = tmp2(7315).BottomSheetTitleHeader;
  intl = tmp2(1114).intl;
  const items = [tmp.container, { minHeight: num }];
  return <BottomSheet header={null} contentStyles={items}>{null}</BottomSheet>;
};
