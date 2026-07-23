// Module ID: 11853
// Function ID: 91844
// Name: GameProfileWebsiteButton
// Dependencies: [31, 27, 8329, 33, 4130, 689, 3827, 8631, 1212, 1881, 3800, 11854, 11863, 4126, 2]
// Exports: default

// Module 11853 (GameProfileWebsiteButton)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { IGDB_ATTRIBUTION_LINK } from "ContentInventoryFeedKey";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_8;
let closure_9;
const require = arg1;
function GameProfileWebsiteButton(action) {
  let icon;
  let title;
  action = action.action;
  const trackAction = action.trackAction;
  const url = action.url;
  const items = [trackAction, action, url];
  ({ icon, title } = action);
  return callback(closure_6, {
    accessibilityRole: "button",
    accessibilityLabel: title,
    onPress: React.useCallback(() => {
      trackAction(outer1_3[6]).openURL(url);
      trackAction(action);
    }, items),
    hitSlop: trackAction(689).space.PX_4,
    children: icon
  });
}
({ View: closure_5, Pressable: closure_6 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.headerText = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj1 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.detailsContainer = { borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, overflow: "hidden", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
let obj3 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.detailsRow = obj3;
let obj4 = { flexDirection: "column", flexShrink: 1, paddingLeft: require("_createForOfIteratorHelperLoose").space.PX_32 };
_createForOfIteratorHelperLoose.detailsRowValue = obj4;
let obj2 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, overflow: "hidden", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.detailsRowBottomBorder = { borderBottomWidth: 1, borderBottomColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
let obj6 = { flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.platformsContainer = obj6;
let obj7 = { flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.linksContainer = obj7;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj5 = { borderBottomWidth: 1, borderBottomColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
const result = require("ContentInventoryFeedKey").fileFinishedImporting("modules/game_profile/native/components/GameProfileDetails.tsx");

export default function GameProfileDetails(game) {
  game = game.game;
  const trackAction = game.trackAction;
  const tmp = _createForOfIteratorHelperLoose();
  const importAll = tmp;
  let items = [, , , ];
  ({ linksContainer: arr[0], platformsContainer: arr[1] } = tmp);
  items[2] = game;
  items[3] = trackAction;
  const memo = React.useMemo(() => {
    if (null == game) {
      return [];
    } else {
      const items = [];
      let joined;
      if (null != game) {
        const genres = game.genres;
        const mapped = genres.map(game(memo[7]).getGenreText);
        joined = mapped.join(", ");
      }
      let tmp5 = null != joined;
      if (tmp5) {
        tmp5 = "" !== joined;
      }
      if (!tmp5) {
        let companyByRole;
        if (null != game) {
          companyByRole = game.getCompanyByRole(game(memo[9]).GameCompanyRole.PUBLISHER);
        }
        const mapped1 = companyByRole.map((name) => name.name);
        const joined1 = mapped1.join(", ");
        let tmp18 = null != joined1;
        if (tmp18) {
          tmp18 = "" !== joined1;
        }
        if (!tmp18) {
          let companyByRole1;
          if (null != game) {
            companyByRole1 = game.getCompanyByRole(game(memo[9]).GameCompanyRole.DEVELOPER);
          }
          const mapped2 = companyByRole1.map((name) => name.name);
          const joined2 = mapped2.join(", ");
          let tmp31 = null != joined2;
          if (tmp31) {
            tmp31 = "" !== joined2;
          }
          if (!tmp31) {
            let firstReleaseDate;
            if (null != game) {
              firstReleaseDate = game.firstReleaseDate;
            }
            let tmp41 = null != firstReleaseDate;
            if (tmp41) {
              tmp41 = "" !== firstReleaseDate;
            }
            if (tmp41) {
              let obj = {};
              const intl7 = game(memo[8]).intl;
              obj.label = intl7.string(game(memo[8]).t.H3mPDT);
              let obj7 = tmp(memo[10]);
              const _Date = Date;
              const date = new Date(firstReleaseDate);
              obj.value = obj7.dateFormat(date, "LL");
              items.push(obj);
            }
            let platforms;
            if (null != game) {
              platforms = game.platforms;
            }
            let tmp55 = null != platforms;
            if (tmp55) {
              tmp55 = platforms.length > 0;
            }
            if (!tmp55) {
              let found;
              if (null != game) {
                const websites = game.websites;
                if (null != websites) {
                  const mapped3 = websites.map((arg0) => trackAction(memo[12])(arg0, trackAction(memo[5]).colors.ICON_SUBTLE));
                  found = mapped3.filter((arg0) => null != arg0);
                }
              }
              if (null == found) {
                found = [];
              }
              let tmp67 = null != found;
              if (tmp67) {
                tmp67 = found.length > 0;
              }
              if (tmp67) {
                obj = {};
                const intl10 = game(memo[8]).intl;
                obj.label = intl10.string(game(memo[8]).t["Oj3o1/"]);
                const obj1 = {
                  style: tmp.linksContainer,
                  children: found.map((icon) => {
                                const url = icon.url;
                                return outer2_8(outer2_11, { icon: icon.icon, action: icon.action, title: icon.title, url, trackAction: outer1_1 }, url);
                              })
                };
                obj.value = outer1_8(outer1_5, obj1);
                items.push(obj);
              }
              if (items.length > 0) {
                const obj2 = {};
                const intl11 = game(memo[8]).intl;
                obj2.label = intl11.string(game(memo[8]).t["BwQ+9e"]);
                const intl12 = game(memo[8]).intl;
                const obj3 = { igdbLink: outer1_7 };
                obj2.value = intl12.format(game(memo[8]).t.XPFZVl, obj3);
                items.push(obj2);
              }
              return items;
            } else {
              let obj4 = {};
              if (1 !== game.platforms.length) {
                const intl9 = game(memo[8]).intl;
                let stringResult = intl9.string(game(memo[8]).t.PNqxNe);
              } else {
                const intl8 = game(memo[8]).intl;
                stringResult = intl8.string(game(memo[8]).t["UxAag+"]);
              }
              obj4.label = stringResult;
              const obj5 = {
                style: tmp.platformsContainer,
                children: platforms.map((platform) => {
                            const obj = { platform, size: "md", color: trackAction(memo[5]).colors.ICON_SUBTLE };
                            return outer2_8(game(memo[11]).GameUpdatePlatformIcon, obj, platform);
                          })
              };
              obj4.value = outer1_8(outer1_5, obj5);
              obj4 = items.push(obj4);
            }
          } else {
            let obj6 = {};
            if (1 !== companyByRole1.length) {
              const intl6 = game(memo[8]).intl;
              let stringResult1 = intl6.string(game(memo[8]).t.KATEJB);
            } else {
              const intl5 = game(memo[8]).intl;
              stringResult1 = intl5.string(game(memo[8]).t.na3PT0);
            }
            obj6.label = stringResult1;
            obj6.value = joined2;
            obj6 = items.push(obj6);
          }
        } else {
          obj7 = {};
          if (1 !== companyByRole.length) {
            const intl4 = game(memo[8]).intl;
            let stringResult2 = intl4.string(game(memo[8]).t.Hc7Enk);
          } else {
            const intl3 = game(memo[8]).intl;
            stringResult2 = intl3.string(game(memo[8]).t["4Byy/G"]);
          }
          obj7.label = stringResult2;
          obj7.value = joined1;
          obj7 = items.push(obj7);
        }
      } else {
        let obj8 = {};
        if (1 !== game.genres.length) {
          const intl2 = game(memo[8]).intl;
          let stringResult3 = intl2.string(game(memo[8]).t.pDgwYB);
        } else {
          const intl = game(memo[8]).intl;
          stringResult3 = intl.string(game(memo[8]).t.mjFKqn);
        }
        obj8.label = stringResult3;
        obj8.value = joined;
        obj8 = items.push(obj8);
      }
    }
  }, items);
  let tmp2 = null;
  if (0 !== memo.length) {
    let obj = { style: tmp.container };
    obj = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", style: tmp.headerText };
    let intl = game(memo[8]).intl;
    obj.children = intl.string(game(memo[8]).t["7OjmmH"]);
    let items1 = [callback(game(memo[13]).Text, obj), ];
    obj = {
      style: tmp.detailsContainer,
      children: memo.map((label) => {
          let obj = {};
          const items = [tmp.detailsRow, ];
          let prop = null;
          if (memo.length > 1) {
            prop = null;
            if (arg1 < memo.length - 1) {
              prop = tmp.detailsRowBottomBorder;
            }
          }
          items[1] = prop;
          obj.style = items;
          obj = { variant: "text-sm/medium", color: "text-subtle", lineClamp: 1, children: label.label };
          const items1 = [outer1_8(game(memo[13]).Text, obj), ];
          if ("string" === typeof label.value) {
            obj = { variant: "text-sm/normal", color: "text-subtle", lineClamp: 1, style: tmp.detailsRowValue, children: label.value };
            let value = outer1_8(game(memo[13]).Text, obj);
          } else {
            value = label.value;
          }
          items1[1] = value;
          obj.children = items1;
          return outer1_9(outer1_5, obj, label.label);
        })
    };
    items1[1] = callback(closure_5, obj);
    obj.children = items1;
    tmp2 = callback2(closure_5, obj);
  }
  return tmp2;
};
