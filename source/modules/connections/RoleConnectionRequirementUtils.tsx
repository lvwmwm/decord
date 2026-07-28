// Module ID: 16442
// Function ID: 128191
// Name: realizedOperatorFor
// Dependencies: [4975, 2]
// Exports: displayedValueFor, minDisplayedValueFor, realizedOperatorFor, storedValueFor

// Module 16442 (realizedOperatorFor)
import { OperatorTypes } from "OperatorTypes";

const result = require("set").fileFinishedImporting("modules/connections/RoleConnectionRequirementUtils.tsx");

export const realizedOperatorFor = function realizedOperatorFor(operator) {
  let GREATER_THAN = operator;
  if (null == operator) {
    GREATER_THAN = OperatorTypes.GREATER_THAN;
  }
  return GREATER_THAN;
};
export const displayedValueFor = function displayedValueFor(value, realizedOperatorForResult) {
  let num = 0;
  if (null != value) {
    num = value;
  }
  const rounded = Math.round(Number(num));
  if (OperatorTypes.GREATER_THAN === realizedOperatorForResult) {
    const _Math2 = Math;
    return Math.max(1, rounded + 1);
  } else if (OperatorTypes.LESS_THAN === realizedOperatorForResult) {
    const _Math = Math;
    return Math.max(0, rounded - 1);
  } else {
    return rounded;
  }
};
export const storedValueFor = function storedValueFor(arg0, c7) {
  let num = 0;
  if (null != arg0) {
    num = arg0;
  }
  const str = Math.round(Number(num));
  if (OperatorTypes.GREATER_THAN === c7) {
    const _Math2 = Math;
    return Math.max(0, str - 1).toString();
  } else if (OperatorTypes.LESS_THAN === c7) {
    const _Math = Math;
    return Math.max(1, str + 1).toString();
  } else {
    return str.toString();
  }
};
export const minDisplayedValueFor = function minDisplayedValueFor(arg0) {
  if (OperatorTypes.GREATER_THAN === arg0) {
    return 1;
  } else if (OperatorTypes.LESS_THAN === arg0) {
    return 0;
  }
};
