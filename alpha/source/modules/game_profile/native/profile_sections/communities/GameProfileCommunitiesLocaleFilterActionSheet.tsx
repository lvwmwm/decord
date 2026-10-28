// Module ID: 9543
// Function ID: 9544
// Name: GameProfileCommunitiesLocaleFilterActionSheet
// Dependencies: [19, 21, 5004, 587, 558, 576, 1630, 9544, 1125, 7284, 6936, 7023, 7334, 5305, 2]

// Module 9543 (GameProfileCommunitiesLocaleFilterActionSheet)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import useGameProfileCommunitiesLocaleOptionsDefault from "useGameProfileCommunitiesLocaleOptions" /* 9544 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5004 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles((arg0) => {
  const obj = { content: { paddingBottom: arg0 + nativeDefault.space.PX_16 } };
  ({ paddingBottom: arg0 + nativeDefault.space.PX_16 });
  return obj;
});
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function GameProfileCommunitiesLocaleFilterActionSheet(arg0) {
  let first;
  let gameId;
  let locales;
  let options;
  let tmp13;
  let tmp8;
  let toggleLocale;
  const obj = toggleLocale(576);
  const cResult = obj.c(12);
  ({ gameId, locales } = arg0);
  const tmp4 = closure_4(useSafeAreaInsetsDefault().bottom);
  ({ options, toggleLocale } = useGameProfileCommunitiesLocaleOptionsDefault(gameId, locales));
  useGameProfileCommunitiesLocaleOptionsDefault(gameId, locales);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1125).intl;
    const stringResult = intl.string(toggleLocale(1125).t.OlOHDH);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp10 = jsx(toggleLocale(7284).BottomSheetTitleHeader, { title: first });
    cResult[1] = tmp10;
    tmp8 = tmp10;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] === options) {
    let tmp12;
    let tmp15;
    if (cResult[3] === toggleLocale) {
      tmp12 = cResult[4];
    }
    if (cResult[7] !== tmp12) {
      const tmp17 = jsx(toggleLocale(7023).TableRowGroup, { hasIcons: false, children: tmp12 });
      cResult[7] = tmp12;
      cResult[8] = tmp17;
      tmp15 = tmp17;
    } else {
      tmp15 = cResult[8];
    }
    if (cResult[9] === tmp4.content) {
      let tmp18;
      if (cResult[10] === tmp15) {
        tmp18 = cResult[11];
      }
      return tmp18;
    }
    const ActionSheet = tmp(7334).ActionSheet;
    const tmp20 = <ActionSheet scrollable header={tmp8} dismissAccessibilityLabel={first}>{null}</ActionSheet>;
    cResult[9] = tmp4.content;
    cResult[10] = tmp15;
    cResult[11] = tmp20;
    tmp18 = tmp20;
  }
  if (cResult[5] !== toggleLocale) {
    const fn = function y(locale) {
      let checked;
      let disabled;
      let label;
      locale = locale.locale;
      ({ label, checked, disabled } = locale);
      return jsx(toggleLocale(dependencyMap[10]).TableCheckboxRow, {
        label,
        checked,
        disabled,
        onPress() {
          return toggleLocale(locale);
        }
      }, locale);
    };
    cResult[5] = toggleLocale;
    cResult[6] = fn;
    tmp13 = fn;
  } else {
    tmp13 = cResult[6];
  }
  const mapped = options.map(tmp13);
  cResult[2] = options;
  cResult[3] = toggleLocale;
  cResult[4] = mapped;
  tmp12 = mapped;
}) : (function GameProfileCommunitiesLocaleFilterActionSheet(arg0) {
  let _undefined;
  let c0;
  let gameId;
  let locales;
  let options;
  _require = undefined;
  ({ gameId, locales } = arg0);
  const tmp = closure_4(useSafeAreaInsetsDefault().bottom);
  ({ options, toggleLocale: c0 } = useGameProfileCommunitiesLocaleOptionsDefault(gameId, locales));
  useGameProfileCommunitiesLocaleOptionsDefault(gameId, locales);
  const intl = require("intl").intl;
  const stringResult = intl.string(require("intl").t.OlOHDH);
  const ActionSheet = require("ActionSheet").ActionSheet;
  const BottomSheetScrollView = require("BottomSheetModal").BottomSheetScrollView;
  ({
    hasIcons: false,
    children: options.map((locale) => {
      let checked;
      let disabled;
      let label;
      locale = locale.locale;
      ({ label, checked, disabled } = locale);
      return jsx(_undefined(dependencyMap[10]).TableCheckboxRow, {
        label,
        checked,
        disabled,
        onPress() {
          return locale(locale);
        }
      }, locale);
    })
  });
  const TableRowGroup = require("TableRowGroup").TableRowGroup;
  return <ActionSheet scrollable header={null} dismissAccessibilityLabel={stringResult}>{null}</ActionSheet>;
});
const result = size.fileFinishedImporting("modules/game_profile/native/profile_sections/communities/GameProfileCommunitiesLocaleFilterActionSheet.tsx");

export default tmp3;
export const ACTION_SHEET_KEY = "game-profile-communities-locale-filter";
