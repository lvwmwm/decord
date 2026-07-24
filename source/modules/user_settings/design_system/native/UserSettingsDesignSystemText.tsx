// Module ID: 14468
// Function ID: 110498
// Name: UserSettingsDesignSystemText
// Dependencies: [31, 27, 33, 3834, 689, 4541, 5501, 4127, 5165, 4126, 2]
// Exports: default

// Module 14468 (UserSettingsDesignSystemText)
import "result";
import { ScrollView } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemText.tsx");

export default function UserSettingsDesignSystemText() {
  let obj = require(3834) /* map */;
  obj = {};
  const token = obj.useToken(importDefault(689).modules.mobile.TABLE_ROW_PADDING);
  obj = { spacing: importDefault(689).space.PX_24, style: { paddingHorizontal: token } };
  const obj1 = { title: "Text Variants", hasIcons: false };
  const TEXT_VARIANT = require(4127) /* TEXT_VARIANT */.TEXT_VARIANT;
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
  obj.children = jsx(require(5501) /* TableRowGroupTitle */.TableRowGroup, { title: "Text Variants", hasIcons: false });
  obj.children = jsx(require(4541) /* Stack */.Stack, { spacing: importDefault(689).space.PX_24, style: { paddingHorizontal: token } });
  return <ScrollView spacing={importDefault(689).space.PX_24} style={{ paddingHorizontal: token }} />;
};
