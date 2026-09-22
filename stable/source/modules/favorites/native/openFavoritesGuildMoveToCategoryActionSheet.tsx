// Module ID: 11088
// Function ID: 11089
// Name: openFavoritesGuildMoveToCategoryActionSheet
// Dependencies: [7298, 5155, 2]
// Exports: default

// Module 11088 (openFavoritesGuildMoveToCategoryActionSheet)
import FolderIcon2 from "FolderIcon" /* 5155 */;
import Sheet_showSimpleActionSheet from "Sheet/showSimpleActionSheet" /* 7298 */;
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
