// Module ID: 16470
// Function ID: 16471
// Name: renderComponents
// Dependencies: [19, 21, 1935, 16471, 15034, 16472, 15037, 15038, 16473, 16474, 16476, 16477, 16478, 2]

// Module 16470 (renderComponents)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
function renderComponents(components) {
  return components.map((arg0, arg1) => callback(arg0, arg1.toString()));
}
function renderComponent(component, arg1) {
  const type = component.type;
  if (require(1935) /* PermissionOverwriteType */.ComponentType.ACTION_ROW === type) {
    let obj = {};
    const merged = Object.assign(component);
    obj.renderComponents = renderComponents;
    return jsx(importDefault(16471), {}, arg1);
  } else if (tmp(1935).ComponentType.STRING_SELECT === type) {
    obj = {};
    const merged1 = Object.assign(component);
    return jsx(importDefault(15034), {}, arg1);
  } else if (tmp(1935).ComponentType.TEXT_INPUT === type) {
    const obj1 = {};
    const merged2 = Object.assign(component);
    return jsx(importDefault(16472), {}, arg1);
  } else {
    if (tmp(1935).ComponentType.USER_SELECT !== type) {
      if (tmp(1935).ComponentType.ROLE_SELECT !== type) {
        if (tmp(1935).ComponentType.MENTIONABLE_SELECT !== type) {
          if (tmp(1935).ComponentType.CHANNEL_SELECT !== type) {
            if (tmp(1935).ComponentType.TEXT_DISPLAY === type) {
              const obj2 = {};
              const merged3 = Object.assign(component);
              return jsx(importDefault(15038), {}, arg1);
            } else if (tmp(1935).ComponentType.LABEL === type) {
              const obj3 = {};
              const merged4 = Object.assign(component);
              obj3.renderComponent = renderComponent;
              return jsx(importDefault(16473), {}, arg1);
            } else if (tmp(1935).ComponentType.FILE_UPLOAD === type) {
              const obj4 = {};
              const merged5 = Object.assign(component);
              return jsx(importDefault(16474), {}, arg1);
            } else if (tmp(1935).ComponentType.RADIO_GROUP === type) {
              const obj5 = {};
              const merged6 = Object.assign(component);
              return jsx(importDefault(16476), {}, arg1);
            } else if (tmp(1935).ComponentType.CHECKBOX_GROUP === type) {
              const obj6 = {};
              const merged7 = Object.assign(component);
              return jsx(importDefault(16477), {}, arg1);
            } else if (tmp(1935).ComponentType.CHECKBOX === type) {
              obj = {};
              const merged8 = Object.assign(component);
              return jsx(importDefault(16478), {}, arg1);
            }
          }
        }
      }
    }
    const obj7 = {};
    const merged9 = Object.assign(component);
    return jsx(importDefault(15037), {}, arg1);
  }
}
const result = require("PermissionOverwriteType").fileFinishedImporting("modules/interaction_components/native/renderComponents.tsx");

export { renderComponents };
