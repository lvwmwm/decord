// Module ID: 11008
// Function ID: 11009
// Name: openFavoritesGuildMoveToCategoryActionSheet
// Dependencies: [1072, 7500, 8787, 11009, 2]
// Exports: default

// Module 11008 (openFavoritesGuildMoveToCategoryActionSheet)
import Constants from "Constants" /* 1072 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 11009 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const NULL_STRING_CHANNEL_ID = Constants.NULL_STRING_CHANNEL_ID;
let result = size.fileFinishedImporting("modules/favorites/native/openFavoritesGuildMoveToCategoryActionSheet.tsx");

export default function openFavoritesGuildMoveToCategoryActionSheet(arg0, title) {
  let found;
  _require = title;
  const tmp = require("Sheet/showSimpleActionSheet");
  let obj = {
    key: "FavoritesGuildMoveToCategory-" + arg0,
    header: { title: title.label },
    hasIcons: true,
    options: found.map((label) => {
      let FolderIcon;
      title = label;
      let obj = {
        label: label.label,
        IconComponent: FolderIcon,
        onPress() {
          const obj = FavoritesActionCreators;
          return obj.updateFavoriteChannels(label.getDestinationMove(label.id).updates);
        }
      };
      FolderIcon = undefined;
      if (label.id !== NULL_STRING_CHANNEL_ID) {
        FolderIcon = title(dependencyMap[2]).FolderIcon;
      }
      return obj;
    })
  };
  const showSimpleActionSheet = tmp.showSimpleActionSheet;
  const destinations = title.destinations;
  found = destinations.filter((disabled) => !disabled.disabled);
  const result = showSimpleActionSheet(obj);
};
