// Module ID: 8525
// Function ID: 8526
// Name: authorizeConnection
// Dependencies: [5721, 1086, 585, 4801, 8526, 8557, 8568, 5040, 8579, 1987, 5596, 8581, 7822, 4528, 5719, 2]
// Exports: default

// Module 8525 (authorizeConnection)
import DispatcherDefault from "Dispatcher" /* 585 */;
import Constants from "Constants" /* 1086 */;
import LinkingDefault from "Linking" /* 4528 */;
import Constants2 from "Constants" /* 5721 */;
import size from "module_2" /* 2 */;

let closure_3 = Constants2.GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE;
const PlatformTypes = Constants.PlatformTypes;
const result = size.fileFinishedImporting("modules/connections/authorizeConnection.native.tsx");

export default function authorizeConnection(overrideUrl) {
  let _location;
  let items2;
  let onClose;
  let platformType;
  const handleModalClose6 = function handleModalClose() {
    if (onClose != null) {
      tmp();
    }
    const obj = DispatcherDefault;
    obj.unsubscribe("MODAL_POP", handleModalClose);
  };
  ({ platformType, location: _location, onClose } = overrideUrl);
  overrideUrl = overrideUrl.overrideUrl;
  const successRedirect = overrideUrl.successRedirect;
  const tmp = PlatformTypes;
  if (platformType === PlatformTypes.LEAGUE_OF_LEGENDS) {
    platformType = tmp.RIOT_GAMES;
  }
  if (null == _location) {
    _location = "mobile";
  }
  if (platformType === tmp.XBOX) {
    const obj15 = overrideUrl(4801);
    obj15.hideActionSheet();
    const items = [_location];
    const obj16 = overrideUrl(8526);
    obj16.showModal(items);
    const tmp23 = overrideUrl;
    if (null != onClose) {
      const handleModalClose = handleModalClose6;
      const tmp23Result = tmp23(585);
      const subscription = tmp23Result.subscribe("MODAL_POP", handleModalClose);
    }
  } else {
    if (platformType !== tmp.PLAYSTATION) {
      if (platformType !== tmp.PLAYSTATION_STAGING) {
        if (platformType === tmp.CRUNCHYROLL) {
          const obj11 = overrideUrl(4801);
          obj11.hideActionSheet();
          const items1 = [_location];
          const obj12 = overrideUrl(8568);
          obj12.showModal(items1);
          const tmp15 = overrideUrl;
          if (null != onClose) {
            const handleModalClose4 = handleModalClose6;
            const tmp15Result = tmp15(585);
            const subscription1 = tmp15Result.subscribe("MODAL_POP", handleModalClose4);
          }
        } else if (platformType === tmp.DOMAIN) {
          const obj8 = overrideUrl(4801);
          obj8.hideActionSheet();
          let obj = { locationStack: items2 };
          items2 = [_location];
          const obj9 = overrideUrl(5040);
          obj9.pushLazy(onClose(1987)(8579, dependencyMap.paths), obj);
          const tmp10 = overrideUrl;
          if (null != onClose) {
            const handleModalClose3 = handleModalClose6;
            const tmp10Result = tmp10(585);
            const subscription2 = tmp10Result.subscribe("MODAL_POP", handleModalClose3);
          }
        } else {
          const obj18 = overrideUrl(5596);
          const value = obj18.get(platformType);
          let isFederated;
          const tmp29 = dependencyMap;
          if (value != null) {
            isFederated = value.isFederated;
          }
          if (true === isFederated) {
            const tmp28Result = overrideUrl(4801);
            tmp28Result.hideActionSheet();
            const obj2 = { platformType, location: _location, successRedirect };
            const tmp28Result4 = overrideUrl(5040);
            tmp28Result4.pushLazy(onClose(1987)(8581, tmp29.paths), obj2);
            if (null != onClose) {
              const handleModalClose2 = handleModalClose6;
              const tmp28Result5 = overrideUrl(585);
              const subscription3 = tmp28Result5.subscribe("MODAL_POP", handleModalClose2);
            }
          } else {
            if (null != overrideUrl) {
              if (platformType === closure_3) {
                const obj4 = {
                  shouldConfirm: true,
                  href: overrideUrl,
                  onConfirm() {
                                  const obj = LinkingDefault;
                                  obj.openURL(overrideUrl);
                                }
                };
                const obj3 = onClose(7822);
                obj3.handleClick(obj4);
              }
            }
            const obj5 = { location: _location, successRedirect };
            const tmp28Result6 = overrideUrl(5719);
            const authorizeResult = tmp28Result6.authorize(platformType, obj5);
            authorizeResult.then((body) => {
              const url = body.body.url;
              if (null != url) {
                const obj = overrideUrl(dependencyMap[13]);
                obj.openURL(url);
              }
            });
          }
        }
      }
    }
    const obj13 = overrideUrl(4801);
    obj13.hideActionSheet();
    const items3 = [_location];
    const obj14 = overrideUrl(8557);
    obj14.showModal(items3, platformType);
    const tmp19 = overrideUrl;
    if (null != onClose) {
      const handleModalClose5 = handleModalClose6;
      const tmp19Result = tmp19(585);
      const subscription4 = tmp19Result.subscribe("MODAL_POP", handleModalClose5);
    }
  }
};
