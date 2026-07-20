// Module ID: 14286
// Function ID: 107924
// Name: UserSettingsDesignSystemText
// Dependencies: []
// Exports: default

// Module 14286 (UserSettingsDesignSystemText)
importAll(dependencyMap[0]);
const ScrollView = arg1(dependencyMap[1]).ScrollView;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemText.tsx");

export default function UserSettingsDesignSystemText() {
  let obj = arg1(dependencyMap[3]);
  obj = {};
  const token = obj.useToken(importDefault(dependencyMap[4]).modules.mobile.TABLE_ROW_PADDING);
  obj = { spacing: importDefault(dependencyMap[4]).space.PX_24, style: { paddingHorizontal: token } };
  const obj1 = {};
  const TEXT_VARIANT = arg1(dependencyMap[7]).TEXT_VARIANT;
  obj1.children = TEXT_VARIANT.map((variant) => {
    let tmp = null;
    if ("code" !== variant) {
      let obj = {};
      obj = { variant, children: variant };
      obj.label = callback2(callback(closure_2[9]).Text, obj, variant);
      tmp = callback2(callback(closure_2[8]).TableRow, obj, variant);
    }
    return tmp;
  });
  obj.children = jsx(arg1(dependencyMap[6]).TableRowGroup, obj1);
  obj.children = jsx(arg1(dependencyMap[5]).Stack, obj);
  return <ScrollView {...obj} />;
};
