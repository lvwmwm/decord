// Module ID: 15952
// Function ID: 122354
// Name: LabelLayoutComponent
// Dependencies: []
// Exports: default

// Module 15952 (LabelLayoutComponent)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/interaction_components/native/layouts/LabelLayoutComponent.tsx");

export default function LabelLayoutComponent(arg0) {
  let component;
  let description;
  let label;
  let renderComponent;
  ({ component, renderComponent } = arg0);
  ({ label, description } = arg0);
  let obj = arg1(dependencyMap[3]);
  const componentError = obj.useComponentError(component);
  if (component.type === arg1(dependencyMap[4]).ComponentType.CHECKBOX) {
    let renderComponentResult = renderComponent(component, "label-child");
  } else {
    obj = { label, description, required: component.required, errorMessage: componentError };
    obj = {};
    const obj1 = { width: "100%" };
    obj.style = obj1;
    obj.children = renderComponent(component, "label-child");
    obj.children = <View {...obj} />;
    renderComponentResult = jsx(arg1(dependencyMap[5]).Input, obj);
  }
  return renderComponentResult;
};
