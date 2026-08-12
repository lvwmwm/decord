// Module ID: 10546
// Function ID: 10547
// Name: TwoWayLinkStepHeader
// Dependencies: [19, 21, 10545, 4340, 1236, 2]
// Exports: TwoWayLinkStepHeader

// Module 10546 (TwoWayLinkStepHeader)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("styles").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/TwoWayLinkStepHeader.tsx");

export const TwoWayLinkStepHeader = function TwoWayLinkStepHeader(arg0) {
  let idx;
  let total;
  ({ idx, total } = arg0);
  let obj = require(10545) /* styles */;
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  obj = { variant: "text-xs/bold", color: "text-default", style: twoWayLinkStyles.stepHeader, children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[3] = intl.format(require(1236) /* getSystemLocale */.t.fHz6eR, { number: idx, total });
  return jsx(require(4340) /* Text */.Text, { variant: "text-xs/bold", color: "text-default", style: twoWayLinkStyles.stepHeader, children: null });
};
