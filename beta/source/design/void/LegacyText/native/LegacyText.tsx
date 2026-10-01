// Module ID: 8072
// Function ID: 8073
// Name: LegacyText/LegacyText
// Dependencies: [19, 17, 1074, 21, 4836, 8073, 2]

// Module 8072 (LegacyText/LegacyText)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import useLegacyTextMigrationHighlight from "useLegacyTextMigrationHighlight" /* 8073 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const Text = react_native.Text;
const Fonts = Constants.Fonts;
const jsx = Fragment.jsx;
let obj = { text: { fontFamily: Fonts.PRIMARY_MEDIUM, includeFontPadding: false } };
let closure_4 = createStyles.createStyles(obj);
const forwardRefResult = react.forwardRef((arg0, ref) => {
  let children;
  let style;
  ({ style, children } = arg0);
  const merged = Object.assign(arg0, Object.assign({ style: 0, children: 0 }));
  const tmp2 = closure_4();
  const obj = useLegacyTextMigrationHighlight;
  const legacyTextMigrationHighlight = obj.useLegacyTextMigrationHighlight();
  const merged1 = Object.assign(merged);
  const items = [tmp2.text, style, legacyTextMigrationHighlight];
  return <Text ref={arg1} style={items}>{children}</Text>;
});
const result = size.fileFinishedImporting("design/void/LegacyText/native/LegacyText.tsx");

export default forwardRefResult;
