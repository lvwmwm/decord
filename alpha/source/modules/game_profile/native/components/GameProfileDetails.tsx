// Module ID: 9482
// Function ID: 9483
// Name: GameProfileDetails
// Dependencies: [19, 17, 8839, 21, 8830, 9483, 7053, 9292, 9485, 9487, 4971, 587, 558, 576, 5660, 9489, 9490, 9303, 1128, 2000, 4796, 9491, 5234, 2]

// Module 9482 (GameProfileDetails)
import nativeDefault from "native" /* 587 */;
import intl13 from "intl" /* 1128 */;
import Server from "Server" /* 2000 */;
import DateUtilsAll from "DateUtils" /* 4796 */;
import Text_Text from "Text/Text" /* 5234 */;
import LinkingDefault from "Linking" /* 5660 */;
import MobilePhoneIcon from "MobilePhoneIcon" /* 7053 */;
import PlatformType from "PlatformType" /* 8830 */;
import ContentInventoryConstants from "ContentInventoryConstants" /* 8839 */;
import XboxNeutralIcon from "XboxNeutralIcon" /* 9292 */;
import SKUUtils from "SKUUtils" /* 9303 */;
import ScreenIcon from "ScreenIcon" /* 9483 */;
import PlaystationNeutralIcon from "PlaystationNeutralIcon" /* 9485 */;
import NintendoSwitchNeutralIcon from "NintendoSwitchNeutralIcon" /* 9487 */;
import useGameProfilePlatformsDefault from "useGameProfilePlatforms" /* 9490 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4971 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let importDefault;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj10;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let react = react_mod;
({ View: hasOwnProperty, Pressable: metroRequire } = react_native);
const IGDB_ATTRIBUTION_LINK = ContentInventoryConstants.IGDB_ATTRIBUTION_LINK;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let obj = { mobile: MobilePhoneIcon.MobilePhoneIcon };
obj[PlatformType.PlatformType.DESKTOP] = ScreenIcon.ScreenIcon;
obj[PlatformType.PlatformType.XBOX] = XboxNeutralIcon.XboxNeutralIcon;
obj[PlatformType.PlatformType.PLAYSTATION] = PlaystationNeutralIcon.PlaystationNeutralIcon;
obj[PlatformType.PlatformType.NINTENDO] = NintendoSwitchNeutralIcon.NintendoSwitchNeutralIcon;
let createStyles = createStyles_mod;
let obj2 = { container: obj3, headerText: obj4, detailsContainer: obj5, detailsRow: obj6, detailsRowValue: obj7, detailsRowBottomBorder: obj8, platformsContainer: obj9, linksContainer: obj10 };
obj3 = { gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj4 = { paddingHorizontal: nativeDefault.space.PX_8 };
obj5 = { borderRadius: nativeDefault.radii.lg, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj6 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: nativeDefault.space.PX_12 };
obj7 = { flexDirection: "column", flexShrink: 1, paddingLeft: nativeDefault.space.PX_32 };
obj8 = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
obj9 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
obj10 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
let closure_11 = createStyles(obj2);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function GameProfileWebsiteButton(url) {
  let action;
  let icon;
  let title;
  let trackAction;
  obj = action(576);
  const cResult = obj.c(8);
  ({ icon, action } = url);
  ({ title, trackAction } = url);
  url = url.url;
  if (cResult[0] === action) {
    if (cResult[1] === trackAction) {
      let tmp3;
      if (cResult[2] === url) {
        tmp3 = cResult[3];
      }
      if (cResult[4] === tmp3) {
        if (cResult[5] === icon) {
          let tmp4;
          if (cResult[6] === title) {
            tmp4 = cResult[7];
          }
          return tmp4;
        }
      }
      const obj2 = { accessibilityRole: "button", accessibilityLabel: title, onPress: tmp3, hitSlop: trackAction(587).space.PX_4, children: icon };
      const tmp8 = closure_8(closure_6, obj2);
      cResult[4] = tmp3;
      cResult[5] = icon;
      cResult[6] = title;
      cResult[7] = tmp8;
      tmp4 = tmp8;
    }
  }
  const fn = function l() {
    obj = LinkingDefault;
    obj.openURL(url);
    trackAction(action);
  };
  cResult[0] = action;
  cResult[1] = trackAction;
  cResult[2] = url;
  cResult[3] = fn;
  tmp3 = fn;
}) : (function GameProfileWebsiteButton(action) {
  let icon;
  let title;
  action = action.action;
  const trackAction = action.trackAction;
  const url = action.url;
  const items = [trackAction, action, url];
  ({ icon, title } = action);
  obj = {
    accessibilityRole: "button",
    accessibilityLabel: title,
    onPress: react.useCallback(() => {
      obj = LinkingDefault;
      obj.openURL(url);
      trackAction(action);
    }, items),
    hitSlop: trackAction(587).space.PX_4,
    children: icon
  };
  return closure_8(closure_6, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function GameProfileDetails(arg0) {
  let arr3;
  let closure_1;
  let container;
  let game;
  let headerText;
  let tmp23;
  let tmp32;
  let tmp55;
  let trackAction;
  let tmp = trackAction;
  let tmp2 = dependencyMap;
  obj = trackAction(576);
  const cResult = obj.c(75);
  ({ game, trackAction } = arg0);
  const tmp4 = closure_11();
  importDefault = tmp4;
  let obj2 = trackAction(9489);
  const gameProfileLinks = obj2.useGameProfileLinks(game);
  const arr2 = useGameProfilePlatformsDefault(game);
  if (null != game) {
    let tmp9;
    let tmp17;
    let tmp26;
    let tmp58;
    let tmp59;
    if (cResult[1] === game) {
      if (cResult[2] === gameProfileLinks) {
        if (cResult[3] === arr2) {
          if (cResult[4] === tmp4.linksContainer) {
            if (cResult[5] === tmp4.platformsContainer) {
              let tmp6;
              if (cResult[6] === trackAction) {
                tmp6 = cResult[7];
              }
              arr3 = tmp6;
            }
          }
        }
      }
    }
    let genres;
    let tmp7 = cResult[8];
    if (game != null) {
      genres = game.genres;
    }
    if (tmp7 !== genres) {
      let joined;
      if (game != null) {
        const genres1 = game.genres;
        const mapped = genres1.map(tmp(9303).getGenreText);
        joined = mapped.join(", ");
      }
      let genres2;
      if (game != null) {
        genres2 = game.genres;
      }
      cResult[8] = genres2;
      cResult[9] = joined;
      tmp9 = joined;
    } else {
      tmp9 = cResult[9];
    }
    let items = [];
    if (null != tmp9) {
      if ("" !== tmp9) {
        let tmp12;
        if (cResult[10] !== game.genres.length) {
          let stringResult;
          if (1 !== game.genres.length) {
            const intl2 = tmp(1128).intl;
            stringResult = intl2.string(tmp(1128).t.pDgwYB);
          } else {
            const intl = tmp(1128).intl;
            stringResult = intl.string(tmp(1128).t.mjFKqn);
          }
          cResult[10] = game.genres.length;
          cResult[11] = stringResult;
          tmp12 = stringResult;
        } else {
          tmp12 = cResult[11];
        }
        if (cResult[12] === tmp9) {
          let tmp14;
          if (cResult[13] === tmp12) {
            tmp14 = cResult[14];
          }
          items.push(tmp14);
        }
        let obj3 = { label: tmp12, value: tmp9 };
        cResult[12] = tmp9;
        cResult[13] = tmp12;
        cResult[14] = obj3;
        tmp14 = obj3;
      }
    }
    if (cResult[15] !== game) {
      let tmp20;
      let companyByRole;
      if (game != null) {
        companyByRole = game.getCompanyByRole(tmp(2000).GameCompanyRole.PUBLISHER);
      }
      const _Symbol2 = Symbol;
      if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
        class L {
          constructor(name) {
            return name.name;
          }
        }
        cResult[18] = L;
        tmp20 = L;
      } else {
        class L {
          constructor(name) {
            return name.name;
          }
        }
      }
      const mapped1 = companyByRole.map(tmp20);
      const joined1 = mapped1.join(", ");
      cResult[15] = game;
      cResult[16] = companyByRole;
      cResult[17] = joined1;
      tmp17 = joined1;
    } else {
      class L {
        constructor(name) {
          return name.name;
        }
      }
      tmp17 = cResult[17];
    }
    if (null != tmp17) {
      class L {
        constructor(name) {
          return name.name;
        }
      }
      if ("" !== tmp17) {
        class L {
          constructor(name) {
            return name.name;
          }
        }
        if (cResult[21] === tmp17) {
          class L {
            constructor(name) {
              return name.name;
            }
          }
          items.push(tmp23);
        }
        const obj4 = { label: tmp22, value: tmp17 };
        cResult[21] = tmp17;
        cResult[22] = tmp22;
        cResult[23] = obj4;
        tmp23 = obj4;
      }
    }
    if (cResult[24] !== game) {
      let tmp27Result;
      let tmp29;
      class L {
        constructor(name) {
          return name.name;
        }
      }
      if (game != null) {
        class L {
          constructor(name) {
            return name.name;
          }
        }
        tmp27Result = tmp27(tmp(2000).GameCompanyRole.DEVELOPER);
      }
      const _Symbol3 = Symbol;
      if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
        class O {
          constructor(name) {
            return name.name;
          }
        }
        cResult[27] = O;
        tmp29 = O;
      } else {
        class O {
          constructor(name) {
            return name.name;
          }
        }
      }
      const mapped2 = tmp27Result.map(tmp29);
      const joined2 = mapped2.join(", ");
      cResult[24] = game;
      cResult[25] = tmp27Result;
      cResult[26] = joined2;
      tmp26 = joined2;
    } else {
      class O {
        constructor(name) {
          return name.name;
        }
      }
      tmp26 = cResult[26];
    }
    if (null != tmp26) {
      class O {
        constructor(name) {
          return name.name;
        }
      }
      if ("" !== tmp26) {
        class O {
          constructor(name) {
            return name.name;
          }
        }
        if (cResult[30] === tmp26) {
          class O {
            constructor(name) {
              return name.name;
            }
          }
          items.push(tmp32);
        }
        const obj5 = { label: tmp31, value: tmp26 };
        cResult[30] = tmp26;
        cResult[31] = tmp31;
        cResult[32] = obj5;
        tmp32 = obj5;
      }
    }
    if (game != null) {
      class O {
        constructor(name) {
          return name.name;
        }
      }
    }
    if (null != undefined) {
      class O {
        constructor(name) {
          return name.name;
        }
      }
      if ("" !== undefined) {
        let tmp35;
        let tmp43;
        class O {
          constructor(name) {
            return name.name;
          }
        }
        const _Symbol7 = Symbol;
        if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
          class O {
            constructor(name) {
              return name.name;
            }
          }
          const stringResult1 = obj9.string(tmp(1128).t.H3mPDT);
          cResult[33] = stringResult1;
          tmp35 = stringResult1;
        } else {
          class O {
            constructor(name) {
              return name.name;
            }
          }
        }
        if (cResult[34] !== undefined) {
          class O {
            constructor(name) {
              return name.name;
            }
          }
          const _Date = Date;
          const self = this;
          const self2 = this;
          const dateFormat = arr3(4796).dateFormat;
          arr3(4796);
          const date = new Date(undefined);
          cResult[34] = undefined;
          cResult[35] = dateFormat(date, "LL");
          const dateFormatResult = dateFormat(date, "LL");
        } else {
          class O {
            constructor(name) {
              return name.name;
            }
          }
        }
        if (cResult[36] !== tmp37) {
          class O {
            constructor(name) {
              return name.name;
            }
          }
          tmp44[0] = tmp35;
          tmp44[1] = tmp37;
          cResult[36] = tmp37;
          cResult[37] = tmp44;
          tmp43 = tmp44;
        } else {
          class O {
            constructor(name) {
              return name.name;
            }
          }
        }
        items.push(tmp43);
      }
    }
    if (arr2.length > 0) {
      class O {
        constructor(name) {
          return name.name;
        }
      }
      const platformsContainer = tmp4.platformsContainer;
      if (cResult[40] !== arr2) {
        let tmp48;
        class O {
          constructor(name) {
            return name.name;
          }
        }
        const _Symbol4 = Symbol;
        if (cResult[42] === Symbol.for("react.memo_cache_sentinel")) {
          class O {
            constructor(name) {
              return name.name;
            }
          }
          cResult[42] = tmp49;
          tmp48 = tmp49;
        } else {
          class O {
            constructor(name) {
              return name.name;
            }
          }
        }
        const mapped3 = arr2.map(tmp48);
        cResult[40] = arr2;
        cResult[41] = mapped3;
      } else {
        class O {
          constructor(name) {
            return name.name;
          }
        }
      }
      if (cResult[43] === tmp4.platformsContainer) {
        class O {
          constructor(name) {
            return name.name;
          }
        }
        if (cResult[46] === tmp46) {
          class O {
            constructor(name) {
              return name.name;
            }
          }
          items.push(tmp55);
        }
        const obj6 = { label: tmp46, value: tmp51 };
        cResult[46] = tmp46;
        cResult[47] = tmp51;
        cResult[48] = obj6;
        tmp55 = obj6;
      }
      const obj7 = { style: platformsContainer, children: tmp47 };
      cResult[43] = tmp4.platformsContainer;
      cResult[44] = tmp47;
      cResult[45] = closure_8(closure_5, obj7);
      const tmp54 = closure_8(closure_5, obj7);
    }
    const _Symbol5 = Symbol;
    if (cResult[49] === Symbol.for("react.memo_cache_sentinel")) {
      class H {
        constructor(arg0) {
          const tmp = closure_1(dependencyMap[21]);
          return tmp(arg0, closure_1(dependencyMap[11]).colors.ICON_SUBTLE);
        }
      }
      cResult[49] = H;
      tmp58 = H;
    } else {
      class H {
        constructor(arg0) {
          const tmp = closure_1(dependencyMap[21]);
          return tmp(arg0, closure_1(dependencyMap[11]).colors.ICON_SUBTLE);
        }
      }
    }
    const _Symbol6 = Symbol;
    if (cResult[50] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor(arg0) {
          return null != arg0;
        }
      }
      cResult[50] = F;
      tmp59 = F;
    } else {
      class F {
        constructor(arg0) {
          return null != arg0;
        }
      }
    }
    const mapped4 = gameProfileLinks.map(tmp58);
    const found = mapped4.filter(tmp59);
    if (found.length > 0) {
      let tmp60;
      let tmp62;
      let tmp67;
      class F {
        constructor(arg0) {
          return null != arg0;
        }
      }
      if (cResult[51] === Symbol.for("react.memo_cache_sentinel")) {
        class F {
          constructor(arg0) {
            return null != arg0;
          }
        }
        const stringResult2 = obj12.string(tmp(1128).t["Oj3o1/"]);
        cResult[51] = stringResult2;
        tmp60 = stringResult2;
      } else {
        class F {
          constructor(arg0) {
            return null != arg0;
          }
        }
      }
      if (cResult[52] !== trackAction) {
        class F {
          constructor(arg0) {
            return null != arg0;
          }
        }
        cResult[52] = trackAction;
        cResult[53] = tmp63;
        tmp62 = tmp63;
      } else {
        class F {
          constructor(arg0) {
            return null != arg0;
          }
        }
      }
      const obj8 = { style: tmp4.linksContainer, children: found.map(tmp62) };
      const tmp66 = closure_8(closure_5, obj8);
      if (cResult[54] !== tmp66) {
        class F {
          constructor(arg0) {
            return null != arg0;
          }
        }
        tmp68[0] = tmp60;
        tmp68[1] = tmp66;
        cResult[54] = tmp66;
        cResult[55] = tmp68;
        tmp67 = tmp68;
      } else {
        class F {
          constructor(arg0) {
            return null != arg0;
          }
        }
      }
      items.push(tmp67);
    }
    if (items.length > 0) {
      let tmp71;
      let tmp70;
      let tmp75;
      class F {
        constructor(arg0) {
          return null != arg0;
        }
      }
      if (cResult[56] === Symbol.for("react.memo_cache_sentinel")) {
        class F {
          constructor(arg0) {
            return null != arg0;
          }
        }
        const stringResult3 = obj14.string(tmp(1128).t["BwQ+9e"]);
        const intl3 = tmp(1128).intl;
        const obj10 = { igdbLink: IGDB_ATTRIBUTION_LINK };
        const formatResult = intl3.format(tmp(1128).t.XPFZVl, obj10);
        cResult[56] = stringResult3;
        cResult[57] = formatResult;
        tmp71 = formatResult;
        tmp70 = stringResult3;
      } else {
        class F {
          constructor(arg0) {
            return null != arg0;
          }
        }
        tmp71 = cResult[57];
      }
      if (cResult[58] !== tmp71) {
        class F {
          constructor(arg0) {
            return null != arg0;
          }
        }
        tmp76[0] = tmp70;
        tmp76[1] = tmp71;
        cResult[58] = tmp71;
        cResult[59] = tmp76;
        tmp75 = tmp76;
      } else {
        class F {
          constructor(arg0) {
            return null != arg0;
          }
        }
      }
      items.push(tmp75);
    }
    cResult[1] = game;
    cResult[2] = gameProfileLinks;
    cResult[3] = arr2;
    cResult[4] = tmp4.linksContainer;
    cResult[5] = tmp4.platformsContainer;
    cResult[6] = trackAction;
    cResult[7] = items;
    tmp6 = items;
  } else {
    class F {
      constructor(arg0) {
        return null != arg0;
      }
    }
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor(arg0) {
          return null != arg0;
        }
      }
      cResult[0] = tmp5;
      arr3 = tmp5;
    } else {
      class F {
        constructor(arg0) {
          return null != arg0;
        }
      }
    }
  }
  if (0 === arr3.length) {
    class F {
      constructor(arg0) {
        return null != arg0;
      }
    }
  } else {
    let tmp78;
    class F {
      constructor(arg0) {
        return null != arg0;
      }
    }
    const _Symbol8 = Symbol;
    ({ container, headerText } = tmp4);
    if (cResult[60] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor(arg0) {
          return null != arg0;
        }
      }
      const stringResult4 = obj16.string(tmp(1128).t["7OjmmH"]);
      cResult[60] = stringResult4;
      tmp78 = stringResult4;
    } else {
      class F {
        constructor(arg0) {
          return null != arg0;
        }
      }
    }
    if (cResult[61] !== tmp4.headerText) {
      class F {
        constructor(arg0) {
          return null != arg0;
        }
      }
      const obj11 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", style: headerText, children: tmp78 };
      cResult[61] = tmp4.headerText;
      cResult[62] = closure_8(tmp(5234).Text, obj11);
      const tmp81 = closure_8(tmp(5234).Text, obj11);
    } else {
      class F {
        constructor(arg0) {
          return null != arg0;
        }
      }
    }
    if (cResult[63] === arr3) {
      class F {
        constructor(arg0) {
          return null != arg0;
        }
      }
    }
    const mapped5 = arr3.map((children, index) => {
      let items1;
      let value;
      const items = [closure_1.detailsRow, ];
      let prop = null;
      const tmp = React4;
      const tmp2 = hasOwnProperty;
      if (arr3.length > 1) {
        prop = null;
        if (index < arr2.length - 1) {
          prop = tmp3.detailsRowBottomBorder;
        }
      }
      obj = { style: items, children: items1 };
      items[1] = prop;
      items1 = [, ];
      const obj2 = { variant: "text-sm/medium", color: "text-subtle", lineClamp: 1, children: children.label };
      items1[0] = metroImportAll(Text_Text.Text, obj2);
      const tmp6 = metroImportAll;
      if (typeof children.value === "string") {
        const obj3 = { variant: "text-sm/normal", color: "text-subtle", lineClamp: 1, style: closure_1.detailsRowValue, children: children.value };
        value = tmp6(Text_Text.Text, obj3);
      } else {
        value = children.value;
      }
      items1[1] = value;
      return tmp(tmp2, obj, children.label);
    });
    cResult[63] = arr3;
    cResult[64] = tmp4.detailsRow;
    cResult[65] = tmp4.detailsRowBottomBorder;
    cResult[66] = tmp4.detailsRowValue;
    cResult[67] = mapped5;
  }
}) : (function GameProfileDetails(game) {
  let intl;
  let items1;
  let length;
  game = game.game;
  const trackAction = game.trackAction;
  let gameProfileLinks;
  let tmp = closure_11();
  let closure_2 = tmp;
  let tmp2 = game;
  const tmp3 = gameProfileLinks;
  obj = game(gameProfileLinks[15]);
  gameProfileLinks = obj.useGameProfileLinks(game);
  const tmp5 = trackAction(gameProfileLinks[16])(game);
  react = tmp5;
  let items = [, , , , , ];
  ({ linksContainer: arr[0], platformsContainer: arr[1] } = tmp);
  items[2] = game;
  items[3] = gameProfileLinks;
  items[4] = tmp5;
  items[5] = trackAction;
  const memo = react.useMemo(function() {
    let date;
    let dateFormat;
    let intl10;
    let intl11;
    let intl12;
    let intl7;
    let obj11;
    let obj7;
    let obj9;
    obj = game;
    if (null == game) {
      return [];
    } else {
      let joined;
      if (obj != null) {
        const genres = obj.genres;
        let tmp = require;
        const mapped = genres.map(SKUUtils.getGenreText);
        joined = mapped.join(", ");
      }
      const items = [];
      const tmp4 = null != joined && "" !== joined;
      if (tmp4) {
        let stringResult;
        const push = items.push;
        if (1 !== obj.genres.length) {
          const intl2 = intl13.intl;
          stringResult = intl2.string(intl13.t.pDgwYB);
        } else {
          const intl = intl13.intl;
          stringResult = intl.string(intl13.t.mjFKqn);
        }
        let obj2 = { label: stringResult, value: joined };
        push(obj2);
      }
      let companyByRole;
      if (obj != null) {
        companyByRole = obj.getCompanyByRole(Server.GameCompanyRole.PUBLISHER);
      }
      const mapped1 = companyByRole.map((name) => name.name);
      const joined1 = mapped1.join(", ");
      const tmp19 = null != joined1 && "" !== joined1;
      if (tmp19) {
        let stringResult1;
        const push2 = items.push;
        if (1 !== companyByRole.length) {
          const intl4 = intl13.intl;
          stringResult1 = intl4.string(intl13.t.Hc7Enk);
        } else {
          const intl3 = intl13.intl;
          stringResult1 = intl3.string(intl13.t["4Byy/G"]);
        }
        const obj3 = { label: stringResult1, value: joined1 };
        push2(obj3);
      }
      let companyByRole1;
      if (obj != null) {
        companyByRole1 = obj.getCompanyByRole(Server.GameCompanyRole.DEVELOPER);
      }
      const mapped2 = companyByRole1.map((name) => name.name);
      const joined2 = mapped2.join(", ");
      const tmp34 = null != joined2 && "" !== joined2;
      if (tmp34) {
        let stringResult2;
        const push3 = items.push;
        if (1 !== companyByRole1.length) {
          const intl6 = intl13.intl;
          stringResult2 = intl6.string(intl13.t.KATEJB);
        } else {
          const intl5 = intl13.intl;
          stringResult2 = intl5.string(intl13.t.na3PT0);
        }
        const obj4 = { label: stringResult2, value: joined2 };
        push3(obj4);
      }
      let firstReleaseDate;
      if (obj != null) {
        firstReleaseDate = obj.firstReleaseDate;
      }
      const tmp46 = null != firstReleaseDate && "" !== firstReleaseDate;
      if (tmp46) {
        const push4 = items.push;
        const obj5 = { label: intl7.string(intl13.t.H3mPDT), value: dateFormat(date, "LL") };
        intl7 = intl13.intl;
        const _Date = Date;
        const self = this;
        const self2 = this;
        dateFormat = DateUtilsAll.dateFormat;
        DateUtilsAll;
        date = new Date(firstReleaseDate);
        push4(obj5);
      }
      if (length.length > 0) {
        let stringResult3;
        const push5 = items.push;
        if (1 !== length.length) {
          const intl9 = intl13.intl;
          stringResult3 = intl9.string(intl13.t.PNqxNe);
        } else {
          const intl8 = intl13.intl;
          stringResult3 = intl8.string(intl13.t["UxAag+"]);
        }
        const obj6 = { label: stringResult3, value: metroImportAll(hasOwnProperty, obj7) };
        obj7 = {
          style: closure_2.platformsContainer,
          children: length.map((item) => {
                let obj2;
                obj = { size: "md", color: trackAction(gameProfileLinks[11]).colors.ICON_SUBTLE, accessibilityLabel: obj2.getGameProfilePlatformText(item) };
                const tmp = closure_1_10[item];
                obj2 = game(gameProfileLinks[16]);
                return closure_1_8(tmp, obj, item);
              })
        };
        push5(obj6);
      }
      const mapped3 = gameProfileLinks.map((item) => {
        const tmp = trackAction(gameProfileLinks[21]);
        return tmp(item, trackAction(gameProfileLinks[11]).colors.ICON_SUBTLE);
      });
      const found = mapped3.filter((item) => null != item);
      if (found.length > 0) {
        const push6 = items.push;
        const obj8 = { label: intl10.string(intl13.t["Oj3o1/"]), value: metroImportAll(hasOwnProperty, obj9) };
        intl10 = intl13.intl;
        obj9 = {
          style: closure_2.linksContainer,
          children: found.map((icon) => {
                const url = icon.url;
                obj = { icon: icon.icon, action: icon.action, title: icon.title, url, trackAction };
                return closure_2_8(closure_2_12, obj, url);
              })
        };
        push6(obj8);
      }
      if (items.length > 0) {
        const push7 = items.push;
        const obj10 = { label: intl11.string(intl13.t["BwQ+9e"]), value: intl12.format(intl13.t.XPFZVl, obj11) };
        intl11 = intl13.intl;
        intl12 = intl13.intl;
        obj11 = { igdbLink: IGDB_ATTRIBUTION_LINK };
        push7(obj10);
      }
      return items;
    }
  }, items);
  let tmp6 = null;
  if (0 !== memo.length) {
    let tmp7 = closure_9;
    let obj2 = { style: tmp.container, children: items1 };
    let obj3 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", style: tmp.headerText, children: intl.string(tmp2(tmp3[18]).t["7OjmmH"]) };
    const Text = tmp2(tmp3[22]).Text;
    intl = tmp2(tmp3[18]).intl;
    items1 = [closure_8(Text, obj3), ];
    let obj4 = {
      style: tmp.detailsContainer,
      children: memo.map((children, index) => {
          let items1;
          let value;
          const items = [closure_2.detailsRow, ];
          let prop = null;
          const tmp = React4;
          const tmp2 = hasOwnProperty;
          if (memo.length > 1) {
            prop = null;
            if (index < arr2.length - 1) {
              prop = tmp3.detailsRowBottomBorder;
            }
          }
          obj = { style: items, children: items1 };
          items[1] = prop;
          items1 = [, ];
          const obj2 = { variant: "text-sm/medium", color: "text-subtle", lineClamp: 1, children: children.label };
          items1[0] = metroImportAll(Text_Text.Text, obj2);
          const tmp6 = metroImportAll;
          if (typeof children.value === "string") {
            const obj3 = { variant: "text-sm/normal", color: "text-subtle", lineClamp: 1, style: closure_2.detailsRowValue, children: children.value };
            value = tmp6(Text_Text.Text, obj3);
          } else {
            value = children.value;
          }
          items1[1] = value;
          return tmp(tmp2, obj, children.label);
        })
    };
    items1[1] = closure_8(memo, obj4);
    tmp6 = closure_9(memo, obj2);
  }
  return tmp6;
});
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileDetails.tsx");

export default tmp5;
