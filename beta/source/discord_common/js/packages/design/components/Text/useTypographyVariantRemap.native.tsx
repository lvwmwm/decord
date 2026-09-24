// Module ID: 4796
// Function ID: 4797
// Name: useTypographyVariantRemap
// Dependencies: [558, 568, 4510, 4797, 2]

// Module 4796 (useTypographyVariantRemap)
import c from "c" /* 568 */;
import ThemeContext from "ThemeContext" /* 4510 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const typographyVariantRemap = tmp(4797);
let result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Text/useTypographyVariantRemap.native.tsx");

export const useTypographyVariantRemap = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  const cResult = c.c(6);
  let themeContext = ThemeContext.useThemeContext();
  if (themeContext == null) {
    themeContext = [];
  }
  const enabledExperiments = themeContext.enabledExperiments;
  if (cResult[0] !== enabledExperiments) {
    let items = enabledExperiments;
    if (enabledExperiments == null) {
      items = [];
    }
    cResult[0] = enabledExperiments;
    cResult[1] = items;
    let tmp4 = items;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === arg1) {
    if (cResult[3] === tmp4) {
      if (cResult[4] === arg0) {
        let tmp5 = cResult[5];
      }
      return tmp5;
    }
  }
  const result = typographyVariantRemap.remapTypographyVariant(tmp4, arg0, arg1);
  cResult[2] = arg1;
  cResult[3] = tmp4;
  cResult[4] = arg0;
  cResult[5] = result;
  tmp5 = result;
}) : ((arg0, arg1) => {
  let themeContext = ThemeContext.useThemeContext();
  if (themeContext == null) {
    themeContext = [];
  }
  let enabledExperiments = themeContext.enabledExperiments;
  if (enabledExperiments == null) {
    enabledExperiments = [];
  }
  return typographyVariantRemap.remapTypographyVariant(enabledExperiments, arg0, arg1);
});
