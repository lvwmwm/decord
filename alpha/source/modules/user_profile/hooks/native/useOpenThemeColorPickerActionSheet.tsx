// Module ID: 14697
// Function ID: 14698
// Name: useOpenThemeColorPickerActionSheet
// Dependencies: [19, 558, 576, 14662, 2]

// Module 14697 (useOpenThemeColorPickerActionSheet)
import showCustomColorPickerActionSheetDefault from "showCustomColorPickerActionSheet" /* 14662 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useOpenThemeColorPickerActionSheet(primaryColor) {
  let avatarColors;
  let obj = primaryColor(avatarColors[2]);
  const cResult = obj.c(13);
  primaryColor = primaryColor.primaryColor;
  const secondaryColor = primaryColor.secondaryColor;
  avatarColors = primaryColor.avatarColors;
  const onChangeColors = primaryColor.onChangeColors;
  if (cResult[0] === avatarColors) {
    if (cResult[1] === onChangeColors) {
      if (cResult[2] === primaryColor) {
        let tmp2;
        if (cResult[3] === secondaryColor) {
          tmp2 = cResult[4];
        }
        if (cResult[5] === avatarColors) {
          if (cResult[6] === onChangeColors) {
            if (cResult[7] === primaryColor) {
              let tmp3;
              if (cResult[8] === secondaryColor) {
                tmp3 = cResult[9];
              }
              if (cResult[10] === tmp2) {
                let tmp4;
                if (cResult[11] === tmp3) {
                  tmp4 = cResult[12];
                }
                return tmp4;
              }
              class C {
                constructor() {
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
                }
              }
              tmp5[0] = tmp2;
              tmp5[1] = tmp3;
              cResult[10] = tmp2;
              cResult[11] = tmp3;
              cResult[12] = tmp5;
              tmp4 = tmp5;
            }
          }
        }
        class C {
          constructor() {
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
          }
        }
        cResult[5] = avatarColors;
        cResult[6] = onChangeColors;
        cResult[7] = primaryColor;
        cResult[8] = secondaryColor;
        cResult[9] = C;
        tmp3 = C;
      }
    }
  }
  const fn = function l() {
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
  };
  cResult[0] = avatarColors;
  cResult[1] = onChangeColors;
  cResult[2] = primaryColor;
  cResult[3] = secondaryColor;
  cResult[4] = fn;
  tmp2 = fn;
}) : (function useOpenThemeColorPickerActionSheet(primaryColor) {
  let items;
  let items1;
  primaryColor = primaryColor.primaryColor;
  const secondaryColor = primaryColor.secondaryColor;
  const avatarColors = primaryColor.avatarColors;
  const onChangeColors = primaryColor.onChangeColors;
  let obj = {
    openPrimaryColorPicker: onChangeColors.useCallback(() => {
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
    openSecondaryColorPicker: onChangeColors.useCallback(() => {
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
});
const result = size.fileFinishedImporting("modules/user_profile/hooks/native/useOpenThemeColorPickerActionSheet.tsx");

export default tmp2;
