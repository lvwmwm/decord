// Module ID: 17802
// Function ID: 17803
// Name: renderComponents
// Dependencies: [19, 21, 1978, 17803, 16028, 17804, 16031, 16032, 17805, 17806, 17808, 17809, 17810, 2]

// Module 17802 (renderComponents)
import Server from "Server" /* 1978 */;
import StringSelectActionComponentDefault from "StringSelectActionComponent" /* 16028 */;
import SearchableSelectActionComponentDefault from "SearchableSelectActionComponent" /* 16031 */;
import TextDisplayComponentDefault from "TextDisplayComponent" /* 16032 */;
import ActionRowLayoutComponentDefault from "ActionRowLayoutComponent" /* 17803 */;
import TextInputActionComponentDefault from "TextInputActionComponent" /* 17804 */;
import LabelLayoutComponentDefault from "LabelLayoutComponent" /* 17805 */;
import FileUploadActionComponentDefault from "FileUploadActionComponent" /* 17806 */;
import RadioGroupActionComponentDefault from "RadioGroupActionComponent" /* 17808 */;
import CheckboxGroupActionComponentDefault from "CheckboxGroupActionComponent" /* 17809 */;
import CheckboxActionComponentDefault from "CheckboxActionComponent" /* 17810 */;
import noop from "module_19" /* 19 */;

require = fn;
function renderComponents(components) {
  return components.map((item, index) => renderComponent(item, index.toString()));
}
function renderComponent(component, arg1) {
  const type = component.type;
  if (Server.ComponentType.ACTION_ROW === type) {
    const obj2 = {};
    const merged = Object.assign(component);
    obj2.renderComponents = renderComponents;
    return jsx(ActionRowLayoutComponentDefault, {}, arg1);
  } else if (tmp(1978).ComponentType.STRING_SELECT === type) {
    const obj3 = {};
    const merged1 = Object.assign(component);
    return jsx(StringSelectActionComponentDefault, {}, arg1);
  } else if (tmp(1978).ComponentType.TEXT_INPUT === type) {
    const obj4 = {};
    const merged2 = Object.assign(component);
    return jsx(TextInputActionComponentDefault, {}, arg1);
  } else {
    if (tmp(1978).ComponentType.USER_SELECT !== type) {
      if (tmp(1978).ComponentType.ROLE_SELECT !== type) {
        if (tmp(1978).ComponentType.MENTIONABLE_SELECT !== type) {
          if (tmp(1978).ComponentType.CHANNEL_SELECT !== type) {
            if (tmp(1978).ComponentType.TEXT_DISPLAY === type) {
              const obj5 = {};
              const merged3 = Object.assign(component);
              return jsx(TextDisplayComponentDefault, {}, arg1);
            } else if (tmp(1978).ComponentType.LABEL === type) {
              const obj6 = {};
              const merged4 = Object.assign(component);
              obj6.renderComponent = renderComponent;
              return jsx(LabelLayoutComponentDefault, {}, arg1);
            } else if (tmp(1978).ComponentType.FILE_UPLOAD === type) {
              const obj7 = {};
              const merged5 = Object.assign(component);
              return jsx(FileUploadActionComponentDefault, {}, arg1);
            } else if (tmp(1978).ComponentType.RADIO_GROUP === type) {
              const obj8 = {};
              const merged6 = Object.assign(component);
              return jsx(RadioGroupActionComponentDefault, {}, arg1);
            } else if (tmp(1978).ComponentType.CHECKBOX_GROUP === type) {
              const obj9 = {};
              const merged7 = Object.assign(component);
              return jsx(CheckboxGroupActionComponentDefault, {}, arg1);
            } else if (tmp(1978).ComponentType.CHECKBOX === type) {
              const obj = {};
              const merged8 = Object.assign(component);
              return jsx(CheckboxActionComponentDefault, {}, arg1);
            }
          }
        }
      }
    }
    const obj10 = {};
    const merged9 = Object.assign(component);
    return jsx(SearchableSelectActionComponentDefault, {}, arg1);
  }
}
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/interaction_components/native/renderComponents.tsx");

export { renderComponents };
