// Module ID: 16144
// Function ID: 125098
// Name: renderComponents
// Dependencies: [31, 33, 1882, 16145, 14742, 16146, 14745, 14746, 16147, 16148, 16150, 16151, 16152, 2]

// Module 16144 (renderComponents)
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
    return jsx(importDefault(16145), {}, arg1);
  } else if (require(1882) /* PermissionOverwriteType */.ComponentType.STRING_SELECT === type) {
    obj = {};
    const merged1 = Object.assign(component);
    return jsx(importDefault(14742), {}, arg1);
  } else if (require(1882) /* PermissionOverwriteType */.ComponentType.TEXT_INPUT === type) {
    const obj1 = {};
    const merged2 = Object.assign(component);
    return jsx(importDefault(16146), {}, arg1);
  } else {
    if (require(1882) /* PermissionOverwriteType */.ComponentType.USER_SELECT !== type) {
      if (require(1882) /* PermissionOverwriteType */.ComponentType.ROLE_SELECT !== type) {
        if (require(1882) /* PermissionOverwriteType */.ComponentType.MENTIONABLE_SELECT !== type) {
          if (require(1882) /* PermissionOverwriteType */.ComponentType.CHANNEL_SELECT !== type) {
            if (require(1882) /* PermissionOverwriteType */.ComponentType.TEXT_DISPLAY === type) {
              const obj2 = {};
              const merged3 = Object.assign(component);
              return jsx(importDefault(14746), {}, arg1);
            } else if (require(1882) /* PermissionOverwriteType */.ComponentType.LABEL === type) {
              const obj3 = {};
              const merged4 = Object.assign(component);
              obj3["renderComponent"] = renderComponent;
              return jsx(importDefault(16147), {}, arg1);
            } else if (require(1882) /* PermissionOverwriteType */.ComponentType.FILE_UPLOAD === type) {
              const obj4 = {};
              const merged5 = Object.assign(component);
              return jsx(importDefault(16148), {}, arg1);
            } else if (require(1882) /* PermissionOverwriteType */.ComponentType.RADIO_GROUP === type) {
              const obj5 = {};
              const merged6 = Object.assign(component);
              return jsx(importDefault(16150), {}, arg1);
            } else if (require(1882) /* PermissionOverwriteType */.ComponentType.CHECKBOX_GROUP === type) {
              const obj6 = {};
              const merged7 = Object.assign(component);
              return jsx(importDefault(16151), {}, arg1);
            } else if (require(1882) /* PermissionOverwriteType */.ComponentType.CHECKBOX === type) {
              obj = {};
              const merged8 = Object.assign(component);
              return jsx(importDefault(16152), {}, arg1);
            }
          }
        }
      }
    }
    const obj7 = {};
    const merged9 = Object.assign(component);
    return jsx(importDefault(14745), {}, arg1);
  }
}
const result = require("PermissionOverwriteType").fileFinishedImporting("modules/interaction_components/native/renderComponents.tsx");

export { renderComponents };
