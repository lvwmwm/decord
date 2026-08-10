// Module ID: 15398
// Function ID: 15399
// Name: FavoritesGuildChannels
// Dependencies: [19, 21, 15399, 15391, 15367, 15267, 15329, 15237, 2]
// Exports: default

// Module 15398 (FavoritesGuildChannels)
import "noop";
import jsxProd from "jsxProd";

let c3;
let c4;
const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
const result = require("getMissingFavoriteThreadIds").fileFinishedImporting("modules/favorites/native/FavoritesGuildChannels.tsx");

export default function FavoritesGuildChannels(arg0) {
  let guildChannels;
  let hasNoChannels;
  let shouldShowEmptyState;
  let obj = dependencyMap;
  let obj1 = require(15399) /* getMissingFavoriteThreadIds */;
  const favoritesGuildChannelList = obj1.useFavoritesGuildChannelList({ withUpsellNotice: true });
  ({ guildChannels, shouldShowEmptyState, hasNoChannels } = favoritesGuildChannelList);
  if (!obj3.useShouldRenderChannelList()) {
    return null;
  } else {
    let guild = arg0;
    if (hasNoChannels) {
      obj = { style: null, contentInset: null, children: null };
      ({ style: obj5[0], contentInset: obj5[1] } = guild);
      obj = { guild: null, showExtraButtons: false, canOpenGuildActionSheet: false };
      guild = guild.guild;
      obj[0] = guild;
      const items = [callback(importDefault(15267), obj), ];
      let tmp11Result = null;
      if (shouldShowEmptyState) {
        obj = { variant: "empty" };
        tmp11Result = tmp11(tmp9(15329), obj);
        const tmp9Result = tmp9(15329);
      }
      items[1] = tmp11Result;
      obj[2] = items;
      let tmp8Result = closure_4(importDefault(15367), obj);
      const tmp10 = importDefault(15367);
      tmp11 = callback;
      const tmp8 = closure_4;
      tmp9 = importDefault;
    } else {
      obj1 = {};
      const merged = Object.assign(guild);
      obj1.guildChannels = guildChannels;
      obj1.guildChannelsVersion = 0;
      tmp8Result = callback(require(15237) /* GuildChannels */.ChannelList, obj1);
    }
  }
};
