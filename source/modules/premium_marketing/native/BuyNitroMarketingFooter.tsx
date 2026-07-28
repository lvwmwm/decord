// Module ID: 12416
// Function ID: 96359
// Name: BuyNitroMarketingFooter
// Dependencies: [31, 27, 33, 4165, 689, 5251, 6639, 5517, 2]
// Exports: default

// Module 12416 (BuyNitroMarketingFooter)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let Platform;
let closure_4;
const require = arg1;
({ Platform, View: closure_4 } = get_ActivityIndicator);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_12 };
const PX_24 = require("_createForOfIteratorHelperLoose").space.PX_24;
_createForOfIteratorHelperLoose.paddingBottom = null;
_createForOfIteratorHelperLoose.backgroundColor = require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER;
_createForOfIteratorHelperLoose.borderTopColor = require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE;
_createForOfIteratorHelperLoose.borderTopWidth = 1;
_createForOfIteratorHelperLoose["paddingBottom"] = 0;
_createForOfIteratorHelperLoose.footer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/premium_marketing/native/BuyNitroMarketingFooter.tsx");

export default function BuyNitroMarketingFooter(arg0) {
  let applicationId;
  let onPaymentDismiss;
  let onPaymentSuccess;
  let planSelection;
  ({ planSelection, applicationId, onPaymentSuccess, onPaymentDismiss } = arg0);
  const memo = React.useMemo(() => {
    const Gesture = outer1_0(outer1_2[5]).Gesture;
    const items = [-8, 8];
    return Gesture.Pan().activeOffsetY(items);
  }, []);
  let obj = { gesture: memo };
  obj = { style: _createForOfIteratorHelperLoose().footer, collapsable: false };
  obj = {};
  const tmp = _createForOfIteratorHelperLoose();
  obj.location = importDefault(5517).PREMIUM_MARKETING_FOOTER;
  obj.planSelection = planSelection;
  obj.applicationId = applicationId;
  obj.onPaymentSuccess = onPaymentSuccess;
  obj.onPaymentDismiss = onPaymentDismiss;
  obj.children = jsx(importDefault(6639), {});
  obj.children = <closure_4 />;
  return jsx(require(5251) /* Directions */.GestureDetector, {});
};
