// Module ID: 14025
// Function ID: 107268
// Name: BountiesNuxPromoSheet
// Dependencies: [31, 27, 33, 4131, 689, 4099, 14024, 6599, 1212, 6832, 4544, 2]
// Exports: default

// Module 14025 (BountiesNuxPromoSheet)
import result from "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.illustrationContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/quests/native/BountiesNuxPromoSheet.tsx");

export default function BountiesNuxPromoSheet() {
  const callback = React.useCallback(() => {
    outer1_1(outer1_2[5]).hideActionSheet(outer1_0(outer1_2[6]).PROMO_SHEET_KEY);
  }, []);
  let obj = { gradientColor: "purple" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.DDpHZG);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.description = intl2.string(require(1212) /* getSystemLocale */.t["LY+igv"]);
  obj = { style: _createForOfIteratorHelperLoose().illustrationContainer, children: jsx(require(6832) /* BountiesPosterSpotIllustration */.BountiesPosterSpotIllustration, { width: 273, height: 205 }) };
  obj.illustration = <View style={_createForOfIteratorHelperLoose().illustrationContainer}>{jsx(require(6832) /* BountiesPosterSpotIllustration */.BountiesPosterSpotIllustration, { width: 273, height: 205 })}</View>;
  obj = { grow: true, size: "lg", variant: "primary" };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.text = intl3.string(require(1212) /* getSystemLocale */.t.cpT0Cq);
  obj.onPress = callback;
  obj.actions = jsx(require(4544) /* Button */.Button, { grow: true, size: "lg", variant: "primary" });
  return jsx(require(6599) /* PromoSheet */.PromoSheet, { grow: true, size: "lg", variant: "primary" });
};
