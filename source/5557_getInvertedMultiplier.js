// Module ID: 5557
// Function ID: 47216
// Name: getInvertedMultiplier
// Dependencies: [27]
// Exports: default

// Module 5557 (getInvertedMultiplier)
import { I18nManager } from "get ActivityIndicator";


export default function getInvertedMultiplier(arg0) {
  if ("vertical" === arg0) {
    return 1;
  } else if ("vertical-inverted" === arg0) {
    return -1;
  } else if ("horizontal" === arg0) {
    let num2 = 1;
    if (I18nManager.getConstants().isRTL) {
      num2 = -1;
    }
    return num2;
  } else if ("horizontal-inverted" === arg0) {
    let num = -1;
    if (I18nManager.getConstants().isRTL) {
      num = 1;
    }
    return num;
  }
};
