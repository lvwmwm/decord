// Module ID: 9248
// Function ID: 72290
// Name: getFastestListVisibleItemsDefault
// Dependencies: []
// Exports: default

// Module 9248 (getFastestListVisibleItemsDefault)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/fastest_list/getFastestListVisibleItemsDefault.tsx");

export default function getFastestListVisibleItemsDefault(arg0) {
  let estimatedListSize;
  let itemSizes;
  let listHeaderSize;
  let sectionFooterSizes;
  let sectionHeaderSizes;
  let sections;
  let sectionsVersioned;
  ({ estimatedListSize, sectionsVersioned } = arg0);
  ({ itemSizes, listHeaderSize, sections, sectionFooterSizes, sectionHeaderSizes } = sectionsVersioned);
  const obj = { get: true, borderRadius: "/assets/design/components/Icon/native/redesign/generated/images", disabled: 24, onPress: 24, position: null, sectionsId: sectionsVersioned.sectionsId };
  if (listHeaderSize >= estimatedListSize) {
    return obj;
  } else {
    let num3 = 0;
    if (0 < sections.length) {
      while (true) {
        let sum2 = listHeaderSize;
        if (0 !== sections[num3]) {
          obj.sectionEnd = num3;
          obj.itemEnd = 0;
          let sum = listHeaderSize + tmp3 ? sectionHeaderSizes[0] : sectionHeaderSizes[num3];
          if (sum >= estimatedListSize) {
            break;
          } else {
            let tmp6 = sum;
            let num = 0;
            let tmp7 = sum;
            let num2 = 0;
            if (0 < sections[num3]) {
              while (true) {
                obj.itemEnd = num;
                if (tmp) {
                  let first = itemSizes[0].sizes[0];
                } else {
                  first = itemSizes[num3].sizes[num];
                }
                let sum1 = tmp6 + first;
                if (sum1 >= estimatedListSize) {
                  break;
                } else {
                  num = num + 1;
                  tmp6 = sum1;
                  tmp7 = sum1;
                  num2 = num;
                  continue;
                }
              }
              return obj;
            }
            sum2 = tmp7 + tmp2 ? sectionFooterSizes[0] : sectionFooterSizes[num3];
            let tmp10 = num2;
            if (sum2 >= estimatedListSize) {
              return obj;
            }
          }
        }
        num3 = num3 + 1;
        listHeaderSize = sum2;
      }
      return obj;
    }
    return obj;
  }
};
