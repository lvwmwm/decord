// Module ID: 18074
// Function ID: 18075
// Name: renderComponents
// Dependencies: [19, 21, 1998, 18075, 16062, 18076, 16065, 16066, 18077, 18078, 18080, 18081, 18082, 2]

// Module 18074 (renderComponents)
import Fragment from "Fragment" /* 21 */;
import Server from "Server" /* 1998 */;
import StringSelectActionComponentDefault from "StringSelectActionComponent" /* 16062 */;
import SearchableSelectActionComponentDefault from "SearchableSelectActionComponent" /* 16065 */;
import TextDisplayComponentDefault from "TextDisplayComponent" /* 16066 */;
import ActionRowLayoutComponentDefault from "ActionRowLayoutComponent" /* 18075 */;
import TextInputActionComponentDefault from "TextInputActionComponent" /* 18076 */;
import LabelLayoutComponentDefault from "LabelLayoutComponent" /* 18077 */;
import FileUploadActionComponentDefault from "FileUploadActionComponent" /* 18078 */;
import RadioGroupActionComponentDefault from "RadioGroupActionComponent" /* 18080 */;
import CheckboxGroupActionComponentDefault from "CheckboxGroupActionComponent" /* 18081 */;
import CheckboxActionComponentDefault from "CheckboxActionComponent" /* 18082 */;
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
