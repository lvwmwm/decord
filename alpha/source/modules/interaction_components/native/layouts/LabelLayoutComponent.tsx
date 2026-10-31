// Module ID: 19493
// Function ID: 19494
// Name: LabelLayoutComponent
// Dependencies: [19, 17, 21, 8696, 1992, 7083, 2]
// Exports: default

// Module 19493 (LabelLayoutComponent)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Server from "Server" /* 1992 */;
import ComponentStateContext from "ComponentStateContext" /* 8696 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp;
const Input2 = tmp(7083);
const View = react_native.View;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/interaction_components/native/layouts/LabelLayoutComponent.tsx");

export default function LabelLayoutComponent(arg0) {
  let component;
  let description;
  let label;
  let renderComponent;
  let renderComponentResult;
  ({ component, renderComponent } = arg0);
  ({ label, description } = arg0);
  const obj = ComponentStateContext;
  const componentError = obj.useComponentError(component);
  if (component.type === Server.ComponentType.CHECKBOX) {
    renderComponentResult = renderComponent(component, "label-child");
  } else {
    ({ style: { width: "100%" }, children: renderComponent(component, "label-child") });
    const Input = Input2.Input;
    renderComponentResult = <Input label={label} description={description} required={component.required} errorMessage={componentError}>{null}</Input>;
  }
  return renderComponentResult;
};
