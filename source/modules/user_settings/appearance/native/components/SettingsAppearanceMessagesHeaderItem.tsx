// Module ID: 14180
// Function ID: 108994
// Name: MessagesHeaderItem
// Dependencies: [31, 27, 33, 4130, 689, 4126, 1212, 2]
// Exports: default

// Module 14180 (MessagesHeaderItem)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_12, alignItems: "center", marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.messagesHeaderContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceMessagesHeaderItem.tsx");

export default function MessagesHeaderItem(animatedStyles) {
  let obj = { style: _createForOfIteratorHelperLoose().messagesHeaderContainer };
  obj = { animated: true, style: animatedStyles.animatedStyles.textNormal, variant: "text-lg/bold" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.OIgYlQ);
  obj.children = jsx(require(4126) /* Text */.Text, { animated: true, style: animatedStyles.animatedStyles.textNormal, variant: "text-lg/bold" });
  return <View animated style={arg0.animatedStyles.textNormal} variant="text-lg/bold" />;
};
