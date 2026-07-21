// Module ID: 8691
// Function ID: 68842
// Name: NameplateCardPreview
// Dependencies: []
// Exports: default

// Module 8691 (NameplateCardPreview)
const View = require(dependencyMap[0]).View;
const _module = require(dependencyMap[1]);
({ jsx: closure_4, jsxs: closure_5 } = _module);
const _module1 = require(dependencyMap[2]);
let obj = {};
obj = { paddingHorizontal: importDefault(dependencyMap[3]).space.PX_8 };
obj.nameplatePreviewContainer = obj;
obj.nameplateContainer = { width: "100%", backgroundColor: importDefault(dependencyMap[3]).colors.BACKGROUND_BASE_LOWER, borderRadius: importDefault(dependencyMap[3]).radii.sm };
const obj1 = { width: "100%", backgroundColor: importDefault(dependencyMap[3]).colors.BACKGROUND_BASE_LOWER, borderRadius: importDefault(dependencyMap[3]).radii.sm };
obj.nameplate = { backgroundColor: importDefault(dependencyMap[3]).colors.BACKGROUND_MOD_MUTED };
let closure_6 = _module1.createStyles(obj);
const _module2 = require(dependencyMap[9]);
const result = _module2.fileFinishedImporting("modules/collectibles/nameplates/native/NameplateCardPreview.tsx");

export default function NameplateCardPreview(arg0) {
  let animate;
  let item;
  ({ item, animate } = arg0);
  if (animate === undefined) {
    animate = false;
  }
  const tmp = callback3();
  importDefault(dependencyMap[4])(item.type === require(dependencyMap[5]).CollectiblesItemType.NAMEPLATE, "Item must be Nameplate");
  let obj = require(dependencyMap[6]);
  obj = { style: tmp.nameplatePreviewContainer };
  const nameplateData = obj.getNameplateData(item);
  obj = { "Null": "<string:35202304>", "Null": "bendrumas", "Null": "<string:4199612416>", avatarSize: require(dependencyMap[8]).AvatarSizes.XSMALL };
  const items = [{ opacity: 0.6 }];
  obj.style = items;
  const items1 = [callback(require(dependencyMap[7]).NameplateDummyUserPreview, obj), , , , ];
  const obj1 = { avatarSize: require(dependencyMap[8]).AvatarSizes.XSMALL };
  const items2 = [{ opacity: 0.6 }];
  obj1.style = items2;
  items1[1] = callback(require(dependencyMap[7]).NameplateDummyUserPreview, obj1);
  const obj2 = { style: tmp.nameplateContainer };
  const obj3 = { width: 54, avatarSize: require(dependencyMap[8]).AvatarSizes.XSMALL, nameplate: nameplateData, style: tmp.nameplate, animate };
  obj2.children = callback(require(dependencyMap[7]).NameplateDummyUserPreview, obj3);
  items1[2] = callback(View, obj2);
  const obj4 = { avatarSize: require(dependencyMap[8]).AvatarSizes.XSMALL };
  const items3 = [{ opacity: 0.6 }];
  obj4.style = items3;
  items1[3] = callback(require(dependencyMap[7]).NameplateDummyUserPreview, obj4);
  const obj5 = { "Null": "<string:35202304>", "Null": "bendrumas", "Null": "<string:4199612416>", avatarSize: require(dependencyMap[8]).AvatarSizes.XSMALL };
  const items4 = [{ opacity: 0.6 }];
  obj5.style = items4;
  items1[4] = callback(require(dependencyMap[7]).NameplateDummyUserPreview, obj5);
  obj.children = items1;
  return callback2(View, obj);
};
