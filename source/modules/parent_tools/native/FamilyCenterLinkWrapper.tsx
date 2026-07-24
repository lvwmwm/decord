// Module ID: 13873
// Function ID: 106187
// Name: FamilyCenterLinkRowWrapper
// Dependencies: [31, 33, 4130, 689, 5462, 4660, 8537, 2]
// Exports: default

// Module 13873 (FamilyCenterLinkRowWrapper)
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
  analyticsLocations = analyticsLocations(5462)().analyticsLocations;
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
    tmp2 = jsx(userId(4660).PressableOpacity, {
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
