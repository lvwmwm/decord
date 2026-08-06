// Module ID: 16358
// Function ID: 16359
// Name: renderComponents
// Dependencies: [19, 21, 1935, 16359, 14946, 16360, 14949, 14950, 16361, 16362, 16364, 16365, 16366, 2]

// Module 16358 (renderComponents)
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
    return jsx(importDefault(16359), {}, arg1);
  } else if (tmp(1935).ComponentType.STRING_SELECT === type) {
    obj = {};
    const merged1 = Object.assign(component);
    return jsx(importDefault(14946), {}, arg1);
  } else if (tmp(1935).ComponentType.TEXT_INPUT === type) {
    const obj1 = {};
    const merged2 = Object.assign(component);
    return jsx(importDefault(16360), {}, arg1);
  } else {
    if (tmp(1935).ComponentType.USER_SELECT !== type) {
      if (tmp(1935).ComponentType.ROLE_SELECT !== type) {
        if (tmp(1935).ComponentType.MENTIONABLE_SELECT !== type) {
          if (tmp(1935).ComponentType.CHANNEL_SELECT !== type) {
            if (tmp(1935).ComponentType.TEXT_DISPLAY === type) {
              const obj2 = {};
              const merged3 = Object.assign(component);
              return jsx(importDefault(14950), {}, arg1);
            } else if (tmp(1935).ComponentType.LABEL === type) {
              const obj3 = {};
              const merged4 = Object.assign(component);
              obj3.renderComponent = renderComponent;
              return jsx(importDefault(16361), {}, arg1);
            } else if (tmp(1935).ComponentType.FILE_UPLOAD === type) {
              const obj4 = {};
              const merged5 = Object.assign(component);
              return jsx(importDefault(16362), {}, arg1);
            } else if (tmp(1935).ComponentType.RADIO_GROUP === type) {
              const obj5 = {};
              const merged6 = Object.assign(component);
              return jsx(importDefault(16364), {}, arg1);
            } else if (tmp(1935).ComponentType.CHECKBOX_GROUP === type) {
              const obj6 = {};
              const merged7 = Object.assign(component);
              return jsx(importDefault(16365), {}, arg1);
            } else if (tmp(1935).ComponentType.CHECKBOX === type) {
              obj = {};
              const merged8 = Object.assign(component);
              return jsx(importDefault(16366), {}, arg1);
            }
          }
        }
      }
    }
    const obj7 = {};
    const merged9 = Object.assign(component);
    return jsx(importDefault(14949), {}, arg1);
  }
}
const result = require("PermissionOverwriteType").fileFinishedImporting("modules/interaction_components/native/renderComponents.tsx");

export { renderComponents };
