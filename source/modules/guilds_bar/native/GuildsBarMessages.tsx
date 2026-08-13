// Module ID: 15512
// Function ID: 15513
// Dependencies: [19, 4165, 676, 21, 15513, 1367, 15499, 589, 15501, 712, 1236, 15514, 4841, 2]

// Module 15512
import handleConnectionOpen from "handleConnectionOpen";
import { ME } from "ME";
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
let closure_6 = {
  onPress() {
    importDefault(15513)(ME);
  }
};
const memoResult = require("noop").memo(function GuildsBarMessages() {
  let badge;
  let cutouts;
  const tmp3 = importDefault(1367)("GuildsBarMessages");
  let obj = require(15499) /* UnreadIndicator */;
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
  ({ badge, cutouts } = importDefault(15501)({ mentionCount: 0 }));
  const colors = importDefault(712).colors;
  obj = { selected: stateFromStores, circle: null, unread: false, styles: null, cutouts: null, config: null, overState: "y", label: "Grant Channel Access", externalChildren: "Manage Channel Access", expandedChildren: "Guild Scheduled Event Invite Button Embed", children: "REMOVE_AUTOMOD_MESSAGE_NOTICE" };
  let tmp11 = !tmp3;
  const tmp7 = importDefault(15501)({ mentionCount: 0 });
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
  obj[9] = jsx(importDefault(15514), {});
  obj[10] = jsx(require(4841) /* ChatIcon */.ChatIcon, { color: tmp8 });
  return jsx(importDefault(15499), { selected: stateFromStores, circle: null, unread: false, styles: null, cutouts: null, config: null, overState: "y", label: "Grant Channel Access", externalChildren: "Manage Channel Access", expandedChildren: "Guild Scheduled Event Invite Button Embed", children: "REMOVE_AUTOMOD_MESSAGE_NOTICE" });
});
const result = require("ME").fileFinishedImporting("modules/guilds_bar/native/GuildsBarMessages.tsx");

export default memoResult;
