// Module ID: 19897
// Function ID: 19898
// Name: renderComponents
// Dependencies: [19, 21, 2116, 19898, 18046, 19899, 18049, 18050, 19900, 19901, 19903, 19904, 19905, 2]

// Module 19897 (renderComponents)
import Fragment from "Fragment" /* 21 */;
import Server from "Server" /* 2116 */;
import StringSelectActionComponentDefault from "StringSelectActionComponent" /* 18046 */;
import SearchableSelectActionComponentDefault from "SearchableSelectActionComponent" /* 18049 */;
import TextDisplayComponentDefault from "TextDisplayComponent" /* 18050 */;
import ActionRowLayoutComponentDefault from "ActionRowLayoutComponent" /* 19898 */;
import TextInputActionComponentDefault from "TextInputActionComponent" /* 19899 */;
import LabelLayoutComponentDefault from "LabelLayoutComponent" /* 19900 */;
import FileUploadActionComponentDefault from "FileUploadActionComponent" /* 19901 */;
import RadioGroupActionComponentDefault from "RadioGroupActionComponent" /* 19903 */;
import CheckboxGroupActionComponentDefault from "CheckboxGroupActionComponent" /* 19904 */;
import CheckboxActionComponentDefault from "CheckboxActionComponent" /* 19905 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

function renderComponents(components) {
  return components.map((item, index) => renderComponent(item, index.toString()));
}
function renderComponent(component, arg1) {
  const type = component.type;
  if (Server.ComponentType.ACTION_ROW === type) {
    ActionRowLayoutComponentDefault;
    const merged = Object.assign(component);
    return <tmp60 key={arg1} renderComponents={renderComponents} />;
  } else if (Server.ComponentType.STRING_SELECT === type) {
    StringSelectActionComponentDefault;
    const merged1 = Object.assign(component);
    return <tmp54 key={arg1} />;
  } else if (Server.ComponentType.TEXT_INPUT === type) {
    TextInputActionComponentDefault;
    const merged2 = Object.assign(component);
    return <tmp48 key={arg1} />;
  } else {
    if (Server.ComponentType.USER_SELECT !== type) {
      if (Server.ComponentType.ROLE_SELECT !== type) {
        if (Server.ComponentType.MENTIONABLE_SELECT !== type) {
          if (Server.ComponentType.CHANNEL_SELECT !== type) {
            if (Server.ComponentType.TEXT_DISPLAY === type) {
              TextDisplayComponentDefault;
              const merged3 = Object.assign(component);
              return <tmp36 key={arg1} />;
            } else if (Server.ComponentType.LABEL === type) {
              LabelLayoutComponentDefault;
              const merged4 = Object.assign(component);
              return <tmp29 key={arg1} renderComponent={renderComponent} />;
            } else if (Server.ComponentType.FILE_UPLOAD === type) {
              FileUploadActionComponentDefault;
              const merged5 = Object.assign(component);
              return <tmp23 key={arg1} />;
            } else if (Server.ComponentType.RADIO_GROUP === type) {
              RadioGroupActionComponentDefault;
              const merged6 = Object.assign(component);
              return <tmp17 key={arg1} />;
            } else if (Server.ComponentType.CHECKBOX_GROUP === type) {
              CheckboxGroupActionComponentDefault;
              const merged7 = Object.assign(component);
              return <tmp11 key={arg1} />;
            } else if (Server.ComponentType.CHECKBOX === type) {
              CheckboxActionComponentDefault;
              const merged8 = Object.assign(component);
              return <tmp5 key={arg1} />;
            }
          }
        }
      }
    }
    SearchableSelectActionComponentDefault;
    const merged9 = Object.assign(component);
    return <tmp42 key={arg1} />;
  }
}
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/interaction_components/native/renderComponents.tsx");

export { renderComponents };
