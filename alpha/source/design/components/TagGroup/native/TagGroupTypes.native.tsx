// Module ID: 12527
// Function ID: 12528
// Name: TagGroupTypes
// Dependencies: [12528, 575, 2]
// Exports: getTagBorderRadius, getTagGap, getTagGraphicDimension, getTagHorizontalPadding, getTagIconSize, getTagMinHeight, getTagTextVariant, getTagVerticalPadding

// Module 12527 (TagGroupTypes)
import nativeDefault from "native" /* 575 */;
import TagGroupShared from "TagGroupShared" /* 12528 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("design/components/TagGroup/native/TagGroupTypes.native.tsx");

export const DEFAULT_INLINE_TAG_GROUP_SIZE = TagGroupShared.DEFAULT_INLINE_TAG_GROUP_SIZE;
export const DEFAULT_TAG_GROUP_SIZE = TagGroupShared.DEFAULT_TAG_GROUP_SIZE;
export const getDefaultTagGroupSize = TagGroupShared.getDefaultTagGroupSize;
export const EXTRA_SMALL_TAG_HEIGHT = 24;
export const SMALL_TAG_HEIGHT = 30;
export const MEDIUM_TAG_HEIGHT = 40;
export const TAG_BORDER_WIDTH = 1;
export function getTagMinHeight(arg0) {
  if ("xs" === arg0) {
    return 24;
  } else if ("sm" === arg0) {
    return 30;
  } else if ("md" === arg0) {
    return 40;
  }
}
export function getTagTextVariant(arg0) {
  const obj = TagGroupShared;
  return obj.getTagTextVariant(arg0);
}
export function getTagIconSize(arg0) {
  const obj = TagGroupShared;
  return obj.getTagIconSize(arg0);
}
export function getTagGraphicDimension(size) {
  let num = 12;
  if ("md" === size) {
    num = 16;
  }
  return num;
}
export function getTagBorderRadius(arg0, arg1) {
  let xs;
  if ("filter" === arg1) {
    xs = nativeDefault.radii.round;
  } else if ("md" === arg0) {
    xs = nativeDefault.radii.sm;
  } else {
    xs = nativeDefault.radii.xs;
  }
  return xs;
}
export function getTagHorizontalPadding(arg0) {
  let PX_8;
  if ("md" === arg0) {
    PX_8 = nativeDefault.space.PX_12;
  } else {
    PX_8 = nativeDefault.space.PX_8;
  }
  return PX_8;
}
export function getTagGap(arg0) {
  let PX_4;
  if ("md" === arg0) {
    PX_4 = nativeDefault.space.PX_8;
  } else {
    PX_4 = nativeDefault.space.PX_4;
  }
  return PX_4;
}
export function getTagVerticalPadding(arg0) {
  let num = 0;
  if ("xs" !== arg0) {
    num = nativeDefault.space.PX_4;
  }
  return num;
}
