// Module ID: 16075
// Function ID: 124563
// Name: ActionRowLayoutComponent
// Dependencies: [31, 27, 33, 2]
// Exports: default

// Module 16075 (ActionRowLayoutComponent)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const result = require("jsxProd").fileFinishedImporting("modules/interaction_components/native/layouts/ActionRowLayoutComponent.tsx");

export default function ActionRowLayoutComponent(components) {
  components = components.components;
  let tmp2 = null;
  if (null != components) {
    tmp2 = null;
    if (0 !== components.length) {
      const obj = { children: tmp(components) };
      tmp2 = <View>{tmp(components)}</View>;
    }
  }
  return tmp2;
};
