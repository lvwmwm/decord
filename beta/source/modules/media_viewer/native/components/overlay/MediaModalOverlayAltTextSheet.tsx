// Module ID: 10897
// Function ID: 10898
// Name: MediaModalOverlayAltTextSheet
// Dependencies: [19, 21, 4837, 588, 558, 576, 10898, 5439, 6571, 1127, 4833, 6572, 2]

// Module 10897 (MediaModalOverlayAltTextSheet)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 588 */;
import intl2 from "intl" /* 1127 */;
import Text_Text from "Text/Text" /* 4833 */;
import useIsScreenLandscape from "useIsScreenLandscape" /* 5439 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6572 */;
import useMessagePreviewHeight from "useMessagePreviewHeight" /* 10898 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet, description;

let obj2;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { padding: nativeDefault.space.PX_16 };
let closure_3 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((description) => {
  let first;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(11);
  description = description.description;
  const tmp4 = closure_3();
  const obj2 = useMessagePreviewHeight;
  const messagePreviewCollapsedheight = obj2.useMessagePreviewCollapsedheight();
  let num = 70;
  const obj3 = useIsScreenLandscape;
  if (!obj3.useIsScreenLandscape()) {
    num = messagePreviewCollapsedheight + 20 + 50;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const BottomSheetTitleHeader = tmp(6571).BottomSheetTitleHeader;
    const intl = tmp(1127).intl;
    const tmp8 = <BottomSheetTitleHeader title={intl.string(intl2.t.J3IOO1)} />;
    cResult[0] = tmp8;
    first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== num) {
    const obj5 = { minHeight: num };
    cResult[1] = num;
    cResult[2] = obj5;
    tmp9 = obj5;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === tmp4.container) {
    let tmp10;
    let tmp11;
    if (cResult[4] === tmp9) {
      tmp10 = cResult[5];
    }
    if (cResult[6] !== description) {
      const tmp13 = jsx(Text_Text.Text, { accessibilityRole: "text", variant: "text-md/normal", children: description });
      cResult[6] = description;
      cResult[7] = tmp13;
      tmp11 = tmp13;
    } else {
      tmp11 = cResult[7];
    }
    if (cResult[8] === tmp10) {
      let tmp14;
      if (cResult[9] === tmp11) {
        tmp14 = cResult[10];
      }
      return tmp14;
    }
    const tmp16 = jsx(Sheet_BottomSheet.BottomSheet, { header: first, contentStyles: tmp10, children: tmp11 });
    cResult[8] = tmp10;
    cResult[9] = tmp11;
    cResult[10] = tmp16;
    tmp14 = tmp16;
  }
  const items = [tmp4.container, tmp9];
  cResult[3] = tmp4.container;
  cResult[4] = tmp9;
  cResult[5] = items;
  tmp10 = items;
}) : ((description) => {
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
  BottomSheet = tmp2(6572).BottomSheet;
  ({ title: intl.string(intl2.t.J3IOO1) });
  const BottomSheetTitleHeader = tmp2(6571).BottomSheetTitleHeader;
  intl = tmp2(1127).intl;
  const items = [tmp.container, { minHeight: num }];
  return <BottomSheet header={null} contentStyles={items}>{null}</BottomSheet>;
});
const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaModalOverlayAltTextSheet.tsx");

export default tmp3;
