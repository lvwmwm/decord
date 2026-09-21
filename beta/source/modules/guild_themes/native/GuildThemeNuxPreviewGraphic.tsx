// Module ID: 16502
// Function ID: 16503
// Name: GuildThemeNuxPreviewGraphic
// Dependencies: [19, 17, 21, 4758, 580, 558, 568, 16503, 2]

// Module 16502 (GuildThemeNuxPreviewGraphic)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import GuildThemePreviewArtDefault from "GuildThemePreviewArt" /* 16503 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4758);
let obj2 = { container: { width: "100%", aspectRatio: 1.7777777777777777, alignItems: "center", justifyContent: "center", marginBottom: nativeDefault.space.PX_24 } };
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj3 = { width: "100%", aspectRatio: 1.7777777777777777, alignItems: "center", justifyContent: "center", marginBottom: nativeDefault.space.PX_24 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_themes/native/GuildThemeNuxPreviewGraphic.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(5);
  ({ themeSettings, isPersonal } = arg0);
  const tmp3 = closure_5();
  let tmp4 = null;
  if (!isPersonal) {
    tmp4 = themeSettings;
  }
  if (cResult[0] !== tmp4) {
    const obj2 = { themeSettings: tmp4 };
    const tmp8 = jsx(GuildThemePreviewArtDefault, { themeSettings: tmp4 });
    cResult[0] = tmp4;
    cResult[1] = tmp8;
    let tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp3.container) {
    if (cResult[3] === tmp5) {
      let tmp9 = cResult[4];
    }
    return tmp9;
  }
  const tmp10 = <View accessibilityElementsHidden importantForAccessibility="no-hide-descendants" style={tmp3.container}>{tmp5}</View>;
  cResult[2] = tmp3.container;
  cResult[3] = tmp5;
  cResult[4] = tmp10;
  tmp9 = tmp10;
}) : ((arg0) => {
  ({ themeSettings, isPersonal } = arg0);
  const obj = { accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", style: closure_5().container, children: null };
  let tmp4 = null;
  if (!isPersonal) {
    tmp4 = themeSettings;
  }
  obj.children = jsx(GuildThemePreviewArtDefault, { themeSettings: tmp4 });
  return <View accessibilityElementsHidden importantForAccessibility="no-hide-descendants" style={closure_5().container}>{null}</View>;
});
