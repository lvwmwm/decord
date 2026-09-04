// Module ID: 17311
// Function ID: 17312
// Name: renderComponents
// Dependencies: [19, 21, 1954, 17312, 15635, 17313, 15638, 15639, 17314, 17315, 17317, 17318, 17319, 2]

// Module 17311 (renderComponents)
import noopAll from "noop" /* 19 */;
import PermissionOverwriteType from "PermissionOverwriteType" /* 1954 */;
import StringSelectActionComponentDefault from "StringSelectActionComponent" /* 15635 */;
import SearchableSelectActionComponentDefault from "SearchableSelectActionComponent" /* 15638 */;
import TextDisplayComponentDefault from "TextDisplayComponent" /* 15639 */;
import ActionRowLayoutComponentDefault from "ActionRowLayoutComponent" /* 17312 */;
import _modDef17313 from "module_17313" /* 17313 */;
import LabelLayoutComponentDefault from "LabelLayoutComponent" /* 17314 */;
import MainAreaCanUploadDefault from "MainAreaCanUpload" /* 17315 */;
import _modDef17317 from "module_17317" /* 17317 */;
import _modDef17318 from "module_17318" /* 17318 */;
import _modDef17319 from "module_17319" /* 17319 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
function renderComponents(components) {
  return components.map((arg0, arg1) => callback(arg0, arg1.toString()));
}
function renderComponent(component, arg1) {
  const type = component.type;
  if (PermissionOverwriteType.ComponentType.ACTION_ROW === type) {
    let obj = {};
    const merged = Object.assign(component);
    obj.renderComponents = renderComponents;
    return jsx(ActionRowLayoutComponentDefault, {}, arg1);
  } else if (tmp(1954).ComponentType.STRING_SELECT === type) {
    obj = {};
    const merged1 = Object.assign(component);
    return jsx(StringSelectActionComponentDefault, {}, arg1);
  } else if (tmp(1954).ComponentType.TEXT_INPUT === type) {
    obj1 = {};
    const merged2 = Object.assign(component);
    return jsx(_modDef17313, {}, arg1);
  } else {
    if (tmp(1954).ComponentType.USER_SELECT !== type) {
      if (tmp(1954).ComponentType.ROLE_SELECT !== type) {
        if (tmp(1954).ComponentType.MENTIONABLE_SELECT !== type) {
          if (tmp(1954).ComponentType.CHANNEL_SELECT !== type) {
            if (tmp(1954).ComponentType.TEXT_DISPLAY === type) {
              const obj2 = {};
              const merged3 = Object.assign(component);
              return jsx(TextDisplayComponentDefault, {}, arg1);
            } else if (tmp(1954).ComponentType.LABEL === type) {
              const obj3 = {};
              const merged4 = Object.assign(component);
              obj3.renderComponent = renderComponent;
              return jsx(LabelLayoutComponentDefault, {}, arg1);
            } else if (tmp(1954).ComponentType.FILE_UPLOAD === type) {
              const obj4 = {};
              const merged5 = Object.assign(component);
              return jsx(MainAreaCanUploadDefault, {}, arg1);
            } else if (tmp(1954).ComponentType.RADIO_GROUP === type) {
              const obj5 = {};
              const merged6 = Object.assign(component);
              return jsx(_modDef17317, {}, arg1);
            } else if (tmp(1954).ComponentType.CHECKBOX_GROUP === type) {
              const obj6 = {};
              const merged7 = Object.assign(component);
              return jsx(_modDef17318, {}, arg1);
            } else if (tmp(1954).ComponentType.CHECKBOX === type) {
              obj = {};
              const merged8 = Object.assign(component);
              return jsx(_modDef17319, {}, arg1);
            }
          }
        }
      }
    }
    const obj7 = {};
    const merged9 = Object.assign(component);
    return jsx(SearchableSelectActionComponentDefault, {}, arg1);
  }
}
noopAll;
const result = require("set").fileFinishedImporting("modules/interaction_components/native/renderComponents.tsx");

export { renderComponents };
