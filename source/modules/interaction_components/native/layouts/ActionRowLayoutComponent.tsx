// Module ID: 16219
// Function ID: 16220
// Name: ActionRowLayoutComponent
// Dependencies: [19, 17, 21, 2]
// Exports: default

// Module 16219 (ActionRowLayoutComponent)
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const result = require("jsxProd").fileFinishedImporting("modules/interaction_components/native/layouts/ActionRowLayoutComponent.tsx");

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
