// Module ID: 10980
// Function ID: 10981
// Name: MediaViewerAltTextSheet
// Dependencies: [19, 21, 4342, 712, 10981, 4890, 5437, 5436, 1236, 4338, 2]
// Exports: default

// Module 10980 (MediaViewerAltTextSheet)
import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { container: null };
createCacheKey = { padding: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("createCacheKey").fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaModalOverlayAltTextSheet.tsx");

export default function MediaViewerAltTextSheet(children) {
  let obj = require(10981) /* useMessagePreviewHeightStore */;
  const messagePreviewCollapsedheight = obj.useMessagePreviewCollapsedheight();
  const tmp = createCacheKey();
  let num = 70;
  if (!obj2.useIsScreenLandscape()) {
    num = messagePreviewCollapsedheight + 20 + 50;
  }
  obj = { header: null, contentStyles: null, children: null };
  obj = { title: null };
  const intl = tmp2(1236).intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t.J3IOO1);
  obj[0] = jsx(require(5436) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, { title: null });
  const items = [tmp.container, { minHeight: num }];
  obj[1] = items;
  obj[2] = jsx(require(4338) /* Text */.Text, { accessibilityRole: "text", variant: "text-md/normal", children: children.description });
  return jsx(require(5437) /* Background */.BottomSheet, { title: null });
};
