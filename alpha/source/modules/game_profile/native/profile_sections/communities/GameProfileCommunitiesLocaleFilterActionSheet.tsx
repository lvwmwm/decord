// Module ID: 10557
// Function ID: 10558
// Name: GameProfileCommunitiesLocaleFilterActionSheet
// Dependencies: [19, 21, 5310, 575, 1630, 10558, 1113, 7961, 7923, 5564, 7756, 7743, 2]
// Exports: default

// Module 10557 (GameProfileCommunitiesLocaleFilterActionSheet)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import useGameProfileCommunitiesLocaleOptionsDefault from "useGameProfileCommunitiesLocaleOptions" /* 10558 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5310 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, locale;

const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles((arg0) => {
  const obj = { content: { paddingBottom: arg0 + nativeDefault.space.PX_16 } };
  ({ paddingBottom: arg0 + nativeDefault.space.PX_16 });
  return obj;
});
const result = size.fileFinishedImporting("modules/game_profile/native/profile_sections/communities/GameProfileCommunitiesLocaleFilterActionSheet.tsx");

export default function GameProfileCommunitiesLocaleFilterActionSheet(arg0) {
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
      return jsx(_undefined(dependencyMap[11]).TableCheckboxRow, {
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
};
export const ACTION_SHEET_KEY = "game-profile-communities-locale-filter";
