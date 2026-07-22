// Module ID: 13674
// Function ID: 103530
// Name: FamilyCenterFeatureRows
// Dependencies: []
// Exports: default

// Module 13674 (FamilyCenterFeatureRows)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { marginTop: 20, marginBottom: importDefault(dependencyMap[4]).space.PX_24 };
obj.tableGroup = obj;
let closure_6 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/parent_tools/native/FamilyCenterFeatureRow.tsx");

export default function FamilyCenterFeatureRows() {
  let obj = arg1(dependencyMap[5]);
  const intl = arg1(dependencyMap[6]).intl;
  const tmp = callback3();
  const intl2 = arg1(dependencyMap[6]).intl;
  const ageSpecificText = obj.useAgeSpecificText(intl.string(importDefault(dependencyMap[7]).qITXhY), intl2.string(importDefault(dependencyMap[7]).bmhCnL));
  let obj1 = arg1(dependencyMap[5]);
  const intl3 = arg1(dependencyMap[6]).intl;
  const stringResult = intl.string(importDefault(dependencyMap[7]).qITXhY);
  const intl4 = arg1(dependencyMap[6]).intl;
  const ageSpecificText1 = obj1.useAgeSpecificText(intl3.string(importDefault(dependencyMap[7]).t7SkFy), intl4.string(importDefault(dependencyMap[7]).68zfxD));
  let obj2 = arg1(dependencyMap[5]);
  const intl5 = arg1(dependencyMap[6]).intl;
  const stringResult1 = intl3.string(importDefault(dependencyMap[7]).t7SkFy);
  const intl6 = arg1(dependencyMap[6]).intl;
  obj = {};
  const ageSpecificText2 = obj2.useAgeSpecificText(intl5.string(importDefault(dependencyMap[7]).+pi4Yt), intl6.string(importDefault(dependencyMap[7]).1xPTwE));
  obj.icon = importDefault(dependencyMap[8]);
  obj.IconComponent = arg1(dependencyMap[9]).ChatCheckIcon;
  const intl7 = arg1(dependencyMap[6]).intl;
  obj.header = intl7.string(importDefault(dependencyMap[7]).001l3m);
  obj.description = ageSpecificText;
  const items = [obj, , ];
  obj = { icon: importDefault(dependencyMap[10]), IconComponent: arg1(dependencyMap[11]).EyeIcon };
  const intl8 = arg1(dependencyMap[6]).intl;
  obj.header = intl8.string(importDefault(dependencyMap[7]).yipAeP);
  obj.description = ageSpecificText1;
  items[1] = obj;
  obj1 = { icon: importDefault(dependencyMap[12]), IconComponent: arg1(dependencyMap[13]).QrCodeIcon };
  const intl9 = arg1(dependencyMap[6]).intl;
  obj1.header = intl9.string(importDefault(dependencyMap[7]).hhOuMe);
  obj1.description = ageSpecificText2;
  items[2] = obj1;
  obj2 = { style: tmp.tableGroup };
  const obj3 = { spacing: 8 };
  const obj4 = {};
  const intl10 = arg1(dependencyMap[6]).intl;
  obj4.children = intl10.string(importDefault(dependencyMap[7]).6JkHSg);
  const items1 = [callback(arg1(dependencyMap[15]).Text, obj4), ];
  const obj5 = {
    hasIcons: true,
    children: items.map((header) => {
      let IconComponent;
      let description;
      let icon;
      header = header.header;
      ({ description, icon, IconComponent } = header);
      const obj = { label: header, subLabel: description, icon: callback2(callback(closure_2[17]).TableRow.Icon, { source: icon, IconComponent }) };
      return callback2(callback(closure_2[17]).TableRow, obj, header);
    })
  };
  items1[1] = callback(arg1(dependencyMap[16]).TableRowGroup, obj5);
  obj3.children = items1;
  obj2.children = callback2(arg1(dependencyMap[14]).Stack, obj3);
  return callback(View, obj2);
};
