// Module ID: 1597
// Function ID: 1598
// Dependencies: [19, 17, 1598, 1488]
// Exports: Link

// Module 1597
import BaseNavigationContainer from "BaseNavigationContainer" /* 1488 */;
import _mod1598 from "module_1598" /* 1598 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;

let Platform;
let c3;
({ Platform, Text: c3 } = react_native);

export const Link = function Link(arg0) {
  let action;
  let colors;
  let fonts;
  let href;
  let params;
  let screen;
  let style;
  ({ screen, params, action, href, style } = arg0);
  const merged = Object.assign(arg0, Object.assign({ screen: 0, params: 0, action: 0, href: 0, style: 0, target: 0 }));
  const obj = _mod1598;
  const linkProps = obj.useLinkProps({ screen, params, action, href });
  const obj2 = BaseNavigationContainer;
  const theme = obj2.useTheme();
  ({ colors, fonts } = theme);
  const createElement = react.createElement;
  const merged1 = Object.assign(linkProps);
  const merged2 = Object.assign(merged);
  const items = [, , ];
  const obj4 = { color: colors.primary };
  items[0] = obj4;
  items[1] = fonts.regular;
  items[2] = style;
  return <_false onPress={function onPress(preventDefault) {
    if (merged.disabled) {
      preventDefault.preventDefault();
      preventDefault.stopPropagation();
    } else {
      if ("onPress" in merged) {
        const onPress = tmp.onPress;
        if (onPress != null) {
          onPress(preventDefault);
        }
      }
      if (!preventDefault.defaultPrevented) {
        linkProps.onPress(preventDefault);
      }
    }
  }} style={items} />;
};
