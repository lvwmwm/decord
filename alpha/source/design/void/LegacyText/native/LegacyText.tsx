// Module ID: 8580
// Function ID: 8581
// Name: LegacyText/LegacyText
// Dependencies: [19, 17, 1085, 21, 5091, 8581, 2]
// Exports: default

// Module 8580 (LegacyText/LegacyText)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import useLegacyTextMigrationHighlight from "useLegacyTextMigrationHighlight" /* 8581 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5091 */;
import size from "module_2" /* 2 */;

const Text = react_native.Text;
const Fonts = Constants.Fonts;
const jsx = Fragment.jsx;
let obj = { text: { fontFamily: Fonts.PRIMARY_MEDIUM, includeFontPadding: false } };
let closure_4 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("design/void/LegacyText/native/LegacyText.tsx");

export default (arg0) => {
  let children;
  let ref;
  let style;
  ({ style, children, ref } = arg0);
  const merged = Object.assign(arg0, Object.assign({ style: 0, children: 0, ref: 0 }));
  const tmp2 = closure_4();
  const obj = useLegacyTextMigrationHighlight;
  const legacyTextMigrationHighlight = obj.useLegacyTextMigrationHighlight();
  const merged1 = Object.assign(merged);
  const items = [tmp2.text, style, legacyTextMigrationHighlight];
  return <Text ref={ref} style={items}>{children}</Text>;
};
