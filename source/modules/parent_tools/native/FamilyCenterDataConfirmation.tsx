// Module ID: 11052
// Function ID: 86057
// Name: RowGroup
// Dependencies: []
// Exports: default

// Module 11052 (RowGroup)
function RowGroup(rows) {
  rows = rows.rows;
  let obj = { spacing: 8 };
  obj = { alignItems: "r", justifyContent: 320.5, backgroundColor: 175, children: rows.title };
  const items = [callback(arg1(dependencyMap[3]).Text, obj), ];
  obj = {
    hasIcons: true,
    children: rows.map((header) => {
      let IconComponent;
      let description;
      let negative;
      header = header.header;
      ({ description, IconComponent, negative } = header);
      let obj = { label: header, subLabel: description };
      obj = {};
      let str = "default";
      if (true === negative) {
        str = "text-status-dnd";
      }
      obj.variant = str;
      obj.IconComponent = IconComponent;
      obj.icon = closure_3(callback(closure_2[5]).TableRow.Icon, obj);
      return closure_3(callback(closure_2[5]).TableRow, obj, header);
    })
  };
  items[1] = callback(arg1(dependencyMap[4]).TableRowGroup, obj);
  obj.children = items;
  return callback2(arg1(dependencyMap[2]).Stack, obj);
}
importAll(dependencyMap[0]);
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/parent_tools/native/FamilyCenterDataConfirmation.tsx");

export default function FamilyCenterDataConfirmation() {
  const intl = arg1(dependencyMap[6]).intl;
  const intl2 = arg1(dependencyMap[6]).intl;
  const stringResult = intl.string(importDefault(dependencyMap[7]).CI1Env);
  const intl3 = arg1(dependencyMap[6]).intl;
  const stringResult1 = intl2.string(importDefault(dependencyMap[7]).ksze+o);
  let obj = arg1(dependencyMap[8]);
  const intl4 = arg1(dependencyMap[6]).intl;
  const stringResult2 = intl3.string(importDefault(dependencyMap[7]).n73g+V);
  const intl5 = arg1(dependencyMap[6]).intl;
  const ageSpecificText = obj.useAgeSpecificText(intl4.string(importDefault(dependencyMap[7]).5x3taM), intl5.string(importDefault(dependencyMap[7]).WZwGFX));
  let obj1 = arg1(dependencyMap[8]);
  const intl6 = arg1(dependencyMap[6]).intl;
  const stringResult3 = intl4.string(importDefault(dependencyMap[7]).5x3taM);
  const intl7 = arg1(dependencyMap[6]).intl;
  const ageSpecificText1 = obj1.useAgeSpecificText(intl6.string(importDefault(dependencyMap[7]).FcKkcr), intl7.string(importDefault(dependencyMap[7]).PQtDFk));
  let obj2 = arg1(dependencyMap[8]);
  const intl8 = arg1(dependencyMap[6]).intl;
  const stringResult4 = intl6.string(importDefault(dependencyMap[7]).FcKkcr);
  const intl9 = arg1(dependencyMap[6]).intl;
  const ageSpecificText2 = obj2.useAgeSpecificText(intl8.string(importDefault(dependencyMap[7]).dES/2r), intl9.string(importDefault(dependencyMap[7]).ep6mdN));
  let obj3 = arg1(dependencyMap[8]);
  const intl10 = arg1(dependencyMap[6]).intl;
  const stringResult5 = intl8.string(importDefault(dependencyMap[7]).dES/2r);
  const intl11 = arg1(dependencyMap[6]).intl;
  const ageSpecificText3 = obj3.useAgeSpecificText(intl10.string(importDefault(dependencyMap[7]).GWPcQg), intl11.string(importDefault(dependencyMap[7]).yFnKIg));
  let obj4 = arg1(dependencyMap[8]);
  const intl12 = arg1(dependencyMap[6]).intl;
  const stringResult6 = intl10.string(importDefault(dependencyMap[7]).GWPcQg);
  const intl13 = arg1(dependencyMap[6]).intl;
  const ageSpecificText4 = obj4.useAgeSpecificText(intl12.string(importDefault(dependencyMap[7]).30+sih), intl13.string(importDefault(dependencyMap[7]).0cuLn1));
  let obj5 = arg1(dependencyMap[8]);
  const intl14 = arg1(dependencyMap[6]).intl;
  const stringResult7 = intl12.string(importDefault(dependencyMap[7]).30+sih);
  const intl15 = arg1(dependencyMap[6]).intl;
  const ageSpecificText5 = obj5.useAgeSpecificText(intl14.string(importDefault(dependencyMap[7]).tHTyRh), intl15.string(importDefault(dependencyMap[7]).TeNlMb));
  let obj6 = arg1(dependencyMap[8]);
  const intl16 = arg1(dependencyMap[6]).intl;
  const stringResult8 = intl14.string(importDefault(dependencyMap[7]).tHTyRh);
  const intl17 = arg1(dependencyMap[6]).intl;
  const ageSpecificText6 = obj6.useAgeSpecificText(intl16.string(importDefault(dependencyMap[7]).PfveQ6), intl17.string(importDefault(dependencyMap[7]).f7ofm/));
  let obj7 = arg1(dependencyMap[8]);
  const intl18 = arg1(dependencyMap[6]).intl;
  const stringResult9 = intl16.string(importDefault(dependencyMap[7]).PfveQ6);
  const intl19 = arg1(dependencyMap[6]).intl;
  const ageSpecificText7 = obj7.useAgeSpecificText(intl18.string(importDefault(dependencyMap[7]).MKeCj3), intl19.string(importDefault(dependencyMap[7]).HdcGGl));
  let obj8 = arg1(dependencyMap[8]);
  const intl20 = arg1(dependencyMap[6]).intl;
  const stringResult10 = intl18.string(importDefault(dependencyMap[7]).MKeCj3);
  const intl21 = arg1(dependencyMap[6]).intl;
  const ageSpecificText8 = obj8.useAgeSpecificText(intl20.string(importDefault(dependencyMap[7]).wZejZr), intl21.string(importDefault(dependencyMap[7]).tdgcf1));
  let obj9 = arg1(dependencyMap[8]);
  const intl22 = arg1(dependencyMap[6]).intl;
  const stringResult11 = intl20.string(importDefault(dependencyMap[7]).wZejZr);
  const intl23 = arg1(dependencyMap[6]).intl;
  const ageSpecificText9 = obj9.useAgeSpecificText(intl22.string(importDefault(dependencyMap[7]).ASf7XN), intl23.string(importDefault(dependencyMap[7]).82y87X));
  let obj10 = arg1(dependencyMap[8]);
  const intl24 = arg1(dependencyMap[6]).intl;
  const stringResult12 = intl22.string(importDefault(dependencyMap[7]).ASf7XN);
  const intl25 = arg1(dependencyMap[6]).intl;
  obj = {};
  const ageSpecificText10 = obj10.useAgeSpecificText(intl24.string(importDefault(dependencyMap[7]).0QDVFN), intl25.string(importDefault(dependencyMap[7]).1xBHHV));
  const intl26 = arg1(dependencyMap[6]).intl;
  obj.header = intl26.string(importDefault(dependencyMap[7])./zMYZX);
  obj.description = ageSpecificText;
  obj.IconComponent = arg1(dependencyMap[9]).UserPlusIcon;
  const items = [obj, , , , , , ];
  obj = {};
  const intl27 = arg1(dependencyMap[6]).intl;
  obj.header = intl27.string(importDefault(dependencyMap[7]).44NEx6);
  obj.description = ageSpecificText1;
  obj.IconComponent = arg1(dependencyMap[10]).ServerIcon;
  items[1] = obj;
  obj1 = {};
  const intl28 = arg1(dependencyMap[6]).intl;
  obj1.header = intl28.string(importDefault(dependencyMap[7]).Z3G+8h);
  const intl29 = arg1(dependencyMap[6]).intl;
  obj1.description = intl29.string(importDefault(dependencyMap[7]).KBgArX);
  obj1.IconComponent = arg1(dependencyMap[11]).ForumIcon;
  items[2] = obj1;
  obj2 = {};
  const intl30 = arg1(dependencyMap[6]).intl;
  obj2.header = intl30.string(importDefault(dependencyMap[7]).GNs2ZH);
  const intl31 = arg1(dependencyMap[6]).intl;
  obj2.description = intl31.string(importDefault(dependencyMap[7]).Ief2xc);
  obj2.IconComponent = arg1(dependencyMap[12]).PhoneIcon;
  items[3] = obj2;
  obj3 = {};
  const intl32 = arg1(dependencyMap[6]).intl;
  obj3.header = intl32.string(importDefault(dependencyMap[7]).PjM3r5);
  obj3.description = ageSpecificText2;
  obj3.IconComponent = arg1(dependencyMap[13]).CreditCardIcon;
  items[4] = obj3;
  obj4 = {};
  const intl33 = arg1(dependencyMap[6]).intl;
  obj4.header = intl33.string(importDefault(dependencyMap[7]).Fv3n8L);
  obj4.description = ageSpecificText3;
  obj4.IconComponent = arg1(dependencyMap[14]).GiftIcon;
  items[5] = obj4;
  obj5 = { header: ageSpecificText4, description: ageSpecificText5, IconComponent: arg1(dependencyMap[15]).FlagIcon };
  items[6] = obj5;
  obj6 = {};
  const intl34 = arg1(dependencyMap[6]).intl;
  obj6.header = intl34.string(importDefault(dependencyMap[7]).kyT6pZ);
  obj6.description = ageSpecificText6;
  obj6.IconComponent = arg1(dependencyMap[16]).ClockIcon;
  const items1 = [obj6, , ];
  obj7 = {};
  const intl35 = arg1(dependencyMap[6]).intl;
  obj7.header = intl35.string(importDefault(dependencyMap[7]).52ld7c);
  obj7.description = ageSpecificText7;
  obj7.IconComponent = arg1(dependencyMap[17]).PiggyBankIcon;
  items1[1] = obj7;
  obj8 = {};
  const intl36 = arg1(dependencyMap[6]).intl;
  obj8.header = intl36.string(importDefault(dependencyMap[7]).UCuHM8);
  obj8.description = ageSpecificText8;
  obj8.IconComponent = arg1(dependencyMap[18]).SettingsIcon;
  items1[2] = obj8;
  obj9 = { spacing: 24 };
  const items2 = [callback(RowGroup, { title: stringResult, rows: items }), callback(RowGroup, { title: stringResult1, rows: items1 }), ];
  obj10 = { title: stringResult2 };
  const stringResult13 = intl24.string(importDefault(dependencyMap[7]).0QDVFN);
  const items3 = [{ header: ageSpecificText9, description: ageSpecificText10, IconComponent: arg1(dependencyMap[19]).XSmallIcon, negative: true }];
  obj10.rows = items3;
  items2[2] = callback(RowGroup, obj10);
  obj9.children = items2;
  return callback2(arg1(dependencyMap[2]).Stack, obj9);
};
