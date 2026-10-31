// Module ID: 18246
// Function ID: 18247
// Name: GuildMFAWarning
// Dependencies: [5, 19, 1072, 21, 5014, 575, 11047, 2061, 1994, 5709, 6980, 5717, 18247, 5624, 1113, 1187, 2]
// Exports: default, getScaledGuildMFAWarningHeight

// Module 18246 (GuildMFAWarning)
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import native from "native" /* 1187 */;
import Text_Text from "Text/Text" /* 5624 */;
import FastImageDefault from "FastImage" /* 5717 */;
import Pressables from "Pressables" /* 6980 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 11047 */;
import AssetRegistryDefault from "AssetRegistry" /* 18247 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c2, c3;

let Fonts;
let closure_4;
let hasOwnProperty;
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
            const obj4 = { value: require("asyncRequire")(paths[7], paths.paths), done: false };
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
          obj = closure_129_1(closure_129_2[9]);
          obj.openURL(articleURL.getArticleURL(closure_129_4.SETTING_UP_TWO_FACTOR));
          c3 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp16) {
        c3 = 3;
        throw tmp16;
      }
    }
  });
  return obj(...arguments);
};
({ HelpdeskArticles: closure_4, Fonts } = Constants);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
obj = { MFAWarning: obj2, MFAWarningIcon: { marginVertical: 10, width: 98, height: 53 }, MFAWarningLink: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: 10, alignItems: "center" };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.unsafe_rawColors.BLUE_345, fontFamily: Fonts.PRIMARY_SEMIBOLD };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_sidebar/native/GuildMFAWarning.tsx");

export default function GuildMFAWarning() {
  let items;
  let items1;
  let items2;
  const tmp = closure_7();
  obj = { accessibilityRole: "button", style: tmp.MFAWarning, onPress: handlePress, children: items };
  const PressableOpacity = Pressables.PressableOpacity;
  const obj2 = { style: tmp.MFAWarningIcon, source: AssetRegistryDefault };
  const tmp2 = FastImageDefault;
  items = [hasOwnProperty(tmp2, obj2), ];
  const obj3 = { variant: "text-xs/medium", color: "text-default", children: items1 };
  const Text = Text_Text.Text;
  const intl = intl3.intl;
  items1 = [intl.string(intl3.t.ZIf8Ag), ];
  const obj4 = { style: tmp.MFAWarningLink, children: items2 };
  const LegacyText = native.LegacyText;
  const intl2 = intl3.intl;
  items2 = [" ", intl2.string(intl3.t.hvVgAZ)];
  items1[1] = metroRequire(LegacyText, obj4);
  items[1] = metroRequire(Text, obj3);
  return metroRequire(PressableOpacity, obj);
};
export function getScaledGuildMFAWarningHeight(fontScale) {
  obj = useScaledTextLineHeight;
  return 83 + 5 * obj.scaleTextLineHeight("text-xs/medium", fontScale) + 10 + 10;
}
