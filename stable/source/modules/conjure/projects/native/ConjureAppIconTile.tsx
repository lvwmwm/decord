// Module ID: 11340
// Function ID: 11341
// Name: ConjureAppIconTile
// Dependencies: [19, 17, 21, 5014, 11341, 11343, 5624, 8678, 2]
// Exports: default

// Module 11340 (ConjureAppIconTile)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import useConjureDefaultAppIconDefault from "useConjureDefaultAppIcon" /* 11341 */;
import useConjureProjectIcon from "useConjureProjectIcon" /* 11343 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles((width, width2, backgroundColor, color) => {
  const obj = { tile: size, character: { color, fontSize: Math.round(width / 2), lineHeight: Math.round(0.625 * width) }, glyph: { width: width2, height: width2 } };
  size = { width, height: width, alignItems: "center", justifyContent: "center", backgroundColor };
  ({ color, fontSize: Math.round(width / 2), lineHeight: Math.round(0.625 * width) });
  return obj;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/conjure/projects/native/ConjureAppIconTile.tsx");

export default function ConjureAppIconTile(size) {
  let applicationId;
  let character;
  let foregroundColor;
  let name;
  let tmp5Result;
  size = size.size;
  ({ applicationId, name } = size);
  const tmp2 = useConjureDefaultAppIconDefault(applicationId, name);
  ({ character, foregroundColor } = tmp2);
  const backgroundColor = tmp2.backgroundColor;
  const obj = useConjureProjectIcon;
  const tmp4 = closure_5(size, obj.conjureProjectIconMetrics(size).glyphSize, backgroundColor, foregroundColor);
  if (null != character) {
    const obj3 = { variant: "heading-md/bold", color: "none", style: tmp4.character, allowFontScaling: false, children: character };
    tmp5Result = tmp5(tmp3(5624).Text, obj3);
  } else {
    const obj4 = { size: "custom", style: tmp4.glyph, color: foregroundColor };
    tmp5Result = tmp5(tmp3(8678).AppsIcon, obj4);
  }
  return <tmp6 style={tmp4.tile} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">{tmp5Result}</tmp6>;
};
