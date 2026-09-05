// Module ID: 17392
// Function ID: 17393
// Name: ActionRowLayoutComponent
// Dependencies: [19, 17, 21, 2]
// Exports: default

// Module 17392 (ActionRowLayoutComponent)
import noopAll from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

noopAll;
const result = require("set").fileFinishedImporting("modules/interaction_components/native/layouts/ActionRowLayoutComponent.tsx");

export default function ActionRowLayoutComponent(components) {
  components = components.components;
  let tmp2 = null;
  if (null != components) {
    tmp2 = null;
    if (0 !== components.length) {
      const obj = { children: null };
      obj[0] = tmp(components);
      tmp2 = <View>{null}</View>;
    }
  }
  return tmp2;
};
