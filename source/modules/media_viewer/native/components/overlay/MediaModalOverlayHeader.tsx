// Module ID: 12262
// Function ID: 95768
// Name: MediaModalOverlayHeader
// Dependencies: [31, 27, 33, 4130, 5084, 12259, 8349, 9573, 3991, 5121, 12263, 1212, 5119, 1273, 689, 4126, 12264, 9338, 477, 12265, 9007, 2]
// Exports: MediaModalOverlayHeader

// Module 12262 (MediaModalOverlayHeader)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
const require = arg1;
({ StyleSheet: closure_3, View: closure_4 } = get_ActivityIndicator);
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, alignItems: "center", flexDirection: "row", height: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT, paddingHorizontal: 6, justifyContent: "space-between" };
_createForOfIteratorHelperLoose.navbarInner = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.navbarLeft = { flexShrink: 1, flexDirection: "row", marginRight: 8 };
_createForOfIteratorHelperLoose.navbarRight = { flexShrink: 0, justifyContent: "flex-end", flexDirection: "row", gap: 8 };
_createForOfIteratorHelperLoose.navbarName = { flexShrink: 1, alignItems: "center", height: 40, marginLeft: 8 };
_createForOfIteratorHelperLoose.navbarNameInner = { borderRadius: 20, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0, 0, 0, 0.7)", flex: 1, flexDirection: "row", paddingHorizontal: 18 };
_createForOfIteratorHelperLoose.navbarNameShrinkWrapper = { flexShrink: 1 };
_createForOfIteratorHelperLoose.contextIcon = { width: 18, height: 18, marginRight: 6 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaModalOverlayHeader.tsx");

export const MediaModalOverlayHeader = function MediaModalOverlayHeader(arg0) {
  let animationDriver;
  let channelId;
  let contextIcon;
  let contextName;
  let disableDownload;
  let disableMediaOverlayButton;
  let onClose;
  let shareable;
  let source;
  ({ source, contextName, contextIcon } = arg0);
  ({ onClose, disableDownload, disableMediaOverlayButton, shareable, animationDriver, channelId } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(12259) /* useOverlayLayoutDriver */;
  const headerLayoutAnimation = obj.useHeaderLayoutAnimation(animationDriver);
  let obj1 = require(8349) /* useMediaShareActions */;
  const mediaShareActions = obj1.useMediaShareActions({ source, disableDownload, shareable });
  obj = {};
  obj = {};
  let merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj["bottom"] = undefined;
  const items = [obj, headerLayoutAnimation];
  obj.style = items;
  obj1 = { top: true, left: true, right: true, pointerEvents: "box-none" };
  const obj2 = { style: tmp.navbarInner, pointerEvents: "box-none" };
  const obj3 = { style: tmp.navbarLeft };
  const obj4 = {};
  let tmp4 = importDefault(9573)(channelId);
  let intl = require(1212) /* getSystemLocale */.intl;
  obj4.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t.cpT0Cq);
  obj4.icon = callback(require(5119) /* XSmallIcon */.XSmallIcon, { size: "md", color: "interactive-text-active" });
  obj4.onPress = onClose;
  const items1 = [callback(importDefault(12263), obj4), ];
  let tmp11Result = null != contextName;
  if (tmp11Result) {
    const obj5 = { style: tmp.navbarName };
    const obj6 = { style: tmp.navbarNameInner };
    let tmp14 = null != contextIcon;
    if (tmp14) {
      const obj7 = { source: contextIcon, color: importDefault(689).unsafe_rawColors.PRIMARY_345, size: require(1273) /* Button */.Icon.Sizes.CUSTOM, style: tmp.contextIcon };
      tmp14 = callback(require(1273) /* Button */.Icon, obj7);
    }
    const items2 = [tmp14, ];
    const obj8 = { style: tmp.navbarNameShrinkWrapper };
    const obj9 = { accessibilityRole: "header", variant: "heading-md/medium", lineClamp: 1, ellipsizeMode: "tail", color: "text-overlay-light", children: contextName };
    obj8.children = callback(require(4126) /* Text */.Text, obj9);
    items2[1] = callback(closure_4, obj8);
    obj6.children = items2;
    obj5.children = closure_6(closure_4, obj6);
    tmp11Result = callback(tmp12, obj5);
    const tmp11 = callback;
    const tmp13 = closure_6;
  }
  items1[1] = tmp11Result;
  obj3.children = items1;
  const items3 = [closure_6(closure_4, obj3), ];
  let tmp24Result = !tmp4;
  if (tmp24Result) {
    const obj10 = { style: tmp.navbarRight };
    const obj11 = { source };
    const items4 = [callback(importDefault(12264), obj11), ];
    let tmp29 = null;
    if (!disableMediaOverlayButton) {
      const obj12 = {
        items: mediaShareActions,
        children(ref) {
              let obj = Object.create(null);
              obj.ref = 0;
              const merged = Object.assign(ref, obj);
              obj = {};
              const intl = outer1_0(outer1_2[11]).intl;
              obj.accessibilityLabel = intl.string(outer1_0(outer1_2[11]).t.PdRCRg);
              const tmp3 = outer1_5;
              const tmp4 = outer1_1(outer1_2[10]);
              if (obj2.isAndroid()) {
                let tmp5Result = tmp5(tmp6(tmp7[19]).MoreVerticalIcon, { size: "md", color: "interactive-text-active" });
              } else {
                tmp5Result = tmp5(tmp6(tmp7[20]).MoreHorizontalIcon, { size: "md", color: "interactive-text-active" });
              }
              obj.icon = tmp5Result;
              obj.ref = ref.ref;
              const merged1 = Object.assign(merged);
              return tmp3(tmp4, obj);
            }
      };
      tmp29 = callback(require(9338) /* ContextMenu */.ContextMenu, obj12);
    }
    items4[1] = tmp29;
    obj10.children = items4;
    tmp24Result = closure_6(closure_4, obj10);
    const tmp24 = closure_6;
    const tmp25 = closure_4;
  }
  items3[1] = tmp24Result;
  obj2.children = items3;
  obj1.children = closure_6(closure_4, obj2);
  obj.children = callback(require(5121) /* SafeAreaPaddingView */.SafeAreaPaddingView, obj1);
  return callback(importDefault(3991).View, obj);
};
