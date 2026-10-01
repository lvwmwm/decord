// Module ID: 8345
// Function ID: 8346
// Name: GameProfileDetails
// Dependencies: [19, 17, 7806, 21, 4836, 576, 4525, 8170, 1115, 1979, 4512, 8346, 8353, 4832, 2]
// Exports: default

// Module 8345 (GameProfileDetails)
import nativeDefault from "native" /* 576 */;
import intl13 from "intl" /* 1115 */;
import Server from "Server" /* 1979 */;
import DateUtilsAll from "DateUtils" /* 4512 */;
import LinkingDefault from "Linking" /* 4525 */;
import Text_Text from "Text/Text" /* 4832 */;
import ContentInventoryConstants from "ContentInventoryConstants" /* 7806 */;
import SKUUtils from "SKUUtils" /* 8170 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

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
function GameProfileWebsiteButton(action) {
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
    hitSlop: trackAction(576).space.PX_4,
    children: icon
  };
  return closure_8(closure_6, obj);
}
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
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileDetails.tsx");

export default function GameProfileDetails(game) {
  let intl;
  let items1;
  game = game.game;
  const trackAction = game.trackAction;
  let tmp = closure_10();
  let closure_2 = tmp;
  let items = [, , , ];
  ({ linksContainer: arr[0], platformsContainer: arr[1] } = tmp);
  items[2] = game;
  items[3] = trackAction;
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
                const obj = { platform, size: "md", color: trackAction(memo[5]).colors.ICON_SUBTLE };
                const GameUpdatePlatformIcon = game(memo[11]).GameUpdatePlatformIcon;
                return closure_1_8(GameUpdatePlatformIcon, obj, platform);
              })
        };
        push5(obj6);
      }
      let found;
      if (obj != null) {
        const websites = obj.websites;
        if (websites != null) {
          const mapped3 = websites.map((item) => {
            const tmp = trackAction(memo[12]);
            return tmp(item, trackAction(memo[5]).colors.ICON_SUBTLE);
          });
          found = mapped3.filter((item) => null != item);
        }
      }
      if (found == null) {
        found = [];
      }
      const tmp74 = null != found && found.length > 0;
      if (tmp74) {
        const push6 = items.push;
        const obj8 = { label: intl10.string(intl13.t["Oj3o1/"]), value: metroImportAll(hasOwnProperty, obj9) };
        intl10 = intl13.intl;
        obj9 = {
          style: closure_2.linksContainer,
          children: found.map((icon) => {
                const url = icon.url;
                const obj = { icon: icon.icon, action: icon.action, title: icon.title, url, trackAction };
                return closure_2_8(GameProfileWebsiteButton, obj, url);
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
  let tmp2 = null;
  if (0 !== memo.length) {
    const tmp3 = closure_9;
    let tmp4 = closure_5;
    let obj = { style: tmp.container, children: items1 };
    let tmp6 = game;
    let tmp7 = memo;
    let obj2 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", style: tmp.headerText, children: intl.string(game(memo[8]).t["7OjmmH"]) };
    const Text = game(memo[13]).Text;
    intl = game(memo[8]).intl;
    items1 = [closure_8(Text, obj2), ];
    let obj3 = {
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
    items1[1] = closure_8(closure_5, obj3);
    tmp2 = closure_9(closure_5, obj);
  }
  return tmp2;
};
