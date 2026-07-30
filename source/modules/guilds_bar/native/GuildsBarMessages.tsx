// Module ID: 14960
// Function ID: 14961
// Dependencies: [19, 4006, 676, 21, 14961, 1348, 14946, 589, 14948, 712, 1236, 14962, 4686, 2]

// Module 14960
import handleConnectionOpen from "handleConnectionOpen";
import { ME } from "ME";
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
let closure_6 = {
  onPress() {
    importDefault(14961)(ME);
  }
};
const memoResult = require("noop").memo(function GuildsBarMessages() {
  let badge;
  let cutouts;
  const tmp3 = importDefault(1348)("GuildsBarMessages");
  let obj = require(14946) /* UnreadIndicator */;
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles();
  const items = [handleConnectionOpen];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => {
    guildId = guildId.getGuildId();
    let tmp2 = null == guildId;
    if (!tmp2) {
      tmp2 = guildId === closure_4;
    }
    return tmp2;
  });
  const obj2 = require(589) /* initialize */;
  ({ badge, cutouts } = importDefault(14948)({ mentionCount: 0 }));
  const colors = importDefault(712).colors;
  obj = { selected: stateFromStores, circle: null, unread: false, styles: null, cutouts: null, config: null, overState: "y", label: "rtc_participants", externalChildren: "mask", expandedChildren: null, children: "text-sm/medium" };
  let tmp11 = !tmp3;
  const tmp7 = importDefault(14948)({ mentionCount: 0 });
  const tmp8 = stateFromStores ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT;
  if (!tmp3) {
    tmp11 = !stateFromStores;
  }
  obj[1] = tmp11;
  obj[3] = guildsBarAnimatedWrapperStyles;
  obj[4] = cutouts;
  obj[5] = closure_6;
  const intl = tmp4(1236).intl;
  obj[7] = intl.string(require(1236) /* getSystemLocale */.t.YUU0RF);
  obj[8] = badge;
  obj[9] = jsx(importDefault(14962), {});
  obj[10] = jsx(require(4686) /* ChatIcon */.ChatIcon, { color: tmp8 });
  return jsx(importDefault(14946), { selected: stateFromStores, circle: null, unread: false, styles: null, cutouts: null, config: null, overState: "y", label: "rtc_participants", externalChildren: "mask", expandedChildren: null, children: "text-sm/medium" });
});
const result = require("ME").fileFinishedImporting("modules/guilds_bar/native/GuildsBarMessages.tsx");

export default memoResult;
