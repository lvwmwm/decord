// Module ID: 13929
// Function ID: 106492
// Name: FamilyCenterLinkRowWrapper
// Dependencies: [31, 33, 4165, 689, 5497, 4695, 8335, 2]
// Exports: default

// Module 13929 (FamilyCenterLinkRowWrapper)
import "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { display: "flex", flexDirection: "row", alignItems: "center", paddingTop: 14, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_12, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/parent_tools/native/FamilyCenterLinkWrapper.tsx");

export default function FamilyCenterLinkRowWrapper(userId) {
  userId = userId.userId;
  analyticsLocations = analyticsLocations(5497)().analyticsLocations;
  let tmp2 = null;
  if (undefined !== userId) {
    let obj = {
      style: tmp.container,
      onPress() {
          const obj = { userId, disableCalls: true, disableMessage: true, sourceAnalyticsLocations: analyticsLocations };
          analyticsLocations(outer1_2[6])(obj);
        },
      children: userId.children
    };
    tmp2 = jsx(userId(4695).PressableOpacity, {
      style: tmp.container,
      onPress() {
          const obj = { userId, disableCalls: true, disableMessage: true, sourceAnalyticsLocations: analyticsLocations };
          analyticsLocations(outer1_2[6])(obj);
        },
      children: userId.children
    });
  }
  return tmp2;
};
