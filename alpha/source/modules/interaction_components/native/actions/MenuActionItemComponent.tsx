// Module ID: 12426
// Function ID: 12427
// Name: MenuActionItemComponent
// Dependencies: [19, 21, 8782, 6374, 5623, 2117, 12427, 6113, 12354, 5226, 7778, 2]
// Exports: default

// Module 12426 (MenuActionItemComponent)
import Fragment from "Fragment" /* 21 */;
import Server from "Server" /* 2117 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import InteractionComponentTypes from "InteractionComponentTypes" /* 6374 */;
import MaskedLinkUtils from "MaskedLinkUtils" /* 7778 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/interaction_components/native/actions/MenuActionItemComponent.tsx");

export default function MenuActionItemComponent(style) {
  let description;
  let disabled;
  let emoji;
  let isDisabled;
  let label;
  let tmp4;
  let visualState;
  style = style.style;
  ({ disabled, emoji, url: importDefault } = style);
  ({ label, description } = style);
  let obj = style(visualState[2]);
  const componentState = obj.useComponentState(style);
  visualState = componentState.visualState;
  ({ executeStateUpdate: jsx, isDisabled } = componentState);
  if (visualState === style(visualState[3]).ActionComponentState.LOADING) {
    tmp4 = jsx(tmp(tmp2[4]).Ellipsis, { variant: "secondary", size: "sm" });
  } else if (style === style(visualState[5]).MenuActionItemStyle.LINK) {
    tmp4 = jsx(tmp(tmp2[6]).LinkExternalSmallIcon, { color: "text-muted" });
  }
  const TableRow = tmp(tmp2[7]).TableRow;
  let str = "default";
  if (style === style(visualState[5]).MenuActionItemStyle.DANGER) {
    str = "danger";
  }
  if (!disabled) {
    disabled = visualState === tmp(tmp2[3]).ActionComponentState.DISABLED;
  }
  if (!disabled) {
    disabled = isDisabled;
  }
  let tmp7Result;
  if (null != emoji) {
    let tmp9 = importDefault;
    const obj3 = { emoji };
    tmp7Result = tmp7(require("ComponentEmojiIcon"), obj3);
  }
  return <TableRow label={label} subLabel={description} variant={str} disabled={disabled} icon={tmp7Result} trailing={tmp4} onPress={function handlePress() {
    if (style === Server.MenuActionItemStyle.LINK) {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      const tmp9 = null != importDefault && arr.length > 0;
      if (tmp9) {
        const obj2 = { href: importDefault, shouldConfirm: true };
        const tmpResult = MaskedLinkUtils;
        tmpResult.handleClick(obj2);
      }
    } else if (visualState === InteractionComponentTypes.ActionComponentState.NORMAL) {
      jsx();
    }
  }} />;
};
