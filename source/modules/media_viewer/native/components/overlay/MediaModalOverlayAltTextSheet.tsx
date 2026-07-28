// Module ID: 10875
// Function ID: 84249
// Name: MediaViewerAltTextSheet
// Dependencies: [31, 33, 4165, 689, 10876, 4698, 5221, 5220, 1212, 4161, 2]
// Exports: default

// Module 10875 (MediaViewerAltTextSheet)
import "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { padding: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaModalOverlayAltTextSheet.tsx");

export default function MediaViewerAltTextSheet(description) {
  let obj = require(10876) /* useMessagePreviewHeightStore */;
  const messagePreviewCollapsedheight = obj.useMessagePreviewCollapsedheight();
  let obj1 = require(4698) /* getIsScreenLandscape */;
  let num = 70;
  if (!obj1.useIsScreenLandscape()) {
    num = messagePreviewCollapsedheight + 20 + 50;
  }
  obj = {};
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.J3IOO1);
  obj.header = jsx(require(5220) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, {});
  const items = [_createForOfIteratorHelperLoose().container, ];
  obj1 = { minHeight: num };
  items[1] = obj1;
  obj.contentStyles = items;
  const obj2 = { accessibilityRole: "text", variant: "text-md/normal", children: description.description };
  obj.children = jsx(require(4161) /* Text */.Text, { accessibilityRole: "text", variant: "text-md/normal", children: description.description });
  return jsx(require(5221) /* Background */.BottomSheet, {});
};
