// Module ID: 9769
// Function ID: 9770
// Name: EmojiPickerListComponents
// Dependencies: [19, 17, 9753, 21, 4836, 576, 1177, 7601, 4832, 1115, 9767, 2]

// Module 9769 (EmojiPickerListComponents)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4832 */;
import AssetRegistryDefault from "AssetRegistry" /* 7601 */;
import PremiumUpsellGradientBackground from "PremiumUpsellGradientBackground" /* 9767 */;
import react from "react" /* 19 */;
import EmojiPickerListConstants from "EmojiPickerListConstants" /* 9753 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let useTier0UpsellContent;

let LABEL_BOTTOM_PADDING;
let LABEL_TOP_PADDING;
let NSFW_ROW_HEIGHT;
let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
const View = react_native.View;
({ LABEL_BOTTOM_PADDING, LABEL_TOP_PADDING, NSFW_ROW_HEIGHT } = EmojiPickerListConstants);
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { section: obj2, nsfwContainer: obj3, nsfwText: { marginLeft: 4, textAlign: "center" } };
obj2 = { justifyContent: "center", overflow: "hidden", backgroundColor: nativeDefault.colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT, paddingTop: LABEL_TOP_PADDING, paddingBottom: LABEL_BOTTOM_PADDING };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", height: NSFW_ROW_HEIGHT, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.sm, marginLeft: 12, marginRight: 12, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
let closure_6 = createStyles(obj);
const memoResult = react.memo(() => {
  let intl;
  let items;
  const tmp = closure_6();
  const obj = { style: tmp.nsfwContainer, children: items };
  const obj2 = { source: AssetRegistryDefault, size: native.Icon.Sizes.SMALL };
  const Icon = native.Icon;
  items = [React3(Icon, obj2), ];
  const obj3 = { style: tmp.nsfwText, variant: "text-sm/normal", color: "interactive-text-active", children: intl.string(intl2.t.SLzV5z) };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  items[1] = React3(Text, obj3);
  return hasOwnProperty(View, obj);
});
const memoResult1 = react.memo((useTier0UpsellContent) => {
  let isSectionNitroLocked;
  let items;
  let label;
  ({ label, isSectionNitroLocked } = useTier0UpsellContent);
  useTier0UpsellContent = useTier0UpsellContent.useTier0UpsellContent;
  const obj = { style: closure_6().section, children: items };
  const tmp = hasOwnProperty;
  const tmp2 = View;
  if (isSectionNitroLocked) {
    const obj2 = { useTier0UpsellContent };
    isSectionNitroLocked = React3(PremiumUpsellGradientBackground.PremiumUpsellGradientBackground, obj2);
  }
  items = [isSectionNitroLocked, ];
  let tmp6 = null;
  if ("" !== label) {
    const obj3 = { lineClamp: 1, color: "interactive-text-default", variant: "heading-sm/semibold", children: label };
    tmp6 = React3(Text_Text.Text, obj3);
  }
  items[1] = tmp6;
  return tmp(tmp2, obj);
});
const result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListComponents.tsx");

export const NSFWRow = memoResult;
export const Section = memoResult1;
