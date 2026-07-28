// Module ID: 16183
// Function ID: 125254
// Name: renderComponents
// Dependencies: [31, 33, 1882, 16184, 14786, 16185, 14789, 14790, 16186, 16187, 16189, 16190, 16191, 2]

// Module 16183 (renderComponents)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
function renderComponents(components) {
  return components.map((arg0, arg1) => outer1_5(arg0, arg1.toString()));
}
function renderComponent(component, arg1) {
  const type = component.type;
  if (require(1882) /* PermissionOverwriteType */.ComponentType.ACTION_ROW === type) {
    let obj = {};
    const merged = Object.assign(component);
    obj["renderComponents"] = renderComponents;
    return jsx(importDefault(16184), {}, arg1);
  } else if (require(1882) /* PermissionOverwriteType */.ComponentType.STRING_SELECT === type) {
    obj = {};
    const merged1 = Object.assign(component);
    return jsx(importDefault(14786), {}, arg1);
  } else if (require(1882) /* PermissionOverwriteType */.ComponentType.TEXT_INPUT === type) {
    const obj1 = {};
    const merged2 = Object.assign(component);
    return jsx(importDefault(16185), {}, arg1);
  } else {
    if (require(1882) /* PermissionOverwriteType */.ComponentType.USER_SELECT !== type) {
      if (require(1882) /* PermissionOverwriteType */.ComponentType.ROLE_SELECT !== type) {
        if (require(1882) /* PermissionOverwriteType */.ComponentType.MENTIONABLE_SELECT !== type) {
          if (require(1882) /* PermissionOverwriteType */.ComponentType.CHANNEL_SELECT !== type) {
            if (require(1882) /* PermissionOverwriteType */.ComponentType.TEXT_DISPLAY === type) {
              const obj2 = {};
              const merged3 = Object.assign(component);
              return jsx(importDefault(14790), {}, arg1);
            } else if (require(1882) /* PermissionOverwriteType */.ComponentType.LABEL === type) {
              const obj3 = {};
              const merged4 = Object.assign(component);
              obj3["renderComponent"] = renderComponent;
              return jsx(importDefault(16186), {}, arg1);
            } else if (require(1882) /* PermissionOverwriteType */.ComponentType.FILE_UPLOAD === type) {
              const obj4 = {};
              const merged5 = Object.assign(component);
              return jsx(importDefault(16187), {}, arg1);
            } else if (require(1882) /* PermissionOverwriteType */.ComponentType.RADIO_GROUP === type) {
              const obj5 = {};
              const merged6 = Object.assign(component);
              return jsx(importDefault(16189), {}, arg1);
            } else if (require(1882) /* PermissionOverwriteType */.ComponentType.CHECKBOX_GROUP === type) {
              const obj6 = {};
              const merged7 = Object.assign(component);
              return jsx(importDefault(16190), {}, arg1);
            } else if (require(1882) /* PermissionOverwriteType */.ComponentType.CHECKBOX === type) {
              obj = {};
              const merged8 = Object.assign(component);
              return jsx(importDefault(16191), {}, arg1);
            }
          }
        }
      }
    }
    const obj7 = {};
    const merged9 = Object.assign(component);
    return jsx(importDefault(14789), {}, arg1);
  }
}
const result = require("PermissionOverwriteType").fileFinishedImporting("modules/interaction_components/native/renderComponents.tsx");

export { renderComponents };
