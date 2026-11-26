// Module ID: 1540
// Function ID: 1541
// Dependencies: [19, 1541, 1549, 1550]
// Exports: createNavigatorFactory

// Module 1540
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
        with: (arg0) => {
            let closure_0;
            config = arg0;
            class WithComponent {
              constructor() {
                return <closure_0 Navigator={Navigator} />;
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
