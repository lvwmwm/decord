// Module ID: 14648
// Function ID: 14649
// Name: UserSettingsDesignSystemText
// Dependencies: [19, 17, 21, 3959, 712, 4663, 5634, 4252, 5300, 4251, 2]
// Exports: default

// Module 14648 (UserSettingsDesignSystemText)
import "noop";
import { ScrollView } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemText.tsx");

export default function UserSettingsDesignSystemText() {
  let obj = require(3959) /* map */;
  obj = { children: null };
  const token = obj.useToken(importDefault(712).modules.mobile.TABLE_ROW_PADDING);
  obj = { spacing: null, style: null, children: null };
  obj[0] = importDefault(712).space.PX_24;
  obj[1] = { paddingHorizontal: token };
  const obj1 = { title: "Text Variants", hasIcons: false, children: null };
  const TEXT_VARIANT = require(4252) /* TEXT_VARIANT */.TEXT_VARIANT;
  obj1[2] = TEXT_VARIANT.map((arg0) => {
    let tmp = null;
    if ("code" !== arg0) {
      let obj = { label: null };
      obj = { variant: null, children: null };
      obj[0] = arg0;
      obj[1] = arg0;
      obj[0] = callback2(callback(4251).Text, obj, arg0);
      tmp = callback2(callback(5300).TableRow, obj, arg0);
    }
    return tmp;
  });
  obj[2] = jsx(require(5634) /* TableRowGroupTitle */.TableRowGroup, { title: "Text Variants", hasIcons: false, children: null });
  obj[0] = jsx(require(4663) /* Stack */.Stack, { spacing: null, style: null, children: null });
  return <ScrollView spacing={null} style={null}>{null}</ScrollView>;
};
