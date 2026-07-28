// Module ID: 14524
// Function ID: 110803
// Name: UserSettingsDesignSystemText
// Dependencies: [31, 27, 33, 3869, 689, 4576, 5536, 4162, 5198, 4161, 2]
// Exports: default

// Module 14524 (UserSettingsDesignSystemText)
import "result";
import { ScrollView } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemText.tsx");

export default function UserSettingsDesignSystemText() {
  let obj = require(3869) /* map */;
  obj = {};
  const token = obj.useToken(importDefault(689).modules.mobile.TABLE_ROW_PADDING);
  obj = { spacing: importDefault(689).space.PX_24, style: { paddingHorizontal: token } };
  const obj1 = { title: "Text Variants", hasIcons: false };
  const TEXT_VARIANT = require(4162) /* TEXT_VARIANT */.TEXT_VARIANT;
  obj1.children = TEXT_VARIANT.map((variant) => {
    let tmp = null;
    if ("code" !== variant) {
      let obj = {};
      obj = { variant, children: variant };
      obj.label = outer1_4(outer1_0(outer1_2[9]).Text, obj, variant);
      tmp = outer1_4(outer1_0(outer1_2[8]).TableRow, obj, variant);
    }
    return tmp;
  });
  obj.children = jsx(require(5536) /* TableRowGroupTitle */.TableRowGroup, { title: "Text Variants", hasIcons: false });
  obj.children = jsx(require(4576) /* Stack */.Stack, { spacing: importDefault(689).space.PX_24, style: { paddingHorizontal: token } });
  return <ScrollView spacing={importDefault(689).space.PX_24} style={{ paddingHorizontal: token }} />;
};
