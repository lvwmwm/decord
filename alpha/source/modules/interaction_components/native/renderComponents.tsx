// Module ID: 19370
// Function ID: 19371
// Name: renderComponents
// Dependencies: [19, 21, 1998, 19371, 17595, 19372, 17598, 17599, 19373, 19374, 19376, 19377, 19378, 2]

// Module 19370 (renderComponents)
import Fragment from "Fragment" /* 21 */;
import Server from "Server" /* 1998 */;
import StringSelectActionComponentDefault from "StringSelectActionComponent" /* 17595 */;
import SearchableSelectActionComponentDefault from "SearchableSelectActionComponent" /* 17598 */;
import TextDisplayComponentDefault from "TextDisplayComponent" /* 17599 */;
import ActionRowLayoutComponentDefault from "ActionRowLayoutComponent" /* 19371 */;
import TextInputActionComponentDefault from "TextInputActionComponent" /* 19372 */;
import LabelLayoutComponentDefault from "LabelLayoutComponent" /* 19373 */;
import FileUploadActionComponentDefault from "FileUploadActionComponent" /* 19374 */;
import RadioGroupActionComponentDefault from "RadioGroupActionComponent" /* 19376 */;
import CheckboxGroupActionComponentDefault from "CheckboxGroupActionComponent" /* 19377 */;
import CheckboxActionComponentDefault from "CheckboxActionComponent" /* 19378 */;
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
