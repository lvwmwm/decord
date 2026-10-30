// Module ID: 9564
// Function ID: 9565
// Name: GameProfileDetails
// Dependencies: [19, 17, 8913, 21, 8904, 9565, 7121, 9342, 9567, 9569, 9332, 5009, 575, 5704, 9571, 9572, 9353, 1114, 1993, 4831, 9573, 5619, 2]
// Exports: default

// Module 9564 (GameProfileDetails)
import nativeDefault from "native" /* 575 */;
import intl13 from "intl" /* 1114 */;
import Server from "Server" /* 1993 */;
import DateUtilsAll from "DateUtils" /* 4831 */;
import Text_Text from "Text/Text" /* 5619 */;
import LinkingDefault from "Linking" /* 5704 */;
import MobilePhoneIcon from "MobilePhoneIcon" /* 7121 */;
import PlatformType from "PlatformType" /* 8904 */;
import ContentInventoryConstants from "ContentInventoryConstants" /* 8913 */;
import RobloxNeutralIcon from "RobloxNeutralIcon" /* 9332 */;
import XboxNeutralIcon from "XboxNeutralIcon" /* 9342 */;
import SKUUtils from "SKUUtils" /* 9353 */;
import ScreenIcon from "ScreenIcon" /* 9565 */;
import PlaystationNeutralIcon from "PlaystationNeutralIcon" /* 9567 */;
import NintendoSwitchNeutralIcon from "NintendoSwitchNeutralIcon" /* 9569 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

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
function GameProfileWebsiteButton(action) {
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
    hitSlop: trackAction(575).space.PX_4,
    children: icon
  };
  return closure_8(closure_6, obj);
}
let react = react_mod;
({ View: hasOwnProperty, Pressable: metroRequire } = react_native);
const IGDB_ATTRIBUTION_LINK = ContentInventoryConstants.IGDB_ATTRIBUTION_LINK;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let obj = { mobile: MobilePhoneIcon.MobilePhoneIcon };
obj[PlatformType.PlatformType.DESKTOP] = ScreenIcon.ScreenIcon;
obj[PlatformType.PlatformType.XBOX] = XboxNeutralIcon.XboxNeutralIcon;
obj[PlatformType.PlatformType.PLAYSTATION] = PlaystationNeutralIcon.PlaystationNeutralIcon;
obj[PlatformType.PlatformType.NINTENDO] = NintendoSwitchNeutralIcon.NintendoSwitchNeutralIcon;
obj[PlatformType.PlatformType.ROBLOX] = RobloxNeutralIcon.RobloxNeutralIcon;
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
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileDetails.tsx");

export default function GameProfileDetails(game) {
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
  obj = game(gameProfileLinks[14]);
  gameProfileLinks = obj.useGameProfileLinks(game);
  const tmp5 = trackAction(gameProfileLinks[15])(game);
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
                obj = { size: "md", color: trackAction(gameProfileLinks[12]).colors.ICON_SUBTLE, accessibilityLabel: obj2.getGameProfilePlatformText(item) };
                const tmp = closure_1_10[item];
                obj2 = game(gameProfileLinks[15]);
                return closure_1_8(tmp, obj, item);
              })
        };
        push5(obj6);
      }
      const mapped3 = gameProfileLinks.map((item) => {
        const tmp = trackAction(gameProfileLinks[20]);
        return tmp(item, trackAction(gameProfileLinks[12]).colors.ICON_SUBTLE);
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
  let tmp6 = null;
  if (0 !== memo.length) {
    let tmp7 = closure_9;
    let obj2 = { style: tmp.container, children: items1 };
    let obj3 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", style: tmp.headerText, children: intl.string(tmp2(tmp3[17]).t["7OjmmH"]) };
    const Text = tmp2(tmp3[21]).Text;
    intl = tmp2(tmp3[17]).intl;
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
};
