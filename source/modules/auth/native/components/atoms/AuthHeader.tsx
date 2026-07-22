// Module ID: 9214
// Function ID: 72096
// Name: AuthHeader
// Dependencies: []
// Exports: default

// Module 9214 (AuthHeader)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = {};
obj = {};
const merged = Object.assign(importDefault(dependencyMap[4])(arg1(dependencyMap[1]).Fonts.DISPLAY_EXTRABOLD, importDefault(dependencyMap[5]).colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj["textAlign"] = "center";
obj.header = obj;
let closure_3 = obj.createStyles(obj);
const importDefaultResult = importDefault(dependencyMap[4]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/auth/native/components/atoms/AuthHeader.tsx");

export default function AuthHeader(arg0) {
  let children;
  let style;
  ({ children, style } = arg0);
  style = [callback().header, ];
  style[1] = style;
  return jsx(arg1(dependencyMap[6]).LegacyText, { style, accessibilityRole: "header", children });
};
