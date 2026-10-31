// Module ID: 7473
// Function ID: 7474
// Name: findComponentMedia
// Dependencies: [1992, 6072, 2]

// Module 7473 (findComponentMedia)
import Server from "Server" /* 1992 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/findComponentMedia.tsx");
function findComponentMedia(arg0) {
  const f90732 = (type) => {
    type = type.type;
    if (Server.ComponentType.MEDIA_GALLERY === type) {
      const items = type.items;
      return items.map((media) => media.media);
    } else if (Server.ComponentType.THUMBNAIL === type) {
      return type.media;
    } else if (Server.ComponentType.FILE === type) {
      return type.file;
    } else if (Server.ComponentType.SECTION === type) {
      const components2 = type.components;
      const items1 = [];
      const accessory = type.accessory;
      const _Array = Array;
      let obj = accessory;
      const arraySpreadResult = HermesBuiltin.arraySpread(items1, components2.flatMap(findComponentMedia), 0);
      if (!Array.isArray(accessory)) {
        const items2 = [accessory];
        obj = items2;
      }
      const flatMapResult = obj.flatMap(f90732);
      HermesBuiltin.arraySpread(items1, flatMapResult.map(f90733), arraySpreadResult);
      return items1;
    } else {
      if (Server.ComponentType.ACTION_ROW !== type) {
        if (Server.ComponentType.CONTAINER !== type) {
          return [];
        }
      }
      const components = type.components;
      return components.flatMap(findComponentMedia);
    }
  };
  const f90733 = (item) => {
    let toUnfurledMediaItemResult = item;
    if ("proxy_url" in item) {
      const obj = closure_1_0(closure_1_1[1]);
      toUnfurledMediaItemResult = obj.toUnfurledMediaItem(item);
    }
    return toUnfurledMediaItemResult;
  };
  let obj = arg0;
  if (!Array.isArray(arg0)) {
    let items = [arg0];
    obj = items;
  }
  let flatMapResult = obj.flatMap(f90732);
  return flatMapResult.map(f90733);
}

export default findComponentMedia;
