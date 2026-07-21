// Module ID: 15949
// Function ID: 122344
// Name: renderComponents
// Dependencies: []

// Module 15949 (renderComponents)
function renderComponents(components) {
  return components.map((arg0, arg1) => callback(arg0, arg1.toString()));
}
function renderComponent(component, arg1) {
  const type = component.type;
  if (arg1(dependencyMap[2]).ComponentType.ACTION_ROW === type) {
    let obj = {};
    const merged = Object.assign(component);
    obj["renderComponents"] = renderComponents;
    return jsx(importDefault(dependencyMap[3]), obj, arg1);
  } else if (arg1(dependencyMap[2]).ComponentType.STRING_SELECT === type) {
    obj = {};
    const merged1 = Object.assign(component);
    return jsx(importDefault(dependencyMap[4]), obj, arg1);
  } else if (arg1(dependencyMap[2]).ComponentType.TEXT_INPUT === type) {
    const obj1 = {};
    const merged2 = Object.assign(component);
    return jsx(importDefault(dependencyMap[5]), obj1, arg1);
  } else {
    if (arg1(dependencyMap[2]).ComponentType.USER_SELECT !== type) {
      if (arg1(dependencyMap[2]).ComponentType.ROLE_SELECT !== type) {
        if (arg1(dependencyMap[2]).ComponentType.MENTIONABLE_SELECT !== type) {
          if (arg1(dependencyMap[2]).ComponentType.CHANNEL_SELECT !== type) {
            if (arg1(dependencyMap[2]).ComponentType.TEXT_DISPLAY === type) {
              const obj2 = {};
              const merged3 = Object.assign(component);
              return jsx(importDefault(dependencyMap[7]), obj2, arg1);
            } else if (arg1(dependencyMap[2]).ComponentType.LABEL === type) {
              const obj3 = {};
              const merged4 = Object.assign(component);
              obj3["renderComponent"] = renderComponent;
              return jsx(importDefault(dependencyMap[8]), obj3, arg1);
            } else if (arg1(dependencyMap[2]).ComponentType.FILE_UPLOAD === type) {
              const obj4 = {};
              const merged5 = Object.assign(component);
              return jsx(importDefault(dependencyMap[9]), obj4, arg1);
            } else if (arg1(dependencyMap[2]).ComponentType.RADIO_GROUP === type) {
              const obj5 = {};
              const merged6 = Object.assign(component);
              return jsx(importDefault(dependencyMap[10]), obj5, arg1);
            } else if (arg1(dependencyMap[2]).ComponentType.CHECKBOX_GROUP === type) {
              const obj6 = {};
              const merged7 = Object.assign(component);
              return jsx(importDefault(dependencyMap[11]), obj6, arg1);
            } else if (arg1(dependencyMap[2]).ComponentType.CHECKBOX === type) {
              obj = {};
              const merged8 = Object.assign(component);
              return jsx(importDefault(dependencyMap[12]), obj, arg1);
            }
          }
        }
      }
    }
    const obj7 = {};
    const merged9 = Object.assign(component);
    return jsx(importDefault(dependencyMap[6]), obj7, arg1);
  }
}
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/interaction_components/native/renderComponents.tsx");

export { renderComponents };
