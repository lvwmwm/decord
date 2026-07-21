// Module ID: 8819
// Function ID: 69533
// Name: styles
// Dependencies: []
// Exports: default

// Module 8819 (styles)
let closure_3 = importAll(dependencyMap[0]);
let obj = arg1(dependencyMap[1]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[2]).colors.CARD_BACKGROUND_DEFAULT };
obj.placeholder = obj;
const obj1 = { width: arg1(dependencyMap[3]).AVATAR_SIZE_MAP[arg1(undefined, dependencyMap[3]).AvatarSizes.REFRESH_MEDIUM_32], height: arg1(dependencyMap[3]).AVATAR_SIZE_MAP[arg1(undefined, dependencyMap[3]).AvatarSizes.REFRESH_MEDIUM_32], borderRadius: importDefault(dependencyMap[2]).radii.xl, backgroundColor: importDefault(dependencyMap[2]).colors.BACKGROUND_MOD_MUTED };
obj.placeholderAvatar = obj1;
obj.placeholderUsername = { height: 20, borderRadius: importDefault(dependencyMap[2]).radii.md, backgroundColor: importDefault(dependencyMap[2]).colors.BACKGROUND_MOD_MUTED };
const obj2 = { height: 20, borderRadius: importDefault(dependencyMap[2]).radii.md, backgroundColor: importDefault(dependencyMap[2]).colors.BACKGROUND_MOD_MUTED };
obj.placeholderDivider = { backgroundColor: arg1(dependencyMap[4]).DIVIDER_BACKGROUND };
const styles = obj.createStyles(obj);
const obj3 = { backgroundColor: arg1(dependencyMap[4]).DIVIDER_BACKGROUND };
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/fastest_list/placeholders/useFastestListTableRowPlaceholderConfig.native.tsx");

export default function useFastestListTableRowPlaceholderConfig() {
  const tmp = styles();
  const arg1 = tmp;
  const items = [tmp];
  return React.useMemo(() => {
    let obj = { type: tmp(closure_2[5]).FastestListPropsPlaceholderType.FEED_ITEM, shape: "circle", backgroundColorHex: tmp.placeholder.backgroundColor, colorHex: tmp.placeholderAvatar.backgroundColor, labelPadding: callback(closure_2[2]).space.PX_16, labelPaddingInnerRatio: 0, labelSize: tmp.placeholderUsername.height, padding: callback(closure_2[2]).space.PX_12, shapeSize: tmp.placeholderAvatar.width };
    obj = { divider: true, dividerColorHex: tmp.placeholderDivider.backgroundColor };
    const sum = callback(closure_2[2]).space.PX_12 + tmp.placeholderAvatar.width;
    obj.dividerPaddingLeft = sum + callback(closure_2[2]).space.PX_16;
    obj = { sectionHeader: { type: tmp(closure_2[5]).FastestListPropsPlaceholderType.SHAPE, shape: "rect", colorHex: tmp.placeholder.backgroundColor, paddingVertical: callback(closure_2[2]).space.PX_16, borderRadius: callback(closure_2[2]).radii.md, width: callback(closure_2[2]).space.PX_96 } };
    const merged = Object.assign(obj);
    const merged1 = Object.assign(obj);
    obj.sectionItem = {};
    const obj3 = {};
    const merged2 = Object.assign(obj);
    const merged3 = Object.assign(obj);
    obj3["borderTopLeftRadius"] = callback(closure_2[2]).radii.lg;
    obj3["borderTopRightRadius"] = callback(closure_2[2]).radii.lg;
    obj.sectionItemAtFront = obj3;
    const obj4 = {};
    const merged4 = Object.assign(obj);
    obj4["borderBottomLeftRadius"] = callback(closure_2[2]).radii.lg;
    obj4["borderBottomRightRadius"] = callback(closure_2[2]).radii.lg;
    obj.sectionItemAtRear = obj4;
    const obj5 = {};
    const merged5 = Object.assign(obj);
    obj5["borderRadius"] = callback(closure_2[2]).radii.lg;
    obj.sectionItemSingleton = obj5;
    return obj;
  }, items);
};
export const useFastestListTableRowPlaceholderStyles = styles;
