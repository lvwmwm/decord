// Module ID: 20117
// Function ID: 20118
// Name: renderComponents
// Dependencies: [19, 21, 2116, 20118, 18244, 20119, 18247, 18248, 20120, 20121, 20123, 20124, 20125, 2]

// Module 20117 (renderComponents)
import Fragment from "Fragment" /* 21 */;
import Server from "Server" /* 2116 */;
import StringSelectActionComponentDefault from "StringSelectActionComponent" /* 18244 */;
import SearchableSelectActionComponentDefault from "SearchableSelectActionComponent" /* 18247 */;
import TextDisplayComponentDefault from "TextDisplayComponent" /* 18248 */;
import ActionRowLayoutComponentDefault from "ActionRowLayoutComponent" /* 20118 */;
import TextInputActionComponentDefault from "TextInputActionComponent" /* 20119 */;
import LabelLayoutComponentDefault from "LabelLayoutComponent" /* 20120 */;
import FileUploadActionComponentDefault from "FileUploadActionComponent" /* 20121 */;
import RadioGroupActionComponentDefault from "RadioGroupActionComponent" /* 20123 */;
import CheckboxGroupActionComponentDefault from "CheckboxGroupActionComponent" /* 20124 */;
import CheckboxActionComponentDefault from "CheckboxActionComponent" /* 20125 */;
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
