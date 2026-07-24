// Module ID: 10185
// Function ID: 78717
// Name: SafetyToolsSafetyTipsActionSheet
// Dependencies: [31, 27, 10166, 33, 4130, 689, 10173, 1212, 10186, 4126, 2]
// Exports: default

// Module 10185 (SafetyToolsSafetyTipsActionSheet)
import "result";
import { View } from "get ActivityIndicator";
import { getInappropriateConversationsSafetyTips as closure_4 } from "LOCATION_CONTEXT_MOBILE";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.safetyTipsContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("LOCATION_CONTEXT_MOBILE").fileFinishedImporting("modules/self_mod/shared/native/SafetyToolsSafetyTipsActionSheet.tsx");

export default function SafetyToolsSafetyTipsActionSheet(arg0) {
  let channelId;
  let onClose;
  let recipientId;
  let warningId;
  let warningType;
  ({ channelId, recipientId, warningId, warningType, onClose } = arg0);
  let obj = { hasHeaderBack: true, recipientId, warningId, warningType };
  const tmp = _createForOfIteratorHelperLoose();
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.headerTitle = intl.string(require(1212) /* getSystemLocale */.t.EtNxi6);
  obj.channelId = channelId;
  obj.onClose = onClose;
  obj = { style: tmp.safetyTipsContainer };
  obj = {};
  const tmp2 = importDefault(10173);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.description = intl2.string(require(1212) /* getSystemLocale */.t.DJMZX6);
  const tmp3 = importDefault(10186);
  obj.safetyTips = callback().map((children) => outer1_5(outer1_0(outer1_2[9]).Text, { variant: "text-sm/medium", children }, arg1));
  obj.children = <tmp3 />;
  obj.children = <View />;
  return <tmp2 />;
};
