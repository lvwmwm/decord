// Module ID: 13240
// Function ID: 13241
// Name: CheckpointShareCardYear
// Dependencies: [19, 17, 21, 558, 576, 13241, 8017, 2]

// Module 13240 (CheckpointShareCardYear)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import inlineStyles from "inlineStyles" /* 8017 */;
import CheckpointShareCardContext from "CheckpointShareCardContext" /* 13241 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const inlineStylesDefault = inlineStyles;

const StyleSheet = react_native.StyleSheet;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointShareCardYear(arg0) {
  let path;
  let x;
  const obj = react2;
  const cResult = obj.c(6);
  ({ path, x } = arg0);
  const primaryBackgroundColor = react.useContext(CheckpointShareCardContext.CheckpointShareCardColorsContext).primaryBackgroundColor;
  if (cResult[0] === path) {
    let tmp4;
    if (cResult[1] === primaryBackgroundColor) {
      tmp4 = cResult[2];
    }
    if (cResult[3] === tmp4) {
      let tmp6;
      if (cResult[4] === x) {
        tmp6 = cResult[5];
      }
      return tmp6;
    }
    inlineStylesDefault;
    const tmp11 = <tmp9 style={StyleSheet.absoluteFill}>{null}</tmp9>;
    cResult[3] = tmp4;
    cResult[4] = x;
    cResult[5] = tmp11;
    tmp6 = tmp11;
  }
  const tmp5 = jsx(inlineStyles.Path, { d: path, fill: primaryBackgroundColor });
  cResult[0] = path;
  cResult[1] = primaryBackgroundColor;
  cResult[2] = tmp5;
  tmp4 = tmp5;
}) : (function CheckpointShareCardYear(arg0) {
  let path;
  let x;
  ({ path, x } = arg0);
  const primaryBackgroundColor = react.useContext(CheckpointShareCardContext.CheckpointShareCardColorsContext).primaryBackgroundColor;
  inlineStylesDefault;
  const G = inlineStyles.G;
  return <tmp style={StyleSheet.absoluteFill}>{null}</tmp>;
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/share/CheckpointShareCardYear.tsx");

export default tmp2;
export const YEAR_WIDTH = 44;
export const YEAR_PATH = "M6.25,18.75L0,18.75L0,0L18.7187,0L18.7187,6.25L24.9687,6.25L24.9687,12.5L37.4687,12.5L37.4687,0L43.7187,0L43.7187,12.5L37.4687,12.5L37.4687,18.75L24.9687,18.75L24.9687,12.5L18.7187,12.5L18.7187,6.25L6.25,6.25L6.25,18.75ZM6.25,29.97L6.25,23.72L37.5,23.72L37.5,29.97L43.75,29.97L43.75,42.47L37.5,42.47L37.5,48.72L6.25,48.72L6.25,42.47L0,42.47L0,29.97L6.25,29.97ZM6.25,29.97L6.25,42.47L37.5,42.47L37.5,29.97L6.25,29.97ZM6.25,72.44L0,72.44L0,53.69L18.7187,53.69L18.7187,59.94L24.9687,59.94L24.9687,66.19L37.4687,66.19L37.4687,53.69L43.7187,53.69L43.7187,66.19L37.4687,66.19L37.4687,72.44L24.9687,72.44L24.9687,66.19L18.7187,66.19L18.7187,59.94L6.25,59.94L6.25,72.44ZM43.75,96.16L37.5,96.16L37.5,83.66L25,83.66L25,96.16L18.75,96.16L18.75,102.41L6.25,102.41L6.25,96.16L0,96.16L0,83.66L6.25,83.66L6.25,77.41L37.5,77.41L37.5,83.66L43.75,83.66L43.75,96.16ZM6.25,83.66L6.25,96.16L18.75,96.16L18.75,83.66L6.25,83.66Z";
export const SHORT_YEAR_PATH = "M6.25,18.75L0,18.75L0,0L18.7187,0L18.7187,6.25L24.9687,6.25L24.9687,12.5L37.4687,12.5L37.4687,0L43.7187,0L43.7187,12.5L37.4687,12.5L37.4687,18.75L24.9687,18.75L24.9687,12.5L18.7187,12.5L18.7187,6.25L6.25,6.25L6.25,18.75ZM43.75,42.47L37.5,42.47L37.5,29.97L25,29.97L25,42.47L18.75,42.47L18.75,48.72L6.25,48.72L6.25,42.47L0,42.47L0,29.97L6.25,29.97L6.25,23.72L37.5,23.72L37.5,29.97L43.75,29.97L43.75,42.47ZM6.25,29.97L6.25,42.47L18.75,42.47L18.75,29.97L6.25,29.97Z";
