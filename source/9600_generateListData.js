// Module ID: 9600
// Function ID: 74800
// Name: generateListData
// Dependencies: []
// Exports: default, doesStickerPackHavePopoutInformation

// Module 9600 (generateListData)
function generateListData(stickerPack) {
  const items = [];
  let obj = arg1(dependencyMap[5]);
  if (obj.isStickerPackAnimated(stickerPack)) {
    obj = { key: "animated" };
    const intl = arg1(dependencyMap[6]).intl;
    obj.description = intl.string(arg1(dependencyMap[6]).t.W11rMa);
    items.push(obj);
  }
  return items;
}
importAll(dependencyMap[0]);
({ View: closure_2, FlatList: closure_3 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOW, borderRadius: importDefault(dependencyMap[4]).radii.xs, shadowColor: importDefault(dependencyMap[4]).colors.BLACK, shadowOffset: { aze: false, azj: false }, shadowOpacity: 0.25, shadowRadius: 5 };
obj.informationContainer = obj;
obj.headerContainer = { first: null, groupTypes: 24, assetType: 8 };
obj.informationHeader = { lineHeight: 20 };
obj.informationContentContainer = { flexDirection: "row" };
obj.informationContent = { lineHeight: 20 };
obj.informationContentDescription = {};
let closure_6 = obj.createStyles(obj);
const tmp4 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/stickers/native/StickerPackInformationPopout.tsx");

export default function StickerPackInformationPopout(stickerPack) {
  let onClose;
  let style;
  stickerPack = stickerPack.stickerPack;
  ({ onClose, style } = stickerPack);
  const tmp = callback3();
  const arg1 = tmp;
  let obj = { style: items };
  const items = [tmp.informationContainer, style];
  obj = { style: tmp.headerContainer };
  obj = { style: tmp.informationHeader };
  const intl = arg1(dependencyMap[6]).intl;
  obj.children = intl.format(arg1(dependencyMap[6]).t.XDm6yN, { stickerPackName: stickerPack.name });
  const items1 = [callback(arg1(dependencyMap[7]).Text, obj), ];
  const obj2 = { onPress: onClose, accessibilityRole: "button" };
  const intl2 = arg1(dependencyMap[6]).intl;
  obj2.accessibilityLabel = intl2.string(arg1(dependencyMap[6]).t.cpT0Cq);
  const obj3 = {};
  const intl3 = arg1(dependencyMap[6]).intl;
  obj3.children = intl3.string(arg1(dependencyMap[6]).t.cpT0Cq);
  obj2.children = callback(arg1(dependencyMap[7]).Text, obj3);
  items1[1] = callback(arg1(dependencyMap[8]).PressableOpacity, obj2);
  obj.children = items1;
  const items2 = [callback2(closure_2, obj), ];
  const obj1 = { stickerPackName: stickerPack.name };
  const tmp2 = generateListData(stickerPack);
  items2[1] = callback(closure_3, {
    data: generateListData(stickerPack),
    renderItem(children) {
      let obj = { style: tmp.informationContentContainer };
      obj = { style: tmp.informationContent };
      const items = [callback(tmp(closure_1[7]).Text, obj), ];
      obj = { style: items1, children: children.item.description };
      const items1 = [, ];
      ({ informationContent: arr2[0], informationContentDescription: arr2[1] } = tmp);
      items[1] = callback(tmp(closure_1[7]).Text, obj);
      obj.children = items;
      return callback2(closure_2, obj);
    }
  });
  obj.children = items2;
  return callback2(closure_2, obj);
};
export const doesStickerPackHavePopoutInformation = function doesStickerPackHavePopoutInformation(stickerPack) {
  return generateListData(stickerPack).length > 0;
};
