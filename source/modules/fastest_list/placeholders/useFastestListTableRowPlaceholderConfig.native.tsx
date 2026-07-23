// Module ID: 8827
// Function ID: 69597
// Name: styles
// Dependencies: [31, 4130, 689, 1273, 4973, 8828, 2]
// Exports: default

// Module 8827 (styles)
import result from "result";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.CARD_BACKGROUND_DEFAULT };
_createForOfIteratorHelperLoose.placeholder = _createForOfIteratorHelperLoose;
const obj1 = { width: require("Button").AVATAR_SIZE_MAP[require("Button").AvatarSizes.REFRESH_MEDIUM_32], height: require("Button").AVATAR_SIZE_MAP[require("Button").AvatarSizes.REFRESH_MEDIUM_32], borderRadius: require("_createForOfIteratorHelperLoose").radii.xl, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED };
_createForOfIteratorHelperLoose.placeholderAvatar = obj1;
_createForOfIteratorHelperLoose.placeholderUsername = { height: 20, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED };
const obj2 = { height: 20, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED };
_createForOfIteratorHelperLoose.placeholderDivider = { backgroundColor: require("result").DIVIDER_BACKGROUND };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj3 = { backgroundColor: require("result").DIVIDER_BACKGROUND };
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/fastest_list/placeholders/useFastestListTableRowPlaceholderConfig.native.tsx");

export default function useFastestListTableRowPlaceholderConfig() {
  const tmp = _createForOfIteratorHelperLoose();
  const require = tmp;
  const items = [tmp];
  return React.useMemo(() => {
    let obj = { type: tmp(outer1_2[5]).FastestListPropsPlaceholderType.FEED_ITEM, shape: "circle", backgroundColorHex: tmp.placeholder.backgroundColor, colorHex: tmp.placeholderAvatar.backgroundColor, labelPadding: outer1_1(outer1_2[2]).space.PX_16, labelPaddingInnerRatio: 0, labelSize: tmp.placeholderUsername.height, padding: outer1_1(outer1_2[2]).space.PX_12, shapeSize: tmp.placeholderAvatar.width };
    obj = { divider: true, dividerColorHex: tmp.placeholderDivider.backgroundColor };
    const sum = outer1_1(outer1_2[2]).space.PX_12 + tmp.placeholderAvatar.width;
    obj.dividerPaddingLeft = sum + outer1_1(outer1_2[2]).space.PX_16;
    obj = { sectionHeader: { type: tmp(outer1_2[5]).FastestListPropsPlaceholderType.SHAPE, shape: "rect", colorHex: tmp.placeholder.backgroundColor, paddingVertical: outer1_1(outer1_2[2]).space.PX_16, borderRadius: outer1_1(outer1_2[2]).radii.md, width: outer1_1(outer1_2[2]).space.PX_96 } };
    const merged = Object.assign(obj);
    const merged1 = Object.assign(obj);
    obj.sectionItem = {};
    const obj3 = {};
    const merged2 = Object.assign(obj);
    const merged3 = Object.assign(obj);
    obj3["borderTopLeftRadius"] = outer1_1(outer1_2[2]).radii.lg;
    obj3["borderTopRightRadius"] = outer1_1(outer1_2[2]).radii.lg;
    obj.sectionItemAtFront = obj3;
    const obj4 = {};
    const merged4 = Object.assign(obj);
    obj4["borderBottomLeftRadius"] = outer1_1(outer1_2[2]).radii.lg;
    obj4["borderBottomRightRadius"] = outer1_1(outer1_2[2]).radii.lg;
    obj.sectionItemAtRear = obj4;
    const obj5 = {};
    const merged5 = Object.assign(obj);
    obj5["borderRadius"] = outer1_1(outer1_2[2]).radii.lg;
    obj.sectionItemSingleton = obj5;
    return obj;
  }, items);
};
export const useFastestListTableRowPlaceholderStyles = _createForOfIteratorHelperLoose;
