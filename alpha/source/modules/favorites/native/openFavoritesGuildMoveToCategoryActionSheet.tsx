// Module ID: 10787
// Function ID: 10788
// Name: openFavoritesGuildMoveToCategoryActionSheet
// Dependencies: [1084, 7351, 8604, 10788, 2]
// Exports: default

// Module 10787 (openFavoritesGuildMoveToCategoryActionSheet)
import Constants from "Constants" /* 1084 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10788 */;
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
