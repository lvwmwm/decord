// Module ID: 16135
// Function ID: 125061
// Name: LabelLayoutComponent
// Dependencies: [31, 27, 33, 7832, 1882, 6671, 2]
// Exports: default

// Module 16135 (LabelLayoutComponent)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/interaction_components/native/layouts/LabelLayoutComponent.tsx");

export default function LabelLayoutComponent(arg0) {
  let component;
  let description;
  let label;
  let renderComponent;
  ({ component, renderComponent } = arg0);
  ({ label, description } = arg0);
  let obj = require(7832) /* isInteractionComponent */;
  const componentError = obj.useComponentError(component);
  if (component.type === require(1882) /* PermissionOverwriteType */.ComponentType.CHECKBOX) {
    let renderComponentResult = renderComponent(component, "label-child");
  } else {
    obj = { label, description, required: component.required, errorMessage: componentError };
    obj = {};
    const obj1 = { width: "100%" };
    obj.style = obj1;
    obj.children = renderComponent(component, "label-child");
    obj.children = <View />;
    renderComponentResult = jsx(require(6671) /* Input */.Input, {});
  }
  return renderComponentResult;
};
