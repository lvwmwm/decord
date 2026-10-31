// Module ID: 9938
// Function ID: 9939
// Name: PremiumUpsellTooltipActionSheet
// Dependencies: [19, 17, 4860, 21, 5014, 575, 5044, 5272, 5717, 1187, 5624, 5634, 5258, 2]
// Exports: default

// Module 9938 (PremiumUpsellTooltipActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4860 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5044 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5272 */;
import FastImageDefault from "FastImage" /* 5717 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let size;
let size1;
let tmp3;
const native = tmp3(1187);
const Text_Text = tmp3(5624);
const components_Button_Button = tmp3(5634);
const View = react_native.View;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, img: size, header: { flexDirection: "row", justifyContent: "center" }, title: { textAlign: "center", marginBottom: 8 }, description: obj3, nitroWheel: size1, buttonContainer: obj4 };
obj2 = { justifyContent: "center", paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
size = { alignSelf: "center", width: 231, height: 231, borderRadius: nativeDefault.radii.sm, marginBottom: 16 };
obj3 = { textAlign: "center", marginBottom: nativeDefault.space.PX_24 };
size1 = { tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, width: 32, height: 32, marginTop: -2, marginLeft: -16 };
obj4 = { gap: nativeDefault.space.PX_8 };
let closure_7 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/upsell_tooltip/native/PremiumUpsellTooltipActionSheet.tsx");

export default function PremiumUpsellTooltipActionSheet(arg0) {
  let backdropProps;
  let description;
  let descriptionStyle;
  let imageSource;
  let imageStyle;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj2;
  let primaryButtonIcon;
  let primaryButtonIconResult;
  let primaryButtonText;
  let secondaryButtonText;
  let title;
  ({ imageSource, dismissibleContent: require, primaryButtonIcon, secondaryButtonText, onDismiss: importDefault, onPrimaryButtonPress: dependencyMap, onSecondaryButtonPress: View } = arg0);
  ({ title, backdropProps, description, descriptionStyle, imageStyle, primaryButtonText } = arg0);
  let tmp = closure_7();
  const tmp3 = require;
  let tmp4 = dependencyMap;
  let obj = {
    startExpanded: true,
    onDismiss: function handleDismiss(dismissAction) {
      const tmp = null != dismissAction && dismissAction !== ContentDismissActionType.DISMISS;
      if (!tmp) {
        if (importDefault != null) {
          tmp3();
        }
      }
      const obj = DismissibleContentUnsafeUtils;
      const obj2 = { forceTrack: true, dismissAction };
      const result = obj.UNSAFE_markDismissibleContentAsDismissed(require, obj2);
    },
    children: tmp6(View, obj2)
  };
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  const merged = Object.assign(backdropProps);
  obj2 = { style: tmp.container, children: items1 };
  let tmp2Result = null;
  if (null != imageSource) {
    const obj3 = { style: items, source: imageSource };
    items = [tmp.img, imageStyle];
    tmp2Result = tmp2(FastImageDefault, obj3);
  }
  items1 = [tmp2Result, , , ];
  const obj4 = { style: tmp.header, children: items2 };
  items2 = [, ];
  const obj5 = { style: tmp.nitroWheel };
  items2[0] = closure_5(native.NitroWheel, obj5);
  const obj6 = { variant: "heading-xl/bold", style: tmp.title, color: "mobile-text-heading-primary", accessibilityRole: "header", children: title };
  items2[1] = closure_5(Text_Text.Text, obj6);
  items1[1] = closure_6(View, obj4);
  const obj7 = { style: items3, variant: "text-md/medium", color: "text-default", children: description };
  items3 = [tmp.description, descriptionStyle];
  items1[2] = closure_5(Text_Text.Text, obj7);
  const obj9 = {
    variant: "active",
    text: primaryButtonText,
    onPress: function handlePrimaryButtonPress() {
      dependencyMap();
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      const PRIMARY = ContentDismissActionType.PRIMARY;
      const tmp4 = null != PRIMARY && PRIMARY !== ContentDismissActionType.DISMISS;
      if (!tmp4) {
        if (importDefault != null) {
          importDefault();
        }
      }
      const obj2 = DismissibleContentUnsafeUtils;
      const result = obj2.UNSAFE_markDismissibleContentAsDismissed(require, { forceTrack: true, dismissAction: PRIMARY });
    },
    icon: primaryButtonIconResult,
    size: "lg"
  };
  primaryButtonIconResult = undefined;
  const obj8 = { style: tmp.buttonContainer, children: items4 };
  const Button = components_Button_Button.Button;
  if (primaryButtonIcon != null) {
    primaryButtonIconResult = primaryButtonIcon();
  }
  items4 = [tmp2(Button, obj9), ];
  let tmp2Result2 = null;
  if (null != secondaryButtonText) {
    const obj10 = {
      variant: "secondary",
      text: secondaryButtonText,
      onPress: function handleSecondaryButtonPress() {
          if (View != null) {
            tmp();
          }
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const DISMISS = ContentDismissActionType.DISMISS;
          const tmp5 = null != DISMISS && DISMISS !== ContentDismissActionType.DISMISS;
          if (!tmp5) {
            if (importDefault != null) {
              importDefault();
            }
          }
          const obj2 = DismissibleContentUnsafeUtils;
          const result = obj2.UNSAFE_markDismissibleContentAsDismissed(require, { forceTrack: true, dismissAction: DISMISS });
        },
      size: "lg"
    };
    tmp2Result2 = tmp2(components_Button_Button.Button, obj10);
  }
  items4[1] = tmp2Result2;
  items1[3] = closure_6(View, obj8);
  return closure_5(BottomSheet, obj);
};
