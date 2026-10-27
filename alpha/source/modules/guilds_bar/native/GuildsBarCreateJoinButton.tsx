// Module ID: 17838
// Function ID: 17839
// Name: GuildsBarCreateJoinButton
// Dependencies: [5, 19, 17, 5003, 1084, 1391, 21, 4972, 10141, 1999, 13628, 7309, 9674, 7280, 558, 576, 17784, 504, 17799, 1125, 17839, 587, 11160, 2]

// Module 17838 (GuildsBarCreateJoinButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import PremiumConstants from "PremiumConstants" /* 1391 */;
import GuildCapUpsellHooks from "GuildCapUpsellHooks" /* 7309 */;
import GuildsBarAnimatedItemWrapper from "GuildsBarAnimatedItemWrapper" /* 17784 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5003 */;
import Constants from "Constants" /* 1084 */;
import createStyles from "createStyles" /* 4972 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const GuildsBarAnimatedItemWrapperDefault = GuildsBarAnimatedItemWrapper;
let c2, c3;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let tmp;
const get_initialized = tmp(504);
const intl2 = tmp(1125);
const CirclePlusIcon2 = tmp(11160);
const HomeDrawerAddServerRow = tmp(17839);
function handleCreateJoinGuildPress() {
  return obj(...arguments);
}
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
        return { value: "IconComponent", done: null };
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
          return { value: "IconComponent", done: null };
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
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GuildsBarCreateJoinButton() {
  let MOBILE_GUILDBAR_ICON_DEFAULT;
  let guildId;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp17;
  let tmp18;
  let tmp6;
  let tmp7;
  let tmp = require;
  obj = react2;
  const cResult = obj.c(14);
  const tmp4 = closure_13();
  const obj2 = GuildsBarAnimatedItemWrapper;
  const guildsBarAnimatedWrapperStyles = obj2.useGuildsBarAnimatedWrapperStyles();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SelectedGuildStore];
    const fn = function l() {
      return guildId.getGuildId() === closure_1_8;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = {
      onPress() {
          obj = GuildCapUpsellHooks;
          const tmp = dependencyMap;
          if (obj.isAtGuildCapAndNonPremium()) {
            handleCreateJoinGuildPress();
          } else {
            require("transitionGuildsBarToGuildOrOpenSelectedChannel")(closure_1_8);
          }
        }
    };
    cResult[2] = obj3;
    tmp10 = obj3;
  } else {
    tmp10 = cResult[2];
  }
  const stretch = tmp4.stretch;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl2.intl;
    const stringResult = intl.string(intl2.t.l5WIbf);
    const tmp15 = jsx(HomeDrawerAddServerRow.HomeDrawerAddServerRowExpandedChildren, {});
    cResult[3] = stringResult;
    cResult[4] = tmp15;
    tmp12 = tmp15;
    tmp11 = stringResult;
  } else {
    tmp11 = cResult[3];
    tmp12 = cResult[4];
  }
  const colors = nativeDefault.colors;
  if (stateFromStores) {
    MOBILE_GUILDBAR_ICON_DEFAULT = colors.WHITE;
    tmp17 = tmp16;
  } else {
    MOBILE_GUILDBAR_ICON_DEFAULT = colors.MOBILE_GUILDBAR_ICON_DEFAULT;
    tmp17 = tmp16;
  }
  if (cResult[5] !== MOBILE_GUILDBAR_ICON_DEFAULT) {
    const tmp20 = jsx(CirclePlusIcon2.CirclePlusIcon, { size: "md", color: MOBILE_GUILDBAR_ICON_DEFAULT });
    cResult[5] = MOBILE_GUILDBAR_ICON_DEFAULT;
    cResult[6] = tmp20;
    tmp18 = tmp20;
  } else {
    tmp18 = cResult[6];
  }
  if (cResult[7] === stateFromStores) {
    if (cResult[8] === tmp18) {
      let tmp21;
      if (cResult[9] === guildsBarAnimatedWrapperStyles) {
        tmp21 = cResult[10];
      }
      if (cResult[11] === tmp4.stretch) {
        let tmp23;
        if (cResult[12] === tmp21) {
          tmp23 = cResult[13];
        }
        return tmp23;
      }
      const tmp26 = <View style={stretch}>{tmp21}</View>;
      cResult[11] = tmp4.stretch;
      cResult[12] = tmp21;
      cResult[13] = tmp26;
      tmp23 = tmp26;
    }
  }
  const tmp22 = jsx(tmp17(17784), { selected: stateFromStores, circle: false, unread: false, styles: guildsBarAnimatedWrapperStyles, overState: "y", config: tmp10, label: tmp11, expandedChildren: tmp12, children: tmp18 });
  cResult[7] = stateFromStores;
  cResult[8] = tmp18;
  cResult[9] = guildsBarAnimatedWrapperStyles;
  cResult[10] = tmp22;
  tmp21 = tmp22;
}) : (function GuildsBarCreateJoinButton() {
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
        obj = closure_1_0(closure_1_2[11]);
        const tmp = closure_1_2;
        if (obj.isAtGuildCapAndNonPremium()) {
          closure_1_14();
        } else {
          closure_1_1(tmp[18])(closure_1_8);
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
}));
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarCreateJoinButton.tsx");

export default memoResult;
