// Module ID: 19928
// Function ID: 19929
// Name: LabelLayoutComponent
// Dependencies: [19, 17, 21, 8773, 2116, 7152, 2]
// Exports: default

// Module 19928 (LabelLayoutComponent)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Server from "Server" /* 2116 */;
import ComponentStateContext from "ComponentStateContext" /* 8773 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp;
const Input2 = tmp(7152);
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
