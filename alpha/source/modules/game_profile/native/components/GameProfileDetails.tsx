// Module ID: 9440
// Function ID: 9441
// Name: GameProfileDetails
// Dependencies: [19, 17, 8798, 21, 4966, 587, 558, 576, 5642, 9441, 9263, 1128, 2000, 4794, 9442, 9449, 5216, 2]

// Module 9440 (GameProfileDetails)
import nativeDefault from "native" /* 587 */;
import intl13 from "intl" /* 1128 */;
import Server from "Server" /* 2000 */;
import DateUtilsAll from "DateUtils" /* 4794 */;
import Text_Text from "Text/Text" /* 5216 */;
import LinkingDefault from "Linking" /* 5642 */;
import ContentInventoryConstants from "ContentInventoryConstants" /* 8798 */;
import SKUUtils from "SKUUtils" /* 9263 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4966 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let importDefault;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
({ View: hasOwnProperty, Pressable: metroRequire } = react_native);
const IGDB_ATTRIBUTION_LINK = ContentInventoryConstants.IGDB_ATTRIBUTION_LINK;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, headerText: obj3, detailsContainer: obj4, detailsRow: obj5, detailsRowValue: obj6, detailsRowBottomBorder: obj7, platformsContainer: obj8, linksContainer: obj9 };
obj2 = { gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_8 };
obj4 = { borderRadius: nativeDefault.radii.lg, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj5 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: nativeDefault.space.PX_12 };
obj6 = { flexDirection: "column", flexShrink: 1, paddingLeft: nativeDefault.space.PX_32 };
obj7 = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
obj8 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
obj9 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
let closure_10 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function GameProfileWebsiteButton(url) {
  let action;
  let icon;
  let title;
  let trackAction;
  let obj = action(576);
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
    const obj = LinkingDefault;
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
  let obj = {
    accessibilityRole: "button",
    accessibilityLabel: title,
    onPress: react.useCallback(() => {
      const obj = LinkingDefault;
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
  let arr2;
  let closure_1;
  let container;
  let game;
  let headerText;
  let tmp23;
  let tmp32;
  let tmp56;
  let trackAction;
  let tmp = trackAction;
  let tmp2 = dependencyMap;
  let obj = trackAction(576);
  const cResult = obj.c(74);
  ({ game, trackAction } = arg0);
  const tmp4 = closure_10();
  importDefault = tmp4;
  let obj2 = trackAction(9441);
  const gameProfileLinks = obj2.useGameProfileLinks(game);
  if (null != game) {
    let tmp9;
    let tmp17;
    let tmp26;
    let tmp59;
    let tmp60;
    if (cResult[1] === game) {
      if (cResult[2] === gameProfileLinks) {
        if (cResult[3] === tmp4.linksContainer) {
          if (cResult[4] === tmp4.platformsContainer) {
            let tmp6;
            if (cResult[5] === trackAction) {
              tmp6 = cResult[6];
            }
            arr2 = tmp6;
          }
        }
      }
    }
    let genres;
    let tmp7 = cResult[7];
    if (game != null) {
      genres = game.genres;
    }
    if (tmp7 !== genres) {
      let joined;
      if (game != null) {
        const genres1 = game.genres;
        const mapped = genres1.map(tmp(9263).getGenreText);
        joined = mapped.join(", ");
      }
      let genres2;
      if (game != null) {
        genres2 = game.genres;
      }
      cResult[7] = genres2;
      cResult[8] = joined;
      tmp9 = joined;
    } else {
      tmp9 = cResult[8];
    }
    let items = [];
    if (null != tmp9) {
      if ("" !== tmp9) {
        let tmp12;
        if (cResult[9] !== game.genres.length) {
          let stringResult;
          if (1 !== game.genres.length) {
            const intl2 = tmp(1128).intl;
            stringResult = intl2.string(tmp(1128).t.pDgwYB);
          } else {
            const intl = tmp(1128).intl;
            stringResult = intl.string(tmp(1128).t.mjFKqn);
          }
          cResult[9] = game.genres.length;
          cResult[10] = stringResult;
          tmp12 = stringResult;
        } else {
          tmp12 = cResult[10];
        }
        if (cResult[11] === tmp9) {
          let tmp14;
          if (cResult[12] === tmp12) {
            tmp14 = cResult[13];
          }
          items.push(tmp14);
        }
        let obj3 = { label: tmp12, value: tmp9 };
        cResult[11] = tmp9;
        cResult[12] = tmp12;
        cResult[13] = obj3;
        tmp14 = obj3;
      }
    }
    if (cResult[14] !== game) {
      let tmp20;
      let companyByRole;
      if (game != null) {
        companyByRole = game.getCompanyByRole(tmp(2000).GameCompanyRole.PUBLISHER);
      }
      const _Symbol2 = Symbol;
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        class T {
          constructor(name) {
            return name.name;
          }
        }
        cResult[17] = T;
        tmp20 = T;
      } else {
        class T {
          constructor(name) {
            return name.name;
          }
        }
      }
      const mapped1 = companyByRole.map(tmp20);
      const joined1 = mapped1.join(", ");
      cResult[14] = game;
      cResult[15] = companyByRole;
      cResult[16] = joined1;
      tmp17 = joined1;
    } else {
      class T {
        constructor(name) {
          return name.name;
        }
      }
      tmp17 = cResult[16];
    }
    if (null != tmp17) {
      class T {
        constructor(name) {
          return name.name;
        }
      }
      if ("" !== tmp17) {
        class T {
          constructor(name) {
            return name.name;
          }
        }
        if (cResult[20] === tmp17) {
          class T {
            constructor(name) {
              return name.name;
            }
          }
          items.push(tmp23);
        }
        const obj4 = { label: tmp22, value: tmp17 };
        cResult[20] = tmp17;
        cResult[21] = tmp22;
        cResult[22] = obj4;
        tmp23 = obj4;
      }
    }
    if (cResult[23] !== game) {
      let tmp27Result;
      let tmp29;
      class T {
        constructor(name) {
          return name.name;
        }
      }
      if (game != null) {
        class T {
          constructor(name) {
            return name.name;
          }
        }
        tmp27Result = tmp27(tmp(2000).GameCompanyRole.DEVELOPER);
      }
      const _Symbol3 = Symbol;
      if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
        class D {
          constructor(name) {
            return name.name;
          }
        }
        cResult[26] = D;
        tmp29 = D;
      } else {
        class D {
          constructor(name) {
            return name.name;
          }
        }
      }
      const mapped2 = tmp27Result.map(tmp29);
      const joined2 = mapped2.join(", ");
      cResult[23] = game;
      cResult[24] = tmp27Result;
      cResult[25] = joined2;
      tmp26 = joined2;
    } else {
      class D {
        constructor(name) {
          return name.name;
        }
      }
      tmp26 = cResult[25];
    }
    if (null != tmp26) {
      class D {
        constructor(name) {
          return name.name;
        }
      }
      if ("" !== tmp26) {
        class D {
          constructor(name) {
            return name.name;
          }
        }
        if (cResult[29] === tmp26) {
          class D {
            constructor(name) {
              return name.name;
            }
          }
          items.push(tmp32);
        }
        const obj5 = { label: tmp31, value: tmp26 };
        cResult[29] = tmp26;
        cResult[30] = tmp31;
        cResult[31] = obj5;
        tmp32 = obj5;
      }
    }
    if (game != null) {
      class D {
        constructor(name) {
          return name.name;
        }
      }
    }
    if (null != undefined) {
      class D {
        constructor(name) {
          return name.name;
        }
      }
      if ("" !== undefined) {
        let tmp35;
        let tmp43;
        class D {
          constructor(name) {
            return name.name;
          }
        }
        const _Symbol7 = Symbol;
        if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
          class D {
            constructor(name) {
              return name.name;
            }
          }
          const stringResult1 = obj9.string(tmp(1128).t.H3mPDT);
          cResult[32] = stringResult1;
          tmp35 = stringResult1;
        } else {
          class D {
            constructor(name) {
              return name.name;
            }
          }
        }
        if (cResult[33] !== undefined) {
          class D {
            constructor(name) {
              return name.name;
            }
          }
          const _Date = Date;
          const self = this;
          const self2 = this;
          const dateFormat = arr2(4794).dateFormat;
          arr2(4794);
          const date = new Date(undefined);
          cResult[33] = undefined;
          cResult[34] = dateFormat(date, "LL");
          const dateFormatResult = dateFormat(date, "LL");
        } else {
          class D {
            constructor(name) {
              return name.name;
            }
          }
        }
        if (cResult[35] !== tmp37) {
          class D {
            constructor(name) {
              return name.name;
            }
          }
          tmp44[0] = tmp35;
          tmp44[1] = tmp37;
          cResult[35] = tmp37;
          cResult[36] = tmp44;
          tmp43 = tmp44;
        } else {
          class D {
            constructor(name) {
              return name.name;
            }
          }
        }
        items.push(tmp43);
      }
    }
    if (game != null) {
      class D {
        constructor(name) {
          return name.name;
        }
      }
    }
    if (null != undefined) {
      class D {
        constructor(name) {
          return name.name;
        }
      }
      if (undefined.length > 0) {
        class D {
          constructor(name) {
            return name.name;
          }
        }
        const platformsContainer = tmp4.platformsContainer;
        if (cResult[39] !== undefined) {
          let tmp49;
          class D {
            constructor(name) {
              return name.name;
            }
          }
          const _Symbol4 = Symbol;
          if (cResult[41] === Symbol.for("react.memo_cache_sentinel")) {
            class D {
              constructor(name) {
                return name.name;
              }
            }
            cResult[41] = tmp50;
            tmp49 = tmp50;
          } else {
            class D {
              constructor(name) {
                return name.name;
              }
            }
          }
          const mapped3 = tmp46.map(tmp49);
          cResult[39] = undefined;
          cResult[40] = mapped3;
        } else {
          class D {
            constructor(name) {
              return name.name;
            }
          }
        }
        if (cResult[42] === tmp4.platformsContainer) {
          class D {
            constructor(name) {
              return name.name;
            }
          }
          if (cResult[45] === tmp47) {
            class D {
              constructor(name) {
                return name.name;
              }
            }
            items.push(tmp56);
          }
          const obj6 = { label: tmp47, value: tmp52 };
          cResult[45] = tmp47;
          cResult[46] = tmp52;
          cResult[47] = obj6;
          tmp56 = obj6;
        }
        const obj7 = { style: platformsContainer, children: tmp48 };
        cResult[42] = tmp4.platformsContainer;
        cResult[43] = tmp48;
        cResult[44] = closure_8(closure_5, obj7);
        const tmp55 = closure_8(closure_5, obj7);
      }
    }
    const _Symbol5 = Symbol;
    if (cResult[48] === Symbol.for("react.memo_cache_sentinel")) {
      class X {
        constructor(arg0) {
          const tmp = closure_1(dependencyMap[15]);
          return tmp(arg0, closure_1(dependencyMap[5]).colors.ICON_SUBTLE);
        }
      }
      cResult[48] = X;
      tmp59 = X;
    } else {
      class X {
        constructor(arg0) {
          const tmp = closure_1(dependencyMap[15]);
          return tmp(arg0, closure_1(dependencyMap[5]).colors.ICON_SUBTLE);
        }
      }
    }
    const _Symbol6 = Symbol;
    if (cResult[49] === Symbol.for("react.memo_cache_sentinel")) {
      class H {
        constructor(arg0) {
          return null != arg0;
        }
      }
      cResult[49] = H;
      tmp60 = H;
    } else {
      class H {
        constructor(arg0) {
          return null != arg0;
        }
      }
    }
    const mapped4 = gameProfileLinks.map(tmp59);
    const found = mapped4.filter(tmp60);
    if (found.length > 0) {
      let tmp61;
      let tmp63;
      let tmp68;
      class H {
        constructor(arg0) {
          return null != arg0;
        }
      }
      if (cResult[50] === Symbol.for("react.memo_cache_sentinel")) {
        class H {
          constructor(arg0) {
            return null != arg0;
          }
        }
        const stringResult2 = obj12.string(tmp(1128).t["Oj3o1/"]);
        cResult[50] = stringResult2;
        tmp61 = stringResult2;
      } else {
        class H {
          constructor(arg0) {
            return null != arg0;
          }
        }
      }
      if (cResult[51] !== trackAction) {
        class H {
          constructor(arg0) {
            return null != arg0;
          }
        }
        cResult[51] = trackAction;
        cResult[52] = tmp64;
        tmp63 = tmp64;
      } else {
        class H {
          constructor(arg0) {
            return null != arg0;
          }
        }
      }
      const obj8 = { style: tmp4.linksContainer, children: found.map(tmp63) };
      const tmp67 = closure_8(closure_5, obj8);
      if (cResult[53] !== tmp67) {
        class H {
          constructor(arg0) {
            return null != arg0;
          }
        }
        tmp69[0] = tmp61;
        tmp69[1] = tmp67;
        cResult[53] = tmp67;
        cResult[54] = tmp69;
        tmp68 = tmp69;
      } else {
        class H {
          constructor(arg0) {
            return null != arg0;
          }
        }
      }
      items.push(tmp68);
    }
    if (items.length > 0) {
      let tmp72;
      let tmp71;
      let tmp76;
      class H {
        constructor(arg0) {
          return null != arg0;
        }
      }
      if (cResult[55] === Symbol.for("react.memo_cache_sentinel")) {
        class H {
          constructor(arg0) {
            return null != arg0;
          }
        }
        const stringResult3 = obj14.string(tmp(1128).t["BwQ+9e"]);
        const intl3 = tmp(1128).intl;
        const obj10 = { igdbLink: IGDB_ATTRIBUTION_LINK };
        const formatResult = intl3.format(tmp(1128).t.XPFZVl, obj10);
        cResult[55] = stringResult3;
        cResult[56] = formatResult;
        tmp72 = formatResult;
        tmp71 = stringResult3;
      } else {
        class H {
          constructor(arg0) {
            return null != arg0;
          }
        }
        tmp72 = cResult[56];
      }
      if (cResult[57] !== tmp72) {
        class H {
          constructor(arg0) {
            return null != arg0;
          }
        }
        tmp77[0] = tmp71;
        tmp77[1] = tmp72;
        cResult[57] = tmp72;
        cResult[58] = tmp77;
        tmp76 = tmp77;
      } else {
        class H {
          constructor(arg0) {
            return null != arg0;
          }
        }
      }
      items.push(tmp76);
    }
    cResult[1] = game;
    cResult[2] = gameProfileLinks;
    cResult[3] = tmp4.linksContainer;
    cResult[4] = tmp4.platformsContainer;
    cResult[5] = trackAction;
    cResult[6] = items;
    tmp6 = items;
  } else {
    class H {
      constructor(arg0) {
        return null != arg0;
      }
    }
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      class H {
        constructor(arg0) {
          return null != arg0;
        }
      }
      cResult[0] = tmp5;
      arr2 = tmp5;
    } else {
      class H {
        constructor(arg0) {
          return null != arg0;
        }
      }
    }
  }
  if (0 === arr2.length) {
    class H {
      constructor(arg0) {
        return null != arg0;
      }
    }
  } else {
    let tmp79;
    class H {
      constructor(arg0) {
        return null != arg0;
      }
    }
    const _Symbol8 = Symbol;
    ({ container, headerText } = tmp4);
    if (cResult[59] === Symbol.for("react.memo_cache_sentinel")) {
      class H {
        constructor(arg0) {
          return null != arg0;
        }
      }
      const stringResult4 = obj16.string(tmp(1128).t["7OjmmH"]);
      cResult[59] = stringResult4;
      tmp79 = stringResult4;
    } else {
      class H {
        constructor(arg0) {
          return null != arg0;
        }
      }
    }
    if (cResult[60] !== tmp4.headerText) {
      class H {
        constructor(arg0) {
          return null != arg0;
        }
      }
      const obj11 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", style: headerText, children: tmp79 };
      cResult[60] = tmp4.headerText;
      cResult[61] = closure_8(tmp(5216).Text, obj11);
      const tmp82 = closure_8(tmp(5216).Text, obj11);
    } else {
      class H {
        constructor(arg0) {
          return null != arg0;
        }
      }
    }
    if (cResult[62] === arr2) {
      class H {
        constructor(arg0) {
          return null != arg0;
        }
      }
    }
    const mapped5 = arr2.map((children, index) => {
      let items1;
      let value;
      const items = [closure_1.detailsRow, ];
      let prop = null;
      const tmp = React4;
      const tmp2 = hasOwnProperty;
      if (arr2.length > 1) {
        prop = null;
        if (index < arr2.length - 1) {
          prop = tmp3.detailsRowBottomBorder;
        }
      }
      const obj = { style: items, children: items1 };
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
    cResult[62] = arr2;
    cResult[63] = tmp4.detailsRow;
    cResult[64] = tmp4.detailsRowBottomBorder;
    cResult[65] = tmp4.detailsRowValue;
    cResult[66] = mapped5;
  }
}) : (function GameProfileDetails(game) {
  let intl;
  let items1;
  game = game.game;
  const trackAction = game.trackAction;
  let gameProfileLinks;
  let memo;
  let tmp = closure_10();
  let closure_2 = tmp;
  let tmp2 = game;
  const tmp3 = gameProfileLinks;
  let obj = game(gameProfileLinks[9]);
  gameProfileLinks = obj.useGameProfileLinks(game);
  let items = [, , , , ];
  ({ linksContainer: arr[0], platformsContainer: arr[1] } = tmp);
  items[2] = game;
  items[3] = gameProfileLinks;
  items[4] = trackAction;
  memo = memo.useMemo(function() {
    let date;
    let dateFormat;
    let intl10;
    let intl11;
    let intl12;
    let intl7;
    let obj11;
    let obj7;
    let obj9;
    let obj = game;
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
        const obj2 = { label: stringResult, value: joined };
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
      let platforms;
      if (obj != null) {
        platforms = obj.platforms;
      }
      const tmp60 = null != platforms && platforms.length > 0;
      if (tmp60) {
        let stringResult3;
        const push5 = items.push;
        if (1 !== obj.platforms.length) {
          const intl9 = intl13.intl;
          stringResult3 = intl9.string(intl13.t.PNqxNe);
        } else {
          const intl8 = intl13.intl;
          stringResult3 = intl8.string(intl13.t["UxAag+"]);
        }
        const obj6 = { label: stringResult3, value: metroImportAll(hasOwnProperty, obj7) };
        obj7 = {
          style: closure_2.platformsContainer,
          children: platforms.map((platform) => {
                const obj = { platform, size: "md", color: trackAction(gameProfileLinks[5]).colors.ICON_SUBTLE };
                const GameUpdatePlatformIcon = game(gameProfileLinks[14]).GameUpdatePlatformIcon;
                return closure_1_8(GameUpdatePlatformIcon, obj, platform);
              })
        };
        push5(obj6);
      }
      const mapped3 = gameProfileLinks.map((item) => {
        const tmp = trackAction(gameProfileLinks[15]);
        return tmp(item, trackAction(gameProfileLinks[5]).colors.ICON_SUBTLE);
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
                const obj = { icon: icon.icon, action: icon.action, title: icon.title, url, trackAction };
                return closure_2_8(closure_2_11, obj, url);
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
  let tmp5 = null;
  if (0 !== memo.length) {
    let tmp6 = closure_9;
    let tmp7 = closure_5;
    let obj2 = { style: tmp.container, children: items1 };
    let obj3 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", style: tmp.headerText, children: intl.string(tmp2(tmp3[11]).t["7OjmmH"]) };
    const Text = tmp2(tmp3[16]).Text;
    intl = tmp2(tmp3[11]).intl;
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
          const obj = { style: items, children: items1 };
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
    items1[1] = closure_8(closure_5, obj4);
    tmp5 = closure_9(closure_5, obj2);
  }
  return tmp5;
});
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileDetails.tsx");

export default tmp5;
