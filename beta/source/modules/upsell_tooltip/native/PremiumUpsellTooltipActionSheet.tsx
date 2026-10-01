// Module ID: 10607
// Function ID: 10608
// Name: PremiumUpsellTooltipActionSheet
// Dependencies: [19, 17, 2042, 21, 4836, 576, 4654, 6571, 1177, 4832, 5281, 4800, 2]
// Exports: default

// Module 10607 (PremiumUpsellTooltipActionSheet)
import nativeDefault from "native" /* 576 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4654 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6571 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet;

let c3;
let closure_4;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let size;
let size1;
let tmp3;
const native = tmp3(1177);
const Text_Text = tmp3(4832);
const components_Button_Button = tmp3(5281);
({ Image: c3, View: closure_4 } = react_native);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, img: size, header: { flexDirection: "row", justifyContent: "center" }, title: { textAlign: "center", marginBottom: 8 }, description: obj3, nitroWheel: size1, buttonContainer: obj4 };
obj2 = { justifyContent: "center", paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
size = { alignSelf: "center", width: 231, height: 231, borderRadius: nativeDefault.radii.sm, marginBottom: 16 };
obj3 = { textAlign: "center", marginBottom: nativeDefault.space.PX_24 };
size1 = { tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, width: 32, height: 32, marginTop: -2, marginLeft: -16 };
obj4 = { gap: nativeDefault.space.PX_8 };
let closure_8 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/upsell_tooltip/native/PremiumUpsellTooltipActionSheet.tsx");

export default function PremiumUpsellTooltipActionSheet(arg0) {
  let backdropProps;
  let closure_3;
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
  ({ imageSource, dismissibleContent: require, primaryButtonIcon, secondaryButtonText, onDismiss: importDefault, onPrimaryButtonPress: dependencyMap, onSecondaryButtonPress: closure_3 } = arg0);
  ({ title, backdropProps, description, descriptionStyle, imageStyle, primaryButtonText } = arg0);
  let tmp = closure_8();
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
    children: tmp6(closure_4, obj2)
  };
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  const merged = Object.assign(backdropProps);
  obj2 = { style: tmp.container, children: items1 };
  let tmp2Result = null;
  if (null != imageSource) {
    const obj3 = { style: items, source: imageSource };
    items = [tmp.img, imageStyle];
    tmp2Result = tmp2(closure_3, obj3);
  }
  items1 = [tmp2Result, , , ];
  const obj4 = { style: tmp.header, children: items2 };
  items2 = [, ];
  const obj5 = { style: tmp.nitroWheel };
  items2[0] = closure_6(native.NitroWheel, obj5);
  const obj6 = { variant: "heading-xl/bold", style: tmp.title, color: "mobile-text-heading-primary", accessibilityRole: "header", children: title };
  items2[1] = closure_6(Text_Text.Text, obj6);
  items1[1] = closure_7(closure_4, obj4);
  const obj7 = { style: items3, variant: "text-md/medium", color: "text-default", children: description };
  items3 = [tmp.description, descriptionStyle];
  items1[2] = closure_6(Text_Text.Text, obj7);
  const obj9 = {
    variant: "active",
    text: primaryButtonText,
    onPress() {
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
      onPress() {
          if (closure_3 != null) {
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
  items1[3] = closure_7(closure_4, obj8);
  return closure_6(BottomSheet, obj);
};
