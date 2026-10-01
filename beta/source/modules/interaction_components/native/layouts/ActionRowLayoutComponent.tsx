// Module ID: 17160
// Function ID: 17161
// Name: ActionRowLayoutComponent
// Dependencies: [19, 17, 21, 2]
// Exports: default

// Module 17160 (ActionRowLayoutComponent)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/interaction_components/native/layouts/ActionRowLayoutComponent.tsx");

export default function ActionRowLayoutComponent(components) {
  components = components.components;
  let tmp2 = null;
  if (null != components) {
    tmp2 = null;
    if (0 !== components.length) {
      tmp2 = <View>{tmp(components)}</View>;
    }
  }
  return tmp2;
};
