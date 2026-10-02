// Module ID: 10457
// Function ID: 10458
// Name: openFavoritesGuildMoveToCategoryActionSheet
// Dependencies: [6617, 5389, 2]
// Exports: default

// Module 10457 (openFavoritesGuildMoveToCategoryActionSheet)
import FolderIcon2 from "FolderIcon" /* 5389 */;
import Sheet_showSimpleActionSheet from "Sheet/showSimpleActionSheet" /* 6617 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let result = size.fileFinishedImporting("modules/favorites/native/openFavoritesGuildMoveToCategoryActionSheet.tsx");

export default function openFavoritesGuildMoveToCategoryActionSheet(arg0, label) {
  let destinations;
  ({ destinations, perform: require } = label);
  label = label.label;
  let obj = Sheet_showSimpleActionSheet;
  const obj2 = {
    key: "FavoritesGuildMoveToCategory-" + arg0,
    header: { title: label },
    hasIcons: true,
    options: destinations.map((label) => {
      let FolderIcon;
      const obj = {
        label: label.label,
        IconComponent: FolderIcon,
        onPress() {
          return require(label.id);
        }
      };
      FolderIcon = undefined;
      if (null != label.id) {
        FolderIcon = FolderIcon2.FolderIcon;
      }
      return obj;
    })
  };
  const result = obj.showSimpleActionSheet(obj2);
};
