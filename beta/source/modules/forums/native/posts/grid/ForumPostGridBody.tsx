// Module ID: 11488
// Function ID: 11489
// Name: ForumPostGridBody
// Dependencies: [32, 19, 17, 21, 4836, 576, 1177, 11489, 11490, 10815, 4832, 1479, 1370, 11491, 6693, 7323, 11495, 2]
// Exports: default

// Module 11488 (ForumPostGridBody)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import Text_Text from "Text/Text" /* 4832 */;
import ForumPostMediaUtils from "ForumPostMediaUtils" /* 7323 */;
import AssetRegistryDefault from "AssetRegistry" /* 10815 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 11489 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 11490 */;
import ForumPostMedia from "ForumPostMedia" /* 11491 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, length;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
function GIFIcon() {
  let tmp;
  const obj = { size: native.Icon.Sizes.CUSTOM, source: AssetRegistryDefault2, disableColor: true, style: tmp.gifIcon };
  tmp = closure_8();
  const Icon = native.Icon;
  return metroRequire(Icon, obj);
}
function PlayIcon() {
  const obj = { size: native.Icon.Sizes.SMALL_20, source: AssetRegistryDefault3, disableColor: true };
  const Icon = native.Icon;
  return metroRequire(Icon, obj);
}
function ExtraMediaIcon(extraMediaCount) {
  extraMediaCount = extraMediaCount.extraMediaCount;
  const tmp = closure_8();
  const obj = { style: tmp.extraMediaCountContainer, children: items };
  const obj2 = { source: AssetRegistryDefault, color: tmp.icon.color, size: native.Icon.Sizes.REFRESH_SMALL_16 };
  const Icon = native.Icon;
  items = [metroRequire(Icon, obj2), ];
  const obj3 = { style: tmp.extraMediaCount, lineClamp: 1, variant: "text-xs/normal", color: "text-default", children: "+" + extraMediaCount };
  const Text = Text_Text.Text;
  items[1] = metroRequire(Text, obj3);
  return metroImportDefault(View, obj);
}
function MediaGridColumn(arg0) {
  let channel;
  let column;
  ({ column, thread: require } = arg0);
  let tmp = closure_8();
  const rowSpacer = tmp;
  const found = column.filter(GlobalUtils.isNotNullish);
  let obj = {
    style: tmp.column,
    children: found.map((media, index) => {
      let tmp2 = index > 0;
      const Fragment = react.Fragment;
      const tmp = metroImportDefault;
      if (tmp2) {
        const obj = { style: rowSpacer.rowSpacer };
        tmp2 = metroRequire(View, obj);
      }
      const obj2 = { children: items };
      items = [tmp2, ];
      const obj3 = { channel: require, media: media.media, targetWidth: media.targetWidth, targetHeight: media.targetHeight };
      items[1] = metroRequire(ForumPostMedia.ForumPostGridMedia, obj3);
      return tmp(Fragment, obj2, "" + require.id + "-" + index);
    })
  };
  return closure_6(View, obj);
}
const View = react_native.View;
let Fragment = Fragment_mod;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { gifIcon: size, container: obj2, wideAspectRatioContainer: { height: 192 }, mediaIconContainer: { paddingLeft: 6 }, headerLeftContainer: { flexDirection: "row", position: "absolute", top: 4, left: 4 }, footerLeftContainer: { flexDirection: "row", position: "absolute", bottom: 4, left: 4, alignItems: "center", justifyContent: "flex-start" }, footerRightContainer: { position: "absolute", bottom: 4, right: 4, alignItems: "center", justifyContent: "flex-start" }, extraMediaCountContainer: obj3, extraMediaCount: { marginLeft: 2 }, grid: obj4, wideAspectRatioGrid: { height: 192 }, column: { flex: 1, flexDirection: "column" }, columnSpacer: { flex: 0, width: 2, height: "100%" }, rowSpacer: { flex: 0, height: 2, width: "100%" }, icon: obj5 };
size = { height: 20, width: 33, backgroundColor: "black", borderRadius: nativeDefault.radii.xs, resizeMode: "cover" };
createStyles = createStyles.createStyles;
obj2 = { position: "relative", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, height: 225 };
obj3 = { flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, height: 24, paddingHorizontal: 8, borderRadius: 20 };
obj4 = { height: 225, flexDirection: "row", borderRadius: nativeDefault.radii.xs, overflow: "hidden" };
obj5 = { color: nativeDefault.colors.TEXT_SUBTLE };
let closure_8 = createStyles(obj);
let items = [[0, 3], [1, 2]];
size = size_mod;
let result = size.fileFinishedImporting("modules/forums/native/posts/grid/ForumPostGridBody.tsx");

export default function ForumPostGridBody(thread) {
  let columnSpacer;
  let containsGif;
  let containsVideo;
  let first;
  let items6;
  let items7;
  let obj10;
  let obj5;
  let tmp5;
  thread = thread.thread;
  const media = thread.media;
  const hasUnreads = thread.hasUnreads;
  let tmp = closure_8();
  dependencyMap = tmp;
  let tmp2 = thread;
  let obj = thread(6693);
  [first, tmp5] = obj.useSomeAppliedTags(thread, 2);
  let tmp15Result = first.length > 0;
  items = [media];
  const memo = react.useMemo(() => media.slice(0, 4), items);
  const bound = Math.max(0, media.length - 4);
  const isMediaPostResult = thread.isMediaPost();
  const width = media(1479)().width;
  const items1 = [memo];
  const memo1 = react.useMemo(() => {
    const substr = items.slice(0, Math.min(memo.length, 2));
    let mapped = substr.map((arr) => {
      const mapped = arr.map((item) => closure_1_0[item]);
      return mapped.filter(memo(width[12]).isNotNullish);
    });
    return mapped.filter((item) => item.length > 0);
  }, items1);
  const items2 = [width, memo1, isMediaPostResult];
  const memo2 = react.useMemo(() => {
    let num = 225;
    if (closure_1) {
      num = 192;
    }
    return memo1.map((arr) => {
      length = arr.filter(memo(width[12]).isNotNullish).length;
      length = length.length;
      return arr.map((media) => {
        const diff = (width - 48) / length - 2 * (length - 1) / length;
        const obj = { media, targetWidth: diff, targetHeight: null };
        const tmp2 = isMediaPostResult;
        if (tmp2) {
          let result;
          if (length < 2) {
            result = diff / 1.7777777777777777;
          }
          obj.targetHeight = result;
          return obj;
        }
        result = num / length - 2 * (length - 1) / length;
      });
    });
  }, items2);
  const items3 = [media];
  const memo3 = react.useMemo(() => {
    const obj = ForumPostMediaUtils;
    return obj.messageContainsGifOrVideo(media);
  }, items3);
  ({ containsVideo, containsGif } = memo3);
  const items4 = [tmp.container, ];
  let obj2 = { style: items4, children: items6 };
  const tmp14 = isMediaPostResult && tmp.wideAspectRatioContainer;
  items4[1] = tmp14;
  const items5 = [tmp.grid, ];
  const tmp16 = isMediaPostResult && tmp.wideAspectRatioGrid;
  let obj3 = {
    style: items5,
    children: memo2.map((column, index) => {
      let tmp2 = index > 0;
      const Fragment = react.Fragment;
      const tmp = metroImportDefault;
      if (tmp2) {
        const obj = { style: columnSpacer.columnSpacer };
        tmp2 = metroRequire(View, obj);
      }
      const obj2 = { children: items };
      items = [tmp2, ];
      const obj3 = { column, thread };
      items[1] = metroRequire(MediaGridColumn, obj3);
      return tmp(Fragment, obj2, "" + column + "-" + index);
    })
  };
  items5[1] = tmp16;
  items6 = [closure_6(View, obj3), , , ];
  if (tmp15Result) {
    const obj4 = { style: tmp.footerLeftContainer, children: closure_6(tmp2(11495).ForumPostAppliedTagPills, obj5) };
    obj5 = { appliedTags: first, additionalTagsCount: tmp5, hasUnreads };
    tmp15Result = tmp15(tmp13, obj4);
  }
  items6[1] = tmp15Result;
  let tmp12Result = containsGif || containsVideo;
  if (tmp12Result) {
    const obj6 = { style: tmp.headerLeftContainer, children: items7 };
    if (containsGif) {
      const obj7 = { style: tmp.mediaIconContainer, children: closure_6(GIFIcon, {}) };
      containsGif = tmp15(tmp13, obj7);
    }
    items7 = [containsGif, ];
    if (containsVideo) {
      const obj8 = { style: tmp.mediaIconContainer, children: closure_6(PlayIcon, {}) };
      containsVideo = tmp15(tmp13, obj8);
    }
    items7[1] = containsVideo;
    tmp12Result = tmp12(tmp13, obj6);
  }
  items6[2] = tmp12Result;
  let tmp15Result2 = 0 !== bound;
  if (tmp15Result2) {
    const obj9 = { style: tmp.footerRightContainer, children: closure_6(ExtraMediaIcon, obj10) };
    obj10 = { extraMediaCount: bound };
    tmp15Result2 = tmp15(tmp13, obj9);
  }
  items6[3] = tmp15Result2;
  return closure_7(View, obj2);
};
export const GRID_HORIZONTAL_PADDING = 48;
