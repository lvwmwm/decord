// Module ID: 17162
// Function ID: 17163
// Name: LabelLayoutComponent
// Dependencies: [19, 17, 21, 7569, 1979, 6025, 2]
// Exports: default

// Module 17162 (LabelLayoutComponent)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Server from "Server" /* 1979 */;
import ComponentStateContext from "ComponentStateContext" /* 7569 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp;
const Input2 = tmp(6025);
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
