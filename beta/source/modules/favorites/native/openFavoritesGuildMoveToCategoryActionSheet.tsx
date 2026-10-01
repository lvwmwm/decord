// Module ID: 10415
// Function ID: 10416
// Name: openFavoritesGuildMoveToCategoryActionSheet
// Dependencies: [6616, 5388, 2]
// Exports: default

// Module 10415 (openFavoritesGuildMoveToCategoryActionSheet)
import FolderIcon2 from "FolderIcon" /* 5388 */;
import Sheet_showSimpleActionSheet from "Sheet/showSimpleActionSheet" /* 6616 */;
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
