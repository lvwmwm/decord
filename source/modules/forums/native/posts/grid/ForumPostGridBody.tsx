// Module ID: 11130
// Function ID: 86618
// Name: GIFIcon
// Dependencies: [57, 31, 27, 33, 4130, 689, 1273, 11131, 11132, 9854, 4126, 1450, 1327, 11133, 5654, 8328, 11137, 2]
// Exports: default

// Module 11130 (GIFIcon)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
function GIFIcon() {
  const obj = { size: require(1273) /* Button */.Icon.Sizes.CUSTOM, source: importDefault(11131), disableColor: true, style: _createForOfIteratorHelperLoose().gifIcon };
  return callback2(require(1273) /* Button */.Icon, obj);
}
function PlayIcon() {
  const obj = { size: require(1273) /* Button */.Icon.Sizes.SMALL_20, source: importDefault(11132), disableColor: true };
  return callback2(require(1273) /* Button */.Icon, obj);
}
function ExtraMediaIcon(extraMediaCount) {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.extraMediaCountContainer };
  obj = { source: importDefault(9854), color: tmp.icon.color, size: require(1273) /* Button */.Icon.Sizes.REFRESH_SMALL_16 };
  const items = [callback2(require(1273) /* Button */.Icon, obj), ];
  obj = { style: tmp.extraMediaCount, lineClamp: 1, variant: "text-xs/normal", color: "text-default", children: "+" + extraMediaCount.extraMediaCount };
  items[1] = callback2(require(4126) /* Text */.Text, obj);
  obj.children = items;
  return callback3(View, obj);
}
function MediaGridColumn(arg0) {
  let column;
  let require;
  ({ column, thread: require } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  const importDefault = tmp;
  const found = column.filter(require(1327) /* isDiscordFrontendDevelopment */.isNotNullish);
  return callback2(View, {
    style: tmp.column,
    children: found.map((media) => {
      let obj = {};
      let tmp2 = arg1 > 0;
      if (tmp2) {
        obj = { style: tmp.rowSpacer };
        tmp2 = outer1_6(outer1_5, obj);
      }
      const items = [tmp2, ];
      obj = { channel: id, media: media.media, targetWidth: media.targetWidth, targetHeight: media.targetHeight };
      items[1] = outer1_6(outer1_0(outer1_2[13]).ForumPostGridMedia, obj);
      obj.children = items;
      return outer1_7(outer1_4.Fragment, obj, "" + id.id + "-" + arg1);
    })
  });
}
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { height: 20, width: 33, backgroundColor: "black", borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, resizeMode: "cover" };
_createForOfIteratorHelperLoose.gifIcon = _createForOfIteratorHelperLoose;
let obj1 = { position: "relative", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, height: 225 };
_createForOfIteratorHelperLoose.container = obj1;
_createForOfIteratorHelperLoose.wideAspectRatioContainer = { height: 192 };
_createForOfIteratorHelperLoose.mediaIconContainer = { paddingLeft: 6 };
_createForOfIteratorHelperLoose.headerLeftContainer = { flexDirection: "row", position: "absolute", top: 4, left: 4 };
_createForOfIteratorHelperLoose.footerLeftContainer = { flexDirection: "row", position: "absolute", bottom: 4, left: 4, alignItems: "center", justifyContent: "flex-start" };
_createForOfIteratorHelperLoose.footerRightContainer = { position: "absolute", bottom: 4, right: 4, alignItems: "center", justifyContent: "flex-start" };
let obj2 = { flexDirection: "row", alignItems: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, height: 24, paddingHorizontal: 8, borderRadius: 20 };
_createForOfIteratorHelperLoose.extraMediaCountContainer = obj2;
_createForOfIteratorHelperLoose.extraMediaCount = { marginLeft: 2 };
let obj3 = { height: 225, flexDirection: "row", borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, overflow: "hidden" };
_createForOfIteratorHelperLoose.grid = obj3;
_createForOfIteratorHelperLoose.wideAspectRatioGrid = { height: 192 };
_createForOfIteratorHelperLoose.column = { flex: 1, flexDirection: "column" };
_createForOfIteratorHelperLoose.columnSpacer = { flex: 0, width: 2, height: "100%" };
_createForOfIteratorHelperLoose.rowSpacer = { flex: 0, height: 2, width: "100%" };
_createForOfIteratorHelperLoose.icon = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let items = [[0, 3], [1, 2]];
let obj4 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/forums/native/posts/grid/ForumPostGridBody.tsx");

export default function ForumPostGridBody(thread) {
  let containsGif;
  let containsVideo;
  thread = thread.thread;
  const media = thread.media;
  const tmp = _createForOfIteratorHelperLoose();
  const dependencyMap = tmp;
  let obj = thread(5654);
  let tmp2 = callback(obj.useSomeAppliedTags(thread, 2), 2);
  const first = tmp2[0];
  let tmp3 = first.length > 0;
  let items = [media];
  let memo = React.useMemo(() => media.slice(0, 4), items);
  const bound = Math.max(0, media.length - 4);
  let wideAspectRatioGrid = thread.isMediaPost();
  let items1 = [media];
  const memo1 = React.useMemo(() => thread(tmp[15]).messageContainsGifOrVideo(media), items1);
  ({ containsVideo, containsGif } = memo1);
  obj = {};
  const items2 = [tmp.container, ];
  let wideAspectRatioContainer = wideAspectRatioGrid;
  if (wideAspectRatioGrid) {
    wideAspectRatioContainer = tmp.wideAspectRatioContainer;
  }
  items2[1] = wideAspectRatioContainer;
  obj.style = items2;
  obj = {};
  const items3 = [tmp.grid, ];
  if (wideAspectRatioGrid) {
    wideAspectRatioGrid = tmp.wideAspectRatioGrid;
  }
  items3[1] = wideAspectRatioGrid;
  obj.style = items3;
  obj.children = (function useMediaGridLayout(memo, wideAspectRatioGrid) {
    let closure_0 = memo;
    let closure_1 = wideAspectRatioGrid;
    const width = media(tmp[11])().width;
    const items = [memo];
    memo = outer1_4.useMemo(() => {
      const substr = outer2_9.slice(0, Math.min(memo.length, 2));
      let mapped = substr.map((arr) => {
        const mapped = arr.map((arg0) => outer2_0[arg0]);
        return mapped.filter(thread(table[12]).isNotNullish);
      });
      return mapped.filter((arg0) => arg0.length > 0);
    }, items);
    const items1 = [width, memo, wideAspectRatioGrid];
    return outer1_4.useMemo(() => {
      let num = 225;
      if (closure_1) {
        num = 192;
      }
      return memo.map((arr) => {
        arr.filter(thread(table[12]).isNotNullish).length;
        return arr.map((media) => {
          const diff = (outer2_2 - 48) / length - 2 * (length - 1) / length;
          const obj = { media, targetWidth: diff };
          if (outer2_1) {
            if (length < 2) {
              let result = diff / 1.7777777777777777;
            }
            obj.targetHeight = result;
            return obj;
          }
          result = length / length - 2 * (length - 1) / length;
        });
      });
    }, items1);
  })(memo, wideAspectRatioGrid).map((column) => {
    let obj = {};
    let tmp2 = arg1 > 0;
    if (tmp2) {
      obj = { style: tmp.columnSpacer };
      tmp2 = outer1_6(outer1_5, obj);
    }
    const items = [tmp2, ];
    obj = { column, thread };
    items[1] = outer1_6(outer1_13, obj);
    obj.children = items;
    return outer1_7(outer1_4.Fragment, obj, "" + column + "-" + arg1);
  });
  const items4 = [callback2(View, obj), , , ];
  if (tmp3) {
    const obj1 = { style: tmp.footerLeftContainer };
    const obj2 = { appliedTags: first, additionalTagsCount: tmp2[1], hasUnreads: thread.hasUnreads };
    obj1.children = callback2(thread(11137).ForumPostAppliedTagPills, obj2);
    tmp3 = callback2(View, obj1);
  }
  items4[1] = tmp3;
  let tmp17Result = containsGif;
  if (!containsGif) {
    tmp17Result = containsVideo;
  }
  if (tmp17Result) {
    const obj3 = { style: tmp.headerLeftContainer };
    if (containsGif) {
      const obj4 = { style: tmp.mediaIconContainer, children: callback2(GIFIcon, {}) };
      containsGif = callback2(View, obj4);
    }
    const items5 = [containsGif, ];
    if (containsVideo) {
      const obj5 = { style: tmp.mediaIconContainer, children: callback2(PlayIcon, {}) };
      containsVideo = callback2(View, obj5);
    }
    items5[1] = containsVideo;
    obj3.children = items5;
    tmp17Result = closure_7(View, obj3);
    const tmp17 = closure_7;
    const tmp18 = View;
  }
  items4[2] = tmp17Result;
  let tmp27 = 0 !== bound;
  if (tmp27) {
    const obj6 = { style: tmp.footerRightContainer };
    const obj7 = { extraMediaCount: bound };
    obj6.children = callback2(ExtraMediaIcon, obj7);
    tmp27 = callback2(View, obj6);
  }
  items4[3] = tmp27;
  obj.children = items4;
  return closure_7(View, obj);
};
export const GRID_HORIZONTAL_PADDING = 48;
