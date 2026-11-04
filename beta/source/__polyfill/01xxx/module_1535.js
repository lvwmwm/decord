// Module ID: 1535
// Function ID: 1536
// Dependencies: [19, 1536, 1544, 1545]
// Exports: createNavigatorFactory

// Module 1535
import react from "react" /* 19 */;


export function createNavigatorFactory(AccessibleNativeStackNavigator) {
  let Navigator = AccessibleNativeStackNavigator;
  let str = AccessibleNativeStackNavigator.displayName;
  if (str == null) {
    str = AccessibleNativeStackNavigator.name;
  }
  if (str == null) {
    str = "Navigator";
  }
  return function createNavigator(config) {
    Navigator = config;
    if (null != config) {
      const obj2 = { Navigator, Screen: Navigator(str[2]).Screen, Group: Navigator(str[3]).Group, config };
      const createComponentForStaticNavigation = Navigator(str[1]).createComponentForStaticNavigation;
      Navigator(str[1]);
      Navigator = createComponentForStaticNavigation(obj2, Navigator);
      return {
        config,
        with: (IMAGE_ONLY_ANSWERS) => {
            config = IMAGE_ONLY_ANSWERS;
            class WithComponent {
              constructor() {
                return <IMAGE_ONLY_ANSWERS Navigator={Navigator} />;
              }
            }
            WithComponent.displayName = "" + Navigator + "With";
            return {
              config,
              getComponent() {
                return WithComponent;
              }
            };
          },
        getComponent() {
            return Navigator;
          }
      };
    } else {
      const obj = { Navigator, Screen: Navigator(str[2]).Screen, Group: Navigator(str[3]).Group };
      return obj;
    }
  };
}
