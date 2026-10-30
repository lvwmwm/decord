// Module ID: 16441
// Function ID: 16442
// Name: useOpenThemeColorPickerActionSheet
// Dependencies: [19, 16395, 2]
// Exports: default

// Module 16441 (useOpenThemeColorPickerActionSheet)
import showCustomColorPickerActionSheetDefault from "showCustomColorPickerActionSheet" /* 16395 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/hooks/native/useOpenThemeColorPickerActionSheet.tsx");

export default function useOpenThemeColorPickerActionSheet(primaryColor) {
  let items;
  let items1;
  primaryColor = primaryColor.primaryColor;
  const secondaryColor = primaryColor.secondaryColor;
  const avatarColors = primaryColor.avatarColors;
  const onChangeColors = primaryColor.onChangeColors;
  let obj = {
    openPrimaryColorPicker: avatarColors.useCallback(() => {
      let tmp2 = null != primaryColor;
      const tmp = primaryColor;
      if (tmp2) {
        tmp2 = null != secondaryColor;
      }
      if (tmp2) {
        const obj = {
          color: tmp,
          suggestedColors: avatarColors,
          onSelect(arg0) {
              if (arg0 !== primaryColor) {
                const items = [arg0, secondaryColor];
                onChangeColors(items);
              }
            }
        };
        showCustomColorPickerActionSheetDefault(obj);
      }
    }, items),
    openSecondaryColorPicker: avatarColors.useCallback(() => {
      let tmp = null != primaryColor;
      if (tmp) {
        tmp = null != secondaryColor;
      }
      if (tmp) {
        const obj = {
          color: secondaryColor,
          suggestedColors: avatarColors,
          onSelect(arg0) {
              if (arg0 !== secondaryColor) {
                const items = [primaryColor, arg0];
                onChangeColors(items);
              }
            }
        };
        showCustomColorPickerActionSheetDefault(obj);
      }
    }, items1)
  };
  items = [avatarColors, onChangeColors, primaryColor, secondaryColor];
  items1 = [avatarColors, onChangeColors, primaryColor, secondaryColor];
  return obj;
};
