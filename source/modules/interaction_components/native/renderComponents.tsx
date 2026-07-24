// Module ID: 16121
// Function ID: 124883
// Name: renderComponents
// Dependencies: [31, 33, 1881, 16122, 14730, 16123, 14733, 14734, 16124, 16125, 16127, 16128, 16129, 2]

// Module 16121 (renderComponents)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
function renderComponents(components) {
  return components.map((arg0, arg1) => outer1_5(arg0, arg1.toString()));
}
function renderComponent(component, arg1) {
  const type = component.type;
  if (require(1881) /* PermissionOverwriteType */.ComponentType.ACTION_ROW === type) {
    let obj = {};
    const merged = Object.assign(component);
    obj["renderComponents"] = renderComponents;
    return jsx(importDefault(16122), {}, arg1);
  } else if (require(1881) /* PermissionOverwriteType */.ComponentType.STRING_SELECT === type) {
    obj = {};
    const merged1 = Object.assign(component);
    return jsx(importDefault(14730), {}, arg1);
  } else if (require(1881) /* PermissionOverwriteType */.ComponentType.TEXT_INPUT === type) {
    const obj1 = {};
    const merged2 = Object.assign(component);
    return jsx(importDefault(16123), {}, arg1);
  } else {
    if (require(1881) /* PermissionOverwriteType */.ComponentType.USER_SELECT !== type) {
      if (require(1881) /* PermissionOverwriteType */.ComponentType.ROLE_SELECT !== type) {
        if (require(1881) /* PermissionOverwriteType */.ComponentType.MENTIONABLE_SELECT !== type) {
          if (require(1881) /* PermissionOverwriteType */.ComponentType.CHANNEL_SELECT !== type) {
            if (require(1881) /* PermissionOverwriteType */.ComponentType.TEXT_DISPLAY === type) {
              const obj2 = {};
              const merged3 = Object.assign(component);
              return jsx(importDefault(14734), {}, arg1);
            } else if (require(1881) /* PermissionOverwriteType */.ComponentType.LABEL === type) {
              const obj3 = {};
              const merged4 = Object.assign(component);
              obj3["renderComponent"] = renderComponent;
              return jsx(importDefault(16124), {}, arg1);
            } else if (require(1881) /* PermissionOverwriteType */.ComponentType.FILE_UPLOAD === type) {
              const obj4 = {};
              const merged5 = Object.assign(component);
              return jsx(importDefault(16125), {}, arg1);
            } else if (require(1881) /* PermissionOverwriteType */.ComponentType.RADIO_GROUP === type) {
              const obj5 = {};
              const merged6 = Object.assign(component);
              return jsx(importDefault(16127), {}, arg1);
            } else if (require(1881) /* PermissionOverwriteType */.ComponentType.CHECKBOX_GROUP === type) {
              const obj6 = {};
              const merged7 = Object.assign(component);
              return jsx(importDefault(16128), {}, arg1);
            } else if (require(1881) /* PermissionOverwriteType */.ComponentType.CHECKBOX === type) {
              obj = {};
              const merged8 = Object.assign(component);
              return jsx(importDefault(16129), {}, arg1);
            }
          }
        }
      }
    }
    const obj7 = {};
    const merged9 = Object.assign(component);
    return jsx(importDefault(14733), {}, arg1);
  }
}
const result = require("PermissionOverwriteType").fileFinishedImporting("modules/interaction_components/native/renderComponents.tsx");

export { renderComponents };
