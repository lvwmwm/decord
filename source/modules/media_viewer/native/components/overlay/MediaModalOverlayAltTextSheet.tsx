// Module ID: 10913
// Function ID: 10914
// Name: MediaViewerAltTextSheet
// Dependencies: [19, 21, 4193, 712, 10914, 4724, 5247, 5246, 1236, 4189, 2]
// Exports: default

// Module 10913 (MediaViewerAltTextSheet)
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
  let obj = require(10914) /* useMessagePreviewHeightStore */;
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
  obj[0] = jsx(require(5246) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, { title: null });
  const items = [tmp.container, { minHeight: num }];
  obj[1] = items;
  obj[2] = jsx(require(4189) /* Text */.Text, { accessibilityRole: "text", variant: "text-md/normal", children: children.description });
  return jsx(require(5247) /* Background */.BottomSheet, { title: null });
};
