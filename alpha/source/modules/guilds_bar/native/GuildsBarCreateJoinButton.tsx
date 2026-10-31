// Module ID: 18411
// Function ID: 18412
// Name: GuildsBarCreateJoinButton
// Dependencies: [5, 19, 17, 5045, 1072, 1385, 21, 5014, 10251, 1994, 14265, 7380, 9785, 7351, 18357, 504, 18372, 1113, 18412, 11488, 575, 2]

// Module 18411 (GuildsBarCreateJoinButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import PremiumConstants from "PremiumConstants" /* 1385 */;
import CirclePlusIcon2 from "CirclePlusIcon" /* 11488 */;
import GuildsBarAnimatedItemWrapper from "GuildsBarAnimatedItemWrapper" /* 18357 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5045 */;
import Constants from "Constants" /* 1072 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const GuildsBarAnimatedItemWrapperDefault = GuildsBarAnimatedItemWrapper;
let c2, c3;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let obj = function _handleCreateJoinGuildPress() {
  let paths;
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0;
    let items;
    let obj8;
    let obj9;
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
        let tmp;
        let closure_1;
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
            tmp = undefined;
            closure_1 = undefined;
            c2 = 1;
            c3 = 1;
            const obj4 = { value: require("asyncRequire")(paths[8], paths.paths), done: false };
            return obj4;
          }
        } else if (1 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            tmp = value.default;
            c2 = 2;
            c3 = 1;
            const obj6 = { value: closure_129_0(closure_129_2[9])(closure_129_2[10], closure_129_2.paths), done: false };
            return obj6;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          closure_1 = value.default;
          tmp.acknowledgeTooltip(closure_129_9.GUILD_TOOLTIP);
          const obj10 = closure_129_0(closure_129_2[11]);
          if (obj10.isAtGuildCapAndNonPremium()) {
            obj = { initialUpsellKey: closure_129_10.GUILD_CAP, analyticsLocation: obj8, analyticsLocations: items, analyticsProperties: obj9 };
            obj8 = { page: closure_129_7.CREATE_JOIN_GUILD_MODAL };
            const handleShowUpsellAlert = closure_129_1(closure_129_2[12]).handleShowUpsellAlert;
            items = [];
            const tmp11 = closure_129_1(closure_129_2[12]);
            items[0] = closure_129_1(closure_129_2[13]).NEW_GUILD_BUTTON;
            obj9 = { type: closure_129_11.GUILD_CAP_MODAL_UPSELL };
            const result = handleShowUpsellAlert(obj);
          } else {
            closure_1.openCreateGuildModal();
          }
          c3 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp27) {
        c3 = 3;
        throw tmp27;
      }
    }
  });
  return obj(...arguments);
};
const View = react_native.View;
({ AnalyticsPages: metroImportDefault, MOBILE_GUILD_UPSELL_LIST: metroImportAll, TooltipNames: c9, UpsellTypes: c10 } = Constants);
const PremiumUpsellTypes = PremiumConstants.PremiumUpsellTypes;
const jsx = Fragment.jsx;
let closure_13 = createStyles.createStyles({ stretch: { alignSelf: "stretch" } });
const memoResult = react.memo(function GuildsBarCreateJoinButton() {
  let CirclePlusIcon;
  let guildId;
  let intl;
  let obj4;
  let obj5;
  let tmp7;
  let tmp = closure_13();
  obj = GuildsBarAnimatedItemWrapper;
  const items = [SelectedGuildStore];
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles();
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, () => guildId.getGuildId() === closure_1_8);
  const obj3 = { style: tmp.stretch, children: jsx(tmp7, obj4) };
  const memo = react.useMemo(() => {
    obj = {
      onPress() {
        function handleCreateJoinGuildPress() {
          return closure_1_14(...arguments);
        }
        obj = closure_1_0(closure_1_2[11]);
        const tmp = closure_1_2;
        if (obj.isAtGuildCapAndNonPremium()) {
          handleCreateJoinGuildPress();
        } else {
          closure_1_1(tmp[16])(closure_1_8);
        }
      }
    };
    return obj;
  }, []);
  obj4 = { selected: stateFromStores, circle: false, unread: false, styles: guildsBarAnimatedWrapperStyles, overState: "y", config: memo, label: intl.string(intl2.t.l5WIbf), expandedChildren: "guilds-bar-drag-preview", children: jsx(CirclePlusIcon, obj5) };
  tmp7 = GuildsBarAnimatedItemWrapperDefault;
  intl = intl2.intl;
  CirclePlusIcon = CirclePlusIcon2.CirclePlusIcon;
  const colors = nativeDefault.colors;
  obj5 = { size: "md", color: stateFromStores ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT };
  return jsx(View, obj3);
});
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarCreateJoinButton.tsx");

export default memoResult;
