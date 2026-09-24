// Module ID: 11306
// Function ID: 11307
// Name: openFavoritesGuildMoveToCategoryActionSheet
// Dependencies: [7528, 5380, 2]
// Exports: default

// Module 11306 (openFavoritesGuildMoveToCategoryActionSheet)
import FolderIcon2 from "FolderIcon" /* 5380 */;
import Sheet_showSimpleActionSheet from "Sheet/showSimpleActionSheet" /* 7528 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let result = size.fileFinishedImporting("modules/favorites/native/openFavoritesGuildMoveToCategoryActionSheet.tsx");

export default function openFavoritesGuildMoveToCategoryActionSheet(arg0, title) {
  ({ destinations, perform: require } = title);
  let obj = Sheet_showSimpleActionSheet;
  const result = obj.showSimpleActionSheet({
    key: "FavoritesGuildMoveToCategory-" + arg0,
    header: { title: title.label },
    hasIcons: true,
    options: destinations.map((label) => {
      const obj = { label: label.label, IconComponent: null, onPress: null };
      let FolderIcon;
      if (null != label.id) {
        FolderIcon = FolderIcon2.FolderIcon;
      }
      obj.IconComponent = FolderIcon;
      obj.onPress = function onPress() {
        return require(label.id);
      };
      return obj;
    })
  });
};
