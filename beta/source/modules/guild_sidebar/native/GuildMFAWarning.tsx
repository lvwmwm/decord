// Module ID: 15831
// Function ID: 15832
// Name: GuildMFAWarning
// Dependencies: [5, 19, 17, 1074, 21, 4836, 576, 9578, 2111, 1981, 4525, 5435, 15832, 4832, 1115, 1177, 2]
// Exports: default, getScaledGuildMFAWarningHeight

// Module 15831 (GuildMFAWarning)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4832 */;
import Pressables from "Pressables" /* 5435 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 9578 */;
import AssetRegistryDefault from "AssetRegistry" /* 15832 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c2, c3;

let Fonts;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
function handlePress() {
  return obj(...arguments);
}
let obj = function _handlePress() {
  let paths;
  obj = _asyncToGenerator(async (arg0, value) => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        let articleURL;
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp4;
            articleURL = undefined;
            c2 = 1;
            c3 = 1;
            const obj4 = { value: require("asyncRequire")(paths[8], paths.paths), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          articleURL = value.default;
          obj = closure_129_1(closure_129_2[10]);
          obj.openURL(articleURL.getArticleURL(closure_129_5.SETTING_UP_TWO_FACTOR));
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp16) {
        c3 = 3;
        throw tmp16;
      }
    }
  });
  return obj(...arguments);
};
const Image = react_native.Image;
({ HelpdeskArticles: hasOwnProperty, Fonts } = Constants);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
obj = { MFAWarning: obj2, MFAWarningIcon: { marginVertical: 10, width: 98, height: 53 }, MFAWarningLink: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: 10, alignItems: "center" };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.unsafe_rawColors.BLUE_345, fontFamily: Fonts.PRIMARY_SEMIBOLD };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_sidebar/native/GuildMFAWarning.tsx");

export default function GuildMFAWarning() {
  let items;
  let items1;
  let items2;
  const tmp = closure_8();
  obj = { accessibilityRole: "button", style: tmp.MFAWarning, onPress: handlePress, children: items };
  const obj2 = { style: tmp.MFAWarningIcon, source: AssetRegistryDefault };
  const PressableOpacity = Pressables.PressableOpacity;
  items = [metroRequire(Image, obj2), ];
  const obj3 = { variant: "text-xs/medium", color: "text-default", children: items1 };
  const Text = Text_Text.Text;
  const intl = intl3.intl;
  items1 = [intl.string(intl3.t.ZIf8Ag), ];
  const obj4 = { style: tmp.MFAWarningLink, children: items2 };
  const LegacyText = native.LegacyText;
  const intl2 = intl3.intl;
  items2 = [" ", intl2.string(intl3.t.hvVgAZ)];
  items1[1] = metroImportDefault(LegacyText, obj4);
  items[1] = metroImportDefault(Text, obj3);
  return metroImportDefault(PressableOpacity, obj);
};
export const getScaledGuildMFAWarningHeight = function getScaledGuildMFAWarningHeight(fontScale) {
  obj = useScaledTextLineHeight;
  return 83 + 5 * obj.scaleTextLineHeight("text-xs/medium", fontScale) + 10 + 10;
};
