// Module ID: 13484
// Function ID: 13485
// Name: GuildBadgeBunny
// Dependencies: [19, 21, 1255, 13462, 7909, 2]
// Exports: GuildBadgeBunny

// Module 13484 (GuildBadgeBunny)
import v1 from "v1" /* 1255 */;
import inlineStyles from "inlineStyles" /* 7909 */;
import GuildBadgeUtils from "GuildBadgeUtils" /* 13462 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
const primaryBaseColors = ["#847D8B", "#D1CDD5"];
const primaryTintLuminances = [0.2, 0.65];
let items = [{ base: 4, tint: 1 }, { base: 3, tint: 1 }];
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeBunny.tsx");

export const GuildBadgeBunny = function GuildBadgeBunny(width) {
  let ClipPath;
  let items1;
  let obj11;
  let num = width.width;
  if (num === undefined) {
    num = 24;
  }
  let num2 = width.height;
  if (num2 === undefined) {
    num2 = 24;
  }
  const primaryTintColor = width.primaryTintColor;
  const merged = Object.assign(width, Object.assign({ width: 0, height: 0, primaryTintColor: 0 }));
  const memo = react.useMemo(() => {
    const obj = v1;
    return "badge-bunny-clip-" + obj.v4();
  }, []);
  let obj = GuildBadgeUtils;
  const obj2 = { primaryBaseColors, primaryTintColor, primaryTintLuminances, primaryLuminanceWeights: items };
  const primaryColorsTransformed = obj.getTransformedBadgeColors(obj2).primaryColorsTransformed;
  const obj3 = { width: num, height: num2, viewBox: "0 0 16 16", fill: "none", children: items1 };
  const Svg = inlineStyles.Svg;
  const merged1 = Object.assign(merged);
  const obj4 = { clipPath: "url(#" + memo + ")", children: items };
  const G = inlineStyles.G;
  items = [, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  const obj5 = { d: "M13 8V6H14V4H15V1H11V3H10V7H11V8H5V7H6V3H5V1H1V4H2V6H3V8H4V9H3V10H2V12H1V14H2V15H14V14H15V12H14V10H13V9H12V8H13Z", fill: primaryColorsTransformed[1] };
  items[0] = _false(inlineStyles.Path, obj5);
  items[1] = _false(inlineStyles.Path, { d: "M5 8H4V6H3V4H2V2H4V4H5V8Z", fill: "#FF7FC0" });
  items[2] = _false(inlineStyles.Path, { d: "M12 8H11V4H12V2H14V4H13V6H12V8Z", fill: "#FF7FC0" });
  items[3] = _false(inlineStyles.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M9 11H10V12H11V13H12V15H4V13H5V12H6V11H7V9H9V11Z", fill: "white" });
  items[4] = _false(inlineStyles.Path, { d: "M9 12V13H7V12H9Z", fill: "#FF1B90" });
  items[5] = _false(inlineStyles.Path, { d: "M14 15V16H2V15H14Z", fill: "black" });
  items[6] = _false(inlineStyles.Path, { d: "M2 15H1V14H2V15Z", fill: "black" });
  items[7] = _false(inlineStyles.Path, { d: "M15 15H14V14H15V15Z", fill: "black" });
  const obj6 = { d: "M2 14H1V13H2V14Z", fill: primaryColorsTransformed[0] };
  items[8] = _false(inlineStyles.Path, obj6);
  const obj7 = { d: "M15 14H14V13H15V14Z", fill: primaryColorsTransformed[0] };
  items[9] = _false(inlineStyles.Path, obj7);
  items[10] = _false(inlineStyles.Path, { d: "M1 14H0V12H1V14Z", fill: "black" });
  items[11] = _false(inlineStyles.Path, { d: "M16 14H15V12H16V14Z", fill: "black" });
  items[12] = _false(inlineStyles.Path, { d: "M2 12H1V10H2V12Z", fill: "black" });
  items[13] = _false(inlineStyles.Path, { d: "M15 12H14V10H15V12Z", fill: "black" });
  items[14] = _false(inlineStyles.Path, { d: "M3 10H2V9H3V10Z", fill: "black" });
  items[15] = _false(inlineStyles.Path, { d: "M14 10H13V9H14V10Z", fill: "black" });
  items[16] = _false(inlineStyles.Path, { d: "M4 9H3V8H4V9Z", fill: "black" });
  items[17] = _false(inlineStyles.Path, { d: "M13 9H12V8H13V9Z", fill: "black" });
  items[18] = _false(inlineStyles.Path, { d: "M3 8H2V6H3V8Z", fill: "black" });
  items[19] = _false(inlineStyles.Path, { d: "M7 7H9V3H10V7H11V8H5V7H6V3H7V7Z", fill: "black" });
  items[20] = _false(inlineStyles.Path, { d: "M14 8H13V6H14V8Z", fill: "black" });
  items[21] = _false(inlineStyles.Path, { d: "M2 6H1V4H2V6Z", fill: "black" });
  items[22] = _false(inlineStyles.Path, { d: "M15 6H14V4H15V6Z", fill: "black" });
  items[23] = _false(inlineStyles.Path, { d: "M1 4H0V1H1V4Z", fill: "black" });
  items[24] = _false(inlineStyles.Path, { d: "M16 4H15V1H16V4Z", fill: "black" });
  items[25] = _false(inlineStyles.Path, { d: "M6 3H5V1H6V3Z", fill: "black" });
  items[26] = _false(inlineStyles.Path, { d: "M11 3H10V1H11V3Z", fill: "black" });
  items[27] = _false(inlineStyles.Path, { d: "M5 1H1V0H5V1Z", fill: "black" });
  items[28] = _false(inlineStyles.Path, { d: "M15 1H11V0H15V1Z", fill: "black" });
  items[29] = _false(inlineStyles.Path, { d: "M6 12H5V10H6V12Z", fill: "black" });
  items[30] = _false(inlineStyles.Path, { d: "M11 12H10V10H11V12Z", fill: "black" });
  const obj8 = { d: "M14 14H12V15H14V14Z", fill: primaryColorsTransformed[0] };
  items[31] = _false(inlineStyles.Path, obj8);
  const obj9 = { d: "M4 14H2V15H4V14Z", fill: primaryColorsTransformed[0] };
  items[32] = _false(inlineStyles.Path, obj9);
  items1 = [React3(G, obj4), ];
  const obj10 = { children: _false(ClipPath, obj11) };
  const Defs = inlineStyles.Defs;
  obj11 = { id: memo, children: _false(inlineStyles.Rect, { width: "16", height: "16", fill: "white" }) };
  ClipPath = inlineStyles.ClipPath;
  items1[1] = _false(Defs, obj10);
  return React3(Svg, obj3);
};
