// Module ID: 14774
// Function ID: 14775
// Name: UserSettingsDesignSystemText
// Dependencies: [19, 17, 21, 4005, 712, 4712, 5767, 4300, 5374, 4299, 2]
// Exports: default

// Module 14774 (UserSettingsDesignSystemText)
import "noop";
import { ScrollView } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemText.tsx");

export default function UserSettingsDesignSystemText() {
  let obj = require(4005) /* map */;
  obj = { children: null };
  const token = obj.useToken(importDefault(712).modules.mobile.TABLE_ROW_PADDING);
  obj = { spacing: null, style: null, children: null };
  obj[0] = importDefault(712).space.PX_24;
  obj[1] = { paddingHorizontal: token };
  const obj1 = { title: "Text Variants", hasIcons: false, children: null };
  const TEXT_VARIANT = require(4300) /* TEXT_VARIANT */.TEXT_VARIANT;
  obj1[2] = TEXT_VARIANT.map((arg0) => {
    let tmp = null;
    if ("code" !== arg0) {
      let obj = { label: null };
      obj = { variant: null, children: null };
      obj[0] = arg0;
      obj[1] = arg0;
      obj[0] = callback2(callback(4299).Text, obj, arg0);
      tmp = callback2(callback(5374).TableRow, obj, arg0);
    }
    return tmp;
  });
  obj[2] = jsx(require(5767) /* TableRowGroupTitle */.TableRowGroup, { title: "Text Variants", hasIcons: false, children: null });
  obj[0] = jsx(require(4712) /* Stack */.Stack, { spacing: null, style: null, children: null });
  return <ScrollView spacing={null} style={null}>{null}</ScrollView>;
};
