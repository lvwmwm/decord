// Module ID: 18937
// Function ID: 18938
// Name: GuildsBarMessages
// Dependencies: [19, 10137, 5286, 1072, 21, 18893, 18923, 504, 18926, 575, 1113, 18938, 8004, 2]

// Module 18937 (GuildsBarMessages)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import transitionGuildsBarToGuildOrOpenSelectedChannelDefault from "transitionGuildsBarToGuildOrOpenSelectedChannel" /* 18893 */;
import GuildsBarAnimatedItemWrapper from "GuildsBarAnimatedItemWrapper" /* 18923 */;
import useGuildsBarBottomRightBadgeDefault from "useGuildsBarBottomRightBadge" /* 18926 */;
import react from "react" /* 19 */;
import ICYMIStore from "ICYMIStore" /* 10137 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5286 */;
import size from "module_2" /* 2 */;

const GuildsBarAnimatedItemWrapperDefault = GuildsBarAnimatedItemWrapper;
let guildId;

const ME = Constants.ME;
const jsx = Fragment.jsx;
const config = {
  onPress() {
    transitionGuildsBarToGuildOrOpenSelectedChannelDefault(ME);
  }
};
const memoResult = react.memo(function GuildsBarMessages() {
  let badge;
  let cutouts;
  let isTabFocused;
  let tmp2 = dependencyMap;
  const obj = GuildsBarAnimatedItemWrapper;
  const items = [SelectedGuildStore, ICYMIStore];
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles();
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, () => {
    guildId = guildId.getGuildId();
    const tmp2 = (null == guildId || guildId === ME) && !isTabFocused.getIsTabFocused();
    return tmp2;
  });
  ({ badge, cutouts } = useGuildsBarBottomRightBadgeDefault({ mentionCount: 0 }));
  useGuildsBarBottomRightBadgeDefault({ mentionCount: 0 });
  const colors = nativeDefault.colors;
  GuildsBarAnimatedItemWrapperDefault;
  const intl = tmp(1113).intl;
  return <tmp5Result selected={stateFromStores} circle={false} unread={false} styles={guildsBarAnimatedWrapperStyles} cutouts={cutouts} config={config} overState="y" label={intl.string(intl2.t.YUU0RF)} externalChildren={badge} expandedChildren="Localized">{"Localization"}</tmp5Result>;
});
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarMessages.tsx");

export default memoResult;
