// Module ID: 16540
// Function ID: 16541
// Name: renderComponents
// Dependencies: [19, 21, 1954, 16541, 15102, 16542, 15105, 15106, 16543, 16544, 16546, 16547, 16548, 2]

// Module 16540 (renderComponents)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
function renderComponents(components) {
  return components.map((arg0, arg1) => callback(arg0, arg1.toString()));
}
function renderComponent(component, arg1) {
  const type = component.type;
  if (require(1954) /* PermissionOverwriteType */.ComponentType.ACTION_ROW === type) {
    let obj = {};
    const merged = Object.assign(component);
    obj.renderComponents = renderComponents;
    return jsx(importDefault(16541), {}, arg1);
  } else if (tmp(1954).ComponentType.STRING_SELECT === type) {
    obj = {};
    const merged1 = Object.assign(component);
    return jsx(importDefault(15102), {}, arg1);
  } else if (tmp(1954).ComponentType.TEXT_INPUT === type) {
    const obj1 = {};
    const merged2 = Object.assign(component);
    return jsx(importDefault(16542), {}, arg1);
  } else {
    if (tmp(1954).ComponentType.USER_SELECT !== type) {
      if (tmp(1954).ComponentType.ROLE_SELECT !== type) {
        if (tmp(1954).ComponentType.MENTIONABLE_SELECT !== type) {
          if (tmp(1954).ComponentType.CHANNEL_SELECT !== type) {
            if (tmp(1954).ComponentType.TEXT_DISPLAY === type) {
              const obj2 = {};
              const merged3 = Object.assign(component);
              return jsx(importDefault(15106), {}, arg1);
            } else if (tmp(1954).ComponentType.LABEL === type) {
              const obj3 = {};
              const merged4 = Object.assign(component);
              obj3.renderComponent = renderComponent;
              return jsx(importDefault(16543), {}, arg1);
            } else if (tmp(1954).ComponentType.FILE_UPLOAD === type) {
              const obj4 = {};
              const merged5 = Object.assign(component);
              return jsx(importDefault(16544), {}, arg1);
            } else if (tmp(1954).ComponentType.RADIO_GROUP === type) {
              const obj5 = {};
              const merged6 = Object.assign(component);
              return jsx(importDefault(16546), {}, arg1);
            } else if (tmp(1954).ComponentType.CHECKBOX_GROUP === type) {
              const obj6 = {};
              const merged7 = Object.assign(component);
              return jsx(importDefault(16547), {}, arg1);
            } else if (tmp(1954).ComponentType.CHECKBOX === type) {
              obj = {};
              const merged8 = Object.assign(component);
              return jsx(importDefault(16548), {}, arg1);
            }
          }
        }
      }
    }
    const obj7 = {};
    const merged9 = Object.assign(component);
    return jsx(importDefault(15105), {}, arg1);
  }
}
const result = require("PermissionOverwriteType").fileFinishedImporting("modules/interaction_components/native/renderComponents.tsx");

export { renderComponents };
