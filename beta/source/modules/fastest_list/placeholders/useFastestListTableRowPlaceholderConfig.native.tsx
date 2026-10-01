// Module ID: 10327
// Function ID: 10328
// Name: useFastestListTableRowPlaceholderConfig
// Dependencies: [19, 4836, 576, 1177, 5753, 6483, 2]
// Exports: default

// Module 10327 (useFastestListTableRowPlaceholderConfig)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import LegacyTokens from "LegacyTokens" /* 5753 */;
import FastestListPropsPlaceholder from "FastestListPropsPlaceholder" /* 6483 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let obj2;
let obj3;
let obj4;
let size;
let createStyles = createStyles_mod;
let obj = { placeholder: obj2, placeholderAvatar: size, placeholderUsername: obj3, placeholderDivider: obj4 };
obj2 = { backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT };
createStyles = createStyles.createStyles;
size = { width: native.AVATAR_SIZE_MAP[native.AvatarSizes.REFRESH_MEDIUM_32], height: native.AVATAR_SIZE_MAP[native.AvatarSizes.REFRESH_MEDIUM_32], borderRadius: nativeDefault.radii.xl, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj3 = { height: 20, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj4 = { backgroundColor: LegacyTokens.DIVIDER_BACKGROUND };
const styles = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/fastest_list/placeholders/useFastestListTableRowPlaceholderConfig.native.tsx");

export default function useFastestListTableRowPlaceholderConfig() {
  const tmp = styles();
  let closure_0 = tmp;
  const items = [tmp];
  return react.useMemo(() => {
    let obj5;
    let obj6;
    let obj7;
    let obj8;
    let sum;
    const obj = { type: FastestListPropsPlaceholder.FastestListPropsPlaceholderType.FEED_ITEM, shape: "circle", backgroundColorHex: closure_0.placeholder.backgroundColor, colorHex: closure_0.placeholderAvatar.backgroundColor, labelPadding: nativeDefault.space.PX_16, labelPaddingInnerRatio: 0, labelSize: closure_0.placeholderUsername.height, padding: nativeDefault.space.PX_12, shapeSize: closure_0.placeholderAvatar.width };
    const obj2 = { divider: true, dividerColorHex: closure_0.placeholderDivider.backgroundColor, dividerPaddingLeft: sum + nativeDefault.space.PX_16 };
    sum = nativeDefault.space.PX_12 + closure_0.placeholderAvatar.width;
    const obj3 = { sectionHeader: { type: FastestListPropsPlaceholder.FastestListPropsPlaceholderType.SHAPE, shape: "rect", colorHex: closure_0.placeholder.backgroundColor, paddingVertical: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.md, width: nativeDefault.space.PX_96 }, sectionItem: obj5, sectionItemAtFront: obj6, sectionItemAtRear: obj7, sectionItemSingleton: obj8 };
    ({ type: FastestListPropsPlaceholder.FastestListPropsPlaceholderType.SHAPE, shape: "rect", colorHex: closure_0.placeholder.backgroundColor, paddingVertical: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.md, width: nativeDefault.space.PX_96 });
    obj5 = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(obj2);
    obj6 = { borderTopLeftRadius: nativeDefault.radii.lg, borderTopRightRadius: nativeDefault.radii.lg };
    const merged2 = Object.assign(obj);
    const merged3 = Object.assign(obj2);
    obj7 = { borderBottomLeftRadius: nativeDefault.radii.lg, borderBottomRightRadius: nativeDefault.radii.lg };
    const merged4 = Object.assign(obj);
    obj8 = { borderRadius: nativeDefault.radii.lg };
    const merged5 = Object.assign(obj);
    return obj3;
  }, items);
};
export const useFastestListTableRowPlaceholderStyles = styles;
