// Module ID: 18988
// Function ID: 18989
// Name: GuildUpsellChannelList
// Dependencies: [19, 17, 16216, 6846, 18989, 1072, 21, 5306, 575, 1113, 15695, 18990, 18994, 5495, 504, 18998, 1256, 15026, 7445, 5929, 5936, 17703, 18999, 2]
// Exports: default

// Module 18988 (GuildUpsellChannelList)
import nativeDefault from "native" /* 575 */;
import intl7 from "intl" /* 1113 */;
import Text_Text from "Text/Text" /* 5929 */;
import BumpingFistsSpotIllustration from "BumpingFistsSpotIllustration" /* 15695 */;
import MobileGameCommunitiesConstants from "MobileGameCommunitiesConstants" /* 18989 */;
import ChatControllersSpotIllustration from "ChatControllersSpotIllustration" /* 18990 */;
import MiniaturesSpotIllustration from "MiniaturesSpotIllustration" /* 18994 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import LocalAppDetectionStore from "LocalAppDetectionStore" /* 16216 */;
import ConsentStore from "ConsentStore" /* 6846 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault, lastScannedAt;

let c10;
let closure_12;
let hasOwnProperty;
let map1;
let metroRequire;
let obj10;
let obj11;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let unpackModuleId;
({ ScrollView: hasOwnProperty, View: metroRequire } = react_native);
let closure_9 = MobileGameCommunitiesConstants.MAX_DISPLAYED_UPSELL_GUILDS;
({ AnalyticEvents: c10, Consents: unpackModuleId } = Constants);
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, header: obj3, headerTitle: { flex: 1 }, listContainer: { flex: 1 }, subheaderWrapper: obj4, createDescription: obj5, templateScroll: obj6, templateRow: obj7, templateRowWide: obj8, templateCard: { width: 204 }, templateCardWide: { flex: 1, minWidth: 0 }, templateIconWrapper: obj9, templateTitle: obj10, buttonGroup: obj11, buttonGroupWide: { flexDirection: "row" }, descriptionSpacing: { marginBottom: nativeDefault.space.PX_8 }, joinSection: { gap: nativeDefault.space.PX_4 } };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.PANEL_BG };
createStyles = createStyles.createStyles;
obj3 = { height: 56, flexDirection: "row", alignItems: "center", marginHorizontal: nativeDefault.space.PX_16 };
obj4 = { marginBottom: nativeDefault.space.PX_8 };
obj5 = { marginTop: nativeDefault.space.PX_4, marginBottom: nativeDefault.space.PX_12 };
obj6 = { marginHorizontal: -nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_12 };
obj7 = { flexDirection: "row", alignItems: "stretch", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16 };
obj8 = { paddingHorizontal: 0, marginBottom: nativeDefault.space.PX_12 };
obj9 = { alignItems: "center", marginBottom: nativeDefault.space.PX_16 };
obj10 = { marginBottom: nativeDefault.space.PX_4 };
obj11 = { gap: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_20 };
({ marginBottom: nativeDefault.space.PX_8 });
({ gap: nativeDefault.space.PX_4 });
let closure_14 = createStyles(obj);
let items = [{ id: "hangout", title: intl7.t.ScXySs, description: intl7.t.DSCqxM, Icon: BumpingFistsSpotIllustration.BumpingFistsSpotIllustration }, , ];
({ id: "hangout", title: intl7.t.ScXySs, description: intl7.t.DSCqxM, Icon: BumpingFistsSpotIllustration.BumpingFistsSpotIllustration });
items[1] = { id: "gaming", title: intl7.t["F+MTAZ"], description: intl7.t.srNlJw, Icon: ChatControllersSpotIllustration.ChatControllersSpotIllustration };
({ id: "gaming", title: intl7.t["F+MTAZ"], description: intl7.t.srNlJw, Icon: ChatControllersSpotIllustration.ChatControllersSpotIllustration });
items[2] = { id: "hobbies", title: intl7.t["0Ka6B5"], description: intl7.t["5oGAp/"], Icon: MiniaturesSpotIllustration.MiniaturesSpotIllustration };
({ id: "hobbies", title: intl7.t["0Ka6B5"], description: intl7.t["5oGAp/"], Icon: MiniaturesSpotIllustration.MiniaturesSpotIllustration });
let result = size.fileFinishedImporting("modules/game_community_upsell/native/GuildUpsellChannelList.tsx");

export default function GuildUpsellChannelList(style) {
  let Text;
  let closure_0;
  let closure_1;
  let constants2;
  let intl;
  let items4;
  let items5;
  let obj6;
  let userAgnosticState;
  importDefault = undefined;
  let data;
  let memo;
  let callback1;
  let callback2;
  let youBarTotalHeight;
  style = style.style;
  const tmp = closure_14();
  _require = tmp;
  let tmp2 = memo;
  let num = 1;
  if (require("useChatLayout")().isChatBesideChannelList) {
    num = 2;
  }
  let tmp3 = 2 === num;
  importDefault = tmp3;
  let obj = require("get initialized");
  items = [ConsentStore, LocalAppDetectionStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const hasConsentedResult = ConsentStore.hasConsented(constants2.PERSONALIZATION);
    let someResult = !hasConsentedResult;
    if (hasConsentedResult) {
      const _Object = Object;
      const values = Object.values(userAgnosticState.getUserAgnosticState().apps);
      someResult = values.some((lastScannedAt) => {
        lastScannedAt = undefined;
        if (lastScannedAt != null) {
          lastScannedAt = lastScannedAt.lastScannedAt;
        }
        return null != lastScannedAt;
      });
    }
    return someResult;
  });
  let obj2 = require("MobileGameCommunitiesActionCreators");
  data = obj2.useMobileGameCommunities(stateFromStores).data;
  let items1 = [data];
  memo = callback1.useMemo(() => {
    items = data;
    if (data == null) {
      items = [];
    }
    return items.slice(0, closure_9);
  }, items1);
  const callback = callback1.useCallback((guild_id, game_id) => {
    const obj = data(memo[15]);
    obj.dismissGuild(guild_id);
    const obj2 = closure_1(memo[16]);
    const obj3 = { game_id, guild_id };
    obj2.track(constants.GAME_COMMUNITY_MULTI_GUILD_UPSELL_CARD_DISMISSED, obj3);
  }, []);
  callback1 = callback1.useCallback(() => {
    const obj = closure_1(memo[17]);
    obj.openCreateGuildModal();
  }, []);
  callback2 = callback1.useCallback(() => {
    const obj = closure_1(memo[17]);
    const result = obj.openGuildJoinServerScreen();
  }, []);
  let items2 = [callback1, callback2, memo.length, tmp, tmp3];
  const memo1 = callback1.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let intl5;
    let intl6;
    let items1;
    let items3;
    let items4;
    let onPress;
    let tmp5Result;
    const mapped = items.map((Icon) => {
      let intl;
      let intl2;
      let items1;
      let templateCard;
      let tmp5;
      const obj = { onPress, radius: 16, style: templateCard, children: items };
      const Card = closure_0(memo[18]).Card;
      if (closure_1_1) {
        templateCard = tmp4.templateCardWide;
        tmp5 = tmp4;
      } else {
        templateCard = tmp4.templateCard;
        tmp5 = tmp4;
      }
      items = [, ];
      const obj2 = { style: tmp5.templateIconWrapper, children: closure_2_12(Icon.Icon, { width: 114, height: 64 }) };
      items[0] = closure_2_12(youBarTotalHeight, obj2);
      const obj3 = { children: items1 };
      const obj4 = { variant: "body-md/semibold", color: "mobile-text-heading-primary", style: tmp5.templateTitle, children: intl.string(Icon.title) };
      const Text = tmp2(tmp3[19]).Text;
      intl = tmp2(tmp3[9]).intl;
      items1 = [closure_2_12(Text, obj4), ];
      const obj5 = { variant: "body-sm/medium", color: "text-subtle", children: intl2.string(Icon.description) };
      const Text2 = tmp2(tmp3[19]).Text;
      intl2 = tmp2(tmp3[9]).intl;
      items1[1] = closure_2_12(Text2, obj5);
      items[1] = closure_2_13(youBarTotalHeight, obj3);
      return closure_2_13(Card, obj, Icon.id);
    });
    const tmp2 = map1;
    const tmp3 = metroRequire;
    let obj = { style: closure_0.subheaderWrapper, children: items };
    const tmp4 = closure_0;
    let tmp5 = authStore2;
    let obj2 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: intl.string(intl7.t["abaDI+"]) };
    let Text = Text_Text.Text;
    intl = intl7.intl;
    items = [authStore2(Text, obj2), , , , ];
    let obj3 = { variant: "body-sm/medium", color: "text-subtle", style: closure_0.createDescription, children: intl2.string(intl7.t.raDC7V) };
    let Text2 = Text_Text.Text;
    intl2 = intl7.intl;
    items[1] = authStore2(Text2, obj3);
    let buttonGroupWide = closure_1;
    if (buttonGroupWide) {
      let obj5 = { style: items1, children: mapped };
      items1 = [, ];
      ({ templateRow: arr2[0], templateRowWide: arr2[1] } = tmp4);
      tmp5Result = tmp5(tmp3, obj5);
    } else {
      const obj6 = { horizontal: true, showsHorizontalScrollIndicator: false, style: null, contentContainerStyle: null, children: mapped };
      ({ templateScroll: obj4.style, templateRow: obj4.contentContainerStyle } = tmp4);
      tmp5Result = tmp5(hasOwnProperty, obj6);
    }
    items[2] = tmp5Result;
    const items2 = [tmp4.buttonGroup, ];
    if (buttonGroupWide) {
      buttonGroupWide = tmp4.buttonGroupWide;
    }
    const obj7 = { style: items2, children: items3 };
    items2[1] = buttonGroupWide;
    const obj8 = { variant: "primary", size: "md", text: intl3.string(intl7.t.B44MTm), onPress: callback1, grow: true };
    const Button = tmp6(5936).Button;
    intl3 = tmp6(1113).intl;
    items3 = [tmp5(Button, obj8), ];
    const obj9 = { variant: "secondary", size: "md", text: intl4.string(intl7.t.wKy7MA), onPress: callback2, grow: true };
    const Button2 = tmp6(5936).Button;
    intl4 = tmp6(1113).intl;
    items3[1] = tmp5(Button2, obj9);
    items[3] = tmp2(tmp3, obj7);
    let tmp2Result = memo.length > 0;
    if (tmp2Result) {
      const obj10 = { style: tmp4.joinSection, children: items4 };
      const obj11 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: intl5.string(intl7.t.rJRote) };
      const Text3 = tmp6(5929).Text;
      intl5 = tmp6(1113).intl;
      items4 = [tmp5(Text3, obj11), ];
      const obj21 = { variant: "body-sm/medium", color: "text-subtle", style: tmp4.descriptionSpacing, children: intl6.string(intl7.t.pJT2DK) };
      const Text4 = tmp6(5929).Text;
      intl6 = tmp6(1113).intl;
      items4[1] = tmp5(Text4, obj21);
      tmp2Result = tmp2(tmp3, obj10);
    }
    items[4] = tmp2Result;
    return tmp2(tmp3, obj);
  }, items2);
  let obj3 = require("useYouBarTotalHeight");
  youBarTotalHeight = obj3.useYouBarTotalHeight();
  let items3 = [youBarTotalHeight];
  let obj4 = { style: items4, children: items5 };
  items4 = [tmp.container, style];
  let obj5 = { style: tmp.header, children: closure_12(Text, obj6) };
  const memo2 = callback1.useMemo(() => {
    const obj = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 + youBarTotalHeight };
    return obj;
  }, items3);
  obj6 = { style: tmp.headerTitle, color: "mobile-text-heading-primary", variant: "heading-lg/semibold", children: intl.string(require("intl").t["7hB4kg"]) };
  Text = require("Text/Text").Text;
  intl = require("intl").intl;
  items5 = [closure_12(youBarTotalHeight, obj5), ];
  let obj7 = { style: tmp.listContainer, children: closure_12(require("GuildUpsellList").GuildUpsellList, { numColumns: num, suggestedGuilds: memo, contentContainerStyle: memo2, onDismiss: callback, subheader: memo1 }, num) };
  items5[1] = closure_12(youBarTotalHeight, obj7);
  return closure_13(youBarTotalHeight, obj4);
};
