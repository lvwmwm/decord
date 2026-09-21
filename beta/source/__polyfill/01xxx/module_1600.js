// Module ID: 1600
// Function ID: 1601
// Dependencies: [19, 17, 1601, 1491]
// Exports: Link

// Module 1600
import BaseNavigationContainer from "BaseNavigationContainer" /* 1491 */;
import clone from "clone" /* 1601 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Platform, Text: c3 } = get_ActivityIndicator);

export const Link = function Link(arg0) {
  ({ screen, params, action, href, style } = arg0);
  const merged = Object.assign(arg0, Object.assign({ screen: 0, params: 0, action: 0, href: 0, style: 0, target: 0 }));
  const linkProps = clone.useLinkProps({ screen, params, action, href });
  const theme = BaseNavigationContainer.useTheme();
  const obj3 = {};
  ({ colors, fonts } = theme);
  const merged1 = Object.assign(linkProps);
  const merged2 = Object.assign(merged);
  obj3.onPress = function onPress(preventDefault) {
    if (merged.disabled) {
      preventDefault.preventDefault();
      preventDefault.stopPropagation();
    } else {
      if ("onPress" in tmp) {
        const onPress = tmp.onPress;
        if (onPress != null) {
          onPress(preventDefault);
        }
      }
      if (!preventDefault.defaultPrevented) {
        linkProps.onPress(preventDefault);
      }
    }
  };
  const items = [{ color: colors.primary }, fonts.regular, style];
  obj3.style = items;
  return <React3 />;
};
