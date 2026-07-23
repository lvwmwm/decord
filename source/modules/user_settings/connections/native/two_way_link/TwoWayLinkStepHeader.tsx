// Module ID: 8944
// Function ID: 70490
// Name: TwoWayLinkStepHeader
// Dependencies: [31, 33, 8943, 4126, 1212, 2]
// Exports: TwoWayLinkStepHeader

// Module 8944 (TwoWayLinkStepHeader)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("styles").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/TwoWayLinkStepHeader.tsx");

export const TwoWayLinkStepHeader = function TwoWayLinkStepHeader(arg0) {
  let idx;
  let total;
  ({ idx, total } = arg0);
  let obj = require(8943) /* styles */;
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  obj = { variant: "text-xs/bold", color: "text-default", style: twoWayLinkStyles.stepHeader };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.format(require(1212) /* getSystemLocale */.t.fHz6eR, { number: idx, total });
  return jsx(require(4126) /* Text */.Text, { variant: "text-xs/bold", color: "text-default", style: twoWayLinkStyles.stepHeader });
};
