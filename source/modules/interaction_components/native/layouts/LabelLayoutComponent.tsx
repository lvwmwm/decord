// Module ID: 16077
// Function ID: 124569
// Name: LabelLayoutComponent
// Dependencies: [31, 27, 33, 7794, 1881, 7505, 2]
// Exports: default

// Module 16077 (LabelLayoutComponent)
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
  let obj = require(7794) /* isInteractionComponent */;
  const componentError = obj.useComponentError(component);
  if (component.type === require(1881) /* PermissionOverwriteType */.ComponentType.CHECKBOX) {
    let renderComponentResult = renderComponent(component, "label-child");
  } else {
    obj = { label, description, required: component.required, errorMessage: componentError };
    obj = {};
    const obj1 = { width: "100%" };
    obj.style = obj1;
    obj.children = renderComponent(component, "label-child");
    obj.children = <View />;
    renderComponentResult = jsx(require(7505) /* Input */.Input, {});
  }
  return renderComponentResult;
};
