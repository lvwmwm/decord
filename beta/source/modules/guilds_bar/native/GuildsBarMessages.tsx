// Module ID: 18384
// Function ID: 18385
// Name: GuildsBarMessages
// Dependencies: [19, 5045, 1072, 21, 18385, 18370, 504, 18373, 575, 1113, 18386, 8643, 2]

// Module 18384 (GuildsBarMessages)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import GuildsBarAnimatedItemWrapper from "GuildsBarAnimatedItemWrapper" /* 18370 */;
import useGuildsBarBottomRightBadgeDefault from "useGuildsBarBottomRightBadge" /* 18373 */;
import transitionGuildsBarToGuildOrOpenSelectedChannelDefault from "transitionGuildsBarToGuildOrOpenSelectedChannel" /* 18385 */;
import react from "react" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5045 */;
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
  const obj = GuildsBarAnimatedItemWrapper;
  const items = [SelectedGuildStore];
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles();
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, () => {
    guildId = guildId.getGuildId();
    return null == guildId || guildId === ME;
  });
  ({ badge, cutouts } = useGuildsBarBottomRightBadgeDefault({ mentionCount: 0 }));
  useGuildsBarBottomRightBadgeDefault({ mentionCount: 0 });
  const colors = nativeDefault.colors;
  GuildsBarAnimatedItemWrapperDefault;
  const intl = tmp(1113).intl;
  return <tmp5Result selected={stateFromStores} circle={false} unread={false} styles={guildsBarAnimatedWrapperStyles} cutouts={cutouts} config={config} overState="y" label={intl.string(intl2.t.YUU0RF)} externalChildren={badge} expandedChildren>{true}</tmp5Result>;
});
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarMessages.tsx");

export default memoResult;
