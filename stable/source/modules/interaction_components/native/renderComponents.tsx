// Module ID: 17507
// Function ID: 17508
// Name: renderComponents
// Dependencies: [19, 21, 1894, 17508, 15802, 17509, 15805, 15806, 17510, 17511, 17513, 17514, 17515, 2]

// Module 17507 (renderComponents)
import Server from "Server" /* 1894 */;
import StringSelectActionComponentDefault from "StringSelectActionComponent" /* 15802 */;
import SearchableSelectActionComponentDefault from "SearchableSelectActionComponent" /* 15805 */;
import TextDisplayComponentDefault from "TextDisplayComponent" /* 15806 */;
import ActionRowLayoutComponentDefault from "ActionRowLayoutComponent" /* 17508 */;
import TextInputActionComponentDefault from "TextInputActionComponent" /* 17509 */;
import LabelLayoutComponentDefault from "LabelLayoutComponent" /* 17510 */;
import FileUploadActionComponentDefault from "FileUploadActionComponent" /* 17511 */;
import RadioGroupActionComponentDefault from "RadioGroupActionComponent" /* 17513 */;
import CheckboxGroupActionComponentDefault from "CheckboxGroupActionComponent" /* 17514 */;
import CheckboxActionComponentDefault from "CheckboxActionComponent" /* 17515 */;
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
  } else if (tmp(1894).ComponentType.STRING_SELECT === type) {
    const obj3 = {};
    const merged1 = Object.assign(component);
    return jsx(StringSelectActionComponentDefault, {}, arg1);
  } else if (tmp(1894).ComponentType.TEXT_INPUT === type) {
    const obj4 = {};
    const merged2 = Object.assign(component);
    return jsx(TextInputActionComponentDefault, {}, arg1);
  } else {
    if (tmp(1894).ComponentType.USER_SELECT !== type) {
      if (tmp(1894).ComponentType.ROLE_SELECT !== type) {
        if (tmp(1894).ComponentType.MENTIONABLE_SELECT !== type) {
          if (tmp(1894).ComponentType.CHANNEL_SELECT !== type) {
            if (tmp(1894).ComponentType.TEXT_DISPLAY === type) {
              const obj5 = {};
              const merged3 = Object.assign(component);
              return jsx(TextDisplayComponentDefault, {}, arg1);
            } else if (tmp(1894).ComponentType.LABEL === type) {
              const obj6 = {};
              const merged4 = Object.assign(component);
              obj6.renderComponent = renderComponent;
              return jsx(LabelLayoutComponentDefault, {}, arg1);
            } else if (tmp(1894).ComponentType.FILE_UPLOAD === type) {
              const obj7 = {};
              const merged5 = Object.assign(component);
              return jsx(FileUploadActionComponentDefault, {}, arg1);
            } else if (tmp(1894).ComponentType.RADIO_GROUP === type) {
              const obj8 = {};
              const merged6 = Object.assign(component);
              return jsx(RadioGroupActionComponentDefault, {}, arg1);
            } else if (tmp(1894).ComponentType.CHECKBOX_GROUP === type) {
              const obj9 = {};
              const merged7 = Object.assign(component);
              return jsx(CheckboxGroupActionComponentDefault, {}, arg1);
            } else if (tmp(1894).ComponentType.CHECKBOX === type) {
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
