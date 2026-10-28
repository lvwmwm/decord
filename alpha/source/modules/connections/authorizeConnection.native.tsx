// Module ID: 9643
// Function ID: 9644
// Name: authorizeConnection
// Dependencies: [7312, 1084, 584, 5246, 9644, 14317, 14328, 6707, 14339, 1999, 6537, 14341, 8894, 5696, 7310, 2]
// Exports: default

// Module 9643 (authorizeConnection)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1084 */;
import LinkingDefault from "Linking" /* 5696 */;
import Constants2 from "Constants" /* 7312 */;
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
    const obj15 = overrideUrl(5246);
    obj15.hideActionSheet();
    const items = [_location];
    const obj16 = overrideUrl(9644);
    obj16.showModal(items);
    const tmp23 = overrideUrl;
    if (null != onClose) {
      const handleModalClose = handleModalClose6;
      const tmp23Result = tmp23(584);
      const subscription = tmp23Result.subscribe("MODAL_POP", handleModalClose);
    }
  } else {
    if (platformType !== tmp.PLAYSTATION) {
      if (platformType !== tmp.PLAYSTATION_STAGING) {
        if (platformType === tmp.CRUNCHYROLL) {
          const obj11 = overrideUrl(5246);
          obj11.hideActionSheet();
          const items1 = [_location];
          const obj12 = overrideUrl(14328);
          obj12.showModal(items1);
          const tmp15 = overrideUrl;
          if (null != onClose) {
            const handleModalClose4 = handleModalClose6;
            const tmp15Result = tmp15(584);
            const subscription1 = tmp15Result.subscribe("MODAL_POP", handleModalClose4);
          }
        } else if (platformType === tmp.DOMAIN) {
          const obj8 = overrideUrl(5246);
          obj8.hideActionSheet();
          let obj = { locationStack: items2 };
          items2 = [_location];
          const obj9 = overrideUrl(6707);
          obj9.pushLazy(onClose(1999)(14339, dependencyMap.paths), obj);
          const tmp10 = overrideUrl;
          if (null != onClose) {
            const handleModalClose3 = handleModalClose6;
            const tmp10Result = tmp10(584);
            const subscription2 = tmp10Result.subscribe("MODAL_POP", handleModalClose3);
          }
        } else {
          const obj18 = overrideUrl(6537);
          const value = obj18.get(platformType);
          let isFederated;
          const tmp29 = dependencyMap;
          if (value != null) {
            isFederated = value.isFederated;
          }
          if (true === isFederated) {
            const tmp28Result = overrideUrl(5246);
            tmp28Result.hideActionSheet();
            const obj2 = { platformType, location: _location, successRedirect };
            const tmp28Result4 = overrideUrl(6707);
            tmp28Result4.pushLazy(onClose(1999)(14341, tmp29.paths), obj2);
            if (null != onClose) {
              const handleModalClose2 = handleModalClose6;
              const tmp28Result5 = overrideUrl(584);
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
                const obj3 = onClose(8894);
                obj3.handleClick(obj4);
              }
            }
            const obj5 = { location: _location, successRedirect };
            const tmp28Result6 = overrideUrl(7310);
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
    const obj13 = overrideUrl(5246);
    obj13.hideActionSheet();
    const items3 = [_location];
    const obj14 = overrideUrl(14317);
    obj14.showModal(items3, platformType);
    const tmp19 = overrideUrl;
    if (null != onClose) {
      const handleModalClose5 = handleModalClose6;
      const tmp19Result = tmp19(584);
      const subscription4 = tmp19Result.subscribe("MODAL_POP", handleModalClose5);
    }
  }
};
