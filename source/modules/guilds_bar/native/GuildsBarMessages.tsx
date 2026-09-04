// Module ID: 16231
// Function ID: 16232
// Dependencies: [19, 4302, 673, 21, 16232, 16218, 586, 16220, 709, 1233, 16233, 5032, 2]

// Module 16231
import initialize from "initialize" /* 586 */;
import ThemesDefault from "Themes" /* 709 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import ChatIcon from "ChatIcon" /* 5032 */;
import UnreadIndicator from "UnreadIndicator" /* 16218 */;
import UnreadIndicatorDefault from "UnreadIndicator" /* 16218 */;
import useGuildsBarBottomRightBadgeDefault from "useGuildsBarBottomRightBadge" /* 16220 */;
import transitionGuildsBarToGuildOrOpenSelectedChannelDefault from "transitionGuildsBarToGuildOrOpenSelectedChannel" /* 16232 */;
import HomeDrawerDMsRowDefault from "HomeDrawerDMsRow" /* 16233 */;
import closure_3 from "handleConnectionOpen" /* 4302 */;
import { ME } from "ME" /* 673 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
let closure_6 = {
  onPress() {
    transitionGuildsBarToGuildOrOpenSelectedChannelDefault(ME);
  }
};
const memoResult = importAllResult.memo(function GuildsBarMessages() {
  let obj = UnreadIndicator;
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles();
  const items = [closure_3];
  const stateFromStores = initialize.useStateFromStores(items, () => {
    guildId = guildId.getGuildId();
    let tmp2 = null == guildId;
    if (!tmp2) {
      tmp2 = guildId === closure_4;
    }
    return tmp2;
  });
  const obj2 = initialize;
  ({ badge, cutouts } = useGuildsBarBottomRightBadgeDefault({ mentionCount: 0 }));
  const colors = ThemesDefault.colors;
  obj = { selected: stateFromStores, circle: false, unread: false, styles: guildsBarAnimatedWrapperStyles, cutouts, config: closure_6, overState: "y", label: "DRAFT_SAVE", externalChildren: null, expandedChildren: null, children: null };
  const tmp6 = useGuildsBarBottomRightBadgeDefault({ mentionCount: 0 });
  const tmp7 = stateFromStores ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT;
  const intl = tmp(1233).intl;
  obj[7] = intl.string(getSystemLocale.t.YUU0RF);
  obj[8] = badge;
  obj[9] = jsx(HomeDrawerDMsRowDefault, {});
  obj[10] = jsx(ChatIcon.ChatIcon, { color: tmp7 });
  return jsx(UnreadIndicatorDefault, { selected: stateFromStores, circle: false, unread: false, styles: guildsBarAnimatedWrapperStyles, cutouts, config: closure_6, overState: "y", label: "DRAFT_SAVE", externalChildren: null, expandedChildren: null, children: null });
});
const result = require("set").fileFinishedImporting("modules/guilds_bar/native/GuildsBarMessages.tsx");

export default memoResult;
