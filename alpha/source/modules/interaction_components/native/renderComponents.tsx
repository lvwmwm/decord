// Module ID: 20275
// Function ID: 20276
// Name: renderComponents
// Dependencies: [19, 21, 2119, 20276, 18362, 20277, 18365, 18366, 20278, 20279, 20281, 20282, 20283, 2]

// Module 20275 (renderComponents)
import Fragment from "Fragment" /* 21 */;
import Server from "Server" /* 2119 */;
import StringSelectActionComponentDefault from "StringSelectActionComponent" /* 18362 */;
import SearchableSelectActionComponentDefault from "SearchableSelectActionComponent" /* 18365 */;
import TextDisplayComponentDefault from "TextDisplayComponent" /* 18366 */;
import ActionRowLayoutComponentDefault from "ActionRowLayoutComponent" /* 20276 */;
import TextInputActionComponentDefault from "TextInputActionComponent" /* 20277 */;
import LabelLayoutComponentDefault from "LabelLayoutComponent" /* 20278 */;
import FileUploadActionComponentDefault from "FileUploadActionComponent" /* 20279 */;
import RadioGroupActionComponentDefault from "RadioGroupActionComponent" /* 20281 */;
import CheckboxGroupActionComponentDefault from "CheckboxGroupActionComponent" /* 20282 */;
import CheckboxActionComponentDefault from "CheckboxActionComponent" /* 20283 */;
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
