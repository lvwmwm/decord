// Module ID: 16612
// Function ID: 16613
// Name: GuildMFAWarning
// Dependencies: [5, 19, 1085, 21, 5092, 587, 10514, 2128, 2000, 4806, 558, 576, 6156, 16613, 1126, 5088, 1200, 6184, 2]
// Exports: getScaledGuildMFAWarningHeight

// Module 16612 (GuildMFAWarning)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import native from "native" /* 1200 */;
import Text_Text from "Text/Text" /* 5088 */;
import FastImageDefault from "FastImage" /* 6156 */;
import Pressables from "Pressables" /* 6184 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 10514 */;
import AssetRegistryDefault from "AssetRegistry" /* 16613 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
        return { value: "IconComponent", done: "+51" };
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
          return { value: "IconComponent", done: "+51" };
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
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildMFAWarning() {
  let items;
  let items1;
  let items2;
  let tmp10;
  let tmp12;
  let tmp14;
  let tmp5;
  obj = react2;
  const cResult = obj.c(10);
  const tmp4 = closure_7();
  const MFAWarning = tmp4.MFAWarning;
  if (cResult[0] !== tmp4.MFAWarningIcon) {
    const obj2 = { style: tmp4.MFAWarningIcon, source: AssetRegistryDefault };
    const tmp8 = FastImageDefault;
    const tmp9 = hasOwnProperty(tmp8, obj2);
    cResult[0] = tmp4.MFAWarningIcon;
    cResult[1] = tmp9;
    tmp5 = tmp9;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(intl3.t.ZIf8Ag);
    cResult[2] = stringResult;
    tmp10 = stringResult;
  } else {
    tmp10 = cResult[2];
  }
  const MFAWarningLink = tmp4.MFAWarningLink;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(intl3.t.hvVgAZ);
    cResult[3] = stringResult1;
    tmp12 = stringResult1;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] !== tmp4.MFAWarningLink) {
    const obj3 = { variant: "text-xs/medium", color: "text-default", children: items };
    items = [tmp10, ];
    const Text = tmp(5088).Text;
    const obj4 = { style: MFAWarningLink, children: items1 };
    items1 = [" ", tmp12];
    items[1] = metroRequire(native.LegacyText, obj4);
    const tmp16 = metroRequire(Text, obj3);
    cResult[4] = tmp4.MFAWarningLink;
    cResult[5] = tmp16;
    tmp14 = tmp16;
  } else {
    tmp14 = cResult[5];
  }
  if (cResult[6] === tmp4.MFAWarning) {
    if (cResult[7] === tmp5) {
      let tmp17;
      if (cResult[8] === tmp14) {
        tmp17 = cResult[9];
      }
      return tmp17;
    }
  }
  const obj5 = { accessibilityRole: "button", style: MFAWarning, onPress: handlePress, children: items2 };
  items2 = [tmp5, tmp14];
  const tmp18 = metroRequire(Pressables.PressableOpacity, obj5);
  cResult[6] = tmp4.MFAWarning;
  cResult[7] = tmp5;
  cResult[8] = tmp14;
  cResult[9] = tmp18;
  tmp17 = tmp18;
}) : (function GuildMFAWarning() {
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
});
const result = size.fileFinishedImporting("modules/guild_sidebar/native/GuildMFAWarning.tsx");

export default tmp6;
export const getScaledGuildMFAWarningHeight = function getScaledGuildMFAWarningHeight(fontScale) {
  obj = useScaledTextLineHeight;
  return 83 + 5 * obj.scaleTextLineHeight("text-xs/medium", fontScale) + 10 + 10;
};
