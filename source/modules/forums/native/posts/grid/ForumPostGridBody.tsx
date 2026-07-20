// Module ID: 11113
// Function ID: 86520
// Name: GIFIcon
// Dependencies: []
// Exports: default

// Module 11113 (GIFIcon)
function GIFIcon() {
  const obj = { size: arg1(dependencyMap[6]).Icon.Sizes.CUSTOM, source: importDefault(dependencyMap[7]), disableColor: true, style: callback4().gifIcon };
  return callback2(arg1(dependencyMap[6]).Icon, obj);
}
function PlayIcon() {
  const obj = { size: arg1(dependencyMap[6]).Icon.Sizes.SMALL_20, source: importDefault(dependencyMap[8]), disableColor: true };
  return callback2(arg1(dependencyMap[6]).Icon, obj);
}
function ExtraMediaIcon(extraMediaCount) {
  const tmp = callback4();
  let obj = { style: tmp.extraMediaCountContainer };
  obj = { source: importDefault(dependencyMap[9]), color: tmp.icon.color, size: arg1(dependencyMap[6]).Icon.Sizes.REFRESH_SMALL_16 };
  const items = [callback2(arg1(dependencyMap[6]).Icon, obj), ];
  obj = { style: tmp.extraMediaCount, children: "+" + extraMediaCount.extraMediaCount };
  items[1] = callback2(arg1(dependencyMap[10]).Text, obj);
  obj.children = items;
  return callback3(View, obj);
}
function MediaGridColumn(arg0) {
  let column;
  ({ column, thread: closure_0 } = arg0);
  const tmp = callback4();
  const importDefault = tmp;
  const found = column.filter(arg1(dependencyMap[12]).isNotNullish);
  return callback2(View, {
    style: tmp.column,
    children: found.map((media) => {
      let obj = {};
      let tmp2 = arg1 > 0;
      if (tmp2) {
        obj = { style: tmp.rowSpacer };
        tmp2 = callback(closure_5, obj);
      }
      const items = [tmp2, ];
      obj = { channel: lib, media: media.media, targetWidth: media.targetWidth, targetHeight: media.targetHeight };
      items[1] = callback(lib(closure_2[13]).ForumPostGridMedia, obj);
      obj.children = items;
      return closure_7(React.Fragment, obj, "" + lib.id + "-" + arg1);
    })
  });
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { 1525407828: null, -1976334792: "flex-start", 1493721650: 8, 1663813201: 16, 1387291596: "text", borderRadius: importDefault(dependencyMap[5]).radii.xs };
obj.gifIcon = obj;
const obj1 = { type: 1119443281, applicationId: 98202, isInvalidApplication: 146538, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW };
obj.container = obj1;
obj.wideAspectRatioContainer = { height: 192 };
obj.mediaIconContainer = { paddingLeft: 6 };
obj.headerLeftContainer = { <string:2959330403>: true, <string:4249772370>: true, <string:2857788163>: true, <string:2585612642>: true };
obj.footerLeftContainer = { 9223372036854775807: true, 9223372036854775807: true, -9223372036854775808: true, 0: true, 0: true, 9223372036854775807: true };
obj.footerRightContainer = {};
const tmp2 = arg1(dependencyMap[3]);
obj.extraMediaCountContainer = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGH };
obj.extraMediaCount = { marginLeft: 2 };
const obj3 = { GuildBadgeGem: false, PREMIUM_TIER_2_PLANS: false, onPointerEnter: false, contentStyle: false, borderRadius: importDefault(dependencyMap[5]).radii.xs };
obj.grid = obj3;
obj.wideAspectRatioGrid = { height: 192 };
obj.column = {};
obj.columnSpacer = {};
obj.rowSpacer = {};
const obj2 = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGH };
obj.icon = { color: importDefault(dependencyMap[5]).colors.TEXT_SUBTLE };
let closure_8 = obj.createStyles(obj);
const items = [["partySizeText", -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001717915509062969], []];
const obj4 = { color: importDefault(dependencyMap[5]).colors.TEXT_SUBTLE };
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/forums/native/posts/grid/ForumPostGridBody.tsx");

export default function ForumPostGridBody(thread) {
  let containsGif;
  let containsVideo;
  thread = thread.thread;
  const arg1 = thread;
  const media = thread.media;
  const importDefault = media;
  const tmp = callback4();
  const dependencyMap = tmp;
  let obj = arg1(dependencyMap[14]);
  const tmp2 = callback(obj.useSomeAppliedTags(thread, 2), 2);
  const first = tmp2[0];
  let tmp3 = first.length > 0;
  const items = [media];
  const memo = React.useMemo(() => media.slice(0, 4), items);
  const bound = Math.max(0, media.length - 4);
  let wideAspectRatioGrid = thread.isMediaPost();
  const items1 = [media];
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
  obj.children = function useMediaGridLayout(memo, wideAspectRatioGrid) {
    const thread = memo;
    const media = wideAspectRatioGrid;
    const width = media(width[11])().width;
    const items = [memo];
    memo = React.useMemo(() => {
      const substr = arr.slice(0, Math.min(arg0.length, 2));
      const mapped = substr.map((arr) => {
        const mapped = arr.map((arg0) => closure_0[arg0]);
        return mapped.filter(callback(closure_2[12]).isNotNullish);
      });
      return mapped.filter((arg0) => arg0.length > 0);
    }, items);
    const items1 = [width, memo, wideAspectRatioGrid];
    return React.useMemo(() => {
      let num = 225;
      if (arg1) {
        num = 192;
      }
      const arg0 = num;
      return memo.map((arr) => arr.map((media) => {
        const diff = (closure_2 - 48) / length - 2 * (length - 1) / length;
        const obj = { media, targetWidth: diff };
        if (length) {
          if (length < 2) {
            let result = diff / 1.7777777777777777;
          }
          obj.targetHeight = result;
          return obj;
        }
        result = length / length - 2 * (length - 1) / length;
      }));
    }, items1);
  }(memo, wideAspectRatioGrid).map((column) => {
    let obj = {};
    let tmp2 = arg1 > 0;
    if (tmp2) {
      obj = { style: tmp.columnSpacer };
      tmp2 = callback(closure_5, obj);
    }
    const items = [tmp2, ];
    obj = { column, thread };
    items[1] = callback(closure_13, obj);
    obj.children = items;
    return closure_7(React.Fragment, obj, "" + column + "-" + arg1);
  });
  const items4 = [callback2(View, obj), , , ];
  if (tmp3) {
    const obj1 = { style: tmp.footerLeftContainer };
    const obj2 = { appliedTags: first, additionalTagsCount: tmp2[1], hasUnreads: thread.hasUnreads };
    obj1.children = callback2(arg1(dependencyMap[16]).ForumPostAppliedTagPills, obj2);
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
