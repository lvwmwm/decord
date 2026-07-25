// Module ID: 14167
// Function ID: 108983
// Name: FormSeparator
// Dependencies: [31, 27, 33, 4131, 689, 2]
// Exports: default

// Module 14167 (FormSeparator)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

_createForOfIteratorHelperLoose = { container: { alignSelf: "stretch" }, margins: { marginTop: 16 } };
_createForOfIteratorHelperLoose = { width: "100%", height: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
_createForOfIteratorHelperLoose.separator = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormSeparator.tsx");

export default function FormSeparator(arg0) {
  let style;
  let withoutMargins;
  ({ style, withoutMargins } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = {};
  const items = [tmp.container, , ];
  let margins;
  if (!withoutMargins) {
    margins = tmp.margins;
  }
  items[1] = margins;
  items[2] = style;
  obj.style = items;
  obj = { style: tmp.separator };
  obj.children = <View style={tmp.separator} />;
  return <View style={tmp.separator} />;
};
